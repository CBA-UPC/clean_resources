var state = {};
var title;
var promo_text_1;
var promo_text_2;
var promo_text_3;
var rtb;
var rtb_dos;
var cta_text;
var text_bubble_2;
var bubble_position;
var animation_duration;

var loop;

var contador = 0;

(function () {

  // Create timeline
  var tl = new TimelineMax();
  TweenMax.defaultOverwrite = "all"

  // Provide timeline to Hoxton
  hoxton.timeline = tl;

  // Define the function that should fire when the Ad Server is ready and assets are preloaded
  hoxton.isInitialized = preInit;

  var height;
  var width;

  function preInit() {
    height = document.body.clientHeight;
    width = document.body.clientWidth;

    if (width <= 310 & height <= 260 & height >= 200) {
      init();
    } else if (width <= 310 & height <= 610) {
      init();
    } else if (width <= 330 & height <= 490) {
      init();
    } else if (width <= 738 & height <= 100) {
      init();
    } else if (width <= 980 & height <= 260) {
      init();
    } else if (width <= 330 & height <= 150) {
      init();
    } else {
      setTimeout( 500);
    }
  }

  function init() {
    state = hoxton.getState();
    title = state.title;
    promo_text_1 = state.promo_text_1;
    promo_text_2 = state.promo_text_2;
    promo_text_3 = state.promo_text_3;
    rtb = state.rtb;
    rtb_dos = state.rtb_dos;
    cta_text = state.cta_text;
    text_bubble_2 = state.text_bubble_2;
    bubble_position = state.bubble_position;
    animation_duration = state.animation_duration;

    for (var item in state) {
      Creative.reWriteText(item);
    }

    addListeners();
    resetElements();
    contador++;

    if (contador == 1) {
      if (width <= 320 & height <= 300 & height >= 200) {
        animation_3frames.init();
      } else if (width >= 700 & width <= 750) {
        animation_extraframe.init();
      } else if (width <= 330 & height <= 150) {
        animation_small.init();
      } else {
        animation_2frames.init();
      }
    }
  }

  // ADD EXIT 
  function addListeners() {}

  Creative.reWriteText = function (item) {

    if (item.type === "text") {
      if (item.name == "title") {
        title = item.value
        title = title.replace('<light>', '<span style="font-family:IberPangeaText-Light;">');
        title = title.replace('</light>', '</span>');
        title = title.replace('<regular>', '<span style="font-family:IberPangeaText-Regular;">');
        title = title.replace('</regular>', '</span>');
        title = title.replace('<smbold>', '<span style="font-family:IberPangeaText-SmBold;">');
        title = title.replace('</smbold>', '</span>');
        title = title.replace('<bold>', '<span style="font-family:IberPangeaText-Bold;">');
        title = title.replace('</bold>', '</span>');
        id("title").innerHTML = title;
      } else if (item.name == "promo_text_1") {
        promo_text_1 = item.value
        promo_text_1 = promo_text_1.replace('<light>', '<span style="font-family:IberPangeaText-Light;">');
        promo_text_1 = promo_text_1.replace('</light>', '</span>');
        promo_text_1 = promo_text_1.replace('<medium>', '<span style="font-family:IberPangeaText-Medium;">');
        promo_text_1 = promo_text_1.replace('</medium>', '</span>');
        promo_text_1 = promo_text_1.replace('<smbold>', '<span style="font-family:IberPangeaText-SmBold;">');
        promo_text_1 = promo_text_1.replace('</smbold>', '</span>');
        promo_text_1 = promo_text_1.replace('<bold>', '<span style="font-family:IberPangeaText-Bold;">');
        promo_text_1 = promo_text_1.replace('</bold>', '</span>');
        id("promo_text_1").innerHTML = promo_text_1;
      } else if (item.name == "promo_text_2") {
        promo_text_2 = item.value
        promo_text_2 = promo_text_2.replace('<light>', '<span style="font-family:IberPangeaText-Light;">');
        promo_text_2 = promo_text_2.replace('</light>', '</span>');
        promo_text_2 = promo_text_2.replace('<regular>', '<span style="font-family:IberPangeaText-Regular;">');
        promo_text_2 = promo_text_2.replace('</regular>', '</span>');
        promo_text_2 = promo_text_2.replace('<medium>', '<span style="font-family:IberPangeaText-Medium;">');
        promo_text_2 = promo_text_2.replace('</medium>', '</span>');
        promo_text_2 = promo_text_2.replace('<smbold>', '<span style="font-family:IberPangeaText-SmBold;">');
        promo_text_2 = promo_text_2.replace('</smbold>', '</span>');
        id("promo_text_2").innerHTML = promo_text_2;
      } else if (item.name == "promo_text_3") {
        promo_text_3 = item.value
        promo_text_3 = promo_text_3.replace('<light>', '<span style="font-family:IberPangeaText-Light;">');
        promo_text_3 = promo_text_3.replace('</light>', '</span>');
        promo_text_3 = promo_text_3.replace('<medium>', '<span style="font-family:IberPangeaText-Medium;">');
        promo_text_3 = promo_text_3.replace('</medium>', '</span>');
        promo_text_3 = promo_text_3.replace('<smbold>', '<span style="font-family:IberPangeaText-SmBold;">');
        promo_text_3 = promo_text_3.replace('</smbold>', '</span>');
        promo_text_3 = promo_text_3.replace('<bold>', '<span style="font-family:IberPangeaText-Bold;">');
        promo_text_3 = promo_text_3.replace('</bold>', '</span>');
        id("promo_text_3").innerHTML = promo_text_3;
      } else if (item.name == "rtb") {
        rtb = item.value
        rtb = rtb.replace('<light>', '<span style="font-family:IberPangeaText-Light;">');
        rtb = rtb.replace('</light>', '</span>');
        rtb = rtb.replace('<medium>', '<span style="font-family:IberPangeaText-Medium;">');
        rtb = rtb.replace('</medium>', '</span>');
        rtb = rtb.replace('<smbold>', '<span style="font-family:IberPangeaText-SmBold;">');
        rtb = rtb.replace('</smbold>', '</span>');
        rtb = rtb.replace('<bold>', '<span style="font-family:IberPangeaText-Bold;">');
        rtb = rtb.replace('</bold>', '</span>');
        id("rtb").innerHTML = rtb;
      } else if (item.name == "rtb_dos") {
        rtb_dos = item.value
        rtb_dos = rtb_dos.replace('<light>', '<span style="font-family:IberPangeaText-Light;">');
        rtb_dos = rtb_dos.replace('</light>', '</span>');
        rtb_dos = rtb_dos.replace('<medium>', '<span style="font-family:IberPangeaText-Medium;">');
        rtb_dos = rtb_dos.replace('</medium>', '</span>');
        rtb_dos = rtb_dos.replace('<smbold>', '<span style="font-family:IberPangeaText-SmBold;">');
        rtb_dos = rtb_dos.replace('</smbold>', '</span>');
        rtb_dos = rtb_dos.replace('<bold>', '<span style="font-family:IberPangeaText-Bold;">');
        rtb_dos = rtb_dos.replace('</bold>', '</span>');
        id("rtb_dos").innerHTML = rtb_dos;
      } else if (item.name == "text_bubble_2") {
        text_bubble_2 = item.value
        text_bubble_2 = text_bubble_2.replace('<light>', '<span style="font-family:IberPangeaText-Light;">');
        text_bubble_2 = text_bubble_2.replace('</light>', '</span>');
        text_bubble_2 = text_bubble_2.replace('<regular>', '<span style="font-family:IberPangeaText-Regular;">');
        text_bubble_2 = text_bubble_2.replace('</regular>', '</span>');
        text_bubble_2 = text_bubble_2.replace('<smbold>', '<span style="font-family:IberPangeaText-SmBold;">');
        text_bubble_2 = text_bubble_2.replace('</smbold>', '</span>');
        text_bubble_2 = text_bubble_2.replace('<bold>', '<span style="font-family:IberPangeaText-Bold;">');
        text_bubble_2 = text_bubble_2.replace('</bold>', '</span>');
        id("text_bubble_2").innerHTML = text_bubble_2;
      } else if (item.name == "cta_text") {
        cta_text = item.value
        cta_text = cta_text.replace('<regular>', '<span style="font-family:IberPangeaText-Regular;">');
        cta_text = cta_text.replace('</regular>', '</span>');
        cta_text = cta_text.replace('<medium>', '<span style="font-family:IberPangeaText-Medium;">');
        cta_text = cta_text.replace('</medium>', '</span>');
        cta_text = cta_text.replace('<smbold>', '<span style="font-family:IberPangeaText-SmBold;">');
        cta_text = cta_text.replace('</smbold>', '</span>');
        cta_text = cta_text.replace('<bold>', '<span style="font-family:IberPangeaText-Bold;">');
        cta_text = cta_text.replace('</bold>', '</span>');
        id("cta_text").innerHTML = cta_text;
      } else if (item.name == "animation_duration") {
        animation_duration = item.value;
        if (animation_duration == "amazon") {
          loop = 0;
        } else if (animation_duration == "dv360") {
          loop = 1;
        }
      }
    } else {
      title = title.replace('<light>', '<span style="font-family:IberPangeaText-Light;">');
      title = title.replace('</light>', '</span>');
      title = title.replace('<regular>', '<span style="font-family:IberPangeaText-Regular;">');
      title = title.replace('</regular>', '</span>');
      title = title.replace('<smbold>', '<span style="font-family:IberPangeaText-SmBold;">');
      title = title.replace('</smbold>', '</span>');
      title = title.replace('<bold>', '<span style="font-family:IberPangeaText-Bold;">');
      title = title.replace('</bold>', '</span>');
      id("title").innerHTML = title;

      promo_text_1 = promo_text_1.replace('<light>', '<span style="font-family:IberPangeaText-Light;">');
      promo_text_1 = promo_text_1.replace('</light>', '</span>');
      promo_text_1 = promo_text_1.replace('<medium>', '<span style="font-family:IberPangeaText-Medium;">');
      promo_text_1 = promo_text_1.replace('</medium>', '</span>');
      promo_text_1 = promo_text_1.replace('<smbold>', '<span style="font-family:IberPangeaText-SmBold;">');
      promo_text_1 = promo_text_1.replace('</smbold>', '</span>');
      promo_text_1 = promo_text_1.replace('<bold>', '<span style="font-family:IberPangeaText-Bold;">');
      promo_text_1 = promo_text_1.replace('</bold>', '</span>');
      id("promo_text_1").innerHTML = promo_text_1;

      promo_text_2 = promo_text_2.replace('<light>', '<span style="font-family:IberPangeaText-Light;">');
      promo_text_2 = promo_text_2.replace('</light>', '</span>');
      promo_text_2 = promo_text_2.replace('<regular>', '<span style="font-family:IberPangeaText-Regular;">');
      promo_text_2 = promo_text_2.replace('</regular>', '</span>');
      promo_text_2 = promo_text_2.replace('<medium>', '<span style="font-family:IberPangeaText-Medium;">');
      promo_text_2 = promo_text_2.replace('</medium>', '</span>');
      promo_text_2 = promo_text_2.replace('<smbold>', '<span style="font-family:IberPangeaText-SmBold;">');
      promo_text_2 = promo_text_2.replace('</smbold>', '</span>');
      id("promo_text_2").innerHTML = promo_text_2;

      promo_text_3 = promo_text_3.replace('<light>', '<span style="font-family:IberPangeaText-Light;">');
      promo_text_3 = promo_text_3.replace('</light>', '</span>');
      promo_text_3 = promo_text_3.replace('<medium>', '<span style="font-family:IberPangeaText-Medium;">');
      promo_text_3 = promo_text_3.replace('</medium>', '</span>');
      promo_text_3 = promo_text_3.replace('<smbold>', '<span style="font-family:IberPangeaText-SmBold;">');
      promo_text_3 = promo_text_3.replace('</smbold>', '</span>');
      promo_text_3 = promo_text_3.replace('<bold>', '<span style="font-family:IberPangeaText-Bold;">');
      promo_text_3 = promo_text_3.replace('</bold>', '</span>');
      id("promo_text_3").innerHTML = promo_text_3;

      rtb = rtb.replace('<light>', '<span style="font-family:IberPangeaText-Light;">');
      rtb = rtb.replace('</light>', '</span>');
      rtb = rtb.replace('<medium>', '<span style="font-family:IberPangeaText-Medium;">');
      rtb = rtb.replace('</medium>', '</span>');
      rtb = rtb.replace('<smbold>', '<span style="font-family:IberPangeaText-SmBold;">');
      rtb = rtb.replace('</smbold>', '</span>');
      rtb = rtb.replace('<bold>', '<span style="font-family:IberPangeaText-Bold;">');
      rtb = rtb.replace('</bold>', '</span>');
      id("rtb").innerHTML = rtb;

      rtb_dos = rtb_dos.replace('<light>', '<span style="font-family:IberPangeaText-Light;">');
      rtb_dos = rtb_dos.replace('</light>', '</span>');
      rtb_dos = rtb_dos.replace('<medium>', '<span style="font-family:IberPangeaText-Medium;">');
      rtb_dos = rtb_dos.replace('</medium>', '</span>');
      rtb_dos = rtb_dos.replace('<smbold>', '<span style="font-family:IberPangeaText-SmBold;">');
      rtb_dos = rtb_dos.replace('</smbold>', '</span>');
      rtb_dos = rtb_dos.replace('<bold>', '<span style="font-family:IberPangeaText-Bold;">');
      rtb_dos = rtb_dos.replace('</bold>', '</span>');
      id("rtb_dos").innerHTML = rtb_dos;

      text_bubble_2 = text_bubble_2.replace('<light>', '<span style="font-family:IberPangeaText-Light;">');
      text_bubble_2 = text_bubble_2.replace('</light>', '</span>');
      text_bubble_2 = text_bubble_2.replace('<regular>', '<span style="font-family:IberPangeaText-Regular;">');
      text_bubble_2 = text_bubble_2.replace('</regular>', '</span>');
      text_bubble_2 = text_bubble_2.replace('<smbold>', '<span style="font-family:IberPangeaText-SmBold;">');
      text_bubble_2 = text_bubble_2.replace('</smbold>', '</span>');
      text_bubble_2 = text_bubble_2.replace('<bold>', '<span style="font-family:IberPangeaText-Bold;">');
      text_bubble_2 = text_bubble_2.replace('</bold>', '</span>');
      id("text_bubble_2").innerHTML = text_bubble_2;

      cta_text = cta_text.replace('<regular>', '<span style="font-family:IberPangeaText-Regular;">');
      cta_text = cta_text.replace('</regular>', '</span>');
      cta_text = cta_text.replace('<medium>', '<span style="font-family:IberPangeaText-Medium;">');
      cta_text = cta_text.replace('</medium>', '</span>');
      cta_text = cta_text.replace('<smbold>', '<span style="font-family:IberPangeaText-SmBold;">');
      cta_text = cta_text.replace('</smbold>', '</span>');
      cta_text = cta_text.replace('<bold>', '<span style="font-family:IberPangeaText-Bold;">');
      cta_text = cta_text.replace('</bold>', '</span>');
      id("cta_text").innerHTML = cta_text;

      if (animation_duration == "amazon") {
        loop = 0;
      } else if (animation_duration == "dv360") {
        loop = 1;
      }
    }
  }

  // START ANIMATION, MAIN TIMELINE
  var animation_3frames = {
    init: function () {

      tl.repeat(loop);

      tl.add("start");
      /*RESET*/
      tl.to("#title", 0, {
        ease: Power2.ease,
        opacity: 0
      });
      tl.to("#blue_bubble", 0, {
        ease: Power2.ease,
        scale: 0
      });
      tl.to("#green_bubble", 0, {
        ease: Power2.ease,
        scale: 0
      });
      tl.to("#orange_bubble", 0, {
        ease: Power2.ease,
        scale: 0
      });
      tl.to("#promo_group", 0, {
        ease: Power2.ease,
        opacity: 0
      });
      tl.to("#orange_bubble_2", 0, {
        ease: Power2.ease,
        scale: 0
      });
      tl.to("#text_bubble_2", 0, {
        ease: Power2.ease,
        opacity: 0
      });
      tl.to("#green_rect", 0, {
        ease: Power2.ease,
        opacity: 0
      });
      tl.to("#rtb", 0, {
        ease: Power2.ease,
        opacity: 0
      });
      tl.to("#cta_container", 0, {
        ease: Power2.ease,
        opacity: 0
      });
      tl.to("#res", 0, {
        ease: Power2.ease,
        opacity: 1
      });
      /*RESET*/

      /*START*/
      tl.to("#res", 0, {
        ease: Power2.ease,
        opacity: 0,
        delay: 0
      });
      tl.to("#title", 0.4, {
        ease: Power2.ease,
        opacity: 1,
        delay: 0.1
      });
      tl.to("#blue_bubble", 0.5, {
        ease: Back.easeOut.config(1.2),
        scale: 1,
        delay: 0.3
      });
      tl.to("#green_bubble", 0.5, {
        ease: Back.easeOut.config(1.2),
        scale: 1,
        delay: -0.3
      });
      tl.to("#orange_bubble", 0.5, {
        ease: Back.easeOut.config(1.2),
        scale: 1,
        delay: -0.3
      });
      tl.to("#promo_group", 0.4, {
        ease: Power2.ease,
        opacity: 1,
        delay: -0.1
      });

      tl.to("#title", 0.1, {
        ease: Power2.ease,
        opacity: 0,
        delay: 4
      });
      tl.to("#blue_bubble", 0.1, {
        ease: Power2.ease,
        opacity: 0,
        delay: -0.1
      });
      tl.to("#green_bubble", 0.1, {
        ease: Power2.ease,
        opacity: 0,
        delay: -0.1
      });
      tl.to("#orange_bubble", 0.1, {
        ease: Power2.ease,
        opacity: 0,
        delay: -0.1
      });
      tl.to("#promo_group", 0.1, {
        ease: Power2.ease,
        opacity: 0,
        delay: -0.1
      });
      tl.to("#background", 0.1, {
        ease: Power2.ease,
        opacity: 0,
        delay: -0.1
      });

      tl.to("#green_rect", 0.4, {
        ease: Power2.ease,
        opacity: 1,
        delay: 0.1
      });
      tl.to("#orange_bubble_2", 0.5, {
        ease: Back.easeOut.config(1.2),
        scale: 1,
        delay: 0.1
      });
      tl.to("#text_bubble_2", 0.4, {
        ease: Power2.ease,
        opacity: 1,
        delay: -0.1
      });
      tl.to("#rtb", 0.4, {
        ease: Power2.ease,
        opacity: 1,
        delay: 0.1
      });

      tl.to("#rtb", 0.1, {
        ease: Power2.ease,
        opacity: 0,
        delay: 4
      });
      tl.to("#cta_container", 0.4, {
        ease: Power2.ease,
        opacity: 1,
        delay: 0.1
      });

      tl.to("#cta_container", 0, {
        ease: Power2.ease,
        opacity: 1,
        delay: 2
      });
      /*END*/

      console.log(tl.totalDuration());
    }
  }

  var animation_2frames = {
    init: function () {

      tl.repeat(loop);

      tl.add("start");
      /*RESET*/
      tl.to("#title", 0, {
        ease: Power2.ease,
        opacity: 0
      });
      tl.to("#blue_bubble", 0, {
        ease: Power2.ease,
        scale: 0
      });
      tl.to("#green_bubble", 0, {
        ease: Power2.ease,
        scale: 0
      });
      tl.to("#orange_bubble", 0, {
        ease: Power2.ease,
        scale: 0
      });
      tl.to("#promo_group", 0, {
        ease: Power2.ease,
        opacity: 0
      });
      tl.to("#orange_bubble_2", 0, {
        ease: Power2.ease,
        scale: 0
      });
      tl.to("#blue_bubble_2", 0, {
        ease: Power2.ease,
        scale: 0
      });
      tl.to("#text_bubble_2", 0, {
        ease: Power2.ease,
        opacity: 0
      });
      tl.to("#green_rect", 0, {
        ease: Power2.ease,
        opacity: 0
      });
      tl.to("#rtb", 0, {
        ease: Power2.ease,
        opacity: 0
      });
      tl.to("#cta_container", 0, {
        ease: Power2.ease,
        opacity: 0
      });
      tl.to("#res", 0, {
        ease: Power2.ease,
        opacity: 1
      });
      /*RESET*/

      /*START*/
      tl.to("#res", 0, {
        ease: Power2.ease,
        opacity: 0,
        delay: 0
      });
      tl.to("#title", 0.4, {
        ease: Power2.ease,
        opacity: 1,
        delay: 0.1
      });
      tl.to("#blue_bubble", 0.5, {
        ease: Back.easeOut.config(1.2),
        scale: 1,
        delay: 0.3
      });
      tl.to("#green_bubble", 0.5, {
        ease: Back.easeOut.config(1.2),
        scale: 1,
        delay: -0.3
      });
      tl.to("#orange_bubble", 0.5, {
        ease: Back.easeOut.config(1.2),
        scale: 1,
        delay: -0.3
      });
      tl.to("#promo_group", 0.4, {
        ease: Power2.ease,
        opacity: 1,
        delay: -0.1
      });

      tl.to("#title", 0.1, {
        ease: Power2.ease,
        opacity: 0,
        delay: 4
      });
      tl.to("#blue_bubble", 0.1, {
        ease: Power2.ease,
        opacity: 0,
        delay: -0.1
      });
      tl.to("#green_bubble", 0.1, {
        ease: Power2.ease,
        opacity: 0,
        delay: -0.1
      });
      tl.to("#orange_bubble", 0.1, {
        ease: Power2.ease,
        opacity: 0,
        delay: -0.1
      });
      tl.to("#promo_group", 0.1, {
        ease: Power2.ease,
        opacity: 0,
        delay: -0.1
      });
      tl.to("#background", 0.1, {
        ease: Power2.ease,
        opacity: 0,
        delay: -0.1
      });

      tl.to("#green_rect", 0.4, {
        ease: Power2.ease,
        opacity: 1,
        delay: 0.1
      });
      tl.to("#orange_bubble_2", 0.5, {
        ease: Back.easeOut.config(1.2),
        scale: 1,
        delay: 0.1
      });
      tl.to("#text_bubble_2", 0.4, {
        ease: Power2.ease,
        opacity: 1,
        delay: -0.1
      });
      tl.to("#rtb", 0.4, {
        ease: Power2.ease,
        opacity: 1,
        delay: 0.1
      });
      tl.to("#cta_container", 0.4, {
        ease: Power2.ease,
        opacity: 1,
        delay: 0.4
      });
      tl.to("#blue_bubble_2", 0.5, {
        ease: Back.easeOut.config(1.2),
        scale: 1,
        delay: 0.1
      });

      tl.to("#cta_container", 0, {
        ease: Power2.ease,
        opacity: 1,
        delay: 4
      });
      /*END*/

      console.log(tl.totalDuration());
    }
  }

  var animation_extraframe = {
    init: function () {

      tl.repeat(loop);

      tl.add("start");
      /*RESET*/
      tl.to("#title", 0, {
        ease: Power2.ease,
        opacity: 0
      });
      tl.to("#blue_bubble", 0, {
        ease: Power2.ease,
        scale: 0
      });
      tl.to("#green_bubble", 0, {
        ease: Power2.ease,
        scale: 0
      });
      tl.to("#orange_bubble", 0, {
        ease: Power2.ease,
        scale: 0
      });
      tl.to("#promo_group", 0, {
        ease: Power2.ease,
        opacity: 0
      });
      tl.to("#orange_bubble_2", 0, {
        ease: Power2.ease,
        scale: 0
      });
      tl.to("#text_bubble_2", 0, {
        ease: Power2.ease,
        opacity: 0
      });
      tl.to("#green_rect", 0, {
        ease: Power2.ease,
        opacity: 0
      });
      tl.to("#rtb", 0, {
        ease: Power2.ease,
        opacity: 0
      });
      tl.to("#rtb_dos", 0, {
        ease: Power2.ease,
        opacity: 0
      });
      tl.to("#cta_container", 0, {
        ease: Power2.ease,
        opacity: 0
      });
      tl.to("#res", 0, {
        ease: Power2.ease,
        opacity: 1
      });
      /*RESET*/

      /*START*/
      tl.to("#res", 0, {
        ease: Power2.ease,
        opacity: 0,
        delay: 0
      });
      tl.to("#title", 0.4, {
        ease: Power2.ease,
        opacity: 1,
        delay: 0.1
      });
      tl.to("#blue_bubble", 0.5, {
        ease: Back.easeOut.config(1.2),
        scale: 1,
        delay: 0.3
      });
      tl.to("#green_bubble", 0.5, {
        ease: Back.easeOut.config(1.2),
        scale: 1,
        delay: -0.3
      });
      tl.to("#orange_bubble", 0.5, {
        ease: Back.easeOut.config(1.2),
        scale: 1,
        delay: -0.3
      });
      tl.to("#promo_group", 0.4, {
        ease: Power2.ease,
        opacity: 1,
        delay: -0.1
      });

      tl.to("#title", 0.1, {
        ease: Power2.ease,
        opacity: 0,
        delay: 4
      });
      tl.to("#blue_bubble", 0.1, {
        ease: Power2.ease,
        opacity: 0,
        delay: -0.1
      });
      tl.to("#green_bubble", 0.1, {
        ease: Power2.ease,
        opacity: 0,
        delay: -0.1
      });
      tl.to("#orange_bubble", 0.1, {
        ease: Power2.ease,
        opacity: 0,
        delay: -0.1
      });
      tl.to("#promo_group", 0.1, {
        ease: Power2.ease,
        opacity: 0,
        delay: -0.1
      });
      tl.to("#background", 0.1, {
        ease: Power2.ease,
        opacity: 0,
        delay: -0.1
      });

      tl.to("#green_rect", 0.4, {
        ease: Power2.ease,
        opacity: 1,
        delay: 0.1
      });
      tl.to("#orange_bubble_2", 0.5, {
        ease: Back.easeOut.config(1.2),
        scale: 1,
        delay: 0.1
      });
      tl.to("#text_bubble_2", 0.4, {
        ease: Power2.ease,
        opacity: 1,
        delay: -0.1
      });
      tl.to("#rtb", 0.4, {
        ease: Power2.ease,
        opacity: 1,
        delay: 0.1
      });
	  tl.to("#rtb", 0.1, {
        ease: Power2.ease,
        opacity: 0,
        delay: 2
      });
      tl.to("#rtb_dos", 0.4, {
        ease: Power2.ease,
        opacity: 1,
        delay: 0.1
      });
      tl.to("#cta_container", 0.4, {
        ease: Power2.ease,
        opacity: 1,
        delay: 0.4
      });

      tl.to("#cta_container", 0, {
        ease: Power2.ease,
        opacity: 1,
        delay: 2
      });
      /*END*/

      console.log(tl.totalDuration());
    }
  }
  
  var animation_small = {
    init: function () {
      
      tl.repeat(0);
      
			tl.add("start");
      /*RESET*/
      tl.to("#title", 0, {ease: Power2.ease, opacity:0});
      tl.to("#blue_bubble", 0, {ease: Power2.ease, scale:0});
      tl.to("#green_bubble", 0, {ease: Power2.ease, scale:0});
      tl.to("#orange_bubble", 0, {ease: Power2.ease, scale:0});
      tl.to("#promo_group", 0, {ease: Power2.ease, opacity:0});
      tl.to("#orange_bubble_2", 0, {ease: Power2.ease, scale:0});
      tl.to("#text_bubble_2", 0, {ease: Power2.ease, opacity:0});
      tl.to("#green_rect", 0, {ease: Power2.ease, opacity:0});
      tl.to("#rtb", 0, {ease: Power2.ease, opacity:0});
      tl.to("#rtb_dos", 0, {ease: Power2.ease, opacity:0});
      tl.to("#cta_container", 0, {ease: Power2.ease, opacity:0});
      tl.to("#res", 0, {ease: Power2.ease, opacity:1});
      tl.to("#logos", 0, {ease: Power2.ease, opacity:0});
      /*RESET*/
      
      /*START*/
      tl.to("#res", 0, {ease: Power2.ease, opacity:0, delay:0});
      tl.to("#title", 0.3, {ease: Power2.ease, opacity:1, delay:0.1});
      
      tl.to("#title", 0.1, {ease: Power2.ease, opacity:0, delay:2.5});
      tl.to("#blue_bubble", 0.5, { ease: Back.easeOut.config(1.2), scale: 1, delay:-0.4});
      tl.to("#green_bubble", 0.5, { ease: Back.easeOut.config(1.2), scale: 1, delay:-0.3});
      tl.to("#orange_bubble", 0.5, { ease: Back.easeOut.config(1.2), scale: 1, delay:-0.3});
      tl.to("#promo_group", 0.3, {ease: Power2.ease, opacity:1, delay:-0.1});
      
      tl.to("#title", 0.1, {ease: Power2.ease, opacity:0, delay:3.5});
      tl.to("#blue_bubble", 0.1, {ease: Power2.ease, opacity:0, delay:-0.1});
      tl.to("#green_bubble", 0.1, {ease: Power2.ease, opacity:0, delay:-0.1});
      tl.to("#orange_bubble", 0.1, {ease: Power2.ease, opacity:0, delay:-0.1});
      tl.to("#promo_group", 0.1, {ease: Power2.ease, opacity:0, delay:-0.1});
      tl.to("#background", 0.1, {ease: Power2.ease, opacity:0, delay:-0.1});
      
      tl.to("#green_rect", 0.3, {ease: Power2.ease, opacity:1, delay:0.1});
      tl.to("#orange_bubble_2", 0.5, { ease: Back.easeOut.config(1.2), scale: 1, delay:0.1});
      tl.to("#text_bubble_2", 0.3, {ease: Power2.ease, opacity:1, delay:-0.1});
      tl.to("#rtb", 0.3, {ease: Power2.ease, opacity:1, delay:0});
      
      tl.to("#rtb", 0.1, {ease: Power2.ease, opacity:0, delay:3});
      tl.to("#rtb_dos", 0.3, {ease: Power2.ease, opacity:1, delay:0});
      
      tl.to("#rtb_dos", 0.1, {ease: Power2.ease, opacity:0, delay:3});
      tl.to("#cta_container", 0.3, {ease: Power2.ease, opacity:1, delay:0.1});
      
      tl.to("#cta_container", 0.1, {ease: Power2.ease, opacity:0, delay:2});
      tl.to("#orange_bubble_2", 0.1, {ease: Power2.ease, opacity:0, delay:-0.1});
      tl.to("#text_bubble_2", 0.1, {ease: Power2.ease, opacity:0, delay:-0.1});
      tl.to("#green_rect", 0.1, {ease: Power2.ease, opacity:0, delay:-0.1});
      tl.to("#logos", 0.3, {ease: Power2.ease, opacity:1, delay:-0.1});
      
      tl.to("#logos", 0, {ease: Power2.ease, opacity:1, delay:1});
      /*END*/
      
      console.log(tl.totalDuration());
    }
  }

  function bgExitHandler() {}

  // Initial postion to elements
  
  // UTILS
  
  Creative.updateContent = function (item) {
    hoxton.setState(item);
    state = hoxton.getState();

    if (item.type === "text") {
      Creative.reWriteText(item);
    }
  }

})();
