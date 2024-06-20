gsap.registerPlugin(ScrollTrigger);
gsap.timeline({
    scrollTrigger: {
        trigger: '#headerSectionParent',
        start: 'center center',
        end: '+=1000',
        scrub: true,
        pin: true,
    }
}).to('#headingDiv', {
    left: '-10%',
    ease: "power1.out",
    duration: 1
}).to('.left-bottom-img-div', {
    top: '54.25%',
    ease: "power1.out",
    duration: 1
}, '-=1').to('.right-top-img-div', {
    top: '36.8%',
    ease: "power1.out",
    duration: 1
}, '-=1').to('.bone-first-div', {
    left: '25%',
    top: '30%',
    ease: "power1.out",
    duration: 1
}, '-=1').to('.paw-purpal-div', {
    left: '30%',
    top: '20%',
    ease: "power1.out",
    duration: 1
}, '-=1').to('.belt-grey-div', {
    left: '50%',
    top: '15%',
    ease: "power1.out",
    duration: 1
}, '-=1').to('.paw-grey-outline-one', {
    left: '55%',
    top: '30%',
    ease: "power1.out",
    duration: 1
}, '-=1').to('.paw-yellow-div', {
    left: '35%',
    top: '65%',
    width: '63px',
    height: '60px',
    ease: "power1.out",
    duration: 1
}, '-=1')
    .to('#headingDiv', {
        left: '-20%',
        ease: "power1.out",
        duration: 1
    }).to('.left-top-img-div', {
        top: '31.5%',
        left: '72.8%',
        ease: "power1.out",
        duration: 1
    }, '-=1').to('.right-bottom-img-div', {
        top: '52.5%',
        ease: "power1.out",
        duration: 1
    }, '-=1').to('.belt-grey-div', {
        left: '55%',
        top: '30%',
        ease: "power1.out",
        duration: 1
    }, '-=1').to('.paw-grey-outline-one', {
        opacity: 0,
        ease: "power1.out",
        duration: 1
    }, '-=1').to('.paw-purpal-div', {
        left: '40%',
        top: '15%',
        ease: "power1.out",
        duration: 1
    }, '-=1').to('.football-image-div', {
        opacity: 1,
        ease: "power1.out",
        duration: 1
    }, '-=1').to('.paw-yellow-div', {
        top: '75%',
        left: '45%',
        transform: 'translate(-50%, -50%) rotate(90deg)',
        ease: "power1.out",
        duration: 1
    }, '-=1').to('.paw-yellow-div svg path', {
        fill: '#D9A6FF',
        fillOpacity: 1,
        ease: "power1.out",
        duration: 1
    }, '-=1').to('.bone-second-div', {
        opacity: 0,
        ease: "power1.out",
        duration: 1
    }, '-=1').to('.food-dish', {
        opacity: 1,
        ease: "power1.out",
        duration: 1
    }, '-=1').to('.paw-grey-outline-two', {
        opacity: 0,
        ease: "power1.out",
        duration: 1
    }, '-=1').to('.paw-red-div', {
        opacity: 1,
        ease: "power1.out",
        duration: 1
    }, '-=1').to('.paw-red-div svg path', {
        fillOpacity: 1,
        ease: "power1.out",
        duration: 1
    }, '-=1')
    .to('#headingDiv', {
        left: '-90%',
        opacity: 0,
        ease: "power1.out",
        duration: 1
    }).to('.secondary-heading-div', {
        opacity: 1,
        top: '40%',
        ease: "power1.out",
        duration: 1
    }, '-=1').to('.secondary-heading-div h2', {
        transform: 'scale(1)',
        ease: "power1.out",
        duration: 1
    }, '-=1').to('.centered-img-div', {
        width: '401px',
        height: '594px',
        ease: "power1.out",
        duration: 1
    }, '-=1').to('.left-top-img-div', {
        left: '78.8%',
        transform: 'translate(-50%, -50%) rotate(-7.36deg)',
        ease: "power1.out",
        duration: 1
    }, '-=1').to('.right-bottom-img-div', {
        left: '78.8%',
        transform: 'translate(-50%, -50%) rotate(7.36deg)',
        ease: "power1.out",
        duration: 1
    }, '-=1').to('.right-top-img-div', {
        left: '87%',
        transform: 'translate(-50%, -50%) rotate(5.36deg)',
        ease: "power1.out",
        duration: 1
    }, '-=1').to('.left-bottom-img-div', {
        left: '85.5%',
        transform: 'translate(-50%, -50%) rotate(-5.36deg)',
        ease: "power1.out",
        duration: 1
    }, '-=1').to('.football-image-div', {
        width: '88px',
        height: '88px',
        transform: 'translate(-50%, -50%) rotate(32.1deg)',
        ease: "power1.out",
        duration: 1
    }, '-=1').to('.paw-yellow-div', {
        width: '75px',
        height: '72px',
        top: '80%',
        left: '60%',
        ease: "power1.out",
        duration: 1
    }, '-=1').to('.paw-yellow-div svg path', {
        fillOpacity: 1,
        ease: "power1.out",
        duration: 1
    }, '-=1').to('.paw-red-div', {
        top: '88%',
        left: '75%',
        ease: "power1.out",
        duration: 1
    }, '-=1').to('.paw-red-div svg path', {
        opacity: 0.7,
        ease: "power1.out",
        duration: 1
    }, '-=1')