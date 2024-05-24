(function($){
    $(function(){
        $('[data-dc-url]').each(function(idx, el) {
            var $el = $(el);
            var dcUrl = $el.data('dc-url');
            $.ajax({
                'url': dcUrl + '?ajax',
                'xhrFields': {
                    'withCredentials': true
                },
                'success':             });
        });
    });
})(jQuery);