// 전역 객체로 만들어서 다른 JS 파일에서도 접근 가능하게
window.headerManager = {
    colors: ['#a0fdd0', '#fdd0a0', '#d0a0fd'],
    currentColor: '#a0fdd0',
    isScrolled: false,

    // 색상 변경 함수
    changeColor: function (colorIndex) {
        if (!this.isScrolled) {
            this.currentColor = this.colors[colorIndex];
            const headerBoxes = document.querySelectorAll('header > div, footer > div');
            headerBoxes.forEach(box => {
                box.style.backgroundColor = this.currentColor;
            });
        }
    }
};

$(document).ready(function () {
    // 헤더, 푸터 로드
    $("#header").load("../include/header.html", function () {
        $("#footer").load("../include/footer.html", function () {
            const headerBoxes = document.querySelectorAll('header > div, footer > div');

            // 초기 opacity 설정
            headerBoxes.forEach(box => {
                box.style.opacity = '0.9';
                box.style.backgroundColor = window.headerManager.currentColor;
            });

            // 스크롤 이벤트
            window.addEventListener('scroll', () => {
                if (window.scrollY > 0) {
                    window.headerManager.isScrolled = true;
                    headerBoxes.forEach(box => {
                        box.style.backgroundColor = window.headerManager.currentColor;
                    });
                } else {
                    window.headerManager.isScrolled = false;
                }
            });

            // 짧은 페이지 처리(페이지가 화면보다 짧을 때)
            if (document.documentElement.scrollHeight <= window.innerHeight) {
                document.querySelector('header').classList.add('scrolled');
                document.querySelector('footer').classList.add('scrolled');
            }





            // about 페이지 js



            gsap.from('.about-main .title-line', 0.5, {
                y: 30,
                opacity: 0,
                stagger: 0.2,
                ease: 'power2.out'
            })
            gsap.from('.about-main .desc-wrapper .desc', 0.8, {
                y: 30,
                opacity: 0,
                stagger: 0.2,
                ease: 'power2.out'
            }, ">");
        });





    });
});
