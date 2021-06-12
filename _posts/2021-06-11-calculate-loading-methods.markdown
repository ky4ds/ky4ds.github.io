---
layout: post
title:  "Methods for Calculating Loading Coils"
date:   2021-06-11 23:05:00 -0400
categories: jekyll update
---

[TOC levels=2,4]: #

# Table of Contents
- [Method A: K1PLP's Lookup Chart](#method-a-k1plps-lookup-chart)
- [Method B: 66Pacific's Online Calculator](#method-b-66pacifics-online-calculator)
- [Method C: Calculate \\(X_L\\) from \\(Dim_A\\) and \\(Dim_B\\)](#method-c-calculate-x_l-from-dim_a-and-dim_b)

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

One word of caution: it seems that calculator can very highly sensitive
to the total length of antenna in feet. For the 20m dipole, if you
select 31 total feet, coils 13.9 feet from center, 14awg wire, and an
operating frequency of 14Mhz, you get $${9.7μH}$$. For the same values,
but with 32 total feet, the calculator shows $${4.5μH}$$. At 14MHz, this
would correspond to 850Ω for $${9.7μH}$$ and 395Ω!

IMO, these calculations are too sensitive and our design needs more
fault tolerance than this; the doorknob caps may only be rated for 20%
accuracy, and the homebrew coils can be a pain to wind to a precise
inductance.

Rather, I would recommend doing the math and looking up $$X_L$$ from the
ARRL chart. It may be challenging to wind inductors for the exact value
of your calculation and knowing the reactance will make it easier to see
whether your traps are close enough or not.

## Method C: Calculate \\(X_L\\) from \\(Dim_A\\) and \\(Dim_B\\)

Luiz Duarte Lopes, CT1EOJ , has published an article, [Designing a
Shortened Antenna][CT1EOJ] in the October 2003 edition of QST.

## Comparison for 17m-traps/20m-loads

[K1PLP]: https://dxc.wc2l.com/QST_Sep_1974_p28-34_58.pdf
[antenna_book_vol2]: https://amzn.to/2TYz4Xj
[antenna_book]: https://amzn.to/3wgernK
[coil-dipole-calculator]: https://www.66pacific.com/calculators/coil-shortened-dipole-antenna-calculator.aspx
[66pacific]: https://66pacific.com
[CT1EOJ]: http://p1k.arrl.org/pubs_archive/104832
