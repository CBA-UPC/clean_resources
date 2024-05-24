.dgads	{
	display: block;
	width:0px;
	height:0px;
}

/*グレーアウトのスタイル定義*/
.dgads > .gray	{
	display: inline-block;
	background-color:black;
	opacity:0.7;
	width:100%;
	height:100%;
	position:fixed;
	top:0;
	left:0;
	display:none;
	z-index: 2147483500 !important;
}

/*androidのグレーアウトのスタイル定義*/
.dgads > .gray_android	{
	display: inline-block;
	background-color:black;
	opacity:1;
	width:100%;
	height:100%;
	position:fixed;
	top:0;
	left:0;
	display:none;
	z-index: 2147483500 !important;
}

/*ポップアップ部分のスタイル定義*/
.dgads > .square	{
	position:fixed;
	display: block;
	top: 0;
	right: 0;
	bottom: 0;
	left: 0;
	margin: auto;
	width:79%;
	height:79%;
	z-index: 2147483510 !important;
	background-color:#fff;
}

/*andoridのポップアップ部分のスタイル定義*/
.dgads > .square_android	{
	position:fixed;
	display: block;
	top: 0;
	right: 0;
	bottom: -5%;
	left: 0;
	margin: auto;
	width:100%;
	height:95%;
	z-index: 2147483510 !important;
	background-color:#000;
}


.dgads > .square > .close	{
	position:absolute;
	top:-33px;
	right:-30px;
	border-radius:0;
	box-shadow:none;
	border:0;
	text-shadow:none;
	z-index: 2147483500 !important;
	width:23px;
	height:23px;
	padding:0;
	background:none;
}


@media screen and (orientation: landscape) {

	/*iosのグレーアウトのスタイル定義*/
	.dgads > .gray_ios	{
		display: inline-block;
		background-color:black;
		opacity:1;
		width:200%;
		height:100%;
		position:fixed;
		top:0;
		left:0;
		display:none;
		z-index: 2147483500 !important;
	}

	/*iosのポップアップ部分のスタイル定義*/
	.dgads > .square_ios	{
		position:fixed;
		display: block;
		top: 100px;
		right: 0;
		bottom: -5%;
		left: 0;
		margin: auto;
		width:100%;
		height:95%;
		z-index: 2147483510 !important;
		background-color:#000;
	}

	.dgads > .square_android > .close	{
		position:absolute;
		top:-6%;
		right:1%;
		border-radius:0;
		box-shadow:none;
		border:0;
		text-shadow:none;
		z-index: 2147483500 !important;
		width:15px;
		height:15px;
		padding:5px 10px 60px 60px;
		background:none;
		max-height:4%!important;
		object-fit: scale-down;
	}

	.dgads > .square_ios > .close	{
		position:absolute;
		top:-6%;
		right:1%;
		border-radius:0;
		box-shadow:none;
		border:0;
		text-shadow:none;
		z-index: 2147483500 !important;
		width:23px;
		height:23px;
		padding:5px 10px 5px 60px;
		background:none;
		max-height:4%!important;
		object-fit: scale-down;
	}


	.dgads > .square_android > .popup	{
		display:block;
		width:101%;
		height:101%;
		overflow:hidden;
		border:none;
		max-height:96%!important;

	}
	.dgads > .square_ios > .popup	{
		display:block;
		width:101%;
		height:101%;
		overflow:hidden;
		border:none;
		max-height:68%!important;

	}
}


@media screen and (orientation: portrait) {

	/*iosのグレーアウトのスタイル定義*/
	.dgads > .gray_ios	{
		display: inline-block;
		background-color:black;
		opacity:1;
		width:100%;
		height:150%;
		position:fixed;
		top:0;
		left:0;
		display:none;
		z-index: 2147483500 !important;
	}

	/*iosのポップアップ部分のスタイル定義*/
	.dgads > .square_ios	{
		position:fixed;
		display: block;
		top: 0;
		right: 0;
		bottom: -5%;
		left: 0;
		margin: auto;
		width:100%;
		height:95%;
		z-index: 2147483510 !important;
		background-color:#000;
	}

	.dgads > .square_android > .close	{
		position:absolute;
		top:-3%;
		right:1%;
		border-radius:0;
		box-shadow:none;
		border:0;
		text-shadow:none;
		z-index: 2147483500 !important;
		width:23px;
		height:23px;
		padding:5px 10px 60px 60px;
		background:none;
		max-height:4%!important;
		object-fit: scale-down;
	}

	.dgads > .square_ios > .close	{
		position:absolute;
		top:-3%;
		right:1%;
		border-radius:0;
		box-shadow:none;
		border:0;
		text-shadow:none;
		z-index: 2147483500 !important;
		width:15px;
		height:15px;
		padding:5px 10px 3px 60px;
		background:none;
		max-height:4%!important;
		object-fit: scale-down;
	}


	.dgads > .square_android > .popup	{
		display:block;
		width:101%;
		height:101%;
		overflow:hidden;
		border:none;
		max-height:96%!important;

	}
	.dgads > .square_ios > .popup	{
		display:block;
		width:101%;
		height:101%;
		overflow:hidden;
		border:none;
		max-height:96%!important;

	}
}


.dgads > .square > .popup	{
	display:block;
	width:100%;
	height:101%;
	overflow:hidden;
	border:none;
}

