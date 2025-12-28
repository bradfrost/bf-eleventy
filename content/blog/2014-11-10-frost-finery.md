---
title: Frost Finery
date: '2014-11-10'
tags:
- case study
- frost finery
- jewelry
- melissa frost
- pattern lab
- personal
- process
post_id: 8409
original_link: https://bradfrost.com/blog/post/frost-finery/
custom_meta:
  hide-ads: Show
---

My amazing wife [Melissa](http://melissafrostdesign.com/) ([@minifrost](https://twitter.com/minifrost)) has launched a new jewelry studio called [Frost Finery](http://frostfinery.com/). For the last few months she's been hard at work sawing, soldering, laser cutting, water jetting, buffing, stone setting, welding, centrifuging, hammering, and filing. The result is a beautiful [collection](http://frostfinery.com/collections/) of jewelry that she's selling through [her store on Etsy](https://www.etsy.com/shop/frostfinery). I'm so proud of her. The Website Of course I'm happy to support my wife in any way I can, so naturally it made sense for me to make her business's website. The only problem was that I was traveling literally all month and was strapped for time. She was understanding of my time constraints and initially went with a Squarespace site, but ran into limitations almost immediately. So despite being busy and mobile, I was able to carve out some time to make the site happen. Melissa and I have worked together in the past (on both [Time Inc.](http://www.timeinc.com/) and the [Pittsburgh Food Bank](https://bradfrost.com/blog/post/greater-pittsburgh-community-food-bank-open-redesign/)), so we know how to make things work. Here's how it went down: 
 
   1. Melissa sent me a few initial Photoshop comps. Of course this isn't usually how we do things, but because we work well together we were able to swing it.
   2. I set up a [local](http://codex.wordpress.org/Installing_WordPress_Locally_on_Your_Mac_With_MAMP) instance of Wordpress and gave [this blank theme](http://digwp.com/2010/02/blank-wordpress-theme/) a shot.
   3. I set up [Pattern Lab](http://patternlab.io/) and wired up [Grunt to Pattern Lab](https://bradfrost.com/blog/post/using-grunt-with-pattern-lab/) to develop the front-end code of the site. The [Grunt copy](https://github.com/gruntjs/grunt-contrib-copy) task allowed me to automatically copy the stylesheet and javascript over from Pattern Lab into the Wordpress theme.
   4. Created the templates and underlying patterns in Pattern Lab, and quickly brought those over as [custom pages](http://codex.wordpress.org/Page_Templates) in Wordpress. I brought over the reusable patterns as includes in the Wordpress theme, like so: ![Patterns as includes in Wordpress theme](https://bradfrost.com/wp-content/uploads/2014/11/Ember2.png)
   5. Used the incredible [Advanced Custom Fields](http://www.advancedcustomfields.com/) plugin to make all the dynamic fields, then had Melissa go in and populate them with the final content.
 
After it was all said and done, we got the site done in 4 days while working in different time zones. And while there's certainly a lot more work to be done, I feel like we've established a good foundation to build upon. Here's what the final site looks like: [![Frostfinery.com homepage](https://bradfrost.com/wp-content/uploads/2014/11/Ember1-1024x1007.png)](http://frostfinery.com) And here's what the [pattern library](http://patterns.frostfinery.com/) looks like: [![Frostfinery.com Pattern Lab](https://bradfrost.com/wp-content/uploads/2014/11/Ember-1024x781.png)](http://patterns.frostfinery.com/) We'll be extending the website soon and will post some updates when that happens. In the meantime Melissa will be hard at work making jewelry and extending her collection. If you want to follow along, here's where you can find her: 
 
   * Follow [@frostfinery](https://twitter.com/frostfinery) and [@minifrost](https://twitter.com/minifrost) on Twitter
   * Check out [Frost Finery on Facebook](https://www.facebook.com/frostfinery)
   * View Melissa's jewelry-making process [on Instagram](http://instagram.com/frostfinery)
   * Buy some Frost Finery jewelry [on Etsy](https://www.etsy.com/shop/frostfinery). After all, the holidays are here and you need gifts!
 

  *[DETAILS]: Device, Environment, Time, Activity, Individual, Location, Social
  *[RESS]: Responsive Design with Server-Side Components