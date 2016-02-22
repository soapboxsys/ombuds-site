---
layout: post
title: "Looking for a Developer"
date: 2015-11-16 12:00:000
category: announce
author: Nick
---

We put out a call for a developer that reads something like this:

    Soapbox Systems is a software development group started by two UVA and HC alums based in Washington DC. 
    We are looking for a front-end developer with design skills or a designer with strong web development 
    skills to build and design a front-end for Ombuds. 
     
    If you or somebody you know is interested in working with a rag-tag group of miscreants producing 
    copy-left technology literally intended to resist oppression and protect human rights email me at: 
    nick@soapbox.systems

    And yes, you can even get paid – some money – to do this! And no, we don’t mind if you are a 
    full-time student.

<!--more-->

The purpose of this page is to describe in detail the work we need done. 

There are two main tasks:

1. Redesign getombuds.org
2. Construct a web front-end for the Ombuds REST API.

We view both of equal importance, but #2 is the harder more integrated problem. 
So what we are doing is using #1 to see if someone can join our team to solve #2.
If you would like to get paid to work on #1 with the potential for further work on #2 email us.
After an initial conversation and back and forth on ideas+designs for #1, we will start paying you to build it.

Redesigning getombuds.org
=========================

This site should be the public face of a technologically sophisticated open-source project.
[The current site](https://getombuds.org) does reflect that. 
Last spring, we worked with a design company to radically improve our marketing appeal. 
This did not work because the resulting site was low content, slow to load, and a marketing pitch. 
It was mainly our fault and we do not have any screen shots of the site either... 

So, what we are looking for now is a suitable home for the Ombuds project. 
This includes a friendly front-page that acts as a sign post that directs the viewer: to download the software, read the documentation (and paper), learn about the people who made it and so on. 

While the look and feel should be different, the Tor project's [site](https://www.torproject.org/) provides an excellent reference.
Be aware though, this is 2015 websites can look better than that -- not that we know how to make it look better...

The content of the site should at the minimum contain:

* A high level description of the project
* A place to post announcements, blog posts, and victories.
* The [spec](https://github.com/soapboxsys/ombuds-spec/blob/master/doc/index.md), the [paper](https://github.com/soapboxsys/ombuds-site/blob/master/res/ombuds-public-space.pdf), and links to other technical documentation.
* A set of pages devoted to downloading the software and warning users about its use.
* Information about the team, sponsors, partners, and funders.

The current site uses Jekyll. 
Jekyll supports markdown, blogging, and fast static sites. 
So it has everything you should need. 

We plan to use the [same repository](https://github.com/soapboxsys/ombuds-site) and simply face lift the site for the redesign.
Additionally, the domain name getombuds.org will change -- we are not sure to what, but we are open to suggestions.

For your reference here are great home pages for other top-notch open source projects.

* [Core OS](https://coreos.com/) -- very swanky...
* [Debian](https://www.debian.org/) -- The right info in an old form.
* [Go language](https://golang.org/) 
* [Jasper Project](http://jasperproject.github.io) -- don't nessecarily like the home-page
* [Cyanogenmod](http://www.cyanogenmod.org/) -- The best in the list.

Constructing a Web Front-end for Ombuds
=======================================

The Ombuds [specification] defines an [HTTP API] for records that are stored in the public record.

These records can be displayed in several different ways to a viewer. 
The mobile app that Alex is building will consume this API.
We would like a web-browser to also be able to consume the API.

Websites that display this content on the web has been done before by Nick.
Those sites ([1] and [2]) were either single use or now obsolete (the API has changed).

A fresh set of eyes and ideas will be crucial in deciding how to relay and show relevant information to users.
We have documented exactly how the API functions [here](https://github.com/soapboxsys/ombuds-spec/blob/master/doc/web-relay-api.md#5-api-routes-and-responses).

[specification]: https://github.com/soapboxsys/ombuds-spec/blob/master/doc/index.md
[HTTP API]: https://github.com/soapboxsys/ombuds-spec/blob/master/doc/web-relay-api.md

[1]: https://github.com/NSkelsey/ahimsa-web
[2]: https://github.com/NSkelsey/OmbudsRetweeter
