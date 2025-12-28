---
title: 'Email Responses #2: "Commonly Used Screen Sizes"'
date: '2015-07-06'
tags:
- media queries
- responsive web design
- strategy
post_id: 9370
original_link: https://bradfrost.com/blog/post/email-responses-2-commonly-used-screen-sizes/
custom_meta:
  hide-ads: Show
---

I recently got an email from a company embarking on a responsive redesign project. From the sounds of it, they're looking to [retrofit](https://bradfrost.com/blog/post/responsive-strategy/#retrofit) their existing site and get it out the door fast. Which sounds great, until I read this:

> We're just going to start with 3-5 of most commonly used screen sizes and go from there vs re-designing everything responsive.
 
 This is a fascinating misconception that I've heard articulated many times over the years. It's saying "oh we don't have the time to go really truly responsive, but we do have the time to make 'mobile', 'tablet', and 'desktop' versions of our layout. And that somehow this will save time and effort. Designing only for "commonly used screen sizes" is something that will ultimately take more time and cost more money than creating a fully responsive layout out of the gate. [I've written and talked about this before](https://bradfrost.com/blog/post/7-habits-of-highly-effective-media-queries/#content), but the basic gist is that "commonly used screen sizes" is a moving target that's always changing.

> Don’t use popular device dimensions (320px = iPhone portrait, 480px = iPhone landscape, 768px iPad portrait, etc) to determine breakpoints. The device landscape is always changing, so today’s values might be moot even just a year down the road. [The Web is inherently fluid](http://alistapart.com/article/dao), so it’s our job to create interfaces that look and function beautifully on any screen instead of in just a few arbitrary buckets.
 
 It's best to create a device-agnostic layout that will adapt itself to any screen resolution. That may sound like it would take a lot more effort, but it's really quite the opposite. By creating a [device-agnostic](http://trentwalton.com/2014/03/10/device-agnostic/) experience you're able to better reach more customers in more environments with less overall effort.
  *[DETAILS]: Device, Environment, Time, Activity, Individual, Location, Social
  *[RESS]: Responsive Design with Server-Side Components