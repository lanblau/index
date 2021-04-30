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

let heart = document.getElementsByClassName('s_heart-button')
for (let h of heart) {
    h.addEventListener("click", function (e) {
        // h.style.transform = "scale(1.2)";
        h.classList.toggle('s_heart_color');
        // console.log(h)
    });
}



$(".s_index_column_DogBtn").click(function () {
    $(".s_index_column_DogArea").css('display','flex');
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
