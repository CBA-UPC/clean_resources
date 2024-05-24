unknown partner: fivebyfiveon($) {  // Avoid conflicts with other libraries

'use strict';

// This callback will mark all forum icons read
phpbb.addAjaxCallback('mark_forums_read', function(res) {
	var readTitle = res.NO_UNREAD_POSTS;
	var unreadTitle = res.UNREAD_POSTS;
	var iconsArray = {
		forum_unread: 'forum_read',
		forum_unread_subforum: 'forum_read_subforum',
		forum_unread_locked: 'forum_read_locked'
	};

	$('li.row').find('dl[class*="forum_unread"]').each(function() {
		var $this = $(this);

		$.each(iconsArray, function(unreadClass, readClass) {
			if ($this.hasClass(unreadClass)) {
				$this.removeClass(unreadClass).addClass(readClass);
			}
		});
		$this.children('dt[title="' + unreadTitle + '"]').attr('title', readTitle);
	});

	// Mark subforums read
	$('a.subforum[class*="unread"]').removeClass('unread').addClass('read').children('.icon.icon-red').removeClass('icon-red').addClass('icon-blue');

	// Mark topics read if we are watching a category and showing active topics
	if ($('#active_topics').length) {
		phpbb.ajaxCallbacks.mark_topics_read.call(this, res, false);
	}

	// Update mark forums read links
	$('[data-ajax="mark_forums_read"]').attr('href', res.U_MARK_FORUMS);

	phpbb.closeDarkenWrapper(3000);
});

/**
* This callback will mark all topic icons read
*
* @param {bool} [update_topic_links=true] Whether "Mark topics read" links
* 	should be updated. Defaults to true.
*/
phpbb.addAjaxCallback('mark_topics_read', function(res, updateTopicLinks) {
	var readTitle = res.NO_UNREAD_POSTS;
	var unreadTitle = res.UNREAD_POSTS;
	var iconsArray = {
		global_unread: 'global_read',
		announce_unread: 'announce_read',
		sticky_unread: 'sticky_read',
		topic_unread: 'topic_read'
	};
	var iconsState = ['', '_hot', '_hot_mine', '_locked', '_locked_mine', '_mine'];
	var unreadClassSelectors;
	var classMap = {};
	var classNames = [];

	if (typeof updateTopicLinks === 'undefined') {
		updateTopicLinks = true;
	}

	$.each(iconsArray, function(unreadClass, readClass) {
		$.each(iconsState, function(key, value) {
			// Only topics can be hot
			if ((value === '_hot' || value === '_hot_mine') && unreadClass !== 'topic_unread') {
				return true;
			}
			classMap[unreadClass + value] = readClass + value;
			classNames.push(unreadClass + value);
		});
	});

	unreadClassSelectors = '.' + classNames.join(',.');

	$('li.row').find(unreadClassSelectors).each(function() {
		var $this = $(this);
		$.each(classMap, function(unreadClass, readClass) {
			if ($this.hasClass(unreadClass)) {
				$this.removeClass(unreadClass).addClass(readClass);
			}
		});
		$this.children('dt[title="' + unreadTitle + '"]').attr('title', readTitle);
	});

	// Remove link to first unread post
	$('a.unread').has('.icon-red').remove();

	// Update mark topics read links
	if (updateTopicLinks) {
		$('[data-ajax="mark_topics_read"]').attr('href', res.U_MARK_TOPICS);
	}

	phpbb.closeDarkenWrapper(3000);
});

// This callback will mark all notifications read
phpbb.addAjaxCallback('notification.mark_all_read', function(res) {
	if (typeof res.success !== 'undefined') {
		phpbb.markNotifications($('#notification_list li.bg2'), 0);
		phpbb.closeDarkenWrapper(3000);
	}
});

// This callback will mark a notification read
phpbb.addAjaxCallback('notification.mark_read', function(res) {
	if (typeof res.success !== 'undefined') {
		var unreadCount = Number($('#notification_list_button strong').html()) - 1;
		phpbb.markNotifications($(this).parent('li.bg2'), unreadCount);
	}
});

/**
 * Mark notification popup rows as read.
 *
 * @param {jQuery} $popup jQuery object(s) to mark read.
 * @param {int} unreadCount The new unread notifications count.
 */
phpbb.markNotifications = function($popup, unreadCount) {
	// Remove the unread status.
	$popup.removeClass('bg2');
	$popup.find('a.mark_read').remove();

	// Update the notification link to the real URL.
	$popup.each(function() {
		var link = $(this).find('a');
		link.attr('href', link.attr('data-real-url'));
	});

	// Update the unread count.
	$('strong', '#notification_list_button').html(unreadCount);
	// Remove the Mark all read link and hide notification count if there are no unread notifications.
	if (!unreadCount) {
		$('#mark_all_notifications').remove();
		$('#notification_list_button > strong').addClass('hidden');
	}

	// Update page title
	var $title = $('title');
	var originalTitle = $title.text().replace(/(\((\d+)\))/, '');
	$title.text((unreadCount ? '(' + unreadCount + ')' : '') + originalTitle);
};

// This callback finds the post from the delete link, and removes it.
phpbb.addAjaxCallback('post_delete', function() {
	var $this = $(this),
		postId;

	if ($this.attr('data-refresh') === undefined) {
		postId = $this[0].href.split('&p=')[1];
		var post = $this.parents('#p' + postId).css('pointer-events', 'none');
		if (post.hasClass('bg1') || post.hasClass('bg2')) {
			var posts1 = post.nextAll('.bg1');
			post.nextAll('.bg2').removeClass('bg2').addClass('bg1');
			posts1.removeClass('bg1').addClass('bg2');
		}
		post.fadeOut(function() {
			$(this).remove();
		});
	}
});

// This callback removes the approve / disapprove div or link.
phpbb.addAjaxCallback('post_visibility', function(res) {
	var remove = (res.visible) ? $(this) : $(this).parents('.post');
	$(remove).css('pointer-events', 'none').fadeOut(function() {
		$(this).remove();
	});

	if (res.visible) {
		// Remove the "Deleted by" message from the post on restoring.
		remove.parents('.post').find('.post_deleted_msg').css('pointer-events', 'none').fadeOut(function() {
			$(this).remove();
		});
	}
});

// This removes the parent row of the link or form that fired the callback.
phpbb.addAjaxCallback('row_delete', function() {
	$(this).parents('tr').remove();
});

// This handles friend / foe additions removals.
phpbb.addAjaxCallback('zebra', function(res) {
	var zebra;

	if (res.success) {
		zebra = $('.zebra');
		zebra.first().html(res.MESSAGE_TEXT);
		zebra.not(':first').html('&nbsp;').prev().html('&nbsp;');
	}
});

/**
 * This callback updates the poll results after voting.
 */
phpbb.addAjaxCallback('vote_poll', function(res) {
	if (typeof res.success !== 'undefined') {
		var poll = $('.topic_poll');
		var panel = poll.find('.panel');
		var resultsVisible = poll.find('dl:first-child .resultbar').is(':visible');
		var mostVotes = 0;

		// Set min-height to prevent the page from jumping when the content changes
		var updatePanelHeight = function (height) {
			height = (typeof height === 'undefined') ? panel.find('.inner').outerHeight() : height;
			panel.css('min-height', height);
		};
		updatePanelHeight();

		// Remove the View results link
		if (!resultsVisible) {
			poll.find('.poll_view_results').hide(500);
		}

		if (!res.can_vote) {
			poll.find('.polls, .poll_max_votes, .poll_vote, .poll_option_select').fadeOut(500, function () {
				poll.find('.resultbar, .poll_option_percent, .poll_total_votes').show();
			});
		} else {
			// If the user can still vote, simply slide down the results
			poll.find('.resultbar, .poll_option_percent, .poll_total_votes').show(500);
		}

		// Get the votes count of the highest poll option
		poll.find('[data-poll-option-id]').each(function() {
			var option = $(this);
			var optionId = option.attr('data-poll-option-id');
			mostVotes = (res.vote_counts[optionId] >= mostVotes) ? res.vote_counts[optionId] : mostVotes;
		});

		// Update the total votes count
		poll.find('.poll_total_vote_cnt').html(res.total_votes);

		// Update each option
		poll.find('[data-poll-option-id]').each(function() {
			var $this = $(this);
			var optionId = $this.attr('data-poll-option-id');
			var voted = (typeof res.user_votes[optionId] !== 'undefined');
			var mostVoted = (res.vote_counts[optionId] === mostVotes);
			var percent = (!res.total_votes) ? 0 : Math.round((res.vote_counts[optionId] / res.total_votes) * 100);
			var percentRel = (mostVotes === 0) ? 0 : Math.round((res.vote_counts[optionId] / mostVotes) * 100);
			var altText;

			altText = $this.attr('data-alt-text');
			if (voted) {
				$this.attr('title', $.trim(altText));
			} else {
				$this.attr('title', '');
			};
			$this.toggleClass('voted', voted);
			$this.toggleClass('most-votes', mostVoted);

			// Update the bars
			var bar = $this.find('.resultbar div');
			var barTimeLapse = (res.can_vote) ? 500 : 1500;
			var newBarClass = (percent === 100) ? 'pollbar5' : 'pollbar' + (Math.floor(percent / 20) + 1);

			setTimeout(function () {
				bar.animate({ width: percentRel + '%' }, 500)
					.removeClass('pollbar1 pollbar2 pollbar3 pollbar4 pollbar5')
					.addClass(newBarClass)
					.html(res.vote_counts[optionId]);

				var percentText = percent ? percent + '%' : res.NO_VOTES;
				$this.find('.poll_option_percent').html(percentText);
			}, barTimeLapse);
		});

		if (!res.can_vote) {
			poll.find('.polls').delay(400).fadeIn(500);
		}

		// Display "Your vote has been cast." message. Disappears after 5 seconds.
		var confirmationDelay = (res.can_vote) ? 300 : 900;
		poll.find('.vote-submitted').delay(confirmationDelay).slideDown(200, function() {
			if (resultsVisible) {
				updatePanelHeight();
			}

			$(this).delay(5000).fadeOut(500, function() {
				resizePanel(300);
			});
		});

		// Remove the gap resulting from removing options
		setTimeout(function() {
			resizePanel(500);
		}, 1500);

		var resizePanel = function (time) {
			var panelHeight = panel.height();
			var innerHeight = panel.find('.inner').outerHeight();

			if (panelHeight !== innerHeight) {
				panel.css({ minHeight: '', height: panelHeight })
					.animate({ height: innerHeight }, time, function () {
						panel.css({ minHeight: innerHeight, height: '' });
					});
			}
		};
	}
});

/**
 * Show poll results when clicking View results link.
 */
$('.poll_view_results a').click(function(e) {
	// Do not follow the link
	e.preventDefault();

	var $poll = $(this).parents('.topic_poll');

	$poll.find('.resultbar, .poll_option_percent, .poll_total_votes').show(500);
	$poll.find('.poll_view_results').hide(500);
});

$('[data-ajax]').each(function() {
	var $this = $(this);
	var ajax = $this.attr('data-ajax');
	var filter = $this.attr('data-filter');

	if (ajax !== 'false') {
		var fn = (ajax !== 'true') ? ajax : null;
		filter = (filter !== undefined) ? phpbb.getFunctionByName(filter) : null;

		phpbb.ajaxify({
			selector: this,
			refresh: $this.attr('data-refresh') !== undefined,
			filter: filter,
			callback: fn
		});
	}
});


/**
 * This simply appends #preview to the action of the
 * QR action when you click the Full Editor & Preview button
 */
$('#qr_full_editor').click(function() {
	$('#qr_postform').attr('action', function(i, val) {
		return val + '#preview';
	});
});


/**
 * Make the display post links to use JS
 */
$('.display_post').click(function(e) {
	// Do not follow the link
	e.preventDefault();

	var postId = $(this).attr('data-post-id');
	$('#post_content' + postId).show();
	$('#profile' + postId).show();
	$('#post_hidden' + postId).hide();
});

/**
* Toggle the member search panel in memberlist.php.
*
* If user returns to search page after viewing results the search panel is automatically displayed.
* In any case the link will toggle the display status of the search panel and link text will be
* appropriately changed based on the status of the search panel.
*/
$('#member_search').click(function () {
	var $memberlistSearch = $('#memberlist_search');

	$memberlistSearch.slideToggle('fast');
	phpbb.ajaxCallbacks.alt_text.call(this);

	// Focus on the username textbox if it's available and displayed
	if ($memberlistSearch.is(':visible')) {
		$('#username').focus();
	}
	return false;
});

/**
* Automatically resize textarea
*/
$(function() {
	var $textarea = $('textarea:not(#message-box textarea, .no-auto-resize)');
	phpbb.resizeTextArea($textarea, { minHeight: 75, maxHeight: 250 });
	phpbb.resizeTextArea($('textarea', '#message-box'));
});


})(jQuery); // Avoid conflicts with other libraries
();rsfp_runCondition14();rsfp_runCondition15();rsfp_runCondition16();rsfp_runCondition18();rsfp_runCondition19();rsfp_runCondition20();rsfp_runCondition21();rsfp_runCondition22();rsfp_runCondition23();rsfp_runCondition24();rsfp_runCondition25();};RSFormPro.Conditions.delayRun(7);window.addEventListener('DOMContentLoaded', function(){ RSFormPro.Conditions.addReset(7); });</script>
	<style>
