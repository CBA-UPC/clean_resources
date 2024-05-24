import{g as o}from"./index_767de702_r24-02-0_b0_t240129-161140.js";import"./ast_dd2f4d00_r24-02-0_b0_t240129-161140.js";import"./blockString_ae762cd0_r24-02-0_b0_t240129-161140.js";const l=o`query personalizedPopularFilter($anonymousId: String!, $modelVersion: String!, $noOfFacets: Int!, $plp: String) {
    personalizedPopularFilter(anonymousId: $anonymousId, modelVersion: $modelVersion, noOfFacets: $noOfFacets, plp: $plp) {
        personalizedFilters {
            term
            url
        }
    }
}`;export{l as default};
