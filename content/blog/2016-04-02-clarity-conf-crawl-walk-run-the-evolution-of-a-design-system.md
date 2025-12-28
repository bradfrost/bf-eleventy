---
title: 'Clarity Conf: Crawl, Walk, Run – the Evolution of a Design System'
date: '2016-04-02'
tags:
- brandon ferrua
- clarityconf
- conference
- notes
- stephanie rewis
post_id: 9764
original_link: https://bradfrost.com/blog/post/clarity-conf-crawl-walk-run-the-evolution-of-a-design-system/
custom_meta:
  hide-ads: Show
---

At [Clarity Conference](http://clarityconf.com/) in San Francisco, [Stephanie Rewis](http://blog.w3conversions.com/) & [Brandon Ferrua ](https://twitter.com/bferrua)discussed the creation of the CSS framework that's part of Salesforce's [Lightning Design System](https://www.lightningdesignsystem.com/). Here are my notes: 
 
   * Salesforce has 20,000 employees and has made lots of acquisitions. There are internal developers and lots of external developers.
   * Historically, CSS was written by engineers who would rather be writing Java. It became very clear they needed a design system.
   * There are a lot of developers, but only about 100 people on their UX team. They touch lots of data in addition to the UI.
   * **Learning to crawl** \- Launched Salesforce1, and launched a living style guide to go along like it. They got lots of great feedback, including external developers who said "How can my app look like this?"
   * Needed a more comprehensive design system to serve all their products and users.
   * Design system components: CSS Framework + UI Library. The goals were to eliminate red lines and instead reference real code, and also make it easy for people to copy and paste.
   * They did a design audit and [inventoried](http://bradfrost.com/blog/post/conducting-an-interface-inventory/) all components in designers' comps.
   * **Design Tokens:** Fonts, Font sizes, weights, line heights, background colors, etc. These are shared attributes across all their products, so they wanted to make a system to keep that stuff consistent.
   * **[Theo](https://github.com/salesforce-ux/theo)** is an open source tool that allows Salesforce to share tokens across products using a JSON object that propagates out to all instances (across web and native applications).
   * Broke down components down to their smallest patterns and objects.
   * **Clarity and understandability are key to worthwhile class names.** This may lead to more verbose class names, but **clarity trumps verbosity.**
   * Used modified BEM conventions. They had to modify syntax because BEM and XML don't play nicely (double dashes aren't allowed in XML comments)
   * **Learning to Walk -** Enterprise apps are unique. They demand content and data-rich interfaces. They lack vertical rhythm normally found in more document-centric UIs.
   * Heading levels may vary and components should be agnostic. They flattened all the font-sizes in headings so developers are encouraged to think about semantics without worrying about visual styling.
   * **Accessibility** \- use ARIA roles, REM units (to address users changing default settings),
   * **Play well with others** \- The Salesforce CSS framework namespaces their styles to avoid conflicts with legacy/external components (i.e. `.button` coming from some other framework). They added a wrapper div to scope components that are specifically Salesforce.
   * **Learning to Run** \- How do we maintain consistency across a massive organization? How do you scale? How do we keep our design system agnostic?
   * **Minimize dependencies** \- didn't overcomplicate things. Didn't overpromise on the system.
   * You don't know what you don't know. What makes up your ecosystem? Who are your customers? Try to understand your potential footprints.
   * MVP: Tokens, Icons, HTML, CSS, Guidelines. They specifically avoided adding JavaScript to their framework, as different developers use different frameworks: Lightning, React, Angular, jQuery, etc.
   * **States and variants** \- The pattern library demonstrates all the states and variants that components could have. The code preview shows what classes are added/removed from the component in order to accomplish that state. This gives designers and developers a good idea of all the permeations of any component.
   * **Documentation** \- Show developers how to accomplish with Javascript without being tool-specific. Build accessibility into the documentation and make it easy to implement.
   * Avoiding the potholes - We have to be forward thinking but backwards compatible - what happens when a change is written? Salesforce has 3 releases a year that the design team needs to support.
   * Design system team need to provide a migration path to get developers to update their applications. Developers need to understand what has been modified, retired, or added.
   * **Sass deprecate** \- build deprecation messages into Sass workflow to give warning to developers that code is going away soon.
 

  *[DETAILS]: Device, Environment, Time, Activity, Individual, Location, Social
  *[RESS]: Responsive Design with Server-Side Components
  *[CMS]: Content Management System
  *[GUI]: Graphical User Interface