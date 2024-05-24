import{g as e}from"./index_767de702_r24-02-0_b0_t240129-161140.js";import"./ast_dd2f4d00_r24-02-0_b0_t240129-161140.js";import"./blockString_ae762cd0_r24-02-0_b0_t240129-161140.js";const s=e`mutation registerUser($subsource: String, $userDetail: userObj!, $referralId: String, $promoCode: String, $promoType: String) {
    registerUser(subsource: $subsource, userDetail: $userDetail, referralId: $referralId, promoCode: $promoCode, promoType: $promoType) {
        cartGuid,
        emailAlreadyExists,
        user {
            uid
            consumerId
            customerId
            firstName
            lastName
            loyaltyCustomer
            loyaltyID
            preferences {
                clothing_type
                shopping_preferences
                denim_style
                birth_date {
                    month
                    year
                }
            }
            graduationYear
            student
            loyaltyProfile {
                LoyaltyZoneCode
                LanguageCode
                Country
                EmailIsOptIn
            }
            country {
                isocode
                name
            }
        }
        refreshTime,
        alreadySubscribed,
        promoAlreadyRedeemed
    }
}`;export{s as default};
