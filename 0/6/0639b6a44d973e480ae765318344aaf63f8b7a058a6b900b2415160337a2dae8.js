@charset "UTF-8";
@font-face {
  font-family: 'Marcin Ant B';
  src: url("https://d3cvruiabw27as.cloudfront.net/dist/resources/fonts/marcin-ant-b/marcinantb-regular-webfont.woff2") format("woff2"), url("https://d3cvruiabw27as.cloudfront.net/dist/resources/fonts/marcin-ant-b/marcinantb-regular-webfont.woff") format("woff");
  font-weight: 400;
  font-style: normal;
  font-display: swap;
}
@font-face {
  font-family: 'Majrit Text';
  src: url("https://d3cvruiabw27as.cloudfront.net/dist/resources/fonts/majrit/majrit-text/Majrit-Text-Medium.woff2") format("woff2"), url("https://d3cvruiabw27as.cloudfront.net/dist/resources/fonts/majrit/majrit-text/Majrit-Text-Medium.woff") format("woff");
  font-weight: 500;
  font-style: normal;
  font-display: swap;
}
@font-face {
  font-family: 'Majrit Text';
  src: url("https://d3cvruiabw27as.cloudfront.net/dist/resources/fonts/majrit/majrit-text/Majrit-Text-Bold.woff2") format("woff2"), url("https://d3cvruiabw27as.cloudfront.net/dist/resources/fonts/majrit/majrit-text/Majrit-Text-Bold.woff") format("woff");
  font-weight: 700;
  font-style: normal;
  font-display: swap;
}
/* line 30, ../../../recursos/estilos/v2.x/v2.1/podcast.scss */
.mm_AudioPlayer * {
  vertical-align: middle;
}

/* line 33, ../../../recursos/estilos/v2.x/v2.1/podcast.scss */
.mm_AudioPlayer a {
  text-decoration: none !important;
  border: none !important;
}

/* line 37, ../../../recursos/estilos/v2.x/v2.1/podcast.scss */
.mm_AudioPlayer button:focus {
  outline: none;
}

/* line 40, ../../../recursos/estilos/v2.x/v2.1/podcast.scss */
.mm_AudioPlayer {
  background: #fff;
  color: #202020;
  width: 100%;
  clear: both;
  float: none;
  box-sizing: border-box;
  font-family: 'Majrit Text';
  position: relative;
  border-bottom: 1px solid #4a4a4a;
}

/* line 52, ../../../recursos/estilos/v2.x/v2.1/podcast.scss */
.mm_AudioPlayer_cabecera {
  border-top: 1px solid #000000;
  padding: 20px 10px 20px 0;
  position: relative;
}

/* line 58, ../../../recursos/estilos/v2.x/v2.1/podcast.scss */
.mm_AudioPlayer_grande .mm_AudioPlayer_cabecera {
  border-top: 1px solid #000000;
  padding: 20px 100px 20px 0;
  position: relative;
}

/* line 64, ../../../recursos/estilos/v2.x/v2.1/podcast.scss */
.mm_AudioPlayer_pequeno .mm_AudioPlayer_cabecera {
  padding: 20px 0;
}

/* line 68, ../../../recursos/estilos/v2.x/v2.1/podcast.scss */
.mm_AudioPlayer_cabecera:before {
  content: "";
  height: 4px;
  width: 132px;
  background: #000000;
  position: absolute;
  top: -4px;
  left: 0;
}

/* line 77, ../../../recursos/estilos/v2.x/v2.1/podcast.scss */
.mm_AudioPlayer_poster {
  float: left;
  width: 165px;
  height: 165px;
  overflow: hidden;
  position: relative;
  background-repeat: no-repeat;
  background-color: #aaaaaa;
  background-position: center;
  background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAE8AAABPCAYAAACqNJiGAAAABHNCSVQICAgIfAhkiAAAAAlwSFlzAAALEgAACxIB0t1+/AAAAB50RVh0U29mdHdhcmUAQWRvYmUgRmlyZXdvcmtzIENTNS4xqx9I6wAAABZ0RVh0Q3JlYXRpb24gVGltZQAwOC8yOS8xN62FEQ8AAALESURBVHic7dqrU+tAHMXxA3PXgFlT05iYmMXEpAJVQw3/KQqDrwFBTAWJqYlJBTVrilnBFQyhhZbHPZc8Zs5nhhkmwMxvvuS1Oz16eHh4LssS8jPOORwr3L8pyxLHXQ8xZIpHUDyC4hEUj6B4BMUjKB5B8QiKR1A8guIRFI+geATFIygeQfEIikdQPILiERSPoHgExSMoHkHxCIpHUDyC4hH+dD3AIVEUIcsyAMD19TWm0ymMMVitVqiqCpvNpuMJexovSRKkabpzzHuPJElgrYVzDmVZoiiKjiZ80bt4WZYhjuMPxxeLBYqiQBRFSNMUzjmMx2PM53OEENofFD265xljcHFxsTcc8HIZA0BVVbi5ucFqtYK1FtPptL0h3+lFPGstZrMZrLUHfydJElxeXiKKIoQQcHt72wQ8Oztrcdo3rV+2+84Uay2MMV/+rTEG5+fnuLu7Q13XuL+/x2w2g3Ouk4dI62feaDT68PWdcNuyLIMxBiGE5qGRJMlvjPupXly2P2WM2bkHAi//lLYNMh7w9gABgPV6/en98rcMNt72pd7VC/Ng4/XBYONtvxifnp52MsNg49V13Xw/Go3gvW99hkHGCyE08V5XJOv1uvU5Wn9Jns/nH47FcXxwWbZPnucIIcAY06wulsvlf5rw+1qPt+8MeT32VcAQAvI8b866yWSCk5MTlGXZyRO3N7sqeZ7j6ekJzrm9P18ul3h8fGzOuMlkgvF4DO99Z1tTvYkHAEVRYLPZNJug2+q6hjEGcRwjTVMYY+C933sbaEuv4gFvy633AdM03Vm/ajP0gKqq4L3f2YGx1sJ736tt+KOrq6vnrocYqkG+5/WF4hEUj6B4BMUjKB5B8QiKR1A8guIRFI+geATFIygeQfEIikdQPILiERSPoHgExSMoHkHxCIpHUDyC4hEUj3B86PNw8jnnHP4C2vPYOQqg5GwAAAAASUVORK5CYII=);
}

/* line 90, ../../../recursos/estilos/v2.x/v2.1/podcast.scss */
.mm_AudioPlayer_pequeno .mm_AudioPlayer_poster {
  width: 118px;
  height: 118px;
}

/* line 95, ../../../recursos/estilos/v2.x/v2.1/podcast.scss */
.mm_AudioPlayer_poster .mm_AudioPlayer_imagen {
  height: 100%;
  width: auto;
  position: absolute;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}

/* line 105, ../../../recursos/estilos/v2.x/v2.1/podcast.scss */
.mm_AudioPlayer .mm_AudioPlayer_texto {
  float: right;
  width: calc(100% - 195px);
}

/* line 110, ../../../recursos/estilos/v2.x/v2.1/podcast.scss */
.mm_AudioPlayer_pequeno .mm_AudioPlayer_texto {
  width: calc(100% - 133px);
}

/* line 114, ../../../recursos/estilos/v2.x/v2.1/podcast.scss */
.mm_AudioPlayer.no-foto .mm_AudioPlayer_texto {
  width: 100%;
}

/* line 118, ../../../recursos/estilos/v2.x/v2.1/podcast.scss */
.mm_AudioPlayer .mm_AudioPlayer_titulo {
  font-weight: 700;
  margin-bottom: 10px;
  margin-top: 5px;
  font-size: 18px;
  line-height: 22px;
}

/* line 126, ../../../recursos/estilos/v2.x/v2.1/podcast.scss */
.mm_AudioPlayer_pequeno .mm_AudioPlayer_titulo {
  font-size: 17px;
  line-height: 20px;
  margin-bottom: 0;
}

/* line 132, ../../../recursos/estilos/v2.x/v2.1/podcast.scss */
.mm_AudioPlayer .mm_AudioPlayer_descripcion {
  font-size: 14px;
  line-height: 18px;
  font-weight: 500;
  width: calc(100% - 195px);
  float: right;
}

/* line 140, ../../../recursos/estilos/v2.x/v2.1/podcast.scss */
.mm_AudioPlayer_pequeno .mm_AudioPlayer_descripcion {
  width: 100%;
  margin-top: 20px;
}

/* line 145, ../../../recursos/estilos/v2.x/v2.1/podcast.scss */
.mm_AudioPlayer.no-foto .mm_AudioPlayer_descripcion {
  width: 100%;
}

/* line 149, ../../../recursos/estilos/v2.x/v2.1/podcast.scss */
.mm_AudioPlayer_contenedor {
  position: relative;
  float: right;
  width: calc(100% - 195px);
  margin-top: 27px;
}

/* line 156, ../../../recursos/estilos/v2.x/v2.1/podcast.scss */
.mm_AudioPlayer_mediano .mm_AudioPlayer_contenedor {
  width: 100%;
}

/* line 160, ../../../recursos/estilos/v2.x/v2.1/podcast.scss */
.mm_AudioPlayer_pequeno .mm_AudioPlayer_contenedor {
  width: 100%;
}

/* line 164, ../../../recursos/estilos/v2.x/v2.1/podcast.scss */
.mm_AudioPlayer.no-foto .mm_AudioPlayer_contenedor {
  float: left;
  width: 68%;
}

/* line 169, ../../../recursos/estilos/v2.x/v2.1/podcast.scss */
.mm_AudioPlayer_pequeno.no-foto .mm_AudioPlayer_contenedor {
  width: 100%;
}

/* line 173, ../../../recursos/estilos/v2.x/v2.1/podcast.scss */
.mm_AudioPlayer_cabecera:after,
.mm_AudioPlayer_contenedor:after {
  content: '';
  display: table;
  clear: both;
}

/* line 180, ../../../recursos/estilos/v2.x/v2.1/podcast.scss */
.mm_AudioPlayer svg {
  height: 100%;
}

/* line 183, ../../../recursos/estilos/v2.x/v2.1/podcast.scss */
.mm_AudioPlayer .mm_boton {
  font-family: Benton Sans, sans-serif;
  line-height: 1;
  box-sizing: border-box;
  padding: 0;
  margin: 0;
  background: none;
  border: none;
  display: inline-block;
  width: 20px;
  height: 36px;
  cursor: pointer;
}

/* line 196, ../../../recursos/estilos/v2.x/v2.1/podcast.scss */
.mm_AudioPlayer .mm_boton_play{
  background-color: #fff;
  overflow: hidden;
  width: 67px;
  height: 67px;
  border-radius: 50%;
  box-shadow: 1px 3px 3px 0px rgba(0, 0, 0, 0.15);
  -webkit-box-shadow: 1px 3px 3px 0px rgba(0, 0, 0, 0.15);
  -moz-box-shadow: 1px 3px 3px 0px rgba(0, 0, 0, 0.15);
}

.mm_AudioPlayer .mm_boton_pausa {
  background-color: #ffffff;
  overflow: hidden;
  width: 67px;
  height: 67px;
  border-radius: 50%;
  box-shadow: 1px 3px 3px 0px rgba(0, 0, 0, 0.15);
  -webkit-box-shadow: 1px 3px 3px 0px rgba(0, 0, 0, 0.15);
  -moz-box-shadow: 1px 3px 3px 0px rgba(0, 0, 0, 0.15);
}

@media (min-width: 1000px) {
  .mm_AudioPlayer .mm_boton_pausa {
    background-color: #f2f2f2;
    overflow: hidden;
    width: 67px;
    height: 67px;
    border-radius: 50%;
    box-shadow: 1px 3px 3px 0px rgba(0, 0, 0, 0.15);
    -webkit-box-shadow: 1px 3px 3px 0px rgba(0, 0, 0, 0.15);
    -moz-box-shadow: 1px 3px 3px 0px rgba(0, 0, 0, 0.15);
  } 
}

/* line 207, ../../../recursos/estilos/v2.x/v2.1/podcast.scss */
.mm_AudioPlayer .mm_boton_play svg,
.mm_AudioPlayer .mm_boton_pausa svg {
  width: 40px;
  fill: #00b1ff;
}

