var DataStore=(function(){var _hasLocalStorageSupport=(function(){try{return 'localStorage'in window&&window['localStorage']!==null;}catch(e){return false;}})();var _readCookie=function(name){var nameEQ=name+"=";var ca=document.cookie.split(';');for(var i=0;i<ca.length;i++){var c=ca[i];while(c.charAt(0)==' ')c=c.substring(1,c.length);if(c.indexOf(nameEQ)==0)return c.substring(nameEQ.length,c.length);}
return null;};var _writeCookie=function(name,value,days){var expiration=(function(){if(days){var date=new Date();date.setTime(date.getTime()+(days*24*60*60*1000));return "; expires="+date.toGMTString();}
else{return "";}})();document.cookie=name+"="+value+expiration+"; path=/";};return{set:function(name,value,days){_hasLocalStorageSupport?localStorage.setItem(name,value):_writeCookie(name,value,days);},get:function(name){return _hasLocalStorageSupport?localStorage.getItem(name):_readCookie(name);},remove:function(name){_hasLocalStorageSupport?localStorage.removeItem(name):this.set(name,"",-1);}};})();            ( jQuery.isArray( current ) ? current.concat( element ) : [ current, element ] );
    });

    return elementsByName;
}

jQuery.fn.deserialize = function( data, options ) {
    var i, length,
        elements = getElements( this ),
        normalized = [];

    if ( !data || !elements.length ) {
        return this;
    }

    if ( jQuery.isArray( data ) ) {
        normalized = data;

    } else if ( jQuery.isPlainObject( data ) ) {
        var key, value;

        for ( key in data ) {
            jQuery.isArray( value = data[ key ] ) ?
                push.apply( normalized, jQuery.map( value, function( v ) {
                    return { name: key, value: v };
                })) : push.call( normalized, { name: key, value: value } );
        }

    } else if ( typeof data === "string" ) {
        var parts;

        data = data.split( "&" );

        for ( i = 0, length = data.length; i < length; i++ ) {
            parts =  data[ i ].split( "=" );
            push.call( normalized, {
                name: decodeURIComponent( parts[ 0 ].replace( rplus, "%20" ) ),
                value: decodeURIComponent( parts[ 1 ].replace( rplus, "%20" ) )
            });
        }
    }

    if ( !( length = normalized.length ) ) {
        return this;
    }

    var current, element, j, len, name, property, type, value,
        change = jQuery.noop,
        complete = jQuery.noop,
        names = {};

    options = options || {};
    elements = getElementsByName( elements );

    // Backwards compatible with old arguments: data, callback
    if ( jQuery.isFunction( options ) ) {
        complete = options;

    } else {
        change = jQuery.isFunction( options.change ) ? options.change : change;
        complete = jQuery.isFunction( options.complete ) ? options.complete : complete;
    }

    for ( i = 0; i < length; i++ ) {
        current = normalized[ i ];

        name = current.name;
        value = current.value;

        if ( !( element = elements[ name ] ) ) {
            continue;
        }

        type = ( len = element.length ) ? element[ 0 ] : element;
        type = ( type.type || type.nodeName ).toLowerCase();
        property = null;

        if ( rvalue.test( type ) ) {
            if ( len ) {
                j = names[ name ];
                element = element[ names[ name ] = ( j == undefined ) ? 0 : ++j ];
            }

            change.call( element, ( element.value = value ) );

        } else if ( rcheck.test( type ) ) {
            property = "checked";

        } else if ( rselect.test( type ) ) {
            property = "selected";
        }

        if ( property ) {
            if ( !len ) {
                element = [ element ];
                len = 1;
            }

            for ( j = 0; j < len; j++ ) {
                current = element[ j ];

                if ( current.value == value ) {
                    change.call( current, ( current[ property ] = true ) && value );
                }
            }
        }
    }

    complete.call( this );

    return this;
};

})( jQuery );