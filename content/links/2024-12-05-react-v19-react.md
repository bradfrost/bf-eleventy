---
title: React v19 – React
date: '2024-12-05'
tags:
- design systems
- react
- web components
- web development
categories:
- link
post_id: 21652
original_link: https://bradfrost.com/blog/link/react-v19-react/
---

[React v19](https://react.dev/blog/2024/12/05/react-19#support-for-custom-elements) was just released with support for Web Components! 

> React 19 adds full support for custom elements and passes all tests on [Custom Elements Everywhere](https://custom-elements-everywhere.com/). In past versions, using Custom Elements in React has been difficult because React treated unrecognized props as attributes rather than properties. In React 19, we’ve added support for properties that works on the client and during SSR with the following strategy:

  * **Server Side Rendering** : props passed to a custom element will render as attributes if their type is a primitive value like `string`, `number`, or the value is `true`. Props with non-primitive types like `object`, `symbol`, `function`, or value `false` will be omitted.
  * **Client Side Rendering** : props that match a property on the Custom Element instance will be assigned as properties, otherwise they will be assigned as attributes.

Thanks to [Joey Arhar](https://github.com/josepharhar) for driving the design and implementation of Custom Element support in React.
 
 This is a very welcome step in the right direction. We've long had to create and manage React wrappers for our clients' Web Component-based design systems. Great stuff!
