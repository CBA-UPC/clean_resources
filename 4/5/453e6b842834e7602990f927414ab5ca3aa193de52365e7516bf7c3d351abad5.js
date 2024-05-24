/* Pogo */
div#app > aside > aside.zmgad-full-width.mt-4 { min-height: 90px; }
.zmgad-full-width { display: grid; align-content: center; justify-content: center; }
.zmgad-full-width > p, .zmgad-right-rail > p { display: block !important; }
ins.zmgad-full-width div[data-pogo="incontent"]:before { content:"ADVERTISEMENT"; font-family: benton-sans,Arial,sans-serif; font-size: 0.75rem;; display: block; text-decoration: underline; color:rgb(115,115,115); border: 0px; margin-bottom: 10px; }
div[data-pogo="incontent"].hasPogoNative:before { content: "" !important; display: none !important; }
div[data-pogo].noAdvLabel:before, div[data-pogo].noAdvLabel a.text:before { content: "" !important; display: none !important; }
div[data-pogo="incontent"].pgIntscrl:before { position: relative; top: -25px; }

div[data-pogo] iframe { margin-left: auto; margin-right: auto; }
div[data-pogo="main"], div[data-pogo="incontent"], div[data-pogo="top"], div[data-pogo="sidebar"]  { min-height: 250px; }
[data-autopogo] blockquote.twitter-tweet { min-height: 500px; }

body.pgDsbld .zmgad-full-width, body.pgDsbld div[data-pogo], body.pgDsbld .zmgad-right-rail { display: none !important; }

@media (min-width: 768px) {
  div[data-pogo="main"], div[data-pogo="incontent"], div[data-pogo="top"]  { min-height: 90px; }
  [data-autopogo] blockquote.twitter-tweet { min-height: 550px; }
}
@media (min-width: 1024px) {
  div[data-pogo="main"], div[data-pogo="incontent"], div[data-pogo="top"]  { min-height: 250px; }
}