import{g as e}from"./index_767de702_r24-02-0_b0_t240129-161140.js";import"./ast_dd2f4d00_r24-02-0_b0_t240129-161140.js";import"./blockString_ae762cd0_r24-02-0_b0_t240129-161140.js";const d=e`
    query getPaymentMethods($disableVenmo: Boolean = false) {
        getPaymentMethods(disableVenmo: $disableVenmo) {
            payments {
                accountHolderName
                billingAddress {
                    firstName
                    lastName
                    formattedAddress
                    id
                    line1
                    line2
                    region {
                        countryIso
                        isocode
                        isocodeShort
                        name
                    }
                    town
                    postalCode
                }
                cardNumber
                cardType {
                    code
                    name
                }
                expiryMonth
                expiryYear
                id
                defaultPayment
                type
                venmoUserId
                saved
            }
        }
    }
`;export{d as default};
