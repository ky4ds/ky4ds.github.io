---
layout: post
title:  "Dipole trap construction"
date:   2021-06-18 21:49:40 -0400
categories: trap-dipole
---

<script src="https://polyfill.io/v3/polyfill.min.js?features=es6"></script>
<script id="MathJax-script" async src="/assets/js/npm/mathjax/es5/tex-mml-chtml.js"></script>

I construct loading coils by winding RF David Flexweave insulated
antenna wire around PVC couplers. Magnet wire is cheaper and can be
wound into tight coils for higher inductance, but flex weave requires
far less strength and the result is a neater coil. The coils are wound
with 14awg.

Speaker wire is a cheaper option for winding coils and should be about
as easy to work with as flex weave.

First see my post on [designing a trapped
dipole][designing-trapped-dipole] for context.

## Materials required

* PVC Couplers
* Insulated wire
* High voltage capacitor
* Ring terminals + crimper
* [Mechanical copper lugs][copper-lug]
* Nano VNA
* LCR Meter
    * nice to measure inductance during construction, but not necessary

## How I build traps

I'll demonstrate my process for constructing parallel LC circuits, to be
used as dipole traps.

### Calculate initial coil dimensions

66pacific.com has a nice [online tool][66pacific-calculator] which
performs this calculation. Unless I'm lucky, this will only give me a
starting point for your coil. Since I use fixed-value capacitors, I need
to adjust the inductance higher or lower in order to make our trap
resonant on the higher frequency band.

### Build air-coil with pvc coupler

First, I drill a series of holes in the PVC coupler, which allows for
easy adjustment of inductance.

![drilled-coupler.jpg](/assets/images/drilled-coupler.jpg)

Then, I wind the inductor and add 2-3 more turns of wire than you've
estimated. Later we must "tune" the inductor and it is easier to remove
wire than to add it.

![wound-coil.jpg](/assets/images/wound-coil.jpg)

Next, I attach lead wires to the capacitor, using ring terminals.

![capacitor-leads.jpg](/assets/images/capacitor-leads.jpg)

I then clip the leads of the inductor and capacitor in parallel and
connect to the Nano VNA and observe trap resonance (see notes below on
measuring trap resonance with a Nano VNA).

![lc-clipped.jpg](/assets/images/lc-clipped.jpg)

Now, I "tune" the inductor for trap resonance. The relationship between
resonant frequency and inductance is inverse:

$$ f_{resonance} = \frac 1 {2π\sqrt LC}$$

So if resonance is low, inductance is too high and our coil must be
shortened and if resonance is too high, inductance is too low and our
wire must be lengthend.

![lc-resonance.jpg](/assets/images/lc-resonance-1.jpg)

For this trap, I want resonance close to 18.118MHz. 18.960MHz might be a
bit too high (see notes from W8IJ below), which means I must now cut a
new, longer piece of wire and start over.

Instead, I'll press the windings closer together to literally squeeze a
bit more inductance out of this coil :)

![lc-resonance-2.jpg](/assets/images/lc-resonance-2.jpg)

18.400MHz might not seem close enough, but according to [W8IJ], dipole
traps do not need perfectly resonant. In fact, it's preferable that
their resonance be a bit off, since losses are higher with traps that
are perfectly resonant. In fact, it's possible that the 18.960MHz
resonance will work just as well.

This is good news for me, since perfectly resonant traps would require
perfectly wound coils, which I don't find practical.

Finally crimp leads onto the inductor and capacitor leads and screw them
together with the copper lugs.

![finished-trap.jpg](/assets/images/finished-trap.jpg)

## Resonance measurements

I know of two methods, using a Nano VNA, to measure trap resonance.

### Channel 1 signal loss

Shown above, I connect the trap to the center-pins of Channel 0 and
Channel 1 on my Nano VNA. I'm interested in the `CH1 LOGMAG` graph.
Since traps inhibit frequency at resonance, I am looking for a sharp
drop in signal strength. That's exactly what I find: -39dB of signal
strength loss at 18.400MHz.

This method requires a two port VNA.

### VNA as a "grid-dip" meter

With a single port analyzer, I can run a loop from the center pin
conductor to ground, without making any other electrical connections,
and observe `CH0 SWR`.

![grid-dip-1.jpg](/assets/images/grid-dip-1.jpg)

![grid-dip-2.jpg](/assets/images/grid-dip-2.jpg)

Example from a separate trap.

![grid-dip-3.jpg](/assets/images/grid-dip-3.jpg)

I can't explain why this works, but I can validate that the SWR dips at
trap resonance. You might have to wiggle the loop to see the SWR dip,
but it'll work.

[66pacific-calculator]: https://66pacific.com/calculators/coil-inductance-calculator.aspx
[copper-lug]: https://www.homedepot.com/p/Southwire-14-SOL-STR-8-STR-Mechanical-Terminal-Lug-2-Pack-65180040/312648371
[W8IJ]: https://www.w8ji.com/traps.htm
