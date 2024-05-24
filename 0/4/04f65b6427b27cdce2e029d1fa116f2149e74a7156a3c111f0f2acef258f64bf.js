/* Pogo */
ins.zmgad-full-width { display: flex; margin: 30px auto; justify-items: center; align-items: center; justify-content: center; }
article div[data-pogo] { }
div[data-pogo] iframe { margin-left: auto; margin-right: auto; }
div[data-pogo="main"], div[data-pogo="incontent"], div[data-pogo="top"], div[data-pogo="sidebar"]  { display: flex; min-height: 280px; flex-direction: column; justify-items: center; align-items: center; justify-content: center; }
article[data-autopogo] { position: relative; }
[data-autopogo] blockquote.twitter-tweet { min-height: 500px; }
div[data-pogo].noAdvLabel:before { content: "" !important; display: none !important; }
div[data-pogo="incontent"].pgIntscrl:before { position: relative; top: -25px; }

div[data-pogo="incontent"].apscustom { min-height: 0; display: block; }
div[data-aps-custom-status="rendered"].apscustom { margin: 1rem auto; }

/*
div[data-pogo="sidebar"]:empty { display: none; }
div[data-pogo="sidebar"] { margin-top: 10px; }
div[data-pogo="sidebar"]:before,
div[data-pogo="incontent"]:before, div[data-pogo="main"]:before { content:"ADVERTISEMENT"; font-size: 12px; display: block; text-decoration: none; color:rgb(165,165,165); margin-bottom: 10px; }
*/

div[data-pogo="outstream"] { }
div[data-pogo="outstream"] .pgOts { margin: 0 auto; }
@media (min-width: 768px) {
  div[data-pogo="main"], div[data-pogo="incontent"], div[data-pogo="top"]  { min-height: 120px; }
  [data-autopogo] blockquote.twitter-tweet { min-height: 550px; }
}

@media (min-width: 1024px) {
  div[data-pogo="main"], div[data-pogo="incontent"], div[data-pogo="top"]  { min-height: 280px; }
  div[data-pogo="top"] { max-height: 280px; }
}