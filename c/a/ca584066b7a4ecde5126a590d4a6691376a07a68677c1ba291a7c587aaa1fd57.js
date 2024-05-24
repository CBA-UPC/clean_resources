/* Pogo */
.noPgAd div[data-pogo], .noPgAd .ad, .noPgAd .ad__top { display: none !important; }

@media (min-width: 1024px) {
    /*div[data-pogo="incontent"] { display: none; }*/
    div[data-pogo="top"], div[data-pogo="main"] { min-height: 90px; }
    div[data-pogo="sidebar"] { min-height: 250px; }

    div.ad.ad__sidebar { position: sticky; top: 50px; }
    aside.aside { margin-bottom: unset !important; }
    .noPgAd div.ad.ad__sidebar { display: none; }
}
