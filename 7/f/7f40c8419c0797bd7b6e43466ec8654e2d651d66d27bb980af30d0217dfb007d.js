ES
squema colores
 #D2D4D6 azul oscuro
 #B6B8BA azul
 #dfdfdf gris oscuro
 #f6f6f6 gris claro */

/*General*/

body {
    overflow: auto;
}

#BusquedaAvanzada .fa-input {
    font-family: FontAwesome, Calibri, Candara, Segoe, "Segoe UI", Optima, Arial, sans-serif;
    font-size: 1.2em;
}

#BusquedaAvanzada .align-right {
    text-align: right;
}

#BusquedaAvanzada h1 {
    font-size: 1.8em;
    color: rgb(69, 69, 67);
    line-height: 1em;
    margin-bottom: 1em;
    font-weight: bold;
    letter-spacing: 0.01em;
    background: rgb(255, 255, 255);
    padding: 0.6em 0.5em 0.4em 0em;
    border-bottom: 8px solid rgb(210, 212, 214);
}

#BusquedaAvanzada .boxQuote {
    background-color: #E8F1FA;
    border: 1px solid #D5E5F4;
    border-radius: 0.2em;
    margin: 0.5em 0;
    padding: 1% 1em 1em 4em;
    position: relative;
}

    #BusquedaAvanzada .boxQuote p {
        margin: 0 0 0.5em 0;
    }

        #BusquedaAvanzada .boxQuote p:last-child {
            margin: 0;
        }

    #BusquedaAvanzada .boxQuote:before {
        color: #D2D4D6;
        content: '\f05a';
        font-family: FontAwesome;
        font-size: 2.5em;
        position: absolute;
        top: 0.3em;
        left: 0.4em;
    }

#BusquedaAvanzada .noConsultas {
    margin: 0;
    padding: 1% 1em 1em 4em;
    position: relative;
}

    #BusquedaAvanzada .noConsultas p {
        margin: 0 0 0.5em 0;
    }

        #BusquedaAvanzada .noConsultas p:last-child {
            margin: 0;
        }

    #BusquedaAvanzada .noConsultas:before {
        color: #D2D4D6;
        content: '\f05a';
        font-family: FontAwesome;
        font-size: 2.5em;
        position: absolute;
        top: 0.3em;
        left: 0.4em;
    }

/*Botones*/
#BusquedaAvanzada input[type="button"],
#BusquedaAvanzada input[type="submit"],
#BusquedaAvanzada .btn-addFiltro input[type="button"],
#BusquedaAvanzada .btn-Filtro input[type="submit"],
#BusquedaAvanzada .btn-GuardarConsulta input[type="button"],
#BusquedaAvanzada .btn-Buscar input[type="button"],
#BusquedaAvanzada .btn-Contacto input[type="button"],
#BusquedaAvanzada .pagIzq input[type="button"],
#BusquedaAvanzada .pagDcha input[type="button"],
#BusquedaAvanzada .btn-VolverListado input[type="button"],
#BusquedaAvanzada .btn-pdf a,
#BusquedaAvanzada .btn-enviar input[type="submit"],
#BusquedaAvanzada .btn-guardar input[type="button"],
#BusquedaAvanzada .btn-cancelar input[type="button"],
#BusquedaAvanzada .btn-volverBuscador input[type="button"] {
    background: #D2D4D6;
    border: 0;
    border-radius: 0.2em;
    color: #454543;
    cursor: pointer;
    font-size: 1.1em;
    height: 30px;
    letter-spacing: 0.02em;
    text-align: center;
    margin: 0.5em 1em;
    min-width: 48px;
}

#BusquedaAvanzada .pagIzq input[type="button"],
#BusquedaAvanzada .pagDcha input[type="button"] {
    font-size: 1.6em;
    letter-spacing: -2px;
    padding: 0 0.5em 0.2em 0.3em;
    margin: 1em 0.5em 1.5em 0.5em;
}

#BusquedaAvanzada .pagDcha input[type="button"] {
    padding: 0 0.3em 0.2em 0.3em;
}

    #BusquedaAvanzada .pagIzq input[type="button"]:last-child,
    #BusquedaAvanzada .pagDcha input[type="button"]:first-child {
        margin: 1em 0 1.5em 0;
    }

#BusquedaAvanzada .btn-Filtro input[type="submit"],
#BusquedaAvanzada .btn-GuardarConsulta input[type="button"],
#BusquedaAvanzada .btn-Contacto input[type="button"],
#BusquedaAvanzada .btn-cancelar input[type="button"] {
    background: #fff;
    border: 1px solid #D2D4D6;
    color: #454543;
}

#BusquedaAvanzada .btn-addFiltro input[type="button"],
#BusquedaAvanzada .btn-Filtro input[type="submit"],
#BusquedaAvanzada .btn-Buscar input[type="button"],
#BusquedaAvanzada .btn-enviar input[type="submit"],
#BusquedaAvanzada .btn-volverBuscador input[type="button"],
#BusquedaAvanzada input[type="submit"].boton {
    padding: 0 1em;
}

