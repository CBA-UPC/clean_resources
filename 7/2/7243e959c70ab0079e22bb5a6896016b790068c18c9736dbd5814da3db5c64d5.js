(function ($) {
    $(document).ready(function () {
        if (document.querySelector('.privacy-toggle')) {

            /**
             * CSP Opt Out
             */
            //csp opt-out slider
            $.ajax({ // get status of optout
                url: "https://www.hlserve.com/delivery/optout?status=1",

                // Tell jQuery we're expecting JSONP
                dataType: "jsonp",

                // Work with the response
                success: function (response) {
                    if (response && response.status === "OK")
                        if (response['opt-out'] === 'True') { // user is NOT opted out
                            $("#csp-switch .btn#opted-in").removeClass("active");
                            // and activate the opted-out option.
                            $("#csp-switch .btn#opted-out").addClass("active");

                        }
                }
            });

            //handle clicks on CSP
            $('#csp-switch #opted-out').on('click', function () { //handle opt out
                if (!$('#csp-switch #opted-out').hasClass('active')) {
                    $.ajax({
                        url: "https://www.hlserve.com/delivery/optout?oo=1",

                        // Tell jQuery we're expecting JSONP
                        dataType: "jsonp",

                        // Work with the response
                        success: function (response) {
                            console.log('CSP opted out');
                            $("#optout-messages li.active").toggleClass("active");
                            $(".optout-csp").addClass("active");
                            dataLayer.push({
                                'event': 'Opt-Out SP-On'
                            });
                        }
                    }).fail(function () {
                        $("#optout-messages li.active").toggleClass("active");
                        $(".optout-csp-error").addClass("active");

                    });
                }

            })

            $('#csp-switch #opted-in').on('click', function () { //handle opt In
                if (!$('#csp-switch #opted-in').hasClass('active')) {
                    $.ajax({
                        url: "https://www.hlserve.com/delivery/optout?oo=0",

                        // Tell jQuery we're expecting JSONP
                        dataType: "jsonp",

                        // Work with the response
                        success: function (response) {
                            console.log('CSP opted In');
                            $("#optout-messages li.active").toggleClass("active");
                            $(".optout-csp-in").addClass("active");
                            dataLayer.push({
                                'event': 'Opt-Out SP-Off'
                            });

                        }
                    }).fail(;
                }

            })


            /**
             * CDR Opt Out
             */
            // Criteo Dynamic Retargeting opting out.
            // Defining new CriteoOptout object:
            function CriteoOptout() {

                // Properties.
                this.token = null;
                this.loadedOnce = false;
                this.loader = $(".loader-wrapper");
                this.messages = $("#optout-messages");

                // Methods.
                this.callback = function (r, token) {
                    this.token = token;
                    if (r === "nocookie" || r === "cookie") {
                        if (this.loadedOnce) {
                            this.messages
                                .find("li.active")
                                .removeClass("active")
                                .end()
                                .find(".optout-optin")
                                .addClass("active");
                            dataLayer.push({
                                'event': 'Opt-Out DR-Off'
                            });

                        }
                    } else if (r === "optedout") {
                        if (this.loadedOnce) {
                            if ($(".cross-device-opt-out").is(":checked")) {
                                this.messages
                                    .find("li.active")
                                    .removeClass("active")
                                    .end()
                                    .find(".optout-cross-browser")
                                    .addClass("active");
                                //opt out of Dynamic Retargeting

                                dataLayer.push({
                                    'event': 'Opt-Out DR-On All'
                                });


                            } else {
                                this.messages
                                    .find("li.active")
                                    .removeClass("active")
                                    .end()
                                    .find(".optout-optout")
                                    .addClass("active");
                                dataLayer.push({
                                    'event': 'Opt-Out DR-On'
                                });

                            }
                        } else {
                            // If opted out: deactivate the opted-in option,
                            $("#cdr-switch .btn#opted-in").removeClass("active");
                            // and activate the opted-out option.
                            $("#cdr-switch .btn#opted-out").addClass("active");
                            $("input[type='radio'][name='privacy-opt-out']")
                                .not(':checked')
                                .prop("checked", true);
                        }
                    } else {
                        this.messages
                            .find("li.active")
                            .removeClass("active")
                            .end()
                            .find(".optout-error")
                            .addClass("active");
                    }
                    this.loadedOnce = true;
                    $(".optout-script").remove();
                };

                var d = new Date();
                var script = document.createElement("script");
                script.src = "https://privacy.criteo.com/api/criteocorpoptout/status";
                script.className = "optout-script";
                document.body.appendChild(script);
            }

            // Creating new instance.
            window.criteo_optout = new CriteoOptout();

            $("#cdr-switch .btn").on("change", function () {
                var optoutStatus = $("input[type='radio'][name='privacy-opt-out']").filter(":checked").val();
                var isCrossBrowser = $(".cross-device-opt-out").is(":checked");
                d = new Date();
                var action = "";
                var script = document.createElement("script");
                script.className = "optout-script";
                if (isCrossBrowser && (optoutStatus === "opt-out")) {
                    action = "crossdeviceoptout";
                } else if (optoutStatus === "opt-out") {
                    action = "optout";
                } else {
                    action = "optin";
                }
                var url = "https://privacy.criteo.com/api/criteocorpoptout/" + action + "?token=" + window.criteo_optout.token;
                script.src = url;
                document.body.appendChild(script);
            });
        }
    });

})(jQuery);