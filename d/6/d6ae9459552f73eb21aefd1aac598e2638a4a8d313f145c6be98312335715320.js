// $Id: ajax.js 36064 2023-03-28 09:06:27Z brendon $

function nodeValue (node, name) {
	var children = node.getElementsByTagName(name);
	if (children.length > 0 && children.item(0).childNodes.length > 0) {
		return children.item(0).childNodes.item(0).nodeValue;
	}
	return "";
}

// Generate a really basic uniqueID formed by the concatenation of a random number and the current timestamp
// (if you need a more robust universally unique ID, then have a look at the UUID class in 'vendor/uuid.js')
function generateUID () {
	var now = Date.parse(new Date());
	var randomNumber = Math.floor(Math.random() * 111)
	
	return randomNumber+''+now;  // ensure that a concatenated string is returned
}

// Loads the specified 'url'
function loadUrl (url) {
	if (url == null) {
		// just perform a page reload
		location.reload(true);
	} else {
		location.href = url;
	}
}

function outerHTML(element) {
	if (element) {
		var container = document.createElement("div");
		container.appendChild(element.cloneNode(true));
		return container.innerHTML;
	} else {
		return '';
	}
}

// Constructs and returns an anchor string
function buildAnchor (href, anchorText, titleText) {
	return "<a href=\""+href+"\""+(titleText != null && titleText.length > 0 ? "title=\""+titleText+"\"" : "")+" onclick=\"return ajaxRequest(this.href);\">"+anchorText+"</a>";
}

function rwdBuildAnchor (currPage, fromPage, href, anchorText, action, info) {
	if (currPage == "find_favourites") {
		if (info) {
			spanElement = "<span>"+anchorText+"</span>";
			titleText = "";
			svgIcon = (action == " active" ? "#icon_removePhotoInvite" : "#icon_photoInvite");
		} else {
			spanElement = "<span>"+anchorText+"</span>";
			titleText = "";
			svgIcon = (action == " active" ? "#icon_favourited" : "#icon_favourite");
		}		
		return "<a class=\""+(info ? "favouritesOnly" : "favourite")+action+"\" title=\""+titleText+"\" href=\""+href+"\" onclick=\"return ajaxRequest(this.href);\"><svg><use xlink:href=\""+svgIcon+"\" /></svg>"+spanElement+"</a>";
	} else if (currPage == "find_invites") {
		if (info) {
			spanElement = "<span>"+anchorText+"</span>";
			svgIcon = "#icon_photoInvite";		
			return "<a class=\"cancelInvite\" href=\""+href+"\" onclick=\"return ajaxRequest(this.href);\"><svg><use xlink:href=\""+svgIcon+"\" /></svg>"+spanElement+"</a>";
		}
		else {
			return "<a class=\"cancelInvite\" href=\""+href+"\" onclick=\"return ajaxRequest(this.href);\"><svg><use xlink:href=\""+(action == " active" ? "#icon_removePhotoInvite" : "#icon_photoInvite")+"\" /></svg><span>"+anchorText+"</span></a>";
		}
	} else if (currPage == "find_block") {
		return "<a class=\"blockReport\" href=\""+href+"\" onclick=\"return ajaxRequest(this.href);\">"+anchorText+"</a>";
	}
}

// Toggle classes on an element, update its contents and return it
function toggleElement (element, addClass, removeClass, updateContent) {
	if (typeof jQuery == 'undefined' && typeof element == 'string') {
		if (!document.getElementById) {
			return ;
		}
		element = document.getElementById(element);
	}
	
	if (typeof jQuery != 'undefined') {
		element = (typeof element == 'string') ? $('#' + element) : element;	

		if (addClass != null && addClass.length > 0) {
			element.addClass(addClass);
		}
		if (updateContent != null && updateContent.length > 0) {
			element.html(updateContent);
		}
		if (removeClass != null && removeClass.length > 0) {
			element.removeClass(removeClass);
		}
	}
		
	return element;
}

function rwdToggleElement (element, updateContent) {
	if (typeof jQuery == 'undefined' && typeof element == 'string') {
		if (!document.getElementById) {
			return ;
		}
		element = document.getElementById(element);
	}
	
	if (typeof jQuery != 'undefined') {
		element = (typeof element == 'string') ? $('#' + element) : element;

		if (updateContent != null && updateContent.length > 0) {
			element.replaceWith(updateContent);
		}
	}
	
	return element;
}

// Add to search page removed results array

// Remove from search page removed results array
function removeFromRemovedResults () {
	if (typeof removedResults != "undefined") {
		removedResults.pop();
	}
}

// Restore a profile result
function restoreResult (profileBox, m) {
	if (typeof jQuery != 'undefined') {
		if (typeof results != 'undefined' && typeof results["total"] != 'undefined' && typeof results["thisPage"] != 'undefined') {
			if (results["total"] > 0) {
				results["total"]++;
			}
			
			// update the results total on the page
			youHaveElement = $('#youHave');
			if (results["total"] < 3 && (youHaveElement.length != 0) && copyItems["youHave"] && copyItems["resultsOne"] && copyItems["resultsSome"]) {
				if (results["total"] == 1) {
					youHaveElement.html(copyItems["youHave"] + ' ' + copyItems["resultsOne"]);
				} else {
					youHaveElement.html(copyItems["youHave"] + ' <span id="totalResults">' + results["total"] + '</span> ' + copyItems["resultsSome"]);
				}
			} else if (totalResultsElement = $('#totalResults')) {
				totalResultsElement.html(results["total"]);
			}
		}
		
		// when the user clicks 'undo', the profile card is reinstated
		if (profileBox) {
			var restoreBox = $('#restoremID' + m);
			profileBox.show(); 
			restoreBox.hide();
			removeFromRemovedResults();
		}

		// hide/show tip box (relating to results) on the page
		if (typeof results != 'undefined' && typeof results["total"] != 'undefined') {
			if (resultsTipElement = $('#resultsTip')) {
				if (results["total"] > 10 && !resultsTipElement.hasClass('toggle')) {
					resultsTipElement.addClass('toggle');
				} else if (results["total"] <= 10 && resultsTipElement.hasClass('toggle')) {
					resultsTipElement.removeClass('toggle');
				}
			}
		}
		
		if (typeof results != 'undefined' && typeof results["thisPage"] != 'undefined') {
			results["thisPage"]++;
			if (results["thisPage"] >= 1) {
				keepNotificationAreaVisible = true;
				
				// hide resultNav at top and bottom of page
				$("div.pagingBox").each(function(index, resultNav) {
					$(resultNav).show();
				});
			}
		}
	}
}

