(function(_ds){var window=this;var F7=class extends _ds.wA{constructor(){super(["devsite-dialog","devsite-dropdown-list","devsite-view-release-notes-dialog"]);this.Yn=!1;this.releaseNotes=new Map;this.g=null;this.path="";this.label="Release Notes";this.disableAutoOpen=!1}Va(){return this}async connectedCallback(){super.connectedCallback();try{this.path||(this.path=ateString().split(/\s+/);return f.call(e,{},c,{publishedAt:4===g.length?`${g[1]} ${Number(g[2])}, ${g[3]}`:d.toDateString()})});b.forEach(c=>{let d;const e=null!=(d=c.publishedAt)?d:"";let f;this.releaseNotes.set(e,[...(null!=(f=this.releaseNotes.get(e))?f:[]),c])})}catch(a){}0===this.releaseNotes.size?this.remove():(this.Yn=!0,this.disableAutoOpen||"#release__notes"!==location.hash||this.h())}disconnectedCallback(){super.disconnectedCallback();let a;null==(a=this.g)||a.remove();this.g=
null}h(a){a&&(a.preventDefault(),a.stopPropagation());let b;null==(b=this.g)||b.remove();this.g=document.createElement("devsite-dialog");this.g.classList.add("devsite-view-release-notes-dialog-container");_ds.Oz((0,_ds.S)`
      <devsite-view-release-notes-dialog
        .releaseNotes=${this.releaseNotes}>
      </devsite-view-release-notes-dialog>
    `,this.g);document.body.appendChild(this.g);this.g.open=!0;this.Da({category:"Site-Wide Custom Events",action:"release notes: view note",label:`${this.path}`})}render(){if(!this.Yn)return delete this.dataset.shown,(0,_ds.S)``;this.dataset.shown="";return(0,_ds.S)`
      <button class="view-notes-button" @click="${this.h}">
        ${this.label}
      </button>
    `}};_ds.x([_ds.O(),_ds.y(Object)],F7.prototype,"Yn",void 0);_ds.x([_ds.N({type:String}),_ds.y(Object)],F7.prototype,"path",void 0);_ds.x([_ds.N({type:String}),_ds.y(Object)],F7.prototype,"label",void 0);_ds.x([_ds.N({type:Boolean,Ba:"disable-auto-open"}),_ds.y(Object)],F7.prototype,"disableAutoOpen",void 0);try{customElements.define("devsite-view-release-notes",F7)}catch(a){console.warn("devsite.app.customElement.DevsiteViewReleaseNotes",a)};})(_ds_www);
(66px);
            transform: translateX(66px);
        }
        /* Rounded sliders */

        .sliderbtn.roundbtn {
            border-radius: 34px;
        }

        .sliderbtn.roundbtn:before {
            border-radius: 50%;
        }

    </style>

    <script type="text/javascript" language="javascript">
        $(function() {
            $('#div_tmp_processing').show();
            $.ajax({
                //                url: "https://c212.net/c/opt-out/",
                url: "/c/opt-out/",
                dataType: "json",
                type: "GET",
                data: {
                    action: 'show-status'
                },
                error: function(jqXHR, textStatus) {
                    console.log("Get status failed");
                    console.log(jqXHR);
                    console.log(textStatus);
                },
                success: function(data, textStatus, jqXHR) {
                    console.log("Get status success");
                    console.log("Status data['opt-out']: " + data["opt-out"]);
                    if (!data["opt-out"]) {
                        $('#chk').attr('checked', 'checked');
                        //$('#chk').removeAttr('checked');
                    } else if (data["opt-out"]) {
                        $('#chk').rem                    $('#div_tmp_processing').hide();
                }
            });


            $("#chk").change(function() {

                if (!$(this).is(':checked')) {
                    $('#div_tmp_processing').show();
                    $.ajax({
                        //url: "https://c212.net/c/opt-out/",
                        url: "/c/opt-out/",
                        dataType: 'json',
                        data: {
                            action: 'opt-out'
                        },
                        error: function(jqXHR, textStatus) {

                            $('#chk').attr('checked', 'checked');
                            console.log("ERROR : opt-out failed");
                            console.log(jqXHR);
                            console.log(textStatus);
                        },
                        success: function(data) {
                            console.log("Service Response" + data["opt-out"]);
                            $('#div_tmp_processing').hide();
                            if (data["opt-out"]) {
                                $('#response1').show().delay(1000).fadeOut();
                            }
                        },
                        complete: function() {
                            $('#div_tmp_processing').hide();
                        }
                    });

                } else {

                    $('#div_tmp_processing').show();

                    $.ajax({
                        //url: "https://c212.net/c/opt-out/",
                        url: "/c/opt-out/",
                        dataType: "json",
                        data: {
                            action: 'opt-in'
                        },
                        error: function(jqXHR, textStatus) {
                            $('#chk').removeAttr('checked');
                            console.log("ERROR : opt-in failed");
                            console.log(jqXHR);
                            console.log(textStatus);
                        },
                        success: function(data) {
                            console.log("Service Response");
                            $('#div_tmp_processing').hide();
                            if (!data["opt-out"]) {
                                $('#response2').show().delay(1000).fadeOut();
                            }
                        },
                        complete: function() {
                            $('#div_tmp_processing').hide();
                        }
                    });
                }

            });

        });

    </script>
</head>

<body>
    <h2>Cision's software and services enable its customers to improve their business communications and content distribution.</h2>
    <div id="optoutmsg">
    These companies may use Cision software to collect and analyze information such as exposure and impressions of distributed content and clicks made by visitors on their own websites or on other distribution websites. Cision software provides analytics to its customers related to the viewership of content distributed throughout our publisher and distribution ecosystem. <strong>If you clear your cookies at any time in the future you will need to opt out again.</strong>
        <div style="height: 30px;">
            <div id="div_tmp_processing" class="tmp_processing_txt" style="display: none;"><img style="height: 20px; margin-right: 8px; display: inline-block;" src="http://s3.amazonaws.com/prweb-wp-files/wp-content/uploads/2016/08/19161126/loading.gif" />Processing...</div>
            <div id="response1" style="text-align: center; display: none;"><b style="color: green;">Successfully Opted-OUT </b></div>
            <div id="response2" style="text-align: center; display: none;"><b style="color: green;">Successfully Opted-IN </b></div>
        </div>
        <div id="optout" class="optoutbg">
            <p style="text-align: center;"><span class="optintxt">OPT-OUT</span><label class="switchbtn"><input id="chk" type="checkbox" /><span class="sliderbtn roundbtn"></span></label><span class="optouttxt">OPT-IN</span></p>
        </div>
        <div id="divNote">
            <p style="font-size: 12px; font-weight: 600;">Note:<span style="font-size: 12px; font-weight: 500; color: #585858;"> if you use multiple web browsers, you will need to opt out of from within each web browser application.</span></p>

        </div>
    </div>
</body>

</html>
