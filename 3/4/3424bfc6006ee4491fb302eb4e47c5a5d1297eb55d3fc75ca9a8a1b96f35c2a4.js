(function (r, o, c, k) {
    k = document.createElement('div');
    k.id = btoa('s' + Math.random()).replace(/=/g, '');
    document.write(k.outerHTML);
    c = document.createElement('script');
    c.src = r;
    c.onload = function () {
        typeof window.initNativeRoll === 'function' && initNativeRoll(Object.assign(o, {
            container: document.querySelector('#' + k.id)
        }))
    };
    document.querySelector('body,head').appendChild(c);
})('https://cdn.tubecorp.com/nr/nr.js', {
        tcid: 3094,
        capping: 180,
        viewCounter: 15,
        sound: false,
        closeButtonDelay: 5,
        sizePercent: 40,
        branding: true
});