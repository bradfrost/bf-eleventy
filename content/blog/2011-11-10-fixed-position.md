---
title: Fixed Positioning in Mobile Browsers
date: '2011-11-10'
tags:
- css
- fixed positioning
- javascript
- mobile
- viewport
post_id: 2041
original_link: https://bradfrost.com/blog/post/fixed-position/
---

Fixed positioned elements (typically headers or footers) are extremely common conventions for native mobile platforms, so naturally fixed elements found their way into mobile browsers. Web designers are used to fixing elements to the window using CSS's **position: fixed** , however, in the land of mobile browsers, support for fixed positioning is far less universal and is way more quirky. I set up a demo to test fixed positioning support across mobile browsers. You can [view the demo here.](http://bit.ly/mobilefixed) I was particularly curious to see how fixed positioning worked without disabling the user's ability to scale the page. The Test The actual test is as absurdly simple as you can get.
    
    
    header {
         position: fixed;
         top: 0;
         left: 0;
         width: 100%;
    }
    
    

Talk about basic. Let's see how this is supported on mobile browsers. Mobile CSS Fixed Positioning Support

  * **Mobile Safari** \- iOS5 and after has strong support for fixed positioning. iOS4 and below simply treats elements as static and scrolls them along with the rest of the page.
  * **Android**
    * **Android 2.1 and below** no fixed positioning.
    * **Android 2.2** awkwardly snaps fixed elements back into position once scrolling is complete. 
    * **Android 2.3** supports fixed positioning, but disabling page scaling is required.
    * **Android 3 and 4** supports fixed positioning (even without disabling page scaling). Does pretty well performance-wise.
  * **Blackberry 5.0** supports fixed positioning, although fixed elements are jittery 
  * **Blackberry 7.0** \- supports fixed positioning (I could only test on a simulator)
  * **Blackberry Playbook (1.0.7)** \- supports fixed positioning. The biggest WTF bug is that it appears the BITMAP all the text inside the fixed positioning element, leaving the text fuzzy and jagged.
  * **Firefox Mobile** \- Supports fixed positioning as of 6.0 (many thanks to [@alex_gibson](http://twitter.com/#!/alex_gibson/status/134929572121677824) for testing this). On older versions, fixed positioned elements scroll with page and then awkwardly snap back into position once scrolling is complete.
  * **Opera Mobile** \- Fixed positioned elements scroll with page and then awkwardly snap back into position once scrolling is complete. WTF bug: Opera miscalculates positioning and awkwardly places fixed headers further down the page.
  * **Opera Mini** \- nope.
  * **Windows Phone 7** \- both pre and post-Mango ignore fixed positioning and render fixed elements as position: static. (Big thanks to [@wilto](http://twitter.com/wilto) for testing on Mango)
  * **WebOS** \- 2.0+ supports fixed positioning
  * **Amazon Kindle Fire** \- similar to Android 2.3 in that it supports fixed positioning, but disabling page scaling is required.
  * **Amazon Kindle (Netfront)** \- YES!, which is [hilarious](http://www.youtube.com/watch?v=zOVhHxTkitU). Kindle's browser doesn't even support color but does a better job at fixed positioning than other mobile browsers.
  * **Nook Color (1st and 2nd gen)** \- Performs like Android 2.3: supports fixed positioning, but disabling page scaling is required.

Maximiliano Firtman's amazing [Mobile HTML5](http://mobilehtml5.org/) site features a chart of fixed width mobile browser support, but (as you can see from the above results) "support" isn't exactly binary. ![Twitter's mobile site on iOS and Android](https://bradfrost.com/wp-content/uploads/2011/11/twitter_ios_android2-650x532.png)Twitter's mobile site features a fixed header for iOS but not for Android Javascript Solutions Because mobile browsers lacked of CSS fixed positioning, some very smart people developed Javascript-based fixed-positioning solutions. Here are just some of the more popular ones:

  * [iScroll 4](http://cubiq.org/iscroll-4) is relatively mature and performs decently well on platforms other than iOS.
  * [Scrollability](http://joehewitt.github.com/scrollability/) was created by [Joe Hewitt](http://joehewitt.com/) and is targeted at iOS but also roughly works on Android.
  * [Sencha Touch](http://www.sencha.com/products/touch/) is more than just a Javascript library, but rather a mobile app framework. Targeted primarily at iOS, they've made a lot of effort to improve performance on Android and Webkit Blackberry.
  * [Jquery Mobile ](http://jquerymobile.com/test/docs/toolbars/bars-fixed.html) is another framework that includes a version of fixed elements, although it's not persistent fixed positioning. Fixed elements fade out when the page is scrolled, then fade back in when scrolling ends. [Check out a demo](http://jquerymobile.com/test/docs/toolbars/bars-fixed.html).

**Problem solved, right?** Well, not exactly. Overriding the browser's default scrolling behavior introduces a whole lot of complexity, and that has implications. First, JS solutions definitely don't work across the board. Consider the vastly different results of the three lines of CSS in my test, and picture how a complex Javascript calculations might fare. Performance is key, and heavy JS usage can take it's toll when combined with the rest of the logic on the site/app. Also, the platforms that best support these solutions are also the ones that best support CSS fixed positioning (iOS5 being the poster child here). I'm going to pick on [Paper.li's mobile site](http://m.paper.li/) as a great example of what not to do. Their JS scrolling is clunky, entirely unnecessary and introduces a whole bunch of usability issues (i.e. I couldn't get to to Android's address bar because of the custom scrolling logic). In essence, they make it a whole lot harder to view their content. I recommend taking it on a case-by-case basis. I think JS solutions serve their purpose, but I don't know if sites deployed on the web is the best place for them. I think they make more sense for Phonegap projects or other projects where you have tighter control over device access. Considerations So what are you to do? Here's some things to think about as you approach this sticky situation (pun intended in the worst way possible): 

  * Take a step back and understand why you need fixed positioning in the first place. Ask this very important question: **Is it essential to the experience?**
  * **Don't assume support** for fixed positioning by default.
  * Beware of a whole host of **false positives and quirky bugs**.
  * Rewriting scrolling logic with Javascript **can introduce more problems than it solves** if you're deploying your site/app across the web.
  * **Conditionally include JS-based solutions** as to not deliver a broken experience to non-optimized platforms.
  * **Maybe consider sniffing user-agent strings** for capable in order to optimize the layout without breaking the experience in other browsers.
  * **Disable viewport scaling** when incorporating fixed-positioned elements to avoid awkward behavior.
  * What happens on orientation change? **Consider screen real estate issues** for landscape mode and devices with different screen heights (such as Blackberry Curve).

Takeaway Ultimately, I think this little exercise is another example of why we need to consider diversity in our designs. Removing comfortable assumptions, even for something seemingly as harmless as a fixed header, can help us design better, more [adaptive](http://easy-readers.net/) experiences. I believe that we can create great, innovative mobile experiences for best-of-breed devices without giving the middle finger to everything else.