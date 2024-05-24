import{g as a}from"./index_767de702_r24-02-0_b0_t240129-161140.js";import"./ast_dd2f4d00_r24-02-0_b0_t240129-161140.js";import"./blockString_ae762cd0_r24-02-0_b0_t240129-161140.js";const o=a`query swatches ($code: String!) {
    swatches(code: $code) {
        swatches {
            active
            available
            code
            colorName
            imageUrl
            url
            variantsAvailability {
                available
                length
                size
                waist
            }
        }
        errors {
     name
     component
     message
   }
   }
}`;export{o as default};
