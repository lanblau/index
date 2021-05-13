

//--------影片控制----------
// function onYouTubeIframeAPIReady() {
//     var player;
//     player = new YT.Player('YouTubeVideoPlayerAPI', {
//         videoId: 'Gcbwvpyh5PA',   // YouTube 影片ID
//         // width: '1080',            // 播放器寬度 (px)
//         // height: '720',           // 播放器高度 (px)
//         playerVars: {
//             autoplay: 1,            // 自動播放影片
//             controls: 0,            // 顯示播放器
//             showinfo: 0,            // 隱藏影片標題
//             modestbranding: 0,      // 隱藏YouTube Logo
//             loop: 1,                // 重覆播放
//             playlist: 'Gcbwvpyh5PA', // 當使用影片要重覆播放時，需再輸入YouTube 影片ID
//             // fs: 0,                  // 隱藏全螢幕按鈕
//             // cc_load_policty: 0,     // 隱藏字幕
//             // iv_load_policy: 3,      // 隱藏影片註解
//             // autohide: 0             // 影片播放時，隱藏影片控制列
//         },
//         events: {
//             onReady: function (e) {
//                 e.target.mute();      //播放時靜音
//                 e.target.playVideo(); //強制播放(手機才會自動播放，但僅限於Android)
//             }
//         }
//     });
// }

//-------------每月主打carousel------------
// 宣告一個變數來儲存現在的頁數
let page = 0;

$('.s_slider-dots li').hover(
    function () {
        // page=('.s_slider-dots li').hover的第幾項
        page = $(this).index();

        $(this).css('background-color', 'var(--mainblue)').css('color', '#ffffff').siblings().css('color', 'var(--maindarkgray)').css('background-color', 'var(--mainyellow)');
        // $(this).find('.s_index_choice_PC_icon').css('fill', '#ffffff');
        // $(this).siblings().find('.s_index_choice_PC_icon').css('fill', 'var(--maindarkgray)');


        // $(this) 代名詞 = 被 hover 的 li=('.s_slider-dots li').hover這個狀態function


        $('.s_img-wrap').css('left', $(this).index() * -1500 + 'px');
    })

setInterval(() => {
    page = page + 1;

    if (page >= 4) { page = 0; }

    $('.s_img-wrap').css('left', page * -1500 + 'px');
    // console.log('page = ', page);

    $('.s_slider-dots li').eq(page).css('background-color', 'var(--mainblue)').css('color', ' #ffffff').siblings().css('color', 'var(--maindarkgray)').css('background-color', 'var(--mainyellow)');
    // $('.slider - dots li').find('.s_index_choice_PC_icon').css('fill', '#ffffff').siblings().find('.s_index_choice_PC_icon').css('fill', 'var(--maindarkgray)');
    // $('.s_slider-dots li').find('.s_index_choice_PC_icon').css('fill', '#ffffff');
    // $('.s_slider-dots li').siblings().find('.s_index_choice_PC_icon').css('fill', 'var(--maindarkgray)');
}, 3000);





// --------------狗狗食物動畫---------------

$(window).scroll(function () {
    // console.log('scollTop', $(this).scrollTop());

    let windowScrollTop = $(this).scrollTop();

    //----手機版飼料------
    if (windowScrollTop > 1100) {
        $(".s_dogFood05").css("opacity", "1").css("transform", "translateY(0px)");
    } else {
        $(".s_dogFood05")
            .css("opacity", "0")
            .css("transform", "translateY(-120px)");
    }
    //-----電腦版飼料--------
    if (windowScrollTop > 1600) {
        $(".s_dogFood01").css("opacity", "1").css("transform", "translateY(0px)");
        $(".s_dogFood02").css("opacity", "1").css("transform", "translateY(0px)");
    } else {
        $(".s_dogFood01")
            .css("opacity", "0")
            .css("transform", "translateY(-150px)");
        $(".s_dogFood02")
            .css("opacity", "0")
            .css("transform", "translateY(-180px)");
    }

    if (windowScrollTop > 1700) {
        $(".s_dogFood03").css("opacity", "1").css("transform", "translateY(0px)");
        $(".s_dogFood04").css("opacity", "1").css("transform", "translateY(0px)");
    } else {
        $(".s_dogFood03")
            .css("opacity", "0")
            .css("transform", "translateY(-150px)");
        $(".s_dogFood04")
            .css("opacity", "0")
            .css("transform", "translateY(-120px)");
    }
});




