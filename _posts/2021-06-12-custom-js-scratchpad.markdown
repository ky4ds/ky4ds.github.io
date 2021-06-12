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

\\(Dim_A\\): <input type="text" id="dimA" name="dimA"/>
\\(Dim_B\\): <input type="text" id="dimB" name="dimB"/>

<button id="submit" onclick="update();">Submit</button>