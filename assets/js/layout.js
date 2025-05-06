// 전역 객체로 만들어서 다른 JS 파일에서도 접근 가능하게
window.headerManager = {
    colors: ['#a0fdd0', '#fdd0a0', '#C6D1FF'],
    currentColor: '#a0fdd0',
    isScrolled: false,

    // 색상 변경 함수
    changeColor: function (colorIndex) {
        if (!this.isScrolled) {
            this.currentColor = this.colors[colorIndex];
            // 헤더: .title, .cate-list만 background-color 변경
            const headerTitles = document.querySelectorAll('.header-wrapper .title');
            headerTitles.forEach(box => {
                box.style.backgroundColor = this.currentColor;
                box.style.color = '';
            });
            const headerCateLists = document.querySelectorAll('.header-wrapper .cate-list');
            headerCateLists.forEach(box => {
                box.style.backgroundColor = this.currentColor;
                box.style.color = '';
            });
            // 푸터: background-color 제거, color만 변경
            const footerBoxes = document.querySelectorAll('footer > div');
            footerBoxes.forEach(box => {
                box.style.backgroundColor = 'transparent';
                box.style.color = this.currentColor;
            });
        }
    }
};

$(document).ready(function () {
    // 헤더, 푸터 로드 .. 상대경로
    $("#header").load("../_includes/header.html", function () {
        $("#footer").load("../_includes/footer.html", function () {
            const headerBoxes = document.querySelectorAll('header > div, footer > div');

            // opacity(css로 대체)
            // headerBoxes.forEach(box => {
            //     box.style.opacity = '0.9';
            //     box.style.backgroundColor = window.headerManager.currentColor;
            // });

            // 스크롤 이벤트
            window.addEventListener('scroll', () => {
                if (window.scrollY > 0) {
                    window.headerManager.isScrolled = true;
                    // 헤더: .title, .cate-list만 배경색 적용
                    const headerTitles = document.querySelectorAll('.header-wrapper .title');
                    headerTitles.forEach(box => {
                        box.style.backgroundColor = window.headerManager.currentColor;
                    });
                    const headerCateLists = document.querySelectorAll('.header-wrapper .cate-list');
                    headerCateLists.forEach(box => {
                        box.style.backgroundColor = window.headerManager.currentColor;
                    });
                    // 푸터는 배경색 제거, 글자색만 적용
                    const footerBoxes = document.querySelectorAll('footer > div');
                    footerBoxes.forEach(box => {
                        box.style.backgroundColor = 'transparent';
                        box.style.color = window.headerManager.currentColor;
                    });
                } else {
                    window.headerManager.isScrolled = false;
                    // 필요하다면 스크롤이 맨 위일 때의 스타일도 여기서 다시 지정
                }
            });

            // 스크롤된 것처럼 스타일 적용되는 착각주기
            if (document.documentElement.scrollHeight <= window.innerHeight) {
                document.querySelectorAll('header, footer').forEach(el => el.classList.add('scrolled'));
            }







            // about 페이지 전용 gsap 코드 적어서여따둠
            gsap.from('.about-main .title-line', 1, {
                y: 30,
                opacity: 0,
                stagger: 0.2,
                ease: 'power2.out',
            });
            gsap.from('.about-main .desc-wrapper .desc', 1.2, {
                y: 30,
                opacity: 0,
                stagger: 0.2,
                ease: 'power2.out',
            });
        });
    });
});