//-----------------點愛心換色-----------------
let heart = document.getElementsByClassName('s_heart-button')
for (let h of heart) {
    h.addEventListener("click", function (e) {
        // h.style.transform = "scale(1.2)";
        h.classList.toggle('s_heart_color');
        // console.log(h)
    });
}

//------------熱門商品切換-----------
$(".s_hotSale_dogFeed_Btn_PC").click(function () {
    $(".s_hotSale_dogFeed_Sec_PC").css('display', 'flex').css('flex-direction', 'column');
    $(".s_hotSale_dogCan_Sec_PC").css('display', 'none');
    $(".s_hotSale_dogSnack_Sec_PC").css('display', 'none');
    $(".s_hotSale_dogOtherProduct_Sec_PC").css('display', 'none');
    $(this).css('background-color', 'var(--mainblue)').css('color', '#ffffff').siblings().css('background-color', '#ffffff').css('color', 'var(--mainblue)')
});
$(".s_hotSale_dogCan_Btn_PC").click(function () {
    $(".s_hotSale_dogCan_Sec_PC").css('display', 'flex').css('flex-direction', 'column');
    $(".s_hotSale_dogFeed_Sec_PC").css('display', 'none');
    $(".s_hotSale_dogSnack_Sec_PC").css('display', 'none');
    $(".s_hotSale_dogOtherProduct_Sec_PC").css('display', 'none');
    $(this).css('background-color', 'var(--mainblue)').css('color', '#ffffff').siblings().css('background-color', '#ffffff').css('color', 'var(--mainblue)')
});
$(".s_hotSale_dogSnack_Btn_PC").click(function () {
    $(".s_hotSale_dogSnack_Sec_PC").css('display', 'flex').css('flex-direction', 'column');
    $(".s_hotSale_dogFeed_Sec_PC").css('display', 'none');
    $(".s_hotSale_dogCan_Sec_PC").css('display', 'none');
    $(".s_hotSale_dogOtherProduct_Sec_PC").css('display', 'none');
    $(this).css('background-color', 'var(--mainblue)').css('color', '#ffffff').siblings().css('background-color', '#ffffff').css('color', 'var(--mainblue)')
});
$(".s_hotSale_dogOtherProduct_Btn_PC").click(function () {
    $(".s_hotSale_dogOtherProduct_Sec_PC").css('display', 'flex').css('flex-direction', 'column');
    $(".s_hotSale_dogFeed_Sec_PC").css('display', 'none');
    $(".s_hotSale_dogSnack_Sec_PC").css('display', 'none');
    $(".s_hotSale_dogCan_Sec_PC").css('display', 'none');

    $(this).css('background-color', 'var(--mainblue)').css('color', '#ffffff').siblings().css('background-color', '#ffffff').css('color', 'var(--mainblue)')
});



