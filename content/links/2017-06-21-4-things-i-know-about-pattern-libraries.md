---
title: 4 Things I Know About Pattern Libraries
date: '2017-06-21'
tags:
- dave rupert
- design systems
- pattern library
- process
categories:
- link
post_id: 10533
original_link: https://bradfrost.com/blog/link/4-things-i-know-about-pattern-libraries/
custom_meta:
  hide-ads: Show
---

[Dave](http://daverupert.com/) shared some battle-earned insights about working in a pattern-driven manner and creating pattern libraries. I love his thoughts on the topic, and since I've seen this play out in my own work I thought I'd share my own thoughts as well. 

> Rolling out a Pattern Library is infinitely harder than building one
 
 This is 100% true. Saying "here's some UI components, go nuts" is a bit like dumping a truck full of Ikea parts onto someone's driveway. Without instructions around how to assemble the pieces into a cohesive whole, a person's going to end up frustrated and ultimately walk away from that pile of parts. In my own work as a consultant, I've increasingly been finding myself helping teams define the process(es) by which the design system finds its way into products, as well as how those applications feed back into the broader system. How to take a product from 0% using the design system to 100% design system? That process needs explicitly defined. How do you create a [technology-agnostic design system](http://bradfrost.com/blog/post/managing-technology-agnostic-design-systems/) in a way that products running disparate backend technologies can still contribute and benefit to the same frontend system? Of course the answers to these questions are both technical and cultural in nature. But I've found explicitly defining these processes and displaying them alongside the components in the [storefront](http://bradfrost.com/blog/post/the-workshop-and-the-storefront/) makes as much sense as including the instruction booklet in the same box as all those Ikea parts. 

> If you don’t have pages, it’s doesn’t solve the problem
 
 I 100% agree. Again, the parts need to paint a complete whole, and the whole needs to be comprised of independent-yet-interconnected components. This is precisely why I feel [atomic design is a helpful methodology](http://atomicdesign.bradfrost.com/chapter-2/#the-atomic-design-methodology). It allows teams to simultaneously [create both the whole (the pages) and the parts of that whole](http://atomicdesign.bradfrost.com/chapter-2/#the-part-and-the-whole) (all the components that make up those pages). This helps teams solve real problems in a specific context ("Let's build the checkout flow") in a way that thoughtfully sets aside reusable patterns ("here's all our form-related patterns"). 

> Vertical spacing will make or break you
 
 This is certainly an interesting conundrum and the interplay between different components tend to lead to unexpected spacing. Here's typically how I tend to set things up: 
 
   1. Have default spacing variables in place (i.e. `$padding-double`), and apply those to components. At the [organism](http://atomicdesign.bradfrost.com/chapter-2/#organisms) level, I try to make sure that things like lists of [molecules](http://atomicdesign.bradfrost.com/chapter-2/#molecules) don't have competing spacing
   2. Create [layout-specific CSS](http://bradfrost.com/blog/post/css-architecture-for-design-systems/) rules to define grids. I've found those layout-specific CSS rules tend to do most of the heavy lifting around spacing between components.
   3. Set up utility classes to manipulate specific instances of components. For instance, on most pages, a header component may have a `margin-bottom` applied to it to create some separation between the header and the rest of the page content. That's desirable in most cases, but maybe not on the homepage where there's a hero unit that's meant to sit flush against the header. In that instance, I would apply a utility class of `u-margin-bottom-none` to the header component.
 
As Dave mentioned in his post, Nathan Curtis's [post](https://medium.com/eightshapes-llc/space-in-design-systems-188bcbae0d62) (and conference talk!) on the topic is fantastic. 

> The Pattern Library is dead if it’s not prioritized
 
 Absolutely. When I set out to write Atomic Design, there were only 4 chapters. The chapter on [Maintaining Design Systems](http://atomicdesign.bradfrost.com/chapter-5/) didn't exist yet, but by the time I got there I realized that's where the real challenges and opportunities of a design system are. It ended up being the longest chapter in the book. Keeping the pattern library (and the broader design system) a priority is no easy task, and there are a lot of technical and cultural considerations involved in making design systems stand the test of time.
  *[DETAILS]: Device, Environment, Time, Activity, Individual, Location, Social
  *[RESS]: Responsive Design with Server-Side Components
  *[CMS]: Content Management System
  *[GUI]: Graphical User Interface