// Remove an element from one of our results pages
function removeResult (profileBox, m, restoreHref, mobile, removalNote, readditionNote) {
	if (typeof jQuery != 'undefined') {
		if (typeof results != 'undefined' && typeof results["total"] != 'undefined') {
			if (results["total"] > 0) {
				results["total"]--;
			}
			
			// update the results total on the page
			youHaveElement = $('#youHave');
			if (results["total"] < 3 && (youHaveElement.length != 0) && copyItems["youHave"] && copyItems["resultsOne"] && copyItems["resultsSome"]) {
				if (results["total"] == 1) {
					youHaveElement.html(copyItems["youHave"] + ' ' + copyItems["resultsOne"]);
				} else {
					youHaveElement.html(copyItems["youHave"] + ' <span id="totalResults">' + results["total"] + '</span> ' + copyItems["resultsSome"]);
				}
			} else if (totalResultsElement = $('#totalResults')) {
				totalResultsElement.html(results["total"]);
			}
		}
		
		if (profileBox) {
			var restoreBox = $('#restoremID' + m);
			var svg = "<svg><use xlink:href=\"#icon_success\"></use></svg>";
			var restoreProfileAnchor = buildAnchor(restoreHref, copyItems["profile_undoRemoval"], copyItems["profile_restoreProfile"]);
			var confirmNote = "<div>" + svg + removalNote + "</div>";
			confirmNote += "<div>" + restoreProfileAnchor + "</div>";
			var profileCardContainer = $('#mID' + m).parent();
			addToRemovedResults(m);			
			profileBox.hide();
			restoreBox.show();
			restoreBox.html(confirmNote);	
		}
		
		// hide/show tip box (relating to results) on the page
		if (typeof results != 'undefined' && typeof results["total"] != 'undefined') {
			if (resultsTipElement = $('#resultsTip')) {
				if (results["total"] > 10 && !resultsTipElement.hasClass('toggle')) {
					resultsTipElement.addClass('toggle');
				} else if (results["total"] <= 10 && resultsTipElement.hasClass('toggle')) {
					resultsTipElement.removeClass('toggle');
				}
			}
		}
		
		if (typeof results != 'undefined' && typeof results["thisPage"] != 'undefined') {
			results["thisPage"]--;
			if (results["thisPage"] < 1) {
				if (pages["thisPageNum"] >= pages["total"]) {
					pages["thisPageNum"]--;
				}
				keepNotificationAreaVisible = true;
				
				// hide resultNav at top and bottom of page
				$("div.pagingBox").each(;
			}
		}
	}
}

// Our main Ajax handler function
/**
 * Explanation of parameters below:
 * href 	- A string containing the URL to which the request is sent
 * postData - Data to be sent to the server (type: Object literal)
 * options 	- A set of key/value pairs that configure the Ajax request (type: Object literal)
 */	
function ajaxRequest (href, postData, options) {
	if (typeof jQuery != 'undefined' && href) {
		if (!beforeUnloadFired) {
		var json,
			failedResponse,
			defaults = {
				noRetry: false,
				showNotification: false,
				method: 'post',
				data: {},
				url: href
			};
		// Merge defaults and options, without modifying defaults
		options = $.extend({}, defaults, options);
		if (options.method == "post") {
			if (href.indexOf("?") !== -1) {
				// get query string parameters
				var obj = getAllUrlParams(href);
				options.url = obj.url;
				options.data = obj.data;
			} else if (postData) {
				// use postData parameter
				if (typeof postData == 'object') {
					// check if object is empty
					if (Object.keys(postData).length > 0) {
						options.data = postData;
					}
				} else {
					var obj = {};
					postData.replace(/([^=&]+)=([^&]*)/g, ; 
					options.data = obj;
				}
			}
		}
		// Assign handlers immediately after making the request
		var req = $.ajax({
			url: options.url,
			method: options.method,
			async: true,
			data: options.data,
			headers: {'Accept':'application/json'}
		})
		.done(function(data, textStatus, jqXHR) {
			var meta = {
				contentType: jqXHR.getResponseHeader('Content-Type') || ''
			};
			if (meta.contentType.indexOf('application/json') !== -1) {
				json = {};
				$.extend(json, jQuery.parseJSON(jqXHR.responseText) || {});
				var activityIndicator = ajaxDone(json);
				if (!options.showNotification) {
					options.showNotification = activityIndicator;
				}
			} else {
				failedResponse = {
					handler: textStatus,
					xhr: jqXHR
				};
			}
		})
		.fail(
		.always(function() {
			if (typeof failedResponse != 'undefined') {
				failedResponse.url = href;
				$.extend(failedResponse, options);
				handleAjaxErrors(failedResponse);
			}
			if (options.showNotification) {
				var onTimeout = 
				setTimeout(onTimeout, 50);  // ever-so-slightly reduces flicker when switching from "working" text to the on-screen notification

				if (!keepNotificationAreaVisible) {
					keepNotificationAreaVisible = !keepNotificationAreaVisible;
				}
			}
			ajaxAlways(json);
		});
		}
		return false;  // prevent anchor being followed
	}
	
	return true;  // cause anchor to be followed if jQuery isn't available
}

// Handle successes: toggle states of our action links, and update them
function ajaxDone (json) {
	if (typeof jQuery != 'undefined') {
		if (json.result) {
			if (json.currPage != 'find_search' && json.currPage != 'join' && json.currPage != 'splash' && json.currPage != 'find_popular' && !(json.currPage == 'info_success' && json.action == "nextStories") && !json.sendPhotoRequest && !json.paging) {
				var itemIndex = json.currPage+'_'+json.action;
				var toolTipText = (typeof titleItems != 'undefined' && typeof titleItems[itemIndex] != 'undefined' && titleItems[itemIndex].length > 0) ? titleItems[itemIndex] : null;
				var anchorText = (typeof json.href != 'undefined' && json.href != null) ? buildAnchor(json.href, anchorItems[itemIndex], toolTipText) : '';
				//rwd2015
				active = (json.action == 'add') ? "" : " active";
				var rwdAnchorText = (typeof json.href != 'undefined' && json.href != null) ? rwdBuildAnchor(json.currPage, json.from, json.href, anchorItems[itemIndex], active, false) : '';
			}
			
			switch (json.currPage) {
				case 'find_favourites':
					if (json.paging) {
						ajaxBuildPagingResults(json);
					} else {
						if (json.action == 'add') {
							if (json.from == 'find_favourites' || json.from == 'find_mutuals') {
								removeResult($('#mID'+json.m), json.m, json.href, json.rwd, json.removalNote, json.readditionNote);
							} else if (json.from == 'view' || json.from == 'find_morePhotos' || json.from == 'profile_summary') {
								if (json.rwd) {
									rwdToggleElement($('#mID'+json.m).find('a.favourite'), rwdAnchorText);
									if ($(".profileMiniBar").length) {
										rwdToggleElement($('.profileMiniBar').find('a.favourite'), rwdAnchorText);
									}
									// Add as favourite to view Favourites-Only photos
									if (json.ss != "guest") {
										var favouriteAnchorText = (typeof json.href != 'undefined' && json.href != null) ? rwdBuildAnchor(json.currPage, json.from, json.href, copyItems['favouriteAlbumInvite'], "", true) : '';
										var favouriteElement = $('#mID'+json.m).find('a.favouritesOnly');
										rwdToggleElement(favouriteElement, favouriteAnchorText);
										if ($(".profileMiniBar").length) {
											var favouriteElement = $('.profileMiniBar').find('a.favouritesOnly');
											rwdToggleElement(favouriteElement, favouriteAnchorText);
										}
									}
								} else {
									toggleElement('favourite', 'addFavButton', 'remFavButton', anchorText+(json.note ? '<span class="note">'+json.note+'</span>' : ''));
								}
								if (typeof noteItems != 'undefined' && typeof noteItems["favPrivPhotos_remove"] != 'undefined') {
									// this is not applicable to messages/conversation thread, since we don't deal with photo invitees there
									toggleElement('favPrivPhotos', 'addFavPhotoButton', 'remFavPhotoButton').find('div > p').html(noteItems["favPrivPhotos_remove"]);
								}
								// Update start chatting link
								if (typeof chatListener != 'undefined') {
									var href = json.href;
									var hrefParts = href.split('/s/');
									var baseurl = hrefParts[0];
									var url = baseurl + '/s/chat/chatRoster.php?a=inRoster&m=' + json.m + '&f=' + json.f;
									result = ajaxRequest(url);
								}
							} else if (json.from == 'read' || json.from == 'mail_conversation') {
								if (json.rwd) {
									rwdToggleElement($('#mID'+json.m).find('a.favourite'), rwdAnchorText);
									if ($(".profileMiniBar").length) {
										rwdToggleElement($('.profileMiniBar').find('a.favourite'), rwdAnchorText);
									}
									if (json.ss != "guest") {
										var favouriteAnchorText = (typeof json.href != 'undefined' && json.href != null) ? rwdBuildAnchor(json.currPage, json.from, json.href, copyItems['favouriteAlbumInvite'], "", true) : '';
										var favouriteElement = $('#mID'+json.m).find('a.favouritesOnly');
										rwdToggleElement(favouriteElement, favouriteAnchorText);
										if ($(".profileMiniBar").length) {
											var favouriteElement = $('.profileMiniBar').find('a.favouritesOnly');
											rwdToggleElement(favouriteElement, favouriteAnchorText);
										}
									}
								} else {
									toggleElement('favourite', 'addFavButton', 'remFavButton', anchorText);
								}
							} else {
								if (json.rwd) {
									rwdToggleElement($('#mID'+json.m).find('a.favourite'), rwdAnchorText);
								} else {
									toggleElement($('#mID'+json.m).find('li.remFavButton'), 'addFavButton', 'remFavButton', anchorText);
								}
							}
						} else if (json.action == 'inRoster') {
							chatAnchorElement = $('#chatAnchor');
							if (json.value == 1) {
								chatAnchorElement.click(subscribeToChat);
							} else if (json.value == 2) {
								chatAnchorElement.click(howToChat);
							} else if (json.value == 3) {
								chatAnchorElement.click(startChatting);
							}
							return false;  // disables notification area
						} else if (json.rwd && json.action == 'remove' && (json.from == 'find_favourites' || json.from == 'find_mutuals')) {
							restoreResult($('#mID'+json.m), json.m);
							removeFromRemovedResults();
						} else {
							if (json.areMutualFans == true && typeof json.mutualFanAlert != "undefined" && typeof json.mutualFanAlert != "") {
								notifyMutualFan(json.mutualFanAlert);
							}
							if (json.from == 'view' || json.from == 'find_morePhotos' || json.from == 'profile_summary') {
								if (json.rwd) {
									var elementLink = $('#mID'+json.m);
									rwdToggleElement($('#mID'+json.m).find('a.favourite'), rwdAnchorText);

									// Remove access to Favourites-Only photos
									if (json.ss != "guest") {
										var favouriteAnchorText = (typeof json.href != 'undefined' && json.href != null) ? rwdBuildAnchor(json.currPage, json.from, json.href, copyItems['favouriteAlbumRemove'], " active", true) : '';
										var favouriteElement = $('#mID'+json.m).find('a.favouritesOnly');
										rwdToggleElement(favouriteElement, favouriteAnchorText);

										if (typeof elementLink.find('a.favouritesOnly')[0] != "undefined") {
											var onClickStr = elementLink.find('a.favouritesOnly')[0].getAttribute('onclick');
											onClickStr = onClickStr.replace('return', 'return confirm(copyItems[\'confirmFavourite\']) &&');
											elementLink.find('a.favouritesOnly')[0].setAttribute('onclick', onClickStr);
										}
									}
									if ($(".profileMiniBar").length) {
										var elementLink = $('.profileMiniBar');
										rwdToggleElement($('.profileMiniBar').find('a.favourite'), rwdAnchorText);

										// Remove access to Favourites-Only photos
										if (json.ss != "guest") {
											var favouriteAnchorText = (typeof json.href != 'undefined' && json.href != null) ? rwdBuildAnchor(json.currPage, json.from, json.href, copyItems['favouriteAlbumRemove'], " active", true) : '';
											var favouriteElement = $('.profileMiniBar').find('a.favouritesOnly');
											rwdToggleElement(favouriteElement, favouriteAnchorText);

											if (typeof elementLink.find('a.favouritesOnly')[0] != "undefined") {
												var onClickStr = elementLink.find('a.favouritesOnly')[0].getAttribute('onclick');
												onClickStr = onClickStr.replace('return', 'return confirm(copyItems[\'confirmFavourite\']) &&');
												elementLink.find('a.favouritesOnly')[0].setAttribute('onclick', onClickStr);
											}
										}
									}
								} else {
									toggleElement('favourite', 'remFavButton', 'addFavButton', anchorText+(json.note ? '<span class="note">'+json.note+'</span>' : ''));
								}
								if (typeof noteItems != 'undefined' && typeof noteItems["favPrivPhotos_add"] != 'undefined') {
									// this is not applicable to messages/conversation thread, since we don't deal with photo invitees there
									toggleElement('favPrivPhotos', 'addFavPhotoButton', 'remFavPhotoButton').find('div > p').html(noteItems["favPrivPhotos_add"]);
								}
								// Update start chatting link
								if (typeof chatListener != 'undefined') {
									var href = json.href;
									var hrefParts = href.split('/s/');
									var baseurl = hrefParts[0];
									var url = baseurl + '/s/chat/chatRoster.php?a=inRoster&m=' + json.m + '&f=' + json.f;
									result = ajaxRequest(url);
								}
							} else if (json.from == 'read' || json.from == 'mail_conversation') {
								if (json.rwd) {
									var elementLink = $('#mID'+json.m);
									rwdToggleElement($('#mID'+json.m).find('a.favourite'), rwdAnchorText);
									if (json.ss != "guest") {
										var favouriteAnchorText = (typeof json.href != 'undefined' && json.href != null) ? rwdBuildAnchor(json.currPage, json.from, json.href, copyItems['favouriteAlbumRemove'], " active", true) : '';
										var favouriteElement = $('#mID'+json.m).find('a.favouritesOnly');
										rwdToggleElement(favouriteElement, favouriteAnchorText);
									}
									if ($(".profileMiniBar").length) {
										var elementLink = $('.profileMiniBar');
										rwdToggleElement($('.profileMiniBar').find('a.favourite'), rwdAnchorText);
										if (json.ss != "guest") {
											var favouriteAnchorText = (typeof json.href != 'undefined' && json.href != null) ? rwdBuildAnchor(json.currPage, json.from, json.href, copyItems['favouriteAlbumRemove'], " active", true) : '';
											var favouriteElement = $('.profileMiniBar').find('a.favouritesOnly');
											rwdToggleElement(favouriteElement, favouriteAnchorText);
										}
									}
								} else {
									toggleElement('favourite', 'remFavButton', 'addFavButton', anchorText);
								}
							} else {
								if (json.rwd) {
									rwdToggleElement($('#mID'+json.m).find('a.favourite'), rwdAnchorText);
								} else {
									toggleElement($('#mID'+json.m).find('li.addFavButton'), 'remFavButton', 'addFavButton', anchorText);
								}
							}
						}
					}
					break;
				case 'find_block':
					if (json.paging) {
						ajaxBuildPagingResults(json);
					} else {
						if (json.action == 'add') {
							if (json.from == 'find_block') {
								removeResult($('#mID'+json.m), json.m, json.href[0], (json.rwd || json.mobile), json.removalNote);
							} else {
								if (json.rwd) {
									var elementLink = $('#mID'+json.m).find('span.blockReport');
									var blockElement = elementLink.find('a:first');
									var reportLink = elementLink.find('a:last');
									rwdToggleElement(blockElement, rwdAnchorText);
									
									var onClickStr = elementLink.find('a:first')[0].getAttribute('onclick');
									onClickStr = onClickStr.replace('return', 'return confirm(copyItems[\'confirmBlock\']) &&');
									elementLink.find('a:first')[0].setAttribute('onclick', onClickStr);

									if ($(".profileMiniBar").length) {
										var elementLink = $(".profileMiniBar").find('span.blockReport');
										if (elementLink.length) {
											var blockElement = elementLink.find('a:first');
											var reportLink = elementLink.find('a:last');
											rwdToggleElement(blockElement, rwdAnchorText);

											var onClickStr = elementLink.find('a:first')[0].getAttribute('onclick');
											onClickStr = onClickStr.replace('return', 'return confirm(copyItems[\'confirmBlock\']) &&');
											elementLink.find('a:first')[0].setAttribute('onclick', onClickStr);
										}
									}

									var moreBoxElement = $('.moreBox');

									// Toggle on private photo and favourite photo invites
									var privateViewingOnlyElement = moreBoxElement.find("#privateViewingInvite");
									var favouriteOnlyInviteElement = moreBoxElement.find("#favouriteOnlyInvite");
									var privateViewingOnlyAnchor = privateViewingOnlyElement.find('.disabled');
									var favouriteOnlyInviteAnchor = favouriteOnlyInviteElement.find('.disabled');
									if (!privateViewingOnlyElement.hasClass("blockedUser") && !favouriteOnlyInviteElement.hasClass("blockedUser")) {
										toggleElement(privateViewingOnlyElement,null,null,"<a class=\"cancelInvite\" href=\""+privateViewingOnlyAnchor.attr('data-href')+"\" onclick=\"return ajaxRequest(this.href)\">" + privateViewingOnlyAnchor.html() + " </a>");
										toggleElement(favouriteOnlyInviteElement,null,null,"<a class=\"favouritesOnly\" href=\""+favouriteOnlyInviteAnchor.attr('data-href')+"\" onclick=\"return ajaxRequest(this.href)\">" + favouriteOnlyInviteAnchor.html() + " </a>");
										toggleElement(moreBoxElement.find(".blockViewControl"),null,"disableDisplay");
									}
								} else {
									var blockElement = $('#block');
									var reportSpan = outerHTML(blockElement.find('span.abuseSeperator')[0]);
									var reportLink = outerHTML(blockElement.find('a:last')[0]);
									blockElement = toggleElement(blockElement, 'addBlockButton', 'remBlockButton', (reportSpan != "" ? anchorText+reportSpan+reportLink : anchorText)+((blockElement.find('span.note').length != 0) && json.note ? '<span class="note">'+json.note+'</span>' : ''));
									var onClickStr = blockElement.find('a:first')[0].getAttribute('onclick');
									onClickStr = onClickStr.replace('return', 'return confirm(copyItems[\'confirmBlock\']) &&');
									blockElement.find('a:first')[0].setAttribute('onclick', onClickStr);
								}
							}
						} else {
							if (json.from == 'find_block') {
								restoreResult($('#mID'+json.m), json.m);
								removeFromRemovedResults();
							}
							// First toggle the block/unblock
							if (json.rwd) {
								var elementLink = $('#mID'+json.m).find('span.blockReport');
								var blockElement = elementLink.find('a:first');
								var reportLink = elementLink.find('a:last');
								rwdToggleElement(blockElement, rwdAnchorText);

								// Now toggle the add/remove favourites
								// for blocks, href is an array, 1st element is the block URL, 2nd element is the favourites URL
								var href = json.href[0];
								var favHref = json.href[1];
								favHref = favHref.replace("remove", "add");
								var favouriteAnchorText = (typeof favHref != 'undefined' && favHref != null) ? rwdBuildAnchor("find_favourites", json.from, favHref, anchorItems['find_favourites_add'], "", false) : '';
								var favouriteElement = $('#mID'+json.m).find('a.favourite');
								rwdToggleElement(favouriteElement, favouriteAnchorText);

								// Remove access to Favourites-Only photos
								if (json.ss != "guest") {
									var favouriteAnchorText = (typeof favHref != 'undefined' && favHref != null) ? rwdBuildAnchor("find_favourites", json.from, favHref, copyItems['favouriteAlbumInvite'], "", true) : '';
									var favouriteElement = $('#mID'+json.m).find('a.favouritesOnly');
									rwdToggleElement(favouriteElement, favouriteAnchorText);
								}


								if ($(".profileMiniBar").length) {
									var elementLink = $('.profileMiniBar').find('span.blockReport');
									if (elementLink.length) {
										var blockElement = elementLink.find('a:first');
										var reportLink = elementLink.find('a:last');
										rwdToggleElement(blockElement, rwdAnchorText);
									}

									// Now toggle the add/remove favourites
									// for blocks, href is an array, 1st element is the block URL, 2nd element is the favourites URL
									var href = json.href[0];
									var favHref = json.href[1];
									favHref = favHref.replace("remove", "add");
									var favouriteAnchorText = (typeof favHref != 'undefined' && favHref != null) ? rwdBuildAnchor("find_favourites", json.from, favHref, anchorItems['find_favourites_add'], "", false) : '';
									var favouriteElement = $('.profileMiniBar').find('a.favourite');
									rwdToggleElement(favouriteElement, favouriteAnchorText);

									// Remove access to Favourites-Only photos
									if (json.ss != "guest") {
										var favouriteAnchorText = (typeof favHref != 'undefined' && favHref != null) ? rwdBuildAnchor("find_favourites", json.from, favHref, copyItems['favouriteAlbumInvite'], "", true) : '';
										var favouriteElement = $('.profileMiniBar').find('a.favouritesOnly');
										rwdToggleElement(favouriteElement, favouriteAnchorText);
									}
								}

								// Now toggle the add/remove favourites
								// for blocks, href is an array, 1st element is the block URL, 2nd element is the favourites URL
								var moreBoxElement = $('.moreBox');
								var invHref = moreBoxElement.find('.cancelInvite').attr('href');
								if (typeof invHref !== typeof undefined && invHref !== false) {
									invHref = invHref.replace("remove", "add");
									var inviteAnchorText = (typeof invHref != 'undefined' && invHref != null) ? rwdBuildAnchor("find_invites", json.from, invHref, anchorItems['find_invites_add'], "", true) : '';
									var inviteElement = $(moreBoxElement).find('.cancelInvite');
									rwdToggleElement(inviteElement, inviteAnchorText);
								}

								// Toggle off private photo and favourite photo invites
								var privateViewingOnlyElement = moreBoxElement.find("#privateViewingInvite");
								var favouriteOnlyInviteElement = moreBoxElement.find("#favouriteOnlyInvite");
								var privateViewingOnlyAnchor = privateViewingOnlyElement.find('.cancelInvite');
								var favouriteOnlyInviteAnchor = favouriteOnlyInviteElement.find('.favouritesOnly');
								toggleElement(privateViewingOnlyElement,"disableDisplay",null,"<span class=\"disabled\" data-href=\""+privateViewingOnlyAnchor.attr('href')+"\"> " + privateViewingOnlyAnchor.html() + " </span>");
								toggleElement(favouriteOnlyInviteElement,"disableDisplay",null,"<span class=\"disabled\" data-href=\""+favouriteOnlyInviteAnchor.attr('href')+"\"> " + favouriteOnlyInviteAnchor.html() + " </span>");
								toggleElement(moreBoxElement.find(".blockViewControl"),"disableDisplay",null);
							} else {
								var blockElement = $('#block');
								var reportSpan = outerHTML(blockElement.find('span.abuseSeperator')[0]);
								var reportLink = outerHTML(blockElement.find('a:last')[0]);
								
								blockElement = toggleElement(blockElement, 'remBlockButton', 'addBlockButton', (reportSpan != "" ? anchorText+reportSpan+reportLink : anchorText)+((blockElement.find('span.note').length != 0) && json.note ? '<span class="note">'+json.note+'</span>' : ''));
								
								// Now toggle the add/remove favourites
								// for blocks, href is an array, 1st element is the block URL, 2nd element is the favourites URL
								var href = json.href[0];
								var favHref = json.href[1];
								favHref = favHref.replace("remove", "add");
								var favouriteToolTipText = (typeof titleItems != 'undefined' && typeof titleItems['find_favourites_add'] != 'undefined' && titleItems['find_favourites_add'].length > 0) ? titleItems['find_favourites_add'] : null;
								var favouriteAnchorText = (typeof favHref != 'undefined' && favHref != null) ? buildAnchor(favHref, anchorItems['find_favourites_add'], favouriteToolTipText) : '';
								var favouriteElement = $('#favourite');
								toggleElement(favouriteElement, 'addFavButton', 'remFavButton', favouriteAnchorText);
							}
						}
					}
					break;
				case 'find_fans':
					if (json.paging) {
						ajaxBuildPagingResults(json);
					} else {
						if (json.action == 'hide') {
							restoreResult($('#mID'+json.m), json.m);
							removeFromRemovedResults();
						} else {
							removeResult($('#mID'+json.m), json.m, json.href, (json.rwd || json.mobile), json.removalNote, json.readditionNote);
						}
					}
					break;
				case 'find_matches':
				case 'find_newMatches':
					if (json.paging) {
						ajaxBuildPagingResults(json);
					} else {
						if (json.action == 'exclude') {
							restoreResult($('#mID'+json.m), json.m);
							removeFromRemovedResults();
						} else {
							removeResult($('#mID'+json.m), json.m, json.href, (json.rwd || json.mobile), json.removalNote);
						}
					}
					break;
				case 'find_invites':
					if (json.paging) {
						ajaxBuildPagingResults(json);
					} else {
						if (json.action == 'add') {
							if (json.from == 'find_invites') {
								removeResult($('#mID'+json.m), json.m, json.href, (json.rwd || json.mobile), json.removalNote);
							} else {
								if (json.rwd) {
									rwdToggleElement($('.moreBox').find('a.cancelInvite'), rwdAnchorText);
								} else {
									toggleElement('invPrivPhotos', 'addInvPhotoButton', 'remInvPhotoButton', anchorText+(json.note ? '<span class="note">'+json.note+'</span>' : ''));
								}
							}
						} else {
							if (json.rwd) {
								if (json.from != "view") {
									restoreResult($('#mID'+json.m), json.m);
								}
								removeFromRemovedResults();
								rwdToggleElement($('.moreBox').find('a.cancelInvite'), rwdAnchorText);
							} else {
								restoreResult($('#mID'+json.m), json.m);
								removeFromRemovedResults();
								toggleElement('invPrivPhotos', 'remInvPhotoButton', 'addInvPhotoButton', anchorText+(json.note ? '<span class="note">'+json.note+'</span>' : ''));
							}
						}
					}
					break;
				case 'find_search':
					if (json.paging) {
						ajaxBuildPagingResults(json);
						break;
					} else {
						if (typeof copyItems != 'undefined') {
							var infoRegex = /^(result_searchSaved|result_searchEdited|result_searchDeleted)$/;
							if (json.result == 'result_searchLoaded') {
								loadedSearch = true;
								updateForm(json);
							} else if (json.result.match(infoRegex)) {
								// Provide notification inside div
								var errRegex = /^err_/;
								var textDivID = 'savedSearchInfo';
								if (json.result.match(errRegex)) {
									textDivID = 'savedSearchErr';
								} else if (json.result == 'result_searchSaved' || json.result == 'result_searchEdited') {
									textDivID = 'savedSearchSuccess';
									enableButton('deleteSearchButton');
								}
								displayMsg(textDivID, copyItems[json.result]);
								getSearchListOptions(json.i);
								if (json.result == 'result_searchSaved') {
									updateSavedStatus(false);
								} else if (json.result == 'result_searchDeleted') {
									$('#saveSearchOption').prop('selectedIndex', '0');
									disableButton('deleteSearchButton');
								}
							} else if (json.result = 'result_searchListLoaded') {
								refreshSearchList(json);
								updateText('savedSearchTxt', copyItems['find_search_savedSearchList'] + ':', true);
								show('saveSearchOption');
							}
						}
						return false;  // disables notification area
					}
				case 'join':
					var bodyJoin = "";
					if ($('#usernameTaken_bodyJoin').length) {
						bodyJoin = "_bodyJoin";
					}
					if (!json.usernameOk) {
						$('#usernameTaken'+bodyJoin).html(copyItems['err_usernameTaken_select'] + json.result);
						$('#usernameTaken'+bodyJoin).show();
					} else {
						$('#usernameTaken'+bodyJoin).hide();
					}
					return false;  // disables notification area
				case 'info_poll':
					if (json.pollPage == "info_poll") {
						$('#memberPolls' + json.pollID).html(json.html);
					} else {
						$('#memberPolls').html(json.html);
					}
					break;
				case 'find_ratings':
					if (json.paging) {
						ajaxBuildPagingResults(json);
					} else {
						if (json.rwd) {
							if (json.clear) {
								starBarSetup(json.m, true);
							}
						}
					}
					break;
				case 'find_popular':
					if (json.rwd) {
						$('#featuredProfileCards').html(json.html);
					}
					return false;  // disables notification area
				case 'mail_write':
					if (json.sendPhotoRequest) {
						rwdAnchorText = "<span>"+anchorItems['field_photoAlreadyRequested']+"</span>";
						rwdToggleElement($('.textOverImage.summary').find("a"), rwdAnchorText);
					}
					break;
				case 'find_byName':
				case 'find_modified':
				case 'find_new':
				case 'find_keyword':
				case 'find_birthdays':
				case 'find_gallery':
				case 'find_notes':
				case 'find_history':
				case 'find_historyByMe':
				case 'find_historyImpress':
				case 'find_invitedMe':
				case 'find_mutuals':
				case 'find_rogues':
				case 'find_blocker':
				case 'find_loggedIn':
				case 'mail_conversations':
					if (json.paging) {
						ajaxBuildPagingResults(json);
					}
					break;
				case 'info_success':
					if (json.paging) {
						ajaxBuildPagingResults(json);
						break;
					} else if (json.action == "nextStories") {
						$('#supportSuccessStories').html(json.html);
					}
					return false;  // disables notification area
				case 'profile_photos':
					window.location.href = json.redirectURL;
					return false;
			}
		} else if (json.err) {
			switch (json.currPage) {
				case 'find_search':
					if (typeof copyItems != 'undefined') {
						if (json.err == 'err_searchAlreadyExists') {
							var replace = confirm(copyItems['confirm_savedSearchReplace']);
							if (replace) {
								enableButton('saveSearchButton')
								saveForm('form1', true);
								disableButton('saveSearchButton')
							} else {
								errRegex = /^err_/;
								var textDivID = 'savedSearchInfo';
								if (json.err.match(errRegex)) {
									textDivID = 'savedSearchErr';
								}
								displayMsg(textDivID, copyItems[json.err]);
								enableButton('saveSearchButton')
							}
						} else {
							errRegex = /^err_/;
							var textDivID = 'savedSearchInfo';
							var alertBanner = "info";
							if (json.err.match(errRegex)) {
								textDivID = 'savedSearchErr';
							}
							if (json.err.match(/^(find_search_maxReached10|find_search_maxReached2)$/)) {
								alertBanner = "warning";
								textDivID = 'savedSearchErr';
							} else if (json.err.match(/^(err_searchNotFound|err_invalidRequest|err_sameAsIdealMatch)$/)) {
								alertBanner = "error";
							}
							displayMsg(textDivID, copyItems[json.err], alertBanner);
							enableButton('saveSearchButton');
						}
					}
					return false;  // disables notification area
				case 'find_favourites':
					if (json.err == "err_nonNegMismatchBlock") {
						alert(json.nonNegMismatchAlert);
						return false;
					}
					return true;
				case 'mail_write':
					if (json.sendPhotoRequest) {
						alert(copyItems[json.err]);
					}
					return false;
			}
		}
	}
	return true;
}

// Handle failures: confirm that there was a problem
function handleAjaxErrors (failedResponse) {
	// Over-ride the global variable based on the ajax response
	// The "onBeforeUnload" events are not supported on iOS
	isEventSupported = ('onbeforeunload' in window && typeof window.onbeforeunload == 'object');
	if (!isEventSupported) {
		if (failedResponse.xhr.readyState == 0 && failedResponse.xhr.status == 0 && !beforeUnloadFired) {
			beforeUnloadFired = true;
		}
	}
	// Ignore incomplete requests, likely due to navigating away from the page
	if (!beforeUnloadFired) {
		if (failedResponse.noRetry) {
			ajaxNoRetry();
		} else {
			ajaxRetry(failedResponse.url);
		}
	} else {
		beforeUnloadFired = false;
	}
}

// Perform a regular page load
function ajaxRetry (url) {
	if (confirm(copyItems["err_ajaxGeneralFailure"])) {
		loadUrl(url);  // try loading the URL normally
	}
}

// Only display an error alert, do not allow user to retry


// Callback function to remove stale status messages
function removeStatusMsg (msgID) {
	if (typeof jQuery != 'undefined') {
		$('#' + msgID).remove();
		statusMsgCount--;
		
		// check whether the notification area needs to be hidden
		if (statusMsgCount < 1 && notificationAreaVisibile) {
			keepNotificationAreaVisible = false;
			notificationArea.hide();
			notificationAreaVisibile = !notificationAreaVisibile;
		}
	}
}

// Build and show an appropriate status message in the notification area on completion of an Ajax action
function notify (jsonObject, timeout) {
	if (typeof jQuery != 'undefined') {
		// build a unique ID for each new status message
		var statusMsgID = 'status'+generateUID();

		// set tooltip text if available
		var toolTipText = null;
		if (typeof copyItems != 'undefined') {
			var copyItemKey = (jsonObject.result) ? 'success' : 'error';
			toolTipText = (typeof copyItems[copyItemKey] != 'undefined' && copyItems[copyItemKey].length > 0) ? copyItems[copyItemKey] : null;
		}
		
		// insert a new list item at the end of the unordered list
		if (jsonObject.currPage != 'join') {
			$('#notification').append('<li'+((toolTipText != null) ? ' title="'+toolTipText+'"' : '')+' id="'+statusMsgID+'" class="'+((jsonObject.result) ? 'successful' : 'unsuccessful')+'">'+copyItems[((jsonObject.result) ? jsonObject.result : jsonObject.err)]+'</li>');
		}
		statusMsgCount++;
		
		// ensure that the notification area is visible
		if (!notificationAreaVisibile) {
			notificationArea.show();
			notificationAreaVisibile = !notificationAreaVisibile;
		}
		
		// manage the cleanup of stale status messages via a callback function
		if (typeof jQuery != 'undefined') {
			$('#' + statusMsgID).delay(700).fadeOut( 300, ;
		} else {
			// fallback
			var onTimeout = function () {
				$('#' + statusMsgID).hide();
				removeStatusMsg(statusMsgID);
			};
			setTimeout(onTimeout, timeout * 1000);
		}
	}
}

function ajaxBuildPagingResults (json) {
	var lastContainer = firstContainer = 0;
	// determine after which container is the next batch of results inserted
	$('#pagingResults').children().each(function() {
		var pagingResult = this.id.replace( /^\D+/g, '');
		pagingResult = parseInt(pagingResult);
		if (json.p > pagingResult) { 
			lastContainer = pagingResult;
		} else {
			firstContainer = pagingResult;
			return false;
		}
	});
	if (lastContainer == 0) {
		$(json.html).insertBefore($("#pagingResult"+firstContainer));
	} else {
		$(json.html).insertAfter($("#pagingResult"+lastContainer));
	}

	if (json.p) {
		//load more button
		if (!json.lastPage) {
			if (json.p > json.thisPage) {
				$('.pagingLoadMore').hide();
				var totalPages = pages["total"];
				if (typeof totalPages != 'undefined' && resultsPages.indexOf(totalPages.toString()) == -1) {
					$(".pagingLoadMore:last").show();
				}
			}
		} else {
			// if last page of results then hide all load more buttons
			$('.pagingLoadMore').hide();
		}

		// remove previous progress bar
		if ($(".stickyFooter").length) {
			$(".stickyFooter").first().remove();
			// initialize new sticky pagination bar
			$("#navBarResult"+json.p).stickyPanels({
				paginationBar: true
			});
		}

		// select arrow style change
		if (typeof changeSelectorDropDownArrows == "function") {
			changeSelectorDropDownArrows();
		}


		// scroll to pageNum
		$(".pagingBox.pagingBoxHeader").removeClass();
		if (!json.scroll) {
			if ($("#pagingResult"+json.p).length) {
				animateScrolling(json.p);
			}
		}

		// userNotes and Ratings
		if (json.currPage != "find_gallery" && json.currPage != "mail_conversations" && json.currPage != "info_success") {
			starBarSetup();
			unwSetup();
		}
	}
}

// Alert a user when the profile just favourited is a mutual fan.
function notifyMutualFan (alertContent) {
	if ($("#mFanModalWrap").length) {
		// Populate the modal with the response html
		$("#mFanModalWrap .modalContentWrap").html(alertContent.html);
	}
	if (typeof $.fn.easyModal != "undefined") {
		// not able to close the modal using the back button, modal launches on page load
		// popstate will not trigger on back button if no user interaction
		// initialize easyModal
		var modalOptions = easyModalOptions(true);
		// removes the previously attached event
		$('#mFanModalWrap').off().easyModal(modalOptions);
	}
	// Display the modal
	$("#mFanModalWrap").trigger('openModal');
}

function getAllUrlParams (url) {
	// get query string from url
	var queryString = url ? url.split('?')[1] : '';
	// we'll store the parameters here
	var urlParams = {};
	// if query string exists
	if (queryString) {
		urlParams.url = url.split("?")[0];
		// stuff after # is not part of query string, so get rid of it
		queryString = queryString.split('#')[0];
		// split our query string into its component parts
		var arr = queryString.split('&');
		var obj = {};
		for (var i = 0; i < arr.length; i++) {
			// separate the keys and the values
			var results = arr[i].split('=');
			// set parameter name and value
			var paramName = decodeURIComponent(results[0]);
			var paramValue = decodeURIComponent(results[1]);
			if (!obj[paramName]) {
				// if it doesn't exist, create property
				obj[paramName] = paramValue;
			} else if (obj[paramName] && typeof obj[paramName] === 'string') {
				// if property does exist and it's a string, convert it to an array
				obj[paramName] = [obj[paramName]];
				obj[paramName].push(paramValue);
			} else {
				// otherwise add the property
				obj[paramName].push(paramValue);
			}
		}
		urlParams.data = obj;
	}
	return urlParams;
}

// Define global variables
var notificationArea = null;
var activityIndicator = null;
var notificationAreaVisibile = null;
var activityIndicatorVisible = null;  // set these all to null initially; they get properly set onLoad
var keepNotificationAreaVisible = false;  // used determine whether or not the notification area should be hidden
var statusMsgCount = 0;  // number of status messages being shown inside the notification area
var removedResults = new Array;  // Profiles removed from a search result page
var beforeUnloadFired = false;

if (typeof jQuery != 'undefined') {
	$(document).ready(function() {
		notificationArea = $("#notification");
		activityIndicator = $("#activityIndicator");
		notificationAreaVisibile = (notificationArea.css("display") == "block");
		activityIndicatorVisible = (activityIndicator.css("display") == "block");
		
		// these responders execute on creation and on completion of each Ajax request
		$(document).ajaxSend(function (event, XMLHttpRequest, ajaxOptions) {
		   if (notificationArea && activityIndicator && jQuery.active == 1) {
				// on creation of the first Ajax request...
				// show the activity indicator
				var ajaxURL  = ajaxOptions.url;
				if (ajaxURL.indexOf("realTimeMessaging.php") >= 0 || ajaxURL.indexOf("conversation.php") >= 0 || ajaxURL.indexOf("photos.php") >= 0 || ajaxURL.indexOf("fileUploadStatus.php") >= 0) {
					return false;
				}
				if (!activityIndicatorVisible) {
					activityIndicator.show();
					activityIndicatorVisible = !activityIndicatorVisible;
				}
				
				// show the notification area
				if (!notificationAreaVisibile) {
					notificationArea.show();
					notificationAreaVisibile = !notificationAreaVisibile;
				}
			}
		}).ajaxComplete(function (event, XMLHttpRequest, ajaxOptions) {
		   if (notificationArea && activityIndicator && jQuery.active == 1) {
				// on completion of the last Ajax request...
				// provided there are no status messages being displayed, hide the notification area
				if (!keepNotificationAreaVisible && notificationAreaVisibile) {
					notificationArea.hide();
					notificationAreaVisibile = !notificationAreaVisibile;
				}
				
				// hide the activity indicator
				if (activityIndicatorVisible) {
					activityIndicator.hide();
					activityIndicatorVisible = !activityIndicatorVisible;
				}
			}
		});

		// Handle the error from an ajax request, when the user navigates away from the page
		$(window).on('beforeunload', ;
	});	
}

function ajaxAlways (json) {
	if (typeof jQuery != 'undefined') {
		if (typeof json != 'undefined') {
			switch (json.currPage) {
				case 'find_search':
					if (typeof json.i != 'undefined') {
						var element = $('#saveSearchOption');
						element.children('option').each(function(index, option){
							if (option.value == json.i) {
								option.selected = true;
							} else {
								option.selected = false;
							}
						});
					}
					break;
			}
		}
	}
}