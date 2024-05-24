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
��Ș/fֹ�U������>O�<���\:i����k�u˛�u{$N����������=<���l���9m`���R�<ϭ��U��-�[c3�/��l�m6P���'n��1[�DG�W����������q{��EFEAFH�c1��T%�/��������$i�,�)򢝴mo"�8��Q4u�'=��9�咢��ͫ��2x���K!9����`al]d9y���w�k<s��m�������/^b�!��4UE`Q�{Y�x>q��sn�7x�E��vw	|���8���(K����,s�r�GDC�lew޿�7�Ƈ��m��{KA�M���l��va�˥uO	ï���6,�ZݪOל�W�f�eߖ2F��:�s�Ҥփ��so/���������������l�$IX-WH�c>��Z.�"��={AGܹs�4�2��)�r��) �(�"G��5���bEUU�qB��D�A�!R��/�yp��ryˊ��ɖvlk�W����đB� �B:����)���,��u�	�v�ZZ�5߷�e�-�Lo�x�*&� @���K0���Y�� �zݾ}������o|(��ߚ�m�lo�U�*�ٚq�	ߦI�7x:������W�F#h�)ʒ�*��</�V������oyž�*��,n=֟�!�̓�M��4��<���U��|�#�#Vng��zdٜ((����s�����y�1�N1N��b1[0�Mmݫ��r�"��8����E�1Jٲ"������1��XM]�ʨ��:��6��V�*��Ax>aܱ�Ɏ���t���`����aٍ�-'�,<���R���/.�Ng�U��<�R\�_R���kA7M��<���_iC�5���*7�6TeM���ݳ��UF]7~H�ۥ���1��9�h�� i���d�hg�J��t7�����7�,+��9������[R�[ʌ[e�i�+T-�r�`������� ����/�v��w�l�^�6c~�MS�a����j�Q�8�Og����TeE7����,�kY�b1[��%"�O�/Y�U+��D�	UE���+%��	�}�wwÀ�ӱ���
S*�t�YZlT3��e��1�{!*N�����_�1�͘L��]i5o��@FqBY��A�Fc�D��Nڡ,����]7xvw�QMM�,4VU%e�������տ�����SU5���jEUWa@'I�ԣ�!�����k>��3���ɲ��UV�����\��R�q�,�l�V�km�u���tF]Ut:���*���jլ��i�xﵚ��&c��|c����߭�q�&^--�.�N��4�8��,�s{S�f�Z���s����C�dي�|JQ):�>���`�g�ٌ��|���B�~��D�eCQV4J�t:��C[���ΐ�h��z�,
;������'�8�u� �O��ŌEK�������BH�6����m�\�%��1���sn:A���Q"�q��������������=ϣnj�%IǺ���=:���լY�suu�˗/�Ng�V+�,c:�1���E�"ϩ�0�����rIY�A`I$�������[�d�XI�r�� I�y��&�E�����H���x������0D��K�=M��567|�X���a��QD��H�i���>�q�T�l>o����R+N<��Q;��P�V���~�[|����e�b��ԕ%�hcK�n���z�.���v�G+�/���,��X?�-c� 6�� 餩��Mŷ���$&Nb../�|�l�$
�_��vs+�?BR�q���8�MeU���,J�p�� ���+��_��,J��>������y��/��O��GO����888����;w�pxx@�v��:�c�?{sM^,��ө�Z�qoj��X^�����N���a-)߮i_	]���b�z�����?��x�~�g*�Z�%k����r�Vi����p��?�΃7���qB�����0M�|:%��y��������GO�K��և#�t|kE!uU���Nr���j᪲��čjտk�����4�
@e�ײ�p�vbL,���u��4���-�k���ł(�=�U��(
w:0O
:�ۡ�+��,����+��_���u��OYהe���3��?�m�?{����z��Z�[��6`#�B<_Z�F+�X�D�*+�<ssw��vѽ�µ�����QK
ٲj�H�V��6S�_u�:d�:T����U���׿~폶�� ȋ��p�r�`�X�I����A���%�*C+EUhm�?�x����O�0B
��tJUՀa8�$1Z+��')��MQ��3"I�VOX׵ey��t^U̳����G���%YY�����'D�ӡ���bډJ���UL�Φ��,�,<�Z�l�C�45��ʹQ��À8�Q��+�=����<��la�������y��p��EQR�9�����J>�8������dYAQ!�v�x���_��UA�I��V���jǍ�s��UU'a;��|n��u�(��/gD�˺�|��l�N���Kh�m�N`oJQ�����w��(0ME��'c�o��wzJ�ԾOS�Da (�����7H�=m���K�O>�����X����]�T!�t�3���������1�(���#��YiXds~��'<;?coo�/�^P,��E����8�8=���`�����pc�=��);Fm�W��~�$����t�]�n�1��tB'��u��a�b� )��;���D ����~�Y����T�������}��vY�W�x����s��	 �^�~�g-����!yNU�x�O�����E�d2u���8�P�a�\a�!�s���0��>�U�ue�vۋ��|`�d��y{�}]���F�kp�Wy��Դ.u��PV'��I��aH�Mh�f:�sxx�Ѵ��Z[��(I{�8@k���{�.�ł���4�%��%����hأ�&���Sk���.JY�eaV��'�ųg,˂��s��UUbS<4A�D1;�$�F(MO��M�NY�����DE�����V��b�\Zr~hӞ�%yQ0ݩk�})����R��;ﰷ��6�/����Ϟ!���־)X.���3�"�Qu�\�����u�L�'���[�qx$IB��T�5U��١,kX#�����&Z����v�6�ĺ�0l���/=53涌��y5�m '�փ�����RxR9~�V�foD1Rh�O����/_�do� ����-{����t��Ǉ�q~yÝ�&�	7�����l��{��.������x��1���0�h<�^��t�����m)����[�{um�^��^JQ<}~�ۧo#�D�� ��u:�A��{;1׈FQ@�777wFL&���t:��i��i����{}�/.8�/9:>b:�#q'f6��X,���O���@x�~o@ǌo��.��.֐���`��B���Ͼ�QWʎ��>G��������:﬽($mw85�x<fww�(
�gSi���%�a�/µ��m^�|n3��eo�k���)������E�'�!�|jls��&C�F�fƷ:/�w��uE���F�X���'���I�d2�ӏ?f:_&)�7�vJg���c>��g��?�g��GM��gwg���3�����!�*�gO��n���f̻��jϺ�>^`w��ϟ��2�8B(����YS8�� �)뜝���	uU��|2���u���Fz�8
���H)Y,W\��'	�n��OSU%�����y�?��3�����������tHI]7,���uS��u���%�v������>{���YV�֖�ш��#�0�,J��=�ri�����2��jȲ̊������I�������+N��	��-�'c��U��FMmC_�Ba���o>�ͭZ��V�S���m�X7�u3A�Yk��Zͼ����E-�����ŝр���ێ</_\>�|ŋg�E���	UU���$q���o}ϗ6Z��X-W�z��|�%���3� d6�a��޽�ZFYڲ��l������>r-�����6ګ�ƞ4q�r���!�� �u~��f/D;�-ˢ�@}��9M����W,������P��2��+�(&IR[:/^�`�\Q7�M�#|�.B����L&<�#Il������p||H��%<G��1�����s�N���}��)?��3����&������{[�p�0�w�/E�k6�h��ܶǲ)PW5Qٜ���M�u�ܨ���lܘOBm1��ph�w0�YN���9:dt|HQ����k�<��O?����}�;�'<{���	C����B_r3����K��a�H��������z���)uU��q' %7�	G;{4ums�Cۄ)P�M1��C���>����FJ5��A�����"=�~�2��tBY:r�����3���+��*H[r��5�������y�N�"���4F�M��ܬ�N�Vzpp�p8�(r�������������|��TU�o<`�X�������>��ﱻ������H�:J`n9�|}��5�i�ֽ�ݥ�B#����ʮ�N��H���-'�I|�]�G�#��>~�V#�^nH"�z�*H�.�Q)�,G�������������;��œǏ���8::@�%I�	(�Ń����g�?<���}~��G|�;���G��e�"kժ�D�;{�\���?��*�ﳷ�G�ldD]�aȳFK��!Y��\�P��Xߣ�Myyf#h�����?$
#&�	������/���s�@�#���b���+��)�㘺� {U5��!Z7�u�JH؀�8a6�1O��pxx@�������G�e�p8����W�7h�{��\�*���6��eW
����M�)��㉟/JzE��uƂ�Wؒ]Ħ�B�T^�M[>)n� n��	g�lG����]5uC�ƨE�"�)�o}�O?��������ptpH]�d��5�|	i����Ϗ�3�ܽ����}���YH�0la7�����a�̈#��j�r�b/�`��i?t:]�"s���!�Ō,��h�"W۾|���d�h4����X��z=k�zs3�;}�·k����!�YduEU��J5�Ql-����a$TS�\-�Go�l�!,�rN�UYRՕ��<��k~�ӟ���O��_��7�`������j�R�,��9y��9MS���5�\ne���U�+C�~��I���I�-�Vᴂ�Q^�H�۩�!�lx��|n��'�yQ�M�'99>"
�<g��S�5uYY��'���O(��k@pr�.�ل�~���(D)�"�)kkl]k.��y��9����NN���ji�t��԰��k_���/.�;�tZi����$ki���,���{�8�����*��FY�Vc�/fL'��$�B6.�"vww���~�}#�'�<�En�:qY��`0Q@Q�d��::��\S����V&]��ͥ���	��<�����ܻ{��t�h4���c�N�A�d2����d�l:u)�\��xݐ�Q7��ҍ8%�i�7E�~Er;�^l�_!�y���ƌ�2r!6�))��8']��4UYٟ�m
���IQ��3�V/8�ݥ*K�Պl���\^]�1����K�4UI�̨�ʆ<%M���!�{��������V���|���DH?`:�_b�-aD���[��F����}k����3����Kϣ(��%777h�I:��:���ѽm�������63�r��"Jbꦱ�e��E�|�L#�]oKk�d)���l���h��r��g�G���ۖ��4DQH��puy���ãCNO�����d,\_]R׍=f�؅>o<r��A�K|�ai�l}j�[:����C��9�|��n6q�[��b��
�b��k���{�6�[O�}���mއV�U����^����\���քo��!'�G|��g���RU%�4���ze��-W6�m2҃ȅ���^�$�1X��F�6��8�Ş�٘^�r]�!M�[;.�զ��h��� M�6�����v���5勓�Y9�t2a2��y�N�wtt�C���<I�����*@K�$qf �0�Z�M���\b�8[�z^�n�nivZk;9JS?~j�Z+�[̧H�2��PV��I��M'�iꆝ��;{�vF\\\rssc�]΅ec>����&�TE�j�-P�3qa�Ʊ���%n9�W�n(�������H�^���%�K�m�6�l���M�b���%�����*mF�VV0�Qd���x��e�5���]~�{���"ˬoi7���۬�`�XptrL��I��rE��J۴��8
�NnH� �E]!��v�d��X)T�>hB��>�ɔ�tF��!t&(MS�B� QJq}}�l6û{�Ƈ���B�uea�0j)sq;�o�r�l��J5.ZI�Q��TkW����4����	1�8���=ߧ�P��SaL�wz�UtӔ�/^P7w���;�������Vي0�2r۾�VI�&Zi��Ι�L�x������QU���p�cR�l�}��˟^�F�R�8�SM�����N䬫�gY:O�֌Y�:�4��N3�nJ�$��(�;ݔN�K'Mx��W�����)�~�0�|�$s|���vQ�n��.%YV�;�;V`��l���z�g0�ƶ
�Og���S^Dq���6�*/
��j�ml���)/^�t	�?�iT��HRZjg��u�w����k\���TC� ���VS�EZ׵u�n��ϗ6�\
�0�Z�C�^���
��z���ۑ,`_U��CƄA���eY�����=W����Ϟ=����~�ǝ�wy�����[�r��Av[�����Uƣ�?��_p��˳�fs���)*���Mcu[r���!IK�ܤy���:��}iU�vAJy��X��2o+���Y�)�N��0�c�8�l=w�!Ý!ar��K�<��7�x���z��Ւ,[RU�;������ɔ��c�8"�쎙�%MmKc�Z[kdr=�!=��5MM���FV�A�FΘ��+�B�6�x�8�PM�8�]AUU�{}�N�wr����ƿ�ФK$Z�٦^\�����J 
c똢��`��m�EQ:+Q�**��vAH��9���~��O�SN��Ib��&�t����ٳ��������<x���suu�֊4M��z����~�	7g�u���!wNO�����K�9�<�!^蓭�Թ�^O�mv�6�%�K����ه]X��rxΩg������Lض �u�S]UTu������.�ð͝��c���X��Ħ���=N���4�|� [-�ʂ�b���5�l�2[��%J)��dY��>�A��(�W%eY�F��`@�5��~'�J��vk�>�u]8g��;�p�v�t��,�`��+֜��m@e��I:x'w|���v���&-nm��DH�@H7%�a�u�^sf\߈ʑ�����Ek����X�V����B�|��g�A@���fL�ӥ��������W��4�c���v�\]]:�Q|�lPZSe9_}�O�|���@w8�����7ppt�|����$J����w��\�[E�'���e�ho�m�?���+/,��������"<u]��H�b����*)ʂ�ŇI�'�$DQHQ�ı%?�-��!����r��6�g�V�9�r�j�d:��(2�:��r�<c�Z�eK.n�����C�D��j�j�UV%�be=����8�s��ֆ��*i�l3���-���8	y���k�Fa�2��ywO��pm���;�Y���w�0����,��8���8����^����ҭ����N�m|��ฦiPZE��#P��E���\ѮX�r�R�FC{�(���u��eG���qvvF��w�k7Lh��	�>��s��&��'xa@�g~@��rpt=��r��T5�|��f���%^���kJ7t���	ĳЗ�UnTU�6��'��߲�!�k����(ȋܕ3ʲ�\�1V��^�B�d��P�\,����p@��G�5�ٌ�j�|>�(s�n��H�; L�D�q���ΗK�޽K'�Hb��X.s��i_�z��uM��Ib�RԺ�f�[���\�ptr4�����N�KU�ݜJ������J)�]��$�kQT����*m�g��!#�(Ea�;�1ָ��!���I)[Z���tM0�RR�%a�	�V����t�LJ.//h��;w�@h�����.��d4�����(,���8oY��.�<���H����I�bjE���uC�e�eI��Y��ӧ,���׬�f�ז{�� ������	�Σm}C׋X[�"e��=b��%Gn�Y!,�[T�,�n������Y-�6G"mm��Ւ�j��qL0�ң��l�|1O3�?`�w��6h飽 �$i�-�{t�o�Qd᳥E��tj�	�z��,��V�����]�]kH���l�馌�f����+��$�mLC��V|ٰZ��U�}�!���i�j�s P�S��w�8��VkrFdb��vWn�7!�RxclM�P�p�Ţ!�
�Z�ɐ,ϸ�����~���{�Cf�9/^����˻�;H�qp��Ç�����C�2���\��yI�KmNY�P�rtY���%��1.�^�2<���o��5�˟?�9y�@�s��kt����ߏ��.��75����`�'c-��'qN��ڱv��\o��r�>{Ν;�DQdQ��BU�u�q��q���IS
�v��=y@^}��C�Z���F)O�����c��H�{�GUE�/)�Z�R��Y��ɖ�77�C�8q��mlV:U����ʮ�E��e��W���R�Y��$�rֵ�Օ� �im�+��
��V��*jꪹ5*]���w�(�ۿ�e��{��X��0���;2��GJy��s�8�Ϭe�ix����]��$�b�8���xb�ݺva
!�N������(Q�������?�O���|E���Q�#*MVe�w�V��ϩ��G�����p�_OZ/.��|}�Z�mo��X�+��^�'?n�l�q�J���k���I�nH8�զQ�e�vV�u�,ǳP�UHH�`0�)�T�����D	���W�3�>Iq�����E\i�
�ᬮ�F5W���(��zx�o�cjM�(���`w�a2s=�1�
+YK��,K�<w9^T�=���[�Y^��pF�c��������`�a@hB��b2�ptxH�4�Q�$	Y�a�G�0�Ɗ�F���yF�T(]3�N��,y��=���X�V,z=˲JӔ��3���1vZV6}]i��U�qsvN�\���<_^��n}}���5TF�����3bP55�|��.�aI ^��[#eٲ�<ߧ��M&��0B}+ޠM�s�����u_ 6�2�|;m+��W)�V���Z(͸R)��{���v���1/ɋ���Z�kF\^���s|���I;	'Ǉ��L)ʦ�o�$e�w�drM���Ӵ��*H��c��mh��탺V%c�N8{����Q�G��`~Q��lG����P�"�
"�l���i���R�^�{T�U��o
a�� �f�y����0�8�hC�Y��PW�Q���O�>%Nʲ$�v�N�ațo��:Q�>yF���Z��ᡌ&_��>{��y,�7�f3�I+�nβ����N��BbUξ'�����s3������o:��u���^Gu,��ۜK���[]����_a\^��Z�#4������4U��7�AI����˜�,�	h4·�#p������<��GK��$1��
)��})}�<����������aoo�UV����!�ш�,)�� ��v� �����^�u𠭝�����E�l2�����{���}3�P#�D5�����o'�m)���k�4�h�F��l��eAYV �mBc�e����I�c��-��,����p������a�d<n�D���>h�j����F a1�q���u�(
�X\��MSsy}I8��I7�S�a�dق�\���%��.�n�JZv���r4΢,�cѺ>~@�6����m%���@
���&�nCz��wI����keP�eaOWƔyN��ná�Cz>a�B��{�B7�6��0���LgKvF)���)'GL�s�<Ci�b�<vwwy��o��2�)����!�%�(c0���H� ��N:qJ$\Ȉ����D!R���z���ik.Q������~ߒ"����e��خK=4ڥ�7�eEYZ���(X,���
�u�
����FA�8�Gk����L�3��`6�su}�ֆ���͉�T���a��.KT]�������Lo&\^�s=�a�-ѪA�5Z7m��'yU���W�	EUR5n�<�Vmx��#>��#�u(���N�FX� ��jTݴͪ�{�򨪜7�V��e�I�v��uf��s;I��DQ7�>��]�����̚R{��\L�p��`�"��
�����Ue�/놪jx��i���Q���{�C:��0H�n/���qxx@^�^�V,VK�Z�Yb���R<i��˚3�P�����G'��W��`�h��4"�<�{��q��}��>��>�ѐl����ݿ˧�~JQVv:��&#m�:T��<[�g��n\�hQ��OC�Y)L�ӡt��J�A�?Xf�5s�$�����]��`�1�(B
Ъ!�*	aQdy䣵b�\p5����	!��mKʷ��W�	�|B#�SJ���-^���!����{ǅ��#~=�����h�%�I� ��+t�ҍ{��6 ��ؖ)���i�Z��ڍ�tj�G�}?�9um���mTc�RTMMUW�e�|����֔֜�]����n'A
I��r|��t2�(*��Ϟ=�Rη����N��1��r���R����)m/��W�J˴�F{Gt�;H�t��h�P�E�Կ{��n���f�|6G���x�ϛo�ş��Σ�xZ��y�v��*:aD'����nU��\)E��-i]U�N���ie�����Ԋ"/���(�8::�^X�� ���7`M��Y��L.����D\x̋�cT��D�3��0�8�*[��J����C;��	����#��j�<���MK>Y;Ǭ?B�Ԭ�O�#w���mmA�:��v�-��-����ק�+��"[�XΗ��E���1�� �2����u���V9�*gr3�ɓn��}���{�;���p���ߧ����