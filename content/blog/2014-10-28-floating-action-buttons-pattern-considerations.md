---
title: Floating Action Buttons Considerations
date: '2014-10-28'
tags:
- ergonomics
- floating action buttons
- lukew
- mobile
- navigation
- patterns
- touch
post_id: 8387
original_link: https://bradfrost.com/blog/post/floating-action-buttons-pattern-considerations/
custom_meta:
  hide-ads: Show
---

Luke Wroblewski walked through some [critical considerations for designing for large screen smartphones](http://www.lukew.com/ff/entry.asp?1927). One major consideration is the reachability of the navigation. He discusses a few considerations and emerging navigation patterns, including the **floating action buttons** pattern. [![](http://i.imgur.com/X2mWRUr.gif?1)](http://imgur.com/X2mWRUr) We used the floating action buttons pattern for the social sharing options on [Entertainment Weekly's responsive mobile site](http://m.ew.com). The pattern had some obvious advantages in that it was **easily tappable** and **its fixed position drew attention to the element**. Because social sharing was an important business goal, this pattern fit the bill. We even made a little fancy-pants animation to open and close the actions. Personally, I think this pattern has several disadvantages. [Successful navigation](https://bradfrost.com/blog/web/responsive-nav-patterns/) finds the balance between unobtrusiveness and accessibility**. To Luke's point, the floating action button pattern is certainly accessible, but I'd say **the pattern is quite obtrusive**. It stands out in an interface like a piece of dirt sticks out in the corner of your eye. This fixed element shouting for your attention may be effective, but may do so to the detriment of the rest of the interface. Ultimately, any responsive navigation pattern has its share of pros and cons. For the floating action buttons pattern, I'd say it comes down to how critical the specific navigation & actions are to the experience.
  *[DETAILS]: Device, Environment, Time, Activity, Individual, Location, Social
  *[RESS]: Responsive Design with Server-Side Components