---
layout: post
title: "State of the System"
date: 2016-02-25 12:00:000
category: announce
author: Nick
---

To conclude our work with the Knight Foundation, we are publicly indicating the releases and checkpoints that 
the prototype grant brought the following software projects too.
<!--more-->

### The Network is Live

There are now several Ombuds peers running on the Bitcoin network. These peers will store and relay public statements submitted to and stored in the block chain. 
What follows is a description of the software projects that make this possible.


### Full Node

After a complete rewrite, the Ombuds full node, refered to as [`ombfullnode`](https://github.com/soapboxsys/ombfullnode), lives in beta tagged at [version `0.3.0`](https://github.com/soapboxsys/ombfullnode/releases/tag/BETA_0_3_0). This project was rebased ontop of the [0.12.0 branch](https://github.com/btcsuite/btcd/releases/tag/BTCD_0_12_0_BETA) of [BTCD](https://github.com/btcsuite/btcd).

The notable improvements since June 2015 include:

- Strict ACID transactions for records
- Improved logging, block chain management, and block syncing
- Peer banning 

Some notable features still missing:

- Unconfirmed records (I.E. The pending pool)
- Websocket hooks for Ombuds related events
- Native Wallet support for publishing

### Android Application

After being released on [Google Play](https://play.google.com/store/apps/details?id=systems.soapbox.ombuds.client), The Ombuds Android Client has undergone improvements and is now at [version `0.2.0`](https://github.com/soapboxsys/ombuds-android).
Originally a fork of Bitcoin-Wallet, all of the work that has gone into this release was conducted after August of 2015.

Some notable improvements since the release in January:

- Relay JSON requests are served over TOR
- Navigation was expanded and moved to a drawer
- Endorsement broadcasts are fully supported

Some work that still needs to be done:

- Peer connections must be routed through TOR
- Integration of a help system
- Internationalization and translation into other languages

### Web Relay

The Web Relay is in an alpha state. 
However, two relays – [ox.nskelsey.com](http://ox.nskelsey.com) and [relay.kuck.io](http://relay.kuck.io) – have been launched that support visitors from the Web and Ombuds Android Clients. These relays display bulletins and endorsements stored in the public record.

### Project Site

This project site was built in a collaborative process between [Nick](http://nskelsey.com) and [Luke](https://github.com/ldemarest).
The site hosts the latest veriosn of the specification and serves as the home on the Web for the project.


