

function openmenu(x){
    x.classList.toggle('opened');
    x.setAttribute('aria-expanded', x.classList.contains('opened'));
    var transf= document.getElementById("navbar").style.transform;
    if(transf=="translateX(0px)"){
        document.getElementById("navbar").style.transform="translateX(100%)";

    }else{
        document.getElementById("navbar").style.transform="translateX(0px)";
    }
}


window.addEventListener('resize', function(event) {
var menu_mobile = document.getElementById("menu_mobile");
var navbar = document.getElementById("navbar");
var lines = document.querySelectorAll('.line');
    if(window.innerWidth>768){
            navbar.style.transform="translateX(0px)";
    }else{
        navbar.style.transform="translateX(100%)";
        menu_mobile.classList.remove('opened');
        menu_mobile.setAttribute('aria-expanded', false);
        lines.forEach(
    }

}, true);