#BusquedaAvanzada .btn-Filtro input[type="submit"] {
    margin: 0 0.5em 0 0;
}

#BusquedaAvanzada .btn-Filtro input[type="submit"],
#BusquedaAvanzada .btn-Contacto input[type="submit"] {
    font-size: 1em;
    font-weight: normal;
}

#BusquedaAvanzada .btn-pdf a {
    display: inline-block;
    font-weight: 600;
    height: auto;
    padding: 1%;
    text-decoration: none;
}

    #BusquedaAvanzada input[type="button"]:hover,
    #BusquedaAvanzada .btn-pdf a:hover,
    #BusquedaAvanzada input[type="submit"]:hover {
        opacity: 0.9;
        box-shadow: 0px 2px 2px 0px rgba(0,0,0,0.6);
    }

#BusquedaAvanzada input[type="button"].btn-ayuda {
    border-radius: 20em;
    padding: 0;
    margin: 0;
    height: 2em;
    width: 2em;
    min-width: auto;
}

#BusquedaAvanzada .zonabotones {
    text-align: center;
}

/*Form General*/

#BusquedaAvanzada legend {
    display: none;
}

#BusquedaAvanzada input, #BusquedaAvanzada select, #BusquedaAvanzada label, #BusquedaAvanzada textarea, #BusquedaAvanzada button, #BusquedaAvanzada option {
    font-size: 1.1em;
}

    #BusquedaAvanzada input[type="email"], #BusquedaAvanzada input[type="number"], #BusquedaAvanzada input[type="password"], #BusquedaAvanzada input[type="tel"], #BusquedaAvanzada input[type="url"], #BusquedaAvanzada input[type="text"], #BusquedaAvanzada input[type="submit"], #BusquedaAvanzada select, #BusquedaAvanzada textarea {
        box-sizing: border-box;
    }

        #BusquedaAvanzada input[type="email"]:hover, #BusquedaAvanzada input[type="number"]:hover, #BusquedaAvanzada input[type="password"]:hover, #BusquedaAvanzada input[type="tel"]:hover, #BusquedaAvanzada input[type="url"]:hover, #BusquedaAvanzada input[type="text"]:hover, #BusquedaAvanzada select:hover, #BusquedaAvanzada textarea:hover {
            background: rgba(169,172,176,0.1);
            border: 2px solid #B8B876 !important;
        }

        #BusquedaAvanzada input[type="email"].aspNetDisabled:hover, #BusquedaAvanzada input[type="number"].aspNetDisabled:hover, #BusquedaAvanzada input[type="password"].aspNetDisabled:hover, #BusquedaAvanzada input[type="tel"].aspNetDisabled:hover, #BusquedaAvanzada input[type="url"].aspNetDisabled:hover, #BusquedaAvanzada input[type="text"].aspNetDisabled:hover, #BusquedaAvanzada select.aspNetDisabled:hover, #BusquedaAvanzada textarea.aspNetDisabled:hover {
            background: rgba(1255,255,255,1);
            border: 1px solid #dfdfdf !important;
        }

/*#BusquedaAvanzada fieldset > div label,
#BusquedaAvanzada fieldset > div input {
    margin-bottom: 0.5em;
}*/

#BusquedaAvanzada fieldset > div input[type="text"],
#BusquedaAvanzada fieldset select {
    width: 100%;
    height: 40px;
    padding-left: 0.3em;
    border: 1px solid #dfdfdf;
    border-radius: 0.2em;
}

#BusquedaAvanzada fieldset textarea {
    width: 100%;
    padding-left: 0.3em;
    border: 1px solid #dfdfdf;
    border-radius: 0.2em;
    min-height: 96px;
    font-size: 1.1em;
    font-family: Calibri, Candara, Segoe, "Segoe UI", Optima, Arial, sans-serif;
    line-height: 2em;
    resize: vertical;
}

    #BusquedaAvanzada fieldset textarea.Requerido,
    #BusquedaAvanzada fieldset input[text].Requerido {
        background-color: #fff;
    }

    input[type=password].RequeridoError, input[type=text].RequeridoError, input[type=file].RequeridoError, select.RequeridoError, textarea.RequeridoError,
    #BusquedaAvanzada fieldset textarea.RequeridoError,
    #BusquedaAvanzada fieldset input[text].RequeridoError {
        background-color: #FFFFDF;
    }

input[type="email"], input[type="number"], input[type="password"], input[type="tel"], input[type="url"], input[type="text"], input[type="submit"], select, textarea {
    box-sizing: border-box;
}

/*Buscador Simple*/

#BusquedaAvanzada .buscadorSimple {
    margin: 0 auto;
    position: relative;
    width: 100%;
}

