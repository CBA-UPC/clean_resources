$(function () {
    const prefix = 'cnn-indonesia_'
    const now = (new Date()).getTime()
    try {
        // for (var i = 0; i < localStorage.length; i++){
        //     let key     = localStorage.key(i)
        //     if ( key.includes(prefix) ) {
        //         let data = localStorage.getItem(key)
        //         if ( data ) {	
        //             data = JSON.parse(data)
                    
        //             if (now > data.expired) {	
        //                 localStorage.removeItem(key);
        //             }
        //         }
        //     }
        // }
    } catch (error) {
        console.log('error when filtering cache local storage', error)
    }  
});