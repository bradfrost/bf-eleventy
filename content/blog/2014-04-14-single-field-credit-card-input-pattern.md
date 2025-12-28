---
title: Single-Field Credit Card Input Pattern
date: '2014-04-14'
tags:
- forms
- github
- gpcfb
- lukew
- mobile
- patterns
- ux
- zachary forrest
post_id: 7647
original_link: https://bradfrost.com/blog/post/single-field-credit-card-input-pattern/
custom_meta:
  hide-ads: Show
---

![Single Credit Card Input Demo](http://bradfrost.com/wp-content/uploads/2014/04/single-cc-demo.gif) Forms suck. And they especially suck on mobile devices. Luke Wroblewski has been talking [for a long while now](http://www.lukew.com/ff/entry.asp?756) about how [input masks](http://en.wikipedia.org/wiki/Input_mask) make form entry a lot less painful for people. He recently highlighted [Square Wallet](https://squareup.com/wallet)'s clever [single-field credit card capture pattern](http://www.lukew.com/ff/entry.asp?1667). The post referenced a [phenomenal port](http://zdfs.github.io/toscani/paymentInfo/index.html) of Square's native app behavior for the Web by [Zachary Forrest](https://github.com/zdfs) ([@zdfs](https://twitter.com/zdfs)). Zachary's excellent work was just what I needed to get started creating the Greater Pittsburgh Community Food Bank's donation form (as part of [our open redesign of their site](http://bradfrost.com/blog/post/greater-pittsburgh-community-food-bank-open-redesign/)). I ended up tinkering with Zachary's initial script a bit and made a few alterations: 
 
   * Made the area a bit **more fat-finger-friendly**
   * Added support for **semantic form markup** like `legend` and `label`, so that if the environment doesn't [cut the mustard](http://responsivenews.co.uk/post/18948466399/cutting-the-mustard), you can still provide users with a totally accessible, more traditional form experience.
   * Replaced the bitmap credit card icons with [these wonderful **SVG credit card icons** from The Honest Ape](http://dribbble.com/shots/1115380-SVG-Credit-Cards). I ran them through [Grumpicon](http://www.grumpicon.com/) so they appear as inline data URIs with PNG fallbacks for unsupported browsers.
   * **Added an additional instruction message below the field** to provide additional messaging to the user. As much as I love this pattern as-is, I'm worried some folks might be confused/overwhelmed by all this shifting around. So I added a place to provide additional instructions to help users along as they fill out their credit card info.
 
You can see the pattern [on Github](https://github.com/zdfs/toscani/), [view a demo](http://bradfrost.com/demo/single-cc/), or see it in action on [our project's prototype](http://foodbank.bradfrost.com/patternlab/v5/?p=organisms-footer). [![Screen](http://bradfrost.com/wp-content/uploads/2014/04/Screen-935x1024.png)](http://foodbank.bradfrost.com/patternlab/v5/patterns/02-organisms-00-global-01-footer/02-organisms-00-global-01-footer.html) I want to give a massive thank you to [Zachary Forrest](https://twitter.com/zdfs) for putting together such a great script. I'm sure I'll be tweaking the entire donate experience over the course of the project, so if you'd like to [contribute to the project](https://github.com/zdfs/toscani/) we'd really appreciate it!
  *[DETAILS]: Device, Environment, Time, Activity, Individual, Location, Social
  *[RESS]: Responsive Design with Server-Side Components