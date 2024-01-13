//ブラウザバック時のリロード処理
$(window).bind("unload", function () { });

//headerの挿入
// $(function () {
//     $('#header').load('include/header.html');
// });

//footerの挿入
// $(function () {
//     $('#footer').load('include/footer.html');
// });

//indexのカーソル透過処理
$('.nav-list-item').hover(
    function () {
        // マウスカーソルが重なった時の処理
        $(this).css('opacity', '0.5');
    },
    function () {
        // マウスカーソルが離れた時の処理
        $(this).css('opacity', '1');
    }
);

$('.work-container .work-a img').hover(
    function () {
        //マウスカーソルが重なった時の処理
        $('.work-container .work-a img').css('opacity', '0.5');
    },
    function () {
        //マウスカーソルが離れた時の処理
        $('.work-container .work-a img').css('opacity', '1');
    }
);

$('.work-container .work-b img').hover(
    function () {
        //マウスカーソルが重なった時の処理
        $('.work-container .work-b img').css('opacity', '0.5');
    },
    function () {
        //マウスカーソルが離れた時の処理
        $('.work-container .work-b img').css('opacity', '1');
    }
);

$('.work-container .work-c img').hover(
    function () {
        //マウスカーソルが重なった時の処理
        $('.work-container .work-c img').css('opacity', '0.5');
    },
    function () {
        //マウスカーソルが離れた時の処理
        $('.work-container .work-c img').css('opacity', '1');
    }
);

//バナーのカーソル透過処理
$('.banner .banner-kimishin').hover(
    function () {
        //マウスカーソルが重なった時の処理
        $('.banner .banner-kimishin').css('opacity', '0.5');
    },
    function () {
        //マウスカーソルが離れた時の処理
        $('.banner .banner-kimishin').css('opacity', '1');
    }
);

$('.banner .banner-elumori').hover(
    function () {
        //マウスカーソルが重なった時の処理
        $('.banner .banner-elumori').css('opacity', '0.5');
    },
    function () {
        //マウスカーソルが離れた時の処理
        $('.banner .banner-elumori').css('opacity', '1');
    }
);

$('.banner .banner-eluden').hover(
    function () {
        //マウスカーソルが重なった時の処理
        $('.banner .banner-eluden').css('opacity', '0.5');
    },
    function () {
        //マウスカーソルが離れた時の処理
        $('.banner .banner-eluden').css('opacity', '1');
    }
);

// ページ最上部btn
$(function () {
    var pagetop = $('#js-pagetop');
    pagetop.hide();
    $(window).scroll(function () {
        if ($(this).scrollTop() > 500) {
            pagetop.fadeIn();
        } else {
            pagetop.fadeOut();
        }
    });
    pagetop.click(function () {
        $('body, html').animate({
            scrollTop: 0
        }, 500);
        return false;
    });
});

$('#js-pagetop').hover(
    function () {
        //マウスカーソルが重なった時の処理
        $('#js-pagetop').css('opacity', '0.5');
    },
    function () {
        //マウスカーソルが離れた時の処理
        $('#js-pagetop').css('opacity', '1');
    }
);


// fadeinアニメーション用
$(document).ready(function () {
    // 初期表示時にも要素が表示されているかどうかを判定
    $('.fadein').each(function () {
        var position = $(this).offset().top;
        var scroll = $(window).scrollTop();
        var windowHeight = $(window).height();
        if (scroll > position - windowHeight + 100) {
            $(this).addClass('active');
        }
    });

    // スクロールイベント
    $(window).scroll(function () {
        $('.fadein').each(function () {
            var position = $(this).offset().top;
            var scroll = $(window).scrollTop();
            var windowHeight = $(window).height();
            if (scroll > position - windowHeight + 100) {
                $(this).addClass('active');
            }
        });
    });
});

$(document).ready(function () {
    $('.fadein-0').each(function () {
        var position = $(this).offset().top;
        var windowHeight = $(window).height();
        if (position < windowHeight) {
            $(this).addClass('active');
        }
    });
});
