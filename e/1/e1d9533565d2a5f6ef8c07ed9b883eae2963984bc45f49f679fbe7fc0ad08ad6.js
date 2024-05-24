.clearfix{
    clear:both;
}

.clearfix:after,.clearfix:before {
    content: " ";
    display: table
}

.slick-list,.slick-slider,.slick-track {
    position: relative;
    display: block
}

.float-left {
    float: left
}

.float-right {
    float: right
}

.float-none {
    float: none
}

.slick-slider {
    box-sizing: border-box;
    -moz-box-sizing: border-box;
    -webkit-touch-callout: none;
    -webkit-user-select: none;
    -khtml-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
    -ms-touch-action: pan-y;
    touch-action: pan-y;
    -webkit-tap-highlight-color: transparent
}

.slick-list {
    margin: 0;
    padding: 0
}

.slick-list:focus {
    outline: 0
}

.slick-list.dragging {
    cursor: pointer;
    cursor: hand
}

.slick-slider .slick-list,.slick-slider .slick-track {
    -webkit-transform: translate3d(0,0,0);
    -moz-transform: translate3d(0,0,0);
    -ms-transform: translate3d(0,0,0);
    -o-transform: translate3d(0,0,0);
    transform: translate3d(0,0,0)
}

.slick-track {
    left: 0;
    top: 0
}

.slick-track:after,.slick-track:before {
    content: "";
    display: table
}

.slick-slide,.slick-slide.slick-loading img {
    display: none
}

.slick-slide {
    float: left;
    height: 100%;
    min-height: 1px
}

[dir=rtl] .slick-slide {
    float: right
}

.slick-slide.dragging img {
    pointer-events: none
}

.slick-initialized .slick-slide {
    display: block
}

.slick-vertical .slick-slide {
    display: block;
    height: auto;
    border: 1px solid transparent
}

.slick-arrow.slick-hidden {
    display: none
}

.slick-dots,.slick-next,.slick-prev {
    position: absolute;
    display: block;
    padding: 0
}

.slick-loading .slick-list {
    background: center center no-repeat #fff
}

@font-face {
    font-family: slick;
    src: url(/fonts/slick.eot);
    src: url(/fonts/slick.eot?#iefix) format("embedded-opentype"),url(/fonts/slick.woff) format("woff"),url(/fonts/slick.ttf) format("truetype"),url(/fonts/slick.svg#slick) format("svg");
    font-weight: 400;
    font-style: normal
}

.slick-next,.slick-prev {
    height: 20px;
    width: 20px;
    line-height: 0;
    font-size: 0;
    cursor: pointer;
    background: 0 0;
    color: inherit;
    top: 50%;
    margin-top: -10px;
    border: none;
    outline: 0
}

.slick-next:focus,.slick-next:hover,.slick-prev:focus,.slick-prev:hover {
    outline: 0;
    background: 0 0;
    opacity: 0.5;
}

.slick-next:focus:before,.slick-next:hover:before,.slick-prev:focus:before,.slick-prev:hover:before {
    opacity: 1
}

.slick-next.slick-disabled:before,.slick-prev.slick-disabled:before {
    opacity: .25
}

.slick-next:before,.slick-prev:before {
    font-size: 20px;
    line-height: 1;
    color: inherit;
    opacity: .75
}

.slick-prev {
    left: -25px
}

[dir=rtl] .slick-prev {
    left: auto;
    right: -25px
}

.slick-prev:before {
    content: "←"
}

.slick-next:before,[dir=rtl] .slick-prev:before {
    content: "→"
}

.slick-next {
    right: -25px
}

[dir=rtl] .slick-next {
    left: -25px;
    right: auto
}

[dir=rtl] .slick-next:before {
    content: "←"
}

.slick-slider {
    margin-bottom: 30px
}

.slick-dots {
    /* bottom: -45px; */
    list-style: none;
    text-align: center;
    width: 100%
}

.slick-dots li {
    position: relative;
    display: inline-block;
    height: 20px;
    width: 20px;
    margin: 0 5px;
    padding: 0;
    cursor: pointer
}

.slick-dots li button {
    border: 0;
    background: 0 0;
    display: block;
    height: 20px;
    width: 20px;
    outline: 0;
    line-height: 0;
    font-size: 0;
    color: transparent;
    padding: 5px;
    cursor: pointer
}

.slick-dots li button:focus,.slick-dots li button:hover {
    outline: 0
}

.slick-dots li button:focus:before,.slick-dots li button:hover:before {
    opacity: 1
}

.slick-dots li button:before {
    position: absolute;
    top: 0;
    left: 0;
    content: "•";
    width: 20px;
    height: 20px;
    font-size: 6px;
    line-height: 20px;
    text-align: center;
    color: #000;
    opacity: .25
}

.slick-dots li.slick-active button:before {
    color: #000;
    opacity: .75
}



.slick-slider {
    margin: 30px auto 50px
}

.slick-dots {
    margin-left: 0
}