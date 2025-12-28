---
title: Content and Display Patterns
date: '2016-01-04'
tags:
- atomic design
- brand.ai
- dan mall
- pattern lab
- patterns
- process
- workflow
categories:
- link
post_id: 9640
original_link: https://bradfrost.com/blog/link/content-and-display-patterns/
custom_meta:
  hide-ads: Show
---

[Dan Mall](http://danielmall.com/) posted an absolutely epic article that encapsulates a lot of the pattern-based concepts the community has been advancing for the last few years. I highly recommend reading it in its entirety. Here are some key highlights I took away from the article: 

> In order to make a site that people can use, every element on the screen needs a Content pattern and a Display pattern applied to it. Embracing the difference in pattern types is the key to making a modular design system infinitely more scalable.
 
 **Pattern-based thinking is indeed impacting[every single part of our process](http://atomicdesign.bradfrost.com/chapter-1/#tearing-up-the-page)**, from strategy to workflow to content modeling to code to visual design to front-end markup. While all these facets are certainly related, they are not one in the same. That's why I think Dan hits the nail on the head that when it comes to creating UI design systems, it's critical to **make a distinction between Content and Display patterns.**

> With an abstract Display pattern like this, I can choose multiple kinds of Content patterns to visualize. That leads me to an interesting approach when thinking about how to think and talk about patterns for modular sites: 

  1. Identify the type of content (Content pattern).
  2. Choose visual option (Display pattern) to render said content.

 
 **By creating agnostic Display patterns, they become far more versatile** since a whole bunch of different Content patterns can be poured into them. A Rubbermaid container doesn't really care what's inside it, and we need to treat our Display patterns in a similar manner. Of course the creation of these Display patterns should be informed by the Content going inside them, but that doesn't mean we must create tightly-coupled Content-and-Display patterns. 

> ...when thinking about patterns, content strategists are primarily thinking about Content patterns, designers are primarily thinking about Display patterns, and front-end developers are responsible for bringing the two together.
 
 Using a recent project as a fantastic case study, Dan concludes that **different disciplines will focus on different pattern types, which will then coalesce in the browser as a living, breathing design system.** Dan admits this discipline-based separation might be oversimplifying things, but he's largely right. I think this point really underscores **the need for teams to be[comprised of complementary T-shaped skillsets](http://bradfrost.com/blog/post/i-have-no-idea-what-the-hell-i-am-doing/)** if successful work is to be created. Pragmatically speaking, each discipline must focus on their respective work in order to get things done, but it's essential for each person to know how the other disciplines' focuses will impact their own work and the project as a whole. That's why **true[communication and collaboration](http://atomicdesign.bradfrost.com/chapter-4/#its-people) become the glue that hold a project together.** Successful design systems encapsulate the teams' collective knowledge to ensure the user has the best experience possible. 

> One of the largest pitfalls in making a modular site is coding exactly to what’s been Photoshopped. A comp is a snapshot in time, an example of elements in use, _not_ canonical documentation for those elements. (That’s exactly why [comps may be an artifact of an older time in web design](http://danielmall.com/articles/the-post-psd-era/ "“The Post-PSD Era,” by Dan Mall").) It often falls to the developer to see through the pixels of a comped element to find the actual design pattern. _This is why[development is design](http://atomicdesign.bradfrost.com/chapter-4/#development-is-design)_.
 
 Yes, yes, a thousand times yes. It's so **incredibly crucial to treat development as a key part of the design process** , and Dan rightfully emphasizes the need for organizations to adjust their setup to make this happen. As I [recently wrote](http://atomicdesign.bradfrost.com/chapter-4/#development-is-design), there are tons of things that simply can't be articulated in a static comp: 

>   * Flexibility
  * Impact of the network
  * Interaction
  * Motion
  * Ergonomics
  * Color and text rendering
  * Pixel density
  * Scrolling performance
  * Device and browser quirks
  * User preferences

 
 In order to account for all those not-necessarily-visual aspects of the design, we must **get into the browser as quickly as possible and spend the vast majority of our time there.** Spend more time making websites, rather than pictures of websites. 

> For those that are a bit newer though, one of the exercises I often turn to when I’m having trouble visualizing a content workflow is to think about how my boss, my client, or I would manage and maintain the content. I do that by [designing a fake CMS](http://www.slideshare.net/danielmall/hulkamania-design/27 "A snippet of a talk by Dan Mall") for the piece I’m working on.
 
 I love this idea, and think Dan's super smart for thinking of ways to create a separation between Content and Display patterns while simultaneously showcasing what it looks like when those worlds collide. This is a big part of what Pattern Lab does. It creates a clear separation between patterns' structure and the content that goes inside them, but also allows you to articulate everything put together. 

> Though I haven’t come across a GUI that lets you independently modify Display and Content patterns exactly like this, it’s no surprise that content management systems are trending toward the [decoupled](https://www.contentful.com/r/knowledgebase/headless-and-decoupled-cms/ "“Headless and decoupled CMS: the essential guide,” on Contentful") route.
 
 I'm starting to see some exciting things taking shape in this area. [Brand.ai](https://brand.ai), a product for creating and documenting living pattern libraries, has a really cool feature that surfaces all the properties of a given Display pattern. Moreover, the tool has a "playground" feature that allows you to manipulate those properties and adjust the content within the pattern. [![Brand.ai button pattern properties](http://bradfrost.com/wp-content/uploads/2016/01/Brand.ai_.png)](https://brand.ai/styleguide/brandai-components/buttons) All of this allows your team to have a better idea of what your design system is capable of. In my view, Dan's post perfectly sells the promise of pattern-based thinking and shows how to actually make it happen. Content and Display patterns are different yet related concepts, and our design systems and workflows should embrace this fact.
  *[DETAILS]: Device, Environment, Time, Activity, Individual, Location, Social
  *[RESS]: Responsive Design with Server-Side Components
  *[CMS]: Content Management System
  *[GUI]: Graphical User Interface