---
layout: post
title:  "Loading Coil Calculator"
date:   2021-06-12 13:01:00 -0400
categories: jekyll update
---

<script src="https://polyfill.io/v3/polyfill.min.js?features=es6"></script>
<script id="MathJax-script" async src="/assets/js/npm/mathjax/es5/tex-mml-chtml.js"></script>
<script id="mathjs-script" async src="/assets/js/npm/mathjs/math.js"></script>
<script id="scratchpad" async src="/assets/js/custom/loading-coil-calc.js"></script>

WORK IN PROGRESS

This is a tool to calcuate inductive reanctance\\(X_L\\) for shortened
dipoles. This is one method that can be used to determine the inductance
needed to shorten an antenna by a specific amount. These loading coils
can be used for single-band dipoles and also for multiband trapped
dipoles, in the LC circuit that makes the traps.

This calculator uses the method described by Luiz Duarte Lopes, CT1EOJ,
which was published in the October 2003 edition of QST Magazine.

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

As explained by CT1EOJ, the electrical height is difficult to measure.
For a 17m trap functioning as a load on 20m, this method gave me a
inductive reactance, \\(X-L\\), of 378Ω (14 awg and electrical height of
20ft). After building my trapped dipole with \\(X-L = 200Ω\\), the 20m
section was less than half the length I expected it to be, which means
my inductance, and therefore my inductive reactance, was too high and
needed to be lowered.

In reality, my electrical height is not 20 feet, even though the antenna
is actually around 30 feet from the ground. Because it is indoors and
there is significant coupling to nearby conductors, my electrical height
must be some much lower number.

Electrical height and wire diameter are inputs to the antenna wire
impedance, \\(Z_0\\). My intuition is that the Nano VNA can take an
accurate measurement of the antenna wire's characteristic impedance.
This would allow for more accuracy using this calculator. I will
update this page if I find out how to do that.

## Further information

See [post on loading coil calculation methods][calc_coils]

[calc_coils]: {% post_url 2021-06-11-calculate-loading-methods %}
[wikip_awg]: https://en.wikipedia.org/wiki/American_wire_gauge#Tables_of_AWG_wire_sizes