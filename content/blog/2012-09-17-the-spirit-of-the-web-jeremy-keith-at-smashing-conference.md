---
title: The Spirit of the Web - Jeremy Keith at Smashing Conference
date: '2012-09-17'
post_id: 4540
original_link: https://bradfrost.com/blog/post/the-spirit-of-the-web-jeremy-keith-at-smashing-conference/
---

In [The Spirit of the Web](http://smashingconf.com/conference/day:monday#jeremy-keith "http://smashingconf.com/conference/day:monday#jeremy-keith"), [Jeremy Keith](http://adactio.com/ "http://adactio.com/") discusses what the web is and how progressive enhancement is more important than ever in order to deal with the influx of connected devices.  What is the web?

  * Does the web have a soul? What is the web? It means different things to different people. 
  * **The web is agreement** It's protocols, formats, and more all working together to make everything work. 
  * The web is files addressable at URLs delivered over HTTP. 
  * HTTP defines the verbs of the web. How do these files get transferred. Get, post, put, delete. **Eventually narrowed down to get and post.** Get for retrieving things, and post for writing, editing and deleting. Use get for safe requests. Post has side-effects. Get is by far the most common 
  * Files - HTML, CSS, JavaScript, images. A website is a bundle of files. 
  * A website is a website no matter way it's consumed, from tablets, e-readers, screen readers, text only browsers, etc, etc. However, many people think of a website as a specific desktop thing. 

Consensual Hallucination

  * We've all participated in a consensual hallucination of what the web is. 
  * 640 x 480, 800 x 600, 1024 x 768 
  * **Control isn't part of the spirit of the web**. Read [The Dao of Web Design](http://www.alistapart.com/articles/dao/)
  * The first thing you do in a graphic editor is set a width and height. The tools are making decisions for you. Don't make design decisions off the assumptions of our tools. 
  * Our processes and tools need to change as well in order to embrace the web's flexibility. 
  * New tools move us in the right direction. See [Style Tiles](http://styletil.es) by Samantha Warren and [Pattern Primer](http://patternprimer.adactio.com/) by Jeremy Keith 
  * Start with the content out instead of a container that you simply pour content into. 
  * Especially important for responsive design. Give up control. Give up the consensual hallucination that we have complete control. **That doesn't mean giving up quality.**
  * "My website will meet you wherever you are" -Trent Walton 
  * Responsive design isn't about mobile. It's not about tablets. It's not about desktops.**It's about The Web**. 
  * The first web page is inherently fluid. The web is responsive by default. It's our job not to screw that up. 

Progressive Enhancement

  * You can have your cake and eat it too. 
  * The misconception is that progressive enhancement means designing for the lowest common denominator. That's false. It's about _starting_ from the lowest common denominator, and building up from there. 
  * Start with HTML, layer on CSS, then layer on JS. However, progressive enhancement can be used within each level as well. 
  * **Device diversity is not a bug, it's a feature of the web.**
  * There is a difference between [support and optimization.](http://bradfrost.com/blog/mobile/support-vs-optimization/)
  * Test on as many devices as possible. Set up device labs to pool together devices. 
  * **We're incredibly lucky that the default mentality for the web is to _share_**. 

Responsive images 

  * Hacks, standards, formats - hacks aren't a bad thing. They're ingenious solutions until standards can arrive. Better yet 
  * **Best practices:** start with the small screen size first and only make one HTTP request per image asset. 
  * We like to think like we're solving new problems, but often times we're solving problems that have been around in the past. Responsive images are similar to lowers 
  * One way to deal with responsive images is to avoid the problem altogether. Instead of having to load larger images, perhaps introduce multiple layout columns to avoid having to deal with them all together. 
  * Another technique was creating more monochromatic images which compress a lot better. 

Performance

  * **The best way to be future-friendly is to be backwards-compatible.**
  * When did we stop caring about file size? The average 
  * The best thing you can do for performance is to simply reduce the amount of stuff you have to download. 
Conditional loading - Load in auxiliary content whenever screen space becomes available. 

URLs

  * URLs are a huge feature of the web. We should be paying a lot more important 
  * URLs are universal. They are the one universal syntax of the web. 
  * URLs are for humans. Make them human readable. Do not repeat yourself. 
  * URL First design forces us to think about "what content will be retrieved by this URL" 
  * The URL is an agreement to serve something from a predictable location for as long as possible. 

  * We decide what the spirit of the web is. 

  *[DETAILS]: Device, Environment, Time, Activity, Individual, Location, Social