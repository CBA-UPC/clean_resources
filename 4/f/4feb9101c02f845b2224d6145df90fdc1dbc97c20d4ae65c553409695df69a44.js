/* Pogo */
ins.zmgad-full-width { display: flex; margin: 30px auto; justify-items: center; align-items: center; justify-content: center; }
article div[data-pogo] { }
div[data-pogo] { display: flex; justify-items: center; align-items: center; justify-content: center; }
div[data-pogo] iframe { margin-left: auto; margin-right: auto; }
div[data-pogo="main"], div[data-pogo="incontent"], div[data-pogo="top"], div[data-pogo="sidebar"]  { min-height: 250px; }

@media (min-width: 768px) {
  div[data-pogo="main"], div[data-pogo="incontent"], div[data-pogo="top"], div[data-pogo="footer"]   { min-height: 90px; }
  body[data-template="home"] div[data-pogo="top"]#top-1, div[data-pogo]#top-1 { min-height: 90px; }
  div[data-pogo].mobile { display: none; }
}

@media (min-width: 970px) {
  div[data-pogo="sidebar"] { min-height: 250px; }
  div[data-pogo="top"] { min-height: 250px; }
}