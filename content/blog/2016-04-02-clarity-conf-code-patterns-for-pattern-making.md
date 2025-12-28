---
title: 'Clarity Conf: Code Patterns for Pattern-Making'
date: '2016-04-02'
tags:
- clarityconf
- conference
- miriam suzanne
- notes
post_id: 9762
original_link: https://bradfrost.com/blog/post/clarity-conf-code-patterns-for-pattern-making/
custom_meta:
  hide-ads: Show
---

At [Clarity Conference](http://clarityconf.com/) in San Francisco, [Miriam Suzanne](http://miriamsuzanne.com) talked about establishing patterns to make your codebase easy to document and maintain. Here are my notes from her talk: 
 
   * Miriam works at [Oddbird](http://oddbird.net/) and is the creator of [Susy](http://susy.oddbird.net/) amongst many other web tools.
   * **Patterns lead to consistency, clarity, and efficiency.**
   * Context matters - not everything needs to be Material Design. Patterns and design systems should fit the needs of the project or organization. Is it serving a 10 person team or a 200 person team? Is it for an internal company or is it in a consulting engagement?
   * Very inspired by [CSS Systems](http://blog.natbat.net/post/46614243624/css-systems) by Natalie Downe. She was one of the first people to talk about pattern portfolios and modular CSS.
   * **Our product is the architecture** \- a solid foundation for hand-off to a client. Architecture, rather than the product, is really what they're selling their clients
   * Style guides are unit tests and integration tests
   * Patterns combine languages: design, HTML, CSS, and JavaScript
   * **Style guides represent integration** \- they show context & relationships to help people make better projects.
   * **Maintenance must be integrated into processes.** If the style guide isn't integrated with the team's workflow, it will fade away.
   * Pattern API is what we're trying to build. We want to reduce opportunities to deviate from the system.
   * Basics of Web Architecture - HTML patterns are usually the core of the pattern, but we tend to focus on the CSS.
   * SMACSS, OOCSS, BEM, ITCSS, Atomic are all great methodologies for someone. There's no one right way to do things, but it's important to understand why you're choosing one method over another.
   * **Separation of concerns** \- data, logic, structure and presentation are need boundaries. These are fuzzy lines but they're still lines.
   * Sepecificity is your guide - [Inverted triangle](http://itcss.io/). CSS was designed for patterns. Classes are patterns: Don't repeat yourself. Elements share a purpose.
   * Sass extends work well when used semantically to represent "is-a" relationships.
   * **Keep naming conventions consistent across the entire team** \- that doesn't necessarily mean always dashes or underscores, but the naming should be consistent. What is this thing? The answer should be clear from the name. An example: layout region - component - element - state- js-hook
   * **`is-`** pattern from SMACSS is a great pattern.
   * **`js-`** is helpful for Javascript-speicific stuff
   * **Come up with whatever conventions you like, but make sure the whole team knows it, understands it, and practices it.** There's no one right answer, but "no answer" is totally wrong.
   * Sass patterns - defining colors can be done a ton of different ways. Look for legibility and scalability. Every technique has tradeoffs.
   * **Make documentation the lazy option** \- make it easier to go get the variable rather than going rogue.
   * [Sassdoc](http://sassdoc.com/) is great, [Herman](https://github.com/oddbird/sassdoc-theme-herman) is an extension to it. Keeps documentation automatic and easy. Sass maps can be automatically converted into a living code style guide.
   * Systems > solutions. Tools should fit you and your team's workflow, rather than the other way around.
   * Patterns should get down to the essential. Remove extra stuff like CSS properties that don't actually apply to the pattern.
   * [True](https://github.com/oddbird/true) for Sass unit tests.
   * Lint your tools
   * HTML Templates Jinja/Nunjacks pre-processors for your markup and help prevent deviation from standards.
   * Look for opportunities to simplify things and make things more legible
   * They've failed a bunch of time. Building by hand means that it will become obsolete
   * Patterns should be meaningful. Make it easy to use patterns. Users just need to learn the abstraction but are shielded from all that goes into it.
 

  *[DETAILS]: Device, Environment, Time, Activity, Individual, Location, Social
  *[RESS]: Responsive Design with Server-Side Components
  *[CMS]: Content Management System
  *[GUI]: Graphical User Interface