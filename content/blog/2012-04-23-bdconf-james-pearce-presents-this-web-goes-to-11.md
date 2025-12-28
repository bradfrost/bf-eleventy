---
title: 'BDConf: James Pearce presents This Web Goes to 11'
date: '2012-04-23'
post_id: 3634
original_link: https://bradfrost.com/blog/post/bdconf-james-pearce-presents-this-web-goes-to-11/
---

In [This Web Goes to 11](http://bdconf.com/2012/orlando/schedule#jamespearce), [James Pearce](http://tripleodeon.com/) ([@jamespearce](http://twitter.com/jamespearce)) demonstrates how device and network APIs can take the mobile web to a whole new dimension. The future looks awesome. The Current Mobile Web World

  * The web was bound to escape from the desktop and was meant to be carried with us wherever we went. 
  * Native apps have access to all the device APIs and as a result can create more contextually-aware experiences.
  * **Look beyond the piece of glass and think of the human on the other end of the device.**
  * **The mobile web is trapped in a sandbox called the browser** and we're forced to adapt to browser's constraints.
  * Mobile web is in a pretty sad state with regards to capabilities. "I'm sure there are plenty of Facebook mobile web users that are confused why there isn't an 'upload photo' button."
  * It's not that native solutions will go away, but the web needs the power to at least be competitive with native solutions.
  * WAP sites years ago had access to device APIs that sadly aren't available in modern mobile browsers

Device APIs

  * [Device API Working Group](http://www.w3.org/2009/dap/), a good rundown of what we can hope to expect from the mobile web soon.
  * [Geolocation](http://dev.w3.org/geo/api/spec-source.html) is one of the best supported device APIs out of everything.
  * `` currently doesn't work on iOS, but is supported on Android 2.3+.
  * [getUserMedia](http://dev.w3.org/2011/webrtc/editor/getusermedia.html) currently is only supported in Opera Mobile. James demoed a simple photo-taking app he made with 100 lines of code. Related: check out Patrick Lauke's [browser-based QR code reader demo](http://shinydemos.com/qr-code/) which uses getUserMedia.
  * [Messaging API](http://www.w3.org/TR/messaging-api/) allows you to send text messages from mobile browsers.
  * Mobile devices are bristling with sensors, unfortunately the mobile web currently doesn't have access to many of them. 
  * [Mozilla WebAPI](https://wiki.mozilla.org/WebAPI) and [Boot to Gecko](http://www.mozilla.org/en-US/b2g/) projects are hoping to make web THE platform. You can actually view source on a Boot to Gecko phone. James was a little concerned at first that Mozilla was duplicating efforts, but Mozilla has made a commitment to bring everything into the W3C as it gets developed.
  * The goal of [PhoneGap](http://phonegap.com) is to expose as many device APIs as possible.
  * SMS and camera access and more could make authentication far more frictionless. Email is a pain in the ass. 
  * Privacy concerns aren't as big of a deal as they are a user choice. Also, things that were historically taboo (i.e. sharing location) are now commonplace.
  * Progressive enhancement can give way to 'no compromise'. If a photo app doesn't have camera access, you're not in business. Sometimes apps require advanced support and there's little you can do to give an experience to unsupported platforms.
  * [Ringmark](http://developers.facebook.com/html5/blog/post/2012/04/04/the-methodology-behind-ringmark/) is a way to gauge how advanced a mobile browser is and what APIs it supports.
  * We have an opportunity to evolve the web beyond a web of documents, and device APIs give us a glimpse of how to do that.

  *[DETAILS]: Device, Environment, Time, Activity, Individual, Location, Social