#BusquedaAvanzada .buscadorBox {
    display: block;
    margin-bottom: 0.5em;
    /*padding-right: 165px;*/
}

    #BusquedaAvanzada .buscadorBox fieldset {
        border: 0;
        position: relative;
        text-align: center;
    }

    #BusquedaAvanzada .buscadorBox input[type=text] {
        border: 1px solid #D2D4D6;
        border-radius: 0.2em;
        float: left;
        height: 30px;
        margin: 0;
        padding: 0;
        padding-right: 1em;
        text-indent: 0.5em;
        width: 100%;
    }

    #BusquedaAvanzada .buscadorBox input[type=button] {
        background-color: #D2D4D6;
        border: 1px solid #D2D4D6;
        border-left: 0;
        border-radius: 0 0.2em 0.2em 0;
        color: #fff;
        font-size: 1.2em;
        height: 30px;
        right: 0;
        min-width: 48px;
        margin: 0;
        padding: 0;
        position: absolute;
    }

#BusquedaAvanzada .buscadorSimple .filtrosAyudas {
    position: absolute;
    right: 0.8em;
    text-align: right;
    top: 0.6em;
    width: 155px;
}

#BusquedaAvanzada input[type=button]:hover,
#BusquedaAvanzada input[type=submit]:hover,
#BusquedaAvanzada .btn-addFiltro input[type=button]:hover,
#BusquedaAvanzada .buscadorBox input[type=button]:hover,
#BusquedaAvanzada .btn-Buscar input[type=button]:hover,
#BusquedaAvanzada .pagIzq input[type=button]:hover,
#BusquedaAvanzada .pagDcha input[type=button]:hover,
#BusquedaAvanzada .btn-VolverListado input[type=button]:hover,
#BusquedaAvanzada .btn-pdf a:hover {
    background-color: #B6B8BA;
    opacity: 1;
}

#BusquedaAvanzada .btn-Filtro input[type="submit"]:hover,
#BusquedaAvanzada .btn-GuardarConsulta input[type="button"]:hover,
#BusquedaAvanzada .btn-Contacto input[type="button"]:hover,
#BusquedaAvanzada .btn-cancelar input[type="button"]:hover {
    background-color: #fff;
}

#BusquedaAvanzada .disable input[type="text"]:focus,
#BusquedaAvanzada .disable input[type="text"]:hover,
#BusquedaAvanzada .disable input[type="text"] {
    outline: none;
    border: 1px solid #dfdfdf !important;
    background-color: #fff;
}

#BusquedaAvanzada .filtrosAyudas > div {
    display: inline-block;
}

#BusquedaAvanzada .filtrosAyudas .btn-ultimasAyudas {
    display: none;
}

#BusquedaAvanzada .zonabotones .btn-GuardarConsulta,
#BusquedaAvanzada .zonabotones .btn-Buscar {
    display: inline-block;
}

#BusquedaAvanzada .zonabotones .btn-GuardarConsulta {
    float: left;
    margin-left: 0;
}

#BusquedaAvanzada .zonabotones .btn-Buscar {
    float: right;
    margin-right: 0;
}

#BusquedaAvanzada .zonabotones .btn-GuardarConsulta input[type="button"] {
    margin-left: 0;
}

#BusquedaAvanzada .zonabotones .btn-Buscar input[type="button"] {
    margin-right: 0;
}

#BusquedaAvanzada .btn-Contacto {
    padding: 1%;
}

    #BusquedaAvanzada .btn-Contacto .fa-input {
        color: #D2D4D6;
        font-size: 1.1em;
    }

/*switch toogle*/

#BusquedaAvanzada .switch {
    position: relative;
    display: inline-block;
    width: 45px;
    height: 25px;
}

    #BusquedaAvanzada .switch input {
        display: none;
    }

#BusquedaAvanzada .slider {
    position: absolute;
    cursor: pointer;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: #ccc;
    -webkit-transition: .4s;
    transition: .4s;
}

    #BusquedaAvanzada .slider:before {
        position: absolute;
        content: "";
        height: 18px;
        width: 18px;
        left: 4px;
        bottom: 4px;
        background-color: #fff;
        -webkit-transition: .4s;
        transition: .4s;
    }

#BusquedaAvanzada input:checked + .slider {
    background-color: #7A7D80;
}

#BusquedaAvanzada input:focus + .slider {
    box-shadow: 0 0 1px #D2D4D6;
}

#BusquedaAvanzada input:checked + .slider:before {
    -webkit-transform: translateX(18px);
    -ms-transform: translateX(18px);
    transform: translateX(18px);
}

/* Rounded sliders */

#BusquedaAvanzada .slider.round {
    border-radius: 34px;
}

    #BusquedaAvanzada .slider.round:before {
        border-radius: 50%;
    }

/*Accordion*/

