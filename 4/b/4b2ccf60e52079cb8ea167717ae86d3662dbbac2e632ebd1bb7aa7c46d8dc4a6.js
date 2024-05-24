import{g as e}from"./index_767de702_r24-02-0_b0_t240129-161140.js";import"./ast_dd2f4d00_r24-02-0_b0_t240129-161140.js";import"./blockString_ae762cd0_r24-02-0_b0_t240129-161140.js";const a=e`mutation mergeAccount($username: String!, $password: String!) {
    mergeAccount(userDetails: {username: $username, password: $password}) {
        user {
            uid
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
            country {
                isocode
                name
            }
            loyaltyProfile {
                Country
                EmailIsOptIn
                LanguageCode
                LoyaltyZoneCode
            }
        }

    }
}`;export{a as default};
