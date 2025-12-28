---
title: Style Guide First?
date: '2015-07-17'
tags:
- atomic design
- pattern library
- process
- style guide
- workflow
post_id: 9391
original_link: https://bradfrost.com/blog/post/style-guide-first/
custom_meta:
  hide-ads: Show
---

On a recent episode of [Shop Talk Show](http://shoptalkshow.com/episodes/174-rapidfire-47/#t=50:21), [Chris Coyier](https://css-tricks.com/) and [Dave Rupert](http://daverupert.com/) fielded a question regarding style guides and where they fit into the design/development process. Here was the question: 

> I’m working on a redesign for an old website. Should I begin by creating a style guide and then using it as a reference for myself or is the style guide born out of my redesign?
 
 The answer, complete with Dave's hilarious-yet-inaccurate impersonation of me (I've never said the word 'bro' before Dave!), was a fascinating discussion on whether or not it was a good idea to design a style guide first then use the style guide to implement the final site. Both Chris and Dave pondered how I would answer the question, which–lucky for me–I just finished discussing in my work-in-progress book _[Atomic Design](http://atomicdesign.bradfrost.com/)_. Here's what I have to say on the topic: 

> **One of the biggest advantages atomic design provides is the ability to traverse between abstract and concrete**. We can simultaneously see our interfaces broken down to their atomic elements and also see how those atomic elements combine together to form our final experiences. In his book _The Shape of Design_ , Frank Chimero beautifully articulates the power this traversal provides: The painter, when at a distance from the easel, can assess and analyze the whole of the work from this vantage. He scrutinizes and listens, chooses the next stroke to make, then approaches the canvas to do it. Then, he steps back again to see what he’s done in relation to the whole. It is a dance of switching contexts, a pitter-patter pacing across the studio floor that produces a tight feedback loop between mark-making and mark-assessing.[Frank Chimero](http://read.shapeofdesignbook.com/chapter01.html) Atomic design lets us dance between contexts like the painter Frank so eloquently describes. The atoms, molecules, and organisms that comprise our interfaces do not live in a vacuum. And our interfaces’ templates and pages are indeed composed of smaller parts. The parts of our designs influence the whole, and the whole influences the parts. The two are intertwined, and atomic design embraces this fact. When designers and developers are crafting a particular component, they are like the painter at the canvas creating detailed strokes. When they are viewing those components in the context of a layout with real representative content in place, they are like the painter several feet back from the canvas assessing how their detailed strokes affect the whole composition. It’s necessary to hone in on one particular component to ensure it is functional, usable, and beautiful. But it’s also necessary to ensure that component is functional, usable, and beautiful _in the context of the final UI_. Atomic design provides us a structure to traverse between the parts and the whole of UIs, which is why it’s crucial to reiterate that **atomic design is not a linear process**. It would be foolish to design buttons and other elements in isolation then cross our fingers and hope everything comes together to form a cohesive whole. So don’t interpret the five stages of atomic design as “step 1: atoms, step 2: molecules, step 3: organisms, step 4: templates, step 5: pages”. Instead, think of the stages of atomic design as a mental model that allows us to concurrently create final UIs and their underlying design systems.
 
 So if I had to answer the listener's question, I'd say that it doesn't make sense to design your components in isolation and only afterwards put them into context. Creating a website and it's underlying design system should be a concurrent process. Since the listener stated they were redesigning an old site, I'd first recommend they [conduct an interface inventory](https://bradfrost.com/blog/post/conducting-an-interface-inventory/) to see what patterns comprise the current site and determine which ones need to stay, go, or be merged. From there they should start designing the website, leaving behind a design system as they progress. I'm going to detail this process in [chapter 4](http://atomicdesign.bradfrost.com/chapter-4/) of my book, I just haven't gotten there yet.
  *[DETAILS]: Device, Environment, Time, Activity, Individual, Location, Social
  *[RESS]: Responsive Design with Server-Side Components