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
  "name" : "NPS Survey",
  "id" : 32059,
  "creationDate" : 1593695015340,
  "formChangeTime" : 1687394068086,
  "triggers" : [ {
    "triggerType" : ".InvitationContract",
    "id" : 756995,
    "triggerEntityDraftId" : null,
    "triggerEntityFormId" : null,
    "rules" : { },
    "displayType" : "lightbox",
    "displayDirection" : "centerLeft",
    "isSelfHosted" : null,
    "selfHostedUrl" : null,
    "formId" : 32059,
    "isPartialTranslated" : null,
    "currentVersion" : null,
    "provideButtonText" : "Provide Feedback",
    "declineButtonText" : "Not Right Now",
    "invitationHeadline" : "Let us know what you think",
    "invitationText" : "It only takes a couple of minutes and will help us improve our service",
    "helpTooltipText" : "Survey consent form.",
    "invitationBackgroundColor" : "#ffffff",
    "invitationProvideButtonColor" : "#0171ad",
    "invitationProvideButtonTextColor" : "#ffffff",
    "invitationDeclineButtonColor" : "#767676",
    "invitationDeclineButtonTextColor" : "#ffffff",
    "invitationContentText" : "&ltp style=\"text-align:center\"&gt&ltspan style=\"font-family:Arial,Helvetica,sans-serif\"&gt&ltspan style=\"color:#40404a\"&gt&ltspan style=\"font-size:40px\"&gtWe value your feedback!&lt/span&gt&ltbr /&gt\n&ltspan style=\"font-size:18px\"&gtIt only takes a couple of minutes and will help us improve our website&lt/span&gt&lt/span&gt&lt/span&gt&lt/p&gt\n\n&ltp style=\"text-align:center\"&gt&ltspan style=\"font-family:Arial,Helvetica,sans-serif\"&gt&ltspan style=\"font-size:12px\"&gtHP will aggregate responses to this survey and use them solely to improve HP service programs. HP is committed to respecting your privacy in accordance with &lta href=\"https://www8.hp.com/us/en/privacy/privacy.html\" target=\"_blank\"&gt&ltspan style=\"color:#0171ad\"&gt&ltu&gtHP&#39;s Privacy Statement&lt/u&gt&lt/span&gt&lt/a&gt&lt/span&gt&lt/span&gt&lt/p&gt",
    "logoUrl" : {
      "name" : "1593536630476_fb37cd8285b5e89007b58f74987877491988b46b_(1).gif",
      "uuid" : "",
      "url" : "https://nebula-cdn.kampyle.com/wu/541318/resources/image/1594429285125_1593536630476_fb37cd8285b5e89007b58f74987877491988b46b_(1).gif",
      "resourceId" : null
    },
    "customCssFileResource" : null,
    "closeModalButton" : "",
    "invitationAnnouncement" : null,
    "skipInvitation" : true,
    "customCssUrl" : null,
    "invitationPosition" : "top",
    "horizontal" : 700,
    "vertical" : 500,
    "generatedInvitationUrl" : "https://nebula-cdn.kampyle.com/us/wu/541318/forms/32059/invitation1699433511270.html",
    "desktopDesign" : null,
    "mobileDesign" : null,
    "isDefaultLanguageRtl" : null,
    "isRtl" : null
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
  "folderId" : 897,
  "uuid" : "cb9c2b06-a9d5-93bb-85e3-69646351367f",
  "pages" : [ {
    "name" : "Page 1",
    "index" : 0,
    "dynamicData" : [ {
      "id" : 761384,
      "unique_name" : "Page 1 image 66112",
      "component" : "image",
      "role" : null,
      "options" : [ ],
      "optionsById" : null,
      "label" : "Image",
      "description" : "",
      "placeholder" : "",
      "labelWithCP" : "",
      "position" : null,
      "descriptionWithCP" : "",
      "index" : 0,
      "nebUuid" : "30aa-7543-6404-e022-c2be-6d26-c0f3-cd8f",
      "labelContent" : "",
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
        "uploadedResource" : {
          "url" : "https://nebula-cdn.kampyle.com/wu/541318/resources/image/1594775678586_fb37cd8285b5e89007b58f74987877491988b46b.gif",
          "name" : "fb37cd8285b5e89007b58f74987877491988b46b.gif",
          "uuid" : "",
          "resourceId" : null
        }
      },
      "imageObject" : null,
      "uploadedResource" : {
        "name" : "fb37cd8285b5e89007b58f74987877491988b46b.gif",
        "uuid" : "",
        "url" : "https://nebula-cdn.kampyle.com/wu/541318/resources/image/1594775678586_fb37cd8285b5e89007b58f74987877491988b46b.gif",
        "resourceId" : null
      },
      "image_url" : {
        "url" : "https://nebula-cdn.kampyle.com/wu/541318/resources/image/1594775678586_fb37cd8285b5e89007b58f74987877491988b46b.gif",
        "name" : "fb37cd8285b5e89007b58f74987877491988b46b.gif",
        "uuid" : "",
        "resourceId" : null
      },
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
      "uploadedResource" : {
        "url" : "https://nebula-cdn.kampyle.com/wu/541318/resources/image/1594775678586_fb37cd8285b5e89007b58f74987877491988b46b.gif",
        "name" : "fb37cd8285b5e89007b58f74987877491988b46b.gif",
        "uuid" : "",
        "resourceId" : null
      }
    }, {
      "id" : 762543,
      "unique_name" : "Page 1 text 76689",
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
      "index" : 1,
      "nebUuid" : "44f7-0715-78ac-1805-dd79-65b1-1a4a-b7ca",
      "labelContent" : "&ltp style=\"text-align:center\"&gt&ltspan style=\"color:#595959\"&gt&ltspan style=\"font-size:18px\"&gt&ltspan style=\"font-family:Open Sans\"&gtTell us what you think!&lt/span&gt&lt/span&gt&lt/span&gt&lt/p&gt\n\n&ltp style=\"text-align:center\"&gt&ltspan style=\"font-size:12px\"&gt&ltspan style=\"color:#595959\"&gt&ltspan style=\"font-family:Open Sans\"&gtIt will take only a couple of minutes and will help us improve our website.&lt/span&gt&lt/span&gt&lt/span&gt&lt/p&gt\n",
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
      "imageObject" : null,
      "uploadedResource" : null,
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
      "id" : 1161607,
      "unique_name" : "Primary Reason To Visit - Updated",
      "component" : "select",
      "role" : null,
      "options" : null,
      "optionsById" : [ {
        "id" : "1",
        "label" : "Software, drivers or apps",
        "hidden" : false,
        "mecLabelChanged" : false,
        "mecLabel" : null
      }, {
        "id" : "2",
        "label" : "Contact support",
        "hidden" : false,
        "mecLabelChanged" : false,
        "mecLabel" : null
      }, {
        "id" : "3",
        "label" : "Product manuals and specifications",
        "hidden" : false,
        "mecLabelChanged" : false,
        "mecLabel" : null
      }, {
        "id" : "4",
        "label" : "Warranty",
        "hidden" : false,
        "mecLabelChanged" : false,
        "mecLabel" : null
      }, {
        "id" : "5",
        "label" : "Instant Ink Subscription",
        "hidden" : false,
        "mecLabelChanged" : false,
        "mecLabel" : null
      }, {
        "id" : "6",
        "label" : "Supplies & Accessories",
        "hidden" : false,
        "mecLabelChanged" : false,
        "mecLabel" : null
      }, {
        "id" : "7",
        "label" : "Setup or use product",
        "hidden" : false,
        "mecLabelChanged" : false,
        "mecLabel" : null
      }, {
        "id" : "8",
        "label" : "Repair",
        "hidden" : false,
        "mecLabelChanged" : false,
        "mecLabel" : null
      }, {
        "id" : "9",
        "label" : "Troubleshoot a problem",
        "hidden" : false,
        "mecLabelChanged" : false,
        "mecLabel" : null
      }, {
        "id" : "10",
        "label" : "Give feedback",
        "hidden" : false,
        "mecLabelChanged" : false,
        "mecLabel" : null
      }, {
        "id" : "11",
        "label" : "Other",
        "hidden" : false,
        "mecLabelChanged" : false,
        "mecLabel" : null
      } ],
      "label" : "Why did you visit the HP support website?",
      "description" : "",
      "placeholder" : "Please Select Option",
      "labelWithCP" : "",
      "position" : null,
      "descriptionWithCP" : "",
      "index" : 2,
      "nebUuid" : "7394-e73f-e8f4-f5af-0153-b894-a1a1-9a57",
      "labelContent" : "",
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
        "randomStrategy" : "RANDOM_ALL",
        "ratingViewType" : "",
        "uploadedResource" : null
      },
      "imageObject" : null,
      "uploadedResource" : null,
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
      "randomStrategy" : "RANDOM_ALL",
      "ratingViewType" : "",
      "uploadedResource" : null
    }, {
      "id" : 792500,
      "unique_name" : "Primary Reason For Visit - Other",
      "component" : "textInput",
      "role" : null,
      "options" : [ ],
      "optionsById" : null,
      "label" : "Please specify.",
      "description" : "",
      "placeholder" : "",
      "labelWithCP" : "",
      "position" : null,
      "descriptionWithCP" : "",
      "index" : 3,
      "nebUuid" : "3bfd-4e21-5909-b394-a8c1-40ca-98aa-840b",
      "labelContent" : "",
      "cdSource" : {
        "type" : "formula",
        "conditions" : [ {
          "type" : "component",
          "value" : "11",
          "nebUuid" : "7394-e73f-e8f4-f5af-0153-b894-a1a1-9a57",
          "operator" : "Equals",
          "componentType" : "select"
        } ],
        "logicalOperator" : "and",
        "autoOpenScreenCapture" : false
      },
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
        "required" : true,
        "max_chars" : 50,
        "thickness" : "",
        "custom_css" : "",
        "validation" : "/.*/",
        "date_format" : "",
        "imageObject" : null,
        "image_align" : "",
        "border_style" : "",
        "kampyleGroup" : "InputGroup",
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
        "useCustomParams" : false,
        "uploadedResource" : null
      },
      "imageObject" : null,
      "uploadedResource" : null,
      "image_url" : "",
      "customLabels" : [ "" ],
      "display" : true,
      "editable" : true,
      "required" : true,
      "max_chars" : 50,
      "thickness" : "",
      "custom_css" : "",
      "validation" : "/.*/",
      "date_format" : "",
      "imageObject" : null,
      "image_align" : "",
      "border_style" : "",
      "kampyleGroup" : "InputGroup",
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
      "useCustomParams" : false,
      "uploadedResource" : null
    }, {
      "id" : 966782,
      "unique_name" : "Website CSAT 1",
      "component" : "grading",
      "role" : null,
      "options" : [ ],
      "optionsById" : null,
      "label" : "Overall, how satisfied are you with your HP support website experience?",
      "description" : "(1 Star = Very unsatisfied, 5 Stars = Very satisfied)",
      "placeholder" : "",
      "labelWithCP" : "",
      "position" : null,
      "descriptionWithCP" : "",
      "index" : 4,
      "nebUuid" : "4d86-142c-c778-2ee0-d2d1-aa96-f20a-4cea",
      "labelContent" : "",
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
        "required" : true,
        "max_chars" : "",
        "thickness" : "",
        "custom_css" : "",
        "validation" : "/.*/",
        "date_format" : "",
        "imageObject" : null,
        "image_align" : "",
        "border_style" : "",
        "kampyleGroup" : "RatingGroup",
        "num_of_lines" : "",
        "borderOptions" : "",
        "componentType" : "",
        "ratingOptions" : {
          "bars" : [ {
            "index" : 0,
            "stateOn" : "kIcon rating-bar-1",
            "stateOff" : "kIcon rating-bar-off"
          }, {
            "index" : 1,
            "stateOn" : "kIcon rating-bar-2",
            "stateOff" : "kIcon rating-bar-off"
          }, {
            "index" : 2,
            "stateOn" : "kIcon rating-bar-3",
            "stateOff" : "kIcon rating-bar-off"
          }, {
            "index" : 3,
            "stateOn" : "kIcon rating-bar-4",
            "stateOff" : "kIcon rating-bar-off"
          }, {
            "index" : 4,
            "stateOn" : "kIcon rating-bar-5",
            "stateOff" : "kIcon rating-bar-off"
          } ],
          "stars" : [ {
            "index" : 0,
            "stateOn" : "kIcon rating-star-1",
            "stateOff" : "kIcon rating-star-off"
          }, {
            "index" : 1,
            "stateOn" : "kIcon rating-star-2",
            "stateOff" : "kIcon rating-star-off"
          }, {
            "index" : 2,
            "stateOn" : "kIcon rating-star-3",
            "stateOff" : "kIcon rating-star-off"
          }, {
            "index" : 3,
            "stateOn" : "kIcon rating-star-4",
            "stateOff" : "kIcon rating-star-off"
          }, {
            "index" : 4,
            "stateOn" : "kIcon rating-star-5",
            "stateOff" : "kIcon rating-star-off"
          } ],
          "numbers" : [ {
            "index" : 0,
            "stateOn" : "kIcon rating-number-1",
            "stateOff" : "kIcon rating-number-1-off"
          }, {
            "index" : 1,
            "stateOn" : "kIcon rating-number-2",
            "stateOff" : "kIcon rating-number-2-off"
          }, {
            "index" : 2,
            "stateOn" : "kIcon rating-number-3",
            "stateOff" : "kIcon rating-number-3-off"
          }, {
            "index" : 3,
            "stateOn" : "kIcon rating-number-4",
            "stateOff" : "kIcon rating-number-4-off"
          }, {
            "index" : 4,
            "stateOn" : "kIcon rating-number-5",
            "stateOff" : "kIcon rating-number-5-off"
          } ],
          "smilies" : [ {
            "index" : 0,
            "stateOn" : "kIcon rating-smilie-1",
            "stateOff" : "kIcon rating-smilie-1-off"
          }, {
            "index" : 1,
            "stateOn" : "kIcon rating-smilie-2",
            "stateOff" : "kIcon rating-smilie-2-off"
          }, {
            "index" : 2,
            "stateOn" : "kIcon rating-smilie-3",
            "stateOff" : "kIcon rating-smilie-3-off"
          }, {
            "index" : 3,
            "stateOn" : "kIcon rating-smilie-4",
            "stateOff" : "kIcon rating-smilie-4-off"
          }, {
            "index" : 4,
            "stateOn" : "kIcon rating-smilie-5",
            "stateOff" : "kIcon rating-smilie-5-off"
          } ],
          "emoticons" : [ {
            "index" : 0,
            "stateOn" : "kIcon rating-emoticon-1",
            "stateOff" : "kIcon rating-emoticon-1-off"
          }, {
            "index" : 1,
            "stateOn" : "kIcon rating-emoticon-2",
            "stateOff" : "kIcon rating-emoticon-2-off"
          }, {
            "index" : 2,
            "stateOn" : "kIcon rating-emoticon-3",
            "stateOff" : "kIcon rating-emoticon-3-off"
          }, {
            "index" : 3,
            "stateOn" : "kIcon rating-emoticon-4",
            "stateOff" : "kIcon rating-emoticon-4-off"
          }, {
            "index" : 4,
            "stateOn" : "kIcon rating-emoticon-5",
            "stateOff" : "kIcon rating-emoticon-5-off"
          } ]
        },
        "ratingViewType" : "stars",
        "selectionStyle" : {
          "value" : "accumulate",
          "options" : [ {
            "icon" : "neb-icon-accumulative-select",
            "label" : "Accumulative",
            "value" : "accumulate"
          }, {
            "icon" : "neb-icon-single-select",
            "label" : "Single select",
            "value" : "single"
          } ]
        },
        "uploadedResource" : null
      },
      "imageObject" : null,
      "uploadedResource" : null,
      "image_url" : "",
      "customLabels" : [ "" ],
      "display" : true,
      "editable" : true,
      "required" : true,
      "max_chars" : "",
      "thickness" : "",
      "custom_css" : "",
      "validation" : "/.*/",
      "date_format" : "",
      "imageObject" : null,
      "image_align" : "",
      "border_style" : "",
      "kampyleGroup" : "RatingGroup",
      "num_of_lines" : "",
      "borderOptions" : "",
      "componentType" : "",
      "ratingOptions" : {
        "bars" : [ {
          "index" : 0,
          "stateOn" : "kIcon rating-bar-1",
          "stateOff" : "kIcon rating-bar-off"
        }, {
          "index" : 1,
          "stateOn" : "kIcon rating-bar-2",
          "stateOff" : "kIcon rating-bar-off"
        }, {
          "index" : 2,
          "stateOn" : "kIcon rating-bar-3",
          "stateOff" : "kIcon rating-bar-off"
        }, {
          "index" : 3,
          "stateOn" : "kIcon rating-bar-4",
          "stateOff" : "kIcon rating-bar-off"
        }, {
          "index" : 4,
          "stateOn" : "kIcon rating-bar-5",
          "stateOff" : "kIcon rating-bar-off"
        } ],
        "stars" : [ {
          "index" : 0,
          "stateOn" : "kIcon rating-star-1",
          "stateOff" : "kIcon rating-star-off"
        }, {
          "index" : 1,
          "stateOn" : "kIcon rating-star-2",
          "stateOff" : "kIcon rating-star-off"
        }, {
          "index" : 2,
          "stateOn" : "kIcon rating-star-3",
          "stateOff" : "kIcon rating-star-off"
        }, {
          "index" : 3,
          "stateOn" : "kIcon rating-star-4",
          "stateOff" : "kIcon rating-star-off"
        }, {
          "index" : 4,
          "stateOn" : "kIcon rating-star-5",
          "stateOff" : "kIcon rating-star-off"
        } ],
        "numbers" : [ {
          "index" : 0,
          "stateOn" : "kIcon rating-number-1",
          "stateOff" : "kIcon rating-number-1-off"
        }, {
          "index" : 1,
          "stateOn" : "kIcon rating-number-2",
          "stateOff" : "kIcon rating-number-2-off"
        }, {
          "index" : 2,
          "stateOn" : "kIcon rating-number-3",
          "stateOff" : "kIcon rating-number-3-off"
        }, {
          "index" : 3,
          "stateOn" : "kIcon rating-number-4",
          "stateOff" : "kIcon rating-number-4-off"
        }, {
          "index" : 4,
          "stateOn" : "kIcon rating-number-5",
          "stateOff" : "kIcon rating-number-5-off"
        } ],
        "smilies" : [ {
          "index" : 0,
          "stateOn" : "kIcon rating-smilie-1",
          "stateOff" : "kIcon rating-smilie-1-off"
        }, {
          "index" : 1,
          "stateOn" : "kIcon rating-smilie-2",
          "stateOff" : "kIcon rating-smilie-2-off"
        }, {
          "index" : 2,
          "stateOn" : "kIcon rating-smilie-3",
          "stateOff" : "kIcon rating-smilie-3-off"
        }, {
          "index" : 3,
          "stateOn" : "kIcon rating-smilie-4",
          "stateOff" : "kIcon rating-smilie-4-off"
        }, {
          "index" : 4,
          "stateOn" : "kIcon rating-smilie-5",
          "stateOff" : "kIcon rating-smilie-5-off"
        } ],
        "emoticons" : [ {
          "index" : 0,
          "stateOn" : "kIcon rating-emoticon-1",
          "stateOff" : "kIcon rating-emoticon-1-off"
        }, {
          "index" : 1,
          "stateOn" : "kIcon rating-emoticon-2",
          "stateOff" : "kIcon rating-emoticon-2-off"
        }, {
          "index" : 2,
          "stateOn" : "kIcon rating-emoticon-3",
          "stateOff" : "kIcon rating-emoticon-3-off"
        }, {
          "index" : 3,
          "stateOn" : "kIcon rating-emoticon-4",
          "stateOff" : "kIcon rating-emoticon-4-off"
        }, {
          "index" : 4,
          "stateOn" : "kIcon rating-emoticon-5",
          "stateOff" : "kIcon rating-emoticon-5-off"
        } ]
      },
      "ratingViewType" : "stars",
      "selectionStyle" : {
        "value" : "accumulate",
        "options" : [ {
          "icon" : "neb-icon-accumulative-select",
          "label" : "Accumulative",
          "value" : "accumulate"
        }, {
          "icon" : "neb-icon-single-select",
          "label" : "Single select",
          "value" : "single"
        } ]
      },
      "uploadedResource" : null
    }, {
      "id" : 1161608,
      "unique_name" : "What Went Wrong - Contact Support Updated",
      "component" : "select",
      "role" : null,
      "options" : null,
      "optionsById" : [ {
        "id" : "1",
        "label" : "Could not find contact options",
        "hidden" : false,
        "mecLabelChanged" : false,
        "mecLabel" : null
      }, {
        "id" : "2",
        "label" : "Desired contact option not available",
        "hidden" : false,
        "mecLabelChanged" : false,
        "mecLabel" : null
      }, {
        "id" : "3",
        "label" : "Live Agent not helpful ",
        "hidden" : false,
        "mecLabelChanged" : false,
        "mecLabel" : null
      }, {
        "id" : "4",
        "label" : "Did not want to pay for support ",
        "hidden" : false,
        "mecLabelChanged" : false,
        "mecLabel" : null
      }, {
        "id" : "5",
        "label" : "Virtual Assistant not helpful",
        "hidden" : false,
        "mecLabelChanged" : false,
        "mecLabel" : null
      }, {
        "id" : "6",
        "label" : "Other",
        "hidden" : false,
        "mecLabelChanged" : false,
        "mecLabel" : null
      } ],
      "label" : "We are sorry. What went wrong?",
      "description" : "",
      "placeholder" : "Please Select Option",
      "labelWithCP" : "",
      "position" : null,
      "descriptionWithCP" : "",
      "index" : 5,
      "nebUuid" : "db7a-a9ff-44df-c5ad-db38-233e-2854-f76f",
      "labelContent" : "",
      "cdSource" : {
        "type" : "formula",
        "conditions" : [ {
          "type" : "component",
          "value" : "2",
          "nebUuid" : "7394-e73f-e8f4-f5af-0153-b894-a1a1-9a57",
          "operator" : "Equals",
          "componentType" : "select"
        }, {
          "id" : 966782,
          "type" : "component",
          "value" : "3",
          "nebUuid" : "4d86-142c-c778-2ee0-d2d1-aa96-f20a-4cea",
          "operator" : "Smaller Than",
          "componentType" : "grading"
        } ],
        "logicalOperator" : "and",
        "autoOpenScreenCapture" : false
      },
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
        "randomStrategy" : "RANDOM_EXCEPT_FOR_LAST",
        "ratingViewType" : "",
        "uploadedResource" : null
      },
      "imageObject" : null,
      "uploadedResource" : null,
      "image_url" : "",
      "customLabels" : [ "" ],
      "display" : true,
      "editable" : true,
      "required" : false,
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
      "randomStrategy" : "RANDOM_EXCEPT_FOR_LAST",
      "ratingViewType" : "",
      "uploadedResource" : null
    }, {
      "id" : 1161609,
      "unique_name" : "What went wrong - Software, drivers or apps",
      "component" : "select",
      "role" : null,
      "options" : null,
      "optionsById" : [ {
        "id" : "1",
        "label" : "Software/driver not available ",
        "hidden" : false,
        "mecLabelChanged" : false,
        "mecLabel" : null
      }, {
        "id" : "2",
        "label" : "Download or installation issues",
        "hidden" : false,
        "mecLabelChanged" : false,
        "mecLabel" : null
      }, {
        "id" : "3",
        "label" : "Software/driver did not fix issue",
        "hidden" : false,
        "mecLabelChanged" : false,
        "mecLabel" : null
      }, {
        "id" : "4",
        "label" : "Confusing software/driver options",
        "hidden" : false,
        "mecLabelChanged" : false,
        "mecLabel" : null
      }, {
        "id" : "5",
        "label" : "HP Smart install/usage issues",
        "hidden" : false,
        "mecLabelChanged" : false,
        "mecLabel" : null
      }, {
        "id" : "6",
        "label" : "Website is hard to use",
        "hidden" : false,
        "mecLabelChanged" : false,
        "mecLabel" : null
      }, {
        "id" : "7",
        "label" : "Other",
        "hidden" : false,
        "mecLabelChanged" : false,
        "mecLabel" : null
      } ],
      "label" : "We are sorry. What went wrong?",
      "description" : "",
      "placeholder" : "Please Select Option",
      "labelWithCP" : "",
      "position" : null,
      "descriptionWithCP" : "",
      "index" : 6,
      "nebUuid" : "264f-f72f-8a9c-61aa-0b9c-1ec4-3392-5d4c",
      "labelContent" : "",
      "cdSource" : {
        "type" : "formula",
        "conditions" : [ {
          "id" : 966782,
          "type" : "component",
          "value" : "3",
          "nebUuid" : "4d86-142c-c778-2ee0-d2d1-aa96-f20a-4cea",
          "operator" : "Smaller Than",
          "componentType" : "grading"
        }, {
          "type" : "component",
          "value" : "1",
          "nebUuid" : "7394-e73f-e8f4-f5af-0153-b894-a1a1-9a57",
          "operator" : "Equals",
          "componentType" : "select"
        } ],
        "logicalOperator" : "and",
        "autoOpenScreenCapture" : false
      },
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
        "randomStrategy" : "RANDOM_EXCEPT_FOR_LAST",
        "ratingViewType" : "",
        "uploadedResource" : null
      },
      "imageObject" : null,
      "uploadedResource" : null,
      "image_url" : "",
      "customLabels" : [ "" ],
      "display" : true,
      "editable" : true,
      "required" : false,
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
      "randomStrategy" : "RANDOM_EXCEPT_FOR_LAST",
      "ratingViewType" : "",
      "uploadedResource" : null
    }, {
      "id" : 1161610,
      "unique_name" : "What Went Wrong - Instant Ink",
      "component" : "select",
      "role" : null,
      "options" : null,
      "optionsById" : [ {
        "id" : "1",
        "label" : "Can’t log in to Instant Ink account",
        "hidden" : false,
        "mecLabelChanged" : false,
        "mecLabel" : null
      }, {
        "id" : "2",
        "label" : "Ink cartridge issue",
        "hidden" : false,
        "mecLabelChanged" : false,
        "mecLabel" : null
      }, {
        "id" : "3",
        "label" : "Account or billing issues",
        "hidden" : false,
        "mecLabelChanged" : false,
        "mecLabel" : null
      }, {
        "id" : "4",
        "label" : "Ink cartridge not received",
        "hidden" : false,
        "mecLabelChanged" : false,
        "mecLabel" : null
      }, {
        "id" : "5",
        "label" : "Unable to track ink shipment",
        "hidden" : false,
        "mecLabelChanged" : false,
        "mecLabel" : null
      }, {
        "id" : "6",
        "label" : "Difficulty enrolling or finding claim code",
        "hidden" : false,
        "mecLabelChanged" : false,
        "mecLabel" : null
      }, {
        "id" : "7",
        "label" : "Virtual Assistant not helpful",
        "hidden" : false,
        "mecLabelChanged" : false,
        "mecLabel" : null
      }, {
        "id" : "8",
        "label" : "Other",
        "hidden" : false,
        "mecLabelChanged" : false,
        "mecLabel" : null
      } ],
      "label" : "We are sorry. What went wrong?",
      "description" : "",
      "placeholder" : "Please Select Option",
      "labelWithCP" : "",
      "position" : null,
      "descriptionWithCP" : "",
      "index" : 7,
      "nebUuid" : "1994-c1e2-5e69-ecd2-0db7-2ce2-1d38-5870",
      "labelContent" : "",
      "cdSource" : {
        "type" : "formula",
        "conditions" : [ {
          "id" : 966782,
          "type" : "component",
          "value" : "3",
          "nebUuid" : "4d86-142c-c778-2ee0-d2d1-aa96-f20a-4cea",
          "operator" : "Smaller Than",
          "componentType" : "grading"
        }, {
          "type" : "component",
          "value" : "5",
          "nebUuid" : "7394-e73f-e8f4-f5af-0153-b894-a1a1-9a57",
          "operator" : "Equals",
          "componentType" : "select"
        } ],
        "logicalOperator" : "and",
        "autoOpenScreenCapture" : false
      },
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
        "randomStrategy" : "RANDOM_EXCEPT_FOR_LAST",
        "ratingViewType" : "",
        "uploadedResource" : null
      },
      "imageObject" : null,
      "uploadedResource" : null,
      "image_url" : "",
      "customLabels" : [ "" ],
      "display" : true,
      "editable" : true,
      "required" : false,
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
      "randomStrategy" : "RANDOM_EXCEPT_FOR_LAST",
      "ratingViewType" : "",
      "uploadedResource" : null
    }, {
      "id" : 1161611,
      "unique_name" : "What went wrong - Setup or use product",
      "component" : "select",
      "role" : null,
      "options" : null,
      "optionsById" : [ {
        "id" : "1",
        "label" : "Could not find information",
        "hidden" : false,
        "mecLabelChanged" : false,
        "mecLabel" : null
      }, {
        "id" : "2",
        "label" : "Information not helpful",
        "hidden" : false,
        "mecLabelChanged" : false,
        "mecLabel" : null
      }, {
        "id" : "3",
        "label" : "Information too complex ",
        "hidden" : false,
        "mecLabelChanged" : false,
        "mecLabel" : null
      }, {
        "id" : "4",
        "label" : "HP Smart set up or usage issue",
        "hidden" : false,
        "mecLabelChanged" : false,
        "mecLabel" : null
      }, {
        "id" : "5",
        "label" : "Virtual Assistant not helpful",
        "hidden" : false,
        "mecLabelChanged" : false,
        "mecLabel" : null
      }, {
        "id" : "6",
        "label" : "Other",
        "hidden" : false,
        "mecLabelChanged" : false,
        "mecLabel" : null
      } ],
      "label" : "We are sorry. What went wrong?",
      "description" : "",
      "placeholder" : "Please Select Option",
      "labelWithCP" : "",
      "position" : null,
      "descriptionWithCP" : "",
      "index" : 8,
      "nebUuid" : "c2d8-40ec-500c-3294-c943-40ed-129b-95d8",
      "labelContent" : "",
      "cdSource" : {
        "type" : "formula",
        "conditions" : [ {
          "id" : 966782,
          "type" : "component",
          "value" : "3",
          "nebUuid" : "4d86-142c-c778-2ee0-d2d1-aa96-f20a-4cea",
          "operator" : "Smaller Than",
          "componentType" : "grading"
        }, {
          "type" : "component",
          "value" : "7",
          "nebUuid" : "7394-e73f-e8f4-f5af-0153-b894-a1a1-9a57",
          "operator" : "Equals",
          "componentType" : "select"
        } ],
        "logicalOperator" : "and",
        "autoOpenScreenCapture" : false
      },
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
        "randomStrategy" : "RANDOM_EXCEPT_FOR_LAST",
        "ratingViewType" : "",
        "uploadedResource" : null
      },
      "imageObject" : null,
      "uploadedResource" : null,
      "image_url" : "",
      "customLabels" : [ "" ],
      "display" : true,
      "editable" : true,
      "required" : false,
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
      "randomStrategy" : "RANDOM_EXCEPT_FOR_LAST",
      "ratingViewType" : "",
      "uploadedResource" : null
    }, {
      "id" : 1161612,
      "unique_name" : "What went wrong - Troubleshoot a problem",
      "component" : "select",
      "role" : null,
      "options" : null,
      "optionsById" : [ {
        "id" : "1",
        "label" : "Could not find a solution",
        "hidden" : false,
        "mecLabelChanged" : false,
        "mecLabel" : null
      }, {
        "id" : "2",
        "label" : "Solution did not work",
        "hidden" : false,
        "mecLabelChanged" : false,
        "mecLabel" : null
      }, {
        "id" : "3",
        "label" : "Solution too complex",
        "hidden" : false,
        "mecLabelChanged" : false,
        "mecLabel" : null
      }, {
        "id" : "4",
        "label" : "Virtual Assistant not helpful",
        "hidden" : false,
        "mecLabelChanged" : false,
        "mecLabel" : null
      }, {
        "id" : "5",
        "label" : "Website is hard to use",
        "hidden" : false,
        "mecLabelChanged" : false,
        "mecLabel" : null
      }, {
        "id" : "6",
        "label" : "Other",
        "hidden" : false,
        "mecLabelChanged" : false,
        "mecLabel" : null
      } ],
      "label" : "We are sorry. What went wrong?",
      "description" : "",
      "placeholder" : "Please Select Option",
      "labelWithCP" : "",
      "position" : null,
      "descriptionWithCP" : "",
      "index" : 9,
      "nebUuid" : "0c78-039a-a9c4-cbc4-7ab1-5b36-3d76-404a",
      "labelContent" : "",
      "cdSource" : {
        "type" : "formula",
        "conditions" : [ {
          "type" : "component",
          "value" : "9",
          "nebUuid" : "7394-e73f-e8f4-f5af-0153-b894-a1a1-9a57",
          "operator" : "Equals",
          "componentType" : "select"
        }, {
          "id" : 966782,
          "type" : "component",
          "value" : "3",
          "nebUuid" : "4d86-142c-c778-2ee0-d2d1-aa96-f20a-4cea",
          "operator" : "Smaller Than",
          "componentType" : "grading"
        } ],
        "logicalOperator" : "and",
        "autoOpenScreenCapture" : false
      },
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
        "randomStrategy" : "RANDOM_EXCEPT_FOR_LAST",
        "ratingViewType" : "",
        "uploadedResource" : null
      },
      "imageObject" : null,
      "uploadedResource" : null,
      "image_url" : "",
      "customLabels" : [ "" ],
      "display" : true,
      "editable" : true,
      "required" : false,
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
      "randomStrategy" : "RANDOM_EXCEPT_FOR_LAST",
      "ratingViewType" : "",
      "uploadedResource" : null
    }, {
      "id" : 1161613,
      "unique_name" : "What went wrong - Warranty",
      "component" : "select",
      "role" : null,
      "options" : null,
      "optionsById" : [ {
        "id" : "1",
        "label" : "Warranty status not available",
        "hidden" : false,
        "mecLabelChanged" : false,
        "mecLabel" : null
      }, {
        "id" : "2",
        "label" : "Warranty status incorrect",
        "hidden" : false,
        "mecLabelChanged" : false,
        "mecLabel" : null
      }, {
        "id" : "3",
        "label" : "Warranty dispute process too complex",
        "hidden" : false,
        "mecLabelChanged" : false,
        "mecLabel" : null
      }, {
        "id" : "4",
        "label" : "Virtual Assistant not helpful",
        "hidden" : false,
        "mecLabelChanged" : false,
        "mecLabel" : null
      }, {
        "id" : "5",
        "label" : "Other",
        "hidden" : false,
        "mecLabelChanged" : false,
        "mecLabel" : null
      } ],
      "label" : "We are sorry. What went wrong?",
      "description" : "",
      "placeholder" : "Please Select Option",
      "labelWithCP" : "",
      "position" : null,
      "descriptionWithCP" : "",
      "index" : 10,
      "nebUuid" : "1501-d51f-939b-9545-5a24-277b-9bcb-1ea3",
      "labelContent" : "",
      "cdSource" : {
        "type" : "formula",
        "conditions" : [ {
          "id" : 966782,
          "type" : "component",
          "value" : "3",
          "nebUuid" : "4d86-142c-c778-2ee0-d2d1-aa96-f20a-4cea",
          "operator" : "Smaller Than",
          "componentType" : "grading"
        }, {
          "type" : "component",
          "value" : "4",
          "nebUuid" : "7394-e73f-e8f4-f5af-0153-b894-a1a1-9a57",
          "operator" : "Equals",
          "componentType" : "select"
        } ],
        "logicalOperator" : "and",
        "autoOpenScreenCapture" : false
      },
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
        "randomStrategy" : "RANDOM_EXCEPT_FOR_LAST",
        "ratingViewType" : "",
        "uploadedResource" : null
      },
      "imageObject" : null,
      "uploadedResource" : null,
      "image_url" : "",
      "customLabels" : [ "" ],
      "display" : true,
      "editable" : true,
      "required" : false,
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
      "randomStrategy" : "RANDOM_EXCEPT_FOR_LAST",
      "ratingViewType" : "",
      "uploadedResource" : null
    }, {
      "id" : 1161614,
      "unique_name" : "What went wrong - Manuals and Specifications",
      "component" : "select",
      "role" : null,
      "options" : null,
      "optionsById" : [ {
        "id" : "1",
        "label" : "Could not find information",
        "hidden" : false,
        "mecLabelChanged" : false,
        "mecLabel" : null
      }, {
        "id" : "2",
        "label" : "Information not helpful",
        "hidden" : false,
        "mecLabelChanged" : false,
        "mecLabel" : null
      }, {
        "id" : "3",
        "label" : "Issues finding serial or product number",
        "hidden" : false,
        "mecLabelChanged" : false,
        "mecLabel" : null
      }, {
        "id" : "4",
        "label" : "Virtual Assistant not helpful",
        "hidden" : false,
        "mecLabelChanged" : false,
        "mecLabel" : null
      }, {
        "id" : "5",
        "label" : "Other",
        "hidden" : false,
        "mecLabelChanged" : false,
        "mecLabel" : null
      } ],
      "label" : "We are sorry. What went wrong?",
      "description" : "",
      "placeholder" : "Please Select Option",
      "labelWithCP" : "",
      "position" : null,
      "descriptionWithCP" : "",
      "index" : 11,
      "nebUuid" : "0863-cabf-b355-9c76-f408-2132-7f0f-1e17",
      "labelContent" : "",
      "cdSource" : {
        "type" : "formula",
        "conditions" : [ {
          "id" : 966782,
          "type" : "component",
          "value" : "3",
          "nebUuid" : "4d86-142c-c778-2ee0-d2d1-aa96-f20a-4cea",
          "operator" : "Smaller Than",
          "componentType" : "grading"
        }, {
          "type" : "component",
          "value" : "3",
          "nebUuid" : "7394-e73f-e8f4-f5af-0153-b894-a1a1-9a57",
          "operator" : "Equals",
          "componentType" : "select"
        } ],
        "logicalOperator" : "and",
        "autoOpenScreenCapture" : false
      },
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
        "randomStrategy" : "RANDOM_EXCEPT_FOR_LAST",
        "ratingViewType" : "",
        "uploadedResource" : null
      },
      "imageObject" : null,
      "uploadedResource" : null,
      "image_url" : "",
      "customLabels" : [ "" ],
      "display" : true,
      "editable" : true,
      "required" : false,
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
      "randomStrategy" : "RANDOM_EXCEPT_FOR_LAST",
      "ratingViewType" : "",
      "uploadedResource" : null
    }, {
      "id" : 1161615,
      "unique_name" : "What went wrong - Supplies & Accessories",
      "component" : "select",
      "role" : null,
      "options" : null,
      "optionsById" : [ {
        "id" : "1",
        "label" : "Ink, toner, cartridge issues",
        "hidden" : false,
        "mecLabelChanged" : false,
        "mecLabel" : null
      }, {
        "id" : "2",
        "label" : "Couldn't find what I was looking for",
        "hidden" : false,
        "mecLabelChanged" : false,
        "mecLabel" : null
      }, {
        "id" : "3",
        "label" : "Other",
        "hidden" : false,
        "mecLabelChanged" : false,
        "mecLabel" : null
      } ],
      "label" : "We are sorry. What went wrong?",
      "description" : "",
      "placeholder" : "Please Select Option",
      "labelWithCP" : "",
      "position" : null,
      "descriptionWithCP" : "",
      "index" : 12,
      "nebUuid" : "166c-70ad-1a88-3305-db52-aae9-b3b2-a2a8",
      "labelContent" : "",
      "cdSource" : {
        "type" : "formula",
        "conditions" : [ {
          "id" : 966782,
          "type" : "component",
          "value" : "3",
          "nebUuid" : "4d86-142c-c778-2ee0-d2d1-aa96-f20a-4cea",
          "operator" : "Smaller Than",
          "componentType" : "grading"
        }, {
          "type" : "component",
          "value" : "6",
          "nebUuid" : "7394-e73f-e8f4-f5af-0153-b894-a1a1-9a57",
          "operator" : "Equals",
          "componentType" : "select"
        } ],
        "logicalOperator" : "and",
        "autoOpenScreenCapture" : false
      },
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
        "randomStrategy" : "RANDOM_EXCEPT_FOR_LAST",
        "ratingViewType" : "",
        "uploadedResource" : null
      },
      "imageObject" : null,
      "uploadedResource" : null,
      "image_url" : "",
      "customLabels" : [ "" ],
      "display" : true,
      "editable" : true,
      "required" : false,
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
      "randomStrategy" : "RANDOM_EXCEPT_FOR_LAST",
      "ratingViewType" : "",
      "uploadedResource" : null
    }, {
      "id" : 1161616,
      "unique_name" : "What went wrong - Repair",
      "component" : "select",
      "role" : null,
      "options" : null,
      "optionsById" : [ {
        "id" : "1",
        "label" : "Could not locate repair order",
        "hidden" : false,
        "mecLabelChanged" : false,
        "mecLabel" : null
      }, {
        "id" : "2",
        "label" : "Repair order status not available ",
        "hidden" : false,
        "mecLabelChanged" : false,
        "mecLabel" : null
      }, {
        "id" : "3",
        "label" : "Could not find repair contact information",
        "hidden" : false,
        "mecLabelChanged" : false,
        "mecLabel" : null
      }, {
        "id" : "4",
        "label" : "Could not initiate a repair",
        "hidden" : false,
        "mecLabelChanged" : false,
        "mecLabel" : null
      }, {
        "id" : "5",
        "label" : "Other",
        "hidden" : false,
        "mecLabelChanged" : false,
        "mecLabel" : null
      } ],
      "label" : "We are sorry. What went wrong?",
      "description" : "",
      "placeholder" : "Please Select Option",
      "labelWithCP" : "",
      "position" : null,
      "descriptionWithCP" : "",
      "index" : 13,
      "nebUuid" : "c3b3-d2f1-6bb9-6582-0a91-9438-b563-7fb5",
      "labelContent" : "",
      "cdSource" : {
        "type" : "formula",
        "conditions" : [ {
          "id" : 966782,
          "type" : "component",
          "value" : "3",
          "nebUuid" : "4d86-142c-c778-2ee0-d2d1-aa96-f20a-4cea",
          "operator" : "Smaller Than",
          "componentType" : "grading"
        }, {
          "type" : "component",
          "value" : "8",
          "nebUuid" : "7394-e73f-e8f4-f5af-0153-b894-a1a1-9a57",
          "operator" : "Equals",
          "componentType" : "select"
        } ],
        "logicalOperator" : "and",
        "autoOpenScreenCapture" : false
      },
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
        "randomStrategy" : "RANDOM_EXCEPT_FOR_LAST",
        "ratingViewType" : "",
        "uploadedResource" : null
      },
      "imageObject" : null,
      "uploadedResource" : null,
      "image_url" : "",
      "customLabels" : [ "" ],
      "display" : true,
      "editable" : true,
      "required" : false,
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
      "randomStrategy" : "RANDOM_EXCEPT_FOR_LAST",
      "ratingViewType" : "",
      "uploadedResource" : null
    }, {
      "id" : 792501,
      "unique_name" : "What Went Wrong Other 1",
      "component" : "textInput",
      "role" : null,
      "options" : [ ],
      "optionsById" : null,
      "label" : "Can you provide any additional detail about what went wrong?",
      "description" : "",
      "placeholder" : "",
      "labelWithCP" : "",
      "position" : null,
      "descriptionWithCP" : "",
      "index" : 14,
      "nebUuid" : "9d1d-2a18-80d5-5fe0-1fb8-a43e-61e7-03bc",
      "labelContent" : "",
      "cdSource" : {
        "type" : "formula",
        "conditions" : [ {
          "id" : 966782,
          "type" : "component",
          "value" : "3",
          "nebUuid" : "4d86-142c-c778-2ee0-d2d1-aa96-f20a-4cea",
          "operator" : "Smaller Than",
          "componentType" : "grading"
        }, {
          "type" : "group",
          "conditions" : [ {
            "type" : "component",
            "value" : "1",
            "nebUuid" : "7394-e73f-e8f4-f5af-0153-b894-a1a1-9a57",
            "operator" : "Equals",
            "componentType" : "select"
          }, {
            "type" : "component",
            "value" : "2",
            "nebUuid" : "7394-e73f-e8f4-f5af-0153-b894-a1a1-9a57",
            "operator" : "Equals",
            "componentType" : "select"
          }, {
            "type" : "component",
            "value" : "3",
            "nebUuid" : "7394-e73f-e8f4-f5af-0153-b894-a1a1-9a57",
            "operator" : "Equals",
            "componentType" : "select"
          }, {
            "type" : "component",
            "value" : "4",
            "nebUuid" : "7394-e73f-e8f4-f5af-0153-b894-a1a1-9a57",
            "operator" : "Equals",
            "componentType" : "select"
          }, {
            "type" : "component",
            "value" : "5",
            "nebUuid" : "7394-e73f-e8f4-f5af-0153-b894-a1a1-9a57",
            "operator" : "Equals",
            "componentType" : "select"
          }, {
            "type" : "component",
            "value" : "6",
            "nebUuid" : "7394-e73f-e8f4-f5af-0153-b894-a1a1-9a57",
            "operator" : "Equals",
            "componentType" : "select"
          }, {
            "type" : "component",
            "value" : "7",
            "nebUuid" : "7394-e73f-e8f4-f5af-0153-b894-a1a1-9a57",
            "operator" : "Equals",
            "componentType" : "select"
          }, {
            "type" : "component",
            "value" : "8",
            "nebUuid" : "7394-e73f-e8f4-f5af-0153-b894-a1a1-9a57",
            "operator" : "Equals",
            "componentType" : "select"
          }, {
            "type" : "component",
            "value" : "9",
            "nebUuid" : "7394-e73f-e8f4-f5af-0153-b894-a1a1-9a57",
            "operator" : "Equals",
            "componentType" : "select"
          } ],
          "logicalOperator" : "or"
        } ],
        "logicalOperator" : "and",
        "autoOpenScreenCapture" : false
      },
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
        "max_chars" : "1000",
        "thickness" : "",
        "custom_css" : "",
        "validation" : "/.*/",
        "date_format" : "",
        "imageObject" : null,
        "image_align" : "",
        "border_style" : "",
        "kampyleGroup" : "InputGroup",
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
        "useCustomParams" : false,
        "uploadedResource" : null
      },
      "imageObject" : null,
      "uploadedResource" : null,
      "image_url" : "",
      "customLabels" : [ "" ],
      "display" : true,
      "editable" : true,
      "required" : false,
      "max_chars" : "1000",
      "thickness" : "",
      "custom_css" : "",
      "validation" : "/.*/",
      "date_format" : "",
      "imageObject" : null,
      "image_align" : "",
      "border_style" : "",
      "kampyleGroup" : "InputGroup",
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
      "useCustomParams" : false,
      "uploadedResource" : null
    }, {
      "id" : 1161617,
      "unique_name" : "What went wrong - Give Feedback",
      "component" : "textArea",
      "role" : null,
      "options" : [ ],
      "optionsById" : null,
      "label" : "We are sorry. What went wrong?",
      "description" : "",
      "placeholder" : "",
      "labelWithCP" : "",
      "position" : null,
      "descriptionWithCP" : "",
      "index" : 15,
      "nebUuid" : "db4d-b816-a6e3-0f33-6216-6a58-f34f-e4d5",
      "labelContent" : "",
      "cdSource" : {
        "type" : "formula",
        "conditions" : [ {
          "id" : 966782,
          "type" : "component",
          "value" : "3",
          "nebUuid" : "4d86-142c-c778-2ee0-d2d1-aa96-f20a-4cea",
          "operator" : "Smaller Than",
          "componentType" : "grading"
        }, {
          "type" : "component",
          "value" : "10",
          "nebUuid" : "7394-e73f-e8f4-f5af-0153-b894-a1a1-9a57",
          "operator" : "Equals",
          "componentType" : "select"
        } ],
        "logicalOperator" : "and",
        "autoOpenScreenCapture" : false
      },
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
      "imageObject" : null,
      "uploadedResource" : null,
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
      "id" : 794780,
      "unique_name" : "What Went Wrong 9",
      "component" : "textArea",
      "role" : null,
      "options" : [ ],
      "optionsById" : null,
      "label" : "We are sorry. What went wrong?",
      "description" : "",
      "placeholder" : "",
      "labelWithCP" : "",
      "position" : null,
      "descriptionWithCP" : "",
      "index" : 16,
      "nebUuid" : "1114-3d87-3e4f-0b02-7abd-c510-b3d3-4c12",
      "labelContent" : "",
      "cdSource" : {
        "type" : "formula",
        "conditions" : [ {
          "id" : 966782,
          "type" : "component",
          "value" : "3",
          "nebUuid" : "4d86-142c-c778-2ee0-d2d1-aa96-f20a-4cea",
          "operator" : "Smaller Than",
          "componentType" : "grading"
        }, {
          "type" : "component",
          "value" : "11",
          "nebUuid" : "7394-e73f-e8f4-f5af-0153-b894-a1a1-9a57",
          "operator" : "Equals",
          "componentType" : "select"
        } ],
        "logicalOperator" : "and",
        "autoOpenScreenCapture" : false
      },
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
        "image_align" : "",
        "border_style" : "",
        "kampyleGroup" : "InputGroup",
        "num_of_lines" : "3",
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
      "imageObject" : null,
      "uploadedResource" : null,
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
      "num_of_lines" : "3",
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
      "id" : 791552,
      "unique_name" : "Purpose of Visit Achieved 1",
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
      "label" : "Did you achieve the purpose of your visit today?",
      "description" : "",
      "placeholder" : "",
      "labelWithCP" : "",
      "position" : "horizontal",
      "descriptionWithCP" : "",
      "index" : 17,
      "nebUuid" : "c169-a8ee-f0e5-f0ab-642c-bc7b-b07a-11e6",
      "labelContent" : "",
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
      "imageObject" : null,
      "uploadedResource" : null,
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
      "id" : 966784,
      "unique_name" : "CES Question Text",
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
      "index" : 18,
      "nebUuid" : "956d-b527-bd61-e28a-9c9e-a5e5-d442-d66d",
      "labelContent" : "&ltp&gt&ltspan style=\"color:#595959\"&gt&ltspan style=\"font-size:14px\"&gt&ltspan style=\"font-family:Open Sans\"&gtTo what extent do you agree or disagree with this statement:&lt/span&gt&lt/span&gt&lt/span&gt&lt/p&gt\n",
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
      "imageObject" : null,
      "uploadedResource" : null,
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
      "id" : 791548,
      "unique_name" : "Digital CES (Web)",
      "component" : "grading0to10",
      "role" : null,
      "options" : [ ],
      "optionsById" : null,
      "label" : "Website made it easy for me to complete my task.",
      "description" : "",
      "placeholder" : "",
      "labelWithCP" : "",
      "position" : null,
      "descriptionWithCP" : "",
      "index" : 19,
      "nebUuid" : "7a92-2794-78ec-597a-9018-2e4a-346a-f263",
      "labelContent" : "",
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
        "required" : true,
        "max_chars" : "",
        "thickness" : "",
        "custom_css" : "",
        "validation" : "/.*/",
        "date_format" : "",
        "imageObject" : null,
        "image_align" : "",
        "border_style" : "",
        "kampyleGroup" : "RatingGroup",
        "num_of_lines" : "Please Select Option",
        "borderOptions" : "",
        "componentType" : "grading0to10",
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
        "ratingViewType" : "numbersCircle",
        "selectionStyle" : {
          "value" : "accumulate",
          "options" : [ {
            "icon" : "neb-icon-accumulative-select",
            "label" : "Accumulative",
            "value" : "accumulate"
          }, {
            "icon" : "neb-icon-single-select",
            "label" : "Single select",
            "value" : "single"
          } ]
        },
        "uploadedResource" : null,
        "ratingScalesValues" : [ 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10 ],
        "shouldShowAriaLabelInRating" : true
      },
      "imageObject" : null,
      "uploadedResource" : null,
      "image_url" : "",
      "customLabels" : [ "Strongly Disagree", "", "", "", "", "", "", "", "", "", "Strongly Agree" ],
      "display" : true,
      "editable" : true,
      "required" : true,
      "max_chars" : "",
      "thickness" : "",
      "custom_css" : "",
      "validation" : "/.*/",
      "date_format" : "",
      "imageObject" : null,
      "image_align" : "",
      "border_style" : "",
      "kampyleGroup" : "RatingGroup",
      "num_of_lines" : "Please Select Option",
      "borderOptions" : "",
      "componentType" : "grading0to10",
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
      "ratingViewType" : "numbersCircle",
      "selectionStyle" : {
        "value" : "accumulate",
        "options" : [ {
          "icon" : "neb-icon-accumulative-select",
          "label" : "Accumulative",
          "value" : "accumulate"
        }, {
          "icon" : "neb-icon-single-select",
          "label" : "Single select",
          "value" : "single"
        } ]
      },
      "uploadedResource" : null,
      "ratingScalesValues" : [ 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10 ],
      "shouldShowAriaLabelInRating" : true
    }, {
      "id" : 791685,
      "unique_name" : "Product Type",
      "component" : "select",
      "role" : null,
      "options" : null,
      "optionsById" : [ {
        "id" : "1",
        "label" : "Printer",
        "hidden" : false,
        "mecLabelChanged" : false,
        "mecLabel" : null
      }, {
        "id" : "2",
        "label" : "Desktop PC",
        "hidden" : false,
        "mecLabelChanged" : false,
        "mecLabel" : null
      }, {
        "id" : "3",
        "label" : "Laptop",
        "hidden" : false,
        "mecLabelChanged" : false,
        "mecLabel" : null
      }, {
        "id" : "4",
        "label" : "Instant Ink",
        "hidden" : false,
        "mecLabelChanged" : false,
        "mecLabel" : null
      }, {
        "id" : "5",
        "label" : "Other",
        "hidden" : false,
        "mecLabelChanged" : false,
        "mecLabel" : null
      } ],
      "label" : "Please indicate the type of product you were inquiring about today:",
      "description" : "",
      "placeholder" : "Please select an option",
      "labelWithCP" : "",
      "position" : null,
      "descriptionWithCP" : "",
      "index" : 20,
      "nebUuid" : "95a3-343e-3388-b953-de6d-3cca-50bf-590e",
      "labelContent" : "",
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
      "imageObject" : null,
      "uploadedResource" : null,
      "image_url" : "",
      "customLabels" : [ "" ],
      "display" : true,
      "editable" : true,
      "required" : false,
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
      "id" : 792511,
      "unique_name" : "Product Type - Other",
      "component" : "textInput",
      "role" : null,
      "options" : [ ],
      "optionsById" : null,
      "label" : "Please specify.",
      "description" : "",
      "placeholder" : "",
      "labelWithCP" : "",
      "position" : null,
      "descriptionWithCP" : "",
      "index" : 21,
      "nebUuid" : "c579-d3f5-257d-204b-f7f6-2581-eba3-d650",
      "labelContent" : "",
      "cdSource" : {
        "value" : "5",
        "nebUuid" : "95a3-343e-3388-b953-de6d-3cca-50bf-590e",
        "operator" : "Equals",
        "componentType" : "select"
      },
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
        "max_chars" : 50,
        "thickness" : "",
        "custom_css" : "",
        "validation" : "/.*/",
        "date_format" : "",
        "imageObject" : null,
        "image_align" : "",
        "border_style" : "",
        "kampyleGroup" : "InputGroup",
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
        "useCustomParams" : false,
        "uploadedResource" : null
      },
      "imageObject" : null,
      "uploadedResource" : null,
      "image_url" : "",
      "customLabels" : [ "" ],
      "display" : true,
      "editable" : true,
      "required" : false,
      "max_chars" : 50,
      "thickness" : "",
      "custom_css" : "",
      "validation" : "/.*/",
      "date_format" : "",
      "imageObject" : null,
      "image_align" : "",
      "border_style" : "",
      "kampyleGroup" : "InputGroup",
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
      "useCustomParams" : false,
      "uploadedResource" : null
    }, {
      "id" : 791686,
      "unique_name" : "Under Warranty",
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
      }, {
        "id" : "3",
        "label" : "Unsure",
        "hidden" : false,
        "mecLabelChanged" : false,
        "mecLabel" : null
      } ],
      "label" : "Is your product under warranty?",
      "description" : "",
      "placeholder" : "",
      "labelWithCP" : "",
      "position" : "vertical",
      "descriptionWithCP" : "",
      "index" : 22,
      "nebUuid" : "62c9-4a79-bbb5-39fc-ffea-165c-d7f6-47eb",
      "labelContent" : "",
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
      "imageObject" : null,
      "uploadedResource" : null,
      "image_url" : "",
      "customLabels" : [ "" ],
      "display" : true,
      "editable" : true,
      "required" : false,
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
      "id" : 792512,
      "unique_name" : "Additional Feedback",
      "component" : "textArea",
      "role" : null,
      "options" : [ ],
      "optionsById" : null,
      "label" : "Please provide any additional feedback.",
      "description" : "For your privacy and security, please do not include personal information such as your phone number or email address in the comments section.",
      "placeholder" : "",
      "labelWithCP" : "",
      "position" : null,
      "descriptionWithCP" : "",
      "index" : 23,
      "nebUuid" : "5ed9-2ab3-f475-76f6-8b1f-6dcf-cf30-3f99",
      "labelContent" : "",
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
      "imageObject" : null,
      "uploadedResource" : null,
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
      "id" : 789704,
      "unique_name" : "Page 1 text 47847",
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
      "index" : 24,
      "nebUuid" : "71b5-4782-b0ba-ff53-6663-7f76-4770-4a57",
      "labelContent" : "&ltp&gt&ltspan style=\"font-size:14px\"&gt&ltspan style=\"font-family:Open Sans\"&gt&ltspan style=\"color:#595959\"&gtThe purpose of this survey is to gather customer feedback about HP products and services. HP may use the information collected in this survey together with existing information it has about you to improve its products and services to meet your needs. HP is committed to respecting your privacy in accordance with HP&#39;s Privacy Statement.&lt/span&gt&lt/span&gt&lt/span&gt&lt/p&gt\n",
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
      "imageObject" : null,
      "uploadedResource" : null,
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
      "id" : 1066323,
      "unique_name" : "Page 1 text 77295",
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
      "index" : 25,
      "nebUuid" : "00a8-ea0b-57b9-8c80-cb25-da0e-1dc6-e277",
      "labelContent" : "&ltp style=\"text-align: center;\"&gt&lta href=\"https://www.hp.com/us-en/privacy/privacy.html\" target=\"_blank\"&gtHP&#39;s Privacy Statement&lt/a&gt&lt/p&gt\n",
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
      "imageObject" : null,
      "uploadedResource" : null,
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
    } ],
    "pageSettings" : {
      "backgroundColor" : "",
      "backgroundImgUrl" : null,
      "doBackgroundReapet" : false,
      "customCssClass" : "https://assets.kampyle.com/clients/nebula/hp/hp_support_04082022.css"
    }
  } ],
  "settings" : {
    "formBasicSettings" : {
      "widthPX" : 500,
      "heightPX" : 700,
      "nextButtonLabel" : "Next",
      "nextButtoncolor" : "#5081ff",
      "backButtonLabel" : "Back",
      "backButtoncolor" : "#5081ff",
      "closeButtonLabel" : "Close",
      "closeButtoncolor" : "#767676",
      "submitButtonLabel" : "Submit",
      "submitButtoncolor" : "#0171ad",
      "isFixedSize" : true,
      "nextButtonTextColor" : null,
      "backButtonTextColor" : null,
      "closeButtonTextColor" : "",
      "submitButtonTextColor" : "",
      "htmlLanguage" : null,
      "isShowCloseButton" : true,
      "isShowBackButton" : false,
      "isFullWidthEmbedded" : null,
      "navigationButtons" : "Close + Submit",
      "transitionType" : null,
      "closeModalButton" : "",
      "formAnnouncement" : "",
      "titleElement" : ""
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
      "customCssFile" : null,
      "secondaryCustomCssFile" : null,
      "customCssFileResource" : {
        "name" : "6.21.23_nebula-cdn.kampyle.com_us_wu_541318_resource-library_css_1686187052221_v4_nebula-cdn.kampyle.com_us_wu_541318_resource-library_css_1660021276122_hp_support_04082022",
        "uuid" : null,
        "url" : "https://nebula-cdn.kampyle.com/us/wu/541318/resource-library/css/1687393975847_6.21.23_nebula-cdn.kampyle.com_us_wu_541318_resource-library_css_1686187052221_v4_nebula-cdn.kampyle.com_us_wu_541318_resource-library_css_1660021276122_hp_support_04082022.css",
        "resourceId" : 1999
      },
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
      "buttonColor" : "#0171ad",
      "textColor" : "#ffffff",
      "closeButtonLabel" : "Close",
      "isShowCloseButton" : null,
      "closeModalButton" : "",
      "logoLabel" : "",
      "thankYouPageAnnouncement" : "",
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
      "screenCaptureAsComponentEnabled" : true,
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
        "resourceId" : null
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

