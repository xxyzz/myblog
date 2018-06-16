---
layout: post
title: "An Introduction to Fiber Optic Sensor"
date: 2018-06-05
description: ""
comments: true
---
**It's a homework not a formal thesis.**

### Abstract

### Principle

#### Total internal reflection
If you look up from the bottom of a pool at a certain angle, you will see the bottom as if the water-air interface is a mirror. That's a [total internal reflection](https://en.wikipedia.org/wiki/Total_internal_reflection) phenomenon, the same reason which keeps the light inside a fiber.

![View form the bottom of a pool](/images/pool.jpg)
***Figure 2.1** View form the bottom of a pool*

We can use [Snell's law](https://en.wikipedia.org/wiki/Snell%27s_law) to explain it: $$ n_1\sin \theta_i=n_2\sin \theta_t $$. N represents the [refractive index](https://en.wikipedia.org/wiki/Refractive_index). Assuming that the left of the x-axis is [acrylic glass](https://en.wikipedia.org/wiki/Poly(methyl_methacrylate)) and the right is air. Let $$ \theta_t= 90^\circ$$, $$ n_2 = $$ 1.00 and $$ n_1 = $$ 1.50, we get $$ \theta_c = 41.8^\circ $$. So when $$ n_2/n_1 \leq 1 $$ and light incidents on the border at larger than 41.8° would be totally internally reflected.

![Illustration of Snell's law](https://upload.wikimedia.org/wikipedia/commons/6/67/TIRDiagram2.JPG)
***Figure 2.2** Illustration of Snell's law*

The middle part of the fiber is called the core, it's surrounded by a transparent cladding material with a lower index of refraction. So the light is kept in the core.

#### Single-mode fiber
[Single-mode optical fiber](https://en.wikipedia.org/wiki/Single-mode_optical_fiber) carries light only directly down the fiber. It has a core diameter about 8-10.5 [µm](https://en.wikipedia.org/wiki/%CE%9Cm) and a cladding diameter of 125 µm. Waves can have the same mode but have different frequencies, that means we can have a single ray of light which contains multiple weaves with different frequencies in single-mode fibers.

Single-mode fibers have narrower modal dispersion than multi-mode optical fibers, so it allows much longer, higher-performance links. They are commonly available in 12 km. 

#### Multi-mode fiber
Lights travel through the core following different paths in [multi-mode optical fiber](https://en.wikipedia.org/wiki/Multi-mode_optical_fiber). It has much larger core diameter than single-mode fiber, typically 50–100 [µm](https://en.wikipedia.org/wiki/%CE%9Cm). And mostly used for communication over short distances(up to 4km), such as within a building or on a campus. Equipments for multi-mode fiber is cheaper than single-mode.

#### Bending and Sensing
Bending causes light beam exceed the critical angle, so can't form total internal reflection. Thus lead to loss  to the cladding region. The light that finally reaches the detector is amplitude modulated by an amount that corresponds to the motion of the bending plates.

![Loss in a fiber waveguide due to bending.](/images/bending_loss.png)
***Figure 2.3** Loss in a fiber waveguide due to bending.*

#### Evanescent Coupling and Sensing
When light propagates along a single-mode optical fiber, it is not confined to the core region but extends into the surrounding glass cladding region. Placing two similar units in contact allows for the evanescent coupling to take place.

Light is introduced into one of the fibers, and it propagates to a region where a second core is placed in close proximity. Figure 2.4 shows a fiber sensor based on this concept. When the distance between the two fibers change, the amount of light cross-coupled to the second fiber will vary. A detector is used to monitor the environmentally induced amplitude change in the second fiber.

![Evanescent coupling between adjacent fibers used to form an acoustic sensor.](/images/acoustic_sensor.png)
***Figure 2.4** Evanescent coupling between adjacent fibers used to form an acoustic sensor.*

#### Directional Coupling and Sensing
The length and index of refraction of an optical fiber will change when it is subject to an environmental perturbation. Interferometric techniques may be used to sense these changes with accuracies that match or surpass those achieved with conventional sensor technology.

### Category

### Application

### Summary

### References

<script src='https://cdnjs.cloudflare.com/ajax/libs/mathjax/2.7.4/MathJax.js?config=TeX-MML-AM_CHTML' async></script>