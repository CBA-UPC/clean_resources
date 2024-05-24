(indianRailFunction = () =>{
  // player positioning code
  let counter = 10;
  let mobileCheck = navigator.userAgent.match(/Android/i) || navigator.userAgent.match(/webOS/i) || navigator.userAgent.match(/iPhone/i) || navigator.userAgent.match(/iPad/i) || navigator.userAgent.match(/iPod/i) || navigator.userAgent.match(/BlackBerry/i) || navigator.userAgent.match(/Windows Phone/i);
  let indianRailInterval = setInterval(function () {
    if (counter--) {
      var targetDiv = null;
      if (window.location.href.includes("hluggage_Rule.html") && document.getElementById("div-gpt-ad-1568021787304-0")){ 
        targetDiv = document.getElementById("div-gpt-ad-1568021787304-0");
      }else if(document.querySelectorAll('.container')[2] != undefined){
        targetDiv = document.querySelectorAll('.container')[2].lastElementChild;
      }
      let plDiv = document.getElementById("div-ub-indianrail");
      if (targetDiv != null && (plDiv && targetDiv)) {
        targetDiv.parentNode.insertBefore(plDiv, targetDiv);
        clearInterval(indianRailInterval);
      }else{
        if(plDiv) plDiv.remove();
      }
    }
    if (counter < 0) clearInterval(indianRailInterval);
  }, 500);

  // setting left for floating player dynamically
  let counter1 = 20;
  let interval = setInterval(function () {
    if (counter1--) {
      let botId = document.getElementById("disha-image");
      if(botId && botId.offsetWidth){
        let botWidth = botId.offsetWidth + 20 + "px";
        let playerFloatDiv = document.getElementById("ubVideo");
        if(playerFloatDiv && playerFloatDiv.style){ 
          playerFloatDiv.style.left = botWidth;
          clearInterval(interval);
        }
      }
    }
    if (counter1 < 0) clearInterval(interval);
  }, 500);
})();