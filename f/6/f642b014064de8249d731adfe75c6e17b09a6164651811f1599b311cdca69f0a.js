import{_ as n}from"./_plugin-vue_export-helper_c27b6911_r24-02-0_b0_t240129-161140.js";import{A as s,B as a}from"./vendor_6ed58054_r24-02-0_b0_t240129-161140.js";const _={},c=["innerHTML"];function o(e,r){return s(),a("div",{class:"final-sale-wrapper",innerHTML:e.$t("i18n.finalSaleMessage")},null,8,c)}const i=n(_,[["render",o],["__scopeId","data-v-c349eb5e"]]);export{i as F};
copeId","data-v-c5cf4c37"]]);export{B as P};
an, $enableGrouping: Boolean) {
  categoriesPersonalized (
    region: $region
    query: $query
    sort: $sort
    currentPage: $currentPage
    pageSize: $pageSize
    categoryId: $categoryId
    preOrder: $preOrder
    anonymousId: $anonymousId
    useRecoSnapshot: $useRecoSnapshot
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
    personalization
    numRecommendations
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
  }
}`;export{t as default};
