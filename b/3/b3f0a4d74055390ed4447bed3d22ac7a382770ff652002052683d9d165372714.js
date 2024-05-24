/**
 The MIT License

 Copyright (c) 2010 Daniel Park (http://metaweb.com, http://postmessage.freebaseapps.com)

 Permission is hereby granted, free of charge, to any person obtaining a copy
 of this software and associated documentation files (the "Software"), to deal
 in the Software without restriction, including without limitation the rights
 to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 copies of the Software, and to permit persons to whom the Software is
 furnished to do so, subject to the following conditions:

 The above copyright notice and this permission notice shall be included in
 all copies or substantial portions of the Software.

 THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 THE SOFTWARE.
 **/
var NO_JQUERY = {};
((this, typeof jQuery === "undefined" ? NO_JQUERY : jQuery);
;
var Jed=);;
/*
 * WordPress REST Proxy Request
 * Name:   WPCOM_Proxy_Request
 * Author: Dan Walmsley <dan.walmsley@automattic.com>, Beau Collins <beaucollins@gmail.com>
 *
 * A function that makes proxy requests (using window.postMessage) to the
 * WordPress.com REST api (https://public-api.wordpress.com/rest/v1/help)
 *
 * Usage:
 * 	window.WPCOM_Proxy_Request( path );
 * 	window.WPCOM_Proxy_Request( path, request );
 * 	window.WPCOM_Proxy_Request( request );
 *
 * Arguments:
 * 	path     : the REST URL path to request (will be appended to the rest base URL)
 * 	request  : request parameters: method (string), path (string), query (object), body (object)
 *
 * Returns
 * 	A promise()-like object whose callbacks accept the following arguments:
 * 		response : the JSON response for your request
 * 		statusCode : the HTTP statusCode for your request
 *
 * Example:
 * 	// For simple GET requests
 * 	window.WPCOM_Proxy_Request( '/me' ).done( function( response, statusCode ){
 * 		/// ...
 * 	} );
 *
 * 	// More Advanced GET request
 * 	window.WPCOM_Proxy_Request( {
 * 		path: '/sites/en.blog.wordpress.com/posts',
 * 		query: { number: 100 }
 * 	} );
 *
 * 	// POST request
 * 	window.WPCOM_Proxy_Request( {
 * 		method: 'POST',
 * 		path: '/sites/en.blog.wordpress.com/posts/9776/replies/new',
 * 		body: { content: 'This is a comment' }
 * 	} );
 */
