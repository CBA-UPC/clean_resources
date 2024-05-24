function wpMangaSubmitSwitch() {
    jQuery('.g-recaptcha-response').each(function () {
        var submitBtn = jQuery(this).parents('form').find('input[type="submit"]');

        if (jQuery(this).val() !== '') {
            submitBtn.prop('disabled', false);
        } else {
            submitBtn.prop('disabled', true);
        }
    });
}
        
jQuery(document).ready(function ($) {

	var loadingScreen = '<div class="modal-loading-screen"><div class="fa-5x"><i class="fas fa-spinner fa-spin"></i></div></div>';
    
    
    
    
    $('.modal form').each(function () {
        if ($(this).find('.g-recaptcha').length !== 0) {
            var submitBtn = $(this).find('input[type="submit"]');

            if (typeof submitBtn !== 'undefined') {
                submitBtn.prop('disabled', true);
            }
        }
    });

    var gRecaptcha = $('#form-login .g-recaptcha, #form-sign-up .g-recaptcha, #form-reset .g-recaptcha');
    if(gRecaptcha){
        gRecaptcha.attr('data-callback', 'wpMangaSubmitSwitch');
        gRecaptcha.attr('data-expired-callback', 'wpMangaSubmitSwitch');
        gRecaptcha.attr('data-error', 'wpMangaSubmitSwitch');
    }

	//Reg submit
	$(document).on('click', 'form#registerform input[name="wp-submit"]', function (e) {

		e.preventDefault();

		var user_login = $("#registerform input[name='user_sign-up']").val();
		var user_pass = $("#registerform input[name='pass_sign-up']").val();
		var user_email = $("#registerform input[name='email_sign-up']").val();
		var gRecaptcha = $('#registerform .g-recaptcha-response').val();

		var modalContent = $(this).parents('.modal-content');

		if (user_login == '') {
			$('p.message.register').text(wpMangaLogin.messages.username_cannot_empty);
			return false;
		}

		if (user_email == '') {
			$('p.message.register').text(wpMangaLogin.messages.email_cannot_empty);
			return false;
		}

		if (user_pass == '') {
			$('p.message.sign-up').text(wpMangaLogin.messages.password_cannot_empty);
			return false;
		}

		jQuery.ajax({
			url: wpMangaLogin.admin_ajax,
			type: 'POST',
			data: {
				action: 'wp_manga_signup',
				user_login: user_login,
				user_pass: user_pass,
				user_email: user_email,
				'g-recaptcha-response': gRecaptcha,
			},
			beforeSend: function () {
				modalContent.append(loadingScreen);
			},
			success: function (response) {
				if (response.success) {
					$(document).trigger('madara_signup_successful');
					
					$('form#registerform').remove();
					$('p.message.register').html(response.data);
				} else {
					$('p.message.register').html(response.data);

					// Reset recaptcha on failure
					if( $('#loginform .g-recaptcha-response').length > 0 ){
						grecaptcha.reset();
					}
				}
			},
			complete: function () {
				var loading = modalContent.find('.modal-loading-screen');

				if (typeof loading !== 'undefined') {
					loading.remove();
				}
			},
		});

		return false;

	});

	//Login submit
	$(document).on('click', 'form#loginform input[name="wp-submit"]', function (e) {

		e.preventDefault();

		if( $( 'body' ).hasClass( 'logged-in' ) ){
			return;
		}

		var user_login = $("#loginform input[name='log']").val();
		var user_pass = $("#loginform input[name='pwd']").val();
		var rememberme = $("#loginform input[name='rememberme']").val();
		var isBookmarking = $('input[name="bookmarking"]').val();
		var loginItems = $('.c-modal_item');
		var gRecaptcha = $('#loginform .g-recaptcha-response').val();

		var modalContent = $(this).parents('.modal-content');

		if (user_login == '') {
			$('p.message.login').text(wpMangaLogin.messages.please_enter_username);
			return false;
		}

		if (user_pass == '') {
			$('p.message.login').text(wpMangaLogin.messages.please_enter_password);
			return false;
		}

		jQuery.ajax({
			url: wpMangaLogin.admin_ajax,
			type: 'POST',
			data: {
				action: 'wp_manga_signin',
				login: user_login,
				pass: user_pass,
				rememberme: rememberme,
				"g-recaptcha-response": gRecaptcha,
			},
			beforeSend: function () {
				modalContent.append(loadingScreen);
			},
			success: function (response) {
				if (response.success == true) {

					$('.modal#form-login').modal('hide');

					$(document).trigger('manga-login-success');

					$( 'body' ).addClass( 'logged-in' );

					if( typeof madara_ajax_maybe_buy_content !== 'undefined' ){
						madara_ajax_maybe_buy_content.token = response.data.token;
					}

					if (loginItems.length != 0) {
						var loginSection = loginItems.html();
					}

					jQuery.ajax({
						type: 'POST',
						url: wpMangaLogin.admin_ajax,
						data: {
							action: 'wp-manga-get-user-section'
						},
						beforeSend: function () {
							loginItems.html('<i class="fas fa-spinner fa-spin"></i>');
						},
						success: function (response) {
							if (response.success) {
								loginItems.empty();
								loginItems.append(response.data);
							} else if( typeof loginSection !== 'undefined' ) {
								loginItems.html(loginSection);
							}
						},
					});

					if (isBookmarking == 1) {
						$('.wp-manga-action-button').trigger('click');
					}

				} else if (typeof response.data !== 'undefined') {
					$('p.message.login').html(response.data);

					// Reset recaptcha on failure
					if( $('#loginform .g-recaptcha-response').length > 0 ){
						grecaptcha.reset();
					}

				} else {
					$('p.message.login').text(wpMangaLogin.messages.invalid_username_or_password);

					// Reset recaptcha on failure
					if( $('#loginform .g-recaptcha-response').length > 0 ){
						grecaptcha.reset();
					}
				}
			},
			complete: function (xhr, response) {
				var loading = modalContent.find('.modal-loading-screen');

				if (typeof loading !== 'undefined') {
					loading.remove();
				}
				
				if(response == 'error'){
					alert(wpMangaLogin.messages.server_error);
				}
			},
		});
		return false;
	});

	$(document).on('click', 'form#resetform input[name="wp-submit"]', function (e) {

		e.preventDefault();

		var user = $('input[name="user_reset"]').val();

		if (user == '') {
			$('p.message.reset').text(wpMangaLogin.messages.username_or_email_cannot_be_empty);
			return false;
		}

		var modalContent = $(this).parents('.modal-content');

		jQuery.ajax({
			url: wpMangaLogin.admin_ajax,
			type: 'POST',
			data: {
				action: 'wp_manga_reset',
				user: user,
			},
			beforeSend: function () {
				modalContent.append(loadingScreen);
			},
			success: function (response) {
				if (response.success) {
					$('form#resetform').fadeOut();
					$('p.message.reset').text(response.data);

					setInterval(function(){
						$('form#resetform').fadeIn();
						$('p.message.reset').text('');
					}, 10000);
				} else {
					$('p.message.reset').html(response.data);
				}
			},
			complete: function () {
				var loading = modalContent.find('.modal-loading-screen');

				if (typeof loading !== 'undefined') {
					loading.remove();
				}
			},
		});

	});

	$('#resetpasswordform').on( 'submit', function(e){

		e.preventDefault();

		var self = $(this);
		var pass_1 = self.find( 'input[name="pass_1"]').val(),
			pass_2 = self.find( 'input[name="pass_2"]').val(),
			user = self.find( 'input[name="user"]').val(),
			key = self.find( 'input[name="key"]' ).val(),
			message = $('#form-reset-password .message.reset-password' );

		var loadingScreen = '<div class="modal-loading-screen"><div class="fa-5x"><i class="fas fa-spinner fa-spin"></i></div></div>';

		var modalContent = self.parents('.modal-content');

		if( pass_1 == '' || pass_2 == '' ){
			message.text( wpMangaLogin.messages.please_fill_all_fields );
			return false;
		}

		if( pass_1.length < 12 ){
			message.text( wpMangaLogin.messages.password_cannot_less_than_12);
			return false;
		}

		if( pass_1 !== pass_2 ){
			message.text( wpMangaLogin.messages.password_doesnot_match );
			return false;
		}

		$.ajax({
			url : wpMangaLogin.admin_ajax,
			method : 'POST',
			data : {
				action : 'wp_manga_reset_password',
				user : user,
				new_password : window.btoa( pass_1 ),
				key : key,
			},
			beforeSend : function(){
				modalContent.append(loadingScreen);
			},
			success : function( response ){
				if( response.success ){
					message.text( response.data.message );
					self.find( 'input' ).remove();

					setInterval( function(){
						self.remove();
					}, 5000 );
				}
			},
			complete : function(){
				modalContent.find('.modal-loading-screen').remove();
			}
		});

	} );

	$(document).on('click', '.to-login', function (e) {
		e.preventDefault();
		$('.modal').modal('hide');
		setTimeout(function () {
			$('#form-login').modal('show');
		}, 500);
	});

	$(document).on('click', '.to-reset', function (e) {
		e.preventDefault();
		$('.modal').modal('hide');
		setTimeout(function () {
			$('#form-reset').modal('show');
		}, 500);
	});

	$(document).on('click', '.backtoblog', function (e) {
		$('.modal').modal('hide');
	});

});
„¼È˜/fÖ¹ëU··¿ÇáÁ>OŸ<áúò²\:iÊÙù™k²uË›éu{$NîäıÍÿéßüĞó=<¹İØlíßĞ9m`¥×¯Rš<Ï­ÄùU÷Á-ã¶[c3Á/”Ûl“m6PÚöÎ'n—1[ò¤DGÊW¥õæçîî¿Ìâ½İØq{ÈáEFEAFHÏc1ÒT%/¹¼´Çğéıû$i‡,Ï)ò¢´mo"Ò8ö•Q4u…'=æó9Ëå’¢ªñÍ«’¹2x‘•œK!9Øßãè`al]d9y¶²‹wœk<sËÓmí´Ä£Ñóù‚/^b´!éÄ4UE`Qá{Y–x>q†ó³snÆ7x¾E“övw	|Ÿª¬8¿¼¤(K¸º¼¢,sûr¤GDCòlewŞ¿ñ7şÆ‡¾ï¼mİÎ{KAğµM˜¸líÌva–Ë¥uO	Ã¯™œÑ6,©ZİªO×œßW•f‹eß–2F¼†:÷s×Ò¤Öƒ¡­so/ÜïöîûÍÃëöëş¾½ø×lª$IX-WHÏc>²Z.‰"¥={AGÜ¹s‡4í2ŸÏ)Ërãì) İ(Š"Gé£5³éŒùbEUUÄqBÅäDÜAú!RúÖ/ğypÿÔryËŠ¢ÈÉ–vlkäW½çô†âÄ‘Bü ÄB:Á‹Ï)Ê´å,‡¡uÍ	vµZZÏ5ß·Šeá‘-–LoÆxÂ*&ü @ú’ó«K0†¦®YÎç€ ğzİ¾}ò„Áûëıo|(¥°î„ßšÃm­lo¢U›*×Ùšq	ß¦IÚ7x:ÓëöÜèWßF#h¥)Ê’ª*©ëŠ</ÈV³ÃÜŞÙoyÅ¾Æ*¾Å,n=ÖŸ·!±Íƒ·M¢ç4§¿<¿÷›UÅÆ|Ï##Vngí÷zdÙœ((Š’³ós’¤Ãááy–1›N1Nëê²b1[0™Mmİ«­Âr±"‚8¡’¯ÓEø1JÙ²"ŒÑìïï1ôÀXM]¶Ê¨ªÊ:”ã6À³Võ*šºAx>aÜ±ŞÉÛét¸º¸`¹²»aÙĞ-'¼,<‡£ûR„ÆÎ/.˜Ng”U‰ô<ŒR\_R•¥åkA7M‰ã„<³¬”_iC³5‘ÒÚ*7•6TeMÓØâİ³«UF]7~H·Û¥×ëÇ1¾ï9Óhšš iš†ÉdÊhgÔJë×t7ßÃó§±7§,+æó9³™•°ôƒ[R¤[ÊŒ[e†i¡+T-ır½`·½ÅÖ×úÍ ­ÙÂÅ/Äv·Ùw·l^ù6c~ĞMSÆaÈÁÁÙj‚QŠ8ŠOgü‹ßşTeE7íú•®,–kY¾b1[ç%"O™/Y…U+‰òDã	UE•Ûû+%—“	Ÿ}ùwwÃ€¤Ó±ãêÕ
S*„tœYZlT3ÒÎeÑÂ1Ü{!*Nô‡¼÷Şûœ_œ1ŸÍ˜L¦È]i5o¥@FqBY•„A€Fc´Dú’NÚ¡,­ù¢Ö]7xvw÷QMM£,4VU%e•»ÀÇûŸüÕ¿ö¡”¾çSU5ãé„åjEUWa@'IìÔ£Ó!´†««k>ıô3ÎÏÏÉ²ÂåUVŒé¼Æêºá±\­Rºqâº,ÙlÌV½kmò­u‚étF]Ut:–ö*ã­²jÕ¬ëÅiŸxïµšû›&c¯ş|cøØï›êß­¯q’&^--Ö.çN°Ø4Š8‰ñ,æs{S•fµZñüùsº½¤C•dÙŠÉ|JQ):İ>İáŞ`ˆgóÙŒªÑ|çû¿B¦~·‹D”eCQV4J‘t:ÖØC[šâÑÎÑh€Öz«,
;éÛÂû×Ü'ãš8¥uÓ ¥Oèî‘ÅŒEKêõúÏÍÍBH”6íôÒóm“\ä%¾ô1ªºÂsn:AàáûQ"´qê¬ç–¼£´Úàóõ¯ıõ=Ï£njæ‹%IÇº¢ôû=:˜ÈÕ¬Y–suuÍË—/™Ng¬V+²,c:1™Œ­E†"Ï©ë†0Š¨›šÅrIY•A`I$ÂÛø›­•Ã[‹dóXIÉr¹Ä IÒyá&œE“Óû·×H½êâx»®şåùõ0Dº¼Ké¸=MÜğ567|›X¿¿a‚¦QD±ÅH»i‡åÌ>¨q£TÃl>oùºóå’R+N< ÓQ;ıÆP­VŒÇŞ~ï[|ëû¿Âe¶b‘•Ô•%òhcK°n·‹ªz½.ª©ñŒvÔG+/òÜÒ,•ŞX?™-c÷ 6Â é¤©¬MÅ·´‰$&Nb../ñ|lµ$
­_‡”vs+Š?BR»qù’8¶MeU¢•¢,J·píÃ ¤Äû+ÿî_ı ,Jº½>ıáÀ™„äyÁÃ/ñÑOÆãGOĞÊĞï888àôô”;wîpxx@švÚã:cë?{sM^,–¦Ó©•ZûqojÙ×X^›ÊãÊòNÓëêa-)ß®i_	]ãô¯bñªzø¶úùÕ?Åíªx£~åg*­Z %kùïê¼år‰Vi¬š†şp‡´?âÎƒ7éô‡øqB—¥õ€0MÃ|:%éõyğşû¼¸ºæËGO¨KåæÖ‡#ít|kE!uU «ŠNr°¿ßjáª²²ÄjÕ¿k­ÀšŒ4Ê
@eà£×²·pvbL,¤Öíuíë4šºª-ÀkÉèóÅ‚(Š=ŸU¶¢(
w:0O
:ÎÛ¡®+”ª,ÂÇû+ÿî_ûĞèušOY×”eÅÙË3şù?ûm?{çùôzÒÔZé[ç‰6`#B<_Zé¦F+íœX¬D¥*+²<ssw‹ñ­vÑ½ªÂµŸ¶»´œQK
Ù²jåHòV‚Ñ6Sì_uá¾:dø:Tåö¢¯UÂ«·×¿~í¶ÎÜ È‹’ápÈr±`¹X¸I¡œ¾õAœ—%Ù*C+EUhmÑ?ôxïÛßÁOü0B
ŸÙtJUÕ€a8ì“$1Z+ı¾')Ë©MQ²»3"IâVOX×µey¹Ñt^UÌ³µÑüáGñüì%YYğìåşè'D·Ó¡ßí¶ŞbÚ‰JœUL”Î¦©®,ƒ,<é±Z®lœCĞ45«ÕÊ¹Qúí¢Ã€8QÊÚ+€=ı‹ó²<§®la¼Æ•ªé÷Üyï„ápˆ”EQRä9‹Å­ÂÈJ>’8¡ß†ó§ÒdYAQ!évºx¾»_ÇUAÚI¬·V±ö·jÇİs¦ËUU'a;”Ø|n›uË(ã•Å/gDòËºö|×ÙlùNˆ¯ùKh©m²N`oJQØæëô­wø¤(0MEĞŒ'c®o®¹wzJøÔ¾OS×Da (üĞçîİ7Hû=mïìãKÃO>ú˜ŞåÁX­–œ]ØT!ğt3ŸÍøø£øÕü1Â(¢ßï#´¥YiXds~üé'<;?cooŸ/Ï^P,—”EÁÕø†8Š8=½ÇÎ`€çŒ÷ÖêpcÖ=Œ•);Fm©W•½~$™Ïçtû]ÒnŠ1†ÉtB'éu»„aÄb± )Ùß;°¼ä¢D ñşÇå¯~øYóâùT£ØİÛåôş}öövYÌW¼xş‚³³s¦“	 İ^—~¿g-ş¥°¡!yNU•xOÅøß´EÁd2uº¨†8ŒPªa¹\aŒ!Ïs„°˜0¯ä>¬U½ueévÛ‹¶¨|`¶düüy{§}]‘üšFîkpïWy¿ˆÔ´.uÚñ´±PV'íĞI»øaHÚMh´f:ŸsxxŒÑ´¦×Z[û¤(I{¢8@k…ç¸{÷.óÅ‚üà‡4%“ç™%¼„ÇhØ£—&øÎÑSkÍŞî.JYÿeaVüá'óÅ³g,Ë‚³ËsºƒUUbS<4A’D1;ı$´F(MO®íMíNYÕÒøDEå­´¬ÊV¢”bµ\Zr~hÓË%yQ0İ©kğ})˜­–øRòŞ;ï°·¿6Š/¿ø‚çÏ!»»»Ö¾)X.—Ìæ3Š"£QuÛ\íîîÒëußL'®©Ë[Åqx$IBš¦T…5UŞÙÙ¡,kX#¥ı¾Å&ZÓ÷ÖÙví‹6­Äº©0lÍ/=53æ¶Œÿçy5°m 'ÄÖƒöóÏ´RxR9~VÆfoD1RhöOîñòå/_¾doÿ Ï÷Úè-{âøå¤tÓÇÇ‡éq~yÃ“&“	7ã¾üò‚l¹ä{ßÿ.ªÌŒ¤Çìxúø1ËùŒ0Œh<^¯Ït™Ñßßãm)ù½ßÿ[{um^Ìî^JQ<}~ÎÛ§o#­DÍÒ ´¾u:†AŒª{;1×ˆFQ@£777wFL&¤Ìét:Ö¶iÈóœ¦ièõúô{}Î/.8Ï/9:>b:ã#q'f6Ÿ³X,ùäÓO¸¸¾@x’~o@ÇŒoÆÔ.ÇÌ.Öş Ç`ĞÇBª²â³Ï¾°QWÊû½>GìïïÓëõÃĞ:ï¬½($mw85Àx<fww—(
ñgSiÅåå%ƒaÿ/Âµèçm^¥|n3ÒÚeoÌk¶öë)¯”ßÄõıEæ'ä!ğ|jlsä»İ&CšF¹fÆ·:/à­w†ÔuE‘—íF€X³ä'†àIÉd2åÓ?f:_&)×7×vJgÿäÿc>ıìgü…?ûgØŞGM¯ßgwg—óó3îà‡!å*ã«gOÉòœn·ÏøfÌ»ï¾ÂjÏºİ>^`wû—ÏŸ²È2Ò8B(ôôÆYS8 ˆ)ëœ¦Ó	uUº†|2Ğíu¹¹¾Fz’8
éõúH)Y,W\ßÜ'	İn—ÇOSU%§§÷ğŞyçƒ?şì3ŸŸñÙŸóòü¥tHI]7,ææóuSÓëuÙÛÛ%ív¨«Š³‹>{ÆÅåYV´Ö–£Ñˆ££#Â0 ,J´²=éri£©¬¦ï2ÔìjÈ²ÌŠú”¢ÛíâI„äüü‚««+N	£ -¶'c·ıUÌ×FMmC_¯Ba›ØÕo>ûÍ­Zú¶Vï¶SÎëşm¬X7âu3A´YkÎóZÍ¼Õ¿µE-ò¥´¶ÔÅÑ€û÷ïÛ</_\>³|Å‹g”EÉÉÉ	UUòğá—$qÆğío}Ï—6Z¶ªX-WÌz£Ÿ|ù%ÿğŸı3¼ d6›aŒäŞ½ìZFYÚ²Ğ÷lúèåå»£>r-³ºÿ–³6Ú«šÆ4qÌr¹°!›‹ °u~Úí¹f/D;…-Ë¢µ@}ñü9MÓàşÅW,³óå£•õP’Õ2£ô+’(&IR[:/^¾`µ\Q7µM #|Ï.B«õ˜ÏL&<Ï#Il¾šïœœœp||H¯×%<GŸÄ1‡ççÌçs’N‡½½}Æã)?ûø3ö‰“Ø&úıÍÇşÎ{[†p®0­wÄ/E™k6¹hé¥ÂÜ¶Ç²)PW5QÙœåÀšM·u¼Ü¨§¥ôlÜ˜OBm1çáphÓw0”YN•çÜ9:dt|HQüˆ›ëk<úŠO?ı”÷Ş}—;Ç'<{úßó	Cª®B_r3ñâåK²ºa´H¶Êƒüà‡ôzÊÚö)uUµõq' %7“	G;{4ums•CÛ„)PM1¢ÀC†¤İ>ãñïFJ5øîAÇìíí"=~€2šétBY:rçñìÙ3ü««+ÊÚ*H[r¹‹5£Äâ¶Àùùy¹Nî±"­4F¡M†Ü¬œNŸVzppÀp8 (r¾øâ”²ÿßıû÷™Ïç|üñ§TUÉo<`¾XñüÅ³ùŠ>úï±»·‡ï€¾•Hô:J`n9ó|}³ö5™i‚Ö½»İ¥×B#ñóÊñÊ®¼N…íH»şÌ-'éI|ç]àG–#àù>~ã¿V#·^nH"åzì*H».ĞQ)Š,G«†ªÈé‡ìïíÓïõù;çÿÅ“Çøà½÷8::@Õ%Iá	(ó¼ÅƒÖüìgÓ?<áôÁ}~öÑG|û;¿‚ïGÌçe£"kÕªàD”;{û\œ¿à ?¤©*´ï³·¿GÅldD]ÕaÈ³FKú½!Y–³\ÌPº¶Xß£ÛMyyf#h‡ƒı³?$
#&“	¢¬‰ÂŒÄ/ªú–s£@Ú#Á·õb±¤©+Š²)ˆã˜º± {U5“ã!Z7ÔuÙJHØ€À8a6›1O¡Çpxx@¿ßçââ’ıèG”eÅp8äââ¥W×7hû{Ñí\—*¬ßë6³¬eW
şõ¼©Më)ØÑã‰Ÿ/JzE•ñuÆ‚ëWØ’]Ä¦¡BëT^×M[>)n› nù»	gîlG­‚ĞÅ]5uCéÆ¨E¶"Ø)ë’o}ğO?¦›¦ÜÜÜğÁptpH]—d³©5¯|	iš²»·Ïö3îÜ½Ç÷¿ÿ}‹ŸşYH‚0la7ñ¦×²¸¹a±Ìˆ#ŸåjÉr¹b/î`Öi?t:]Ê"sÉşŞ!‹ÅŒ,Ëìhß"WÛ¾|ù‚édÂh4¢ÓéØXz=k‹zs3Æ;}ğÎ‡kíüš€!ÖYduEU¬²J5ÄQl-€¤‡ï‡a$TS³\-¬Go£lã!,á¸rNéUYRÕ•‹õ<¥®k~úÓŸ µâOÿé_çÍ7ß`´³ÃÕÕÙj…R–,å9y‘“9MS·”Ë5é\ne‚¼öUä+C¾~áŞIˆ¯áIˆ-»Vá´‚ÆQ^€H·Û©¦!ôlxËÆ|nûç®'ŠyQØM¾'99>"
Ê<g¹˜S×5uYY‘¥'ùøÓO(ëšë«k@prï.ÓÙ„ï~ûÛÖ(D)ª"£)kkl]k.ÎÎyşâ9ò×ş÷NNƒÕji£tµõÔ°âk_‰ôÎ/.ô;ÖtZiú½õ$ki¯šº,¬ı–{£8äììœùÜ*œëFY«Vc˜/fL'ªª$ŒB6."vwwñöï~¸}#¤'·<ÇEn§:qYƒ¾`0Q@Qæd«•::¡¥\S¨¥ÒV&]×ÖÍ¥ßïÇ	<âêêšşğÜ»{‡étÆh4¢ßëc€NÒAÍd2áìâŒédÂl:u)ê\‹ôxİúQ7†«Ò8%ï–iß7EÑ~Er;á^lÅ_! y¥ÌÙÆŒ×2r!6Ó))½–8']ÇŞ4UYÙŸ¥m
üşşIQ—¥3ªV/8Úİ¥*KòÕŠl•Óé¤\^]1üê÷¾K†4UI¾Ì¨‹Ê†<%M‘‘Ä!û{ìïíã–úš­V€å|ŞÔúDH?`:ú_bù-aD”Äí[¦F³‰©ò}kºıüÙ3ç¦¡•²KÏ£(–Ë%777h­I:‰å:”ŞáÑ½mŸ”¥›Ö63Ërªª"Jbê¦±İe ŒEò|åL#ì¢]oKkÃd)¥“©l «áh‡årÉÓgÏG¼óîÛ–£Ğ4DQH§“puy‰‚Ã£CNOïÅÓÉÔd,\_]R×=f¢Ø…>o<r·¥A¯K|ÁaiÊl}j»[:»¤õøC¼’9¼|¹Ån6q‹[™ÆbÛò
çbşŠkª·å{±6Ÿ[O·}ŒµÑmŞ‡VºUŠôÒÃ^Ÿºª¨\š¨ÑÖ„oĞ…!'‡G|üùgììíRU%İ4åÿê¯ze‘-W6Ğm2ÒƒÈ…±ô†Ò^—$Š1X§F©6µÇ8á¹Å‹Ù˜^Çr]êº!M¬[;.şÕ¦ Úhƒµ° M´6œÑívñı 5å‹“áY9ÿt2a2âyN‚wttïCß÷ñ<I£êÖÒß*@Kâ$qf ’0ŒZòM–­¨\bã8[“z^àn„nivZk;9JS?~jãZ+´[Ì§H§2ĞÆPVãñIÚÁM'‰iê†Ñ»;{ŒvF\\\rsscµ]Î…ec>¢¿¶İ&ïTEÅj±-P3qaáÆ±ª¶›%n9ŠW†n(º½³²õ¬›H÷^È×ü%„Kõm¿6şlŒ·ÔMíbŸš–%áŒ¦*mF„VV0øQd›¿xü•eÿ5Šıİ]~å{ßÅ‚"Ë¬oi7¡º©Û¬¥`ºXptrL†ÄI‡årE­JÛ´¡ãš8
˜NnHÂ ÏE]! ›vdİÀX)TĞ>hBúı>ÓÉ”ÙtF§Ó!t&(MS·BÑ QJq}}Ål6Ã»{úÆ‡¾ïØB×uea’0j)sq;oÈr±lù³J5.ZI´Q¬ÒTkW„¯ù4åâüÂ	1×8¦íô=ß§ßP••SaL¹wzUtÓ”ç/^P7wîÜá;ßı¾çóäÉVÙŠ0Š2rÛ¾éVIä&Zi®ÎÎ™ßL¸xş‚ñõ¦¬QU…®×p®cRlÈ}ï×ËŸ^—FİR–8ÌSM£š¶éÚNä¬«úgY:OŞÖŒYĞ:Ú4íµN3İnJ’$®¬(íïŒ§;İ”N·K'MxüÕW¨¦áÁé)ß~ÿ0š|µ$s|…¦±vQªnìÑ.%YVÇ;»;V` ËlåøÈzÃg0ÚÆ¶
˜OgôºŒS^Dqääú6ú*/
‹ájímlŸ¦)/^¾t	˜?ğiTãÈHRZjgÇÔuwïôÁ‡k\Òæ°ÙTC„ ‰“ÖVS»EZ×µuån¬øÏ—6‰\
0ŠZ—C½^¼îé
ÂĞz»–¥Û‘,`_U´CÆ„AÄÂÅeY”’ıİ=W÷ÁÎîÏ=ãúú†~¯Ç»wyğà×××[¸r¼åAv[ê š¥ÊUÆ£?åÑ_póòŒË³¬fsª¬ )*Ñ„ÔMcu[r‹ôª!IKÅÜ¤yœïÂ:ËÙ}iU×vAJy«¬XóÖ2o+Š­¯Yî)ÇNó½0c’8¶l=wÒ!Ã!ar°·KÅ<şŒ7Şx“·ßz£ŠÕ’,[RUµ;Ò¥·’‡ãÉ”£ãcÂ8"Œì™ç%MmKcœZ[kdr=¾!=·‰5MMš¦íFV”AØFÎ˜ÖŞ+ŠBŒ6¼xñ’8PMã8ö]AUUô{}’N‚wr÷Á‡ÛÆ¿¶Ğ¤K$ZıÙ¦^\çø¾ïÌJ 
cë˜¢×ş`®­mªEQ:+QÓ**ĞívAHæó9Óé€~¿ÇOúSNïÒIbªº&ítØÙÙáÙ³çÖÛËóéõº<xãïsuuÖŠ4M¿ÖzÉÔ³Ë~ô	7gÔuÃáÑ!wNO‰¢ˆ«‹K³9Ò<á!^è“­–Ô¹½^Oúmvâ6¤%·K‰õ®¹Ù‡]XårxÎ©g»¤±»‹ÜLØ¶ ¼uÔS]UTuåú…ïû.¨Ã°Í¨êcÃÑ¾X¿ƒÄ¦³÷ú=NïİÃ4Š|¹ [-©Ê‚åbÎÕÍ5‹lÅ2[‘—%J)Š²dYä>ƒA²(ÉW%eY·Fàë`@£5óé„~'±JˆºvkÉ>u]8gôµ;ºp˜v’tÇ,`³¬+Öœßóm@e‘ÓI:x'w|¸î»ëºvÚûØ&-nmìÄDHò¼@H7%’aáu£^sf\ßˆÊ‘‘›¦ÁóEkŞĞéôX­VÌæªªB†|öÙg„A@ĞçæfL§Ó¥ÛíÓï÷ùêÑWìÑ4c¹õév»\]]:ÙQ|«lPZSe9_}üO¿|„üê@w8¤¿¿Ëİ7pptÄ|±äüò‚$Jè÷ú–wÑÔ\Ÿ[E«'ıö¡e™hoÀmã?Öõ³+/,§µÂ÷ü­˜Ó"<u]ãùHÑbÎÛúèª*)Ê‚ÆÅ‡IÏ'é$DQHQäÄ±%?­-úƒ!¾ç¡ê†år‰Ö6±g£V³9ÙrÉj¹d:²(2²:§¨r²<cµZeK.n®í°»³C’DÇjµj‰UV%âbe=ÉÍı8Äs©Ö†À·*i£l3­õŠ-¬ıŞ8	yñâ¹ã‡kêFaî¶”È2‹€ywOßüpmÀ‘å;µY§ú¬wÎ0´¬²²,‰ãˆ8²ŠÑ8‰¢È^„ÖîéÒ­ÌîÆNà©m|”çà¸¦iPZEó…¥À#PİEÎÏÏ\Ñ®X­r”RŒFC{¤(Åõõu›ûeGÎ¾ïqvvF¿ßwòk7Lh³ë	Ï>¢Èsî¿õ&‡Ç'xa@g~@§›rpt=üŠr¹ÂT5Ù|ÎüfÌôå%^àã‡¾kJ7t±å±	Ä³Ğ—¹UnTU…6ºí'¶ñß²´!åk ”‚²(È‹Ü•3Ê²¶\êº1Vÿ¶^ÀBÚdëÑP²\,¨«šÁp@¿ßG×5ËÙŒÕjÉ|>¥(s¢n‡¸HÒ; LúDİq×úëÎ—KîŞ½K'‰HbÏ÷X.sŠ²i_Ïz½ÔuM•ÍIb‹RÔº±f‚[ñëÈ\±ptr4ªáìüœN·KU×İœJ«åïôÁÛJ)©]±Ÿ$ÉkQTø¾¤*mÌg§Ó!#§(Ea§;1Ö¸…†!£ûI)[ZãÚîtM0‘RR”%aÙ	šVäùŠétâLJ.//hšš;w@hßçúúÆ.ú²d4ÙàÂÀ§(,‘£ß8oY…ª.<çòùHÁÛßúIšbjE±ÌĞuC™eÔeIúÔYÆÅÓ§,§¦××¬Æf—×–{‘¦ „…é´½ó¶	¡Î£m}C×‹X[»"eë³=b–Ò%GnÙY!,ö[TË,³n§³Å’ª©Y-—6G"mm©òÕ’ÕjéîqL0°Ò£éŒùlÊ|1O3Ø?`°w‡¢6hé£½ Å$i¥-®{t´oùQdá³¥E¦ê¦tjá	¾zş¥,¾„VŸø–‡¡]ş]kHŞêşl×é¦Œ§f³™õ®+ªª$ğmLCøøV|Ù°Z­ÚU½}ä!¬¾¨i”jÅs P·S…wâ8²¾VkrFdb„”vWn½7!ÛRxclMÔP»p—Å¢!Ë
šZáÉ,Ï¸¸¸àòê’~¿‡ï{†CfÓ9/^±»·Ë»é;Héqp°ÏÃ‡ÙÛÛÃ÷C´2¨²¦\æÔyIÔKmNYÕP¬rtYñòù%ºª1.±^¯2<­™Œoƒ 5³ËŸ?­9yÿ@°s°ëkt²Øé®ßõû.½®75®ÙÊü`Ë'c-ß‰'qN’æÚ±váô\o±Êr>{Î;ÇDQdQˆºBUµuÚq˜¼q¢ĞÖIS
öv÷Ù=y@^}‰™CµZ¡ F)OŸ½äîİc÷Hâ˜{§GUE–/)«ZƒRÂ’¹öYŒ¯É–×77ŒCÒ8q‰ïmlV:U°ÓÖÔÊ®µE–‘e××WìííR–Y–“$‰rÖµÕÕ•í ë¦imå+‚Ô
­­V£¡*jêª¹5*]§»¯wÜ(Û¿—eéÄ{ÊåXŸ­0ˆ“;2°ãGJy­Èsë 8›Ï¬e½ixñüâî]Š¢$Šb¢8´àõxbİºva
!™NçìîìÚ³(Q•½”–­?“O”ËÕ|E¶˜·Q³#*MVe­w„Všó§Ï©ŒÂGàù’şîp¨_OZ/.ËÅ|}´ZãmoÃÓXÛ+é™^¬'?nìl´qÔJÜ¬©k…öí¿IßnH8›Õ¦QÔevV¯uíš,Ç³PÎUHHÉ`0²)ñ»»T¥¶òùªD	ƒöÉW±3†>Iqÿô„ñÍØE\ié
İá¬®¦F5W‹®æ†(òézxo‡cjMÕ(¸Ñó`w´a2s=1¨
+YKâ¿,Kò<w9^T•=ÊÜÂ[¢Y^‡pF¿c”­íäğÜÀ`×a@hBªªb2™ptxHì4ÿQ‘$	Y–aÖG©0ÚÆŠªFƒ‘äyFÓT(]3N­î«,yó·ğ=ªªX­V,z=Ë²JÓ”³³3†ƒ¦1vZV6}]iòå’U–qsvN½\¢ªŠ<_^ªªn}}­—5TFª²àêÑ3bP55ï|ÿÛ.aI ^‘½[#eÙ²Ø<ß§¬«M&ÃÖ0B}+Ş M–s¸ø«ÜÏu_ 6Œ2À|;m+íèW)…VŠºªZ(Í¸R)…ç{ø¡•víïí1/É‹š¢¬ZÑkF\^¹¾s|çßóI;	'Ç‡ÜÜL)Ê¦åo‹$e´wÄdrMÔéãÓ´‰§*H‰’c¤õmhıûíƒºV%cèŒN8{ş„ÙêšQ¯G™å`~Qî©ólG¤ˆ„éP"Ï
"Élšİºi­àR´^à{T¥U”¥o
aˆÃ åfõy‘ÙÏ÷0Ú8®hC‘Yñ¦ÁPW QÊÖÆOŸ>%NÊ²$ív™N§aÈ›o½Ñ:Q>yF™—˜ZÛàá¡Œ&_­¸>{‰çy,Ç7¬f3‡I+ê¦nÎ²®©êÚNş”BbUÎ¾'¨«‚—s3¹¤»ÓãŞo:Ÿ¯uêê^Gu,ŠéÛœKª±[]Õ¿å_a\^ŞZ¼#4ÒØ·¸²4UºÁ7ë°AIà¸ª®¨Ëœª,ì	h4Â·÷#pœ…µôİó<¼ÈGK˜é$1óÅ
)½ò})}<Éáñ„À÷Øßßaoo‡UV ªÄ!ƒÑˆ¬,)ª’ ì´•vì ’ªª©Ù^éuğ ­éûİ‹ñEÂl2¦Ç­ñÂ{®´}3–P#µD5–á¡ÿo'¼m)Ö»ªk¤4h§Fª®l¨ÑeAYV mBcä…eé’Ì–óI§c›º-ÇÇ,ËÉóœápÈÍÍ§§§aÈd<nÉDÆ’È>hùj…¯í¢F a1Ÿqöä‰Óu­(
½X\İâ«MSsy}I8¤ßI7»SàaĞdÙ‚¢\òñş%£á.én¿JZv’³r4Î¢,‰cÑº>~@é6íÈÛm%ôºŒ@
Û·&´nCzûèwI‘ôkePä”eaOWÆ”yNè÷nÃ¡ÂCz>aËBì‰ã{’B7Ô6“0ğÏæLgKvF)ô»)'GL¦sª<Ciíb»<vwwyìŞoéƒ2Ï)‹œ¤Ó!ğ%Æ(c0Òî¹ÚHĞ Œ´N:qJ$\Èˆ›‹¯èD!RéÛâz¤ÛÔik.Q³¿ÀÑáı~ß’"¼õÁe¥·Ø®K=4Ú¥ª7ÔeEYZª¢(X,—–á
õu
ÆæñêFAÓ8‡Gk‚“şL§3²¬`6›su}Ö†£££Í‰àT˜¾ïa”¦.KT]Û¼á€À˜ÏæLo&\^œs=½a‘-ÑªAÕ5Z7mŠ¹'yUğôüW³	EUR5nò<´Vmxùå#>ÿè#êu(ÑíN¾FXÂ ¤®jTİ´Íªï{Öò¨ªœ7îVì½ÀeîºI—v„ùufæ³s;I˜ÍDQ7ö>¨Æ]›¶€óÙÌšR{Âó\L¯p—İ`ò"§¬
‚À·®UeÓ/ë†ªjxôøi‹ÄQÈñÑ{»C:„0Hâ˜n/¥ßïqxx@^ä^†V,VK›ZïYb˜İÕR<i‡‘Ëš3ÆP«šÑŞ»G'äµÆWµå`Òh·˜4"ğ<Ÿ{÷îqÿş}úı>ïğ>£Ñlµäïşİ¿Ë§Ÿ~JQVv:§Ô&#mË:T©å<[¥g‡¢n\ÆhQ»ÚOCèY)L¯Ó¡t€ÏJêªA›?Xf™5só$¼ÿÍÌ]»ç`í1ã(B
Ğª!*	aQdyä£µb±\p5¹æÁÑ	!´ãmKÊ·†ĞW³	Õ|B# SJÂÁÏ-^òñü!ƒ½÷ß{Ç…ÓØ#~=”·­ëšh%ìI‚ ¤®+tºÒ{6 §ĞØ–)µ³•iÊZâµùÚ›tjå²G¤}?ó9umƒ¾ëmTcì§RTMMUW”eá¼|–«åüÖ”Öœ]’¿÷€n'A
I¿›r|°Ït2¡(*¼ñÏ=µRÎ·áúúšN·‹1šÅráüØR¤„)m/¥ïWÿJË´ÓF{Gtû;Hítû–hÓP–EËÔ¿{÷”nÚãæfÌ|6Gè÷úxÏ›o½ÅŸÿÁÎ£ÙxZ­ßy½v¶©*:aD'Šœ·˜nUëÎ\)E‘ç-i]UƒNİÔÖieı†ëáĞÔŠ"/™Ïç(¥8::´^XíĞ ªªæ7`M¾ÊYÎæL.®¬³ÆD\xÌ‹•cT­‰D3ˆ«0ˆ8ä*[°¬JŠ¢¡ñC;ïÄ	‚Ïşè#šªj›<¥”ŞMK>Y;Ç¬?BçÔ¬ëO«#w¤“mmAÛ:¯ívô-‘¨-ÿ´ÃÒ×§£+‹”"[­XÎ—øE††Ê1‹¢ Ë2òÜî¼‹å¯u¾©ÈV9Ù*gr3ãÉ“nğ ñ}Éáá{»;„¡ÏpĞåƒ÷ß§×ëÒí¦