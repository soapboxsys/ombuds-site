---
layout: post
title: "State of the System"
date: 2016-02-25 12:00:000
category: announce
author: Nick
---

To conclude our work with the Knight Foundation, we are publicly indicating the releases and checkpoints that 
the prototype grant brought our software projects too.
<!--more-->

### The Network is Live

There are several Ombuds peers running on the Bitcoin network. For better or for worse the system will store public statements in the block chain immutably. 
What follows is a description of the software projects that make this possible.


#### Full Node

The Ombuds Full Node, named ombfullnode, was rebased ontop of revised branch of `0.12.0`.
After a complete rewrite, the software lives in beta tagged at [version `0.3.0`](https://github.com/soapboxsys/ombfullnode/releases/tag/BETA_0_3_0).

Some notable improvements since June 2015 include:

- Strict ACID transactions for records
- Improved logging, block chain management, and syncing speedups
- Peer banning 

Some notable features missing:

- Unconfirmed records I.E. "The pending pool"
- Websocket hooks for Ombuds related events
- Native Wallet support for publishing

#### Android Application

The Ombuds Android application after being released on Google Play has undergone tweaks and is now at `0.X.X`.
Originally a fork of Bitcoin-Wallet, all of the work that has gone into this release was conducted after August of 2015.

Some notable improvements since the release in January:

- Relay JSON requests are served over TOR
- Navigation was moved to a drawer on the left
- Sending endorsements is fully supported

Some work that still needs to be done:

- Peer connections must be routed through TOR
- An integrated help system
- Translation into other languages

### Web Relay

The Web Relay is an alpha state. 
However, two relays ([ox.nskelsey.com](http://ox.nskelsey.com) and [relay.kuck.io](http://relay.kuck.io)) have been launched that support visitors from the Web and smart phones.

### Project Site

This project site was launched with help from [Luke Demarest](https://github.com/ldemarest).


