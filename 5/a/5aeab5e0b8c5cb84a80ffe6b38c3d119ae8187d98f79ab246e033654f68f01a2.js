import{g as e}from"./index_767de702_r24-02-0_b0_t240129-161140.js";import"./ast_dd2f4d00_r24-02-0_b0_t240129-161140.js";import"./blockString_ae762cd0_r24-02-0_b0_t240129-161140.js";const o=e`query categories($query: String!, $sort: String, $currentPage: Int, $pageSize: Int, $categoryId: String!, $preOrder: Boolean, $abTestSectionedPLP: Boolean, $enableGrouping: Boolean ) {
  categories (
    query: $query
    sort: $sort
    currentPage: $currentPage
    pageSize: $pageSize
    categoryId: $categoryId
    preOrder: $preOrder
    abTestSectionedPLP: $abTestSectionedPLP
    enableGrouping: $enableGrouping
  ) {
    description
    breadcrumbs {
      facetCode
      facetName
      facetValueName
      removeQuery {
        query {
          value
        }
        url
      }
    }
    categoryCode
    categoryHierarchy {
      code
      count
      selected
      childSelected
      children
      depth
      leaf
      parentSelected
    }
    categoryName
    emailSignUpGateEnabled
    registrationGateEnabled
    currentQuery {
      url
    }
    facets {
      category
      code
      name
      nofollow
      priority
      visible
      topValues {
        count
        name
        nofollow
        selected
        query {
          query {
            value
          }
          url
        }
      }
      values {
        count
        name
        nofollow
        selected
        query {
          query {
            value
          }
          url
        }
      }
    }
    faq
    freeTextSearch
    noProductsRedirectMsg
    lscoBreadcrumbs {
      name
      url
      linkClass
    }
    pagination {
      currentPage
      totalPages
      totalResults
    }
    products {
      channels
      code
      colorName
      colorGroup
      backOrder
      name
      url
      price {
        code
        currencyIso
        formattedValue
        hardPrice
        hardPriceFormattedValue
        regularPrice
        regularPriceFormattedValue
        softPrice
        softPriceFormattedValue
        value
      }
      priceRange {
        maxPrice {
          formattedValue
          value
          regularPrice
          softPrice
          hardPrice
        }
        minPrice {
          formattedValue
          value
          regularPrice
          softPrice
          hardPrice
        }
      }
      priceRangeFrom {
        maxPrice {
          formattedValue
          value
          regularPrice
          softPrice
          hardPrice
        }
        minPrice {
          formattedValue
          value
          regularPrice
          softPrice
          hardPrice
        }
      }
      baseProduct
      soldIndividually
      comingSoon
      averageOverallRatings
      noOfRatings
      soldOutForever
      sustainability
      findInStoreEligible
      customizable
      flxCustomization
      availableForPickup
      department
      productSizeCoverage
      pdpGroupId
      preOrder
      preOrderShipDate
      returnable
      variantOptions {
        code
        comingSoon
        colorName
        colorGroup
        preOrder
        backOrder
        customizable
        findInStoreEligible
        flxCustomization
        merchantBadge
        promotionalBadge
        sustainability
        name
        swatchUrl
        swatchAltText
        returnable
        galleryList {
          galleryImage {
            altText
            format
            galleryIndex
            imageType
            url
          }
        }
        priceData {
          hardPrice
          hardPriceFormattedValue
          regularPrice
          regularPriceFormattedValue
          softPrice
          softPriceFormattedValue
          value
          currencyIso
        }
        soldIndividually
        soldOutForever
        url
      }
      lscoBreadcrumbs {
        categoryCode
        name
        url
      }
      swatchUrl
      swatchAltText
      galleryList {
        galleryImage {
          altText
          format
          galleryIndex
          imageType
          url
        }
      }
      merchantBadge
      promotionalBadge
      errors {
        component
        name
        time_thrown
        message
      }
    }
    seoMetaData {
      canonicalUrl
      metaDescription
      metaH1
      metaTitle
      robots
    }
    sorts {
      code
      name
      selected
    }
    spellingSuggestion {
      query
      suggestion
    }
    subSections {
      description
      categoryName
      currentQuery {
        url
      }
      pagination {
        currentPage
        totalPages
        totalResults
      }
      products {
        channels
        code
        colorName
        colorGroup
        backOrder
        name
        url
        price {
          code
          currencyIso
          formattedValue
          hardPrice
          hardPriceFormattedValue
          regularPrice
          regularPriceFormattedValue
          softPrice
          softPriceFormattedValue
          value
        }
        priceRange {
          maxPrice {
            formattedValue
            value
            regularPrice
            softPrice
            hardPrice
          }
          minPrice {
            formattedValue
            value
            regularPrice
            softPrice
            hardPrice
          }
        }
        priceRangeFrom {
          maxPrice {
            formattedValue
            value
            regularPrice
            softPrice
            hardPrice
          }
          minPrice {
            formattedValue
            value
            regularPrice
            softPrice
            hardPrice
          }
        }
        baseProduct
        soldIndividually
        comingSoon
        averageOverallRatings
        noOfRatings
        soldOutForever
        sustainability
        findInStoreEligible
        customizable
        flxCustomization
        availableForPickup
        department
        pdpGroupId
        preOrder
        preOrderShipDate
        returnable
        variantOptions {
          code
          comingSoon
          colorName
          colorGroup
          preOrder
          backOrder
          customizable
          findInStoreEligible
          flxCustomization
          merchantBadge
          promotionalBadge
          sustainability
          name
          swatchUrl
          swatchAltText
          returnable
          galleryList {
            galleryImage {
              altText
              format
              galleryIndex
              imageType
              url
            }
          }
          priceData {
            hardPrice
            hardPriceFormattedValue
            regularPrice
            regularPriceFormattedValue
            softPrice
            softPriceFormattedValue
            value
            currencyIso
          }
          soldIndividually
          soldOutForever
          url
        }
        lscoBreadcrumbs {
          categoryCode
          name
          url
        }
        swatchUrl
        swatchAltText
        galleryList {
          galleryImage {
            altText
            format
            galleryIndex
            imageType
            url
          }
        }
        merchantBadge
        promotionalBadge
        errors {
          component
          name
          time_thrown
          message
        }
      }
      seoMetaData {
        canonicalUrl
        metaDescription
        metaH1
        metaTitle
        robots
      }
    }
  }
}`;export{o as default};
