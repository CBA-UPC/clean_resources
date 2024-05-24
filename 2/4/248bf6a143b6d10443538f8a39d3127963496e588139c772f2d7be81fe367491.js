
//Function confirm if the creative is visible	
enablerInitHandler = function(e) {
	if(Enabler.isVisible()) {
	startAd();
	} else {
	Enabler.addEventListener(studio.events.StudioEvent.VISIBLE, startAd);
	} 
	

	/* Comentamos esto */
	startAd () ; 
	/* *************** */

};

//Start the creative
startAd = function(e) {
	//Assign All the elements to the element on the page
	
	containerDC = document.getElementById('container_dc');
	content = document.getElementById('content_dc');	
	bgExit = document.getElementById('background_exit_dc');
	
	//Add listeners
	
	addListeners();
	callDinamica();

	containerDC.style.display = "block";
};

//Add Event Listeners
addListeners = 

var ancho_;
var alto_;
var semaforo_;
var logo_;
var	modules_;
var	durations_;
var	loop_;
var	framesIMGS_;
var numloops_;
var	pathimg1_;
var	pathimg2_;
var	pathimg3_;
var	pathimg4_;
var	pathimg5_;
var	pathimg6_;
var	pathimg7_;
var	pathimg8_;
var	framesTXTS_;
var	txt1_;
var	txt2_;
var	txt3_;
var	txt4_;
var	txt5_;
var	txt6_;
var	txt7_;
var	txt8_;
var	txt9_;
var	txt10_;

function callDinamica() {

	/* Descomentamos esto */

	
	ancho_ = dynamicContent.Dinamicas_728x90_multiproducto_360_Hoja_1[0].ancho;
	alto_ = dynamicContent.Dinamicas_728x90_multiproducto_360_Hoja_1[0].alto;
	semaforo_= dynamicContent.Dinamicas_728x90_multiproducto_360_Hoja_1[0].semaforo;
	logo_= dynamicContent.Dinamicas_728x90_multiproducto_360_Hoja_1[0].logo;
	modules_ = dynamicContent.Dinamicas_728x90_multiproducto_360_Hoja_1[0].modules;
	durations_ = dynamicContent.Dinamicas_728x90_multiproducto_360_Hoja_1[0].durations;
	loop_ = dynamicContent.Dinamicas_728x90_multiproducto_360_Hoja_1[0].loop;
	framesIMGS_ = dynamicContent.Dinamicas_728x90_multiproducto_360_Hoja_1[0].framesIMGS;
	numloops_ = 999999;
	pathimg1_ = dynamicContent.Dinamicas_728x90_multiproducto_360_Hoja_1[0].pathimg1.Url;
	pathimg2_ = dynamicContent.Dinamicas_728x90_multiproducto_360_Hoja_1[0].pathimg2.Url;
	pathimg3_ = dynamicContent.Dinamicas_728x90_multiproducto_360_Hoja_1[0].pathimg3.Url;
	pathimg4_ = dynamicContent.Dinamicas_728x90_multiproducto_360_Hoja_1[0].pathimg4.Url;
	pathimg5_ = dynamicContent.Dinamicas_728x90_multiproducto_360_Hoja_1[0].pathimg5.Url;
	pathimg6_ = dynamicContent.Dinamicas_728x90_multiproducto_360_Hoja_1[0].pathimg6.Url;
	pathimg7_ = dynamicContent.Dinamicas_728x90_multiproducto_360_Hoja_1[0].pathimg7.Url;
	pathimg8_ = dynamicContent.Dinamicas_728x90_multiproducto_360_Hoja_1[0].pathimg8.Url;
	framesTXTS_ = dynamicContent.Dinamicas_728x90_multiproducto_360_Hoja_1[0].framesTXTS;
	txt1_ = dynamicContent.Dinamicas_728x90_multiproducto_360_Hoja_1[0].txt1;
	txt2_ = dynamicContent.Dinamicas_728x90_multiproducto_360_Hoja_1[0].txt2;
	txt3_ = dynamicContent.Dinamicas_728x90_multiproducto_360_Hoja_1[0].txt3;
	txt4_ = dynamicContent.Dinamicas_728x90_multiproducto_360_Hoja_1[0].txt4;
	txt5_ = dynamicContent.Dinamicas_728x90_multiproducto_360_Hoja_1[0].txt5;
	txt6_ = dynamicContent.Dinamicas_728x90_multiproducto_360_Hoja_1[0].txt6;
	txt7_ = dynamicContent.Dinamicas_728x90_multiproducto_360_Hoja_1[0].txt7;
	txt8_ = dynamicContent.Dinamicas_728x90_multiproducto_360_Hoja_1[0].txt8;
	txt9_ = dynamicContent.Dinamicas_728x90_multiproducto_360_Hoja_1[0].txt9;
	txt10_ = dynamicContent.Dinamicas_728x90_multiproducto_360_Hoja_1[0].txt10;


	Eventos.getSingleton().dispatchEventListener(Eventos.LOADED, { 
		ancho:ancho_,
		alto:alto_,	
		semaforo:semaforo_,
		logo:logo_,
		modules:modules_,
		durations:durations_,
		loop:loop_,
		numloops:numloops_,
		framesIMGS:framesIMGS_,
		pathimg1:pathimg1_,
		pathimg2:pathimg2_,	
		pathimg3:pathimg3_,	
		pathimg4:pathimg4_,
		pathimg5:pathimg5_,
		pathimg6:pathimg6_,
		pathimg7:pathimg7_,
		pathimg8:pathimg8_,
		framesTXTS:framesTXTS_,	
		txt1:txt1_,
		txt2:txt2_,
		txt3:txt3_,
		txt4:txt4_,
		txt5:txt5_,
		txt6:txt6_,
		txt7:txt7_,
		txt8:txt8_,
		txt9:txt9_,
		txt10:txt10_
	});
	

	
	
	/*  ******************* Comentamos esto ************************  */
	/*Eventos.getSingleton().dispatchEventListener(Eventos.LOADED, { 
		ancho: datos.width,
		alto: datos.height,	
		semaforo: datos.semaforo,
		logo: datos.logo,
		modules: datos.modules,
		durations: datos.durations,
		loop: datos.loop,
		framesIMGS: datos.framesIMGS,
		pathimg1: datos.pathimg1,
		pathimg2: datos.pathimg2,	
		pathimg3: datos.pathimg3,	
		pathimg4: datos.pathimg4,
		pathimg5: datos.pathimg5,
		pathimg6: datos.pathimg6,
		pathimg7: datos.pathimg7,
		pathimg8: datos.pathimg8,
		framesTXTS: datos.framesTXTS,	
		txt1: datos.txt1,
		txt2: datos.txt2,
		txt3: datos.txt3,
		txt4: datos.txt4,
		txt5: datos.txt5,
		txt6: datos.txt6,
		txt7: datos.txt7,
		txt8: datos.txt8,
		txt9: datos.txt9,
		txt10: datos.txt10
	});*/
	/* **************************************************************** */
}


//Add exits
bgExitHandler = 

var datos_ = {};

//Wait for the content to load to call the start od the ad
window.onload = function(){
	if (Enabler.isInitialized()) {
	  enablerInitHandler();
	} else {
	  Enabler.addEventListener(studio.events.StudioEvent.INIT, enablerInitHandler);
	}


	/* Comentamos esto de Javi */
	/*$.ajax({url: "https://eromhsurapps.com/appDisplay/readExcel.php", success: function(result){
		datos = result;
		enablerInitHandler();
	}});*/
	/* ******************** */
};	
