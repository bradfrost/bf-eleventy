---
title: Better Numerical Inputs for Mobile Forms
date: '2012-02-02'
tags:
- forms
- mobile web
- semantics
post_id: 2664
original_link: https://bradfrost.com/blog/post/better-numerical-inputs-for-mobile-forms/
---

[![usable numeric inputs in iOS](https://bradfrost.com/wp-content/uploads/2012/02/keypad-650x527.png)](https://bradfrost.com/wp-content/uploads/2012/02/keypad.png)My [colleagues](http://rga.com/) in Chicago just launched a great responsively-designed [greygoose.com](http://www.greygoose.com/), and [Jason Grigsby](http://twitter.com/grigs) and I were wondering how they brought up the user-friendlier telephone keypad in iOS instead of the ok-but-not-great number keypad. The team dynamically set the input type to `tel` with Javascript, but we were wondering if there would be a better way. After some Twitter-talk with Grigsby and [Chris Coyier](https://twitter.com/chriscoyier), I set up a [demo page](https://bradfrost.com/demo/tel/) to see if setting `pattern="[0-9]*` would make a difference. Thankfully it did. So here's the recommended format for numeric input types:

Adding `pattern="[0-9]*"` triggers iOS to bring up the obese-finger-friendly keypad instead of the just-alright numeric keypad riddled with punctuation. Usability wins and the crowd goes wild. By default iOS only triggers the number-only keypad on `tel` inputs, but this way the [input type and the keypad don't need to be bound](http://twitter.com/lukew/status/164865779219697664). Semantics win and the crowd rises to their feet in jubilation. Also worth noting the Kindle Fire pulls up a friendlier keypad regardless of whether `pattern="[0-9]*` is set: [caption id="attachment_2678" align="alignnone" width="650" caption="Number & Tel inputs on Amazon Kindle"]![Number & Tel inputs on Amazon Kindle](https://bradfrost.com/wp-content/uploads/2012/02/photo-1-650x866.jpg)[/caption] Big thanks to [Björn Rixman](http://twitter.com/bjornrixman), Chris and Jason for working through this! Related Resources: 

  * [Dive into HTML5 Forms](http://diveintohtml5.info/forms.html)
  * [The Current State of HTML5 Forms](http://wufoo.com/html5/)
  * [Web Form Design](http://www.lukew.com/resources/web_form_design.asp)

Update There are a few things that people pointed out in the comments or in other posts regarding numeric input types: 

  * Not all inputs that contain numbers (credit cards, SS#, etc) should have an input type of `number`. They are best served up as text inputs, which are still free to use the pattern attribute to pull up the tel keypad on supported devices.
  * Submitting `input type="number"` inserts a thousands separator in iOS, which can screw up form submission.
  * For all the talk about semantics, it really boils down to creating a user experience, which means that dynamically setting the input type to `tel` with JS is a decent stopgap.

Some fine people have written about these issues in more detail:

  * [Cracking the Code for a Numeric Keyboard](http://seesparkbox.com/foundry/cracking_the_code_for_a_numeric_keyboard)
  * [On the New HTML5 Number Input](http://davidjohnmead.com/2012/02/09/on-the-new-html5-number-field/)