/*!
 * Print-O-Matic JavaScript v2.0.13
 * https://pluginoven.com/plugins/print-o-matic/
*/

jQuery(document).ready(function() {
	jQuery(document).on( 'click', '.printomatic, .printomatictext', function(e) {
		e.preventDefault();
		var id = jQuery(this).attr('id');
		var this_print_data;

		// TODO: must be a better way of assigning this dynamic print_data variable
		if(eval('typeof print_data_' + id) !== "undefined"){
			this_print_data = eval('print_data_' + id );
		}

		if(this_print_data && 'pom_do_not_print' in this_print_data && jQuery(this_print_data.pom_do_not_print).length){
			jQuery(this_print_data.pom_do_not_print).addClass('pe-no-print');
		}
		else if (jQuery(print_data.pom_do_not_print).length){
			jQuery(print_data.pom_do_not_print).addClass('pe-no-print');
		}

		//add any html top or bottom
		var has_top_html = false;
		if(this_print_data && 'pom_html_top' in this_print_data){
			jQuery( 'body' ).prepend( '<div id="pom_top_html" class="pe-preserve-ancestor">' + this_print_data.pom_html_top + '</div>' );
			has_top_html = true;
		}
		else if (print_data.pom_html_top){
			jQuery( 'body' ).prepend( '<div id="pom_top_html" class="pe-preserve-ancestor">' + print_data.pom_html_top + '</div>' );
			has_top_html = true;
		}

		var has_bot_html = false;
		if(this_print_data && 'pom_html_bottom' in this_print_data){
			jQuery( 'body' ).append( '<div id="pom_bot_html" class="pe-preserve-ancestor">' + this_print_data.pom_html_bottom + '</div>' );
			has_bot_html = true;
		}
		else if (print_data.pom_html_bottom){
			jQuery( 'body' ).append( '<div id="pom_bot_html" class="pe-preserve-ancestor">' + print_data.pom_html_bottom + '</div>' );
			has_bot_html = true;
		}

		var trigger = jQuery(this);
		var target = trigger.data('print_target');
		
		if(!target){
			classes = trigger.attr("class").split(/\s+/);
			for(i=0; i<classes.length; i++){
				if(classes[i].substring(0, 12) == "printtarget-"){
					target = classes[i].substring(12, classes[i].length);
				}
			}
		}

		if(!target || !jQuery(target).length ){
			return;
		}

		var target_arr = target.split(", ");
		var targets = [];
		var targ;
		jQuery.each( target_arr, function( key, value ) {
			if (value == '%prev%') {
				targ = trigger.prev();
			}
			else if (value == '%next%') {
				targ = trigger.next();
			}
			else{
				targ = jQuery(value);
			}
			//only add target if found on page
			if(targ.length){
				jQuery.each( targ, ;
			}
		});

		// remove loading attribute
		jQuery('img').each( ;
		
		var pause_time = print_data.pom_pause_time;
		if(this_print_data && 'pom_pause_time' in this_print_data){
			pause_time = this_print_data.pom_pause_time;
		}

		if(targets){
			if(pause_time){
				console.log('pause_time hase been removed for now');
			}
			PrintElements.print(targets, pause_time, has_top_html, has_bot_html);
		}		
		
	});
});

function pom_cleanup(has_top_html, has_bot_html){
	if ( has_top_html ){
		jQuery( '#pom_top_html' ).remove();
	}
	if ( has_bot_html ){
			jQuery( '#pom_bot_html' ).remove();
	}
}