#BusquedaAvanzada .accordionDGIPYME {
    position: relative;
}

    #BusquedaAvanzada .accordionDGIPYME p {
        border-bottom: 1px solid #dfdfdf;
        border-top: 1px solid #dfdfdf;
        font-size: 1.1em;
        margin: 0;
        padding: 1%;
    }

        #BusquedaAvanzada .accordionDGIPYME p:first-child {
            border-top: 0;
        }

    #BusquedaAvanzada .accordionDGIPYME:after {
        content: '\f078';
        float: none;
        font-family: FontAwesome;
        font-size: 1.3em;
        margin-left: 5px;
        padding: 1%;
        position: absolute;
        right: 0;
        top: 0;
    }

    #BusquedaAvanzada .accordionDGIPYME.active:after {
        content: "\f077 ";
    }

#BusquedaAvanzada .panelAccordionDGIPYME {
    background-color: #f6f6f6;
    display: none;
    overflow: hidden;
    padding: 0;
    width: 100%;
}

#BusquedaAvanzada .accordionDGIPYME.active + .panelAccordionDGIPYME {
    border-bottom: 1px solid #dfdfdf;
    display: inline-table;
}

/*Form Filtro avanzado*/

#BusquedaAvanzada .filtroAvanzado {
    margin: 0;
}

    #BusquedaAvanzada .filtroAvanzado fieldset {
        background-color: #e8e9ea;
        border-bottom: 0;
        border-left: 1px solid #dfdfdf;
        border-right: 1px solid #dfdfdf;
        border-top: 0;
        margin: 0;
        padding: 0;
        font-weight: bold;
    }

        #BusquedaAvanzada .filtroAvanzado fieldset:first-child {
            border-top: 0px solid #dfdfdf;
        }

#BusquedaAvanzada .filtroSelect {
    display: inline-block;
    padding: 0.5em 0 0 0;
    width: 32.8%;
}

#BusquedaAvanzada .filtroAvanzado fieldset:nth-child(2) .filtroSelect {
    width: 49%;
}

#BusquedaAvanzada .filtroSelect div {
    margin: 0 0 0 1em;
}

#BusquedaAvanzada .filtroSelect label {
    padding: 0;
    display: inline-block;
}

#BusquedaAvanzada .filtroSelect select {
    border: 1px solid #dfdfdf;
    border-radius: 0.2em;
    height: 40px;
    margin: 0;
    padding-left: 0.3em;
    width: 100%;
}

#BusquedaAvanzada .boxFiltros {
    background-color: #fff;
    border-radius: 0.2em;
    margin: 1em 1em 0.5em 1em;
    padding: 0.5em 0.5em 0 0.5em;
    text-align: center;
}

#BusquedaAvanzada .btn-Filtro {
    display: inline-block;
    margin-bottom: 0.5em;
}

/*Listado Ayudas consulta*/

#BusquedaAvanzada .listConsulta {
    clear: both;
}

    #BusquedaAvanzada .listConsulta ul {
        margin: 0;
        padding: 0;
        clear: both;
    }

    #BusquedaAvanzada .listConsulta li {
        background-color: #f6f6f6;
        border: 1px solid #dfdfdf;
        list-style: none;
        margin: 0 0 1em 0;
        padding: 1.5em 1em;
    }

        #BusquedaAvanzada .listConsulta li:last-child {
            margin: 0;
        }

    #BusquedaAvanzada .listConsulta a {
        color: #444;
        font-weight: bold;
        text-decoration: underline;
    }

    #BusquedaAvanzada .listConsulta > ul > li > a {
        display: block;
        margin-bottom: 1.5em;
    }

    #BusquedaAvanzada .listConsulta a:hover {
        text-decoration: none;
    }

    #BusquedaAvanzada .listConsulta a .nuevaAyuda {
        color: #28611F;
        font-style: italic;
        padding-right: 0.3em;
    }

        #BusquedaAvanzada .listConsulta a .nuevaAyuda em {
            font-weight: normal;
            color: #00C000;
            padding: 0;
            margin-right: 0.2em;
            line-height: 0.85em;
            font-size: 1.3em;
            text-shadow: 0.5px 0.5px #c8c8c8;
        }

    #BusquedaAvanzada .listConsulta a .modificadaAyuda {
        color: #825C20;
        font-style: italic;
        padding-right: 0.3em;
    }

        #BusquedaAvanzada .listConsulta a .modificadaAyuda em {
            font-weight: normal;
            color: #EAA538;
            padding: 0;
            margin-right: 0.2em;
            line-height: 0.85em;
            font-size: 1.3em;
            text-shadow: 0.5px 0.5px #AD7A2A;
        }

    #BusquedaAvanzada .listConsulta em {
        font-size: 1.2em;
        padding-right: 0.3em;
    }

    #BusquedaAvanzada .listConsulta .infoAyuda div {
        display: inline-block;
        margin-right: 1em;
    }

        #BusquedaAvanzada .listConsulta .infoAyuda div em {
            text-shadow: 0.5px 0.5px #c8c8c8;
        }

    #BusquedaAvanzada .listConsulta .infoAyuda .ambitoAyuda em {
        color: #C00000;
        font-size: 1.4em;
        padding-right: 0.1em;
    }

    #BusquedaAvanzada .listConsulta .infoAyuda .plazoAyuda em {
        color: #D2D4D6;
        padding-right: 0.1em;
    }

    #BusquedaAvanzada .listConsulta .infoAyuda .fichaAyuda em {
        color: #C00000;
        padding-right: 0.3em;
    }

