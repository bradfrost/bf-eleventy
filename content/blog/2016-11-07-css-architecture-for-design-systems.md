---
title: CSS Architecture for Design Systems
date: '2016-11-07'
tags:
- architecture
- css
- design systems
post_id: 9942
original_link: https://bradfrost.com/blog/post/css-architecture-for-design-systems/
custom_meta:
  hide-ads: Show
---

We just created a design system for a huge organization and established a CSS architecture we're quite pleased with. It's one of the first times I've ever gotten to a project's finish line without wishing I'd done at least a few things differently. So I thought it would be great to share how we went about creating our system's CSS architecture. To give a bit of a context for the project, we were tasked with creating a design system and style guide meant to serve the organization's thousands of developers, who employ a vast array of technologies to build their over 500 internal web applications. The overwhelming majority of the organization's developers don't specialize in frontend development but rather focus on application programming, data, and logic. Because these time-stretched developers need to get their apps up and running quickly, they'd often simply copy and paste frontend code from other applications or reach for frameworks like Bootstrap to get the UI job done. As you might expect, the cumulative result of these actions is a hodgepodge of incongruent web experiences. Of course this is what we were aiming to remedy by building the organization their own a thoughtful, robust UI design system. Establish CSS Principles At the beginning of the project, we talked with developers about their process and pain points, and asked how an interface design system could make their lives easier. We went through and completed my [frontend guidelines questionnaire](https://github.com/bradfrost/frontend-guidelines-questionnaire), which resulted in a set of frontend principles that were to be encapsulated within the system. Here are the CSS-specific principles we established: 

>   * **Make it modular.** \- The design system is modular in every way, which very much applies to the way CSS is written. There should be clear separation between components.
  * **Legibility is key.** \- Developers should be able to understand CSS code at a glance and understand the purpose of any given selector.
  * **Clarity trumps succinctness** \- The design system may sometimes seem verbose, but it delivers clarity and reslience in exchange. Keeping CSS legible and scalable means sacrificing a shorter syntax.
  * **Keep things flat** \- Long selector strings should be avoided wherever possible in order to keep CSS as DOM-independent and modular as possible.
  * **Avoid conflicts** \- Since components will be deployed to many different applications, it’s critical to ensure that the design system’s CSS doesn’t conflict with other libraries and systems. This is accomplished by the system's namespacing of class names, described in more detail below.

 
 From there, we established conventions and a syntax that embraced these principles in order to meet developers' needs. Here's a look at the class syntax we came up with: Global Namespace **All classes associated with the design system are prefixed with a global namespace, which is the Company Name followed by a hyphen:**
     
     
     .cn-
 
 If you're working on a CSS architecture that is only meant to be served to a single site or if you have a lot of control over your environment, including a global namespace is likely unnecessary. But if your design system is intermingling with other technologies, it might make sense to create an identifier for system-specific code. [Lightning Design System](https://www.lightningdesignsystem.com/) employs a similar approach for their system (with the prefix `.slds-`) as third-party developers make use of their system in environments Salesforce may not control. In our case, many of our client's developers use [Angular](https://angularjs.org/) so they're already familiar with the notion of a namespace, since Angular uses `ng-` as a namespace for Angular-specific code. Class prefixes In addition to a global namespace, we **added prefixes to each class to make it more apparent what job that class is doing.** Here's what class prefixes we landed on: 
 
   * **`c-`** for UI components, such as `.cn-c-card` or `.cn-c-header`
   * **`l-`** for layout-related styles, such as `.cn-l-grid__item` or `.cn-l--two-column`
   * **`u-`** for utilities, such as `.cn-u-margin-bottom-double` or `.cn-u-margin-bottom-double`
   * **`is-`** and **`has-`** for specific states, such as `.cn-is-active` or `.cn-is-disabled`. These state-based classes would apply to
   * **`js-`** for targeting JavaScript-specific functionality, such as `.js-modal-trigger`. No styles are bound to these classes; they're reserved for behavior only. For most cases, these `js-` classes would toggle state-based classes to an element.
 
I was introduced to this concept [by Harry Roberts](http://csswizardry.com/2015/08/bemit-taking-the-bem-naming-convention-a-step-further/), and while I thought they made sense, I was a little skeptical at first simply because it was extra characters and I thought that the prefixes might actually decrease code legibility. That wasn't the case at all. After implementing the class prefixes, we found them to be extremely helpful for clarifying the role of each class and made it easy to decipher an application's codebase at a glance. This kind of clarity is especially helpful for the [design system users](http://atomicdesign.bradfrost.com/chapter-5/#design-system-makers-and-users) to be able to easily make heads or tails of things. BEM syntax [BEM](http://getbem.com/introduction/) stands for “Block Element Modifier”, which means: 
 
   * **Block** is the primary component block, such as `.cn-c-card` or `.cn-c-btn`
   * **Element** is a child of the primary block, such as `.cn-c-card__title`
   * **Modifier** is a variation of a component style, such as `.cn-c-alert--error`
 
This methodology has been gaining a lot of popularity, and combining these concepts with the global namespace and class prefixes allowed us to create even more explicit, encapsulated class names. Putting it all together: anatomy of a class The combination of a global namespace, category prefixes, and BEM syntax results in an explicit (and yes, verbose) class string that allows developers to deduce what job it plays in constructing the UI. Let’s take a look at the following example: 
     
     
     .cn-c-btn--secondary
     
 
   * `cn-` is the global namespace for all styles coming from the design system.
   * `c-` is the category of class, which in this case `c-` means “component”
   * `btn` is the block name (“Block” being the “B” in BEM)
   * `--secondary` is a modifier, indicating a stylistic variation of the block (“Modifier” being the “M” in BEM)
 
Here’s another example: 
     
     
     .cn-l-grid__item
 
   * `cn-` once again is the system's global namespace.
   * `l-` is the category of class, which in this case `l-` means “layout”
   * `grid` is the block name
   * `__item` is an element, indicating that this is a child of the block (“Element” being the “E” in BEM)
 
And one more: 
     
     
     .cn-c-primary-nav__submenu
 
   * `cn-` is the system's global namespace.
   * `c-` is the category of class, which in this case c`-` means “component”
   * primary-nav is the block name
   * `__submenu `is an element, indicating that this is a child of the block (“Element” being the “E” in BEM)
 
Again, there's no doubt these classes are more verbose than most other approaches out there, but for this specific system these conventions made a lot of sense. Other tricks Being explicit with minutia In order to prevent things from falling apart we detailed how to handle a lot of the minor details like comments, spacing around code blocks, tabs vs spaces, etc. Thankfully, [Harry Roberts](http://csswizardry.com/) has put together an excellent and comprehensive resource called [CSS Guidelines](http://cssguidelin.es/), which we used as our baseline for these kinds of conventions. We combed through everything and flagged areas where we planned on deviating from what Harry spelled out. Sass parent selectors One issue I've always had with CSS is figuring out where the hell to put a given rule. If I have a a primary navigation component, but want to adjust its alignment when it appears within a header component, do I put those styles in my header or primary navigation Sass partial? Thankfully, Sass parent selectors exist, which allows us to keep all component-specific styles under one roof: 
     
     
     .cn-c-primary-nav {
         /**
          * Nav appearing in header
          * 1) Right-align navigation when it appears in the header
          */
         .cn-c-header & {
             margin-left: auto; /* 1 */
         }
     }
     
 
 This means all my primary navigation styles can be found in the primary navigation Sass partial, rather than splitting them between multiple files. Explicit rules around Sass nesting Nesting in Sass can be very convenient, but runs the risk of poor output with overly long selector strings. **We followed the[Inception Rule](http://thesassway.com/beginner/the-inception-rule)** and never nested Sass more than three layers deep. Keeping the design system's CSS flatness principle in mind, we wanted to limit nesting to the following use cases: 
 
   1. Modifiers of a style block
   2. Media queries
   3. Parent selectors
   4. States
 
[](https://github.com/EMITMobileApps/EMDesignSystem/blob/master/frontend-guidelines.md#1-style-block-modifiers)1\. Style block modifiers For modifiers, if the rule is only a few lines long, the modifier can be nested inside the parent like so: 
     
     
     .cn-c-alert {
         border: 1px solid gray;
         color: gray;
     
         /**
          * Error Alert
          */
         &--error {
             border-color: red;
             color: red;
         }
     }
 
 Thanks to the `&` symbol, this would compile to: 
     
     
     .cn-c-alert {
         border: 1px solid gray;
         color: gray;
     }
     
     
     .cn-c-alert--error {
         border-color: red;
         color: red;
     }
     
 
 For longer style blocks we didn't nest the modifier code as it reduced the legibility of the code. [](https://github.com/EMITMobileApps/EMDesignSystem/blob/master/frontend-guidelines.md#2-media-queries)2\. Media queries Component-specific media queries should be nested inside the component block. 
     
     
     .cn-c-primary-nav {
         /* Base styles */
     
         /**
          * 1) On larger displays, convert to a horizontal list
          */
         @media all and (min-width: 40em) {
             display: flex;
         }
     }
 
 This compiles to: 
     
     
     .cn-c-primary-nav {
         /* Base styles */
     }
     
     @media all and (min-width: 40em) {
         .cn-c-primary-nav {
             display: flex;
         }
     }
 
 [](https://github.com/EMITMobileApps/EMDesignSystem/blob/master/frontend-guidelines.md#3-parent-selectors)3\. Parent selectors The design system will make use of [Sass's parent selector](http://thesassway.com/intermediate/referencing-parent-selectors-using-ampersand) mechanism. This allows all rules for a given component to be maintained in one location. 
     
     
     .cn-c-primary-nav {
         /**
          * Nav appearing in header
          * 1) Right-align navigation when it appears in the header
          */
         .cn-c-header & {
             margin-left: auto; /* 1 */
         }
     }
 
 This will compile to: 
     
     
     .cn-c-header .cn-c-primary-nav {
         display: flex;
     }
 
 All styles for `cn-c-primary-nav` should be found in one place, rather than scattered throughout multiple partial files. [](https://github.com/EMITMobileApps/EMDesignSystem/blob/master/frontend-guidelines.md#4-states)4\. States States of a component should be included as a nested element. This includes `hover`, `focus`, and `active` states: 
     
     
     .cn-c-btn {
         background: blue;
     
         &:hover, &:focus {
             background: red;
         }
     }
 
 This will compile to: 
     
     
     .cn-c-btn {
         background: blue;
     }
     
     .cn-c-btn:hover, .cn-c-btn:focus {
         background: red;
     }
 
 States can also take the form of utility classes, such as `is-` and `has-`: 
     
     
     .cn-c-accordion__panel {
         overflow: hidden;
         max-height: 0;
     
         &.cn-is-active {
             max-height: 40em;
         }
     }
 
 This will compile to: 
     
     
     .cn-c-accordion__panel {
         overflow: hidden;
       max-height: 0;
     }
     
     .cn-c-accordion__panel.cn-is-active {
         max-height: 40em;
     }
 
 Putting these rules in place gave us some constraints and conventions we needed to adhere to in order to create a solid system. When we ran into instances where a convention wasn't obvious or a solution could be handled in a few different ways, we'd have a conversation about how to handle it and update the guidelines if needed. Does this work for everybody? Before you get all hot and bothered and start disagreeing with the specific decisions we made in creating our system, recognize that this architecture made sense for the system we were working on. Does this mean it's a bulletproof solution for every project? No, and I'm not proposing that. The specific needs and setup of the organization should very much influence your design system's CSS architecture. I work on plenty of projects where I can get by with strings like `.table-of-contents li a`, but those projects are mostly managed by me. For client projects that involve working in a team environment, I'm very much gravitating towards more verbose, explicit syntaxes like I described above because they provide less room for people to screw things up. It's great to see [other teams like Sparkbox come to similar conclusions](https://seesparkbox.com/foundry/thoughtful_css_architecture). After a few weeks away from the project, we're returning to continue work on version 1.1 of the design system. I'm looking forward to coming back to this code base and seeing how quickly I can get re-acclimated with it!
  *[DETAILS]: Device, Environment, Time, Activity, Individual, Location, Social
  *[RESS]: Responsive Design with Server-Side Components
  *[CMS]: Content Management System
  *[GUI]: Graphical User Interface