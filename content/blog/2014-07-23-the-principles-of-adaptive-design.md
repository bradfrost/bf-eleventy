---
title: The Principles of Adaptive Design
date: '2014-07-23'
tags:
- design
- future friendly
- responsive web design
post_id: 4610
original_link: https://bradfrost.com/blog/post/the-principles-of-adaptive-design/
custom_meta:
  hide-ads: Show
---

There's a conversation that crops up time to time again about the definition of responsive design and treating RWD [as a goal unto itself](http://www.smashingmagazine.com/2014/07/22/responsive-web-design-should-not-be-your-only-mobile-strategy/). Has it evolved beyond Ethan Marcotte's [original definition](http://alistapart.com/article/responsive-web-design/)? [There](http://blog.cloudfour.com/defining-responsiveness/) [are](http://timkadlec.com/2014/01/beyond-responsive/) [so](http://stephanierieger.com/responsiveness-is-a-characteristic/) [many](http://markboulton.co.uk/journal/rwd-dtdt) [articles](http://alistapart.com/column/what-we-mean-when-we-say-responsive) [out](http://www.zeldman.com/2014/03/09/evolving-responsive-web-design/) [there](http://alistapart.com/column/what-we-mean-when-we-say-responsive) on the subject already, but since it keeps coming up I figure it's still worth talking about. Of course there's a whole lot more to creating a great multi-device than fluid grids, flexible media, and media queries. The core tenets of responsive design are obviously important, and over the last few years they've helped the Web community better cope with the never-ending flood of Web-enabled devices. But those three ingredients are just the tip of the iceberg. ![iceberg](http://bradfrost.com/wp-content/uploads/2014/07/iceberg-1024x768.png) So what beyond fluid grids, flexible media, and media queries do we need to concern ourselves with when crafting multi-device Web experiences? In asking myself that question [(some time ago now)](http://bradfrost.com/blog/post/beyond-squishy-the-principles-of-adaptive-design/), I landed on five guiding principles of adaptive design:
 
   1. Ubiquity
   2. Flexibility
   3. Performance
   4. Enhancement
   5. Future-Friendly
 
Ubiquity The power of the Web is its ubiquity, and it's our responsibility as web designers to do our best to preserve the Web's biggest feature. 
 
   * Achieve [content parity](http://bradfrost.com/blog/mobile/content-parity/) across devices, and [avoid the myth of the mobile context](http://www.the-haystack.com/2012/07/09/great-works-of-fiction-presents-the-mobile-context/).
   * Understand the difference between ["support" and "optimization"](http://bradfrost.com/blog/mobile/support-vs-optimization/).
   * Be considerate and inclusive as much as humanly possible.
 
Flexibility There ain't no going back to the fixed-width days of yore. In order to create effective designs for our multi-device age, we must [embrace the Web's intrinsic fluidity](http://alistapart.com/article/dao). 
 
   * Create [device-agnostic](http://trentwalton.com/2014/03/10/device-agnostic/) interfaces that aim to look and function beautifully everywhere on the resolution spectrum.
   * [Let content determine breakpoints](http://bradfrost.com/blog/post/7-habits-of-highly-effective-media-queries/) instead of using today's popular device dimensions.
   * Don't just create myopic buckets ("phone", "tablet", and "desktop"). Rather consider the entire resolution spectrum and all the devices–both present and future–that will access your experience.
   * Use [tools](http://bradfrost.com/demo/ish/) that encourage flexibility 
 
Performance The first few years of our responsive age were spent getting our heads around the mechanics of media queries and other techniques. All the while the size of average Web page–[responsive or not](http://timkadlec.com/2012/10/blame-the-implementation-not-the-technique/)–skyrocketed in size. So it's been a welcome change to see more folks care about performance and tackle the performance-related issues of the multi-device Web. 
 
   * Treat [performance as design](http://bradfrost.com/blog/post/performance-as-design/) and help your organization [prioritize](http://bradfrost.com/blog/post/prioritizing-performance-in-responsive-design/) performance.
   * Set [performance budgets](http://timkadlec.com/2013/01/setting-a-performance-budget/) and stick to them.
   * Embrace [conditional loading](http://bradfrost.github.io/this-is-responsive/resources.html#conditional-loading), as this crucial technique helps us deliver highly-performant _and_ fully-featured experiences to our users.
   * Get [into the browser sooner](http://bradfrost.com/blog/post/the-post-psd-era/) and test early and often. Performance is invisible, so testing is essential to help us catch performance-hurting decisions. 
Enhancement Responsive web design does not need to stop at making squishy layouts. This isn't a one-size-fits-all solution. Responsive design is very much an extension of [progressive enhancement](http://en.wikipedia.org/wiki/Progressive_enhancement), so don't get hung up thinking that media queries are the only tool in your toolbox. 
 
   * Recognize that the Web is a [continuum](http://adactio.com/journal/6692/), not a platform.
   * Use [feature detection](http://modernizr.com/) to capitalize on device/browser capabilities so that we can [support more devices while still optimizing](http://bradfrost.com/blog/mobile/support-vs-optimization/) for the the best of the best
   * Recognize that many [interface patterns](http://bradfrost.github.io/this-is-responsive/patterns.html) (From [social widgets](http://filamentgroup.com/lab/socialcount/) to [images](https://github.com/scottjehl/picturefill) to [maps](http://bradfrost.com/blog/post/adaptive-maps/) to [lightboxes](http://bradfrost.com/blog/post/conditional-lightbox/)) require more than simple translation in order to work well across all screens.
   * Read [_Adaptive Web Design_ by Aaron Gustafson](http://easy-readers.net/books/adaptive-web-design/) and apply those principles and techniques in your work.
 
Future Friendly No one knows what the Web and device landscape is going to look like in a couple years, but there’s a damn good chance the gadgets sitting underneath Christmas trees a few years from now will have access to the Web. 
 
   * The key aspect of [future-friendly](http://futurefriendlyweb.com) thinking is to acknowledge and embrace unpredictability. 
   * [Think in a future-friendly way](http://futurefriendlyweb.com/thinking.html) by [focusing](http://www.abookapart.com/products/mobile-first) on what really matters, creating portable data, and getting your content ready to go anywhere.
   * Be present friendly. As Josh Clark says, “When it comes to the Web, the more backward-compatible you are, the more forward-compatible you’re likely to be.”
 
Guiding Principles I like these principles. For me, they serve as a sort of checklist for any strategic, design, or development decision. If decisions go against one or more of these principles, we need to have a conversation. ![Ember 2](http://bradfrost.com/wp-content/uploads/2014/07/Ember-2-1024x766.png) Techniques come and go quickly in this crazy-fast-paced-and-volatile industry. I'd recommend not getting too hung up on definitions, mechanics, and techniques. Instead, establish some guiding principles that can help ground you and help you make better decisions.
  *[DETAILS]: Device, Environment, Time, Activity, Individual, Location, Social
  *[RESS]: Responsive Design with Server-Side Components