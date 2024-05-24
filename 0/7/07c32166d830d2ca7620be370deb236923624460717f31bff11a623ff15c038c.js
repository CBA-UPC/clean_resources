
// タブ切り替え部分
$('.Opta-Tabs .Opta-Nav ul li').on('click',function(){
  var $wrap = $(this).closest('.Opta-Tabs');
  var index = $wrap.find('.Opta-Nav ul li').index(this);

  $wrap.find('.Opta-Nav ul li').removeClass('Opta-On');
  $(this).addClass('Opta-On')

  $wrap.find('.Opta-TabbedContent li').removeClass('Opta-On');
  $wrap.find('.Opta-TabbedContent li').eq(index).addClass('Opta-On')
  return false;
})

// フォーメーション
if($('.Opta-RugbyPitch')[0]){

  function setSize(targets){
  		    		console.log(targets.length);
    for( var i = 0 ; i < targets.length ; i++ )
    {

      var targetWidth = targets[i].clientWidth;
      var targetHeight = targetWidth * (420/635);
      targets[i].setAttribute('height',targetHeight);
    }
  }

  var targets = document.getElementsByClassName('Opta-Responsive-Svg');
  window.addEventListener( 'resize' , function(){
    setSize(targets);
  } );
 (){
    setSize(targets);
  } );

}


