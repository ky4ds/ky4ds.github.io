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

<input type="text" id="frequency" name="frequency"/>

Normal dipole length (meters):

<input type="text" id="dipoleLength" name="dipoleLength" disabled="disabled" readonly/>

Coil distance from feedpoint relative to normal length (decimal
percentage - 0.50 to place loads at pre-shortened halfway point):

<input type="text" id="coilFeedpointDistance" name="coilFeedpointDistance"/>

Amount to shorten (decimal percentage):

<input type="text" id="shortenAmount" name="shortenAmount"/>

Wire diameter (in mm, see [awg chart][wikip_awg]):

<input type="text" id="wireDiameter" name="wireDiameter"/>

Electrical height from ground (in meters):

<input type="text" id="electricalHeight" name="electricalHeight"/>

<button id="calculate" onclick="calcDipoleLength();">Calculate</button>

Load reactance, \\(X_L\\):

<input type="text" id="reactanceLoad" name="reactanceLoad" disabled="disabled" readonly/>

Coil inductance, \\(L_{coil}\\):

<input type="text" id="coilInductance" name="coilInductance" disabled="disabled" readonly/>

## Notes

As explained by CT1EOJ, the electrical height is difficult to measure.
For a 17m trap functioning as a load on 20m, this method gave me a
inductive reactance, \\(X-L\\), of 63Ω (14 awg and electrical height of
20ft). After building this calculator and trying different electrical
heights, the coil inductance doesn't seem to be too sensitive, even with
wild swings in electrical height.

When I built my trapped 17m/20m trapped dipole with \\(X-L = 200Ω\\),
the 20m section was less than half the length I expected it to be. That
means my inductance, and therefore my inductive reactance, was too high
and should have been lower.

Turns out my reactance was too high because I overshot the coil distance
from feedpoint. I calculated

\\(17m/20m = 85\%\\)

However, the proper calculation would have been

\\( \frac {143} {18.118MHz} ÷ \frac {143} {14.055MHz} = 77.58\%\\)

The takeaway is that it is very important to compute the amount to
shorten and coil distance and as accurately as possible, since these
inputs produce wide swings in inductive reactance, \\(X-L\\). Do not
just use the band meters! Instead, calculate precise lengths from
precise frequencies.

Electrical height and wire diameter are inputs to the antenna wire
impedance, \\(Z_0\\). My intuition is that the Nano VNA can take an
accurate measurement of the antenna wire's characteristic impedance.
This would allow for more accuracy using this calculator. I will update
this page if I find out how to do that. However, neither wire diameter,
nor electrical height seem to have too much impact on the final coil
inductance.

## TODO

On an upcoming blog post, I will expand this calculator to compute trap
inductance and capacitance for a two band trapped dipole.

## Further information

See [post on loading coil calculation methods][calc_coils]

[calc_coils]: {% post_url 2021-06-11-calculate-loading-methods %}
[wikip_awg]: https://en.wikipedia.org/wiki/American_wire_gauge#Tables_of_AWG_wire_sizes
[66pacific]: https://www.66pacific.com/calculators/coil-shortened-dipole-antenna-calculator.aspx
