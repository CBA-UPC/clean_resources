// @ts-nocheck
/* eslint-disable no-var */
var quickchat_busy = false
var pending_alert = null

var VOICE_OUT = false
var VOICE_IN = false

var MAX_RECORDING_TIME = 10 // max recording time in secs

var tts_audio

var SCENARIO_ID = document.getElementById('quickchat_script').getAttribute('scenario_id')
var WEBSOCKETS_ON = false
var API_SERVER_URL = 'dedicatedgz90xh.quickchat.ai'
var STATIC_SERVER_URL = 'https://storage.googleapis.com/quickchat-files/appquickchat'
var AVATAR_DIR_URL = 'https://storage.googleapis.com/quickchat-files/appquickchat/media/chat_avatars'
var HUMAN_OPERATOR = false
var CUSTOM_COLOR = '#007bff'
var CUSTOM_WIDGET = null
var API_KEY = null
var additional_init_params = document.getElementById('quickchat_script').hasAttribute('init_params_json') ? JSON.parse(document.getElementById('quickchat_script').getAttribute('init_params_json')) : {}

var link = document.createElement('link')
link.rel = 'stylesheet'
link.type = 'text/css'
link.href = STATIC_SERVER_URL + '/static/user_kit/quickchat.css'
document.head.appendChild(link)

function isHidden (e) {
  var style = window.getComputedStyle(e)
  return (style.display === 'none')
}

function showPreloader (show) {
  var loader = '<svg xmlns="http://www.w3.org/2000/svg" id="quickchat-preloader" viewBox="0 0 24 24"><circle cx="18" cy="12" r="0" fill="currentColor"><animate attributeName="r" begin=".67" calcMode="spline" dur="1.5s" keySplines="0.2 0.2 0.4 0.8;0.2 0.2 0.4 0.8;0.2 0.2 0.4 0.8" repeatCount="indefinite" values="0;2;0;0"/></circle><circle cx="12" cy="12" r="0" fill="currentColor"><animate attributeName="r" begin=".33" calcMode="spline" dur="1.5s" keySplines="0.2 0.2 0.4 0.8;0.2 0.2 0.4 0.8;0.2 0.2 0.4 0.8" repeatCount="indefinite" values="0;2;0;0"/></circle><circle cx="6" cy="12" r="0" fill="currentColor"><animate attributeName="r" begin="0" calcMode="spline" dur="1.5s" keySplines="0.2 0.2 0.4 0.8;0.2 0.2 0.4 0.8;0.2 0.2 0.4 0.8" repeatCount="indefinite" values="0;2;0;0"/></circle></svg>'
  if (show) {
    document.getElementById('quickchat-messages').insertAdjacentHTML('beforeend', loader)
    document.getElementById('quickchat-messages').scroll({ top: document.getElementById('quickchat-messages').scrollHeight, behavior: 'smooth' })
  } else {
    if (document.getElementById('quickchat-preloader') !== null) {
      document.getElementById('quickchat-preloader').remove()
    }
  }
}

function appendMessage (text, chat_avatar, delay, show_preloader) {
  setTimeout(function () {
    document.getElementById('quickchat-messages').insertAdjacentHTML('beforeend', quickchat._generateBotMessage(text, `${AVATAR_DIR_URL}/${chat_avatar}`))

    var preloader_delay = show_preloader ? 500 : 0
    setTimeout(function () {
      showPreloader(show_preloader)
    }, preloader_delay)

    document.getElementById('quickchat-messages').scroll({ top: document.getElementById('quickchat-messages').scrollHeight, behavior: 'smooth' })
  }, delay)
}

var first_open = true
var initial_messages = {}
function appendInitialMessages () {
  if (first_open) {
    if (Array.isArray(initial_messages.opener)) {
      for (var i = 0; i < initial_messages.opener.length; i++) {
        appendMessage(initial_messages.opener[i][0], initial_messages.chat_avatar, initial_messages.opener[i][1], i < initial_messages.opener.length - 1)
      }
    } else {
      appendMessage(initial_messages.opener, initial_messages.chat_avatar, 0, false)
    }
    first_open = false
  }
}