$(".s_hotSale_catFeed_Btn_PC").click(function () {
    $(".s_hotSale_catFeed_Sec_PC").css('display', 'flex').css('flex-direction', 'column');
    $(".s_hotSale_catCan_Sec_PC").css('display', 'none');
    $(".s_hotSale_catSnack_Sec_PC").css('display', 'none');
    $(".s_hotSale_catOtherProduct_Sec_PC").css('display', 'none');
    $(this).css('background-color', 'var(--mainblue)').css('color', '#ffffff').siblings().css('background-color', '#ffffff').css('color', 'var(--mainblue)')
});
$(".s_hotSale_catCan_Btn_PC").click(function () {
    $(".s_hotSale_catCan_Sec_PC").css('display', 'flex').css('flex-direction', 'column');
    $(".s_hotSale_catFeed_Sec_PC").css('display', 'none');
    $(".s_hotSale_catSnack_Sec_PC").css('display', 'none');
    $(".s_hotSale_catOtherProduct_Sec_PC").css('display', 'none');
    $(this).css('background-color', 'var(--mainblue)').css('color', '#ffffff').siblings().css('background-color', '#ffffff').css('color', 'var(--mainblue)')
});
$(".s_hotSale_catSnack_Btn_PC").click(function () {
    $(".s_hotSale_catSnack_Sec_PC").css('display', 'flex').css('flex-direction', 'column');
    $(".s_hotSale_catFeed_Sec_PC").css('display', 'none');
    $(".s_hotSale_catCan_Sec_PC").css('display', 'none');
    $(".s_hotSale_catOtherProduct_Sec_PC").css('display', 'none');
    $(this).css('background-color', 'var(--mainblue)').css('color', '#ffffff').siblings().css('background-color', '#ffffff').css('color', 'var(--mainblue)')
});
$(".s_hotSale_catOtherProduct_Btn_PC").click(function () {
    $(".s_hotSale_catOtherProduct_Sec_PC").css('display', 'flex').css('flex-direction', 'column');
    $(".s_hotSale_catFeed_Sec_PC").css('display', 'none');
    $(".s_hotSale_catSnack_Sec_PC").css('display', 'none');
    $(".s_hotSale_catCan_Sec_PC").css('display', 'none');

    $(this).css('background-color', 'var(--mainblue)').css('color', '#ffffff').siblings().css('background-color', '#ffffff').css('color', 'var(--mainblue)')
});
// ---------手機板 狗商品------------

$(".s_hotSale_dogFeed_Btn_ph").click(function () {
    $(".s_hotSale_dogFeed_Sec_ph").css('display', 'flex');
    $(".s_hotSale_dogCan_Sec_ph").css('display', 'none');
    $(".s_hotSale_dogSnack_Sec_ph").css('display', 'none');
    $(".s_hotSale_dogOtherProduct_Sec_ph").css('display', 'none');
    $(this).css('background-color', 'var(--mainblue)').css('color', '#ffffff').siblings().css('background-color', '#ffffff').css('color', 'var(--mainblue)')
});
$(".s_hotSale_dogCan_Btn_ph").click(function () {
    // $(".s_hotSale_dogCan_Sec_ph").show();
    // $(".s_hotSale_dogCan_Sec_ph").css(' height', '350px');
    // $(".s_hotSale_dogCan_Sec_ph").css('transform', 'translateX(0px)');
    // $(".s_hotSale_dogCan_Sec_ph").css('left', '0px');
    $(".s_hotSale_dogCan_Sec_ph").css('display', 'flex');
    $(".s_hotSale_dogFeed_Sec_ph").css('display', 'none');
    $(".s_hotSale_dogSnack_Sec_ph").css('display', 'none');
    $(".s_hotSale_dogOtherProduct_Sec_ph").css('display', 'none');
    $(this).css('background-color', 'var(--mainblue)').css('color', '#ffffff').siblings().css('background-color', '#ffffff').css('color', 'var(--mainblue)')
});
$(".s_hotSale_dogSnack_Btn_ph").click(function () {
    // $(".s_hotSale_dogCan_Sec_ph").show();

    $(".s_hotSale_dogSnack_Sec_ph").css('display', 'flex');
    // .css(' transform', 'translateY(100px)')
    $(".s_hotSale_dogFeed_Sec_ph").css('display', 'none');
    $(".s_hotSale_dogCan_Sec_ph").css('display', 'none');
    $(".s_hotSale_dogOtherProduct_Sec_ph").css('display', 'none');
    $(this).css('background-color', 'var(--mainblue)').css('color', '#ffffff').siblings().css('background-color', '#ffffff').css('color', 'var(--mainblue)')
});
$(".s_hotSale_dogOtherProduct_Btn_ph").click(function () {
    $(".s_hotSale_dogOtherProduct_Sec_ph").css('display', 'flex');
    $(".s_hotSale_dogFeed_Sec_ph").css('display', 'none');
    $(".s_hotSale_dogSnack_Sec_ph").css('display', 'none');
    $(".s_hotSale_dogCan_Sec_ph").css('display', 'none');

    $(this).css('background-color', 'var(--mainblue)').css('color', '#ffffff').siblings().css('background-color', '#ffffff').css('color', 'var(--mainblue)')
});


