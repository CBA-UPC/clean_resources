import{g as e}from"./index_767de702_r24-02-0_b0_t240129-161140.js";import"./ast_dd2f4d00_r24-02-0_b0_t240129-161140.js";import"./blockString_ae762cd0_r24-02-0_b0_t240129-161140.js";const i=e`query getShippingAddresses {
    getShippingAddresses {
        addresses {
            avsVerified
            companyName
            country {
                isocode
                name
            }
            email
            firstName
            formattedAddress
            id
            lastName
            line1
            line2
            phone
            poBox
            postalCode
            region {
                countryIso
                isocode
                isocodeShort
                name
            }
            shippingAddress
            title
            titleCode
            town
            visibleInAddressBook
            defaultAddress
        }
    }
}`;export{i as default};
