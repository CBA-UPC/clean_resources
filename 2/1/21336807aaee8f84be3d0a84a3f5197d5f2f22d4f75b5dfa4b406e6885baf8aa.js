.para {
  	width: 480px;
    margin: 0px auto 20px;
    height: 400px;
    position: relative;
  }
  .para_abs{
	width: 100%; 
	height: 100%;
	position: absolute; 
	top: 0; 
	left: 0; 
	clip: rect(auto, auto, auto, auto);
  }
  .para_fix{
	width: 100%; 
  	height: 100%; 
	position: fixed; 
	top: 0; 
	-moz-transform: translateZ(0); 
	-webkit-transform: translateZ(0); 
	-ms-transform: translateZ(0); 
	-o-transform: translateZ(0); 
	transform: translateZ(0); 
	margin: 0 auto;
	}
	.para_ads{
	width: 100%; 
		height: auto; 
		border: none; 
		position: absolute; 
		left: 50%; 
		top: 50%;
     	transform: translate(-50%, -50%);
		-moz-transform: translate(-50%, -50%);
		-webkit-transform: translate(-50%, -50%);
		-ms-transform: translate(-50%, -50%);
		-o-transform: translate(-50%, -50%);

	}