/*Paginacion*/

/*#BusquedaAvanzada .paginacion {
    text-align: center;
}*/

    #BusquedaAvanzada .paginacion > div {
        display: inline-block;
    }

    #BusquedaAvanzada .paginacion .pagTotal {
        float: left;
    }

        #BusquedaAvanzada .paginacion .pagTotal span {
            margin: 1.1em 0.4em 1em 0;
            display: block;
        }

    #BusquedaAvanzada .paginacion .paginadoCompleto {
        float: right;
        margin-right: 3px;
    }

        #BusquedaAvanzada .paginacion .paginadoCompleto input[type=button] {
            height: 24px;
            margin: 0.4em 0 1em;
            min-width: 0px;
            width: 24px;
            font-size: smaller;
            padding: 0;
        }

        #BusquedaAvanzada .paginacion .paginadoCompleto span {
            margin: 1.1em 0 1em 0;
            display: inline-block;
        }

/*Detalle ayuda*/

#BusquedaAvanzada .detalleAyuda {
    background-color: #f6f6f6;
    border: 1px solid #dfdfdf;
    border-radius: 0.2em;
    padding: 1%;
}

    #BusquedaAvanzada .detalleAyuda p {
        margin: 1em 0;
    }

    #BusquedaAvanzada .detalleAyuda .titulo {
        font-size: 1.2em;
        font-weight: bold;
        border-bottom: 1px solid #dfdfdf;
        padding: 0 0 0.5em 0;
    }

    #BusquedaAvanzada .detalleAyuda .listDetalle {
        margin: 0;
        padding: 0 0 0 1em;
    }

        #BusquedaAvanzada .detalleAyuda .listDetalle li {
            font-weight: 700;
            line-height: 1.4em;
            list-style: none;
        }

            #BusquedaAvanzada .detalleAyuda .listDetalle li span,
            #BusquedaAvanzada .detalleAyuda .listDetalle li a {
                font-weight: normal;
            }

            #BusquedaAvanzada .detalleAyuda .listDetalle li::before {
                color: #D2D4D6;
                content: '\f111';
                font-family: FontAwesome;
                font-size: 0.5em;
                padding-right: 1em;
                position: relative;
                top: -2px;
            }

#BusquedaAvanzada .nolink {
    color: #444;
    cursor: text;
    text-decoration: none;
    pointer-events: stroke;
}

/*Mis consultas*/
#BusquedaAvanzada .contConsultas {
    display: inline-block;
    font-size: 1.1em;
    width: 100%;
}

    #BusquedaAvanzada .contConsultas a {
        text-decoration: underline;
        font-weight: normal;
    }

        #BusquedaAvanzada .contConsultas a:hover {
            text-decoration: none;
        }

#BusquedaAvanzada .listConsultas {
    background: #f6f6f6;
    border: 1px solid #dfdfdf;
    border-radius: 0.2em;
    box-sizing: border-box;
    display: inline-block;
    margin: 0;
    padding: 1% 0;
    position: relative;
    width: 100%;
}

    #BusquedaAvanzada .listConsultas .itemListConsulta {
        background-color: #fff;
        border: 1px solid #dfdfdf;
        border-top: 0;
        min-height: 30px;
        margin: 0 1em;
        position: relative;
    }

        #BusquedaAvanzada .listConsultas .itemListConsulta:first-child {
            border-top: 1px solid #dfdfdf;
            border-radius: 0.2em 0.2em 0 0;
        }

        #BusquedaAvanzada .listConsultas .itemListConsulta:last-child {
            border-radius: 0 0 0.2em 0.2em;
        }

    #BusquedaAvanzada .listConsultas .linkConsulta {
        margin-right: 6em;
        padding: 0.9em 1em;
    }

        #BusquedaAvanzada .listConsultas .linkConsulta a {
            font-weight: normal;
        }

    #BusquedaAvanzada .listConsultas .zonabotones {
        position: absolute;
        right: 0;
        top: 0;
    }

        #BusquedaAvanzada .listConsultas .zonabotones .btn-opciones {
            display: inline;
        }

            #BusquedaAvanzada .listConsultas .zonabotones .btn-opciones .dropdown-btn {
                cursor: pointer;
                font-size: 1.1em;
                border: none;
                outline: none;
                padding: 1%;
                padding: 14px 16px;
                background-color: inherit;
                text-decoration: none;
            }

                #BusquedaAvanzada .listConsultas .zonabotones .btn-opciones .dropdown-btn:hover,
                #BusquedaAvanzada .listConsultas .zonabotones .btn-opciones .dropdown-content a:hover {
                    background-color: #D2D4D6;
                    color: #fff;
                }

    #BusquedaAvanzada .listConsultas a {
        color: #000;
        display: inline-block;
        box-sizing: border-box;
    }

