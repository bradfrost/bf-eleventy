---
title: Keeping Pattern Libraries in Sync
date: '2014-12-29'
tags:
- marcelo somers
- pattern lab
- pattern library
- style guide
categories:
- link
post_id: 8793
original_link: https://bradfrost.com/blog/link/keeping-pattern-libraries-in-sync/
custom_meta:
  hide-ads: Show
---

[Marcelo Somers](https://twitter.com/marcelosomers/) responded to my [style guide best practices](https://bradfrost.com/blog/post/style-guide-best-practices/) post with some thoughts on how to keep pattern library and production CSS/JS in sync. There's some great stuff in there, however I've found the CSS and JS aren't the difficult things to keep in sync. From my post: 

> CSS and JS can be easily migrated from one place to another, but pattern markup is where things can get challenging. 
 
 There are a few things that make it challenging to keep markup in sync. Templating languages can differ between the style guide and production environment, and CMS-specific logic can throw monkey wrenches into pattern markup. I've had a few people show me how they keep their style guide and production markup in sync, but unfortunately these solutions are difficult to scale. I think Pattern Lab can help make this easier, and Dave is working on a new version that lets people use different templating engines in the hopes that markup patterns can be injected into production environments. I'm looking forward to working with people to make this a (scalable) reality.
  *[DETAILS]: Device, Environment, Time, Activity, Individual, Location, Social
  *[RESS]: Responsive Design with Server-Side Components