import{m as y}from"./vuex.esm-bundler_aa359dca_r24-02-0_b0_t240129-161140.js";import{H as _,P as $,Q as g,L as N,A as n,B as c,I as s,J as r,G as d,S as v,al as b,O as f,X as k,_ as S}from"./vendor_6ed58054_r24-02-0_b0_t240129-161140.js";import{u as E}from"./csrGlobalStoreAppState_f9ff4bfa_r24-02-0_b0_t240129-161140.js";import{k as w,G as A,u as I,c as O}from"./index_31ad23dc_r24-02-0_b0_t240129-161140.js";import{S as T}from"./SvgIcon_e55bd28a_r24-02-0_b0_t240129-161140.js";import{b as P}from"./regexLocalization_16c032f3_r24-02-0_b0_t240129-161140.js";import{am as D}from"./lsanalytics-cart_5cb2710b_r24-02-0_b0_t240129-161140.js";import{g as V}from"./orderHelpers_fd52d65a_r24-02-0_b0_t240129-161140.js";import{u as p}from"./csrViewStoreTrackOrder_1e94aa9d_r24-02-0_b0_t240129-161140.js";import{_ as C}from"./_plugin-vue_export-helper_c27b6911_r24-02-0_b0_t240129-161140.js";import"./i18n_4b81f106_r24-02-0_b0_t240129-161140.js";const L={components:{SvgIcon:T},data(){return{emailInputValue:"",orderNumberValue:"",emailErrorMsg:"",orderErrorMsg:"",isEmailValid:!0,isOrderNumberValid:!0,isQueryPushed:!1}},computed:{..._(I,["locale","country"]),..._(p,["doesNotExist"]),..._(O,["toggle","paths","countryToggles"]),...$(p,["isValidQuery","userOrder"]),...y("auth",["loggedIn"]),isDockers(){return w()==="dockers"},voiceAssistantActive(){const[e]=this.countryToggles.filter(t=>t.key==="voiceAssistant");return e?e.value:!1}},async mounted(){var u,h,o;this.$_authEvents=A;const{orderNumber:e,email:t}=((h=(u=this.$router.currentRoute)==null?void 0:u.value)==null?void 0:h.query)??{};if(e&&t){this.orderNumberValue=e;const a={orderNumber:e,email:t};this.displayProgressSpinner(),await this.fetchOrdersDetails({payload:a});const l=(o=this.userOrder)==null?void 0:o.code;if(l){const i=this.paths.base;let m="";this.isQueryPushed?this.isQueryPushed=!1:(this.$store.getters["auth/loggedIn"]?m=`${this.paths.myOrderDetails}/${V(l)}/${l}`:m=`${i}/guest/order/${l}`,this.$router.push({path:m}))}else this.$router.push({path:this.$router.currentRoute.value.path});this.hideProgressSpinner()}this.reset()},methods:{...g(p,["fetchOrdersDetails","reset"]),...g(E,["displayProgressSpinner","hideProgressSpinner"]),inputValidation(e){if(e.preventDefault(),this.emailInputValidation(),this.isEmailValid){const t={orderNumber:this.orderNumberValue,email:this.emailInputValue};D(),this.isValidQuery||this.fetchOrdersDetails({payload:t})}},emailInputValidation(){const e=this.$router&&(this.$router.currentRoute.value.name==="UserProfile"||this.$router.currentRoute.value.name==="Login"),t=P(this.emailInputValue,this.country,e);this.emailErrorMsg=this.$t(t.errorMsg),this.isEmailValid=t.isValid},onRegisterClick(){this.$authEmitter.emit(this.$_authEvents.START_REGISTER)}},watch:{isValidQuery(){if(this.isValidQuery){const e=Number.isNaN(parseInt(this.orderNumberValue,10))?this.orderNumberValue:parseInt(this.orderNumberValue,10);this.isQueryPushed=!0,this.loggedIn?this.$router.push({path:`${this.paths.myOrderDetails}/${V(e)}/${e}`}):this.$router.push({path:`${this.paths.base}/guest/order/${e}`})}}},beforeUnmount(){this.isValidQuery=!1,this.isQueryPushed=!1}},Q={class:"track-order__wrapper"},R={class:S(["track-order__inner-wrapper","lsco-row","lsco-row-xs--center","track-order__inner-wrapper--transition"])},G={class:"lsco-col-xs-21 lsco-col-md-18"},M={class:"lsco-row lsco-row-xs--center"},B={class:"track-order__header"},x={class:"lsco-row lsco-row-xs--center track-order__column-wraper"},U={class:"lsco-col-xs-21 lsco-col-md-18 track-order__column-container"},z={class:"lsco-col-md-8 lsco-col-md-offset-0 left-column"},H={key:0,class:"error-msg does-not-exist",role:"alert"},W=["placeholder","aria-label"],j={key:1,class:"error-msg",role:"alert"},q=["placeholder","aria-label"],F={key:2,class:"error-msg",role:"alert"},J={class:"track-order__submit",type:"submit"},X={class:"lsco-col-md-8 lsco-col-md-offset-1 right-column"},Y={class:"sign-in__wrapper"},K={class:"sign-in__content"},Z={class:"sign-in__header"},ee={class:"sign-in__tagline"},se={key:0,class:"voice__wrapper"},te={class:"track-order__voice"},re={class:"track-order__voice-cta"},oe={class:"track-order__voice-details"},ie={class:"track-order__voice-buttons lsco-row lsco-row-xs--center"},ae={target:"_blank",rel:"noopener",href:"https://assistant.google.com/services/a/uid/000000501276bddb?hl=en",class:"track-order__voice-button"},le={target:"_blank",rel:"noopener",href:"https://www.amazon.com/Levi-Strauss-Levis-Assistant/dp/B07NDF1NYC",class:"track-order__voice-button"};function ne(e,t,u,h,o,a){const l=N("SvgIcon");return n(),c("div",Q,[s("div",R,[s("div",G,[s("div",M,[s("h1",B,r(e.$t("i18n.orderTrackLabel")),1)]),s("div",x,[s("div",U,[s("div",z,[s("form",{class:"track-order__form",onSubmit:t[2]||(t[2]=(...i)=>a.inputValidation&&a.inputValidation(...i))},[e.doesNotExist?(n(),c("div",H,r(e.$t("i18n.orderDoesNotExist")),1)):d("",!0),v(s("input",{class:"track-order__input",type:"text","onUpdate:modelValue":t[0]||(t[0]=i=>o.orderNumberValue=i),autocomplete:"on",placeholder:e.$t("i18n.orderNumberPlaceholder"),"aria-label":e.$t("i18n.orderNumberPlaceholder")},null,8,W),[[b,o.orderNumberValue]]),o.isOrderNumberValid?d("",!0):(n(),c("span",j,r(o.orderErrorMsg),1)),v(s("input",{class:"track-order__input",type:"email",autocomplete:"on","onUpdate:modelValue":t[1]||(t[1]=i=>o.emailInputValue=i),placeholder:e.$t("i18n.formEmailAddressLabel"),"aria-label":e.$t("i18n.formEmailAddressLabel")},null,8,q),[[b,o.emailInputValue]]),o.isEmailValid?d("",!0):(n(),c("span",F,r(o.emailErrorMsg),1)),s("button",J,r(e.$t("i18n.orderTrackLabel")),1)],32)]),s("div",X,[s("div",Y,[s("div",K,[s("h3",Z,r(e.$t("i18n.haveAccount")),1),s("span",ee,r(e.$t("i18n.keepTrackOfOrders")),1),s("button",{class:"sign-in__button",onClick:t[3]||(t[3]=(...i)=>a.onRegisterClick&&a.onRegisterClick(...i))},r(e.$t("i18n.signInTitle")),1)])]),a.voiceAssistantActive&&!a.isDockers?(n(),c("div",se,[s("div",te,[s("div",re,r(e.$t("i18n.trackOrderWithVoice")),1),s("div",oe,r(e.$t("i18n.voiceAssistantDetails")),1),s("div",ie,[s("a",ae,[f(l,{name:"google-assistant",title:"google assistant logo",class:"track-order__voice-button-icon"}),k(" "+r(e.$t("i18n.activateGoogle")),1)]),s("a",le,[f(l,{name:"alexa",title:"alexa logo",class:"track-order__voice-button-icon"}),k(" "+r(e.$t("i18n.activateAlexa")),1)])])])])):d("",!0)])])])])])])}const ke=C(L,[["render",ne],["__scopeId","data-v-8d2b56dd"]]);export{ke as default};
     isocodeShort
            }
            isocode
            name
            rejectedPostcode
            zones {
              code
            }
          }
          dhlPostNumber
          dhlStoreType
          email
          firstName
          formattedAddress
          id
          lastName
          line1
          line2
          newOrEditedAddress
          phone
          poBox
          postalCode
          region {
            isocode
            name
            countryIso
            isocodeShort
          }
          relaiscolisPseudoRvc
          relaiscolisStoreType
          shippingAddress
          storeId
          title
          titleCode
          town
          upsNetworkIds
          visibleInAddressBook
          defaultAddress
        }
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
        deliveryItemsQuantity
        deliveryMode {
          cheapestDeliveryMode
          cncNetworkCode
          code
          cutoffDeliveryTimeZone
          defaultCutoffDeliveryTime
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
          eddCutoffTimeEnabled
          estimatedDeliveryDate
          name
          omsShipCode
          placeBeforeMessage
          supportsSfs
        }
        deliveryModeStatus
        deliveryOrderGroups {
          deliveryAddress {
            avsVerified
            colissimoStoreType
            companyName
            billingAddress
            cnC
            cnCVendorCode
            country {
              continent
              regions {
                isocode
                name
                countryIso
                isocodeShort
              }
              isocode
              name
              rejectedPostcode
              zones {
                code
              }
            }
            dhlPostNumber
            dhlStoreType
            email
            firstName
            formattedAddress
            id
            lastName
            line1
            line2
            newOrEditedAddress
            phone
            poBox
            postalCode
            region {
              isocode
              name
              countryIso
              isocodeShort
            }
            relaiscolisPseudoRvc
            relaiscolisStoreType
            shippingAddress
            storeId
            title
            titleCode
            town
            upsNetworkIds
            visibleInAddressBook
            defaultAddress
          }
          entries {
            freeGift
            fulfilled
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
            customizationDetailData {
              customizationDetail
              customizedImgUrl
              recipeId
            }
            customized
            deliveryMode {
              cheapestDeliveryMode
              cncNetworkCode
              code
              cutoffDeliveryTimeZone
              defaultCutoffDeliveryTime
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
              eddCutoffTimeEnabled
              estimatedDeliveryDate
              name
              omsShipCode
              placeBeforeMessage
              supportsSfs
            }
            deliveryPointOfService {
              address {
                avsVerified
                colissimoStoreType
                companyName
                billingAddress
                cnC
                cnCVendorCode
                country {
                  continent
                  regions {
                    isocode
                    name
                    countryIso
                    isocodeShort
                  }
                  isocode
                  name
                  rejectedPostcode
                  zones {
                    code
                  }
                }
                dhlPostNumber
                dhlStoreType
                email
                firstName
                formattedAddress
                id
                lastName
                line1
                line2
                newOrEditedAddress
                phone
                poBox
                postalCode
                region {
                  isocode
                  name
                  countryIso
                  isocodeShort
                }
                relaiscolisPseudoRvc
                relaiscolisStoreType
                shippingAddress
                storeId
                title
                titleCode
                town
                upsNetworkIds
                visibleInAddressBook
                defaultAddress
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
            egiftCardExtraInfo {
              fromName
              message
              recipientEmail
              toName
            }
            entryNumber
            flxEntry
            hassleFreeEnabled
            isExcludedFromAvailabilityCheck
            lineNumber
            orderDiscountShare
            productDiscount {
              value
            }
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
              department
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
                  imageType
                  url
                }
              }
              giftCardType
              hassleFreeEnabled
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
              pdpGroupId
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
              returnable
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
                    avsVerified
                    colissimoStoreType
                    companyName
                    billingAddress
                    cnC
                    cnCVendorCode
                    country {
                      continent
                      regions {
                        isocode
                        name
                        countryIso
                        isocodeShort
                      }
                      isocode
                      name
                      rejectedPostcode
                      zones {
                        code
                      }
                    }
                    dhlPostNumber
                    dhlStoreType
                    email
                    firstName
                    formattedAddress
                    id
                    lastName
                    line1
                    line2
                    newOrEditedAddress
                    phone
                    poBox
                    postalCode
                    region {
                      isocode
                      name
                      countryIso
                      isocodeShort
                    }
                    relaiscolisPseudoRvc
                    relaiscolisStoreType
                    shippingAddress
                    storeId
                    title
                    titleCode
                    town
                    upsNetworkIds
                    visibleInAddressBook
                    defaultAddress
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
              sku
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
          totalPriceWithTax {
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
        deliveryStatus
        discountsIncludeDeliveryCost
        discountsIncludePaymentCost
        donationOptIn
        donationsAmount {
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
        entries {
          freeGift
          fulfilled
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
          customizationDetailData {
            customizationDetail
            customizedImgUrl
            recipeId
          }
          customized
          deliveryMode {
            cheapestDeliveryMode
            cncNetworkCode
            code
            cutoffDeliveryTimeZone
            defaultCutoffDeliveryTime
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
            eddCutoffTimeEnabled
            estimatedDeliveryDate
            name
            omsShipCode
            placeBeforeMessage
            supportsSfs
          }
          deliveryPointOfService {
            address {
              avsVerified
              colissimoStoreType
              companyName
              billingAddress
              cnC
              cnCVendorCode
              country {
                continent
                regions {
                  isocode
                  name
                  countryIso
                  isocodeShort
                }
                isocode
                name
                rejectedPostcode
                zones {
                  code
                }
              }
              dhlPostNumber
              dhlStoreType
              email
              firstName
              formattedAddress
              id
              lastName
              line1
              line2
              newOrEditedAddress
              phone
              poBox
              postalCode
              region {
                isocode
                name
                countryIso
                isocodeShort
              }
              relaiscolisPseudoRvc
              relaiscolisStoreType
              shippingAddress
              storeId
              title
              titleCode
              town
              upsNetworkIds
              visibleInAddressBook
              defaultAddress
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
          egiftCardExtraInfo {
            fromName
            message
            recipientEmail
            toName
          }
          entryNumber
          flxEntry
          hassleFreeEnabled
          isExcludedFromAvailabilityCheck
          lineNumber
          orderDiscountShare
          productDiscount {
            value
          }
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
            department
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
                imageType
                url
              }
            }
            giftCardType
            hassleFreeEnabled
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
            pdpGroupId
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
            returnable
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
                  avsVerified
                  colissimoStoreType
                  companyName
                  billingAddress
                  cnC
                  cnCVendorCode
                  country {
                    continent
                    regions {
                      isocode
                      name
                      countryIso
                      isocodeShort
                    }
                    isocode
                    name
                    rejectedPostcode
                    zones {
                      code
                    }
                  }
                  dhlPostNumber
                  dhlStoreType
                  email
                  firstName
                  formattedAddress
                  id
                  lastName
                  line1
                  line2
                  newOrEditedAddress
                  phone
                  poBox
                  postalCode
                  region {
                    isocode
                    name
                    countryIso
                    isocodeShort
                  }
                  relaiscolisPseudoRvc
                  relaiscolisStoreType
                  shippingAddress
                  storeId
                  title
                  titleCode
                  town
                  upsNetworkIds
                  visibleInAddressBook
                  defaultAddress
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
            sku
            sizeGuide
            soldIndividually
            soldOutForever
            stock {
              stockLevel
              stockLevelStatus
            }
            summary
            sustainability
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
        entriesLastIndex
        estimatedDeliveryDate
        expirationTime
        exportStatus
        extraInfo
        guid
        hasGiftWrapEntry
        expressCheckoutAllowed
        giftWrapProductCode
        hasGiftCardEntries
        name
        net
        nonDiscountedSubTotal {
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
        orderDiscounts {
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
        owner
        paymentInfo {
          accountHolderName
          adyenFirstName
          adyenLastName
          adyenPaymentMethod
          adyenPaypalEcsToken
          adyenPaypalPayerId
          adyenSelectedReference
          adyenSocialSecurityNumber
          billingAddress {
            avsVerified
            colissimoStoreType
            companyName
            billingAddress
            cnC
            cnCVendorCode
            country {
              continent
              regions {
                isocode
                name
                countryIso
                isocodeShort
              }
              isocode
              name
              rejectedPostcode
              zones {
                code
              }
            }
            dhlPostNumber
            dhlStoreType
            email
            firstName
            formattedAddress
            id
            lastName
            line1
            line2
            newOrEditedAddress
            phone
            poBox
            postalCode
            region {
              isocode
              name
              countryIso
              isocodeShort
            }
            relaiscolisPseudoRvc
            relaiscolisStoreType
            shippingAddress
            storeId
            title
            titleCode
            town
            upsNetworkIds
            visibleInAddressBook
            defaultAddress
          }
          cardNumber
          cardType {
            code
            name
          }
          defaultPayment
          encryptedCardNumber
          encryptedExpiryMonth
          encryptedExpiryYear
          encryptedSecurityCode
          expiryMonth
          expiryYear
          id
          installments
          issueNumber
          saveCardData
          saved
          startMonth
          startYear
          subscriptionId
        }
        paymentMethod
        pickupItemsQuantity
        pickupOrderGroups {
          deliveryAddress {
            avsVerified
            colissimoStoreType
            companyName
            billingAddress
            cnC
            cnCVendorCode
            country {
              continent
              regions {
                isocode
                name
                countryIso
                isocodeShort
              }
              isocode
              name
              rejectedPostcode
              zones {
                code
              }
            }
            dhlPostNumber
            dhlStoreType
            email
            firstName
            formattedAddress
            id
            lastName
            line1
            line2
            newOrEditedAddress
            phone
            poBox
            postalCode
            region {
              isocode
              name
              countryIso
              isocodeShort
            }
            relaiscolisPseudoRvc
            relaiscolisStoreType
            shippingAddress
            storeId
            title
            titleCode
            town
            upsNetworkIds
            visibleInAddressBook
            defaultAddress
          }
          distance
          entries {
            freeGift
            fulfilled
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
            customizationDetailData {
              customizationDetail
              customizedImgUrl
              recipeId
            }
            customized
            deliveryMode {
              cheapestDeliveryMode
              cncNetworkCode
              code
              cutoffDeliveryTimeZone
              defaultCutoffDeliveryTime
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
              eddCutoffTimeEnabled
              estimatedDeliveryDate
              name
              omsShipCode
              placeBeforeMessage
              supportsSfs
            }
            deliveryPointOfService {
              address {
                avsVerified
                colissimoStoreType
                companyName
                billingAddress
                cnC
                cnCVendorCode
                country {
                  continent
                  regions {
                    isocode
                    name
                    countryIso
                    isocodeShort
                  }
                  isocode
                  name
                  rejectedPostcode
                  zones {
                    code
                  }
                }
                dhlPostNumber
                dhlStoreType
                email
                firstName
                formattedAddress
                id
                lastName
                line1
                line2
                newOrEditedAddress
                phone
                poBox
                postalCode
                region {
                  isocode
                  name
                  countryIso
                  isocodeShort
                }
                relaiscolisPseudoRvc
                relaiscolisStoreType
                shippingAddress
                storeId
                title
                titleCode
                town
                upsNetworkIds
                visibleInAddressBook
                defaultAddress
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
            egiftCardExtraInfo {
              fromName
              message
              recipientEmail
              toName
            }
            entryNumber
            flxEntry
            hassleFreeEnabled
            isExcludedFromAvailabilityCheck
            lineNumber
            orderDiscountShare
            productDiscount {
              value
            }
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
                  imageType
                  url
                }
              }
              giftCardType
              hassleFreeEnabled
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
              returnable
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
                    avsVerified
                    colissimoStoreType
                    companyName
                    billingAddress
                    cnC
                    cnCVendorCode
                    country {
                      continent
                      regions {
                        isocode
                        name
                        countryIso
                        isocodeShort
                      }
                      isocode
                      name
                      rejectedPostcode
                      zones {
                        code
                      }
                    }
                    dhlPostNumber
                    dhlStoreType
                    email
                    firstName
                    formattedAddress
                    id
                    lastName
                    line1
                    line2
                    newOrEditedAddress
                    phone
                    poBox
                    postalCode
                    region {
                      isocode
                      name
                      countryIso
                      isocodeShort
                    }
                    relaiscolisPseudoRvc
                    relaiscolisStoreType
                    shippingAddress
                    storeId
                    title
                    titleCode
                    town
                    upsNetworkIds
                    visibleInAddressBook
                    defaultAddress
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
              sku
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
          totalPriceWithTax {
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
        potentialOrderPromotions {
          consumedEntries {
            adjustedUnitPrice
            code
            orderEntryNumber
            quantity
          }
          description
          promotion {
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
            shippingOnly
            startDate
            title
          }
        }
        potentialProductPromotions {
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
        productDiscounts {
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
        removedProducts
        reservationEstimatedDeliveryDate
        s2dUserOrder
        savePaymentToken
        saveTime
        savedBy {
          name
          uid
        }
        sessionId
        sfsReason
        site
        store
        storeId
        subTotal {
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
        subtotalWithExclusions
        totalDiscounts {
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
        totalItems
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
        totalPriceWithTax {
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
        totalPriceWithTaxMinusGiftCard {
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
        totalTax {
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
        totalUnitCount
        user {
          name
          uid
        }
      }
    }
  }`;export{i as default};
