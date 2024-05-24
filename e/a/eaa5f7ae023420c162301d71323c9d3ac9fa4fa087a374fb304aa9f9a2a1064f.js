const options = {"workboxURL":"https://cdn.jsdelivr.net/npm/workbox-cdn@5.1.4/workbox/workbox-sw.js","importScripts":[],"config":{"debug":false},"cacheOptions":{"cacheId":"lotto432-prod","directoryIndex":"/","revision":"lENuNMPA2lvo"},"clientsClaim":true,"skipWaiting":true,"cleanupOutdatedCaches":true,"offlineAnalytics":false,"preCaching":[{"revision":"lENuNMPA2lvo","url":"/?standalone=true"}],"runtimeCaching":[{"urlPattern":"/_nuxt/","handler":"CacheFirst","method":"GET","strategyPlugins":[]},{"urlPattern":"/","handler":"NetworkFirst","method":"GET","strategyPlugins":[]}],"offlinePage":null,"pagesURLPattern":"/","offlineStrategy":"NetworkFirst"}

importScripts(...[options.workboxURL, ...options.importScripts])

initWorkbox(workbox, options)
workboxExtensions(workbox, options)
precacheAssets(workbox, options)
cachingExtensions(workbox, options)
runtimeCaching(workbox, options)
offlinePage(workbox, options)
routingExtensions(workbox, options)

function getProp(obj, prop) {
  return prop.split('.').reduce((p, c) => p[c], obj)
}

function initWorkbox(workbox, options) {
  if (options.config) {
    // Set workbox config
    workbox.setConfig(options.config)
  }

  if (options.cacheNames) {
    // Set workbox cache names
    workbox.core.setCacheNameDetails(options.cacheNames)
  }

  if (options.clientsClaim) {
    // Start controlling any existing clients as soon as it activates
    workbox.core.clientsClaim()
  }

  if (options.skipWaiting) {
    workbox.core.skipWaiting()
  }

  if (options.cleanupOutdatedCaches) {
    workbox.precaching.cleanupOutdatedCaches()
  }

  if (options.offlineAnalytics) {
    // Enable offline Google Analytics tracking
    workbox.googleAnalytics.initialize()
  }
}

function precacheAssets(workbox, options) {
  if (options.preCaching.length) {
    workbox.precaching.precacheAndRoute(options.preCaching, options.cacheOptions)
  }
}


function runtimeCaching(workbox, options) {
  const requestInterceptor = {
    requestWillFetch({ request }) {
      if (request.cache === 'only-if-cached' && request.mode === 'no-cors') {
        return new Request(request.url, { ...request, cache: 'default', mode: 'no-cors' })
      }
      return request
    },
    fetchDidFail(ctx) {
      ctx.error.message =
        '[workbox] Network request for ' + ctx.request.url + ' threw an error: ' + ctx.error.message
      console.error(ctx.error, 'Details:', ctx)
    },
    handlerDidError(ctx) {
      ctx.error.message =
        `[workbox] Network handler threw an error: ` + ctx.error.message
      console.error(ctx.error, 'Details:', ctx)
      return null
    }
  }

  for (const entry of options.runtimeCaching) {
    const urlPattern = new RegExp(entry.urlPattern)
    const method = entry.method || 'GET'

    const plugins = (entry.strategyPlugins || [])
      .map(p => new (getProp(workbox, p.use))(...p.config))

    plugins.unshift(requestInterceptor)

    const strategyOptions = { ...entry.strategyOptions, plugins }

    const strategy = new workbox.strategies[entry.handler](strategyOptions)

    workbox.routing.registerRoute(urlPattern, strategy, method)
  }
}

function offlinePage(workbox, options) {
  if (options.offlinePage) {
    // Register router handler for offlinePage
    workbox.routing.registerRoute(new RegExp(options.pagesURLPattern), ({ request, event }) => {
      const strategy = new workbox.strategies[options.offlineStrategy]
      return strategy
        .handle({ request, event })
        .catch(() => caches.match(options.offlinePage))
    })
  }
}

function workboxExtensions(workbox, options) {
  
}

function cachingExtensions(workbox, options) {
  
}

