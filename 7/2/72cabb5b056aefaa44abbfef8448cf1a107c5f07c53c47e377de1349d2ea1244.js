/*
  Diaglo Box Css
*/

#dialog {
  visibility: hidden;
  
  opacity: 0;
  
  position: absolute;

  left: 25%;
  top: 25%;

  width: 50%;
  height: 50%;

  border: solid 1px black;

  background-color:white;

  z-index: 110;
}

    #topAlignText {
      position: absolute;

      left:5%;
      top:50%;

      width: 90%;
      height: 1px;
   }

        #messageDial {
          position: absolute;

          font-size: 25px;

          left: 0px;
          top: 0px;

          width: 100%;
          height: 5px;

          text-align: center;
        }

    #closeDial {
      position: absolute;

      font-size: 25px;

      right: 5px;
      top: 5px;

      cursor: pointer;
    }