(();
;
/*
 *  - wpLikes wraps all the proxied REST calls
 */
var wpLikes;

/*!
	https://gist.github.com/marlun78/2701678
	Underscore.js templates as a standalone implementation.
	JavaScript micro-templating, similar to John Resig's implementation.
	Underscore templates documentation: http://documentcloud.github.com/underscore/#template
	Modifyed by marlun78
*/
( )();

/**
 * Escape function brought in from Underscore.js
 */
( )();

( function () {
	var extWin;
	var i18n;

	function throttleArgs(func, limit) {
		let inThrottle;
		let lastArgs;
		return function() {
			const args = arguments;
			if ( !inThrottle || ( inThrottle && lastArgs !== JSON.stringify( args ) ) ) {
				func.apply( this, args );
				inThrottle = true;
				lastArgs = JSON.stringify( args );
				setTimeout(  limit );
			}
		}
	};

	wpLikes = {
		version: '',
		lang: 'en',
		langVersion: '',

		jsonAPIbase: 'https://public-api.wordpress.com/rest/v1',
		hasUpgradedProxy: false,
		isLoggedIn: false,
		masterReady: false,
		requests: {},
		me: false,
		askedMe: false,
		cache: [],
		adminBarEnabled: false,
		reblogsEnabled: false,

		batches: [],

		widgetDims: {},

		login_blog_id: false,
		login_post_id: false,
		login_comment_id: false,
		login_obj_id: false,
		login_domain: false,
		pre_login_action: '',

		textStyles: {},
		linkStyles: {},
		adminBarStyles: {},

		likers: {},
		total: {},

		objSettings: {},

		wpLikes: function () {
			var info = wpLikes.splitParams( location.hash.replace( /^#/, '' ) );
			if ( 'ver' in info ) {
				wpLikes.version = info.ver;
			}
		},

		getAllFrames: function( blogId, postId ) {

			const total = window.parent.frames.length;
			const names = [];
			let i = 0;

			do {
				// Collect all the frame names while
				// avoiding cross-site errors being thrown.
				try {
					names.push( window.parent.frames[i].name ); 
				} catch( e ) {}
				i++;
			} while ( i < total );

			// From all the frame names that we've collected,
			// look for frames that belong to us.
			// Example iframe: <iframe class="post-likes-widget jetpack-likes-widget" name="like-post-frame-202566594-34-65a8d73d754ec" src="https://widgets.wp.com/likes/?ver=13.1-a.2#blog_id=202566594&amp;post_id=34&amp;origin=yoursite&amp;obj_id=202566594-34-65a8d73d754ec&amp;n=1&amp;block=1" ...></iframe>

			const frames = [];
			names.forEach(name => {

				// Skip irrelevant frames
				if ( name.indexOf( 'like-post-frame' ) !== 0 ) {
					return;
				}

				// Get frames
				const frame = window.parent.frames[ name ];

				// Further filter by specific blogId & postId if provided.
				if ( blogId && postId ) {
					const hash = frame.location.hash;
					const params = new URLSearchParams( hash.substr( 1 ) );
					
					if ( params.get('blog_id') == blogId && params.get('post_id') == postId ) {
						frames.push( frame );
					}
				// Else include this frame
				} else {
					frames.push( frame );
				}
			});

			return frames;
		},

		resizeFrame: 

		likePost: 

		unlikePost: function ( blog_id, post_id, success, fail ) {
			return this.ajax( {
				type: 'POST',
				path: '/sites/' + blog_id + '/posts/' + post_id + '/likes/mine/delete',
				success: success,
				error: fail,
				blogId: blog_id,
				postId: post_id,
			} );
		},

		likeComment: function ( blog_id, comment_id, success, fail ) {
			if ( wpLikes.commentLikesKillSwitch ) {
				return;
			}
			return this.ajax( {
				type: 'POST',
				path: '/sites/' + blog_id + '/comments/' + comment_id + '/likes/new',
				success: success,
				error: fail,
				blogId: blog_id,
				commentId: comment_id,
			} );
		},

		unlikeComment: function ( blog_id, comment_id, success, fail ) {
			if ( wpLikes.commentLikesKillSwitch ) {
				return;
			}
			return this.ajax( {
				type: 'POST',
				path: '/sites/' + blog_id + '/comments/' + comment_id + '/likes/mine/delete',
				success: success,
				error: fail,
				blogId: blog_id,
				commentId: comment_id,
			} );
		},

		afterlikeFollow: 

		getFollowingStatus: (() => {
			
			const request = {};

			return ( blog_id, success, fail ) => {

				if ( ! request[ blog_id ] ) {
					request[ blog_id ] = wpLikes.ajax( {
						type: 'GET',
						path: '/sites/' + blog_id + '/follows/mine',
						blogId: blog_id
					} );
				}

				// Add or hook into existing request's done & fail callback
				request[ blog_id ]
					.done( success )
					.fail( fail );
				
				// Clear cache
				setTimeout(() => {
					delete request[ blog_id ];
				}, 250);
			};
		})(),

		getPost: (() => {
			
			const request = {};

			return ( blog_id, post_id, success, fail ) => {

				const key = [ blog_id, post_id ].join( '-' );

				if ( ! request[ key ] ) { 
					request[ key ] = wpLikes.ajax( {
						type: 'GET',
						path: '/sites/' + blog_id + '/posts/' + post_id,
						blogId: blog_id,
						postId: post_id,
					} );
				}

				request[ key ]
					.done( success )
					.fail( fail );
				
				// Clear cache
				setTimeout( 250);
			};
		})(),

		getPostLikeStatus: 

		getPostLikes: function ( blog_id, post_id, success, fail, fromCache ) {
			if ( typeof fromCache === 'undefined' ) {
				var info = wpLikes.splitParams( location.hash.replace( /^#/, '' ) );
				if ( 'ver' in info ) {
					wpLikes.version = info.ver;
				}
			}
			return this.ajax( {
				type: 'GET',
				path: '/sites/' + blog_id + '/posts/' + post_id + '/likes',
				success: success,
				error: fail,
				fromCache: fromCache,
				blogId: blog_id,
				postId: post_id,
				data: {
					chronological: true,
				},
			} );
		},

		getCommentLikeStatus: 

		getCommentLikes: 

		getMyInfo: (() => {

			let request = null;
			
			return ( success, fail ) => {

				if ( wpLikes.me ) {
					success( wpLikes.me, '/me' );
					return;
				}

				if ( ! request ) {
					request = wpLikes.ajax( {
						type: 'GET',
						path: '/me'
					} );
				}

				request
					.done( success )
					.fail( fail );

				// Stack consecutive calls as one
				setTimeout( 250);
			}
		})(),

		splitParams: 

		ajax: 

		/* postMessage */
		/* The messageType argument specifies the message type */
		/* Likes messages use likesMessage */
		/* An example of a message that doesn't use likesMessage is the resize request */
		postMessage: 

		openLoginWindow: 

		hasClass: 

		addClass: 

		removeClass: 

		outerWidth: function ( el ) {
			var width = el.offsetWidth;
			var style = getComputedStyle( el );
			if ( style ) {
				width += parseInt( style.marginLeft ) + parseInt( style.marginRight );
			}
			return width;
		},

		outerHeight: 

		triggerClick: 

		readMessage: function ( msg ) {
			var event = msg.data;

			if ( typeof event.event === 'undefined' ) {
				return;
			} else if ( event.event === 'login' && event.success && ! wpLikes.isLoggedIn ) {
				// Remove any lingering login window
				if ( extWin ) {
					if ( ! extWin.closed ) {
						extWin.close();
					}
					extWin = false;
				}

				// Remove the cookie polling iframe that was added by openLoginWindow
				var pollingIframe = document.querySelector( '#wp-login-polling-iframe' );
				if ( pollingIframe ) {
					pollingIframe.parentNode.removeChild( pollingIframe );
				}

				// If the cookie or RLT token is available, then we must have auth'd successfully
				wpLikes.isLoggedIn = true;
				wpLikes.hasUpgradedProxy = false;
				window.WPCOM_Proxy_Rebuild();

				if ( wpLikes.pre_login_action === 'like' && wpLikes.login_post_id ) {
					wpLikes.getPostLikes(
						wpLikes.login_blog_id,
						wpLikes.login_post_id,
						function ( response ) {

							const blogId = wpLikes.login_blog_id;
							const postId = wpLikes.login_post_id;
							const frames = wpLikes.getAllFrames( blogId, postId );

							frames.forEach( frame => {
								const objId = frame.name.replace( 'like-post-frame-', '' );
								const objSettings = wpLikes.objSettings[ objId ];
								wpLikes.displayWidget(
									response,
									objSettings.path,
									objSettings.info,
									objSettings.request
								);
							} );

							if ( ! response.i_like ) {
								wpLikes.doLikeMultiple(
									blogId,
									postId
								);
							}
						},
						function () {},
						false
					);
				}

				if ( wpLikes.pre_login_action === 'reblog' && wpLikes.login_post_id ) {
					var reblogButton = window.parent.frames['like-post-frame-' + wpLikes.login_obj_id].document.querySelector( '.wpl-button a.reblog' );
					if ( reblogButton ) {
						wpLikes.doReblog(wpLikes.login_blog_id, wpLikes.login_post_id, wpLikes.login_obj_id, reblogButton);
					}
				}

				if ( wpLikes.login_comment_id && ! wpLikes.commentLikesKillSwitch ) {
					wpLikes.getCommentLikes(
						wpLikes.login_blog_id,
						wpLikes.login_comment_id,
						bind( this ),
						
						false
					);
				}
			} else if ( event.event === 'injectStyles' ) {
				wpLikes.textStyles = event.textStyles;
				wpLikes.linkStyles = event.linkStyles;

				if ( wpLikes.adminBarEnabled ) {
					wpLikes.adminBarStyles = event.adminBarStyles;
				}
			} else if ( event.event === 'initialBatch' ) {
				wpLikes.initialBatch( event.requests );
			} else if ( event.event === 'adminBarEnabled' ) {
				wpLikes.adminBarEnabled = true;
			} else if ( event.event === 'reblogsEnabled' ) {
				wpLikes.reblogsEnabled = true;
			} else if ( event.event === 'loadLikeWidget' ) {
				if ( window.parent.frames[ event.name ] !== undefined ) {
					var info = wpLikes.splitParams(
						window.parent.frames[ event.name ].location.hash.replace( /^#/, '' )
					);
					var path;
					var request;

					if ( info.obj_id && info.obj_id.match( /[^\w-]/ ) ) {
						return;
					}

					// This gets used for reverse remote login, we need to pass
					// the target login domain all the way down to the login
					// form.
					try {
						if ( typeof event.domain === 'string' ) {
							wpLikes.login_domain = event.domain;
						}
					} catch ( error ) {}

					if ( info.blog_id && info.post_id && info.origin ) {
						path = '/sites/' + info.blog_id + '/posts/' + info.post_id + '/likes';
						if ( typeof info.slim === 'undefined' ) {
							info.slim = false;
						}

						request = {
							type: 'post',
							blog_id: info.blog_id,
							post_id: info.post_id,
							obj_id: info.obj_id,
							width: event.width,
							slim: info.slim,
						};
						wpLikes.objSettings[ info.obj_id ] = { path, info, request };
						wpLikes.requests[ path ] = request;
						wpLikes.getPostLikes( info.blog_id, info.post_id, ( response, path ) => wpLikes.displayWidget( response, path, info, request ) );
					} else if (
						info.blog_id &&
						info.comment_id &&
						info.origin &&
						! wpLikes.commentLikesKillSwitch
					) {
						path = '/sites/' + info.blog_id + '/comments/' + info.comment_id + '/likes';
						request = {
							type: 'comment',
							blog_id: info.blog_id,
							comment_id: info.comment_id,
							obj_id: info.obj_id,
							width: event.width,
						};
						wpLikes.requests[ path ] = request;

						wpLikes.getCommentLikes( info.blog_id, info.comment_id, );
					}
				}
			} else if ( event.event === 'didReblog' && 'obj_id' in event ) {
				// Update the display of the button
				var wplbuttonlink = window.parent.frames[
					'like-post-frame-' + event.obj_id
				].document.querySelector( '.wpl-button a.reblog' );
				this.removeClass( 'reblog', wplbuttonlink );
				this.addClass( 'reblogged', wplbuttonlink );

				wplbuttonlink.innerHTML = '<span>' + i18n.translate( 'Reblogged' ).fetch() + '</span> ';
				wplbuttonlink.style.display = null;
			} else if ( event.event === 'focusLikesCount' && 'parent' in event ) {
				var wplbuttonlink = window.parent.frames[ event.parent ].document.querySelector( '#other-gravatars' );
				wplbuttonlink.focus();
			}
		},

		handlePromptClicks: 

		siblings: 

		doReblog: 

		doLikeMultiple: function( blog_id, post_id, origin_obj_id, source ) {
			const frames = wpLikes.getAllFrames( blog_id, post_id );
			frames.forEach( frame => {
				const obj_id = frame.name.replace( 'like-post-frame-', '' );
				wpLikes.doLike( blog_id, post_id, obj_id );
			});
		},

		doLike: function ( blog_id, post_id, obj_id ) {
			
			if ( ! wpLikes.isLoggedIn ) {
				wpLikes.login_blog_id = blog_id;
				wpLikes.login_post_id = post_id;
				wpLikes.login_obj_id = obj_id;
				wpLikes.pre_login_action = 'like';

				new Image().src =
					document.location.protocol +
					'//pixel.wp.com/b.gif?v=wpcom-no-pv&x_likes=loggedout_like_click&baba=' +
					Math.random();

				// User isn't logged in, so we should get them to do that.
				wpLikes.throttledOpenLoginWindow();
				return;
			}

			/**
			 * After Like Prompts
			 * After liking a post, we show a "follow this blog"? prompt to get readers to subscribe to the blog.
			 * or a "comment on this post?" prompt if they are already following
			 */
			var followPromptText =
				' <span class="wpl-follow" style="display:none;"><a href="#">' +
				i18n.translate( 'Follow this Blog?' ).fetch() +
				'</a></span>';
			var commentPromptText =
				' <span class="wpl-comment" style="display:none;"><a href="#" target="_parent">' +
				i18n.translate( 'Comment on this post?' ).fetch() +
				'</a></span>';

			var wplbuttonlink = window.parent.frames[
				'like-post-frame-' + obj_id
			].document.querySelector( '.wpl-button a.like, .wpl-button a.liked' );
			var wplbutton = wplbuttonlink.parentNode;
			var wplcount = this.siblings( '.wpl-count', wplbutton )[ 0 ];
			var wplavatars = this.siblings( '.wpl-avatars', wplbutton );
			var wplcounttext = wplcount.querySelector( '.wpl-count-text' );

			var likeText = '';
			var countEl;
			var count;

			if ( this.hasClass( 'like', wplbuttonlink ) ) {
				var slim = this.hasClass( 'wpl-slim-likebox', wplbutton.parentNode );

				// Figure out what the feedback text should say
				if (
					wplcounttext &&
					i18n.translate( 'Be the first to like this.' ).fetch() === wplcounttext.innerHTML
				) {
					likeText =
						'<span class="wpl-count-text">' +
						i18n.translate( 'You like this.' ).fetch() +
						'</span>' +
						followPromptText +
						commentPromptText;
				} else if (
					wplcounttext &&
					i18n.translate( 'One blogger likes this.' ).fetch() === wplcounttext.innerHTML
				) {
					likeText =
						'<span class="wpl-count-text">' +
						i18n.translate( 'You and one other blogger like this.' ).fetch() +
						'</span>' +
						followPromptText +
						commentPromptText;
				} else {
					countEl = wplcount.querySelector( '.wpl-count-number' );
					if ( countEl ) {
						count = countEl.textContent;
						likeText =
							'<span class="wpl-count-text">' +
							i18n.sprintf(
								i18n
									.translate(
										'You and <a href="%1$s" id="%2$s">%3$s other bloggers</a> like this.'
									)
									.fetch(),
								'#',
								'other-gravatars',
								'<span class="wpl-count-number">' + count + '</span>'
							) +
							'</span>' +
							followPromptText +
							commentPromptText;
					}
				}

				wplcounttext = wplcount.querySelector( '.wpl-count-text' );

				if ( wplcounttext && i18n.translate( 'Be the first to like this.' ).fetch() === wplcounttext.innerHTML ) {
					likeText =
						'<span class="wpl-count-text">' +
						i18n.translate( 'You like this.' ).fetch() +
						'</span>';
				} else {
					countEl = wplcount.querySelector( '.wpl-count-number' );
					newCount = parseInt( countEl.textContent ) + 1;

					likeText =
						'<span class="wpl-count-text">' +
						i18n.sprintf(
							i18n.translate( '<a href="%1$s" id="%2$s">%3$s likes</a>' ).fetch(),
							'#',
							'other-gravatars',
							'<span class="wpl-count-number">' + newCount + '</span>'
						) +
						'</span>';
				}

				// Update the display of the button
				this.removeClass( 'like', wplbuttonlink );
				this.addClass( 'liked', wplbuttonlink );
				this.removeClass( 'like', wplbutton );
				this.addClass( 'liked', wplbutton );

				if ( ! slim ) {
					wplcount.innerHTML = likeText;
					wplcount.style.display = null;
					wpLikes.setCss(
						window.parent.frames[ 'like-post-frame-' + obj_id ].document.body.querySelector(
							'.wpl-count a'
						),
						wpLikes.linkStyles
					);
				}

				postLikePrompts.bind( this ).call();

				if ( ! slim ) {
					wpLikes.getMyInfo(
						function ( me ) {
							me.css_class = 'wp-liker-me';

							const key = blog_id + '-' + post_id;
							const oldLikers = wpLikes.likers[ key ];
							const newLikers = oldLikers.filter( liker => liker.ID !== me.ID );
							newLikers.unshift( me );
							const totalDiff = newLikers.length - oldLikers.length;
							wpLikes.likers[ key ] = newLikers;
							wpLikes.total[ key ] += totalDiff;

							// Find any existing liker item and remove it.
							const wpLikerItem = wplbutton.parentNode.querySelector( `li[data-liker-id="${ me.ID }"]` );
							if ( wpLikerItem ) {
								wpLikerItem.parentNode.removeChild( wpLikerItem );
							}

							if ( ! wplbutton.parentNode.querySelectorAll( '.wp-liker-me' ).length ) {
								if ( ! wplavatars.length ) {
									wplbutton.insertAdjacentHTML(
										'afterend',
										'<ul class="wpl-avatars">' +
											'<li class="wp-liker-me" data-liker-id="' + window.escapeHTML( me.ID ) + '">' +
											'<a title="' +
											window.escapeHTML( me.display_name ) +
											'" href="' +
											window.escapeHTML( me.profile_URL ) +
											'" class="wpl-liker" rel="nofollow" target="_parent">' +
											'<img src="' +
											window.escapeHTML( me.avatar_URL ) +
											'" alt="' +
											window.escapeHTML( i18n.translate( 'My Grav.' ).fetch() ) +
											'" width="30" height="30" />' +
											'</a>' +
											'</li>' +
											'</ul>'
									);
								} else {
									var avatars = wplavatars[0].querySelectorAll('li');
									if ( avatars.length === 5 ) {
										// Delete the last avatar before inserting the new one
										avatars[avatars.length - 1].remove();
									}
									wplavatars[ 0 ].insertAdjacentHTML(
										'afterbegin',
										'<li class="wp-liker-me" data-liker-id="' + window.escapeHTML( me.ID ) + '">' +
											'<a title="' +
											window.escapeHTML( me.display_name ) +
											'" href="' +
											window.escapeHTML( me.profile_URL ) +
											'" class="wpl-liker" rel="nofollow" target="_parent">' +
											'<img src="' +
											window.escapeHTML( me.avatar_URL ) +
											'" alt="' +
											window.escapeHTML( i18n.translate( 'My Grav.' ).fetch() ) +
											'" width="30" height="30" style="padding-right: 3px;" />' +
											'</a>' +
											'</li>'
									);
								}
							}
						}.bind( this )
					);
				}

				wplbuttonlink.innerHTML = '<span>' + i18n.translate( 'Liked' ).fetch() + '</span> ';

				// Ask parent to resize the frame
				wpLikes.resizeFrame( 'like-post-frame-' + obj_id );

				if ( wpLikes.adminBarEnabled ) {
					var widgetDocument = window.parent.frames[ 'admin-bar-likes-widget' ].document;
					widgetDocument.querySelector( 'a.like' ).textContent = i18n.translate( 'Liked' ).fetch();
				}

				// ANNNNND like it
				if ( typeof arguments[ 3 ] !== 'undefined' && arguments[ 3 ] === 'adminbar' ) {
					wpLikes.throttledLikePost( blog_id, post_id, 'adminbar' );
				} else {
					wpLikes.throttledLikePost( blog_id, post_id, 'post_flair' );
				}
			} else if ( this.hasClass( 'liked', wplbuttonlink ) ) {
				this.removeClass( 'liked', wplbuttonlink );
				this.addClass( 'like', wplbuttonlink );

				this.removeClass( 'liked', wplbutton );
				this.addClass( 'like', wplbutton );

				if (
					wplcounttext &&
					i18n.translate( 'You like this.' ).fetch() === wplcounttext.innerHTML
				) {
					likeText =
						'<span class="wpl-count-text">' +
						i18n.translate( 'Be the first to like this.' ).fetch() +
						'</span>';
				} else if (
					wplcounttext &&
					i18n.translate( 'You and one other blogger like this.' ).fetch() ===
						wplcounttext.innerHTML
				) {
					likeText =
						'<span class="wpl-count-text">' +
						i18n.translate( 'One blogger likes this.' ).fetch() +
						'</span>';
				} else {
					countEl = wplcount.querySelector( '.wpl-count-number' );
					if ( countEl ) {
						count = countEl.textContent;
						likeText =
							'<span class="wpl-count-text">' +
							i18n.sprintf(
								i18n.translate( '<a href="%1$s" id="%2$s">%3$s bloggers</a> like this.' ).fetch(),
								'#',
								'other-gravatars',
								'<span class="wpl-count-number">' + count + '</span>'
							) +
							'</span>';
					}
				}

				if ( wplcounttext && i18n.translate( 'You like this.' ).fetch() === wplcounttext.innerHTML ) {
					likeText =
						'<span class="wpl-count-text">' +
						i18n.translate( 'Be the first to like this.' ).fetch() +
						'</span>';
				} else {
					countEl = wplcount.querySelector( '.wpl-count-number' );
					newCount = parseInt( countEl.textContent ) - 1;

					likeText = i18n.sprintf(
						newCount === 1
							? i18n.translate( '<a href="%1$s" id="%2$s">%3$s like</a>' ).fetch()
							: i18n.translate( '<a href="%1$s" id="%2$s">%3$s likes</a>' ).fetch(),
						'#',
						'other-gravatars',
						'<span class="wpl-count-number">' + newCount + '</span>'
					);
				}

				wplcount.innerHTML = likeText;
				wplcount.style.display = null;
				wpLikes.setCss(
					window.parent.frames[ 'like-post-frame-' + obj_id ].document.body.querySelector(
						'.wpl-count a'
					),
					wpLikes.linkStyles
				);

				var wpLikerMe = wplbutton.parentNode.querySelector( 'li.wp-liker-me' );
				if ( wpLikerMe ) {
					wpLikerMe.parentNode.removeChild( wpLikerMe );
				}

				wpLikes.getMyInfo( (me) => {
					const key = blog_id + '-' + post_id;
					const oldLikers = wpLikes.likers[ key ];
					const newLikers = oldLikers.filter( );
					const totalDiff = newLikers.length - oldLikers.length;
					wpLikes.likers[ key ] = newLikers;
					wpLikes.total[ key ] += totalDiff;

					// Find liker that matches the ID and remove it.
					// This is for liker item that didn't have `.wp-liker-me` className
					// for non-logged-in unlike flow.
					const wpLikerItem = wplbutton.parentNode.querySelector( `li[data-liker-id="${ me.ID }"]` );
					if ( wpLikerItem ) {
						wpLikerItem.parentNode.removeChild( wpLikerItem );
					}
				} );

				wplbuttonlink.innerHTML = '<span>' + i18n.translate( 'Like' ).fetch() + '</span>';

				// Ask parent to resize the frames
				wpLikes.resizeFrame( 'like-post-frame-' + obj_id );

				if ( wpLikes.adminBarEnabled ) {
					window.parent.frames[ 'admin-bar-likes-widget' ].document.querySelector(
						'a.like'
					).textContent = i18n.translate( 'Like' ).fetch();
				}

				// ANNNNND unlike it
				wpLikes.throttledUnlikePost( blog_id, post_id );
			}
		},

		updatePostFeedback: function ( likes, blog_id, post_id, slim, obj_id, isBlock, showReblog ) {
			if ( ! obj_id ) {
				obj_id = blog_id + '-' + post_id;
			}

			var isLiked = likes.i_like;
			var canLike = likes.can_like || isBlock;
			var label = '';
			var css_state = '';
			var feedback = '';

			var canReblog = isBlock ? showReblog : false;
			var canUserReblog = false;
			
			var reblog_css_state = 'reblog';
			var reblog_feedback_no_html = i18n.translate( 'Reblog this post on your main site.' ).fetch();
			var reblog_label = i18n.translate( 'Reblog' ).fetch();
			var reblog_path = '/sites/' + blog_id + '/posts/' + post_id + '/reblogs/mine';

			if ( reblog_path in this.cache ) {
				canReblog = isBlock ? showReblog : Boolean( this.cache[ reblog_path ].can_reblog );
				canUserReblog = Boolean(this.cache[ reblog_path ].can_user_reblog);

				if ( this.cache[ reblog_path ].is_reblogged ) {
					reblog_css_state = 'reblogged';
					reblog_label = i18n.translate( 'Reblogged' ).fetch();
				}
			}

			// Figure out the button label and css class for this button
			if ( isLiked ) {
				label = i18n.translate( 'Liked' ).fetch();
				css_state = 'liked';
			} else {
				label = i18n.translate( 'Like' ).fetch();
				css_state = 'like';
			}

			var hasLikes = true;
			var likers;

			// Figure out the inital feedback text
			if ( likes.found === 0 ) {
				hasLikes = false;
				feedback = i18n.translate( 'Be the first to like this.' ).fetch();
			} else if ( likes.found === 1 ) {
				if ( isLiked ) {
					feedback = i18n.translate( 'You like this.' ).fetch();
				} else {
					feedback = i18n.translate( 'One blogger likes this.' ).fetch();
				}
			} else if ( isLiked ) {
				var user_count = likes.found - 1;
				if ( user_count !== 1 ) {
					feedback = i18n.sprintf(
						i18n
							.translate( 'You and <a href="%1$s" id="%2$s">%3$s other bloggers</a> like this.' )
							.fetch(),
						'#',
						'other-gravatars',
						'<span class="wpl-count-number">' + user_count + '</span>'
					);
				} else {
					feedback = i18n.translate( 'You and one other blogger like this.' ).fetch();
				}
			} else {
				feedback = i18n.sprintf(
					i18n.translate( '<a href="%1$s" id="%2$s">%3$s bloggers</a> like this.' ).fetch(),
					'#',
					'other-gravatars',
					'<span class="wpl-count-number">' + likes.found + '</span>'
				);
			}

			if ( likes.found === 0 ) {
				feedback = i18n.translate( 'Be the first to like this.' ).fetch();
			} else if ( likes.found === 1 && isLiked ) {
				feedback = i18n.translate( 'You like this.' ).fetch();
			} else if ( likes.found === 1 && ! isLiked ) {
				feedback = i18n.sprintf(
					i18n.translate( '<a href="%1$s" id="%2$s">%3$s like</a>' ).fetch(),
					'#',
					'other-gravatars',
					'<span class="wpl-count-number">' + likes.found + '</span>'
				);
			} else {
				feedback = i18n.sprintf(
					i18n.translate( '<a href="%1$s" id="%2$s">%3$s likes</a>' ).fetch(),
					'#',
					'other-gravatars',
					'<span class="wpl-count-number">' + likes.found + '</span>'
				);
			}

			feedback = '<span class="wpl-count-text">' + feedback + '</span>';

			function createPostLikeTemplate() {
				var template;
				var cacheBuster;
				var widgetDocument;
				var slicedLikers = likers.slice( 0, 5 ).reverse()

				if ( wpLikes.version !== '' ) {
					cacheBuster = '?ver=' + wpLikes.version;
				}

				if ( wpLikes.adminBarEnabled ) {
					template = window.tmpl( document.querySelector( '#admin-bar-likes' ).innerHTML );
					widgetDocument = window.parent.frames[ 'admin-bar-likes-widget' ].document;

					widgetDocument.querySelector( '#target' ).innerHTML = template( {
						label: label,
						isRtl: wpLikes.adminBarStyles.isRtl,
					} );

					var style = document.createElement( 'link' );
					style.setAttribute( 'type', 'text/css' );
					style.setAttribute( 'rel', 'stylesheet' );
					style.setAttribute(
						'href',
						'//s0.wp.com/wp-includes/css/admin-bar.min.css' + cacheBuster
					);
					widgetDocument.querySelector( 'head' ).appendChild( style );

					if ( wpLikes.adminBarStyles.isRtl ) {
						style.setAttribute(
							'href',
							'//s0.wp.com/wp-content/mu-plugins/admin-bar/rtl/wpcom-admin-bar-rtl.css' +
								cacheBuster
						);
					} else {
						style.setAttribute(
							'href',
							'//s0.wp.com/wp-content/mu-plugins/admin-bar/wpcom-admin-bar.css' + cacheBuster
						);
					}
					widgetDocument.querySelector( 'head' ).appendChild( style );
				}

				if ( slim ) {
					template = window.tmpl( document.querySelector( '#slim-likes' ).innerHTML );
				} else {
					template = window.tmpl( document.querySelector( '#post-likes' ).innerHTML );
				}

				widgetDocument = window.parent.frames[ 'like-post-frame-' + obj_id ].document;

				widgetDocument.querySelector( '#target' ).innerHTML = template( {
					likers: slicedLikers,
					css_state: css_state,
					label: label,
					feedback: feedback,
					feedback_no_html: feedback.replace( /(<.*?>)/gi, '' ),
					hasLikes: hasLikes,
					reblog_css_state: reblog_css_state,
					reblog_feedback_no_html: reblog_feedback_no_html,
					canReblog: canReblog,
					canUserReblog: canUserReblog,
					canLike: canLike,
					reblog_label: reblog_label,
				} );

				wpLikes.setCss( widgetDocument.body, wpLikes.textStyles );
				wpLikes.setCss( widgetDocument.body.querySelector( '.wpl-count a' ), wpLikes.linkStyles );

				if ( wpLikes.textStyles.direction === 'rtl' ) {
					this.addClass( 'rtl', widgetDocument.body );
				}

				wpLikes.postMessage(
					{
						event: 'showLikeWidget',
						id: 'like-post-wrapper-' + obj_id,
						blog_id: blog_id,
						post_id: post_id,
						obj_id: obj_id,
					},
					parent
				);

				if ( wpLikes.adminBarEnabled ) {
					widgetDocument = window.parent.frames[ 'admin-bar-likes-widget' ].document;
					widgetDocument.querySelector( 'a.like' ).click(
						bind( this )
					);
				}
			}

			// Build the likers array
			likers = likes.likes;
			if ( likers.length > 0 ) {
				var max_remove = likers.length - 90;
				for ( var i = likers.length - 1; i >= 0 && max_remove > 0; i-- ) {
					if (
						likers[ i ].default_avatar &&
						( ! wpLikes.me || wpLikes.me.ID !== likers[ i ].ID )
					) {
						likers.splice( i, 1 );
						max_remove--;
					}
				}
			}

			if ( wpLikes.me ) {
				wpLikes.isLoggedIn = true;

				for ( var j = 0; j < likers.length; j++ ) {
					if ( likers[ j ].ID === wpLikes.me.ID ) {
						likers[ j ].css_class = 'wp-liker-me';
						// Move this user's avatar to the front of the face pile
						likers.unshift( likers.splice( j, 1 )[ 0 ] );
						break;
					}
				}
			}

			wpLikes.likers[ blog_id + '-' + post_id ] = likers;
			wpLikes.total[ blog_id + '-' + post_id ] = likes.found;

			createPostLikeTemplate.bind( this ).call();
		},

		initialBatch: function ( requests ) {
			var info;
			var request;
			var path;

			var batch = {
				queue: [],
				batchFinished: false,
				batchWaiting: [],
				blogId: null,
				postId: null,
				commentId: null,
			};

			if ( ! wpLikes.me && ! wpLikes.askedMe ) {
				batch.queue.push( '/me' );
				wpLikes.askedMe = true;
			}

			for ( var i = 0; i < requests.length; i++ ) {
				info = requests[ i ];

				if ( info.obj_id && info.obj_id.match( /[^\w-]/ ) ) {
					continue;
				}

				if ( info.blog_id && info.post_id ) {
					batch.blogId = info.blog_id;
					batch.postId = info.post_id;

					path = '/sites/' + info.blog_id + '/posts/' + info.post_id + '/likes?chronological=true';


					request = {
						type: 'post',
						blog_id: info.blog_id,
						post_id: info.post_id,
						obj_id: info.obj_id,
						width: info.width,
					};
					wpLikes.requests[ path ] = request;
					batch.queue.push( path );
					path = '/sites/' + info.blog_id + '/posts/' + info.post_id + '/reblogs/mine';
					request = {
						blog_id: info.blog_id,
						post_id: info.post_id,
					};
					wpLikes.requests[ path ] = request;
					batch.queue.push( path );
				} else if ( info.blog_id && info.comment_id && ! wpLikes.commentLikesKillSwitch ) {
					batch.blogId = info.blog_id;
					batch.commentId = info.comment_id;

					path = '/sites/' + info.blog_id + '/comments/' + info.comment_id + '/likes';
					request = {
						type: 'comment',
						blog_id: info.blog_id,
						comment_id: info.comment_id,
						width: info.width,
					};
					wpLikes.requests[ path ] = request;
					batch.queue.push( path );
				}
			}

			var batchRequest = {
				path: '/batch',
				type: 'GET',
				url: 'https://public-api.wordpress.com/rest/v1/batch',
				data: '',
				success: 
				error: 
			};

			var amp = '';
			for ( var j = 0; j < batch.queue.length; j++ ) {
				if ( j > 0 ) {
					amp = '&';
				}
				batchRequest.data += amp + 'urls[]=' + batch.queue[ j ];
			}

			wpLikes.batches.push( batch );
			wpLikes.ajax( batchRequest );
		},
	};

	// I'm going with the throttled function approach instead
	// because it would require less code modification to 
	// support multiple like instances.
	wpLikes.throttledLikePost = throttleArgs(wpLikes.likePost, 100);
	wpLikes.throttledUnlikePost = throttleArgs(wpLikes.unlikePost, 100);
	wpLikes.throttledOpenLoginWindow = throttleArgs(wpLikes.openLoginWindow, 100);

	// replacement for jQuery(el).css({some: style})
	wpLikes.setCss = 
	// wpLikes.displayWidget is called when the ajax request for post or comment likes completes successfully
	// it is used to display the widget with the likes data
	//
	// request is used to pass along the request object instead of looking it up in wpLikes.requests
	wpLikes.displayWidget = 

	// displayPostLikeWidget is called when a post's likes data arrives via ajax (see wpLikes.displayWidget i.e. the ajax success handler)
	function displayPostLikeWidget( blog_id, post_id, width, slim, result, obj_id, isBlock, showReblog ) {
		if ( ! obj_id ) {
			obj_id = blog_id + '-' + post_id;
		}

		wpLikes.updatePostFeedback( result, blog_id, post_id, slim, obj_id, isBlock, showReblog );

		var likePostFrameDoc = window.parent.frames[ 'like-post-frame-' + obj_id ].document;

		function hasClass( className, el ) {
			if ( el.classList ) {
				return el.classList.contains( className );
			}
			return new RegExp( '(^| )' + className + '( |$)', 'gi' ).test( el.className );
		}

		// Add a click handler to handle the liking action
		var likeButton = likePostFrameDoc.querySelector( '.wpl-button a.like, .wpl-button a.liked' );
		if ( likeButton ) {
			likeButton.onclick = bind( this );
		}

		// Add a reblog handler to handle the reblog action
		var reblogButton = likePostFrameDoc.querySelector( '.wpl-button a.reblog' );
		if ( reblogButton ) {
			reblogButton.onclick = bind( this );
		}

		if ( ! slim ) {
			// Handle the "n other bloggers" list
			// Listen on .wpl-count, since a#other-gravatar link gets replaced on every update
			var wpLikesCount = likePostFrameDoc.querySelector( '.wpl-count' );
			if ( wpLikesCount ) {
				wpLikesCount.onclick = function ( e ) {
					if (e.target && e.target.closest( '#other-gravatars' ) ) {
						e.preventDefault();

						var $avatars = window.parent.frames['like-post-frame-' + obj_id].document.querySelector(
							'.wpl-avatars'
						);

						var likersToSend = 90;
						var myArrayId = -1;
						for (
							var i = 0;
							i < likersToSend && i < wpLikes.likers[blog_id + '-' + post_id].length;
							i++
						) {
							if (wpLikes.likers[blog_id + '-' + post_id][i].css_class === 'wpl-liker-me') {
								myArrayId = i;
							}
							if( ! wpLikes.likers[blog_id + '-' + post_id][i].name && wpLikes.likers[blog_id + '-' + post_id][i].display_name ) {
								wpLikes.likers[blog_id + '-' + post_id][i].name = wpLikes.likers[blog_id + '-' + post_id][i].display_name;
							}
							wpLikes.likers[blog_id + '-' + post_id][i].css_class = 'wpl-liker';
						}

						// Send a message to the likes master iframe (jetpack-likes.php) to update this frame's gravatars (likers)
						var data = {
							event: 'showOtherGravatars',
							likers: wpLikes.likers[blog_id + '-' + post_id].slice(0, likersToSend),
							total: wpLikes.total[blog_id + '-' + post_id],
							parent: 'like-post-frame-' + obj_id,
							width: $avatars.offsetWidth,
							position: {
								top: $avatars.offsetTop,
								left: $avatars.offsetLeft,
							},
							totalLikesLabel: wpLikes.total[blog_id + '-' + post_id] === 1
								? i18n.translate( '1 like' ).fetch()
								// translators: %d: number of likes
								: i18n.sprintf( i18n.translate( '%d likes' ).fetch(), wpLikes.total[blog_id + '-' + post_id] ),
							// translators: %s: is the liker name
							avatarAltTitle: i18n.translate( '%s\'s avatar' ).fetch(),
						};

						wpLikes.postMessage(data, window.parent);

						if (myArrayId >= 0) {
							wpLikes.likers[blog_id + '-' + post_id][myArrayId].css_class = 'wpl-liker-me';
						}

						e.stopPropagation();

						likePostFrameDoc.addEventListener( 'click', );
					}
				};
			}
		}

		/**
		 * End Prompts
		 */
	}

	
	// Display the widget
	
	// Since we can't know definitively when an iframe has finished loading
	
	wpLikes.wpLikes();
	window.addEventListener( 'message', );

	window.addEventListener( 'load', );

	setInterval( updateWidgetDimensions, 500 );
} )();
;
