jQuery(document).ready(function($){
	wp_manga_reporting = false;
    
    var wp_manga_report_submit = function( errortype = '', content = ''){
        if(!wp_manga_reporting){
            wp_manga_reporting = true;
            $('#frm-wp-manga-report .button-primary').addClass('disabled');
            var volSelect = $('.volume-select');

            var mangaHasVolume = volSelect.length > 0 ? true : false;

            var curVol = mangaHasVolume ? volSelect.val() : 0;

            var	curVolChapSelect = $('.selectpicker_chapter[for="volume-id-' + curVol + '"]  .single-chapter-select');
            
            if(curVolChapSelect.length == 0) { 
                curVolChapSelect = $('.selectpicker_chapter .single-chapter-select'); 
            }
            
            data = {
                manga: $('#btn_flag_chapter').attr('data-manga'), 
                chapter: curVolChapSelect.val(), 
                action: 'chapter_flag',
                errortype: errortype,
                content: content
            };
            
            $.ajax({
                type : 'POST',
                url : manga.ajax_url,
                data : data,
                success : function( response ){
                    obj = JSON.parse(response);
                    wp_manga_reporting = false;
                    $('#frm-wp-manga-report .button-primary').removeClass('disabled');
                    alert(obj.message);
                    $('#frm-wp-manga-report').modal('hide');
                },
                error : function(err){
                    wp_manga_reporting = false;
                    $('#frm-wp-manga-report .button-primary').removeClass('disabled');
                    alert(err);
                }
            });
        }
    }
    
    $(document).on('click', '#frm-wp-manga-report .btn-cancel', ;
    
    $(document).on('click', '#frm-wp-manga-report .btn-submit', function(){
        var content = $('#frm-wp-manga-report textarea[name=wp-manga-report-description]').val();
        var errortype = $('#frm-wp-manga-report select[name=wp-manga-report-errortype]').val();
        
        var valid = true;
        if($('#frm-wp-manga-report select[name=wp-manga-report-errortype]').hasClass('required') && errortype == 0) {
            $('#frm-wp-manga-report select[name=wp-manga-report-errortype]').addClass('missing');
            valid = false;
        }
        
        if(content.trim() == '') {
            $('#frm-wp-manga-report textarea[name=wp-manga-report-description]').addClass('missing');
            valid = false;
        }
        
        if(valid){
            wp_manga_report_submit( errortype, content );	
        }        
		return false;
    });
	
	$(document).on( 'click', '#btn_flag_chapter', function(evt){
        if($(this).data('mode') == 'modal'){
            $('#frm-wp-manga-report').modal();
        } else {
            if(confirm(wp_chapter_report.are_you_sure)){
                wp_manga_report_submit();
            }
        }
        
        
        return false;
	});
});