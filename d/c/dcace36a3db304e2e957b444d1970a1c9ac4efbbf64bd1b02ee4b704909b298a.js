import{g as e}from"./index_767de702_r24-02-0_b0_t240129-161140.js";import"./ast_dd2f4d00_r24-02-0_b0_t240129-161140.js";import"./blockString_ae762cd0_r24-02-0_b0_t240129-161140.js";const a=e`
query getHomeRecommendation(
  $anonymousId: String!,
  $placement: String!
) {
    getHomeRecommendation(
      anonymousId: $anonymousId,
      placement: $placement
    ) {
      data {
        getRecommendations {
        pc9,
        predictionSource,
          productDetail {
            title,
            imageLink,
            regularPrice,
            hardMarkPrice,
            softMarkPrice,
            link,
          },
          rank
      }
    }
  }
}`;export{a as default};
    extCaptureDate
                    orderLineStatusId
                    orderLineStatus
                    masterLineStatus
                    lineType
                    itemId
                    itemPKId
                    merchGroup
                    merchType
                    isGift
                    lineTotal
                    formattedLineTotal
                    onHold
                    mergeFacilityAliasId
                    isReturnable
                    priceDetails {
                        price
                        formattedPrice
                        extendedPrice
                        formattedExtendedPrice
                        purchasePrise
                        isPriceOverridden
                        originalPrice
                        formattedOriginalPrice
                    }
                    orderedQuantity
                    orderedQtyUOM
                    cancelledQuantity
                    totalAllocatedQuantity
                    totalCancelledQuantity
                    quantityDetails {
                        baseStorageUom
                        orderedQuantityInBaseStorageUom
                        totalAllocatedQuantity
                        totalBackorderedQuantity
                        totalCancelledQuantity
                        totalDCAllocatedQuantity
                        totalReleasedQuantity
                        totalShippedQuantity
                    }
                    shippingInfo {
                        mustDeliverByDate
                        promisedDeliverByDate
                        requestedDeliverByDate
                        shipVia
                        shipViaDescription
                        designatedCarrierCode
                        designatedModeCode
                        designatedServiceLevelCode
                        deliveryOption
                        appliedFreeShippingPromo
                        shippingAddress {
                            firstName
                            lastName
                            addressLine1
                            adderessLine2
                            city
                            stateProv
                            postalCode
                            country
                            phone
                            addressVerified
                        }
                    }
                    discountDetails {
                        totalDiscountDetails {
                            totalPromotionsApplied
                            totalPromotionAmount
                            formattedTotalPromotionAmount
                            totalCouponsApplied
                            totalCouponAmount
                            formattedTotalCouponAmount
                            totalAppeasementsApplied
                            totalAppeasementAmount
                            formattedTotalAppeasementAmount
                        }
                    }
                    referenceFields {
                        referenceNumber1
                        referenceNumber2
                        referenceNumber3
                        referenceNumber4
                        referenceNumber5
                        referenceField1
                        referenceField2
                        referenceField3
                        referenceField4
                        referenceField5
                        referenceField6
                        referenceField7
                        referenceField8
                        referenceField9
                        referenceField10
                    }
                    skuAttributes {
                        inventoryType
                        productStatus
                        skuAttribute1
                        skuAttribute2
                        skuAttribute3
                        skuAttribute4
                        skuAttribute5
                        countryOfOrigin
                    }
                    itemDescription
                    imageURL
                    webURL
                    itemSize
                    itemColor
                    itemStyle
                    productClass
                    extLineId
                    cancelled
                    unitPriceAmount
                    lineDiscountAmount
                    formattedLineDiscountAmount
                    originalPrice
                    orderLineTotals {
                        lineTotal
                        itemSubTotal
                        formattedItemSubTotal
                        formattedLineTotal
                        lineDiscountAmount
                        formattedLineDiscountAmount
                        lineTaxAmonut
                        formattedLineTaxAmount
                        lineTotalBeforeTaxes
                        formattedLineTotalBeforeTaxes
                        lineTotalWithoutFees
                        formattedLineTotalWithoutFees
                    }
                    committedDeliveryDTTM
                    formattedCommittedDeliveryDTTM
                    isAnyChildLineInPartiallyShippedStatus
                    allocationDetails {
                        allocatedQuantity
                        supplyType
                        virtualAllocation
                        facilityType
                        committedShipDate
                        itemId
                        committedDeliveryDate
                        formattedCommittedDeliveryDate
                        originFacilityAliasID
                    }
                }
            }
        }
    }
}`;export{o as default};
