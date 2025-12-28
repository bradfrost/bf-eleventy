---
title: A rare use case for em units
date: '2024-06-04'
tags:
- css
- design systems
- design tokens
post_id: 20290
original_link: https://bradfrost.com/blog/post/a-rare-use-case-for-em-units/
custom_meta:
  hide-ads: Show
---

`[text-decoration-offset](https://developer.mozilla.org/en-US/docs/Web/CSS/text-underline-offset)` is a good use case for `em` units. Most of the time we favor `rem`s over `em`s, but in this case we want the text underline offset to proportionally scale with the `font-size` property. Here's a quick demo: See the Pen [ Text decoration offset ](https://codepen.io/bradfrost/pen/abrWaEe) by Brad Frost ([@bradfrost](https://codepen.io/bradfrost)) on [CodePen](https://codepen.io). This little nugget came from some fun in-the-weeds typography design token chats with a big publisher client today. They were looking at setting up `text-decoration-offset`-specific tokens. Part of me tells me this is overkill, but the other part understands that links and underlines is very much a core part of their business.  We proposed trying to avoid `text-decoration-offset` tokens if they could help it in order to reduce the number of tokens they have to manage. There are already plenty of tokens to manage, and this particular organization has 40 themes to support, so the fewer moving parts the better. So hopefully the humble `em` can help make their system a bit more maintainable. 
