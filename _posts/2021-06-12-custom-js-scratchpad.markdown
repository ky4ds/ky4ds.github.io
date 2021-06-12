---
layout: post
title:  "Custom Javascript Scratchpad"
date:   2021-06-12 10:33:00 -0400
categories: jekyll update
---

This page is for developing custom js.

<script src="https://polyfill.io/v3/polyfill.min.js?features=es6"></script>
<script id="MathJax-script" async src="/assets/js/node_modules/mathjax/es5/tex-mml-chtml.js"></script>
<script id="scratchpad" async src="/assets/js/custom/scratchpad.js"></script>

Calculate inductive reanctance\\(X_L\\)

Frequency:

<input type="text" id="frequency" name="frequency" placeholder="14.055"/>

Coil distance from feedpoint (meters):

<input type="text" id="coilFeedpointDistance" name="coilFeedpointDistance" placeholder=""/>

Amount to shorten (meters):

<input type="text" id="shortenFeet" name="shortenFeet"/>

Wire diameter:

<input type="text" id="wireDiameter" name="wireDiameter"/>

Electrical height from ground:

<input type="text" id="electricalHeight" name="electricalHeight"/>

<button id="submit" onclick="update();">Submit</button>