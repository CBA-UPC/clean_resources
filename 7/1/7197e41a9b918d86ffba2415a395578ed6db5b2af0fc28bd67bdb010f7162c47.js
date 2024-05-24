function onBack() {
	$$('#content > form').first().submit();
}

// Simulate the user selecting the submit button
// Assumes the form in the content area is the target

var _lastSelected;
function setSelection(_id) {
	if (_lastSelected != undefined) {
		Element.removeClassName(_lastSelected, 'selected');
	}	
	_lastSelected = _id;

	if (_id !== undefined) {
		$('selected').value = _id;
		Element.addClassName(_id, 'selected');
	}
}

var _cbArray=new Array();
var _cbSelectedArray=new Array();
function setSelectionCb(_id,cbGroup) {
	if (_cbSelectedArray[cbGroup] != undefined) {
		($$('#content > form').first()).getInputs('checkbox').find(.checked = false;
		Element.removeClassName(_cbSelectedArray[cbGroup], 'selected');
	}	

	if (_id !== undefined) {
		_cbSelectedArray[cbGroup] = _id;
		($$('#content > form').first()).getInputs('checkbox').find(.checked=true;
		Element.addClassName(_id, 'selected');
	}
	
	var nofSelections = 0;
	($$('#content > form').first()).getInputs('checkbox').each(;

	($$('#content > form').first()).getInputs('submit').each(function(item){
		if (nofSelections ==_cbArray.length) {
			item.enable();
		} 
		else {
			item.disable();
		}
	});
}

// Attempt to initialize the associated thumbnails,
// selecting either the current selection, or
// the first item in the list.
$jq(document).ready(function() {
	if ($("thumbnails")) {
		selected = ($$('#content > form').first()).getInputs('checkbox');//.find(function(checkbox){return checkbox.checked==true});
		hasChecked = false;
		
		if (selected !== undefined && selected.length > 0) {
			for(var i=0; i < selected.length;i++) {
				var id = selected[i].value;
				var cbGroup = id.substring(0,id.indexOf('/'));
				
				if (_cbArray.indexOf(cbGroup) == -1) {
					_cbArray.push(cbGroup);
				}
				
				if (selected[i].checked) {
					hasChecked=true;
					setSelectionCb(id,cbGroup);
				}
			}
		}
		
		if (!hasChecked) {
			// option 1 - set of div's
			items = $$("div[class~='documentContainer']");
			if ((items == null) || (items.length == 0)) { 
				// option 2 - set of li's
				items = $$(".thumbnails > li:first-child");
			}
			if (items != undefined && items[0] != undefined && items[0].id != undefined) {
				setSelectionCb(items[0].id,items[0].id.substring(0,items[0].id.indexOf('/')));
			}
		}
	}
});
