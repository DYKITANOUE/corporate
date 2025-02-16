//swiper
const swiper = new Swiper('.swiper', {
    // Optional parameters
    loop: true,
    // loopAdditionalSlides:1,
    clickable: true,
    slidesPerView: '2.5',
    spaceBetween: 40,
    grabCursor: true,
      // If we need pagination
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
    breakpoints: {
      600: {
        slidesPerView: 2,
      },
      1280: {
        slidesPerView: 3,
        spaceBetween: 40,
      }
    },
  
  });

  //qa-box__qがクリックされた時
  jQuery('.qa-box__q').click(function() {
      jQuery(this).next().slideToggle();
              //↑クリックされた次のエリアを開く＝.qa-box__a
      jQuery(this).children('.qa-box__icon').toggleClass('is-open');
              //↑クリックされた.qa-box__iconにis-openが付与される
              //開いた時にアイコンが＋➡－に変わる
    })
  jQuery('.qa-box__q-item2').click(function() {
      jQuery(this).next().slideToggle();
              //↑クリックされた次のエリアを開く＝.qa-box__a
      jQuery(this).children('.qa-box__icon').toggleClass('is-open');
              //↑クリックされた.qa-box__iconにis-openが付与される
              //開いた時にアイコンが＋➡－に変わる
    })

    //ハンバーガーメニュー
    jQuery('.drawer-icon').on ('click', function(e) {
      e.preventDefault(); //aタグ・ボタンの操作を無効化させる
    
      jQuery('.drawer-icon').toggleClass('is-active');
      jQuery('.drawer-content').toggleClass('is-active');
      jQuery('.drawer-background').toggleClass('is-active');    
    
      return false; //関連としてつけておく
    
    });

   //100以上　スクロールしたらTOPへ戻るボタンが表示される
jQuery(window).on("scroll", function() {
  if (jQuery(this).scrollTop() > 100) {
    jQuery('.to-top').addClass('is-show');
  } else {
    jQuery('.to-top').removeCladd('is-show');
  }
});