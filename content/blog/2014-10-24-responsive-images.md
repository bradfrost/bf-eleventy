---
title: Responsive Images
date: '2014-10-24'
tags:
- development
- images
- responsive images
- responsive web design
post_id: 8339
original_link: https://bradfrost.com/blog/post/responsive-images/
custom_meta:
  hide-ads: Show
---

There's three topics I avoid discussing: religion, politics, and responsive images. But now that the responsive images dust is settling, I figured it's time to face the music and actually learn this stuff. So here's how I'm going to write the majority of my responsive images: 
     
     
     ![Alt Text](</code><code>small.jpg</code><code>)
 
 That's it. [See a demo](http://codepen.io/bradfrost/full/fcltn/). My biggest priority is avoiding sending gigantic images to small screens, and this does the trick. The [smallwidth] and [largewidth] are the widths of the image assets, which'll change per use case. I'll use the [Picturefill](http://scottjehl.github.io/picturefill/) polyfill to make it all work. Most of my images won't need swapped out, just the big honkin' hero image types. I could further explain this, but in an effort to keep things simple I'll stop writing now. **Update:** I've updated this post to reflect the [suggestion](http://alistapart.com/blog/post/article-update-dont-rely-on-default-sizes/) to include the `sizes` attribute in the markup.
  *[DETAILS]: Device, Environment, Time, Activity, Individual, Location, Social
  *[RESS]: Responsive Design with Server-Side Components