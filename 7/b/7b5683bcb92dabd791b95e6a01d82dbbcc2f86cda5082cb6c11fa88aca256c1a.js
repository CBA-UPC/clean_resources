/*
{
  has_cmp,
  bex_base,
  ce_source,
  collector,
  blockSend,
  user_id,
  override_user,
  redirect,
  profile: {country,city,region,lat,lng,asn,ip,model,device},
  routes: [['renderCE',true],[],..]
}
*/
(function(opt) {

  'function'==typeof window.contentExchangeLoad 
   ? window.contentExchangeLoad(opt.routes) 
   : (function(w,doc) {

// routes = JSON bundle of routes/tasks = all Bex routes + scraper + generic CE
// bundle/load modules - import or folded-in ? - funnels/transactions, retargeting, rendering, scraper, ads

// wait for / check tcf
//   settle identity - 3pty cookie reflected iff exists
//   report pageview
// finally
//   start executor queue == contentExchangeLoad(routes)
//     render CE widgets - individual or bundeled calls
//     render BEX routes - individual or bundeled calls

  var DEBUG = 1;
  var dolog = DEBUG ? function() {console.log.apply(null,['[BeX Tracking]'].concat([].slice.call(arguments)))} : function(){}

  var is_frame = w!=top,
      cx = w._contentExchange = w._contentExchange || {is_frame:is_frame,start:Date.now(),widget:{}},
      body = doc.body,
      bex_base = opt.bex_base,
      _bex_retargeting = {},
      bextag = window.bextag = window.bextag || {},
      bexTracking = bextag.tracking = bextag.tracking || {},
      trackingData = {
          transactionItems: {},
          funnelId: null,
          campaignName: null,
          passedData: {}
      },
      log = dolog,
      pixelData = {
        sentTo: {}  
      },
      tracker_loaded = false;

// utility functions
  
  var perf = (typeof performance !== 'undefined' && typeof performance.now === 'function') || false,
      guid = function() {return 'bex'+Math.random().toString(36).substr(2)},
      uuid = function uuid() {
        var d = Date.now();
        if (perf) d += performance.now();
        return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
            var r = (d + Math.random() * 16) % 16 | 0;
            d = Math.floor(d / 16);
            return (c === 'x' ? r : (r & 0x3 | 0x8)).toString(16);
        });
      },
      IsNoP = function IsNoP(value) {
        return (value === undefined || value === null);
      },
      shuffle = function shuffle(arr, size) {
        var shuffled = [], index;
        while (arr.length>0 && shuffled.length<size) {
            index = Math.floor(arr.length * Math.random());
            shuffled.push(arr[index]);
            arr.splice(index,1);
        }
        return shuffled;
      },
      getCookie = function (name) {
        var item = document.cookie
                   .split('; ')
                   .find( function(row) { return row.indexOf(name + "=")===0 } ),
            value = item && item.split('=')[1] || false;
        return value;
      },
      sendPixel = function sendPixel(url,cb) {
        var pixelImg = document.createElement('img');
        if (!!cb) pixelImg.onload = cb;
        pixelImg.setAttribute('src',url);
      },
      send = function send(ev,data,cb) {
        var url = opt.collector,
            qs = ['event='+ev];
        if (opt.blockSend) qs.push('internal=1')
        qs.push('gdpr='+cx.gdpr)
        if (cx.tcdata && cx.tcdata.gdprApplies) qs.push('gdpr_consent='+cx.tcdata.tcString)
        Object.keys(data).forEach( function(k) {qs.push( k+'='+encodeURIComponent(data[k]) );} );
        url += '?'+qs.join('&');
        //dolog('sending',qs);
        sendPixel(url,cb);
      },
      store_get = function (key) { return JSON.parse(localStorage.getItem('_bex_data'))[key] },
		  store_set = function (key,data) {
		    var bexdata = JSON.parse(localStorage.getItem('_bex_data'))
		    bexdata[key] = data
		    localStorage.setItem('_bex_data',JSON.stringify(bexdata))
		  },
		  ref = is_frame ? 'iframe' : doc.referrer || 'direct',
      url = is_frame ? doc.referrer : w.location.href,
      test_purpose = function(required) {
        var tc = cx.tcdata
        if (!tc || !tc.gdprApplies) return true; 
        var test = true; 
        for (var r of required) {test = test && tc.purpose.consents[r]}; 
        return test
      },
      b64EncodeUnicode = function(str) {
        // first we use encodeURIComponent to get percent-encoded UTF-8,
        // then we convert the percent encodings into raw bytes which
        // can be fed into btoa.
        return btoa(encodeURIComponent(str).replace(/%([0-9A-F]{2})/g,
            function toSolidBytes(match, p1) {
                return String.fromCharCode('0x' + p1);
        }));
      };

cx.url = url
cx.ref = ref


    ///////////////////////////////////////////
    //
    // FrameStore object
    //
    //////////////////////////////////////////


    function FrameStore() {
      var frameStore = false

      function handle(call_id) {
        return new Promise( (resolve,reject) => {
          var handler = (function(call_id) {
            return function(e) {
              //console.log('handle',e.data)
              var {id,result,error} = e.data
              if (call_id!=id) return console.log('mismatched ids',call_id,id)
              if (error) {
                console.log('error',id,error)
                resolve({error})
              } else {
                console.log('result',id,result)
                resolve(result)
              }
              window.removeEventListener('message',handler)
            }
          })(call_id)
          window.addEventListener('message',handler)
        })
      }
    
      Object.defineProperty(this, 'active', { get: function() { return !!frameStore } });
                 
      this.setItem = function setItem(name,value) {
        var id = guid();
        frameStore.postMessage({id,action:'set',name,value},'*')
        return value 
      }
      this.getItem = async function getItem(name) {
        var id = guid();
        frameStore.postMessage({id,action:'get',name},'*')
        return handle(id)
      }


      this.init = async function init(src) {
      //link already open
        src = src || bex_base+"/storage.html";

        if (!!frameStore) return this
      //intializes cross-domain storage
        var id = guid(),
            frame = document.createElement('iframe')
        frame.src = src
        frame.style.display = 'none'
        document.body.appendChild(frame)
        frame.onload = function(e) {
          frameStore = frame.contentWindow
          frameStore.postMessage({id,action:'init'},'*')
        }
        var result = await handle(id) 
console.log('init result',result)
        if (result.error) {
          document.body.removeChild(frame)
          frameStore = false
          return Promise.reject(result.error)
        }
        return Promise.resolve(this)
      }
      
      //this.init()
    }
    
    bexTracking.frameStore = new FrameStore()
    
    ///////////////////////////////////////////
    //
    // re-targeting
    //
    //////////////////////////////////////////    
    
    bexTracking.addRetarget = function addRetarget(domain,cat_name,url,maks_items) {
      var rtg = _bex_retargeting,
          lrtg = rtg[domain] = rtg[domain] || {},
          crtg = lrtg[cat_name] = lrtg[cat_name] || [];

      crtg = crtg.filter( function(item) { 
          console.log('EQ?',item.item,url)
          return item.item!=url 
      })
      crtg.push({item:url,ts:new Date()})
      while (crtg.length>maks_items) crtg.shift()

      lrtg[cat_name] = crtg

      localStorage.setItem('_bex_retargeting',JSON.stringify(rtg))
      if (!bexTracking.frameStore.active) return
      bexTracking.frameStore.setItem('_bex_retargeting',rtg)
    } 
    
    bexTracking.delRetarget = function delRetarget(domain) {
      var rtg = _bex_retargeting;
      
      delete rtg[domain];

      localStorage.setItem('_bex_retargeting',JSON.stringify(rtg))
      if (!bexTracking.frameStore.active) return
      bexTracking.frameStore.setItem('_bex_retargeting',rtg)
    }

    bexTracking.getRetarget = function getRetarget() { return _bex_retargeting }


    ///////////////////////////////////////////
    //
    // 3rd party tracking pixel implementations
    //
    //////////////////////////////////////////

    function sendTwitterPixel(pixelId, properties) {
        if (!pixelId) return;

        // Create the initial variables
        var url = 'https://analytics.twitter.com/i/adsct?type=javascript&version=1.1.0&p_id=Twitter&p_user_id=0';
        var urlParams = '&txn_id=' + encodeURIComponent(pixelId);

        // Build the custom property url params
        if (properties) {
            if (!properties.hasOwnProperty('tw_sale_amount'))
                properties.tw_sale_amount = 0;
            if (!properties.hasOwnProperty('tw_order_quantity'))
                properties.tw_order_quantity = 0;

            // Build up all the custom properties
            for (let propertyName in properties)
                if (properties[propertyName])
                    urlParams += '&' + encodeURIComponent(propertyName) + '=' + encodeURIComponent(properties[propertyName]);
        } else urlParams += '&tw_sale_amount=0&tw_order_quantity=0';

        // Finalize static parameters
        urlParams += '&tw_iframe_status=0';
        urlParams += '&tw_document_href=' + encodeURIComponent(location.href);

        // Send pixel
        sendPixel(url + urlParams)
    }

    function sendFacebookPixel(pixelId, name) {
        if (!pixelId) return;

        // Create the initial variables
        var url = 'https://www.facebook.com/tr/?id=' + pixelId;
        var urlParams = '&ev=' + encodeURIComponent(name);

        // Add static parameters
        urlParams += '&noscript=1';

        // Add custom properties
        /*if (properties) {
            for (let propertyName in properties) {
                let property = properties[propertyName];

                if (Array.isArray(property)) {
                    if (property.length < 1) continue;

                    for (i = 0; i < property.length; i++) {
                        property[i] = (property[i] + '').replace(/^\s+|\s+$/gi, '').replace(/\s+/gi, ' ').replace(/,/gi, '§');
                        urlParams += '&cd[' + propertyName + ']=' + encodeURIComponent(property.join(',').replace(/^/gi, '[\'').replace(/$/gi, '\']').replace(/,/gi, '\',\'').replace(/§/gi, '\,'))
                    }
                }
                else if (typeof property === 'string')
                    urlParams += '&cd[' + propertyName + ']=' + encodeURIComponent(property);
            }
        }*/

        // Send pixel
        sendPixel(url + urlParams)
    }

    function sendLinkedInPixel(partnerId) {
        if (!partnerId) return;

        // Send pixel
        sendPixel('https://px.ads.linkedin.com/collect/?pid=' + partnerId + '&fmt=gif')
    }

    var hasSetGA = {}, gaNum = 0;
    // Setup analytics
    if (!window.dataLayer) {
        let gtagScript = document.createElement('script');
        gtagScript.src = 'https://www.googletagmanager.com/gtag/js';
        document.head.appendChild(gtagScript);
        log('Created custom gtag script');
    }
    function sendGoogleAnalytics(pixelId, name, id) {
        if (!pixelId || !name || !id) return;

        if(!hasSetGA[pixelId]) {
            gaNum++;
            hasSetGA[pixelId] = 'bexTracker'+gaNum;
            ga('create', pixelId, 'auto', hasSetGA[pixelId]);
        }

        ga(hasSetGA[pixelId]+'.send', 'event', 'BeXEvent', name, id, {nonInteraction:true});
    }

    //API sendTag
    bexTracking.sendTag = function (name, id, idList = {}, opt = {}) {
        if (IsNoP(name) || typeof name !== 'string')
            throw 'No tag name provided or is of an invalid type';
        if (IsNoP(id) || typeof id !== 'string')
            throw 'No ID for tag provided or is of an invalid type';
        log('Calling sendTag with argument list', arguments);

        // The sentList can be used to verify if we have already sent this ID to the given provider
        const sentList = pixelData.sentTo[id] = pixelData.sentTo[id] || [];

        // Send tag events to bex
        const idNameBex = 'BEX_' + id;
        if(!sentList.includes(idNameBex)) {
          if(idList['bex']) {
            bexEvent('route_tag', {
                tag: name,
                tag_id: id,
                customer: idList['bex']
            });
          }
          sendConversion(opt);
          sentList.push(idNameBex);
        }

        // Send tag events to the site
        const idNameFacebook = 'FACEBOOK_' + id + '-' + idList['facebook'];
        if(idList['facebook'] && !sentList.includes(idNameFacebook)) {
            sendFacebookPixel(idList['facebook'], name);
            sentList.push(idNameFacebook);
        }
        const idNameGoogle = 'GOOGLE_' + id + '-' + idList['google'];
        if(window.ga && idList['google'] && !sentList.includes(idNameGoogle)) {
            sendGoogleAnalytics(idList['google'], name, id);
            sentList.push(idNameGoogle);
        }
        savePixelData();
        log('All tags successfully sent!',idList);
    }


    // Handle data storage
    function setItem(name, value) {
        if (!name || !value) return;

        if (typeof value !== 'string')
            value = JSON.stringify(value);
        sessionStorage.setItem(name, value);
    }
    function getItem(name) {
        if (!name) return null;

        let value = sessionStorage.getItem(name);

        if (value) {
            try { value = JSON.parse(value); }
            catch (err) { }
        }
        return value;
    }

    // Handle permanant data storage
    function setPermItem(name, value) {
        if (!name || !value) return;

        if (typeof value !== 'string')
            value = JSON.stringify(value);
        localStorage.setItem(name, value);
    }
    function getPermItem(name) {
        if (!name) return null;

        let value = localStorage.getItem(name);

        if (value) {
            try { value = JSON.parse(value); }
            catch (err) { }
        }
        return value;
    }

    ///////////////////////////////////////////
    //
    // Actions & Transactions
    //
    //////////////////////////////////////////

    // Handle tracking data storage
    function saveTrackingData() {
        setItem('_bexTrackingData', trackingData);
    }
    function loadTrackingData() {
        let savedTrackingData = getItem('_bexTrackingData');

        if (savedTrackingData != null && typeof savedTrackingData === 'object')
            trackingData = savedTrackingData;
    }

    // Handle pixel data storage
    function savePixelData() {
        setPermItem('_bexPixelDataAlt', pixelData);
    }
    function getPixelData() {
        let savedPixelData = getPermItem('_bexPixelDataAlt');

        if(savedPixelData != null && typeof savedPixelData === 'object')
            pixelData = savedPixelData;
    }

    // Configuration and Initialization
    bexTracking.setCampaignName = function (campaignName,customerId) {
        if (IsNoP(campaignName) || typeof campaignName !== 'string')
            throw 'Campaign name not specified or is of an invalid type';

        trackingData.campaignName = campaignName;
        if (customerId) trackingData.customerId = customerId;
        saveTrackingData();
        log('Set campaign name to', campaignName);
    }
    bexTracking.passData = function (key, value) {
        if (IsNoP(key) || typeof key !== 'string')
            throw 'Key not specified or is of an invalid type';

        trackingData.passedData[key] = value;
        saveTrackingData();
        log('Set passedData with key', key, 'and value', value);
    }
    bexTracking.getPassedData = function (key) {
        if (IsNoP(key) || typeof key !== 'string')
            throw 'Key not specified or is of an invalid type';
        if (!trackingData.passedData.hasOwnProperty(key))
            return null;

        log('Returning passed data of', key);
        return trackingData.passedData[key];
    }
    bexTracking.removePassedData = function (key) {
        if (IsNoP(key) || typeof key !== 'string')
            throw 'Key not specified or is of an invalid type';
        if (!trackingData.passedData.hasOwnProperty(key)) return;

        delete trackingData.passedData[key];
        log('Removed passedData key', key);
    }

    // Adding and removing of transaction items
    bexTracking.addTransactionItem = function (name, price, id, category, quantity) {
        if (IsNoP(name) || typeof name !== 'string' || IsNoP(price) || typeof price !== 'number' || IsNoP(id) || typeof id !== 'string')
            throw 'Required parameter(s) not provided or are invalid types';
        if ((!IsNoP(category) && typeof category !== 'string') || (!IsNoP(quantity) && typeof quantity !== 'number'))
            throw 'Optional parameter(s) are of invalid types';
        log('Calling addTransactionItem with argument list', arguments);

        // Set defaults of non-provided
        if (!category) category = '';
        if (IsNoP(quantity))
            quantity = 1;

        // Count up already existing ones
        if (trackingData.transactionItems[id]) {
            log('Appending transaction item quantity to id', id);
            return trackingData.transactionItems[id].quantity += quantity;
        }

        // Create and add new transaction item
        trackingData.transactionItems[id] = {
            name,
            category,
            price,
            quantity,
            sku: id
        };
        saveTrackingData();
        log('Added transaction item with id', id);
    }
    bexTracking.removeTransactionItem = function (id) {
        if (IsNoP(id) || typeof id !== 'string')
            throw 'Id not provided or of an invalid type';
        if (!trackingData.transactionItems[id]) return; // We won't bother with an error

        delete trackingData.transactionItems[id];
        saveTrackingData();
        log('Removed transaction item with id', id);
    }

    // Creating and destroying funnels
    bexTracking.openFunnel = function (funnelId) {
        if (trackingData.funnelId !== null && typeof trackingData.funnelId === 'string')
            throw 'An exisiting funnel is already running';

        trackingData.funnelId = funnelId || uuid();
        saveTrackingData();
        log('Opened funnel');
    }
    bexTracking.closeFunnel = function () {
        if (trackingData.funnelId === null || typeof trackingData.funnelId !== 'string')
            return;

        trackingData.funnelId = null;
        saveTrackingData();
        log('Closed funnel');
    }

    // Sending actions and transactions
    bexTracking.sendAction = function (category, action, label, value, extra1, extra2, extra3, funnelStep, actionId) {
        if (IsNoP(trackingData.campaignName))
            throw 'Campaign name not initialized';
        if (IsNoP(action) || typeof action !== 'string')
            throw 'No action provided or is of an invalid type';
        if (!IsNoP(label) && typeof label !== 'string' && typeof label !== 'number')
            throw 'Provided label is of an invalid type';
        if (!IsNoP(category) && typeof category !== 'string')
            throw 'Provided category is of an invalid type';
        log('Calling sendAction with argument list', arguments);

        // Null any unprovided parameters
        if (IsNoP(category)) category = null;
        if (IsNoP(label)) label = null;
        if (IsNoP(value)) value = null;
        if (IsNoP(extra1)) extra1 = null;
        if (IsNoP(extra2)) extra2 = null;
        if (IsNoP(extra3)) extra3 = null;

        // Handle default category
        if (IsNoP(category)) {
            category = window.location.pathname.split('/').join(' / ');
            log('Auto-set category to', category);
        }

        // Handle funnel setup
        var funnelId = null;
        var localFunnelStep = null;
        if (trackingData.funnelId && !IsNoP(funnelStep)) {
            funnelId = trackingData.funnelId;
            localFunnelStep = funnelStep;

            log('Using funnel', funnelId, 'with step', localFunnelStep);
        }

        // Send action event
        var data = {
            format: 'F2',
            campaign: trackingData.campaignName,
            data: {
                category,
                action,
                label,
                value,
                extra1,
                extra2,
                extra3,
                funnelId,
                step: localFunnelStep
            }
        }
        if (trackingData.customerId) data.customer = trackingData.customerId
        if (actionId) {
          if (actionId=='new') actionId = uuid()
          data._id = actionId
        }
        bexEvent('route_action', data );
        log('Sent F2 event to', trackingData.campaignName);
        return actionId
    }
    bexTracking.sendTransaction = function (totalPrice, shippingPrice, taxPrice, orderId, paymentMethod) {
        if (IsNoP(totalPrice) || typeof totalPrice !== 'number')
            throw 'Total price not provided or is of an invalid type';
        if (!IsNoP(shippingPrice) && typeof shippingPrice !== 'number')
            throw 'Shipping price is of an invalid type';
        if (!IsNoP(taxPrice) && typeof taxPrice !== 'number')
            throw 'Tax price is of an invalid type';
        if (!IsNoP(orderId) && typeof orderId !== 'string')
            throw 'Order ID is of an invalid type';
        log('Calling sendTransaction with argument list', arguments);

        // Load defaults
        if (IsNoP(shippingPrice)) shippingPrice = 0;
        if (IsNoP(taxPrice)) taxPrice = 0;
        if (IsNoP(orderId)) orderId = '';
        

        // Close funnel
        var funnelId = null;
        if (!IsNoP(trackingData.funnelId)) {
            funnelId = trackingData.funnelId;
            bexTracking.closeFunnel();

            log('Handled detected funnel with id', funnelId);
        }

        // Send transaction event
        paymentMethod = paymentMethod || false
        var data = {
                total: totalPrice,
                shipping: shippingPrice,
                tax: taxPrice,
                order: orderId,
                items: Object.values(trackingData.transactionItems),
                funnelId,
                campaign: trackingData.campaignName
            }
            
        if (paymentMethod) data.paymentMethod = paymentMethod
        if (trackingData.customerId) data.customer = trackingData.customerId
        
        bexEvent('route_transaction', data);
        log('Sent transaction event');

        // Clean up
        trackingData.transactionItems = {};
        saveTrackingData();
        log('Cleaned up transaction data');
    }


  this.bexEvent = function(ev,data,cb) {
    data.event = ev
    data.pv = cx.pv
    data.ts = Date.now()
    data.user_id = cx.cx_id
    //TODO - customer must come from campaign / route

    var img = doc.createElement('img'),
        payload = b64EncodeUnicode(JSON.stringify(data)),
        tcstring = '&gdpr='+cx.gdpr;
    		if (cx.tcdata && cx.tcdata.gdprApplies) tcstring += '&gdpr_consent='+cx.tcdata.tcString;
        url = opt.collector + '?_data='+encodeURIComponent(payload)+tcstring;
    img.onload = cb
    img.setAttribute('src',url)
  }





// wait_for_cmp

  function wait_for_cmp(has_cmp,load) {
    
    var tcf = has_cmp || url.match('.bg|ponichka')
    var poller = false, polls = 0, maxpolls=tcf ? 5 : 1, delay=100;
    function init(immediate) {
      clearTimeout(poller)
      polls++
      if (is_frame && !w.__tcfapi) {
      //define tcfapi proxy
        var frm = w, cmpfrm = false, cmpCb = {};
        while (frm) {
          try {
            if (frm.frames['__tcfapiLocator']) {cmpfrm = frm; break}
          } catch(e) {}
          if (frm==w.top) break
          frm = frm.parent
        }
        if (cmpfrm) {
          w.__tcfapi = function(command,version,cb,parameter) {
            var callId = guid(),
                __tcfapiCall= {command,parameter,version,callId};
            cmpCb[callId] = cb
            cmpfrm.postMessage({__tcfapiCall},'*')
          }
          tcfapiHandler = function(e) {
            var data = {}
            try {
              data = typeof e.data=='string' ? JSON.parse(e.data) : e.data
            } catch(e) {}
            var res = data.__tcfapiReturn,
                cb = res && cmpCb[res.callId];
            if (cb) cb(res.returnValue,res.success)
            if (res) delete cmpCb[res.callId]
          }
          w.addEventListener('message', tcfapiHandler, false)
        }
      }
      if (w.__tcfapi) { //we have a CMP
          dolog('TCF API present',immediate ? 'immediate' : 'delayed')
          __tcfapi('ping',2, function (ping_data) {
            if (!ping_data || !ping_data.cmpLoaded) {
              dolog('CMP not initialized')
              if (polls<maxpolls) return poller = setTimeout(init,100)
              cx.tcdata = false
              cx.gdpr = 2
              load()
            } else {
            __tcfapi('addEventListener',2, function (tcdata,success) {
              if( success
                && ['useractioncomplete','tcloaded'].indexOf(tcdata.eventStatus)>-1
              ) {
                dolog('Have tcdata',tcdata)
                if (tcdata.tcString) {
                  cx.tcdata = tcdata
                  cx.gdpr = tcdata.gdprApplies ? 1 : 0
                  if (tracker_loaded) return dolog('tracker already loaded')
                  tracker_loaded = true
                  load()
                } else {
                  cx.tcdata = false
                  cx.gdpr = 2
                  load()
                }
              }
            })
          }
        })
      } else { //we were called without CMP - at the discretion of publisher
        dolog('TCF locator',frames && frames['__tcfapiLocator'] && 'present' || 'missing')
        dolog('TCF API missing',polls,immediate ? 'immediate' : 'delayed')
        if (polls<maxpolls) return poller = setTimeout(init,100)
        cx.tcdata = false
        cx.gdpr = 2
        load(false)
      }
    }

    init(true)

  }

// settle Identity
//   set cx.cx_id
//   set cx.new
//   send matching pixels    
  function settleIdentity() {
    if (test_purpose([1])) {
      var haveCookies = false
      document.cookie = 'cx_test'
      haveCookies = document.cookie.match('cx_test')
      document.cookie = "cx_test= ; expires = Thu, 01 Jan 1970 00:00:00 GMT"
      if (haveCookies) {
        var local_id = getCookie('cx_id'),
            global_id = opt.user_id;

        cx.new = !local_id
        //global overrides local iff opt.override_user
        //cx.cx_id = local_id || global_id // does not override - local always prevails except on first run
        cx.cx_id = opt.override_user && global_id || local_id || global_id //old global overrides local - while we have 3rd party cookies 
        document.cookie = 'cx_id='+cx.cx_id+';path=/;expires=' + (new Date(+new Date+1E5*720*24*36)).toUTCString()+';SameSite=Strict'

        var last_match = +getCookie('cx_last_match'),
            ts = Date.now(), //last_match ? Date.now() : (Date.now() - random(24*3600)*1000),
	          gap = 24*3600*1000,
            sendMatch = 1; //ts - last_match > gap;
                       
        if (sendMatch && test_purpose([3])) {
          dolog('sending match pixel',cx.cx_id,last_match);
          var img = document.createElement('img'); 
          img.src = 'https://dmp.adform.net/serving/cookie/match?party=1219&cid='+cx.cx_id+'&redirect=https://match.contentexchange.me/adform/__ADFUID__';
/*
          var syncUri = 'https://sync2.adnetwork.agency/image?pbjs=1'; 
          if (cx.tcdata && cx.tcdata.gdprApplies) syncUri += '&gdpr=1&gdpr_consent=' + cx.tcdata.tcString; 
          img = document.createElement('img'); 
          img.src = syncUri;
*/
          img = document.createElement('img'); 
          img.src = 'https://match.contentexchange.me/request';
          document.cookie = 'cx_last_match='+Date.now()+';path=/;expires=' + (new Date(+new Date+1E5*720*24*36)).toUTCString()+';SameSite=Strict'
        } else dolog('matching disallowed')

      } else {
        cx.cx_id = 'anon'
        dolog('no cookies - no storing')
      }
    } else {
      cx.cx_id = 'anon'
      dolog('storing disallowed')
    }
  }

//send Pageview
//   send pv data
//   setup beacon for time-on-page
	function sendPageview(noBeacon) {
    if (cx.pv) return
    //TODO - isIncognito, hasAdBlocker, webframe?,           
    cx.ref = ref
    cx.url = url    
    cx.pv = uuid()
    var now = new Date()
    var pv = {
      pv: cx.pv,
      url: cx.url,
      ref: cx.ref,
      user_id: cx.cx_id,
      new: cx.new,
      tz: now.getTimezoneOffset(),
      cs: doc.characterSet || doc.charset,
      ns: cx.start,
      req_ts: performance.timing.requestStart,
      res_ts: performance.timing.responseStart,
      ts: now.getTime(),
      screen: [ screen.height, screen.width, screen.colorDepth ].join("x")
    }

    send('pageview',pv);

    const t0 = performance.now()
    dolog('calling fp')
    
    //setUp a sendBeacon - only on first view
    if (!noBeacon) doc.addEventListener('visibilitychange', function logData() {
      if (doc.visibilityState === 'hidden') {
        var
          ts = Date.now(),
          data = {
            event:'beacon',
            pv: cx.pv,
            ts: ts,
            ns: performance.timing.responseStart,
            scroll: w.scrollY,
            user_id: cx.cx_id, 
            gdpr: cx.gdpr
          }
        //delete cx.pv //reset pageview, to register a new pv on return view (if) 
        if (cx.tcdata && cx.tcdata.gdprApplies) data.gdpr_consent=cx.tcdata.tcString
        var qs = []
        Object.keys(data).forEach( function(k) {qs.push( k+'='+encodeURIComponent(data[k]) );} );
        navigator.sendBeacon(opt.collector+'?'+qs.join('&'));
      } else {
        //sendPageview(cx.tcdata,true) //report return view
      }
    });
  }


//rendering function for BEX

  var sendImpression = bexTracking.sendImpression = function sendImpression(data) {
    var url = [bex_base,'imp',data.campaign,data.segment,data.route,data.docs].join('/') + '?pv=' + cx.pv + '&user_id=' + cx.cx_id + '&ref=' + encodeURIComponent(cx.url),
        img = doc.createElement('img'),
        tcstring = '&gdpr='+cx.gdpr;
    if (cx.tcdata && cx.tcdata.gdprApplies) tcstring += '&gdpr_consent='+cx.tcdata.tcString;
    img.setAttribute('src',url+tcstring)
  }
  
  var sendConversion = bexTracking.sendConversion = function sendConversion(data) {
    var url = [bex_base,'conv',data.campaign,data.segment,data.route,data.docs].join('/') + '?pv=' + cx.pv + '&user_id=' + cx.cx_id + '&ref=' + encodeURIComponent(cx.url),
        img = doc.createElement('img'),
        tcstring = '&gdpr='+cx.gdpr;
    if (cx.tcdata && cx.tcdata.gdprApplies) tcstring += '&gdpr_consent='+cx.tcdata.tcString;
    img.setAttribute('src',url+tcstring)
  }


  var handleIntersection = function handleIntersection(entries) {
//console.log('checking',entries)
    entries.forEach(function(entry) {
      if (entry.isIntersecting) {
        if (entry.intersectionRatio >= 0.09) {
          var elt = entry.target;
          sendImpression(elt.data);
          widgetObserver.unobserve(elt);
        }
      }
    });
  }

  var widgetObserver = new IntersectionObserver(
    handleIntersection,
    {
      root:null,
      rootMargin: "0px",
      threshold: [0.1]
    }
  )

  var display_widget_BEX = function display_widget_BEX(data,elt,tcstring) {
//console.log('bex data',data)
    if (data.error) return; // console.log(data.error)
  	var now = new Date(),
  	    ref = encodeURIComponent(cx.canonical || cx.url),
  	    redir = opt.redirect && opt.redirect!='undefined' ? '&redir='+opt.redirect : '',
        html = data.data.replace(/\?cb-[0-9]*/gi,'?cx_id='+cx.cx_id+'&pv='+cx.pv+'&ref='+ref+redir+tcstring);

  	if (data.route) elt[data.route] = 'done';
  	if (html=='') return;
  	if (cx.url.match('bex_hbint')) html = html.replace(/hb\.|hbdev\./g,'hbint.')
  	var div = document.createElement('div'),
  	    parent = elt.parentNode;
  	div.setAttribute('class','_bex_observe');
  	div.setAttribute('style',"margin:0 !important;padding:0 !important")
  	div.innerHTML = html;
    switch (data.placement) {
      case 'first': elt.insertAdjacentElement('afterbegin',div); break;
      case 'last': elt.insertAdjacentElement('beforeend',div); break;
      case 'before': elt.insertAdjacentElement('beforebegin',div); break;
      case 'after': elt.insertAdjacentElement('afterend',div); break;
      case 'replace_all': parent.replaceChild(div,elt.widget); break;
      case 'replace':
      default:
        //remove all children, append div
        elt.innerHTML = '';
        elt.appendChild(div);
    }
    if (data.route) {
      if (data.block_events!='block') {
        //id:cat:t/f,id2:cat:r
        data.docs = data.docs.map( doc => Object.values(doc).join(':') ).join(',');
        div.data = data;
        if (elt==body) {
          sendImpression(data)
        } else {
          widgetObserver.observe(div);
        }
      }
    } else {
    	send('widget_impression',{pv:cx.pv, widget: data.id, posts: data.posts.join(','), ts: now.getTime()});
    }
  }






  var fetchWidgetBEX = function(widget,route,retarget) {
  //add ref to both requests, TODO - include data-cx-source!
  	var ref = cx.canonical || cx.url;
    dolog('fetch BEX',route)
    var retargeting = '';
    if (retarget) {
      retarget = retarget.split('|')
      var domain = retarget[0].trim(),
          category = retarget[1].trim(),
          maks_posts = +retarget[2],
          expire_days = +retarget[3],
          prefix = retarget[4],
          info = _bex_retargeting;

      if (info && info[domain]) {
        var data = info[domain],
            found_cat = category && Object.keys(data).find(c => c==category) || false,
            cats = category ? (found_cat ? [found_cat] : []) : Object.keys(data),
            posts = {},
            now = Date.now(),
            expire = expire_days*24*3600000;
        
        cats.forEach(k => {
          var list = data[k];
          list.forEach(item => {
            var timestamp = (new Date(item.ts)).valueOf(),
                expired = now - timestamp > expire;
            if (!expired) posts[item.item] = 1;
          })
        })
        posts = Object.keys(posts)
        posts = shuffle(posts,maks_posts)

        if (cats.length) retargeting += '&cat='+prefix+cats.join('|'+prefix)
        if (posts.length) retargeting += '&posts='+posts.join('|')
      }
    }
    var 
      tcstring = (1==cx.gdpr) ? '&gdpr=1&gdpr_consent='+cx.tcdata.tcString : '&gdpr='+cx.gdpr,
      src = [bex_base,'widget',route,'data'].join('/') + (location.search ? location.search + '&' : '?') + 'cx_id='+opt.user_id+'&pv=' + cx.pv + '&ref=' + encodeURIComponent(ref) + retargeting+tcstring;
   
    dolog('fetching BEX',src)
    fetch(src).then(function(r) {return r.json()})
              .then( function(data) { 
                dolog('widget data',data)
                display_widget_BEX(data,widget,tcstring) 
              })
              .catch( function(e) {console.log('error fetch',e)} )

  }

  
// rendering functions for CE

  var display_widget_CE = function(data,widget,tcstring,replace) {
    widget.queued = false;
  	if (!data.error) {
    	widget.setAttribute('done','1');
    	//add pageview to /in/ links
      var html = data.data && data.data.replace(/\?cb[0-9]*/ig,'?cx_id='+cx.cx_id+'&pv='+cx.pv+'&'+tcstring) || '';
      if (html) Object.keys(replace).forEach( pattern => {
        html = html.replace(new RegExp('##'+pattern+'##','ig'),replace[pattern]);
      })
      widget.innerHTML = html;
    	//send('widget_impression',{pv:cx.pv, widget: data.id, posts: (data.posts || []).join(','), ts: now.getTime()});
    }

  }
  var noMatch = function(options,val) {
    if (!options) return false //always match if no option==condition to match
    if (!val) return true //no match if nothin to match to
    options = options.split(/,/g)
    for (var k=0;k<options.length;k++) {
      var opt = options[k],
          not = opt[0]=='!',
          expr = not ? opt.substring(1) : opt,
          m = val.match(new RegExp(expr,'i')),
          res = not ? !m : m
      if (res) return false
    }
    return true
  }

  var noGeoMatch = function(position,lat2,lon2) {
  // https://www.movable-type.co.uk/scripts/latlong.html - equilateral projection
    if (!position) return false //no match if no postion specified
     var pos = position.split(/,/g),
         p0 = pos[0],
         not = p0[0]=='!',
         lat1 = not ? p0.substring(1) : p0,
         lon1 = pos[1],
         rad = pos[2],
         φ1 = lat1 * Math.PI/180,
         φ2 = lat2 * Math.PI/180,
         Δλ = (lon2-lon1) * Math.PI/180,
         R = 6371e3,
         x = Δλ * Math.cos((φ1+φ2)/2),
         y = (φ2-φ1),
         d = Math.sqrt(x*x + y*y) * R;
    return d<rad ? not : !not
  }

  // {{alternatives
  //    |country=SI,HR; region=dolejnska; city=Ljub,Mar; pos:(!)lat,lng,radius; zip=^1; model=galaxy; device=!desktop; source=gr; widget=widget_id share=0.00-1.00
  //    |
  //    }}
  
  var fetchWidgetCE = function fetchWidgetCE(widget) {
		var id = widget.getAttribute('data-trafex-widget') || widget.getAttribute('data-contentexchange-widget'),
        src = widget.getAttribute('data-contentexchange-source'),
        src_valid = !!src && src!='stage',
		    cat = widget.getAttribute('data-trafex-cat') || widget.getAttribute('data-contentexchange-cat') || '',
		    cnt = widget.getAttribute('data-trafex-count') || widget.getAttribute('data-contentexchange-count') || '',
		    country = widget.getAttribute('data-contentexchange-country') || '',
		    region = widget.getAttribute('data-contentexchange-region') || '',
		    city = widget.getAttribute('data-contentexchange-city') || '',
		    zip = widget.getAttribute('data-contentexchange-zip') || '',
		    pos = widget.getAttribute('data-contentexchange-pos') || '',
		    asn = widget.getAttribute('data-contentexchange-asn') || '',
		    model = widget.getAttribute('data-contentexchange-model') || '',
		    device = widget.getAttribute('data-contentexchange-device') || '',
		    alternatives = JSON.parse(widget.getAttribute('data-contentexchange-alternatives') || '{}'),
		    replace = {
		      redirect: widget.getAttribute('data-contentexchange-replace-redirect') || ''
		    };
		    
		if (!test_purpose([2,6])) opt.profile = {}

    if (noMatch(country,opt.profile.country)) return
    if (noMatch(region,opt.profile.region)) return
    if (noMatch(city,opt.profile.city)) return
    if (noMatch(zip,opt.profile.zip)) return
    if (noMatch(asn,opt.profile.asn)) return
    if (noMatch(model,opt.profile.model)) return
    if (noMatch(device,opt.profile.device)) return
    if (noGeoMatch(pos,opt.profile.lat,opt.profile.lng)) return
    if (!src_valid) {
       //dolog('invalid source',src)
       src = opt.ce_source
    }

dolog('ALTERNATIVES',alternatives)
    for (var k=0;k<alternatives.length;k++) {
      var alt = alternatives[k]
      if (noMatch(alt.country,opt.profile.country)) continue
      if (noMatch(alt.region,opt.profile.region)) continue
      if (noMatch(alt.city,opt.profile.city)) continue
      if (noMatch(alt.zip,opt.profile.zip)) continue
      if (noMatch(alt.asn,opt.profile.asn)) continue
      if (noMatch(alt.model,opt.profile.model)) continue
      if (noMatch(alt.device,opt.profile.device)) continue
      if (noGeoMatch(alt.pos,opt.profile.lat,opt.profile.lng)) continue
      if (alt.share && alt.share>Math.random()) continue
      src = alt.source
      id = alt.widget
      cat = alt.cat || ''
      cnt = alt.cnt || ''
dolog('chosen alternative',k,src,id,cat,cnt)
      break
    }

		if (cat) cat = '/'+cat;
		if (cnt) cnt = '/'+cnt;
		var preview = url.match('ce_preview') ? '/_preview' : '';
		var tcstring = (1==cx.gdpr) ? 'gdpr=1&gdpr_consent='+cx.tcdata.tcString : 'gdpr='+cx.gdpr
  	var src = 'https://tracker_' + src+'.contentexchange.me/widget/'+(id+'.data')+cat+cnt+preview+'?'+tcstring;
    dolog('fetching CE',src)
    fetch(src).then(function(r) {return r.json()}).then( function(data) { display_widget_CE(data,widget,tcstring,replace) })

    var refresh = 0 | ( widget.getAttribute('data-trafex-refresh') || widget.getAttribute('data-contentexchange-refresh') );
    if (refresh) (function(widget,refresh) { setTimeout(function(){fetchWidgetCE(widget)},Math.min(refresh,30)*1000); })(widget,refresh);
  }

//BEX and scraper

	var
	//trigger functions ofr bex routes
		trigger = {
		  host : function(domains) { return domains.split(/,/g).indexOf(location.host)>-1 },
		  path : function(regexp) {
		    var loc = location.href.replace(location.origin,'')
  //					dolog('path',loc,regexp)
			  return loc.match(new RegExp(regexp))
		  },
      tcf: function(purposes) {
        return test_purpose(purposes)
      },
		  cap : function(route,total,count,interval) {
			  var cap = store_get('cap') ||  {}
			  cap[route] = cap[route] || {total:0,count:0,reset:Date.now()}
			  if (total>0 && cap[route].total>total) return false
			  if (cap[route].count > count) return false
			  if (Date.now() - cap[route].reset > interval*60000) {
				  cap[route].reset = Date.now()
				  cap[route].count = 0
			  }
			  cap[route].total += 1
			  cap[route].count += 1
			  store_set('cap',cap)
			  return true
		  },
		  wait : function(route,count) {
			  var wait = store_get('wait') ||  {}
			  wait[route] = wait[route] || 0
			  wait[route] += 1
			  if (wait[route]>count) {
				  wait[route] = 0
				  store_set('wait',wait)
				  return true
			  } else {
				  store_set('wait',wait)
			    return false
			  }
		  },
		  timeOfDay : function(intervals,mode) {
          dolog('seg time',intervals)
		      var now = new Date(),
		      			day = now.getDay(),
		      			hrs = now.getHours(),
		      			idx = intervals.indexOf(day+'-'+hrs)>-1
		      return (!mode || mode=='include') ? idx : !idx
		  },
		  ip : function(ips,mode) {
			  if (!mode) return true;
			  var idx = ips.split(/,/g).indexOf(opt.profile.ip)>-1;
			  return mode=='include' ? !!idx : !idx
		  },
		  render : function(selector, routeId, retarget) { // gets things from BEX db
		    var sel = selector.split(/,/g),
		        elt = false;
		    for (var i=0;i<sel.length;i++) {
		        elt = document.querySelector(sel[i])
		        if (elt) break;
		    }
			  if (!elt) return true;
        if (/*!DEBUG && */elt[routeId]) return true //do not draw twice in prod
        elt[routeId] = 'loading'
			  fetchWidgetBEX(elt,routeId,retarget)
			  return true
      },
		  renderAll : function(selector, routeId, retarget) { // gets things from BEX db
		    var sel = selector.split(/,/g);
		    for (var i=0;i<sel.length;i++) {
		        var elts = document.querySelectorAll(sel[i])
		        for (var j=0;j< elts.length;j++) { 
		          var elt = elts[j]
  		        if (!elt) continue;
              if (/*!DEBUG && */elt[routeId]) continue //do not draw twice in prod
              elt[routeId] = 'loading'
			        fetchWidgetBEX(elt,routeId,retarget)
			      }
		    }
			  return true
      },
      renderCE : function(forceLoad) { // gets things from CX db
		    var widgets = forceLoad
		        ? doc.querySelectorAll('[data-trafex-widget],[data-contentexchange-widget]')
		        : doc.querySelectorAll('[data-trafex-widget]:not([done]),[data-contentexchange-widget]:not([done])');
		    for (var i=0;i< widgets.length;i++) {
			    var widget =  widgets[i];
			    if (widget.queued) continue;
			    widget.queued = true;
			    var delay = 0 | ( widget.getAttribute('data-trafex-delay') || widget.getAttribute('data-contentexchange-delay') );
			    fetchWidgetCE(widget);
			    //(function(widget,delay) {setTimeout(function() {fetchWidget(widget);},delay*1000);})(widget,delay);
		    }
			  return true
		  },
    },
//scraper user defined functions
		parseArgs = function parseArgs(str) {
	    var args = [];
	    var re = /"([^"]*)"|'([^']*)'|([^ \t,]+)/g;
	    var m;
	    
	    while (m = re.exec(str)) {
		    args.push(m[2] || m[1] || m[0]);
	    }
	    
	    return args;
    },
    applyMethod = function applyMethod(value, functions) {
      const method = {
        log: function(value) {
          console.log('SCRAPER LOG',value)
          return value
        },
        lang: function(value) {
          var val = (value || '').split(/[-_]/)[0]
          return val
        },
        trim: function (value) {
          return (value || '').replace(/(\t|\n|\r)/g,' ').replace(/\\s+/g,' ').trim('\s')
        },
        slice: function(value, start, end) {
          return (value || []).slice(start, end)
        },
        lower: function (value) {
          return (value || '').toLowerCase()
        },
        replace: function (value, pattern, replacement) {
          pattern = pattern.replace(/\\/g,'\\')
        	return value && (''+value).replace(new RegExp(pattern, 'g'), replacement) || ''
        },
        split: function (value, delimiter=',',part) {
          delimiter = delimiter.replace(/\\/g,'\\')
          var val = (value || '').toLowerCase().split(new RegExp(delimiter, 'g')).map(a => a.trim())
          if (part) return val[part];
          else return val
        },
        remove_date: function (value) {
        	return value && (''+value).replace(/(\d{2}-\d{2}-\d{4})/g,' ').trim('\s') || ''
        },
        clear: function (value, pattern) {
          return (value || '').replace(new RegExp(pattern,'g'),'')
        },
        clear_to_space: function (value, pattern) {
          return (value || '').replace(new RegExp(pattern,'g'),' ')
        },
        clear_meta_data: function (value) {
          return (value || '')
        .replace('|','')
		    .replace('#', '') 
		    .replace('<', '') 
        },
        split_by_special: function (value) {
          return (value || '').toLowerCase().split(/\s.\s/g)
        },
        split_by_vertical_line: function (value, part) {
          var val = (value || '').split(/\s\|\s/g).map(a => a.trim())
          return val[part]
        },
        split_by_slash: function (value, part) {
          var val = (value || '').split(/\//g).map(a => a.trim())
          return val[part]
        },
        extract_from_parenthesis: function (value) {
          var val = (value || '').split('(').pop()
            if (val != 'undefined') {
              val = val.split(')').shift()
            } else {val = ''}
          return val
        },
        extract_from_class: function (value, marker) {
          var output = [];
          var res = (value || '').split(" ");
          res.forEach(el => {
            if (el.includes(marker)) {
              output.push(el.replace(marker,'').replace(/-/g,' '))
            }
          });
          return output     
        },
        path: function(val) {
          var url = (val || '').split(/\//g),
              site = url[2],
              path = url.slice(2).join('/');
          return path
        }

      }

      functions.forEach( function(fn_call) {
        var cmd = fn_call.split(/:/g),
            fn = cmd.shift().trim(),
            args = parseArgs(cmd.join(':') || '');
            
        args.unshift(value);
        //dolog('getting',fn,args,value);
        try {
          value = method[fn].apply(null,args)
        } catch(e) {
          dolog('illegal function call',e)
        }
      })
      return value;
      
    };
//scraper
    trigger.scrapeCheck = async function() {
      if (cx.scraped) return;
      const response = await fetch(bex_base+'/scrape?page_url='+encodeURIComponent(cx.url));
      const data = await response.json()
      if (data.status=='skip') return
      dolog('SCRAPING',data)
      trigger.scrape(data.scraper,data.language,data.clean_url)
    }
       
    trigger.scrape = async function scrape(conf,lang,clean_url) {
    
      if (cx.scraped) return;
      cx.scraped = true;

      var item_nodes = document.querySelectorAll(conf.selector),
          items = [];

      conf.model.lang = conf.model.lang || '@lang | lang'
      conf.model.date = conf.model.date || 'meta[property="article:published_time"]@content'

      item_nodes.forEach( function(item_node) {
        var item = {}
        Object.keys(conf.model).forEach( function(key) {
          var fld = conf.model[key],
              is_array = Array.isArray(fld),
              fld_string = is_array ? fld[0] : fld,
              parts = fld_string.split(/\|/g),
              selector_string = parts.shift(),
              functions = parts,
              selector_parts = selector_string.split(/@/g),
              selector = selector_parts[0].trim(),
              attribute = (selector_parts[1] || '').trim();
              
          if (is_array) {
            var nodes = selector ? item_node.querySelectorAll(selector) : [item_node],
                value = [];
            nodes.forEach( function(node) {
              var val = attribute ? node.getAttribute(attribute) : node.textContent;
              val = applyMethod(val,functions)
              value.push(val)
            })
          } else {
            var node = selector ? item_node.querySelector(selector) : item_node,
                value = node ? (attribute ? node.getAttribute(attribute) : node.textContent) : '';
            value = applyMethod(value,functions)          
          }
          item[key] = value;
        })
        item.site_lang = lang
        
        items.push(item)
      })
      
      var item = items[0]
      
      item.url = cx.url
      item.clean_url = clean_url
      
      dolog('items',items)
      //send page info to endpoint - POST
      const response = await fetch(bex_base+'/page', {
        method: 'POST', // *GET, POST, PUT, DELETE, etc.
        mode: 'no-cors', // no-cors, *cors, same-origin
        cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
        headers: {
        
          'Content-Type': 'application/json'
        },
        redirect: 'follow', // manual, *follow, error
        referrerPolicy: 'unsafe-url', // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
        body: JSON.stringify(item) // body data type must match "Content-Type" header
      });
      return true
    }

/* for BEX integration */
    trigger.fetchRoutes = async function() {
      if (opt.routes_loaded) return
      opt.routes_loaded = true
      const response = await fetch(bex_base+'/config?page_url='+encodeURIComponent(cx.url));
      const routes = await response.json()
      dolog('loading bex',routes)
      opt.routes = routes
      w.bexLoad = function() { contentExchangeLoad(opt.routes) }
      contentExchangeLoad(opt.routes)
    }
//sample route: [["path","/test-osebnosti"],["ip","31.15.169.99",""],["render","body","5f3e83993e20933be5a28f0a",""]]
    var bexReady = false, stack = [];

    function contentExchangeLoad(routes) {
    
      if (!routes) routes = [[['renderCE']]]
      else if (routes===true) routes = [[['renderCE',true]]]

      stack = stack.concat(routes);
      
      if (bexReady)  {
        var lstack = stack;
        stack = [];
		    for(var i=0;i<lstack.length;i++) {
		      var route = lstack[i];
		      for(var j=0;j<route.length;j++) {
		        var el = route[j],
		            fn = trigger[el[0]];
		        if (fn && !fn.apply(this,el.slice(1))) break;
			    }
		    }
		  }
      
    }
    
    w.contentExchangeLoad = contentExchangeLoad
    w.bexLoad = function() { contentExchangeLoad(opt.routes) }

    try {
      localStorage._bex_data = localStorage._bex_data || '{}'
    } catch {
      dolog('no localStorage!')
    }
    

    wait_for_cmp(opt.has_cmp,async function() {
      settleIdentity()
      if (test_purpose([1])) {
        sendPageview()
        //init frameStore & retargeting 
        var frameStore = await bexTracking.frameStore.init().catch(e => console.log('store not available'))        
        var global = frameStore ? await frameStore.getItem('_bex_retargeting') : null,
            local = localStorage.getItem('_bex_retargeting');
        try {
          local = JSON.parse(local)
        } catch(e) {
          local = {}
        }            
        _bex_retargeting = bexTracking.retargeting = Object.assign({},local,global)
      }
      dolog('tracker ready CE')
      bexReady = true
      contentExchangeLoad(opt.routes)
      if (doc.readyState === "loading") doc.addEventListener("DOMContentLoaded", function() {contentExchangeLoad(opt.routes)});
    })


  })(window,document)
  
})({"has_cmp":false,"bex_base":"https://analytics.contentexchange.me/bex","ce_source":"adria","collector":"https://collector_sr.contentexchange.me/sr/collect","blockSend":false,"user_id":"65aa95da6163d6710c07751c","override_user":false,"profile":{"country":"ES","region":"Catalonia","city":"Barcelona","lat":41.3891,"lng":2.1611,"asn":"Consorci de Serveis Universitaris de Catalunya","ip":"147.83.130.27","device":"desktop","model":"Other"}})