/* line 213, ../../../recursos/estilos/v2.x/v2.1/podcast.scss */
.mm_AudioPlayer .mm_volumen,
.mm_AudioPlayer .mm_progreso {
  position: relative;
}

/* line 217, ../../../recursos/estilos/v2.x/v2.1/podcast.scss */
.mm_AudioPlayer .mm_progreso {
  position: absolute;
  top: -5px;
  left: 0;
  width: 100%;
  padding-top: 5px;
  padding-bottom: 5px;
  background: transparent;
}

/* line 227, ../../../recursos/estilos/v2.x/v2.1/podcast.scss */
.mm_AudioPlayer_pequeno .mm_progreso {
  position: absolute;
  top: 22px;
  left: 85px;
  width: calc(100% - 120px);
  background: transparent;
}

/* line 237, ../../../recursos/estilos/v2.x/v2.1/podcast.scss */
.mm_AudioPlayer_mediano .mm_progreso {
  top: 29px;
  left: 85px;
  width: 50%;
}

/* line 243, ../../../recursos/estilos/v2.x/v2.1/podcast.scss */
.mm_AudioPlayer .mm_control_volumen {
  display: none;
}

/* line 244, ../../../recursos/estilos/v2.x/v2.1/podcast.scss */
.mm_AudioPlayer .mm_volumen {
  width: 75px;
  display: inline-block;
}

/* line 252, ../../../recursos/estilos/v2.x/v2.1/podcast.scss */
.mm_AudioPlayer:not(.mm_AudioPlayer--escritorio) .mm_progreso_barra {
  height: 10px;
  position: relative;
  background: transparent;
}

/* line 258, ../../../recursos/estilos/v2.x/v2.1/podcast.scss */
.mm_AudioPlayer:not(.mm_AudioPlayer--escritorio) .mm_progreso_barra_manejador {
  top: -2px;
}

/* line 262, ../../../recursos/estilos/v2.x/v2.1/podcast.scss */
.mm_AudioPlayer:not(.mm_AudioPlayer--escritorio) .mm_progreso_barra:before {
  content: '';
  display: block;
  height: 2px;
  position: absolute;
  top: 5px;
  left: 0;
  width: 100%;
  background-color: #E3E3E1;
}

/* line 273, ../../../recursos/estilos/v2.x/v2.1/podcast.scss */
.mm_AudioPlayer:not(.mm_AudioPlayer--escritorio) .mm_progreso_barra_porcentaje {
  position: absolute;
  top: 5px;
  height: 6px;
}

/* line 278, ../../../recursos/estilos/v2.x/v2.1/podcast.scss */
.mm_AudioPlayer .mm_progreso_barra {
  position: relative;
}

/* line 280, ../../../recursos/estilos/v2.x/v2.1/podcast.scss */
.mm_AudioPlayer:not(.mm_AudioPlayer_noiniciado) .mm_volumen_barra,
.mm_AudioPlayer:not(.mm_AudioPlayer_noiniciado) .mm_progreso {
  cursor: pointer;
}

/* line 285, ../../../recursos/estilos/v2.x/v2.1/podcast.scss */
.mm_volumen_barra,
.mm_AudioPlayer .mm_progreso_barra {
  left: 0;
  margin-bottom: 0;
  height: 2px;
  background-color: rgba(151, 151, 151, 0.2);
}

/* line 291, ../../../recursos/estilos/v2.x/v2.1/podcast.scss */
.mm_AudioPlayer .mm_volumen_barra_porcentaje,
.mm_AudioPlayer .mm_progreso_barra_porcentaje {
  background-color: #00b1ff;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
}

/* line 300, ../../../recursos/estilos/v2.x/v2.1/podcast.scss */
.mm_AudioPlayer .mm_boton_silencio + .mm_volumen .mm_volumen_barra_porcentaje {
  opacity: 0;
}

/* line 304, ../../../recursos/estilos/v2.x/v2.1/podcast.scss */
.mm_AudioPlayer .mm_progreso_barra_manejador {
  visibility: hidden;
  opacity: 0;
  display: inline-block;
  top: -7px;
  width: 16px;
  height: 16px;
  border-radius: 16px;
  background: #fff;
  position: absolute;
  margin-left: -5px;
  margin-top: 0;
  cursor: pointer;
  outline: none;
  -moz-box-shadow: 1px 1px 0px rgba(0, 0, 0, 0.22);
  /* Safari v3.0+ and by Chrome v0.2+ */
  -webkit-box-shadow: 1px 1px 0px rgba(0, 0, 0, 0.22);
  /* Firefox v4.0+ , Safari v5.1+ , Chrome v10.0+, IE v10+ and by Opera v10.5+ */
  box-shadow: 1px 1px 0px rgba(0, 0, 0, 0.22);
  -ms-filter: "progid:DXImageTransform.Microsoft.dropshadow(OffX=1,OffY=1,Color=#38000000,Positive=true)";
  filter: progid:DXImageTransform.Microsoft.dropshadow(OffX=1,OffY=1,Color=#38000000,Positive=true);
  -webkit-transition: opacity 0.4s cubic-bezier(0, 0, 0.2, 1);
  transition: opacity 0.4s cubic-bezier(0, 0, 0.2, 1);
  -moz-user-select: none;
  -ms-user-select: none;
  -webkit-user-select: none;
}

/* line 333, ../../../recursos/estilos/v2.x/v2.1/podcast.scss */
.mm_AudioPlayer:not(.mm_AudioPlayer_noiniciado) .mm_progreso_barra_manejador {
  visibility: visible;
  opacity: 1;
}

/* line 334, ../../../recursos/estilos/v2.x/v2.1/podcast.scss */
.mm_AudioPlayer .mm_duracion {
  width: auto;
  text-align: center;
  font-size: 10px;
  line-height: 18px;
  font-weight: 700;
}

/* line 342, ../../../recursos/estilos/v2.x/v2.1/podcast.scss */
.mm_AudioPlayer_contenedor {
  vertical-align: middle;
}

/* line 346, ../../../recursos/estilos/v2.x/v2.1/podcast.scss */
.mm_AudioPlayer_contenedor > * {
  display: inline-block;
  vertical-align: middle;
}

/* line 351, ../../../recursos/estilos/v2.x/v2.1/podcast.scss */
.mm_control_volumen,
.mm_control_volumen > * {
  vertical-align: middle;
}

/* line 354, ../../../recursos/estilos/v2.x/v2.1/podcast.scss */
.mm_controles {
  vertical-align: middle;
}

/* line 357, ../../../recursos/estilos/v2.x/v2.1/podcast.scss */
.mm_controles_izda {
  float: left;
}

/* line 358, ../../../recursos/estilos/v2.x/v2.1/podcast.scss */
.mm_controles_dcha {
  float: right;
  top: 17px;
  position: relative;
}

/* line 360, ../../../recursos/estilos/v2.x/v2.1/podcast.scss */
.mm_AudioPlayer .mm_boton,
.mm_AudioPlayer .mm_duracion {
  margin-left: 5px;
  margin-right: 5px;
  font-family: 'Marcin Ant B';
}

/* line 363, ../../../recursos/estilos/v2.x/v2.1/podcast.scss */
.mm_AudioPlayer .mm_volumen_barra,
.mm_AudioPlayer .mm_boton_silencio,
.mm_AudioPlayer .mm_boton_sonido {
  margin-left: 0;
  margin-right: 0px;
}

/* line 367, ../../../recursos/estilos/v2.x/v2.1/podcast.scss */
.mm_AudioPlayer .mm_boton_descarga {
  width: auto;
  height: auto;
}

/* line 372, ../../../recursos/estilos/v2.x/v2.1/podcast.scss */
.mm_boton svg {
  transition: all .2s ease;
}

/* line 374, ../../../recursos/estilos/v2.x/v2.1/podcast.scss */
.mm_boton_play #mm_icono_play,
.mm_boton_pausa #mm_icono_pausa {
  opacity: 1;
}

/* line 377, ../../../recursos/estilos/v2.x/v2.1/podcast.scss */
#mm_icono_pausa, #mm_icono_silencio {
  opacity: 0;
}

/* line 379, ../../../recursos/estilos/v2.x/v2.1/podcast.scss */
.mm_boton_silencio #mm_icono_silencio {
  opacity: 1;
}

/* line 380, ../../../recursos/estilos/v2.x/v2.1/podcast.scss */
.mm_boton_silencio #mm_icono_sonido {
  opacity: 0;
}

/* line 382, ../../../recursos/estilos/v2.x/v2.1/podcast.scss */
.mm_boton_pausa #mm_icono_play {
  opacity: 0;
}

/* line 383, ../../../recursos/estilos/v2.x/v2.1/podcast.scss */
.mm_boton_pausa #mm_icono_pausa {
  opacity: 1;
}

/* line 385, ../../../recursos/estilos/v2.x/v2.1/podcast.scss */
.mm_AudioPlayer_grande .mm_boton_descarga,
.mm_AudioPlayer_mediano .mm_boton_descarga {
  display: inline-block;
  position: relative;
  top: -4px;
}

/* line 388, ../../../recursos/estilos/v2.x/v2.1/podcast.scss */
.mm_AudioPlayer_pequeno .mm_boton_descarga {
  display: inline-block;
  position: relative;
  top: 2px;
}

/* line 390, ../../../recursos/estilos/v2.x/v2.1/podcast.scss */
.mm_volumen {
  display: none;
}

/* line 393, ../../../recursos/estilos/v2.x/v2.1/podcast.scss */
.mm_AudioPlayer_lista {
  font-family: Benton Sans, sans-serif;
  background: #fff;
  color: #202020;
}

/* line 398, ../../../recursos/estilos/v2.x/v2.1/podcast.scss */
.mm_AudioPlayer_audios {
  font-family: 'Majrit Text';
  font-weight: 500;
  padding: 26px 0 26px 8px;
  counter-reset: mm_AudioPlayer_audios;
  border-bottom: 1px solid #4a4a4a;
}

/* line 405, ../../../recursos/estilos/v2.x/v2.1/podcast.scss */
.mm_AudioPlayer_audio {
  line-height: 2;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  cursor: pointer;
  font-size: 12px;
}

/* line 413, ../../../recursos/estilos/v2.x/v2.1/podcast.scss */
.mm_AudioPlayer_audio:before {
  counter-increment: mm_AudioPlayer_audios;
  content: counter(mm_AudioPlayer_audios) ". ";
  display: inline-block;
  width: 26px;
  padding-right: 10px;
  text-align: right;
}

/* line 421, ../../../recursos/estilos/v2.x/v2.1/podcast.scss */
.mm_AudioPlayer_audio:last-child {
  border-bottom: none;
  padding-bottom: 0;
}

/* line 422, ../../../recursos/estilos/v2.x/v2.1/podcast.scss */
.mm_AudioPlayer_audio--activo {
  background-color: rgba(0, 177, 255, 0.1);
  border-radius: 12px;
  border-bottom: none;
}

/* line 428, ../../../recursos/estilos/v2.x/v2.1/podcast.scss */
.mm_AudioPlayer_audio:hover {
  background-color: rgba(0, 177, 255, 0.1);
  border-radius: 12px;
}

/* line 433, ../../../recursos/estilos/v2.x/v2.1/podcast.scss */
.mm_AudioPlayer_audio--activo + .mm_AudioPlayer_audio {
  border-top: none;
}

/* line 438, ../../../recursos/estilos/v2.x/v2.1/podcast.scss */
.mm_AudioPlayer_mediano + .mm_AudioPlayer_lista .mm_AudioPlayer_audio {
  font-size: 12px;
}

/* line 441, ../../../recursos/estilos/v2.x/v2.1/podcast.scss */
.mm_AudioPlayer_grande + .mm_AudioPlayer_lista .mm_AudioPlayer_audio {
  font-size: 14px;
}

/* line 445, ../../../recursos/estilos/v2.x/v2.1/podcast.scss */
.mm_AudioPlayer .mm_duracion .mm_duracion_actual {
  float: left;
  margin-top: 7px;
}

/* line 449, ../../../recursos/estilos/v2.x/v2.1/podcast.scss */
.mm_AudioPlayer .mm_duracion .mm_duracion_total {
  float: right;
  margin-top: 7px;
}

/* line 453, ../../../recursos/estilos/v2.x/v2.1/podcast.scss */
.mm_AudioPlayer_grande:not(.mm_AudioPlayer--escritorio) .mm_progreso {
  top: 25px;
}

