
function AnimateElem() {
    gsap.from(".nav", {
        y: -200,
        ease: Expo.easeInOut,
        duration: 2,
        delay: -.5,
        stagger: 0.2,
    })

    // for doing video blur
    gsap.to("video", {
        scrollTrigger: {
            trigger: "body",
            start: "bottom 50%",
            scroller: "body",
            scrub: true,
        },
        filter: "blur(20px)",
        ease: Expo.ease
    })

    gsap.to(".child", {
        y: 0,
        ease: Expo.easeInOut,
        duration: 2,
        delay: -.5,
        stagger: 0.2,
    })

    gsap.to(".child2", {
        scrollTrigger: {
            trigger: "body",
            start: "bottom 80%",
            scroller: "body",
        },
        y: 0,
        ease: Expo.easeInOut,
        duration: 2,
        stagger: 0.1,
    })

    gsap.to(".heading_2", {
        scrollTrigger: {
            trigger: ".viewport_header2",
            start: "top 200%",
            scroller: "body",
            scrub: true,
        },
        x: 200,
        ease: Expo.easeInOut,
        duration: 2,
    })

    gsap.to(".child3", {
        scrollTrigger: {
            trigger: ".viewport_header2",
            start: "bottom 110%",
            scroller: "body",
        },
        y: 0,
        ease: Expo.easeInOut,
        duration: 2,
        delay: -.5,
        stagger: 0.1,
    })
    gsap.from(".anim_heading, .common_para5", {
        scrollTrigger: {
            trigger: ".fifth_section",
            start: "top 80%",
            scroller: "body",

        },
        opacity: 0,
        ease: Expo.easeInOut,
        duration: 2,
        delay: -.5,
        stagger: 0.1,
    })
    gsap.to(".child4", {
        scrollTrigger: {
            trigger: ".fifth_section",
            start: "bottom 90%",
            scroller: "body",
        },
        y: 0,
        ease: Expo.easeInOut,
        duration: 2,
        delay: -.5,
        stagger: 0.1,
    })
}

AnimateElem();