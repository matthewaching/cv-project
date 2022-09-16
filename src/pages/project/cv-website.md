---
layout: ../../layouts/project.astro
title: CV Website
link: https://www.mching.dev/
github: https://github.com/matthewaching/cv-project
client: Self
publishDate: 2020-03-04 00:00:00
img: ../../../assets/cv-website.png
description: |
  Personal website and software portfolio
tags:
  - react
  - typescript
  - astro
  - tailwind
  - html5
  - css3
---

This is my personal web portfolio used to display my software projects.

This project was bootstrapped using Astro, a cutting-edge JavaScript framework that leverages Static Site Generation (SSG) to dramatically reduce bundle sizes. A defining characteristic of Astro is its ability to import components written for other frameworks (React, Angular, Svelte, etc) and run them on demand.

As a result, the project is able to import modules designed for React seemlessly (such as the typed introduction seen on the homepage) as well as enable a React developer such as myself to code within a comfortable environment.

Since the framework is designed around running its native .astro components, there was a slight learning curve when it comes to writing for Astro instead of React. However, the Astro syntax is quite intuitive with regard to native JSX and Typescript which significantly shortened the learning process.

Tailwind was selected as the UI solution for this project. As a CSS+ technology, it eases the process of writing baseline CSS or even SCSS while maintaining the flexibility and ownership of the design language versus a UI framework such as Material UI or Bootstrap.