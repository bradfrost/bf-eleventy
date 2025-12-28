---
title: Transparent borders
date: '2024-05-07'
tags:
- css
- dave rupert
- design systems
- design tokens
- themeable
post_id: 20194
original_link: https://bradfrost.com/blog/post/transparent-borders/
custom_meta:
  hide-ads: Show
---

[You Want border-color: transparent, Not border: none](https://frontendmasters.com/blog/you-want-border-color-transparent-not-border-none/) by [Dave](https://daverupert.com/) is a great reminder to not remove borders from components for accessibility reasons, especially to better support [high contrast mode](https://support.microsoft.com/en-us/windows/change-color-contrast-in-windows-fedc744c-90ac-69df-aed5-c8a90125e696#:~:text=Save%20and%20apply.-,Turn%20high%20contrast%20mode%20on%20or%20off,colors%20on%20the%20screen%20change.). `border-color: transparent` comes in handy for other use cases as well.  The first is for a such a 101-level thing, but holy smokes is it still something I commonly encounter across the internet. Defining a border on hover like so:
     
     
     button:hover {
       border: 2px solid navy;
     }
 
 Changes the box model and is janky as all hell: ![An animated gif of a blue button that adds a border when the cursor hovers over it, resulting in a shift in the button's size](https://bradfrost.com/wp-content/uploads/2024/05/button-border.gif) There are many ways to address this, including using `border-color: transparent`.
     
     
     button {
       border: 2px solid transparent;
     }
     
     button:hover {
       border-color: navy;
     }
 
 ![An animated gif of a blue button that adds a border when the cursor hovers over it. Because it uses a transparent border, it does not change its size when hovered.](https://bradfrost.com/wp-content/uploads/2024/05/button-fixed.gif) This all feels pretty CSS 101, but apparently it still needs spelled out! Another use case for `border-color: transparent` is for [themeable design systems](https://bradfrost.com/blog/post/creating-themeable-design-systems/). We help organizations create themeable design systems for [many different purposes](https://bradfrost.com/blog/post/the-many-faces-of-themeable-design-systems/), including supporting multiple brands, sub-brands, white labeling, product families, dark mode, and more. When supporting multiple theme, it can be common for some themes to use borders while others don't. This flexibility is great! Each brand is able to express themselves how they see fit. But if implemented using different border widths, shifts in the box model happen. Here's the difference between borders defined in a theme vs using `border-color: transparent`: ![An animated gif that shows two buttons. The top button's size shift to demonstrate the addition of a border and using a transparent border color](https://bradfrost.com/wp-content/uploads/2024/05/button-border-size.gif) The lack of border results in a smaller, which can lead to misalignment and other unexpected behavior. `border-color: transparent` preserves the button size across themes.  Some shifts are inevitable (looking at you, typography!), but wherever possible you want to minimize shifts to the box model across themes and variants in order to reduce QA efforts across themes and variants. You can accomplish this by defining `transparent` for border colors in themes that don't have visible borders.  So yeah, hooray `border-color: transparent`! 
