import{g as t}from"./index_767de702_r24-02-0_b0_t240129-161140.js";import"./ast_dd2f4d00_r24-02-0_b0_t240129-161140.js";import"./blockString_ae762cd0_r24-02-0_b0_t240129-161140.js";const d=t`query loqateFindAddress($text: String!, $container: String) {
    loqateFindAddress(text: $text, container: $container) {
        addresses {
            id
            type
            text
            highlight
            description
        }
    }
}`;export{d as default};
