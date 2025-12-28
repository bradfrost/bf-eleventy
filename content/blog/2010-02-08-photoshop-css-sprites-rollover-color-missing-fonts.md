---
title: 'Photoshop Trick for CSS Sprites: Rollover Color with Missing Fonts'
date: '2010-02-08'
description: As a web developer working with a variety of designers, I often find
  myself in situations where I need to create rollover states in Photoshop for text
  assets whose fonts I don't have installed on my c
tags:
- css
- font replacement
- photoshop
- sprites
- web
post_id: 575
original_link: https://bradfrost.com/blog/post/photoshop-css-sprites-rollover-color-missing-fonts/
custom_meta:
  hide-ads: Show
---

[caption id="attachment_583" align="alignnone" width="650"]![CSS Sprite Technique Using Color Overlay in Photoshop](https://bradfrost.com/wp-content/uploads/2010/02/css_sprite_photoshop_color.png) CSS Sprite Technique Using Color Overlay in Photoshop[/caption] As a web developer working with designers who provide me with a plethora of assets, I often find myself in situations where I need to create rollover states in Photoshop for text assets whose fonts I don't have installed on my computer.  How often have you seen the dreaded: 

> "The following fonts are missing...Font substitution will occur"

dialog when trying to simply change the color of the font in your design? This usually occurs when you're creating an image sprite using those fancy-schmancy non-web fonts designers love so much. While I highly recommend using [Cufon](http://wiki.github.com/sorccu/cufon/ "Cufon - Fonts for the people") or [SiFR](http://wiki.novemberborn.net/sifr/ "sIFR \(Scalable Inman Flash Replacement\)") to dynamically replace web text with the correct fancy font, I treat navigation text differently. **Why?** For one, Cufon and SiFR rely on Javascript and/or Flash in order to achieve the correct result, and I've had instances of bugs in both of them. Also, a bad instance of [FOUC](http://www.bluerobot.com/web/css/fouc.asp/ "Flash of Unstyled Content") can help ruin an otherwise elegant design. So instead I use the [Fahrner Image Replacement](http://stopdesign.com/archive/2003/03/07/replace-text.html "Fahrner Image Replacement Technique") and a well-designed [image sprite](http://www.alistapart.com/articles/sprites/ "CSS Image Sprites") to accomplish my top level navigation systems. It requires extra effort on my part and isn't as flexible as using the aforementioned techniques, **BUT** in my experience its a more bulletproof solution. Now back to the situation at hand: I have this great-looking font in my PSD but don't have it on my computer. I need to make rollovers for all these navigation states and I can't click into the text without altering its appearance. What's a developer to do? Here are the required steps: 

  1. **Duplicate the Photoshop layer** and position according to the sprite design
  2. In the layers panel, double click on the layer to bring up the **Layer Style** dialog box
  3. In the left column of the Layer Style dialog, select **Color Overlay** and change to the desired color
  4. **Lather, Rinse, Repeat** for as many elements needed to complete the navigation
  5. **Save** out PNG or GIF (depending on file size)
  6. **Style** using CSS to create the rollover effect

[caption id="attachment_582" align="alignnone" width="650"]![Photoshop's Color Overlay Dialog Box](https://bradfrost.com/wp-content/uploads/2010/02/photoshop_color_overlay.jpg) Photoshop\'s Color Overlay Dialog Box[/caption] At the end of the day, this technique may be tedious but its very reliable. Users without Javascript enabled can see the design in all its glory, you don't have to bother the designers to send you over every single font they have, and at the end of the day you've built a nice fully-functioning navigation system with one image and some CSS know-how. Don't you feel good about yourself?