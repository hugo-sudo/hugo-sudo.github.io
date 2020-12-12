const tl = gsap.timeline({ defaults: { ease: "power1.out" } });

tl.to('.hide-text',{ y:"0%", duration:1, stagger: 0.25 });
tl.to('.intro', { y:"-100%",duration:0.85,delay:0.7});
