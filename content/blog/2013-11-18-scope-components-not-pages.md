---
title: Scope Components, Not Pages
date: '2013-11-18'
tags:
- design
- design systems
- gpcfb
- interface inventory
- open redesign
- process
- scott jehl
post_id: 7171
original_link: https://bradfrost.com/blog/post/scope-components-not-pages/
custom_meta:
  hide-ads: Show
---

Recently, the always-brilliant [Scott Jehl](http://scottjehl.com/) wrote a post titled [Grade components, not browsers](http://filamentgroup.com/lab/grade_components/). In his post, Scott explains that grading browser support is an ineffective way of determining what experience a particular device/browser should get. Instead, the [Filament Group](http://filamentgroup.com/) grades components based on their level of intricacy, which results in a more granular way of enhancing experiences to better reflect the capabilities of a device/browser/configuration. Scott's post reminded me of the many conversations about Web pages I've had over the years with clients and project managers. "How long will the homepage take?" Throughout my career, I've been asked to estimate how long it will take to develop a "quick one-page website" or how long a particular page would take to create. Pestering project managers would ask, "Hey Brad, how long will it take to build the homepage?" "What about the product detail page?" It didn't take long for me to start asking "Well what's going on these pages? Is the homepage simply comprised of some text and images, or will there be something like a [carousel](http://bradfrost.com/blog/post/carousels/)? (hint: the answer is always 'yes there will be a carousel.') How about forms for data capture? Video content? An interactive HTML5 canvas? WebGL? Parallax? A whammy bar?" I recently received an e-mail from someone at a large organization. He articulated something that pretty much every organization going down the responsive path is struggling with: 

> What we’re struggling with here is transforming our entire website (thousands of pages) into a responsive design. 
 
 At first glance, one might say "Thousands of pages!? Wow, that sounds challenging!" But in reality, those thousands of pages might be comprised of the same four basic components. **A project's level of effort depends entirely on what the interface is made of.** What is an interface made of? For the past few years I've been obsessed with the question "What is an interface made of?" It's the question that led to the creation of the [responsive pattern library](http://bradfrost.github.io/this-is-responsive/patterns.html), [atomic design](http://bradfrost.com/blog/post/atomic-web-design/), and [Pattern Lab](http://pattern-lab.info/). In order to better scope projects, it's essential to look at what the interface is comprised of rather than looking at the quantity/type of pages. This is what software developers have been doing for years now, but the concept of "Web pages" has distracted us from breaking things down into features and components. Interface Inventories to the Rescue So how can you scope a project based on components rather than pages? I think a good place to start is with an [interface inventory](http://bradfrost.com/blog/post/interface-inventory/). 

> An interface inventory is a comprehensive collection of the bits and pieces that make up your interface.
 
 We conducted an interface inventory as part of our [redesign of the Pittsburgh Food Bank](http://bradfrost.com/blog/post/greater-pittsburgh-community-food-bank-open-redesign/). We went through and captured all the unique components and features that make up the site. While most of the site is comprised of text and images, there are quite a few pieces of functionality that will need a lot of design attention. Here's a few samples from our interface inventory: ![foodbank-ii-form2](http://bradfrost.com/wp-content/uploads/2013/11/foodbank-ii-form2.jpg) ![foodbank-ii-form](http://bradfrost.com/wp-content/uploads/2013/11/foodbank-ii-form.jpg) ![foodbank-ii-assistance](http://bradfrost.com/wp-content/uploads/2013/11/foodbank-ii-assistance.jpg) ![foodbank-ii-recipe](http://bradfrost.com/wp-content/uploads/2013/11/foodbank-ii-recipe.jpg) By conducting an interface inventory, we're able to better gauge the level of effort for each piece of functionality (especially factoring all the variables discussed in Scott's article), discover potential hang-ups, and better communicate the project scope to the client. Getting granular and scoping a project by components/features rather than pages leads to a more realistic scope.
  *[DETAILS]: Device, Environment, Time, Activity, Individual, Location, Social
  *[RESS]: Responsive Design with Server-Side Components