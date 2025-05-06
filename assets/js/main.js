// 1 main-img.js

document.addEventListener('DOMContentLoaded', () => {
    let stopSlide = false;

    const swiper = new Swiper('.swiper', {  // swiper 인스턴스 저장
        effect: 'fade',
        fadeEffect: { crossFade: true },
        speed: 3000,
        loop: true,
        touchRatio: 2,
        threshold: -100,
        autoplay: {
            delay: 2000,
            disableOnInteraction: false,
        },
        on: {
            slideChange: function () {
                // headerManager를 통해 색상 변경
                window.headerManager.changeColor(this.realIndex);
            }
        }
    });

    // 2 about-txt fade from bottom
    const aboutTxt = gsap.timeline({
        scrollTrigger: {
            trigger: '.about-txt',
            start: 'top center',
        },
    });

    aboutTxt.from(['.about-txt .line'], {
        opacity: 0,
        y: 30,
        duration: 1,
        stagger: 0.2,
        ease: "power2.out",
    });

    // 3 client-title sticky

    gsap.from('.client-title', {
        // y: 100,
        opacity: 0,
        duration: 1,
        ease: "power2.out",

        scrollTrigger: {
            trigger: '.client-list',
            start: 'top 100%',
            end: 'bottom 30%',     // end 지점도 수정
            scrub: 1,
            onLeave: function () {    // ScrollTrigger 안으로 이동
                gsap.to('.client-title', {
                    y: -50,
                    opacity: 0,
                    duration: 1
                });
            },
        }
    });

    // client-list 애니메이션
    const clientList = gsap.timeline({
        scrollTrigger: {
            trigger: '.client-list',
            start: 'top center',
        }
    });

    clientList.from(['.client-list li'], {
        opacity: 0,
        y: 30,
        duration: 1,
        stagger: 0.2,
        ease: "power2.out",
    });







    // last
    const lastTimeline = gsap.timeline({
        scrollTrigger: {
            trigger: ".sc-last",
            start: "top center",
            // markers: true,
        }
    });

    lastTimeline.from('.sc-last .last-title', {
        opacity: 0,
        y: 30,
        stagger: 0.2,
        ease: "power2.out",
    });

    // lastTimeline.to('.sc-last .round-shape', 1.5, {
    //     // scale: window.innerWidth / 50,
    //     scale: 1.1,
    //     opacity: 1,
    //     ease: "power2.out",
    //     onComplete: function () {
    //         lastTimeline.to('.sc-last .round-shape', {
    //             borderRadius: '0%',
    //         });
    //     }
    // });

    lastTimeline.to('.sc-last .round-shape', {
        duration: 1.5,
        scale: 1,
        opacity: 1,
        ease: "power2.out"
    })
    
    // 2) 완전히 커진 뒤 borderRadius를 0%로
    .to('.sc-last .round-shape', {
        duration: 1.5,
        borderRadius: '0%',
        ease: "power2.out"
    });





    // goto-wrapper
    gsap.from('.goto-wrapper', 2, {
        opacity: 0,
        y: 100,
        stagger: 1,
        ease: "power2.out",

        scrollTrigger: {
            trigger: ".goto-wrapper",
            start: "60% 100%",
            // markers: true,
            onEnter: () => {
                $('.goto-wrapper').addClass('theme-dark');
            },
            // onLeaveBack: () => {
            //     $('.goto-wrapper').removeClass('theme-dark');
            // }
        }
    });



});