// ---------手機版貓貓貓商品------------

$(".s_hotSale_catFeed_Btn_ph").click(function () {
    $(".s_hotSale_catFeed_Sec_ph").css('display', 'flex');
    $(".s_hotSale_catCan_Sec_ph").css('display', 'none');
    $(".s_hotSale_catSnack_Sec_ph").css('display', 'none');
    $(".s_hotSale_catOtherProduct_Sec_ph").css('display', 'none');
    $(this).css('background-color', 'var(--mainblue)').css('color', '#ffffff').siblings().css('background-color', '#ffffff').css('color', 'var(--mainblue)')
});
$(".s_hotSale_catCan_Btn_ph").click(function () {
    $(".s_hotSale_catCan_Sec_ph").css('display', 'flex');
    $(".s_hotSale_catFeed_Sec_ph").css('display', 'none');
    $(".s_hotSale_catSnack_Sec_ph").css('display', 'none');
    $(".s_hotSale_catOtherProduct_Sec_ph").css('display', 'none');
    $(this).css('background-color', 'var(--mainblue)').css('color', '#ffffff').siblings().css('background-color', '#ffffff').css('color', 'var(--mainblue)')
});
$(".s_hotSale_catSnack_Btn_ph").click(function () {
    $(".s_hotSale_catSnack_Sec_ph").css('display', 'flex');
    $(".s_hotSale_catFeed_Sec_ph").css('display', 'none');
    $(".s_hotSale_catCan_Sec_ph").css('display', 'none');
    $(".s_hotSale_catOtherProduct_Sec_ph").css('display', 'none');
    $(this).css('background-color', 'var(--mainblue)').css('color', '#ffffff').siblings().css('background-color', '#ffffff').css('color', 'var(--mainblue)')
});
$(".s_hotSale_catOtherProduct_Btn_ph").click(function () {
    $(".s_hotSale_catOtherProduct_Sec_ph").css('display', 'flex');
    $(".s_hotSale_catFeed_Sec_ph").css('display', 'none');
    $(".s_hotSale_catSnack_Sec_ph").css('display', 'none');
    $(".s_hotSale_catCan_Sec_ph").css('display', 'none');

    $(this).css('background-color', 'var(--mainblue)').css('color', '#ffffff').siblings().css('background-color', '#ffffff').css('color', 'var(--mainblue)');
    // $(this).siblings().hover(function () {
    //     $(this).siblings().css('background-color', 'var(--mainblue)').css('color', '#ffffff');
    // });
});




//--------------專欄切換------------

$(".s_index_column_DogBtn").click(function () {
    $(".s_index_column_DogArea").css('display', 'flex');
    $(".s_index_column_CatArea").css('display', 'none');
    $(this).css('background-color', 'var(--mainblue)').css('color', '#ffffff').siblings().css('background-color', '#ffffff').css('color', 'var(--mainblue)')
});
$(".s_index_column_CatBtn").click(function () {
    // $(".s_index_column_CatArea").css('visibility', 'visible');
    // $(".s_index_column_DogArea").css('visibility', 'hidden');
    $(".s_index_column_CatArea").css('display', 'flex');
    $(".s_index_column_DogArea").css('display', 'none');
    // $(".s_index_column_CatArea").show();
    // $(".s_index_column_DogArea").hide();
    $(this).css('background-color', 'var(--mainblue)').css('color', '#ffffff').siblings().css('background-color', '#ffffff').css('color', 'var(--mainblue)')
});