/* line 457, ../../../recursos/estilos/v2.x/v2.1/podcast.scss */
.mm_AudioPlayer_grande .mm_progreso {
  top: 29px;
  left: 80px !important;
  width: calc(100% - 225px);
}

/* line 463, ../../../recursos/estilos/v2.x/v2.1/podcast.scss */
.mm_AudioPlayer_grande.mm_AudioPlayer--escritorio .mm_progreso {
  left: 80px;
}

/* ANIMACIONES y ajustes ESCRITORIO */
/* line 466, ../../../recursos/estilos/v2.x/v2.1/podcast.scss */
.mm_AudioPlayer--escritorio .mm_control_volumen {
  width: 106px;
  display: inline-block;
}

/* line 471, ../../../recursos/estilos/v2.x/v2.1/podcast.scss */
.mm_AudioPlayer--escritorio .mm_control_volumen {
  display: inline-block;
}

/* line 472, ../../../recursos/estilos/v2.x/v2.1/podcast.scss */
.mm_AudioPlayer_pequeno .mm_control_volumen {
  display: none;
}

/* line 475, ../../../recursos/estilos/v2.x/v2.1/podcast.scss */
  .mm_AudioPlayer--escritorio .mm_boton_play {
    background-color: #ffffff !important;
  }

@media (min-width: 1000px) {
  .mm_AudioPlayer--escritorio .mm_boton_play {
    background-color: #ffffff !important;
  }
}


.mm_AudioPlayer.cargando .mm_boton_play,
.mm_AudioPlayer.cargando .mm_boton_pausa {
  background-color: #ffffff !important;
  cursor: default;
}

.mm_AudioPlayer.cargando .mm_boton_play:hover,
.mm_AudioPlayer.cargando .mm_boton_pausa:hover {
  background-color: #ffffff !important;
}


@media (min-width: 1000px) {
  .mm_AudioPlayer.cargando .mm_boton_play,
  .mm_AudioPlayer.cargando .mm_boton_pausa {
    background-color: #ffffff !important;
    cursor: default;
  }

  .mm_AudioPlayer.cargando .mm_boton_play:hover,
  .mm_AudioPlayer.cargando .mm_boton_pausa:hover {
    background-color: #ffffff !important;
  }
}



.mm_AudioPlayer--escritorio .mm_boton_pausa {
  background-color: #ffffff !important;
}

@media (min-width: 1000px) {
  .mm_AudioPlayer--escritorio .mm_boton_pausa {
    background-color: #fff !important;
  }
}


.mm_AudioPlayer--escritorio .mm_boton_play:hover{
  background-color: #ffffff !important;
}


.mm_AudioPlayer--escritorio .mm_boton_pausa:hover {
  background-color: #ffffff !important;
}

@media (min-width: 1000px) {
  .mm_AudioPlayer--escritorio .mm_boton_pausa:hover {
    background-color: #ffffff !important;
  }
}

@media (min-width: 1000px) {
  .mm_AudioPlayer--escritorio .mm_boton_play:hover{
    background-color: #ffffff !important;
  }

  .mm_AudioPlayer--escritorio .mm_boton_pausa:hover {
    background-color: #ffffff !important;
  }
}

/* line 476, ../../../recursos/estilos/v2.x/v2.1/podcast.scss */
.mm_AudioPlayer--escritorio .mm_boton_play:hover svg,
.mm_AudioPlayer--escritorio .mm_boton_pausa:hover svg {
  /* fill: #fff; */
}

/* line 477, ../../../recursos/estilos/v2.x/v2.1/podcast.scss */
.mm_AudioPlayer--escritorio .mm_boton_play,
.mm_AudioPlayer--escritorio .mm_boton_pausa {
  overflow: hidden;
  position: relative;
  -webkit-backface-visibility: hidden;
  backface-visibility: hidden;
  background-color: #000;
  z-index: 1;
  margin: 0;
  text-align: center;
}


@media (min-width: 1000px) {
            /* line 478, ../../../recursos/estilos/v2.x/v2.1/podcast.scss */
            .mm_AudioPlayer--escritorio .mm_boton_play::before {
              background: #ffffff;
              content: '';
              position: absolute;
              top: 0;
              right: 0;
              bottom: 0;
              left: 0;
              transform-origin: top left;
              transition: transform 0.5s cubic-bezier(0.77, 0, 0.175, 1);
            }



            .mm_AudioPlayer--escritorio .mm_boton_pausa::before {
              background: #ffffff;
              content: '';
              position: absolute;
              top: 0;
              right: 0;
              bottom: 0;
              left: 0;
              transform-origin: top left;
              transition: transform 0.5s cubic-bezier(0.77, 0, 0.175, 1);
            }

            /* line 479, ../../../recursos/estilos/v2.x/v2.1/podcast.scss */
            .mm_AudioPlayer--escritorio .mm_boton_play:hover::before,
            .mm_AudioPlayer--escritorio .mm_boton_pausa:hover::before {
              visibility: visible;
              transition: transform 0.5s cubic-bezier(0.77, 0, 0.175, 1), visibility 0s 0.47s;
              transform: scaleY(0);
            }

            /* line 480, ../../../recursos/estilos/v2.x/v2.1/podcast.scss */
            .mm_AudioPlayer--escritorio .mm_boton_play svg,
            .mm_AudioPlayer--escritorio .mm_boton_pausa svg {
              position: relative;
              display: inline-block;
              /* animation: mm_AudioPlayer-roll-out 0.5s forwards cubic-bezier(0.165, 0.84, 0.44, 1); */
            }

            /* line 481, ../../../recursos/estilos/v2.x/v2.1/podcast.scss */
            .mm_AudioPlayer--escritorio .mm_boton_play:hover svg {
              /* animation: mm_AudioPlayer-roll-over 0.5s forwards cubic-bezier(0.165, 0.84, 0.44, 1); */
            }

}

/* line 483, ../../../recursos/estilos/v2.x/v2.1/podcast.scss */
.mm_AudioPlayer_grande.mm_AudioPlayer--escritorio .mm_progreso {
  width: calc(100% - 230px);
}

/* line 488, ../../../recursos/estilos/v2.x/v2.1/podcast.scss */
.mm_AudioPlayer--escritorio svg:hover #mm_icono_descarga_flecha {
  -moz-animation: mm_AudioPlayer-bounce 2s infinite;
  -webkit-animation: mm_AudioPlayer-bounce 2s infinite;
  animation: mm_AudioPlayer-bounce 2s infinite;
}

/* AJUSTES TOP */
/* line 495, ../../../recursos/estilos/v2.x/v2.1/podcast.scss */
.playerMPEPA:focus {
  outline: none;
  border: none;
  box-shadow: none;
}

/* line 496, ../../../recursos/estilos/v2.x/v2.1/podcast.scss */
.playerMPEPA .commonmm_baseExpand {
  padding-top: 0 !important;
}

/* line 497, ../../../recursos/estilos/v2.x/v2.1/podcast.scss */
.playerMPEPA .commonmm_sonExpand,
.playerMPEPA .commonmm_sonExpand_forceson {
  position: static;
  width: auto;
  height: auto;
}

/* Ajustes player pequeño */
/* line 503, ../../../recursos/estilos/v2.x/v2.1/podcast.scss */
.mm_AudioPlayer_pequeno + .mm_AudioPlayer_lista .mm_AudioPlayer_audios {
  padding: 13px 0 13px 8px;
}



/* Ajustes player para cuando no lleva caratula */
.mm_AudioPlayer_nocaratula .mm_AudioPlayer_texto,
.mm_AudioPlayer_nocaratula .mm_AudioPlayer_descripcion, 
.mm_AudioPlayer_nocaratula .mm_AudioPlayer_contenedor {
  float: left;
  width: 100%;
}

.mm_AudioPlayer_nocaratula .mm_AudioPlayer_poster {
  display: none;
}




/* Ajustes player para usuarios no registrados */
.mm_AudioPlayer span.mm_boton_play {
  display: none;
}

.mm_AudioPlayer-registro button.mm_boton_play,
.mm_AudioPlayer-registro .mm_boton_descarga,
.mm_AudioPlayer-registro .mm_progreso_barra_porcentaje,
.mm_AudioPlayer-registro .mm_volumen_barra_porcentaje,
.mm_AudioPlayer-registro .mm_progreso_barra_manejador {
  display: none;
}

.mm_AudioPlayer-registro span.mm_boton_play {
  opacity: .4;
  pointer-events: none;
  display: block;
}

.mm_AudioPlayer-registro span.mm_boton_play svg {
  fill: rgba(151, 151, 151, 0.2);
}

.mm_AudioPlayer-registro .mm_duracion {
  color: rgba(151, 151, 151, 0.2);
}

.mm_AudioPlayer-registro .mm_boton_sonido {
  pointer-events: none;
  fill: rgba(151, 151, 151, 0.2);
}

.mm_AudioPlayer-registro.mm_AudioPlayer_grande .mm_progreso {
  width: calc(100% - 200px);
}

.mm_AudioPlayer-registro.mm_AudioPlayer_mediano .mm_progreso {
  width: calc(100% - 205px);
}


@keyframes mm_AudioPlayer-roll-over {
  35% {
    transform: translateY(10px);
  }
  35.001% {
    color: #fff;
    transform: translateY(-20px);
  }
  100% {
    color: #fff;
    transform: translateY(0);
  }
}
@keyframes button--dark-roll-over {
  35% {
    transform: translateY(10px);
  }
  35.001% {
    color: #171b1a;
    transform: translateY(-20px);
  }
  100% {
    color: #171b1a;
    transform: translateY(0);
  }
}
@keyframes mm_AudioPlayer-roll-out {
  0% {
    color: #fff;
  }
  35% {
    transform: translateY(20px);
    opacity: 0;
  }
  60% {
    opacity: 0;
  }
  60.001% {
    opacity: 1;
    transform: translateY(-15px);
  }
  100% {
    transform: translateY(0);
  }
}
@keyframes button--dark-roll-out {
  0% {
    color: #171b1a;
  }
  35% {
    transform: translateY(20px);
    opacity: 0;
  }
  60% {
    opacity: 0;
  }
  60.001% {
    opacity: 1;
    transform: translateY(-15px);
  }
  100% {
    transform: translateY(0);
  }
}
@-moz-keyframes mm_AudioPlayer-bounce {
  0%, 20%, 50%, 80%, 100% {
    -moz-transform: translateY(0);
    transform: translateY(0);
  }
  40% {
    -moz-transform: translateY(-8px);
    transform: translateY(-8px);
  }
  60% {
    -moz-transform: translateY(-4px);
    transform: translateY(-4px);
  }
}
@-webkit-keyframes mm_AudioPlayer-bounce {
  0%, 20%, 50%, 80%, 100% {
    -webkit-transform: translateY(0);
    transform: translateY(0);
  }
  40% {
    -webkit-transform: translateY(-8px);
    transform: translateY(-8px);
  }
  60% {
    -webkit-transform: translateY(-4px);
    transform: translateY(-4px);
  }
}
@keyframes mm_AudioPlayer-bounce {
  0%, 20%, 50%, 80%, 100% {
    -moz-transform: translateY(0);
    -ms-transform: translateY(0);
    -webkit-transform: translateY(0);
    transform: translateY(0);
  }
  40% {
    -moz-transform: translateY(-8px);
    -ms-transform: translateY(-8px);
    -webkit-transform: translateY(-8px);
    transform: translateY(-8px);
  }
  60% {
    -moz-transform: translateY(-4px);
    -ms-transform: translateY(-4px);
    -webkit-transform: translateY(-4px);
    transform: translateY(-4px);
  }
}

/*# sourceMappingURL=podcast.css.map */



/* Boton loader */
.mm_AudioPlayer .mm_boton_play.svg-loader {
  display: none;
  cursor: default;
  text-align: center;
}

.mm_AudioPlayer.cargando .mm_boton_play .loading-circle {
  display: none;
}

.mm_AudioPlayer.cargando .mm_boton_play .loading-play {
  display: none;
  position: relative;
}

.mm_AudioPlayer.cargando .mm_boton_play .loading-circle {
  display: inline-block;
  width: 25px;
}

