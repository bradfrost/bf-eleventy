---
title: 'Clarity Conf: Baking Accessibility In'
date: '2016-04-02'
tags:
- clarityconf
- conference
- cordelia mcgee-tubb
- notes
post_id: 9772
original_link: https://bradfrost.com/blog/post/clarity-conf-baking-accessibility-in/
custom_meta:
  hide-ads: Show
---

At [Clarity Conference](http://clarityconf.com/) in San Francisco, [Cordelia McGee-Tubb](http://cordeliadillon.com/) talked about building accessibility into design systems. Here are my notes: 
 
   * Cordelia is an accessibility specialist at Dropbox and used to work at Salesforce.
   * **Accessibility is creating experiences that anyone can use regardless of their abilities.** Creating flexible systems should consider the experiences of people with disabilities from the very start, not just through tacked-on accommodations.
   * As style guide makers, you are creating the cookbooks that everyone else reads. Things like Bootstrap are like Martha Stewart's cookbook, people copy and paste code assuming it's good. Consumers of the style guide want to use your recipes, so give them the best recipes you can. But at the end of the day, it's all about the end users of your creations.
   * People are talking less about _accessibility_ these days, but rather talking about about _universal design_. **Think about users that have needs different than your own.**
   * Foundational ingredients of a component system: **use semantic HTML.** Screen readers rely on crawling HTML, so make it semantic. If it looks like a button and functions like a button, make it a `button`.
   * **Form fields:** Don't remove `label`s and use `placeholder` instead. Use visible `input` fields and create an association using `for`.
   * Give images `alt` text, even for icons. You can use aria-hidden=true to have screenreaders ignore an icon that already has adjacent text next to it.
   * Include a dash of [ARIA](https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA). Use ARIA whenever you have models, menus, accordions, tabs, alerts, trees, etc.
   * Make keyboard interactions as rich as mouse interactions. Lots of people don't interact with your experience with a mouse.
   * Don't forget about focus styles. Lots of people don't like default focus styles, but don't just remove them entirely. Create better, custom focus styles, which is good for branding as well as accessibility.
   * Color. There are two color rules: Maintain a reasonable contrast between text and background colors, and don't use color alone to convey meaning.
   * Navigate in grayscale mode to address color-specific accessibility issues.
   * **[Scooter](http://dropbox.github.io/scooter/) is Dropbox's CSS library** and has a lot of accessibility stuff built in.
   * **Include accessibility info in your documentation.** Lightning Design System and Bootstrap include accessibility-specific stuff. Write component-specific documentation. Encourages people to pay attention to accessibility and spreads best practices. General documentation: include general accessibility guidelines that helps set the stage. Use both together for holistic documentation.
   * Bake accessibility in from the beginning. Use semantic HTML, alt text, ARIA, keyboard accessibility, Be mindful color usage, and write good accessibility documentation
 

  *[DETAILS]: Device, Environment, Time, Activity, Individual, Location, Social
  *[RESS]: Responsive Design with Server-Side Components
  *[CMS]: Content Management System
  *[GUI]: Graphical User Interface