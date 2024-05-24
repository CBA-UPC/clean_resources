/* global jQuery:false, TRX_EFFECTS_STORAGE:false */

(function() {

	"use strict";

	// Settings
	var planeClassPrefix = 'trx_effects_image_effects_on_';		// class prefix of wrappers with image

	var globalCanvas = false;									// true - one canvas for all images is used (twitches when scrolling the page),
																// false - separate canvas for each image is created (smooth scrolling, but WebKit limit: maximum of 16 objects per page)

	var permanentDrawing = globalCanvas || false;				// true - permanent redraw images on canvas,
																// false - redraw only on ready and on hover

	var curtains = null;										// global curtains object (used if globalCanvas is true)

	var $document = jQuery(document);

	var firstLoad = false;


	window.addEventListener("load", function() {
		firstLoad = true;
		if ( typeof trx_effects_apply_filters == 'function' ) {
			globalCanvas = trx_effects_apply_filters( 'trx_effects_filter/image_effects_use_global_canvas', globalCanvas );
			permanentDrawing = globalCanvas || false;
		}
		create_planes();
	} );

	function create_planes() {

		// not available in the edit mode of Elementor
		if ( typeof window.elementorFrontend !== 'undefined' && elementorFrontend.isEditMode() ) {
			return;
		}

		// get our plane element
		var planeElements = document.querySelectorAll('[class*="' + planeClassPrefix + '"]:not(.trx_effects_image_effects_inited)');

		// exit if no image effects are present on the current page
		if ( planeElements.length === 0 ) return;

		// create global canvas and append it to the body
		if ( globalCanvas ) {
			curtains = create_canvas( document.body );
		}

		// create planes and handle them
		trx_effects_when_images_loaded( jQuery( planeElements ), function() {
			var effect;
			for ( var i = 0; i < planeElements.length; i++ ) {
				effect = get_effect_name( planeElements[i] );
				if ( effect && typeof window['trx_effects_image_effects_callback_' + effect] == 'function' ) {
					window['trx_effects_image_effects_callback_' + effect]( curtains, planeElements[i], i, planeElements.length );
					planeElements[i].classList.add( 'trx_effects_image_effects_inited' );
				}
				// mark body as all planes are loaded
				if ( i === planeElements.length - 1 ) {
					document.body.classList.add( 'trx_effects_image_effects_planes_loaded' );
				}
			}
		} );
	}
	
	$document.on( 'trx_effects_action_got_ajax_response', function() {
		if ( firstLoad ) create_planes();
	} );
	$document.on( 'trx_effects_action_init_hidden_elements', function() {
		if ( firstLoad ) create_planes();
	} );
	$document.on('trx_effects_action_before_remove_content', function( e, cont ) {
		jQuery( '.trx_effects_image_effects_inited' ).each( function() {
			var $self = jQuery( this ),
				curtains = $self.data('curtains'),
				plane    = $self.data('curtains-plane');
			if ( curtains && plane ) {
				curtains.removePlane( plane );
			}
		});
	});
	$document.on('trx_effects_action_after_add_content', function( e, cont ) {
		jQuery( '.trx_effects_image_effects_inited' ).each( function() {
			jQuery( this )
				.removeClass('trx_effects_image_effects_inited')
				.find( '[id^="trx_effects_image_effects_canvas_"]' ).remove().end()
				.find( '.trx_effects_image_effects_holder' ).removeClass('trx_effects_image_effects_holder').end();
		});
	});


	// Utilities
	//-------------------------------------------

	// Linear interpolation
	function lerp( start, end, amt ){
		return (1 - amt) * start + amt * end;
	}

	// Return name of image effect for element
	function get_effect_name( elm ) {
		var name = '';
		for ( var i=0; i < elm.classList.length; i++ ) {
			if ( elm.classList[i].indexOf( planeClassPrefix ) === 0 ) {
				name = elm.classList[i].substring( planeClassPrefix.length );
				break;
			}
		}
		return name;
	}

	// Change value in specified time
	function tween_value( args ) {
		// Defaults
		if ( ! args.time ) args.time = 1;	// 1s

		// Use TweenMax (if loaded)
		if ( typeof TweenMax != 'undefined' ) {
			var t = {
				value: args.start
			};
			return TweenMax.to( t, args.time, {
							value: args.end,
							ease: args.ease ? args.ease : Power2.easeOut,
							onUpdate: function() {
								args.callbacks.onUpdate( t.value );
							},
							onComplete: function() {
								if ( args.callbacks.onComplete ) {
									args.callbacks.onComplete();
								}
							}
						} );

		// Internal tween manager
		} else {
			var amount = 0.1;
			return setInterval( function() {
				t.value = lerp( t.value, args.end, amount );
				args.callbacks.onUpdate( t.value );
				if (  Math.abs( t.value - args.end ) < 0.0001 ) {
					t.value = args.end;
					if ( args.callbacks.onComplete ) {
						args.callbacks.onComplete();
					}
				}
			}, Math.max(1, Math.round( args.time * 1000 / ( Math.abs( args.end - args.start ) / amount ) ) ) );
		}
	}

	// Stop changing value
	function tween_stop( handler ) {
		// Use TweenMax (if loaded)
		if ( typeof TweenMax != 'undefined' ) {
			if ( handler ) handler.kill();

		// Internal tween manager
		} else {
			if ( handler ) clearTimeout( handler );

		}
	}

	// Add canvas holder
	var total = 0;
	function create_canvas( item ) {

		// Append canvas holder to the item
		var id = 'trx_effects_image_effects_canvas_'+total++,
			div = document.createElement("div");
		div.setAttribute('id', id);
		item.appendChild(div);

		// Set up our WebGL context and append the canvas to our wrapper
		var webGLCurtain = new Curtains({
			watchScroll: globalCanvas,
			premultipliedAlpha: true,	// to avoid gray edge on images in effects 'waves', 'smudge', etc. (who changes the image border geometry)
			container: id	// if not specified - library create own canvas container
		});

		// Handling errors
		webGLCurtain
			.onError(function() {
				// we will add a class to the document body to display original images
				document.body.classList.add("no-curtains", "trx_effects_image_effects_planes_loaded");
			})
			.onContextLost(function() {
				// on context lost, try to restore the context
				webGLCurtain.restoreContext();
			});

		return webGLCurtain;
	}

	// Convert our mouse/touch position to coordinates relative to the vertices of the plane
	function mouse_to_plane_coords( plane, mpos ) {
		var w = plane.htmlElement.clientWidth, 	cw = w / 2,
			h = plane.htmlElement.clientHeight,	ch = h / 2;
		return {
				x:  ( mpos.x - cw ) / cw,
				y: -( mpos.y - ch ) / ch
			};
	}



	// Effect 'Waves'
	//-------------------------------------------
	
	// Create plane.
	// Attention! All callbacks must be in a global scope!
	window.trx_effects_image_effects_callback_waves = function( curtains_global, elm, index, total ) {

		var curtains = curtains_global ? curtains_global : null;

		var waveForceMin = 0,
			waveForceMax = 7;

		var waveFactor = elm.getAttribute('data-trx-effects-image-effect-waves-factor') || 4;

		var mouseIn = false;

		var scaleOnHover = elm.getAttribute('data-trx-effects-image-effect-scale') > 0,
			scaleFactor = 0;

		var paddingOnHover = typeof trx_effects_apply_filters == 'function'
								? trx_effects_apply_filters( 'trx_effects_filter/image_effects_padding', 0.04, 'waves' )
								: 0.04;

		var effectStrength = Math.max( 10.0, Math.min( 50.0, elm.getAttribute('data-trx-effects-image-effect-strength') || 30 ) );

		var plane = null,
			parent = null,
			img = elm.querySelector( 'img' );

		if ( img ) {
			parent = img.parentNode;
			parent.classList.add('trx_effects_image_effects_holder');
			img.setAttribute('data-sampler', 'wavesTexture');
			if ( ! globalCanvas ) {
				curtains = create_canvas(parent);
				if ( curtains ) jQuery(elm).data('curtains', curtains);
			}
			if ( curtains ) {
				if ( ! permanentDrawing ) curtains.disableDrawing();
				plane = curtains.addPlane( parent, get_params( elm, img, parent ) );
				if ( plane ) {
					jQuery(elm).data('curtains-plane', plane);
					handle_plane( plane );
				}
			}
		}

		// Return plane params
		function get_params() {
			var vs = `
				#ifdef GL_ES
					precision mediump float;
				#endif

				// those are the mandatory attributes that the lib sets
				attribute vec3 aVertexPosition;
				attribute vec2 aTextureCoord;

				// those are mandatory uniforms that the lib sets and that contain our model view and projection matrix
				uniform mat4 uMVMatrix;
				uniform mat4 uPMatrix;

				// our texture matrix uniform
				uniform mat4 wavesTextureMatrix;

				// if you want to pass your vertex and texture coords to the fragment shader
				varying vec3 vVertexPosition;
				varying vec2 vTextureCoord;

				// effect control vars declared inside our javascript
				uniform float uTime;
				uniform float uMouseMoveStrength;
				uniform float uEffectStrength;
				uniform float uWaveFactor;
				uniform vec2 uMousePosition;
				uniform float hoveringWaveForce;
				uniform float uPadding;

				void main() {
					vec3 vertexPosition = aVertexPosition;
					float distanceFromMouse = distance(uMousePosition, vec2(vertexPosition.x, vertexPosition.y));
					float waveSinusoid = cos(uWaveFactor * (distanceFromMouse - (uTime / 75.0)));
					float distanceStrength = 0.4 / (distanceFromMouse + 0.4);
					float distortionEffect = distanceStrength * waveSinusoid * uMouseMoveStrength / uEffectStrength;
					vertexPosition.z +=  distortionEffect;
					vertexPosition.x +=  distortionEffect * (uMousePosition.x - vertexPosition.x) * hoveringWaveForce * 3.0;
					vertexPosition.y +=  distortionEffect * (uMousePosition.y - vertexPosition.y) * hoveringWaveForce;
					gl_Position = uPMatrix * uMVMatrix * vec4(vertexPosition, (1.0 + uPadding));
					vTextureCoord = (wavesTextureMatrix * vec4(aTextureCoord, 0.0, 1.0)).xy;
					vVertexPosition = vertexPosition;
				}
			`;
			
			var fs = `
				#ifdef GL_ES
					precision mediump float;
				#endif
				// get our varying variables
				varying vec3 vVertexPosition;
				varying vec2 vTextureCoord;

				// our texture sampler
				uniform sampler2D wavesTexture;

				// effect control vars
				uniform float displacement;

				void main() {
					if ( false ) {
						float intensity = 1.0;
						vec2 textureCoord = vTextureCoord;
						vec4 image1 = texture2D(wavesTexture, textureCoord);
						vec4 image2 = texture2D(wavesTexture, textureCoord);
						vec4 texture1 = texture2D(wavesTexture, vec2(textureCoord.x, textureCoord.y + displacement * (image2 * intensity)));
						vec4 texture2 = texture2D(wavesTexture, vec2(textureCoord.x, textureCoord.y + (1.0 - displacement) * (image1 * intensity)));
						vec4 result = mix(texture1, texture2, displacement);
						gl_FragColor = result;
					} else {
						vec2 textureCoord = vTextureCoord;
						gl_FragColor = texture2D(wavesTexture, textureCoord);
					}
				}
			`;

			return {
				vertexShader: vs,
				fragmentShader: fs,
				widthSegments: 10,
				heightSegments: 10,
				uniforms: {
					time: {
						name: "uTime",
						type: "1f",
						value: 0
					},
					mousePosition: {
						name: "uMousePosition",
						type: "2f",
						value: [-.5, .5]
					},
					mouseMoveStrength: {
						name: "uMouseMoveStrength",
						type: "1f",
						value: .2
					},
					effectStrength: {
						name: "uEffectStrength",
						type: "1f",
						value: effectStrength
					},
					displacement: {
						name: "displacement",
						type: "1f",
						value: 0
					},
					waveFactor: {
						name: "uWaveFactor",
						type: "1f",
						value: waveFactor
					},
					hoveringWaveForce: {
						name: "hoveringWaveForce",
						type: "1f",
						value: waveForceMin
					},
					padding: {
						name: "uPadding",
						type: "1f",
						value: 0
					}
				}
			};
		}

		// handle plane
		function handle_plane( plane ) {
			plane
				.onLoading(function() {
//					console.log('Waves onLoading');
				})
				.onReady(function() {
//					console.log('Waves onReady: Plane '+index+' of '+total+' is ready');
					// first render plane
					if ( ! permanentDrawing ) curtains.needRender();
					// init tweens
					plane.tweenForce = null;
					plane.tweenScale = null;
					plane.tweenPadding = null;
					// now that our plane is ready we can listen to mouse move event
					function mouse_move() {
						if ( ! mouseIn ) {
							mouse_enter();
						}
					}
					function mouse_enter() {
						if ( ! mouseIn ) {
							mouseIn = true;
							change_wave_force( waveForceMax );
							change_scale( 1 );
							if ( paddingOnHover ) {
								change_padding( paddingOnHover );
							}
						}
					}
					function mouse_leave() {
						if ( mouseIn ) {
							mouseIn = false;
							change_wave_force( waveForceMin );
							change_scale( 0 );
							if ( paddingOnHover ) {
								change_padding( 0 );
							}
						}
					}
					elm.addEventListener("mousemove",  mouse_move );
					elm.addEventListener("touchmove",  mouse_move );
					elm.addEventListener("mouseenter", mouse_enter );
					elm.addEventListener("touchstart", mouse_enter );
					elm.addEventListener("mouseleave", mouse_leave );
					elm.addEventListener("touchend",   mouse_leave );
				})
				.onRender(function() {
//					if ( globalCanvas ) plane.updatePosition();
					plane.uniforms.time.value++;

				})
				.onAfterResize(function() {
//					console.log('Waves afterResize: Plane '+index+' of '+total+' is resized');
				});

			// Change wave force value
			function change_wave_force( to ) {
				if ( plane.tweenForce ) {
					tween_stop( plane.tweenForce );
				}
				plane.tweenForce = tween_value( {
					start: plane.uniforms.hoveringWaveForce.value,
					end: to,
					time: 1.25,
					callbacks: {
						onUpdate: function(value) {
							plane.uniforms.hoveringWaveForce.value = value;
						},
						onComplete: function() {
							plane.tweenForce = null;
						}
					}
				} );
			}

			// Change padding value
			function change_padding( to ) {
				if ( plane.tweenPadding ) {
					tween_stop( plane.tweenPadding );
				}
				plane.tweenPadding = tween_value( {
					start: plane.uniforms.padding.value,
					end: to,
					time: 1.25,
					callbacks: {
						onUpdate: function(value) {
							plane.uniforms.padding.value = value;
						},
						onComplete: function() {
							plane.tweenPadding = null;
						}
					}
				} );
			}

			// Change scale
			function change_scale( to ) {
				if ( plane.tweenScale ) {
					tween_stop( plane.tweenScale );
				}
				if ( ! permanentDrawing ) {
					curtains.enableDrawing();
				}
				plane.tweenScale = tween_value( {
					start: scaleFactor,
					end: to,
					time: 1.25,
					callbacks: {
						onUpdate: function(value) {
							scaleFactor = value;
							if ( scaleOnHover ) {
								plane.textures && plane.textures[0].setScale(1 + value / 12, 1 + value / 12);
							}
						},
						onComplete: function() {
							plane.tweenScale = null;
							if ( ! permanentDrawing && to === 0 ) {
								curtains.disableDrawing();
							}
						}
					}
				} );
			}
		}
	};


	// Effect 'Waves2'
	//-------------------------------------------
	
	// Create plane.
	// Attention! All callbacks must be in a global scope!
	window.trx_effects_image_effects_callback_waves2 = function( curtains_global, elm, index, total ) {

		var curtains = curtains_global ? curtains_global : null;

		var waveForceMin = 0,
			waveForceMax = 2;

		var waveFactor = elm.getAttribute('data-trx-effects-image-effect-waves-factor') || 4;

		var mouseIn = false;

		var scaleOnHover = elm.getAttribute('data-trx-effects-image-effect-scale') > 0,
			scaleFactor = 0;

		var paddingOnHover = typeof trx_effects_apply_filters == 'function'
								? trx_effects_apply_filters( 'trx_effects_filter/image_effects_padding', 0.04, 'waves2' )
								: 0.04;

		var effectStrength = Math.max( 10.0, Math.min( 50.0, elm.getAttribute('data-trx-effects-image-effect-strength') ) );

		var plane = null,
			parent = null,
			img = elm.querySelector( 'img' );

		if ( img ) {
			parent = img.parentNode;
			parent.classList.add('trx_effects_image_effects_holder');
			img.setAttribute('data-sampler', 'waves2Texture');
			if ( ! globalCanvas ) {
				curtains = create_canvas(parent);
				if ( curtains ) jQuery(elm).data('curtains', curtains);
			}
			if ( curtains ) {
				if ( ! permanentDrawing ) curtains.disableDrawing();
				plane = curtains.addPlane( parent, get_params( elm, img, parent ) );
				if ( plane ) {
					jQuery(elm).data('curtains-plane', plane);
					handle_plane( plane );
				}
			}
		}

		// Return plane params
		function get_params( elm, img, parent ) {
			var vs = `
				#ifdef GL_ES
					precision mediump float;
				#endif

				// default mandatory variables
				attribute vec3 aVertexPosition;
				attribute vec2 aTextureCoord;

				uniform mat4 uMVMatrix;
				uniform mat4 uPMatrix;

				// our texture matrix
				uniform mat4 waves2TextureMatrix;

				// custom variables
				varying vec3 vVertexPosition;
				varying vec2 vTextureCoord;
				uniform float uTime;
				uniform vec2 uResolution;
				uniform vec2 uMousePosition;
				uniform float uMouseMoveStrength;
				uniform float uEffectStrength;
				uniform float uWaveFactor;
				uniform float uPadding;

				void main() {
					vec3 vertexPosition = aVertexPosition;
					// get the distance between our vertex and the mouse position
					float distanceFromMouse = distance(uMousePosition, vec2(vertexPosition.x, vertexPosition.y));
					// calculate our wave effect
					float waveSinusoid = cos(uWaveFactor * (distanceFromMouse - (uTime / 75.0)));
					// attenuate the effect based on mouse distance
					float distanceStrength = 0.4 / (distanceFromMouse + 0.4);
					// calculate our distortion effect
					float distortionEffect = distanceStrength * waveSinusoid * uMouseMoveStrength / uEffectStrength;
					// apply it to our vertex position
					vertexPosition.z += distortionEffect;
					vertexPosition.x += distortionEffect * (uMousePosition.x - vertexPosition.x) * (uResolution.x / uResolution.y);
					vertexPosition.y += distortionEffect * (uMousePosition.y - vertexPosition.y);
					gl_Position = uPMatrix * uMVMatrix * vec4(vertexPosition, (1.0 + uPadding));
					// varyings
					vTextureCoord = (waves2TextureMatrix * vec4(aTextureCoord, 0.0, 1.0)).xy;
					vVertexPosition = vertexPosition;
				}
			`;
			var fs = `
				#ifdef GL_ES
					precision mediump float;
				#endif

				varying vec3 vVertexPosition;
				varying vec2 vTextureCoord;
				uniform sampler2D waves2Texture;

				void main() {
					// apply our texture
					vec4 finalColor = texture2D(waves2Texture, vTextureCoord);
					// fake shadows based on vertex position along Z axis
					finalColor.rgb -= clamp(-vVertexPosition.z, 0.0, 1.0);
					// fake lights based on vertex position along Z axis
					finalColor.rgb += clamp(vVertexPosition.z, 0.0, 1.0);
					// handling premultiplied alpha (useful if we were using a png with transparency)
					finalColor = vec4(finalColor.rgb * finalColor.a, finalColor.a);
					gl_FragColor = finalColor;
				}
			`;

			return {
				vertexShader: vs,
				fragmentShader: fs,
				widthSegments: 20,
				heightSegments: 20,
				uniforms: {
					resolution: { // resolution of our plane
						name: "uResolution",
						type: "2f", // notice this is an length 2 array of floats
						value: [ parent.clientWidth, parent.clientHeight ]
					},
					time: { // time uniform that will be updated at each draw call
						name: "uTime",
						type: "1f",
						value: 0
					},
					mousePosition: { // our mouse position
						name: "uMousePosition",
						type: "2f", // again an array of floats
						value: [-.5, .5]
					},
					mouseMoveStrength: { // the mouse move strength
						name: "uMouseMoveStrength",
						type: "1f",
						value: 0
					},
					effectStrength: { // the effect strength
						name: "uEffectStrength",
						type: "1f",
						value: effectStrength
					},
					waveFactor: {    // waves frequency
						name: "uWaveFactor",
						type: "1f",
						value: waveFactor
					},
					padding: { // padding around image on hover
						name: "uPadding",
						type: "1f",
						value: 0
					}
				}
			};
		}

		// handle plane
		function handle_plane( plane ) {
			plane
				.onLoading(function() {
					//console.log(plane.loadingManager.sourcesLoaded);
				})
				.onReady(function() {
//					console.log('Plane '+index+' of '+total+' is ready');
					// set a fov of 35 to reduce perspective
					plane.setPerspective(35);
					// first render plane
					if ( ! permanentDrawing ) curtains.needRender();
					// init tweens
					plane.tween = null;
					plane.tweenScale = null;
					// now that our plane is ready we can listen to mouse move event
					function mouse_move() {
						if ( ! mouseIn ) {
							mouse_enter();
						}
					}
					function mouse_enter() {
						if ( ! mouseIn ) {
							mouseIn = true;
							change_wave_force( waveForceMax );
							change_scale( 1 );
							if ( paddingOnHover ) {
								change_padding( paddingOnHover );
							}
						}
					}
					function mouse_leave() {
						if ( mouseIn ) {
							mouseIn = false;
							change_wave_force( waveForceMin );
							change_scale( 0 );
							if ( paddingOnHover ) {
								change_padding( 0 );
							}
						}
					}
					elm.addEventListener("mousemove",  mouse_move );
					elm.addEventListener("touchmove",  mouse_move );
					elm.addEventListener("mouseenter", mouse_enter );
					elm.addEventListener("touchstart", mouse_enter );
					elm.addEventListener("mouseleave", mouse_leave );
					elm.addEventListener("touchend",   mouse_leave );
				})
				.onRender(function() {
					// increment our time uniform
					plane.uniforms.time.value++;
				})
				.onAfterResize(function() {
//					console.log('Plane '+index+' of '+total+' is resized');
					var planeBoundingRect = plane.getBoundingRect();
					plane.uniforms.resolution.value = [ planeBoundingRect.width, planeBoundingRect.height ];
				});
		}

		// Change wave force value
		function change_wave_force( to ) {
			if ( plane.tween ) {
				tween_stop( plane.tween );
			}
			plane.tween = tween_value( {
				start: plane.uniforms.mouseMoveStrength.value,
				end: to,
				time: 1.25,
				callbacks: {
					onUpdate: function(value) {
						plane.uniforms.mouseMoveStrength.value = value;
					},
					onComplete: function() {
						plane.tween = null
					}
				}
			} );
		}

		// Change padding value
		function change_padding( to ) {
			if ( plane.tweenPadding ) {
				tween_stop( plane.tweenPadding );
			}
			plane.tweenPadding = tween_value( {
				start: plane.uniforms.padding.value,
				end: to,
				time: 1.25,
				callbacks: {
					onUpdate: function(value) {
						plane.uniforms.padding.value = value;
					},
					onComplete: function() {
						plane.tweenPadding = null;
					}
				}
			} );
		}

		// Change scale
		function change_scale( to ) {
			if ( plane.tweenScale ) {
				tween_stop( plane.tweenScale );
			}
			if ( ! permanentDrawing ) {
				curtains.enableDrawing();
			}
			plane.tweenScale = tween_value( {
				start: scaleFactor,
				end: to,
				time: 1.25,
				callbacks: {
					onUpdate: function(value) {
						scaleFactor = value;
						if ( scaleOnHover ) {
							plane.textures && plane.textures[0].setScale(1 + value / 12, 1 + value / 12);
						}
					},
					onComplete: function() {
						plane.tweenScale = null;
						if ( ! permanentDrawing && to === 0 ) {
							curtains.disableDrawing();
						}
					}
				}
			} );
		}
	};


	// Effect 'Smudge'
	//-------------------------------------------
	
	// Create plane.
	// Attention! All callbacks must be in a global scope!
	window.trx_effects_image_effects_callback_smudge = function( curtains_global, elm, index, total ) {

		var curtains = curtains_global ? curtains_global : null;

		var enableDrawing = false;

		// track the mouse positions to send it to the shaders
		var mousePosition = {
			x: 0,
			y: 0
		};

		// we will keep track of the last position in order to calculate the movement strength/delta
		var mouseLastPosition = {
			x: 0,
			y: 0
		};

		var mouseStrength = false;

		var mouseIn = false;

		var scaleOnHover = elm.getAttribute('data-trx-effects-image-effect-scale') > 0,
			scaleFactor = 0;

		var paddingOnHover = typeof trx_effects_apply_filters == 'function'
								? trx_effects_apply_filters( 'trx_effects_filter/image_effects_padding', 0.04, 'smudge' )
								: 0.04;

		var effectStrength = Math.max( 10.0, Math.min( 50.0, elm.getAttribute('data-trx-effects-image-effect-strength') ) );

		var deltas = {
			max: 0,
			applied: 0
		};

		var plane = null,
			parent = null,
			img = elm.querySelector( 'img' );

		if ( img ) {
			parent = img.parentNode;
			parent.classList.add('trx_effects_image_effects_holder');
			img.setAttribute('data-sampler', 'smudgeTexture');
			if ( ! globalCanvas ) {
				curtains = create_canvas(parent);
				if ( curtains ) jQuery(elm).data('curtains', curtains);
			}
			if ( curtains ) {
				if ( ! permanentDrawing ) curtains.disableDrawing();
				plane = curtains.addPlane( parent, get_params( elm, img, parent ) );
				if ( plane ) {
					jQuery(elm).data('curtains-plane', plane);
					handle_plane( plane );
				}
			}
		}

		// Return plane params
		function get_params( elm, img, parent ) {
			var vs = `
				#ifdef GL_ES
					precision mediump float;
				#endif

				// default mandatory variables
				attribute vec3 aVertexPosition;
				attribute vec2 aTextureCoord;

				uniform mat4 uMVMatrix;
				uniform mat4 uPMatrix;

				// our texture matrix
				uniform mat4 smudgeTextureMatrix;

				// custom variables
				varying vec3 vVertexPosition;
				varying vec2 vTextureCoord;
				uniform float uTime;
				//uniform vec2 uResolution;
				uniform vec2 uMousePosition;
				uniform float uMouseMoveStrength;
				uniform float uEffectStrength;
				uniform float uPadding;

				void main() {
					vec3 vertexPosition = aVertexPosition;
					// get the distance between our vertex and the mouse position
					float distanceFromMouse = distance(uMousePosition, vec2(vertexPosition.x, vertexPosition.y));
					// attenuate the effect based on mouse distance
					float distanceStrength = 0.4 / (distanceFromMouse + 0.4);
					// calculate our distortion effect
					float distortionEffect = distanceStrength * uMouseMoveStrength / uEffectStrength;
					// apply it to our vertex position
					vertexPosition.z += distortionEffect;
					//vertexPosition.x += distortionEffect * (uMousePosition.x - vertexPosition.x) * (uResolution.x / uResolution.y);
					vertexPosition.x += distortionEffect * (uMousePosition.x - vertexPosition.x);
					vertexPosition.y += distortionEffect * (uMousePosition.y - vertexPosition.y);
					gl_Position = uPMatrix * uMVMatrix * vec4(vertexPosition, (1.0+uPadding));
					// varyings
					vTextureCoord = (smudgeTextureMatrix * vec4(aTextureCoord, 0.0, 1.0)).xy;
					vVertexPosition = vertexPosition;
				}
			`;
			var fs = `
				#ifdef GL_ES
					precision mediump float;
				#endif

				varying vec3 vVertexPosition;
				varying vec2 vTextureCoord;
				uniform sampler2D smudgeTexture;

				void main() {
					// apply our texture
					vec4 finalColor = texture2D(smudgeTexture, vTextureCoord);
					// fake shadows based on vertex position along Z axis
					finalColor.rgb -= clamp(-vVertexPosition.z, 0.0, 1.0);
					// fake lights based on vertex position along Z axis
					finalColor.rgb += clamp(vVertexPosition.z, 0.0, 1.0);
					// handling premultiplied alpha (useful if we were using a png with transparency)
					finalColor = vec4(finalColor.rgb * finalColor.a, finalColor.a);
					gl_FragColor = finalColor;
				}
			`;

			return {
				vertexShader: vs,
				fragmentShader: fs,
				widthSegments: 20,
				heightSegments: 20,
				uniforms: {
					/*
					resolution: { // resolution of our plane
						name: "uResolution",
						type: "2f", // notice this is an length 2 array of floats
						value: [ parent.clientWidth, parent.clientHeight ]
					},
					*/
					time: { // time uniform that will be updated at each draw call
						name: "uTime",
						type: "1f",
						value: 0
					},
					mousePosition: { // our mouse position
						name: "uMousePosition",
						type: "2f", // again an array of floats
						value: [ mousePosition.x, mousePosition.y ]
					},
					mouseMoveStrength: { // the mouse move strength
						name: "uMouseMoveStrength",
						type: "1f",
						value: 0
					},
					effectStrength: { // the smudge strength
						name: "uEffectStrength",
						type: "1f",
						value: effectStrength
					},
					padding: { 		// paddings around image on hover
						name: "uPadding",
						type: "1f",
						value: 0
					}
				}
			};
		}

		// handle plane
		function handle_plane( plane ) {
			plane
				.onLoading(function() {
					//console.log(plane.loadingManager.sourcesLoaded);
				})
				.onReady(function() {
//					console.log('Plane '+index+' of '+total+' is ready');
					// set a fov of 35 to reduce perspective
					plane.setPerspective(35);
					// apply a little effect once everything is ready
					deltas.max = 2;
					// first render plane
					if ( ! permanentDrawing ) curtains.needRender();
					// init tweens
					plane.tweenScale = null;
					// now that our plane is ready we can listen to mouse move event
					function mouse_move(e) {
						if ( ! mouseIn ) {
							mouse_enter();
						}
						handle_movement(e, plane);
					}
					function mouse_enter() {
						if ( ! mouseIn ) {
							mouseIn = true;
							change_scale( 1 );
							if ( paddingOnHover ) {
								change_padding(paddingOnHover);
							}
						}
					}
					function mouse_leave() {
						if ( mouseIn ) {
							mouseIn = false;
							change_scale( 0 );
							if ( paddingOnHover ) {
								change_padding(0);
							}
						}
					}
					elm.addEventListener("mousemove",  mouse_move );
					elm.addEventListener("touchmove",  mouse_move );
					elm.addEventListener("mouseenter", mouse_enter );
					elm.addEventListener("touchstart", mouse_enter );
					elm.addEventListener("mouseleave", mouse_leave );
					elm.addEventListener("touchend",   mouse_leave );
				})
				.onRender(function() {
					// increment our time uniform
					plane.uniforms.time.value++;
					// decrease both deltas by damping : if the user doesn't move the mouse, effect will fade away
					deltas.applied += (deltas.max - deltas.applied) * 0.02;
					deltas.max += (0 - deltas.max) * 0.01;
					// send the new mouse move strength value
					plane.uniforms.mouseMoveStrength.value = deltas.applied;
					if ( ! permanentDrawing && ! enableDrawing && Math.abs(deltas.applied - deltas.max) < 0.001 ) {
						curtains.disableDrawing();
					}
				})
				.onAfterResize(function() {
//					console.log('Plane '+index+' of '+total+' is resized');
					/*
					var planeBoundingRect = plane.getBoundingRect();
					plane.uniforms.resolution.value = [planeBoundingRect.width, planeBoundingRect.height];
					*/
				});
		}

		// handle the mouse move event
		function handle_movement(e, plane) {

			// update mouse last pos
			mouseLastPosition.x = mousePosition.x;
			mouseLastPosition.y = mousePosition.y;

			var mouse = {};

			// touch event
			if (e.targetTouches) {
				mouse.x = globalCanvas ? e.targetTouches[0].clientX : e.targetTouches[0].layerX;
				mouse.y = globalCanvas ? e.targetTouches[0].clientY : e.targetTouches[0].layerY;

			// mouse event
			} else {
				mouse.x = globalCanvas ? e.clientX : e.layerX;
				mouse.y = globalCanvas ? e.clientY : e.layerY;
			}

			// lerp the mouse position a bit to smoothen the overall effect
			mousePosition.x = lerp(mousePosition.x, mouse.x, 0.3);
			mousePosition.y = lerp(mousePosition.y, mouse.y, 0.3);

			// convert our mouse/touch position to coordinates relative to the vertices of the plane
			var mouseCoords = globalCanvas
								? plane.mouseToPlaneCoords(mousePosition.x, mousePosition.y)
								: mouse_to_plane_coords( plane, mousePosition );
			

			// update our mouse position uniform
			plane.uniforms.mousePosition.value = [mouseCoords.x, mouseCoords.y];

			// calculate the mouse move strength
			if ( mouseStrength && mouseLastPosition.x && mouseLastPosition.y ) {
				var delta = Math.sqrt( Math.pow( mousePosition.x - mouseLastPosition.x, 2 ) + Math.pow( mousePosition.y - mouseLastPosition.y, 2 ) ) / 20;
				delta = Math.min(4, delta);
				// update max delta only if it increased
				if ( delta >= deltas.max ) {
					deltas.max = delta;
				}
			} else {
				deltas.max = 2;
			}
		}

		// Change padding value
		function change_padding( to ) {
			if ( plane.tweenPadding ) {
				tween_stop( plane.tweenPadding );
			}
			plane.tweenPadding = tween_value( {
				start: plane.uniforms.padding.value,
				end: to,
				time: 1.25,
				callbacks: {
					onUpdate: function(value) {
						plane.uniforms.padding.value = value;
					},
					onComplete: function() {
						plane.tweenPadding = null;
					}
				}
			} );
		}

		// Change scale
		function change_scale( to ) {
			if ( plane.tweenScale ) {
				tween_stop( plane.tweenScale );
			}
			if ( ! permanentDrawing ) {
				enableDrawing = true;
				curtains.enableDrawing();
			}
			plane.tweenScale = tween_value( {
				start: scaleFactor,
				end: to,
				time: 1.25,
				callbacks: {
					onUpdate: function(value) {
						scaleFactor = value;
						if ( scaleOnHover ) {
							plane.textures && plane.textures[0].setScale(1 + value / 12, 1 + value / 12);
						}
					},
					onComplete: function() {
						plane.tweenScale = null;
						if ( ! permanentDrawing && to === 0 ) {
							enableDrawing = false;
							//curtains.disableDrawing();
						}
					}
				}
			} );
		}

	};


	// Effect 'Tint'
	//-------------------------------------------
	
	// Create plane.
	// Attention! All callbacks must be in a global scope!
	window.trx_effects_image_effects_callback_tint = function( curtains_global, elm, index, total ) {

		var curtains = curtains_global ? curtains_global : null;

		var mouseIn = false;

		var scaleOnHover = elm.getAttribute('data-trx-effects-image-effect-scale') > 0,
			scaleFactor = 0,
			tintColor = elm.getAttribute('data-trx-effects-image-effect-tint-color') || "#efa758";

		var plane = null,
			parent = null,
			img = elm.querySelector( 'img' );

		if ( img ) {
			parent = img.parentNode;
			parent.classList.add('trx_effects_image_effects_holder');
			img.setAttribute('data-sampler', 'tintTexture');
			if ( ! globalCanvas ) {
				curtains = create_canvas(parent);
				if ( curtains ) jQuery(elm).data('curtains', curtains);
			}
			if ( curtains ) {
				if ( ! permanentDrawing ) curtains.disableDrawing();
				plane = curtains.addPlane( parent, get_params( elm, img, parent ) );
				if ( plane ) {
					jQuery(elm).data('curtains-plane', plane);
					handle_plane( plane );
				}
			}
		}

		// Return plane params
		function get_params( elm, img, parent ) {

			var vs = `
				#ifdef GL_ES
					precision mediump float;
				#endif
				
				vec3 permute(vec3 x) {
					return mod((x*34.0+1.0)*x, 289.0);
				}
				
				float snoise(vec2 v) {
					const vec4 C = vec4(0.211325, 0.366025, -0.57735, 0.02439);
					vec2 i = floor(v + dot(v, C.yy)),
						 x0 = v - i + dot(i, C.xx),
						 i1;
					i1 = x0.x > x0.y ? vec2(1.0, 0.0) : vec2(0.0,1.0);
					vec4 x12 = x0.xyxy + C.xxzz;
					x12.xy -= i1,
					i = mod(i, 289.0);
					vec3 p = permute(permute(i.y + vec3(0.0, i1.y, 1.0)) + i.x + vec3(0.0,i1.x, 1.0)),
						 m = max(0.5 - vec3(dot(x0, x0), dot(x12.xy, x12.xy), dot(x12.zw, x12.zw)), 0.0);
					m = m * m, m = m * m;
					vec3 x = 2.0 * fract(p * C.www) - 1.0,
						 h = abs(x) - 0.5,
						 ox = floor(x + 0.5),
						 a0 = x - ox;
					m *= 1.792843 - 0.853735 * (a0 * a0 + h * h);
					vec3 g;
					g.x = a0.x * x0.x + h.x * x0.y,
					g.yz = a0.yz * x12.xz + h.yz * x12.yw;
					return 130.0 * dot(m, g);
				}
				
				attribute vec3 aVertexPosition;
				attribute vec2 aTextureCoord;

				uniform mat4 uMVMatrix, uPMatrix, tintTextureMatrix;
				uniform float uTime, uMouseOver, uScrollSpeed;

				varying vec2 vTextureCoord;
				varying vec3 vVertexPosition, vNoise;

				void main(){
					vec3 vP = aVertexPosition;
					vec2 sUV = vec2(vP.x * 0.75, vP.y * 0.75);
					vec3 sN = vec3(snoise(sUV * 2.0 - uTime / 360.0));
					float tV = fract(uTime / 540.0),
						  wC = tV * 4.0 - 2.0,
						  dTW = distance(vec2(0.0, vP.y), vec2(0.0, wC));
					//vP.z = cos(dTW * 3.141592) * (0.15 + abs(uScrollSpeed) * 0.4) * (1.0 - uMouseOver),
					vP.z = 0.0,
					gl_Position = uPMatrix * uMVMatrix * vec4(vP, 1.0),
					vVertexPosition = vP,
					vTextureCoord = (tintTextureMatrix * vec4(aTextureCoord, 0.0, 1.0)).xy,
					vNoise = sN;
				}
			`;
			var fs = `
				#ifdef GL_ES
					precision mediump float;
				#endif
				varying vec2 vTextureCoord;
				varying vec3 vVertexPosition,vNoise;

				uniform sampler2D tintTexture;
				uniform float uMouseOver;
				uniform vec3 uColor;

				void main(){
					vec4 f = texture2D(tintTexture, vTextureCoord);
					f.rgb -= clamp(-vVertexPosition.z / 10.0, 0.0, 1.0),
					f.rgb += clamp( vVertexPosition.z / 12.5, 0.0, 1.0);
					vec4 lC = vec4(0.299, 0.587, 0.114, 0.0),
						 l = vec4(1.0),
						 d = vec4(uColor.r / 255.0, uColor.g / 255.0, uColor.b / 255.0, 1.0);
					float lM = dot(f, lC);
					vec4 dT,
						 mC = (l + d) / vec4(2.0);
					dT = lM >= 0.45 ? mix(mC, l, smoothstep(0.45, 0.93125, lM)) : mix(d, mC, smoothstep(-0.03125, 0.45, lM));
					float mN = clamp(uMouseOver * (1.0 - vNoise.r) - 1.0 + uMouseOver * 2.0, 0.0, 1.0);
					f = mix(dT, f, step(0.9, mN)),
					f = vec4(f.rgb * f.a, f.a),
					gl_FragColor = f;
				}
			`;

			return {
				vertexShader: vs,
				fragmentShader: fs,
				widthSegments: 5,
				heightSegments: 40,
				fov: 45,
				drawCheckMargins: {
					top: 15,
					right: 0,
					bottom: 15,
					left: 0
				},
				uniforms: {
					time: {
						name: "uTime",
						type: "1f",
						value: 0	// 180 * index
					},
					mouseOver: {
						name: "uMouseOver",
						type: "1f",
						value: 0
					},
					scrollSpeed: {
						name: "uScrollSpeed",
						type: "1f",
						value: 0
					},
					color: {
						name: "uColor",
						type: "3f",
						value: trx_effects_rgb2components(tintColor)
					}
				}
			};
		}

		// handle plane
		function handle_plane( plane ) {
			plane
				.onReady(function() {
//					console.log('Plane '+index+' of '+total+' is ready');
					// first render plane
					if ( ! permanentDrawing ) curtains.needRender();
					// init tweens
					plane.tween = null;
					plane.tweenScale = null;
					// now that our plane is ready we can listen to mouse move event
					function mouse_move(e) {
						if ( ! mouseIn ) {
							mouse_enter();
						}
					}
					function mouse_enter() {
						if ( ! mouseIn ) {
							mouseIn = true;
							change_mouse_over( 1 );
							change_scale( 1 );
						}
					}
					function mouse_leave() {
						if ( mouseIn ) {
							mouseIn = false;
							change_mouse_over( 0 );
							change_scale( 0 );
						}
					}
					elm.addEventListener("mousemove",  mouse_move );
					elm.addEventListener("touchmove",  mouse_move );
					elm.addEventListener("mouseenter", mouse_enter );
					elm.addEventListener("touchstart", mouse_enter );
					elm.addEventListener("mouseleave", mouse_leave );
					elm.addEventListener("touchend",   mouse_leave );
				})
				.onRender(function() {
					plane.uniforms.time.value++;
				});
		}

		// Change wave force value
		function change_mouse_over( to ) {
			if ( plane.tween ) {
				tween_stop( plane.tween );
			}
			plane.tween = tween_value( {
				start: plane.uniforms.mouseOver.value,
				end: to,
				time: 1.25,
				callbacks: {
					onUpdate: function(value) {
						plane.uniforms.mouseOver.value = value;
						if ( scaleOnHover ) {
							plane.textures && plane.textures[0].setScale(1 + value / 12, 1 + value / 12);
						}
					},
					onComplete: function() {
						plane.tween = null
					}
				}
			} );
		}

		// Change scale
		function change_scale( to ) {
			if ( plane.tweenScale ) {
				tween_stop( plane.tweenScale );
			}
			if ( ! permanentDrawing ) {
				curtains.enableDrawing();
			}
			plane.tweenScale = tween_value( {
				start: scaleFactor,
				end: to,
				time: 1.25,
				callbacks: {
					onUpdate: function(value) {
						scaleFactor = value;
						if ( scaleOnHover ) {
							plane.textures && plane.textures[0].setScale(1 + value / 12, 1 + value / 12);
						}
					},
					onComplete: function() {
						plane.tweenScale = null;
						if ( ! permanentDrawing && to === 0 ) {
							curtains.disableDrawing();
						}
					}
				}
			} );
		}
	};



	// Effect 'Ripple'
	//-------------------------------------------
	
	// Create plane.
	// Attention! All callbacks must be in a global scope!
	window.trx_effects_image_effects_callback_ripple = function( curtains_global, elm, index, total ) {

		var curtains = curtains_global ? curtains_global : null;

		// Common vars
		var mouseIn = false;

		var scaleOnHover = elm.getAttribute('data-trx-effects-image-effect-scale') > 0,
			scaleFactor = 0;

		var effectStrength = Math.max( 10.0, Math.min( 50.0, elm.getAttribute('data-trx-effects-image-effect-strength') ) );

		// Effect-specific vars
		var wavesDirection = Math.max(0.0, Math.min(1.0, elm.getAttribute('data-trx-effects-image-effect-waves-direction') ) );

		// Curtains init
		var plane = null,
			parent = null,
			img = elm.querySelector( 'img' );

		if ( img ) {
			parent = img.parentNode;
			parent.classList.add('trx_effects_image_effects_holder');
			img.setAttribute('data-sampler', 'rippleTexture');
			if ( ! globalCanvas ) {
				curtains = create_canvas(parent);
				if ( curtains ) jQuery(elm).data('curtains', curtains);
			}
			if ( curtains ) {
				if ( ! permanentDrawing ) curtains.disableDrawing();
				plane = curtains.addPlane( parent, get_params( elm, img, parent ) );
				if ( plane ) {
					jQuery(elm).data('curtains-plane', plane);
					handle_plane( plane );
				}
			}
		}

		// Return plane params
		function get_params() {
			var vs = `

				#ifdef GL_ES
					precision mediump float;
				#endif

				// those are the mandatory attributes that the lib sets
				attribute vec3 aVertexPosition;
				attribute vec2 aTextureCoord;

				// those are mandatory uniforms that the lib sets and that contain our model view and projection matrix
				uniform mat4 uMVMatrix;
				uniform mat4 uPMatrix;

				// our texture matrix uniform
				uniform mat4 rippleTextureMatrix;

				// if you want to pass your vertex and texture coords to the fragment shader
				varying vec3 vVertexPosition;
				varying vec2 vTextureCoord;

				void main() {
					// get the vertex position from its attribute
					vec3 vertexPosition = aVertexPosition;
					
					// set its position based on projection and model view matrix
					gl_Position = uPMatrix * uMVMatrix * vec4(vertexPosition, 1.0);

					// set the varying variables
					// thanks to the texture matrix we will be able to calculate accurate texture coords
					// so that our texture will always fit our plane without being distorted
					vTextureCoord = (rippleTextureMatrix * vec4(aTextureCoord, 0.0, 1.0)).xy;
					vVertexPosition = vertexPosition;
				}
			`;
			
			var fs = `
				#ifdef GL_ES
					precision mediump float;
				#endif

				// get our varying variables
				varying vec3 vVertexPosition;
				varying vec2 vTextureCoord;

				// our texture sampler
				uniform sampler2D rippleTexture;

				// effect control vars declared inside our javascript
				uniform float uTime;			// time iterator to change waves position
				uniform float uEffectStrength;	// 10.0 - 50.0 - waves amplitude
				uniform float uWavesForce;		// 0.0 - 1.0 - fadeIn/fadeOut on mouse hover
				uniform float uWavesDirection;	// 0 - horizontal, 1 - vertical

				void main() {
					// get our texture coords
					vec2 textureCoord = vTextureCoord;

					// displace our pixels along both axis based on our time uniform and texture UVs
					// this will create a kind of water surface effect
					// try to comment a line or change the constants to see how it changes the effect
					// reminder : textures coords are ranging from 0.0 to 1.0 on both axis
					const float PI = 3.141592;
Error!='undefined') {
				try { if (typeof top.document.referrer=="string") { ref.ref=top.document.referrer; } } catch(e) {}
			}
			try { if (ref.ref=='' && typeof ia_document != "undefined" && ia_document.referrer) ref.ref="https://" + (new String(ia_document.referrer));} catch(e) {}
		};
		this.ref_params_obj = function() {
			var ref = this.ref;
			if (ref.frametype != 3) {
				this.ref_update();
			}
			var params = {"fr":ref.frametype};
			if (ref.topref) {
				params["tr"] = ref.topref;
			}
			if (typeof encodeURIComponent != 'undefined') {
				params["ref"] = encodeURIComponent(_get_referrer().substring(0,499));
			}
			return params;
		};
		this.ref_params = function() {
			var params = this.ref_params_obj();
			var url = '';
			for (var key in params) {
				url += '&' + key + '=' + params[key];
			}
			return url;
		};
		this.inner_params = function() {
			if (typeof encodeURIComponent != 'undefined') {
				var inner = '_ver=' + this.version;
				if (this.tfne) {
					inner += '|_tfne=' + this.tfne;
				}
				if (GemiusHitcolConnector.min) {
					inner += '|_min=1';
				}
				if (this.hidecnt > 0) {
					inner += '|_hdcnt=' + this.hidecnt;
				}
				if (this.inner.length > 0) {
					inner += '|' + this.array_to_string(this.inner, 0);
				}
				return '&inner='+encodeURIComponent(inner.substring(0,1999));
			}
			return '';
		};
		this.array_to_string = function(arr,start) {
			var i,str;
			if (typeof arr == 'string') {
				return arr;
			}
			str = '';
			if (typeof arr.length != 'undefined') {
				for (i=start ; i<arr.length ; i++) {
					if (i>start) {
						str += '|';
					}
					str += ((new String(arr[i])).replace(/\|/g,'_'));
				}
			}
			return str;
		};
		this.internal_hit = function(allowaddscript,vers,id,evid,et,hsrc,sonar,extra,refs,href) {
			var req = "";
			if (this.event_identifier==null && id) {
				this.event_identifier = id;
			}
			req += '&id='+id;
			if (typeof et != 'undefined') {
				req += '&et='+((et=='bfview')?'view':et);
			}
			if (typeof hsrc != 'undefined') {
				req += '&hsrc='+hsrc;
			}
			var not_gstream = (id && typeof id.indexOf == 'function' && id.indexOf('&sargencoding=') < 0);
			if (sonar && et == 'view' && not_gstream) {
				this.sonar_auto_init = 0;
				req += '&initsonar=1';
			}
			if (typeof extra != 'undefined' && typeof encodeURIComponent != 'undefined') {
				req += '&extra='+encodeURIComponent(extra.substring(0,1999));
			}
			req += '&eventid='+evid+this.parameters(href);
			refs = refs || this.ref_params();
			var robj = {req:req,id:id,allowaddscript:allowaddscript,vers:vers,explicit:this.explicit_consent,refs:refs};
			if (this.onpagehide && !this.bfview_disabled && (et == 'view' || et == 0) && not_gstream) {
				this.bfview_waiting = {vers: vers, id: id, evid: evid, hsrc: hsrc, extra: extra};
			}
			var requests = this.requests;
			if (this.has_consent === true) {
				requests.consent[requests.consent.length] = robj;
			} else if (this.has_consent === false) {
				requests.no_consent[requests.no_consent.length] = robj;
			} else {
				requests.unknown[requests.unknown.length] = robj;
			}
			this.latehits();
		};
		this.timer = function() {
			var i;
			var data = this.timer_data;
			data["lasttime"] = ((new Date()).getTime());
			for (i=0 ; i<this.timerevents.length ; i++) {
				this.internal_hit(0,103,this.timerevents[i],0,"sonar");
			}
			if (data["to"] != null) {
				clearTimeout(data["to"]);
				data["to"] = null;
			}
			if (data["tint"] == null) {
				data["tint"] = setInterval(this.bind(this.timer),60*1000);
			}
		};
		this.gtimer_add = function(id) {
			this.internal_hit(0,103,id,0,"sonar");
			this.timerevents[this.timerevents.length] = id;
		};
		this.sonar_add = function(identifier,evid,freq,extra) {
			if (this.sonar_data==null) {
				var data={};
				data["id"]=identifier;
				data["evid"]=evid;
				data["freq"]=freq;
				data["extra"]=extra;
				data["sint"]=null;
				data["lasttime"] = ((new Date()).getTime());
				data["sdur"] = 0;
				if (identifier && evid && freq>0) {
					data["sint"]=setInterval(this.bind(this.sonar), 1000);
				}
				this.sonar_data = data;
			}
		};
		this.sonar = function() {
			if (this.sonar_data!=null) {
				var data, prob, lvstate;
				lvstate=(this.visapi_s?document[this.visapi_s]:"");
				data=this.sonar_data;
				prob=(((new Date()).getTime()) - data["lasttime"])/1000;
				data["lasttime"]=((new Date()).getTime());
				while (prob>0) {
					if (data["sdur"]<24*3600 && prob<=4 && lvstate=="visible" && Math.random() < prob/data["freq"]) {
						this.internal_hit(0,109,data["id"],data["evid"],"smpsonar",0,0,"_ASF="+data["freq"]+(data["extra"]?("|"+data["extra"]):""));
					}
					data["sdur"] += Math.min(prob,data["freq"]);
					prob -= data["freq"];
				}
			}
		};
		this.gdprdata_loaded = function() {
			try {
				if (this.gdprdisabled) {
					this.consent_loaded(true,false);
					return;
				}
				var purposes = this.cmp_purposes()[this.gdprversion];
				if (typeof purposes == "undefined") {
					this.consent_loaded(false,false);
					return;
				}
				for (var i=0; i<purposes.length; ++i) {
					if (!this.gdprdata[purposes[i]-1]) {
						this.consent_loaded(false,false);
						return;
					}
				}
			} catch (e) {
				this.consent_loaded(false,false);
				return;
			}
			this.consent_loaded(true,false);
		};
		this.consent_loaded = function(consent,explicit) {
			if (this.timeouts.cmpto!=null) {
				if (this.timeouts.cmpto.to!=null) {
					clearTimeout(this.timeouts.cmpto.to);
				}
				this.timeouts.cmpto = null;
			}
			if (explicit || this.explicit_consent === null) {
				this.waiting_for_consent = 0;
				this.has_consent = consent?true:false;
				if (explicit) {
					this.explicit_consent = this.has_consent;
				}
				if (this.has_consent) {
					if (this.waiting_for_fpdata) {
						this.load_fpdata();
					}
					if (this.waiting_for_lsdata) {
						this.load_lsdata();
					}
				}
				this.paramsready();
				this.latehits();
			}
		};
		this.consentto = function() {
			if (this.waiting_for_consent==1) {
				this.timeouts.cmpto = null;
				this.waiting_for_consent = 0;
				this.has_consent = false;
				this.latehits();
			}
		};
		this.tfp_add_fix = function(robj) {
			if (robj.id in this.tfp.fixes) {
				return;
			}
			var is_frame = (this.ref.frametype==3);
			var fix = {
				fpdata: (this.is_gde && (this.waiting_for_fpdata==1))?1:0,
				tfpdata: (is_frame && this.tfp.fpdata=='')?1:0,
				ref: (is_frame && this.ref.topref==0)?1:0,
				refs: robj.refs
			}
			if (fix.fpdata || fix.tfpdata || fix.ref) {
				this.tfp.fixes[robj.id] = fix;
				this.tfp.need_fix = 1;
			}
		};
		this.tfp_timeout = function() {
			this.waiting_for_tfp = 0;
			this.latehits();
		};
		this.tfp_sync = function() {
			if (this.tfp.fpdata!='' && this.tfp.origin!='') {
				if (this.timeouts.tfpto!=null) {
					if (this.timeouts.tfpto.to!=null) {
						clearTimeout(this.timeouts.tfpto.to);
					}
					this.timeouts.tfpto = null;
				}
				this.tfp.need_sync = 0;
				this.waiting_for_tfp = 0;
				this.tfp_send_fixes(false);
				this.sync_gde_params();
			}
		};
		this.tfp_fix_url = function() {
			var url = (this.hssl?'https://':'http://')+this.hc+'/_';
			var d = new Date().getTime();
			url += d + "/redot.gif?fpdata=" + this.getrawfpdata();
			url += "&lsdata=" + this.lsdata;
			url += "&tfpdata=" + this.tfp.fpdata;
			url += "&roc=1&et=9&w=fpm";
			url += '&exid=' + this.exid + '&brts=' + Math.floor(d/1000);
			if (typeof encodeURIComponent != "undefined") {
				var href = new String(document.location.href);
				url += '&href=' + encodeURIComponent(href.substring(0,499));
			}
			return url;
		};
		this.tfp_send_fixes = function(unload) {
			if (!this.tfp.need_fix || !this.has_consent) {
				return;
			}
			var url = this.tfp_fix_url();
			var tfp = this.tfp;
			var has_fpdata = (this.waiting_for_fpdata==0);
			var has_tfpdata = (tfp.fpdata!='' && tfp.fpdata[0]!='-')?1:0;
			var has_ref = (tfp.origin!='')?1:0;
			this.tfp.need_fix = 0;
			for (var id in this.tfp.fixes) {
				var fix = this.tfp.fixes[id];
				var has_new_ref_fix = fix.ref && has_ref;
				var has_new_fix = ((fix.fpdata && has_fpdata) || (fix.tfpdata && has_tfpdata) || has_new_ref_fix);
				var has_missed_fix = ((fix.fpdata && !has_fpdata) || (fix.tfpdata && !has_tfpdata) || (fix.ref && !has_ref));
				if (has_new_fix && (unload || !has_missed_fix)) {
					var id_url = url + "&id=" + id;
					id_url += has_new_ref_fix ? this.ref_params(): fix.refs;
					if (typeof navigator.sendBeacon == "function") {
						navigator.sendBeacon(id_url);
					} else {
						var images_l = this.images.length;
						this.images[images_l] = new Image();
						this.images[images_l].src = id_url;
					}
					fix.fpdata &= !has_fpdata;
					fix.tfpdata &= !has_tfpdata;
					fix.ref &= !has_ref;
					if (!has_missed_fix) {
						delete this.tfp.fixes[id];
					}
				}
				if (id in this.tfp.fixes) {
					this.tfp.need_fix = 1;
				}
			}
		};
		this.set_tfp_origin = function(origin) {
			if (this.ref.frametype == 3) {
				this.ref.ref = origin;
				this.ref.topref = 1;
			}
			this.tfp.origin = origin;
		};
		this.has_tfp_answer = function() {
			return (this.ref.topref != 0) && (this.tfp.fpdata != "");
		};
		this.tfp_init = function() {
			if (window.self !== window.top && this.ref.frametype != 2) {
				try {
					var origins = document.location.ancestorOrigins;
					if (typeof origins != 'undefined') {
						this.set_tfp_origin(origins[origins.length-1]);
					}
				} catch(e) {};
				this.timeouts.tfpto = this.set_timeout(this.bind(this.tfp_timeout), 1000);
				this.waiting_for_tfp = 1;
				this.tfp.need_sync = 1;
				this.tfp.need_fix = 1;
				this.tfp_loop();
			}
		};
		this.tfp_pageshow = function() {
			if (this.timeouts.tfplto != null) {
				this.tfp.interval = 0.5;
				this.timeouts.tfplto.time = 0.5;
			}
		};
		this.tfp_loop = function() {
			if (this.tfp.need_sync) {
				if (this.tfp.origin=='') {
					window.top.postMessage("_xx_gemius_getref_xx_","*");
				}
				if (this.tfp.fpdata=='') {
					window.top.postMessage("_xx_gemius_gettfpdata_xx_/" + this.exid ,"*");
				}
				this.timeouts.tfplto = this.set_timeout(this.bind(this.tfp_loop), this.tfp.interval * 1000);
				if (this.tfp.interval < 8) {
					this.tfp.interval *= 2;
				}
				return;
			}
			this.timeouts.tfplto = null;
		};
		this.ghit = function(allowaddscript,vers,args,evid,hsrc,sonar) {
			if (args.length>0) {
				this.internal_hit(allowaddscript,vers,args[0],evid,"view",hsrc,sonar,this.array_to_string(args,1));
			}
		};
		this.gevent = function(allowaddscript,vers,args,evid,hsrc,sonar) {
			var pos = 0;
			var et = "view";
			if (args.length>1) {
				var m = (new String(args[0])).match('^_([a-zA-Z0-9]+)_$');
				if (m) {
					et = m[1];
					pos = 1;
				}
			}
			if (args.length>pos) {
				if (!args[pos] && this.event_identifier != null) {
					args[pos] = this.event_identifier;
				}
				if (args[pos]) {
					this.internal_hit(allowaddscript,vers,args[pos],evid,et,hsrc,sonar,this.array_to_string(args,pos+1));
				}
			}
		};
		this.addscripthit = function() { this.ghit(1,106,arguments,0,2,this.sonar_auto_init); };
		this.plainhit = function() { this.ghit(0,107,arguments,0,2,this.sonar_auto_init); };
		this.addscriptevent = function() { this.gevent(1,106,arguments,0,3,this.sonar_auto_init); };
		this.plainevent = function() { this.gevent(0,107,arguments,0,3,this.sonar_auto_init); };
		if (this.use_globals) {
			this.pendingdata = function(arr,fn) {
				var i;
				if (typeof window[arr] != 'undefined') {
					for (i=0 ; i<window[arr].length ; i++) {
						fn.apply(this,window[arr][i]);
					}
					window[arr]=[];
				}
			};
			this.sendpendingdata = function() {
				this.pendingdata('pp_gemius_hit_pdata',this.addscripthit);
				this.pendingdata('gemius_hit_pdata',this.plainhit);
				this.pendingdata('pp_gemius_event_pdata',this.addscriptevent);
				this.pendingdata('gemius_event_pdata',this.plainevent);
				this.pendingdata('gemius_shits',this.addscripthit);
				this.pendingdata('gemius_phits',this.plainhit);
				this.pendingdata('gemius_sevents',this.addscriptevent);
				this.pendingdata('gemius_pevents',this.plainevent);
				this.pendingdata('gemius_cmd_pdata',gemius_cmd);
			};
		}
		this.findvisapi = function() {
			var p = ['moz','webkit','ms','o'];
			var i;
			if (typeof document.hidden != 'undefined') {
				this.visapi_h = 'hidden';
				this.visapi_s = 'visibilityState';
				this.visapi_c = 'visibilitychange';
			} else {
				for (i in p) {
					if (typeof document[p[i]+'Hidden'] != 'undefined') {
						this.visapi_h = p[i]+'Hidden';
						this.visapi_s = p[i]+'VisibilityState';
						this.visapi_c = p[i]+'visibilitychange';
					}
				}
			}
		};
		this.chints_to_params = function(chints) {
// chints_params.js 
	var params = [];
	var skeys = {'architecture':'arch','platform':'pm','model':'model','platformVersion':'pver','bitness':'bits'};
	var bkeys = {'mobile':'mobile','wow64':'wow64'};
	for (var key in skeys) {
		if (key in chints) {
			var str = new String(chints[key]);
			if (str.length > 0) {
				params[params.length] = '_ch_'+skeys[key]+'='+str.substr(0,50);
			}
		}
	}
	for (var key in bkeys) {
		if (key in chints) {
			params[params.length] = '_ch_'+bkeys[key]+'='+(chints[key]?'1':'0');
		}
	}
	var brands = null;
	if (chints['fullVersionList'] instanceof Array) {
		brands = chints['fullVersionList'];
	} else if (chints['brands'] instanceof Array) {
		brands = chints['brands'];
	}
	if (brands && JSON && typeof JSON.stringify == 'function') {
		var str = JSON.stringify(brands);
		var re = new RegExp('^\\[|\\]$|"brand":|"version":', 'g');
		params[params.length] = '_ch_brands='+str.replace(re,'').substr(0,500);
	}
	return params;

		};
		this.chints_loaded = function(chints) {
			if (this.timeouts.chto != null) {
				this.timeouts.chto = null;
			}
			if (this.waiting_for_chints == 0) {
				return;
			}
			try {
				this.inner = this.inner.concat(this.chints_to_params(chints));
			} catch(e) {};
			this.waiting_for_chints = 0;
			this.latehits();
		};
		this.chints_failed = function() {
			if (this.timeouts.chto != null) {
				this.timeouts.chto = null;
			}
			this.waiting_for_chints = 0;
			this.latehits();
		};
		this.findchints = function() {
			if (typeof navigator.userAgentData == 'object' && typeof navigator.userAgentData.getHighEntropyValues == 'function') {
				try {
					var hints = ["architecture","model","platform","platformVersion","bitness","mobile","wow64","brands","fullVersionList"];
					navigator.userAgentData.getHighEntropyValues(hints).then(this.bind(this.chints_loaded),this.bind(this.chints_failed));
					this.timeouts.chto = this.set_timeout(this.bind(this.chints_failed),10000);
				} catch(e) {
					this.chints_failed();
				};
			} else {
				this.chints_failed();
			}
		};
		this.load_fpdata = function() {
			if (this.waiting_for_consent==0 && this.load_fpdata_started==0) {
				this.load_fpdata_started = 1;
				var domain = new String(document.location.hostname);
				var hcdomain = "hit.gemius.pl";
				if (domain == hcdomain || domain.substr(-hcdomain.length-1) == ("."+hcdomain)) {
					this.fpdata = '';
					this.fpcdomain = '';
					this.fpdata_loaded();
				} else {
					var url = (this.hssl?'https://':'http://')+this.hc+'/fpdata.js?href='+domain;
					url += this.is_gde?'&gde=1':'';
					this.timeouts.sto = this.set_timeout(this.bind(this.scriptto),10000);
					this.append_script(url,this.bind(this.fpdata_loaded),0);
				}
			}
		};
		this.load_lsdata = function() {
			if (this.waiting_for_consent==0 && this.load_lsdata_started==0) {
				this.load_lsdata_started = 1;
				if (this.ssl) {
					this.addframe(1,'get','',this.second_datareceiver);
				} else {
					this.addframe(0,'get','',this.first_datareceiver);
				}
			}
		};
		this.getchromever = function() {
			if (!!window.chrome && (typeof navigator.userAgent == 'string')) {
				var ver = navigator.userAgent.match(/(Chrom(e|ium)|CriOS)\/([0-9]+)\./);
				return (ver==null)?-1:parseInt(ver[3]);
			}
			return -1;
		};
		this.getanticache = function() {
			var dt = new Date();
			var v = new Date(dt.getFullYear(),dt.getMonth(),dt.getDate(),4).getTime()/(3600*1000);
			if (dt.getDay() != 0 || dt.getHours() >= 4) v += (7-dt.getDay())*24;
			return v;
		};
		this.gsconf_loaded = function() {
			if (typeof gemius_gsconf=="object" && gemius_gsconf!=null && gemius_gsconf.publishers && typeof this.src == 'string') {
				var url = new URL(this.src);
				url = url.origin + url.pathname.substr(0, url.pathname.lastIndexOf('/'));
				url += '/mgemius.js?gsver='+this.version+'&v='+this.getanticache();
				this.append_script(url,null,0);
			}
		};
		this.init_timeout = function() {
			if (this.timeouts.initto!=null) {
				this.timeouts.initto = null;
				this.init();
			}
		};
		this.gen_exid = function() {
			var refresh = !(this.exid == '');
			var ts = (new Date()).getTime();
			var exts = Math.floor(ts/1000).toString(16);
			var exrnd = Math.floor(Math.random()*1000000);
			var exuniqueid = ((ts%1000)*1000000 + exrnd).toString(16);
			this.exid = exts + Array(9-exuniqueid.length).join('0') + exuniqueid;
			if (refresh && this.is_gde) {
				this.sync_gde_params();
			}
		};
		this.add_gde_listener = function(callback) {
			this.gde_callbacks[this.gde_callbacks.length] = callback;
			try {
				callback(this.gde_params(), this.gde_params_ready);
			} catch (e) {}
		};
		this.gde_event = function(id) {
			if (this.has_consent && !this.gde_params_ready) {
				if (typeof id == 'string') {
					this.tfp_add_fix({"id":id, "refs":this.ref_params()});
				}
			}
		};
		this.gde_params = function() {
			var params = this.ref_params_obj();
			params.gde = 1;
			if (this.has_consent) {
				params.exid = this.exid;
				if (this.tfp.fpdata != '') {
					params.tfpdata = this.tfp.fpdata;
				}
				if (this.fpdata != '') {
					params.fpdata = this.getrawfpdata();
				}
				if (this.lsdata != '') {
					params.lsdata = this.lsdata;
				}
			}
			return params;
		};
		this.sync_gde_params = function() {
			this.gde_params_ready = (this.has_consent === false) || ((this.tfp.need_sync == 0) && (this.waiting_for_fpdata == 0) && (this.waiting_for_lsdata == 0));
			var params = this.gde_params();
			for (var i=0 ; i<this.gde_callbacks.length ; i++) {
				try {
					this.gde_callbacks[i](params, this.gde_params_ready);
				} catch (e) {}
			}
		};
		this.gde_init = function(params) {
			this.init(params);
		};
		this.init = function(params) {
			if (this.timeouts.initto!=null) {
				if (this.timeouts.initto.to!=null) {
					clearTimeout(this.timeouts.initto.to);
				}
				this.timeouts.initto = null;
			}
			if (this.init_called) {
				return;
			}
			this.init_called = 1;
			if (typeof params == 'object') {
				this.init_params(params);
			} else {
				params = {};
			}
			this.timer_data["lasttime"] = ((new Date()).getTime());
			this.timer_data["tint"] = setInterval(this.bind(this.timer),60*1000);
			if (this.dnt==0 && this.explicit_consent!==false) {
				this.getfpcookie();
				this.waiting_for_fpdata = ((this.fpdata.length>0 && this.fpdata[0]=='-') || this.fpdata=='')?1:0;
			} else {
				this.waiting_for_fpdata = 1;
				this.fpdata = "-DNT";
			}
			try {
				if (this.dnt==0 && this.explicit_consent!==false) {
					this.waiting_for_lsdata = (typeof window.postMessage != 'undefined' && typeof localStorage != 'undefined' && localStorage != null)?1:0;
					if (this.waiting_for_lsdata==0) {
						this.lsdata='-NOTSUP';
					}
				} else {
					this.waiting_for_lsdata = 1;
					this.lsdata = "-DNT";
				}
			} catch (e) {
				this.waiting_for_lsdata = 0;
				this.lsdata='-TURNEDOFF';
			}
			this.require_consent_info = 0;
			if (this.dnt==0 && this.explicit_consent!==false) {
				if (this.explicit_consent===null && this.use_cmp && (typeof gemius_cmpclient == "object") && gemius_cmpclient.find_cmp()) {
					this.cmp_found = 1;
					if (this.cmp_timeout==Infinity) {
						this.require_consent_info = 1;
					} else {
						this.timeouts.cmpto = this.set_timeout(this.bind(this.consentto),this.cmp_timeout);
					}
					gemius_cmpclient.get_consent(this.bind(this.consent_loaded),this.cmp_purposes());
				} else if (this.explicit_consent===null && this.gdpr_params() != '') {
					this.gdpr_found = 1;
					this.timeouts.cmpto = this.set_timeout(this.bind(this.consentto),10000);
					var url = (this.hssl?'https://':'http://')+this.hc+'/gdprdata.js' + this.gdpr_params(true);
					url += this.is_gde?'&gde=1':'';
					this.append_script(url,this.bind(this.gdprdata_loaded),0);
				} else {
					this.waiting_for_consent = 0;
					this.has_consent = true;
					if (this.waiting_for_fpdata) {
						this.load_fpdata();
					}
					if (this.waiting_for_lsdata) {
						this.load_lsdata();
					}
				}
			} else {
				this.waiting_for_consent = 0;
				this.has_consent = false;
				this.waiting_for_fpdata = 1;
				this.fpdata = "-DNT";
			}
			this.paramsready();
			this.latehits();
			this.add_event(document,"mousedown",this.bind(this.mousedown));
			if (this.use_globals) {
				gemius_hit = this.bind(this.plainhit);
				gemius_event = this.bind(this.plainevent);
				pp_gemius_hit = this.bind(this.addscripthit);
				pp_gemius_event = this.bind(this.addscriptevent);
				var p = params;
				if (typeof p['identifier'] == 'undefined' && typeof gemius_identifier == 'undefined' && typeof pp_gemius_identifier == 'undefined') {
					this.sonar_auto_init = (typeof p['sonar_auto_init_disabled'] == 'boolean')?(p['sonar_auto_init_disabled']?0:1):(typeof gemius_sonar_auto_init_disabled == 'boolean')?(gemius_sonar_auto_init_disabled?0:1):(typeof pp_gemius_sonar_auto_init_disabled == 'boolean')?(pp_gemius_sonar_auto_init_disabled?0:1):1;
				}
				try {
					if (typeof gemius_loaded != "undefined") {
						gemius_loaded();
					} else if (typeof pp_gemius_loaded != "undefined") {
						pp_gemius_loaded();
					}
				} catch (e) {}
				this.event_identifier = (typeof p['identifier'] != 'undefined')?p['identifier']:(typeof gemius_identifier != 'undefined')?gemius_identifier:(typeof pp_gemius_identifier != 'undefined')?pp_gemius_identifier:this.event_identifier;
				if (typeof gemius_init_pageview != "undefined") {
					for (var i=0 ; i<gemius_init_pageview.length ; i++) {
						gemius_init_pageview[i](params);
					}
				}
				this.sendpendingdata();
			}
			this.send_bfview();
		};
		this.start = function() {
			if (this.started) {
				return;
			}
			this.started = true;
			if (this.use_globals) {
				gemius_init = this.bind(this.init);
				pp_gemius_init = this.bind(this.init);
				gemius_close = this.bind(function() { this.closing = 1; });
			}
			this.getdntcookie();
			this.getfpcap();
			this.hssl = (this.ssl||this.getchromever()>=67)?1:0;
			this.flashv = this.getflashv();
			this.waiting_on_prerender = 0;
			this.findchints();
			this.findvisapi();
			if (this.visapi_s != '') {
				if (document[this.visapi_s] == 'prerender') {
					this.waiting_on_prerender = 1;
				}
				this.add_event(document,this.visapi_c,this.bind(this.visibilitychanged));
			}
			this.gen_exid();
			if ('onpagehide' in window) {
				this.onpagehide = true;
				this.add_event(window,"pagehide",this.bind(this.pagehide));
				this.add_event(window,"pageshow",this.bind(this.pageshow));
			} else {
				this.add_event(window,"unload",this.bind(this.unload, true));
				this.add_event(window,"beforeunload",this.bind(this.unload, true));
			}
			this.add_event(window,'message',this.bind(this.msgreceiver));
			this.frametype_init();
			this.ref_update();
			this.tfp_init();
			if (this.use_globals) {
				this.pendingdata('gemius_init_pdata',this.init);
				this.pendingdata('pp_gemius_init_pdata',this.init);
				if (!this.init_called) {
					var timeout = (typeof gemius_init_timeout == 'number')?gemius_init_timeout:(typeof pp_gemius_init_timeout == 'number')?pp_gemius_init_timeout:null;
					if (typeof timeout == 'number') {
						if (timeout == Infinity) {
							this.require_consent_info = 1;
						} else {
							this.timeouts.initto = this.set_timeout(this.bind(this.init_timeout),timeout);
						}
					} else {
						gemius_init();
					}
				}
			} else {
				this.require_consent_info = 1;
			}
		};
	}
	/** @define {number} */
	GemiusHitcolConnector.min = 0;
}


(function(name, cmds,flag) {
	var exists = name in window;
	if (!exists) {
		window[name] = new GemiusHitcolConnector(flag);
	}
// gcmd.js 
function define_gemius_cmd(conn_name, cmds) {
	var conn = window[conn_name];
	if (typeof gemius_cmd == 'undefined' || !('_' in gemius_cmd)) {
		gemius_cmd = function() {
			if (!arguments.length || typeof arguments[0] != 'string') {
				return;
			}
			var cmd = arguments[0];
			if (cmd in gemius_cmd) {
				var args = [];
				for (var i = 1; i < arguments.length; ++i) {
					args[args.length] = arguments[i];
				}
				return gemius_cmd[cmd].apply({}, args);
			}
		}
		gemius_cmd._ = 1;
	}
	for (var cmd in cmds) {
		gemius_cmd[cmd] = conn.bind(conn[cmds[cmd]]);
	}
	if (typeof pp_gemius_cmd == 'undefined' || !('_' in pp_gemius_cmd)) {
		pp_gemius_cmd = gemius_cmd;
	}
}
	define_gemius_cmd(name,cmds);
	if (!exists) {
		window[name].start();
	}
})('gemius_hcconn', {'referrer_override':'referrer_override'});
IP":[7,8,10,2,9],"active":true,"legInt":false,"consent":true,"disabledSF":[7,8,10,2,9]},"1025":{"active":false,"legInt":true,"consent":true},"1026":{"active":false,"legInt":false,"consent":true},"1027":{"active":false,"legInt":false,"consent":true},"1028":{"active":false,"legInt":true,"consent":true},"1029":{"active":false,"legInt":false,"consent":true},"1030":{"active":false,"legInt":false,"consent":true},"1031":{"active":false,"legInt":false,"consent":true},"8":{"disabledLIP":[7,8,2,9],"active":true,"legInt":false,"consent":true,"disabledSF":[2,9]},"1032":{"active":false,"legInt":false,"consent":true},"1033":{"active":false,"legInt":false,"consent":true},"10":{"disabledLIP":[7,2],"active":true,"legInt":true,"consent":true,"disabledSF":[7,2]},"1034":{"active":false,"legInt":false,"consent":false},"11":{"disabledLIP":[7,8,10,2,9],"active":true,"legInt":false,"consent":true,"disabledSF":[7,8,10,2,9]},"1035":{"active":false,"legInt":false,"consent":true},"1036":{"active":false,"legInt":true,"consent":true},"1037":{"active":false,"legInt":false,"consent":true},"14":{"disabledLIP":[7,2],"active":true,"legInt":false,"consent":true},"1038":{"disabledLIP":[7,8,10,2,9],"active":true,"legInt":false,"consent":true,"disabledSF":[7,8,10,2,9]},"15":{"disabledLIP":[7,8],"active":true,"legInt":false,"consent":true},"1039":{"active":false,"legInt":true,"consent":true},"1040":{"active":false,"legInt":false,"consent":true},"1041":{"active":false,"legInt":true,"consent":false},"1042":{"active":false,"legInt":false,"consent":false},"1043":{"active":false,"legInt":true,"consent":true},"20":{"disabledLIP":[7,8,10,2,9],"active":true,"legInt":false,"consent":true,"disabledSF":[7,8,10,2,9]},"1044":{"active":false,"legInt":false,"consent":false},"21":{"disabledLIP":[7,10,2],"active":true,"legInt":false,"consent":true,"disabledSF":[7,10,2]},"1045":{"active":false,"legInt":false,"consent":true},"1046":{"active":false,"legInt":false,"consent":true},"23":{"disabledLIP":[7,10,9],"active":true,"legInt":false,"consent":true},"1047":{"active":false,"legInt":false,"consent":true},"1048":{"active":false,"legInt":true,"consent":true},"1049":{"active":false,"legInt":false,"consent":true},"1050":{"active":false,"legInt":false,"consent":true},"27":{"disabledLIP":[7,2],"active":true,"legInt":false,"consent":true,"disabledSF":[7,2]},"1051":{"active":false,"legInt":true,"consent":true},"28":{"disabledLIP":[7,10,2,9],"active":true,"legInt":false,"consent":true,"disabledSF":[7,10,2,9]},"1052":{"active":false,"legInt":false,"consent":false},"29":{"active":false,"legInt":false,"consent":true},"1053":{"active":false,"legInt":false,"consent":false},"30":{"disabledLIP":[7,2],"active":true,"legInt":false,"consent":true,"disabledSF":[7,2]},"1054":{"active":false,"legInt":false,"consent":false},"1055":{"active":false,"legInt":false,"consent":true},"32":{"disabledLIP":[7,10,2],"active":true,"legInt":false,"consent":true,"disabledSF":[7,10,2]},"1056":{"active":false,"legInt":false,"consent":false},"1057":{"active":false,"legInt":true,"consent":true},"34":{"disabledLIP":[11,7,8,10,2,9],"active":true,"legInt":false,"consent":true,"disabledSF":[11,7,8,10,2,9]},"1058":{"active":false,"legInt":false,"consent":true},"1059":{"active":false,"legInt":false,"consent":true},"36":{"disabledLIP":[7,10,2],"active":true,"legInt":false,"consent":true},"1060":{"active":false,"legInt":false,"consent":true},"1061":{"active":false,"legInt":false,"consent":true},"1062":{"active":false,"legInt":false,"consent":true},"39":{"disabledLIP":[7,10,2,9],"active":true,"legInt":false,"consent":true,"disabledSF":[7,10,2,9]},"1063":{"active":false,"legInt":false,"consent":false},"40":{"disabledLIP":[7,10,2,9],"active":true,"legInt":false,"consent":true,"disabledSF":[7,10,2,9]},"1064":{"active":false,"legInt":true,"consent":true},"1065":{"active":false,"legInt":false,"consent":false},"42":{"disabledLIP":[11,7,8,10,2],"active":true,"legInt":false,"consent":true,"disabledSF":[11,7,8,10,2]},"1066":{"active":false,"legInt":false,"consent":false},"1067":{"active":false,"legInt":true,"consent":true},"1068":{"active":false,"legInt":false,"consent":true},"1069":{"active":false,"legInt":true,"consent":true},"46":{"disabledLIP":[10,7,8],"active":true,"legInt":false,"consent":true,"disabledSF":[7,8]},"1070":{"active":false,"legInt":true,"consent":true},"47":{"disabledLIP":[7,2],"active":true,"legInt":false,"consent":true,"disabledSF":[7,2]},"1071":{"active":false,"legInt":false,"consent":false},"48":{"disabledLIP":[7,10,2,9],"active":true,"legInt":false,"consent":true,"disabledSF":[7,10,2,9]},"1072":{"active":false,"legInt":false,"consent":true},"49":{"disabledLIP":[7,8,10,9],"active":true,"legInt":false,"consent":true,"disabledSF":[7,8,10,9]},"1073":{"active":false,"legInt":false,"consent":false},"50":{"disabledLIP":[7,10,2],"disabledCP":[10],"active":true,"legInt":false,"consent":true,"disabledSF":[7,10,2]},"1074":{"active":false,"legInt":false,"consent":false},"1075":{"active":false,"legInt":true,"consent":false},"52":{"disabledLIP":[7,10,2],"active":true,"legInt":false,"consent":true,"disabledSF":[7,10,2]},"1076":{"active":false,"legInt":false,"consent":true},"53":{"disabledLIP":[7,8,10,2],"disabledCP":[11],"active":true,"legInt":true,"consent":true,"disabledSF":[11,7,8,10,2]},"1077":{"active":false,"legInt":false,"consent":false},"1078":{"active":false,"legInt":false,"consent":true},"55":{"active":false,"legInt":false,"consent":true},"1079":{"active":false,"legInt":false,"consent":true},"56":{"active":false,"legInt":false,"consent":false},"1080":{"active":false,"legInt":false,"consent":true},"1081":{"active":false,"legInt":true,"consent":true},"1082":{"active":false,"legInt":true,"consent":true},"59":{"disabledLIP":[2],"active":true,"legInt":false,"consent":true,"disabledSF":[2]},"1083":{"active":false,"legInt":false,"consent":true},"60":{"disabledLIP":[7,10,2,9],"active":true,"legInt":false,"consent":true,"disabledSF":[7,10,2,9]},"1084":{"active":false,"legInt":true,"consent":true},"61":{"disabledLIP":[7,2],"active":true,"legInt":false,"consent":true,"disabledSF":[7,2]},"1085":{"active":false,"legInt":true,"consent":true},"1086":{"active":false,"legInt":false,"consent":false},"63":{"disabledLIP":[7],"active":true,"legInt":false,"consent":false},"1087":{"active":false,"legInt":true,"consent":true},"1088":{"active":false,"legInt":false,"consent":false},"1089":{"active":false,"legInt":false,"consent":true},"66":{"disabledLIP":[11,7,8,10,2,9],"active":true,"legInt":false,"consent":true,"disabledSF":[11,7,8,10,2,9]},"1090":{"active":false,"legInt":false,"consent":true},"1091":{"active":false,"legInt":false,"consent":true},"68":{"disabledLIP":[7,10,2,9],"active":true,"legInt":false,"consent":true,"disabledSF":[7,10,2,9]},"1092":{"active":false,"legInt":false,"consent":false},"69":{"disabledLIP":[7,10,2],"active":true,"legInt":false,"consent":true,"disabledSF":[7,10,2]},"1093":{"active":false,"legInt":false,"consent":false},"1094":{"active":false,"legInt":false,"consent":true},"71":{"disabledLIP":[7,10,2,9],"active":true,"legInt":false,"consent":true},"1095":{"active":false,"legInt":false,"consent":false},"1096":{"active":false,"legInt":false,"consent":false},"1097":{"active":false,"legInt":false,"consent":true},"75":{"active":false,"legInt":false,"consent":true},"1099":{"active":false,"legInt":false,"consent":false},"76":{"disabledLIP":[7,8,10,2,9],"active":true,"legInt":false,"consent":true,"disabledSF":[7,8,10,2,9]},"1100":{"active":false,"legInt":false,"consent":true},"1101":{"active":false,"legInt":false,"consent":true},"78":{"disabledLIP":[7],"active":true,"legInt":false,"consent":true,"disabledSF":[7]},"1102":{"active":false,"legInt":false,"consent":false},"1103":{"active":false,"legInt":false,"consent":true},"80":{"disabledLIP":[7],"active":true,"legInt":false,"consent":true},"4176":{"active":false,"legInt":false,"consent":false},"1104":{"active":false,"legInt":false,"consent":true},"1105":{"active":false,"legInt":false,"consent":true},"81":{"active":false,"legInt":false,"consent":true},"1106":{"active":false,"legInt":false,"consent":true},"82":{"active":false,"legInt":true,"consent":true},"83":{"disabledLIP":[8],"active":true,"legInt":false,"consent":true,"disabledSF":[8]},"1107":{"active":false,"legInt":true,"consent":true},"1108":{"active":false,"legInt":false,"consent":true},"85":{"disabledLIP":[7,8,10,2,9],"active":true,"legInt":false,"consent":true,"disabledSF":[7,8,10,2,9]},"1109":{"active":false,"legInt":false,"consent":false},"1110":{"active":false,"legInt":false,"consent":true},"1112":{"active":false,"legInt":false,"consent":true},"1113":{"active":false,"legInt":false,"consent":true},"1114":{"active":false,"legInt":false,"consent":false},"1115":{"active":false,"legInt":false,"consent":false},"92":{"disabledLIP":[7,8,9],"active":true,"legInt":false,"consent":true,"disabledSF":[7,8,9]},"1116":{"active":false,"legInt":false,"consent":true},"93":{"disabledLIP":[7],"active":true,"legInt":false,"consent":true,"disabledSF":[7]},"1117":{"active":false,"legInt":false,"consent":false},"94":{"disabledLIP":[2],"active":true,"legInt":false,"consent":true,"disabledSF":[2]},"1118":{"active":false,"legInt":false,"consent":false},"1119":{"active":false,"legInt":false,"consent":true},"1120":{"active":false,"legInt":true,"consent":true},"1121":{"active":false,"legInt":false,"consent":false},"98":{"disabledLIP":[7,8,10,9],"active":true,"legInt":false,"consent":true,"disabledSF":[7,8,10,9]},"1122":{"active":false,"legInt":false,"consent":true},"1123":{"active":false,"legInt":false,"consent":false},"1124":{"active":false,"legInt":false,"consent":true},"1125":{"active":false,"legInt":false,"consent":false},"102":{"disabledLIP":[7,10,2],"active":true,"legInt":false,"consent":true,"disabledSF":[7,10,2]},"1126":{"active":false,"legInt":false,"consent":true},"1127":{"active":false,"legInt":false,"consent":true},"104":{"disabledLIP":[7,8],"active":true,"legInt":false,"consent":true},"1128":{"active":false,"legInt":false,"consent":false},"1129":{"active":false,"legInt":true,"consent":false},"1130":{"active":false,"legInt":false,"consent":true},"1131":{"active":false,"legInt":true,"consent":true},"1132":{"active":false,"legInt":false,"consent":true},"1133":{"active":false,"legInt":false,"consent":true},"1134":{"active":false,"legInt":false,"consent":true},"111":{"disabledLIP":[7,8,2],"active":true,"legInt":false,"consent":true,"disabledSF":[7,8,2]},"1135":{"active":false,"legInt":true,"consent":true},"1136":{"active":false,"legInt":false,"consent":true},"1137":{"active":false,"legInt":true,"consent":true},"1138":{"active":false,"legInt":false,"consent":true},"115":{"disabledLIP":[7,10,2],"active":true,"legInt":false,"consent":true,"disabledSF":[7,10,2]},"1139":{"active":false,"legInt":false,"consent":true},"1140":{"active":false,"legInt":true,"consent":false},"1141":{"active":false,"legInt":false,"consent":true},"1142":{"active":false,"legInt":true,"consent":false},"119":{"disabledLIP":[7,8,10,9],"active":true,"legInt":false,"consent":true,"disabledSF":[7,8,10,9]},"1143":{"active":false,"legInt":false,"consent":false},"1144":{"active":false,"legInt":false,"consent":true},"1145":{"active":false,"legInt":false,"consent":false},"122":{"disabledLIP":[7,8,2],"active":true,"legInt":false,"consent":true,"disabledSF":[7,8,2]},"1146":{"active":false,"legInt":false,"consent":true},"1147":{"active":false,"legInt":true,"consent":true},"1148":{"active":false,"legInt":false,"consent":true},"1149":{"active":false,"legInt":true,"consent":false},"126":{"disabledLIP":[7,10,2],"active":true,"legInt":false,"consent":true,"disabledSF":[7,10,2]},"1150":{"active":false,"legInt":false,"consent":false},"1151":{"active":false,"legInt":true,"consent":true},"1152":{"active":false,"legInt":false,"consent":false},"1153":{"active":false,"legInt":false,"consent":true},"1154":{"active":false,"legInt":false,"consent":true},"1155":{"active":false,"legInt":false,"consent":true},"132":{"disabledLIP":[2],"active":true,"legInt":false,"consent":true,"disabledSF":[2]},"1156":{"active":false,"legInt":true,"consent":true},"1157":{"active":false,"legInt":false,"consent":true},"134":{"disabledLIP":[7,10,2,9],"active":true,"legInt":false,"consent":true,"disabledSF":[7,10,2,9]},"1158":{"active":false,"legInt":false,"consent":false},"1159":{"active":false,"legInt":false,"consent":true},"136":{"disabledLIP":[7,10,2,9],"active":true,"legInt":false,"consent":true,"disabledSF":[7,10,2,9]},"1160":{"active":false,"legInt":false,"consent":false},"137":{"disabledLIP":[7,10,2,9],"active":true,"legInt":false,"consent":true,"disabledSF":[7,10,2,9]},"1161":{"active":false,"legInt":false,"consent":true},"138":{"disabledLIP":[7,10,2],"active":true,"legInt":false,"consent":true,"disabledSF":[7,10,2]},"1162":{"active":false,"legInt":true,"consent":true},"1163":{"active":false,"legInt":false,"consent":true},"1164":{"active":false,"legInt":false,"consent":true},"1165":{"active":false,"legInt":true,"consent":true},"142":{"disabledLIP":[7,10,8,2,9],"disabledCP":[11],"active":true,"legInt":true,"consent":true,"disabledSF":[11,8,2,9]},"1166":{"active":false,"legInt":false,"consent":false},"1167":{"active":false,"legInt":false,"consent":true},"1168":{"active":false,"legInt":true,"consent":true},"1169":{"active":false,"legInt":true,"consent":false},"1170":{"active":false,"legInt":true,"consent":false},"147":{"disabledLIP":[7,8,10,9],"active":true,"legInt":false,"consent":true,"disabledSF":[7,8,10,9]},"1171":{"active":false,"legInt":false,"consent":false},"1172":{"active":false,"legInt":false,"consent":false},"149":{"disabledLIP":[2],"active":true,"legInt":false,"consent":true,"disabledSF":[2]},"1173":{"active":false,"legInt":false,"consent":false},"150":{"disabledLIP":[7,2],"active":true,"legInt":false,"consent":true,"disabledSF":[7,2]},"1174":{"active":false,"legInt":false,"consent":true},"1175":{"active":false,"legInt":false,"consent":true},"1176":{"active":false,"legInt":true,"consent":true},"1177":{"active":false,"legInt":true,"consent":true},"154":{"disabledLIP":[7,2],"active":true,"legInt":false,"consent":true,"disabledSF":[7,2]},"1178":{"active":false,"legInt":false,"consent":true},"1179":{"active":false,"legInt":false,"consent":true},"1180":{"active":false,"legInt":false,"consent":false},"156":{"active":false,"legInt":true,"consent":true},"1181":{"active":false,"legInt":false,"consent":true},"1182":{"active":false,"legInt":false,"consent":false},"1183":{"active":false,"legInt":false,"consent":true},"1184":{"active":false,"legInt":false,"consent":true},"1185":{"active":false,"legInt":false,"consent":true},"163":{"disabledLIP":[7,10,9],"active":true,"legInt":false,"consent":true,"disabledSF":[7,10,9]},"1188":{"active":false,"legInt":false,"consent":true},"1189":{"active":false,"legInt":false,"consent":true},"1190":{"active":false,"legInt":false,"consent":true},"1191":{"active":false,"legInt":false,"consent":true},"1192":{"active":false,"legInt":true,"consent":true},"1193":{"active":false,"legInt":true,"consent":true},"1194":{"active":false,"legInt":false,"consent":false},"1195":{"active":false,"legInt":false,"consent":true},"1196":{"active":false,"legInt":false,"consent":true},"173":{"disabledLIP":[7,10,2,9],"active":true,"legInt":false,"consent":true,"disabledSF":[7,10,2,9]},"1197":{"active":false,"legInt":false,"consent":false},"174":{"disabledLIP":[7,2],"active":true,"legInt":false,"consent":true,"disabledSF":[7,2]},"1198":{"active":false,"legInt":false,"consent":true},"1199":{"active":false,"legInt":false,"consent":true},"1200":{"active":false,"legInt":true,"consent":true},"1201":{"active":false,"legInt":false,"consent":true},"1202":{"active":false,"legInt":false,"consent":true},"1203":{"active":false,"legInt":true,"consent":false},"1204":{"active":false,"legInt":false,"consent":false},"1205":{"active":false,"legInt":false,"consent":true},"1206":{"active":false,"legInt":false,"consent":true},"1207":{"active":false,"legInt":true,"consent":true},"1208":{"active":false,"legInt":true,"consent":false},"1209":{"active":false,"legInt":false,"consent":true},"1210":{"active":false,"legInt":true,"consent":true},"1211":{"active":false,"legInt":true,"consent":true},"1212":{"active":false,"legInt":false,"consent":true},"1213":{"active":false,"legInt":false,"consent":true},"1214":{"active":false,"legInt":true,"consent":true},"1215":{"active":false,"legInt":false,"consent":true},"192":{"disabledLIP":[7,8,10,2,9],"disabledCP":[11],"active":true,"legInt":true,"consent":true,"disabledSF":[11,7,8,10,2,9]},"1216":{"active":false,"legInt":true,"consent":true},"1217":{"active":false,"legInt":true,"consent":false},"194":{"disabledLIP":[2],"active":true,"legInt":false,"consent":true,"disabledSF":[2]},"1218":{"active":false,"legInt":false,"consent":true},"195":{"disabledLIP":[7,2],"active":true,"legInt":false,"consent":true,"disabledSF":[7,2]},"1219":{"active":false,"legInt":true,"consent":false},"196":{"disabledLIP":[7,10,2,9],"active":true,"legInt":false,"consent":true,"disabledSF":[7,10,2,9]},"1220":{"active":false,"legInt":false,"consent":true},"1221":{"active":false,"legInt":true,"consent":true},"1222":{"active":false,"legInt":false,"consent":true},"1223":{"active":false,"legInt":false,"consent":false},"1224":{"active":false,"legInt":false,"consent":true},"1225":{"active":false,"legInt":false,"consent":false},"202":{"disabledLIP":[7,10,2],"active":true,"legInt":false,"consent":true,"disabledSF":[7,10,2]},"1226":{"active":false,"legInt":false,"consent":true},"203":{"disabledLIP":[2],"active":true,"legInt":true,"consent":true,"disabledSF":[2]},"1227":{"active":false,"legInt":false,"consent":false},"1228":{"active":false,"legInt":true,"consent":false},"205":{"disabledLIP":[7],"active":true,"legInt":false,"consent":false},"1229":{"active":false,"legInt":true,"consent":true},"206":{"disabledLIP":[2],"active":true,"legInt":false,"consent":true,"disabledSF":[2]},"1230":{"active":false,"legInt":true,"consent":true},"1231":{"active":false,"legInt":false,"consent":true},"1232":{"active":false,"legInt":false,"consent":true},"208":{"active":false,"legInt":false,"consent":false},"209":{"disabledLIP":[7,10,2],"active":true,"legInt":false,"consent":true,"disabledSF":[7,10,2]},"1233":{"active":false,"legInt":false,"consent":true},"1234":{"active":false,"legInt":false,"consent":false},"1235":{"active":false,"legInt":false,"consent":true},"1236":{"active":false,"legInt":true,"consent":true},"1237":{"active":false,"legInt":false,"consent":true},"217":{"disabledLIP":[7,10,2,9],"active":true,"legInt":false,"consent":true,"disabledSF":[7,10,2,9]},"224":{"disabledLIP":[11,7,8,10,2,9],"active":true,"legInt":false,"consent":true,"disabledSF":[11,7,8,10,2,9]},"227":{"disabledLIP":[7,10,2,9],"active":true,"legInt":false,"consent":true,"disabledSF":[7,10,2,9]},"228":{"disabledLIP":[7,8,10],"active":true,"legInt":false,"consent":true},"230":{"active":false,"legInt":false,"consent":false},"231":{"disabledLIP":[7,8,10,2],"active":true,"legInt":false,"consent":true,"disabledSF":[7,8,10,2]},"232":{"active":false,"legInt":false,"consent":false},"235":{"disabledLIP":[7,2,9],"active":true,"legInt":false,"consent":true,"disabledSF":[7,2,9]},"238":{"disabledLIP":[10,9,7,8,2],"disabledCP":[11],"active":true,"legInt":true,"consent":true,"disabledSF":[11,7,8,2]},"239":{"disabledLIP":[7,8,10,2,9],"active":true,"legInt":false,"consent":true,"disabledSF":[7,8,10,2,9]},"241":{"disabledLIP":[7,2],"active":true,"legInt":false,"consent":true,"disabledSF":[7,2]},"246":{"disabledLIP":[7,2],"active":true,"legInt":false,"consent":true,"disabledSF":[7,2]},"248":{"disabledLIP":[2],"active":true,"legInt":false,"consent":true,"disabledSF":[2]},"251":{"disabledLIP":[10,7,2],"active":true,"legInt":false,"consent":true,"disabledSF":[7,2]},"252":{"disabledLIP":[7,10,2,9],"active":true,"legInt":false,"consent":true,"disabledSF":[7,10,2,9]},"253":{"disabledLIP":[7,10,2],"active":true,"legInt":false,"consent":true,"disabledSF":[7,10,2]},"255":{"disabledLIP":[7,8,2],"active":true,"legInt":false,"consent":true,"disabledSF":[7,8,2]},"256":{"disabledLIP":[7,10,9,2],"active":true,"legInt":false,"consent":true,"disabledSF":[2]},"263":{"disabledLIP":[7,10,2,9],"active":true,"legInt":false,"consent":true},"264":{"disabledLIP":[7,2],"active":true,"legInt":false,"consent":true,"disabledSF":[2]},"273":{"disabledLIP":[7],"active":true,"legInt":false,"consent":true},"276":{"disabledLIP":[7,8,2],"active":true,"legInt":false,"consent":true,"disabledSF":[7,8,2]},"278":{"disabledLIP":[7,10],"active":true,"legInt":false,"consent":true,"disabledSF":[7,10]},"279":{"disabledLIP":[7,2],"active":true,"legInt":false,"consent":true,"disabledSF":[7,2]},"280":{"disabledLIP":[7,10,2],"active":true,"legInt":false,"consent":true,"disabledSF":[7,10,2]},"281":{"disabledLIP":[7,8,9],"active":true,"legInt":false,"consent":true,"disabledSF":[7,8,9]},"282":{"disabledLIP":[2],"active":true,"legInt":false,"consent":true,"disabledSF":[2]},"284":{"disabledLIP":[7,8,2,9],"active":true,"legInt":true,"consent":true},"285":{"disabledLIP":[7,10,2],"active":true,"legInt":false,"consent":true,"disabledSF":[7,10,2]},"290":{"disabledLIP":[7,10],"active":true,"legInt":true,"consent":true,"disabledSF":[7,10,2]},"293":{"disabledLIP":[7,10,2],"active":true,"legInt":false,"consent":true,"disabledSF":[7,10,2]},"294":{"disabledLIP":[7,2],"active":true,"legInt":false,"consent":true,"disabledSF":[7,2]},"297":{"disabledLIP":[7,8,10,2],"active":true,"legInt":false,"consent":true,"disabledSF":[7,8,10,2]},"308":{"disabledLIP":[7,2],"active":true,"legInt":false,"consent":false},"314":{"disabledLIP":[7,10,2,9],"active":true,"legInt":false,"consent":true,"disabledSF":[7,10,2,9]},"315":{"active":false,"legInt":true,"consent":true},"319":{"disabledLIP":[7,2],"active":true,"legInt":false,"consent":true,"disabledSF":[7,2]},"321":{"disabledLIP":[7,8,10,2],"active":true,"legInt":false,"consent":true,"disabledSF":[7,8,10,2]},"326":{"active":false,"legInt":false,"consent":true},"336":{"disabledLIP":[7,9,2],"active":true,"legInt":false,"consent":true,"disabledSF":[2]},"337":{"disabledLIP":[7,8,10,2,9],"active":true,"legInt":false,"consent":true,"disabledSF":[7,8,10,2,9]},"343":{"disabledLIP":[7,8,10,2,9],"active":true,"legInt":false,"consent":true,"disabledSF":[7,8,10,2,9]},"350":{"disabledLIP":[7,8,10,2,9],"active":true,"legInt":false,"consent":true,"disabledSF":[7,8,10,2,9]},"351":{"disabledLIP":[7,8,10,2,9],"active":true,"legInt":false,"consent":true,"disabledSF":[7,8,10,2,9]},"354":{"disabledLIP":[8,10,7],"active":true,"legInt":false,"consent":true,"disabledSF":[7]},"371":{"disabledLIP":[7,8,10,2,9],"active":true,"legInt":false,"consent":true,"disabledSF":[7,8,10,2,9]},"373":{"disabledLIP":[10],"active":true,"legInt":false,"consent":true},"377":{"disabledLIP":[7,10],"active":true,"legInt":false,"consent":true,"disabledSF":[7,10]},"378":{"disabledLIP":[7,2],"disabledCP":[11],"active":true,"legInt":true,"consent":true,"disabledSF":[11,7,2]},"381":{"disabledLIP":[8,2],"active":true,"legInt":false,"consent":true},"382":{"disabledLIP":[11,7,8,10,2,9],"active":true,"legInt":false,"consent":true,"disabledSF":[11,7,8,10,2,9]},"384":{"disabledLIP":[10],"active":true,"legInt":false,"consent":true,"disabledSF":[10]},"394":{"disabledLIP":[7,8,10,2,9],"active":true,"legInt":false,"consent":true,"disabledSF":[7,8,10,2,9]},"402":{"disabledLIP":[7],"active":true,"legInt":false,"consent":true,"disabledSF":[7]},"404":{"active":false,"legInt":false,"consent":false},"409":{"active":false,"legInt":false,"consent":false},"412":{"disabledLIP":[11,8,9],"active":true,"legInt":false,"consent":true,"disabledSF":[11,8,9]},"418":{"disabledLIP":[2],"active":true,"legInt":false,"consent":true,"disabledSF":[2]},"430":{"active":false,"legInt":false,"consent":true},"431":{"disabledLIP":[10],"active":true,"legInt":false,"consent":false},"436":{"disabledLIP":[7,8,10,2],"active":true,"legInt":true,"consent":true,"disabledSF":[7,8,10,2]},"438":{"disabledLIP":[7,10,2,9],"active":true,"legInt":false,"consent":true,"disabledSF":[7,10,2,9]},"440":{"disabledLIP":[7,10,2],"active":true,"legInt":false,"consent":true,"disabledSF":[7,10,2]},"444":{"active":false,"legInt":false,"consent":true},"448":{"disabledLIP":[7,2,9],"active":true,"legInt":false,"consent":true,"disabledSF":[7,2,9]},"452":{"disabledLIP":[7,2],"active":true,"legInt":false,"consent":true,"disabledSF":[7,2]},"454":{"active":false,"legInt":false,"consent":true},"455":{"disabledLIP":[7,10,2],"active":true,"legInt":false,"consent":true,"disabledSF":[10,2]},"461":{"disabledLIP":[7,10,2,9],"active":true,"legInt":false,"consent":true,"disabledSF":[7,10,2,9]},"466":{"disabledLIP":[7],"active":true,"legInt":false,"consent":false},"468":{"disabledLIP":[7,8,10,9],"active":true,"legInt":false,"consent":true,"disabledSF":[7,8,10,9]},"471":{"disabledLIP":[7,8,2],"active":true,"legInt":false,"consent":true,"disabledSF":[7,8,2]},"473":{"disabledLIP":[7,10,2],"active":true,"legInt":false,"consent":true,"disabledSF":[7,10,2]},"475":{"disabledLIP":[10],"active":true,"legInt":false,"consent":true},"486":{"disabledLIP":[7],"active":true,"legInt":false,"consent":true,"disabledSF":[7]},"490":{"disabledLIP":[7,10,2],"active":true,"legInt":false,"consent":true,"disabledSF":[7,10,2]},"493":{"disabledLIP":[7,8,10,2],"active":true,"legInt":false,"consent":true,"disabledSF":[7,8,10,2]},"497":{"active":false,"legInt":false,"consent":true},"502":{"disabledLIP":[7,10],"disabledCP":[11],"active":true,"legInt":true,"consent":true,"disabledSF":[11,7,10]},"507":{"disabledLIP":[7,8,10,2,9],"active":true,"legInt":false,"consent":true,"disabledSF":[7,8,10,2,9]},"508":{"disabledLIP":[7,8,9],"active":true,"legInt":false,"consent":true,"disabledSF":[7,8,9]},"509":{"disabledLIP":[7,2],"active":true,"legInt":false,"consent":true,"disabledSF":[7,2]},"511":{"disabledLIP":[10],"active":true,"legInt":false,"consent":true},"530":{"disabledLIP":[7,8,10,2,9],"active":true,"legInt":false,"consent":true,"disabledSF":[7,8,10,2,9]},"534":{"active":false,"legInt":false,"consent":true},"550":{"disabledLIP":[10,9],"active":true,"legInt":false,"consent":true,"disabledSF":[10,9]},"559":{"disabledLIP":[7,10,9],"active":true,"legInt":false,"consent":true,"disabledSF":[7,10,9]},"569":{"disabledLIP":[7,8,10,9],"active":true,"legInt":false,"consent":true,"disabledSF":[7,8,10,9]},"571":{"disabledLIP":[7,10,2],"active":true,"legInt":false,"consent":true,"disabledSF":[7,10,2]},"572":{"active":false,"legInt":false,"consent":false},"573":{"disabledLIP":[7,8,10,2,9],"active":true,"legInt":true,"consent":true,"disabledSF":[7,8,10,2,9]},"580":{"disabledLIP":[7,10,2,9],"active":true,"legInt":false,"consent":true,"disabledSF":[7,10,2,9]},"581":{"active":false,"legInt":true,"consent":true},"584":{"disabledLIP":[7,10],"active":true,"legInt":false,"consent":true,"disabledSF":[7,10]},"596":{"disabledLIP":[7,8],"active":true,"legInt":false,"consent":true,"disabledSF":[7,8]},"598":{"disabledLIP":[7,2,9],"active":true,"legInt":false,"consent":true},"602":{"disabledLIP":[7,8,10,2],"active":true,"legInt":false,"consent":true,"disabledSF":[7,8,10,2]},"606":{"disabledLIP":[7,8,10,2,9],"active":true,"legInt":false,"consent":true,"disabledSF":[7,8,10,2,9]},"610":{"disabledLIP":[7,10,9,8,2],"active":true,"legInt":true,"consent":true,"disabledSF":[8,2]},"612":{"disabledLIP":[7],"active":true,"legInt":false,"consent":true,"disabledSF":[7]},"613":{"disabledLIP":[7,2,10],"active":true,"legInt":false,"consent":true,"disabledSF":[10]},"621":{"disabledLIP":[7,8,10,2,9],"active":true,"legInt":true,"consent":true},"630":{"disabledLIP":[7,10,2],"active":true,"legInt":false,"consent":true,"disabledSF":[7,10,2]},"644":{"disabledLIP":[7,8,10,2,9],"active":true,"legInt":false,"consent":true,"disabledSF":[7,8,10,2,9]},"647":{"disabledLIP":[7,10,2],"active":true,"legInt":false,"consent":true,"disabledSF":[7,10,2]},"655":{"disabledLIP":[7,10,2,9],"active":true,"legInt":false,"consent":true,"disabledSF":[7,10,2,9]},"656":{"disabledLIP":[2,7,10,9],"active":true,"legInt":false,"consent":true,"disabledSF":[7,10,9]},"657":{"disabledLIP":[2],"active":true,"legInt":false,"consent":true,"disabledSF":[2]},"658":{"disabledLIP":[7,8,10,2,9],"active":true,"legInt":false,"consent":true,"disabledSF":[7,8,10,2,9]},"659":{"disabledLIP":[7,8,9],"active":true,"legInt":false,"consent":true},"666":{"disabledLIP":[7,8,2],"disabledCP":[11,10,9],"active":true,"legInt":true,"consent":true,"disabledSF":[11,7,8,10,2,9]},"667":{"disabledLIP":[7,10,2],"active":true,"legInt":false,"consent":true,"disabledSF":[7,10,2]},"671":{"active":false,"legInt":true,"consent":true},"673":{"active":false,"legInt":true,"consent":true},"676":{"disabledLIP":[10,7,8,9],"active":true,"legInt":false,"consent":true,"disabledSF":[7,8,9]},"677":{"active":false,"legInt":true,"consent":true},"682":{"disabledLIP":[7],"active":true,"legInt":false,"consent":true},"684":{"disabledLIP":[7,8,10],"disabledCP":[11],"active":true,"legInt":true,"consent":true,"disabledSF":[11,7,8,10]},"697":{"disabledLIP":[7,8,2],"active":true,"legInt":true,"consent":true},"699":{"disabledLIP":[7,10],"active":true,"legInt":false,"consent":true},"702":{"disabledLIP":[7,8,2],"active":true,"legInt":false,"consent":true,"disabledSF":[7,8,2]},"706":{"disabledLIP":[2],"active":true,"legInt":false,"consent":false},"708":{"disabledLIP":[7,8,2,11],"active":true,"legInt":false,"consent":true,"disabledSF":[11]},"709":{"disabledLIP":[7,8,10,9],"active":true,"legInt":false,"consent":true,"disabledSF":[7,8,10,9]},"713":{"disabledLIP":[7,2],"active":true,"legInt":false,"consent":true,"disabledSF":[7,2]},"714":{"disabledLIP":[7,8,9],"active":true,"legInt":false,"consent":true,"disabledSF":[7,8,9]},"717":{"active":false,"legInt":false,"consent":true},"721":{"disabledLIP":[11,7,8,2],"active":true,"legInt":false,"consent":true,"disabledSF":[11,7,8,2]},"724":{"disabledLIP":[7],"active":true,"legInt":false,"consent":true},"726":{"active":false,"legInt":false,"consent":true},"728":{"disabledLIP":[7,10,2,9],"active":true,"legInt":false,"consent":true,"disabledSF":[7,10,2,9]},"729":{"active":true,"legInt":true,"consent":true,"disabledSF":[7]},"733":{"disabledLIP":[7,2,9],"active":true,"legInt":false,"consent":true,"disabledSF":[7,2,9]},"736":{"disabledLIP":[7,8,10],"active":true,"legInt":false,"consent":true,"disabledSF":[7,8,10]},"740":{"disabledLIP":[7,8,10,2],"active":true,"legInt":false,"consent":true,"disabledSF":[7,8,10,2]},"744":{"disabledLIP":[7,10,2],"active":true,"legInt":false,"consent":true,"disabledSF":[2]},"747":{"disabledLIP":[7,8,10,2,9],"active":true,"legInt":false,"consent":true,"disabledSF":[7,8,10,2,9]},"748":{"disabledLIP":[7,8,2,9],"active":true,"legInt":false,"consent":true,"disabledSF":[7,8,2,9]},"749":{"disabledLIP":[7,10],"active":true,"legInt":false,"consent":true,"disabledSF":[7,10]},"751":{"disabledLIP":[7,2],"active":true,"legInt":false,"consent":true,"disabledSF":[7,2]},"754":{"disabledLIP":[8,10,2],"active":true,"legInt":false,"consent":true},"755":{"disabledLIP":[7,10,2,9],"active":true,"legInt":false,"consent":true,"disabledSF":[7,10,2,9]},"756":{"disabledLIP":[7,8,10,2,9],"active":true,"legInt":false,"consent":true,"disabledSF":[7,8,10,2,9]},"762":{"disabledLIP":[7,10],"active":true,"legInt":false,"consent":true,"disabledSF":[7,10]},"766":{"disabledLIP":[2],"active":true,"legInt":false,"consent":true,"disabledSF":[2]},"767":{"disabledLIP":[7,2,9],"active":true,"legInt":false,"consent":true},"772":{"disabledLIP":[7,8,10],"active":true,"legInt":false,"consent":false},"774":{"disabledLIP":[7,2],"active":true,"legInt":false,"consent":true,"disabledSF":[7,2]},"776":{"disabledLIP":[2],"active":true,"legInt":false,"consent":true,"disabledSF":[2]},"781":{"disabledLIP":[7,10,2],"active":true,"legInt":false,"consent":true,"disabledSF":[7,10,2]},"784":{"disabledLIP":[7,2],"active":true,"legInt":false,"consent":true},"790":{"disabledLIP":[7,10,2,9],"active":true,"legInt":false,"consent":true},"791":{"disabledLIP":[2],"active":true,"legInt":false,"consent":true,"disabledSF":[2]},"793":{"disabledLIP":[7,10,2,9],"active":true,"legInt":false,"consent":true,"disabledSF":[7,10,2,9]},"794":{"disabledLIP":[10],"active":true,"legInt":false,"consent":true,"disabledSF":[10]},"796":{"disabledLIP":[7,8,2],"active":true,"legInt":false,"consent":true,"disabledSF":[7,8,2]},"797":{"disabledLIP":[7],"active":true,"legInt":false,"consent":true,"disabledSF":[7]},"798":{"disabledLIP":[7,8,10,2,9],"active":true,"legInt":false,"consent":true,"disabledSF":[7,8,10,2,9]},"800":{"disabledLIP":[10],"active":true,"legInt":false,"consent":true,"disabledSF":[10]},"801":{"disabledLIP":[7,2],"active":true,"legInt":false,"consent":false},"803":{"disabledLIP":[7,8,10,2,9],"active":true,"legInt":false,"consent":true,"disabledSF":[7,8,10,2,9]},"804":{"disabledLIP":[7,10,2,9],"active":true,"legInt":false,"consent":true,"disabledSF":[7,10,2,9]},"806":{"disabledLIP":[7,10],"active":true,"legInt":false,"consent":true},"807":{"disabledLIP":[7,8,10,2,9],"active":true,"legInt":false,"consent":true,"disabledSF":[7,8,10,2,9]},"810":{"disabledLIP":[7],"active":true,"legInt":false,"consent":true,"disabledSF":[7]},"812":{"disabledLIP":[9,7,10],"active":true,"legInt":false,"consent":true,"disabledSF":[7,10]},"819":{"disabledLIP":[7,2],"disabledCP":[11],"active":true,"legInt":true,"consent":true,"disabledSF":[11,7,2]},"820":{"disabledLIP":[10],"active":true,"legInt":false,"consent":true,"disabledSF":[10]},"821":{"disabledLIP":[7],"active":true,"legInt":false,"consent":true,"disabledSF":[7]},"822":{"disabledLIP":[7],"active":true,"legInt":false,"consent":true,"disabledSF":[7]},"825":{"disabledLIP":[7,8,10,2,9],"active":true,"legInt":false,"consent":true,"disabledSF":[7,8,10,2,9]},"827":{"disabledLIP":[7],"active":true,"legInt":false,"consent":true,"disabledSF":[7]},"828":{"disabledLIP":[8,10,9],"active":true,"legInt":false,"consent":true},"836":{"disabledLIP":[10,7,8],"active":true,"legInt":false,"consent":true,"disabledSF":[7,8]},"838":{"disabledLIP":[7,8,10,2],"active":true,"legInt":true,"consent":false},"845":{"disabledLIP":[7],"active":true,"legInt":false,"consent":true,"disabledSF":[7]},"851":{"disabledLIP":[7,8,10,2],"active":true,"legInt":true,"consent":true},"853":{"active":false,"legInt":true,"consent":false},"855":{"disabledLIP":[7,2],"active":true,"legInt":false,"consent":true,"disabledSF":[7,2]},"856":{"disabledLIP":[7,10,2,9],"active":true,"legInt":false,"consent":true,"disabledSF":[7,10,2,9]},"857":{"disabledLIP":[10,2],"active":true,"legInt":false,"consent":true,"disabledSF":[10,2]},"858":{"disabledLIP":[11,7,8,10,2,9],"active":true,"legInt":false,"consent":true,"disabledSF":[11,7,8,10,2,9]},"862":{"disabledLIP":[7,10,2],"active":true,"legInt":false,"consent":true,"disabledSF":[2]},"864":{"active":false,"legInt":false,"consent":true},"869":{"disabledLIP":[7,8,10,2,9],"active":true,"legInt":false,"consent":true,"disabledSF":[7,8,10,2,9]},"870":{"active":false,"legInt":false,"consent":true},"871":{"disabledLIP":[7],"active":true,"legInt":false,"consent":true,"disabledSF":[7]},"872":{"disabledLIP":[7,2],"active":true,"legInt":false,"consent":false},"876":{"disabledLIP":[7,8],"active":true,"legInt":false,"consent":true},"878":{"disabledLIP":[7,8,2],"active":true,"legInt":false,"consent":true},"879":{"disabledLIP":[7,10,2,9],"active":true,"legInt":false,"consent":true,"disabledSF":[7,10,2,9]},"883":{"active":true,"legInt":true,"consent":true,"disabledSF":[2]},"884":{"disabledLIP":[7,8,10,2,9],"active":true,"legInt":true,"consent":true},"885":{"disabledLIP":[7,10,2],"active":true,"legInt":false,"consent":true,"disabledSF":[7,10,2]},"889":{"disabledLIP":[7,9],"active":true,"legInt":false,"consent":true,"disabledSF":[7,9]},"896":{"disabledLIP":[8,9],"active":true,"legInt":false,"consent":true,"disabledSF":[8,9]},"898":{"disabledLIP":[10,2],"active":true,"legInt":false,"consent":true,"disabledSF":[10,2]},"901":{"active":false,"legInt":false,"consent":true},"904":{"active":false,"legInt":false,"consent":false},"907":{"disabledLIP":[7],"active":true,"legInt":false,"consent":true,"disabledSF":[7]},"911":{"disabledLIP":[7],"active":true,"legInt":false,"consent":false},"915":{"disabledLIP":[7,10,2],"active":true,"legInt":false,"consent":true,"disabledSF":[7,10,2]},"918":{"disabledLIP":[7,8,10,9,2],"active":true,"legInt":true,"consent":true,"disabledSF":[2]},"919":{"disabledLIP":[7,10,2],"active":true,"legInt":false,"consent":true,"disabledSF":[7,10,2]},"925":{"disabledLIP":[7],"active":true,"legInt":false,"consent":false},"927":{"disabledLIP":[7,8],"active":true,"legInt":false,"consent":false},"935":{"active":false,"legInt":false,"consent":true},"937":{"disabledLIP":[7,8,2],"active":true,"legInt":false,"consent":true,"disabledSF":[7,8,2]},"938":{"disabledLIP":[7,8,2],"active":true,"legInt":false,"consent":true,"disabledSF":[7,8,2]},"939":{"active":false,"legInt":false,"consent":false},"940":{"disabledLIP":[7],"active":true,"legInt":false,"consent":false},"942":{"active":false,"legInt":false,"consent":false},"943":{"active":false,"legInt":false,"consent":true},"944":{"active":false,"legInt":false,"consent":true},"945":{"active":false,"legInt":false,"consent":false},"946":{"active":false,"legInt":false,"consent":true},"947":{"active":false,"legInt":false,"consent":false},"949":{"active":false,"legInt":false,"consent":false},"950":{"active":false,"legInt":false,"consent":false},"951":{"active":false,"legInt":false,"consent":true},"952":{"active":false,"legInt":false,"consent":true},"953":{"active":false,"legInt":false,"consent":false},"954":{"active":false,"legInt":false,"consent":true},"955":{"active":false,"legInt":false,"consent":true},"956":{"active":false,"legInt":false,"consent":true},"957":{"active":false,"legInt":false,"consent":true},"958":{"active":false,"legInt":false,"consent":true},"959":{"active":false,"legInt":false,"consent":true},"960":{"active":false,"legInt":false,"consent":false},"961":{"active":false,"legInt":false,"consent":false},"962":{"active":false,"legInt":false,"consent":true},"963":{"active":false,"legInt":false,"consent":true},"964":{"active":false,"legInt":false,"consent":true},"965":{"active":false,"legInt":true,"consent":true},"966":{"active":false,"legInt":false,"consent":true},"967":{"active":false,"legInt":true,"consent":true},"968":{"active":false,"legInt":false,"consent":true},"969":{"active":false,"legInt":true,"consent":false},"970":{"active":false,"legInt":true,"consent":true},"971":{"active":false,"legInt":false,"consent":false},"972":{"active":false,"legInt":false,"consent":true},"973":{"active":false,"legInt":false,"consent":true},"974":{"active":false,"legInt":false,"consent":false},"975":{"active":false,"legInt":false,"consent":true},"976":{"active":false,"legInt":false,"consent":true},"977":{"active":false,"legInt":false,"consent":false},"978":{"active":false,"legInt":false,"consent":true},"979":{"active":false,"legInt":false,"consent":false},"980":{"active":false,"legInt":false,"consent":false},"981":{"active":false,"legInt":false,"consent":false},"982":{"active":false,"legInt":false,"consent":true},"983":{"active":false,"legInt":false,"consent":false},"984":{"active":false,"legInt":false,"consent":false},"985":{"active":false,"legInt":false,"consent":true},"986":{"active":false,"legInt":false,"consent":false},"987":{"active":false,"legInt":false,"consent":true},"988":{"active":false,"legInt":false,"consent":false},"989":{"active":false,"legInt":false,"consent":false},"990":{"active":false,"legInt":false,"consent":true},"991":{"active":false,"legInt":false,"consent":true},"992":{"active":false,"legInt":false,"consent":false},"993":{"active":false,"legInt":false,"consent":true},"994":{"active":false,"legInt":true,"consent":true},"995":{"active":false,"legInt":false,"consent":true},"996":{"active":false,"legInt":true,"consent":true},"997":{"active":false,"legInt":true,"consent":true},"998":{"active":false,"legInt":false,"consent":true},"999":{"active":false,"legInt":false,"consent":true},"1000":{"active":false,"legInt":false,"consent":false},"1001":{"active":false,"legInt":true,"consent":true},"1002":{"active":false,"legInt":false,"consent":true},"1003":{"active":false,"legInt":true,"consent":true},"1004":{"active":false,"legInt":false,"consent":false},"1005":{"active":false,"legInt":true,"consent":false},"1006":{"active":false,"legInt":true,"consent":true},"1007":{"active":false,"legInt":false,"consent":false},"1008":{"active":false,"legInt":false,"consent":false},"1009":{"active":false,"legInt":false,"consent":true},"1010":{"active":false,"legInt":false,"consent":false},"1011":{"active":false,"legInt":false,"consent":false},"1012":{"active":false,"legInt":false,"consent":false},"1013":{"active":false,"legInt":false,"consent":false},"1014":{"active":false,"legInt":true,"consent":false},"1015":{"active":false,"legInt":true,"consent":true},"1016":{"active":false,"legInt":false,"consent":true},"1017":{"active":false,"legInt":false,"consent":true},"1018":{"active":false,"legInt":false,"consent":false},"1019":{"active":false,"legInt":true,"consent":false},"1020":{"active":false,"legInt":false,"consent":true},"1021":{"active":false,"legInt":false,"consent":true},"1022":{"active":false,"legInt":false,"consent":true},"1023":{"active":false,"legInt":false,"consent":false}},"OverridenGoogleVendors":{"1024":{"active":false},"3072":{"active":false},"3073":{"active":false},"3074":{"active":false},"3075":{"active":false},"1027":{"active":false},"3076":{"active":false},"2052":{"active":false},"3077":{"active":false},"3078":{"active":false},"1031":{"active":false},"2056":{"active":false},"1033":{"active":false},"1034":{"active":false},"1040":{"active":false},"2064":{"active":false},"3089":{"active":false},"3090":{"active":false},"2068":{"active":false},"3093":{"active":false},"3094":{"active":false},"1046":{"active":false},"2070":{"active":false},"3095":{"active":false},"3097":{"active":false},"2074":{"active":false},"3099":{"active":false},"1051":{"active":false},"3100":{"active":false},"1053":{"active":false},"3104":{"active":false},"3106":{"active":false},"3109":{"active":false},"3111":{"active":false},"39":{"active":false},"2088":{"active":false},"3112":{"active":false},"2090":{"active":false},"1067":{"active":false},"43":{"active":false},"3116":{"active":false},"3117":{"active":false},"3118":{"active":false},"46":{"active":false},"3119":{"active":false},"3120":{"active":false},"3121":{"active":false},"3124":{"active":false},"3126":{"active":false},"55":{"active":false},"3127":{"active":false},"2103":{"active":false},"3128":{"active":false},"3130":{"active":false},"2107":{"active":false},"61":{"active":false},"1085":{"active":false},"2109":{"active":false},"3135":{"active":false},"3136":{"active":false},"66":{"active":false},"3139":{"active":false},"2115":{"active":false},"1092":{"active":false},"70":{"active":false},"1095":{"active":false},"3145":{"active":false},"1097":{"active":false},"1099":{"active":false},"2124":{"active":false},"3149":{"active":false},"3150":{"active":false},"3151":{"active":false},"2130":{"active":false},"3154":{"active":false},"83":{"active":false},"3155":{"active":false},"1107":{"active":false},"2133":{"active":false},"3159":{"active":false},"2137":{"active":false},"3162":{"active":false},"3163":{"active":false},"2140":{"active":false},"93":{"active":false},"3167":{"active":false},"2145":{"active":false},"2147":{"active":false},"3172":{"active":false},"3173":{"active":false},"2150":{"active":false},"1126":{"active":false},"1127":{"active":false},"108":{"active":false},"2156":{"active":false},"3180":{"active":false},"3182":{"active":false},"3183":{"active":false},"1135":{"active":false},"3184":{"active":false},"3185":{"active":false},"3187":{"active":false},"3188":{"active":false},"3189":{"active":false},"117":{"active":false},"2166":{"active":false},"3190":{"active":false},"1143":{"active":false},"3193":{"active":false},"3194":{"active":false},"122":{"active":false},"124":{"active":false},"3196":{"active":false},"3197":{"active":false},"1149":{"active":false},"1152":{"active":false},"2177":{"active":false},"131":{"active":false},"2179":{"active":false},"2183":{"active":false},"135":{"active":false},"136":{"active":false},"3209":{"active":false},"2186":{"active":false},"1162":{"active":false},"3210":{"active":false},"3211":{"active":false},"3214":{"active":false},"1166":{"active":false},"143":{"active":false},"3215":{"active":false},"144":{"active":false},"3217":{"active":false},"147":{"active":false},"1171":{"active":false},"3219":{"active":false},"149":{"active":false},"3222":{"active":false},"3223":{"active":false},"2202":{"active":false},"3227":{"active":false},"3228":{"active":false},"2205":{"active":false},"3230":{"active":false},"159":{"active":false},"162":{"active":false},"1186":{"active":false},"1188":{"active":false},"2213":{"active":false},"167":{"active":false},"2216":{"active":false},"1192":{"active":false},"2219":{"active":false},"171":{"active":false},"2220":{"active":false},"2222":{"active":false},"2225":{"active":false},"1201":{"active":false},"1204":{"active":false},"1205":{"active":false},"184":{"active":false},"2234":{"active":false},"1211":{"active":false},"1215":{"active":false},"192":{"active":false},"196":{"active":false},"202":{"active":false},"1226":{"active":false},"1227":{"active":false},"2253":{"active":false},"1230":{"active":false},"211":{"active":false},"2264":{"active":false},"218":{"active":false},"228":{"active":false},"1252":{"active":false},"230":{"active":false},"2279":{"active":false},"2282":{"active":false},"239":{"active":false},"241":{"active":false},"2292":{"active":false},"1268":{"active":false},"1270":{"active":false},"2299":{"active":false},"1276":{"active":false},"253":{"active":false},"2305":{"active":false},"259":{"active":false},"1284":{"active":false},"2309":{"active":false},"1286":{"active":false},"2312":{"active":false},"266":{"active":false},"1290":{"active":false},"2316":{"active":false},"272":{"active":false},"1301":{"active":false},"2325":{"active":false},"2328":{"active":false},"1307":{"active":false},"2331":{"active":false},"2334":{"active":false},"286":{"active":false},"2335":{"active":false},"1312":{"active":false},"2336":{"active":false},"2337":{"active":false},"291":{"active":false},"2343":{"active":false},"1329":{"active":false},"2354":{"active":false},"2357":{"active":false},"2358":{"active":false},"2359":{"active":false},"311":{"active":false},"317":{"active":false},"2366":{"active":false},"1345":{"active":false},"2370":{"active":false},"322":{"active":false},"323":{"active":false},"326":{"active":false},"327":{"active":false},"2376":{"active":false},"2377":{"active":false},"1356":{"active":false},"338":{"active":false},"2387":{"active":false},"1364":{"active":false},"1365":{"active":false},"2392":{"active":false},"2394":{"active":false},"1375":{"active":false},"2400":{"active":false},"2403":{"active":false},"2405":{"active":false},"2406":{"active":false},"2407":{"active":false},"2411":{"active":false},"2414":{"active":false},"367":{"active":false},"2416":{"active":false},"2418":{"active":false},"371":{"active":false},"2422":{"active":false},"2425":{"active":false},"2427":{"active":false},"1403":{"active":false},"385":{"active":false},"1411":{"active":false},"389":{"active":false},"1415":{"active":false},"1416":{"active":false},"2440":{"active":false},"393":{"active":false},"394":{"active":false},"1419":{"active":false},"397":{"active":false},"2447":{"active":false},"407":{"active":false},"2459":{"active":false},"2461":{"active":false},"413":{"active":false},"2462":{"active":false},"415":{"active":false},"1440":{"active":false},"1442":{"active":false},"2468":{"active":false},"2472":{"active":false},"424":{"active":false},"1449":{"active":false},"2477":{"active":false},"430":{"active":false},"1455":{"active":false},"1456":{"active":false},"2481":{"active":false},"436":{"active":false},"2484":{"active":false},"2486":{"active":false},"2488":{"active":false},"440":{"active":false},"1465":{"active":false},"2492":{"active":false},"2493":{"active":false},"445":{"active":false},"448":{"active":false},"2496":{"active":false},"449":{"active":false},"2497":{"active":false},"2498":{"active":false},"2499":{"active":false},"453":{"active":false},"2510":{"active":false},"2511":{"active":false},"2517":{"active":false},"1495":{"active":false},"2526":{"active":false},"2527":{"active":false},"482":{"active":false},"2532":{"active":false},"2534":{"active":false},"486":{"active":false},"2535":{"active":false},"1512":{"active":false},"491":{"active":false},"1516":{"active":false},"494":{"active":false},"2542":{"active":false},"495":{"active":false},"2544":{"active":false},"501":{"active":false},"1525":{"active":false},"503":{"active":false},"2552":{"active":false},"505":{"active":false},"2555":{"active":false},"2563":{"active":false},"1540":{"active":false},"2564":{"active":false},"2567":{"active":false},"2568":{"active":false},"2569":{"active":false},"522":{"active":false},"2571":{"active":false},"523":{"active":false},"1548":{"active":false},"2572":{"active":false},"2575":{"active":false},"2577":{"active":false},"1555":{"active":false},"1558":{"active":false},"2583":{"active":false},"2584":{"active":false},"1564":{"active":false},"540":{"active":false},"2589":{"active":false},"1570":{"active":false},"2595":{"active":false},"2596":{"active":false},"550":{"active":false},"1577":{"active":false},"2601":{"active":false},"1579":{"active":false},"2604":{"active":false},"2605":{"active":false},"559":{"active":false},"1583":{"active":false},"1584":{"active":false},"560":{"active":false},"2608":{"active":false},"2609":{"active":false},"2610":{"active":false},"2612":{"active":false},"2614":{"active":false},"1591":{"active":false},"568":{"active":false},"2621":{"active":false},"574":{"active":false},"576":{"active":false},"1603":{"active":false},"2628":{"active":false},"2629":{"active":false},"584":{"active":false},"585":{"active":false},"2633":{"active":false},"2634":{"active":false},"587":{"active":false},"2636":{"active":false},"591":{"active":false},"1616":{"active":false},"2642":{"active":false},"2643":{"active":false},"2645":{"active":false},"2646":{"active":false},"2647":{"active":false},"2650":{"active":false},"2651":{"active":false},"2652":{"active":false},"2656":{"active":false},"2657":{"active":false},"2658":{"active":false},"2660":{"active":false},"2661":{"active":false},"1638":{"active":false},"2669":{"active":false},"2670":{"active":false},"2673":{"active":false},"1651":{"active":false},"1653":{"active":false},"2677":{"active":false},"2681":{"active":false},"2684":{"active":false},"2686":{"active":false},"2687":{"active":false},"1665":{"active":false},"2690":{"active":false},"1667":{"active":false},"2691":{"active":false},"1671":{"active":false},"2695":{"active":false},"2698":{"active":false},"1677":{"active":false},"1678":{"active":false},"1682":{"active":false},"2707":{"active":false},"2713":{"active":false},"2714":{"active":false},"1697":{"active":false},"1699":{"active":false},"1703":{"active":false},"2729":{"active":false},"1712":{"active":false},"2739":{"active":false},"1716":{"active":false},"1721":{"active":false},"1722":{"active":false},"1725":{"active":false},"1732":{"active":false},"2767":{"active":false},"2768":{"active":false},"1745":{"active":false},"2770":{"active":false},"2771":{"active":false},"2772":{"active":false},"1750":{"active":false},"1753":{"active":false},"733":{"active":false},"2784":{"active":false},"737":{"active":false},"2787":{"active":false},"1765":{"active":false},"2791":{"active":false},"2792":{"active":false},"745":{"active":false},"1769":{"active":false},"2798":{"active":false},"2801":{"active":false},"2805":{"active":false},"1782":{"active":false},"1786":{"active":false},"2812":{"active":false},"2813":{"active":false},"2816":{"active":false},"2817":{"active":false},"2818":{"active":false},"2821":{"active":false},"2822":{"active":false},"1800":{"active":false},"2827":{"active":false},"780":{"active":false},"2830":{"active":false},"2831":{"active":false},"1808":{"active":false},"2834":{"active":false},"1810":{"active":false},"787":{"active":false},"2836":{"active":false},"2838":{"active":false},"2839":{"active":false},"2840":{"active":false},"2844":{"active":false},"2846":{"active":false},"2847":{"active":false},"2849":{"active":false},"1825":{"active":false},"2850":{"active":false},"802":{"active":false},"1827":{"active":false},"2851":{"active":false},"803":{"active":false},"2852":{"active":false},"2854":{"active":false},"1832":{"active":false},"2856":{"active":false},"2860":{"active":false},"1837":{"active":false},"1838":{"active":false},"2862":{"active":false},"2863":{"active":false},"1840":{"active":false},"2865":{"active":false},"817":{"active":false},"1842":{"active":false},"1843":{"active":false},"2867":{"active":false},"820":{"active":false},"2869":{"active":false},"821":{"active":false},"1845":{"active":false},"2873":{"active":false},"2874":{"active":false},"2875":{"active":false},"2876":{"active":false},"829":{"active":false},"2878":{"active":false},"2879":{"active":false},"2880":{"active":false},"2881":{"active":false},"2882":{"active":false},"2883":{"active":false},"1859":{"active":false},"2884":{"active":false},"2885":{"active":false},"2886":{"active":false},"2887":{"active":false},"839":{"active":false},"2888":{"active":false},"2889":{"active":false},"1866":{"active":false},"2891":{"active":false},"2893":{"active":false},"2894":{"active":false},"1870":{"active":false},"2895":{"active":false},"2897":{"active":false},"2898":{"active":false},"2900":{"active":false},"853":{"active":false},"2901":{"active":false},"1878":{"active":false},"1880":{"active":false},"2908":{"active":false},"2909":{"active":false},"2911":{"active":false},"2912":{"active":false},"864":{"active":false},"1889":{"active":false},"2913":{"active":false},"2914":{"active":false},"867":{"active":false},"2916":{"active":false},"2917":{"active":false},"2918":{"active":false},"2919":{"active":false},"2920":{"active":false},"874":{"active":false},"2922":{"active":false},"1899":{"active":false},"2923":{"active":false},"2924":{"active":false},"2927":{"active":false},"2929":{"active":false},"2930":{"active":false},"2931":{"active":false},"2933":{"active":false},"2939":{"active":false},"2940":{"active":false},"2941":{"active":false},"1917":{"active":false},"2942":{"active":false},"2947":{"active":false},"899":{"active":false},"2949":{"active":false},"2950":{"active":false},"904":{"active":false},"1929":{"active":false},"2956":{"active":false},"2961":{"active":false},"2962":{"active":false},"2963":{"active":false},"2964":{"active":false},"2965":{"active":false},"2966":{"active":false},"1942":{"active":false},"2968":{"active":false},"1944":{"active":false},"2969":{"active":false},"2970":{"active":false},"922":{"active":false},"2973":{"active":false},"2974":{"active":false},"2975":{"active":false},"2979":{"active":false},"931":{"active":false},"2980":{"active":false},"2981":{"active":false},"2983":{"active":false},"2985":{"active":false},"938":{"active":false},"2986":{"active":false},"1962":{"active":false},"2987":{"active":false},"1963":{"active":false},"1964":{"active":false},"2991":{"active":false},"1967":{"active":false},"1968":{"active":false},"2993":{"active":false},"1969":{"active":false},"2994":{"active":false},"2995":{"active":false},"2997":{"active":false},"3000":{"active":false},"1978":{"active":false},"3002":{"active":false},"3003":{"active":false},"3005":{"active":false},"3008":{"active":false},"3009":{"active":false},"3010":{"active":false},"3011":{"active":false},"3012":{"active":false},"3016":{"active":false},"3017":{"active":false},"3018":{"active":false},"3019":{"active":false},"1998":{"active":false},"3024":{"active":false},"3025":{"active":false},"2003":{"active":false},"979":{"active":false},"981":{"active":false},"2007":{"active":false},"985":{"active":false},"3033":{"active":false},"3034":{"active":false},"3037":{"active":false},"2013":{"active":false},"3038":{"active":false},"3043":{"active":false},"3044":{"active":false},"3045":{"active":false},"3048":{"active":false},"3050":{"active":false},"1003":{"active":false},"2027":{"active":false},"3052":{"active":false},"3053":{"active":false},"3055":{"active":false},"3058":{"active":false},"2035":{"active":false},"3059":{"active":false},"2039":{"active":false},"3063":{"active":false},"3065":{"active":false},"3066":{"active":false},"2044":{"active":false},"3068":{"active":false},"3070":{"active":false},"2047":{"active":false}},"publisher":{"restrictions":{"1":{"7":1,"18":1,"41":1,"51":1,"63":1,"65":1,"67":1,"79":1,"86":1,"88":1,"89":1,"141":1,"144":1,"145":1,"152":1,"158":1,"162":1,"165":1,"167":1,"177":1,"179":1,"183":1,"198":1,"200":1,"203":1,"218":1,"223":1,"234":1,"236":1,"240":1,"261":1,"265":1,"266":1,"277":1,"289":1,"295":1,"298":1,"299":1,"303":1,"308":1,"310":1,"316":1,"335":1,"349":1,"360":1,"365":1,"408":1,"428":1,"429":1,"439":1,"458":1,"462":1,"467":1,"482":1,"505":1,"519":1,"520":1,"527":1,"528":1,"541":1,"543":1,"545":1,"547":1,"574":1,"577":1,"578":1,"579":1,"590":1,"591":1,"593":1,"607":1,"609":1,"638":1,"645":1,"650":1,"654":1,"664":1,"668":1,"670":1,"672":1,"720":1,"722":1,"723":1,"735":1,"739":1,"743":1,"753":1,"757":1,"760":1,"761":1,"763":1,"764":1,"777":1,"785":1,"789":1,"792":1,"802":1,"805":1,"809":1,"813":1,"817":1,"818":1,"823":1,"824":1,"829":1,"837":1,"839":1,"843":1,"846":1,"852":1,"859":1,"860":1,"863":1,"868":1,"882":1,"883":1,"886":1,"887":1,"891":1,"895":1,"897":1,"899":1,"905":1,"908":1,"909":1,"910":1,"913":1,"914":1,"917":1,"926":1,"928":1,"932":1,"948":1},"2":{"8":1,"11":1,"14":0,"18":1,"20":1,"21":1,"28":1,"30":1,"31":1,"32":1,"36":0,"41":1,"47":1,"48":1,"50":1,"51":1,"52":1,"53":1,"60":1,"63":0,"67":1,"68":1,"71":0,"72":1,"76":1,"79":1,"85":1,"86":1,"88":1,"102":1,"111":1,"122":1,"126":1,"127":1,"132":1,"134":1,"136":1,"137":1,"141":1,"142":1,"144":1,"145":0,"150":1,"154":1,"158":1,"162":1,"165":1,"179":1,"183":1,"192":1,"195":1,"198":1,"200":1,"202":1,"203":1,"217":1,"218":0,"231":1,"234":0,"236":1,"238":1,"239":1,"246":1,"248":1,"250":1,"251":1,"252":1,"253":1,"255":1,"256":1,"259":1,"263":0,"265":1,"266":1,"276":1,"277":1,"279":1,"280":1,"282":1,"284":0,"289":1,"293":1,"295":1,"297":1,"298":1,"299":1,"303":1,"308":0,"310":1,"316":1,"319":1,"321":1,"335":1,"336":1,"337":1,"343":1,"349":1,"359":0,"371":1,"378":1,"381":0,"387":1,"394":1,"408":1,"418":1,"428":1,"429":1,"436":1,"440":1,"447":1,"452":1,"458":1,"462":1,"482":1,"519":1,"527":1,"528":1,"541":1,"543":0,"545":1,"547":1,"573":1,"577":1,"578":0,"579":1,"580":1,"591":1,"593":1,"598":0,"607":1,"609":1,"613":0,"621":0,"630":1,"638":1,"645":1,"647":1,"650":1,"654":1,"655":1,"656":0,"657":1,"664":1,"665":1,"667":1,"668":1,"670":1,"672":1,"675":1,"678":1,"691":1,"694":1,"697":0,"706":0,"708":0,"720":1,"723":1,"728":1,"729":1,"736":1,"739":1,"740":1,"743":1,"751":1,"753":1,"754":0,"755":1,"757":1,"760":1,"763":1,"764":1,"767":0,"774":1,"777":1,"781":1,"784":0,"789":1,"790":0,"801":0,"802":1,"803":1,"804":1,"805":1,"807":1,"809":1,"814":1,"817":1,"818":1,"819":1,"824":1,"825":1,"829":1,"830":1,"837":1,"838":0,"839":0,"840":1,"846":1,"847":1,"851":0,"855":1,"856":1,"857":1,"859":1,"867":1,"868":1,"872":0,"875":1,"878":0,"879":1,"884":0,"885":1,"886":1,"891":1,"894":1,"895":1,"898":1,"905":1,"908":1,"910":1,"912":1,"913":1,"914":1,"915":1,"916":1,"917":1,"919":1,"921":1,"926":1,"932":0,"948":1},"3":{"7":1,"18":1,"41":1,"51":1,"63":1,"67":1,"79":1,"86":1,"88":1,"119":1,"120":1,"141":1,"158":1,"162":1,"179":1,"183":1,"198":1,"200":1,"203":1,"218":1,"234":1,"235":1,"236":1,"250":1,"256":1,"261":1,"265":1,"266":1,"277":1,"289":1,"295":1,"298":1,"299":1,"303":1,"310":1,"316":1,"335":1,"349":1,"359":1,"360":1,"387":1,"428":1,"429":1,"447":1,"455":1,"458":1,"462":1,"482":1,"519":1,"527":1,"528":1,"541":1,"543":1,"545":1,"547":1,"577":1,"578":0,"579":1,"593":1,"607":1,"609":1,"645":1,"650":1,"654":1,"664":1,"668":1,"675":1,"691":1,"694":1,"711":1,"720":1,"723":1,"729":1,"736":1,"739":1,"740":1,"743":1,"753":1,"757":1,"760":1,"761":1,"763":1,"771":1,"777":1,"789":1,"792":1,"802":1,"805":1,"809":1,"817":1,"824":1,"825":1,"829":1,"830":1,"846":1,"859":1,"867":1,"868":1,"882":1,"891":1,"894":1,"895":1,"905":0,"906":1,"908":1,"910":1,"914":1,"916":1,"917":1,"921":1,"926":1,"932":1,"948":1},"4":{"7":1,"18":1,"41":1,"51":1,"63":1,"67":1,"79":1,"86":1,"88":1,"119":1,"141":1,"144":1,"158":1,"162":1,"179":1,"183":1,"198":1,"200":1,"203":1,"218":1,"234":1,"235":1,"236":1,"250":1,"256":1,"265":1,"266":1,"277":1,"289":1,"295":1,"298":1,"299":1,"303":1,"310":1,"316":1,"335":1,"349":1,"359":1,"387":1,"428":1,"429":1,"447":1,"455":1,"458":1,"462":1,"482":1,"519":1,"527":1,"528":1,"541":1,"543":1,"545":1,"547":1,"577":1,"578":0,"579":1,"591":1,"593":1,"607":1,"609":1,"638":1,"645":1,"650":1,"654":1,"664":1,"668":1,"670":1,"675":1,"691":1,"694":1,"720":1,"723":1,"729":1,"736":1,"739":1,"740":1,"743":1,"753":1,"757":1,"760":1,"763":1,"777":1,"789":1,"802":1,"805":1,"809":1,"817":1,"818":1,"824":1,"825":1,"829":1,"830":1,"846":1,"859":1,"867":1,"868":1,"875":1,"886":1,"891":1,"894":1,"895":1,"905":0,"908":1,"910":1,"914":1,"916":1,"917":1,"921":1,"926":1,"932":1,"948":1},"5":{"519":1,"7":1,"527":1,"543":1,"545":1,"41":1,"52":1,"577":1,"579":1,"67":1,"593":1,"607":1,"609":1,"120":1,"127":1,"645":1,"650":1,"141":1,"654":1,"668":1,"685":1,"686":1,"691":1,"694":1,"183":1,"202":1,"203":1,"729":1,"218":0,"732":1,"736":1,"739":1,"740":1,"743":1,"236":1,"240":0,"757":1,"760":1,"761":1,"250":1,"763":1,"261":0,"265":1,"266":1,"782":1,"789":1,"277":1,"802":1,"805":1,"295":1,"299":1,"817":1,"824":1,"825":1,"316":1,"829":1,"830":1,"837":1,"847":1,"859":1,"349":1,"868":1,"360":1,"882":1,"894":1,"905":0,"906":1,"910":1,"914":1,"916":1,"921":1,"926":1,"429":1,"462":1,"482":1},"6":{"519":1,"7":1,"265":1,"266":1,"527":1,"277":1,"789":1,"543":1,"545":1,"802":1,"805":1,"295":1,"41":1,"299":1,"817":1,"824":1,"825":1,"316":1,"829":1,"830":1,"577":1,"67":1,"579":1,"837":1,"847":1,"593":1,"859":1,"349":1,"607":1,"609":1,"868":1,"875":1,"876":1,"894":1,"127":1,"645":1,"905":0,"650":1,"141":1,"654":1,"910":1,"914":1,"916":1,"921":1,"668":1,"670":1,"926":1,"685":1,"429":1,"686":1,"691":1,"694":1,"183":1,"203":1,"462":1,"729":1,"218":0,"732":1,"736":1,"482":1,"739":1,"740":1,"743":1,"236":1,"240":0,"760":1,"250":1,"763":1},"7":{"7":1,"8":0,"11":1,"14":0,"15":0,"18":1,"20":1,"21":1,"23":0,"28":1,"31":1,"32":1,"36":0,"41":1,"46":1,"47":1,"48":1,"49":1,"50":1,"51":1,"52":1,"53":1,"60":1,"63":0,"65":1,"67":1,"68":1,"71":0,"72":1,"76":1,"79":1,"80":0,"85":1,"86":1,"88":1,"92":1,"93":1,"98":1,"102":1,"104":0,"111":1,"122":1,"126":1,"127":1,"134":1,"136":1,"137":1,"141":1,"142":0,"144":1,"145":0,"150":1,"152":1,"154":1,"158":1,"162":1,"163":1,"165":1,"170":1,"177":1,"179":0,"183":1,"192":1,"195":1,"198":1,"200":1,"202":1,"203":0,"205":0,"209":1,"217":1,"218":0,"223":1,"228":0,"231":1,"234":0,"236":0,"238":1,"239":1,"246":1,"250":1,"251":1,"252":1,"253":1,"255":1,"256":0,"259":1,"261":0,"263":0,"264":0,"265":1,"266":1,"273":0,"276":1,"277":1,"278":1,"279":1,"280":1,"284":0,"285":1,"289":1,"290":1,"293":1,"295":1,"297":1,"298":1,"299":1,"303":1,"308":0,"310":1,"316":1,"319":1,"321":1,"335":1,"336":0,"337":1,"343":1,"349":1,"354":1,"359":0,"360":1,"371":1,"377":1,"378":1,"387":1,"394":1,"408":1,"428":0,"429":1,"436":1,"439":1,"440":1,"447":1,"452":1,"455":0,"458":1,"462":1,"466":0,"467":1,"468":1,"482":1,"484":0,"502":1,"505":1,"519":1,"527":1,"528":0,"541":1,"543":0,"544":1,"545":1,"547":1,"559":1,"573":1,"574":1,"577":1,"578":0,"579":1,"580":1,"591":1,"593":1,"596":1,"598":0,"607":1,"609":1,"610":0,"612":1,"613":0,"621":0,"630":1,"638":1,"645":0,"647":1,"650":1,"654":1,"655":1,"656":1,"659":0,"664":0,"665":1,"666":1,"667":1,"668":1,"670":1,"675":1,"678":0,"682":0,"684":1,"688":1,"691":1,"694":0,"697":0,"699":0,"708":0,"709":1,"714":1,"720":0,"722":1,"723":1,"724":0,"728":1,"733":1,"735":1,"736":1,"739":1,"740":1,"743":1,"744":0,"749":1,"751":1,"753":1,"755":1,"757":1,"760":1,"761":1,"762":1,"763":1,"764":1,"767":0,"772":0,"774":1,"777":1,"781":1,"784":0,"785":1,"789":1,"790":0,"792":1,"798":1,"801":0,"802":1,"803":1,"804":1,"805":1,"806":0,"807":1,"809":1,"810":1,"812":1,"813":1,"814":1,"817":1,"818":1,"819":1,"823":1,"824":1,"825":1,"829":1,"830":1,"836":1,"837":0,"838":0,"839":0,"840":1,"841":1,"843":1,"845":1,"846":1,"847":1,"851":0,"852":1,"855":1,"856":1,"859":1,"862":0,"863":1,"867":1,"868":1,"872":0,"873":0,"875":1,"876":0,"878":0,"879":1,"884":0,"885":1,"886":1,"891":1,"894":1,"895":1,"905":0,"907":1,"908":1,"909":1,"910":1,"911":0,"912":0,"914":1,"915":1,"916":1,"917":1,"918":0,"919":1,"921":1,"923":0,"925":0,"926":1,"927":0,"932":0,"933":1,"940":0,"948":1},"8":{"7":1,"519":1,"8":0,"11":1,"15":0,"527":1,"20":1,"543":0,"545":1,"46":1,"47":1,"49":1,"53":1,"573":1,"574":1,"65":1,"577":1,"578":0,"579":1,"67":1,"76":1,"593":1,"83":1,"596":1,"85":1,"92":1,"607":1,"609":1,"98":1,"104":0,"621":0,"111":1,"122":1,"127":1,"645":0,"141":1,"654":1,"142":1,"145":0,"659":0,"666":1,"668":1,"670":1,"165":1,"170":1,"684":1,"685":1,"686":1,"177":1,"691":1,"694":1,"183":1,"697":0,"192":1,"708":0,"709":1,"202":1,"714":1,"203":0,"205":0,"721":1,"723":1,"729":1,"218":0,"732":1,"223":1,"736":1,"739":1,"228":0,"740":1,"743":1,"231":1,"236":0,"238":1,"239":1,"240":0,"754":0,"760":1,"761":1,"250":1,"763":1,"764":1,"255":1,"772":0,"261":0,"265":1,"266":1,"782":1,"276":1,"277":1,"789":1,"284":0,"802":1,"803":1,"805":1,"293":1,"807":1,"295":1,"297":1,"299":1,"813":1,"817":1,"823":1,"824":1,"825":1,"827":1,"828":0,"316":1,"829":1,"830":1,"321":1,"836":1,"837":0,"838":0,"841":1,"843":1,"847":1,"335":1,"337":1,"851":0,"343":1,"859":1,"349":1,"863":1,"354":0,"868":1,"360":1,"875":1,"876":0,"878":0,"371":1,"883":1,"884":0,"889":1,"381":0,"894":1,"896":1,"897":1,"905":0,"394":1,"908":1,"910":1,"914":1,"916":1,"918":0,"921":1,"926":1,"927":0,"933":1,"429":1,"436":1,"462":1,"468":1,"482":1,"505":1},"9":{"7":1,"519":1,"8":1,"11":1,"527":1,"528":1,"20":1,"23":0,"28":1,"541":1,"31":1,"545":1,"550":1,"47":1,"559":1,"48":1,"49":1,"51":1,"60":1,"573":1,"574":1,"577":1,"65":1,"579":1,"68":1,"580":1,"71":0,"72":1,"76":1,"593":1,"85":1,"598":0,"92":1,"607":1,"609":1,"98":1,"610":0,"621":0,"624":1,"120":1,"645":1,"134":1,"136":1,"137":1,"650":1,"141":1,"654":1,"142":1,"655":1,"145":0,"659":0,"152":1,"665":1,"668":1,"158":1,"670":1,"162":1,"163":1,"675":1,"167":1,"170":1,"179":1,"691":1,"694":1,"183":1,"192":1,"709":1,"200":1,"714":1,"203":0,"205":0,"722":1,"728":1,"729":1,"217":1,"218":0,"739":1,"743":1,"234":1,"238":0,"239":1,"753":1,"755":1,"760":1,"761":1,"250":1,"763":1,"764":1,"252":1,"767":0,"256":0,"263":0,"265":0,"266":1,"785":1,"274":1,"789":1,"277":1,"790":0,"284":0,"289":1,"802":1,"803":1,"804":1,"805":1,"807":1,"295":1,"298":1,"299":1,"812":0,"813":1,"303":1,"817":1,"310":1,"823":1,"825":1,"828":0,"316":1,"829":1,"830":1,"840":1,"847":1,"335":1,"336":0,"337":1,"343":1,"856":1,"859":1,"349":1,"863":1,"868":1,"359":1,"360":1,"875":1,"879":1,"882":0,"371":1,"884":0,"894":1,"895":1,"896":1,"903":1,"905":0,"394":1,"908":1,"909":1,"917":1,"918":0,"921":1,"926":1,"932":0,"429":1,"439":1,"447":1,"458":1,"462":1,"468":1,"482":1,"502":1},"10":{"7":1,"11":1,"20":1,"21":1,"23":0,"28":1,"31":1,"32":1,"36":0,"41":1,"46":0,"47":1,"48":1,"49":1,"50":0,"51":1,"52":1,"53":1,"60":1,"63":0,"65":1,"67":1,"68":1,"71":0,"72":1,"76":1,"79":1,"85":1,"86":0,"88":1,"98":1,"102":1,"120":1,"126":1,"127":0,"134":1,"136":1,"137":1,"142":0,"144":1,"145":0,"158":1,"162":1,"163":1,"165":1,"170":1,"177":1,"183":1,"192":1,"200":1,"202":1,"203":0,"205":0,"209":1,"217":1,"218":0,"228":0,"231":1,"234":0,"238":0,"239":1,"240":0,"250":1,"251":0,"252":1,"253":1,"256":0,"263":0,"265":0,"277":0,"278":1,"280":1,"285":1,"289":1,"290":1,"293":1,"295":1,"297":1,"298":1,"299":1,"310":1,"316":1,"319":0,"321":1,"337":1,"343":1,"349":1,"354":0,"371":1,"373":0,"377":1,"394":1,"429":1,"431":0,"436":1,"440":1,"447":1,"458":1,"468":1,"475":0,"482":1,"484":0,"493":1,"502":1,"511":0,"519":1,"527":1,"528":1,"541":1,"545":0,"550":1,"559":1,"573":1,"574":1,"579":1,"580":1,"593":1,"607":1,"609":1,"610":0,"621":0,"630":1,"645":1,"647":1,"650":1,"654":1,"656":1,"664":0,"665":1,"667":1,"668":1,"670":1,"676":0,"678":0,"684":1,"686":1,"691":1,"694":1,"699":0,"709":1,"711":1,"720":1,"728":1,"729":1,"736":1,"739":1,"740":1,"743":1,"744":0,"749":1,"753":1,"754":0,"755":1,"757":1,"760":1,"762":1,"763":1,"764":1,"772":0,"781":1,"789":1,"790":0,"792":1,"802":1,"803":1,"804":1,"805":1,"806":0,"807":1,"812":1,"813":1,"814":1,"817":1,"818":1,"824":1,"825":1,"828":0,"830":1,"836":0,"838":0,"839":0,"840":1,"841":1,"846":1,"847":1,"851":0,"856":1,"857":1,"859":1,"860":1,"862":0,"867":1,"875":1,"879":1,"882":1,"884":0,"885":1,"894":1,"895":1,"897":1,"898":1,"905":0,"908":1,"909":1,"910":1,"915":1,"916":1,"918":0,"919":1,"921":1,"926":1,"933":1,"948":1}}},"ScrollAcceptAllCookies":false,"OnClickAcceptAllCookies":false,"NextPageAcceptAllCookies":false,"Flat":true,"FloatingFlat":false,"FloatingRoundedCorner":false,"FloatingRoundedIcon":false,"FloatingRounded":false,"CenterRounded":false,"Center":true,"Panel":false,"Popup":false,"List":false,"Tab":false,"ChoicesBanner":false,"NoBanner":false,"BannerIABPartnersLink":"Lista de parceiros (fornecedores)","BannerPurposeTitle":"","BannerPurposeDescription":"","BannerFeatureTitle":"","BannerFeatureDescription":"","BannerInformationTitle":"","BannerInformationDescription":"","BannerShowRejectAllButton":false,"BannerRejectAllButtonText":"","PCenterShowRejectAllButton":true,"PCenterRejectAllButtonText":"Rejeitar todos","BannerSettingsButtonDisplayLink":false,"BannerDPDTitle":"Nós e os nossos parceiros tratamos os dados para fornecermos:","BannerDPDDescription":["Utilizar dados de geolocalização precisos. Procurar ativamente as características do dispositivo para identificação. Compreender os públicos através de estatísticas ou combinações de dados de diferentes fontes. Criar perfis para personalizar conteúdos. Desenvolver e melhorar serviços. Medir o desempenho da publicidade. Utilizar dados limitados para selecionar conteúdos. Medir o desempenho dos conteúdos. Utilizar perfis para selecionar conteúdos personalizados. Criar perfis para publicidade personalizada. Utilizar dados limitados para selecionar publicidade. Utilizar perfis para selecionar publicidade personalizada. Armazenar e/ou aceder a informações num dispositivo. "],"BannerDPDDescriptionFormat":"TEXT","PCFirstPartyCookieListText":"Cookies originais","PCViewCookiesText":"Ver cookies","PCenterBackText":"Retroceder","PCenterVendorsListText":"Lista de fornecedores","PCenterViewPrivacyPolicyText":"Ver política de privacidade","PCenterClearFiltersText":"Limpar filtros","PCenterApplyFiltersText":"Aplicar","PCenterAllowAllConsentText":"Permitir todo o consentimento","PCenterCookiesListText":"Lista de cookies","PCenterCancelFiltersText":"Cancelar","PCenterEnableAccordion":true,"IabType":"IAB2V2","AdvancedAnalyticsCategory":"C0001","PCGrpDescType":"user_friendly","PCGrpDescLinkPosition":"bottom","PCVendorFullLegalText":"Ver ilustrações","LegIntSettings":{"PShowLegIntBtn":true,"PObjectLegIntText":"Opor-se a Interesses Legítimos","PObjectionAppliedText":"Oposição Aplicada","PRemoveObjectionText":"Remover oposição","PAllowLI":false},"PCAccordionStyle":"Plusminus","PCShowConsentLabels":false,"PCActiveText":"Ativos","PCInactiveText":"Inativos","BannerAdditionalDescription":"","BannerAdditionalDescPlacement":"AfterDescription","PCenterSelectAllVendorsText":"Selecionar todos os fornecedores","PCenterFilterText":"Filtrar","ReconsentFrequencyDays":365,"UseGoogleVendors":true,"PCIABVendorsText":"Fornecedores IAB","PCIllusText":"Ilustrações","PCGoogleVendorsText":"Fornecedores do Google","PCTemplateUpgrade":true,"PCShowPersistentCookiesHoverButton":false,"PCenterDynamicRenderingEnable":false,"GlobalRestrictionEnabled":false,"GlobalRestrictions":{},"PCenterUseGeneralVendorsToggle":true,"PCenterGeneralVendorsText":"Outros fornecedores","PCenterAllowVendorOptout":false,"PCenterGeneralVendorThirdPartyCookiesText":"Informação sobre o fornecedor","GeneralVendors":[],"BannerNonIABVendorListText":"","PCenterVendorListLifespan":"Ciclo de vida","PCenterVendorListDisclosure":"Divulgação de armazenamento no dispositivo","PCenterVendorListNonCookieUsage":"Este fornecedor utiliza outros métodos de armazenamento ou acesso à informação, para além de cookies","PCenterVendorListDescText":"","PCenterVendorListStorageIdentifier":"Identificador","PCenterVendorListStorageType":"Tipo","PCenterVendorListStoragePurposes":"Finalidades","PCenterVendorListStorageDomain":"Domínio","PCVLSDomainsUsed":"Domínios utilizados","PCVLSUse":"Utilizar","PCenterVendorListLifespanDay":"Dia","PCenterVendorListLifespanDays":"Dias","PCenterVendorListLifespanMonth":"Mês","PCenterVendorListLifespanMonths":"Meses","PCLifeSpanYr":"Ano","PCLifeSpanYrs":"Anos","PCLifeSpanSecs":"Alguns segundos","PCLifeSpanWk":"Semana","PCLifeSpanWks":"Semanas","PCCookiePolicyText":"Ver política de privacidade","BShowSaveBtn":true,"BSaveBtnText":"Guardar escolhas","CookieFirstPartyText":"Próprio","CookieThirdPartyText":"Terceiro","PCCookiePolicyLinkScreenReader":"Mais informação sobre a sua privacidade, abre num separador novo","PCLogoScreenReader":"Logótipo da empresa","BnrLogoAria":"Logótipo da empresa","PublisherCC":"DE","BCloseButtonType":"Icon","BContinueText":"Continue sem aceitar","PCCloseButtonType":"Icon","PCContinueText":"Continue sem aceitar","BannerFocus":false,"BRejectConsentType":"ObjectToLI","BannerRelativeFontSizesToggle":false,"PCAllowToggleLbl":"Permitir","GCEnable":false,"GCAnalyticsStorage":"C0002","GCAdStorage":"C0004","GCAdUserData":"","GCAdPersonalization":"","GCRedactEnable":false,"GCWaitTime":0,"GCFunctionalityStorage":"DNAC","GCPersonalizationStorage":"DNAC","GCSecurityStorage":"DNAC","PCGeneralVendorsPolicyText":"Ver política de privacidade","PCIABVendorLegIntClaimText":"Mostrar reivindicação de interesse legítimo","PCOpensCookiesDetailsAlert":"O botão Detalhes de Cookies abre o menu Lista de Cookies","PCOpensVendorDetailsAlert":"O botão Detalhes de fornecedor IAB abre o menu Lista de Fornecedores","AriaOpenPreferences":"Abrir preferências","AriaClosePreferences":"Fechar preferências","AriaPrivacy":"Privacidade","AriaDescribedBy":"Processing is required, choice is always enabled.","BCookiePolicyLinkScreenReader":"Mais informação sobre a sua privacidade","BNoCursorFocus":false,"BShowPolicyLink":false,"PCenterVendorListSearch":"Pesquisar...","PCenterCookieListSearch":"Pesquisar...","PCenterLegitInterestText":"Interesse legítimo","PCenterLegIntColumnHeader":"Interesse legítimo","PCenterConsentText":"Consentimento","PCenterVendorListFilterAria":"Ícone de filtro","PCenterCookieListFilterAria":"Ícone de filtro","BInitialFocus":false,"BInitialFocusLinkAndButton":true,"NewVendorsInactiveEnabled":true,"PCenterFilterAppliedAria":"Aplicado","PCenterFilterClearedAria":"Filtros limpos","PCenterVendorListScreenReader":"O botão Detalhes de fornecedores abre o menu Lista de fornecedores","PCenterCookieSearchAriaLabel":"Pesquisa de lista de cookies","PCenterVendorSearchAriaLabel":"Pesquisa da lista de fornecedores","PCenterVendorListTitle":null,"PCenterVendorListLinkText":"","PCenterVendorListLinkAriaLabel":"","IsShowAlwaysActiveText":true,"PCenterUserIdTitleText":"","PCenterUserIdDescriptionText":"","PCenterUserIdTimestampTitleText":"","PCenterUserIdNotYetConsentedText":"","BImprintLinkScreenReader":"Informação jurídica","BShowImprintLink":false,"PCenterImprintLinkScreenReader":"","PCenterImprintLinkText":"","PCenterImprintLinkUrl":"","PCCategoryStyle":"Toggle","PCVSEnable":false,"PCVSOptOut":false,"PCVSCategoryView":false,"PCVSExpandCategory":false,"PCVSExpandGroup":false,"PCVSListTitle":null,"PCVSNameText":null,"PCVSParentCompanyText":null,"PCVSAddressText":null,"PCVSDefaultCategoryText":null,"PCVSDefaultDescriptionText":null,"PCVSDPOEmailText":null,"PCVSDPOLinkText":null,"PCVSPrivacyPolicyLinkText":null,"PCVSCookiePolicyLinkText":null,"PCVSOptOutLinkText":null,"PCVSLegalBasisText":null,"PCVSAllowAllText":null,"BShowOptOutSignal":false,"BOptOutSignalText":"","PCShowOptOutSignal":false,"PCOptOutSignalText":"","PCHostNotFound":"não correspondeu a nenhum anfitrião","PCVendorNotFound":"não correspondeu a nenhum fornecedor","PCTechNotFound":"não correspondeu a nenhuma tecnologia","PCTrackingTechTitle":"Technology List","PCTechDetailsText":"Technologies List","PCTechDetailsAriaLabel":"Technologies List button opens Tracking Tech list menu","PCShowTrackingTech":false,"PCCookiesLabel":"Cookies","PCLocalStorageLabel":"Local Storage[s]","PCSessionStorageLabel":"Session Storage[s]","PCLocalStorageDurationText":"Permanent","PCSessionStorageDurationText":"Sessão","BRegionAriaLabel":"Cookie banner","PCRegionAriaLabel":"Preference center","IsGPPEnabled":false,"IsGPPKnownChildApplicable":false,"IsGPPDataProcessingApplicable":false,"GPPPurposes":{"SaleOptOutCID":"","SharingOptOutCID":"","PersonalDataCID":"","KnownChildSellPICID":"","KnownChildProcessCID":"","KnownChildSharePICID":"","SensitivePICID":"","TargetedAdvertisingOptOutCID":"","SensitiveSICID":"","GeolocationCID":"","RREPInfoCID":"","CommunicationCID":"","GeneticCID":"","BiometricCID":"","HealthCID":"","SexualOrientationCID":"","RaceCID":"","ReligionCID":"","ImmigrationCID":"","PDCAboveAgeCID":"","PDCBelowAgeCID":"","UnionMembershipCID":""},"IsMSPAEnabled":false,"MSPAOptionMode":"","UseGPPUSNational":false,"PCVListDataDeclarationText":"Declaração de dados","PCVListDataRetentionText":"Retenção de dados","PCVListStdRetentionText":"Retenção padrão","PCVendorsCountText":"[VENDOR_NUMBER] os fornecedores podem usar esta finalidade","IABDataCategories":[{"Id":7,"Name":"User-provided data","Description":"The information you may have provided by way of declaration via a form (e.g. feedback, a comment) or when creating an account (e.g. your age, your occupation).","CustomGroupId":"IAB2V2DC_7"},{"Id":6,"Name":"Browsing and interaction data","Description":"Your online activity such as the websites you visit, apps you are using, the content you search for on this service,  or your interactions with content or ads, such as the number of times you have seen a specific content or ad or whether you clicked on it.","CustomGroupId":"IAB2V2DC_6"},{"Id":8,"Name":"Non-precise location data","Description":"An approximation of your location, expressed as an area with a radius of at least 500 meters. Your approximate location can be deduced from e.g. the IP address of your connection.","CustomGroupId":"IAB2V2DC_8"},{"Id":1,"Name":"IP addresses","Description":"Your IP address is a number assigned by your Internet Service Provider to any Internet connection. It is not always specific to your device and is not always a stable identifier.It is used to route information on the Internet and display online content (including ads) on your connected device.","CustomGroupId":"IAB2V2DC_1"},{"Id":4,"Name":"Probabilistic identifiers","Description":"A probabilistic identifier can be created by combining characteristics associated with your device (the type of browser or operating system used) and the IP address of the Internet connection. If you give your agreement, additional characteristics (e.g. the installed font or screen resolution) can also be combined to improve precision of the probabilistic identifier.Such an identifier is considered probabilistic because several devices can share the same characteristics and Internet connection. It may be used to recognise your device across e.g. web pages from the same site or across multiple sites or apps.","CustomGroupId":"IAB2V2DC_4"},{"Id":11,"Name":"Privacy choices","Description":"Your preferences regarding the processing of your data, based on the information you have received.","CustomGroupId":"IAB2V2DC_11"},{"Id":10,"Name":"Users’ profiles","Description":"Certain characteristics (e.g. your possible interests, your purchase intentions, your consumer profile) may be inferred or modeled from your previous online activity (e.g. the content you viewed or the service you used, your time spent on various online content and services) or the information you have provided (e.g. your age, your occupation).","CustomGroupId":"IAB2V2DC_10"},{"Id":2,"Name":"Device characteristics","Description":"Technical characteristics about the device you are using that are not unique to you, such as the language, the time zone or the operating system.","CustomGroupId":"IAB2V2DC_2"},{"Id":3,"Name":"Device identifiers","Description":"A device identifier is a unique string of characters assigned to your device or browser by means of a cookie or other storage technologies. It may be created or accessed to recognise your device e.g. across web pages from the same site or across multiple sites or apps.","CustomGroupId":"IAB2V2DC_3"},{"Id":9,"Name":"Precise location data","Description":"Your precise location within a radius of less than 500 meters based on your GPS coordinates. It may be used only with your acceptance.","CustomGroupId":"IAB2V2DC_9"},{"Id":5,"Name":"Authentication-derived identifiers","Description":"Where an identifier is created on the basis of authentication data, such as contact details associated with online accounts you have created on websites or apps (e.g. e-mail address, phone number) or customer identifiers (e.g. identifier provided by your telecom operator), that identifier may be used to recognise you across websites, apps and devices when you are logged-in with the same contact details.","CustomGroupId":"IAB2V2DC_5"}],"IABGroupsPrefixData":{"purpose":"IAB2V2","specialPurpose":"ISP2V2","feature":"IFE2V2","specialFeature":"ISF2V2","stack":"V2STACK"},"UseNonStandardStacks":true},"CommonData":{"pcenterContinueWoAcceptLinkColor":"#696969","IabThirdPartyCookieUrl":"cookies.onetrust.mgr.consensu.org","OptanonHideAcceptButton":"","OptanonStyle":"modern","OptanonStaticContentLocation":"","BannerCustomCSS":"#onetrust-pc-sdk .switch-checkbox:checked+.ot-switch-label .ot-switch-nob {\nbackground-color: #002f34;\nborder-color: #002f34;\n}\n\n#onetrust-pc-sdk .switch-checkbox:checked+.ot-switch-label {\nborder: 1px solid #002f34;\n}\n\n#onetrust-pc-sdk .ot-switch-inner:before {\nbackground-color: #ECEEEF;\n}\n#onetrust-consent-sdk #ot-sdk-btn-floating.ot-floating-button {\n display: none !important;\n}","PCCustomCSS":"#onetrust-pc-sdk .switch-checkbox:checked+.ot-switch-label .ot-switch-nob {\nbackground-color: #002f34;\nborder-color: #002f34;\n}\n\n#onetrust-pc-sdk .switch-checkbox:checked+.ot-switch-label {\nborder: 1px solid #002f34;\n}\n\n#onetrust-pc-sdk .ot-switch-inner:before {\nbackground-color: #ECEEEF;\n}","PcTextColor":"#002f34","PcButtonColor":"#002f34","PcButtonTextColor":"#FFFFFF","PcBackgroundColor":"#FFFFFF","PcMenuColor":"#F4F4F4","PcMenuHighLightColor":"#FFFFFF","PcAccordionBackgroundColor":"#F8F8F8","PCenterExpandToViewText":"","PcEnableToggles":false,"PcLinksTextColor":"#002f34","TextColor":"#002F34","ButtonColor":"#002F34","BannerMPButtonColor":"#FFFFFF","BannerMPButtonTextColor":"#002F34","ButtonTextColor":"#FFFFFF","BackgroundColor":"#FFFFFF","BannerLinksTextColor":"#002F34","BannerAccordionBackgroundColor":"#E9E9E9","CookiePersistentLogo":"https://cdn.cookielaw.org/logos/static/ot_persistent_cookie_icon.png","OptanonLogo":"https://cdn.cookielaw.org/logos/static/ot_company_logo.png","BnrLogo":"","OneTrustFooterLogo":"https://cdn.cookielaw.org/logos/static/powered_by_logo.svg","OptanonCookieDomain":"olx.pt","OptanonGroupIdPerformanceCookies":"C0002","OptanonGroupIdFunctionalityCookies":"C0003","OptanonGroupIdTargetingCookies":"C0004","OptanonGroupIdSocialCookies":"C0005","ShowSubGroupCookies":false,"LegacyBannerLayout":"default_flat_bottom_two_button_black","OptanonHideCookieSettingButton":"","UseRTL":false,"ShowBannerAcceptButton":true,"ShowBannerCookieSettings":true,"ShowCookieList":true,"PCShowCookieHost":true,"PCShowCookieDuration":true,"PCShowCookieType":true,"PCShowCookieCategory":true,"PCShowCookieDescription":true,"AllowHostOptOut":false,"CookieListTitleColor":"#696969","CookieListGroupNameColor":"#696969","CookieListTableHeaderColor":"#696969","CookieListTableHeaderBackgroundColor":"#F8F8F8","CookiesV2NewCookiePolicy":true,"CookieListPrimaryColor":"#696969","CookieListCustomCss":"","TTLGroupByTech":false,"TTLShowTechDesc":false,"ConsentIntegration":{"ConsentApi":"https://privacyportal-de.onetrust.com/request/v1/consentreceipts","RequestInformation":"eyJhbGciOiJSUzUxMiJ9.eyJvdEp3dFZlcnNpb24iOjEsInByb2Nlc3NJZCI6Ijg1NzZiMWY1LWNiMzUtNDI4OS1iNjljLWEzYTRlN2E2ZjM3NyIsInByb2Nlc3NWZXJzaW9uIjozLCJpYXQiOiIyMDIzLTEyLTEyVDA4OjEwOjA0LjIxNyIsIm1vYyI6IkNPT0tJRSIsInBvbGljeV91cmkiOiJvbHgucHQiLCJzdWIiOiJDb29raWUgVW5pcXVlIElkIiwiaXNzIjpudWxsLCJ0ZW5hbnRJZCI6ImU5NjJlYzM0LTA3OTUtNGFlZC04NDEwLWVhYTk1ZGMyZTYxNSIsImRlc2NyaXB0aW9uIjoiVGhpcyBjb2xsZWN0aW9uIHBvaW50IGNhcHR1cmVzIHRoZSBjdXJyZW50IHNpdGUgdmlzaXRvciBjb25zZW50IHByZWZlcmVuY2VzIGZvciB0aGUgZG9tYWluOiBvbHgucHQtZW4gc3BlY2lmaWVkLiIsImNvbnNlbnRUeXBlIjoiQ09PS0lFQkFOTkVSIiwiYWxsb3dOb3RHaXZlbkNvbnNlbnRzIjpmYWxzZSwiZG91YmxlT3B0SW4iOmZhbHNlLCJwdXJwb3NlcyI6W3siaWQiOiI3MTc5YjU1MS1kZjNmLTQzMTUtYTk5Zi1lNzk4NmFkNjNkYWEiLCJ2ZXJzaW9uIjoxLCJwYXJlbnRJZCI6bnVsbCwidG9waWNzIjpbXSwiY3VzdG9tUHJlZmVyZW5jZXMiOltdLCJlbmFibGVHZW9sb2NhdGlvbiI6ZmFsc2V9LHsiaWQiOiJkMDc1OGFiNi1kMDAxLTRlNGItYmU0Ny05ZGRlZGYyNmVlOTQiLCJ2ZXJzaW9uIjoxLCJwYXJlbnRJZCI6bnVsbCwidG9waWNzIjpbXSwiY3VzdG9tUHJlZmVyZW5jZXMiOltdLCJlbmFibGVHZW9sb2NhdGlvbiI6ZmFsc2V9LHsiaWQiOiJlODA0NGNmZi1jNjBlLTQ1MTMtOWYwNC04NzAzMWFiMjhlNzYiLCJ2ZXJzaW9uIjoxLCJwYXJlbnRJZCI6bnVsbCwidG9waWNzIjpbXSwiY3VzdG9tUHJlZmVyZW5jZXMiOltdLCJlbmFibGVHZW9sb2NhdGlvbiI6ZmFsc2V9LHsiaWQiOiJjYTA3OGIzMi1lY2I4LTQ3YjUtYjg1OC00NWFjM2JkYjExOTIiLCJ2ZXJzaW9uIjoxLCJwYXJlbnRJZCI6bnVsbCwidG9waWNzIjpbXSwiY3VzdG9tUHJlZmVyZW5jZXMiOltdLCJlbmFibGVHZW9sb2NhdGlvbiI6ZmFsc2V9LHsiaWQiOiJiOTAyNWM0NC1mMzAzLTQ3MjEtYjZiYS00ZDliYzViNzQ3ZjkiLCJ2ZXJzaW9uIjoxLCJwYXJlbnRJZCI6bnVsbCwidG9waWNzIjpbXSwiY3VzdG9tUHJlZmVyZW5jZXMiOltdLCJlbmFibGVHZW9sb2NhdGlvbiI6ZmFsc2V9LHsiaWQiOiJjYjNkNDNmYi04OTcxLTRlMjEtODUzMi0zZDM2ZmMxYWNiMDciLCJ2ZXJzaW9uIjoxLCJwYXJlbnRJZCI6bnVsbCwidG9waWNzIjpbXSwiY3VzdG9tUHJlZmVyZW5jZXMiOltdLCJlbmFibGVHZW9sb2NhdGlvbiI6ZmFsc2V9LHsiaWQiOiI2MWVlZWNmMC0xMWE4LTQ0MTgtODhjOC1mMzcxZjAwNWM0MzEiLCJ2ZXJzaW9uIjoxLCJwYXJlbnRJZCI6bnVsbCwidG9waWNzIjpbXSwiY3VzdG9tUHJlZmVyZW5jZXMiOltdLCJlbmFibGVHZW9sb2NhdGlvbiI6ZmFsc2V9LHsiaWQiOiJlYjU3NGNlYy1iNGE4LTRiYzctODE0Ni1kZGY0MWM5NDYzNmEiLCJ2ZXJzaW9uIjoxLCJwYXJlbnRJZCI6bnVsbCwidG9waWNzIjpbXSwiY3VzdG9tUHJlZmVyZW5jZXMiOltdLCJlbmFibGVHZW9sb2NhdGlvbiI6ZmFsc2V9LHsiaWQiOiI2NzFlOWUyMS1kNmQ2LTQzMWEtOGRjYS04ZjAyYTE4ZWRlNmMiLCJ2ZXJzaW9uIjoxLCJwYXJlbnRJZCI6bnVsbCwidG9waWNzIjpbXSwiY3VzdG9tUHJlZmVyZW5jZXMiOltdLCJlbmFibGVHZW9sb2NhdGlvbiI6ZmFsc2V9LHsiaWQiOiI5M2JlODkwYi02MDYzLTQ2ZjUtOTY4Zi04MmU5MDA0NjA4ZWUiLCJ2ZXJzaW9uIjoxLCJwYXJlbnRJZCI6bnVsbCwidG9waWNzIjpbXSwiY3VzdG9tUHJlZmVyZW5jZXMiOltdLCJlbmFibGVHZW9sb2NhdGlvbiI6ZmFsc2V9LHsiaWQiOiJiNzkyNGVlMC04M2JkLTQzZDItOTZhNy1mNGQyYTVlN2Y1ZjEiLCJ2ZXJzaW9uIjoxLCJwYXJlbnRJZCI6bnVsbCwidG9waWNzIjpbXSwiY3VzdG9tUHJlZmVyZW5jZXMiOltdLCJlbmFibGVHZW9sb2NhdGlvbiI6ZmFsc2V9LHsiaWQiOiIzMjg0ODc2Ni1iNmY3LTRhYzMtOTVhNS04ZjI5NjI4OTcxNjciLCJ2ZXJzaW9uIjoxLCJwYXJlbnRJZCI6bnVsbCwidG9waWNzIjpbXSwiY3VzdG9tUHJlZmVyZW5jZXMiOltdLCJlbmFibGVHZW9sb2NhdGlvbiI6ZmFsc2V9LHsiaWQiOiJjY2U3YjgxNC0zMzQ4LTQyYjUtYmZlZi0xNGZiMzg1MTQzZWYiLCJ2ZXJzaW9uIjoxLCJwYXJlbnRJZCI6bnVsbCwidG9waWNzIjpbXSwiY3VzdG9tUHJlZmVyZW5jZXMiOltdLCJlbmFibGVHZW9sb2NhdGlvbiI6ZmFsc2V9LHsiaWQiOiJiM2IxZGQxZS1iMDIxLTQxYTEtYjVhNy1iY2MyN2IzZGRjMzkiLCJ2ZXJzaW9uIjoxLCJwYXJlbnRJZCI6bnVsbCwidG9waWNzIjpbXSwiY3VzdG9tUHJlZmVyZW5jZXMiOltdLCJlbmFibGVHZW9sb2NhdGlvbiI6ZmFsc2V9LHsiaWQiOiI0OTBjZTY1YS00YjQ3LTRiNzQtODFhYi1lNWRlYWJhNTBlNWIiLCJ2ZXJzaW9uIjoxLCJwYXJlbnRJZCI6bnVsbCwidG9waWNzIjpbXSwiY3VzdG9tUHJlZmVyZW5jZXMiOltdLCJlbmFibGVHZW9sb2NhdGlvbiI6ZmFsc2V9LHsiaWQiOiI1YmQwZTQ4OC02NDM3LTQ5ZTgtYTM4Ny0xN2EyMjk1NjZmMDgiLCJ2ZXJzaW9uIjoxLCJwYXJlbnRJZCI6bnVsbCwidG9waWNzIjpbXSwiY3VzdG9tUHJlZmVyZW5jZXMiOltdLCJlbmFibGVHZW9sb2NhdGlvbiI6ZmFsc2V9LHsiaWQiOiJmNGQ1ODgzYi04OWM1LTQ4OGItODZlMS0xYWY0OGM1NTRiNDAiLCJ2ZXJzaW9uIjoxLCJwYXJlbnRJZCI6bnVsbCwidG9waWNzIjpbXSwiY3VzdG9tUHJlZmVyZW5jZXMiOltdLCJlbmFibGVHZW9sb2NhdGlvbiI6ZmFsc2V9LHsiaWQiOiJlMDY2NTUyOS1iZDlmLTRmOGQtOTgxMC0wYjdhMGEyYmMzYmQiLCJ2ZXJzaW9uIjoxLCJwYXJlbnRJZCI6bnVsbCwidG9waWNzIjpbXSwiY3VzdG9tUHJlZmVyZW5jZXMiOltdLCJlbmFibGVHZW9sb2NhdGlvbiI6ZmFsc2V9LHsiaWQiOiIyNzgyYjNjYy1mNWQzLTQ0YzQtOTcyMy04YzA2NmQxZTAyNjQiLCJ2ZXJzaW9uIjoxLCJwYXJlbnRJZCI6bnVsbCwidG9waWNzIjpbXSwiY3VzdG9tUHJlZmVyZW5jZXMiOltdLCJlbmFibGVHZW9sb2NhdGlvbiI6ZmFsc2V9LHsiaWQiOiI3NTUwMDRhMi1kYTU3LTRhMTYtODBjYy03Y2JkMGI4NmQ1ODIiLCJ2ZXJzaW9uIjoxLCJwYXJlbnRJZCI6bnVsbCwidG9waWNzIjpbXSwiY3VzdG9tUHJlZmVyZW5jZXMiOltdLCJlbmFibGVHZW9sb2NhdGlvbiI6ZmFsc2V9LHsiaWQiOiI1YjVlYTg2ZS1lZDg4LTQ0NTItYTE4ZS0xOGU4NWQ0ZGIyMzMiLCJ2ZXJzaW9uIjoxLCJwYXJlbnRJZCI6bnVsbCwidG9waWNzIjpbXSwiY3VzdG9tUHJlZmVyZW5jZXMiOltdLCJlbmFibGVHZW9sb2NhdGlvbiI6ZmFsc2V9LHsiaWQiOiJkNGM4ZDU0Ny05ZmY5LTRmYTgtYWJlZS02MTVmODM0OGFlNTgiLCJ2ZXJzaW9uIjoxLCJwYXJlbnRJZCI6bnVsbCwidG9waWNzIjpbXSwiY3VzdG9tUHJlZmVyZW5jZXMiOltdLCJlbmFibGVHZW9sb2NhdGlvbiI6ZmFsc2V9LHsiaWQiOiIwMGY1MDdkYS02NTg5LTRkYzgtODMwYi02NjYwZTkzNzhjMjYiLCJ2ZXJzaW9uIjoxLCJwYXJlbnRJZCI6bnVsbCwidG9waWNzIjpbXSwiY3VzdG9tUHJlZmVyZW5jZXMiOltdLCJlbmFibGVHZW9sb2NhdGlvbiI6ZmFsc2V9LHsiaWQiOiJkNTBmNWIyZS04YjhhLTRkZmQtYmJkYi1iMDQ1ZWYwMThlNDEiLCJ2ZXJzaW9uIjoxLCJwYXJlbnRJZCI6bnVsbCwidG9waWNzIjpbXSwiY3VzdG9tUHJlZmVyZW5jZXMiOltdLCJlbmFibGVHZW9sb2NhdGlvbiI6ZmFsc2V9LHsiaWQiOiIyYjViNTk5My0xMjY1LTQwYmMtYjIzZS1hN2Q0OTc1MjdkZGEiLCJ2ZXJzaW9uIjoxLCJwYXJlbnRJZCI6bnVsbCwidG9waWNzIjpbXSwiY3VzdG9tUHJlZmVyZW5jZXMiOltdLCJlbmFibGVHZW9sb2NhdGlvbiI6ZmFsc2V9LHsiaWQiOiIyYzExYWM3OC0wMmRmLTQxZTQtODE3Yi1mYjRmN2JhMDMxODciLCJ2ZXJzaW9uIjoxLCJwYXJlbnRJZCI6bnVsbCwidG9waWNzIjpbXSwiY3VzdG9tUHJlZmVyZW5jZXMiOltdLCJlbmFibGVHZW9sb2NhdGlvbiI6ZmFsc2V9LHsiaWQiOiI2YjhjOWEwMi1lOGEzLTQzYjgtYTI2YS00ZDU1MTgyZWVhMGIiLCJ2ZXJzaW9uIjo4LCJwYXJlbnRJZCI6bnVsbCwidG9waWNzIjpbXSwiY3VzdG9tUHJlZmVyZW5jZXMiOltdLCJlbmFibGVHZW9sb2NhdGlvbiI6ZmFsc2V9LHsiaWQiOiIzZmI5ZjEwZS0wMGVkLTQ2YjgtYjgxMC1mNzJkY2Q2MjQyZjIiLCJ2ZXJzaW9uIjoxLCJwYXJlbnRJZCI6bnVsbCwidG9waWNzIjpbXSwiY3VzdG9tUHJlZmVyZW5jZXMiOltdLCJlbmFibGVHZW9sb2NhdGlvbiI6ZmFsc2V9LHsiaWQiOiI2OWRmYzkyNy0wMGQ5LTQyMTMtYTU2Yi05ZGQ3OWFlYTk0YzciLCJ2ZXJzaW9uIjoxLCJwYXJlbnRJZCI6bnVsbCwidG9waWNzIjpbXSwiY3VzdG9tUHJlZmVyZW5jZXMiOltdLCJlbmFibGVHZW9sb2NhdGlvbiI6ZmFsc2V9LHsiaWQiOiI4ODM5YmY4Mi0zYjQ3LTQ1MDctOTczMC1hNWFlMWI1ZDVmOTMiLCJ2ZXJzaW9uIjoxLCJwYXJlbnRJZCI6bnVsbCwidG9waWNzIjpbXSwiY3VzdG9tUHJlZmVyZW5jZXMiOltdLCJlbmFibGVHZW9sb2NhdGlvbiI6ZmFsc2V9LHsiaWQiOiIwNWJlNDdkYS1lNjM5LTQ4ZDctYjM3ZC02Njg4MmU5ODBjOGMiLCJ2ZXJzaW9uIjoxLCJwYXJlbnRJZCI6bnVsbCwidG9waWNzIjpbXSwiY3VzdG9tUHJlZmVyZW5jZXMiOltdLCJlbmFibGVHZW9sb2NhdGlvbiI6ZmFsc2V9LHsiaWQiOiJlYjMzZjIzZS1kMTc5LTRhNTMtODUyMC0wNGE2YTZlY2Y5NjIiLCJ2ZXJzaW9uIjoxLCJwYXJlbnRJZCI6bnVsbCwidG9waWNzIjpbXSwiY3VzdG9tUHJlZmVyZW5jZXMiOltdLCJlbmFibGVHZW9sb2NhdGlvbiI6ZmFsc2V9LHsiaWQiOiJiMzBkMzk0MS0zMzk0LTQyYWUtOGI4Yy0xOTI5Mzk4ODJmMDgiLCJ2ZXJzaW9uIjoxLCJwYXJlbnRJZCI6bnVsbCwidG9waWNzIjpbXSwiY3VzdG9tUHJlZmVyZW5jZXMiOltdLCJlbmFibGVHZW9sb2NhdGlvbiI6ZmFsc2V9LHsiaWQiOiJjYzAzNDFiZS1jODdhLTQ0MTAtYTE1OC1iNTA1ZDNiMGJjZjkiLCJ2ZXJzaW9uIjoyLCJwYXJlbnRJZCI6bnVsbCwidG9waWNzIjpbXSwiY3VzdG9tUHJlZmVyZW5jZXMiOltdLCJlbmFibGVHZW9sb2NhdGlvbiI6ZmFsc2V9LHsiaWQiOiIxMTM5M2I3My02YWY2LTRiYTItOTA3OC00NmU4ODdkZmU1ZTEiLCJ2ZXJzaW9uIjoxLCJwYXJlbnRJZCI6bnVsbCwidG9waWNzIjpbXSwiY3VzdG9tUHJlZmVyZW5jZXMiOltdLCJlbmFibGVHZW9sb2NhdGlvbiI6ZmFsc2V9LHsiaWQiOiIxZTQ2NGFmMy1kN2NhLTQ1ZWMtOTA4My1lNDI3NGZiOTZiNDUiLCJ2ZXJzaW9uIjoxLCJwYXJlbnRJZCI6bnVsbCwidG9waWNzIjpbXSwiY3VzdG9tUHJlZmVyZW5jZXMiOltdLCJlbmFibGVHZW9sb2NhdGlvbiI6ZmFsc2V9LHsiaWQiOiIyMjk2MzU3Yi0xNWNmLTRiOWMtOTEyZi1hOTQ4ODU3ZDY1ZTIiLCJ2ZXJzaW9uIjoxLCJwYXJlbnRJZCI6bnVsbCwidG9waWNzIjpbXSwiY3VzdG9tUHJlZmVyZW5jZXMiOltdLCJlbmFibGVHZW9sb2NhdGlvbiI6ZmFsc2V9LHsiaWQiOiI4MWQ1YmUzMy1kZDY0LTQ5NTktOWNmYi05MTE1ODhkMzJiNTQiLCJ2ZXJzaW9uIjoxLCJwYXJlbnRJZCI6bnVsbCwidG9waWNzIjpbXSwiY3VzdG9tUHJlZmVyZW5jZXMiOltdLCJlbmFibGVHZW9sb2NhdGlvbiI6ZmFsc2V9LHsiaWQiOiI1YTQxYTI0Yi00MWMzLTQ4YzQtYTNkYy1kOWJiOTEyNmI5MGEiLCJ2ZXJzaW9uIjo1LCJwYXJlbnRJZCI6bnVsbCwidG9waWNzIjpbXSwiY3VzdG9tUHJlZmVyZW5jZXMiOltdLCJlbmFibGVHZW9sb2NhdGlvbiI6ZmFsc2V9LHsiaWQiOiIzODkzOTc2MC1jODgxLTRiOWMtOWJhMi1jNzlmYTA4MzhmNTYiLCJ2ZXJzaW9uIjoxLCJwYXJlbnRJZCI6bnVsbCwidG9waWNzIjpbXSwiY3VzdG9tUHJlZmVyZW5jZXMiOltdLCJlbmFibGVHZW9sb2NhdGlvbiI6ZmFsc2V9LHsiaWQiOiJlYWRhMzU1MS03ZGQwLTQ3MGMtYTdiNC1iMGY4ODc0OTZhZDUiLCJ2ZXJzaW9uIjoxLCJwYXJlbnRJZCI6bnVsbCwidG9waWNzIjpbXSwiY3VzdG9tUHJlZmVyZW5jZXMiOltdLCJlbmFibGVHZW9sb2NhdGlvbiI6ZmFsc2V9LHsiaWQiOiIwMjg3NDRjMi1lOTVjLTQ1ZWYtYTk4YS01MzVkNTYwNWI4YTQiLCJ2ZXJzaW9uIjoxLCJwYXJlbnRJZCI6bnVsbCwidG9waWNzIjpbXSwiY3VzdG9tUHJlZmVyZW5jZXMiOltdLCJlbmFibGVHZW9sb2NhdGlvbiI6ZmFsc2V9LHsiaWQiOiI0NDM0ZTZiNC1lMGY4LTQzNjItYWYxMi05NmNhOTBmMTJhYzYiLCJ2ZXJzaW9uIjoxLCJwYXJlbnRJZCI6bnVsbCwidG9waWNzIjpbXSwiY3VzdG9tUHJlZmVyZW5jZXMiOltdLCJlbmFibGVHZW9sb2NhdGlvbiI6ZmFsc2V9LHsiaWQiOiIzYWFhMzk5Ny00MDM5LTQxYjktYjZkYy0zZDA3YTMyNTVhMjciLCJ2ZXJzaW9uIjo0LCJwYXJlbnRJZCI6bnVsbCwidG9waWNzIjpbXSwiY3VzdG9tUHJlZmVyZW5jZXMiOltdLCJlbmFibGVHZW9sb2NhdGlvbiI6ZmFsc2V9LHsiaWQiOiIxYjYyN2VkNS03ZmQ5LTQ5YjktODMzYy1iOGU5OThiOGVmNzEiLCJ2ZXJzaW9uIjo2LCJwYXJlbnRJZCI6bnVsbCwidG9waWNzIjpbXSwiY3VzdG9tUHJlZmVyZW5jZXMiOltdLCJlbmFibGVHZW9sb2NhdGlvbiI6ZmFsc2V9LHsiaWQiOiJiMTc5NDMyMi03ZDE0LTQyYWMtOTM4OC04OWIxMzI1MjZjNDQiLCJ2ZXJzaW9uIjoxLCJwYXJlbnRJZCI6bnVsbCwidG9waWNzIjpbXSwiY3VzdG9tUHJlZmVyZW5jZXMiOltdLCJlbmFibGVHZW9sb2NhdGlvbiI6ZmFsc2V9LHsiaWQiOiI0NmNhMTg2MC03MTg0LTQ2OWEtOGI2Yi1mOTdjZmFlMWJmODUiLCJ2ZXJzaW9uIjoxLCJwYXJlbnRJZCI6bnVsbCwidG9waWNzIjpbXSwiY3VzdG9tUHJlZmVyZW5jZXMiOltdLCJlbmFibGVHZW9sb2NhdGlvbiI6ZmFsc2V9LHsiaWQiOiIwODExYTIwNC03NmFiLTRjMWUtODY3Ni03MzY4MGI2YzE5ODQiLCJ2ZXJzaW9uIjoxLCJwYXJlbnRJZCI6bnVsbCwidG9waWNzIjpbXSwiY3VzdG9tUHJlZmVyZW5jZXMiOltdLCJlbmFibGVHZW9sb2NhdGlvbiI6ZmFsc2V9LHsiaWQiOiJhODhmZDRlMi1lNDc1LTQ5YTMtYmM0Ni1lN2FhYzRiYjc0MTAiLCJ2ZXJzaW9uIjoxLCJwYXJlbnRJZCI6bnVsbCwidG9waWNzIjpbXSwiY3VzdG9tUHJlZmVyZW5jZXMiOltdLCJlbmFibGVHZW9sb2NhdGlvbiI6ZmFsc2V9XSwibm90aWNlcyI6W10sImRzRGF0YUVsZW1lbnRzIjpbIlVzZXJBZ2VudCIsIkNvdW50cnkiLCJJbnRlcmFjdGlvblR5cGUiLCJDb25zZW50TW9kZWwiXSwiYXV0aGVudGljYXRpb25SZXF1aXJlZCI6ZmFsc2UsInJlY29uZmlybUFjdGl2ZVB1cnBvc2UiOmZhbHNlLCJvdmVycmlkZUFjdGl2ZVB1cnBvc2UiOnRydWUsImR5bmFtaWNDb2xsZWN0aW9uUG9pbnQiOmZhbHNlLCJhZGRpdGlvbmFsSWRlbnRpZmllcnMiOltdLCJtdWx0aXBsZUlkZW50aWZpZXJUeXBlcyI6ZmFsc2UsImVuYWJsZVBhcmVudFByaW1hcnlJZGVudGlmaWVycyI6ZmFsc2UsInBhcmVudFByaW1hcnlJZGVudGlmaWVyc1R5cGUiOm51bGwsImFkZGl0aW9uYWxQYXJlbnRJZGVudGlmaWVyVHlwZXMiOltdLCJlbmFibGVHZW9sb2NhdGlvbiI6ZmFsc2V9.aljxzrFDm_ulTYEsU5l3KKMlTKoiDvn4HD54guuq3Mh-V6hKIddAl3tSEr2U0K4Vc6SiImCtzOzvEkCipKMpLXLDA_lOItXy5uFZGZmt9-ZYqIkXMco1QCQrqTKNgfe8bYj9GnHo8uDU8LVCDWy0YcLjT2ZICbItrgXK4J1_4l_rQPlda5fHx8o-iDZOq-UpeY_IV1v6xivcBtFRab7xQaXGQxAftuHqg0sJG7ZRHSyUU_0FJgi7b-Dy_l2U6gn5mRaS9-JUEkA0QEXQfhzmh-atfN_WEJToWc_rEMtB7GM2InLLBdpKzdpZnxdszZgxeQ3UoemYc_ppBDdwtygN-Nh8nNLKcOrw1I7Ath_v89xgMki4O_h6dJ-QSi19HSj-V0fryss02Ri4TYojas_oKju01DlZjI6PLLyTqmSzyvT3ZxNmQMRLeyeP-500Ct-9fugewkuzaa7lon11IjcKMt5H-vhBlTBRHKG3UzxxOwtNkGjZ57e6RR05K3L3bHb2MWpNWNLN79o2-DDXOesZa9zUN7TepJyY_tBGcfx9IFxjQ4pxgNdK1v1fdOgl9H-inT3TXc_ZxJ78fWpbdEA77dBTqBtpYVdoAa0WOvDyJXyKjdtk3NpbVlw3_sE8_Z4rheJe4Rgfx0BOb0V2QdKdnAyEhja4ughscEeX237dntk","IdentifiedReceiptsAllowed":false,"DefaultIdentifier":"Cookie Unique Id"},"BConsentPurposesText":"Finalidades do consentimento","BFeaturesText":"Funcionalidades","BLegitimateInterestPurposesText":"Finalidades de interesse legítimo","BSpecialFeaturesText":"Funcionalidades especiais","BSpecialPurposesText":"Finalidades especiais","BConsentText":"Consentimento","BLegitInterestText":"Interesse legítimo","IabLegalTextUrl":"https://tcf.cookiepedia.co.uk/tcf2.html","PCCListName":"Nome","PCCListHost":"Anfitrião","PCCListDuration":"Duração","PCCListType":"Tipo","PCCListCategory":"Categoria","PCCListDescription":"Descrição","PCDialogClose":"[`diálogo encerrado`]","PcLegIntButtonColor":"#FFFFFF","PcLegIntButtonTextColor":"#78808E","BCategoryContainerColor":"#F9F9FC","BCategoryStyleColor":"#3860BE","BLineBreakColor":"#E9E9E9","BSaveBtnColor":"#346E4A","BCategoryStyle":"Checkbox","BAnimation":"Remove_Animation","BContinueColor":"#696969","PCContinueColor":"#696969","PCFooterLogoUrl":"https://www.onetrust.com/products/cookie-consent/","PCFooterCookieProLogoUrl":null,"BFocusBorderColor":"#000000","PCFocusBorderColor":"#000000","TemplateName":"Horizontals GDPR Template Desktop (TCF 2.2 Update)","GeoRuleGroupName":"EU Horizontals Geolocation Rule","GeoRuleName":"Global","OTCloseBtnLogo":"https://cdn.cookielaw.org/logos/static/ot_close.svg","OTExternalLinkLogo":"https://cdn.cookielaw.org/logos/static/ot_external_link.svg","OTGuardLogo":"https://cdn.cookielaw.org/logos/static/ot_guard_logo.svg"},"NtfyConfig":{"ShowNtfy":false,"NtfyDuration":5,"ShowCS":true,"CSType":"BUTTON","CSTxt":"Definições de cookies","Sync":{"Title":"Preferências de cookies","TitleAlign":"left","TitleColor":"#696969","Desc":"Sincronização em curso","DescAlign":"left","DescColor":"#696969","BgColor":"#FFFFFF","BdrColor":"#FFFFFF","IconBgColor":"#1276CE","ShowClose":true,"CloseAria":"Fechar","ShowIcon":true},"Complete":{"Title":"Preferências de cookies","TitleAlign":"left","TitleColor":"#696969","Desc":"Sincronizado","DescAlign":"left","DescColor":"#696969","BgColor":"#FFFFFF","BdrColor":"#FFFFFF","IconBgColor":"#6CC04A","ShowClose":true,"CloseAria":"Fechar","ShowIcon":true},"CSButton":{"Color":"#FFFFFF","BgColor":"#1276CE","BdrColor":"#1276CE","Align":"center"},"CSLink":{"Color":"#1276CE","Align":"center"}},"OTTData":null,"MobileData":null}