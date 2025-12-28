---
title: Josh Clark on The Full Stack Design System
date: '2017-04-12'
tags:
- atomic design
- design systems
- josh clark
categories:
- link
post_id: 10360
original_link: https://bradfrost.com/blog/link/josh-clark-on-the-full-stack-design-system/
custom_meta:
  hide-ads: Show
---

[Josh](https://bigmedium.com/) wrote up some thoughts about the fantastic, previously-[shared](http://bradfrost.com/blog/link/the-full-stack-design-system/) [Full Stack Design System](https://blog.intercom.com/the-full-stack-design-system/) article, which includes a bit where he goes to bat for atomic design. From the original article: 

> Atomic Design will tell you to take some of your basic elements (label, input, button), stick them together, and call it a molecule. Then you can reuse that molecule again and again. Further, you can stick some molecules together to form a reusable organism. The problem with every real-world example of a system like this that I’ve encountered is that they remain willfully unaware of the product being built.
 
 To which Josh replied: 

> Atomic Design does indeed promote reuse, assembling larger parts from smaller ones. However, many mistake this _philosophy_ for _linear process_ , that somehow Atomic Design demands that all design must first start by building its smallest pieces (e.g. “start with buttons and labels”) before proceeding to page- and site-level design. It’s an approach that would indeed be blind to the end-result project, placing design tactics ahead of design strategy. But that’s exactly opposite to how Brad himself approaches projects.
 
 [He's right](http://atomicdesign.bradfrost.com/chapter-2/#the-part-and-the-whole). It's not about building the parts _then_ the whole; it's about building the parts _and_ the whole. The ability to traverse between abstract and concrete is I still think the biggest benefit of working with atomic design as a mental model for constructing UIs. I've found some people strangely think atomic design claims to work as a panacea for the entire design process. As in, "all you have to do is think this way and all your problems disappear!" Thankfully, Josh clarifies this point as well: 

> Indeed, our Atomic Design projects always begin with the big-picture questions. What are the business goals for the project? What are the user needs? What’s the brand promise? When we get to individual pages, it’s about the user mindset when they arrive, and the jobs the page has to do for both user and company.
 
 In other words, we still do our jobs as designers. All the research, thinking, sketching, and planning informs how the UI system should work, and we use atomic design as a methodology to help bring those UI systems to life.
  *[DETAILS]: Device, Environment, Time, Activity, Individual, Location, Social
  *[RESS]: Responsive Design with Server-Side Components
  *[CMS]: Content Management System
  *[GUI]: Graphical User Interface