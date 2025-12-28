---
title: 'Clarity Conf: Deconstructing Web Systems; or, A Pattern Language for Web Development'
date: '2016-04-01'
tags:
- clarityconf
- claudina sarahe
- conference
- notes
post_id: 9778
original_link: https://bradfrost.com/blog/post/clarity-conf-deconstructing-web-systems-or-a-pattern-language-for-web-development/
custom_meta:
  hide-ads: Show
---

At [Clarity Conference](http://clarityconf.com/) in San Francisco, [Claudina Sarahe](https://twitter.com/itsmisscs) discussed the many types of patterns that make up frontend web systems. Here are my notes: 
 
   * Claudina works on [Casper](https://casper.com/) on their design system.
   * Patterns are a collective memory of things which work in our surroundings.
   * Pattern language is a method of describing good design practices within a field of experiences.
   * Christopher Alexander wrote _[A Pattern Language](http://www.amazon.com/Pattern-Language-Buildings-Construction-Environmental/dp/0195019199)_ and _[Synthesis of Form](http://www.amazon.com/Notes-Synthesis-Form-Harvard-Paperbacks/dp/0674627512)_. These books became required reading for researchers and computer science, which ultimately influenced Object-Oriented Programming.
   * _A Pattern Language_ \- the main goal was to empower people to design and build at scale. You don't always need an architect to build things. Alexander intended to release the book as a three-ring binder, as was thinking about evolution and adaptation.
   * **Anatomy of a pattern:** Name, Context - a way to identify, Problem, Solution(s), Related patterns
   * Do we need a pattern language for front-end? **Pattern languages formalize values, an structure our knowledge of complex systems.** A pattern language forces us to remember we're working in a system.
   * Frontend is more than just design systems, and there are many types of patterns we encounter:
   * **Global patterns:** Community guidelines, temporary autonomous zones (conferences and meetups), interdependent disciplines (UI, UX, design), web guidelines (W3C), open borders,
   * **Process patterns:** Philosophy of the work. Purpose, Planning/management/ code reviews, cross functional teams, single origin of truth, documentation, naming, design systems
   * **Workspace patterns:** Editors, CLI, Syntax highlighing, Shortcuts, Git/Github, Version & Dependency Management, Configuration/Settings
   * **Project patterns:** build tools, dependencies, directory structure, linters, composable, HTML templating, CSS methodologies, JS, Content Strategy, Shareable Data, IDs
   * **Poetic structures:** Casper's design system [Night Shade](https://github.com/CasperSleep/nightshade-core) is being released later this month. [Ando](https://github.com/CasperSleep/nightshade-core) is a frontend generator and a methodology for building systems. Static site generator that builds their production sites.
   * **Naming and purpose.** [Ando](https://en.wikipedia.org/wiki/Tadao_Ando) is an architect who influenced Casper's work. "To change the dwelling is to change the city and to reform society." Casper believes to change your sleeping situation can change your life.
   * Ando's pattern language: purpose, open borders, templating, shareable data, build tools, buldling, configuration,
   * **Open borders:** the system should work with cross-disciplinary teams. Don't want to have silos, and anyone should be able contribute to the system. The system used to run on Ruby on Rails, but that wasn't designer-friendly as there were too many dependencies. A core ethos of their new system is a low barrier to entry, which means that more people can contribute.
   * **Documentation** : A way to record decisions. Code isn't self-documenting and needs to be easily referenced. Use community-vetted code tools. Pick one place to put it all and aim for establishing standards. SassDoc, JSDoc, Read the Docs, Github wiki/readme. **HTML, CSS, and JS documentation is all formatted in the same style,** making it easier for team members to document decisions.
   * **HTML Templates:** solves hard-to-maintain code. [Nunjucks](https://mozilla.github.io/nunjucks/), Jade, Swig, Handlebars/Mustache. Create reusable pieces of code that abstracts the markup, letting team members make a macro (i.e. content panel) that is basically a mixin that can be passed different parameters.
   * **Directory structure** involves organizing and grouping project files. Structuring things right means you don't have to waste a lot of time looking for files. **Component-based structure** : group everything around a component in one place (template, CSS, JS, etc). If you need to delete something, you can delete the containing folder. Build processes allow us to compile to any type of directory structure, so you should choose a directory structure that makes sense for authoring your frontend code.
 

  *[DETAILS]: Device, Environment, Time, Activity, Individual, Location, Social
  *[RESS]: Responsive Design with Server-Side Components
  *[CMS]: Content Management System
  *[GUI]: Graphical User Interface