.rsform-block-requestconsent .formRequired {
    display: none;
}
.rsform-block-requestconsent .checkbox input[type="checkbox"] {
    width: auto;
}
@media (min-width: 481px) { 
#rsform_6_page_0.form-horizontal .control-label { 
    width: 30%; 
} 
#rsform_6_page_0.form-horizontal .controls { 
    margin-left: 35%;
 } 
select#WhyAreYouContactingUs {
    width: 78%;
} 
} 
@media (max-width: 480px) { 
#rsform_6_page_0.form-horizontal .controls { 
    width: 95%; 
} 
    #rsform_6_page_0.form-horizontal .controls select { 
width: 100%;
} 
}
</style>
	<script src="https://hcaptcha.com/1/api.js?render=explicit" async defer></script>

    <script>
        var _prum = [['id', '59300ad15992c776ad970068'],
            ['mark', 'firstbyte', (new Date()).getTime()]];
        (function() {
            var s = document.getElementsByTagName('script')[0]
                , p = document.createElement('script');
            p.async = 'async';
            p.src = 'https://rum-static.pingdom.net/prum.min.js';
            s.parentNode.insertBefore(p, s);
        })();
    </script>
</head>
<body class="site com_rsform view-rsform layout-default task-display itemid-220">
    <!-- Google Tag Manager -->
    <noscript><iframe src="https://www.googletagmanager.com/ns.html?id=GTM-WWC8WL" height="0" width="0" style="display:none;visibility:hidden"></iframe></noscript>
    <script>(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src='https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);})(window,document,'script','dataLayer','GTM-WWC8WL');</script>
    <!-- End Google Tag Manager -->
<!-- Top Nav -->
<nav class="navigation" role="navigation">
    <div id="mega-menu" class="navbar navbar-expand-md py-md-1">
        <div class="container-xxl">
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#primaryMenu" aria-controls="primaryMenu" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>

            <div class="navbar-collapse collapse" id="primaryMenu">
	<ul id="nav-joomla" class="navbar-nav">
		<li class="dropdown">
			<button type="button" class="btn dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
				<span dir="ltr"><span aria-hidden="true" class="fab fa-joomla"></span> Joomla!<sup>&reg;</sup></span> <span class="caret"></span>
			</button>
			<ul class="dropdown-menu">
				<li class="dropdown-item nav-header"><span>About us</span></li>
				<li>
					<a class="dropdown-item" href="https://www.joomla.org">
						<span aria-hidden="true" class="icon-joomla"></span> Joomla Home
					</a>
				</li>
				<li><a class="dropdown-item" href="https://www.joomla.org/about-joomla.html">What is Joomla?</a></li>
				<li><a class="dropdown-item" href="https://www.joomla.org/core-features.html">Benefits &amp; Features</a></li>
				<li><a class="dropdown-item" href="https://www.joomla.org/about-joomla/the-project.html">Project &amp; Leadership</a></li>
				<li><a class="dropdown-item" href="https://tm.joomla.org">Trademark &amp; Licensing</a></li>
				<li><a class="dropdown-item" href="https://joomlafoundation.org">The Joomla Foundation</a></li>
				<li class="dropdown-divider"></li>
				<li class="dropdown-item nav-header"><span>Support us</span></li>
				<li><a class="dropdown-item" href="https://www.joomla.org/contribute-to-joomla.html">Contribute</a></li>
				<li><a class="dropdown-item" href="https://www.joomla.org/sponsor.html">Sponsor</a></li>
				<li><a class="dropdown-item" href="https://www.joomla.org/about-joomla/partners.html">Partner</a></li>
				<li><a class="dropdown-item" href="https://shop.joomla.org">Shop</a></li>
			</ul>
		</li>
		<li class="dropdown">
			<button type="button" class="btn dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
				Download &amp; Extend <span class="caret"></span>
			</button>
			<ul class="dropdown-menu">
				<li><a class="dropdown-item" href="https://downloads.joomla.org">Downloads</a></li>
				<li><a class="dropdown-item" href="https://extensions.joomla.org">Extensions</a></li>
				<li><a class="dropdown-item" href="https://community.joomla.org/translations.html">Languages</a></li>
				<li><a class="dropdown-item" href="https://launch.joomla.org">Get a free site</a></li>
				<li><a class="dropdown-item" href="https://domains.joomla.org">Get a domain</a></li>
			</ul>
		</li>
		<li class="dropdown">
			<button type="button" class="btn dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
				Discover &amp; Learn <span class="caret"></span>
			</button>
			<ul class="dropdown-menu">
				<li><a class="dropdown-item" href="https://docs.joomla.org">Documentation</a></li>
				<li><a class="dropdown-item" href="https://community.joomla.org/joomla-training.html">Training</a></li>
				<li><a class="dropdown-item" href="https://certification.joomla.org">Certification</a></li>
				<li><a class="dropdown-item" href="https://showcase.joomla.org">Site Showcase</a></li>
				<li><a class="dropdown-item" href="https://www.joomla.org/announcements.html">Announcements</a></li>
				<li><a class="dropdown-item" href="https://community.joomla.org/blogs.html">Blogs</a></li>
				<li><a class="dropdown-item" href="https://magazine.joomla.org">Magazine</a></li>
			</ul>
		</li>
		<li class="dropdown">
			<button type="button" class="btn dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
				Community &amp; Support <span class="caret"></span>
			</button>
			<ul class="dropdown-menu">
				<li><a class="dropdown-item" href="https://community.joomla.org">Community Portal</a></li>
				<li><a class="dropdown-item" href="https://community.joomla.org/events.html">Events</a></li>
				<li><a class="dropdown-item" href="https://community.joomla.org/user-groups.html">User Groups</a></li>
				<li><a class="dropdown-item" href="https://forum.joomla.org">Forum</a></li>
				<li><a class="dropdown-item" href="https://community.joomla.org/service-providers-directory.html">Service Providers Directory</a></li>
				<li><a class="dropdown-item" href="https://volunteers.joomla.org">Volunteers Portal</a></li>
				<li><a class="dropdown-item" href="https://extensions.joomla.org/vulnerable-extensions/vulnerable/">Vulnerable Extensions List</a></li>
			</ul>
		</li>
		<li class="dropdown">
			<button type="button" class="btn dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
				Developer Resources <span class="caret"></span>
			</button>
			<ul class="dropdown-menu">
				<li><a class="dropdown-item" href="https://developer.joomla.org">Developer Network</a></li>
				<li><a class="dropdown-item" href="https://developer.joomla.org/security.html">Security Centre</a></li>
				<li><a class="dropdown-item" href="https://issues.joomla.org">Issue Tracker</a></li>
				<li><a class="dropdown-item" href="https://github.com/joomla">GitHub</a></li>
				<li><a class="dropdown-item" href="https://api.joomla.org">API Documentation</a></li>
				<li><a class="dropdown-item" href="https://framework.joomla.org"><span dir="ltr">Joomla!</span> Framework</a></li>
			</ul>
		</li>
	</ul>
	<div id="nav-search" class="navbar-search float-md-end">
		
<form class="mod-finder js-finder-searchform form-search" action="/search.html" method="get" role="search">
    <label for="mod-finder-searchword315" class="visually-hidden finder">Search</label><input type="text" name="q" id="mod-finder-searchword315" class="js-finder-search-query form-control" value="" placeholder="Search &hellip;">
            </form>

	</div>
</div>
        </div>
    </div>
</nav>
<!-- Header -->
<header class="header">
    <div class="container-md">
        <div class="row">
            <div class="col-md-7">
                <h1 class="page-title">
                    <a href="/"><span aria-hidden="true" class="icon-joomla me-2"></span>Joomla!</a>
                </h1>
            </div>
            <div class="col-md-5">
                <div class="btn-toolbar pt-md-1 row">
                    <div class="btn-group col-6">
                        <a href="https://downloads.joomla.org/" class="btn btn-lg btn-warning">Download</a>
                    </div>
                    <div class="btn-group col-6">
                        <a href="https://launch.joomla.org" class="btn btn-lg btn-primary">Launch<span aria-hidden="true" class="icon-rocket"></span></a>
                    </div>
                </div>
            </div>
        </div>
    </div>
</header>
<nav class="subnav-wrapper">
    <div class="subnav">
        <div class="container-md">
            <ul class="mod-menu mod-list nav  nav-pills">
<li class="nav-item item-122 default"><a href="/" class="nav-link">Home</a></li><li class="nav-item item-153 parent"><a href="/about-joomla.html" class="nav-link">About Joomla!</a></li><li class="nav-item item-195"><a href="/core-features.html" class="nav-link">Benefits &amp; Features</a></li><li class="nav-item item-466"><a href="https://5.joomla.org/" class="nav-link">Joomla! 5</a></li><li class="nav-item item-154 parent"><a href="/announcements.html" class="nav-link">News</a></li><li class="nav-item item-348"><a href="/contribute-to-joomla.html" class="nav-link">Contribute</a></li><li class="nav-item item-220 current active"><a href="/media-contact.html" class="nav-link" aria-current="page">Press Enquiries</a></li></ul>

        </div>
    </div>
</nav>
<!-- Body -->
<div class="body">
    <div class="container">
        
        <div class="row">
                        <main id="content" class="col-md-9">
                <!-- Begin Content -->
                
                <div id="system-message-container" aria-live="polite"></div>

                <h1>Contact for Press and Media only</h1>
<form method="post"  id="userForm" class="well" action="https://www.joomla.org/media-contact.html">
<!-- Do not remove this ID, it is used to identify the page so that the pagination script can work correctly -->
<fieldset class="formContainer" id="rsform_7_page_0">
    <div class="row">
        <div class="col-md-12">
            <div class="rsform-block rsform-block-intro">
                Welcome to the Joomla! Media Contact Form. <br />
Please select from the below list the reason you are contacting us today, so we can provide the correct form for you. <br />
This form is strictly for Media queries. <br />Please do not use it for support requests or general questions about Joomla. These requests won't be answered.
            </div>
            <div class="row mb-3 rsform-block rsform-block-whyareyoucontactingus">
                <label class="col-sm-3 col-form-label formControlLabel" data-bs-toggle="tooltip" title="" for="WhyAreYouContactingUs">Why are you looking to contact us?<strong class="formRequired">(*)</strong></label>
                <div class="formControls col-sm-9">
                    <select name="form[WhyAreYouContactingUs][]" id="WhyAreYouContactingUs" class="rsform-select-box form-control form-select" aria-required="true"><option value="-- Please Select --">-- Please Select --</option><option value="Looking to get in touch with the Media &amp; Marketing team">Looking to get in touch with the Media &amp; Marketing team</option><option value="I need support for my website">I need support for my website</option><option value="I have trouble with my administrator login">I have trouble with my administrator login</option><option value="I'm looking for Joomla experts">I'm looking for Joomla experts</option><option value="I'm looking for tutorials">I'm looking for tutorials</option><option value="I have issue with an extension ">I have issue with an extension </option><option value="I found a bug in Joomla Core">I found a bug in Joomla Core</option></select>
                    <div><span class="formValidation"><span id="component70" class="formNoError">Invalid Input</span></span></div>
                </div>
            </div>
            <div class="row mb-3 rsform-block rsform-block-name">
                <label class="col-sm-3 col-form-label formControlLabel" data-bs-toggle="tooltip" title="" for="Name">Your Name<strong class="formRequired">(*)</strong></label>
                <div class="formControls col-sm-9">
                    <input type="text" value="" size="20" name="form[Name]" id="Name" class="rsform-input-box form-control" aria-required="true" />
                    <div><span class="formValidation"><span id="component64" class="formNoError">Please let us know your name.</span></span></div>
                </div>
            </div>
            <div class="row mb-3 rsform-block rsform-block-email">
                <label class="col-sm-3 col-form-label formControlLabel" data-bs-toggle="tooltip" title="" for="Email">Your Email<strong class="formRequired">(*)</strong></label>
                <div class="formControls col-sm-9">
                    <input type="email" value="" size="20" name="form[Email]" id="Email" class="rsform-input-box form-control" aria-required="true" />
                    <div><span class="formValidation"><span id="component65" class="formNoError">Please let us know your email address.</span></span></div>
                </div>
            </div>
            <div class="row mb-3 rsform-block rsform-block-subject">
                <label class="col-sm-3 col-form-label formControlLabel" data-bs-toggle="tooltip" title="" for="Subject">Subject<strong class="formRequired">(*)</strong></label>
                <div class="formControls col-sm-9">
                    <input type="text" value="" size="20" name="form[Subject]" id="Subject" class="rsform-input-box form-control" aria-required="true" />
                    <div><span class="formValidation"><span id="component66" class="formNoError">Please write a subject for your message.</span></span></div>
                </div>
            </div>
            <div class="row mb-3 rsform-block rsform-block-message">
                <label class="col-sm-3 col-form-label formControlLabel" data-bs-toggle="tooltip" title="" for="Message">Message<strong class="formRequired">(*)</strong></label>
                <div class="formControls col-sm-9">
                    <textarea cols="50" rows="5" name="form[Message]" id="Message" class="rsform-text-box form-control" aria-required="true"></textarea>
                    <div><span class="formValidation"><span id="component67" class="formNoError">Please let us know your message.</span></span></div>
                </div>
            </div>
            <div class="row mb-3 rsform-block rsform-block-requestconsent">
                <label class="col-sm-3 col-form-label pt-0 formControlLabel" data-bs-toggle="tooltip" title="" id="RequestConsent-grouplbl"><strong class="formRequired">(*)</strong></label>
                <div class="formControls col-sm-9" role="group" aria-labelledby="RequestConsent-grouplbl">
                    <div class="form-check form-check-inline"><input type="checkbox"  name="form[RequestConsent][]" value="Iagree" id="RequestConsent0" class="rsform-checkbox form-check-input" aria-required="true" /> <label id="RequestConsent0-lbl" for="RequestConsent0" class="form-check-label">I consent to Joomla.org collecting and storing my data through this form. <br  /> Read our <a href="https://www.joomla.org/privacy-policy.html">Privacy Policy</a></label></div> 
                    <div><span class="formValidation"><span id="component78" class="formNoError">In order to submit this form, you'll need to offer your consent.</span></span></div>
                </div>
            </div>
            <div class="rsform-block rsform-block-ineedsupportformywebsite">
                <div class="alert alert-info"><p>For support with your website, you can ask for help at the <a href="https://forum.joomla.org" class="alert-link" alt="Joomla! Community Forums">Joomla! Forum</a></p>
<p>Or checkout the <a href="https://docs.joomla.org" class="alert-link" alt="Joomla! Documentation">Joomla! Documentation</a></p></div>
            </div>
            <div class="rsform-block rsform-block-joomlabug">
                <div class="alert alert-info">Please report any bug you may find on the <a href="https://issues.joomla.org" class="alert-link" alt="Joomla! Issue Tracker">Joomla! Issue Tracker</a>.</div>
            </div>
            <div class="rsform-block rsform-block-troublewithadminlogin">
                <div class="alert alert-info"><p>Please follow the <a href="https://docs.joomla.org/Special:MyLanguage/How_do_you_recover_or_reset_your_admin_password%3F" class="alert-link" alt="How do you recover or reset your admin password">"How do you recover or reset your admin password"</a> guide in our documentation.</p>
<p>If you require additional help, please use the <a href="https://forum.joomla.org/" class="alert-link" alt="Joomla! community forums">Joomla! Forum</a>.</p>
</div>
            </div>
            <div class="rsform-block rsform-block-iamlookingforjoomlaexperts">
                <div class="alert alert-info">You can find Joomla experts at our <a href="https://resources.joomla.org" class="alert-link" alt="Joomla! Resources Directory">Joomla! Resources Directory</a></div>
            </div>
            <div class="rsform-block rsform-block-iamlookingfortutorials">
                <div class="alert alert-info">You can find a whole range of documentation in our <a href="https://docs.joomla.org" class="alert-link" alt="Joomla! Documentation">documentation wiki</a> and tutorials at the documentation wiki's <a href="https://docs.joomla.org/Special:MyLanguage/Portal:Beginners" class="alert-link" alt="Joomla! Documentation Tutorials">beginners portal</a></div>
            </div>
            <div class="rsform-block rsform-block-ihaveissueswithanextension">
                <div class="alert alert-info">We suggest that you contact the extension developer. If you have an issue the developer cannot resolve you may report the extension at the <a href="https://extensions.joomla.org" class="alert-link" alt="Joomla! Extensions">Joomla! Extensions Directory</a></div>
            </div>
            <div class="row mb-3 rsform-block rsform-block-hcaptcha">
                <label class="col-sm-3 col-form-label formControlLabel" data-bs-toggle="tooltip" title=""><strong class="formRequired">(*)</strong></label>
                <div class="formControls col-sm-9">
                    <div id="h-captcha-117"></div>
                    <div><span class="formValidation"><span id="component117" class="formNoError">Please complete the captcha</span></span></div>
                </div>
            </div>
            <div class="row mb-3 rsform-block rsform-block-send">
                <label class="col-sm-3 col-form-label formControlLabel" data-bs-toggle="tooltip" title=""></label>
                <div class="formControls col-sm-9">
                    <input type="submit" name="form[Send]" id="Send" class="rsform-submit-button  btn btn-primary" value="Send" />
                    <div><span class="formValidation"></span></div>
                </div>
            </div>
        </div>
    </div>
</fieldset>
<div class="text-center btn-group"><a class="btn btn-success btn-lg" href="/about-joomla/the-project/media-and-press-contact.html" title="Joomla in the Press">Media Alerts & Press Releases</a>&nbsp;  &nbsp;<a class="btn btn-success btn-lg" href="/images/press-logos/Brochure-Joomla-2019.pdf" target="_blank" title="Joomla Brochure">Joomla's Brochure</a></div><input type="hidden" name="form[formId]" value="7"/><input type="hidden" name="c2dbc59da6df1038e51398acf9f8510b" value="1"></form>
                
                <!-- End Content -->
            </main>
                            <aside class="col-md-3">
                    <!-- Begin Right Sidebar -->
                    <div class="moduletable ">
            <h3 >About Joomla!</h3>        <ul class="mod-menu mod-list nav  flex-column nav-tabs">
<li class="nav-item item-168"><a href="/about-joomla.html" class="nav-link">What is Joomla?</a></li><li class="nav-item item-169"><a href="/about-joomla/getting-started.html" class="nav-link">Getting Started</a></li><li class="nav-item item-170"><a href="/about-joomla/create-and-share.html" class="nav-link">Create and Share</a></li><li class="nav-item item-347"><a href="/contribute-to-joomla.html" class="nav-link">Get Involved</a></li><li class="nav-item item-174 deeper parent"><a href="/about-joomla/the-project.html" class="nav-link">About The Joomla! Project</a><ul class="mod-menu__sub list-unstyled small"><li class="nav-item item-194"><a href="/about-joomla/the-project/mission-vision-and-values.html" class="nav-link">Mission, Vision &amp; Values</a></li><li class="nav-item item-187"><a href="/about-joomla/the-project/code-of-conduct.html" class="nav-link">Code of Conduct</a></li><li class="nav-item item-175"><a href="https://volunteers.joomla.org/board-of-directors" class="nav-link" target="_blank" rel="noopener noreferrer">Board of Directors</a></li><li class="nav-item item-178"><a href="/about-joomla/partners.html" class="nav-link">Partners</a></li><li class="nav-item item-757"><a href="/about-joomla/extension-partners.html" class="nav-link">Extension Partners</a></li><li class="nav-item item-602"><a href="/about-joomla/the-project/media-and-press-contact.html" class="nav-link">Media &amp; Press</a></li><li class="nav-item item-192"><a href="https://docs.joomla.org/Special:MyLanguage/Joomla:Brand_Identity_Elements" class="nav-link" target="_blank" rel="noopener noreferrer">Conditional Use Logos</a></li></ul></li><li class="nav-item item-933"><a href="https://showcase.joomla.org/case-studies.html" class="nav-link">Joomla! Case Studies</a></li><li class="nav-item item-795"><a href="https://community.joomla.org/the-joomla-shop.html#!/" class="nav-link">Joomla! Shop</a></li><li class="nav-item item-232"><a href="https://docs.joomla.org/Special:MyLanguage/Joomla_info_page" class="nav-link" target="_blank" rel="noopener noreferrer">Joomla! In Your Language</a></li><li class="nav-item item-229"><a href="/mailing-lists.html" class="nav-link">Joomla! Mailing Lists</a></li><li class="nav-item item-658"><a href="https://community.joomla.org/general-newsletter.html" class="nav-link">Joomla! Newsletter</a></li><li class="nav-item item-431"><a href="/rss-news-feeds.html" class="nav-link">Joomla! RSS News Feeds</a></li><li class="nav-item item-184"><a href="https://downloads.joomla.org/technical-requirements" class="nav-link">Technical Requirements</a></li></ul>
</div>
<div class="moduletable ">
            <h3 >Contributing to Joomla!</h3>        <ul class="mod-menu mod-list nav  flex-column nav-tabs">
<li class="nav-item item-375"><a href="/sponsor.html" class="nav-link">Corporate Sponsorships</a></li><li class="nav-item item-269"><a href="/current-sponsors.html" class="nav-link">Corporate Sponsors</a></li><li class="nav-item item-794"><a href="https://community.joomla.org/sponsorship-campaigns.html" class="nav-link">Community Sponsorships</a></li><li class="nav-item item-355"><a href="https://volunteers.joomla.org/" class="nav-link">Volunteers Portal</a></li></ul>
</div>

<div id="mod-custom334" class="mod-custom custom">
    <a href="https://community.joomla.org/general-newsletter.html" class="btn btn-primary btn-lg">Subscribe to our Newsletters</a></div>

                    <!-- End Right Sidebar -->
                </aside>
                    </div>
            </div>
</div>
<!-- Footer -->
<footer class="footer text-center">
    <div class="container">
        <hr />
        

        <div class="social">
	<ul class="soc">
		<li><a href="https://twitter.com/joomla" target="_blank" rel="noopener" title="Joomla! on Twitter"><span aria-hidden="true" class="fab fa-twitter"></span><span class="visually-hidden">Joomla! on Twitter</span></a></li>
		<li><a href="https://www.facebook.com/joomla" target="_blank" rel="noopener" title="Joomla! on Facebook"><span aria-hidden="true" class="fab fa-facebook"></span><span class="visually-hidden">Joomla! on Facebook</span></a></li>
		<li><a href="https://www.youtube.com/user/joomla" target="_blank" rel="noopener" title="Joomla! on YouTube"><span aria-hidden="true" class="fab fa-youtube"></span><span class="visually-hidden">Joomla! on YouTube</span></a></li>
		<li><a href="https://www.linkedin.com/company/joomla" target="_blank" rel="noopener" title="Joomla! on LinkedIn"><span aria-hidden="true" class="fab fa-linkedin"></span><span class="visually-hidden">Joomla! on LinkedIn</span></a></li>
		<li><a href="https://www.pinterest.com/joomla" target="_blank" rel="noopener" title="Joomla! on Pinterest"><span aria-hidden="true" class="fab fa-pinterest"></span><span class="visually-hidden">Joomla! on Pinterest</span></a></li>
		<li><a href="https://www.instagram.com/joomlaofficial/" target="_blank" rel="noopener" title="Joomla! on Instagram"><span aria-hidden="true" class="fab fa-instagram"></span><span class="visually-hidden">Joomla! on Instagram</span></a></li>
		<li><a href="https://github.com/joomla" target="_blank" rel="noopener" title="Joomla! on GitHub"><span aria-hidden="true" class="fab fa-github"></span><span class="visually-hidden">Joomla! on GitHub</span></a></li>
	</ul>
</div>

<div class="footer-menu">
	<nav class="navbar navbar-expand">
		<div class="container-fluid">
			<ul class="navbar-nav mx-auto flex-wrap">
				<li class="nav-item"><a class="nav-link" href="https://www.joomla.org"><span>Home</span></a></li>
				<li class="nav-item"><a class="nav-link" href="https://www.joomla.org/about-joomla.html"><span>About</span></a></li>
				<li class="nav-item"><a class="nav-link" href="https://community.joomla.org"><span>Community</span></a></li>
				<li class="nav-item"><a class="nav-link" href="https://forum.joomla.org"><span>Forum</span></a></li>
				<li class="nav-item"><a class="nav-link" href="https://extensions.joomla.org"><span>Extensions</span></a></li>
				<li class="nav-item"><a class="nav-link" href="https://community.joomla.org/service-providers-directory.html"><span>Services</span></a></li>
				<li class="nav-item"><a class="nav-link" href="https://docs.joomla.org"><span>Docs</span></a></li>
				<li class="nav-item"><a class="nav-link" href="https://developer.joomla.org"><span>Developer</span></a></li>
				<li class="nav-item"><a class="nav-link" href="https://community.joomla.org/the-joomla-shop.html"><span>Shop</span></a></li>
			</ul>
		</div>
	</nav>

	<nav class="navbar navbar-expand">
		<div class="container-fluid">
			<ul class="navbar-nav mx-auto flex-wrap">
				<li class="nav-item"><a class="nav-link" href="https://www.joomla.org/accessibility-statement.html">Accessibility Statement</a></li>
				<li class="nav-item"><a class="nav-link" href="https://www.joomla.org/privacy-policy.html">Privacy Policy</a></li>
				<li class="nav-item"><a class="nav-link" href="https://www.joomla.org/cookie-policy.html">Cookie Policy</a></li>
				<li class="nav-item"><a class="nav-link" href="https://community.joomla.org/sponsorship-campaigns.html">Sponsor Joomla! with $5</a></li>
				<li class="nav-item"><a class="nav-link" href="https://joomla.crowdin.com" target="_blank" rel="noopener">Help Translate</a></li>
				<li class="nav-item"><a class="nav-link" href="https://github.com/joomla/joomla-websites/issues/new?title=[joomla.org]%20&body=Please%20describe%20the%20problem%20or%20your%20issue">Report an Issue</a></li>
				<li class="nav-item"><a class="nav-link" href="/login.html">Log in</a></li>
			</ul>
		</div>
	</nav>

	<p class="copyright">&copy; 2005 - 2024 <a href="https://opensourcematters.org">Open Source Matters, Inc.</a> All Rights Reserved.</p>

	<div class="hosting">
		<div class="hosting-image"><a href="https://www.rochen.com/joomla-hosting" rel="noopener" target="_blank"><img class="rochen" src="https://cdn.joomla.org/rochen/rochen_footer_logo_white.svg" alt="Rochen" /></a></div>
		<div class="hosting-text"><a href="https://www.rochen.com/joomla-hosting" rel="noopener" target="_blank"><span dir="ltr">Joomla!</span> Hosting by Rochen</a></div>
	</div>
</div>

<div id="adblock-msg" class="alert alert-danger d-none">
	<button class="btn-close" data-bs-dismiss="alert" href="#"><span class="visually-hidden">Close</span></button>
	<span class="fa fa-triangle-exclamation"></span>
	We have detected that you are using an ad blocker. The Joomla! Project relies on revenue from these advertisements so please consider disabling the ad blocker for this domain.
</div>
    </div>
</footer>


</body>
</html>