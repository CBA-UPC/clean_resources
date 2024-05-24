import{g as r}from"./index_767de702_r24-02-0_b0_t240129-161140.js";import"./ast_dd2f4d00_r24-02-0_b0_t240129-161140.js";import"./blockString_ae762cd0_r24-02-0_b0_t240129-161140.js";const i=r`query getOnlineOrdersV2($email: String!, $startIndex: Int, $endIndex: Int) {
    getOnlineOrdersV2(startIndex: $startIndex, endIndex: $endIndex, email: $email) {
        orderHistory {
            orderHeader {
                bopisAddress {
                    bopisName
                }
                cartGuid
                customerEmail
                deliveryPointOfService
                isBopisOrder
                isCancellationAllowed
                isGiftCardOrder
                isReturnAllowed
                onHold
                orderCaptureDate
                orderId
                orderLines {
                    imageUrl
                    quantity
                    isBopisLine
                }
                orderOrigin
                orderSource
                orderStatusAlias
                orderType
                packages {
                    carrier
                    trackingNumber
                    trackingUrl
                }
                parentOrderReturnLink
                priceOrderInfo {
                    currencyCode
                    grandTotal
                    grandTotalWithCurrency
                    totalCharges
                    totalDiscount
                    totalTaxes
                }
                returnLink
                returnStatus
                shippingAddress {
                    customerName
                    shippingEmail
                }
                totalItemCount
            }
        }
        pagination {
            currentPage
            pageSize
            sort
            totalPages
            totalResults
        }
        result {
            orderIdsFoundInEom
            orderIdsNotFoundInEom
        }
    }
}`;export{i as default};
