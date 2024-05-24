<HTML><HEAD>
<TITLE>Access Denied</TITLE>
</HEAD><BODY>
<H1>Access Denied</H1>
 
You don't have permission to access "http&#58;&#47;&#47;www&#46;sap&#46;com&#47;etc&#46;clientlibs&#47;sapdx&#47;front&#45;layer&#47;dist&#47;resources&#47;sapcom&#47;6124&#46;6fbbc39d4cd1aed52984&#46;css" on this server.<P>
Reference&#32;&#35;18&#46;24231102&#46;1706719694&#46;d3c92d
</BODY>
</HTML>
 960px;
    margin: auto;
    padding: 40px 0;
}

.CQSectionCarosuel .slick-slider {
    display: block;
    position: relative;
    min-height: 300px;
    max-width: 100%;
    margin: auto;
    padding: 0;
}

.CQSectionCarosuel .slick-slide {
    display: none;
    float: left;
    min-height: 1px;
    overflow: hidden;
}

.slick-list {
    display: block;
    position: relative;
    margin: 0;
    padding: 0;
    overflow: hidden;
}

.slick-track {
    display: block;
    position: relative;
    left: 0;
    top: 0;
}

.slick-loading .slick-track {
    visibility: hidden;
}

.slick-slide {
    display: none;
    float: left;
    min-height: 1px;
}

[dir="rtl"] .slick-slide {
    float: right;
}

.slick-slide img {
    display: block;
    margin: auto;
}

.slick-slide.slick-loading img {
    display: none;
}

.slick-slide.dragging img {
    pointer-events: none;
}

.slick-initialized .slick-slide {
    display: block;
}

.slick-loading .slick-slide {
    visibility: hidden;
}

.slick-vertical .slick-slide {
    display: block;
    height: auto;
    border: 1px solid transparent;
}

.slick-arrow.slick-hidden {
    display: none;
}

/* Arrows */
.slick-prev, .slick-next {
    position: absolute;
    top: 40%;
    z-index: 198;
    width: 40px;
    height: 60px;
    padding: 20px 0 20px 0;
    border: 0;
    text-indent: -9999px;
    cursor: pointer;
}

.slick-prev {
    left: -55px;
    float: left;
    background: url("/etc/designs/sep1dx/images/social-arrow_left.png") no-repeat center center;
    background-size: 30px;
}

.slick-next {
    right: -55px;
    float: right;
    background: url("/etc/designs/sep1dx/images/social-arrow_right.png") no-repeat center center;
    background-size: 30px;
}

.CQSectionCarosuel .slick-prev {
    display: none !important;
    left: 5%;
}

.CQSectionCarosuel .slick-next {
    display: none !important;
    right: 5%;
}

.CQSectionCarosuel:hover .slick-prev {
    display: block !important;
    left: 5%;
}

.CQSectionCarosuel:hover .slick-next {
    display: block !important;
    right: 5%;
}

.multiSpeakerContainer .slick-slider .slick-prev {
    left: -45px
}

.multiSpeakerContainer .slick-slider .slick-next {
    right: -45px
}

/* Dots */
.slick-slider {
    margin-bottom: 30px;
}

.slick-dots {
    display: block;
    position: absolute;
    bottom: -45px;
    z-index: 198;
    width: 96%;
    padding: 0 2%;
    list-style: none;
    text-align: center;
}

.videocarousel .slick-dots {
    display: block;
    position: relative;
    bottom: 0;
    z-index: 198;
    width: 100%;
    padding: 0;
    list-style: none;
    text-align: center;
}

.CQSectionCarosuel .slick-dots {
    position: absolute;
    bottom: 35px;
}

.slick-dots li {
    display: inline-block;
    position: relative;
    width: 13px;
    height: 13px;
    margin: 0 5px;
    padding: 0;
    -moz-border-radius: 20px;
    -webkit-border-radius: 20px;
    border-radius: 20px;
    background: #ccc;
    cursor: pointer;
}

.slick-dots li:hover {
    background: #999;
}

.slick-dots .slick-active {
    background: #999;
}

.slick-dots li button {
    display: block;
    width: 20px;
    height: 20px;
    padding: 5px;
    border: 0;
    outline: none;
    font-size: 0;
    line-height: 0;
    color: transparent;
    background: transparent;
}

@media only screen and (max-width: 1220px) {
    .CQSectionCarosuel .slick-prev {
        left: -1px;
    }

    .CQSectionCarosuel .slick-next {
        right: -1px;
    }

    .CQSectionCarosuel:hover .slick-prev {
        left: -1px;
    }

    .CQSectionCarosuel:hover .slick-next {
        right: -1px;
    }
}

@media only screen and (max-width: 1100px) {
    .multiSpeakerContainer .slick-slider .slick-prev {
        left: -25px
    }

    .multiSpeakerContainer .slick-slider .slick-next {
        right: -25px
    }
}

@media only screen and (max-width: 767px) {
    .slick-prev {
        left: -20px;
        width: 25px;
        background-size: 15px;
    }

    .slick-next {
        right: -20px;
        width: 25px;
        background-size: 15px;
    }

    .multiSpeakerContainer .slick-slider .slick-prev {
        left: -20px;
    }

    .multiSpeakerContainer .slick-slider .slick-next {
        right: -20px;
    }
}

@media only screen and (max-width: 500px) {
    .slick-slider {
        padding: 25px;
    }
}