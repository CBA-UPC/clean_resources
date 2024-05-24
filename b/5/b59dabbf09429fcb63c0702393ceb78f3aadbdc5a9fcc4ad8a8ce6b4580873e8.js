function checkSet(data){
    if(getCookie('STYXKEY_crtocountry')){//if the cookie exists, skip to rewrting data
        // console.log('found country cookie')
        document.querySelector('body').dataset.country = getCookie('STYXKEY_crtocountry');
        rewriteLinks(data)
    }else{
        $.ajax('https://2m1ln5gmga.execute-api.us-east-1.amazonaws.com/Prod').then(function (res) {//if the cookie doesn't exist make a call and get it
            document.querySelector('body').dataset.country = res;
            // console.log('writing country cookie')
            setCookie('STYXKEY_crtocountry',res,1);
            rewriteLinks(data)
        })
    }
}
function rewriteLinks(data) {
    // console.log('running rewriter')
    if (isWhiteListed()) {
        var rewriteData = data;
        Object.keys(rewriteData).forEach(function (k) {
            var header = document.querySelector('.header-container');
            var footer = document.querySelector('footer');
            var origin_link = rewriteData[k].OriginLink;
            var origin = document.querySelectorAll('a[href=\"' + origin_link + '\"]');
            var newLink = rewriteData[k].NewLink;
            var text = rewriteData[k].NewLinkText;
            var trackInSegment = rewriteData[k].TrackInSegment;
            var eventType = rewriteData[k].EventType;
            var exclude = rewriteData[k].Exclude;
            var excluded_urls = rewriteData[k].ExcludedURLS;
            var include = rewriteData[k].Include;
            var included_urls = rewriteData[k].IncludedURLS;
            var current_url = document.location.href;
            var in_exclusion = false;
            var in_inclusion = false;

            if (include == true && included_urls.length) {
                included_urls.forEach(function (z) {//find out if current url is in exclusion list
                    if (z.url == current_url) {
                        in_inclusion = true
                        // console.log('included manually')
                    }
                });

            } else {
                in_inclusion = true;
                // console.log('included by default, but may be manually excluded')
            }
            if (exclude == true && excluded_urls.length) {
                excluded_urls.forEach(;
            }
            if (exclude == true && in_exclusion) {//stop this and move on
                // console.log('page exluded. stopping rewriter rule')
                return;
            }
            if (in_inclusion) {
                origin.forEach(function (link) {
                    var location;
                    if (header.contains(link)) {//link is in header
                        location = "HEADER"
                    } else if (footer.contains(link)) {
                        location = "FOOTER"
                    } else {//is in body
                        location = "BODY"
                    }

                    link.href = newLink;
                    if (getTextNodesIn(link)) {
                        if (text) {
                            getTextNodesIn(link)[0].textContent = text;
                        }
                    }
                    if (trackInSegment && eventType && location) {
                        link.addEventListener("click", 
                    }
                })
            }
        })
    }


    function getTextNodesIn(elem, opt_fnFilter) {//function gets the deepest text node of element so that we can inject text into a button or a tag without messing up the tag
        var textNodes = [];
        if (elem) {
            for (var nodes = elem.childNodes, i = nodes.length; i--;) {
                var node = nodes[i], nodeType = node.nodeType;
                if (nodeType == 3) {
                    if (!opt_fnFilter || opt_fnFilter(node, elem)) {
                        textNodes.push(node);
                    }
                }
                else if (nodeType == 1 || nodeType == 9 || nodeType == 11) {
                    textNodes = textNodes.concat(getTextNodesIn(node, opt_fnFilter));
                }
            }
        }
        return textNodes;
    }

    function isWhiteListed() {
        var whiteList = document.querySelector('body').dataset.whitelist;
        var currentCountry = document.querySelector('body').dataset.country;
        var office = document.querySelector('body').dataset.office;
        var isWhitelisted = false;
        if (whiteList && currentCountry) {
            whiteList = whiteList.split(",")
            if (whiteList.indexOf(currentCountry) != -1) {
                isWhitelisted = true;
            }
        }
        if (office) {//may remove this later
            isWhitelisted = true;
        }
        return isWhitelisted;
    }
}