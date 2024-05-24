// call Adlib.screenshotterEnd() on the last animation code.
// do not delete initAnimation function since this is the first function that will be called after initialization of defaultValues.
// if ever there is a video for this ad, you can use myVideo as the variable to play the video.
// sample tween codes:
// tween.to("#disclaimerWrapper", {opacity:0.99,duration: 1,ease: "power2.out"},"-=1");
// tween.set("#frame1HeadlineWrapper",{opacity:1})
let tween, heightCounter, heightCounter2, heightCounter3, LineCounter, LineCounter2, LineCounter3, LineBreaks, LineBreaks2, LineBreaks3;
function initAnimation() {
    Gradient.style.background = "linear-gradient(180deg, #FFFFFF00 0%, #FFFFFF00 40%, " + defaultValues.customVariable.replace(/<[^>]*>?/gm, '') + " 90%)";
    Gradient.style.opacity = defaultValues.customVariable2.replace(/<[^>]*>?/gm, '');
    
    ctaContainer.style.backgroundColor = defaultValues.ctaColor1.replace(/<[^>]*>?/gm, '');
    ctaContainer.style.border = "1px solid " + defaultValues.ctaColor1.replace(/<[^>]*>?/gm, '');
    ctaContent.style.color = defaultValues.ctaColor2.replace(/<[^>]*>?/gm, '');
    
    if(Adlib.isEmpty(defaultValues.frame1Headline2.replace(/<[^>]*>?/gm, ''))) {
        headlineContent2.innerHTML = "";
        headlineContainer2.style.height = "max-content";
        ctaContainer.style.marginTop = "0px";
        ctaContainer.style.marginBottom = "6px";
    }
    // place all fluid elements before text resize and css attrib.
    if(Adlib.isEmpty(defaultValues.legal.replace(/<[^>]*>?/gm, ''))){
        legalContainer.style.display = "none";
        legalContainer.style.height = "0px";
        FlexBox.style.justifyContent = "center";
        FlexBox.style.top = "400px";
    }

    LineCounter = legalContainer.offsetHeight;
    LineBreaks = LineCounter / heightCounter;

    // Legal LineBreaks
    if(LineBreaks == 0){
        document.getElementById("fluidContainer").style.top = "-272px";
    }else if(LineBreaks == 1){
        document.getElementById("copiesContainer").style.top = "-9px";
        document.getElementById("dummyLogo").style.top = "6px";
    }else if(LineBreaks == 2){
        document.getElementById("fluidContainer").style.top = "-4px";
        document.getElementById("legalContainer").style.top = "4px";
        document.getElementById("logoContainer").style.top = "-2px";
        document.getElementById("logoContainer").style.minHeight = "70px";
    }else if(LineBreaks == 3){

    }

    // Copy Breaks
    LineCounter2 = headlineContent.offsetHeight;
    LineBreaks2 = LineCounter2 / heightCounter2;

    LineCounter3 = headlineContent2.offsetHeight;
    LineBreaks3 = LineCounter3 / heightCounter3;

    if(LineBreaks2 == 1 && LineBreaks3 == 1){
        document.getElementById("headlineContent2").style.top = "-1px";
        document.getElementById("ctaContainer").style.top = "0px";
    }

    Adlib.textResize(); // This is optional if your build doesn't use text resize you can delete this
    Adlib.templateCSS(defaultValues.cssAttrib); // DO NOT DELETE THIS
    startAnimation();
}
function startAnimation() {  
     document.querySelector("#mainContent").style.opacity = 1;
     tween = gsap.timeline();
     animationEnd();
}
