<!DOCTYPE html>
" />
    <title>Embed</title>
    <base href="/" />
    <style>
      body,
      html {
        margin: 0;
        padding: 0;
      }

      body {
        display: flex;
        flex-direction: column;
        height: 100vh;
        width: 100vw;
        justify-contentpple-system, BlinkMacSystemFont, Segoe UI, Roboto,
          Helvetica Neue, Arial, Noto Sans, sans-serif;
        overflow: hidden;
      }

      #bugherd_toggle {
        font-feature-settings: "tnum";
        font-family: inherit;
        overflow: visible;
        text-transform: none;
        display: inline-block;
        font-weight: 400;
        cursor: pointer;
        touch-action: manipulation;
        font-size: 14px;
        color: rgb(255, 255, 255);
        text-shadow: rgba(0, 0, 0, 0.12) 0px -1px 0px;
        outline: 0px;
        box-shadow: none;
        width: fit-content;
        min-width: 70px;
        position: absolute;
        height: 70px;
        margin: 0px;
        padding: 0px;
        right: 0px;
        border: none;
        background-color: rgb(10, 45, 80);
        border-top-left-radius: 12px;
        border-top-right-radius: 0px;
        border-bottom-right-radius: 0px;
        border-bottom-left-radius: 12px;
        max-width: 180px;
        z-index: 0;
        transition: right 0.4s ease;
      }

      #logo {
        -webkit-text-size-adjust: 100%;
        -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
        --antd-wave-shadow-color: #20c0e7;
        --scroll-bar: 0;
        font-feature-settings: "tnum";
        --panel-width: calc(100vw - 70px);
        font-family: inherit;
        text-transform: none;
        line-height: 1.5715;
        font-weight: 400;
        text-align: center;
        cursor: pointer;
        user-select: none;
        font-size: 14px;
        color: #fff;
        text-shadow: 0 -1px 0 rgba(0, 0, 0, 0.12);
        box-sizing: border-box;
        max-height: 30px;
        min-height: 20px;
        max-width: 100px;
        height: auto;
        vertical-align: middle;
        border: 0;
        margin-right: 14px;
      }

      #loader {
        display: none;
      }

      .toggleIcon {
        width: 18px;
        height: 18px;
        margin: 0 8px;
      }

      #warning {
        display: none;
      }

      #bugherd_toggle.error #warning,
      #bugherd_toggle.unauthenticated #warning,
      #bugherd_toggle.noAccess #warning,
      #bugherd_toggle.loading #loader {
        display: block;
      }

      #bugherd_toggle.error #icon,
      #bugherd_toggle.loading #icon,
      #bugherd_toggle.noAccess #icon,
      #bugherd_toggle.unauthenticated #icon {
        display: none;
      }

      .tooltip {
        width: 210px;
        background: #333333;
        color: #ffffff;
        text-align: center;
        padding: 10px 20px 10px 20px;
        border-radius: 10px;
        bottom: calc(100%);
        right: -40px;
        position: absolute;
        display: none;
      }

      .tooltip a {
        color: #fff;
      }

      .triangle {
        line-height: 1.5;
        font-family: Montserrat, sans-serif;
        --bg-opacity: 1;
        text-align: center;
        box-sizing: border-box;
        border-style: solid;
        border-width: 0px 6px 6px;
        border-color: transparent transparent #333333;
        position: absolute;
        transform: rotate(180deg);
        bottom: -6px;
        right: 52px;
      }

      .iconContainer {
        position: relative;
        display: flex;
        padding: 10px 0;
      }

      #bugherd_toggle.error .iconContainer:hover .tooltip.cookies {
        display: block;
      }

      #bugherd_toggle.unauthenticated .iconContainer:hover .tooltip.auth {
        display: block;
      }

      #bugherd_toggle.noAccess .iconContainer:hover .tooltip.access {
        display: block;
      }

      #loader path {
        -webkit-animation-name: fade;
        animation-name: fade;
        -webkit-animation-duration: 1s;
        animation-duration: 1s;
        -webkit-animation-iteration-count: infinite;
        animation-iteration-count: infinite;
      }

      #loader path:nth-child(1) {
        -webkit-animation-delay: 0;
        animation-delay: 0;
      }

      #loader path:nth-child(2) {
        -webkit-animation-delay: 0.125s;
        animation-delay: 0.125s;
      }

      #loader path:nth-child(3) {
        -webkit-animation-delay: 0.25s;
        animation-delay: 0.25s;
      }

      #loader path:nth-child(4) {
        -webkit-animation-delay: 0.375s;
        animation-delay: 0.375s;
      }

      #loader path:nth-child(5) {
        -webkit-animation-delay: 0.5s;
        animation-delay: 0.5s;
      }

      #loader path:nth-child(6) {
        -webkit-animation-delay: 0.625s;
        animation-delay: 0.625s;
      }

      #loader path:nth-child(7) {
        -webkit-animation-delay: 0.75s;
        animation-delay: 0.75s;
      }

      #loader path:nth-child(8) {
        -webkit-animation-delay: 0.875s;
        animation-delay: 0.875s;
      }

      @-webkit-keyframes fade {
        from {
          opacity: 0;
        }
        to {
          opacity: 1;
        }
      }

      @keyframes fade {
        from {
          opacity: 0;
        }
        to {
          opacity: 1;
        }
      }
    </style>
  </head>
  <body>
    <button id="bugherd_toggle">
      <div
        style="
          -webkit-text-size-adjust: 100%;
          -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
          --antd-wave-shadow-color: #20c0e7;
          --scroll-bar: 0;
          font-feature-settings: 'tnum';
          --panel-width: calc(100vw - 70px);
          font-family: inherit;
          text-transform: none;
          line-height: 1.5715;
          font-weight: 400;
          text-align: center;
          cursor: pointer;
          user-select: none;
          font-size: 14px;
          color: #fff;
          text-shadow: 0 -1px 0 rgba(0, 0, 0, 0.12);
          box-sizing: border-box;
          background: #0a2d50;
          display: flex;
          justify-content: space-evenly;
          align-items: center;
        "
      >
        <span class="iconContainer"
          ><svg
            class="toggleIcon"
            width="16"
            height="16"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g
              id="loader"
              fill-rule="nonzero"
              stroke="#FFF"
              stroke-linecap="round"
              stroke-width="1.6"
              transform="translate(1 1)"
            >
              <path
                d="M8 0v3.2"
                id="Path"
                stroke="#FFFFFF"
                stroke-width="1.6"
                stroke-linecap="round"
                fill-rule="nonzero"
              ></path>
              <path
                d="M11.392 4.608l2.264-2.264"
                id="Path"
                stroke="#FFFFFF"
                stroke-width="1.6"
                stroke-linecap="round"
                fill-rule="nonzero"
              ></path>
              <path
                d="M12.8 8H16"
                id="Path"
                stroke="#FFFFFF"
                stroke-width="1.6"
                stroke-linecap="round"
                fill-rule="nonzero"
              ></path>
              <path
                d="M11.392 11.392l2.264 2.264"
                id="Path"
                stroke="#FFFFFF"
                stroke-width="1.6"
                stroke-linecap="round"
                fill-rule="nonzero"
              ></path>
              <path
                d="M8 12.8V16"
                id="Path"
                stroke="#FFFFFF"
                stroke-width="1.6"
                stroke-linecap="round"
                fill-rule="nonzero"
              ></path>
              <path
                d="M2.344 13.656l2.264-2.264"
                id="Path"
                stroke="#FFFFFF"
                stroke-width="1.6"
                stroke-linecap="round"
                fill-rule="nonzero"
              ></path>
              <path
                d="M0 8h3.2"
                id="Path"
                stroke="#FFFFFF"
                stroke-width="1.6"
                stroke-linecap="round"
                fill-rule="nonzero"
              ></path>
              <path
                d="M2.344 2.344l2.264 2.264"
                id="Path"
                stroke="#FFFFFF"
                stroke-width="1.6"
                stroke-linecap="round"
                fill-rule="nonzero"
              ></path>
            </g>
            <g
              id="Page-1"
              stroke="none"
              stroke-width="1"
              fill="none"
              fill-rule="evenodd"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              <g transform="translate(1 1)">
                <path
                  id="icon"
                  stroke="#FFF"
                  stroke-width="2"
                  d="M10 13 4 7l6-6"
                ></path>
                <g id="warning" stroke="#F7BF00" stroke-width="1.4">
                  <circle id="Oval" cx="7" cy="7" r="7" fill="#F7BF00"></circle>
                  <path
                    id="Path"
                    d="M7 4.2V7"
                    fill="#0C2E4F"
                    stroke="#0C2E4F"
                  ></path>
                  <path
                    id="Path"
                    d="M7 9.8h.007"
                    fill="#0C2E4F"
                    stroke="#0C2E4F"
                  ></path>
                </g>
              </g>
            </g>
          </svg>
          <div class="tooltip cookies">
            <span class="triangle"></span>
            We couldn't access your cookies, please click the tab again to approve access.
            (<a
              href="https://support.bugherd.com/hc/en-us/articles/4410370902927"
              target="_blank"
              onclick="event.stopPropagation();"
              >why?</a
            >)
          </div>

          <div class="tooltip auth">
            <span class="triangle"></span>
            Click here to login
          </div>

          <div class="tooltip access">
            <span class="triangle"></span>
            You don't have access to this project. (<a
              href="https://support.bugherd.com/hc/en-us/articles/4467525836815"
              target="_blank"
              onclick="event.stopPropagation();"
              >why?</a
            >)
          </div>
        </span>

        <img
          src="/assets/bh_logo_short-1d6af89eca7e694074a6e0bd9201111a89f1683346b813c99cd5b395cf7d7e23.png"
          id="logo"
        />
      </div>
    </button>
    <script src="/embed.js?apikey=ozxhdkzvitxbr3ifod0xcq"></script>
    <script>const getData = key => window.localStorage.getItem(key);

