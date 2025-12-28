---
title: Web Component continued progress
date: '2024-10-28'
tags:
- declarative shadow dom
- design systems
- progressive enhancement
- web components
- web development
post_id: 21330
original_link: https://bradfrost.com/blog/post/web-component-continued-progress/
custom_meta:
  hide-ads: Show
---

At [Big Medium](https://bigmedium.com/), [we're fans of Web Components](https://bradfrost.com/blog/post/lets-talk-about-web-components/), and over the last 6 years have been helping our clients build standards-based, interoperable, design systems with them. The ability to deliver a consistent, cohesive experience to a any web-based technology perfectly aligns with the aim of a design system:

> **It’s increasingly common for organizations to have web stuff built in a whole slew of technologies, and at the end of the day we want to deliver high-quality, cohesive user experiences to all of them.**  Users don’t give a crap if the homepage is powered by Drupal and the post-login dashboard is a React app. They want to get things done and get on with their lives, and our software should help them accomplish their goals with minimum fuss and muss. Design systems are an important tool for accomplishing that.
 
 There have been a few exciting yet somewhat under-the-radar developments that are making Web Components even more awesome. React 19 supports Web Components In late April, it was announced that [React 19 supports custom elements](https://react.dev/blog/2024/04/25/react-19#support-for-custom-elements), finally making Web Components a first-class citizen in the React ecosystem.

> React 19 adds full support for custom elements and passes all tests on [Custom Elements Everywhere](https://custom-elements-everywhere.com/). In past versions, using Custom Elements in React has been difficult because React treated unrecognized props as attributes rather than properties. In React 19, we’ve added support for properties that works on the client and during SSR...
 
 Over the years, we've helped clients create a React-specific wrapper layer around the core Web Components in order to deal with React's weird handling of events. It's exciting to think that hopefully someday soon those wrapper libraries can be deprecated. Better Declarative Shadow DOM support The other exciting thing is that [Declarative Shadow DOM](https://web.dev/articles/declarative-shadow-dom) is now [well supported](https://caniuse.com/declarative-shadow-dom) across the most popular browser engines.  ![](https://bradfrost.com/wp-content/uploads/2024/10/CleanShot-2024-10-28-at-14.18.27.png) Declarative Shadow DOM has been around for a while, and is important for making Web Components render on the server. Hopefully now that Declarative Shadow DOM is well supported, server rendering of Web Components can become the default. I'm also hopeful tooling continues to improve so that we can successfully marry a progressive-enhancement default with a solid developer experience. The Web Component learning curve Web Component support, compatibility, and tooling continue to make steady progress, which is exciting to see! But like most technology issues, so much has to do with the people side of things. Here's just a questions that we're encountering in our work:
 
   * How to smooth the adoption of a Web Component-powered design system when it requires a little extra configuration and shift in the way teams have been used to working with framework-specific components?
   * How do you win the hearts and minds of developers who are familiar with and loyal to framework-specific solutions?
   * How can contribution to a Web Component-powered design system work if contributors aren't familiar with Web Components?
   * How best to manage the relationship between [front-of-front-end code and back-of-the-front-end code](https://bradfrost.com/blog/post/front-of-the-front-end-and-back-of-the-front-end-web-development/) when they're written in different languages?
   * How can you merge multiple design systems powered by different technologies into one Web Component-powered system? How can you roll the new system out without disruption or friction?
   * How can you level up a design system team's Web Component skills? How can you level up an entire organization's Web Component skills? 
 
The answers to these questions is a coordination of technical architecture, people, and process. That's our jam! If your team would welcome help establishing or evolving your Web Component architecture, feel free to [get in touch](https://bigmedium.com/hire/)!
