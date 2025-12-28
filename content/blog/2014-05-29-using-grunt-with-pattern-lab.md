---
title: Using Grunt with Pattern Lab
date: '2014-05-29'
tags:
- atomic design
- development
- grunt
- pattern lab
- workflow
post_id: 7896
original_link: https://bradfrost.com/blog/post/using-grunt-with-pattern-lab/
custom_meta:
  hide-ads: Show
---

[Grunt](http://gruntjs.com/) is a powerful Javascript task runner that can make your web design workflow much more efficient by automating a slew of tedious tasks. [Pattern Lab](http://patternlab.io/) is a tool created by [Dave Olsen](http://dmolsen.com/) and myself to help you efficiently create robust interface design systems. I'm super happy with how Pattern Lab and Grunt work together to make my design and development process so efficient. Step 1: Set Up Pattern Lab The first thing you'll need to do is [install Pattern Lab](http://patternlab.io/docs/installation.html) and [run it for the first time](http://patternlab.io/docs/first-run.html). When you get Pattern Lab up and running, your directories should look like this: ![Pattern Lab directory structure](http://bradfrost.com/wp-content/uploads/2014/05/pl.png) Pattern Lab is essentially a static-site generator with a PHP engine that compiles files from the `/source` directory to the `/public` directory to create the [Pattern Lab interface](http://demo.patternlab.io/). You can [use different commands](http://patternlab.io/docs/command-line.html) to fine tune what you want Pattern Lab to compile over to `/public`. More on this in a bit. Step 2: Set up Grunt If you've never used Grunt before, I highly recommend checking out [this wonderful article](http://24ways.org/2013/grunt-is-not-weird-and-hard/) by [Chris Coyier](https://twitter.com/chriscoyier) to get you started. You'll want to set up Grunt at the root of your Pattern Lab project. Once you do that, your directory structure should look something like this: ![Pattern Lab and Grunt directory structure](http://bradfrost.com/wp-content/uploads/2014/05/grunt.png) Step 3: Configure Grunt to run Pattern Lab Once Grunt is installed in the right place, you'll want to crack open the file called [`Gruntfile.js`](http://gruntjs.com/getting-started#the-gruntfile). This file is where you define all the tasks you want Grunt to take care of. We want to tell Grunt to compile Pattern Lab when certain types of files are changed. Here's what that looks like: 
     
     
     
     module.exports = function(grunt) {
     
       // Configuration 
       grunt.initConfig({
         pkg: grunt.file.readJSON('package.json'),
           shell: {
             patternlab: {
               command: "php core/builder.php -gp"
           }
         },
         watch: {
           html: {
             files: ['source/_patterns/**/*.mustache', 'source/**/*.json'],
             tasks: ['shell:patternlab'],
             options: {
               spawn: false
             }
           }
         }
       });
     
       // Plugins
       grunt.loadNpmTasks('grunt-contrib-watch');
       grunt.loadNpmTasks('grunt-shell');
     
       // Tasks
       grunt.registerTask('default', ['watch', 'shell:patternlab']);
     };
     
     
 
 You can also [view this code on Github](https://gist.github.com/bradfrost/9856884) There's a few things going on here. First, is that we're including a couple Grunt plugins. One is [grunt-watch](https://github.com/gruntjs/grunt-contrib-watch), which watches for changes to files. The second plugin is [grunt-shell](https://github.com/sindresorhus/grunt-shell), which can run any command from within Grunt. What the `watch` section of the Gruntfile is saying is "Okay, whenever any changes are made to a `.mustache` or `.json` file in the `/source` directory, compile Pattern Lab with this command: `php core/builder.php -gp`. This command [only generates the patterns](http://patternlab.io/docs/command-line.html), not CSS, JS, images, or anything else. We'll set up separate Grunt tasks to compile Sass files, concatenate and minify JS, optimize images, etc. Step 4: Run Grunt Once everything's set up, in the command line you can now navigate to your project folder and type `grunt`. This will run the tasks in Grunt and start watching for changes. Whenever a change is made to a `.mustache` or `.json` file, grunt will generate Pattern Lab. ![Grunt command line compiling Pattern Lab](http://bradfrost.com/wp-content/uploads/2014/05/cli-animated.gif) Happy Grunting and Pattern Labbing! I've been developing production-ready front end code with Pattern Lab for a year and a half, and can't imagine designing and developing without it. I now include Grunt as a can't-live-without development tool, and I'm super happy how well it works together with Pattern Lab. This workflow has definitely made me a lot more efficient as a developer, and hope you might find it useful as well. Enjoy!
  *[DETAILS]: Device, Environment, Time, Activity, Individual, Location, Social
  *[RESS]: Responsive Design with Server-Side Components