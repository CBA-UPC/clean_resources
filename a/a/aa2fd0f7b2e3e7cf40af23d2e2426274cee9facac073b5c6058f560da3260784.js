/** lightbox */
.sub__popup,
.sub-success__popup,
.unsub-success__popup,
.facebook__box{
	top: 95px;
	left:5000px;
	position: fixed;
	height: 100%;
	width: 100%;
	z-index: 110;
}
.sub__popup-content,
.sub-success__popup-content,
.unsub-success__popup-content,
.facebook__box-content{
	margin: 0px auto;
	width: 600px;
	border: 1px solid #bdc3c7;
	padding: 20px;
	background:#fff;
}
@media screen and (max-width: 640px) {
	.sub__popup-content,
	.sub-success__popup-content,
	.unsub-success__popup-content {
		width: 80%;
	}
}
@media screen and (max-height: 620px) {
	.sub__popup-content {
		height: 60%;
		overflow-y: scroll;
	}
}
.sub__popup-title,
.sub-success__popup-title,
.unsub-success__popup-title,
.facebook__box-title{
	text-align: center;
	font-size: 24px;
}
.sub__popup-text,
.sub-success__popup-text,
.unsub-success__popup-text,
.facebook__box-text{
	text-align: center;
	width:100%;
	margin:10px 0;
}
.sub__popup-text p,
.sub-success__popup-text p,
.unsub-success__popup-text p,
.facebook__box-text p{
	margin:5px 0;
}
.sub__popup-close,
.sub-success__popup-close,
.unsub-success__popup-close,
.facebook__box-close{
	text-align: right;
}
.sub__popup-close span,
.sub-success__popup-close span,
.unsub-success__popup-close span,
.facebook__box-close span{
	cursor:pointer;
}
.sub__popup-help-spoiler,
.facebook__box-closetext{
	text-align:center;
	margin:10px auto;
}
.sub__popup-help-text {
    text-align: left;
    margin-left: 56px;
	display: none;
}
.sub__popup-help-text p {
	display: none;
}
.sub__popup-help-spoiler span,
.facebook__box-closetext span{
	border-bottom:1px dashed #bdc3c7;
	cursor:pointer;
}
.mask{
	position: fixed;
	height: 100%;
	width: 100%;
	background:#000;
	opacity:0.3;
	display:none;
	z-index:99;
	top:0;
}
/** endlightbox */
