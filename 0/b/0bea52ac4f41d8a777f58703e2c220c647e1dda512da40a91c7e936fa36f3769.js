
$(function() {

  //リーチマイケル続きを読む
  const itemHeights = [];
  let returnHeight; 
  $(".dictation_reach-Michael__body").each(function () {
    const thisHeight = $(this).height(); 
    itemHeights.push(thisHeight); 
    $(this).addClass("is-hide"); 
    returnHeight = $(this).height(); 
  });

  $(".js-acordion_btn").click(function () {
    // ボタンをクリックしたら
      const index = $(this).index(".js-accordion_btn");
      const addHeight = itemHeights; 
      $(this)
        .addClass("is-end")
        .next()
        .css({ height: "auto" })
  });

  //プロフィールposition モーダル
  $(".js-position").on("click",function(){
    $(".is-position").fadeIn(300);
  });
  $(".potion-modal__content__headding_btn").on("click",function(){
    $(".is-position").fadeOut(300);
  });
  
  //タブ機能
  $(document).on('click', '.js-changetab li',event => {
    const _$this = $(event.currentTarget);
    _$this.siblings().removeClass('active');
    _$this.addClass('active');
    let id = '#is-' + _$this.attr('id');
    console.log(id)
    _$this.parents('.archive-schedule__tab').next('.archive-schedule__content').find('.archive-schedule__item').removeClass('active');
    _$this.parents('.archive-schedule__tab').next('.archive-schedule__content').find(id).addClass('active');
  });

});

