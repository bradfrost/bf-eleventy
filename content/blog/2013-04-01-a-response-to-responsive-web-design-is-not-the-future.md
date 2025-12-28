---
title: A Response to 'Responsive Web Design is Not the Future'
date: '2013-04-01'
tags:
- opinion
- rant
- responsive web design
- sixrevisions
post_id: 5910
original_link: https://bradfrost.com/blog/post/a-response-to-responsive-web-design-is-not-the-future/
---

I fundamentally disagree with [this entire article](http://sixrevisions.com/mobile/responsive-web-design-not-the-future/). Let's address each point: 1\. Web Performance The fact that the author references Tim Kadlec's [Blame the Implementation Not the Technique](http://timkadlec.com/2012/10/blame-the-implementation-not-the-technique/) article and still makes these claims is pretty amazing. 

> "We can't predict future behavior from a current experience that sucks. —[Jason Grigsby](http://www.slideshare.net/grigs/the-immobile-web)"
 
 The fact of the matter is that yup, a lot of responsive sites are overweight. In fact, [all web pages are overweight](http://httparchive.org/interesting.php). Even [dedicated mobile sites can be overweight](http://mobiforge.com/designing/blog/performance-money-part-1-end-users-wallet). Blame the implementation, not the technique. I believe web creators need to treat [performance as design](http://bradfrost.com/blog/post/performance-as-design/). That has nothing to do with responsive web design, and everything to do with prioritizing performance instead of treating it as an afterthought. 2\. Complexity

> there is no denying responsive web design is inherently complex.
 
 ![This is just the beginning](http://bradfrost.com/wp-content/uploads/2012/11/devices.jpg) Welcome to our new reality! It's not that responsive web design is inherently complex, it's that the [Web landscape is inherently complex](http://bradfrost.com/blog/post/this-is-the-web/). However you want to address this complexity is up to you (which brings us to our next point), but there's no denying this is our new reality. 3\. Time and Money I address this in [How Much Does a Responsive Web Design Cost?](http://bradfrost.com/blog/web/how-much-does-a-responsive-web-design-cost/). Yes, responsive web design costs more...than doing nothing. You can ignore the multitude of devices accessing the Web at your own peril. And sure, you can make dedicated experiences for every device class. That certainly won't cost extra time and money, right? 4\. UI and UX Limitations

> Responsive websites are limited for utilizing or recognizing key mobile features such as user location, connectivity, device limitations, software potential, and user needs.
 
 No they aren't. The author is playing into the [The Myth of the Mobile Context](http://www.the-haystack.com/2012/07/09/great-works-of-fiction-presents-the-mobile-context/), but again there's nothing stopping responsive designs from taking device capabilities into consideration when designing multi-device web experiences. It's called [progressive enhancement](http://easy-readers.net/books/adaptive-web-design/) and it's up to us to use it properly. Moreover, the web community is coming up with a [whole ton of responsive patterns](http://bradfrost.github.com/this-is-responsive/patterns.html) to serve the right UI to the right context. Preventing Innovation

> For example, the banking giant JP Morgan Chase thought about the specific characteristics of mobile devices that they could use to enhance the online banking experience, instead of simply reformatting their desktop website for mobile customers. Their mobile app has a feature called Quick Deposit that uses smartphone cameras to take pictures for depositing checks.
 
 This is just silly. The author talks about taking advantage of unique mobile capabilities by highlighting the deposit by camera feature by Chase Bank's **native mobile app.** Of course [getUserMedia support](http://mobilehtml5.org/) in the browser is getting better, but this is beside the point. The fact is that nothing is stopping responsive sites from taking advantage of unique device capabilities. We have [lots](http://modernizr.com/download/) of [ways](http://detector.dmolsen.com/) of detecting features and introducing enhanced functionality when a particular device can handle it. Again, this is called progressive enhancement and it is our friend. Come Aboard The fact that this article was posted on an influential design blog is disappointing. This kind of shallow thinking is what leads organizations to embrace short-term solutions instead of addressing the legitimately hard problems we're facing. Let's use this stuff as incentive to keep working together to make the Web awesome on the host of connected devices out there.
  *[DETAILS]: Device, Environment, Time, Activity, Individual, Location, Social
  *[RESS]: Responsive Design with Server-Side Components