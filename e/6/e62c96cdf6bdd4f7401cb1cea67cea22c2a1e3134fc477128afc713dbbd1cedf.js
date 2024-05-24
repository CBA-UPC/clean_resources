if (window.Evergage && window.SalesforceInteractions && window.SalesforceInteractions.mcis) {
    try {
        window.SalesforceInteractions.log.warn("Aborting SDK load since the SalesforceInteractions SDK was already found on this page.");
    } catch(e) {}
} else {
window.evergageBeaconParseTimeStart = (new Date().getTime());
'use strict';var Evergage={});
window.evergageBeaconParseTimeEnd = (new Date().getTime());

(();


try {
    const CAMPAIGN_STAT_ATTRIBUTE = {
    CAMPAIGN: "data-evg-campaign-id",
    EXPERIENCE: "data-evg-experience-id",
    USER_GROUP: "data-evg-user-group",
    CLICKTHROUGH: "data-evg-clickthrough",
    IGNORE_CLICKTHROUGH: "data-evg-ignore-clickthrough",
    DISMISSAL: "data-evg-dismissal",
    ITEM: "data-evg-item-id",
    ITEM_TYPE: "data-evg-item-type"
};

const CAMPAIGN_STAT_TYPE = {
    IMPRESSION: "Impression",
    CLICKTHROUGH: "Clickthrough",
    DISMISSAL: "Dismissal"
};

const CAMPAIGN_STAT_USER_GROUP = {
    TEST: "Test",
    CONTROL: "Control"
};

document.addEventListener(Evergage.CustomEvents.OnTemplateDisplayEnd, ;

const sendImpression = 

const generateItemStats = 
const buildCampaignSelector = 
const getCampaignElementFromPayload = 

const getCampaignClickthroughAndDismissalElements = 

const sendClickthroughOrDismissal = 

const generateItemClickthroughStats = 
const bindCampaignClickthroughsAndDismissals = 

const validateOnTemplateDisplayEndEvent = 

} catch (e) {
    if (typeof window.Evergage === "object" && typeof window.Evergage.getVersion === "function" && window.Evergage.getVersion() >= 5) {
        Evergage.sendException(e, "beaconExtension: Campaign Stats Tracking:campaignStatsTracking.js");
    }
};


try {
    /**
 *  Personalization Flicker Defense
 */
Evergage.FlickerDefender = Evergage.FlickerDefender || (();

if (window.SalesforceInteractions && window.SalesforceInteractions.mcis) {
    window.SalesforceInteractions.mcis.FlickerDefender = Evergage.FlickerDefender;
}

if (typeof Evergage.FlickerDefender.init === "function" && (window.frameElement || {}).id !== "siteEditorFrame") {
    Evergage.FlickerDefender.init();
}

} catch (e) {
    if (typeof window.Evergage === "object" && typeof window.Evergage.getVersion === "function" && window.Evergage.getVersion() >= 5) {
        Evergage.sendException(e, "beaconExtension: Flicker Defender:flickerDefender.js");
    }
};


try {
    !window,[));
} catch (e) {
    if (typeof window.Evergage === "object" && typeof window.Evergage.getVersion === "function" && window.Evergage.getVersion() >= 5) {
        Evergage.sendException(e, "beaconExtension: Handlebars Templates:index.js");
    }
};


try {
    // syncs with @frontend/packages/ui-chrome-extension/src/constants.ts#CUSTOM_EVENT.MESSAGE_FROM_INTERACTION_STUDIO_TOOLS_GEAR
var VE_CUSTOM_EVENT_NAME = 'msg_from_interaction_studio_tools_gear';
// syncs with @frontend/packages/ui-chrome-extension/src/constants.ts#EVENT_TYPE.MESSAGE_FROM_INTERACTION_STUDIO_TOOLS_GEAR
var TO_LAUNCHER_MESSAGE_TYPE = 'nxve_messageFromInteractionStudioToolsGear';

var TO_LAUNCHER_PAYLOAD_TYPE = 'beaconSDK_domEvent';


var eventLinkId = null;

if (Evergage !== null) {
    document.addEventListener(Evergage.CustomEvents.OnInit, ;

    document.addEventListener(Evergage.CustomEvents.OnEventSend, ;

    document.addEventListener(Evergage.CustomEvents.OnEventResponse, ;
}

} catch (e) {
    if (typeof window.Evergage === "object" && typeof window.Evergage.getVersion === "function" && window.Evergage.getVersion() >= 5) {
        Evergage.sendException(e, "beaconExtension: System Tools:interactionStudioTools.js");
    }
};


try {
    Evergage.Surveys = Evergage.Surveys || ((window);

if (window.SalesforceInteractions && window.SalesforceInteractions.mcis) {
    window.SalesforceInteractions.mcis.Surveys = Evergage.Surveys;
}
} catch (e) {
    if (typeof window.Evergage === "object" && typeof window.Evergage.getVersion === "function" && window.Evergage.getVersion() >= 5) {
        Evergage.sendException(e, "beaconExtension: Surveys:SurveyJS.js");
    }
};


try {
    (();

} catch (e) {
    if (typeof window.Evergage === "object" && typeof window.Evergage.getVersion === "function" && window.Evergage.getVersion() >= 5) {
        Evergage.sendException(e, "beaconExtension: Visual Editor:visualEditor.js");
    }
};


try {
var evgr = Evergage.resolvers;
SalesforceInteractions.init({
  cookieDomain: "siriusxm.com",
}).then(() => {

    const teamPageId = [
        '927faf86-4636-ce1f-ff66-a5dde45be814',
        '25f3d7d2-9016-60f0-9486-baeba1427c8d',
        '06443a8e-67e7-b1e3-3dea-5c19cd8e98e2',
        '696fd34b-a7f7-11f8-9ce8-f0fa92d601a0',
        '7615dc21-d30a-979d-c235-a2f34ea9455f',
        '2bcbb51d-275a-4a0e-c2f0-b2a30032aa37',
        '69b317ee-f3ed-17c7-daa5-deb8af5fcf1e',
        '53e1df98-119f-1a68-f8c3-5b3efefbcc99',
        '737434f4-190d-15e9-3b50-16a4e6ba79ba',
        '46ec1b0-8664-3c0d-37ab-426b43113099',
        '6a50c361-de10-c698-86da-9c692faca191',
        '9a20c7ca-117c-bbcf-d352-c478c70583d6',
        '2d6683e3-657c-3c95-8212-2711bff66eb0',
        '7fe910b6-b3d4-a68e-58ba-97d41dc3d5b8',
        '50046b11-621b-aabf-2162-c496ae322838',
        '9d897373-86d4-5270-eb5b-9411bb788722',
        '4da67c8f-f484-8231-ef7e-56d2c6ee8196',
        '1ba227eb-9d96-5175-a2f7-26efbfdeb99a',
        '6d09c51e-4563-b707-a322-3345d127c94f',
        '47019848-1552-71da-2b92-a148aec52af5',
        '7ddf6560-1fb1-e63e-dc77-4cc9f1cd6c16',
        '010fb4e0-db74-41e2-191a-76db4a031c62',
        'cb805e33-e9e1-e9a7-6fa0-669b14a37e48',
        'c9809a27-1e90-48ce-451a-f29ec772a97a',
        'd3fd68e6-7561-dfd0-4f77-1679ef25707c',
        'c686b643-67e9-551f-d099-431601d310a7',
        'f92b6015-575f-df52-0650-49fda05985fb',
        'dd0fcbb0-003c-b6bf-8004-801f7cc49253',
        'fc53ca65-e341-e33d-a4e0-7781e35b26d1',
        'ac083a9e-0feb-18a0-5f6f-f91d60458fc0',
        'c969c747-76d3-f98e-f1d9-593f5ac7c681',
        'e9f69b34-fdcc-ca70-4789-d2853fd6e94e',
        '1166086b-3b61-3086-ae46-3b3fc56c7eae'
    ];

    const pxpPageId = [
        '47fbdaa5-42e0-9d0a-4354-35677f549ae9',
        'ce92b663-db6a-1102-31b6-59ef3855c338',
        '034a6e76-af1c-7aaf-4e1b-d93d3c3550d8',
        '9156e6b4-bab0-d808-10a1-e017644ac87c',
        'af7393ce-01cf-560f-2382-bb683c345640',
        'eec15a4a-0944-5dd4-4143-6f8f28f57b08',
        '9f31a296-1619-a45e-567c-8d3631616ab7',
        '84d1b59f-a37d-5ffc-79e6-e9c017386c3e',
        '9f2ee511-bbea-e7bd-5598-fc8a4311c827',
        '346e8032-8f80-9d8f-1ca1-f9b31e17ee80',
        'ef7bf2a6-345e-aa14-9733-dd4617a98c5a',
        '1ae7b853-cd4e-6922-036e-127139b3628e',
        '0ae9517d-18da-ca1f-efd6-e61182d4dce8',
        'b30affd7-cc98-bf8d-83ce-6ecb04506ca7',
        '7372497a-c237-e5de-a1ed-6d3e083fedc9',
        '63e4dcd4-cff6-dd80-55ac-bc0c29349f67',
        '84984e75-c882-77e0-c4ea-a41c3792d074',
        '390004b7-f690-7537-a4b4-f756a360cbce',
        '123d4a3d-f6f5-7086-79f4-1c481cc6c8f0',
        '11e6d525-fe2c-297d-c264-98187d25700b',
        '4afa04c9-d1d1-b2d5-5e0d-f8e375750e75',
        'cfc27539-f855-7b94-01ff-9341f7825c8c',
        'cd7ebd29-4e4c-9639-836a-b537f2e1c564',
        'ff5d43da-0287-7a47-ba14-8ebdac107c17',
        'd17bd1ea-1c70-6757-14d0-3d862341e38c',
        'debf0b23-3dc0-8e3b-70c4-a8702ff510d6',
        'd37b8bc5-c1f4-a69b-af6e-7e5ef0ecef7d',
        '370cd8f6-c216-2efe-0e0d-71e35cca96cf',
        '56a7ef77-cd6a-c8ed-b786-1bc1e58cc3c1',
        '102fb848-1671-f633-f0c3-c3cbc9775af0',
        '927aa7a8-44b2-a09a-7529-f278f6d70e0f',
        '993460d0-95ba-3cf0-c73d-cddb670ee4a0',
        'f3126d70-09ea-bd0c-57cd-af5ab798f313',
        '41c960eb-799a-90d8-18b1-62b5ae608d2c',
    ];

    let currentPageId = window.location.pathname.split("/")[4];
    let isNFLPage = () => {
        if(currentPageId && (teamPageId.includes(currentPageId) || pxpPageId.includes(currentPageId))){
            return true;
        }
        return false;
    }

    const sitemapConfig = {
        global: {},
        pageTypeDefault: {
            name: "default",
            interaction: {
                name: "Default Page"
            }
        },
        pageTypes: [
            {
                name: "NFL Page",
                isMatch: 
                interaction: {
                    name: "Viewed NFL Page"
                },
                contentZones: [
                    {name: "nfl-signUp-modal"}
                ]
            },
            {
                name: "NFL Opt In Page",
                isMatch: () => {
                    if (window.location.pathname.split("/")[1] == "nfl-opt-in") {
                        return true;
                    }
                },
                interaction: {
                    name: "Viewed NFL Opt In Page"
                },
                listeners:[
                    SalesforceInteractions.listener("click", ".register-button", () => {
                        const firstName = SalesforceInteractions.cashDom("#firstName").val();
                        const lastName = SalesforceInteractions.cashDom("#lastName").val();
                        const emailAddress = SalesforceInteractions.cashDom("#email").val();
                        const address = SalesforceInteractions.cashDom("#address").val();
                        const city = SalesforceInteractions.cashDom("#city").val();
                        const state = SalesforceInteractions.cashDom("#state").val();
                        const zipCode = SalesforceInteractions.cashDom("#zipCode").val();
                        const favoriteNFLTeam = SalesforceInteractions.cashDom("#favoriteTeam").val();
                        const regex = RegExp(/^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]+)$/);

                        if (emailAddress && regex.test(emailAddress) && firstName && lastName && address 
                            && city && state && zipCode && favoriteNFLTeam) {
                            SalesforceInteractions.sendEvent({
                                interaction: {
                                    name: "Sign Up for NFL"
                                },
                                user: {
                                    identities: {
                                        emailAddress: emailAddress,
                                    },
                                    attributes: {
                                        firstName:firstName,
                                        lastName:lastName,
                                        address:address,
                                        city:city,
                                        state:state,
                                        zipCode:zipCode,
                                        favoriteTeam:favoriteNFLTeam
                                    }
                                }
                            });
                        } 
                    }),
                ]
            }
            /*{
                name: "Account Login",
                isMatch: () => {
                    return (/^\/account\/login/.test(window.location.pathname));
                },
                interaction: {
                    name: "Viewed Account Login Page"
                }
            },
            {
                name: "NFL Team Page",
                isMatch: () => {
                    if (pageType === "TeamPage" && (pageName.includes("nfl") || pageName.includes("NFL"))) {
                       return true;
                    }
                },
                interaction: {
                    name: pageName
                },
                contentZones: [
                    {name: "nfl-signUp-modal"}
                ]
            },
            {
                name: "NFL League Page",
                isMatch: () => {
                    if (pageType === "LeaguePage" && (pageName.includes("nfl") || pageName.includes("NFL"))) {
                        return true;
                    }
                },
                interaction: {
                    name: pageName
                },
                contentZones: [
                    {name: "nfl-signUp-modal", selector: ""}
                ],
            },
            {
                name: "NFL Channel Page",
                isMatch: () => {
                    if (pageType === "ChannelPage" && (pageName.includes("nfl") || pageName.includes("NFL"))) {
                        return true;
                    }
                },
                interaction: {
                    name: pageName
                },
                contentZones: [
                    {name: "nfl-signUp-modal", selector: ""}
                ],
            },
            {
                name: "NFL Super Bowl Page",
                isMatch: () => {
                    if (pageType === "GenericLandingPage" && pageName.includes("super-bowl")) {
                        return true;
                    }
                },
                interaction: {
                    name: pageName
                },
                contentZones: [
                    {name: "nfl-signUp-modal", selector: ""}
                ],
            },
            
            /*{
                name: "Password Reset",
                isMatch: () => {
                    return (/^\/account\/credentials\/forgot\-password/.test(window.location.pathname));
                },
                interaction: {
                    name: "Viewed Password Reset Page"
                },
                listeners:[
                    SalesforceInteractions.listener("click", "button[data-test='CreateCredentialsFormSubmitButton']", () => {
                        const emailAddress = SalesforceInteractions.cashDom("input[name='username']").val();
                        const regex = RegExp(/^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]+)$/);
                        if (emailAddress && regex.test(emailAddress)) {
                            SalesforceInteractions.sendEvent({
                                interaction: {
                                    name: 'Password Reset Requested'
                                },
                                user: {
                                    identities: {
                                        emailAddress: emailAddress,
                                        identityId: emailAddress,
                                    }
                                }
                            });
                        } 
                    }),
                ],
            },
            {
                name: "Checkout",
                isMatch: () => {
                    return (/^\/subscribe\/checkout/.test(window.location.pathname));
                },
                interaction: {
                    name: "Viewed Checkout Page"
                },
                listeners:[
                    SalesforceInteractions.listener("click", "button[id='account-info']", () => {
                        SalesforceInteractions.reinit();
                        SalesforceInteractions.sendEvent({
                            interaction: {
                                name: 'Account Info on Checkout'
                            },
                        });
                    }),

                    SalesforceInteractions.listener("click", "button[id='car-info']", () => {
                        SalesforceInteractions.reinit();
                        SalesforceInteractions.sendEvent({
                            interaction: {
                                name: 'Car Info on Checkout'
                            },
                        });
                    }),

                    SalesforceInteractions.listener("focusout", "input[data-test='FlepzEmailTextfield']", () => {
                        const emailAddress = SalesforceInteractions.cashDom("input[data-test='FlepzEmailTextfield']").val();
                        const regex = RegExp(/^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]+)$/);
                        if (emailAddress && regex.test(emailAddress)) {
                            SalesforceInteractions.sendEvent({
                                interaction: {
                                    name: 'Email Capture on Account Info'
                                },
                                user: {
                                    identities: {
                                        emailAddress: emailAddress,
                                        identityId: emailAddress,
                                    }
                                }
                            });
                        } 
                    }),

                    SalesforceInteractions.listener("click", "button[data-test='flepzForm.continueButton']", () => {
                        const firstName = SalesforceInteractions.cashDom("input[data-test='FlepzFirstNameTextfield']").val();
                        const lastName = SalesforceInteractions.cashDom("input[data-test='FlepzLastNameTextfield']").val();
                        const emailAddress = SalesforceInteractions.cashDom("input[data-test='FlepzEmailTextfield']").val();
                        const phoneNumber = SalesforceInteractions.cashDom("input[data-test='FlepzPhoneNumberTextfield']").val();
                        const zipCode = SalesforceInteractions.cashDom("input[data-test='FlepzZipCodeTextfield']").val();
                        const regex = RegExp(/^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]+)$/);

                        if (emailAddress && regex.test(emailAddress) && firstName && lastName && phoneNumber && zipCode) {
                            SalesforceInteractions.sendEvent({
                                interaction: {
                                    name: "Step 1: Web User Registration on Checkout"
                                },
                                user: {
                                    identities: {
                                        emailAddress: emailAddress,
                                        identityId: emailAddress,
                                    },
                                    attributes: {
                                        firstName:firstName,
                                        lastName:lastName,
                                        phone:phoneNumber,
                                        zipCode:zipCode,
                                        signUpSource: "direct_bill"
                                    }
                                }
                            });
                        } 
                    }),
                ],
            },
            /*{
                name: "Channel Guide Page",
                isMatch: () => {
                    if (pageDetails.pageType === "ChannelGuidePage") {
                        return true;
                    }
                    return false;
                },
                interaction: {
                    name: "Viewed Channel Guide Page",                   
                }
            },*/
        ]
    }

    SalesforceInteractions.initSitemap(sitemapConfig);
});
} catch (e) {
    if (typeof window.Evergage === "object" && typeof window.Evergage.getVersion === "function" && window.Evergage.getVersion() >= 5) {
          console.error("siteWideJavascriptError" + e);    }
};


}