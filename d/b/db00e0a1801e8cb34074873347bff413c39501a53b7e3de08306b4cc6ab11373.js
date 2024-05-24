/* Pogo */
div[data-pogo] { display: grid; align-content: center; justify-content: center; }
div[data-pogo] iframe { margin-left: auto; margin-right: auto; }
div[data-pogo="main"], div[data-pogo="incontent"], div[data-pogo="top"], div[data-pogo="sidebar"]  { min-height: 250px; }

div[data-pogo="incontent"] { margin: 10px auto; }

@media (min-width: 1024px) {
    div[data-pogo="top"], div[data-pogo="main"] { min-height: 250px; }
    div[data-pogo="sidebar"] { min-height: 250px; }
}