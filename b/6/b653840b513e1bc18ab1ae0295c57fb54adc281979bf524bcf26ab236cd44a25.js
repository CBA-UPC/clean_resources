import{g as e}from"./index_767de702_r24-02-0_b0_t240129-161140.js";import"./ast_dd2f4d00_r24-02-0_b0_t240129-161140.js";import"./blockString_ae762cd0_r24-02-0_b0_t240129-161140.js";const r=e`mutation validateOTP($username: String!, $password: String!, $anonCartGuid: String, $checkFor247Account: Boolean, $isRedTabGlobal: Boolean) {
    validateOTP(username: $username, password: $password, anonCartGuid: $anonCartGuid, checkFor247Account: $checkFor247Account, isRedTabGlobal: $isRedTabGlobal ) {
        cartGuid,
        emailAlreadyExists,
        user {
            uid
            customerId
            firstName
            lastName
            loyaltyCustomer
            loyaltyID
            loyaltyProfile {
                LoyaltyZoneCode
                LanguageCode
                Country
                EmailIsOptIn
            }
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
            country {
                isocode
                name
            }
            lastRetailStoreId
        }
        merged
        mergeMessage
        storeUpdateMerged
        refreshTime
    }
}`;export{r as default};
