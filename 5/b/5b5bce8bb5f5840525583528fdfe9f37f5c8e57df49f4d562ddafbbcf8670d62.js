try {
  !(function (t, e, n, s, a, c, i, o, p) {
    (t.AppsFlyerSdkObject = a),
      (t.AF =
        t.AF ||
        ,
      (t.AF.id = t.AF.id || i),
      (t.AF.plugins = {}),
      (o = e.createElement(n)),
      (p = e.getElementsByTagName(n)[0]),
      (o.async = 1),
      (o.src =
        'https://websdk.appsflyer.com?' +
        (c.length > 0 ? 'st=' + c.split(',').sort().join(',') + '&' : '') +
        (i.length > 0 ? 'af_id=' + i : '')),
      p.parentNode.insertBefore(o, p);
  })(window, document, 'script', 0, 'AF', 'banners', {
    banners: { key: '7d7773e4-1bd0-42e5-a8d2-2b0b2573b358' },
  });

  AF('banners', 'showBanner', { bannerZIndex: 500 });
} catch (e) {
  console.warn('Error in Appsflyer:', e);
}
