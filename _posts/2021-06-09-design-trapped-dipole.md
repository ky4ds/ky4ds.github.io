---
layout: post
title:  "Design a Trapped Dipole for Length"
date:   2021-06-09 00:40:00 -0400
categories: trap-dipole
---

<script src="https://polyfill.io/v3/polyfill.min.js?features=es6"></script>
<script id="MathJax-script" async src="/assets/js/npm/mathjax/es5/tex-mml-chtml.js"></script>

[TOC levels=2,4]: #

# Table of Contents
- [Trap dipole basics](#trap-dipole-basics)
- [Design overview](#design-overview)
    - [Do the math](#do-the-math)
    - [Determine inductive reactance](#determine-inductive-reactance)
    - [Another example: 10m/20m trapped and loaded dipole](#another-example-10m20m-trapped-and-loaded-dipole)
    - [Repeat for additional bands](#repeat-for-additional-bands)
- [Calculator tool](#calculator-tool)
- [Trap construction](#trap-construction)
- [Assembly and tuning](#assembly-and-tuning)

I have 50 feet of room for an antenna at my QTH. I've tried endfed
halfwaves, random wires and fan dipoles and for various reasons, none of
these antennas will work for my operating situation.

My bands of interest are 40/30/20 and 17m. There aren't too many
multiband antenna designs or offerings for 40m and 20m, and include WARC
bands. Being a relatively new CW operator, 30m is great to have when 20
and 40 are swamped with high-speed contesting traffic.

I've recently obtained my Extra license and while studying for the test,
realized that I had absorbed enough math to design a multiband trap
dipole for my length requirements.

## Trap dipole basics

Parallel LC traps (circuits including an inductor and capacitor in
series) can be used to build dipoles resonant on multiple bands. The
bands do not have to be harmonically related, nor is a tuner required.

Suppose you wanted to build a two band dipole, for 20m and 40m. You'd
start with a basic dipole for 20m, install traps at both ends of the
dipole, then extend the dipole with more wire until resonant on 40m. The
20m section (the inner section) of the dipole will stay resonant because
the traps will contain RF within the 20m segment, when your frequency is
on the 20m band. This happens because the LC circuit is resonant on the
20m band and this trap resonance blocks the passage of RF on 20m.

On any other band, the LC circuit will not function as traps and the RF
will pass through. Instead of functioning as a trap for 40m (the outer
section), the LC circuit will function as an inductor, causing the
antenna to physically shorten. This means that the total length for the
dipole will be less than a dipole resonant for just 40m.

How much less is dependent on how much inductance: more inductance will
shorten the antenna more; less inductance will shorten the antenna less.

You can construct traps from a range of inductance. There is no single
fixed value of inductance which is required to resonate the trap on the
band of interest. What matters is the ratio of inductance to
capacitance. If your trap contains more inductance, it must contain less
capacitance. For less inductance, you must increase capacitance.

So, if we wanted to create a trapped dipole with a specific amount of
shortening, our inductance will be determined for us. We can then use
some basic formulas to calculate the capacitance necessary for our trap.

## Design overview

### Do the math

To design a two-band trapped dipole, with loading on the lower band:

1. **Pick the highest band and next lowest band.**
    * For my project, this was 17m and 20m.
3. **Determine how much loading (shortening) is required for the lower
   band.**
    * Since my antenna was to be a full length on 17m, which is 85% the
      length of 20m, I wanted as little shortening as possible (I will
      discuss determining inductive reactance later):
      
        $$X_L = 250??$$
        
4. **Calculate trap inductance, $$L$$ in Henries.**
    * Calculate inductance, in Henries given inductive reactance $$X_L$$
      and our upper frequency $$f$$. The frequency to be trapped
      (17m/18MHz in this case):
    
        $${X_L} = {2??fL}$$
    
    * Solving for L, we get:
    
        $$L = \frac {X_L} {2??f} = \frac {250??} {2??18.118Mhz} = 2.196??H$$
    
    * If all you wanted to do was design a single-band shortened
      antenna, you could stop here. Since we are building coils that
      will function as LC traps for the higher band, and function as
      shortening loads on the lower band, we now must add capacitors to
      these inductors to form our antenna traps.
    
5. **Calculate trap capacitance.** We will take the inductive loading
   coils and convert these into a parallel LC circuit, aka dipole traps.
    
    The formula for capacitive reactance is:
    
    $${X_C} = \frac {1} {2??fC}$$
    
    Since traps are parallel circuits, first set $${X_C}$$ equal to $${X_L}$$:
    
    $${X_L} = {X_C}$$
    
    $${2??fL} = \frac {1} {2??fC}$$
    
    $${LC} = \frac {1} {(2??f)^2}$$
    
    $$C = \frac {1} {(2??f)^2L}$$
    
    $$C = \frac {1} {(2??18.118MHz)^2.196??H} = 35.235pF$$
    
5. **Revise capacitance based on what can be sourced.** We can roll our
   own inductors from wire wound on pvc couplers, but we will need to
   purchase fixed-value capacitors. Unfortunately, \\(35.235pF\\) is not
   a commonly available capacitance. \\(40pF\\) is easier to source
   (with silver mica caps in serial), so we'll use that:
    
    $${C_{initial}} = 35.235pF \approx {C_{sourcable}} = 40pF $$
    
    * 33pF is also available, but since I want less loading, higher
      capacitance is preferable, allowing for less inductance (resulting
      in less loading/shortening). If I need more loading, then 33pF
      would be a better choice.
    * See my [post on sourcing high voltage capacitors][hv-caps].
6. **Recalculate inductance based on the sourcable capacitance.**
    
    $$L = \frac {1} {(2??f)^2C} = \frac {1} {(2??18.118MHz)^2*40pF} = 1.929??H $$

Altogether, we have:

* \\({Dim_A} = 98\%\\)
* \\({Dim_B} = 85\%\\)
* \\(C = 40pF\\)
* \\(L = 1.929??H\\)

Our two-band 17m and 20m dipole (with very little loading on 20m) will
require two parallel circuit traps with a capacitance of \\(40pF\\) and
inductance of \\(1.929??H\\).

### Determine inductive reactance

Based on how long we want our antenna to be (how much we want to
shorten), which bands we use (which determines trap/coil placement), we
need to calculate the inductive reactance, \\(X_L\\), of our traps.

See [post on loading coil calculation methods][calc_coils].

### Another example: 10m/20m trapped and loaded dipole

Suppose we wanted trapped dipole for 20m and 10m and we wanted to
shorten the whole antenna by 25%. This would give us

* \\({Dim_A} = 75\%\\)
    * we want to shorten the antenna by 25%
* \\({Dim_B} = 66\%\\)
    * \\(20m * 0.75 = 15m\\)
    * traps will be located at the end of the 10m section:
    
        \\( {Dim_B} = \frac {\text{trap location}} {\text{length of outer band}* {Dim_A}} = \frac {10m} {20m * 0.75} = 0.\overline{66} \\)
    
* \\(X_L = 600??\\)
    * as per K1PLP's chart
* \\({L_{initial}} = \frac {X_L} {2??f} = \frac {600??} {2??28.85Mhz} = 3.310??H\\)
* \\({C_{initial}} = \frac {1} {(2??f)^2L} = \frac {1} {(2??28.85MHz)^2 3.310??H} = 9.72pF \\)
* \\({C_{sourcable}} = 10pF\\)
    * as per Ebay search for [K15Y capacitors][ebay]
* \\({L_{revised}} = \frac {1} {(2??f)^2C} = \frac {1} {(2??28.85MHz)^2 10pF} = 3.043??H\\)

For a two band antenna for 10m and 20m, with traps at the end of the 10m
dipole, functioning as loading coils for the 20m band (reducing the
overall antenna length by 25%), we will need parallel traps with 3.043??H
inductance and 10pF of capacitance.

### Repeat for additional bands

To add additional bands, take your trapped/loaded dipole and repeat this
process for the third band. However, you will determine new $${Dim_A}$$
and $${Dim_B}$$ regardless of loading for the second band. Pretend as if
the loaded second band is at full length when calculating $${Dim_A}$$
and $${Dim_B}$$.

For example, adding 30m to the 10m/20m dipole and shortening by 20%:

* \\({Dim_A}\\) would be 80%, regardless of any loading done on the 20m
  band.
* \\({Dim_B}\\) would be 83%
    * 80% of 30m is 24m
    * The second pair of traps will be located at the end of the 20m
      section
    
        \\( {Dim_B} = \frac {\text{trap location}} {\text{length of outer band}* {Dim_A}} = \frac {20m} {30m * 0.8} =  0.8\overline{3} \\)
* \\(X_L = 875??\\)
    * as per K1PLP's chart
* Calculate \\(L\\) and \\(C\\), repeating process above.

Using this process, I have successfully designed and constructed a
working 4 band trap dipole, for 40m, 30m, 20m and 17m. The total length
was between 45 and 50 feet long.

## Calculator tool

I've published a [calculator][calculator] to assist with design. You input the
frequencies of two bands, the amount you want to shorten the overall
antenna, and a few other parameters, and the tool will calculate the
inductive reactance of your coils/traps, coil inductance and trap
capacitance.

## Trap construction

See my post on [trap construction][trap-construction]

## Assembly and tuning

TBA

[K1PLP]: https://dxc.wc2l.com/QST_Sep_1974_p28-34_58.pdf
[w8ij]: https://www.w8ji.com/traps.htm
[antenna_book_vol2]: https://amzn.to/2TYz4Xj
[antenna_book]: https://amzn.to/3wgernK
[mouser]: https://www.mouser.com/Passive-Components/Capacitors/Mica-Capacitors/_/N-5g97?P=1z0z7l5Z1z0x7x5Z1z0wxeo&Ns=Pricing|0
[ebay]: https://ebay.us/W5SabZ
[coil-dipole-calculator]: https://www.66pacific.com/calculators/coil-shortened-dipole-antenna-calculator.aspx
[66pacific]: https://66pacific.com
[CT1EOJ]: http://p1k.arrl.org/pubs_archive/104832
[calc_coils]: {% post_url 2021-06-11-calculate-loading-methods %}
[calculator]: {% post_url 2021-06-16-two-band-trapped-dipole-calculator %}
[trap-construction]: {% post_url 2021-06-18-dipole-trap-construction %}
[hv-caps]: {% post_url 2021-06-21-high-voltage-capacitors %}