// GSAP Animations
gsap.registerPlugin(ScrollTrigger);

// Hero text animation
gsap.from(".hero-title, .hero-location", {
    duration: 1,
    y: 50,
    opacity: 0,
    stagger: 0.2,
    ease: "power3.out"
});

// Section reveal animations
gsap.utils.toArray("section").forEach(section => {
    gsap.from(section, {
        scrollTrigger: {
            trigger: section,
            start: "top 80%",
            toggleActions: "play none none none"
        },
        y: 50,
        opacity: 0,
        duration: 1
    });
});

// Project card hover scaling
document.querySelectorAll('.project-card').forEach(card => {
    card.addEventListener('mouseenter', () => {
        gsap.to(card.querySelector('img'), {
            scale: 1.05,
            duration: 0.5
        });
    });
    card.addEventListener('mouseleave', () => {
        gsap.to(card.querySelector('img'), {
            scale: 1,
            duration: 0.5
        });
    });
});
