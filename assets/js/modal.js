$(document).ready(function () {
    // 모달 열기
    $(".open-modal-btn").click(function () {
        const target = $(this).data("target");
        $(".modal-dimmed").fadeIn();
        $(target).fadeIn();
        $(target).scrollTop(0);
        $("body").addClass("body-no-scroll");

        gsap.from(`${target} .modal-desc`, 0.5, {
            y: 30,
            opacity: 0,
            ease: 'power2.out',
            delay: 1.2  // fadeIn 후에 시작
        });

    });


    // 모달 닫기 (close 버튼, dimmed 영역 클릭)
    $(".modal-close, .modal-dimmed").on("click", function () {
        $(".modal-dimmed").fadeOut();
        $(".modal-list").fadeOut();
        $("body").removeClass("body-no-scroll");
    });

    // 키다운들
    $(document).on("keydown", function (e) {
        // 모달이 열려있을 때만 동작하도록
        if ($(".modal-list:visible").length > 0) {
            const modalContent = $(".modal-list:visible");
            const scrollAmount = 100; // 스크롤 양 조절

            switch (e.key) {
                case "Escape":
                    $(".modal-dimmed").fadeOut();
                    $(".modal-list").fadeOut();
                    $("body").removeClass("body-no-scroll");
                    break;
                case "ArrowUp":
                    modalContent.scrollTop(modalContent.scrollTop() - scrollAmount);
                    break;
                case "ArrowDown":
                    modalContent.scrollTop(modalContent.scrollTop() + scrollAmount);
                    break;
                case "PageUp":
                    modalContent.scrollTop(modalContent.scrollTop() - modalContent.height());
                    break;
                case "PageDown":
                    modalContent.scrollTop(modalContent.scrollTop() + modalContent.height());
                    break;
                case "Home":
                    modalContent.scrollTop(0); // 맨 위로
                    break;
                case "End":
                    modalContent.scrollTop(modalContent[0].scrollHeight); // 맨 아래로
                    break;
            }
        }
    });
}); 