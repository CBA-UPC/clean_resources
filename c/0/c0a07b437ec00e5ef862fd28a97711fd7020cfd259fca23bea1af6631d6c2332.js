import{g as o}from"./index_767de702_r24-02-0_b0_t240129-161140.js";import"./ast_dd2f4d00_r24-02-0_b0_t240129-161140.js";import"./blockString_ae762cd0_r24-02-0_b0_t240129-161140.js";const i=o`mutation setPickupInfoBOPIS(
    $cartGuid: String!
    $pickupInfo: pickupInfoInput!
    $donationOptIn: Boolean!
) {
      setPickupInfoBOPIS(cartGuid: $cartGuid, pickupInfo: $pickupInfo, donationOptIn: $donationOptIn) {
      statusCode
      successMsg
    }
}`;export{i as default};
