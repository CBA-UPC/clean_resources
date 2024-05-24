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
��Ș/fֹ�U������>O�<���\:i����k�u˛�u{$N����������=<���l���9m`���R�<ϭ��U��-�[c3�/��l�m6P���'n��1[�DG�W����������q{��EFEAFH�c1��T%�/��������$i�,�)򢝴mo"�8��Q4u�'=��9�咢��ͫ��2x���K!9����`al
S*�t�Y
;������'�8�u� �O��ŌEK�������
�_��vs+�?BR�q���8�MeU���,J�p�� ���+��_��,J��>������y��/��O��GO����888����;w�pxx@�v��:�c�?{sM^,��ө�Z�qoj��X^�����N���a-)߮i_	]���b�z�����?���x�~�g*�Z�%k����r�Vi����p��?�΃7���qB�����0M�|:%��y��������GO�K��և#�t|kE!uU���Nr���j᪲��čjտk�����4�
@e�ײ�p�vbL,���u��4���-�k���ł(�=�U��(
w:0O
:�ۡ�+��,����+��_���u��OYהe���3��?�m�?{����z��Z�[��6`#�B<_Z�F+�X�D�*+�<ssw��vѽ�µ�����QK
ٲj�H�V��6S�_u�:d�:T����U���׿~폶�� ȋ��p�r�`�X�I����A���%�*C+EUhm�?�x����O�0B
��tJUՀa8�$1Z+��')��MQ��3"I�VOX׵ey��t^U̳����G���%YY�����'D�ӡ����bډJ���UL�Φ��,�,<�Z�l�C�45��ʹQ���À8�Q��+�=����<��la�������y��p��EQR�9�����J>�8������dYAQ!�v�x���_��UA�I��V���jǍ�s��UU'a;��|n��u�(��/gD�˺�|��l�N���Kh�m�N`oJQ�����w��(0ME��'c�o��wzJ�ԾOS�Da (�����7H�=m
�gSi���%�a�/µ��m^�|n3��eo�k���)������E�'�!�|jls��&C�F�fƷ:/�w��uE���F�X���'���I�d2�ӏ?f:_&)�7�vJg���c>��g��?�g��GM��gwg���3�����!�*�gO��n���f̻��jϺ�>^`w��ϟ��2�8B(����YS8�� �)뜝���	uU��|2���u���Fz�8
���H)Y,W\��'	�n��OSU%�����y�?��3�����������tHI]7,���uS��u���%�v������>{���YV�֖�ш��#�0�,J��=�ri�����2��jȲ̊������I�������+N��	��-�'c��U��FMmC_�Ba���o>�ͭZ��V�S���m�X7�u3A�Yk��Zͼ��
#&�	������/���s�@�#���b���+��)�㘺� {U5��!Z7�u�JH؀�8a6�1O��pxx@�������G�e�p8����W�7h
����M�)��㉟/JzE��uƂ�Wؒ]Ħ�B�T^�M[>)n� n��	g�lG����]5uC�ƨE�"
�<g��S�5uYY��'���O(��k@pr�.�ل�~���(D)�"�)kkl]k.��y��9����NN���ji�t��԰��k_���/.�;�tZi����$ki���,���{�8�����*��FY�Vc�/fL'��$�B6.�"vww���~�}#�'�<�En�:qY��`0Q@Q�d��::��\S����V&]��ͥ���	��<�����ܻ{��t�h4���c�N�A�d2����d�l:u)�
���IQ��3�V/8�ݥ*K�Պl���\^]�1����K�4UI�̨�ʆ<%M���!�{��������V���|���DH?`:�_b�-aD���[��F
�b��k���{�6�[O�}���mއV�U����^����\���քo��!'�G|��g���RU%�4���ze��-W6�m2҃ȅ���^�$�1X��F�6��8�Ş
�NnH� �E]!��v�d��X)T�>hB��>�ɔ�tF��!t&(MS�B� QJq}}�l6û{�Ƈ���B�uea�0j)sq;�o�r�l��J5.ZI�Q��TkW����4����	1�8���=ߧ�P��SaL�wz�UtӔ�/^P7
�Og���S^Dq���6�*/
��j�ml���)/^�t	�?�iT��HRZjg��u�w����k\���TC� ���VS�EZ׵u�n��ϗ6�\
�0�Z�C�^���
��z���ۑ,`_U��CƄA���eY�����=W����Ϟ=����~�ǝ�wy�����[�r��Av[�����Uƣ�?��_p��˳�fs���)*���Mcu[r���!IK�ܤy���:��}iU�vAJy��X��2o+���Y�)�N��0�c�8�l=w�!Ý!ar��K�<��7�x���z��Ւ,[RU�;�����
c똢��`��m�EQ:+Q�**��vAH��9���~��O�SN��Ib��&�t����ٳ��������<x���suu�֊4M��z��
�Z�ɐ,ϸ�����~���{�Cf�9/^����˻�;H�qp��Ç�����C�2���\��yI�KmNY�P�rtY���%��1.�^�2<���o��5�˟?�9y�@�s��kt����ߏ��.��75����`�'c-��'qN��ڱv��\o��r�>{Ν;�DQdQ��BU�u�q��q���IS
�v��=y@^}��C�Z���F)O�����c��H�{�GUE�/)�Z�R��Y��ɖ�77�C�8q��mlV:U����ʮ�E��e��W���R�Y��$�rֵ�
��V��*jꪹ5*]���w�(�ۿ�e��{��X��0���;2��GJy��s�8�Ϭe�ix����]��$�b�8���xb�ݺva
!�N������(Q�������?�O���|E���
�ᬮ�F5W���(��zx�o�cjM�(���`w�a2s=�1�
+YK��,K�<w9^T�=���[�Y^��pF�c��������`
"�l���i���R�^�{T�U��o
a�� �f�y����0�8�hC�Y��PW�Q���O�>%Nʲ$�v�N�ațo��:Q�>yF���Z��ᡌ&_��>{��y,�7�f3�I+�nβ����N��BbUξ'�����s3������o:��u���^Gu,��ۜK���[]����_a\^��Z�#4������4U��7�AI����˜�,�	h4·�#p������<��GK��$1��
)��})}�<����������aoo�UV����!�ш�,)�� ��v� �����^�u𠭝
�X\��MSsy}I8��I7�S�a�dق�\���%��.�n�JZv���r4΢,�cѺ>~@�6����m%���@
���&�nCz��wI����keP�eaOWƔyN��ná�Cz>a�B��{�B7�6��0���LgKvF)���)'GL�s�<Ci�b�<vwwy��o��2�)����!�%�(c0���H� ��N:qJ$\Ȉ����D!R���z���
�u�
����FA�8�Gk����L�3��`6�su}�ֆ���͉�T���a��.KT]�������Lo&\^�s=�a�-ѪA�5Z7m��'yU���W�	EUR5n�<�Vmx��#>��#�u(���N�FX� ��jTݴͪ�{�򨪜7�V��e�I�v��uf��s;I��DQ7�>��]�����̚R{��\L�p
�����Ue�/놪jx��i���Q���{�C:��0H�n/���qxx@^�^�V,VK�Z�Yb���
Ъ!�*	aQdy䣵b�\p5����	!��mKʷ��W�	�|B#�SJ���-^���!����{ǅ��#~=�����h�%�I� ��+t�ҍ{��6 ��ؖ)���i�Z��ڍ�tj�G�}?�9um���mTc�RTMMUW�e�|����֔֜�]����n'A
I��r|��t2�(*��Ϟ=�Rη����N��1��r���R����)m