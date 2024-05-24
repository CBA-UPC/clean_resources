import{i as p,s as c,x as d,S as i,a as m,t as u}from"./index-f0821274.js";import{s as h}from"./spacing.styles-57b961dc.js";import"./auto-complete-app-search-76feaa83.js";import"./spotlight-control-f509ec66.js";import"./repeat-aaef31c8.js";import"./style-map-663a1d19.js";import"./css-function-74a8ae57.js";import"./image-helper-5b969ca1.js";const g=p`
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
