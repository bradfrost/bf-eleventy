---
title: OOCSS and Preprocessors in a Tree, K-I-S-S-I-N-G - Nicole Sullivan at Smashing
  Conference
date: '2012-09-17'
post_id: 4571
original_link: https://bradfrost.com/blog/post/oocss-and-preprocessors-in-a-tree-k-i-s-s-i-n-g-nicole-sullivan-at-smashing-conference/
---

In [OOCSS and Preprocessors in a Tree, K-I-S-S-I-N-G](http://smashingconf.com/conference/day:monday#nicole-sullivan "http://smashingconf.com/conference/day:monday#nicole-sullivan"), Nicole Sullivan explains how to write more modular CSS with SaSS.

  * Some of Nicole's clients had 100,000 lines of CSS. Nicole helps them whittle it down to 1,500 lines. 
  * You only ever learn about something by doing it wrong the first time. Experience in doing things incorrectly can show you 
  * It's not OOCSS _or_ SaSS. That's the wrong question, they're quite complementary. 

OOCSS and SaSS

  * OOCSS is a way of writing CSS that avoids duplicating CSS 
  * OOCSS is tiny dry awesome CSS, while SaSS is dry awesome SCSS 
  * OOCSS uses multiple classes to simulate inheritance, while SaSS handles it in CSS using @extend 
  * OOCSS doesn't have a good mechanism for mixins, tends to duplicate the code, while SaSS uses @include to simulate mixins 
  * OOCSS is what you want to say, while SaSS is an alternate way of saying it. 

Getting Started with SaSS

  * Sometimes plain CSS solutions are painful. SaSS can help. For example, there are multiple clearfix methods and sometimes certain clearfix solutions work for a module and other times a different solution is more appropriate 
  * Nesting is a good intro to SaSS 
  * It's tempting to make the SaSS nesting match the html. But that results in hefty overly-specific CSS. 
  * Nesting shows (an approximation of) specificity 
  * **Be careful with nesting** \- it can generate a lot of overly-specific styles. Easy to write in SaSS, but easy != good. 
  * **Keep an eye on the output file** and make sure things aren't getting unruly. 
  * **The Inception Rule - Never go more than three levels deep**

Mixins

  * How to Optimize Mixins - Use them when you wouldn't want the class in the html (eg a border radius) and use them for small number of properties 

Extends

  * Building message boxes (error, information, success, other) 
  * Avpods property value pair duplication 
  * Causes selector duplication 
  * best for simple selectors 
  * messy with many nested subsides 
  * messy output when many classes extend another class 
  * OOCSS instead uses multiple classes in the HTML instead of using CSS. 

  * It's OK to use a combination of a use @extend if a relationship is implied. @include if one is not. 

Multi-Class Extension

  * Nicole doesn't see a good reason to use multi-class extensions. It avoids confusion and reduces the output. 

Placeholders When you want to abstract something, but don't need the class itself in the stylesheet. Similar to @include, but doesn't create a class for the 'parent' class. IE-specific Classes

  * Make SaSS play nicely with Modernizr 
  * Nicole removed Modernizr and instead uses * and _ hacks. This keeps IE code together with normal code. 

Modular SaSS

  * Not everyone wants all of the code. Author in a way so that the people who want grids will only get the CSS. 

Take-aways

  * Try SaSS, it's a super useful tool 
  * Relentlessly focus on the output, make sure both SaSS and CSS make sense 
  * Use frameworks when appropriate, but only use the stuff you need. 

  *[DETAILS]: Device, Environment, Time, Activity, Individual, Location, Social