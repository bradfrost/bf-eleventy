---
title: The Part and The Whole
date: '2013-12-16'
tags:
- atomic design
- design systems
- pattern lab
- pattern library
post_id: 7259
original_link: https://bradfrost.com/blog/post/the-part-and-the-whole/
custom_meta:
  hide-ads: Show
---

Recently I've seen some confusion about designing interface patterns and pattern libraries, and have had a lot of conversations with design/development teams who are struggling with the concept of breaking interfaces down into their component parts. 

> I don't understand the idea of 'atomic design' and designing in abstraction. An element relates and impacts to all others around it.-- Matt Carey (@othello) [November 20, 2013](https://twitter.com/othello/statuses/403135577417326592)
 
 There have been some [fantastic examples of pattern libraries](http://pattern-lab.info/resources.html) cropping up lately (Hooray! Keep 'em coming), and it's becoming apparent that constructing robust design systems is a smart approach for dealing with our increasingly-complex multi-device Web landscape. However, breaking interfaces down into their component parts certainly doesn't require us to ignore the whole. Two Modes of Design In _[The Shape Of Design](http://read.shapeofdesignbook.com/chapter01.html)_ , Frank Chimero wonderfully articulates the how and why of design by comparing it to a painter's process: 

> The painter, when at a distance from the easel, can assess and analyze the whole of the work from this vantage. He scrutinizes and listens, chooses the next stroke to make, then approaches the canvas to do it. Then, he steps back again to see what he’s done in relation to the whole. It is a dance of switching contexts, a pitter-patter pacing across the studio floor that produces a tight feedback loop between mark-making and mark-assessing. [Frank Chimero](http://read.shapeofdesignbook.com/chapter01.html)
 
 I love the balance between making and reflecting, between laboring over tiny details and stepping back to see how those individual decisions impact the work as a whole. Abstract and Concrete It's been incredibly challenging to articulate what [atomic design](http://pattern-lab.info/about.html) is. Because it's not just "designing in abstraction". I've [expressed my frustration](http://www.besquare.me/session/atomic-design/) with a lot of pattern libraries and UI frameworks because the majority are simply collections of interface patterns devoid of context. I think it's essential to consider both the part and the whole during the design process, which is why I feel atomic design is a useful methodology. [![Atomic Design Methodology: Atoms, Molecules, Organisms, Templates, and Pages](http://bradfrost.com/wp-content/uploads/2013/06/atomic-design.png)](http://pattern-lab.info/about.html) Atomic design and [Pattern Lab](http://pattern-lab.info/) allow us to view our interfaces broken down into their atomic bits, but simultaneously allow us to see how all those atomic bits combine to form the final interface. **Atomic design allows designers to traverse between abstract and concrete** , the same way the painter dances between making and assessing. Striking a Balance In [my](http://bradfrost.com/blog/post/entertainment-weekly/) [experience](http://bradfrost.com/blog/post/techcrunch/) applying atomic design, I've found that the different stages serve different, yet equally important purposes: 
 
   * **[Atoms](http://pattern-lab.info/about.html#atoms)** aren't terribly practical during the design process, but serve as a [handy reference](http://24ways.org/2011/front-end-style-guides/) to come back to from time to time. While the atomic level too abstract to paint a full picture of what the interface will become, it's absolutely essential for promoting consistency, cohesion, and a shared vocabulary.
   * **[Molecules](http://pattern-lab.info/about.html#molecules), [organisms, and [templates](http://pattern-lab.info/about.html#templates)** are where the design system is constructed. Molecules and organisms are stitched together to form templates, which focus on content structure and the mechanics of how the interface will adapt across screen sizes and environments.
   * **[Pages](http://pattern-lab.info/about.html#pages)** are specific instances of the design system, where placeholder content is replaced with real representative content. Pages test the system's effectiveness. It is here where the painter steps back from the canvas to evaluate her work. If changes need to be made, they will be made at a more atomic level. 
 
We need to continue to break interfaces down into their component parts. But we also need to paint the whole picture. As we move forward, it's going to be essential to consider both the part and the whole in the design process.
  *[DETAILS]: Device, Environment, Time, Activity, Individual, Location, Social
  *[RESS]: Responsive Design with Server-Side Components