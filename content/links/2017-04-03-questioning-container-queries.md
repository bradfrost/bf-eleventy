---
title: Questioning Container Queries
date: '2017-04-03'
tags:
- container queries
- css
- paul robert lloyd
categories:
- link
post_id: 10340
original_link: https://bradfrost.com/blog/link/questioning-container-queries/
custom_meta:
  hide-ads: Show
---

I think what Paul Robert Lloyd is saying here is interesting, but I'm not sure it adds up to "we don't need container queries." His [example](http://codepen.io/paulrobertlloyd/pen/PpXygo) shows what layouts are possible with grid and flexbox, all of which I think is awesome. These techniques reduce the need for a whole bunch of media queries, which again is fantastic. But I think the need for container queries still remains. Paul uses the following block pattern in his demo:![](http://bradfrost.com/wp-content/uploads/2017/04/Screenshot-2017-04-03-13.06.42.png) This component is styled the same irrespective of its placement in the layout. But what if we as designers decided that we want to switch the component's styling to a horizontal format if there's enough space to, resulting in something like this: ![](http://bradfrost.com/wp-content/uploads/2017/04/Screenshot-2017-04-03-13.11.35.png) This is where I see container queries helping. In fact, I think Paul's post reinforces the need for container queries. Between flexbox, grid layout, subgrids, and more, we have more power over our layout containers than ever before. But manipulating components themselves based on context still feels a bit gross. It's worth pointing out that it may be possible to accomplish the above example using grid or some other method. I bet it is. But I'm wondering if doing it that way would be hacky or appropriate. I genuinely don't know. What I do know is that having a mechanism that says "if this component lives in a container that's at least X-wide, make these style changes" feels like it makes sense. These are good conversations to have, especially now that we have more layout tools at our disposal. So thanks Paul for making them happen!
  *[DETAILS]: Device, Environment, Time, Activity, Individual, Location, Social
  *[RESS]: Responsive Design with Server-Side Components
  *[CMS]: Content Management System
  *[GUI]: Graphical User Interface