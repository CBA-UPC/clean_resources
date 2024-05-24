function verbose(label, message){
    if(!window.top.location.href.includes("tmzr_debug")){return;}
    console.log('%cThe Moneytizer - '+label, 'color: white; background: #ec144c;border-radius: 3px; padding: 2px', message);
}
verbose("FS Close", "Lib initialized");
document.addEventListener('click',function(e){
    if(typeof String().startsWith != 'function'){
        return;
    }

    if(e.target.id.startsWith("sas_defaultCloseButton_")){
        window.adsArea26328.isVisible = false;
        window.adsArea26328.isClosed = true;
        window.adsArea26328.refreshRate = 99**9;
        verbose("FS Close", "Footer slide-in closed");
    }
});