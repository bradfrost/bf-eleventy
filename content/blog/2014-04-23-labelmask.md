---
title: Labelmask
date: '2014-04-23'
tags:
- accessibility
- filament group
- forms
- input mask
- politespace
- ux
post_id: 7684
original_link: https://bradfrost.com/blog/post/labelmask/
custom_meta:
  hide-ads: Show
---

![Labelmask](http://bradfrost.com/wp-content/uploads/2014/04/labelmask1.gif) I've recently been for more efficient ways for user inputs, especially around [credit card input](http://bradfrost.com/blog/post/single-field-credit-card-input-pattern/). In exploring using input mask solutions, a lot of people have weighed in on several important limitations/frustrations: 
 
   * **Accessibilty** –One of the biggest concerns with input masks is that they're pretty terrible for screen reader users. [This video demonstrates that pretty clearly](https://docs.google.com/file/d/0B9rGmqNcHo-mRGpMS0xQbzVzeGM/edit).
   * **Distracting** –Quite a few people have expressed frustration with input masks, as they move things around while they're trying to input data. Because the input is simultaneously trying to be an input and a formatted display, it can lead to some weird shifting around that some people feel gets in the way of the task at hand.
   * **Mystery behavior** –I know I'm not a huge fan when I have to guess the behavior of a form field. Is this going to auto-advance? Will I have to hit tab? I don't know! Messing with the default behavior of form inputs could lead to confusion.
   * **Copying/Pasting, auto-fill, etc** – Some input-masked solutions (granted it could just be an implementation issue) struggle with browser auto-fill solutions and copying/pasting.
 
Yesterday, the [Filament Group](http://filamentgroup.com/) released a nice little script called [Politespace](http://filamentgroup.com/lab/politespace/), which provides an alternative for input masking. Basically, Politespace adds spacing for input fields when the user exits the field, rather than trying to add that formatting while the user is trying to input data. I really like this solution, however a lot of input masks' benefits come from guiding the user while they are entering their information. So while I think Politespace is definitely great for reviewing data once it's already entered, I wanted to explore ways to make the input process a little easier for users without having to rely on an input mask. Labelmask I stole Politespace's code (thanks Zach!) and hacked it up to create a [proof of concept](http://bradfrost.com/demo/labelmask/). What Labelmask does is inserts formatting hinting after the label, and updates as the user inputs their information. When the user leaves the field the formatting gets applied to the input value itself, Politespace-style. Because the hinting isn't being applied to the input itself, (I'm hoping) it's more accessible to screen readers and doesn't get in the way of the user's input as much. Wishlist
 
   * **Proper development** – I wouldn't ever dare call myself a JavaScript developer. The demo I put together is merely a proof of concept, rather than a done-and-dusted solution. I'd love to see people develop it for real. [The code is on Github](https://github.com/bradfrost/labelmask) if you want to take a look.
   * **Roll in validation** –It would be great if the script could let the user know when they've entered a valid credit card number, phone number, or whatever. This could be a simple color change, checkmark, or some other indicator that they've successfully entered their information.
   * **More flexible destinations** –Labels seem like a good place for the labelmask hinting, but it could easily go in a note after the input.
   * **Optional label hiding** –Especially on small screens, there might not be enough room to comfortably display the label and the labelmask hinting at the same time, so perhaps there could be an option to temporarily hide the label text while in focus.
 
You can [view a demo here](http://bradfrost.com/demo/labelmask/) or check out the project [on Github](https://github.com/bradfrost/labelmask). All in all, I think it's a pretty good balance between accessibility and unobtrusiveness. Curious to hear people's thoughts!
  *[DETAILS]: Device, Environment, Time, Activity, Individual, Location, Social
  *[RESS]: Responsive Design with Server-Side Components