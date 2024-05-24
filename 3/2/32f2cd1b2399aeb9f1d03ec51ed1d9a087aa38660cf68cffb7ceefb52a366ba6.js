"use strict";(("undefined"!=typeof self?self:global).webpackChunkclient_web=("undefined"!=typeof self?self:global).webpackChunkclient_web||[]).push([[5859],{5859:(s,e,n)=>{n.r(e),n.d(e,{AllPodcastSponsors:()=>c,default:()=>r});var l=n(82187),o=n.n(l);const a={allPodcastSponsorsContainer:"JMUhU_hkyHgGt0sXHzZJ"};var t=n(11527);function c(s){return(0,t.jsx)("section",{...s,className:o()(a.allPodcastSponsorsContainer,s.className)})}const r=c}}]);
//# sourceMappingURL=5859.54be2b84.js.mapready",
        value: function onready() {
          var player = this.player; // Replace twitter label with X, this won't be required in AMP 9.1.27
          
          if (player.react == null) return
          // backwards compatibility with old react version 
          var sharePanel = player.react.components.sharePanel.current || player.react.components.sharePanel
          if (sharePanel) {
            sharePanel.listOptions.forEach(function (option) {
              if (option.id === "twitter") {
                option.label = "X";
              }
            });
          }
        }
        /*
        Preserve unmute button visible after initial gesture
        onmutechange(event) {
            if (event.detail === true && this.player.react) {
                this.player.react.unmuteNode.current.setState({ dismissed: false })
            }
        }*/

        /**
         * Populates video id for individual video player customizations based on guid
         * @param {*} event 
         */

      }, {
        key: "onmediachange",
        value: function onmediachange(event) {
          var media = event.detail;
          this.player.container.removeAttribute("data-amp-guid");

          if (media.guid) {
            this.player.container.setAttribute('data-amp-guid', media.guid);
          }
        }
      }]);
      return Tailor;
    }(akamai.amp.Plugin);

    akamai.amp.AMP.registerPlugin("tailor", akamai.amp.Plugin.createFactory(Tailor));

    exports.Tailor = Tailor;

    Object.defineProperty(exports, '__esModule', { value: true });

    return exports;

}({}));
