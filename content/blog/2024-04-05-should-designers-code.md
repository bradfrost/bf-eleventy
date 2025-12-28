---
title: Should designers code?
date: '2024-04-05'
tags:
- css
- design
- web design
- web development
post_id: 19908
original_link: https://bradfrost.com/blog/post/should-designers-code/
custom_meta:
  hide-ads: Show
---

Ah yes, this old chestnut. It pops up as reliably as daffodils in early spring. My perspective has changed very little over the years.

> Telling web designers they don't need to worry about code is like telling architects they don't need to worry about steel, wood or physics.-- Brad Frost (@brad_frost) [August 15, 2011](https://twitter.com/brad_frost/status/103099206427885569?ref_src=twsrc%5Etfw)
 
 I still believe this. Does that mean designers need to know how to _implement_ designs in code? Do architects need to be able to lay a block foundation or hang drywall? **No.** **Designers need to understand and work with[the grain](https://frankchimero.com/blog/2015/the-webs-grain/) of the medium for which they're designing.** For the web, that means understanding important concepts related to how things play out in the browser. To put a finer point on it, I think it's important for designers to understand these important concepts:
 
   * [Box model](https://developer.mozilla.org/en-US/docs/Learn/CSS/Building_blocks/The_box_model)
   * [Flexbox](https://css-tricks.com/snippets/css/a-guide-to-flexbox/) & [Grid](https://css-tricks.com/snippets/css/complete-guide-grid/)
   * [Positioning](https://developer.mozilla.org/en-US/docs/Web/CSS/position)
   * [Source order](https://helio.app/definitions/source-order/)
   * [Variables](https://developer.mozilla.org/en-US/docs/Web/CSS/Using_CSS_custom_properties)
 
Thankfully static design tools have gotten a lot more robust and capable of matching (or approximating!) how these things work in the browser. Figma's [auto-layout](https://help.figma.com/hc/en-us/articles/5731482952599-Using-auto-layout) helps with capturing the fluid nature of the web and good general flexbox behavior. [Figma Variables](https://help.figma.com/hc/en-us/articles/15339657135383-Guide-to-variables-in-Figma) have introduced designers to the way developers have been managing design language variables for almost two decades. There are also a growing number of resources out there; my pal [Christine Vallaure](https://www.moonlearning.io/) has been doing a great job creating videos to help designers better understand important web concepts.  It's also important to recognize that static design tools are _not_ the browser and can't articulate many dimensions of a user experience. [From _Atomic Design_](https://atomicdesign.bradfrost.com/chapter-4/#development-is-design):

> Working in HTML, CSS, and presentational JavaScript allows teams to not only create aesthetically beautiful designs, but demonstrates those uniquely digital design considerations like:

  * flexibility
  * impact of the network
  * interaction
  * motion
  * ergonomics
  * color and text rendering
  * pixel density
  * scrolling performance
  * device and browser quirks
  * user preferences

 
 All to say, it's important to recognize tools like Figma have limitations and can't perfectly articulate every dimension of a user experience. **The best thing any designer can do is to communicate and closely collaborate with the people who are building things in the actual medium.** **Designers who foster good relationships with developers will learn what they need to about code,** and the final product will greatly benefit from that collaboration. And just so it's said: if you're a designer who _wants_ to learn how to code, by all means go for it! 
