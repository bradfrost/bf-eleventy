---
title: 'Beyond Media Queries: Anatomy of an Adaptive Web Design'
date: '2012-08-07'
tags:
- ffly
- responsive web design
post_id: 4233
original_link: https://bradfrost.com/blog/post/beyond-media-queries-anatomy-of-an-adaptive-web-design/
---

I had the fantastic opportunity to speak at [An Event Apart Washington DC](http://aneventapart.com/2012/dc/). Here's the gist of the talk: 

  * [Generic trademarks](http://en.wikipedia.org/wiki/Generic_trademark) begin their lives defining a specific product or brand, but over time those original meanings erode and they become the generic terms to describe a general product category or action
  * The web world is used to these generic terms as well. HTML5 and AJAX before it have come to define all that is new and shiny on the web. As [Jeff Croft describes](http://jeffcroft.com/blog/2010/aug/02/term-html5/), this isn't a bad thing.
  * Responsive web design by [definition](http://www.alistapart.com/articles/responsive-web-design/) is defined as fluid grids, flexible media and media queries. However, it's part of a much broader adaptive philosophy/strategy. Because the term has grown in popularity, it should come to define all that goes into crafting multi-device web experiences.

The Principles of Adaptive Design What beyond layout do we need to concern ourselves with when crafting multi-device web experiences? The short answer is everything. But implementations change from project to project, so it's important to establish some principles to consider as we travel down the responsive road. Ubiquity

  * The power of the web is its ubiquity. No one knows what the landscape is going to look like in a couple years, but there's a damn good chance the gadgets sitting underneath Christmas trees a few years from now will have access to the web.
  * Because of this, we need to preserve and embrace the web's ubiquity. This requires us to deliver full web experiences regardless of how people access the web.
  * The current crop of mobile-specific sites don't do a good job at delivering a full experience. But just because a site is responsive doesn't mean it automatically achieves [content parity](http://bradfrost.com/blog/mobile/content-parity/) either. It's really hard to accomplish.

Flexibility

  * Embrace the inherit fluidity of the web.
  * Continue creating flexible interfaces that can adapt to any screen size
  * Today's common breakpoints aren't tomorrow's. Create a device-agnostic flexible platform.

Performance

  * Performance often takes a back seat to everything else.
  * Mobile users expect a fast loading experience and 74% of mobile web users will abandon a site if it takes longer than 5 seconds to load.
  * 86% of responsive sites [weigh the same in both their small screen view and large screen view](http://www.guypo.com/mobile/performance-implications-of-responsive-design-book-contribution/)
  * We need to treat performance as design. Historically, performance is this thing that developers deal with at the end of a project (of course only if there's time). Performance _is_ design, so we need to prioritize it.

Enhancement

  * Responsive web design does not equal "one sized fits all". There are lots of opportunities to enhance our experiences to capitalize on a particular device's or browser's capabilities
  * Progressive enhancement, feature detection and many other techniques allow us to build up a core experience that allow us to [support more devices while still optimizing](http://bradfrost.com/blog/mobile/support-vs-optimization/) for the the best of the best
  * This is foundational work. Laying down a solid foundation 
Future Friendly

  * The key aspect of [Future Friendly](http://futurefriend.ly) thinking is to acknowledge and embrace unpredictability. Again, nobody knows where things are going and the one thing we can count on is change.
  * Solve the right problems. Perhaps a lack of a flexible interface isn't your biggest problem. A front-end redesign might not make sense when your CMS is a crusty old piece of junk. Strive for data portability and create systems that allow your content to go anywhere. 
  * Josh Clark says it well: the more compatible your site/service is with today's landscape, the better chance it has to work in tomorrow's landscape. I like to say today's landscape is boot camp for tomorrow's insanity.
  * Move toward a [future friendly web](http://bradfrost.com/blog/web/for-a-future-friendly-web/)

Mobile First Responsive Web Design I created a basic example of a page that tries to put these principles into action. Here are the links to the demo and tutorial: 

  * [Demo](http://bradfrost.com/demo/mobile-first/)
  * [Tutorial](http://www.html5rocks.com/en/mobile/responsivedesign/)
  * [Anatomy](http://bradfrost.com/blog/mobile/anatomy-of-a-mobile-first-responsive-web-design/)

That's about it. It was an absolute pleasure to be a part of such an amazing event. For more notes, Luke Wroblewski [took some notes](http://www.lukew.com/ff/entry.asp?1601) on the session as well.
  *[DETAILS]: Device, Environment, Time, Activity, Individual, Location, Social