import{g as e}from"./index_767de702_r24-02-0_b0_t240129-161140.js";import"./ast_dd2f4d00_r24-02-0_b0_t240129-161140.js";import"./blockString_ae762cd0_r24-02-0_b0_t240129-161140.js";const r=e`query giftCardDetail($type: String!) {
    giftCardDetail(type: $type) {
        altText
        availableForPickup
        baseProduct
        code
        colorName
        comingSoon
        customizable
        customizationType
        description
        findInStoreEligible
        flxCustomization
        galleryImageList {
            galleryImage {
                altText
                format
                galleryIndex
                imageType
                url
            }
        }
        giftCardType
        itemType
        lscoBreadcrumbs {
            linkClass
            name
            url
        }
        maxOrderQuantity
        minOrderQuantity
        multidimensional
        name
        pdpGroupId
        purchasable
        returnable
        seoMetaData {
            metaDescription
            metaH1
            metaTitle
            robots
        }
        soldIndividually
        soldOutForever
        summary
        url
        variantOptions {
            code
            comingSoon
            customizable
            displaySizeDescription
            findInStoreEligible
            flxCustomization
            priceData {
                currencyIso
                formattedValue
                priceType
                regularPrice
                regularPriceFormattedValue
                value
            }
            soldIndividually
            soldOutForever
            stock {
                stockLevel
                stockLevelStatus
            }
            url
        }
        variantSize
        variantType
    }
}`;export{r as default};
