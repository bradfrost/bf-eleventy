---
title: Frontend Design
date: '2016-02-17'
tags:
- design
- development
- frontend design
- process
- workflow
post_id: 9687
original_link: https://bradfrost.com/blog/post/frontend-design/
custom_meta:
  hide-ads: Show
---

![Frontend design](http://bradfrost.com/wp-content/uploads/2016/02/frontend-design.gif) Somewhere between design – a world of personas, pixels, and polish – and engineering – a world of logic, loops, and linux  – lies frontend design. **Frontend design involves  creating the HTML, CSS, and presentational JavaScript code that makes up a user interface. ** A frontend designer (who may also go by UI developer, client-side developer, UI engineer, [design engineer](http://snook.ca/archives/opinion/design-engineering%0A), frontend architect, designer/developer, prototyper, unicorn, or [Bo Jackson](https://www.youtube.com/watch?v=-GPxkpjCvWI)) lives in a sort of purgatory between worlds: 
 
   * They understand UX principles and best practices, but may not spend their time conducting research, creating flows, and planning scenarios
   * They have a keen eye for aesthetics, but may not spend their time pouring over font pairings, comparing color palettes, or creating illustrations and icons.
   * They can write JavaScript, but may not spend their time writing application-level code, wiring up middleware, or debugging.
   * They understand the importance of backend development, but may not spend their time writing backend logic, spinning up servers, load testing, etc.
 
Of course this varies from person to person. Sometimes one person handles frontend design in addition to their other roles. They may primary be a developer (making them a "full-stack developer" as the kids say) or they may be a designer (making them a "full-stack designer" I guess?). Sometimes – especially as organizations get larger – frontend design is handled by people who often find themselves awkwardly siloed in one department or another. I talk about my own experience in my [book](http://atomicdesign.bradfrost.com/chapter-4/#development-is-design): 

> When a previous employer discovered I wrote HTML, CSS, and presentational JavaScript, they moved me to sit with the engineers and back-end developers. Before too long I was being asked, “Hey Brad, how long is that middleware going to take to build?” and “can you normalize this database real quick?” Here’s the thing: I’ve never had a computer science class in my life, and I spent my high school career hanging out in the art room. Suffice it to say those requests made me extremely uncomfortable. There’s a fundamental misunderstanding that all coding is ultra-geeky programming, which simply isn’t the case. HTML is not a programming language. CSS is not a programming language. But **because HTML and CSS are still technically code, frontend development is often put in the same bucket as Python, Java, PHP, Ruby, C++, and other programming languages**. This misunderstanding tends to give many frontend developers, myself included, a severe identity crisis.
 
 This distinction between frontend UI code and "real programming" has real ramifications on organizational structure: 

> Organizationally, there is often a massive divide between designers and developers (or “marketing” and “IT”, or “creative” and “engineering”, or some other divisive labels). Designers and developers often sit on different floors, in different buildings altogether, in different cities, and sometimes even in different countries in different continents. While some of this organizational separation may be justified, **creating a division between designers and frontend developers is an absolutely terrible idea**. Here’s the thing: HTML, CSS, and presentational JavaScript build user interfaces – yes, the same user interfaces that those designers are meticulously crafting in tools like Photoshop and Sketch. In order for teams to build successful user interface design systems together, **it’s crucial to treat[frontend development as a core part of the design process](http://bradfrost.com/blog/post/development-is-design).**
 
 That's why I'm encouraged to read about how companies like Optimizely are [structuring](https://medium.com/design-optimizely/the-structure-of-optimizely-s-design-team-97e5eb3ed712#.dfelscjif) their [teams](https://medium.com/design-optimizely/why-we-hire-ui-engineers-on-optimizely-s-design-team-b2a789553b79#.xuvh5uw0l) to include frontend work as part of the design process. [Jonathan Snook](https://twitter.com/snookca) [shared some absolutely brilliant thoughts](http://snook.ca/archives/opinion/design-engineering%0A) on the topic based on his experience at Shopify. I'm excited to see this awareness cropping up, and encourage organizations to include frontend design as a key part of their design process. I personally think that people who are skilled at frontend design are in a great position to help bridge the divide between the design and development worlds. They are [mortar](http://bradfrost.com/blog/post/job-title-its-complicated/) that help hold the bricks in place. Existing in purgatory between worlds may sound like a bad thing, but it doesn't have to be! Embrace the fuzziness, encourage frontend designers to exist between worlds, and let collaboration and great work ensue.
  *[DETAILS]: Device, Environment, Time, Activity, Individual, Location, Social
  *[RESS]: Responsive Design with Server-Side Components
  *[CMS]: Content Management System
  *[GUI]: Graphical User Interface