const setData = ({ key, value }) => {
  if (typeof value !== 'string') {
    console.error('[BUGHERD] setData requires a string');
  }
  window.localStorage.setItem(key, value);
};

const xhrRequests = [];

const getXhrRequest = token => {
  const req = xhrRequests.find(request => request.token === token);

  if (!req) {
    return null;
  }

  return req.request;
};

const serializeObj = obj => {
  // Returns only the serializable part of the object

  if (obj instanceof ProgressEvent) {
    // If it's a ProgressEvent, we can't access keys dynamically
    return {
      loaded: obj.loaded,
      total: obj.total,
      lengthComputable: obj.lengthComputable,
      currentTarget: {
        status: obj.currentTarget.status,
        readyState: obj.currentTarget.readyState
      }
    };
  }

  return JSON.parse(JSON.stringify(obj));
};

function dataURLtoFile(dataurl, filename) {
  const arr = dataurl.split(',');
  const mime = arr[0].match(/:(.*?);/)[1];
  const bstr = atob(arr[1]);
  let n = bstr.length;
  const u8arr = new Uint8Array(n);

  while (n--) {
    u8arr[n] = bstr.charCodeAt(n);
  }

  return new File([u8arr], filename, { type: mime });
}

window.addEventListener(
  'message',
  event => {
    try {
      if (event.data) {
        const { data } = event;

        if (data.EVENT_NAME === 'PROXY_FETCH') {
          // Probs shouldn't spread as there's no babel here
          window
            .fetch(...data.payload.fetch)
            .then(res => {
              res.blob().then(blob => {
                event.source.postMessage(
                  {
                    EVENT_NAME: 'PROXY_FETCH_RESPONSE',
                    payload: {
                      token: data.payload.token,
                      fetchResponseBlob: blob,
                      fetchResponseProps: {
                        headers: Array.from(res.headers.entries()),
                        ok: res.ok,
                        redirected: res.redirected,
                        status: res.status,
                        statusText: res.statusText,
                        type: res.type,
                        url: res.url
                      }
                    }
                  },
                  event.origin
                );
              });
            })
            .catch(err => {
              console.log({ error: err, request: data.payload.fetch });
              event.source.postMessage(
                {
                  EVENT_NAME: 'PROXY_FETCH_RESPONSE',
                  payload: {
                    fetchError: err,
                    token: data.payload.token
                  }
                },
                event.origin
              );
            });
        } else if (data.EVENT_NAME === 'PROXY_XHR') {
          const request = getXhrRequest(data.payload.token);

          if (
            data.payload.event !== 'create' &&
            (!request || !data.payload.token)
          ) {
            console.error(
              '[BUGHERD] Proxying XHR events expected to find an initiated Request. None found.',
              { data: data }
            );
            return;
          }

          if (data.payload.event === 'create') {
            const newRequest = new XMLHttpRequest();
            xhrRequests.push({
              token: data.payload.token,
              request: newRequest
            });

            // you can listen to the onload like `request.onload`, so manually
            // track if a request has loaded and then fire an event
            // this will only be a callback if use has done `request.onload`
            // https://developer.mozilla.org/en-US/docs/Web/API/XMLHttpRequest/load_event#syntax
            newRequest.addEventListener('load', (...args) => {
              event.source.postMessage(
                {
                  EVENT_NAME: 'PROXY_XHR_RESPONSE',
                  payload: {
                    token: data.payload.token,
                    event: 'getAllResponseHeaders',
                    args: newRequest.getAllResponseHeaders()
                  }
                },
                event.origin
              );

              event.source.postMessage(
                {
                  EVENT_NAME: 'PROXY_XHR_RESPONSE',
                  payload: {
                    token: data.payload.token,
                    event: 'onload',
                    args: args.map(serializeObj), // This drops everything from the obj that isn't serializable
                    /* accessible values we put on the proxied xhr request */
                    readyState: newRequest.readyState,
                    status: newRequest.status,
                    response: newRequest.response,
                    responseText: newRequest.responseText
                  }
                },
                event.origin
              );
            });

            newRequest.addEventListener('error', (...args) => {
              event.source.postMessage(
                {
                  EVENT_NAME: 'PROXY_XHR_RESPONSE',
                  payload: {
                    token: data.payload.token,
                    event: 'onerror',
                    args: args.map(serializeObj) // This drops everything from the obj that isn't serializable
                  }
                },
                event.origin
              );
            });
          } else if (data.payload.event === 'open') {
            request.open(...data.payload.args);
          } else if (data.payload.event === 'send') {
            if (data.payload.formData) {
              try {
                const formData = new FormData();

                Object.keys(data.payload.formData).forEach(key => {
                  if (key !== 'base64File' && key !== 'base64FileName') {
                    formData.append(key, data.payload.formData[key]);
                  } else if (key === 'base64File') {
                    const fileElem = dataURLtoFile(
                      data.payload.formData[key],
                      data.payload.formData.base64FileName
                    );

                    formData.append('file', fileElem);
                  }
                });

                request.send(formData);
              } catch (err) {
                console.error('[BUGHERD] Error proxying formData', err);
              }
            } else {
              request.send(data.payload.formData);
            }
          } else if (data.payload.event === 'uploadAddEventListener') {
            request.upload.addEventListener(data.payload.name, (...args) => {
              event.source.postMessage(
                {
                  EVENT_NAME: 'PROXY_XHR_RESPONSE',
                  payload: {
                    token: data.payload.token,
                    event: 'uploadAddEventListener',
                    name: data.payload.name,
                    args: args.map(serializeObj) // This drops everything from the obj that isn't serializable
                  }
                },
                event.origin
              );
            });
          } else if (data.payload.event === 'addEventListener') {
            request.addEventListener(data.payload.name, (...args) => {
              event.source.postMessage(
                {
                  EVENT_NAME: 'PROXY_XHR_RESPONSE',
                  payload: {
                    token: data.payload.token,
                    event: 'addEventListener',
                    name: data.payload.name,
                    args: args.map(serializeObj) // This drops everything from the obj that isn't serializable
                  }
                },
                event.origin
              );
            });
          } else if (data.payload.event === 'setRequestHeader') {
            request.setRequestHeader(data.payload.header, data.payload.value);
          }
        } else if (data.EVENT_NAME === 'GET_LOCAL_STORAGE') {
          const localData = getData(data.payload.key);
          event.source.postMessage(
            {
              EVENT_NAME: 'GET_LOCAL_STORAGE_RESPONSE',
              payload: {
                localData,
                token: data.payload.token
              }
            },
            event.origin
          );
        } else if (data.EVENT_NAME === 'SET_LOCAL_STORAGE') {
          setData(data.payload);
        }
      }
    } catch (error) {
      console.error('[BUGHERD] XHR Proxy error', error);
    }
  },
  false
);
</script>
  </body>
</html>