#BusquedaAvanzada .dropdown-content {
    display: none;
    position: absolute;
    right: 0;
    top: 45px;
    background-color: #fff;
    min-width: 105px;
    border: 1px solid #444;
    border-radius: 0.2em;
    box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.4);
    z-index: 1;
}

    #BusquedaAvanzada .dropdown-content a {
        float: none;
        color: #000;
        padding: 12px 16px;
        text-decoration: none;
        display: block;
        text-align: left;
    }

    #BusquedaAvanzada .dropdown-content:before {
        bottom: 100%;
        left: 83%;
        border: solid transparent;
        content: " ";
        height: 0;
        width: 0;
        position: absolute;
        pointer-events: none;
    }

    #BusquedaAvanzada .dropdown-content:before {
        border-color: rgba(255, 255, 255, 0);
        border-bottom-color: #000;
        border-width: 6px;
        margin-left: -6px;
    }

    #BusquedaAvanzada .dropdown-content a em {
        margin-right: 0.3em;
    }

/*Guardar consulta y Formulario contacto*/

#BusquedaAvanzada .formContacto fieldset,
#BusquedaAvanzada .formGuardarConsulta fieldset {
    border: 1px solid #dfdfdf;
    background: #f6f6f6;
    padding: 1%;
    margin-bottom: 1em;
    word-break: break-all;
}

#BusquedaAvanzada .textoformulario {
    margin-bottom: 1em;
}

#BusquedaAvanzada .zonacontrolformulario .formlogin .textoformulario {
    margin: 0;
    margin-bottom: 1em;
    padding: 0;
}

#BusquedaAvanzada .zonanombrecampo {
    margin-bottom: 0.5em;
}

#BusquedaAvanzada .btn-enviarAyudas {
    margin-top: 1em;
    padding-left: 1em;
}

#BusquedaAvanzada .formGuardarConsulta .disabled {
    background-color: #E7E7E7;
    height: 30px;
    border: 1px solid #dfdfdf;
    border-radius: 0.2em;
}

    #BusquedaAvanzada .formGuardarConsulta .disabled p {
        padding-left: 0.5em;
    }

#BusquedaAvanzada .formGuardarConsulta .opcionesCorreo {
    margin: 1em 0;
}

    #BusquedaAvanzada .formGuardarConsulta .opcionesCorreo .zonacampoformulario {
        text-align: center;
    }

        #BusquedaAvanzada .formGuardarConsulta .opcionesCorreo .zonacampoformulario > span {
            margin-right: 1em;
        }

#BusquedaAvanzada .formGuardarConsulta .zonabotones div {
    display: inline;
}

/*Modal*/

#BusquedaAvanzada .modal-content {
    padding: 0px;
    border: none;
}

#BusquedaAvanzada .modal-header {
    background-color: #D2D4D6;
    border-radius: 0.1em 0.1em 0 0;
    position: relative;
    width: 100%;
    font-size: 1.2em;
}

    #BusquedaAvanzada .modal-header p {
        font-weight: bold;
        color: #fff;
        margin-right: 5em;
        padding: 5px 20px;
        float: left;
    }

    #BusquedaAvanzada .modal-header .close {
        background-color: #fff;
        border: 1px solid #D2D4D6;
        border-radius: 20em;
        box-shadow: 2px 2px 2px 0px rgba(0,0,0,0.5);
        color: #D2D4D6;
        font-size: 1.5em;
        font-weight: bold;
        height: 36px;
        margin: 0;
        min-width: 36px;
        padding: 1px 4px 5px 4px;
        position: absolute;
        right: 10px;
        top: 10px;
    }

        #BusquedaAvanzada .modal-header .close:hover {
            top: 12px;
        }

#BusquedaAvanzada .modal-body {
    padding: 5px 20px;
}

    #BusquedaAvanzada .modal-body .zonabotones {
        text-align: center;
        clear: both;
    }

        #BusquedaAvanzada .modal-body .zonabotones p {
            display: inline-block;
            margin: 0;
        }

        #BusquedaAvanzada .modal-body .zonabotones div {
            display: inline-block;
        }

        #BusquedaAvanzada .modal-body .zonabotones .btn-aceptar input[type="submit"] {
            margin: 0 0 1em 0;
        }

        #BusquedaAvanzada .modal-body .zonabotones .btn-cancelar input[type="submit"] {
            background: #fff;
            color: #D2D4D6;
            border: 1px solid #D2D4D6;
            margin: 0 0.5em 1em 0;
        }

.modal-body .zonabotones p input {
    padding: 0 1em;
}

/*Formulario contacto*/

#BusquedaAvanzada .zonanombrecampo,
#BusquedaAvanzada .zonacampoformulario {
    float: none;
    width: 100%;
    text-align: left;
}

/*Pantalla Acceso Usuarios*/

#BusquedaAvanzada #Registro .izquierdadatosformulario, .colaboradorregistrovalidado {
    background: none;
    border: 0;
}

