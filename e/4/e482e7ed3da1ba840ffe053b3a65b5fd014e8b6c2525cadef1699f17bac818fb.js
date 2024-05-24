var init = function () {
    if (URLSearchParams && self.location && self.location.search) {
        var searchStr = self.location.search;
        var url = new URLSearchParams(searchStr)
        var version = url.get('version');
        version && importScripts('https://assets.alicdn.com/g/ae-fe/service-worker-ui/' + version.trim() + '/pc.js')
    }
}

init();


