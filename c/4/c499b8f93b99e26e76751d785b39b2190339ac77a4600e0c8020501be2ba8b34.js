@-webkit-keyframes placeHolderShimmer {
    0% {
        background-position: -800px 0
    }
    100% {
        background-position: 800px 0
    }
}

@keyframes placeHolderShimmer {
    0% {
        background-position: -800px 0
    }
    100% {
        background-position: 800px 0
    }
}

[type='loading'] {
    -webkit-animation-duration: 1s;
    animation-duration: 1s;
    -webkit-animation-fill-mode: forwards;
    animation-fill-mode: forwards;
    -webkit-animation-iteration-count: infinite;
    animation-iteration-count: infinite;
    -webkit-animation-name: placeHolderShimmer;
    animation-name: placeHolderShimmer;
    -webkit-animation-timing-function: linear;
    animation-timing-function: linear;
    background: #f6f7f8;
    background: #eeeeee;
    background: -webkit-gradient(linear, left top, right top, color-stop(8%, #eeeeee), color-stop(18%, #dddddd), color-stop(33%, #eeeeee));
    background: -webkit-linear-gradient(left, #eeeeee 8%, #dddddd 18%, #eeeeee 33%);
    background: linear-gradient(to right, #eeeeee 8%, #dddddd 18%, #eeeeee 33%);
    -webkit-background-size: 1600px;
    background-size: 1600px;
    position: relative;
}

[type='loading'] .mask {
    background-color: #FFF;
    display: block;
    height: 10px;
}


[type='loading'] .mask_container {
    position: relative;
}
[type='loading']:after,
[type='loading'] .mask_container::after {
    content: '';
    display: block;
    height: 0;
    clear: both;
}

[type='loading'] .mask_container.header {
    height: 29px;
}

[type='loading'] .mask_container.header .mask {
    height: 100%;
    float: left;
}
[type='loading'] .mask_container.header .mask.live {
    background-color: #BF2026;
    color: #FFF;
    font-size: 20px;
    padding: 2px 7px;
    font-family: montserrat-regular;
}
[type='loading'] .mask_container .bg {
    background: url("../images/logo.png") center no-repeat;
}
