---
layout: post
title:  "Loading Coil Calculator"
date:   2021-06-12 13:01:00 -0400
categories: jekyll update
---

<script src="https://polyfill.io/v3/polyfill.min.js?features=es6"></script>
<script id="MathJax-script" async src="/assets/js/npm/mathjax/es5/tex-mml-chtml.js"></script>
<script id="mathjs-script" async src="/assets/js/npm/mathjs/browsermath.js"></script>
<script id="scratchpad" async src="/assets/js/custom/loading-coil-calc.js"></script>

WORK IN PROGRESS

This is a tool to calcuate inductive reanctance\\(X_L\\) for shortened
dipoles. This is one method that can be used to determine the inductance
needed to shorten an antenna by a specific amount. These loading coils
can be used for single-band dipoles and also for multiband trapped
dipoles, in the LC circuit that makes the traps.

Frequency (MHz)

<input type="text" id="frequency" name="frequency" placeholder="14.055" onchange="calcDipoleLength()"/>

Normal dipole length (meters):

<input type="text" id="dipoleLength" name="dipoleLength" readonly/>

Coil distance from feedpoint (meters):

<input type="text" id="coilFeedpointDistance" name="coilFeedpointDistance" placeholder=""/>

Amount to shorten (meters):

<input type="text" id="shortenMeters" name="shortenMeters"/>

Wire diameter (in mm, see [awg chart][wikip_awg]):

<input type="text" id="wireDiameter" name="wireDiameter"/>

Electrical height from ground (in meters):

<input type="text" id="electricalHeight" name="electricalHeight"/>

<button id="submit" onclick="update();">Submit</button>

## Limitations

See [post on loading coil calculation methods][calc_coils]

[calc_coils]: {% post_url 2021-06-11-calculate-loading-methods %}
[wikip_awg]: https://en.wikipedia.org/wiki/American_wire_gauge#Tables_of_AWG_wire_sizes