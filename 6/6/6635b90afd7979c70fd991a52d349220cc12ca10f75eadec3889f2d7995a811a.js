import{i as p,s as c,x as d,S as i,a as m,t as u}from"./index-b49b19e7.js";import{s as h}from"./spacing.styles-ac719b05.js";import"./auto-complete-app-search-29ced610.js";import"./spotlight-control-f9fc4617.js";import"./repeat-18af36e2.js";import"./style-map-db7a8965.js";import"./css-function-27cf3c1f.js";import"./image-helper-99359f42.js";const g=p`
    :host {
        /** Transparent background so that when this page is rendered on the Windows 11 widgets panel, the panel's background shows through between the content on our page. */
        background-color: transparent; 
    }
`;var y=Object.defineProperty,b=Object.getOwnPropertyDescriptor,f=let l=class extends c{connectedCallback(){super.connectedCallback(),document.documentElement.style.backgroundColor="transparent",document.body.style.backgroundColor="transparent",document.documentElement.style.setProperty("--layout-sm-padding","0"),document.documentElement.style.setProperty("--layout-margin-top","0")}render(){return d`
            <h3 class="mt-0">Here is our play board. Some initial content for giggles:</h3>
            <product-spotlight-control 
                collection-name="${i.Gaming}" 
                telemetry-area-id="SpotlightPlayBoard"
                telemetry-data='{ "areaSlot": 0, "type": "spotlight" }'>
            </product-spotlight-control>
            <br>
            <br>
            <h4 class="mt-3">TODO: add additional content here</h4>
        `}};l.styles=[m,h,g];l=f([u("play-board")],l);export{l as PlayBoard};
