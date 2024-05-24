/* global fetch, ga, Promise */
(function(){
    "use strict";

    var PRIVATE = {};

    PRIVATE.elements = {
        'navbarLogo'        : document.getElementById('navbar-logo'),
        'navbarButton'      : document.getElementById('navbar-button'),
        'breadcrumb'        : document.getElementById('breadcrumb'),
        'breadcrumbHat'     : document.getElementById('breadcrumb-hat'),
        'breadcrumbGoHome'  : document.getElementById('breadcrumb-go-home'),
        'articleContainer'  : document.getElementById('article-container'),
        'subjectTable'      : document.getElementById('subject-table')
    };

    PRIVATE.context = {};
    PRIVATE.isIOS = /iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream;
    
    PRIVATE.homeURL = 'https://www.terra.com.br';

    PRIVATE.setTextOffline = function(){
        var textOffline = 'Hmmm, parece que você está sem internet no momento…<br>Enquanto isso, leia as notícias do dia';
        document.getElementById('top-header-disclaimer-title').innerHTML = textOffline + ' <span id="date-json">xx/xx/xxxx</span>.';
        document.getElementById('top-header-disclaimer').classList.add('show');
    };

    PRIVATE.createPage = function(){
        if(!PRIVATE.validateDate()){
            PRIVATE.showDefaultMessage();
            return false;
        }

        document.title = 'Terra - Capa Offline';
        document.getElementById('top-header-disclaimer').style.display = '';

        //configure analytics
        window.ga = windowts)};ga.l=+new Date; //jshint ignore:line
        window.ga('create', 'UA-54936151-1', {
            'storage': 'none'
        });

        //pageview home, only one time
        window.ga('send', 'pageview', {
            "dimension7" : "cap",
            "dimension9" : "terra",
            "dimension57" : "offline"
        });

        if(PRIVATE.context.response){
            window.ga('send', 'event', 'info', 'error', PRIVATE.context.response, {
                "dimension9" : "terra",
                "dimension57" : "offline"
            });
        }

        PRIVATE.templates = {
            'card' : "<a href=\"#{{id}}\" id=\"card-{{id}}\" class=\"card card-news {{additionalClass}}\" data-json-index=\"{{index}}\" title=\"{{title}}\">{{imageHtml}}<div class=\"card-news__text\"><div class=\"card-news__text--container\"><h3 class=\"card-news__text--hat color-{{color}}\">{{hat}}</h3></div><h2 class=\"card-news__text--title main-url\">{{title}}</h2></div></a>",
            'article' : "<div id=\"article-{{id}}\" class=\"article article--{{color}}\"><header class=\"article__header\"><div class=\"article__header__background bg-color-{{color}}\"></div><div class=\"range-article\"><div class=\"article__header__content\"><h1 class=\"title\">{{title}}</h1><h2 class=\"subtitle\">{{subtitle}}</h2><h3 class=\"authors\">{{authors}}</h3><h6 class=\"date\">{{date}}</h6></div></div></header><div class=\"range-article\"><div class=\"article__content\">{{imageHtml}}{{text}}<hr>{{partnerTag}}</div></div></div>"
        };

        PRIVATE.mountTable(PRIVATE.dataJson);
        PRIVATE.elements.subjectTable.classList.remove('loading');
        PRIVATE.bindEvents();
        
        if (window.location.hash !== '') {
            var card = document.getElementById('card-'+window.location.hash.replace('#', ''));
            if (card) {
                PRIVATE.showArticle(parseInt(card.dataset.jsonIndex));
            } else {
                window.location.hash = '';
            }
        }
    };

    PRIVATE.bindEvents = function(){
        PRIVATE.elements.navbarLogo.addEventListener('cli   });

        PRIVATE.elements.navbarButton.addEventListener('click', function(){
            window.location.hash = '';
        });

        PRIVATE.elements.breadcrumbGoHome.addEventListener('cli   });

        window.addEventListener("hashchange", function(e) {
            if (this.location.hash === '') {
                PRIVATE.goHome();
            } else {
                var articleId = location.hash.replace('#',''),
                    elem = document.getElementById('card-' + articleId);

                if (elem) {
                    PRIVATE.showArticle(parseInt(elem.dataset.jsonIndex));
                }
            }
        });
    };

    PRIVATE.goHome = function() {
        window.location.hash = '';
        PRIVATE.elements.subjectTable.style.display = '';
        PRIVATE.elements.articleContainer.style.display = 'none';
        PRIVATE.elements.navbarButton.style.display = 'none';
        PRIVATE.elements.breadcrumb.style.display = 'none';
        PRIVATE.elements.breadcrumbHat.className = '';

        if(PRIVATE.lastReadArticle){
            var elem = document.getElementById('card-' + PRIVATE.lastReadArticle);
            var posTop = elem.offsetTop - 10;

            if(posTop){
                window.scrollTo(0, posTop);
            }
        }else if(location.hash === ''){
            window.scrollTo(0, 0);
        }

        document.title = 'Terra - Capa Offline';

        window.ga('send', 'pageview', {
            "dimension7" : "cap",
            "dimension9" : "terra",
            "dimension57" : "offline"
        });

        PRIVATE.lastReadArticle = null;
    };

    PRIVATE.mountTable = function(dataJson){
        var html = '';

        dataJson.forEach(function(item, i){
            if(item && item.id && item.title){
                html += PRIVATE.buildCard(item, i, 'card-h-small');
            }
        });

        PRIVATE.elements.subjectTable.innerHTML = html;
    };

    PRIVATE.getHat = function(data){
        var hat = '',
            length = data.channels.length;

        if (data.channels && length > 0) {
            for (var i = 0; i < length; i++) {
                if(data.channels[i].canonical){
                    hat = data.channels[i].label || data.channels[i].name;
                    break;
                }
            }
        }

        return hat;
    };

    PRIVATE.buildCard = function(data, index, type){
        var imageHtml = PRIVATE.getImageHtml(PRIVATE.getImage(data), 'card');
        var additionalClass = type;

        additionalClass += imageHtml ? ' card-has-image' : ' card-no-image';
        
        return PRIVATE.renderTemplate('card', {
            "id"    : data.id,
            "title" : data.title.replaceAll('\"', '\'') || 'Not&iacute;cia',
            "index" : index,
            "hat"   : PRIVATE.getHat(data),
            "imageHtml" : imageHtml,
            "additionalClass" : additionalClass,
            "color" : PRIVATE.getColor(data)
        });
    };

    PRIVATE.getFromData = function (data, prop) {
        if (data && data.hasOwnProperty(prop)) {
            return data[prop];
        }
    };

    PRIVATE.getImage = function(data) {
        var path = '', alt, caption, author;
        var dataImages = PRIVATE.getFromData(data, 'images');

        if (dataImages && dataImages.length) {
            var cardImage = dataImages[0];
            if (cardImage.url) {
                var url = cardImage.url.replace('https://', '').replace('http://','');
                path = cardImage.url.search('terra.com') > -1 ? 'https://p2.trrsf.com/image/fget/cf/300/300/'+url : cardImage.url;
            }

            alt = cardImage.alt ? cardImage.alt : '';
            caption = cardImage.caption ? cardImage.caption : '';
            author = cardImage.author ? cardImage.author : '';
        }
       
        return {path: path, alt: alt, caption: caption, author: author};
    };

    PRIVATE.getColor = function(data) {
        var dataCartola = PRIVATE.getFromData(data, 'cartola'),
            dataChannels = PRIVATE.getFromData(data, 'channels'),
            allowedColors = ['noticias', 'economia', 'esportes', 'vidaeestilo', 'diversao', 'gameon', 'diversidade', 'comunidade', 'nos'],
            color = '';

        if (dataCartola && Object.keys(dataCartola).length) {
            color = dataCartola.url.replace('https://', '').replace('http://', '').split('/')[1].replaceAll('-', '');
            if (allowedColors.includes(color) === false) {
                color = 'default';
            }
        } else if (dataChannels && dataChannels.length) {
            dataChannels.forEach(function (channel) {
                if (channel && channel.canonical) {
                    if (channel.path) {
                        color = channel.path.split('.')[1];
                    } else if (channel.url) {
                        color = channel.url.replace('https://', '').replace('http://', '').split('/')[1].replaceAll('-', '');
                    }

                    if (allowedColors.includes(color) === false) {
                        color = 'default';
                    }
                }
            });
        }

        return color;
    };

    PRIVATE.getAuthors = function (data) {
        var dataAuthors = PRIVATE.getFromData(data, 'authors');
        if (dataAuthors && dataAuthors.length) {
            var authors = [];
            dataAuthors.for   });

            return authors.lenght > 1 ? authors.join(', ') : authors[0].name;
        }
    };

    PRIVATE.getPartnerTag = function (data) {
        var dataPartner = PRIVATE.getFromData(data, 'sources'), partnerTagHtml = '';

        if (dataPartner && dataPartner.length) {
            dataPartner = dataPartner[0];

            if (dataPartner) {
                var url = dataPartner.image ? dataPartner.image.replace('https://', '').replace('http://', '') : '';
                partnerTagHtml = '<div class="article__content__partner-tag">';

                if(url){
                    partnerTagHtml += '<img src="https://p2.trrsf.com/image/fget/cf/fit-in/compose/70/25/'+ url +'">';
                }else if(dataPartner.name){
                    partnerTagHtml += '<span>'+ dataPartner.name +'</span>';
                }

                partnerTagHtml += '</div>';
            }
        }
        
        return partnerTagHtml;
    };

    PRIVATE.getImageHtml = function (dataImage, format) {
        var imageHtml;
        if (format == 'card') {
            imageHtml = dataImage.path ? '<div class="card-news__image"><img src="'+ dataImage.path +'" alt="'+ dataImage.alt +'"></div>' : '';
        } else if (format == 'article') {
            imageHtml = '<figure class="article__content__image">';
            imageHtml += '<img src="'+ dataImage.path +'" alt="'+ (dataImage.alt || '') +'" title="'+ (dataImage.title || dataImage.alt || '') +'">';
            imageHtml += '<figcaption>';
            imageHtml += dataImage.caption ? '<div class="caption">'+ dataImage.caption +'</div>' : '';
            imageHtml += dataImage.author ? '<div class="author">'+ dataImage.author +'</div>' : '';
            imageHtml += '</figcaption>';
            imageHtml = dataImage.path ? imageHtml + '</figure>' : '';
        }

        return imageHtml;
    };

    PRIVATE.showArticle = function (index) {
        var data = PRIVATE.dataJson[index],
            articles = PRIVATE.elements.articleContainer.querySelectorAll('.article'),
            article = document.getElementById('article-' + data.id);

        if (PRIVATE.isIOS) {
            PRIVATE.elements.navbarButton.style.display = '';
        }

        for (var i = 0; i < articles.length; i++) {
            if (window.getComputedStyle(articles[i]).display == 'block') {
                articles[i].style.display = 'none';
                break;
            }
        }

        if (article) {
            article.style.display = 'block';
        } else {
            PRIVATE.addArticle(data);
        }

        document.title = data.title;

        window.ga('send', 'pageview', {
            "dimension7" : "not",
            "dimension9" : "terra",
            "dimension18" : data.sources ? data.sources[0].name : '',
            "dimension19" : data.authors ? data.authors[0].name : '',
            "dimension57" : "offline"
        });

        window.scrollTo(0, 0);

        PRIVATE.elements.subjectTable.style.display = 'none';
        PRIVATE.elements.articleContainer.style.display = '';
        PRIVATE.elements.breadcrumb.style.display = '';
        PRIVATE.elements.breadcrumbHat.innerText = PRIVATE.getHat(data);
        PRIVATE.elements.breadcrumbHat.classList.add('color-'+PRIVATE.getColor(data));

        PRIVATE.lastReadArticle = data.id;
    };

    PRIVATE.addArticle = function (data) {
        var article = document.createElement('div'),
            imageHtml = PRIVATE.getImageHtml(PRIVATE.getImage(data), 'article');

        article.innerHTML = PRIVATE.renderTemplate('article', {
            "id"        : data.id,
            "title"     : data.title || 'Not&iacute;cia',
            "authors"   : PRIVATE.getAuthors(data) || '',
            "hat"       : PRIVATE.getHat(data) || '',
            "imageHtml" : imageHtml,
            "date"      : 'Publicado em '+ PRIVATE.getFormatDate(PRIVATE.context.dateJson),
            "subtitle"  : data.subtitle || '',
            "text"      : data.text || 'Conte&uacute;do indispon&iacute;vel',
            "color"     : PRIVATE.getColor(data),
            "partnerTag": PRIVATE.getPartnerTag(data)
        });

        PRIVATE.elements.articleContainer.appendChild(article.firstChild);
    };

    PRIVATE.sortCards = function (data) {
        if (data && data.length) {
            return data.sort(function(a, b) {
                return b.images ? 1 : -1;
            });
        }
    };

    PRIVATE.showDefaultMessage = function(){
        document.getElementById('no-articles').style.display = '';
        PRIVATE.elements.subjectTable.style.display = 'none';
        PRIVATE.elements.subjectTable.classList.remove('loading');
    };

    PRIVATE.validateDate = function(){
        var timeDiff, diffDays,
            dateNow = new Date();

        
        timeDiff = Math.abs(dateNow.getTime() - PRIVATE.context.dateJson);
        diffDays = Math.ceil(timeDiff / (1000 * 3600 * 24));

        if(diffDays < 15){
            var elemDateJson = document.getElementById('date-json');
            elemDateJson.innerHTML = PRIVATE.getFormatDate(PRIVATE.context.dateJson);
            
            return true;
        }

        return false;
    };

    PRIVATE.getFormatDate = function(dateString){
        var finalDate = dateString;

        //Behavor for IOS/Iphone
        if(typeof dateString == "string"){
            var dateGmt = dateString.toString().split(' -0');
            var gmt = (dateGmt[1]/100) * (60 * 60000);
            var dateSplit = dateGmt[0].split(/[- :]/);
            var objD = new Date(dateSplit[0], dateSplit[1]-1, dateSplit[2], dateSplit[3], dateSplit[4], dateSplit[5]);
            finalDate = objD.getTime() - gmt;
        }

        var dateNews = new Date(finalDate);

        if(dateNews){
            return (dateNews.getDate() < 10 ? '0' : '') + dateNews.getDate() +'/'+ (dateNews.getMonth() + 1 < 10 ? '0' : '') + (dateNews.getMonth() + 1) +'/'+ dateNews.getFullYear();
        }else{
            return '';
        }
    };

    PRIVATE.renderTemplate = function(template, data){
        var reg, html = PRIVATE.templates[template];

        if(!html){
            return false;
        }

        for(var name in data){
            if (data.hasOwnProperty(name)){
                reg = new RegExp("{{"+ name +"}}", "g");
                html = html.replace(reg, data[name]);
            }
        }

        return html;
    };

    PRIVATE.checkCacheImage = function(){
        var loadImage = function(url, index){
            return new Promise(function(resolve, reject){
                var img = new Image();
                img.addEventListener('lo   });
                img.addEventListener('err   });
                img.src = url;
            });
        };

        return new Promise(function(resolve, reject) {
            var imagePromises = [],
                length = PRIVATE.dataJson.length;

            var setNullIma   };

            for(var i=0; i<length; i++){
                var image = PRIVATE.getImage(PRIVATE.dataJson[i]);
                if (image.path) {
                    imagePromises.push(loadImage(image.path, i).catch(setNullImage));
                }
            }

            Promise.allSettled(imagePromises).   });
        });
    };

    PRIVATE.init = function(){
        if(PRIVATE.context.feederURL){
            PRIVATE.setTextOffline();

            fetch(PRIVATE.context.feederURL).then(function(response) {
                response.json().then(function(json){
                    if (json && json.length === 0) {
                        PRIVATE.showDefaultMessage();
                        return;
                    }
                    PRIVATE.dataJson = PRIVATE.sortCards(json);
                    
                    PRIVATE.checkCacheImage().then(function(){
                        PRIVATE.createPage();
                    });
                });
            }).catch(function() {
                PRIVATE.showDefaultMessage();
            });
        }else{
            PRIVATE.showDefaultMessage();
        }
    };

    var indexedDB = window.indexedDB || window.mozIndexedDB || window.webkitIndexedDB || window.msIndexedDB || window.shimIndexedDB;
    var open = indexedDB.open("terra-sw-data", 1);

    open.onupgradeneeded = function(event){
        var db = event.target.result;
        return db.createObjectStore("context", {keyPath: "name"});
    };

    open.onsuccess = function(){
        var db = this.result;

        try{
            if(db.objectStoreNames.length === 0){
                return;
            }

            var tx = db.transaction("context", "readwrite");
            var objectStore = tx.objectStore("context");
            var request = objectStore.openCursor();

            request.onsuccess = function(event) {
                var cursor = event.target.result;

                if(cursor) {
                    PRIVATE.context[cursor.value.name] = cursor.value.value || '';
                    cursor.continue();
                }else{
                    PRIVATE.init();
                }
            };

            request.onerror = PRIVATE.showDefaultMessage;

            tx.oncomple   };
        }catch(e){
            PRIVATE.showDefaultMessage();
        }
    };
})();
