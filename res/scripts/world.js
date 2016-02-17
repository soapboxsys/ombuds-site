var height = 450;

var projection = d3.geo.mercator()
    .center([0, 5 ])
    .scale(170)
    .rotate([-37,-5]);

var svg = d3.select("#world").append("svg")
    .attr("width", "100%")
    .attr("height", height);

var path = d3.geo.path()
    .projection(projection);

var g = svg.append("g");

// load and display the World
d3.json("/res/scripts/world-50m.json", function(error, topology) {

// load and display the cities
d3.csv("/res/scripts/cities.csv", function(error, data) {
    g.selectAll("circle")
       .data(data)
       .enter()
       .append("a")
          .attr("xlink:href", function(d) {
            return "https://www.google.com/search?q="+d.city;}
          )
       .append("circle")
       .attr("cx", function(d) {
               return projection([d.lon, d.lat])[0];
       })
       .attr("cy", function(d) {
               return projection([d.lon, d.lat])[1];
       })
       .attr("r", 5)
       .style("stroke", "#D6285E")
       .style("fill-opacity", "0")
      .each(pulse);
});

g.selectAll("path")
      .data(topojson.object(topology, topology.objects.countries)
          .geometries)
    .enter()
      .append("path")
      .attr("d", path)
});

function pulse() {
  var circle = svg.selectAll("circle");
  (function repeat() {
    circle = circle.transition()
      .duration(2000)
      .attr("stroke-width", 0.5)
      .attr("r", 2)
      .transition()
      .duration(2700)
      .attr('stroke-width', 2)
      .attr("r", 5)
      .ease('sin')
      .each("end", repeat);
  })();
}
