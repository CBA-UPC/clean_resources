import{r as e,d as C,bu as l}from"./index-172e3f67.js";const n=t=>e.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",xmlnsXlink:"http://www.w3.org/1999/xlink",viewBox:"0 0 40 40",...t},e.createElement("defs",null,e.createElement("path",{id:"sm-qzone_padded-a",d:"M30.7002732,17.4219864 C30.6474696,17.2649478 30.5024214,17.1526864 30.3325879,17.1363458 L23.6722238,16.5283516 L20.780096,10.2582649 C20.7137144,10.1018629 20.5572434,10 20.3833148,10 C20.2093863,10 20.0518376,10.1018629 19.9867491,10.2582649 L17.005394,16.3921099 L10.388566,17.1363458 C10.2176548,17.1526864 10.0726066,17.2657966 10.019803,17.4251696 C9.96807706,17.5841182 10.019803,17.7585585 10.1501956,17.8665756 L15.0393765,22.2816962 L13.8358858,28.9530803 C13.7975224,29.1164854 13.8626109,29.2860447 14.0024865,29.3849366 C14.0772736,29.4369291 14.1662854,29.4630315 14.2542195,29.4630315 C14.3309463,29.4630315 14.4087508,29.4426589 14.4759946,29.403187 L20.4268508,26.0361934 L26.2886953,29.4471154 C26.4346057,29.4889217 26.6190949,29.4827674 26.7589705,29.3874832 C26.8977685,29.2917745 26.9660899,29.1256106 26.9309594,28.9643277 L26.0462299,24.4494663 C26.2792123,24.3425102 26.9671675,24.044349 27.3286027,23.6347752 C26.7393578,23.864179 26.5175827,23.9240234 25.9272602,24.0343749 L25.9272602,24.0333139 C21.9898369,24.7779742 15.9478137,23.7222075 15.7437116,23.7120213 L21.7105168,19.3923971 C19.4666877,18.9866432 14.1884844,18.3205022 13.8673524,18.3103159 C13.824894,18.3175312 14.5484109,18.3635817 14.5816017,18.3561542 L14.5981971,18.3561542 C14.8684653,18.3134991 22.0100963,16.7853432 26.7059514,17.9905088 L20.3311578,22.5628803 C20.3311578,22.5628803 23.9918472,22.9196127 25.8065663,22.7124914 L25.7779015,22.2816962 L30.620529,17.8627557 C30.7043682,17.7526165 30.7530768,17.5792373 30.7002732,17.4219864"})),e.createElement("use",{fillRule:"evenodd",xlinkHref:"#sm-qzone_padded-a"})),s=C(n)`
  ${l.mouse`
    &:hover {
      fill: #FFDB00;
    }
  `}
`;export{s as StyledSmQzone};
//# sourceMappingURL=Qzone-3aff8902.js.map
this.dom_element.width();
            this.width = this.view.outerWidth();
        },
        
        show: function(e)
        {
            if (e)
            {
                this.view.empty();
                this.view.append(this.template({data:e.data}));
                var x = e.pos.center - this.width / 2;
                var item_center = (e.pos.center < 0) ? 0 : (e.pos.center > this.viewport_width) ? this.viewport_width : e.pos.center;
                var nub_x = 50;
                if (x < 0)
                {
                    x = 25;
                    nub_x = Math.round((100 / this.viewport_width * item_center) / 5) * 5;
                }
                
                if (x + this.width > this.viewport_width)
                {
                    x = this.viewport_width - this.width - 25;
                    nub_x = Math.min(100, Math.round(((item_center - x) / this.width  * 100) / 5 ) * 5);
                }
                
                this.view.css({
                    'display': 'block',
                    'left': x,
                    'top': e.pos.y
                });
                
                this.view.attr('class', 'flyout manualteaser nub_' + nub_x);
                
                this.dom_element.append(this.view);
            }
            this.view.removeClass('hide');
        },
        
        hide: function()
        {
            this.view.addClass('hide');
        }
        
    }

    return EpgFlyout;
    
});