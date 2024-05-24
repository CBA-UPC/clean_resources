(function(){
              
    //Variables
    container = document.getElementById('container');
    areaCT = document.getElementById('area_ct');
    
    tl = gsap.timeline({ id:"tl" });

    //Centrados con el nuevo GSAP
    if( document.querySelector('.centervh') ) gsap.set(".centervh",{left:"50%", top:"50%", yPercent:-50, yPercent:-50});
    if( document.querySelector('.centerv') ) gsap.set(".centerv",{ left:"50%", yPercent:-50});
    if( document.querySelector('.centerh') ) gsap.set(".centerh",{ top:"50%", yPercent:-50});
    

    /* Easing en variable */
    var power2_out = "power2.out";
    var power2_in = "power2.in";
    var back_out = "back.out";
    var none = "none";
    var move = 100;
    
    //Animación

    tl.from("#frame1 > .texto", {duration:1, x:-10, autoAlpha:0, stagger:0.5, ease: power2_out});
    tl.from("#precio1 div", { duration: 0.5, x: 20, autoAlpha: 0, stagger: 0.1, ease: back_out }, "-=0.2");

    tl.from("#frame2", {duration:0.6, autoAlpha:0, ease: power2_out}, "+=2");
    tl.from("#claim div", { duration: 0.5, y: 20, autoAlpha: 0, stagger: 0.1, ease: back_out }, "-=0.2");

    tl.to("#frame2", {duration:0.6,yPercent:-move,ease: power2_out}, "+=2.2");
    tl.from("#frame3", {duration:0.6,yPercent:move,ease: power2_out}, "-=0.6");
    tl.from("#precio2 div", {duration:0.5, y:20, autoAlpha:0, stagger:0.1, ease: back_out}, "-=0.2");
    //tl.add(paneo("#foto2","y",2),"<0.2");
    
    tl.to("#frame3", {duration:0.6,yPercent:-move,ease: power2_out}, "+=2.2");
    tl.from("#frame4", {duration:0.6,yPercent:move,ease: power2_out}, "-=0.6");
    tl.from("#precio3 div", {duration:0.5, y:20, autoAlpha:0, stagger:0.1, ease: back_out}, "-=0.2");
    tl.add(paneo("#foto4", "y", 2),"<0.2");
    
    tl.to("#frame4", {duration:0.6,yPercent:-move,ease: power2_out}, "+=2.2");
    tl.from("#frame5", {duration:0.6,yPercent:move,ease: power2_out}, "-=0.6");
    tl.from("#precio4 div", {duration:0.5, y:20, autoAlpha:0, stagger:0.1, ease: back_out}, "-=0.2");
    tl.add(paneo("#foto5", "y", 2),"<0.2");

    tl.from("#cierre", {duration:0.8, yPercent:100, ease: power2_out}, "+=2.2");
    tl.from(".arrow div", 0.4, {autoAlpha:0, marginLeft:"-10", stagger:0.3, ease: "back.out"}, "+=0.1");
    
    tl.addLabel("fin"); 
    

    
    container.style.display = "block";   
    
    
    addListeners();
    
    
    clickTAGvalue = dhtml.getVar('clickTAG', 'http://www.ikea.es'); 
    landingpagetarget = dhtml.getVar('landingPageTarget', '_blank'); 
    
    //Add Event Listeners
  }
    
  }

    /** 
     * Función para paneo de imágenes
     * elem: foto
     * eje: x o y (paneo horizontal o vertical)
     * tiempo: tiempo de duración del paneo
     * Ej: tl.add(paneo("#foto3","y",1),"+=0.2");
    **/
     function paneo(elem, eje, tiempo){
        var tl = new gsap.timeline();
        setTimeout(function(){
            if (eje == "x"){
                var ancho = document.querySelector(elem).clientWidth;
                var anchoBanner = document.querySelector("#container").clientWidth;
                var distancia = ancho - anchoBanner - 5;
                tl.to(elem, {duration:tiempo, x:-distancia, ease:"power2.inOut"});
            } else if (eje == "y"){
                var alto = document.querySelector(elem).clientHeight;
                var altoBanner = document.querySelector("#container").clientHeight;
                var distancia = alto - altoBanner - 5;
                tl.to(elem, {duration:tiempo, y:-distancia, ease:"power2.inOut"});
            }
            
        },500)
        return tl;
    }
    
}());