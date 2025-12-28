---
title: 'BDConf: Ethan Marcotte presents Rolling Up Our Responsive Sleeves'
date: '2012-04-21'
post_id: 3627
original_link: https://bradfrost.com/blog/post/bdconf-ethan-marcotte-presents-rolling-up-our-responsive-sleeves/
---

In [Rolling Up Our Responsive Sleeves](http://bdconf.com/2012/orlando/schedule#beep), [Ethan Marcotte](http://ethanmarcotte.com/) ([@beep](http://twitter.com/beep)) discusses how to work through many of the challenges that arise in the responsive web design process.

  * Chaos was the law of nature; Order was the dream of man. -Henry Adams
  * Transitions are important. When you can't compare your previous experiences to your new environment, you can feel isolated and alone. We're reinventing and charting a path from our old way of thinking to [a new way](http://www.youtube.com/watch?v=V0_WJDige0s&t=0m53s)
  * "Tablet" and "mobile" as terms are becoming so broad they are becoming really useless.
  * Solve the parts, not the whole problem. Focusing on the enormity of a problem can inhibit you from solving it, so you should carve it up into individual tasks. 

Fluid Layout

  * **Fluid Grids** -- Equation for converting fixed positioned units to fluid units:   
[Target / context = Result](http://www.alistapart.com/articles/fluidgrids/)
  * Designing with fluid grids is about designing and managing proportions, not fixed dimensions.
  * Invest in the structural foundation of your content, not of layout. Site structure is a slow system to evolve and hard to change. Layout is the fastest system as the landscape is constantly changing. 
  * We should build **networks of content** , not of pages. Design is now the relationship between individual components, not rigid pages. Check out [Starbucks style guide](http://www.starbucks.com/static/reference/styleguide/) and see how they created their design system.
  * Width, hierarchy, interaction and density all influence layout.

Mobile First

  * **Mobile First** -- Avoid starting large then shrinking down. 
  * "The absence of support for media queries is indeed the first media query" - Bryan Rieger
  * Just because an element doesn't fit on small screens doesn't mean you should remove it. Simplify before you suppress.
  * There are many ways of handling adaptive navigation, and several [responsive navigation patterns](http://bradfrost.com/blog/web/responsive-nav-patterns/) are emerging.
  * **Let the content, not device widths, determine the breakpoints in responsive designs.**

Advertising

  * **Advertising is challenging** because ads are fixed width and inflexible. This introduces fixed elements to an otherwise fluid environment.
  * Smashing Magazine hides their ad content for smaller screen sizes, which is [bad for performance](http://bradfrost.com/blog/mobile/bdconf-guy-podjarny-presents-performance-implication-of-mobile-design/). It's challenging to handle advertising across different layouts.
  * Layout is the easy part of responsive design. Advertising is proving to be a worthy adversary. 

Media and Images

  * **Media and Images** `img, object { max-width: 100% }` for images and media
  * Video doesn't maintain their aspect ratios across different screens. Check out [FitVids](http://fitvidsjs.com/) for a solution.
  * Images can be very expensive from a performance standpoint. Start with the small screen image first then enhance. 
  * Two important rules for responsive images: start with the small screen image first then enhance up from there. Only make one HTTP request per image.
  * [Responsive Images: How they Almost Worked and What We Need](http://www.alistapart.com/articles/responsive-images-how-they-almost-worked-and-what-we-need/) by Mat Marquis 
  * [Categorizr](http://www.brettjankord.com/2012/01/16/categorizr-a-modern-device-detection-script/): A modern device detection script
  * Invite the user in to make choices about the experience they want. We can't make assumptions about everything. Do they want the hi-res images or low-res images/videos? Perhaps it's easier just to ask them.

  *[DETAILS]: Device, Environment, Time, Activity, Individual, Location, Social