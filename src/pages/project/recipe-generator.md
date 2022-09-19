---
layout: ../../layouts/project.astro
title: Recipe Generator
link: https://recipegenerator.mching.dev/
github: https://github.com/matthewaching/recipe-generator
client: Self
publishDate: 2020-03-02 00:00:00
img: ../../../assets/recipe-generator.png
description: |
  Random recipe generator with built-in filters and query modifiers
tags:
  - react
  - javascript(es6)
  - next.js
  - materialui
  - html5
  - css3
---

This is a food app the generates recipes based on user-inputted filters. The recipe is displayed on a card container that lists ingredients, recipe steps, and a link to the original third-party website. Presently, the user is only able to enter keyword and ingredient queries but will later be able to filter based on dietary restrictions, nutrition, and cuisine-type.
<br/>
<br/>
The app pulls from a free-use API provided by [Spoonacular.com](https://spoonacular.com/). A "complex search" API endpoint serves as the primary method of recipe generation, allowing for different recipe filters to be applied by modifying the HTTP link. The resulting JSON can then be parsed for pertinent information to be displayed.
<br/>
<br/>
The stack used in this app consists of React, Next.js, and Material UI. Given that the app functions off a third-party API, no backend functionality is ended, resulting in a more lightweight, responsive experience.