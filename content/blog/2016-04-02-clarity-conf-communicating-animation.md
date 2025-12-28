---
title: 'Clarity Conf: Communicating Animation'
date: '2016-04-02'
tags:
- clarityconf
- conference
- notes
- rachel nabors
post_id: 9768
original_link: https://bradfrost.com/blog/post/clarity-conf-communicating-animation/
custom_meta:
  hide-ads: Show
---

At [Clarity Conference](http://clarityconf.com/) in San Francisco, [Rachel Nabors](http://rachelnabors.com/) talked about UI animation and how to document animation within a design system. Here are my notes: 
 
   * Rachel has worked on [Dev Tools Challenger](http://devtoolschallenger.com/), [Alice in Videoland](http://rachelnabors.com/alice-in-videoland/talk/), and helped with the [motion portion](https://www.lightningdesignsystem.com/design/motion/) of Salesforce's Lightning Design System.
   * **Animation is important for consistent branding and UX.** It makes people feel like there are physical laws that your UI adheres to.
   * Challenges for consistent animations: communication issues, inadequate deliverables for implementation, and a lack of respect. It's hard to find good animation guideline examples online.
   * Designers want animation docs to be thematic, theoretical, and educational. Developers want them to be granular, component-based, instructional, maintainable.
   * With documentation, you can show what's there and why, provide smart defaults, provide unity (choreography), and guidance for future contributors.
   * Animations designed in code can often look too mechanical, sort of like designs that start in code.
   * Developers loathe getting gifs and movies, then are told "here, just make this."
   * **Easing:** Rate of change: ease-in, ease-out, bounce. Cubic beziers help make custom animations.
   * Fades and color changes look best with more linear, subtle curves. Bounces increase animacy and add an air of fun.
   * **Timing:** animation can't happen without a duration. For the Lightning Design System, they established a motion modular scale for animation timing.
   * Timing limitations: try to stay inside 70 to 700 milliseconds. 200-300ms is a sweet spot. Shorter durations for fades and color changes, longer durations for large movements, use milliseconds instead of seconds.
   * **Properties** : what's being changed? `opacity` and `transform` are the most performant properties to animate on the web.
   * "The art challenges the technology and the technology inspires the art." - Pixar. Push the limits of what's technically possible.
   * **Combine easing, timing, and properties to make an animation vocabulary**
   * Making an animation vocabulary: "zoom" vs "zoooooooooom" pay attention to how people communicate animation. Pave the cowpaths when establishing your animation language (i.e. look at Keynote's motion transition effects). Use your words to communicate animation.
   * **Storyboards** \- began in film but can be used on the web as well. Sometimes storyboards can be more useful than a video for documentation. **Define the actions:** when [this trigger happens], do [this action]. Storyboarding tools: go old school with Post-Its, Rachel has a storyboard template, [storyboardsthat.com](http://www.storyboardthat.com/).
   * **Animatics** involves demoing animation.An animation is worth a thousand meetings. They're not deliverables: don't throw videos at developers. They're guidelines and they don't provide people with actionable content. Animatics tools: Keynote, AfterEffects, Principle app, Stop Motion app
   * **Prototypes** \- real working examples can be great to demo animation, but they're bad for documentation. Prototyping tools: Native-oriented tools: principle, pixate, web-oriented: Invision + gifs, UX Pin, Framer.js
   * **Combine storyboards, animatics, prototypes to provide solid documentation** on look and feel as well info on how to reproduce animations
   * **Generating buy-in:** not everyone is as excited about animation as you. Group documentation can help people feel involved. Wireframe exercise. Cultivate and champion animation: get more people on board. Get a co-conspirator on board.
   * Do it anyways. If people aren't caring about animation, just make it happen anyways.
 

  *[DETAILS]: Device, Environment, Time, Activity, Individual, Location, Social
  *[RESS]: Responsive Design with Server-Side Components
  *[CMS]: Content Management System
  *[GUI]: Graphical User Interface