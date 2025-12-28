---
title: 'BDConf: Jason Grigsby presents The Immobile Web'
date: '2012-04-17'
post_id: 3609
original_link: https://bradfrost.com/blog/post/bdconf-jason-grigsby-presents-the-immobile-web/
---

In [The Immobile Web](http://bdconf.com/2012/orlando/schedule#grigs), [Jason Grigsby](http://www.the-haystack.com/) ([@grigs](http://twitter.com/grigs)) discusses the next frontier: web-enabled televisions.

  * Nobody ever said they wanted a smart TV. They all say they want Netflix on their TV. 
  * **88% of tablet owners and 86% of smartphones use their devices while watching TV.**
  * Apple's TV solution has the industry scared, and rightfully so. It wasn't that long ago that device manufacturers were trash-talking a potential Apple mobile phone. 
  * A big opportunity is an app store on TVs. "If we have the App Store on TVs, I think there will be browsers on the Apple TV."
  * When Google bought Motorola, they bought the set top box division as well. This could mean a bright future for the web on TV.
  * **Current TV browsers have surprisingly good HTML5 support** and support many features. 2012 TV browsers are much faster than their 2011 counterparts.
  * **The biggest problem with TV web browsing is input.** Typing is clumsy and remotes are huge. Even Apple's streamlined remote and Remote apps doesn't solve the problem. D-pads, while clunky, can be more efficient than pointers for maneuvering. Speech input, gesture controls are on the horizon, but none currently work very well.
  * Web "pages" really fall apart when it comes to TV browsing
  * Great resources for creating web content for TV: [Creating Web Content for TV](http://dev.opera.com/articles/view/creating-web-content-for-tv/) and [Design for TV](https://developers.google.com/tv/web/docs/design_for_tv)
  * Many sites on TV browsers automatically play video, which differs from mobile's handling of video. 
  * Spacial CSS properties can help design better TV experiences, but currently aren't supported well. Performance and caching are major challenges
  * **Vertical scrolling doesn't make as much sense on TVs.** Left to right navigation feels more intuitive
  * Beware of differing screen resolutions. Standard aspect ratios are going away, but resolution differences can cause a lot of headaches. Read [First, Understand Your Screen](http://tripleodeon.com/2011/12/first-understand-your-screen/) by James Pearce
  * **TVs are yet another painful reminder that screen size != context.** iMacs and HDTVs share the same screen dimensions but are vastly different.
  * @media types are mutually exclusive, so `@media type="tv"` would break any screen-specific styles.
  * 2012 LG TV does not support CSS media type, no way to detect via JS, and UA string contains no clues it is a TV. AAHH!
  * Testing is going to be a nightmare as it requires testing on real TVs. Bring your phone for tethering to TVs.
  * TV emulators: [Opera TV Emulator](http://www.opera.com/business/tv/emulator/) and [Google TV emulator](https://developers.google.com/tv/android/docs/gtv_emulator )
  * Many sites on TV browsers automatically play video, which differs from mobile's handling of video.
  * We as web designers need to think about multiple screens and how they can potentially interact together.
  * It's interesting to think about context in terms of posture: lean forward or lean back? One hand or two hand? etc
  * Smart TV experiences suck right now, but that doesn't mean we should dismiss them. "We cannot predict future behavior from experiences that (currently) suck"