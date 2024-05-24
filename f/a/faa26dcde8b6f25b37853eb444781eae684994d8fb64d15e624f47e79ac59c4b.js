(global => {
  importScripts('sw-toolbox.js');

  global.addEventListener('install')
  );

  global.addEventListener('activate')
  );

  global.addEventListener('message'});

  toolbox.router.get('/.*(mp4|ogg)$/', toolbox.networkOnly);

  function setup(event) {
    const domains = event.data;
    var cmsRequestRegExp = /http(s):\/\/.+service\/cmsApi\/GetContent.+/;

    toolbox.router.get(cmsRequestRegExp, toolbox.fastest, {
      cache: {
        name: 'cms',
        maxEntries: 100,
        maxAgeSeconds: 300
      },
      origin: domains.star
    });

    toolbox.router.get('/cdn(.*)', toolbox.cacheFirst, {
      cache: {
        name: 'contents',
        maxEntries: 100,
        maxAgeSeconds: 600
      },
      origin: domains.cdn
    });

    toolbox.router.get('/contents(.*)', toolbox.cacheFirst, {
      cache: {
        name: 'multi-cdn',
        maxEntries: 100,
        maxAgeSeconds: 600
      },
      origin: domains.cdn
    });
  }

  //precache
  // toolbox.precache(['/cdn1101/images/loading-circle.svg']);
})(self);
