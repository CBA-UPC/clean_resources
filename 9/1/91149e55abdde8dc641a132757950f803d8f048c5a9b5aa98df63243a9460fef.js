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
const currentDomain = window.location.hostname;

const handleSPAPageChange = () => {
  let url = window.location.href;
  const urlChangeInterval = setInterval(() => {
      if (url !== window.location.href) {
          url = window.location.href;
          SalesforceInteractions.reinit();
      }
  }, 500);
}

if(currentDomain === 'www.insiderintelligence.com') {
    SalesforceInteractions.init({
    // Initializes the Personalization module of the Salesforce Interactions SDK
    cookieDomain: "insiderintelligence.com",
  }).then(() => {
    const sitemapConfig = {
      // Sitemap configuration object
          global: {
              onActionEvent: (actionEvent) => {
                console.log("public action event: ", actionEvent);
                return actionEvent;
              },
        contentZones: []
      }, 
      pageTypeDefault: {
        name: "default",
        interaction: {
          name: "Default Page",
        },
      },
      pageTypes: [
        {
            name: "Public Homepage",
            isMatch: () => /^\/$/.test(window.location.pathname),
            interaction: {
          name: "[Public]Viewing - Public Homepage",
        },
        },
        //TODO: Dynamic Refactor starts here
        {
          name: "Become a client",
          isMatch: () => /\/become-a-client/.test(window.location.href),
          interaction: {
            name: "[Public]Viewing - Become a client",
          },
          listeners: [
            SalesforceInteractions.listener("submit", "#mktoForm_6286", () => {
              const firstName = document.querySelector("#FirstName").value;
              const lastName = document.querySelector("#LastName").value;
              const email = document.querySelector("#Title").value;
              const name = firstName + ' ' + lastName

              if(email) {
                SalesforceInteractions.sendEvent({
                  interaction: {
                    name: 'Submit Become A Client Form',
                  },
                  user: {
                    attributes: {
                      emailAddress: email,
                      name: name,
                    }
                  }
                })
              }
            })
          ]
      },
      {
        name: "Newsletter",
        isMatch: () => /\/newsletters/.test(window.location.pathname),
        interaction: {
          name: "[Public]Viewing - Newsletter sign-up",
        },
        listeners: [
          SalesforceInteractions.listener('submit', '#ContentForm', () => {
            const email = document.querySelector('#ContentForm input[id="formEmail"]').value;
            if(email) {
              SalesforceInteractions.sendEvent({
                interaction: {
                  name: 'Submit Newsletter Form',
                },
                user: {
                  attributes: {
                    emailAddress: email,
                  }
                }
              })
            }
          })
        ]
      },    
        {
          name: "press releases",
          isMatch: () => /\/press-releases/.test(window.location.pathname),
          interaction: {
        name: "[Public]Viewing - Newsroom",
      },
      },
      
            {
          name: "cotd",
          isMatch: () => /\/cotd/.test(window.location.pathname),
          interaction: {
        name: "[Public]Viewing - Chart of the Day Newsletter",
      },
      },
      
          {
          name: "edaily",
          isMatch: () => /\/edaily/.test(window.location.pathname),
          interaction: {
        name: "[Public]Viewing - eMarketer Daily Newsletter",
      },
      },
      
          {
          name: "retail-daily",
          isMatch: () => /\/retail-daily/.test(window.location.href),
          interaction: {
        name: "[Public]Viewing - Retail Daily",
      },
      },

        {
            name: "events",
            isMatch: () => /\/events/.test(window.location.pathname),
            interaction: {
          name: "[Public]Viewing - Events",
        },
        },

        {
          name: "clients",
          isMatch: () => /\/clients/.test(window.location.pathname),
          interaction: {
        name: "[Public]Viewing - Helping Clients Undergo Digital Transformation",
      },
      },

        {
          name: "advertise",
          isMatch: () => /\/advertise/.test(window.location.pathname),
          interaction: {
        name: "[Public]Viewing - Advertising and Sponsorship Opportunities",
      },
      },
        {
            name: "pricing",
            isMatch: () => /\/pricing/.test(window.location.pathname),
            interaction: {
              name: "[Public]Viewing - Pricing",
            },
            listeners: [
              SalesforceInteractions.listener("submit", "#mktoForm_9042", () => {
                const firstName = document.querySelector("#FirstName").value;
                const lastName = document.querySelector("#LastName").value;
                const email = document.querySelector("#Email").value;
                const name = firstName + ' ' + lastName
  
                if(email) {
                  SalesforceInteractions.sendEvent({
                    interaction: {
                      name: 'Submit Pricing Form',
                    },
                    user: {
                      attributes: {
                        emailAddress: email,
                        name: name,
                      }
                    }
                  })
                }
              })
            ]
        },
        
        {
            name: "access not found",
            isMatch: () => /\/access-not-found/.test(window.location.pathname),
            interaction: {
          name: "[Public]Viewing - Access not found",
        },
        },
        {
          name: "search",
          isMatch: () => /\/search/.test(window.location.href),
          interaction: {
            name: () => {
              let trimmed = window.location.search.replace(/^\?query=/i, ''); // remove "?query=" from the beginning
              let withoutSortBy = trimmed.replace(/&sortBy=.*/i, ''); // remove "&sortBy=" and everything after it
              let decoded = decodeURIComponent(withoutSortBy); // decode URL-encoded characters
              let words = decoded.split('%20'); // split into individual words
              let capitalized = words.map(; // capitalize first letter of each word
              let searchName = capitalized.join(' ')
              return `[Public]Search - ${searchName}`
            }
          },
      },

      {
        name: "learn",
        isMatch: () => /\/learn-more/.test(window.location.pathname),
        interaction: {
      name: "[Public]Viewing - Learn More",
    },
    },
    
{
  name: "banking-and-payments",
  interaction: {
      name: () => {
          let articleName = Evergage.cashDom('h1[class*="leading-tight text-ii-white"]')[0].innerText;
          return `[Public]Viewing - ${articleName}`;
      }
  },
  isMatch: () => {
      return (/\/banking-and-payments-daily/.test(window.location.href));
  }   
},

    {
      name: "partnerships",
      isMatch: () => /\/partnerships/.test(window.location.pathname),
      interaction: {
    name: "[Public]Viewing - Data Partnerships",
  },
  },
  
    {
      name: "submitted",
      isMatch: () => /\/submitted/.test(window.location.href),
      interaction: {
    name: "[Public]Viewing - Thanks for your feedback",
  },
  },

    {
      name: "newsroom",
      isMatch: () => /\/newsroom/.test(window.location.pathname),
      interaction: {
    name: "[Public]Viewing - Newsroom",
  },
  },

  {
    name: "learn more",
    isMatch: () => /\/learn/.test(window.location.pathname),
    interaction: {
  name: "[Public]Viewing - Learn more about Industry KPIs",
  },
  },

  {
    name: "sources",
    isMatch: () => /\/sources/.test(window.location.pathname),
    interaction: {
  name: "[Public]Viewing - Our Data Sources",
  },
  },
  
  {
    name: "subscriptionterms",
    isMatch: () => /\/subscriptionterms/.test(window.location.pathname),
    interaction: {
  name: "[Public]Viewing - Subscription Terms",
  },
  },

  {
    name: "corporate",
    isMatch: () => /\/corporate/.test(window.location.pathname),
    interaction: {
  name: "[Public]Viewing - Corporate subscribe?",
  },
  },
    // About Pages Started here

    {
      name: "about",
      isMatch: () => /\/about/.test(window.location.pathname),
      interaction: {
    name: "[Public]Viewing - About Us",
  },
  },

  {
    name: "methodology",
    isMatch: () => /\/methodology/.test(window.location.href),
    interaction: {
  name: "[Public]Viewing - Methodology",
  },
  },

  {
    name: "careers",
    isMatch: () => /\/careers/.test(window.location.pathname),
    interaction: {
  name: "[Public]Viewing - Careers Page",
  },
  },
  {
    name: "contact",
    isMatch: () => /\/contact/.test(window.location.pathname),
    interaction: {
      name: "[Public]Viewing - Contact us",
    },
    listeners: [
      SalesforceInteractions.listener("submit", "#mktoForm_6292", () => {
        const firstName = document.querySelector("#FirstName").value;
        const lastName = document.querySelector("#LastName").value;
        const email = document.querySelector("#Email").value;
        const name = firstName + ' ' + lastName

        if(email) {
          SalesforceInteractions.sendEvent({
            interaction: {
              name: 'Submit Become A Client Form',
            },
            user: {
              attributes: {
                emailAddress: email,
                name: name,
              }
            }
          })
        }
      })
    ]
  },


    // Footer pages Started Here

    {
      name: "privacy policy",
      isMatch: () => /\/privacy/.test(window.location.pathname),
      interaction: {
    name: "[Public]Viewing - Privacy Policy",
    },
    }, 
    
    {
      name: "employee privacy policy",
      isMatch: () => /\/employee-privacy-policy/.test(window.location.pathname),
      interaction: {
    name: "[Public]Viewing - Employee Privacy Policy",
    },
    },

    {
      name: "terms",
      isMatch: () => /\/terms/.test(window.location.pathname),
      interaction: {
    name: "[Public]Viewing - Terms Of Service Agreement",
    },
    },
    
    {
      name: "tracking consent",
      isMatch: () => /\/emailpreferences/.test(window.location.pathname),
      interaction: {
        name: "[Public]Viewing - Email Preferences",
      },
      listeners: [
        SalesforceInteractions.listener("submit", "#ContentForm", () => {
          let email = document.querySelector(".email-prefs-container-all h2 span").text

          if(email) {
            SalesforceInteractions.sendEvent({
              interaction: {
                name: 'Submit Tracking Consent Form',
              },
              user: {
                attributes: {
                  emailAddress: email
                }
              }
            })
          }
        })
      ]
    },
        
    {
      name: "sitemap",
      isMatch: () => /\/sitemap/.test(window.location.pathname),
      interaction: {
    name: "[Public]Viewing - Sitemap",
    },
    },
    
    
    // Email Preferences & Thank You Pages
    
    {
      name: "email preferences",
      isMatch: () => /\/emailpreferences.aspx/.test(window.location.pathname),
      interaction: {
    name: "[Public]Viewing - Email Preferences",
    },
    }, 
    //TODO: registration page listeners to convert anonymous to known
    //This page doesn't exist?
      {
      name: "register me",
      isMatch: () => /\/Corporate\/RegisterMe/.test(window.location.pathname),
      interaction: {
        name: "[Public]Viewing - Register Me",
      },
    },
    
      {
      name: "thank you",
      isMatch: () => /\/resources\/thank-you/.test(window.location.pathname),
      interaction: {
    name: "[Public]Viewing - Request Thank You",
    },
    }, 
    
      {
      name: "request thank you",
      isMatch: 
      interaction: {
    name: "[Public]Viewing - Request Thank You",
    },
    },
    
   //  Coverage area pages started here
    
    {
      name: "coverage topics",
      isMatch: () => {
        return (window.location.hostname === "www.insiderintelligence.com" && /\/topics/.test(window.location.href));
        }, 
      interaction: {
         name: SalesforceInteractions.CatalogObjectInteractionName.ViewCatalogObject,
        catalogObject: {
            type: "Category",
            id: () =>
              SalesforceInteractions.mcis
                .getLastPathComponentWithoutExtension(window.location.pathname)
                .toLowerCase(),
            attributes: {
                url: SalesforceInteractions.resolvers.fromCanonical(),
                name: Evergage.cashDom("meta[property='og:title']").attr('content')
            }
        }
      }
    },   
    

    // Profiles Content Started here
    {
      name: "profile",
      interaction: {
          name: () => {
              let articleName = Evergage.cashDom('h5[class*="Profile__StyledName-sc-2djxw4-7 cwXNJM"]')[0].innerText;
              return `[Public]Viewing - ${articleName} Profile`;
          }
      },
      isMatch: () => {
          return (/\/analysts/.test(window.location.pathname));
      }   
    },

    // Author Content Started here

    {
      name: "author",
      interaction: {
          name: () => {
              let articleName = Evergage.cashDom('[class*="headline-3xl lg:headline-4xl xl:headline-5xl text-ii-black leading-tight mb-1 xl:mb-2"]')[0].innerText;
              return `[Public]Viewing - ${articleName} Profile`;
          }
      },
      isMatch: () => {
          return (/\/author/.test(window.location.pathname));
      }   
    },

    // Coverage Content started here

    {
    name: "coverage",
    interaction: {
        name: () => {
            let articleName = Evergage.cashDom('[class*="leading-tight"]')[0].innerText;
            return `[Public]Viewing - ${articleName}`;
        }
    },
    isMatch: () => {
        return (/\/coverage/.test(window.location.pathname));
    }   
  },

    // Products Content Started here

    {
      name: "products",
      interaction: {
          name: () => {
              let articleName = Evergage.cashDom('h1[class*="leading-tight"]')[0].innerText;
              return `[Public]Viewing - ${articleName}`;
          }
      },
      isMatch: () => {
          return (/\/products/.test(window.location.pathname));
      }   
    },
    
    // Subject pages started here
    
    {
      name: "subject",
      interaction: {
          name: () => {
              let articleName = Evergage.cashDom('h1[class*="xl:headline-5xl"]')[0].innerText;
              return `[Public]Viewing - Subject ${articleName}`;
          }
      },
      isMatch: () => {
          return (/\/subject/.test(window.location.pathname));
      }   
  },

    // Topics started here
    
    {
      name: "category topic",
      interaction: {
          name: () => {
              let articleName = Evergage.cashDom('h1[class*="hETYhm"]')[0].innerText;
              return `[Public]Viewing - ${articleName}`;
          }
      },
      isMatch: () => {
          return (window.location.pathname.split("/")[2] == 'category');
      }   
    },

    {
      name: "industry topic",
      interaction: {
          name: () => {
              let articleName = Evergage.cashDom('h1[class*="jFJgHr"]')[0].innerText;
              return `[Public]Viewing - ${articleName}`;
          }
      },
      isMatch: () => {
          return (window.location.pathname.split("/")[2] == 'industry');
      }   
    },
    
    {
      name: "articles",
      interaction: {
          name: () => {
              let articleName = Evergage.cashDom('h1[class*="cokOLm"]')[0].innerText;
              return `[Public]Viewing - ${articleName} Articles`;
          }
      },
      isMatch: () => {
          return (window.location.pathname.split("/")[1] == 'articles');
      }   
    },

{
  name: "topics-topic",
  interaction: {
      name: () => {
          let articleName = Evergage.cashDom('h1[class*="jFJgHr"]')[0].innerText;
          return `[Public]Viewing - ${articleName}`;
      }
  },
  isMatch: () => {
      return (window.location.pathname.split("/")[2] == 'topic');
  }   
},

    // Insights Content Started here
    {
      name: "insights",
      interaction: {
          name: () => {
              let articleName = Evergage.cashDom('h1[class*="xl:headline-5xl"]')[0].innerText;
              return `[Public]Viewing - ${articleName}`;
          }
      },
      isMatch: () => {
          return (/\/insights/.test(window.location.pathname));
      }   
  },


    // Social Content started here
    
  {
      name: "content",
      interaction: {
          name: () => {
              let articleName = Evergage.cashDom('h1[class*="page-title_title spec_article_title"]')[0].innerText;
              return `[Public]Viewing - ${articleName} Article`;
          }
      },
      isMatch: () => {
          return (/\/content/.test(window.location.pathname));
      },
      listeners: [
        Evergage.listener("click", ".-email", () =>{
          let articleName = Evergage.cashDom('h1[class*="page-title_title spec_article_title"]')[0].innerText;
          Evergage.sendEvent({
            action: `[Public]Clicked Email Share - ${articleName}`
          });
        }),
        Evergage.listener("click", ".-linkedin", () =>{
          let articleName = Evergage.cashDom('h1[class*="page-title_title spec_article_title"]')[0].innerText;
          Evergage.sendEvent({
            action: `[Public]Clicked LinkedIn Share - ${articleName}`
          });
        }),
        Evergage.listener("click", ".-twitter", () =>{
          let articleName = Evergage.cashDom('h1[class*="page-title_title spec_article_title"]')[0].innerText;
          Evergage.sendEvent({
            action: `[Public]Clicked Twitter Share - ${articleName}`
          });
        }),
        Evergage.listener("click", ".-facebook", () =>{
          let articleName = Evergage.cashDom('h1[class*="page-title_title spec_article_title"]')[0].innerText;
          Evergage.sendEvent({
            action: `[Public]Clicked Facebook Share - ${articleName}`
          });
        }),
      ]
      
  },

    
    // Charts Content Started here

{
  name: "chart",
  interaction: {
      name: () => {
          let articleName = Evergage.cashDom('[class*="eGBtBJ"]')[0].innerText;
          return `[Public]Viewing - ${articleName}`;
      }
  },
  isMatch: () => {
      return (/\/chart/.test(window.location.pathname));
  }, 
  listeners: [
    Evergage.listener("click", ".hvHRlw", () =>{
      let articleName = Evergage.cashDom('[class*="eGBtBJ"]')[0].innerText;
      Evergage.sendEvent({
        action: `[Public]Clicked Email Share - ${articleName}`
      });
    }),
    Evergage.listener("click", ".fBMfQV", () =>{
      let articleName = Evergage.cashDom('[class*="eGBtBJ"]')[0].innerText;
      Evergage.sendEvent({
        action: `[Public]Clicked LinkedIn Share - ${articleName}`
      });
    }),
    Evergage.listener("click", ".la-dwYB", () =>{
      let articleName = Evergage.cashDom('[class*="eGBtBJ"]')[0].innerText;
      Evergage.sendEvent({
        action: `[Public]Clicked Twitter Share - ${articleName}`
      });
    }),
    Evergage.listener("click", ".iuyjnv", () =>{
      let articleName = Evergage.cashDom('[class*="eGBtBJ"]')[0].innerText;
      Evergage.sendEvent({
        action: `[Public]Clicked Facebook Share - ${articleName}`
      });
    }),
  ]  
}, 

    // Resource Content Started here

    {
      name: "resources",
      interaction: {
          name: () => {
              let articleName = Evergage.cashDom('h1[class*="leading-tight text-ii-white"]')[0].innerText;
              return `[Public]Viewing Resource: ${articleName}`;
          }
      },
      isMatch: () => {
          return (/\/resources/.test(window.location.pathname));
      }   
  }, 
  
    // Articles Content Started here

    {
      name: "articles",
      interaction: {
          name: () => {
              let articleName = Evergage.cashDom('h1[class*="SectionHeading__Header-zvcpsm-1 cokOLm"]')[0].innerText;
              return `[Public]Viewing - ${articleName}`;
          }
      },
      isMatch: () => {
          return (window.location.pathname.split("/")[2] == 'topics');
      }   
  },

    {
      name: "industries",
      interaction: {
          name: () => {
              let articleName = Evergage.cashDom('h1[class*="SectionHeading__Header-zvcpsm-1 cokOLm"]')[0].innerText;
              return `[Public]Viewing - ${articleName}`;
          }
      },
      isMatch: () => {
          return (window.location.pathname.split("/")[2] == 'industries');
      }   
  },


    // Industry Content Started here

    {
      name: "industry",
      interaction: {
          name: () => {
              let articleName = Evergage.cashDom('h1[class*="headline-3xl text-center text-ii-black w-full mb-4 mx-auto md:headline-4xl lg:w-2/3 xl:headline-5xl"]')[0].innerText;
              return `[Public]Viewing - ${articleName}`;
          }
      },
      isMatch: () => {
          return (/\/industry/.test(window.location.pathname));
      }   
  },

    // Forecast Content started here
    
     {
      name: "forecasts topics",
      interaction: {
          name: () => {
            let articleName = SalesforceInteractions.resolvers.fromSelector("#__next > div.Layout__LayoutWrapper-di12cp-0.gFhxjs > div > div.Navigationstyled__NavContainer-sc-1axtyns-0.asxPI > div > div.Navigationstyled__NavTriggerLeft-sc-1axtyns-2.iMXZhO > span:nth-child(3)")();
            return `[Public]Viewing Forecasts ${articleName}`;
          }
      },
      isMatch: () => {
        let hostname = window.location.hostname;
        let pathname = window.location.pathname;
        if(window.location.hostname === "www.insiderintelligence.com" && /\/forecasts/.test(window.location.pathname)) {
          return true;
        }
        return false;
      }   
   }, 

    // Data Metrics Content started here
    
    {
      name: "Data Metrics",
      interaction: {
          name: () => {
              let articleName = Evergage.cashDom('h1[class*="leading-tight"]')[0].innerText;
              return `[Public]Data Metric: ${articleName}`;
          }
      },
      isMatch: () => {
          return(/\/data-metrics/.test(window.location.pathname))
      }   
  },

    // Data Providers Content started here
    
    {
      name: "data providers",
      interaction: {
          name: () => {
              let articleName = Evergage.cashDom('h1[class*="leading-tight"]')[0].innerText;
              return `[Public]Viewing - ${articleName}`;
          }
      },
      isMatch: () => {
          return (/\/data-providers/.test(window.location.pathname));
      }   
  },

    ]
    };
    handleSPAPageChange() 
    SalesforceInteractions.initSitemap(sitemapConfig); // Initializes the Sitemap
    console.log("Confirmation of Public Sitemap Initialization");
  });
}

  //subscriber facing sitemap

  else if(/([a-z0-9]+[.])emarketer[.]com/.test(currentDomain)) {
    SalesforceInteractions.init({
      // Initializes the Personalization module of the Salesforce Interactions SDK
      cookieDomain: "emarketer.com",
    }).then(() => {
      

      const sitemapConfig = {
        // Sitemap configuration object
        global: {
            onActionEvent: (actionEvent) => {
                const email = SalesforceInteractions.cashDom(".user-menu__account-info .name").text()
                if(email) {
                    console.log("hit email if")
                    actionEvent.user = actionEvent.user || {};
                    actionEvent.user.attributes = actionEvent.user.attributes || {};
                    actionEvent.user.attributes.emailAddress = email;                    
                }
                console.log("action event subscriber: ", actionEvent)
                return actionEvent;
              },
        },   
      pageTypeDefault: {
        name: "default",
        interaction: {
          name: "Default Page",
        },
      },
      
        pageTypes: [
            
          {
              name: "Subscriber Homepage",
              isMatch: () => {
                if (/pro-na1.emarketer.com/.test(window.location.href)) {
                    return SalesforceInteractions.DisplayUtils.pageElementLoaded(".user-menu__account-info .name").then(;
                } 
              },
            //   onActionEvent: (actionEvent) => {
            //     const email = SalesforceInteractions.cashDom(".user-menu__account-info .name").text()
            //     if(email) {
            //         console.log("hit email if")
            //         actionEvent.user = actionEvent.user || {};
            //         actionEvent.user.attributes = actionEvent.user.attributes || {};
            //         actionEvent.user.attributes.emailAddress = email;                    
            //     }
            //     return actionEvent;
            //   },
              interaction: {
                name: "[Subscriber]Viewing - Subcriber Homepage",
              },
              listeners: [
                SalesforceInteractions.listener("submit", "#login", () => {
                  const email = SalesforceInteractions.cashDom("#Email").val()
                  if(email) {
                    SalesforceInteractions.sendEvent({
                      interaction: {
                        name: 'User Logged In',
                      },
                      user: {
                        attributes: {
                          emailAddress: email
                        }
                      }
                    })
                  }
                })
              ]
          },
          
          {
              name: "login page",
              isMatch: () => /subscriptions.emarketer.com/.test(window.location.href),
              interaction: {
                name: "[Subscriber]Viewing - Login",
              },
              listeners: [
                SalesforceInteractions.listener("submit", "#login", () => {
                  const email = SalesforceInteractions.cashDom("#Email").val()
                  if(email) {
                    SalesforceInteractions.sendEvent({
                      interaction: {
                        name: 'User Logged In',
                      },
                      user: {
                        attributes: {
                          emailAddress: email
                        }
                      }
                    })
                  }
                })
              ]
          },
          
          {
              name: "login page",
              isMatch: () => /subscriptions-na1.emarketer.com/.test(window.location.href),
              interaction: {
                name: "[Subscriber]Viewing - Login",
              },
          },
          
          {
              name: "forgot password",
              isMatch: () => /iforgot.emarketer.com/.test(window.location.href),
              interaction: {
                name: "[Subscriber]Viewing - Reset Password",
              },
          },

          {
              name: "origin-articles",
              isMatch: () => /origin-articles-na1.emarketer.com/.test(window.location.hostname),
              interaction: {
                name: "[Subscriber]Viewing - Trending Articles",
              },
          },          

          
          {
              name: "archive",
              isMatch: () => /articles-na1.emarketer.com\/archive/.test(window.location.href),
              interaction: {
                name: "[Subscriber]Viewing - Article Archive",
              },
          },
          
          {
            name: "search",
            isMatch: () => /search1-na1.emarketer.com/.test(window.location.href),
            interaction: {
              name: () => {
                let trimmed = window.location.search.replace(/^\?query=/i, ''); // remove "?query=" from the beginning
                let withoutSortBy = trimmed.replace(/&sortBy=.*/i, ''); // remove "&sortBy=" and everything after it
                let decoded = decodeURIComponent(withoutSortBy); // decode URL-encoded characters
                let words = decoded.split('%20'); // split into individual words
                let capitalized = words.map(word => word.charAt(0).toUpperCase() + word.slice(1)); // capitalize first letter of each word
                let searchName = capitalized.join(' ')
                return `[Subscriber]Search - ${searchName}`
              }
            },
          },
          
       // Thesaurus pages started here
       
            {
              name: "Glossary",
              isMatch: () => (/\/totalaccess.emarketer.com\/thesaurus.aspx/.test(window.location.href)),
              interaction: {
                name: "[Subscriber]Viewing - Glossary",
              },
          },

          
        {
          name: "thesaurus",
          interaction: {
             name: () => {
          let articleName = Evergage.cashDom('[class*="big_black_text"]')[0].innerText;
          return `[Subscriber]Viewing - ${articleName}`;
         }
        },
         isMatch: () => {
         return (window.location.hostname === "totalaccess.emarketer.com" && /\/Thesaurus.aspx/.test(window.location.href));
         }   
      },
          
       // User profile pages started here
       //TODO: scrape user profile
          
          {
              name: "my profile",
              isMatch: () => {
                return (window.location.hostname === "totalaccess.emarketer.com" && /\/myaccount\/editprofile\.aspx/i.test(window.location.href))
              },
              interaction: {
                name: "[Subscriber]Viewing - My Profile",
              },
              listeners: [
                {
                  event: 'load',
                  handler: 
                },
              ],
          },
          {
            name: "my alerts",
            isMatch: 
            interaction: {
              name: "[Subscriber]Viewing - My Custom Alerts",
            },
          },
          
          {
              name: "contact-us",
              isMatch: () => /totalaccess.emarketer.com\/Contact.aspx/.test(window.location.href),
              interaction: {
                name: "[Subscriber]Viewing - Contact Us",
              },
          },
          
  
        // Industry KPIs content started here

{
  name: "industry KPI home",
  interaction: {
       name: "[Subscriber]Viewing - Industry KPIs"
   },
   isMatch: () => {
          let hostname = window.location.hostname;
          let pathname = window.location.pathname;
          if(hostname === 'industry-kpis-na1.emarketer.com' && pathname === '/') {
            return true;
          }
          return false;
      }   
  },
  

  
      {
  name: "industry KPI results",
  interaction: {
      name: () => {
          let articleName = Evergage.cashDom("meta[property='og:title']").last().attr("content");
          return `[Subscriber]Viewing - ${articleName}`;
      }
  },
  isMatch: () => {
      return (/\/industry-kpis-na1.emarketer.com/.test(window.location.href));
        }
},
  
    // Profiles Content Started here
  
    {
      name: "analyst",
      interaction: {
          name: () => {
              let articleName = Evergage.cashDom('h5[class*="Profile__StyledName-sc-2djxw4-7 cwXNJM"]')[0].innerText;
              return `[Subscriber]Viewing - ${articleName} Profile`;
          }
      },
      isMatch: () => {
          return (/\/analysts-na1.emarketer.com/.test(window.location.href));
      }   
    },
  
        // Topics Category Content Started here
  
    {
          name: "topics-na1",
          // interaction: {
          //     name: () => {
          //         let pathArr = window.location.pathname.split('/').filter(stringUrl => stringUrl != '');
          //         let industryName = pathArr[1].toUpperCase();
          //         return `[Subscriber]Viewing Topics in ${industryName}`;
          //     }
          // },
          interaction: {
            name: SalesforceInteractions.CatalogObjectInteractionName.ViewCatalogObject,
           catalogObject: {
               type: "Category",
               id: () =>
                 SalesforceInteractions.mcis
                   .getLastPathComponentWithoutExtension(window.location.pathname)
                   .toUpperCase(),
               attributes: {
                   url: SalesforceInteractions.resolvers.fromCanonical(),
                   name: Evergage.cashDom("meta[property='og:title']").attr('content')
               }
           }
          },
          isMatch: () => {
              let pathArr = window.location.pathname.split('/').filter(stringUrl => stringUrl != '');
              if(pathArr[0] === 'category') {
                return true;
              }
              return false;
          }   
        },
          
        // Topic Content Started here
        
        {
        name: "topics home",
        interaction: {
            name: "[Subscriber]Viewing - Topics Home"
        },
        isMatch: () => {
                return (window.location.hostname === "topics-na1.emarketer.com" && window.location.pathname ==='/');
            }   
        },
        
         {
         name: "articles home",
         interaction: {
              name: () => {
                 let articleName = Evergage.cashDom('h1[class*="cokOLm"]')[0].innerText;
                 return `[Subscriber]Viewing - ${articleName} Articles`;
              }
          },
          isMatch: () => {
                 return (window.location.hostname === "articles-na1.emarketer.com");
             }   
         },
        
        {
          name: "industry-topics",
          interaction: {
              name: () => {
                  let pathArr = window.location.pathname.split('/').filter(stringUrl => stringUrl != '');
                  let industryName = pathArr[1].toUpperCase();
                  return `[Subscriber]Viewing Topics in ${industryName}`;
              }
          },
          isMatch: () => {
              let pathArr = window.location.pathname.split('/').filter(stringUrl => stringUrl != '');
              if(pathArr[0] === 'industry') {
                return true;
              }
              return false;
          }   
        }, 
        
          {
          name: "topic-na1-topic",
          interaction: {
              name: () => {
                  let pathArr = window.location.pathname.split('/').filter(stringUrl => stringUrl != '');
                  let industryName = pathArr[1].toUpperCase();
                  return `[Subscriber]Viewing Topics in ${industryName}`;
              }
          },
          isMatch: () => {
              let pathArr = window.location.pathname.split('/').filter(;
              if(pathArr[0] === 'topic') {
                return true;
              }
              return false;
          }   
        }, 
   {
    name: "articles-na1-topics",
     interaction: {
         name: () => {
             let articleName = Evergage.cashDom('h1[class*="SectionHeading__Header-zvcpsm-1 cokOLm"]')[0].innerText;
             return `[Subscriber]Viewing - ${articleName}`;
         }
    },
     isMatch: () => {
       return (/\/articles-na1.emarketer.com\/topics/.test(window.location.href));
     }   
     }, 

   {
    name: "articles-na1-videos",
     interaction: {
         name: () => {
             let articleName = Evergage.cashDom('h1[class*="SectionHeading__Header-zvcpsm-1 cokOLm"]')[0].innerText;
             return `[Subscriber]Viewing - ${articleName}`;
         }
    },
     isMatch: () => {
       return (/\/articles-na1.emarketer.com\/videos/.test(window.location.href));
     }   
     }, 

   {
    name: "articles-na1-industries",
     interaction: {
         name: () => {
             let articleName = Evergage.cashDom('h1[class*="SectionHeading__Header-zvcpsm-1 cokOLm"]')[0].innerText;
             return `[Subscriber]Viewing - ${articleName}`;
         }
    },
     isMatch: () => {
       return (/\/articles-na1.emarketer.com\/industries/.test(window.location.href));
     }   
     },
  
  
       // chart Content started here
       
     {
   name: "chart-na1",
    interaction: {
        name: () => {
            let articleName = Evergage.cashDom('h1[class*="gpjkwM"]')[0].innerText;
            return `[Subscriber]Viewing - ${articleName}`;
        }
   },
    isMatch: () => {
      return (/\/chart-na1.emarketer.com/.test(window.location.href));
    },
    listeners: [
        Evergage.listener("click", "#widget-file-jpeg", () =>{
        let articleName = Evergage.cashDom('[class*="gpjkwM"]')[0].innerText;
        Evergage.sendEvent({
          action: `[Subscriber]Clicked JPG Button - ${articleName}`
        });
      }),
        Evergage.listener("click", "#widget-file-png", () =>{
        let articleName = Evergage.cashDom('[class*="gpjkwM"]')[0].innerText;
        Evergage.sendEvent({
          action: `[Subscriber]Clicked PNG Button - ${articleName}`
        });
      }),
        Evergage.listener("click", "#widget-file-xls", () =>{
        let articleName = Evergage.cashDom('[class*="gpjkwM"]')[0].innerText;
        Evergage.sendEvent({
          action: `[Subscriber]Download XLS: ${articleName}`
        });
      }),
        Evergage.listener("click", "#widget-file-pdf", () =>{
        let articleName = Evergage.cashDom('[class*="gpjkwM"]')[0].innerText;
        Evergage.sendEvent({
          action: `[Subscriber]Download PDF: ${articleName}`
        });
      }),
        Evergage.listener("click", ".dZblqG", () =>{
        let articleName = Evergage.cashDom('[class*="gpjkwM"]')[0].innerText;
        Evergage.sendEvent({
          action: `[Subscriber]Clicked Get Alerts - ${articleName}`
        });
      }),
      Evergage.listener("click", ".gFwbLt", () =>{
        let articleName = Evergage.cashDom('[class*="gpjkwM"]')[0].innerText;
        Evergage.sendEvent({
          action: `[Subscriber]Clicked Email Share - ${articleName}`
        });
      }),
      Evergage.listener("click", ".dybsro", () =>{
        let articleName = Evergage.cashDom('[class*="gpjkwM"]')[0].innerText;
        Evergage.sendEvent({
          action: `[Subscriber]Clicked LinkedIn Share - ${articleName}`
        });
      }),
      Evergage.listener("click", ".kOjDjI", () =>{
        let articleName = Evergage.cashDom('[class*="gpjkwM"]')[0].innerText;
        Evergage.sendEvent({
          action: `[Subscriber]Clicked Twitter Share - ${articleName}`
        });
      }),
      Evergage.listener("click", ".fFFZVW", () =>{
        let articleName = Evergage.cashDom('[class*="gpjkwM"]')[0].innerText;
        Evergage.sendEvent({
          action: `[Subscriber]Clicked Facebook Share - ${articleName}`
        });
      }),
    ]  
    }, 
    
{
  name: "chart-na1",
   interaction: {
       name: () => {
           let articleName = Evergage.cashDom('h1[class*="gpjkwM"]')[0].innerText;
           return `[Subscriber]Viewing - ${articleName}`;
       }
  },
   isMatch: () => {
     return (/\/chart-na1.emarketer.com\/c/.test(window.location.href));
  },
    listeners: [
        Evergage.listener("click", ".dZblqG", () =>{
        let articleName = Evergage.cashDom('[class*="gpjkwM"]')[0].innerText;
        Evergage.sendEvent({
          action: `[Subscriber]Clicked Get Alerts - ${articleName}`
        });
      }),
      Evergage.listener("click", ".gFwbLt", () =>{
        let articleName = Evergage.cashDom('[class*="gpjkwM"]')[0].innerText;
        Evergage.sendEvent({
          action: `[Subscriber]Clicked Email Share - ${articleName}`
        });
      }),
      Evergage.listener("click", ".dybsro", () =>{
        let articleName = Evergage.cashDom('[class*="gpjkwM"]')[0].innerText;
        Evergage.sendEvent({
          action: `[Subscriber]Clicked LinkedIn Share - ${articleName}`
        });
      }),
      Evergage.listener("click", ".kOjDjI", () =>{
        let articleName = Evergage.cashDom('[class*="gpjkwM"]')[0].innerText;
        Evergage.sendEvent({
          action: `[Subscriber]Clicked Twitter Share - ${articleName}`
        });
      }),
      Evergage.listener("click", ".fFFZVW", () =>{
        let articleName = Evergage.cashDom('[class*="gpjkwM"]')[0].innerText;
        Evergage.sendEvent({
          action: `[Subscriber]Clicked Facebook Share - ${articleName}`
        });
      }),
    ]
},
    
    // forecast content started here

{
  name: "forecasts home",
  interaction: {
       name: "[Subscriber]Viewing - Forecasts Home"
   },
   isMatch: () => {
          let hostname = window.location.hostname
          let pathname = window.location.pathname
          if(hostname === 'forecasts-na1.emarketer.com' && pathname === '/') {
            return true;
          }
          return false;
      }   
  },
    
     {
      name: "Industry Forecast",
      interaction: {
          name: () => {
            let articleName = SalesforceInteractions.resolvers.fromSelector("#__next > div.Layout__LayoutWrapper-di12cp-0.gFhxjs > div > div.Navigationstyled__NavContainer-sc-1axtyns-0.kGTMzL > div.Navigationstyled__NavTrigger-sc-1axtyns-2.ktKKKj > button > div > div.sc-LzLwp.dmfijJ.Navigationstyled__NavTriggerLeft-sc-1axtyns-3.iNgvLX > span:nth-child(3)")()
            return `[Subscriber]Viewing Forecasts: ${articleName}`
          }
      },
      isMatch: () => {
        let hostname = window.location.hostname
        let pathname = window.location.pathname
        if(hostname === 'forecasts-na1.emarketer.com' && pathname !== '/') {
          return true;
        }
        return false;
      }   
   },   
  
          
       // Social Content started here
       
{
  name: "content-na1-1",
  interaction: {
      name: () => {
          let articleName = Evergage.cashDom('h1[class*="page-title_title"]')[0].innerText;
          return `[Subscriber]Viewing - ${articleName}`;
      }
  },
  isMatch: () => {
       return window.location.hostname === "content-na1.emarketer.com" && (window.location.href.split("/")[4]);
  }, 
    listeners: [
                Evergage.listener("click", ".jtKLVm", () =>{
        let articleName = Evergage.cashDom('h1[class*="page-title_title"]')[0].innerText;
        Evergage.sendEvent({
          action: `[Subscriber]Clicked Get Alerts - ${articleName}`
        });
      }),
        Evergage.listener("click", ".sc-eTpRJs.dbYYEd", () =>{
        let articleName = Evergage.cashDom('h1[class*="page-title_title"]')[0].innerText;
        Evergage.sendEvent({
          action: `[Subscriber]Clicked Email Share - ${articleName}`
        });
      }),
        Evergage.listener("click", ".sc-eTpRJs.hNCYxJ", () =>{
        let articleName = Evergage.cashDom('h1[class*="page-title_title"]')[0].innerText;
        Evergage.sendEvent({
          action: `[Subscriber]Clicked LinkedIn Share - ${articleName}`
        });
      }),
        Evergage.listener("click", ".sc-eTpRJs.fFYiPU", () =>{
        let articleName = Evergage.cashDom('h1[class*="page-title_title"]')[0].innerText;
        Evergage.sendEvent({
          action: `[Subscriber]Clicked Twitter Share - ${articleName}`
        });
      }),
        Evergage.listener("click", ".sc-eTpRJs.eihwNd", () =>{
        let articleName = Evergage.cashDom('h1[class*="page-title_title"]')[0].innerText;
        Evergage.sendEvent({
          action: `[Subscriber]Clicked Facebook Share - ${articleName}`
        });
      }),
      Evergage.listener("click", "#widget-file-pdf", () =>{
        let articleName = Evergage.cashDom('h1[class*="page-title_title"]')[0].innerText;
        Evergage.sendEvent({
          action: `[Subscriber]Download PDF: ${articleName}`
        });
      }),
      Evergage.listener("click", "#widget-file-pptx", () =>{
        let articleName = Evergage.cashDom('h1[class*="page-title_title"]')[0].innerText;
        Evergage.sendEvent({
          action: `[Subscriber]Download PPT: ${articleName}`
        });
      }),
      Evergage.listener("click", "#widget-file-xlsx", () =>{
        let articleName = Evergage.cashDom('h1[class*="page-title_title"]')[0].innerText;
        Evergage.sendEvent({
          action: `[Subscriber]Download XLS: ${articleName}`
        });
      }),
      
    // Bottom share icons
    
        Evergage.listener("click", ".-email", () =>{
          let articleName = Evergage.cashDom('h1[class*="page-title_title"]')[0].innerText;
          Evergage.sendEvent({
            action: `[Subscriber]Clicked Email Share - ${articleName}`
          });
        }),
        Evergage.listener("click", ".-linkedin", () =>{
          let articleName = Evergage.cashDom('h1[class*="page-title_title"]')[0].innerText;
          Evergage.sendEvent({
            action: `[Subscriber]Clicked LinkedIn Share - ${articleName}`
          });
        }),
        Evergage.listener("click", ".-twitter", () =>{
          let articleName = Evergage.cashDom('h1[class*="page-title_title"]')[0].innerText;
          Evergage.sendEvent({
            action: `[Subscriber]Clicked Twitter Share - ${articleName}`
          });
        }),
        Evergage.listener("click", ".-facebook", () =>{
          let articleName = Evergage.cashDom('h1[class*="page-title_title"]')[0].innerText;
          Evergage.sendEvent({
            action: `[Subscriber]Clicked Facebook Share - ${articleName}`
          });
        })
    ] 
 }, 
   {
    name: "content-na1",
    interaction: {
    name: SalesforceInteractions.CatalogObjectInteractionName.ViewCatalogObject,
    catalogObject: {
       type: "Article",
       id: () => {
            let categoryArray = []
            let elementArray = SalesforceInteractions.cashDom('div[class*="cb-widget-toc_tag"]')
            for(let i=0;i<elementArray.length;i++) {
                categoryArray.push(elementArray[i].innerText.toLowerCase().split(" ").join('-').toUpperCase())
            }
            console.log([categoryArray.join('|')])
           let newId = window.location.pathname.split('/')[1].split('-').join(' ') + " " + "t_"+[categoryArray.join('|')]
           return newId; 
       },
       attributes: {
           url: SalesforceInteractions.resolvers.fromCanonical(),
           name: window.location.pathname.split('/')[1].split('-').join(' ')
       }
   },
   relatedCatalogObjects: {
        Category: SalesforceInteractions.resolvers.fromSelectorMultiple(".cb-widget-toc_tag", (values) => {
            let valArr= (values.map()
            return [valArr.join('|')]
        })
      }
    },
    isMatch: () => {
         return window.location.hostname === "content-na1.emarketer.com" && (window.location.href.split("/")[3]);
    },
    listeners: [
                Evergage.listener("click", ".jtKLVm", () =>{
        let articleName = Evergage.cashDom('h1[class*="page-title_title"]')[0].innerText;
        Evergage.sendEvent({
          action: `[Subscriber]Clicked Get Alerts - ${articleName}`
        });
      }),
        Evergage.listener("click", ".sc-eTpRJs.dbYYEd", () =>{
        let articleName = Evergage.cashDom('h1[class*="page-title_title"]')[0].innerText;
        Evergage.sendEvent({
          action: `[Subscriber]Clicked Email Share - ${articleName}`
        });
      }),
        Evergage.listener("click", ".sc-eTpRJs.hNCYxJ", () =>{
        let articleName = Evergage.cashDom('h1[class*="page-title_title"]')[0].innerText;
        Evergage.sendEvent({
          action: `[Subscriber]Clicked LinkedIn Share - ${articleName}`
        });
      }),
        Evergage.listener("click", ".sc-eTpRJs.fFYiPU", () =>{
        let articleName = Evergage.cashDom('h1[class*="page-title_title"]')[0].innerText;
        Evergage.sendEvent({
          action: `[Subscriber]Clicked Twitter Share - ${articleName}`
        });
      }),
        Evergage.listener("click", ".sc-eTpRJs.eihwNd", () =>{
        let articleName = Evergage.cashDom('h1[class*="page-title_title"]')[0].innerText;
        Evergage.sendEvent({
          action: `[Subscriber]Clicked Facebook Share - ${articleName}`
        });
      }),
      Evergage.listener("click", "#widget-file-pdf", () =>{
        let articleName = Evergage.cashDom('h1[class*="page-title_title"]')[0].innerText;
        Evergage.sendEvent({
          action: `[Subscriber]Download PDF: ${articleName}`
        });
      }),
      Evergage.listener("click", "#widget-file-pptx", () =>{
        let articleName = Evergage.cashDom('h1[class*="page-title_title"]')[0].innerText;
        Evergage.sendEvent({
          action: `[Subscriber]Download PPT: ${articleName}`
        });
      }),
      Evergage.listener("click", "#widget-file-xlsx", () =>{
        let articleName = Evergage.cashDom('h1[class*="page-title_title"]')[0].innerText;
        Evergage.sendEvent({
          action: `[Subscriber]Download XLS: ${articleName}`
        });
      }),
      
    // Bottom share icons
    
        Evergage.listener("click", ".-email", () =>{
          let articleName = Evergage.cashDom('h1[class*="page-title_title"]')[0].innerText;
          Evergage.sendEvent({
            action: `[Subscriber]Clicked Email Share - ${articleName}`
          });
        }),
        Evergage.listener("click", ".-linkedin", () =>{
          let articleName = Evergage.cashDom('h1[class*="page-title_title"]')[0].innerText;
          Evergage.sendEvent({
            action: `[Subscriber]Clicked LinkedIn Share - ${articleName}`
          });
        }),
        Evergage.listener("click", ".-twitter", () =>{
          let articleName = Evergage.cashDom('h1[class*="page-title_title"]')[0].innerText;
          Evergage.sendEvent({
            action: `[Subscriber]Clicked Twitter Share - ${articleName}`
          });
        }),
        Evergage.listener("click", ".-facebook", () =>{
          let articleName = Evergage.cashDom('h1[class*="page-title_title"]')[0].innerText;
          Evergage.sendEvent({
            action: `[Subscriber]Clicked Facebook Share - ${articleName}`
          });
        })
    ] 
   }, 
      ]
      };
      handleSPAPageChange()
      SalesforceInteractions.initSitemap(sitemapConfig); // Initializes the Sitemap
      console.log("Confirmation of Subscriber Sitemap Intialization");
    });
  }
} catch (e) {
    if (typeof window.Evergage === "object" && typeof window.Evergage.getVersion === "function" && window.Evergage.getVersion() >= 5) {
          console.error("siteWideJavascriptError" + e);    }
};


}