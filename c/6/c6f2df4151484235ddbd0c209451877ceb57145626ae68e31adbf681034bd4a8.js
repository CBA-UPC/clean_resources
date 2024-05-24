(function(window, undefined) {
    var EventDispatcher = window.Application,
        trigger = function(event, wgcmEvent, wgcmData) {
            if (!EventDispatcher) {
                return false;
            }

            EventDispatcher.trigger(event, wgcmEvent, wgcmData);
        },
        bindCommonMenuEvents = function() {
            if (!commonMenuAvailable()) {
                return;
            }
            var CommonMenu = window.WG.CommonMenu;

            CommonMenu.on('logout', function(event, wgcm) {
                trigger('menu-logout', event, {
                    wgcm: wgcm
                });
            });
            CommonMenu.on('login', function(event, wgcm) {
                trigger('menu-login', event, {
                    wgcm: wgcm
                });
            });
        },
        commonMenuAvailable = 

    if (commonMenuAvailable()) {
        bindCommonMenuEvents();
    } else {
        window.addEventListener('DOMContentLoaded', bindCommonMenuEvents);
    }
})(window);
