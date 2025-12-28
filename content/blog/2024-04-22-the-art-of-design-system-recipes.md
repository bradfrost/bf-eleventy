---
title: The art of design system recipes
date: '2024-04-22'
post_id: 16790
original_link: https://bradfrost.com/blog/post/the-art-of-design-system-recipes/
custom_meta:
  hide-ads: Show
---

Recipes are a critical — and often misunderstood! — layer in the [design system ecosystem](https://bigmedium.com/ideas/design-system-ecosystem.html). First of all, what exactly are recipes?

> As the name suggests, recipes combine ingredients to create UI experiences that are complex, delicious, nutritious. The design system’s core components are the ingredients stocked in the pantry. Other product designers then take those ingredients to create product-specific compositions that meet their product needs.
 
 ![A 4-panel diagram. The top left shows labeled food ingredients like eggs, sugar, vanilla, milk, flour, and salt. The top right shows recipes that can be made with those ingredients, like donuts, cookies, croissants, muffins, and cakes. 

The bottom left shows design system components like buttons, cards, badges, and avatars. The bottom right shows three different card recipes that use the design system components.](https://bradfrost.com/wp-content/uploads/2024/04/recipes-1024x755.jpg) We see a lot of teams struggle with how to think about, create, and govern design system recipes. This post aims to demystify recipes so your team can successfully wield them to create great design-system powered products. We'll discuss how recipes:
 
   * don't live in the core design system
   * help teams work at their own pace
   * come in a few different flavors
   * can graduate into core design system components
   * tend to be more complex components
   * should still use design tokens
   * are a great place for collaboration
   * can be easily added to your architecture
 
With that windup out of the way, let's get cooking! Recipes don't live in the core design system A core design system contains common components, patterns, principles, and conventions that are to be shared across _an entire organization_. **Recipes on the other hand contain UI solutions that may only apply to _a specific_ product, product family, or brand within the organization. **Because of recipes' narrower focus, they live outside the core design system layer.  But why is this additional layer needed? **Without a recipe layer, one of two things can happen:**
 
   1. **The core design system becomes polluted** with scores of product-specific components, making the system unwieldy and unusable. 
   2. **The design system team assumes the role of naysayer** in a futile attempt to prevent product teams from creating too much sprawl or deviation from existing design system conventions.
 
Both of these scenarios are unpleasant and ultimately unsuccessful. **Introducing a recipe layer preserves the integrity of the core design system while also letting product teams do what they need to do**. ![](https://bradfrost.com/wp-content/uploads/2024/04/recipes-layers-1024x347.png) Adding this layer that on top of a core design system is critical for organizations who need to do support:
 
   * Multiple products
   * Multiple brands (e.g. Global brand, Child brand, Acquisition, etc)
   * Multiple product families (e.g. marketing websites vs SaaS web applications) 
   * Multiple product generations (e.g. "legacy" vs "next gen")
 
Creating and managing any or all of these necessitates teams being able to work at their own pace. Recipes help teams work at their own pace In [Ship Faster by Building Design Systems Slower](https://bigmedium.com/ideas/design-system-pace-layers-slow-fast.html), Josh Clark asks "**What do you do when a product team needs a UI component, pattern, or feature that the design system team cannot provide in time, or is not part of their scope?** " 

> The answer is not to add a rushed or ill-considered solution to the design system library to meet the product team’s urgent need. But it also doesn’t mean that the product team should slow down and wait. The pace layers should move at their pace and in their own lane, without hurrying or slowing the others. 
 
 Recipes serve as an important pressure release valve for the natural tension that arises between a design system and the products it serves. A recipe layer gives product teams the autonomy they need in order to make the best products possible while still working with the grain of the core design system. There are few different flavors of recipes Recipes can assume a few different forms, which can make it tricky to talk about. They can be:
 
   * **Compositions of design system components** meant to be used consistently across a product (e.g. a Product Card recipe consisting of a Card, Heading, Button, and Text that come from the design system).
   * **Custom components** that are novel inventions (e.g. a starburst badge) or intentional deviations from existing design system conventions (e.g. a deliberately funky button style or sophisticated filtering widget)
   * **A combination of design system and custom components**
 
Component compositions Assembling design system components into product-specific compositions is perhaps the most common recipe use case (and is also where the term "recipe" originates). **Certain design system components need to be extremely composable: cards, modals, drawers, headers, and footers come to mind.** They share the same general container structure but the guts of those components can vary wildly across products and implementations. A design system’s core component library might contain a card container, button, badge, heading, text passage, star rating, and time like so: Using those same ingredients, **different product teams can create their own compositions to be used consistently across their respective digital products.** The e-commerce team can compose a Product Card recipe, and the analytics team can compose a Customer Data Card recipe, the marketing team can compose a News Card recipe. See the Pen [ Card Recipes](https://codepen.io/bradfrost/pen/RwOMeap) by Brad Frost ([@bradfrost](https://codepen.io/bradfrost)) on [CodePen](https://codepen.io). Each product team gets the benefits of wielding those core design system components (they don't have to build all atomic elements from scratch, get visual/UX/front-end best practices for free, etc), but they also get to arrange those components into shapes that are most appropriate for their respective products.  Custom components This is where we pull the hot sauce from our purses. This is where we substitute olive oil for the lard outlined in our grandmother's recipe. This is where we sprinkle in a couple extra razzle-dazzle ingredients to our down-the-middle Food Network recipe. Unlike recipes that merely compose existing design system components, custom component recipes either:
 
   * **Intentionally deviate from the core design system conventions** ("Our product _**needs**_ orange parallelogram primary buttons instead of the design system's purple rectangular buttons")
   * **Address a gap in the current core design system** ("We need a min/max range slider for our filters and we don't see one in the design system")
   * **Are truly custom snowflakes** ("We need this fancy-pants starburst badge and we know it doesn't apply to any other product")
 
All of these use cases are legitimate (even if they make design system purists' eyes twitch). Back to the concept of [pace layers, Josh explains](https://bigmedium.com/ideas/design-system-pace-layers-slow-fast.html) that **the faster product pace layer's job is to invent and innovate, while the slower design system pace layer's job is to curate and capture sturdy solutions** :

> This approach recognizes the role of product as the innovative outer pace layer. Product is where experiments and first efforts should happen. The design system should capture and share the successful experiments after they prove out. “Fast learns, slow remembers.”
 
 The recipe layer can be where fresh ideas, inventions, iterations, and improvements play out. And if those experiments prove to be successful?  Recipes can graduate into core design system components Restaurant incubators are a really cool concept. A group of fledgling restauranteurs operate out of a shared space, test out a restaurant concept, and cut their teeth. They pilot their business and menu, and if they're successful, they can graduate out of the incubator and into their own space. In Pittsburgh, my favorite pizza place, Iron Born Pizza, began in an incubator. If you find yourself in Pittsburgh, be sure to check out restaurant incubators like Federal Galley.  In the UI world, the recipe layer can serve the same role as a restaurant incubator. Product teams experiment and implement novel ideas. If those ideas bear fruit and perform well, those ideas ought to be considered at the core design system level. Maybe orange parallelogram buttons significantly outperform the current design system's purple rectangle buttons. It may be worth experimenting with orange parallelograms in other applications and measuring the results. If and making a switch if success is found across the board. It's important to note that **_some_ component recipes might become core design system candidates, while others will only ever remain as product-specific recipes.** Both paths are totally fine!  Design systems are living, breathing, evolving entities, and it takes a long time to get to comprehensive coverage. **Recipes-as-component-incubators can be a great strategy for kick-starting new design system components in a needs-based, thoughtful manner.** Recipes tend to be more more complex components  A core design system tends to include more of atomic-level elements, while recipes tend to be more complex components — "[organisms](https://atomicdesign.bradfrost.com/chapter-2/#organisms)" in atomic design-speak. Keep in mind this is more an observation than a hard rule.  This division makes sense: a checkbox atom can only assume so many forms, while a filtering toolbar can be an incredibly sophisticated and complex piece of UI machinery. More complexity can often limit a component's portability and reusability across an organization's portfolio of digital products. **A recipe layer allows different teams to combine the same atomic elements into product-specific components in order to achieve their respective goals without over-engineering the core design system component.** Custom-built recipes should still use design tokens Custom components are going to happen, but thankfully there are ways of creating custom components in a way that works with the grain of the design system. **Teams should still apply the design system's token system wherever possible to help stay aligned with the design system's established conventions and ensure their custom components feel cohesive sitting alongside system-provided components.**
     
     
     .custom-error-recipe {
       background: var(--ds-color-background-utility-error);
       color: var(--ds-color-content-utility-error);
       border-color: var(--ds-color-border-utility-error);
     }
 
 The exception here is custom components that are deliberately deviating from the established design system conventions. In these instances, teams may be trialing a new design language, creating campaign-specific or seasonal visual effects, or some other justifiable reason. These scenarios should be handled with care as they can veer into going-rogue-for-no-good-reason territory if not thoughtfully managed. The recipe layer is a great place for collaboration **The recipe layer is a great watering hole for the core design system team and an individual product team to come together.** A formal recipe layer creates visibility into the product world where product teams are able to demonstrate how they're using (and abusing!) a design system's materials. The design system team can check in on the recipe layer, provide support, ask questions, and give advice. In our work with scores of organizations, we've seen the recipe layer promote healthy relationships between design system teams and the product teams they serve.  Recipes can be easily added to your architecture Establishing a recipe layer in a design system is thankfully pretty straightforward. The gist involves going from:
     
     
     Core DS library -> Product
 
 to:
     
     
     Core DS library -> Product-specific recipes -> Product
 
 Product teams manage their own recipes library that subscribes to the core design system library in both design and code. Individual product teams then subscribe to both the core design system and any relevant product-specific recipe libraries. Recipe surgery For design systems that may have cooked one-too-many recipes into their core design system, a quick and painless surgery can migrate recipes out of the core system and into a new recipe layer that product teams subscribe to in addition to the core library. These changes should be accompanied by a deprecation period, clear communication, and a bit of hand-holding to migrate to the new recipe architecture. Get cookin'! Whew! We've covered the many ways that recipes are a helpful addition to your design system ecosystem. I hope this post inspires you to whip up some delicious recipes using your design system's ingredients.  **Recipes require thoughtful coordination of architecture and people.** At Big Medium, we work with digital organizations to help teams put the right architecture, people, processes, and tools in place in order to set digital organizations up for long-term success. If you could benefit from expert help with your design system architecture and practice, [get in touch](https://bigmedium.com/hire/)! And as always, we'd love to hear how you're thinking about and executing these concepts in your work. 
