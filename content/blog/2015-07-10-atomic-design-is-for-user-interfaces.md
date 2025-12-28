---
title: Atomic Design Is For User Interfaces
date: '2015-07-10'
tags:
- atomic design
- css
- ui
post_id: 9377
original_link: https://bradfrost.com/blog/post/atomic-design-is-for-user-interfaces/
custom_meta:
  hide-ads: Show
---

I'm almost finished with [Chapter 2](http://atomicdesign.bradfrost.com/chapter-2/) of [Atomic Design](http://atomicdesign.bradfrost.com/), which defines the atomic design methodology and discusses the benefits of using atomic design to craft UI design systems. While approaching this chapter, I wanted to address the fact that **atomic design applies to all user interfaces, not just Web-based ones.** And more importantly, I want to make clear that **atomic design has nothing to do with CSS or JavaScript architecture**. In [Chapter 1](http://atomicdesign.bradfrost.com/chapter-1/#tearing-up-the-page) of the book I discuss the trend toward modularity across every aspect of the Web design and development process, which includes CSS and JavaScript. For instance, CSS methodologies like [OOCSS](http://oocss.org/), [SMACSS](https://smacss.com/), and [BEM](http://csswizardry.com/2013/01/mindbemding-getting-your-head-round-bem-syntax) (championed by great people like [Nicole Sullivan](http://www.stubbornella.org/content/), [Jonathan Snook](http://snook.ca/), and [Harry Roberts](http://csswizardry.com/)) are helping tons of people (including myself) write thoughtful, modular CSS. _And that’s not what atomic design is trying to accomplish._ I understand how it can be easy to [conflate these things](http://www.smashingmagazine.com/2013/08/02/other-interface-atomic-design-sass/), as both atomic design and CSS/JS methodologies extol the virtues of modularity. Also, the fact that CSS and JavaScript are critical ingredients of Web-based user interfaces makes things more confusing. But please understand that atomic design deals only with architecting user interfaces, not with CSS or JavaScript architecture. Including language like atoms, molecules, organisms, templates, and pages in your CSS or JavaScript (I think) a bad idea. Instead, use previously-mentioned methodologies that explicitly deal with CSS. To demonstrate the fact that atomic design applies to all user interfaces, I atomize the UI of a native mobile app: [![Atomic design applied to Instgram's UI](https://bradfrost.com/wp-content/uploads/2015/07/instagram-atomic.png)](http://atomicdesign.bradfrost.com/chapter-2/#atomic-design-is-for-user-interfaces) (Quick aside: I know Instagram's feed is a WebView inside a native shell, so technically CSS and JS are involved in creating this UI. But shhhh.) You can read [a breakdown of each stage](http://atomicdesign.bradfrost.com/chapter-2/#atomic-design-is-for-user-interfaces) over at the book's website if you want to better understand what's going on in each stage.
  *[DETAILS]: Device, Environment, Time, Activity, Individual, Location, Social
  *[RESS]: Responsive Design with Server-Side Components