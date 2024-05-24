add_filter('pmc-google-analytics-tracking-label', function ( label , $element ) {

    label = jQuery( $element.parent() ).data('label') || '';

    if (pmc.is_empty( label )) {

        label = jQuery( $element.closest('.pmc-templatized-widget') ).data('label') || '';

    }
    if( pmc.is_empty( label ) ){

        label = jQuery( $element ).attr('class') || '';
        
    }
    return label;
});