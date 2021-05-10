// let navTop = $('.nav').offset().top;


// $(window).scroll(function () {

//     let scrollTop = $(this).scrollTop();
//     console.log('navTop', navTop);
//     console.log('scrollTop', scrollTop);

//     if (scrollTop >= navTop) {
//         // nav fixed 
//         $('.nav').addClass('s_fixed');
//     }
//     else {
//         // nav unfixed 
//         $('.nav').removeClass('s_fixed');
//     }
// })

//--------影片控制----------
function onYouTubeIframeAPIReady() {
    var player;
    player = new YT.Player('YouTubeVideoPlayerAPI', {
        videoId: 'hBUItPpkOVU',   // YouTube 影片ID
        // width: '1080',            // 播放器寬度 (px)
        // height: '720',           // 播放器高度 (px)
        playerVars: {
            autoplay: 1,            // 自動播放影片
            controls: 0,            // 顯示播放器
            showinfo: 0,            // 隱藏影片標題
            modestbranding: 0,      // 隱藏YouTube Logo
            loop: 1,                // 重覆播放
            playlist: 'hBUItPpkOVU', // 當使用影片要重覆播放時，需再輸入YouTube 影片ID
            fs: 0,                  // 隱藏全螢幕按鈕
            cc_load_policty: 0,     // 隱藏字幕
            iv_load_policy: 3,      // 隱藏影片註解
            autohide: 0             // 影片播放時，隱藏影片控制列
        },
        events: {
            onReady: function (e) {
                e.target.mute();      //播放時靜音
                e.target.playVideo(); //強制播放(手機才會自動播放，但僅限於Android)
            }
        }
    });
}

//-------------每月主打carousel------------
// 宣告一個變數來儲存現在的頁數
// 作用域 Scope 全域變數
// 初始值為零
let page = 0;

$('.s_slider-dots li').hover(
    function () {
        // page=('.s_slider-dots li').hover的第幾項
        page = $(this).index();

        // console.log('hi', $(this));
        // .index()取得目前符合條件的選擇器是第幾個
        // console.log($(this).index());

        // ('.s_slider-dots li').hover後,.siblings()其他物件回復原本顏色
        $(this).css('background-color', 'var(--mainblue)').css('color', '#ffffff').siblings().css('color', 'var(--maindarkgray)').css('background-color', 'var(--mainyellow)');
        // $(this).find('.s_index_choice_PC_icon').css('fill', '#ffffff');
        // $(this).siblings().find('.s_index_choice_PC_icon').css('fill', 'var(--maindarkgray)');


        // $(this) 代名詞 = 被 hover 的 li=('.s_slider-dots li').hover這個狀態function

        // 'px'是字串, $(this).index()是hover到第幾項
        $('.s_img-wrap').css('left', $(this).index() * -1200 + 'px');
    })
// js es6 的 Function 寫法, 俗稱箭頭函式  setInterval(() => {}, interval);
// 每三秒 page = page + 1
setInterval(() => {
    page = page + 1;

    if (page >= 4) { page = 0; }

    $('.s_img-wrap').css('left', page * -1200 + 'px');
    // console.log('page = ', page);

    $('.s_slider-dots li').eq(page).css('background-color', 'var(--mainblue)').css('color', ' #ffffff').siblings().css('color', 'var(--maindarkgray)').css('background-color', 'var(--mainyellow)');
    // $('.slider - dots li').find('.s_index_choice_PC_icon').css('fill', '#ffffff').siblings().find('.s_index_choice_PC_icon').css('fill', 'var(--maindarkgray)');
    // $('.s_slider-dots li').find('.s_index_choice_PC_icon').css('fill', '#ffffff');
    // $('.s_slider-dots li').siblings().find('.s_index_choice_PC_icon').css('fill', 'var(--maindarkgray)');
}, 3000);





// --------------狗狗食物動畫---------------

$(window).scroll(function () {
    console.log('scollTop', $(this).scrollTop());

    let windowScrollTop = $(this).scrollTop();

    //手機板飼料
    if (windowScrollTop > 1100) {
        $(".s_dogFood05").css("opacity", "1").css("transform", "translateY(0px)");      
    } else {
        $(".s_dogFood05")
            .css("opacity", "0")
            .css("transform", "translateY(-120px)");       
    }
    //電腦版飼料
    if (windowScrollTop > 1600) {
        $(".s_dogFood01").css("opacity", "1").css("transform", "translateY(0px)");
        $(".s_dogFood02").css("opacity", "1").css("transform", "translateY(0px)");
    } else {
        $(".s_dogFood01")
            .css("opacity", "0")
            .css("transform", "translateY(-150px)");
        $(".s_dogFood02")
            .css("opacity", "0")
            .css("transform", "translateY(-150px)");
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
            .css("transform", "translateY(-150px)");
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
// ---------手機板 狗------------

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


// ---------手機板貓貓貓------------

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




















  // $(function () {
  //   var len = 30; // 超過50個字以"..."取代
  //   $(".s_index_column_index_dog_para").each(function (i) {
  //     if ($(this).text().length > len) {
  //       $(this).attr("title", $(this).text());
  //       var text = $(this).text().substring(0, len - 1) + "...";
  //       $(this).text(text);
  //     }
  //   });
  // });
