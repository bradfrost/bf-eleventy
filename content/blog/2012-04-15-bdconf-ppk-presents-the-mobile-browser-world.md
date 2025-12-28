---
title: 'BDConf: PPK presents The Mobile Browser World'
date: '2012-04-15'
post_id: 3601
original_link: https://bradfrost.com/blog/post/bdconf-ppk-presents-the-mobile-browser-world/
---

In [The Mobile Browser World](http://bdconf.com/2012/orlando/schedule#ppk), [PPK](http://quirksmode.org) ([@ppk](http://twitter.com/globalmoxie)) gives a lay of the mobile browser land, including their challenges and quirks (of course).

  * There are only a few configurations for desktop, but mobile browsers have far more combinations of browser, OS, and device. 
  * Apple and BlackBerry control the whole stack: browser, OS and device.
  * OS vendors, browser vendors, and device manufacturers don't always have the same interests, which leads to disparity and fragmentation
  * Android and Windows Phone controls Browser and OS, but lets other manufactures create the actual devices.
  * Nokia has a huge market share in the developing world. Until recently, 70% of phones sold in the developing world were Nokias.
  * When Nokia embraced Windows Phone, WP became less interesting to other device manufacturers.
  * The landscape changed again when Google bought Motorola, which caused other device manufacturers to shy away from Android. 
  * Samsung Bada was open-sourced and PPK suspects it will merge with Tizen.
  * [Boot to Gecko](http://www.mozilla.org/en-US/b2g/ ): Mozilla's mobile OS built on web technologies. PPK wonders how they are going to get their devices in the hands of people. That means having an ally with carriers and device manufacturers. 
  * Carrier subsidies are important for consumers purchasing decisions. 
  * It's cheaper to buy the device directly from the manufacturer instead of going through the carrier.
  * Carrier phone subsidy game is insidious, making consumers think devices are "cheaper." But it gets phones into consumers' pockets. [@nstop](https://twitter.com/#!/nstop/status/191921885552975873)
  * Carriers want you to by Androids. They don't want you to buy Windows Phones. 
  * Apple is the single only company that has a direct connection with consumers. 

Mobile Browsers

  * There are over 20 mobile browsers. Many of them are webkit-based, but there is no consistent webkit experience
  * Mobile webkit differences: inconsistent hardware accelation support, differences in GPU, Interface conventions get handled outside the browser
  * Proxy browsers like Opera Mini give users a chance to have a usable web experience. Proxy browsers compress pages which saves data usage. 
  * Proxy browsers have no client-side interaction. Every javascript call requires a server request. This is not a bug, this is a feature.
  * Amazon Silk is peculiar because it's wi-fi only, which means that a proxy solution doesn't make sense.
  * If your site works in Safari, Android, Opera Mini, Opera Mobile, there's a good chance it will work other places
  * Connection type is next to worthless. Connection speed is much more valuable, but is very complicated to detect.
  * Set up a device lab. Buying real devices is now an essential part of web design. Set aside a monthly budget to buy real devices. [Here's how to do it on the cheap](http://bradfrost.com/blog/mobile/test-on-real-mobile-devices-without-breaking-the-bank/).