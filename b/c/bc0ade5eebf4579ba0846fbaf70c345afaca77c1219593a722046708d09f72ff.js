Ext.ns('Ext.IR');
Ext.HeaderSplitButton = Ext.extend(Ext.SplitButton, {
	type: 'submit',
	height: 49,
	initComponent: 
   	handler: function() {
		if(this.menu) {
			this.maybeShowMenu();
		}
		else if(this.loc) {
			window.location = this.loc;
		}
   	}
});

function toggleCaret(el) {
	if(el.getEl()) {
		var caret = el.getEl().select('.fa');
		caret.toggleCls('fa-caret-down');
		caret.toggleCls('fa-caret-right');
	}
}

function showHideAdvertiserCampaigns(el, e) {
	if(el.campaignItems) {
		for(var i = 0; i < el.campaignItems.length; i++) {
			var item = el.campaignItems[i];
			item.setVisible(item.isHidden());
		}
	}
	else {
		if(el.loading) {
			return;
		}
		el.loading = true;

		Ext.Ajax.request({
			url: '/secure/nositemesh/getAdvertiserCampaignLinks.ihtml?aid=' + el.aid
						+ '&uid=' + el.uid + '&isAllCampaigns=' + /.*\/adview.*/.test(window.location.href),
			method: 'GET',
			success: function (response) {
				var campaignLinks = Ext.JSON.decode(response.responseText),
					index = el.parentMenu.items.indexOf(el);

				el.campaignItems = [];

				for(var i = 0; i < campaignLinks.length; i++) {
					var item = el.parentMenu.insert((index + i + 1), {
						text: Ext.util.Format.htmlEncode(truncateLabel(campaignLinks[i].label, 35)),
						href: campaignLinks[i].value,
						cls: campaignLinks[i].active ? 'uitkMenuItemGrandchild uitkSelectedMenuItem' : 'uitkMenuItemGrandchild',
						margin: (i == campaignLinks.length - 1) ? '0 0 3 0' : '0'
					});

					el.campaignItems.push(item);
				}
			}
		});
	}

	toggleCaret(el);
}

function setPageHeight() {
	var main = Ext.get('main-content');
	if(main && main.dom.classList.contains('newDashNav')) { // this is handled by css on partner side; this should be removed on Adv and Agency sides when converting nav to Vue
		return;
	}

	var left = Ext.get('controlPanel'),
		minHeight = Ext.getBody().getViewSize().height - 90;
	//-50 for header height, -40 for footer height

	if(Ext.get('settingsBackHolder')) {
		minHeight -= 50;
	}
	
	if(main) {
		if(left) {
			minHeight = Math.max(minHeight, left.dom.offsetHeight);
		}

		Ext.ux.BodyHeight = minHeight;
		main.setStyle('min-height', (minHeight + 'px'));
	}
}

UitkPubSub.subscribe('uitkReady',function(e) {
	var containingDiv = e || '';
	setPageHeight();
	
});

Ext.onReady(function() {
	var cp = Ext.get('controlPanel'),
		getCls = 
	if(cp) {
		cp.select('.level2 li:has(ul) > a').addCls('irNavToggleable').each(function(el) {
			el.insertHtml('afterBegin','<i class="' + getCls(el.parent()) + '"></i>');
		});
		cp.select('li:has(ul) > a').on('click',function(e) {
			e.preventDefault();
			var el = Ext.get(this).parent(),
				cls = el.parent().hasCls('level2') ? 'active' : 'selected';
			el.toggleCls(cls);
			if(this.children[0] && (this.children[0].className != 'uitkNewFeature')) {
				this.children[0].className = getCls(el);
			}

			Ext.EventManager.resizeEvent.fire(Ext.Element.getViewWidth(), Ext.Element.getViewHeight());
		});
	}
	Ext.EventManager.onWindowResize(;
});

function truncateLabel(label, maxLength) {
	var stripped = Ext.util.Format.stripTags(label),
		parsed = stripped.match(/(.+)( [0-9]+)$/),
		result = '';

	if(parsed) {
		result += Ext.util.Format.ellipsis(Ext.String.trim(parsed[1]), maxLength, false);
		result += ' ';
		result += parsed[2];

		return result;
	}

	return Ext.util.Format.ellipsis(label, maxLength, false);
}


function checkForEmailUniqueness(email, privatePartnerships, idOrClearFunction){
    var url = "/signup/isEmailUnique.json";
    var loginUrl = '/login.user';
    var parameters = "email="+email+"&privatePartnerships="+privatePartnerships;
    fetch(url, {
        method: 'POST',
        body: JSON.stringify(parameters),
        credentials: 'include',
        headers: {'content-type': 'application/json', 'Is-Ajax-Request': true, 'uitk_csrf' : getCsrfToken()}
    })
        .then(
        .then(function (value) {
			if(!value) {
                return window.require(['rvc!ui/pagespecific/signup/email-validation-modal'], function (jp) {
                    new jp({
                        el: document.body,
						append: true,
                        data:                     }).show()
                })
            }})
        .catch(;
}

function clearEmailField(idOrClearFunction) {
    if(typeof idOrClearFunction === "function") {
        idOrClearFunction();
    } else {
        document.getElementById(idOrClearFunction).value="";
    }
}

function checkEmail(id,privatePartnerships) {
    document.getElementById(id).addEventListener('change', ;
}

function getCsrfToken(){
    var meta = Ext.select('meta[name=csrf-token]').first(), token = meta != undefined ? meta.dom.content : undefined;
    return token;
}

function linkDropdowns(maxRejectionRatingLevel, minApprovalRatingLevel) {

	let firstElement = document.querySelector('select[name*="'+maxRejectionRatingLevel+'"]');
	let secondElement = document.querySelector('select[name*="'+minApprovalRatingLevel+'"]');

	let secondOptions = [ ...secondElement.querySelectorAll('option') ]
		.map(node => {return {label:node.innerText, value: node.value}});

	firstElement.addEventListener("change", function(ev) {
        let first = ev.target.value / 1;
		let options = secondOptions.filter(option => option.value / 1 > first)
			.map(option => `<option value="${option.value}">${option.label}</option>`)
			.join("");

		secondElement.innerHTML = options;
	})
}

function removeAppInstallForBlockRule(first, second) {
	let actionElement = document.querySelector("select[name*='" + first + "']");
	let templateElement = document.querySelector("select[name*='" + second + "']");

	let templateOptions = [ ...templateElement.querySelectorAll('option') ]
		.map(;

	actionElement.addEventListener("change", function(ev) {
		let actionValue = ev.target.value;

		let options = templateOptions.filter(
			.map(option => `<option value="${option.value}">${option.label}</option>`)
			.join("");

		if (actionValue === "BLOCK") {
			options = templateOptions.filter(
				.map(
				.join("");
		}

		templateElement.innerHTML = options;
		templateElement.dispatchEvent(new Event('change'));
	})
}