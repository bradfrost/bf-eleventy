---
title: Accessibility and Low-Powered Devices
date: '2015-04-09'
tags:
- accessibility
- devices
- performance
- progressive enhancement
- strategy
post_id: 9031
original_link: https://bradfrost.com/blog/post/accessibility-and-low-powered-devices/
custom_meta:
  hide-ads: Show
---

My wife's cousin suffers from debilitating migraines. She's done everything to reduce the migraines' frequency, from dramatically altering her diet, to trying every available medical treatment, to even moving several times to different climates. Because of her condition, she has to minimize time spent with backlit screens. Recently she sent me a Facebook message: ![My kindle \(old kind, pre-paperwhite, e-reader screen only\) has an experimental browser option. It can handle websites for a minute or two, then freezes. Is this something companies are looking at developing further? Let me know if you hear about anything like this.](https://bradfrost.com/wp-content/uploads/2015/04/FullSizeRender-2-e1428540964654.jpg) She went on to explain how certain sites she visits crashes the e-reader's browser, leaving her understandably frustrated. I responded by saying this type of stuff is what I talk with audiences and organizations about. She replied: ![Keep preaching. I don't know how many users like me there are with light sensitivity, but it would make the difference between minimizing my computer use and actually being able to use the web freely.](https://bradfrost.com/wp-content/uploads/2015/04/FullSizeRender-1-e1428540939822.jpg) I think this story is really fascinating. It's an interesting intersection between performance, accessibility, and devices. A few thoughts: 
 
   * She's a user who owns more powerful devices (she has a Mac, etc) but is **deliberately choosing to browse the Web on an underpowered device** because of her circumstances.
   * Does this mean Web designers need to bend over backwards to ensure their creations are looking and functioning beautifully on old e-ink Kindles? No. This has to do with awareness of the fact that **people have to–or even _choose_ to–access the Web from less-than-optimal environments**.
   * **[There is a difference between "support" and "optimization"](https://bradfrost.com/blog/mobile/support-vs-optimization/)**. I'd venture to guess old e-ink Kindle's aren't explicitly mentioned on any project's browser support list. But these lists are really referring to what browsers/devices/environments the creators are _optimizing_ for. It's our jobs as Web creators to make experiences to do our best to  _support_ any person who wants to interact with our creations, regardless of what device/browser/environment they have. This is about pragmatism. Ideally we create things that work everywhere, but realistically there's not enough time and money to actually deliver that ideal experience. That doesn't mean we shouldn't try.
   * Hopefully device manufacturers develop (or maybe they've already been developed?) more powerful e-readers with more sophisticated browsers that won't choke whenever it encounters the average web page. But that's not really the point. The **[zombie apocalypse of devices](http://uxmag.com/articles/the-coming-zombie-apocalypse) is already here** and the trajectory shows folks continuing to interact with the Web on underpowered devices. [Watching people browse the Web from their watch](https://bradfrost.com/blog/post/future-friendly-fruition/) is fascinating because these are modern (hip) devices that also happen to be relatively underpowered.
   * **Performance matters, and performance and accessibility are closely related**. This reminds me of the amazing [Youtube Feather story](http://blog.chriszacharias.com/page-weight-matters), where a lightweight prototype led to more people being able to access Youtube's videos.
   * Thankfully, both **accessibility and performance map nicely to business goals**. When I ask clients "Do you want to reach more customers?" the answer is always yes. When I ask them "Do you want your experience to load blazingly fast?" the answer is always yes. Both accessibility and performance are invisible aspects of an experience and should be considered even if they aren't explicit goals of the project. My wife's cousin explains it best:
 
![So yeah, lots of web based companies lose me as a customer because it hurts me to spend time using their products or shopping for their products online. If I could buy it\\use it on my kindle, they have a shot at getting my money.](https://bradfrost.com/wp-content/uploads/2015/04/FullSizeRender-3.jpg) There it is. Make efforts to make Web experiences accessible and performant; make money.
  *[DETAILS]: Device, Environment, Time, Activity, Individual, Location, Social
  *[RESS]: Responsive Design with Server-Side Components