/*! jQuery v3.7.1 | (c) OpenJS Foundation and other contributors | jquery.org/license */
!"undefined"!=typeof window?window:this,;
jQuery.noConflict();;
/*! jQuery Migrate v3.4.1 | (c) OpenJS Foundation and other contributors | jquery.org/license */
"undefined"==typeof jQuery.migrateMute&&(jQuery.migrateMute=!0),;
;
(function($){

    function handleFormSubmit(e){
        e.preventDefault();
        
        var form = $(this);
        var formId = form.find('[name="contact-form-id"]').val();
        var statusWrapper = form.find('.jetpack-form-ajax-status-wrapper');

        form.addClass('jetpack-form-ajax-is-loading');

        $.post(form.attr('action'), form.serialize(), function(response){
            var errors = $(response).find('ul.form-errors');

            statusWrapper.empty();
            if (errors.length > 0){
                statusWrapper.append(errors);
            } else {
                $(response).find('.jetpack-form-ajax-success-message').appendTo(statusWrapper);
            }
        }).always(;
    }

    function replaceSubmitButtons(){
        var btns = $('.contact-form > .contact-submit > input[type="submit"]');
        
        for(var i = 0; i < btns.length; i++){
            var loadingIndicator = $('<span class="jetpack-form-ajax-loading"><span>●</span><span>●</span><span>●</span></span>');
            var oldBtn = $(btns[i]);
            var newBtn = $('<button />').attr({ type: 'submit', class: oldBtn.attr('class') }).addClass('jetpack-form-ajax-button').html(oldBtn.val()).append(loadingIndicator);
            
            oldBtn.replaceWith(newBtn);
        }
    }

    $(document).ready(function(){
        $('<div />').attr({ class: 'jetpack-form-ajax-status-wrapper' }).insertBefore('.contact-submit');
        
        replaceSubmitButtons();

        $('.contact-form').on('submit', handleFormSubmit);
    });

})(jQuery);;
