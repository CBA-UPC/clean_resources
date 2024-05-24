// call Adlib.screenshotterEnd() on the last animation code.
// do not delete initAnimation function since this is the first function that will be called after initialization of defaultValues.
// if ever there is a video for this ad, you can use myVideo as the variable to play the video.
// sample tween codes:
// tween.to("#disclaimerWrapper", {opacity:0.99,duration: 1,ease: "power2.out"},"-=1");
// tween.set("#frame1HeadlineWrapper",{opacity:1})
let tween;
function initAnimation() {
     // place all fluid elements before text resize and css attrib.
     Adlib.textResize(); // This is optional if your build doesn't use text resize you can delete this
     Adlib.templateCSS(defaultValues.cssAttrib); // DO NOT DELETE THIS

     gsap.set("#f1image1-wrapper", {scale: 1.2});
     gsap.set("#logo-wrapper", {opacity: 0});
     gsap.set(["#f2image1-wrapper","#f3image1-wrapper"], {y: 90});
     gsap.set(["#f1headline1-wrapper","#f2headline1-wrapper","#f3headline1-wrapper","#cta-container"], {y: 80, opacity: 0});

     startAnimation();
}
function startAnimation() {  
     document.querySelector("#mainContent").style.opacity = 1;
     tween = gsap.timeline();

     firstAnimation();
}

function firstAnimation() {
     gsap.to("#f1image1-wrapper", {duration: 0.7, ease: "quad.inOut", scale: 1, delay:0, onComplete: addTrackingPixel});
     gsap.to("#f1headline1-wrapper", {duration: 0.7, ease: "quad.inOut", y: 0, opacity: 1, delay:0, onComplete: takeScreenshot});

     gsap.to(["#f1image1-wrapper","#f1headline1-wrapper"], {duration: 1, ease: "quad.inOut", y: 90, opacity: 0, delay:3.7});
     gsap.to("#f2image1-wrapper", {duration: 1, ease: "quad.inOut", y: 0, delay:4.2});
     gsap.to("#f2headline1-wrapper", {duration: 0.7, ease: "quad.inOut", y: 0, opacity: 1, delay:4.4, onComplete: takeScreenshot});

     gsap.to(["#f2image1-wrapper","#f2headline1-wrapper"], {duration: 1, ease: "quad.inOut", y: 90, opacity: 0, delay:6.2});
     gsap.to("#f3image1-wrapper", {duration: 1, ease: "quad.inOut", y: 0, delay:6.7});
     gsap.to("#logo-wrapper", {duration: 1, ease: "quad.inOut", opacity: 1, delay:6.9});
     gsap.to("#f3headline1-wrapper", {duration: 0.7, ease: "quad.inOut", y: 0, opacity: 1, delay:6.9});
     gsap.to("#cta-container", {duration: 0.7, ease: "quad.inOut", y: 0, opacity: 1, delay:7.1, onComplete: animationEnd});

}

