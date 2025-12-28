---
title: Style Guides are the New Photoshop - Stephen Hay at Smashing Conference
date: '2012-09-17'
post_id: 4557
original_link: https://bradfrost.com/blog/post/style-guides-are-the-new-photoshop-stephen-hay-at-smashing-conference/
---

In [Style Guides are the New Photoshop](http://smashingconf.com/conference/day:monday#stephen-hay "http://smashingconf.com/conference/day:monday#stephen-hay"), [Stephen Hay](http://the-haystack.com "http://the-haystack.com") explains how Photoshop is simply inadequate to handle multi-device web design. Stephen shows us how style guides can help with the responsive design process. Designing in the browser

  * Designing in the browser was talked about by Andy Clarke back in 2008, but now we're all talking about it. 
  * Our workflow hasn't changed but it needs to. We need to learn to live with constraints. 
  * Photoshop is impractical for responsive design mockups. 
  * Everyone does everything in Photoshop. It looks more "real" than drawn marker designs. 
  * **Problems with Photoshop comps** \- Design changes are time-consuming, too much manual work, the image editor is a dependency, responsive design implies multiple and flexible layouts. 
  * **Web based comps: the good** \- Designing in HTML doesn't have to take longer. In fact, there's many areas that the process becomes far more efficient. Change all headings with one line of code. State changes like hover and focus. The code can be reused in the final production. 
  * We need two things to replace Photoshop: **static web prototypes and style guides**

Style Guides benefits

  * No measuring 
  * State and breakpoint changes can be included 
  * Useful for future designers, devs and others 
  * Design consistency and maintainability 
  * Bootstrap is not a style guide. It's a pattern library. Style guides explain when and how to use a particular pattern. 

Styphen's Style Guide Wishlist

  * Free-form writing 
  * Automated screenshot-taking 
  * update code snippets automatically when mockup changes 
  * Update screenshots automatically when something changes 
  * Elements/modules should not have to be physically split into separate files 
  * Syntax highlighting 

Style Guide Tools

  * [Dexy](http://www.dexy.it/) \+ [Pandoc](http://johnmacfarlane.net/pandoc/) (or markdown) filter 
  * [Phantomjs](http://phantomjs.org/) and [Casperjs](http://casperjs.org/) for screenshots 
  * Jinja for layout templating to compile 
  * [Pygments](http://pygments.org/) syntax highlighting allows you to pick themes for syntax highlighting 
  * The scary part is that it involves the command line, which turns a lot of designers off. 

Stephen's design process

  * It's not about the tools, it's about finding the right process that help you solve problems 
  * Stephen's style guides are a combination of a web-based mockup + Style Guide written in markdown combine together to form the style guide 

  1. **Create a web-based mockup** \- Use HTML, CSS and JS (when necessary). The goal is to represent the design in the browser. Your goal is not to create production code, so front-end developers shouldn't worry that the designers are taking their jobs. Your CSS should be modular (it will end up in your style guide). 
  2. **Install Dexy & any dependencies** \- Designers should ask for developer's help, or try to read the documentation **Install PhantomJS and CasperJS** as well. 
  3. **Write your guide and use and use Jinja templates**

Onward

  * We have to adapt our process in order to deal with responsive web design, which isn't going away. This requires designers to have a more fundamental understanding of HTML and CSS. Don't be afraid. 
  * Choose what works for you. 
  * Have fun. Make great stuff. Keep learning.

  *[DETAILS]: Device, Environment, Time, Activity, Individual, Location, Social