.mm_AudioPlayer.cargando .mm_boton_pausa .loading-circle {
  display: inline-block;
  width: 25px;
}

.mm_AudioPlayer.iniciar .mm_boton_play .loading-circle {
  display: none;
}

.mm_AudioPlayer.iniciar .mm_boton_pausa .loading-circle {
  display: none;
}

.mm_AudioPlayer.cargando .mm_boton_play.svg-loader {
  display: block;
}

.mm_AudioPlayer.cargando .mm_boton_play svg {
  display: none;
}

.mm_AudioPlayer.cargando .mm_boton_pausa svg {
  display: none;
}

.mm_AudioPlayer.cargando .mm_boton_play::before {
  background: #ffffff;
}

.mm_AudioPlayer.cargando .mm_boton_pausa::before {
  background: #ffffff;
}

.loader-svg{
  position: absolute;
  left: 0; right: 0; top: 0; bottom: 0;
  fill: none;
  stroke-width: 8px;
  stroke-linecap: round;
  stroke: rgb(0, 177, 255);
}
.loader-svg.bg{
  stroke-width: 8px;
  stroke: #ffffff;
}

@media (min-width: 1000px) {
  .loader-svg.bg{
    stroke-width: 8px;
    stroke: #ffffff;
  }  
}

.animate{
  stroke-dasharray: 242.6;
  animation: fill-animation 1s cubic-bezier(1,1,1,1) 0s infinite;
}

