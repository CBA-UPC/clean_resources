input.success{
    border-color: #6625FF!important;
    color: #6625FF;
}
input.error,
input.wpcf7-not-valid{
    border-color: #ff34ee!important;
    color: #ff34ee;
}
/* do not group these rules */
input.error::-webkit-input-placeholder,
input.wpcf7-not-valid::-webkit-input-placeholder {
    color: #ff34ee;
}
input.error:-moz-placeholder,
input.wpcf7-not-valid{
    /* FF 4-18 */
    color: #ff34ee;
}
input.error::-moz-placeholder,
input.wpcf7-not-valid{
    /* FF 19+ */
    color: #ff34ee;
}
input.error:-ms-input-placeholder,
input.wpcf7-not-valid {
    /* IE 10+ */
    color: #ff34ee;
}

input.error:after{
    content: 'lkjddf';
}

.validation {
    position: absolute;
    right: 5px;
    top: 0;
    font-size: 1.5rem;
    display: none;
}
.validation .zmdi-close{
    color: #ff34ee;
    display: none;
}
.validation .zmdi-check{
    color: #999;
    display: none;
}

.validation.error,
.validation.valid{
    display: inline-block;
}
.validation.error .zmdi-close{
    display: block;
}
.validation.valid .zmdi-check{
    display: block;
}

/**
 * CF7
 */
form p{
    position: relative;
}
.wpcf7-form-control-wrap{
    position: static;
}
span.wpcf7-not-valid-tip{
    position: absolute;
    right: 0;
    top: 0;
    color: #ff34ee;
    font-size: .8rem;
    padding-right: 33px;
}
.wpcf7-response-output{
    display: none!important;
}