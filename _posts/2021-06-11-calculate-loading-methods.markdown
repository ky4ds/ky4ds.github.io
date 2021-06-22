---
layout: post
title:  "Methods for Calculating Loading Coils"
date:   2021-06-11 23:05:00 -0400
categories: jekyll update
---

<script src="https://polyfill.io/v3/polyfill.min.js?features=es6"></script>
<script id="MathJax-script" async src="/assets/js/npm/mathjax/es5/tex-mml-chtml.js"></script>

[TOC levels=2,4]: #

# Table of Contents
- [Method A: K1PLP's Lookup Chart](#method-a-k1plps-lookup-chart)
- [Method B: 66Pacific's Online Calculator](#method-b-66pacifics-online-calculator)
- [Method C: Calculate \\(X_L\\) from \\(Dim_A\\) and \\(Dim_B\\)](#method-c-calculate-x_l-from-dim_a-and-dim_b)
    - [Example 1: Loads for a full length 17m/20m trapped dipole](#example-1-loads-for-a-full-length-17m20m-trapped-dipole)
        - [WARNING](#warning)
- [Comparison](#comparison)

So far, I've seen three methods for calculating shortening coils for
dipoles. I've successfully used the first, K1PLP's lookup chart, for the
design of a homebrew 40/30/20/17m trapped dipole, measuring 50 feet. My
results were good, although I intend to build a version 2 of my antenna.
The 20m section is quite short, while both the 30m and 40m were longer
than I intended by about a meter or so.

I haven't technically tried Method C, however I get similar reactance
values (and subsequently similar inductance and capacitance values) from
both Method C and A.

## Method A: K1PLP's Lookup Chart

I simply used the loading coil chart from Chapter 9 of the [ARRL Antenna
Book, Vol 2][antenna_book_vol2] to calculate $$X_L$$. See figure 9.51.
Given $${Dim_A}$$ and $${Dim_B}$$, the chart will tell you $$X_L$$,
inductive reactance for the traps. This chart is also available in an
article from Jerry Hall, K1PLP, in QST magazine, September 1974].

I highly recommend ARRL's Antenna Book. Chapter 9 in particular has
several sections dedicated to dipoles and loading techniques. Here is a
link for the [full ARRL Antenna Book][antenna_book].

## Method B: 66Pacific's Online Calculator

The math to calculate inductance, given $${Dim_A}$$ and $${Dim_B}$$ is
quite involved (from QST magazine, September 1974):

$${L_{μH}} = \frac{10^6}{68π^2f^2}\left\{\frac {\left[{ln \frac {24 ({\frac{234} {f}} - B)}{D}} - 1 \right] [(1 - \frac {fB} {234})^2 - 1]}{ \dfrac {234} {f} - B} - \frac {\left[ln{\frac {24(\frac {A} {2} - B)} {D}} - 1\right]\left[(\frac {\frac {fA} {2} - fB}{234})^2 - 1\right]} {\frac {A} {2} - B} \right\}$$

Where:

* \\({L_{μH}}\\) = inductance required for resonance
* \\(f\\) = frequency, megahertz
* \\(A\\) = overall antenna length in feet
* \\(B\\) = distance from center to each loading coil
* \\(D\\) = diameter of radiator in inches

Fortunately, [66pacific.com][66pacific] has published a
[utility][coil-dipole-calculator] for this calculation.

## Method C: Calculate \\(X_L\\) from \\(Dim_A\\) and \\(Dim_B\\)

Luiz Duarte Lopes, CT1EOJ , has published an article, [Designing a
Shortened Antenna][CT1EOJ] in the October 2003 edition of QST.

### Example 1: Loads for a full length 17m/20m trapped dipole

For a resonant two-band dipole on 17m and 20m, the inner part of the
antenna will be 8.5m (halfwave on 17m). Traps will be placed at ends of
the 17m section and since we want at least 1 meter extending past the
traps for the 20m section, this means we want very little loading (none
if possible) and we would expect a low inductive reactance, \\(X_L\\),
and consequently a low inductance for our traps.

This is the basic equation which we will use to calculate the inductive
reactance required by the loading coils for our antenna:

$$X = -jZ_0cotβ$$

We need to calculate reactance at the point on the antenna where the
loading coil begins \\(X_1\\) and ends \\(X_2\\). Coil begin point,
\\(X_1\\), is closer to the end and coil end point, \\(X_2\\), is closer
to the center/feedpoint.

From \\(X_1\\) and \\(X_2\\), we can calculate \\(X_L\\):

$$X_L = X_2 - X_1$$

or

$$X_L = -jX_2 - (-jX_1)$$

Starting with our antenna dimensions for 20m:

* \\(Dim_A\\) = 98% (shorten antenna by 2% on 20m)
* \\(Dim_B\\) = 85% (because traps will be placed at edge of 17m, and
  17m/20m = 0.85)

We must calculate the distance from the end of the antenna to the
loading coil point, *in degrees*.

* \\(β_1 = 90° - 90°[Dim_B + (1 - Dim_A)]\\)
    * \\(β_1 = 90° - 90°[0.85 + (1 - 0.98)]\\)
    * \\(β_1 = 11.7°\\)
* \\(β_2 = β_1 + 90°[1 - Dim_A]\\)
    * \\(β_2 = 11.7° + 90°[1 - 0.98]\\)
    * \\(β_2 = 13.5°\\)

Next we must calculate the characteristic impedance of a one-wire
transmission line, \\(Z_0\\), based on wire diameter and height above
ground. Units for \\(h\\) and \\(d\\) can be whatever, as long as
they're the same for both.

* \\(Z_0 = 138log\frac {4h} d \\), where \\(h\\) = *electrical* height
  above ground and \\(d\\) = wire diameter
* \\(Z_0 = 138log\frac {4 * 20ft } d \\)
    * \\(Z_0 = 138log\frac {4 * 20ft } {14awg} \\)
    * \\(Z_0 = 138log\frac {4 * 6096mm } {1.62814mm} \\)
    * \\(Z_0 = 572Ω \\)

Now to calculate \\(X_1\\) and \\(X_2\\):

* \\(X_1 = -jZ_0cotβ_1\\)
    * \\(X_1 = -j572(cot11.7°)\\)
    * \\(X_1 = -j2763\\)
* \\(X_2 = -jZ_0cotβ_2\\)
    * \\(X_2 = -j572(cot13.5°)\\)
    * \\(X_2 = -j2385\\)
    
Finally, we can calculate the inductive reactance required by our
shortened antenna: ((\X_L\\).

* \\(X_L = -jX_2 - (-jX_1)\\)
    * \\(X_L = -j2385 - (-j2763)\\)
    * \\(X_L = 378Ω\\)

#### WARNING

This example gives us the wrong answer for a 17m/20m dipole, b/c it uses
the general band lengths as inputs to \\(X_L\\). Instead, we must select
resonant frequencies. For example, instead of 20m, we should select
14.055MHz. And instead of 17m, we should select 18.118MHz.

See [my calculator][two-band-calc] for an example. Calculating using
resonant frequencies, 18.118MHz and 14.055MHz gives an \\(X_L\\) of
166Ω.

## Comparison

It's helpful to see the inductive reactance, \\(X_L\\), from which you
then calculate inductance. \\(X_L\\) is frequency independent, while
\\(L\\), inductance, is frequency dependent. Both K1PLP's chart (method
1) and CT1EOJ's calculations (Method 2) provider inductive reactance,
while 66paficic's calculator, based on K1PLP's calculations, does not.

I have only attempted trap dipole design and construction using K1PLP's
lookup chart. I can also verify that Method 3 produces reactance values
similar to Method 1. 66pacific's calculator (Method 2) produces
reactance values that are a bit off from my calculations and it's
difficult to evaluate the math, since their calculator only provides
inductance and skips over reactance.

Method 3's main difficulty is with calculating \\(β_1\\) and \\(β_2\\)
since the geometry can be tricky to get right.

Method 1 is just a lookup chart, which seems accurate enough. But when
dealing with extreme inductances/capacitances (at the extremes of low or
high inductances), small errors can produce unacceptable deviations in
antenna dimensions.

[antenna_book_vol2]: https://amzn.to/2TYz4Xj
[antenna_book]: https://amzn.to/3wgernK
[coil-dipole-calculator]: https://www.66pacific.com/calculators/coil-shortened-dipole-antenna-calculator.aspx
[66pacific]: https://66pacific.com
[CT1EOJ]: http://p1k.arrl.org/pubs_archive/104832
[two-band-calc]: {% post_url 2021-06-16-two-band-trapped-dipole-calculator %}