function routingExtensions(workbox, options) {
  
}
��องคุณ","Delete":"ลบ","Describe_image":"บรรยายหน้าจอ","Drop_file_here":"วางไฟล์ที่นี่","Drop_files_here":"วางไฟล์ที่นี่","Edit_email":"แก้ไขอีเมล","Email_address_verify_link":"ยืนยันที่อยู่อีเมลของคุณ","Email_address_verify_message":"เราจะส่งข้อความไปยังที่อยู่อีเมลนี้เมื่อคุณยืนยันโดยคลิกที่ลิงก์ด้านล่างแล้วเท่านั้น","Email_prompt_confirmation":"เมื่อตัวแทนของเราตอบ เราจะแจ้งให้คุณทราบที่:","Email_prompt_first_time":"เราไม่มีที่อยู่อีเมลของคุณ พิมพ์ที่อยู่อีเมลตรงนี้เพื่อให้เราติดต่อกลับหาคุณได้","Embedded_chat_ended":"สิ้นสุดการแชทแล้ว","Embedded_chat_now":"แชทเลย","Embedded_chat_with":"แชทก ับ %operator%","Embedded_greeting_accept":"แชทเลย","Embedded_invitation_accept":"เริ่มแชท","Embedded_invitation_refuse":"ปิดหน้าต่าง","Embedded_leave_message":"ฝากข้อความ","Embedded_minimize_window":"ย่อหน้าต่าง","Embedded_new_message":"ข้อความใหม่จาก %operator%","Embedded_read_chat_transcript":"อ่านข้อความแชท","Embedded_start_chat_again":"เริ่มแชทอีกครั้ง","Embedded_textarea_placeholder":"เขียนข้อความ...","Embedded_waiting_for_operator":"รอโอเปอเรเตอร์","Enter_email_address":"กรอกที่อยู่อีเมลของคุณ","Facebook_login_button":"ล็อกอินกับเฟซบุ๊ค","Facebook_login_refuse":"ฉันไม่ต้องการล็อกอินกับเฟซบุ๊ค","File_to_upload":"ไฟล์ที่อัพโหลด","File_upload_status":"%finishedCount% จาก %totalCount% ที่อัปโหลด","Files_to_upload":"ไฟล์ที่อัพโหลด","Fill_form_to_send":"กรอกแบบฟอร์มด้านล่างเพื่อส่ง","Forms_privacy_policy_agree":"ข้าพเจ้ายอมรับ","Forms_privacy_policy_consent":"ข้าพเจ้ายอมรับให้มีการถ่ายโอนข้อมูลส่วนบุคคลของข้าพเจ้าโดยผู้ควบคุมข้อมูลไปยังบริษัทในเครือและหน่วยงานอื่น ๆ ที่ผู้ควบคุมข้อมูลใช้บริการขณะทำธุรกิจ","Freshbooks_click_here":"คลิกที่นี่","Freshbooks_invoice_created":"ใบแจ้งหนี้ใหม่สำหรับ \u003cstrong\u003e%amount%\u003c/strong\u003e ถูกสร้างขึ้นแล้ว \u003cbr\u003eกรุณาเช็คว่ารายละเอียดทั้งหมดถูกต้อง","Freshbooks_to_download":"สำหรับดาวน์โหลดโดยตรง","Go_back_upload_list":"กลับไปที่รายการอัปโหลด","Good":"ดี","Got_it":"เข้าใจแล้ว!","Hide_greeting":"ซ่อนข้อความต้อนรับ","Invalid_email":"อีเมล์ไม่ถูกต้อง","Joinme_info":"\u003cstrong\u003e%sender%\u003c/strong\u003e ต้องการให้คุณ \u003cstrong\u003eแชร์เดสก์ท็อปของคุณ\u003c/strong\u003e. \u003cbr\u003e การแชร์คือ \u003cstrong\u003eถูกป้องกันความปลอดภัย\u003c/strong\u003e โดย LogMeIn","Joinme_session_rejected":"เดสก์ทอประยะไกลถูกปฏิเสธ","Joinme_session_started":"เดสก์ทอประยะไกลได้เริ่มขึ้นแล้ว","Leave_chat_confirm":"แน่ใจว่าต้องการปิดแชท","Loading":"โปรดรอ","Loading_previous_messages":"กําลังโหลดข้อความก่อนหน้า","Lost_Connection":"การเชื่อมต่อหายไป กรุณาเช็คการเชื่อมต่ออินเทอร์เน็ตของคุณและลองอีกครั้ง","Message_delivered":"ส่ง","Message_not_sent":"ยังไม่ส่งข้อความ","Message_read":"อ่าน","Message_sent":"ส่งข้อความของคุณแล้ว","Mute":"ปิดเสียง","New_greeting_default_message":"สวัสดี โปรดแจ้งให้เราทราบหากมีข้อสงสัย","New_message":"ข้อความใหม่","New_messages":"ข้อความใหม่","New_messages_notification":"ข้อความแจ้งข้อความใหม่","Next_item":"ข้อความถัดไป","No":"ไม่มี","Not_sent_yet":"ยังไม่ส่ง","Offline_form":"ฝากข้อความ ","Offline_form_submit_label":"ฝากข้อความ","Offline_message_failed":"เราไม่สามารถฝากข้อความให้คุณได้ กรุณาลองอีกครั้งภายหลัง","Offline_message_sent":"ขอบคุณ! ข้อความของคุณถูกส่งไปแล้ว อีกไม่นานทีมสนับสนุนของเราจะติดต่อคุณ ","Open_livechat":"เปิด LiveChat","Open_menu":"เปิดเมนู","Open_new_tab":"เปิดในแท็บใหม่","Operator_closed_session":"%operator% ปิดแชทไปแล้ว","Operator_is_typing":"%operator% กำลังพิมพ์","Operator_joined_conference":"%operator% ได้เข้าร่วมการประชุม","Operator_left_conference":"%operator% ออกจากการประชุมแล้ว","Postchat_case_resolved_question":"เรื่องดังกล่าวได้รับการแก้ไขระหว่างการแชทหรือไม่","Postchat_first_time_question":"นี่เป็นครั้งแรกที่คุณแชทกับเราเกี่ยวกับเรื่องนี้หรือไม่","Postchat_leave_comment":"ขอบคุณที่จัดอันดับ! คุณสามารถให้ความเห็นได้ในช่องว่างทางด้านล่าง:","Postchat_rate_agent_question":"คุณพึงพอใจกับความเป็นมืออาชีพของตัวแทนหรือไม่","Postchat_rate_chat":"คุณจะให้คะแนนแชทนี้เท่าใด","Prechat_submit_label":"เริ่มแชท","Previous_item":"ข้อความก่อนหน้า","Prohibited_file_type":"ชนิดของไฟล์ไม่ได้รับอนุญาต","Push_page_accept":"เปิดหน้านี้","Push_page_accepted":"คุณถูกนำไปที่หน้า","Push_page_cancel":"ยกเลิก","Push_page_or":"หรือ","Push_page_refused":"คุณได้ปฏิเสธที่จะเปิดหน้า","Push_page_requested":"%operator% ต้องการเปิดหน้านี้ในบราวเซอร์ของคุณ:","Queue":"คิว","Rate_agent":"ให้คะแนนตัวแทน","Rate_bad_and_open_modal":"ให้คะแนนไม่ดีและเปิดความคิดเห็นในรูปแบบ","Rate_good_and_open_modal":"ให้คะแนนดีและเปิดความคิดเห็นในรูปแบบ","Rate_me_add_comment":"ขอบคุณที่จัดอันดับ! คุณยังให้ความเห็นได้ด้วย:","Rate_me_bad":"ไม่ดี","Rate_me_bad_tooltip":"ให้คะแนนแย่","Rate_me_cancel":"การโหวตของคุณถูกยกเลิกไปแล้ว","Rate_me_cancel_tooltip":"ยกเลิกจัดอันดับ","Rate_me_comment_added":"คุณได้ให้ความเห็นต่อไปนี้: %comment%","Rate_me_confirmation_bad":"คุณให้คะแนนฝ่ายบริการลูกค้าของเรา แย่","Rate_me_confirmation_good":"คุณให้คะแนนฝ่ายบริการของเรา ดี","Rate_me_good":"ดี","Rate_me_good_tooltip":"ให้คะแนนดี","Rate_me_placeholder":"พิมพ์ความเห็นของคุณ...","Reconnecting":"กำลังเชื่อมต่อใหม่","Remove_file":"ลบไฟล์ %name%","Role_Support_Angel":"โอเปอเรเตอร์ผู้ให้ความช่วยเหลือ","Save_image_alternative_text":"บันทึกข้อความอื่นของภาพ","Screenshot_permission_error":"เราไม่สามารถแชร์หน้าจอของคุณได้ โปรดตรวจสอบสิทธิ์ของเบราว์เซอร์ของคุณ","Scroll_latest_message":"เลื่อนไปยังข้อความล่าสุด","Scroll_latest_messages":"เลื่อนไปยังข้อความล่าสุด","Send":"ส่ง","Send_chat_transcript_to":"ส่งสำเนาแชทไปยัง:","Send_file":"ส่งไฟล์","Send_files":"ส่งไฟล์","Send_message":"ส่งข้อความ","Send_transcript":"ส่งสำเนา","Send_transcript_to_email":"ส่งข้อความแชทไปยังอีเมล์ของคุณ","Show_less":"แสดงน้อยลง","Show_more":"แสดงมากขึ้น","Skill_status_offline":"ออฟไลน์","Skill_status_online":"ออนไลน์","Sounds":"เสียง","Submit":"ส่งมอบ","Submit_email":"ส่งอีเมล","Survey_fill_in_required_fields":"กรุณากรอกช่องบังคับ","Theme_options":"ตัวเลือก","Tickets_attachments":"เอกสารแนบ:","Tickets_author":"ผู้เขียน:","Tickets_auto_solve_message":"เนื่องจากเราไม่ได้รับข่าวคราวของคุณใน 7 วันที่ผ่านมา เราจึงได้ระบุตั๋วของคุณเป็นตั๋วที่ขายแล้ว เพื่อที่จะเปิดตั๋วอีกครั้ง โปรดตอบกลับมายังข้อความนี้","Tickets_date":"วันที่:","Tickets_follow_up_message":"ข้อความนี้ถูกส่งให้แก่คุณเมื่อ 3 วันก่อน โปรดตอบสนองหากคุณมีสิ่งใดๆ ที่จะเพิ่มเติม","Tickets_message":"ข้อความ:","Tickets_new_message":"ข้อความใหม่","Tickets_rating_bad_full":"ไม่ดี ฉันรู้สึกไม่พึงพอใจ","Tickets_rating_bad_short":"ไม่ดี","Tickets_rating_case_reminder":"นี่คือการเตือนความจำเกี่ยวกับกรณีที่มีปัญหาโดยย่อ:","Tickets_rating_good_full":"ดี ฉันรู้สึกพึงพอใจ","Tickets_rating_good_short":"ดี","Tickets_rating_intro":"โปรดสละเวลาสักครู่เพื่อประเมินการบริการลูกค้าที่คุณได้รับ","Tickets_rating_thank_you":"ขอขอบคุณ","Tickets_rating_you_rated":"คุณได้ประเมินการบริการลูกค้าเป็น","Tickets_ticket":"คำขอ","Tickets_ticket_created":"คำขอกรณีของคุณถูกสร้างแล้ว","Tickets_ticket_is_solved":"ขณะนี้กรณีของคุณถูกแก้ปัญหาแล้ว!","Tickets_ticket_reopened":"ตอบกลับกรณีแล้ว","Today":"วันนี้","Try_again":"ลองใหม่","Unmute":"เปิดเสียง","Upload_error":"อัปโหลดล้มเหลว","Upload_files":"อัพโหลดไฟล์","Upload_success":"อัปโหลดสำเร็จ","Uploading":"กำลังอัพโหลด","User_Transfer":"คุณถูกโอนสายไปยัง: %operator%.","User_in_queue":"ตัวแทนของเราจะติดต่อคุณ คุณอยู่ในคิวหมายเลข %number%  เวลารอของคุณประมาณ  %minutes% นาที ขอขอบคุณที่คุณรอ","User_in_queue_unknown_time":"ตัวแทนของเราจะติดต่อคุณ คุณอยู่ในคิวหมายเลข %number% ","Welcome_title":"ยินดีต้อนรับสู่ LiveChat","Welcome_to_chat":"สวัสดีค่ะ LEO88 ยินดีให้บริการค่ะ  สมาชิกต้องการติดต่อสอบถามปัญหาด้านไหน สอบถามได้เลยค่ะ ","Write_a_message":"เขียนข้อความ...","Yes":"ใช่","Yesterday":"เมื่อวาน","You_are_banned_message":"คุณไม่ได้รับอนุญาตให้เข้ามาที่แชทนี้ชั่วคราว","Zendesk_ticket_created":"ตั๋วสนับสนุนสำหรับคดีของคุณถูกสร้างขึ้นแล้ว","Zendesk_ticket_notification":"คุณจะถูกอีเมล์ไปที่ %email% เมื่อได้รับการแก้ไข","_version":"eba06b85eeddbb03b525edca517128a9","files_failed_to_upload":"การอัพโหลด %files% ไฟล์ ล้มเหลว","forms_choose":"-- เลือก --","forms_choose_department":"เลือกแผนก:","forms_email":"อีเมล์:","forms_email_confirmation":"ฉันต้องการรับจดหมายข่าวแคมเปญ","forms_first_answer":"คำตอบแรก","forms_message":"ข้อความ:","forms_name":"ชื่อ:","forms_offline_info":"ขณะนี้โอเปอเรเตอร์ของเราไม่ว่าง กรุณาฝากข้อความและเราจะติดต่อคุณในเร็วๆนี้","forms_question":"คำถาม:","forms_read_transcript":"อ่านบทหรือสำเนาแชท","forms_second_answer":"คำตอบที่สอง","forms_skill_one":"ทักษะ 1","forms_skill_two":"ทักษะ 2","forms_subject":"เรื่อง:","forms_thank_you":"ขอขอบคุณสำหรับการแชท อย่าเกรงใจที่จะแสดงความคิดเห็นเพิ่มเติม","forms_welcome":"ยินดีต้อนรับสู่ LiveChat ของเรา! กรุณากรอกแบบฟอร์มด้านล่างก่อนเริ่มแชท","greeting_default_message":"สวัสดี โปรดแจ้งให้เราทราบหากมีข้อสงสัย","hide":"ซ้อน","upload_failed":"อัพโหลดล้มเหลว"});