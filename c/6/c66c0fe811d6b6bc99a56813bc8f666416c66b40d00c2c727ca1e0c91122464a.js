import{g as e}from"./index_767de702_r24-02-0_b0_t240129-161140.js";import"./ast_dd2f4d00_r24-02-0_b0_t240129-161140.js";import"./blockString_ae762cd0_r24-02-0_b0_t240129-161140.js";const u=e`mutation updateItemQty($itemNumber: Int!, $guid: String!, $qty: Int!, $fulfilled: Boolean) {
    updateItemQty(itemNumber: $itemNumber, guid: $guid, qty: $qty, fulfilled: $fulfilled) {
        entry {
            basePrice {
                formattedValue
                value
                currencyIso
            }
            entryNumber
            fulfilled
            freeGift
            orderDiscountShare
            productDiscount {
                value
            }
            product {
                altText
                baseOptions {
                    selected {
                        displaySizeDescription
                    }
                    variantType
                }
                baseProduct
                code
                colorName
                images {
                    altText
                    format
                    galleryIndex
                    imageType
                    url
                }
                maxOrderQuantity
                merchantBadge
                minOrderQuantity
                name
                price {
                    code
                    currencyIso
                    formattedValue
                    hardPrice
                    hardPriceFormattedValue
                    maxQuantity
                    minQuantity
                    priceType
                    regularPrice
                    regularPriceFormattedValue
                    softPrice
                    softPriceFormattedValue
                    value
                }
                stock {
                    stockLevel
                    stockLevelStatus
                }
            }
            quantity
            totalPrice {
                formattedValue
                value
                currencyIso
            }
        }
        quantityAdded
        statusCode
    }
}`;export{u as default};
