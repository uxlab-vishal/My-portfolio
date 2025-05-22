// Animate hero text on load
gsap.from(".hero-title", { 
    y: 50, 
    opacity: 0, 
    duration: 1 
});

// Scroll-triggered animations
gsap.utils.toArray("section").forEach(section => {
    ScrollTrigger.create({
        trigger: section,
        start: "top 80%",
        onEnter: () => section.classList.add("active")
    });
});
