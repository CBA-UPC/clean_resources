(function(w) {
    
    function getContactName(data) {
        var name = data.LEAD_NAME || data.CONTACT_NAME || null;
        var lastName = data.LEAD_LAST_NAME || data.CONTACT_LAST_NAME || null;
        var secondName = data.LEAD_SECOND_NAME || data.CONTACT_SECOND_NAME || null;

        var fullname = '';
        if (lastName !== null) {
            fullname = lastName;
        }
        if (name !== null) {
            fullname = fullname + ' ' + name;
        }
        if (secondName !== null) {
            fullname = fullname + ' ' + secondName;
        }
        return trim(fullname);
    }

    function getContactPhone(data) {
        return data.LEAD_PHONE || data.CONTACT_PHONE || null;
    }

    function getContactEmail(data) {
        return data.LEAD_EMAIL || data.CONTACT_EMAIL || null;
    }

    
    function sendLead(data) {
        var name = getContactName(data);
        var phone = getContactPhone(data);
        var email = getContactEmail(data);
        var comment = getContactComment(data);
        if (phone === null && email === null) {
            return;
        }
        roistatGoal.reach({name: name, phone: phone, email: email, leadName: 'Bitrix24 form lead', text: comment, is_skip_sending: 1});
    }

    // forms
    w.addEventListener('message', function (event) {
        var data = event.data;
        try {
            var decodedData = JSON.parse(data);
        } catch(e) {
            var decodedData = {};
        }
        var eventName = decodedData.eventName;
        if (eventName !== 'send') {
            return;
        }

        var values = decodedData.value;
        if (typeof values !== 'object' || values.length === 0) {
            return;
        }

        var lead = values[0];
        sendLead(lead);
    });

    // new forms
    w.addEventListener('b24:form:submit', function (event) {
        var form = event.detail.object;
        var data = {};
        form.pager.pages[0].fields.forEach(function (field) {
            data[field.name] = field.items[0].value;
        });
        sendLead(data);
    });

    // chat
    w.addEventListener('onBitrixLiveChat', function(event) {
        var widget = event.detail.widget;
        widget.subscribe({
            type: BX.LiveChatWidget.SubscriptionType.userForm,
            callback: function(data) {
                var fields = data.fields || {};
                var name = fields.name || null;
                var phone = fields.phone || null;
                var email = fields.email || null;
                roistatGoal.reach({name: name, phone: phone, email: email, leadName: 'Bitrix24 chat lead', is_skip_sending: 1});
            }
        });
    });
})(window);