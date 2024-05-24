/*
	Copyright (c) 2013 Webtrends, Inc.
	Heatmap Plugin v10.2.89
  
	Webtrends Heatmaps was deprecated in 2018, please remove this tagging from your site.

*/
(function (_window, _document) {
    if (!_window.Webtrends)
        return;

    

    /*register the plugin and pass our callback*/
    Webtrends.registerPlugin('hm', decom);

})(window, window.document);
