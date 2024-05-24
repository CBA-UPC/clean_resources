import{g as e}from"./index_767de702_r24-02-0_b0_t240129-161140.js";import"./ast_dd2f4d00_r24-02-0_b0_t240129-161140.js";import"./blockString_ae762cd0_r24-02-0_b0_t240129-161140.js";const t=e`query login($username: String!, $password: String!, $anonCartGuid: String, $checkFor247Account: Boolean, $isRedTabGlobal: Boolean) {
    login(username: $username, password: $password, anonCartGuid: $anonCartGuid, checkFor247Account: $checkFor247Account, isRedTabGlobal: $isRedTabGlobal) {
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
}`;export{t as default};
me
            message
        }
        donationAmountFormattedValue
        billingInfo {
            cardAccountNumber
            cardCardType
            cardExpiryMonth
            cardExpiryYear
            paymentOption
            billingAddress {
                firstName
                lastName
                addressLine1
                addressLine2
                town
                postalCode
                email
                phone
                country
                region
            }
        }
        transactionGroup {
            transactionDetailData {
                transactionDate
                transactionType
                transactionAmountValue
                transactionAmountFormattedValue
            }
        }
        returnGroup {
            returnGroupData {
                groupDate
                pendingReturn
                trackingUrl
                exchanged
                orderLineDetails {
                    skuCode
                    styleName
                    skuColor
                    skuSize
                    imageUrl
                    quantity
                    basePriceValue
                    basePriceFormattedValue
                    subTotalPriceValue
                    subTotalPriceFormattedValue
                    priceValue
                    priceFormattedValue
                    productUrl
                    productClass
                    orderlineIsReturnable
                }
            }
        }
        processingGroup {
            processingGroupData {
                orderLineDetails {
                    skuCode
                    styleName
                    skuColor
                    skuSize
                    imageUrl
                    quantity
                    basePriceValue
                    basePriceFormattedValue
                    subTotalPriceValue
                    subTotalPriceFormattedValue
                    priceValue
                    priceFormattedValue
                    productUrl
                    productClass
                    orderlineIsReturnable
                }
            }
        }
        cancelledGroup {
            cancelledGroupData {
                orderLineDetails {
                    skuCode
                    styleName
                    skuColor
                    skuSize
                    imageUrl
                    quantity
                    basePriceValue
                    basePriceFormattedValue
                    subTotalPriceValue
                    subTotalPriceFormattedValue
                    priceValue
                    priceFormattedValue
                    productUrl
                    productClass
                    orderlineIsReturnable
                }
            }
        }
        pickedupGroup {
            pickedupGroupData {
                groupDate
                orderLineDetails {
                    skuCode
                    styleName
                    skuColor
                    skuSize
                    imageUrl
                    quantity
                    basePriceValue
                    basePriceFormattedValue
                    subTotalPriceValue
                    subTotalPriceFormattedValue
                    priceValue
                    priceFormattedValue
                    productUrl
                    productClass
                    orderlineIsReturnable
                }
            }
        }
        shippingAddress {
            companyName
            firstName
            lastName
            addressLine1
            addressLine2
            town
            postalCode
            email
            phone
            country
            region
        }
        storeInfo {
            code
            name
            addr_line_1
            addr_line_2
            addr_line_3
            city
            state
            zip
        }
    }
}`;export{o as default};
