---
title: Don't put crap in the design system
date: '2024-04-29'
tags:
- architecture
- design systems
- process
- recipes
- workflow
post_id: 20042
original_link: https://bradfrost.com/blog/post/dont-put-crap-in-the-design-system/
custom_meta:
  hide-ads: Show
---

![A Storybook UI with a bunch of poop emojis in the main window](https://bradfrost.com/wp-content/uploads/2024/04/CleanShot-2024-04-26-at-10.12.50-1024x606.png) One of my favorite [Josh](https://bigmedium.com/about/josh-clark.html) lines that's really stood the test of time and cuts through a lot of noise in a conversation:

> **Don't put crap in the design system.** Josh Clark
 
 What is crap? **Crap is rushed work, low-quality work, shortcuts, experiments, first drafts, one-offs, and other unvetted/untested/unverified work.** Let's be clear: **crap is inevitable**. Urgent product deadlines, limited perspective, lack of time to vet/validate approaches, "move fast and break things" cultures, uneven skills, partners with limited perspective, too many cooks, and more contribute to the creation of crap. While some of these reasons are unfortunate, many of the reasons are quite understandable. We all wish we could produce more perfect work, but the realities of time, money, and energy require us all to fall short of perfect. A deadline-strapped developer tasked with creating an accordion component for a specific product feature likely won't produce the most scalable, holistic, sturdy accordion the world has ever seen. While crap is an unavoidable part of product design and development, it has no place in a design system. **A design system is critical frontend infrastructure, therefore it needs to be sturdy, reliable, and dependable.** Design systems contain [boring](https://bigmedium.com/ideas/boring-design-systems.html), tried-and-true, vetted, high-quality solutions to common problems encountered at an organization. **When consuming teams encounter crap when working with the design system, trust is broken and the integrity of the system erodes**. Those experiences can very much impact the long-term success of the system. For those reasons, a design system needs to be protected from crap. So how should we handle crap? How to deal with crap
 
   * **Slow down** \- hahahaha kidding not kidding. It can be incredibly hard to slow an organization's breakneck product delivery pace, but many of the egregious reasons for crap production have a lot to do with trying to do too much too fast. We've encountered many organizations making new messes while hastily trying to clean up other messes. Many messes can be avoided by slowing down, but as we all know that's a lot easier said than done.
   * **Establish[a layered UI ecosystem](https://bigmedium.com/ideas/design-system-ecosystem.html)** \- A successful UI ecosystem is like a delicious layer cake, with the design system as the base, individual apps at the top, and a few potential (optional) layers in between. With a layered ecosystem in place, the design system isn't the arbiter of all UI so crap can live at another layer in the stack.
   * **Recognize the[design system and products move at their own pace](https://bigmedium.com/ideas/design-system-pace-layers-slow-fast.html)** \- The design system shouldn't rush work to meet breakneck product deadlines, and product shouldn't slow down to the design system's pace. Product and the design system layers each need to be able to work at their respective pace, and the design system needs to prioritize quality over speed. 
   * **[Create a recipes layer](https://bigmedium.com/ideas/the-art-of-design-system-recipes.html) in the ecosystem** \- A recipe layer allows product teams to create and manage their own patterns, which means that they can be in charge of their own crap. Teams can keep product-specific shortcuts or hacks within their own walls and manage it in a controlled manner.
   * **Formalize a[governance process](https://bradfrost.com/blog/post/a-design-system-governance-process/) and prioritize conversation and communication** \- Before any production happens, it's incredibly helpful for product and design system teams to talk. A little conversation can avoid days, weeks, or months of crap production. And because crap is inevitable, the teams can discuss how to create crap in a thoughtful, deliberate way that can then be rectified in the future. Short-term design & tech debt might be necessary, but the teams can put a long-term strategy in place to pay that debt down in the future. 
   * **Always use[branching](https://en.wikipedia.org/wiki/Branching_\(version_control\)) in your workflow** \- This is old hat for developers, but design teams are still getting up to speed with this relatively rigorous process. Branching and peer reviews are incredibly helpful at keeping half-baked/experimental crap at bay. 
 
Crap is inevitable, but implementing these tactics can help organizations manage it in a controlled and thoughtful way. At [Big Medium](https://bigmedium.com/), we help teams sturdy up their foundations: bolstering design and code quality, fixing crucial accessibility bugs, filling in missing unit tests, creating desperately-needed documentation, separating product-specific recipes out from the core design system, establishing sound token architecture, creating codemods, establishing collaborative governance models, improving cross-disciplinary collaboration, and many other [dirty jobs](https://en.wikipedia.org/wiki/Dirty_Jobs) that come with enterprise software design & development. In short, we're experts in helping teams take care of crap! If your team would welcome help address some crap, [get in touch](https://bigmedium.com/hire/)! 
