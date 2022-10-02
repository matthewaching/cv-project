---
layout: ../../layouts/project.astro
title: Food Memories
link: https://foodmemories.mching.dev/
github: https://github.com/matthewaching/food-memories
client: Self
publishDate: 2020-03-02 00:00:00
img: ../../../assets/food-memories.png
description: |
  Culinary journal to record memorable dishes and experiences
tags:
  - react
  - javascript(es6)
  - next.js
  - materialui
  - postgresql
  - prisma
  - html5
  - css3
---

This is a culinary journal that serves to record any memorable dishes I have eaten or cooked. The journal currently only lists a few of the entries I have imported from my personal culinary Instagram but will eventually consist of entries added on a near-daily basis.
<br/>
<br/>
The project is a functional CRUD app consisting of a React frontend and Next.js backend. Next.js was selected due to its intuitive features, such as nested page routing, built-in API routes, and native SSG and SSR capabilities, lending a great deal of flexibility with regard to app infrastructure. Database modification is protected by NextAuth by which users can gain editing credentials via e-mail.
<br/>
<br/>
The app design is constructed primarily from Material UI, a React component library based off of Google's Material Design system. The library provides pre-stylized components with integrated functionality while maintaining design flexibility with the inline 'sx' CSS prop. The library was selected due to its popularity within modern-day web design, extensive documentation, and degree of customization across the board.
<br/>
<br/>
Information storage and persistence is accomplished through a PostgreSQL database hosted on Railway.app. Images are stored in a AWS S3 bucket. The server interacts with the database through Prisma, an ORM that interfaces serverside JavaScript to SQL. This integrates well with the built-in Next.js API endpoints, resulting in a very lightweight backend solution.
<br/>
<br/>
The app was intially developed using services provided by Google's Firebase (Hosting, Authentication, and Realtime Database) due to its advertised ease-of-use as a Backend-as-a-Service. However, I found that Firebase operated in a relatively proprietary manner and eventually transitioned off of it in favor of more conventional and instructional technologies such as PostgreSQL and Prisma.