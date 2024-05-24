@font-face {
     font-family: RTPBold;
     src: url("RealTextPro-Bold.woff2");
}
@font-face {
     font-family: RTPBook;
     src: url("RealTextPro-Book.woff2");
}
@font-face {
     font-family: RTPDemibold;
     src: url("RealTextPro-Demibold.woff2");
}

.fontRTPBold{
    font-family: RTPBold;
    line-height: 1.1em;
}
.fontRTPBook{
    font-family: RTPBook;
    line-height: 1.1em;
}
.fontRTPDemibold{
    font-family: RTPDemibold;
    line-height: 1.1em;
}
b,strong{
    font-family: RTPBold;
}
#guide {
     opacity: 0.4;
    z-index: 98;
}
.fullSize{
     width:300px;
     height:250px;
     left:0px;
     top:0px;
}
.abs {position: absolute;}
.rel {position: relative;}
#keyartContent{
    width: 300px;
    height: 250px;
    
    left: 0px;
    top: 0px;
}
#FlexBox{
    width: 280px;
    height: 89px;
    
    left: 10px;
    top: 152px;

    display: flex;    
    flex-direction: column;
    justify-content: flex-end;
    align-items: center;
}
#fluidContainer {
    width:280px;
    height:89px;  

    display: flex;    
    flex-direction: column;
    justify-content: flex-end;
    align-items: center;
}
#logoContainer {
    position: relative;
    height: 100%;  
    width: 100%;
    max-width:125px;
    display:flex;
    justify-content: center;
    align-items:center;
    object-position: 0% 0%;
    padding-right: 4px;
}
#logoContent {
    position: relative;
    width: 100%;
    height: 100%;  
    object-fit: contain;
}
#copiesContainer {
    position: relative;
    width: 100%;
    height: 61px;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    left: -2px;
}
#dummyBox{
    width: auto;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-end;
    max-width: 100%;
    position: relative;
    top: 6px;
}
#dummyLogo{
    width: auto;
    height: auto;
    min-width: 60px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-end;
    top: 8px;
    left: -1px;
}
#headlineContainer {
    position: relative;
    width:auto;
    height:35px;  
    display:flex;
    justify-content: center;    
    align-items: center; 
    left:2px;
    min-width:116px;
}
#headlineContent{
    font-size: 9px;
    letter-spacing: 0.09em;
    text-align: center;
    color:white;
}
#headlineContainer2 {
    position: relative;
    width:max-content;
    height:35px;  
    display:flex;
    justify-content: center;    
    align-items: center; 
    left:2px;
    min-width:116px;
    margin-top: 1px;
}
#headlineContent2{
    font-size: 13px;
    letter-spacing: 0.01em;
    text-align: center;
    color:white;
}
#ctaContainer {
    position: relative;
    height: auto;

    margin-top: 6px;
    padding: 5px 15px 5px 15px;
    left: 2px;
    top: 0px;

    display:flex;
    align-items: center; 
    justify-content: center;
    text-align: center;

    background-color: rgb(0, 110, 245);
    border: 1px solid rgb(0, 110, 245);
    border-radius: 28.5px;
    
}
#ctaContent {
    position: relative;
    font-family: RTPBold;
    font-size: 13px;
    letter-spacing: 0.01em;
    white-space: nowrap;
    color:white;
    top: 0px;
}
#legalContainer {
    width: auto;
    max-height:22px;  
    display:flex;
    justify-content: center;    
    align-items: center; 
    margin-top: 12px;
    /* margin-right: 5px; */
    left:1px;
}
#legalContent {
     font-family: RTPBook;
     font-size: 8px;
     letter-spacing: 0em;
     line-height: 1.1em;
     text-align: center;
     color:white;
     opacity: 0.5;
     width:inherit;
}



