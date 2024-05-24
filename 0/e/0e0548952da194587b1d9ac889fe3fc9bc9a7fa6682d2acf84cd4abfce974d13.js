import{g as e}from"./index_767de702_r24-02-0_b0_t240129-161140.js";import{o as a}from"./orderConfirmationFrag_dc2cb6cb_r24-02-0_b0_t240129-161140.js";import"./ast_dd2f4d00_r24-02-0_b0_t240129-161140.js";import"./blockString_ae762cd0_r24-02-0_b0_t240129-161140.js";const m=e`
    mutation placeVenmoOrder(
        $guid: String!,
        $nonce: String!,
        $deviceData: String!,
        $savePaymentDetails: Boolean = false,
        $makePaymentDetailsDefault: Boolean = false,
        $venmoUserId: String,
        $smsOptIn: Boolean,
    ) {
        placeVenmoOrder(
            guid: $guid
            nonce: $nonce
            deviceData: $deviceData
            savePaymentDetails: $savePaymentDetails
            makePaymentDetailsDefault: $makePaymentDetailsDefault
            venmoUserId: $venmoUserId
            smsOptIn: $smsOptIn
        ) {
            success
            orderInfo {
                ...orderConfirmationFrag
            }
        }
    }
    ${a}
`;export{m as default};
