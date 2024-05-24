import{g as e}from"./index_767de702_r24-02-0_b0_t240129-161140.js";import"./ast_dd2f4d00_r24-02-0_b0_t240129-161140.js";import"./blockString_ae762cd0_r24-02-0_b0_t240129-161140.js";const i=e`mutation updateItemFulfillment($itemNumber: Int!, $pickupStore: String, $guid: String!, $forShipToStore: Boolean) {
    updateItemFulfillment(itemNumber : $itemNumber, pickupStore: $pickupStore, guid: $guid, forShipToStore: $forShipToStore) {
      deliveryModeChanged
      entry {
        isExcludedFromAvailabilityCheck
          basePrice {
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
      deliveryMode {
          code
          deliveryCost {
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
          description
          name
          estimatedDeliveryDate
      }
      deliveryPointOfService {
          address {
              companyName
              country {
                  continent
                  isocode
                  name
                  regions {
                      countryIso
                      isocode
                      isocodeShort
                      name
                  }
                  rejectedPostcode
                  zones {
                      code
                  }
              }
              email
              firstName
              formattedAddress
              id
              lastName
              line1
              line2
              phone
              postalCode
              region {
                  countryIso
                  isocode
                  isocodeShort
                  name
              }
              shippingAddress
              title
              titleCode
              town
              visibleInAddressBook
          }
          description
          displayName
          distanceKm
          features
          formattedDistance
          geoPoint {
              latitude
              longitude
          }
          mapIcon {
              altText
              format
              galleryIndex
              imageType
              url
          }
          name
          openingHours {
              code
              name
              specialDayOpeningList {
                  closed
                  closingTime {
                      formattedHour
                      hour
                      minute
                  }
                  comment
                  date
                  formattedDate
                  name
                  openingTime {
                      formattedHour
                      hour
                      minute
                  }
              }
              weekDayOpeningList {
                  closed
                  closingTime {
                      formattedHour
                      hour
                      minute
                  }
                  openingTime {
                      formattedHour
                      hour
                      minute
                  }
                  weekDay
              }
          }
          storeContent
          storeImages {
              altText
              format
              galleryIndex
              imageType
              url
          }
          url
      }
      entryNumber
      product {
          altText
          availableForPickup
          averageOverallRatings
          averageRating
          baseOptions {
              options {
                  code
                  colorName
                  displaySizeDescription
                  maxOrderQuantity
                  minOrderQuantity
                  priceData {
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
                  url
                  variantOptionQualifiers {
                      image {
                          altText
                          format
                          galleryIndex
                          imageType
                          url
                      }
                      name
                      qualifier
                      value
  
                  }
              }
              selected {
                  code
                  colorName
                  displaySizeDescription
                  maxOrderQuantity
                  minOrderQuantity
                  priceData {
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
                  url
                  variantOptionQualifiers {
                      image {
                          altText
                          format
                          galleryIndex
                          imageType
                          url
                      }
                      name
                      qualifier
                      value
  
                  }
              }
              variantType
          }
          baseProduct
          categories {
              code
              image {
                  altText
                  format
                  galleryIndex
                  imageType
                  url
              }
              url
          }
          categoryNames
          classifications {
              code
              features {
                  code
                  comparable
                  description
                  featureUnit {
                      name
                      symbol
                      unitType
                  }
                  featureValues {
                      value
                  }
                  name
                  range
                  type
              }
              name
          }
          code
          colorGroup
          colorName
          customizable
            customizationType
          description
          findInStoreEligible
            flxCustomization
          futureStocks {
              date
              formattedDate
              stock {
                  stockLevel
                  stockLevelStatus
              }
          }
          galleryImageList {
              galleryImage {
                  altText
                  format
                  galleryIndex
                  imageType
                  url
              }
              videos {
                  altText
                  format
                  galleryIndex
                  url
              }
          }
          giftCardType
          images {
              altText
              format
              galleryIndex
              imageType
              url
          }
          itemType
          manufacturer
          maxOrderQuantity
          merchantBadge
          minOrderQuantity
          multidimensional
          name
          noOfRatings
          numberOfReviews
          potentialPromotions {
              code
              couldFireMessages
              couponCode
              description
              enabled
              endDate
              firedMessages
              priority
              productBanner {
                  altText
                  format
                  galleryIndex
                  imageType
                  url
              }
              promoDetails
              promotionGroup
              promotionType
              restrictions {
                  description
                  restrictionType
              }
              startDate
              title
          }
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
          priceRange {
              maxPrice {
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
              minPrice {
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
          }
          productReferences {
              description
              preselected
              quantity
              referenceType
              target
          }
          promotionalBadge
          purchasable
          reviews {
              alias
              comment
              date
              headline
              id
              principal {
                  currency {
                      active
                      isocode
                      name
                      symbol
                  }
                  defaultAddress {
                      companyName
                      country {
                          continent
                          isocode
                          name
                          regions {
                              countryIso
                              isocode
                              isocodeShort
                              name
                          }
                          rejectedPostcode
                          zones {
                              code
                          }
                      }
                      email
                      firstName
                      formattedAddress
                      id
                      lastName
                      line1
                      line2
                      phone
                      postalCode
                      region {
                          countryIso
                          isocode
                          isocodeShort
                          name
                      }
                      shippingAddress
                      title
                      titleCode
                      town
                      visibleInAddressBook
                  }
                  displayUid
                  firstName
                  language {
                      active
                      isocode
                      name
                      nativeName
                  }
                  lastName
                  name
                  title
                  titleCode
                  uid
              }
              rating
          }
          sizeGuide
          soldIndividually
          soldOutForever
          stock {
              stockLevel
              stockLevelStatus
          }
          summary
          url
          variantMatrix {
              elements
              isLeaf
              parentVariantCategory {
                  hasImage
                  name
                  priority
              }
              variantOption {
                  code
                  colorName
                  displaySizeDescription
                  maxOrderQuantity
                  minOrderQuantity
                  priceData {
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
                  url
                  variantOptionQualifiers {
                      image {
                          altText
                          format
                          galleryIndex
                          imageType
                          url
                      }
                      name
                      qualifier
                      value
                  }
              }
              variantValueCategory {
                  name
                  sequence
                  superCategories {
                      hasImage
                      name
                      priority
                  }
              }
          }
          variantOptions {
              code
              colorName
              displaySizeDescription
              maxOrderQuantity
              minOrderQuantity
              priceData {
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
              url
              variantOptionQualifiers {
                  image {
                      altText
                      format
                      galleryIndex
                      imageType
                      url
                  }
                  name
                  qualifier
                  value
              }
          }
          variantType
          volumePrices {
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
          volumePricesFlag
      }
      quantity
      regularPrice {
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
      softMarkPrice {
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
      totalPrice {
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
      updateable
      }
      quantity
      quantityAdded
      statusCode
      statusMessage
    }
  }`;export{i as default};
