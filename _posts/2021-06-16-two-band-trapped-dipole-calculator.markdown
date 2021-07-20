---
layout: post
title:  "Two Band Trapped Dipole Calculator"
date:   2021-06-16 08:33:00 -0400
categories: trap-dipole
---

<script src="https://polyfill.io/v3/polyfill.min.js?features=es6"></script>
<script id="MathJax-script" async src="/assets/js/npm/mathjax/es5/tex-mml-chtml.js"></script>
<script id="mathjs-script" async src="/assets/js/npm/mathjs/math.js"></script>
<script id="scratchpad" async src="/assets/js/custom/two-band-dipole-calc.js"></script>

This is a calculator to assist with designing a two band shortened trap
dipole. Prefilled values are for a 10/20m trapped dipole, with loading
removing 20% of antenna length.

Inner Frequency in MHz (trapped, higher frequency)

<input type="text" id="innerFrequency" name="innerFrequency"/>

Outer Frequency in MHz (untrapped, lower frequency)

<input type="text" id="outerFrequency" name="outerFrequency"/>

Normal dipole length in meters (determined by outer frequency):

<span id="dipoleLengthSpan"></span>

<input type="text" id="dipoleLength" name="dipoleLength" disabled="disabled" readonly hidden/>

Coil distance from feedpoint relative to normal length (determined by
inner frequency):

<span id="coilFeedpointDistanceSpan">\\(d_{fromfeedpt} = \\)</span>

<input type="text" id="coilFeedpointDistance" name="coilFeedpointDistance" hidden/>

Amount to shorten (decimal percentage):

<input type="text" id="shortenAmount" name="shortenAmount"/>

Shortened length of dipole:

<span id="shortenedLength">\\(l_{shortened} = \\)</span>

Length removed from shortened dipole:

<span id="lengthRemoved">\\(l_{removed} = \\)</span>

Wire diameter (in mm, see [awg chart][wikip_awg]):

<input type="text" id="wireDiameter" name="wireDiameter"/>

Electrical height from ground (in meters):

<input type="text" id="electricalHeight" name="electricalHeight"/>

<button id="calculate" onclick="calcDipoleLength();">Calculate</button>

Load reactance, <span id="loadReactanceSpan">\\(X_{load} = \\)</span>

<input type="text" id="loadReactance" name="loadReactance" disabled="disabled" readonly hidden/>

Load inductance, <span id="loadInductanceSpan">\\(L_{load} = \\)</span>

<input type="text" id="loadInductance" name="loadInductance" disabled="disabled" readonly hidden/>

Trap inductance, <span id="trapInductanceSpan">\\(L_{trap} = \\)</span>

<input type="text" id="trapInductance" name="trapInductance" disabled="disabled" readonly hidden/>

Trap capacitance, <span id="trapCapacitance">\\(C_{trap} = \\)</span>

Trap reactance, <span id="trapReactanceSpan">\\(X_{trap} = \\)</span>

<input type="text" id="trapInductance" name="trapInductance" disabled="disabled" readonly hidden/>

## Caveat

This is an experimental tool that has not been thorougly vetted. I have
not yet built an antenna using this tool, however these values are close
to alternative calculations I've done while designing and building my
first trap dipole (which was successful).

However, these calculations are just a starting point. I've noticed that
practical LC circuits vary a fair amount from theoretical values
calculated here. Traps need to be tuned, using an antenna analyzer, and
you can expect final inductance/loading to differ.

## Notes

When I built my trapped 17m/20m trapped dipole with \\(X-L = 200Ω\\),
the 20m section was much shorter than I expected. That means my
inductance, and therefore my inductive reactance, was too high and
should have been lower.

It turns out my reactance was too high because I overshot the coil
distance from feedpoint. I calculated

\\(17m/20m = 85\%\\)

However, the proper calculation would have been

\\( \frac {143} {18.118MHz} ÷ \frac {143} {14.055MHz} = 77.58\%\\)

**It is very important to compute the amount to shorten and coil
distance and as accurately as possible**, since these inputs can produce
wide swings in inductive reactance, \\(X_L\\), which will produce wide
swings in your antenna dimenions. Do not just go by band meters! For
this tool, that means entering precise frequencies to calculate accurate
values.

As explained by CT1EOJ, the electrical height is difficult to measure.
Electrical height and wire diameter are inputs to the antenna wire
characteristic impedance, \\(Z_0\\). My intuition is that the Nano VNA
can accurately measure \\(Z_0\\). This would allow for more accuracy
using this calculator. I will update this page if I find out how to do
that. Regardless, neither wire diameter, nor electrical height seem to
have much impact on the final coil inductance.

## Further information

* [Trap construction][construction]
* [Trap dipole design][design]
* [Loading coil calculation methods][calc_coils]

[calc_coils]: {% post_url 2021-06-11-calculate-loading-methods %}
[wikip_awg]: https://en.wikipedia.org/wiki/American_wire_gauge#Tables_of_AWG_wire_sizes
[66pacific]: https://www.66pacific.com/calculators/coil-shortened-dipole-antenna-calculator.aspx
[design]: {% post_url 2021-06-09-design-trapped-dipole %}
[construction]: {% post_url 2021-06-18-dipole-trap-construction %}
