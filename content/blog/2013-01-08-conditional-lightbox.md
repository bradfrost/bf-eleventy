---
title: Conditional Lightbox
date: '2013-01-08'
tags:
- conditional loading
- lightbox
- patterns
- responsive web design
post_id: 5223
original_link: https://bradfrost.com/blog/post/conditional-lightbox/
---

**Lightboxes don't work for small screens.** Here's Jordan Moore on the subject: 

> The purpose of a lightbox is to display a larger image corresponding to the selected thumbnail version while keeping the user on the same page instead of linking directly to a page showing the full image. Again, there are an abundance of solutions for solving this problem but the vast majority of existing patterns translate poorly to smaller displays. In fact you may argue that **a lightbox shouldn’t even exist on small displays.** -- [Jordan Moore](http://www.jordanm.co.uk/post/26207088124/pattern-translations)
 
 I wholeheartedly agree with Jordan, yet I'm seeing more and more lightboxes on responsive sites. There are even plenty of [tools](http://webdesignandsuch.com/responsive-image-lightboxes-websites/) and [tutorials](http://wp.tutsplus.com/tutorials/theme-development/add-a-responsive-lightbox-to-your-wordpress-theme/) encouraging designers to continue this flawed pattern (on small screens at least). A Better Way So what's a better alternative to lightboxes for small screens? In his article [Why Separate Mobile & Desktop Web Pages?](http://www.lukew.com/ff/entry.asp?1390), Luke Wroblewski discusses treating large and small screens differently when handling certain kinds of interactions: 

> Interactions that happen through modal dialogs or across modules/panels on large screens often make more sense as separate pages on smaller screens. --[Luke Wroblewski](http://www.lukew.com/ff/entry.asp?1390)
 
 Luke and others often point to Facebook as a good example of when small screens get separate pages while large screen get a lightbox. [![Facebook Modal window vs separate screen](http://bradfrost.com/wp-content/uploads/2013/01/facebook-modal.jpg)](http://bradfrost.com/wp-content/uploads/2013/01/facebook-modal.jpg) While this example demonstrates separate mobile and desktop sites, there's nothing stopping responsive designs from accomplishing the same effect. It's just another instance where [conditional loading](http://24ways.org/2011/conditional-loading-for-responsive-designs/) can come in and save the day. Here's how it works: 
 
   1. By default, simply **link to the raw image file or chunk of content**. Opening a raw image asset allows the user to pinch and zoom to read what could otherwise be entirely illegible*. For more involved content, users can comfortably interact on a dedicated screen instead of having to awkwardly interact inside a cramped overlay.
   2. Then **detect the screen size** ([perhaps using something like this](http://adactio.com/journal/5429/)) and determine whether or not to introduce the lightbox script.
   3. If the screen is large enough to accommodate the lightbox script, **inject the lightbox functionality**.
 
It's really pretty simple and barely requires any additional work, especially considering the fact that lightbox content almost always exists at its own URL. [View Demo](http://codepen.io/bradfrost/full/tfCAp) This is just yet another instance where going beyond simple pattern translation can result in a much better user experience across contexts. Similar logic applies to other UI components as well, as I demonstrate with accordions in my [mobile-first responsive design demo](http://bradfrost.com/demo/mobile-first/). * [I hate infographics](https://twitter.com/brad_frost/status/274330591388905472) for a lot of reasons. All that data is locked up in some gigantic JPG in hopes that some tech blog will take the bait, write a few vapid sentences about it and slap it at the end of the "article." Equally troubling is the fact that they are almost always [entirely illegible](http://wtfmobileweb.com/post/21027710103/the-graphic-is-reduced-in-size-for-mobile-by-being) on small screens. End rant.
  *[DETAILS]: Device, Environment, Time, Activity, Individual, Location, Social