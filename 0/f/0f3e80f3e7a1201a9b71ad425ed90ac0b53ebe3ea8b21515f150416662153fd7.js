console.log("%cSetting up Parsely", "color: yellow; font-style: italic; background-color: blue;padding: 2px");    

if ( typeof awGetUserCookie != 'function' || typeof awGetUserData != 'function') {
    throw "Adweek Development Error: adw-parsely requires the user functions `awGetUSerCookie` and `awGetUSerData`. Please provide these before continuing.";
}


function isSubscriber( user ) {
    if ( typeof user == 'object' && typeof user.pu_recipient_id !== 'undefined' ) {
        return !isNaN( parseInt( user.pu_recipient_id ) );
    }
    return false;
}


function isLoggedIn( user ) {
    return awIsUserLoggedIn() || isSubscriber( user );
}


function getSubscriptionStatus( cookie ) {

    const { sub_type, curr_type } = cookie;

    if ( typeof sub_type !== "string" || typeof curr_type !== "string" ) {
        return "anonymous";
    }

    if ( sub_type == "R") {
        if ( curr_type == "QN" ) { 
            return "limited_user";
        }

        return "registered_user";
    }

    if ( sub_type == "S" ) {
        return "subscribed_user";
    }

    return "anonymous";
}


const labels = {
    paid: "Paid Subscription",
    free: "Free Registration",
    newsletter: "Newsletter",
    corporate: "Corporate Subscriptons",
    contact: "Contact Form",
    login: "Site Login",
    webinar: "Webinar",
    whitepaper: "Whitepaper",
    'my-account': "My Account",
    'article-subscription': "Article Subscription",
    'article-registration': "Article Registration",
    'magazine-subscription': "Magazine Subscription",
    'magazine-registration': "Magazine Registration"
}

if ( window.PARSELY && window.PARSELY.onReady ) {
    const _ = window.PARSELY.onReady;
}

window.PARSELY = window.PARSELY || {
  autotrack: false,
  onReady: apply
};

function apply( ) {
    
    const cookie = awGetUserCookie();
    
    PARSELY.updateDefaults( {data: {
        sub_type: getSubscriptionStatus( cookie )
    }});
    PARSELY.beacon.trackPageView();    

}


( function( $ ) {
    'use strict';

    window.awParselyTools = {
        getUUID: function(){
            let pUUID = false;
            try{
                pUUID = PARSELY.config.uuid.split('=')[1];
            } catch( err ){ /* noop */ }
            return pUUID;
        },
        train: function(){
            const url = `https://api.parsely.com/v2/profile?uuid=${ awParselyTools.getUUID() }&url=https://www.adweek.com${ window.location.pathname }&apikey=adweek.com`;

            $.getJSON( url ).done( function( resp ) { /* noop */ } );
        }
    }

    var $parselyPersonalizedWidgets = $( '.aw-parsely-personalized-content' );

    var articleVisitsCookie = Cookies.get( 'aw-article-visits' ),
        articleVisits = 0;

    if ( articleVisitsCookie ){
        articleVisits = parseInt( articleVisitsCookie );
    }

    if ( $( 'body' ).hasClass( 'single-post' ) || $( 'body' ).hasClass( 'single-sponsored_post' ) ){
        articleVisits++;
        Cookies.set( 'aw-article-visits', articleVisits, { expires: 365 } );
        awParselyTools.train();
    }

    // Load Personalized Widget using a custom event
    window.addEventListener( 'sidebarLoaded', ({detail}) => {
        
        $parselyPersonalizedWidgets = $( '.aw-parsely-personalized-content' );

        if ( $parselyPersonalizedWidgets && $parselyPersonalizedWidgets.length && articleVisits > 4 ){
            loadContent();
        }

        const elRelatedArticles = document.querySelector( '.related-posts-widget' );

        if ( elRelatedArticles ){
            loadRelatedArticlesContent(elRelatedArticles);
            triggerIntegratePremiumLock();
        }
        
    }, { once: true } );

    const loadRelatedArticlesContent = async (elRelatedArticles) => {

        const props = elRelatedArticles.dataset.props;
        const title = adw?.post?.title || document.getElementsByTagName( 'h1' )[0].innerText;
        const url = window.location.origin + window.location.pathname;
        
        console.log( 'props', props );

        try{

            const endpoint = new URL( `${window.location.origin}/wp-json/adw-parsely/related` );
            const params = {
                url:url,
                title:title,
                props:props,
            }
            endpoint.search = Object.entries(params)
                .map(([key, value]) => `${encodeURIComponent(key)}=${encodeURIComponent(value)}`)
                .join('&');

            const res = await fetch( endpoint );

            if (res.status >= 400 && res.status < 600) {
                throw new Error("Bad response from server");
            }
            
            const resObj = await res?.json?.();
            document.querySelector( '.related-posts-widget' ).innerHTML = resObj?.markup;

            window.dispatchEvent( new CustomEvent('relatedPostsLoaded') );
            triggerIntegratePremiumLock();
        } catch( err ){

            document.querySelector( '.related-posts-widget' ).innerHTML = '';
            console.log( err );

        }
        

    }
    
    const loadContent = () => {

        $parselyPersonalizedWidgets.each( function(){
            var $widget = $( this );

            if( $widget.hasClass( 'd-none' ) ){

                $.ajax({
                    url : aw.ajax_url,
                    data : {
                        'action': 'get_personalized_content_parsely',
                        'uuid': awParselyTools.getUUID(),
                        'title': $widget.data( 'title' ),
                        'num-posts': $widget.data( 'num-posts' ),
                        'style': $widget.data( 'style' )
                    },
                    success : function( response ){
                        try{
                            var responseJSON = JSON.parse( response );
                            if ( responseJSON.html ){
                                $widget.removeClass( 'd-none' ); 
                                $widget.html( responseJSON.html );

                                window.dispatchEvent( new CustomEvent('personalizedContentParselyLoaded') );
                            }

                        } catch( err ){ /* noop */ }
                    },
                    error : function(error){
                        // console.log( 'debug::parsely::error', error );
                    }
                } )

            }

        } );

    }

    // Load Personalized Widget if the widget wrapper is present on page load
    if ( $parselyPersonalizedWidgets && $parselyPersonalizedWidgets.length && articleVisits > 4 ){

        loadContent();
        
    }

} )( jQuery );


