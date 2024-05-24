function initClick(idFrame){
    return 'ADventori.click(event,{id:\'frame' + idFrame + '\', data: {url:\'' + ADventori.data.frames['frame' + idFrame].data.url + '\'}})';
}

(function addStyleSheet(){
    let style="";
    style+="span.textADventori{font-size:inherit;line-height:inherit;font-family:inherit;display:inline-block;font-weight:inherit;}";
    let css=document.createElement("style");css.type="text/css";css.id="MTStyleSheet";css.innerHTML=style;
    document.head.appendChild(css);
})();


/**
 * Set a text into an element, it can fit the text to its container.
 * @param {string} elem - The text container
 * @param {string} data - The text to insert in the html container
 * @param {Object} minFontSize - Optional - If present, it activates the adapt text function
 */
function setText(elem,data,minFontSize){   
    if (elem){
        let el = elem;
        el.innerHTML="";
        let txt = document.createElement("span");
        txt.className +="textADventori " 
        txt.innerHTML=data;
        el.appendChild(txt);
        if(minFontSize) ADventori.Display.adaptText(el,minFontSize);
    }
}

/**
 * Init the HTML structure of the meta template
 * @param {string} container - The html container to insert the meta template
 */
function initHtml(container){  
    let htmlStructure="";
    for(let i=1;i<=Object.keys(ADventori.data.frames).length;i++){
        if(ADventori.data.frames['frame'+i] && ADventori.data.frames['frame'+i]['template'] && templates[ADventori.data.frames['frame'+i]['template']])  htmlStructure += templates[ADventori.data.frames['frame'+i]['template']](i);
    }
    document.querySelector(container).insertAdjacentHTML('beforeend', htmlStructure);
}

/**
 * Init the animation timeline
 */
function initAnimation(){
    document.querySelector('#loadingLogo').style.display = "none";
    for(let i=1;i<=Object.keys(ADventori.data.frames).length;i++){
        if(ADventori.data.frames['frame'+i] && ADventori.data.frames['frame'+i]['template']){
            let frame = document.querySelector('[data-template="'+[ADventori.data.frames['frame'+i]['template']]+'"]');
            if(frame){
                let animationFunction = frame.getAttribute('data-animation');
                let timeDuration = frame.getAttribute('data-duration')*1000;
                animation[animationFunction](time, i); 
                time+=timeDuration;
            }
        }                     
    }
}

/**
 * Init the dynamisation
 */
function initDynamisation(){
    let frames = document.querySelectorAll('[data-id-frame]');
    for(let i=0;i<frames.length;i++){          
        let dynPath = frames[i].dataset.idFrame == 'global' ? ADventori.data.global : ADventori.data.frames[frames[i].dataset.idFrame].data;
        let dynElements = frames[i].querySelectorAll('[data-advdco]');
        for(let j=0;j < dynElements.length;j++){
            let data="", dynFunction="", imgDefault="", minFontSize="";            
            dynFunction = dynElements[j].dataset.advdco;
            data = dynPath[dynElements[j].dataset.advdcoData];        
            switch(dynFunction){
                case 'setText':
                    if(hasValue(data)){       
                        if(dynElements[j].dataset.advdcoMinfontsize) minFontSize = parseInt(dynElements[j].dataset.advdcoMinfontsize);                        
                        minFontSize ? setText(dynElements[j], data, minFontSize) : setText(dynElements[j], data);
                     }
                    break;
                case 'addImage':
                    if(hasValue(data)){ 
                        if(dynElements[j].dataset.advdcoImgdefault) imgDefault = dynElements[j].dataset.advdcoImgdefault;
                        if(imgDefault){ADventori.Display.addImage(dynElements[j], data,  imgDefault)}
                    }
                    break;
                default:
                    console.log(dynFunction +' is not an ADventori function !')
            }            
        }
    }                
}

/**
 * Init the HTML structure of the meta template
 * @param {string} value - The time (in second) where the frame will be displayed
 * @param {string} idFrame - ID of the Frame
 */
function chooseFrameTime(value,idFrame){
    let frameTime, actualValue = value, tempValue;
    if(ADventori.data.frames['frame'+idFrame]  && hasValue(ADventori.data.frames['frame'+idFrame].animations) && hasValue(ADventori.data.frames['frame'+idFrame].animations.frameTime)){
        tempValue = parseFloat(ADventori.data.frames['frame'+idFrame].animations.frameTime);
        frameTime = (actualValue < tempValue) ? tempValue : actualValue;
    }
    else{frameTime = actualValue;}
    return frameTime;
}


/**
 * Timeline function
 * @param {Object} conf - settings.
 * @param {int} conf.time - time to launch animation
 * @param {string} conf.element - The HTML element to target
 * @param {string} conf.className - The name of the class
 * @param {function} conf.callBack - The name of the function
 * timeLine({time:{{int}}, element:{{string}}, className:{{string}} });
 * timeLine({time:{{int}}, callBack:{{function}} });
 */
function timeLine(conf){
    var conf = conf || {};
    conf.callBack ? setTimeout( conf.time) : setTimeout(function(){if(document.querySelector(conf.element)){document.querySelector(conf.element).classList.toggle(conf.className)}}, conf.time);

}         

/**
 * Check if a variable exists
 * @param {string} variable - The variable to check if it exists
 */
function hasValue(variable) {
    return (typeof variable !== 'undefined') && (variable != null) && (variable != "") && (variable != " ") && (variable != "&nbsp;");
}

/**
 * Combine data, placeholders and translations
 * @param {Object} data - Metatemplate json { frames:{}, global:{} }
 * @param {Object} placeholders - The name of the class
 * @param {Object} translations - The name of the class
 */
function combine(data, placeholders, translations){
    if(data && typeof data.frames === 'object'){
        for (var frame in data.frames) {
            var frameData = data.frames[frame].data;
            if(typeof translations=== 'object'){
                for (var key in frameData) {
                    if(key.indexOf('§')==0){
                        var translation = translations[frameData[key]];
                        if(translation){
                            frameData[key.substring(1)] = translation;
                        }
                    }
                }
            }
            if(typeof placeholders === 'object'){
                for (var key in frameData) {
                    if(key.indexOf('§')<0){
                        var missingPlaceholder = false;
                        var value = frameData[key].replace( /\{\{\s*(.*?)\s*\}\}/g, function(x){
                            var placeHolderValue = placeholders[x.substring(2,x.length-2).trim()];
                            missingPlaceholder = missingPlaceholder || !placeHolderValue;
                            return placeHolderValue;
                        });
                        frameData[key] = missingPlaceholder ? '' : value;
                    }
                }
            }
        }
    }
    if(data && typeof data.global === 'object'){
        if(typeof translations === 'object'){
            for (var key in data.global) {
                if(key.indexOf('§')==0){
                    var translation = translations[data.global[key]];
                    if(translation){
                        data.global[key.substring(1)] = translation;
                    }
                }
            }
        }
        if(typeof placeholders === 'object'){
            for (var key in data.global) {
                if(key.indexOf('§')<0){
                    var missingPlaceholder = false;
                    var value = data.global[key].replace( /\{\{\s*(.*?)\s*\}\}/g, function(x){
                        var placeHolderValue = placeholders[x.substring(2,x.length-2).trim()];
                        missingPlaceholder = missingPlaceholder || !placeHolderValue;
                        return placeHolderValue;
                    });
                    data.global[key] = missingPlaceholder ? '' : value;
                }
            }
        }
    }
    return data;}
}