#BusquedaAvanzada #Registro .zonacontrolformulario fieldset {
    margin: 0;
    padding: 0;
}

#BusquedaAvanzada #Registro {
    list-style: none;
    background-color: #f6f6f6;
    border: 1px solid #dfdfdf;
}

    #BusquedaAvanzada #Registro ol,
    #BusquedaAvanzada #Registro ul {
        margin: 0;
        padding: 0;
        list-style: none;
    }

    #BusquedaAvanzada #Registro .formlogin li {
        display: inline-block;
        margin-right: 2%;
        width: 38%;
    }

        #BusquedaAvanzada #Registro .formlogin li:last-child {
            display: inline-block;
            margin-right: 0;
            width: 18%;
        }

    #BusquedaAvanzada #Registro .colaborador {
        margin-bottom: 1em;
    }

        #BusquedaAvanzada #Registro .colaborador li {
            display: inline-block;
            font-size: 1.1em;
            width: 49.8%;
        }

        #BusquedaAvanzada #Registro .colaborador .ultimo {
            text-align: right;
        }

    #BusquedaAvanzada #Registro .formlogin li div label {
        font-size: initial;
        margin-bottom: 0.5em;
        margin-left: 0.5em;
    }

    #BusquedaAvanzada #Registro .formlogin li div input {
        border: 1px solid #dfdfdf;
        color: #444;
        height: 35px;
        margin: 0;
        width: 100%;
    }

        #BusquedaAvanzada #Registro .formlogin li div input[type="button"] {
            background: #D2D4D6;
            border: 0;
            border-radius: 0;
            color: #fff;
            cursor: pointer;
            font-size: 1.1em;
            height: 35px;
            margin: 0 1em 0 0;
            width: 90px;
            min-width: 70px;
            padding: 0 1em;
            text-align: center;
        }

            #BusquedaAvanzada #Registro .formlogin li div input[type="button"]:hover {
                background-color: #B6B8BA;
                opacity: 1;
                box-shadow: none;
            }

    #BusquedaAvanzada #Registro .formlogin .zonabotones {
        text-align: left;
    }

    #BusquedaAvanzada #Registro .formlogin li div input[type=submit],
    #BusquedaAvanzada #Registro .formlogin li div input[type=button],
    #BusquedaAvanzada #Registro .formlogin li .btn-continuar input[type=button] {
        color: #fff;
    }

    #BusquedaAvanzada #Registro .formlogin li div fieldset select {
        width: 100%;
        height: 30px;
        padding-left: 0.3em;
        border: 1px solid #dfdfdf;
    }

    #BusquedaAvanzada #Registro .opcionesUsuario {
        padding: 0 1em 1em 1em;
        position: relative;
        font-size: 0.9em;
    }

        #BusquedaAvanzada #Registro .opcionesUsuario ul li {
            display: block;
        }

        #BusquedaAvanzada #Registro .opcionesUsuario .btn-Contacto {
            font-size: 0.9em;
            position: absolute;
            top: 0;
            right: 0;
        }

    #BusquedaAvanzada #Registro .colaboradorregistro {
        margin: 0;
    }

        #BusquedaAvanzada #Registro .colaboradorregistro .zonacontrolformulario,
        #BusquedaAvanzada #Registro .zonacontrolformulario {
            padding: 0;
        }

#Registro .colaboradorregistrovalidado.icono .zonatexto,
.colaboradorregistrovalidado.icono .zonatexto {
    float: left;
    padding: 1.5em 1em;
    word-break: break-all;
}

    #Registro .colaboradorregistrovalidado.icono .zonatexto .texto em,
    .colaboradorregistrovalidado.icono .zonatexto .texto em {
        background-color: #fff;
        border: 1px solid #dfdfdf;
        font-size: 3em;
        padding: 0.3em 0.28em;
        vertical-align: middle;
    }

#BusquedaAvanzada .colaboradorregistrovalidado.icono .texto {
    margin: 0;
    font-weight: bold;
}

#BusquedaAvanzada #Registro .colaboradorregistrovalidado.icono .zonacontrolcolaborador,
#BusquedaAvanzada .colaboradorregistrovalidado.icono .zonacontrolcolaborador {
    float: right;
    margin: 1em 0;
}

    #BusquedaAvanzada #Registro .colaboradorregistrovalidado.icono .zonacontrolcolaborador .colaborador,
    #BusquedaAvanzada .colaboradorregistrovalidado.icono .zonacontrolcolaborador .colaborador {
        display: block;
        margin: 0;
        font-size: 0.9em;
    }

        #Registro .colaboradorregistrovalidado.icono .zonacontrolcolaborador .colaborador li,
        #BusquedaAvanzada .colaboradorregistrovalidado.icono .zonacontrolcolaborador .colaborador li {
            display: block;
            width: auto;
            text-align: right;
            margin-top: 0.5em;
            margin-right: 1em;
        }

