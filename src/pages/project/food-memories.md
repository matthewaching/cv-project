---
layout: ../../layouts/project.astro
title: Food Memories
client: Self
publishDate: 2020-03-02 00:00:00
img: https://images.unsplash.com/photo-1547234935-80c7145ec969?fit=crop&w=1400&h=700&q=75
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

This is a culinary journal that serves to record any memorable dishes I have eaten or cooked.

The project is a functional CRUD app consisting of a React frontend and Next.js backend that interfaces with a PostgreSQL database. Next.js was selected due to its intuitive features such as nested page routing, built-in API routes, and native SSG and SSR capabilities, lending a great deal of flexibility with regard to app infrastructure.

The app design is constructed primarily with Material UI, a React component library based off of Google's Material Design system. The library provides pre-stylized components with integrated functionality while maintaining design flexibility with the inline sx CSS prop.

The app stores and persists information in a PostgreSQL database hosted on Railway.app. The server interacts with the database through Prisma, an ORM that interfaces serverside TypeScript to SQL. The app can then utilize Next.js endpoints to send Prisma queries.
