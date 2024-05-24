function updateHistory( p = 0) {
	var $ = jQuery;
	
	if( typeof user_history_params == 'undefined' ){
		return;
	}

	if( $('.wp-manga-chapter-img').length > 0 ){
		var img = $('.wp-manga-chapter-img').prop('id');
		var img_id = img.replace('image-', '');
	}else{
		var img_id = '';
	}

	$.ajax({
		url: user_history_params.ajax_url,
		type: 'POST',
		data: {
			action:      'manga-user-history',
			postID:      user_history_params.postID,
			chapterSlug: user_history_params.chapter,
			paged:       p ? p : user_history_params.page,
			img_id:      img_id,
			nonce:       user_history_params.nonce
		}
	});
}

function madara_update_views(){
	var $ = jQuery;
	
	if($('body').hasClass('single-wp-manga')){
		// is Manga Detail or Reading page
		if(typeof manga !== 'undefined'){
            if(manga.enable_manga_view != "0"){
                $.ajax({
                    url: manga.ajax_url,
                    type: 'POST',
                    data: {
                        action: 'manga_views',
                        manga: manga.manga_id,
                        chapter: manga.chapter_slug
                    },
                    success: function(data){
                        //console.log(data);
                    },
                    complete: function(e){
                        //console.log(e.responseJSON);
                    }
                });
            }
		}
	}
}

