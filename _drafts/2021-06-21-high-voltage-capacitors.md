---
layout: post
title:  "Sourcing High Voltage Capacitors"
date:   2021-06-21 22:53:06 -0400
categories: trap-dipole
---

<script src="https://polyfill.io/v3/polyfill.min.js?features=es6"></script>
<script id="MathJax-script" async src="/assets/js/npm/mathjax/es5/tex-mml-chtml.js"></script>

High voltage capacitors are not as easy as inductors to make and they
can be expensive to source if you don't know where to look.

I've found two affordable options:

* Surplus Soviet transmitting equipment on EBay (my preference).
  These are large "ceramic" doorknob capacitors. These can be found
  by running a search for [K15Y capacitor on ebay][ebay]. I've had
  good results with 3.5kV rated doorknob capacitors.
    * 2 K15Y doorknob capacitors will cost between $5 and $10,
      before shipping.
* Parallel silver mica capacitors. I haven't tried this, but it
  seems that 3 [$$120pF$$ 1kV silver mica capacitors][mouser] in
  series will provide a sufficient voltage rating for our antenna.
  Three of these capacitors in series will have three times the
  voltage rating and one third the capacitance of each capacitor.
    * At $1.60 each, 6 capacitors for a pair of traps will cost
      $9.60, before tax and shipping.
* For example, 3 $$120pF$$ capacitors in series gives us with a trap
  capacitance of $$40pF$$:

    $${C_{initial}} = 35.235pF \approx {C_{sourcable}} = 40pF $$

I've used surplus Soviet military capacitors (aka, doorknob capacitors)
with success. IMO, doorknob capacitors are cheaper since they come in
packs of four or more.

I haven't tried silver-mica caps in series, but I have seen this
technique in QST magazine and elsewhere.

My assumption is that 3.5kV is sufficient for transmitting up to 100
watts. As far as I can tell, I haven't had any arcing. If I have, it
doesn't seem to have affect capacitance.

[ebay]: https://ebay.us/W5SabZ
[mouser]: https://www.mouser.com/Passive-Components/Capacitors/Mica-Capacitors/_/N-5g97?P=1z0z7l5Z1z0x7x5Z1z0wxeo&Ns=Pricing|0
