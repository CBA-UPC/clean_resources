/* Form submission functions for the MailChimp Widget */
;(function($){
	$(function($) {
		// Change our submit type from HTML (default) to JS
		$('#mc_submit_type').val('js');
		
		// Attach our form submitter action
		$('#mc_signup_form').ajaxForm({
			url: mailchimpSF.ajax_url, 
			type: 'POST', 
			dataType: 'text',
			beforeSubmit: mc_beforeForm,
			success: mc_success
		});
	});
	
	function mc_beforeForm(){
		// Disable the submit button
		$('#mc_signup_submit').attr("disabled","disabled");
	}
	function mc_success(data){
		// Re-enable the submit button
		$('#mc_signup_submit').removeAttr("disabled");
		
		// Put the response in the message div
		$('#mc_message').html(data);
		
		// See if we're successful, if so, wipe the fields
		var reg = new RegExp("class='mc_success_msg'", 'i');
		if (reg.test(data)){
			$('#mc_signup_form').each(function(){
				this.reset();
			});
			$('#mc_submit_type').val('js');
		}
		$.scrollTo('#mc_signup', {offset: {top: -28}});
	}
})(jQuery);
:12px}.on-page-editor img{width:auto\9}body.on-page-editor{position:static}#jqueryModalDialogsFrame{position:fixed !important}.scPopup{z-index:9200 !important;background:#fafafa;border:1px solid #868686;height:auto !important;box-shadow:0 0 5px #dedede;-webkit-box-shadow:0 0 5px #dedede;font-family:tahoma !important;font-size:11px !important;position:fixed !important}.scPopup tr:hover{background:#c5c5c5;cursor:Pointer}.scPopup td{padding:0 5px;vertical-align:middle}.scPopup .scMenuItemIcon,.scPopup tr td:first-child{background:#efefef;border-right:1px solid #c5c5c5;padding:0 2px}.scPopup .divider-row{line-height:0;background:#9199a4}.scPopup .divider-row td{height:1px !important;font-size:0}.column-splitter,.row-splitter{width:100%}.component{box-sizing:border-box}.row.column-splitter>div>div.row{margin-left:0;margin-right:0}.tabs .tabs-heading>li .scEnabledChrome>.row,.tabs .tabs-container>.tab>.scEnabledChrome>.row{margin-left:0;margin-right:0}.accordion .scEnabledChrome>.toggle-header>.label>.row,.accordion .scEnabledChrome>.toggle-content>.row{margin-left:0;margin-right:0}.carousel .scEnabledChrome>.row{margin-left:0;margin-right:0}.snippet .scEnabledChrome>.row{margin-left:0;margin-right:0}.container>.component-content>.row{margin-left:0;margin-right:0}.file-filetypeicon span{width:32px;height:32px;display:block}.file-filetypeicon .xls,.file-filetypeicon .xlsx{background-image:url(/~/icon/WordProcessing/32x32/imp_exp_excel.png)}.file-filetypeicon .pdf{background-image:url(/~/icon/WordProcessing/32x32/imp_exp_pdf.png)}.file-filetypeicon .ppt,.file-filetypeicon .pptx{background-image:url(/~/icon/WordProcessing/32x32/imp_exp_powerpoint.png)}.file-filetypeicon .rtf{background-image:url(/~/icon/WordProcessing/32x32/imp_exp_rtf.png)}.file-filetypeicon .txt{background-image:url(/~/icon/Applications/32x32/document_text.png)}.file-filetypeicon .vsd{background-image:url(/~/icon/WordProcessing/32x32/imp_exp_visio.png)}.file-filetypeicon .doc,.file-filetypeicon .docx{background-image:url(/~/icon/WordProcessing/32x32/imp_exp_word.png)}.file-filetypeicon .xml{background-image:url(/~/icon/WordProcessing/32x32/imp_exp_xml.png)}.file-filetypeicon .bmp,.file-filetypeicon .gif,.file-filetypeicon .jpg,.file-filetypeicon .png{background-image:url(/~/icon/Imaging/32x32/drop_shadow.png)}.file-filetypeicon .mp3,.file-filetypeicon .ogg,.file-filetypeicon .wav{background-image:url(/~/icon/Multimedia/32x32/play_blue.png)}body.sxa-gray-scale{filter:grayscale(100%)}html,body,div,span,applet,object,iframe,h1,h2,h3,h4,h5,h6,p,blockquote,pre,a,abbr,acronym,address,big,cite,code,del,dfn,font,img,ins,kbd,q,s,samp,small,strike,strong,sub,sup,tt,var,dl,dt,dd,ol,ul,li,fieldset,form,label,legend,table,caption,tbody,tfoot,thead,tr,th,td{margin:0;padding:0;border:0;outline:0;font-weight:inherit;font-style:inherit;font-size:100%;font-family:inherit;vertical-align:baseline}html{height:100%}em{margin:0;padding:0;border:0;outline:0;font-weight:inherit;font-size:100%;font-family:inherit;vertical-align:baseline}:focus{outline:0}body{line-height:1;color:#000;background:#fff;font-family:Arial,Helvetica,sans-serif;font-size:12px;position:relative;overflow:auto;height:100%}ol,ul{list-style:none}table{border-collapse:separate;border-spacing:0}caption,th,td{text-align:left;font-weight:normal}blockquote:before,blockquote:after,q:before,q:after{content:""}blockquote,q{quotes:"" ""}sub{vertical-align:sub;font-size:.9em}sup{vertical-align:super;font-size:.9em}