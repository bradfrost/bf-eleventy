---
title: Magento Static Blocks - The Definitive Guide
date: '2009-11-17'
tags:
- cms
- ecommerce
- magento
post_id: 177
original_link: https://bradfrost.com/blog/post/magento-static-blocks/
---

[caption id="attachment_267" align="alignnone" width="485" caption="Magento Static Block"]![Magento Static Block in Action](https://bradfrost.com/wp-content/uploads/2009/11/picture-4.png)[/caption] 

There's more than one way to skin a hippo and adding CMS static blocks in Magento is no exception.

In case you're unfamiliar with CMS static blocks, they are powerful little buggers in Magento's admin that allows the site's administrator to add and control chunks of HTML that can be displayed throughout the site. They're perfect for seasonal banners, sale blocks, return policies, size charts and anything that would make sense to modularize to make maintaining your site easier.

_But wait, aren't there already 'callouts' in Magento?_ Well, if you're talking about those annoying graphics of the dog and chalkboard that take editing multiple files to update then _yes_. Magento's built-in callouts are a terrible way of handling regularly updated content.

Your Magento website should be as updatable as possible to keep you from getting phone calls every time a client wants to advertise a new sale. Which is exactly why **we want to control these blocks from the admin**. Keep in mind [Magento's upcoming release of 1.4 will be implementing a WYSIWIG editor](http://www.magentocommerce.com/download/release_notes#Release%20Notes%20-%20Magento%201.4.0.0-alpha2%20%28September%2025,%202009%29 "Magento 1.4 supports WYSIWIG editor in admin") so clients can handle their own changes instead of pestering you.

### Creating a Static Block

  1. Log into your Magento store's admin
  2. Navigate to **CMS>Static Blocks**
  3. Click **Add New Block** in the top right corner
  4. Give your block a recognizable Block Title such as **Social Media Links** or "Fall Sale Banner"
  5. Give your block an **Identifier** which will be used to call the block. Make sure the Identifier is all lowercase and separated by underscores to follow Magento's nomenclature i.e. your_block_id
  6. Choose what store view the block belongs to. Just leave as **All Store Views** unless you have a good reason not to
  7. Set Status to **Enabled**
  8. Enter your HTML in the **Content** field. The editor is currently a raw HTML editor, but 1.4 will support a WYSIWIG editor. Alternately, there is a [Magento WYSIWIG extention](http://www.magentocommerce.com/extension/586/fontis-wysiwyg-editor) to help out.
  9. Click **Save Block** or **Save and Continue Edit** to save your settings.

You've set up your block, so how do you plug it into your site? Well it depends on how you need it to function, but you have several options at your disposal:

### 1\. XML

Adding a static block to a page template is a great way to control global elements of your site, such as footer links, custom callouts in the sidebar (ultimately replacing that damn dog) and more. You can embed this code in **_app > design > frontend > default > your_theme > layout._** Open the appropriate the file, lets say **catalog.xml** and plunk the following code in the __block for our category view:
    
    
    
          your_block_id
    
    
    

This code will place the block "your_block_id" that you have created in the admin above the content on the category pages (notice the _before="-"_ attribute, which makes sure your block gets displayed before the rest of the content). This is perfect for a seasonal banner that could advertise a current sale on all product listings.

Controlling static blocks with XML is geared for content that will remain in a consistent position in your theme.

Sometimes however you gotta get down and dirty and place your CMS static block inline in your template. That's where the next method comes in.

### 2\. PHP

Adding your static block inline with PHP is the quickest way to get your block in your template. Let's say you want to add a quick blurb about your return policy right after the "Add to Cart" button. The client needs to be able to occassionaly update this blurb from time to keep it current. So you open your template file that contains the "Add to Cart" button **_app > design > frontend > default > your_theme > template > catalog > product > view > addtocart.phtml._** Find the __tag and right afterwards add the following code:`[cc lang="php" tab_size="2" lines="40"] getLayout()->createBlock('cms/block')->setBlockId('your_block_id')->toHtml(); ?> [/cc] ` This code will add the block _"your_block_id"_ right after the button. Jobs done. This method is perfect for getting into those nooks and crannies in Magento's vast and awkward file structure. 

### 3\. Shortcode

This method is used when you need to pull in a static block while in Magento's admin creating CMS pages or other static blocks. A possible example would be injecting contact information into multiple CMS pages. So you create a contact static block, and then can insert the contact info on the contact us page, your privacy policy page, customer service page, etc. If the contact info changes, you simply update the static block and the changes will be reflected across all your CMS pages. {% raw %}`{{block type="cms/block" block_id="your_block_id"}}`{% endraw %} This code will place the block "your_block_id" inline in your CMS page. 

### Conclusion

The whole idea of creating these static blocks is to streamline the amount of time it takes to update your site. Clients won't have to bother you to change their 800 number. Your design team or site administer can simply FTP a new image and update the image path. Or if you own the site, you don't have to go dumpster diving through your template files to find where you put that couple paragraphs of content. Do you have a preferred method of adding a static blocks or creative uses of static blocks in your Magento site? Let me know in the comments.