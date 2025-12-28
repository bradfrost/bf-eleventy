---
title: Prioritizing Performance in Responsive Design
date: '2013-03-08'
tags:
- design
- performance
- responsive web design
post_id: 5825
original_link: https://bradfrost.com/blog/post/prioritizing-performance-in-responsive-design/
---

Last year, Guy Podjarny [ran tests on hundreds of responsive sites](http://www.guypo.com/mobile/performance-implications-of-responsive-design-book-contribution/) on Mediaqueri.es and found that a full 86% of responsive sites send about the same hefty payload to small screens as they do to large screens. In other words, mobile users are downloading desktop-sized sites. Not good. He [ran the tests again](http://www.guypo.com/uncategorized/real-world-rwd-performance-take-2/) this year and found that a few more responsive sites' small views weigh less than their large screen counterparts. This may seem like progress, but Guy also mentioned that page weight overall is on the rise, so in my eyes any victory is quickly negated by overall page size increase. What to Do About It This trend needs to stop. How do we fight against bloated web pages? Here's some things to consider: 
 
   * **Treat[Performance As Design](http://bradfrost.com/blog/post/performance-as-design/)**--It's essential for everyone, not just developers, to make performance a priority. Performance is invisible and as a result slips between the cracks in projects. It also gets super technical super fast, which causes non-developers to lose interest. Change the nature of the conversation by talking about performance as an essential _design_ feature. Boss or creative director not convinced? Point to [Facebook's app debacle](http://techcrunch.com/2012/09/11/mark-zuckerberg-our-biggest-mistake-with-mobile-was-betting-too-much-on-html5/) as evidence that performance makes and breaks a product.
   * **Set a Performance Budget** --One great way to make sure performance doesn't slip between the cracks is to [set a performance budget](http://timkadlec.com/2013/01/setting-a-performance-budget). Set a maximum page weight, which forces everyone involved in the design process to make some tough, realistic decisions about what deserves to end up on the page.
   * **Embrace Conditional Loading** --[Conditional loading](http://24ways.org/2011/conditional-loading-for-responsive-designs/) is one of responsive design's most important techniques. From [social widgets](http://filamentgroup.com/lab/socialcount/) to [images](https://github.com/scottjehl/picturefill) to [maps](http://bradfrost.com/blog/post/adaptive-maps/) to [lightboxes](http://bradfrost.com/blog/post/conditional-lightbox/), conditional loading can be used to ensure that small screen users don't download a whole bunch of stuff they can't use. Here's a [bunch of resources about conditional loading](http://bradfrost.github.com/this-is-responsive/resources.html#conditional-loading) that explain why it's so important and awesome.
   * **Test often** --[Mobitest](http://mobitest.akamai.com/m/index.cgi) is a great tool that fires up a site up on a real mobile device and spits back page weight, load time and other performance-related stats. It's a great gut check tool, but there's no substitute for firing it up on your device while walking around town on a real cellular connection. Test on real devices early and often and you'll see the true performance of your design.
   * **Look for low hanging fruit** --There are [tons of little things we can do](http://css-tricks.com/video-screencasts/114-lets-do-simple-stuff-to-make-our-websites-faster/) to improve the performance of our websites. I'm a big fan of using [Yslow](http://yslow.org/) and [Google Page Speed](https://developers.google.com/speed/pagespeed/) because they explain everything in relatively human terms and give you explicit instructions on how to make performance better.
 
Let's prioritize performance in our responsive designs. I hope Guy runs his tests next year and is pleasantly surprised with the results.
  *[DETAILS]: Device, Environment, Time, Activity, Individual, Location, Social
  *[RESS]: Responsive Design with Server-Side Components