window.wpmanga = {};
window.wpmanga.setCookie = 
window.wpmanga.getCookie = 	
jQuery(document).ready(function($){

		
	if($('#manga-chapters-holder').length > 0){
		$.ajax({
				url: manga.ajax_url,
				type: 'POST',
				data: {
					action: 'manga_get_chapters',
					manga: $('#manga-chapters-holder').data('id')
				},
				success: function(data){
					$('#manga-chapters-holder').html(data);
					
					$(document).trigger('wp_manga_after_load_chapters_list');
				},
				complete: function(e){
					//console.log(e.responseJSON);
				}
			});
	} else {
		setTimeout( 1000);
	}
	
	function load_chapters_selectbox(){
		if($('.chapter-selection').length > 0){
			var selector = $('.chapter-selection');
			var args = {
				action: 'manga_get_reading_nav',
						manga: $(selector[0]).data('manga'),
						chapter: $(selector[0]).data('chapter'),
						volume_id: $(selector[0]).data('vol'),
						style: $(selector[0]).data('style'),
						type: $(selector[0]).data('type'),
			};
			
			$.ajax({
					url: manga.ajax_url,
					type: 'POST',
					data: args,
					success: function(data){
						$('.chapter-selection').each(;
						
						$(document).trigger('wp_manga_after_load_reading_nav');
					},
					complete: 				});
		} else {
			// trigger to register onclick eevnt
			$(document).trigger('wp_manga_after_load_reading_nav');
		}
	}

	function chapterNavigationAjax( navigation ){

		if( typeof mangaReadingAjax == 'undefined' ){
			return false;
		}

		var readContainer  = $('.read-container'),
			loadingHTML       = '<i class="fas fa-spinner fa-spin"></i>',
			currentPageSelect = $('.wp-manga-nav select#single-pager > option[selected="selected"]'),
			prevBtn           = $('.nav-links .nav-previous'),
			nextBtn           = $('.nav-links .nav-next'),
			breadCrumb        = $('.wp-manga-nav .entry-header_wrap').html(),
			pagination        = $('.select-pagination');

		$.ajax({
			type : 'GET',
			url : manga.ajax_url + '?' + navigation,
			beforeSend : function(){
				readContainer.html( loadingHTML );
				pagination.hide();
				$('.wp-manga-nav select').each(function(){
					$(this).prop('disabled', true);
				});
			},
			success : function( response ){
				if(response.success){

					readContainer.html( response.data.data.content );
					
					$('.wp-manga-nav').replaceWith( response.data.data.nav );
					$('.entry-header .wp-manga-nav').prepend( '<div class="entry-header_wrap">' + breadCrumb + '</div>');

					pagination.show();
					
					// reattach events
					wp_manga_on_chapter_navlinks_click();
					madara_update_views();
					load_chapters_selectbox();

					$('.wp-manga-nav select').each(;
					
					if(typeof updateHistory !== 'undefined'){
						updateHistory($('#single-pager').val());
					}

				} else {
					readContainer.html(response.data.message);
				}

				readingScrollToTop();
				
				$(document).trigger('wp_manga_chapterNavigationAjax_done');
			},
		});
	}

	function chapterPreloadedImagesNavigation( next = true ){

		var $curPage = $('#single-pager'),
			curPageVal = $curPage.val();

		if( next ){
			curPageVal++;
		}else{
			curPageVal--;
		}

		var resp = loadPreloadedImage( curPageVal );

		return resp;

	}

	function loadPreloadedImage( page ){

		readingScrollToTop();

		page = parseInt( page );

		// Remove selected from current page option
		$( '#single-pager option[value="' + page + '"]' ).removeAttr( 'selected' );

		var curPageOption = $( '#single-pager option[value="' + page + '"]' );
		var $readingContent = $('.reading-content');

		if( curPageOption.length > 0 ){

			// Mark destination page as selected
			curPageOption.attr( 'selected', 'selected' );
			$('#single-pager').val( page );

			// Change the URL in prev & next btn
			var prevPage = page - 1,
				nextPage = page + 1,
				prevPageOption = $( '#single-pager option[value="' + prevPage + '"]' ),
				nextPageOption = $( '#single-pager option[value="' + nextPage + '"]' );

			var volSelect = $('.volume-select');

			var mangaHasVolume = volSelect.length > 0 ? true : false;

			var curVol = mangaHasVolume ? volSelect.val() : 0;

			var	curVolChapSelect = $('.selectpicker_chapter[for="volume-id-' + curVol + '"] .single-chapter-select');

			// Index starts from 1
			var curChapIndex = curVolChapSelect[0].selectedIndex + 1,
				curVolIndex = mangaHasVolume ? volSelect[0].selectedIndex + 1 : null;

			curVolChapSelect = $(curVolChapSelect[0]);

			if( mangaHasVolume ){
				volSelect = $(volSelect[0]);
			}

			var nextBtn = $('.nav-next a'),
				prevBtn = $('.nav-previous a');
			var order = nextBtn.data('order');

			// On any case, show both btn first
			nextBtn.show();
			prevBtn.show();

			// Handle prev
			var prevURL = '';
			var prevNavURL = '';

			if( prevPageOption.length > 0 ){

				// console.log( 'Chapter has prev page' );

				prevURL    = prevPageOption.data( 'redirect' );

				prevNavURL = $('.nav-next a').data( 'navigation' );

				if( typeof prevNavURL !== 'undefined' ){
					var replace = manga.manga_paged_var + '=(\d+)';
					var re = new RegExp(replace,"g");

					prevNavURL = prevNavURL.replace( re, prevPage );
				}
			}else{
				// If this is first page of chapter
				var prevChapIndex = (order == 1 ? curChapIndex - 1 : curChapIndex + 1);
				

				if( prevChapIndex <= 0 && order == 1){ // If this is the first chapter of volume

					// console.log( 'First chap' );

					var prevVolIndex = mangaHasVolume ? curVolIndex - 1 : null;

					if( prevVolIndex === null || prevVolIndex <= 0 ){

						// console.log( 'First volume' );

						// If it's the first volume then hide the prev button
						prevBtn.hide();
					}else{
						// Else go to the first chapter of next volume
						var prevChapSelect = $('.selectpicker_chapter:nth-child(' + prevVolIndex + ') .single-chapter-select option:nth-child(2)');

						prevURL    = prevChapSelect.data( 'redirect' );
						prevNavURL = prevChapSelect.data( 'navigation' );
					}
				} else { // if this isn't first chapter, then give prev chapter URL for prev btn
					var prevChapSelect = curVolChapSelect.find( 'option:nth-child(' + prevChapIndex + ')' );

					prevURL    = prevChapSelect.data( 'redirect' );
					prevNavURL = prevChapSelect.data( 'navigation' );

					if( typeof prevChapLastPage !== 'undefined' ){
						// add manga-paged to prev chap URLs
						prevURL = prevURL.replace('/p/1', '/p/' + prevChapLastPage);
						prevNavURL += '&' + manga.manga_paged_var + '=' + prevChapLastPage;
					}
				}
			}
			prevBtn.data( 'navigation', prevNavURL );
			prevBtn.attr( 'href', prevURL );

			// Handle next
			var nextURL = '';
			var nextNavURL = '';
			var lastPageOfLastChap = false;
			

			if( nextPageOption.length > 0 ){ // if there is next page on chapter

				// console.log( 'Chapter has next page' );

				nextURL    = nextPageOption.data( 'redirect' );

				nextNavURL = $('.nav-next a').data( 'navigation' );

				if( typeof nextNavURL !== 'undefined' ){
					var replace = manga.manga_paged_var + '=(\d+)';
					var re = new RegExp(replace,"g");

					nextNavURL = nextNavURL.replace( re, nextPage );
				}

			} else { // If this is the last page of chapter

				// console.log( 'Chapter ended' );

				var nextChapIndex = (order == 1 ? curChapIndex + 1 : curChapIndex - 1);

				if(( curChapIndex === curVolChapSelect.find('option').length && order == 1) || (curChapIndex == 1 && !order)){ // If this is the last chapter of volume

					// console.log( 'Volume ended' );

					var nextVolIndex = curVolIndex + 1;

					if( ! mangaHasVolume || (curVolIndex === volSelect.find('option').length && order == 1) || (curVolIndex === 1 && !order) ){ //If it's last volume or manga has no volume and this is the last chap

						// console.log( 'Manga ended' );

						// If it's the last page of last chap 
						if (mangaNav.backInfoPage == 'on'){
							nextBtn.text(mangaNav.text.backInfoPage).removeClass('next_page').addClass('back');
							nextURL = mangaNav.mangaUrl;
							lastPageOfLastChap = true;
						}else{ //hide if there's no back info page 
							nextBtn.hide();
						}
					} else {
						// Else go to the first chapter of next volume
						var nextChapSelect = $('.selectpicker_chapter:nth-child(' + nextVolIndex + ') .single-chapter-select option:nth-child(2)');

						nextURL    = nextChapSelect.data( 'redirect' );
						nextNavURL = nextChapSelect.data( 'navigation' );
					}
				} else { // if this isn't last chapter, then give next chapter URL for next btn
					var nextChapSelect = curVolChapSelect.find( 'option:nth-child(' + nextChapIndex + ')' );

					nextURL    = nextChapSelect.data( 'redirect' );
					nextNavURL = nextChapSelect.data( 'navigation' );
				}
			}

			nextBtn.data( 'navigation', nextNavURL );
			nextBtn.attr( 'href', nextURL );

			// if it's not last page of last chap, make sure it has correct class and text of Next button
			if (!lastPageOfLastChap){
				nextBtn.text(mangaNav.text.next).addClass('next_page').removeClass('back');
			}

			// Remove all current images
			$readingContent.find( 'img' ).remove();

			var paged = chapter_images_per_page * ( page - 1 ) + 1;
			var hasCursorLink = $('.reading-content .page-prev-link').length;

			var images_html = '';
			for( var i = 1; i <= chapter_images_per_page; i++ ){

				if( typeof chapter_preloaded_images[ paged - 1 ] !== 'undefined' ){
					images_html += '<img id="image-' + paged + '" data-image-paged="' + paged + '" src="' + chapter_preloaded_images[ paged - 1 ] + '" class="wp-manga-chapter-img">';
					
					paged++;
				} else {
					break;
				}
			}
			
			if( hasCursorLink ){ //If there is cursor link then append after the prev cursor link
				$(images_html).insertAfter( '.reading-content .page-prev-link' );
			}else{ //or just append it to .reading-content
				$('.reading-content').append( images_html );
			}
			
			if(typeof updateHistory !== 'undefined'){
				updateHistory(paged);
			}
			
			$(document).trigger('wp_manga_after_load_chapter_page', [page]);

			return true;
		}else{
			return false;
		}

	}
	
	$('.btn-text-reading-increase').on('click', function(e){
		var fontSize = $('.reading-content .text-left').css('font-size');
		var newFontValue = parseInt(fontSize.replace('px', '')) + 1;
		$('.reading-content .text-left').css('font-size', newFontValue + 'px');
		$('.reading-content .text-left').css('line-height', (newFontValue * 1.5) + 'px');
		// save cookie
		window.wpmanga.setCookie('wpmanga-reading-fontsize', newFontValue, 30);
		
		e.preventDefault();
		e.stopPropagation();
		return false;
	});
	
	$('.btn-text-reading-decrease').on('click', function(e){
		var fontSize = $('.reading-content .text-left').css('font-size');
		var newFontValue = parseInt(fontSize.replace('px', '')) - 1;
		$('.reading-content .text-left').css('font-size', (newFontValue < 5 ? 5 : newFontValue) + 'px');
		
		$('.reading-content .text-left').css('line-height', (newFontValue < 5 ? 7.5 : newFontValue * 1.5) + 'px');
		
		// save cookie
		window.wpmanga.setCookie('wpmanga-reading-fontsize', newFontValue, 30);
		
		e.preventDefault();
		e.stopPropagation();
		return false;
	});
	
	$('#text-chapter-toolbar a').on('click', function(e){
		$('.entry-header.footer').toggleClass('sticky');
		$('#text-chapter-toolbar').toggleClass('sticky');
		
		e.preventDefault();
		e.stopPropagation();
		return false;
	});

	// Handle navigate by clicked Back/Forward in button in browser
	/*
	 * Temp remove it as it reloads page even on link with hashtag
	 
	$(window).on('popstate', function () {
		
		var curURL = window.location.href,
			use_preloaded_images = false,
			redirect = true,
			navNext = $('.select-pagination .nav-links .nav-next > a.next_page'),
			navPrev = $('.select-pagination .nav-links .nav-next > a.prev_page'),
			isNext = false;
		
		if (curURL == navNext.attr('href')) {
			isNext = true;
			navigation = navNext.data('navigation');
		} else if (curURL == navPrev.attr('href')) {
			navigation = navPrev.data('navigation');
		}

		// If use preloaded images is on, then use it first
		if (typeof chapter_preloaded_images !== 'undefined') {
			use_preloaded_images = chapterPreloadedImagesNavigation(isNext ? true : false );

			if (use_preloaded_images) {
				redirect = false;
			}
		}

		// If use preloaded image failed, then use ajax if it's on
		if (!use_preloaded_images && typeof navigation !== 'undefined' && navigation !== '' && typeof mangaReadingAjax !== 'undefined') {
			chapterNavigationAjax(navigation);
			redirect = false;
		}

		if (redirect) {
			window.location.reload();
		}

	});
	
	**/

	function wp_manga_on_chapter_navlinks_click(){
		//chapter next page ajax
		$('.wp-manga-nav .nav-links > div > a.btn').each(function(){
			$(this).unbind('click');
			$(this).on('click', function(e){
				if($(this).hasClass('back')){
					return true;
				}

				var navigation = $(this).data('navigation'),
					url = $(this).attr('href');

				var use_preloaded_images = false,
					redirect = true;

				// If use preloaded images is on, then use it first
				if( typeof chapter_preloaded_images !== 'undefined' ){
					use_preloaded_images = chapterPreloadedImagesNavigation( $(this).hasClass('next_page') ? true : false );

					if( use_preloaded_images ){
						e.preventDefault();
						redirect = false;
					}
				}

				// If use preloaded image failed, then use ajax if it's on
				if( ! use_preloaded_images && typeof navigation !== 'undefined' && navigation !== '' && typeof mangaReadingAjax !== 'undefined' ){
					e.preventDefault();
					
					$(document).trigger('wp_manga_on_chapter_navlinks_click');
					
					chapterNavigationAjax( navigation );
					redirect = false;
				}

				if( typeof url !== 'undefined' && url !== '' ){
					history.pushState({}, null, url );
				}

				if( redirect ) {
					return true;
				}else{
					return false;
				}

			});
		});
	}
	wp_manga_on_chapter_navlinks_click();
	
	// if reading list style is used, scroll on mouse click
	function wp_manga_scroll_on_click(){
		if($('body').hasClass('click-to-scroll')){
			$('.manga-reading-list-style .chapter-type-manga .reading-content').on('click', function(){
				$('html, body').animate({scrollTop: $(document).scrollTop() + 500 }, 200);
			});
			
			$('.chapter-type-text .reading-content').on('click', function(){
				$('html, body').animate({scrollTop: $(document).scrollTop() + 500 }, 1000);
			});
		}
	}
	wp_manga_scroll_on_click();
	
	/*
	$(document).on('click', '.chapter-type-manga .c-blog-post .entry-content .entry-content_wrap .reading-content img', function(e){
		e.preventDefault();
		if($('.wp-manga-nav .nav-links a.next_page').length > 0){
			$('.wp-manga-nav .nav-links a.next_page')[0].click();
		}
	});
	*/

	

	//navigate by keyword button
	$(document).keydown(function(e){
		var redirect = '';

		// check if there is any focus input or textarea
		if(document.activeElement && document.activeElement.tagName == 'INPUT' || document.activeElement.tagName == 'TEXTAREA'){
			return;
		}
		
		if( e.keyCode == 37 && $('.wp-manga-nav .nav-links .nav-previous > a').length > 0 ){	//left key
			$('.wp-manga-nav .nav-links a.prev_page')[0].click();
		}else if( e.keyCode == 39 &&  $('.wp-manga-nav .nav-links .nav-next > a').length > 0 ){ //right key
			$('.wp-manga-nav .nav-links a.next_page')[0].click();
		}
	});

	//prevent empty Comment content submitting
	$(document).ready(function(){
		$('textarea#comment').attr('required', 'required');

		$('#commentform').on('submit', function(){
			if( !$('#commentform')[0].checkValidity() ){
				alert('Comment cannot be empty');
				return false;
			}
			return true;
		});
		
		load_chapters_selectbox();
	});
	
	$(document).on('wp_manga_after_load_reading_nav', function(){
		//show appropriate chapter select for volume
		$(document).on('change', '.selectpicker.volume-select', function(){
			$('.chapters_selectbox_holder .c-selectpicker.selectpicker_chapter').each(;
			$('.chapters_selectbox_holder .c-selectpicker.selectpicker_chapter[for="volume-id-' + $(this).val() + '"]').show();
		});

		$(document).on( 'change', '.wp-manga-nav .single-chapter-select, #single-pager, .wp-manga-nav .host-select, .wp-manga-nav .reading-style-select', function(e){

			e.preventDefault();

			var isPageSelect = $(this).attr('id') == 'single-pager' ? true : false;
			var isChapterSelect = $(this).hasClass('single-chapter-select') ? true : false;
			
			if( isPageSelect || isChapterSelect ){
				var navigation = $(this).find('option:selected').data('navigation');
				var url = $(this).find('option:selected').data('redirect');

				var use_preloaded_images = false,
					redirect = true;

				if( isPageSelect && typeof chapter_preloaded_images !== 'undefined' ){
					$(this).blur();
					use_preloaded_images = loadPreloadedImage( $(this).val() );

					if( use_preloaded_images ){
						redirect = false;
					}
				}

				if( ! use_preloaded_images && typeof mangaReadingAjax !== 'undefined' && typeof navigation !== 'undefined' && navigation !== '' ){
					chapterNavigationAjax( navigation );
					redirect = false;
				}

				if( ! redirect ){
                    if( typeof url !== 'undefined' && url !== '' ){
                        history.pushState( {}, null, url );
                    }
                    
					return false;
				}

			}

			var t = $(this);
			var redirect = t.find(':selected').attr('data-redirect');
			
			if(redirect != '#'){
				window.location = redirect;
			}
			
			$(document).trigger('wp_manga_chapter_redirect', [$(this), redirect, isPageSelect, isChapterSelect]);
		});
	});

	var ajaxHandling = false;
	var loginModal = false;

	// bookmark action
	$(document).on( 'click', '.wp-manga-action-button', function(e) {

		e.preventDefault();

		if($(this).attr('data-action') == 'bookmark') {
			if( typeof requireLogin2BookMark !== 'undefined' ){
				$('.modal#form-login').modal('show');
				$('input[name="bookmarking"]').val('1');
				return;
			}

			if( $('.add-bookmark').length != 0 ) {
				$('.add-bookmark').css('opacity', '0.5');
			}else{
                // chapter reading page
                var li = $('.action_list_icon a.wp-manga-action-button[data-action="bookmark"]').parent();
				li.css('opacity', '0.5');
			}

			if ( !ajaxHandling ) {
				ajaxHandling = true;
				var t       = $(this);
				var postID  = t.data( 'post' );
				
				var volSelect = $('.volume-select');

				var mangaHasVolume = volSelect.length > 0 ? true : false;

				var curVol = mangaHasVolume ? volSelect.val() : 0;

				var	curVolChapSelect = $('.selectpicker_chapter[for="volume-id-' + curVol + '"] .single-chapter-select');
				
				var chapter = $('#wp-manga-current-chap').length > 0 ? $('#wp-manga-current-chap').val() : ''; // get selected chapter slug
				
				var page    = t.data( 'page' );
				jQuery.ajax({
					url: manga.ajax_url,
					type: 'POST',
					data: {
						action : 'wp-manga-user-bookmark',
						postID : postID,
						chapter : chapter,
						page : page,
					},
					success: function( response ) {
						if ( response.success ) {
							if( $('.add-bookmark').length != 0 ) {
                                // manga detail page
								$('.add-bookmark').empty();
								$('.add-bookmark').append( response.data );
								$('.add-bookmark').css('opacity', '1');
							}else{
                                // chapter reading page
                                var li = 
                                $('.action_list_icon a.wp-manga-action-button[data-action="bookmark"]').parent();
								li.empty();
								li.append( response.data );
								li.css('opacity', '1');
							}

						} else {
							if(!response.data){
								alert('Some errors occured. Please try again');
							} else {
								if ( response.data.code == 'login_error' ) {

								} else {
									alert( response.data.code );
								}
							}
						}
					},
					complete: function(xhr, textStatus) {
						ajaxHandling = false;
					}
				});
			}
		} else {
			if($(this).attr('data-action') == 'toggle-contrast'){
				$('body').toggleClass('text-ui-light');
				
				// save cookie
				window.wpmanga.setCookie('wpmanga-reading-contrast',$('body').hasClass('text-ui-light') ? 'light' : 'dark', 30);
			}
		}
	})

	var ajaxBookmarkDelete = false;
	$(document).on( 'click', '.wp-manga-delete-bookmark', function(e){

		e.preventDefault();

		if ( !ajaxBookmarkDelete ) {

			ajaxBookmarkDelete = true;
			var t = $( this );
			var postID = t.data( 'post-id' );
			var rowBookmark = $(this).closest("tr");

			if( rowBookmark.length != 0 ) {
				rowBookmark.css('opacity', '0.5');
				var isMangaSingle = 0;
			}

			if( $('.add-bookmark .action_icon .wp-manga-delete-bookmark').length != 0 ) {
				var isMangaSingle = 1;
				$('.add-bookmark').css('opacity', '0.5');
			}else{
				var isMangaSingle = 0;
                // chapter reading page
                var li = $('.action_list_icon a.wp-manga-action-button[data-action="bookmark"]').parent();
				li.css('opacity', '0.5');
			}

			jQuery.ajax({
		        url: manga.ajax_url,
		        type: 'POST',
		        data: {
		            action : 'wp-manga-delete-bookmark',
		            postID: postID,
					isMangaSingle : isMangaSingle
		        },
		        success: function( response ) {
		            if ( response.success ) {
						if( rowBookmark.length != 0 ) {
							rowBookmark.fadeOut();
							rowBookmark.remove();
						}
						if( typeof isMangaSingle !== 'undefined' && isMangaSingle == true ) {
							$('.add-bookmark').empty();
							$('.add-bookmark').append( response.data );
							$('.add-bookmark').css('opacity', '1');
						}else if( typeof isMangaSingle !== 'undefined' && isMangaSingle == false ){
							if(response.data.is_empty == true){
								alert(response.data.msg);
							} else {
                                // chapter reading page
                                var li = $('.action_list_icon a.wp-manga-delete-bookmark').parent();
								li.empty();
								li.append( response.data );
								li.css('opacity', '1');
							}
						}
		            }
		        },
		        complete: function(xhr, textStatus) {
		        	ajaxBookmarkDelete = false;
		        }
		    });
		}
	})

	var ajaxBookmarkDelete = false;
	$(document).on( 'click', '#delete-bookmark-manga', function(e){
		e.preventDefault();
		if ( !ajaxBookmarkDelete ) {
			ajaxBookmarkDelete = true;
			var bookmark = [];
			$('.bookmark-checkbox:checkbox:checked').each(function(i){
	          bookmark[i] = $(this).val();
			  $(this).closest('tr').addClass('remove');
			  $(this).closest('tr').css( 'opacity', '0.5' );
	        });
			jQuery.ajax({
		        url: manga.ajax_url,
		        type: 'POST',
		        data: {
		            action : 'wp-manga-delete-multi-bookmark',
		            bookmark: bookmark,
		        },
		        success: 
		        complete: 		    });
		}
	})

	$(document).on( 'change', '#wp-manga-bookmark-checkall', function(e){
		e.preventDefault();
		var t = $(this);
		var chechbox = $('.bookmark-checkbox');
		if ( chechbox.length > 0 ) {
			if ( t.is(':checked') ) {
				$.each( chechbox, function(i,e){
					$(e).prop( 'checked', true );
				})
			} else {
				$.each( chechbox, 
			}
		}
	})

    // search
    // manga-search-field
	$('form.manga-search-form.ajax input.manga-search-field').each(function(){

		var searchIcon = $(this).parent().children('.ion-ios-search-strong');

	 	var append = $(this).parent();

		$(this).autocomplete({
			appendTo: append,
			source: function( request, resp ) {
				$.ajax({
					url: manga.ajax_url,
					type: 'POST',
					dataType: 'json',
					data: {
						action: 'wp-manga-search-manga',
						title: request.term,
					},
					success: function( data ) {
						resp( $.map( data.data, function( item ) {
							if ( true == data.success ) {
								return {
									label: item.title,
									value: item.title,
									url: item.url,
									type: item.type
								}
							} else {
								return {
									label: item.message,
									value: item.message,
									type: item.type,
									click: false
								}
							}
						}))
					}
				});
			},
			select: function( e, ui ) {
				if ( ui.item.url ) {
					window.location.href = ui.item.url;
				} else {
					if ( ui.item.click ) {
						return true;
					} else {
						return false;
					}
				}
			},
			open: function( e, ui ) {
				var acData = $(this).data( 'uiAutocomplete' );
				acData.menu.element.addClass('manga-autocomplete').find('li div').each(function(){
					var $self = $(this),
						keyword = $.trim( acData.term ).split(' ').join('|');
					$self.html( $self.text().replace( new RegExp( "(" + keyword + ")", "gi" ), '<span class="manga-text-highlight">$1</span>' ) );
				});
			},
            change: function(e,ui){
                return false;
                e.stopPropagation();
            }
		}).autocomplete( "instance" )._renderItem = 
	});
	
	$('input[name="wp-manga-user-avatar"]').on('change', function(e){
		if( this.files.length ){
			$('.file-name').html(this.files[0].name);
		}else{
			$('.file-name').html('');
		}
	});

	$(document).on( 'click', '#wp-manga-upload-avatar', function(e){

		e.preventDefault();

		var thisBtn = $(this),
			chooseAvatar = $('.choose-avatar'),
			userAvatarSection = $('.c-user-avatar');

		var fd = new FormData();
		var userAvatar = $('input[name="wp-manga-user-avatar"]')[0].files[0];
		var userID = $('input[name="userID"]').val();
		var _wpnonce = $('input[name="_wpnonce"]').val();

		fd.append( 'action', 'wp-manga-upload-avatar' );
		fd.append( 'userAvatar', userAvatar );
		fd.append( 'userID', userID );
		fd.append( '_wpnonce', _wpnonce );

		jQuery.ajax({
			url : manga.ajax_url,
			type : 'POST',
			enctype: 'multipart/form-data',
			cache: false,
			contentType: false,
			processData: false,
			data : fd,
			beforeSend: 
			success: function( response ) {
				if( response.success ) {
					userAvatarSection.empty();
					userAvatarSection.append( response.data );
				} else {
					alert( response.data.msg );
				}
			},
			complete: 		});

	});

	$(document).on( 'click', '.remove-manga-history', function(e){
		e.preventDefault();
		var postID = $(this).data('manga');
		var item = $(this).closest('.col-md-4');

		item.css( 'opacity', '0.5' );
		$.ajax({
			url : manga.ajax_url,
			type : 'POST',
			data : {
				'action' : 'manga-remove-history',
				'postID' : postID,
			},
			success : function( response ) {
				if( response.success ) {
					item.fadeOut();
					item.remove();
					if( response.data.is_empty == true ){
						$('.tab-pane#history').empty();
						$('.tab-pane#history').append( response.data.msg );
					}
				}else{
					item.css( 'opacity', '1' );
				}
			}
		});
	});

	//Ajax pagination
	var wpMangaAjaxPosts = false;

	$( document ).on( 'click', '.wp-manga-ajax-button', function(e){

		e.preventDefault();
		if ( wpMangaAjaxPosts == false ) {

			wpMangaAjaxPosts = true;

			var t = $( this ),
				e = $(this).data('element'),
				template = $(this).data('template'),
				button = $(this).parent();

			t.addClass('loading');

			$.ajax({
				url: manga.ajax_url,
				type: 'POST',
				data: {
					action: 'wp_manga_archive_loadmore',
					manga_args : manga_args,
					template : template
				},
				success: function( response ){
					t.removeClass('loading');
					$('.wp-manga-query-vars').remove();
					$(e).append( response );

					if( manga_args.paged >= manga_args.max_num_pages ){
						button.remove();
					}
				}
			})


		}
	});
	
	// quick navigate to first chapter for Video Manga
	$(".page-item-detail.video").each(function(){
		$('.item-thumb a',$(this)).on('click', function(e){
			var parent = $(this).closest('.page-item-detail');
			
			$latest_chapter = $('.list-chapter .chapter-item', parent)[0];
			if($latest_chapter){
				var chapter_url = $($('.chapter a', parent)[0]).attr('href');
				
				location.href = chapter_url;
				
				e.stopPropagation();
				return false;
			}
		});
		
	});
	
	if($('body').hasClass('reading-manga')){
		var $schema_cookie = window.wpmanga.getCookie('wpmanga-reading-contrast');
		if($schema_cookie != ''){
			if($schema_cookie == 'light'){
				$('body').addClass('text-ui-light');
				$('body').removeClass('text-ui-dark');
			} else{
				$('body').removeClass('text-ui-light');
				$('body').addClass('text-ui-dark');
			}
		}
		
		var fontsize = window.wpmanga.getCookie('wpmanga-reading-fontsize');
		if($('.c-page-content.chapter-type-text').length > 0 && fontsize){
			$('.reading-content .text-left').css('font-size', fontsize + 'px');
			$('.reading-content .text-left').css('line-height', (fontsize * 1.5) + 'px');
		}
	}
	
	madara_update_views();
});
