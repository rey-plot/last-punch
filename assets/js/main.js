// 1 main-img.js

document.addEventListener('DOMContentLoaded', () => {
    const colors = ['#a0fdd0', '#fdd0a0', '#d0a0fd'];
    const headerBoxes = document.querySelectorAll('header > div, footer > div');
    let currentColor = colors[0];
    let isScrolled = false;  // 스크롤 상태 체크용
    let stopSlide = false;

    // 초기 opacity 설정
    headerBoxes.forEach(box => {
        box.style.opacity = '0.9';
    });

    const swiper = new Swiper('.swiper', {  // swiper 인스턴스 저장
        effect: 'fade',
        fadeEffect: { crossFade: true },
        speed: 5000,
        loop: true,
        touchRatio: 2,
        threshold: -100,
        autoplay: {
            delay: 2000,
            disableOnInteraction: false,
        },
        on: {
            slideChange: function () {
                if (!isScrolled) {  // 스크롤 안했을 때만 색상 변경
                    currentColor = colors[this.realIndex];
                    headerBoxes.forEach(box => {
                        box.style.backgroundColor = currentColor;
                    });
                }
            }
        }
    });

    // header footer background color change
    window.addEventListener('scroll', () => {
        if (window.scrollY > 0) {
            isScrolled = true;
            headerBoxes.forEach(box => {
                box.style.backgroundColor = currentColor;
            });
        } else {
            isScrolled = false;
        }
    });




    if (document.documentElement.scrollHeight <= window.innerHeight) {
        // "만약 페이지가 화면보다 짧아서 스크롤바가 안 생기면"

        document.querySelector('header').classList.add('scrolled');
        document.querySelector('footer').classList.add('scrolled');
        // "헤더에 '스크롤됨' 이라는 스티커를 붙여줘"
    }








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
        duration: 1,  // 좀 더 빠르게
        stagger: 0.2,   // 요소들 사이의 간격
        // stagger: {
        //     amount: 1,    // 전체 시간을 1초로
        //     from: "start"   // 끝에서부터 시작
        // },
        ease: "power2.out",  // 부드러운 감속 효과
        // 또는 
        // ease: "back.out(1.3)"  // 살짝 통통 튀는 효과
        // ease: "bounce.out",    // 땅에서 통통통 튀는 느낌
        // ease: "elastic.out",    // 고무줄처럼 늘었다 돌아오는 느낌
        // ease: "circ.out(0.5)",       // 휘리릭 하고 감속하는 느낌
    });





    // 3 client-title sticky

    gsap.from('.client-title', {
        y: 100,
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
                    y: -100,
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





    // love
    const loveTimeline = gsap.timeline({ scrollTrigger: { trigger: ".sc-love", start: "top 30%", } });
    loveTimeline.from('.sc-love .love-title', { opacity: 0, y: 30, stagger: 0.2, ease: "power2.out", });
    loveTimeline.to('.sc-love .heart-shape', 1.5, { scale: window.innerWidth / 50, opacity: 1, ease: "power2.out", onComplete: function () { loveTimeline.to('.sc-love .heart-shape', { borderRadius: '0%', }); } });














});







