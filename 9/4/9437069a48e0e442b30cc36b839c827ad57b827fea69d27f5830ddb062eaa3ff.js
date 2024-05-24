<!DOCTYPE html>
<html ng-app="liveForm" ng-controller="LiveFormCtrl" ng-cloak lang="{{formLanguage}}" >
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">

    <meta name="viewport" content="width=device-width,initial-scale=1" />
    <title>Form</title>
    <link rel="stylesheet" href="https://nebula-cdn.kampyle.com/us/resources/dist/assets/css/liveform-web-vendor-7a445f15ef.css"/>

    <link rel="stylesheet" href="https://nebula-cdn.kampyle.com/us/resources/dist/assets/css/kampyle/liveform-web-style-79a7d26a8c.css"/>


    <link rel="shortcut icon" href="resources/favicon.png" type="image/x-icon">
</head>

<body neb-live-form ng-class="[setFormLanguageClasses(), setFormPreviewClass()]">
<div ng-include="'https://nebula-cdn.kampyle.com/us/resources/dist/assets/views/innerFormPartial-838a955696.html'" />
<!-- we are using at specific url in order to delete this div element when build and using it for  local-->


<script type="application/json" id="formJson">
    {
  "name" : "DSR Embedded Survey",
  "id" : 32255,
  "creationDate" : 1594808540027,
  "formChangeTime" : 1627293953494,
  "triggers" : [ {
    "triggerType" : ".EmbeddedContract",
    "id" : 762007,
    "triggerEntityDraftId" : null,
    "triggerEntityFormId" : null,
    "rules" : { },
    "displayType" : "embedded",
    "displayDirection" : "centerRight",
    "isSelfHosted" : null,
    "selfHostedUrl" : null,
    "formId" : 32255,
    "isPartialTranslated" : null,
    "currentVersion" : null,
    "pageElementId" : "docFeedback"
  } ],
  "published" : true,
  "isDeleted" : false,
  "isLocked" : false,
  "advancedFormData" : {
    "customParametersInUse" : [ 8632 ]
  },
  "isDarkModeEnabled" : false,
  "customHTMLEnabled" : false,
  "templateVersion" : 2,
  "folderId" : 898,
  "uuid" : "ea424467-0158-c0ca-f7ec-25109af0a135",
  "pages" : [ {
    "name" : "Page 1",
    "index" : 0,
    "dynamicData" : [ {
      "id" : 782537,
      "unique_name" : "q_md_32255_dsr_header_txt",
      "component" : "label",
      "role" : null,
      "options" : [ ],
      "optionsById" : null,
      "label" : "",
      "description" : "",
      "placeholder" : "",
      "labelWithCP" : "",
      "position" : null,
      "descriptionWithCP" : "",
      "index" : 0,
      "nebUuid" : "c5fd-1211-9c42-cb74-bc23-02e2-7739-8d97",
      "labelContent" : "&ltp&gt&ltspan style=\"font-size:16px\"&gt&ltstrong&gtPlease help us improve by providing feedback on your experience with the document.&lt/strong&gt&lt/span&gt&lt/p&gt",
      "cdSource" : null,
      "conditionalDisplay" : null,
      "ecKey" : null,
      "ecFriendlyName" : null,
      "ecOptionsChanged" : null,
      "screenCaptureDynamicFieldContract" : null,
      "mediaCaptureDynamicFieldContract" : null,
      "score" : 1,
      "descriptiveErrorMessage" : null,
      "other" : {
        "display" : true,
        "editable" : true,
        "required" : false,
        "max_chars" : "",
        "thickness" : "",
        "custom_css" : "",
        "validation" : "/.*/",
        "date_format" : "",
        "imageObject" : null,
        "image_align" : "center",
        "border_style" : "",
        "kampyleGroup" : "NoInputGroup",
        "num_of_lines" : 18,
        "borderOptions" : "",
        "componentType" : "",
        "ratingOptions" : {
          "emoticons" : [ {
            "stateOn" : "kIcon rating-emoticon-1",
            "stateOff" : "kIcon rating-emoticon-1-off"
          }, {
            "stateOn" : "kIcon rating-emoticon-2",
            "stateOff" : "kIcon rating-emoticon-2-off"
          }, {
            "stateOn" : "kIcon rating-emoticon-3",
            "stateOff" : "kIcon rating-emoticon-3-off"
          }, {
            "stateOn" : "kIcon rating-emoticon-4",
            "stateOff" : "kIcon rating-emoticon-4-off"
          }, {
            "stateOn" : "kIcon rating-emoticon-5",
            "stateOff" : "kIcon rating-emoticon-5-off"
          } ]
        },
        "ratingViewType" : "",
        "uploadedResource" : null
      },
      "uploadedResource" : null,
      "imageObject" : null,
      "image_url" : "",
      "customLabels" : [ "" ],
      "display" : true,
      "editable" : true,
      "required" : false,
      "max_chars" : "",
      "thickness" : "",
      "custom_css" : "",
      "validation" : "/.*/",
      "date_format" : "",
      "imageObject" : null,
      "image_align" : "center",
      "border_style" : "",
      "kampyleGroup" : "NoInputGroup",
      "num_of_lines" : 18,
      "borderOptions" : "",
      "componentType" : "",
      "ratingOptions" : {
        "emoticons" : [ {
          "stateOn" : "kIcon rating-emoticon-1",
          "stateOff" : "kIcon rating-emoticon-1-off"
        }, {
          "stateOn" : "kIcon rating-emoticon-2",
          "stateOff" : "kIcon rating-emoticon-2-off"
        }, {
          "stateOn" : "kIcon rating-emoticon-3",
          "stateOff" : "kIcon rating-emoticon-3-off"
        }, {
          "stateOn" : "kIcon rating-emoticon-4",
          "stateOff" : "kIcon rating-emoticon-4-off"
        }, {
          "stateOn" : "kIcon rating-emoticon-5",
          "stateOff" : "kIcon rating-emoticon-5-off"
        } ]
      },
      "ratingViewType" : "",
      "uploadedResource" : null
    }, {
      "id" : 791532,
      "unique_name" : "Document Helpful",
      "component" : "radio",
      "role" : null,
      "options" : null,
      "optionsById" : [ {
        "id" : "1",
        "label" : "Yes",
        "hidden" : false,
        "mecLabelChanged" : false,
        "mecLabel" : null
      }, {
        "id" : "2",
        "label" : "No",
        "hidden" : false,
        "mecLabelChanged" : false,
        "mecLabel" : null
      } ],
      "label" : "Was this document helpful?",
      "description" : "",
      "placeholder" : "",
      "labelWithCP" : "",
      "position" : "horizontal",
      "descriptionWithCP" : "",
      "index" : 1,
      "nebUuid" : "d8de-956c-e116-1f8a-2ebb-9a4b-55d0-5bfd",
      "labelContent" : "",
      "cdSource" : null,
      "conditionalDisplay" : null,
      "ecKey" : "q_md_541318_cs_digital_document_helpful_yn",
      "ecFriendlyName" : "Document Helpful? - q_md_541318_cs_digital_document_helpful_yn",
      "ecOptionsChanged" : false,
      "screenCaptureDynamicFieldContract" : null,
      "mediaCaptureDynamicFieldContract" : null,
      "score" : 1,
      "descriptiveErrorMessage" : null,
      "other" : {
        "display" : true,
        "editable" : true,
        "required" : true,
        "currentId" : 2,
        "max_chars" : "",
        "thickness" : "",
        "custom_css" : "",
        "validation" : "/.*/",
        "date_format" : "",
        "imageObject" : null,
        "image_align" : "",
        "border_style" : "",
        "kampyleGroup" : "SelectionGroup",
        "num_of_lines" : "",
        "borderOptions" : "",
        "componentType" : "",
        "ratingOptions" : {
          "emoticons" : [ {
            "stateOn" : "kIcon rating-emoticon-1",
            "stateOff" : "kIcon rating-emoticon-1-off"
          }, {
            "stateOn" : "kIcon rating-emoticon-2",
            "stateOff" : "kIcon rating-emoticon-2-off"
          }, {
            "stateOn" : "kIcon rating-emoticon-3",
            "stateOff" : "kIcon rating-emoticon-3-off"
          }, {
            "stateOn" : "kIcon rating-emoticon-4",
            "stateOff" : "kIcon rating-emoticon-4-off"
          }, {
            "stateOn" : "kIcon rating-emoticon-5",
            "stateOff" : "kIcon rating-emoticon-5-off"
          } ]
        },
        "ratingViewType" : "",
        "uploadedResource" : null
      },
      "uploadedResource" : null,
      "imageObject" : null,
      "image_url" : "",
      "customLabels" : [ "" ],
      "display" : true,
      "editable" : true,
      "required" : true,
      "currentId" : 2,
      "max_chars" : "",
      "thickness" : "",
      "custom_css" : "",
      "validation" : "/.*/",
      "date_format" : "",
      "imageObject" : null,
      "image_align" : "",
      "border_style" : "",
      "kampyleGroup" : "SelectionGroup",
      "num_of_lines" : "",
      "borderOptions" : "",
      "componentType" : "",
      "ratingOptions" : {
        "emoticons" : [ {
          "stateOn" : "kIcon rating-emoticon-1",
          "stateOff" : "kIcon rating-emoticon-1-off"
        }, {
          "stateOn" : "kIcon rating-emoticon-2",
          "stateOff" : "kIcon rating-emoticon-2-off"
        }, {
          "stateOn" : "kIcon rating-emoticon-3",
          "stateOff" : "kIcon rating-emoticon-3-off"
        }, {
          "stateOn" : "kIcon rating-emoticon-4",
          "stateOff" : "kIcon rating-emoticon-4-off"
        }, {
          "stateOn" : "kIcon rating-emoticon-5",
          "stateOff" : "kIcon rating-emoticon-5-off"
        } ]
      },
      "ratingViewType" : "",
      "uploadedResource" : null
    }, {
      "id" : 792515,
      "unique_name" : "DSR - Additional Feedback",
      "component" : "textArea",
      "role" : null,
      "options" : [ ],
      "optionsById" : null,
      "label" : "Thank you. Is there anything else you would like to share with us?",
      "description" : "",
      "placeholder" : "",
      "labelWithCP" : "",
      "position" : null,
      "descriptionWithCP" : "",
      "index" : 2,
      "nebUuid" : "2a11-d1dc-46ee-88a5-2ccc-53f0-1a2c-7843",
      "labelContent" : "",
      "cdSource" : {
        "value" : "1",
        "nebUuid" : "d8de-956c-e116-1f8a-2ebb-9a4b-55d0-5bfd",
        "operator" : "Equals",
        "componentType" : "radio"
      },
      "conditionalDisplay" : null,
      "ecKey" : "q_md_541318_cs_digital_dsr_additional_feedback_cmt",
      "ecFriendlyName" : "Additional Feedback - q_md_541318_cs_digital_dsr_additional_feedback_cmt",
      "ecOptionsChanged" : null,
      "screenCaptureDynamicFieldContract" : null,
      "mediaCaptureDynamicFieldContract" : null,
      "score" : 1,
      "descriptiveErrorMessage" : null,
      "other" : {
        "display" : true,
        "editable" : true,
        "required" : false,
        "max_chars" : "",
        "thickness" : "",
        "custom_css" : "",
        "validation" : "/.*/",
        "date_format" : "",
        "imageObject" : null,
        "image_align" : "",
        "border_style" : "",
        "kampyleGroup" : "InputGroup",
        "num_of_lines" : 3,
        "borderOptions" : "",
        "componentType" : "",
        "ratingOptions" : {
          "emoticons" : [ {
            "stateOn" : "kIcon rating-emoticon-1",
            "stateOff" : "kIcon rating-emoticon-1-off"
          }, {
            "stateOn" : "kIcon rating-emoticon-2",
            "stateOff" : "kIcon rating-emoticon-2-off"
          }, {
            "stateOn" : "kIcon rating-emoticon-3",
            "stateOff" : "kIcon rating-emoticon-3-off"
          }, {
            "stateOn" : "kIcon rating-emoticon-4",
            "stateOff" : "kIcon rating-emoticon-4-off"
          }, {
            "stateOn" : "kIcon rating-emoticon-5",
            "stateOff" : "kIcon rating-emoticon-5-off"
          } ]
        },
        "ratingViewType" : "",
        "uploadedResource" : null
      },
      "uploadedResource" : null,
      "imageObject" : null,
      "image_url" : "",
      "customLabels" : [ "" ],
      "display" : true,
      "editable" : true,
      "required" : false,
      "max_chars" : "",
      "thickness" : "",
      "custom_css" : "",
      "validation" : "/.*/",
      "date_format" : "",
      "imageObject" : null,
      "image_align" : "",
      "border_style" : "",
      "kampyleGroup" : "InputGroup",
      "num_of_lines" : 3,
      "borderOptions" : "",
      "componentType" : "",
      "ratingOptions" : {
        "emoticons" : [ {
          "stateOn" : "kIcon rating-emoticon-1",
          "stateOff" : "kIcon rating-emoticon-1-off"
        }, {
          "stateOn" : "kIcon rating-emoticon-2",
          "stateOff" : "kIcon rating-emoticon-2-off"
        }, {
          "stateOn" : "kIcon rating-emoticon-3",
          "stateOff" : "kIcon rating-emoticon-3-off"
        }, {
          "stateOn" : "kIcon rating-emoticon-4",
          "stateOff" : "kIcon rating-emoticon-4-off"
        }, {
          "stateOn" : "kIcon rating-emoticon-5",
          "stateOff" : "kIcon rating-emoticon-5-off"
        } ]
      },
      "ratingViewType" : "",
      "uploadedResource" : null
    }, {
      "id" : 792516,
      "unique_name" : "DSR - Improvement Feedback",
      "component" : "textArea",
      "role" : null,
      "options" : [ ],
      "optionsById" : null,
      "label" : "We are sorry. What can HP do to improve this document? Please be specific.",
      "description" : "",
      "placeholder" : "",
      "labelWithCP" : "",
      "position" : null,
      "descriptionWithCP" : "",
      "index" : 3,
      "nebUuid" : "7b86-6cf5-cedf-8111-318c-9287-ed39-52c9",
      "labelContent" : "",
      "cdSource" : {
        "value" : "2",
        "nebUuid" : "d8de-956c-e116-1f8a-2ebb-9a4b-55d0-5bfd",
        "operator" : "Equals",
        "componentType" : "radio"
      },
      "conditionalDisplay" : null,
      "ecKey" : "q_md_541318_cs_digital_dsr_improvement_feedback_cmt",
      "ecFriendlyName" : "Improvement Feedback - q_md_541318_cs_digital_dsr_improvement_feedback_cmt",
      "ecOptionsChanged" : null,
      "screenCaptureDynamicFieldContract" : null,
      "mediaCaptureDynamicFieldContract" : null,
      "score" : 1,
      "descriptiveErrorMessage" : null,
      "other" : {
        "display" : true,
        "editable" : true,
        "required" : false,
        "max_chars" : "",
        "thickness" : "",
        "custom_css" : "",
        "validation" : "/.*/",
        "date_format" : "",
        "imageObject" : null,
        "image_align" : "",
        "border_style" : "",
        "kampyleGroup" : "InputGroup",
        "num_of_lines" : 3,
        "borderOptions" : "",
        "componentType" : "",
        "ratingOptions" : {
          "emoticons" : [ {
            "stateOn" : "kIcon rating-emoticon-1",
            "stateOff" : "kIcon rating-emoticon-1-off"
          }, {
            "stateOn" : "kIcon rating-emoticon-2",
            "stateOff" : "kIcon rating-emoticon-2-off"
          }, {
            "stateOn" : "kIcon rating-emoticon-3",
            "stateOff" : "kIcon rating-emoticon-3-off"
          }, {
            "stateOn" : "kIcon rating-emoticon-4",
            "stateOff" : "kIcon rating-emoticon-4-off"
          }, {
            "stateOn" : "kIcon rating-emoticon-5",
            "stateOff" : "kIcon rating-emoticon-5-off"
          } ]
        },
        "ratingViewType" : "",
        "uploadedResource" : null
      },
      "uploadedResource" : null,
      "imageObject" : null,
      "image_url" : "",
      "customLabels" : [ "" ],
      "display" : true,
      "editable" : true,
      "required" : false,
      "max_chars" : "",
      "thickness" : "",
      "custom_css" : "",
      "validation" : "/.*/",
      "date_format" : "",
      "imageObject" : null,
      "image_align" : "",
      "border_style" : "",
      "kampyleGroup" : "InputGroup",
      "num_of_lines" : 3,
      "borderOptions" : "",
      "componentType" : "",
      "ratingOptions" : {
        "emoticons" : [ {
          "stateOn" : "kIcon rating-emoticon-1",
          "stateOff" : "kIcon rating-emoticon-1-off"
        }, {
          "stateOn" : "kIcon rating-emoticon-2",
          "stateOff" : "kIcon rating-emoticon-2-off"
        }, {
          "stateOn" : "kIcon rating-emoticon-3",
          "stateOff" : "kIcon rating-emoticon-3-off"
        }, {
          "stateOn" : "kIcon rating-emoticon-4",
          "stateOff" : "kIcon rating-emoticon-4-off"
        }, {
          "stateOn" : "kIcon rating-emoticon-5",
          "stateOff" : "kIcon rating-emoticon-5-off"
        } ]
      },
      "ratingViewType" : "",
      "uploadedResource" : null
    } ],
    "pageSettings" : {
      "backgroundColor" : "",
      "backgroundImgUrl" : null,
      "doBackgroundReapet" : false,
      "customCssClass" : ""
    }
  } ],
  "settings" : {
    "formBasicSettings" : {
      "widthPX" : 450,
      "heightPX" : 300,
      "nextButtonLabel" : "",
      "nextButtoncolor" : "#5081ff",
      "backButtonLabel" : "",
      "backButtoncolor" : "#5081ff",
      "closeButtonLabel" : "",
      "closeButtoncolor" : "#9f9fa4",
      "submitButtonLabel" : "Submit",
      "submitButtoncolor" : "#0171ad",
      "isFixedSize" : false,
      "nextButtonTextColor" : null,
      "backButtonTextColor" : null,
      "closeButtonTextColor" : "",
      "submitButtonTextColor" : "",
      "htmlLanguage" : null,
      "isShowCloseButton" : false,
      "isShowBackButton" : false,
      "isFullWidthEmbedded" : true,
      "navigationButtons" : "Submit",
      "transitionType" : null,
      "closeModalButton" : "Close Survey",
      "formAnnouncement" : "Feedback Survey",
      "titleElement" : null
    },
    "formDesignSettings" : {
      "logoURL" : null,
      "backgroundImgUrl" : {
        "name" : "",
        "uuid" : "",
        "url" : "",
        "resourceId" : null
      },
      "doReapet" : false,
      "customCssFile" : "https://assets.kampyle.com/clients/nebula/hp/HP_Support.css",
      "secondaryCustomCssFile" : null,
      "customCssFileResource" : null,
      "secondaryCustomCssFileResource" : null,
      "theme" : null,
      "backgroundColor" : "",
      "textColor" : "#000000",
      "doCover" : false
    },
    "formThankYouPageSettings" : {
      "includeThankYouPage" : true,
      "logoURL" : {
        "name" : "",
        "uuid" : "",
        "url" : "",
        "resourceId" : null
      },
      "headline" : "&ltp style=\"text-align: center;\"&gt&ltspan style=\"font-size:16px\"&gt&ltstrong&gtThank you. We appreciate your valuable feedback.&lt/strong&gt&lt/span&gt&lt/p&gt",
      "collectUserDetails" : false,
      "ContactDetailsText" : "",
      "nameTitle" : "",
      "emailTitle" : "",
      "phoneTitle" : "",
      "backgroundColor" : "",
      "buttonColor" : "#5081ff",
      "textColor" : "#ffffff",
      "closeButtonLabel" : "Close",
      "isShowCloseButton" : false,
      "closeModalButton" : "Close Survey",
      "logoLabel" : "",
      "thankYouPageAnnouncement" : "Survey completion message",
      "contactDetailsText" : ""
    },
    "formAdvanceSettings" : {
      "requiredErrorMsg" : "This field is required.",
      "emailValidationErrorMsg" : "A valid email address is required. For example: 'name@example.com'",
      "htmlLanguage" : "en",
      "isCustomParamEnabled" : false,
      "isRtl" : null
    },
    "formScreenCaptureSettings" : {
      "enabled" : true,
      "screenCaptureAsComponentEnabled" : false,
      "buttonImage" : {
        "name" : "",
        "uuid" : "",
        "url" : "",
        "resourceId" : null
      },
      "buttonTooltip" : "",
      "submitScreenCaptureLabel" : "",
      "submitScreenCaptureTooltip" : "",
      "cancelScreenCaptureLabel" : "",
      "titleInstructionsScreenCapture" : "",
      "bodyInstructionsScreenCapture" : "",
      "cancelScreenCaptureTooltip" : "",
      "instructionsScreenCapture" : "",
      "wcagDisabledScreenCaptureTooltip" : "",
      "wcagScreenCaptureTooltip" : ""
    },
    "formMobileSettingsContract" : {
      "title" : "",
      "formViewType" : "full",
      "titleTextColor" : "",
      "titleBackgroundColor" : "",
      "uiRevamp" : null,
      "newAndroidButton" : null,
      "wcagSupport" : null,
      "showPoweredBy" : null,
      "selectedFormHeaderTheme" : null,
      "actualViewType" : "full"
    },
    "formMobileThankYouPromptSettingsContract" : {
      "showThankYouPrompt" : null,
      "promptDuration" : null,
      "isStickyPrompt" : null,
      "isImageDisplay" : null,
      "selectedTheme" : null,
      "mobileThankYouPromptImageDataContract" : {
        "name" : "",
        "uuid" : "",
        "url" : "",
        "resourceId" : 1
      },
      "mobileThankYouPromptDarkImageDataContract" : {
        "name" : null,
        "uuid" : null,
        "url" : null,
        "resourceId" : null
      },
      "sameDarkModeImageAsLight" : null,
      "mobileThankYouPromptGeneralSettingsSectionContract" : {
        "textContent" : "",
        "bodyContent" : "",
        "promptContentFontColor" : null,
        "promptContentFontType" : null,
        "backgroundColor" : null
      },
      "mobileThankYouPromptButtonSectionContract" : {
        "buttonDisplayed" : null,
        "buttonText" : "",
        "buttonTextColor" : null,
        "buttonColor" : null
      },
      "mobileThankYouAccessibilitySectionContract" : {
        "imageAltText" : "",
        "closeButtonAltText" : ""
      }
    },
    "formLocalizationSettings" : {
      "defaultLanguage" : "en",
      "useCustomParam" : true,
      "customParam" : 8632
    }
  },
  "customHTML" : {
    "customHTMLName" : null,
    "customHTMLModificationTime" : null,
    "tempCustomHTMLFileId" : null,
    "customHtmlFileResource" : null
  },
  "propertyType" : "website",
  "surveyMessages" : {
    "mediaCaptureVideoLimitMsg" : "Max video length limit %d seconds",
    "mediaCaptureOopsMsg" : "Oops...\nWe can’t collect your feedback at the moment.\nRefresh your page and try again",
    "mediaCaptureVideoTooLongMsg" : "Oh no… Your video is too long. Please record again up to %d sec"
  }
}
</script>

<script type="application/json" id="kplConfig">
    {
        "prefix": "https://nebula-cdn.kampyle.com/us/",
        "resourcesPrefix": "resources/form/FormBuilder/",
        "submitUrlPrefix": "https://feedback.kampyle.com/",
        "submitUrlSuffix": "feedback/api/feedback/submit",
        "submitUrlWithBackendUUID": "https://feedback.kampyle.com/feedback/api/v2/feedback/submit"
    }
</script>

<script src="https://nebula-cdn.kampyle.com/us/resources/dist/assets/js/liveform-web-vendor-8f5080b98d.js"></script>

<script src="https://nebula-cdn.kampyle.com/us/resources/dist/assets/js/liveform-web-app-a28d71d030.js"></script>

</body>

</html>