#Registro .colaboradorregistrovalidado.icono .zonatexto {
    float: left;
    max-width: 55%;
    padding: 1.3em 1em;
    word-break: break-all;
}

#Registro .colaboradorregistrovalidado.icono {
    margin-top: 0;
}

#zonaEnlaces {
    clear: both;
    float: right;
    margin-right: 4%;
}

    #zonaEnlaces a {
        margin-right: 1.5em;
    }

div.dgip-plazo, div.dgip-ambito, div.dgip-pdf {
    background: #fff;
    border: 1px solid #dfdfdf;
    padding: 0.4em 0.4em 0.4em 0.8em;
    margin-top: 0.5em;
    font-weight: bold;
    color: #444;
    border-radius: 0.4em;
}

.dgip-cell {
    display: inline-block;
    display: inline;
    zoom: 1;
    letter-spacing: normal;
    word-spacing: normal;
    text-rendering: auto;
    word-wrap: normal;
}

.dgip-ambito span {
    background: url(/_Layouts/PublishingImages/BusquedaAvanzada/Ambito.png) no-repeat left center;
    height: 14px;
    width: 12px;
    padding: 1em 1em 1em 2em;
}

.dgip-plazo span {
    background: url(/_Layouts/PublishingImages/BusquedaAvanzada/Fecha.png) no-repeat left center;
    height: 14px;
    width: 12px;
    padding: 1em 1em 1em 2em;
}

.dgip-pdf a span {
    background: url(/_Layouts/PublishingImages/BusquedaAvanzada/FichaPDF.png) no-repeat left center;
    height: 14px;
    width: 12px;
    padding: 1em 1em 1em 2em;
}

.btnEuropeas {
    width: 250px;
}

@media only screen and (max-width: 1024px) {
    #BusquedaAvanzada #Registro .zonacontrolformulario fieldset {
        height: auto;
    }
}

@media only screen and (max-width: 768px) {
    #BusquedaAvanzada fieldset > div input[type="text"],
    #BusquedaAvanzada fieldset select,
    #BusquedaAvanzada .filtroSelect select {
        height: 30px;
    }

    #BusquedaAvanzada .filtroSelect {
        width: 100%;
    }

        #BusquedaAvanzada .filtroSelect div {
            margin: 0 1em;
        }

    #BusquedaAvanzada #Registro .formlogin li,
    #BusquedaAvanzada #Registro .formlogin li:last-child {
        margin-right: 0;
        width: 100%;
    }
}

@media only screen and (max-width: 600px) {
    #BusquedaAvanzada .btn-GuardarConsulta input[type="button"] {
        margin-right: 0;
    }    

    #BusquedaAvanzada .paginacion .pagTotal {
        display: none;
    }

    #BusquedaAvanzada #Registro .formlogin li {
        width: 100%;
    }

    #BusquedaAvanzada .paginacion {
        text-align: left;
    }
}

.dgip-box-gray {
    margin-top: 5%;
    border: 1px solid #dfdfdf;
    background: #f7f7f7;
    padding-top: 1em;
    padding-bottom: 0.5em;
    padding-left: 1.3em;
    padding-right: 2.8em;
}

    .dgip-box-gray a {
        text-decoration: underline;
        font-family: Calibri, Candara, Segoe, "Segoe UI", Optima, Arial, sans-serif;
        font-weight: bold;
    }

.underlineOff:hover {
    text-decoration: none;
}

#lnkMostrarAyuda {
    float: right;
}

#lnkBuscadorAvanzado {
    text-decoration: underline;
}

#modalcontent_mostrarAyuda img {
    display: block;
    margin: auto;
}

/*.show{
    visibility: visible;
    -webkit-animation: fadeIn 1s;
    animation: fadeIn 1s;
}*/

.popuptext {
    /*visibility: hidden;*/
    background-color: #555;
    color: #fff;
    text-align: center;
    border-radius: 6px;
    padding: 8px 8px;
    z-index: 1;
    position: absolute;
    margin-left: 5px;
    margin-top: 5px;
}

.btn-ayudasPlazo {
        display: flex;
}

@media only screen and (min-width: 480px) and (max-width: 900px) {
    .dgip-box-gray {
        margin-top: 8%;
    }
}

@media only screen and (max-width: 540px) {
        .btn-ayudasPlazo {
            display: block;
    }
}

@media only screen and (max-width: 480px) {

    #BusquedaAvanzada .btn-GuardarConsulta input[type="button"] {
        margin: 1em 0 0 0;
    }

    #BusquedaAvanzada .btn-Buscar input[type="button"] {
        margin: 0.2em;
    }

    #BusquedaAvanzada #btnBuscar{
        margin: 1em 0 1em 0;
    }

    #zonaEnlaces {
        clear: both;
        float: none;
    }

        #zonaEnlaces a {
            margin-right: 1.5em;
        }



    .btn-Filtro {
        margin: auto;
    }

    .dgip-box-gray {
        margin-top: 11%;
    }
}
}