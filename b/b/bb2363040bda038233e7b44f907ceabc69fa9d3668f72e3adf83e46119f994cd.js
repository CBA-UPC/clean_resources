import{g as e}from"./index_767de702_r24-02-0_b0_t240129-161140.js";import"./ast_dd2f4d00_r24-02-0_b0_t240129-161140.js";import"./blockString_ae762cd0_r24-02-0_b0_t240129-161140.js";const t=e`query prePopulatedSearch(
    $mostSearched: Boolean,
    $popularProducts: Boolean,
    $state_code: String,
    $anonId: String,
    $pagePlacement: String
) {
    prePopulatedSearch(
        mostSearched: $mostSearched,
        popularProducts: $popularProducts,
        state_code: $state_code,
        anonId: $anonId,
        pagePlacement: $pagePlacement
    ) {
        mostSearchedData {
            country_code
            error
            most_searched 
        }
        popularproductsData {
            country_code
            error
            popular_products {
                pc9
                desc
                image_url
                price
                currency
            }
        }
    }
}`;export{t as default};
