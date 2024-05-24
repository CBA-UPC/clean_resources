html, body {
	padding: 0;
	margin: 0;
	overflow: hidden;
	
	background: #000000;
	color: white;
}

html, body, canvas {
	touch-action: none;
	touch-action-delay: none;
}

#notSupportedWrap {
	margin: 2em auto 1em auto;
	width: 75%;
	max-width: 45em;
	border: 2px solid #aaa;
	border-radius: 1em;
	padding: 2em;
	background-color: #f0f0f0;
	font-family: "Segoe UI", Frutiger, "Frutiger Linotype", "Dejavu Sans", "Helvetica Neue", Arial, sans-serif;
	color: black;
}

#notSupportedTitle {
	font-size: 1.8em;
}

.notSupportedMessage {
	font-size: 1.2em;
}

.notSupportedMessage em {
	color: #888;
}

/* bbcode styles */
.bbCodeH1 {
	font-size: 2em;
	font-weight: bold;
}

.bbCodeH2 {
	font-size: 1.5em;
	font-weight: bold;
}

.bbCodeH3 {
	font-size: 1.25em;
	font-weight: bold;
}

.bbCodeH4 {
	font-size: 1.1em;
	font-weight: bold;
}

.bbCodeItem::before {
	content: " • ";
}

/* screen reader text */
.c3-screen-reader-text {
	position: absolute;
	width: 1px;
    height: 1px;
    overflow: hidden;
    clip: rect(1px, 1px, 1px, 1px);
}