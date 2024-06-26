import{g as e}from"./index_767de702_r24-02-0_b0_t240129-161140.js";import"./ast_dd2f4d00_r24-02-0_b0_t240129-161140.js";import"./blockString_ae762cd0_r24-02-0_b0_t240129-161140.js";const o=e`mutation updateDeliveryModeGooglePay($guid: String!, $deliveryModeId: String!) {
    updateDeliveryModeGooglePay(guid: $guid, deliveryModeId: $deliveryModeId) {
        merchantInfo {
            merchantId
            merchantName
        }
        allowedPaymentMethods {
            type
            parameters {
                allowedAuthMethods
                allowedCardNetworks
            }
            tokenizationSpecification {
                type
                parameters {
                    gateway
                    gatewayMerchantId
                }
            }
        }
        transactionInfo {
            totalPriceStatus
            totalPrice
            totalPriceLabel
            currencyCode
            countryCode
            displayItems {
                type
                label
                price
                status
            }
        }
        shippingOptionParameters {
            defaultSelectedOptionId
            shippingOptions {
                description
                id
                label
            }
        }
        callbackIntents
        shippingAddressRequired
        shippingAddressParameters {
            phoneNumberRequired
            allowedCountryCodes
        }
        emailRequired
        shippingOptionRequired
        status
    }
}`;export{o as default};
