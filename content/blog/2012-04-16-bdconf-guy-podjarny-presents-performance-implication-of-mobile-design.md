---
title: 'BDConf: Guy Podjarny presents Performance Implication of Mobile Design'
date: '2012-04-16'
post_id: 3587
original_link: https://bradfrost.com/blog/post/bdconf-guy-podjarny-presents-performance-implication-of-mobile-design/
---

In [Performance Implication of Mobile Design](http://bdconf.com/2012/orlando/schedule#guypod), [Guy Podjarny](http://blaze.io) ([@guypod](http://twitter.com/guypod)) discusses performance best practices for dedicated mobile sites and responsive designs. Performance Matters

  * Web users will typically wait about 2-3 seconds for a site to load. Research shows if the users can't load a page quickly, they'll abandon ship and head to the competition.
  * Mobile users have same expectations as desktop users. They want sites to load as fast if not faster than desktop sites.

Performance for Separate Sites

  * Dedicated mobile websites cause redirect problems, which are extremely costly for performance.
  * ESPN's dedicated mobile site redirect caused a delay of 1.3 second, and that's before any content begins to download 
  * Javascript redirects are much slower than server-side redirects. Avoid using client-side redirects for mobile detection.
  * Redirects burn up the 2-3 second frame you have to gain a user. You've already lost them by the time the page actually starts to load.
  * Minimize redirects. Use HTTP redirects, not JS redirects. Cache HTTP Redirects on the CDN. HTTP 301 Redirects w/ a future Expiry.

Performance for Responsive Designs

  * Responsive sites typically download a lot more content than you need.
  * 50%-90% of responsive sites had little to no performance savings on small screens than on large screens
  * Only 3% of responsive sites had a much smaller performance footprint on small screens than on large screens
  * Smashing Magazine has a rich sidebar with a lot of ads and content, and gets hidden for small screens. However, **hidden content still gets downloaded**.
  * Avoid using `display: none;` to hide content for smaller screens in responsive designs. The content still gets downloaded even though it's not being used.
  * Media queries don't prevent CSS downloads
  * Separate CSS files per `media` type typically get downloaded by browsers even if it doesn't meet the criteria.

Solutions

  * About 350K of roughly 520K of a page load is taken up by image downloads. One of the best things you can do is implement an adaptive image solution.
  * Your responsive site should match the file size of a dedicated mobile site. Build mobile first then enhance from there
  * Enhance via Javascript: Split your files by layout and resolution and progressively enhance based on the capabilities device
  * Measure your results. Without measuring all this is meaningless