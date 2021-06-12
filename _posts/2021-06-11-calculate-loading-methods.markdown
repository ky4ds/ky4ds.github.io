---
layout: post
title:  "Methods for Calculating Loading Coils"
date:   2021-06-11 23:05:00 -0400
categories: jekyll update
---

<script src="https://polyfill.io/v3/polyfill.min.js?features=es6"></script>
<script id="MathJax-script" async src="/assets/tex-mml-chtml.js"></script>

[TOC levels=2,4]: #

# Table of Contents
- [Method A: K1PLP's Lookup Chart](#method-a-k1plps-lookup-chart)
- [Method B: 66Pacific's Online Calculator](#method-b-66pacifics-online-calculator)
- [Method C: Calculate \\(X_L\\) from \\(Dim_A\\) and \\(Dim_B\\)](#method-c-calculate-x_l-from-dim_a-and-dim_b)
- [Comparison for 17m-traps/20m-loads](#comparison-for-17m-traps20m-loads)

So far, I've seen three methods for calculating shortening coils for
dipoles. I've successfully used the first, K1PLP's lookup chart, for the
design of a homebrew 40/30/20/17m trapped dipole, measuring 50 feet. My
results were good, although I intend to build a version 2 of my antenna.
The 20m section is quite short, while both the 30m and 40m were longer
than I intended by about a meter or so.

Tentatively, I recommend Method A, however I am researching Method C and
will update as I test results.

## Method A: K1PLP's Lookup Chart

I simply used the loading coil chart from Chapter 9 of the [ARRL Antenna
Book, Vol 2][antenna_book_vol2] to calculate $$X_L$$. See figure 9.51.
Given $${Dim_A}$$ and $${Dim_B}$$, the chart will tell you $$X_L$$,
inductive reactance for the traps. This chart is also available in an
article from Jerry Hall, K1PLP, in [QST magazine, September 1974][K1PLP]
(mentioned below).

I highly recommend ARRL's Antenna Book. Chapter 9 in particular has
several sections dedicated to dipoles and loading techniques. Here is a
link for the [full ARRL Antenna Book][antenna_book].

The main issue with this method, and the reason my antenna, once tuned,
was a bit off from my calculations, is because the lookup chart fails to
take both wire gauge and antenna height into consideration.

## Method B: 66Pacific's Online Calculator

The math to calculate inductance, given $${Dim_A}$$ and $${Dim_B}$$ is
quite involved (from [QST magazine, September 1974][K1PLP]):

$${L_{μH}} = \frac{10^6}{68π^2f^2}\left\{\frac {\left[{ln \frac {24 ({\frac{234} {f}} - B)}{D}} - 1 \right] [(1 - \frac {fB} {234})^2 - 1]}{ \dfrac {234} {f} - B} - \frac {\left[ln{\frac {24(\frac {A} {2} - B)} {D}} - 1\right]\left[(\frac {\frac {fA} {2} - fB}{234})^2 - 1\right]} {\frac {A} {2} - B} \right\}$$

Where:

* \\({L_{μH}}\\) = inductance required for resonance
* \\(f\\) = frequency, megahertz
* \\(A\\) = overall antenna length in feet
* \\(B\\) = distance from center to each loading coil
* \\(D\\) = diameter of radiator in inches

Fortunately, [66pacific.com][66pacific] has published a
[utility][coil-dipole-calculator] for this calculation.

<!--One word of caution: it seems that calculator can very highly sensitive-->
<!--to the total length of antenna in feet. For the 20m dipole, if you-->
<!--select 31 total feet, coils 13.9 feet from center, 14awg wire, and an-->
<!--operating frequency of 14Mhz, you get $${9.7μH}$$. For the same values,-->
<!--but with 32 total feet, the calculator shows $${4.5μH}$$. At 14MHz, this-->
<!--would correspond to 850Ω for $${9.7μH}$$ and 395Ω!-->

<!--IMO, these calculations are too sensitive and our design needs more-->
<!--fault tolerance than this; the doorknob caps may only be rated for 20%-->
<!--accuracy, and the homebrew coils can be a pain to wind to a precise-->
<!--inductance.-->

<!--Rather, I would recommend doing the math and looking up $$X_L$$ from the-->
<!--ARRL chart. It may be challenging to wind inductors for the exact value-->
<!--of your calculation and knowing the reactance will make it easier to see-->
<!--whether your traps are close enough or not.-->

## Method C: Calculate \\(X_L\\) from \\(Dim_A\\) and \\(Dim_B\\)

Luiz Duarte Lopes, CT1EOJ , has published an article, [Designing a
Shortened Antenna][CT1EOJ] in the October 2003 edition of QST.

### Example 1: Loads for a 17m/20m trapped dipole

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
    * \\(β_1 = 90° - 90°(0.87)\\)
    * \\(β_1 = 90° - 78.3°\\)
    * \\(β_1 = 11.7°\\)
* \\(β_2 = β_1 + 90°[1 - Dim_A]\\)
    * \\(β_2 = 11.7° + 90°[1 - 0.98]\\)
    * \\(β_2 = 11.7° + 90°[0.02]\\)
    * \\(β_2 = 11.7° + 1.8°\\)
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
    * \\(Z_0 = 138log13977 \\)
    * \\(Z_0 = 572Ω \\)

Now to calculate \\(X_1\\) and \\(X_2\\):

* \\(X_1 = -jZ_0cotβ_1\\)
    * \\(X_1 = -j572(cot11.7°)\\)
    * \\(X_1 = -j572(4.83)\\)
    * \\(X_1 = -j2763\\)
* \\(X_2 = -jZ_0cotβ_2\\)
    * \\(X_2 = -j572(cot13.5°)\\)
    * \\(X_2 = -j572(4.17)\\)
    * \\(X_2 = -j2385\\)
    
Finally, we can calculate the inductive reactance required by our
shortened antenna: ((\X_L\\).

* \\(X_L = -jX_2 - (-jX_1)\\)
    * \\(X_L = -j2385 - (-j2763)\\)
    * \\(X_L = j378Ω\\)

TODO: check math

TODO: ask ARRL for permission to repost "Designing a Shortened Antenna"
by Luiz Duarte Lopes, CT1EOJ, QST Oct 2003.

## Comparison

TBA

[K1PLP]: https://dxc.wc2l.com/QST_Sep_1974_p28-34_58.pdf
[antenna_book_vol2]: https://amzn.to/2TYz4Xj
[antenna_book]: https://amzn.to/3wgernK
[coil-dipole-calculator]: https://www.66pacific.com/calculators/coil-shortened-dipole-antenna-calculator.aspx
[66pacific]: https://66pacific.com
[CT1EOJ]: http://p1k.arrl.org/pubs_archive/104832