//-----------捐贈計數變色--------------
$(".s_donationCount_part").mouseenter(function () {
    $(this).children(".s_donationCount_Donate_icon").css('fill', 'var(--mainblue)');
    $(this).children(".s_donationCount_para").css('color', 'var(--mainblue)');
});
$(".s_donationCount_part").mouseleave(function () {
    $(".s_donationCount_Donate_icon").css('fill', 'var(--mainpink)');
    $(".s_donationCount_para").css('color', 'var(--mainpink)');
});

//-----------捐贈計數跑數字--------------

$(window).scroll(function () {
    // console.log('scollTop', $(this).scrollTop());

    let windowScrollTop = $(this).scrollTop();

    //----手機版------
    // if (windowScrollTop > 5000) {
    //     let nowNumber01 = 0;
    //     setInterval(() => {
    //         if (nowNumber01 < 9754) {
    //             nowNumber01 += parseInt(9754 / 30);
    //             $('.s_donationCount_numberRun01').text(nowNumber01);
    //         }
    //         else {
    //             $('.s_donationCount_numberRun01').text('9,754');
    //         }

    //     }, 50);
    //     let nowNumber02 = 0;
    //     setInterval(() => {
    //         if (nowNumber02 < 5070) {
    //             nowNumber02 += parseInt(5070 / 20);
    //             $('.s_donationCount_numberRun02').text(nowNumber02);
    //         }
    //         else {
    //             $('.s_donationCount_numberRun02').text('5,070');
    //         }

    //     }, 50);
    //     let nowNumber03 = 0;
    //     setInterval(() => {
    //         if (nowNumber03 < 8692) {
    //             nowNumber03 += parseInt(8692 / 20);
    //             $('.s_donationCount_numberRun03').text(nowNumber03);
    //         }
    //         else {
    //             $('.s_donationCount_numberRun03').text('8,692');
    //         }

    //     }, 50);
    //     let nowNumber04 = 0;
    //     setInterval(() => {
    //         if (nowNumber04 < 4684) {
    //             nowNumber04 += parseInt(4684 / 30);
    //             $('.s_donationCount_numberRun04').text(nowNumber04);
    //         }
    //         else {
    //             $('.s_donationCount_numberRun04').text('4,684');
    //         }

    //     }, 50);

    // } else {

    // }

    //-----電腦版--------

    if (windowScrollTop > 6700) {
        let nowNumber01 = 0;
        setInterval(() => {
            if (nowNumber01 < 9754) {
                nowNumber01 += parseInt(9754 / 20);
                $('.s_donationCount_numberRun01').text(nowNumber01);
            }
            else {
                $('.s_donationCount_numberRun01').text('9,754');
            }

        }, 50);
        let nowNumber02 = 0;
        setInterval(() => {
            if (nowNumber02 < 5070) {
                nowNumber02 += parseInt(5070 / 20);
                $('.s_donationCount_numberRun02').text(nowNumber02);
            }
            else {
                $('.s_donationCount_numberRun02').text('5,070');
            }

        }, 50);
        let nowNumber03 = 0;
        setInterval(() => {
            if (nowNumber03 < 8692) {
                nowNumber03 += parseInt(8692 / 20);
                $('.s_donationCount_numberRun03').text(nowNumber03);
            }
            else {
                $('.s_donationCount_numberRun03').text('8,692');
            }

        }, 50);
        let nowNumber04 = 0;
        setInterval(() => {
            if (nowNumber04 < 4684) {
                nowNumber04 += parseInt(4684 / 30);
                $('.s_donationCount_numberRun04').text(nowNumber04);
            }
            else {
                $('.s_donationCount_numberRun04').text('4,684');
            }

        }, 50);

    } else {

    }
});