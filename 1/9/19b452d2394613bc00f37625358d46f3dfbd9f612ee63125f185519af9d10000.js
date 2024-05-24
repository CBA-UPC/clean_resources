import{g as e}from"./index_767de702_r24-02-0_b0_t240129-161140.js";import"./ast_dd2f4d00_r24-02-0_b0_t240129-161140.js";import"./blockString_ae762cd0_r24-02-0_b0_t240129-161140.js";const t=e`fragment paymentDetailsFrag on paymentDetails {
    key
    type
    itemSearchUrl
    optional
    value
    items {
        id
        name
    }
}`,r=e`query initAdyenCheckout($guid: String!, $domain: String) {
    initAdyenCheckout(guid: $guid, domain: $domain) {
        originKey
        paymentsResponse {
            groups {
                name
                groupType
                types
            }
            paymentMethods {
                name
                type
                supportsRecurring
                details {
                    ...paymentDetailsFrag
                    details {
                        ...paymentDetailsFrag
                        details {
                            ...paymentDetailsFrag
                            details {
                                ...paymentDetailsFrag
                            }
                        }
                    }
                }
                brands
                paymentMethodData
                group {
                    name
                    paymentMethodData
                    type
                }
            }
            storedPaymentMethods {
                brand
                expiryMonth
                expiryYear
                holderName
                id
                lastFour
                name
                supportedShopperInteractions
                type
            }
        }
        environmentMode
        dfUrl
    }
}
${t}
`;export{r as default};