(('docReady', window)

function showWidget (show) {
  if (CUSTOM_WIDGET) {
    if (show) {
      document.getElementById('quickchat-button').style.backgroundColor = 'transparent'
      document.getElementById('quickchat-fa-comment-dots').style.display = 'none'
      document.getElementById('quickchat-fa-times').style.display = 'none'
      document.getElementById('quickchat-status').style.display = 'none'
      document.getElementById('quickchat-custom-widget-image').style.display = 'block'
      document.getElementById('quickchat-custom-widget-image').setAttribute('src', `${AVATAR_DIR_URL}/${CUSTOM_WIDGET}`)
    } else {
      document.getElementById('quickchat-button').style.backgroundColor = '#fff'
      document.getElementById('quickchat-fa-comment-dots').style.display = 'none'
      document.getElementById('quickchat-fa-times').style.display = 'block'
      document.getElementById('quickchat-status').style.display = 'none'
      document.getElementById('quickchat-custom-widget-image').style.display = 'none'
      document.getElementById('quickchat-custom-widget-image').setAttribute('src', '')
    }
  } else {
    if (show) {
      document.getElementById('quickchat-button').style.backgroundColor = CUSTOM_COLOR
      document.getElementById('quickchat-fa-comment-dots').style.display = 'block'
      document.getElementById('quickchat-fa-times').style.display = 'none'
      document.getElementById('quickchat-status').style.display = 'block'
      document.getElementById('quickchat-custom-widget-image').style.display = 'none'
      document.getElementById('quickchat-custom-widget-image').setAttribute('src', '')
    } else {
      document.getElementById('quickchat-button').style.backgroundColor = '#fff'
      document.getElementById('quickchat-button').setAttribute('onclick', '')
      document.getElementById('quickchat-fa-comment-dots').style.display = 'none'
      document.getElementById('quickchat-status').style.display = 'none'
      document.getElementById('quickchat-fa-times').style.display = 'block'
    }
  }
}

// window.onload = function() {
docReady(function () {
  API_KEY = document.body.hasAttribute('api_key') && document.body.getAttribute('api_key').length > 0 && document.body.getAttribute('api_key') != 'None' ? document.body.getAttribute('api_key') : SCENARIO_ID

  document.body.insertAdjacentHTML('beforeend', `
    <div id="quickchat-button" style="display: none">
      <svg style="height: 34px; width: 34px" id="quickchat-fa-comment-dots" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="comment-dots" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" class="svg-inline--fa fa-comment-dots fa-w-16 fa-3x"><path fill="currentColor" d="M256 32C114.6 32 0 125.1 0 240c0 49.6 21.4 95 57 130.7C44.5 421.1 2.7 466 2.2 466.5c-2.2 2.3-2.8 5.7-1.5 8.7S4.8 480 8 480c66.3 0 116-31.8 140.6-51.4 32.7 12.3 69 19.4 107.4 19.4 141.4 0 256-93.1 256-208S397.4 32 256 32zM128 272c-17.7 0-32-14.3-32-32s14.3-32 32-32 32 14.3 32 32-14.3 32-32 32zm128 0c-17.7 0-32-14.3-32-32s14.3-32 32-32 32 14.3 32 32-14.3 32-32 32zm128 0c-17.7 0-32-14.3-32-32s14.3-32 32-32 32 14.3 32 32-14.3 32-32 32z" class=""></path></svg>
      <svg style="height: 26px; width: 18px" id="quickchat-fa-times" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="times" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 352 512" class="svg-inline--fa fa-times fa-w-11 fa-3x"><path fill="currentColor" d="M242.72 256l100.07-100.07c12.28-12.28 12.28-32.19 0-44.48l-22.24-22.24c-12.28-12.28-32.19-12.28-44.48 0L176 189.28 75.93 89.21c-12.28-12.28-32.19-12.28-44.48 0L9.21 111.45c-12.28 12.28-12.28 32.19 0 44.48L109.28 256 9.21 356.07c-12.28 12.28-12.28 32.19 0 44.48l22.24 22.24c12.28 12.28 32.2 12.28 44.48 0L176 322.72l100.07 100.07c12.28 12.28 32.2 12.28 44.48 0l22.24-22.24c12.28-12.28 12.28-32.19 0-44.48L242.72 256z" class=""></path></svg>
      <div id="quickchat-status"></div>
      <img id="quickchat-custom-widget-image" src='' style="height: 100%; width: 100%; border-radius: 50%" />
    </div>
    <div id="quickchat-intro-div" onclick="maximizeChat(event)">
      <p id="quickchat-popup-text"></p>
      <button id="quickchat-popup-close-btn" onclick="closeWidgetPopup(event)">
        <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="times" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 352 512" class="svg-inline--fa fa-times fa-w-11 fa-3x"><path fill="currentColor" d="M242.72 256l100.07-100.07c12.28-12.28 12.28-32.19 0-44.48l-22.24-22.24c-12.28-12.28-32.19-12.28-44.48 0L176 189.28 75.93 89.21c-12.28-12.28-32.19-12.28-44.48 0L9.21 111.45c-12.28 12.28-12.28 32.19 0 44.48L109.28 256 9.21 356.07c-12.28 12.28-12.28 32.19 0 44.48l22.24 22.24c12.28 12.28 32.2 12.28 44.48 0L176 322.72l100.07 100.07c12.28 12.28 32.2 12.28 44.48 0l22.24-22.24c12.28-12.28 12.28-32.19 0-44.48L242.72 256z" class=""></path></svg>
      </button>
      <div id="quickchat-triangle"></div>
    </div>
    <div id="quickchat-modal-div" scenario_id="" conv_id="" style="display: none">
      <button id="quickchat-btn-minimize" onclick="minimizeChat(event)">
        <svg style="height: 16px; width :16px" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="window-minimize" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" class="svg-inline--fa fa-window-minimize fa-w-16 fa-3x"><path fill="currentColor" d="M464 352H48c-26.5 0-48 21.5-48 48v32c0 26.5 21.5 48 48 48h416c26.5 0 48-21.5 48-48v-32c0-26.5-21.5-48-48-48z" class=""></path></svg>
      </button>
      <button id="quickchat-mute-btn" onclick="toggleMuteButton()">
        <svg data-toggle="popover" class="icon" style="height: 18px; width: 18px" aria-hidden="true" focusable="false" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><path fill="currentColor" d="M333.1 34.8C344.6 40 352 51.4 352 64V448c0 12.6-7.4 24-18.9 29.2s-25 3.1-34.4-5.3L163.8 352H96c-35.3 0-64-28.7-64-64V224c0-35.3 28.7-64 64-64h67.8L298.7 40.1c9.4-8.4 22.9-10.4 34.4-5.3zm172 72.2c43.2 35.2 70.9 88.9 70.9 149s-27.7 113.8-70.9 149c-10.3 8.4-25.4 6.8-33.8-3.5s-6.8-25.4 3.5-33.8C507.3 341.3 528 301.1 528 256s-20.7-85.3-53.2-111.8c-10.3-8.4-11.8-23.5-3.5-33.8s23.5-11.8 33.8-3.5zm-60.5 74.5C466.1 199.1 480 225.9 480 256s-13.9 56.9-35.4 74.5c-10.3 8.4-25.4 6.8-33.8-3.5s-6.8-25.4 3.5-33.8C425.1 284.4 432 271 432 256s-6.9-28.4-17.7-37.3c-10.3-8.4-11.8-23.5-3.5-33.8s23.5-11.8 33.8-3.5z" /></svg>
      </button>
       <button id="quickchat-unmute-btn" onclick="toggleMuteButton()">
        <svg data-toggle="popover" class="icon" style="height: 20px; width: 20px" aria-hidden="true" focusable="false" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512"><path fill="currentColor" d="M38.8 5.1C28.4-3.1 13.3-1.2 5.1 9.2S-1.2 34.7 9.2 42.9l592 464c10.4 8.2 25.5 6.3 33.7-4.1s6.3-25.5-4.1-33.7l-88-69C582.8 365 608 313.4 608 256c0-60.1-27.7-113.8-70.9-149c-10.3-8.4-25.4-6.8-33.8 3.5s-6.8 25.4 3.5 33.8C539.3 170.7 560 210.9 560 256s-20.7 85.3-53.2 111.8c-.9 .7-1.7 1.5-2.4 2.3l-43.6-34.2c5.5 .1 11.1-1.6 15.7-5.4C498.1 312.9 512 286.1 512 256s-13.9-56.9-35.4-74.5c-10.3-8.4-25.4-6.8-33.8 3.5s-6.8 25.4 3.5 33.8C457.1 227.6 464 241 464 256s-6.9 28.4-17.7 37.3c-7.6 6.2-10.4 16-8 24.9L384 275.7V64c0-12.6-7.4-24-18.9-29.2s-25-3.1-34.4 5.3l-115.9 103L38.8 5.1zM64 224v64c0 35.3 28.7 64 64 64h67.8L330.7 471.9c9.4 8.4 22.9 10.4 34.4 5.3S384 460.6 384 448V398.5L93.8 169.9C75.9 181.2 64 201.2 64 224z"></path></svg>
      </button>
      <div id="quickchat-modal-body">
        <div id="quickchat-header">
          <h5 id="quickchat-first-header">
          </h5>
          <p id="quickchat-second-header"></p>
        </div>
        <div id="quickchat-messages">
          <p id="warning-message"></p>
        </div>
      </div>
      <div id="quickchat-footer">
        <a id="quickchat-livechat-url" target="_blank" rel="noopener"><button id="quickchat-talk-to-human"><svg id="quickchat-icon-human" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="user" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" class="svg-inline--fa fa-user fa-w-14 fa-3x"><path fill="currentColor" d="M224 256c70.7 0 128-57.3 128-128S294.7 0 224 0 96 57.3 96 128s57.3 128 128 128zm89.6 32h-16.7c-22.2 10.2-46.9 16-72.9 16s-50.6-5.8-72.9-16h-16.7C60.2 288 0 348.2 0 422.4V464c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48v-41.6c0-74.2-60.2-134.4-134.4-134.4z" class=""></path></svg></button></a>
        <div id="quickchat-input-container">
          <textarea id="quickchat-input" placeholder="" maxlength="600"></textarea>
          <button id="quickchat-rec-btn">
            <svg style="height: 16px; width: 16px" aria-hidden="true" focusable="false" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"><path fill="currentColor" d="M192 0C139 0 96 43 96 96V256c0 53 43 96 96 96s96-43 96-96V96c0-53-43-96-96-96zM64 216c0-13.3-10.7-24-24-24s-24 10.7-24 24v40c0 89.1 66.2 162.7 152 174.4V464H120c-13.3 0-24 10.7-24 24s10.7 24 24 24h72 72c13.3 0 24-10.7 24-24s-10.7-24-24-24H216V430.4c85.8-11.7 152-85.3 152-174.4V216c0-13.3-10.7-24-24-24s-24 10.7-24 24v40c0 70.7-57.3 128-128 128s-128-57.3-128-128V216z"/></svg>
          </button>
          <button id="quickchat-stop-rec-btn">
            <svg style="height: 16px; width: 16px" aria-hidden="true" focusable="false" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="currentColor" d="M256 512c141.4 0 256-114.6 256-256S397.4 0 256 0S0 114.6 0 256S114.6 512 256 512zM192 160H320c17.7 0 32 14.3 32 32V320c0 17.7-14.3 32-32 32H192c-17.7 0-32-14.3-32-32V192c0-17.7 14.3-32 32-32z"/></svg>
          </button>
          <button id="quickchat-send-msg-btn">
            <svg style="height: 16px; width: 16px" aria-hidden="true" focusable="false" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="currentColor" d="M476 3.2L12.5 270.6c-18.1 10.4-15.8 35.6 2.2 43.2L121 358.4l287.3-253.2c5.5-4.9 13.3 2.6 8.6 8.3L176 407v80.5c0 23.6 28.5 32.9 42.5 15.8L282 426l124.6 52.2c14.2 6 30.4-2.9 33-18.2l72-432C515 7.8 493.3-6.8 476 3.2z" class=""></path></svg>
          </button>
        </div>
        <p id="quickchat-powered-by-definitely-not-you">Powered by <a href="https://quickchat.ai/" target="_blank" id="quickchat-link">Quickchat AI</a></p>
      </div>
    </div>`)

  // $('quickchat-unmute-btn').hide()
  var unmuteButtonElementId = 'quickchat-unmute-btn'
  document.getElementById(unmuteButtonElementId).style.display = 'none'

  var xmlhttp = new XMLHttpRequest()
  xmlhttp.onreadystatechange = function () {
    if (xmlhttp.readyState === XMLHttpRequest.DONE) { // XMLHttpRequest.DONE == 4
      if (xmlhttp.status === 200) {
        var data = JSON.parse(xmlhttp.response)
        var unmuteButtonElement = document.getElementById(unmuteButtonElementId)

        VOICE_OUT = data.voice_active // by default set both voice in & out to voice_active
        VOICE_IN = VOICE_OUT

        document.getElementById('quickchat-stop-rec-btn').style.display = 'none'
        if (unmuteButtonElement) {
          unmuteButtonElement.style.display = 'none'
        }

        if (!VOICE_OUT) {
          document.getElementById('quickchat-rec-btn').style.display = 'none'
          if (unmuteButtonElement) {
            unmuteButtonElement.style.display = 'none'
          }
        }

        initial_messages = { opener: data.opener, chat_avatar: data.chat_avatar, custom_widget: data.custom_widget }
        CUSTOM_COLOR = data.custom_color
        CUSTOM_WIDGET = data.custom_widget

        document.getElementById('quickchat-modal-div').setAttribute('scenario_id', SCENARIO_ID)
        document.getElementById('quickchat-modal-div').setAttribute('conv_id', data.conv_id)
        document.getElementById('quickchat-first-header').innerHTML = data.first_header
        if (data.second_header) {
          document.getElementById('quickchat-second-header').innerHTML = (data.second_header)
        } else {
          document.getElementById('quickchat-second-header').remove()
        }
        if (data.livechat_url) {
          document.getElementById('quickchat-livechat-url').setAttribute('href', data.livechat_url)
        } else {
          document.getElementById('quickchat-livechat-url').remove()
        }
        if (document.getElementById('warning-message') != null) document.getElementById('warning-message').innerHTML = data.background_text
        document.getElementById('quickchat-popup-text').innerHTML = data.popup_text
        document.getElementById('quickchat-input').setAttribute('placeholder', data.chat_input_placeholder)

        showWidget(true)
        document.getElementById('quickchat-button').setAttribute('onclick', 'maximizeChat(event)')
        document.getElementById('quickchat-button').style.display = 'flex'

        if (data.white_label) {
          document.getElementById('quickchat-powered-by-definitely-not-you').style.setProperty('display', 'none', 'important')
        }

        if (data.popup_text.length > 0) {
          setTimeout(function () {
            if (isHidden(document.getElementById('quickchat-modal-div'))) {
              document.getElementById('quickchat-intro-div').style.display = 'block'
              document.getElementById('quickchat-intro-div').animate([{ transform: 'translateX(50px)' }, { opacity: 1 }], { duration: 200, easing: 'ease-in' })
              setTimeout( 200)
            }
          }, 1000)
        }
        if (WEBSOCKETS_ON) {
          const ws = new WebSocket(`wss://${API_SERVER_URL}/ws/conv_id/${data.conv_id_encr}/`.replaceAll('=', ''))
          ws.onopen = function (e) {}
          ws.onmessage =           ws.onerror = function (e) {}
          ws.onclose =         }
      }
    }
  }
  xmlhttp.open('POST', `https://${API_SERVER_URL}/init/`, true)
  var params = `scenario_id=${SCENARIO_ID}&api_key=${API_KEY}`
  var additional_init_params_string = Array.from(Object.keys(additional_init_params), .join('&')
  if (additional_init_params_string != '') {
    params = params + '&' + additional_init_params_string
  }
  xmlhttp.setRequestHeader('Content-type', 'application/x-www-form-urlencoded')
  xmlhttp.setRequestHeader('Accept-Language', quickchat._detectLanguage())
  xmlhttp.send(params)
  addWidgetEventListeners()
})

function addWidgetEventListeners () {
  var inputElement = document.getElementById('quickchat-input')
  inputElement.addEventListener('keydown', 

  inputElement.addEventListener('keyup', event => {
    if (event.keyCode === 13 && !quickchat_busy) {
      sendMessageToAPI()
    } else {
      resetRecordingButtons()
    }
  })

  inputElement.addEventListener('input', function () {
    this.style.height = 0
    this.style.height = (this.scrollHeight) + 'px'
  }, false)

  document.getElementById('quickchat-send-msg-btn').addEventListener('click', 

  document.getElementById('quickchat-rec-btn').addEventListener('click', startRecording)
  document.getElementById('quickchat-stop-rec-btn').addEventListener('click', stopRecording)
}

function resetRecordingButtons () {
  if (VOICE_OUT) {
    if (document.getElementById('quickchat-input').value === '') {
      document.getElementById('quickchat-rec-btn').style.display = 'block'
    } else {
      document.getElementById('quickchat-rec-btn').style.display = 'none'
      document.getElementById('quickchat-send-msg-btn').style.display = 'block'
    }
  }
}

async function startRecording () {
  // if mediaRecorder not yet defined
  if (!mediaRecorder) {
    if (navigator.mediaDevices && navigator.mediaDevices.getUserMedia) {
      navigator.mediaDevices.getUserMedia({ audio: true }).then(function (stream) {
        mediaRecorder = new MediaRecorder(stream)
        mediaRecorder.ondataavailable =         mediaRecorder.onstop = function (e) {
          IS_TRANSCRIBING = true
          document.getElementById('quickchat-input').placeholder = 'Processing...'

          const blob = new Blob(chunks, { type: TYPE })
          chunks = []
          var fd = new FormData()
          fd.append('audio_data', blob, 'filename')
          fd.append('conv_id', document.getElementById('quickchat-modal-div').getAttribute('conv_id'))
          fd.append('type', TYPE)
          fd.append('scenario_id', SCENARIO_ID)
          var xmlhttp = new XMLHttpRequest()
          xmlhttp.onreadystatechange = function () {
            if (xmlhttp.readyState === XMLHttpRequest.DONE) {
              if (xmlhttp.response.length > 0) {
                var data = JSON.parse(xmlhttp.response)
                if (data.transcription.length > 0) {
                  document.getElementById('quickchat-input').value = data.transcription.trim()
                }
              }
              IS_TRANSCRIBING = false
            }
          }
          xmlhttp.open('POST', `https://${API_SERVER_URL}/quick_transcribe/`, true)
          xmlhttp.send(fd)
        }
        startMediaRecorder()
      }).catch(
    } else {
      alert('getUserMedia not supported on your browser!')
    }
  } else {
    startMediaRecorder()
  }
}

function startMediaRecorder () {
  if (mediaRecorder.state === 'inactive') {
    mediaRecorder.start()
    changeRecordingButtonsWhileRecording()
  }
  checkIfFinishedRecording()
}

function changeRecordingButtonsWhileRecording () {
  document.getElementById('quickchat-input').disabled = true
  document.getElementById('quickchat-stop-rec-btn').style.display = 'block'
  document.getElementById('quickchat-rec-btn').style.display = 'none'
  PLACEHOLDER = document.getElementById('quickchat-input').placeholder
  document.getElementById('quickchat-input').placeholder = 'Recording...'
}

function checkIfFinishedRecording () {
  setTimeout(function () {
    if (mediaRecorder.state !== 'inactive') {
      document.getElementById('quickchat-stop-rec-btn').click()
    }
  }, 1000 * MAX_RECORDING_TIME)
}

async function stopRecording () {
  // stop recording
  if (mediaRecorder.state !== 'inactive') {
    document.getElementById('quickchat-stop-rec-btn').style.display = 'none'
    document.getElementById('quickchat-rec-btn').style.display = 'block'
    document.getElementById('quickchat-rec-btn').disabled = true
    mediaRecorder.stop()

    await sleep(500)
    while (IS_TRANSCRIBING) {
      await sleep(100)
    }

    document.getElementById('quickchat-input').placeholder = PLACEHOLDER

    if (document.getElementById('quickchat-input').value !== '') {
      document.getElementById('quickchat-rec-btn').style.display = 'none'
      document.getElementById('quickchat-send-msg-btn').style.display = 'block'
      document.getElementById('quickchat-input').disabled = false
    }
    document.getElementById('quickchat-input').disabled = false
    document.getElementById('quickchat-rec-btn').disabled = false
  }
}

function handleWebsocketPush (payload) {
  if (payload.type === 'push.message') {
    publishPushedMessage(payload.content)
  }
  if (payload.type === 'push.pause') {
    handlePushedPause(payload.content)
  }
}

function publishPushedMessage (content) {
  if (document.getElementById('quickchat-message-footnote') != null) document.getElementById('quickchat-message-footnote').remove()
  document.getElementById('quickchat-messages').insertAdjacentHTML('beforeend', quickchat._generateBotMessage(content.msg.text, document.getElementById('quickchat-avatar-img').getAttribute('src')))
  document.getElementById('quickchat-messages').scroll({ top: document.getElementById('quickchat-messages').scrollHeight, behavior: 'smooth' })
}

function handlePushedPause (content) {
  HUMAN_OPERATOR = content.human_operator
  var alert = $('.quickchat-messages-alert').length ? HUMAN_OPERATOR ? 'You\'re now talking to a Human' : null : 'Please wait for a Human Agent to join...'
  if (quickchat_busy === false) {
    if (alert === null) {
      return
    }
    document.getElementById('quickchat-messages').insertAdjacentHTML('beforeend', `<p class="quickchat-messages-alert"><span>${alert}</span></p>`)
    document.getElementById('quickchat-messages').scroll({ top: document.getElementById('quickchat-messages').scrollHeight, behavior: 'smooth' })
  } else {
    pending_alert = alert
  }
}

function minimizeChat (e) {
  e.stopPropagation()
  document.body.classList.remove('quickchat-noscroll')
  document.getElementById('quickchat-modal-div').classList.remove('maximize')
  document.getElementById('quickchat-modal-div').classList.add('minimize')
  setTimeout(function () {
    document.getElementById('quickchat-modal-div').style.display = 'none'
    document.getElementById('quickchat-button').setAttribute('onclick', 'maximizeChat(event)')
  }, 200)
  showWidget(true)
}

function maximizeChat (e) {
  appendInitialMessages()
  e.stopPropagation()
  document.body.classList.add('quickchat-noscroll')
  document.getElementById('quickchat-intro-div').style.display = 'none'
  document.getElementById('quickchat-modal-div').style.display = 'flex'
  document.getElementById('quickchat-modal-div').classList.remove('minimize')
  document.getElementById('quickchat-modal-div').classList.add('maximize')
  setTimeout( 200)
  showWidget(false)
}

function closeWidgetPopup (e) {
  e.stopPropagation()
  document.getElementById('quickchat-intro-div').style.display = 'none'
}

function sendMessageToAPI () {
  var currentdate = new Date()
  var minutes = currentdate.getMinutes() < 10 ? '0' + currentdate.getMinutes() : currentdate.getMinutes()
  var time_now = currentdate.getHours() + ':' + minutes
  var message = document.getElementById('quickchat-input').value.replaceAll('&', 'and')

  if (message.trim().length > 0) {
    document.getElementById('quickchat-input').value = ''
    document.getElementById('quickchat-input').style.height = '35px'

    if (document.getElementById('warning-message') != null) document.getElementById('warning-message').remove()
    if (document.getElementById('quickchat-message-footnote') != null) document.getElementById('quickchat-message-footnote').remove()

    document.getElementById('quickchat-messages').insertAdjacentHTML('beforeend', '<p class="quickchat-message human">' + message + '</p><p id="quickchat-message-footnote">Sending...</p>')
    document.getElementById('quickchat-messages').scroll({ top: document.getElementById('quickchat-messages').scrollHeight, behavior: 'smooth' })

    setTimeout(function () {
      document.getElementById('quickchat-message-footnote').innerHTML = 'Delivered&nbsp;&nbsp;' + time_now
    }, 500)

    if (!HUMAN_OPERATOR) {
      quickchat_busy = true
      document.getElementById('quickchat-input').disabled = true
      document.getElementById('quickchat-rec-btn').disabled = true
      document.getElementById('quickchat-send-msg-btn').disabled = true
      setTimeout( 1000)
    }

    var xmlhttp = new XMLHttpRequest()
    xmlhttp.onreadystatechange = function () {
      if (xmlhttp.readyState === XMLHttpRequest.DONE) { // XMLHttpRequest.DONE == 4
        if (xmlhttp.status === 200) {
          var data = JSON.parse(xmlhttp.response)

          if ('return_url' in data && data.return_url !== '') {
            var redirect_timeout = 4000
            setTimeout( redirect_timeout)
          }

          if ('reply' in data) {
            var timeout = data.src === 1 ? 0 : 500

            setTimeout(function () {
              quickchat_busy = false
              showPreloader(false)
              if (document.getElementById('quickchat-message-footnote') != null) document.getElementById('quickchat-message-footnote').remove()
              document.getElementById('quickchat-input').disabled = false
              document.getElementById('quickchat-input').focus()
              document.getElementById('quickchat-send-msg-btn').disabled = false
              document.getElementById('quickchat-rec-btn').disabled = false
              if (data.reply !== '') {
                document.getElementById('quickchat-messages').insertAdjacentHTML('beforeend', quickchat._generateBotMessage(data.reply, document.getElementById('quickchat-avatar-img').getAttribute('src')))
              }
              if (pending_alert != null) {
                document.getElementById('quickchat-messages').insertAdjacentHTML('beforeend', `<p class="quickchat-messages-alert"><span>${pending_alert}</span></p>`)
                pending_alert = null
              }
              document.getElementById('quickchat-messages').scroll({ top: document.getElementById('quickchat-messages').scrollHeight, behavior: 'smooth' })

              if ('tts_url' in data && VOICE_IN) {
                if (tts_audio) {
                  tts_audio.pause()
                }
                tts_audio = new Audio(`https://${API_SERVER_URL}/static/audio/${data.tts_url}`)
                tts_audio.play()
              }
            }, timeout)
          }
        } else if (xmlhttp.status === 402) {
          quickchat_busy = false
          showPreloader(false)
          if (document.querySelector('.preview')) {
            document.getElementById('quickchat-messages').insertAdjacentHTML('beforeend', '<p class="quickchat-messages-alert text-danger"><span>Message limit reached. Upgrade subscription.</span></span></p>')
            document.getElementById('quickchat-messages').scroll({ top: document.getElementById('quickchat-messages').scrollHeight, behavior: 'smooth' })
          }
        }
      }
    }
    xmlhttp.open('POST', `https://${API_SERVER_URL}/chat/`, true)
    var params = `voice_message=${VOICE_IN ? 1 : 0}&client_timestamp=${Date()}&scenario_id=${SCENARIO_ID}&api_key=${API_KEY}&conv_id=${document.getElementById('quickchat-modal-div').getAttribute('conv_id')}&ord_number=${document.getElementsByClassName('quickchat-message').length + 1}&text=${message}`
    xmlhttp.setRequestHeader('Content-type', 'application/x-www-form-urlencoded')
    xmlhttp.setRequestHeader('Accept-Language', quickchat._detectLanguage())
    xmlhttp.send(params)
  }
  resetRecordingButtons()
}


function toggleMuteButton () {
  VOICE_IN = !VOICE_IN
  if (VOICE_IN) {
    document.getElementById('quickchat-mute-btn').style.display = 'block'
    document.getElementById('quickchat-unmute-btn').style.display = 'none'
  } else {
    document.getElementById('quickchat-mute-btn').style.display = 'none'
    document.getElementById('quickchat-unmute-btn').style.display = 'block'
    if (tts_audio) {
      tts_audio.pause()
    }
  }
}

var quickchat = {
  _detectLanguage: function _detectLanguage () {
    var htmlLang = document.documentElement.lang
    var navigatorLang = navigator.language || navigator.userLanguage
    if (htmlLang === navigatorLang) {
      return htmlLang
    }
    return [htmlLang, navigatorLang].filter(Boolean).map(function (lang, index) {
      var quality = (10 - index) / 10
      return lang + (quality === 1 ? '' : ';q=' + quality)
    }).join(',')
  },
  _generateBotMessage: }

/*

quickchat audio functionality

*/

var TYPE
var IS_TRANSCRIBING
var PLACEHOLDER

if (MediaRecorder.isTypeSupported('audio/ogg')) {
  TYPE = 'audio/ogg; codecs=opus'
} else if (MediaRecorder.isTypeSupported('audio/mp4')) {
  TYPE = 'audio/mp4'
} else if (MediaRecorder.isTypeSupported('audio/webm')) {
  TYPE = 'audio/webm; codecs=opus'
}

var mediaRecorder
var chunks = []