@keyframes fill-animation{
  0%{
    stroke-dasharray: 40 242.6;
    stroke-dashoffset: 0;
  }
  50%{
    stroke-dasharray: 141.3;
    stroke-dashoffset: 141.3;
  }
  100%{
    stroke-dasharray: 40 242.6;
    stroke-dashoffset: 282.6;
  }
}
atic2.chartbeat.com/frontend_ng/hud/hud-inpage/hud-inpage-"+b+".js"),b=w(d)?d:{},b.src=a,a=ub("script",b),a.setAttribute("type","text/javascript"),b=document.head||document.getElementsByTagName("head")[0],w(d)?d.appendChild(a):b&&b.appendChild(a)}}
function Qc(){bb(Nc);Nc=d;Ia(r,"message",Pc);Oc&&Oc.parentNode&&Oc.parentNode.removeChild(Oc);Oc=d};var Rc=/^https?:\/\/([^/]*\.)?chartbeat\.com\/publishing\/hud2\/launch\//;function Sc(){var a=r._sf_async_config&&r._sf_async_config.domain;if(a&&!Mc){Mc=g;a="https://chartbeat.com/publishing/hud2/versioninfo/?host="+encodeURIComponent(a);Ha(r,"message",Pc);Nc=ab(Qc,1E4);var b=w(d)?d:{};b.src=a;a=ub("iframe",b);a.style.display="none";w(d)?d.appendChild(a):document.body&&document.body.appendChild(a);Oc=a}}
function Tc(){var a=I.ea(g);return a?(a.setItem("_cb_ip","1"),a.removeItem("_cb_hud_collapsed"),g):j}function Uc(a){/[\/.]chartbeat\.com$/.test(a.origin)&&String(a.data).indexOf("_cb_ip")==0&&Tc()&&(a.source.postMessage(1,a.origin),wb(Sc),Ia(r,"message",Uc))};function Vc(a,b){this.gd=b;this.fd=a[Ob];this.ed=a[Pb];this.Ca=a[B];this.Ja=a[Qb];this.Cc=a[C];this.De=a[Rb];this.Ac=(this.ra=$b())?this.ra.hostname:"";this.ob=this.ra?J(this.ra.pathname)+this.ra.search+this.ra.hash:"";this.Xc=Zb(j);this.pe=ac(j);var c=mb("property","meta",i,"og:url");this.eb=(this.Ra=c&&c.length?kb(c[0].content):i)?J(this.Ra.pathname)+this.Ra.search+this.Ra.hash:"";this.Qd=this.Ra?this.Ra.hostname:"";this.Rb=document.title||"";var e;if((c=mb("property","meta",i,"og:title"))&&c.length)e=
c[0].content;this.Ab=e;var f;if((e=mb("property","meta",i,"twitter:title"))&&e.length)f=e[0].content;this.jb=f;f=!!this.fd;e=this.fd!==d;var c=!!this.ed,h=this.ed!==d,l=!!this.ra,o;o=x(this.Ac);var n=x(this.pe);o=o===n;var n=!!this.eb,D=!this.ra?j:this.ob===this.eb,G=this.ob===this.Xc,R;R=this.ob;var U=Da(this.Xc);R=R===U;var U=!!this.Rb,ha=!!this.Ab,ca=!!this.jb,N=this.Rb===this.Ab,E=!this.jb?j:this.Rb===this.jb,ja=!this.Ab||!this.jb?j:this.Ab===this.jb,ka=!!this.Ja,wd=!!this.Ca,xd=this.Ca?this.Ca.charAt(0)!==
"/":j,yd=!this.ra?j:this.Ca===this.ob,zd=!this.eb?j:this.Ca===this.eb,Ad=!this.ra?j:this.Cc===x(this.Ac),Bd=!this.eb?j:this.Cc===x(this.Qd),Cd=!!this.gd,Dd=this.gd?j:!!this.De,Ed=Pa()==="https:",Fd=!!XMLHttpRequest,ya;this.Ca?(ya=Ea(this.Ca),ya=ya!==Da(ya)):ya=j;f=[f,e,c,h,l,o,n,D,G,R,U,ha,ca,N,E,ja,ka,wd,xd,yd,zd,Ad,Bd,Cd,Dd,Ed,Fd,ya];e=1;for(h=c=0;h<f.length;h++)c|=f[h]&&e,e<<=1;this.rd=("00000000"+c.toString(16)).slice(-8)};function Wc(){"postMessage"in window&&Ha(r,"message",v(this.Hd,this));ic.call(this);Sb("_cbq",v(this.Wc,this))}ea(Wc,ic);
Wc.prototype.da=function(){Wc.la.da.call(this);var a=this.kb;gc().u=a;a=this.Fa;gc().t=a;this.Od=new Vc(this.k,this.xb);this.Lb=i;Tb(this.k);var a=!!this.k[Ob],b=ac(!!this.k[Pb]&&a);F(this.k,"pingServer","ping.chartbeat.net");F(this.k,Qb,document.title);F(this.k,C,b);this.k[B]=this.k[B]?J(this.k[B]):Zb(a);this.ma=x(b);this.k[C]=x(this.k[C]);this.od=yb(z,"c",this.Ud,this);this.pd=yb(z,"r",this.Vd,this);this.Pa=i};Wc.prototype.ld=function(a){this.Lb=a};
Wc.prototype.fb=function(){this.B.update("_chartbeat4",["t="+this.Fa,"E="+this.na.Xa,"x="+qc(this),"c="+Math.round((u()-this.Ua)/600)/100,"y="+qb("Height"),"w="+pb()].join("&"),60,d,d,1)};var jb="h,p,u,d,g,g0,g1,g3,g4,n,nc,f,c,x,m,y,o,w,j,R,W,I,E,e,v,r,vp,K,l1,KK,PA,b,A,_c,_m,_x,_y,_z,_s,t,V,z,i,L,tz,l,,sn,C,sv,sr,sd,im".split(",");q=Wc.prototype;
q.Da=function(a){this.hb++;var b={};b.g=this.k.uid;b.g0=Ub(this.k,"sections")||"No%20Section";b.g1=Ub(this.k,"authors")||"No%20Author";b.g2=Ub(this.k,"zone");b.g3=Ub(this.k,"sponsorName");b.g4=Ub(this.k,"type");!this.k.noCookies&&this.B.isSupported()?b.n=this.$b:b.nc=1;b.c=Math.round((u()-this.Ua)/600)/100;b.E=this.na.Xa;var c=qc(this);this.cb=Math.max(this.cb,c);b.x=c;b.m=this.cb;b.y=qb("Height");b.o=qb("Width");b.w=pb();b.b=this.gb>0?this.gb:"";if(this.Jc&&!this.k.noCookies&&this.B.isSupported())b.f=
this.Jc;b[""]=Vb(this.k);b.t=this.Fa;b.V=128;b.tz=(new Date).getTimezoneOffset();b.sn=this.hb;b.sv=this.we;b.sr=this.ve;b.sd=this.ue;c=this.na.ab;b.h=encodeURIComponent(this.k[C]);b.p=encodeURIComponent(this.k[B]);b.u=this.kb;b.d=encodeURIComponent(this.ma);b.j=Math.round((this.Qa+2)*15E3/1E3);b.R=0;b.W=0;b.I=0;A.nd()?b.W=1:this.k.reading&&+this.k.reading||c>0||b.c<0.09?b.R=1:b.I=1;b.e=c;c=lc(this);if(this.mc){this.mc=j;if(c)this.Pa=Xc(this);b.i=sc(this);var e=this.k.hudTrackable;e!==d&&(b.L=e?"1":
"0");this.k.alias&&(b.PA=encodeURIComponent(this.k.alias))}if(c){if(this.Pa){if(b.v=encodeURIComponent(this.Pa.path),b.K=Yc(this.Pa),this.Pa.ac>1)b.l1=this.Pa.ac}else b.v=mc(this);this.xb&&(b.vp=1)}else b.r=mc(this);c=db(b.v);gc().v=c;c=db(b.r);gc().r=c;b.A=this.Lb?this.Lb:"";b._c=gb("utm_campaign",this.k.campaignTag);b._m=gb("utm_medium",this.k.mediumTag);b._x=gb("utm_source",this.k.sourceTag);b._y=gb("utm_content",this.k.contentTag);b._z=gb("utm_term",this.k.termTag);b.im=this.Od.rd;this.k.idSync?
(c=[],ga(new fa,this.k.idSync,c),c=encodeURIComponent(c.join(""))):c="";b._s=c;b.z=tc(this);b.C=this.k.mobileApp?1:"";b.KK=a?Yc(a):"";b.l=Yb(this.B)?1:"";this.na.ab=0;this.ib(Pa()+"//"+this.k.pingServer+"/ping?"+ib(b))};
q.Hd=function(a){var b=this.k,c=b.playerdomain||this.ma;if(ta(a.origin)===ta(c))if(c=a.data,Ka(c)&&c.indexOf("cbqpush::")===0)a=c.split("::"),a.length==3&&(a=a.slice(1),a[0].indexOf("_")===0&&this.Wc(a));else if(c=="cbdata?"){var c="&u="+fc("u"),e="&t="+fc("t"),f="&v="+fc("v"),h="&r="+fc("r"),b="domain="+encodeURIComponent(b[C])+"&uid="+encodeURIComponent(b.uid)+"&path="+encodeURIComponent(b[B])+"&title="+sc(this)+"&referrer="+mc(this)+"&internal="+(lc(this)?"1":"0")+"&subdomain="+encodeURIComponent(this.ma)+
c+e+f+h+"&utoken="+this.kb;a.source.postMessage(b,"*")}};q.Wc=function(a){var b=a[0],a=a[1];if(b==="_demo"&&this.k._demo)this.k._demo=this.k._demo+"%2C"+a;else if(a!==this.k[b]&&(this.k[b]=a,this.Qa=0,this.hb>0&&!this.tb)){var c=this.hb,e=this;this.tb=ab(function(){e.tb=i;e.hb===c&&e.Da()},1E3)}};function Zc(a){a=a.replace(/-{2,}/g,"-");a=kb(a);a.pathname=J(a.pathname);return a}q.Ud=function(a){$c(this,a,"c")};q.Vd=function(a){$c(this,a,"r")};
function $c(a,b,c){if(a.pc&&u()-a.Ua>=a.yb)a.terminate();else{var e=b.href||"",e=Zc(e);if(e.protocol.indexOf("http")===0){var f=e.hostname!==r.location.hostname,e=lb(e),h=rb(b,function(a){return a.id}),l=Gc(b,h),o="";a.k.moduleAttribute&&(o=(o=nb(b,a.k.moduleAttribute))?o.getAttribute(a.k.moduleAttribute):"",o=o.replace(/::/g,"-").substr(0,40));h?(l&&(l="/"+l),l="*[@id='"+h.id+"']"+l,h=Gc(b)):h=l;l=pa(l);h=pa(h);b=vc(b);c={left:b.x,top:b.y,path:a.k[B],href:e,xc:l,Kb:h,wc:"",qc:c,ac:0,Cd:a.k[C],Zb:o};
a.Da(c);f||a.B.update("_chartbeat5",ad(c),60,j,d,3,function(a){a=a.split("|");return a[2]+"|"+a[3]})}}}function Yc(a){return[a.left,a.top,a.xc,encodeURIComponent(a.wc),a.qc,encodeURIComponent(a.href),a.Kb,a.Zb].join("::")}function ad(a){var b=encodeURIComponent(a.wc),b=b.replace(/-/g,"%2D");b.length>512&&(b="");return[a.left,a.top,encodeURIComponent(a.path),encodeURIComponent(a.href),a.xc,b,a.qc,a.Kb,encodeURIComponent(a.Cd),a.Zb].join("|")}
function Xc(a){var b=a.B.D("_chartbeat5");if(!b)return i;var c=b.split("::"),b=c.length,e,f=i,h,l=Zc(r.location.href),o=lb(l);t(c,function(a,b){var c=a.split("|"),l=decodeURIComponent(c[3]);if(l){l=Ga(o,l);if(l===0)return e=c,f=b,j;else if(l===i)return g;if(h===d||l<h)h=l,e=c,f=b}});if(f===i)return i;c.splice(f,1);a.B.create("_chartbeat5",c.join("::"),60);(a=e[5])?(a=a.replace(/%2D/g,"-"),a=decodeURIComponent(a)):a="";return{left:e[0],top:e[1],path:decodeURIComponent(e[2]),href:decodeURIComponent(e[3]),
xc:e[4]||"",wc:"",Kb:e.length>7?e[7]:"",qc:e.length>6?e[6]:"c",ac:b,Zb:e[9]?e[9]:""}}q.terminate=function(){zb(z,this.od);zb(z,this.pd);bb(this.tb);this.tb=i;Wc.la.terminate.call(this)};var L="ct",M="s1";function O(a){this.a=a;this.G=this.F=j;this.q=u();this.ga()}q=O.prototype;q.ga=function(){this.a.currentTime()>0&&!this.a.paused&&!this.a.ended&&this.fa();this.a.on("play",v(this.fa,this));this.a.on("dispose",v(this.Xd,this));this.a.ready(v(this.ka,this))};q.ka=function(){this.F=g};q.fa=function(){this.G=g};q.Xd=function(){var a=r._cbv;a&&a.push&&a.push(["removePlayer",this.a])};q.M=function(){return this.F&&this.N()!==""};
q.Tb=function(){var a;this.a.cb_configs&&this.a.cb_configs[C]?a=this.a.cb_configs[C]:!a&&r._sf_async_config&&r._sf_async_config[C]&&(a=r._sf_async_config[C]);return a};q.Ub=function(){var a;this.a.cb_configs&&this.a.cb_configs.uid?a=this.a.cb_configs.uid:!a&&r._sf_async_config&&r._sf_async_config.uid&&(a=r._sf_async_config.uid);return a};q.N=function(){var a=this.a.mediainfo;return(a&&a.hasOwnProperty("name")?a.name:this.a.el().getAttribute("title"))||""};
q.J=function(){var a=this.a.mediainfo;return(a&&a.hasOwnProperty("id")?a.id:this.a.el().attributes["data-video-id"]&&this.a.el().attributes["data-video-id"].value?this.a.el().attributes["data-video-id"].value:this.a.src())||""};q.T=function(){return L};q.O=p("");q.aa=function(){var a=this.a.duration();return y(a)};q.H=function(){return!this.G?M:this.a.ended()?"s4":this.a.paused()?"s3":"s2"};q.U=function(){var a=this.a.currentTime();return y(a)};q.S=p(-1);
q.$=function(){var a=this.a.mediainfo;return(a&&a.hasOwnProperty("thumbnail")?a.thumbnail:this.a.poster())||""};q.X=k();q.Q=k();q.ba=function(){return Va(this.q)};q.Y=function(){var a=[];this.a.cb_configs&&this.a.cb_configs.sections?a=this.a.cb_configs.sections.split(","):a.length==0&&r._sf_async_config&&r._sf_async_config.sections&&(a=r._sf_async_config.sections.split(","));if(a.length>0&&a[0]!=="")return a};
q.P=function(){var a=[];this.a.cb_configs&&this.a.cb_configs.authors?a=this.a.cb_configs.authors.split(","):a.length==0&&r._sf_async_config&&r._sf_async_config.authors&&(a=r._sf_async_config.authors.split(","));if(a.length>0&&a[0]!=="")return a};q.Z=p("BCN");O.prototype.getStrategyName=O.prototype.Z;O.prototype.isReady=O.prototype.M;O.prototype.getHost=O.prototype.Tb;O.prototype.getUid=O.prototype.Ub;O.prototype.getTitle=O.prototype.N;O.prototype.getVideoPath=O.prototype.J;
O.prototype.getContentType=O.prototype.T;O.prototype.getAdPosition=O.prototype.O;O.prototype.getTotalDuration=O.prototype.aa;O.prototype.getState=O.prototype.H;O.prototype.getCurrentPlayTime=O.prototype.U;O.prototype.getBitrate=O.prototype.S;O.prototype.getThumbnailPath=O.prototype.$;O.prototype.getPlayerType=O.prototype.X;O.prototype.getAutoplayType=O.prototype.Q;O.prototype.getViewStartTime=O.prototype.ba;O.prototype.getSections=O.prototype.Y;O.prototype.getAuthors=O.prototype.P;
O.verify=function(a){return a.controlBar!==d||a.cb_plugin_version!==d};function P(a){this.Ya=this.ma=d;this.F=j;this.Vc=this.Dc=-1;this.ua=i;this.a=a;this.G=j;this.hc=g;this.q=u();this.jc="";for(var a=window.experienceJSON.data.configuredProperties.plugins.list.split(" "),b=a.length,c=0;c<b;c++){var e=a[c];if((e.indexOf("chartbeat")>=0||e.indexOf("localhost")>=0)&&e.indexOf(".js")>=0){this.jc=e;break}}if(this.jc){a=fb(this.jc);if(this.ma=a[C])this.ma=this.ma.replace(/^video@/,"");this.Ya=a.uid}a=window.brightcove;this.a=a.api.getExperience();b=this.a.getModule(a.api.modules.APIModules.EXPERIENCE);
b.getReady()?this.Tc():b.addEventListener(a.player.events.ExperienceEvent.TEMPLATE_READY,s(this.Tc,this))}q=P.prototype;
q.Tc=function(){var a=window.brightcove,b=this.a.getModule(a.api.modules.APIModules.VIDEO_PLAYER),c=this;b.getVideoDuration(function(a){c.Dc=Math.round(a)});b.getCurrentVideo(function(a){c.ua=a});a=a.api.events.MediaEvent;b.addEventListener(a.PROGRESS,s(this.ee,this));b.addEventListener(a.STOP,s(this.ge,this));b.addEventListener(a.COMPLETE,s(this.Wd,this));b.addEventListener(a.BEGIN,s(this.fa,this));this.F=g};q.ee=function(a){this.Vc=a.position;this.ya=this.hc=j};q.ge=function(){this.hc=g};
q.Wd=function(){this.ya=g};q.fa=function(){this.ya=j;if(!this.G)this.G=g};q.M=m("F");q.N=function(){var a="";this.ua&&(a=this.ua.displayName);return a};q.J=function(){var a="";this.ua&&(a="video@"+this.ma+"/"+this.ua.id);return a};q.T=function(){return L};q.O=p("");q.aa=m("Dc");q.H=function(){return!this.G?M:this.ya?"s4":this.hc?"s3":"s2"};q.U=function(){return y(this.Vc)};q.S=p(-1);q.$=function(){var a="";this.ua&&(a=this.ua.thumbnailURL);return a};q.X=k();
q.ba=function(){return isNaN(this.q)?0:Ta(this.q)};q.P=k();q.Y=function(){var a;this.ua&&(a=this.ua.tags);return a};q.Q=p("unkn");q.Z=p("BC");q.Tb=m("ma");q.Ub=m("Ya");P.prototype.isReady=P.prototype.M;P.prototype.getTitle=P.prototype.N;P.prototype.getVideoPath=P.prototype.J;P.prototype.getContentType=P.prototype.T;P.prototype.getAdPosition=P.prototype.O;P.prototype.getTotalDuration=P.prototype.aa;P.prototype.getState=P.prototype.H;P.prototype.getCurrentPlayTime=P.prototype.U;
P.prototype.getBitrate=P.prototype.S;P.prototype.getThumbnailPath=P.prototype.$;P.prototype.getPlayerType=P.prototype.X;P.prototype.getViewStartTime=P.prototype.ba;P.prototype.getAuthors=P.prototype.P;P.prototype.getSections=P.prototype.Y;P.prototype.getAutoplayType=P.prototype.Q;P.verify=function(a){return a===window.brightcove};P.prototype.getStrategyName=P.prototype.Z;P.prototype.getHost=P.prototype.Tb;P.prototype.getUid=P.prototype.Ub;function Q(a){this.a=a;this.G=this.F=j;this.q=u();this.Nc=this.xa=this.Ea=d;this.Ja=this.Ia="";this.Yb=d;this.ga()}var bd=/url\(['"]?([^'"\)]*)['"]?\)/;q=Q.prototype;
q.Sb=function(){var a=this.Nc=this.J();if(this.a.conf&&(this.Ja=this.a.conf.title?this.a.conf.title:"",this.Ia=this.a.conf.poster?this.a.conf.poster:"",this.Ja&&this.Ia))return g;var b=mb("name","param"),c=d;t(b,function(b){if(b.attributes.name&&b.attributes.name.value==="flashvars"&&b.value.indexOf(a)!==-1)return c=b,j});c===d&&(b=mb("src","video"),t(b,function(b){if(b.attributes.src.value&&a.indexOf(b.attributes.src.value)!=-1)return c=b,j}));b=nb(c,"data-swf")||nb(c,"poster");if(b===j)return j;
this.Ia=b.attributes.poster&&b.attributes.poster.value;if(!this.Ia){var e=b.style.background;if(e&&(e=e.match(bd)))this.Ia=e[1]}this.Ja=b.title;if(this.Yb!==d)clearInterval(this.Yb),this.F=g;return g};function cd(a){if(a.Nc!==a.J())a.Ia="",a.Ja="",a.Sb()}q.ga=function(){this.a.ready?this.ka():this.a.bind("ready",s(this.ka,this));this.a.bind("resume",s(this.fa,this));this.a.playing&&this.fa()};q.ka=function(){this.Sb()===j?this.Yb=setInterval(s(this.Sb,this),1E3):this.F=g};
q.fa=function(){if(!this.G)this.G=g};q.M=m("F");q.N=function(){cd(this);return this.Ja};q.J=function(){return this.a.video.url||this.a.video.src};q.T=function(){return L};q.O=p("");q.aa=function(){return this.a.video.duration&&this.a.video.duration*1E3};q.H=function(){return!this.G?M:this.a.Le?"s4":this.a.paused?"s3":"s2"};q.U=function(){return y(this.a.video.time)};q.S=p(-1);q.$=function(){cd(this);return this.Ia};q.X=k();q.Q=k();q.ba=function(){return isNaN(this.q)?0:Ta(this.q)};q.Y=m("Ea");
q.P=m("xa");q.Z=p("FP");Q.prototype.getStrategyName=Q.prototype.Z;Q.prototype.isReady=Q.prototype.M;Q.prototype.getTitle=Q.prototype.N;Q.prototype.getVideoPath=Q.prototype.J;Q.prototype.getContentType=Q.prototype.T;Q.prototype.getAdPosition=Q.prototype.O;Q.prototype.getTotalDuration=Q.prototype.aa;Q.prototype.getState=Q.prototype.H;Q.prototype.getCurrentPlayTime=Q.prototype.U;Q.prototype.getBitrate=Q.prototype.S;Q.prototype.getThumbnailPath=Q.prototype.$;Q.prototype.getPlayerType=Q.prototype.X;
Q.prototype.getAutoplayType=Q.prototype.Q;Q.prototype.getViewStartTime=Q.prototype.ba;Q.prototype.getSections=Q.prototype.Y;Q.prototype.getAuthors=Q.prototype.P;Q.verify=function(a){return window.flowplayer&&a.engine&&a.engine.engineName};function S(a){this.a=a;this.Jb=this.G=this.F=j;this.q=u();this.xa=this.Ea=d;this.ga()}q=S.prototype;q.ga=function(){this.a.readyState>0&&this.ka();this.a.currentTime>0&&!this.a.paused&&!this.a.ended&&this.fa();this.a.addEventListener("canplay",v(this.ka,this));var a=v(this.fa,this);this.a.addEventListener("playing",a);this.a.addEventListener("webkitbeginfullscreen",a);this.a.addEventListener("webkitendfullscreen",v(this.oe,this))};q.ka=function(){this.F=g};q.fa=function(){this.G=g;this.Jb=j};
q.oe=function(){this.Jb=g};q.M=m("F");q.N=function(){return this.a.attributes.title&&this.a.attributes.title.value||""};q.J=function(){return this.a.currentSrc||""};q.T=function(){return L};q.O=p("");q.aa=function(){return y(this.a.duration)};q.H=function(){return!this.G?M:this.a.ended||this.Jb&&this.a.currentTime==this.a.duration?"s4":this.a.paused||this.Jb?"s3":"s2"};q.U=function(){return y(this.a.currentTime)};q.S=p(-1);q.$=function(){return this.a.poster||""};q.X=k();
q.Q=function(){return this.a.autoplay?"auto":"man"};q.ba=function(){return Va(this.q)};q.Y=m("Ea");q.P=m("xa");q.Z=p("H5");S.prototype.getStrategyName=S.prototype.Z;S.prototype.isReady=S.prototype.M;S.prototype.getTitle=S.prototype.N;S.prototype.getVideoPath=S.prototype.J;S.prototype.getContentType=S.prototype.T;S.prototype.getAdPosition=S.prototype.O;S.prototype.getTotalDuration=S.prototype.aa;S.prototype.getState=S.prototype.H;S.prototype.getCurrentPlayTime=S.prototype.U;
S.prototype.getBitrate=S.prototype.S;S.prototype.getThumbnailPath=S.prototype.$;S.prototype.getPlayerType=S.prototype.X;S.prototype.getAutoplayType=S.prototype.Q;S.prototype.getViewStartTime=S.prototype.ba;S.prototype.getSections=S.prototype.Y;S.prototype.getAuthors=S.prototype.P;S.verify=function(a){var b=a instanceof HTMLElement&&a.nodeName==="VIDEO",a=a.getAttribute&&a.getAttribute("data-account")!==i;return b&&!a};function T(a){this.a=a;this.G=this.ya=this.F=j;this.q=u();this.bb=j;this.ga()}q=T.prototype;q.ga=function(){function a(a,f){f=s(f,c);if(aa(b.on)=="function")b.on(a,f);else{var h="on"+a.substr(0,1).toUpperCase()+a.substr(1);if(aa(b[h])=="function")b[h](f)}}var b=this.a,c=this;a("ready",this.ka);a("time",this.ie);a("complete",this.je);a("adStarted",this.va);a("adPlay",this.va);a("adImpression",this.va);a("adTime",this.va);a("adComplete",this.cc);a("adSkipped",this.cc);a("adError",this.cc)};
q.ka=function(){this.F=g};q.ie=function(){this.ya=j;this.G=g;this.bb=j};q.je=function(){this.ya=g};q.va=function(){this.bb=this.G=g};q.cc=function(){this.bb=j};q.M=function(){this.a.getState();return this.F||this.a.getState()!==d};q.N=function(){var a=dd(this);return!a?"":a.title};function dd(a){if(a.a.getPlaylistIndex===d)return a.a.getPlaylistItem();var b=a.a.getPlaylist();if(!b)return i;var c=b.length,a=a.a.getPlaylistIndex();return c===0||c<=a?i:b[a]}
q.J=function(){var a=dd(this);return!a?"":a.mediaid||a.file};q.T=function(){return this.bb?"ad":L};q.O=p("");q.aa=function(){var a=this.a.getDuration();if(a>0)return Math.round(a*1E3)};q.H=function(){if(!this.G)return M;if(this.bb)return"s2";if(this.ya)return"s4";var a=this.a.getState();return a&&a.toUpperCase()==="PAUSED"?"s3":"s2"};q.U=function(){var a=this.a.getPosition();return y(a)};q.S=p(-1);q.$=function(){var a=dd(this);return!a?"":a.image};q.X=k();q.ba=function(){return isNaN(this.q)?0:Ta(this.q)};
q.P=k();q.Y=k();q.Q=p("unkn");q.Z=p("JW");T.prototype.getStrategyName=T.prototype.Z;T.prototype.isReady=T.prototype.M;T.prototype.getTitle=T.prototype.N;T.prototype.getVideoPath=T.prototype.J;T.prototype.getContentType=T.prototype.T;T.prototype.getAdPosition=T.prototype.O;T.prototype.getTotalDuration=T.prototype.aa;T.prototype.getState=T.prototype.H;T.prototype.getCurrentPlayTime=T.prototype.U;T.prototype.getBitrate=T.prototype.S;T.prototype.getThumbnailPath=T.prototype.$;
T.prototype.getPlayerType=T.prototype.X;T.prototype.getViewStartTime=T.prototype.ba;T.prototype.getAuthors=T.prototype.P;T.prototype.getSections=T.prototype.Y;T.prototype.getAutoplayType=T.prototype.Q;T.verify=function(a){return w(a.id)&&w(a.registerPlugin)};function V(a){this.a=a;this.lb="";this.ca=M;this.pa=L;this.ja="";this.q=u();this.ga()}q=V.prototype;q.ga=function(){this.a.kBind("playerStateChange.cb",s(this.ne,this));this.a.kBind("playerUpdatePlayhead.cb",s(this.de,this));this.a.kBind("playerPlayEnd.cb",s(this.me,this));this.a.kBind("adStart.cb",s(this.va,this));this.a.kBind("adEnd.cb",s(this.bc,this));this.a.kBind("switchingChangeComplete.cb",s(this.he,this))};
q.ne=function(a){switch(a){case "playing":this.ca="s2";break;case "buffering":this.ca="s3";break;case "paused":this.ca="s3"}};q.de=function(){this.ca="s2";this.a.kUnbind("playerUpdatePlayhead.cb")};q.me=function(){this.ca="s4"};q.va=function(a){this.pa="ad";switch(a){case "pre":this.ja="a1";break;case "post":this.ja="a3";break;case "mid":this.ja="a2";break;case "main":this.ja="a5"}};q.bc=function(){this.pa=L};q.he=function(a,b){this.td=b};
q.M=function(){return this.a.evaluate("{mediaProxy.entry.name}")!=i};q.N=function(){return this.a.evaluate("{mediaProxy.entry.name}")};q.J=function(){if(!this.M())return this.lb;var a=this.a.evaluate("{mediaProxy.entry.id}");return(this.lb=a)||""};q.T=m("pa");q.O=m("ja");q.aa=function(){var a=this.a.evaluate("{duration}");return y(a)};q.H=m("ca");q.U=function(){var a=this.a.evaluate("{video.player.currentTime}");return y(a)};q.S=m("td");
q.$=function(){return this.a.evaluate("{mediaProxy.entry.thumbnailUrl}")||""};q.X=k();q.Q=function(){var a=this.a.evaluate("{configProxy.flashvars.autoPlay}"),b=this.a.evaluate("{configProxy.flashvars.playlistAPI.autoContinue}"),c=this.a.evaluate("{playlistAPI.dataProvider.selectedIndex}");return b&&c>0?"cont":a?"auto":"man"};q.ba=function(){return isNaN(this.q)?0:Va(this.q)};q.Y=function(){var a=this.a.evaluate("{mediaProxy.entry.tags}");if(a)return a.split(",")};
q.P=function(){var a=this.a.evaluate("{mediaProxy.entry.creatorId}");if(a)return[encodeURIComponent(a)]};q.Z=p("KT");V.prototype.getStrategyName=V.prototype.Z;V.prototype.isReady=V.prototype.M;V.prototype.getTitle=V.prototype.N;V.prototype.getVideoPath=V.prototype.J;V.prototype.getContentType=V.prototype.T;V.prototype.getAdPosition=V.prototype.O;V.prototype.getTotalDuration=V.prototype.aa;V.prototype.getState=V.prototype.H;V.prototype.getCurrentPlayTime=V.prototype.U;V.prototype.getBitrate=V.prototype.S;
V.prototype.getThumbnailPath=V.prototype.$;V.prototype.getPlayerType=V.prototype.X;V.prototype.getAutoplayType=V.prototype.Q;V.prototype.getViewStartTime=V.prototype.ba;V.prototype.getSections=V.prototype.Y;V.prototype.getAuthors=V.prototype.P;V.verify=function(a){return typeof a.kBind=="function"};function W(a){this.a=a;this.F=j;this.ca=M;this.pa=L;this.ja=this.lb="";this.q=u();this.ga()}q=W.prototype;
q.ga=function(){this.a.addEventListener(this.a.Event.Core.PLAY,s(this.fa,this));this.a.addEventListener(this.a.Event.Core.PAUSE,s(this.le,this));this.a.addEventListener(this.a.Event.Core.PLAYBACK_ENDED,s(this.ke,this));this.a.addEventListener(this.a.Event.AD_BREAK_START,s(this.va,this));this.a.addEventListener(this.a.Event.AD_BREAK_END,s(this.bc,this));this.a.addEventListener(this.a.Event.Core.SOURCE_SELECTED,s(this.ka,this))};q.fa=function(){this.ca="s2"};q.le=function(){this.ca="s3"};
q.ke=function(){this.ca="s4"};q.M=function(){return this.F||this.a.config.sources.metadata&&this.a.config.sources.metadata.name};q.va=function(a){this.ca="s3";a=a.payload.adBreak.type;this.pa="ad";switch(a){case "preroll":this.ja="a1";break;case "postroll":this.ja="a3";break;case "midroll":this.ja="a2"}};q.bc=function(){this.pa=L};q.ka=function(){this.F=g};q.N=function(){return this.a.config.sources.metadata?this.a.config.sources.metadata.name:""};
q.J=function(){if(!this.M())return this.lb;var a=this.a.config.sources.id;return(this.lb=a)||""};q.T=m("pa");q.O=m("ja");q.aa=function(){if(typeof this.a.config.sources.duration!=="undefined")return y(this.a.config.sources.duration)};q.H=m("ca");q.U=function(){return y(this.a.currentTime)};q.S=k();q.$=function(){return this.a.poster};q.X=k();
q.Q=function(){var a=this.a.config.playback.autoplay,b=this.a.playlist._playlist._activeItemIndex;return this.a.playlist.options.autoContinue&&b>0?"cont":a?"auto":"man"};q.ba=function(){return isNaN(this.q)?0:Va(this.q)};q.Y=function(){if(this.a.config.sources.metadata&&this.a.config.sources.metadata.tags.length)return this.a.config.sources.metadata.tags.split(", ")};q.P=k();q.Z=p("KT7");W.prototype.getStrategyName=W.prototype.Z;W.prototype.isReady=W.prototype.M;W.prototype.getTitle=W.prototype.N;
W.prototype.getVideoPath=W.prototype.J;W.prototype.getContentType=W.prototype.T;W.prototype.getAdPosition=W.prototype.O;W.prototype.getTotalDuration=W.prototype.aa;W.prototype.getState=W.prototype.H;W.prototype.getCurrentPlayTime=W.prototype.U;W.prototype.getBitrate=W.prototype.S;W.prototype.getThumbnailPath=W.prototype.$;W.prototype.getPlayerType=W.prototype.X;W.prototype.getAutoplayType=W.prototype.Q;W.prototype.getViewStartTime=W.prototype.ba;W.prototype.getSections=W.prototype.Y;
W.prototype.getAuthors=W.prototype.P;W.verify=function(a){return a.Event&&a.Event.Core};function X(a){this.zc=d;this.a=a;this.Mc=d;this.F=j;this.La=d;this.G=j;this.xa=this.Ea=this.q=d;this.zc=r.OO;this.Mc=this.a.mb;this.q=u();this.ga()}q=X.prototype;
q.ga=function(){var a=this.Mc,b=this.zc.EVENTS;a.subscribe(b.CONTENT_TREE_FETCHED,"OoyalaStrategyPlugin",s(this.ka,this));a.subscribe(b.WILL_PLAY_ADS,"OoyalaStrategyPlugin",s(this.Td,this));a.subscribe(b.PLAYING,"OoyalaStrategyPlugin",s(this.fa,this));a.subscribe(b.ADS_PLAYED,"OoyalaStrategyPlugin",s(this.Sd,this));a.subscribe(b.METADATA_FETCHED,"OoyalaStrategyPlugin",s(this.ce,this));a.subscribe(b.EMBED_CODE_CHANGED,"OoyalaStrategyPlugin",s(this.Yd,this))};q.ka=function(){this.F=g};
q.Td=function(){var a=this.a.getPlayheadTime(),b=this.a.getDuration();isNaN(a)&&(a=0);this.La=a===0?"a1":ed(a,b)?"a3":"a2"};q.fa=function(){this.G=g};q.Sd=function(){this.La=d};q.ce=k();q.M=function(){var a=this.a.getState();if(a==="ready"||a==="playing"||a==="paused")this.F=g;return this.F};q.N=function(){var a=this.a.getItem();return a?a.title:""};
q.J=function(){var a=this.a.getEmbedCode&&this.a.getEmbedCode();if(a)return a;a=this.a.getItem()||{};return a.embed_code||a.embedCode||this.a.embedCode||""};q.T=function(){return this.La===d?L:"ad"};q.O=function(){return this.La?this.La:""};q.aa=function(){var a=this.a.getItem(),a=a&&a.duration||this.a.getDuration()*1E3;return a===-1||!isFinite(a)?-1:a};
q.H=function(){if(!this.G)return M;if(this.a.getState()==="paused")return"s3";var a=this.a.getPlayheadTime(),b=this.a.getDuration();return ed(a,b)?"s4":"s2"};function ed(a,b){return a===b||Math.floor(a)===Math.floor(b)||Math.ceil(a)===Math.ceil(b)||Math.ceil(a)===Math.floor(b)||Math.floor(a)===Math.ceil(b)}q.Yd=function(){this.La=d};q.U=function(){var a=this.a.getPlayheadTime();return a===-1||isNaN(a)?-1:a*1E3};
q.S=function(){var a=this.a.getCurrentBitrate&&this.a.getCurrentBitrate();return a?a.bitrate:0};q.$=function(){var a=this.a.getItem();return!a?"":a.promo||a.promo_image||a.thumbnail_image};q.X=k();q.Q=k();q.ba=function(){return isNaN(this.q)?0:Va(this.q||0)};q.Y=m("Ea");q.P=m("xa");q.Z=p("OO");X.prototype.getStrategyName=X.prototype.Z;X.prototype.isReady=X.prototype.M;X.prototype.getTitle=X.prototype.N;X.prototype.getVideoPath=X.prototype.J;X.prototype.getContentType=X.prototype.T;
X.prototype.getAdPosition=X.prototype.O;X.prototype.getTotalDuration=X.prototype.aa;X.prototype.getState=X.prototype.H;X.prototype.getCurrentPlayTime=X.prototype.U;X.prototype.getBitrate=X.prototype.S;X.prototype.getThumbnailPath=X.prototype.$;X.prototype.getPlayerType=X.prototype.X;X.prototype.getAutoplayType=X.prototype.Q;X.prototype.getViewStartTime=X.prototype.ba;X.prototype.getSections=X.prototype.Y;X.prototype.getAuthors=X.prototype.P;
X.verify=function(a){return a.hasOwnProperty("mb")&&a.hasOwnProperty("subscribe")&&a.hasOwnProperty("modules")&&a.hasOwnProperty("isAdPlaying")};function Y(a){this.a=a;this.ia=i;this.$a="";this.ca=M;this.pa=L;this.ja="";this.q=u();this.a.controller.plugInLoaded&&this.a.controller.plugInLoaded(this)}q=Y.prototype;q.Nd=function(a){this.ga(a.controller)};
q.ga=function(a){a.addEventListener("OnLoadRelease",v(this.Rc,this));a.addEventListener("OnLoadReleaseUrl",v(this.Rc,this));a.addEventListener("OnReleaseStart",v(this.fe,this));a.addEventListener("OnMediaPlay",v(this.$d,this));a.addEventListener("OnMediaStart",v(this.be,this));a.addEventListener("OnMediaPause",v(this.fc,this));a.addEventListener("OnMediaComplete",v(this.Zd,this));a.addEventListener("OnMediaError",v(this.fc,this));a.addEventListener("OnMediaBuffer",v(this.fc,this));a.addEventListener("OnMediaPlaying",
v(this.ae,this))};q.Rc=function(a){if(a.data&&a.data.title)this.ia=a.data;if(a.data&&a.data.guid)this.$a=a.data.guid};q.fe=function(a){t(a.data.clips,v(function(a){if(a=a.baseClip.guid)return this.$a=a,j},this));if(this.$a&&a.data.release&&a.data.release.title)this.ia=a.data.release};q.$d=function(){this.ca="s2"};q.be=function(a){this.ca="s2";a=a.data.baseClip;a.isAd?(this.pa="ad",this.ja=a.isMid?"a2":"a1"):(this.pa=L,this.ja="")};q.fc=function(){if(this.ca!=M)this.ca="s3"};
q.Zd=function(){this.ca="s4"};q.ae=function(a){this.xd=a.currentTime};q.M=function(){return this.ia!=i};q.N=function(){return this.ia.title};q.J=function(){return!this.$a?"":this.$a};q.T=m("pa");q.O=m("ja");q.aa=function(){return this.ia.duration};q.H=m("ca");q.U=m("xd");q.S=function(){return this.ia.bitrate};q.$=function(){return this.ia&&this.ia.defaultThumbnailUrl?this.ia.defaultThumbnailUrl:this.ia.pid?"http://link.theplatform.com/s/ngc/"+this.ia.pid+"?format=poster&height=70&width=95":""};
q.X=k();q.Q=k();q.ba=function(){return isNaN(this.q)?0:this.q===d?0:u()-this.q};q.Y=function(){var a=this.ia.keywords?this.ia.keywords.split(","):[],b=[];t(this.ia.categories?this.ia.categories:[],function(a){b.push(encodeURIComponent(a.name))});t(a,function(a){b.push(encodeURIComponent(a.trim()))});return b};q.P=k();q.Z=p("TP");Y.prototype.initialize=Y.prototype.Nd;Y.prototype.getStrategyName=Y.prototype.Z;Y.prototype.isReady=Y.prototype.M;Y.prototype.getTitle=Y.prototype.N;
Y.prototype.getVideoPath=Y.prototype.J;Y.prototype.getContentType=Y.prototype.T;Y.prototype.getAdPosition=Y.prototype.O;Y.prototype.getTotalDuration=Y.prototype.aa;Y.prototype.getState=Y.prototype.H;Y.prototype.getCurrentPlayTime=Y.prototype.U;Y.prototype.getBitrate=Y.prototype.S;Y.prototype.getThumbnailPath=Y.prototype.$;Y.prototype.getPlayerType=Y.prototype.X;Y.prototype.getAutoplayType=Y.prototype.Q;Y.prototype.getViewStartTime=Y.prototype.ba;Y.prototype.getSections=Y.prototype.Y;
Y.prototype.getAuthors=Y.prototype.P;Y.verify=function(a){return typeof a.controller!=="undefined"};function fd(a,b){this.a=a;this.dd=b;this.Oa=window.location!=window.parent.location;this.Uc=j;this.ye=u();this.cd="_v_";this.ta={};ic.call(this)}ea(fd,ic);var gd=r.QUICK_TEST?1E4:6E4,hd="autoDetect",id={He:"title",Ie:"videopath",Ge:"thumbnailpath"},jd={};q=fd.prototype;
q.da=function(){this.$b=(this.Sa=this.B.D("_chartbeat3"))?0:1;this.vc=this.oc=g;this.Pb=j;this.Eb=this.kc=this.Fc=this.Ha=d;this.Ma=15E3;this.pb=d;this.qb=this.rb=0;this.Qb=j;this.qe=this.tc=this.Ib=0;this.lc=j;if(!this.Sa||this.Sa.length===0)this.Sa=pa(kc(this),3);this.B.create("_chartbeat3",this.Sa,34128E3);var a;(a=this.dd)&&La(a)?(this.ha=new a(this.a),a=g):a=j;if(a){a=!!this.k[Ob];var b=ac(!!this.k[Pb]&&a);F(this.k,"pingServer","ping.chartbeat.net");F(this.k,Qb,document.title);F(this.k,C,b);
this.k[B]=this.k[B]?J(this.k[B]):Zb(a);this.k[C]=x(this.k[C]);this.ha.getPlayerType&&F(this.k,"video_type",this.ha.getPlayerType());this.Fc=setInterval(v(this.ud,this),1E3);if(this.Oa===g)this.zb=v(this.Id,this),Ha(window,"message",this.zb),this.pb=setInterval(this.re,1E3);fd.la.da.call(this)}};q.Mb=k();
q.qa=function(){if(this.ha){if(!kd(this))this.vc=g;if(!this.vc)return u()-this.Ua>=this.yb&&clearInterval(this.Ha),fd.la.qa.call(this);if(this.ha.isReady())this.Pb=this.vc=j,this.kc=ld(this),md(this),this.Ha=setInterval(v(this.Ob,this),100),fd.la.qa.call(this);else if(!this.Pb){this.Pb=g;if(this.qe++>150)throw"Error: Video strategy never reported its ready state";nd(this,100)}}};
q.Da=function(){if(this.ha){var a=this.k,b=this.ha,c=b.getState(),e=kd(this),f=this.Oa?[]:r._cbq||(r._cbq=[]),h=b.getViewStartTime(),l=od(this),o=b.getAutoplayType?b.getAutoplayType():d,h=h===-1?-1:h/1E3,l=l?encodeURIComponent(l):d;if(!jd.path||jd.path===e||c==="s2"&&jd.state!=="s2")switch(jd={path:e,state:c},f.push(["_vi",Oa(pd(this))]),f.push(["_vp",e]),f.push(["_vdd",Oa(qd(this))]),f.push(["_vs",b.getState()]),b.getContentType&&f.push(["_vt",b.getContentType()]),b.getAdPosition&&f.push(["_vap",
b.getAdPosition()]),f.push(["_vtn",Oa(od(this))]),f.push(["_vd",b.getTotalDuration()]),b.getState()){case M:case "s2":case "s3":f.push(["R","1"]);break;case "s4":f.push(["R","0"])}a=rd(this)+Z("_vt",b.getContentType?b.getContentType():"")+Z("_vap",b.getAdPosition?b.getAdPosition():"")+Z("_vs",c)+Z("_vcs",this.Qb?"1":"0")+Z("_vbr",b.getBitrate?b.getBitrate():"")+Z("_vvs",h)+Z("_vpt",b.getCurrentPlayTime())+Z("_vtn",l)+Z("_vaup",o||"unkn")+Z("_vplt",a.video_type)+Z("_vce",this.tc)+Z("c",Math.round(Ta(this.ye)/
600)/100)+"&W=0&R="+(c==="s2"?"1":"0")+"&I="+(c!=="s2"?"1":"0")+"&E="+this.Ib+"&j="+(this.Ma/1E3+15)+sd(this)+"&tz="+(new Date).getTimezoneOffset()+(Yb(this.B)?"&l=1":"")+"&_";this.Oa===g&&t(f,function(a){window.top.postMessage("cbqpush::"+a.join("::"),"*")});this.ib(a)}};function Z(a,b){return b!==d&&b!==""?"&"+a+"="+b:""}q.fb=function(){this.B.update("_cb_cp",this.Fa,60,j,",")};function sd(a){var b=a.B.D("_cb_cp");a.B.remove("_cb_cp");return b?"&D="+b:""}
function td(a){return a.k.subdomain?a.k.subdomain:x(r.location.hostname)}function qd(a){var b=a.k,a=a.ha,b=b.videodomain||a.getHost&&a.getHost()||b[C];return"video@"+(b&&b.replace(/^video@/,""))}function kd(a){var b=a.ta.videopath;if(b)return b;if(a.k.videoPathHash){if(a=pd(a))return pa(a)}else return a.ha.getVideoPath();return""}function pd(a){return a.ta.title||a.ha.getTitle()}function od(a){return a.ta.thumbnailpath||a.ha.getThumbnailPath()}
function rd(a){var b=a.k,c=a.ha,e=c.getUid&&c.getUid()||b.uid,f=Oa(qd(a)),h="",l=a.gb?"&b="+a.gb:"",o,n=a.k[B];o=a.k.useSubDomains!==j&&n&&n.substr(0,1)==="/"?td(a)+n:n;var n=c.getSections&&c.getSections(),D=c.getAuthors&&c.getAuthors(),G=b.sections?"&g0="+encodeURIComponent(b.sections):"",R=b.authors?"&g1="+encodeURIComponent(b.authors):"",n=n===d||b.videoPageGroups?G:"&g0="+encodeURIComponent(n.join(",")),D=D===d||b.videoPageGroups?R:"&g1="+encodeURIComponent(D.join(",")),R="",G=kd(a);if(a.Eb===
d)a.Eb=G;else if(G!=a.Eb)R=Z("D",a.Fa),a.Fa=pa(kc(a)),a.Eb=G,a.rb=0,a.qb=0,a.Ib=0,a.tc=0,a.Qb=ud(a)&&!vd(a),a.oc=g;if(a.oc||R){if(a.Oa===j||a.Oa===g&&a.Uc===g)a.oc=j;h=(lc(a)?"&v=":"&r=")+mc(a)}a.Ib+=a.rb;a.rb=0;a.tc+=a.qb;a.qb=0;md(a);var U=G="",ha="",ca="",N="",E="",ja="",ka="";if(!a.Oa===g||a.lc===g)G="&_vi="+sc(a),U="&_vp="+encodeURIComponent(o),ha="&_vh="+Oa(td(a)),ca="&_vdd="+encodeURIComponent(b[C]),a.lc===g?(N=b.u,E=b.t,ja=eb(b.v),ka=eb(b.r)):(N=fc("u"),E=fc("t"),ja=eb(fc("v")),ka=eb(fc("r")));
o="";o=Ka(ja)?"&_pv="+ja:Ka(ka)?"&_pr="+ka:"&_pr=NA";ja="&_pu=";ka="&_pt=";ja+=N?N:"NA";ka+=E?E:"NA";N=!b.noCookies&&a.B.isSupported();E=c.getStrategyName?c.getStrategyName():"";return Pa()+"//"+b.pingServer+"/ping?h="+f+"&g="+e+"&p="+Oa(kd(a))+"&i="+Oa(pd(a))+n+D+"&u="+a.Sa+"&t="+a.Fa+"&x=0&y=0&V=128"+Z("VS",E)+(N?"&n="+a.$b:"&nc=1")+l+h+R+Z("_vd",c.getTotalDuration())+G+U+ha+ja+ka+o+ca}q.Ob=function(){if(ud(this)&&!vd(this))this.Qb=g;var a=ld(this);if(this.kc!=a)this.kc=a,md(this),this.qa()};
function md(a){var b=a.Ma;a.Ma=ud(a)?a.Ib<60?5E3:15E3:gd;b!=a.Ma&&nd(a,a.Ma)}function nd(a,b){clearInterval(a.ub);a.Ma=b;a.ub=setInterval(v(a.qa,a),b)}function ld(a){return a.ha.getState()+a.ha.getContentType()}function ud(a){return a.ha.getState()==="s2"||vd(a)}function vd(a){return a.ha.getContentType()==="ad"}q.ud=function(){ud(this)===g&&(this.rb+=1,this.ha.getContentType()===L&&(this.qb+=1))};q.re=function(){window.parent.postMessage("cbdata?","*")};
q.Id=function(a){if(a.source===window.parent&&(a=a.data,Ka(a)&&a.indexOf("domain=")===0)){this.lc=g;var b={domain:g,uid:g,path:g,title:g,referrer:g,internal:g,subdomain:g,token:g,u:g,t:g,v:g,r:g},c=this;t(a.split("&"),function(a){var a=a.split("="),f=a[0],a=a[1];b[f]&&(c.k[f]=decodeURIComponent(a))});Ia(window,"message",this.zb);clearInterval(this.pb);this.pb=d;this.Uc=g;this.qa()}};q.setProperty=function(a,b){var c=j,e=this;t(id,function(f){if(a.toLowerCase()==f)return e.ta[f]=b,c=g,j});return c};
q.terminate=function(){clearInterval(this.Fc);clearInterval(this.pb);clearInterval(this.Ha);Ia(window,"message",this.zb);fd.la.terminate.call(this)};q.Aa=function(){fd.la.Aa.call(this);this.dd=this.a=this.zb=i};function $(a){this.a=a;this.F=g;this.G=j;this.q=u();this.Ha=this.xa=this.Ea=d;this.ga()}q=$.prototype;q.ga=function(){this.Ha=setInterval(s(this.Ob,this),100);var a=this.a.getPlayerState();(a===1||a===2||a===0)&&this.fa()};q.Ob=function(){if(this.a.getPlayerState()===1)clearInterval(this.Ha),this.Ha=d,this.fa()};q.fa=function(){if(!this.G)this.G=g};function Gd(a){var b;return(b=(a=a.a.getVideoUrl())&&a.match(/[?&]v=([^&]+)/),a=b)&&a[1]}q.M=m("F");
q.N=function(){var a="";La(this.a.getVideoData)&&(a=(a=this.a.getVideoData())&&a.title||"");return a};q.J=function(){return Gd(this)||this.a.getVideoUrl()};q.T=function(){return L};q.O=p("");q.aa=function(){var a=this.a.getDuration();return Ja(a)?a*1E3:a};q.H=function(){if(!this.G)return M;var a=this.a.getPlayerState();return a===0?"s4":a===2?"s3":"s2"};q.U=function(){var a=this.a.getCurrentTime();return y(a)};q.S=p(-1);q.$=function(){return"http://img.youtube.com/vi/"+Gd(this)+"/default.jpg"};
q.X=k();q.Q=k();q.ba=function(){return isNaN(this.q)?0:Ta(this.q)};q.Y=m("Ea");q.P=m("xa");q.Z=p("YT");$.prototype.getStrategyName=$.prototype.Z;$.prototype.isReady=$.prototype.M;$.prototype.getTitle=$.prototype.N;$.prototype.getVideoPath=$.prototype.J;$.prototype.getContentType=$.prototype.T;$.prototype.getAdPosition=$.prototype.O;$.prototype.getTotalDuration=$.prototype.aa;$.prototype.getState=$.prototype.H;$.prototype.getCurrentPlayTime=$.prototype.U;$.prototype.getBitrate=$.prototype.S;
$.prototype.getThumbnailPath=$.prototype.$;$.prototype.getPlayerType=$.prototype.X;$.prototype.getAutoplayType=$.prototype.Q;$.prototype.getViewStartTime=$.prototype.ba;$.prototype.getSections=$.prototype.Y;$.prototype.getAuthors=$.prototype.P;$.verify=function(a){return La(a.getDuration)&&La(a.getVideoUrl)&&La(a.getVideoEmbedCode)};function Hd(){r._cbv_strategies||(r._cbv_strategies=[]);r._cbv_strategies.push(X);r._cbv_strategies.push(S);r._cbv_strategies.push(Q);r._cbv_strategies.push($);r._cbv_strategies.push(T);r._cbv_strategies.push(P);r._cbv_strategies.push(O);r._cbv_strategies.push(V);r._cbv_strategies.push(W);r._cbv_strategies.push(Y);this.uc=[];this.ta=[];this.k=r._sf_async_config||{};Sb("_cbv",v(this.Jd,this));if(this.k[hd]!==j)this.Bd=cb(v(this.Ic,this),5E3),this.Ic(),setTimeout(v(this.wa,this),3E4)}
Hd.prototype.Jd=function(a){if(aa(a)=="array"&&typeof a[0]=="string"){var b=a[0];if(b==="autoDetectYouTubeIframes"){Id();return}else if(b==="removePlayer"){Jd(this,a[1]);return}else if(b==="setProps"){Kd(a[1])||this.ta.push(a[1]);return}}Ld(this,a)};function Md(){if(La(window.videojs)&&La(window.videojs.plugin))try{return window.videojs.plugin("chartbeat",function(a){this.cb_configs=a;window._cbv.push(this)}),g}catch(a){}return j}
function Ld(a,b){var c=j,e=r._cbv_strategies;w(window.jwplayer)&&(b=La(b)?b():b);t(e,function(a){if(a.verify(b))return c=a,j});c&&Nd(a,b,c)}function Jd(a,b){var c=a.uc,e=r.pSUPERFLY_video,f=Ra(c,function(a){return b===a});f!==-1&&c.splice(f,1);f=Ra(e,function(a){return a.a===b});f!==-1&&e.splice(f,1)[0].Aa()}function Kd(a){if(!w(a))return j;var b=a.player,c=Sa(function(a){return a.a===b});return!w(c)?j:Od(c,a)}
function Od(a,b){var c=j;t(b,function(b,f){if(f!=="player"&&(c=a.setProperty(f,b),!c))return c});return c}function Nd(a,b,c){var e=j;t(a.uc,function(a){if(b===a)return e=g,j});if(!e){c=new fd(b,c);r.pSUPERFLY_video.push(c);for(var f=a.ta.length-1;f>-1;f--)Od(c,a.ta[f])&&a.ta.splice(f,1);c.nb();a.uc.push(b)}}
Hd.prototype.Ic=function(){if(La(window.jwplayer)&&w(window.jwplayer())){this.wa();for(var a=0,b=window.jwplayer(a);w(b.id);)window._cbv.push(b),b=window.jwplayer(++a)}else{if(window.flowplayer&&(a=window.flowplayer())){this.wa();window._cbv.push(a);return}window.brightcove&&window.experienceJSON?(this.wa(),window._cbv.push(window.brightcove)):Md()?this.wa():window.kWidget?(this.wa(),window.kWidget.addReadyCallback(function(a){window._cbv.push(document.getElementById(a))})):window.$pdk?(this.wa(),
window._cbv.push(window.$pdk)):window.KalturaPlayer&&La(window.KalturaPlayer.getPlayers)?(this.wa(),a=window.KalturaPlayer.getPlayers(),t(a,function(a){window._cbv.push(a)})):t(document.getElementsByTagName("video"),function(a){window._cbv.push(a)})}};Hd.prototype.wa=function(){$a(this.Bd)};
function Id(){function a(){function a(b){r._cbv.push(b.target)}var b=r.YT.Player;t(document.getElementsByTagName("iframe"),function(f){var h=f.src,l=h&&h.indexOf("www.youtube.com/embed/");h&&l>=0&&l<9&&new b(f,{events:{onReady:a}})})}if(r.YT&&r.YT.Player)a();else{var b=r.onYouTubeIframeAPIReady;r.onYouTubeIframeAPIReady=function(){if(b){try{b.apply(r,arguments)}catch(c){}a()}}}};function Pd(a,b){return function(c,e){if(!Fb){a();var f=r._sf_async_config,h="",l=f[B],l=ta(l);/^\//.test(l)&&(h=x(r.location.hostname));f[Rb]=Pa()+"//"+h+l;if(Ka(c))f[B]=J(c),e&&(f[Qb]=e);else if(Qa(c)){var o=["authors","sections",Qb,B,Rb];t(c,function(a,b){if(Ra(o,function(a){return a===b})!==-1||b.indexOf("_")===0)f[b]=b===B?J(a):a})}b()}}};if(!H.D("cb_optout")){if(window.location==window.parent.location&&!r.pSUPERFLY){var Qd=new Wc,Rd={};r.pSUPERFLY=Rd;var Sd=!!Lc;Rd.virtualPage=Pd(function(){Qd.sb();Sd&&Lc.evps()},function(){Qd.Fb();Sd&&Lc.svps()});Rd.activity=v(Qd.ld,Qd);Qd.nb();Rc.exec(document.referrer)&&Tc();var Td=I.ea(g);if(!Td?0:Td.getItem("_cb_ip")){var Ud=r.location;(!/^(.+[.])?chartbeat\.com$/.test(Ud.hostname)?0:/^\/publishing\/(overlay|hud|mab)\//.test(Ud.pathname))||wb(Sc)}else Ha(r,"message",Uc)}r.pSUPERFLY_video||(r.pSUPERFLY_video=
[]);new Hd};})();