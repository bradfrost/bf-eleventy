---
title: Template Technology Agnosticism
date: '2017-04-19'
tags:
- design systems
- html
- jonathan snook
- templating
post_id: 10376
original_link: https://bradfrost.com/blog/post/template-technology-agnosticism/
custom_meta:
  hide-ads: Show
---

I absolutely love [Jonathan Snook](https://snook.ca)'s thoughts here. He discusses how the [Mustache](https://mustache.github.io/) templating engine actually gets quite close to tech-agnostic HTML, and that's a good thing for systems that need to go to a bunch of places. This legibility becomes important for other people who might be converting a component into other tech-specific solutions. Take this example: 
     
     
         {% raw %}![]({{ img }})
         {{ title }}
         {{ description }}{% endraw %}
     
     
 
 This seems quite legible to me. A React implementation of this component, however, requires a bit more syntax to wade through in order to understand the gist of what the component is doing: 
     
     
     var Card = React.createClass({
         render: function() {
             return (
                 
                     ![]({this.props.img})
                     {this.props.title}
                     {this.props.desc}
                 
             ); 
         } 
     })
     
 
 I'm not here to say React is bad, but I'd be wary to use React as the source of truth for a system that's supposed to be translated to other tech-specific solutions. Just having to rewrite `className` to `class` would be a nuisance if you're trying to convert the component to other templating engines. 

> When do you choose an agnostic platform versus a specific one? I believe it comes down to an organizational one.
 
 100% agree. When talking about specific solutions for specific projects, you tend to get a lot of comments from the peanut gallery about "Why didn't you just use [insert templating engine here]? Why not this technology?" Well, because for the specific organization's tech setup one approach might be terrible, but for another company it would work perfectly. I talk about this in the "[Is your culture holy-grail compatible?](http://atomicdesign.bradfrost.com/chapter-5/#is-your-culture-holy-grail-compatible)" section of my book. A holy grail system like [Lonely Planet's Rizzo](http://rizzo.lonelyplanet.com/styleguide/design-elements/colours) works well because there's essentially one application being managed by a specific tech stack. That solution, while amazing, doesn't scale to, say, the U.S. government and their myriad of tech stacks. That's why their [Draft](https://standards.usa.gov/) solution provides essentially only HTML and CSS. To [Chris's point here](https://css-tricks.com/total-html-agnosticism/), HTML is ultimately what makes its way into the browser. How it gets there involves any number of solutions. But if you're creating a [technology-agnostic design system](http://bradfrost.com/blog/post/managing-technology-agnostic-design-systems/), I'd recommend choosing templating engines that are a bit closer to final rendered HTML than a powerful-yet-unconventional solution.
  *[DETAILS]: Device, Environment, Time, Activity, Individual, Location, Social
  *[RESS]: Responsive Design with Server-Side Components
  *[CMS]: Content Management System
  *[GUI]: Graphical User Interface