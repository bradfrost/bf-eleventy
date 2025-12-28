---
title: From Template to Atoms.
date: '2023-10-06'
tags:
- atomic design
categories:
- link
post_id: 18269
original_link: https://bradfrost.com/blog/link/from-template-to-atoms/
---

I'm definitely not trying to single [this particular article](https://bootcamp.uxdesign.cc/from-template-to-atoms-c22f0a2ab813), but it's a common misconception about atomic design that's persisted over the years: 

> Starting Point: The initial stage of Atomic design begins with the smallest design elements, such as buttons, labels, form inputs, and error messages. These are the atomic units of design that serve as the foundation for the entire system.
 
 This is an incorrect interpretation of atomic design. Atomic design is not a sequential process, which is something I've made it clear from Day 1. From [my book](https://atomicdesign.bradfrost.com/chapter-2/): 

> Atomic design provides us a structure to navigate between the parts and the whole of our UIs, which is why it’s crucial to reiterate that **atomic design is not a linear process**. It would be foolish to design buttons and other elements in isolation, then cross our fingers and hope everything comes together to form a cohesive whole. So don’t interpret the five stages of atomic design as “Step 1: atoms; Step 2: molecules; Step 3: organisms; Step 4: templates; Step 5: pages.” Instead, **think of the stages of atomic design as a mental model that allows us to concurrently create final UIs and their underlying design systems**.
 
 Atomic design is a mental model that allows people to consider the whole and the parts of the whole at the same time. The linked article invokes a painter: 

> In contrast to Atomic design, the process of creating UI screens often resembles the work of a painter drawing a portrait. While both Atomic design and UI screen creation aim for cohesive and visually pleasing results, the approach differs significantly.
 
 Again, this misrepresents atomic design. Turns out I also invoke a painter when describing atomic design (with some great help from [the great Frank Chimero](https://shapeofdesignbook.com/)): 

> In his book The Shape of Design, Frank Chimero beautifully articulates the power this traversal provides: 

> The painter, when at a distance from the easel, can assess and analyze the whole of the work from this vantage. He scrutinizes and listens, chooses the next stroke to make, then approaches the canvas to do it. Then, he steps back again to see what he’s done in relation to the whole. It is a dance of switching contexts, a pitter-patter pacing across the studio floor that produces a tight feedback loop between mark-making and mark-assessing.[Frank Chimero](http://read.shapeofdesignbook.com/chapter01.html)

Atomic design lets us dance between contexts like the painter Frank so eloquently describes. The atoms, molecules, and organisms that comprise our interfaces do not live in a vacuum. And our interfaces’ templates and pages are indeed composed of smaller parts. The parts of our designs influence the whole, and the whole influences the parts. The two are intertwined, and atomic design embraces this fact. When designers and developers are crafting a particular component, we are like the painter at the canvas creating detailed strokes. When we are viewing those components in the context of a layout with real representative content in place, we are like the painter several feet back from the canvas assessing how their detailed strokes affect the whole composition. It’s necessary to zero in on one particular component to ensure it is functional, usable, and beautiful. But it’s also necessary to ensure that component is functional, usable, and beautiful  _in the context of the final UI_. Atomic design provides us a structure to navigate between the parts and the whole of our UIs, which is why it’s crucial to reiterate that **atomic design is not a linear process**. It would be foolish to design buttons and other elements in isolation, then cross our fingers and hope everything comes together to form a cohesive whole. So don’t interpret the five stages of atomic design as “Step 1: atoms; Step 2: molecules; Step 3: organisms; Step 4: templates; Step 5: pages.” Instead, **think of the stages of atomic design as a mental model that allows us to concurrently create final UIs and their underlying design systems**.
 
 It's been fascinating to see this buzzword take off and take on a life of its own. I ultimately don't care about these misinterpretations all that much, but occasionally I like to remind folks that atomic design is a mental model for thinking about user interfaces as interconnected, hierarchical systems. Atomic design helps people consider the whole and the parts of that whole at the same time.
