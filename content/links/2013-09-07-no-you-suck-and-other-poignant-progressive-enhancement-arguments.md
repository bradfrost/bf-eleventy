---
title: ‘No, You Suck!’ and Other Poignant Progressive Enhancement Arguments
date: '2013-09-07'
tags:
- commentary
- opinion
- progressive enhancement
categories:
- link
post_id: 6425
original_link: https://bradfrost.com/blog/link/no-you-suck-and-other-poignant-progressive-enhancement-arguments/
custom_meta:
  hide-ads: Show
---

Here's an article in response to my ["Fuck You."](http://bradfrost.com/blog/post/fuck-you/) post. I'm really happy it ruffled someone's feathers enough to write about it. The post contains some good arguments, mostly revolving around how "supporting" every single browser out there makes bad business sense. I totally agree that it's a foolish to test on every browser out there. It's actually impossible to do so. Anyways, [here's my response to his post](http://joshbroton.com/no-you-suck-poignant-progressive-enhancement-arguments/#comment-2535): Great post. And yes, I mean that. I've written some more thoughts [on this subject](http://bradfrost.com/blog/post/on-progressive-enhancement/) if you're interested in a less over-the-top read.  My thoughts on your post:

> It’s incredibly elitist to say that every site and every web app we code has to support every subset of user on his predefined list of supportables. 
 
 It is elitist to say everything needs to work everywhere *or else*. A lot of your post revolves around "support," and what I usually say is that there's a difference between "support" and "optimization." It's literally impossible to optimize for every browser and device out there, and it would be foolish to try.  You're totally justified in ignoring IE6, IE7, and even IE8 if it doesn't make sense from a business standpoint. I just worked on a project where we did exactly that. But even though I didn't bother to fix the plethora of odd bugs I saw in those browsers, I also didn't UA sniff and say "sorry, but your browser sucks. You get nothing." I think it's important to focus on what makes business sense, but I also think it's important to give users an experience if they're asking for it. Hopefully that doesn't sound as elitist. Also, my "predefined set of supportables" wasn't a list of things I'm suggesting we must test on, but rather a list of things that either clients or colleagues have said didn't matter.

> I’ve built web apps where JavaScript is central to the experience. Without it, those web apps aren’t worth using. Should I just abandon the project for the 1% without JavaScript? 
 
 There can definitely be experiences that rely on Javascript (or any technology really) in order to work. But my main thing about JS support is that it's not binary. PE is more about dealing with what happens when things fail versus when Javascript is explicitly disabled.  A lot of JS developers talk about just writing good code to solve that problem, but a lot of other things are at play. Sometimes the network craps out. Sometimes the browser (especially mobile browsers) suck and attempt to run the JS, even though they shouldn't. There are lots of reasons why JS fails, which is why I think providing an adequate fallback should built in by design. I think you wrote a great post, and I think this line really sums it up: "Be realistic and not idealistic." I fully subscribe to that, and hope you don't judge me solely on my last post. If you read some of my other stuff, hopefully you'll find it a bit more pragmatic and reasonable.  Thanks for taking the time to respond.
  *[DETAILS]: Device, Environment, Time, Activity, Individual, Location, Social
  *[RESS]: Responsive Design with Server-Side Components