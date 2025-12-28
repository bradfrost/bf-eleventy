---
title: Float Label Pattern
date: '2013-10-24'
tags:
- accessibility
- design
- form
- label
- matt d smith
- mobile
- patterns
- usability
- web
post_id: 6983
original_link: https://bradfrost.com/blog/post/float-label-pattern/
custom_meta:
  hide-ads: Show
---

[caption id="attachment_6986" align="aligncenter" width="800"][![Float Label Form Interaction by Matt D Smith](http://bradfrost.com/wp-content/uploads/2013/10/form-animation-_gif_-1.gif)](http://dribbble.com/shots/1254439--GIF-Mobile-Form-Interaction) The float label form interaction by Matt D Smith[/caption] Inline form labels [can cause a lot of trouble](http://baymard.com/blog/mobile-forms-avoid-inline-labels), but at the same time the constraints of mobile screens force designers to do more with less space. It puts people in a weird position. Let's take a look at the pros and cons of inline labels: Inline Label Pros
 
   * **Saves space** –This is the big advantage of inline labels. With inline labels, designers can fit more of the form in a single screen and reduce the user's need to scroll.
   * **Act button-y.** Inline labels turn form inputs into button-like objects, which is nice considering we're tapping on them with our big fat sausage fingers.
   * **Cleaner** –I argued with many a designer over inline label accessibility over the years, and their main push for inline labels was because it creates a much cleaner experience.
 
Inline Label Cons
 
   * **User loses context** –The biggest disadvantage of inline form labels is that the user loses the context of the input once they focus on the field and after they've entered a value.
   * **[Placeholders aren't a replacement for labels](http://www.whatwg.org/specs/web-apps/current-work/multipage/common-input-element-attributes.html#the-placeholder-attribute)** –These inline labels sit where the `placeholder` text should go, and some [demos](http://jsbin.com/aCUvOnI/18) remove the `label` tags altogether. [That's a massive accessibility concern](http://www.456bereastreet.com/archive/201204/the_html5_placeholder_attribute_is_not_a_substitute_for_the_label_element/).
   * **Can't use`label` and `placeholder`**–The `label` is occupying the space of the `placeholder`, so we can't provide users with extra hinting. This might not be a problem for fields like "First Name" and "Last Name", but can be troublesome when trying to communicate fields that may require certain formats, like dates and phone numbers.
 
The Float Label Pattern Designer [Matt D Smith](http://studiomds.co/) shared a [Dribble shot](http://dribbble.com/mds) of a clever new form interaction pattern. The float label pattern floats the inline label up above the input after the user focuses on the form field or enters a value. Float Label Pros
 
   * **User keeps context** –The main advantage of this pattern is that the user keeps the field's context after they've focused and entered a value. This provides for a more accessible, less frustrating experience.
   * **Clean and scannable by default** –This pattern allows for a clean inline label experience by default, and only becomes a little more cluttered once the user has filled things out.
   * **Elegent** –It needs to be said: this pattern is sexy. You usually can't say that about forms. It looks good and the animations are a nice subtle touch. 
 
Float Label Cons
 
   * **Still doesn't provide room for both`label` and `placeholder`**–Because the label is occupying the same space as the placeholder, there's no room for additional hinting.
   * **Small Label** –The label becomes small and possibly hard to read, but at the same time it's not as big a deal. Once the user has interacted with the input, the label becomes a reference rather than an instruction.
   * **Potential for code abuse** –Based on the few demos I've seen, there's the possibility of wrecking accessibility and semantics.
 
Considerations
 
   * **Progressively Enhance** –This pattern seems great, but make sure the default experience is an accessible, usable form that includes `labels`,`for` attributes, `tabindex`, and all those other [form best practices](http://www.lukew.com/presos/preso.asp?19). Detect JS, animation, and other support using something like [Modernizr](http://modernizr.com/) and go from there.
   * **Usability trumps cleanliness** –The lack of `placeholder` with inline labels can create a more ambiguous experience. Remember, the goal of form design is to get people to fill out the forms as easily as possible. Often times designers sacrifice hinting and instruction for the sake of cleanliness (think of how many times you've entered a password only to find out after the fact that it required 3 numbers, 2 exclamation marks, 12 uppercase latters, and a [whammy bar](http://www.youtube.com/watch?v=3k9P62cC-_c).) A little hint goes a long way.
   * **Be mindful of spacing and size** –Some of the demos I've seen implementing this pattern would be frustrating for a mobile user, due to the close proximity of the inputs. Make sure to space things out accordingly to account for fat fingers.
   * **Legibility** –The floated label can be small, but make sure the user can still read the label. Also, provide adequate contrast for the inline labels. Designers love some light-gray-on-white, but that can cause accessibility issues.
 
Ultimately, I think this pattern is a great way to overcome a lot of the shortcomings of inline labels. I can't wait to see the concept taken further. Resources
 
   * [Float Label Form Interaction](http://dribbble.com/shots/1254439--GIF-Mobile-Form-Interaction)–Matt D Smith's Dribbble shot
   * [JVFloat.js](https://github.com/maman/JVFloat.js)–A JS plugin that implements the float label pattern.
   * [JVFloat.js - the experiment with form Accessbility and UX in HTML5](http://blog.mahardi.me/2013/10/14/jvfloatjs---the-experiment-with-form-accessbility-and-ux-in-html5/)–A blog post about JSFloat and the float label pattern.
   * [Float Pattern Demo](http://codepen.io/aaronbarker/pen/tIprm)–A nice demo of the float pattern by Aaron Barker
   * [Mobile Form Usability: Never Use Inline Labels](http://baymard.com/blog/mobile-forms-avoid-inline-labels)–A really good read explaining the pitfalls of inline labels.
   * [The HTML5 placeholder attribute is not a substitute for the label element](http://www.456bereastreet.com/archive/201204/the_html5_placeholder_attribute_is_not_a_substitute_for_the_label_element/) is a good accessibilty reminder from Roger Johansson.
   * [Making Inline Form Labels Suck Less](http://viget.com/inspire/making-infield-form-labels-suck-less)–A great related concept that throws inline labels out to the left on focus.
   * [How the Float Label Pattern Started](http://mattdsmith.com/float-label-pattern/)–Matt D Smith wrote up some history and thinking behind the float label pattern.
 

  *[DETAILS]: Device, Environment, Time, Activity, Individual, Location, Social
  *[RESS]: Responsive Design with Server-Side Components