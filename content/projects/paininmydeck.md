---
title: Pain in my Deck!
link_url: https://paininmydeck.com/
link_text: paininmydeck.com
description: Pain in my Deck is a mobile-first Cards Against Humanity clone built from scratch with Vue.JS and Firebase over quarantine. The goal was to create a digital party game that could be enjoyed by all without requiring any app downloads or special hardware. Pain in my Deck is in development.
tags:
- text: firebase
  color: hsla(18, 71%, 60%, 21%)
- text: vue.js
  color: hsla(101, 90%, 37%, 18%)
published: true
slug: paininmydeck
blog_published: false
display_order: 1
hero_img: ./images/paininmydeck-hero.png
---
<p>Pain in my Deck is a mobile-first Cards Against Humanity clone built with Vue.JS and Firebase. Most existing clones are designed exclusively for desktop, shortchanging the large cohort of web users that rely primarily on mobile devices. The goal was to create a digital party game that could be enjoyed by everyone without requring any special devices or app downloads.</p>

<p>Pain in my Deck was an idea I had in high school, when my friends and I used to spend nights exploring and using the existing clones. When March of 2020 rolled around and I (along with everyone else) found myself locked inside my house, I decided to spend my time working on this project.</p>

<img src="http://via.placeholder.com/185x396" />&nbsp;
<img src="http://via.placeholder.com/185x396" />&nbsp;
<img src="http://via.placeholder.com/185x396" />

<p>On a technical side, Pain in my Deck is essentially one big game of state management. Each player alters the game state when they play or are dealt a card, which needs to be synced amongst all other players. On my first attempt at making this (years before 2020, just a non-functional proof of concept) I settled on using Socket.IO to send messages between each player and the game server. In the years following that initial POC, I learned more about the concept of serverless architecture and the value of not needing to maintain & scale my own cloud sever. I'd had some previous experience with Firebase in various small projects I'd toyed with, and realized that Firebase's document-based Cloud Firestore database would easily be able to handle the needs of Pain in my Deck. Firestore has built-in "document listeners" which open up a socket between the client and database in the background, allowing updates to be immediately passed to all users that are listening. This simplified the syncing of data by a whole lot.</p>