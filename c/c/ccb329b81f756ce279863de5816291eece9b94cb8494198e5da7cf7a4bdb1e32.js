(function () {
	'use strict';

	!);

	window.cns = window.cns || {}; window.cns.config = {"config":{"ad_unit":{"generate_path":"function(opts) { return \"5574/\" + opts.suffix + \"/\" + opts.position + \"/\" + opts.category + \"/\" + opts.contentType + \"/\" + opts.instance; }"},"request_vp_range":{"_default":{"desktop":100,"tablet":150,"mobile":200}},"brandSlug":"vogue-in","consentRequired":false,"domain":"vogue.in","network":5574,"refresh":30000,"useBlueprintTargeting":true,"slot":{"__auid_one":"in.vogue","sets":{"_default":[],"mt_article":["_out_of_page","outstream","hero","rail","mid_content","mid_gallery","footer","in_content","read_more"],"mt_commerce_article":["_out_of_page","outstream","hero","rail","mid_content","mid_gallery","footer","in_content","read_more"],"mt_article_two_column":["_out_of_page","outstream","hero","rail","mid_content","mid_gallery","footer","aside","in_content","read_more"],"mt_commerce_article_two_column":["_out_of_page","outstream","hero","rail","mid_content","mid_gallery","footer","aside","in_content","read_more"],"mt_article_override":["_out_of_page","hero","rail","mid_content","mid_gallery","footer","in_content","read_more"],"mt_contributor":["_out_of_page","hero","rail","mid_content","footer"],"mt_gallery":["_out_of_page","hero","rail","mid_content","footer","aside","in_content","read_more"],"mt_channel":["_out_of_page","hero","rail","mid_content","footer","river"],"mt_homepage":["_out_of_page","hero","rail","mid_content","footer","read_more","promo","mosaic"],"mt_tag":["_out_of_page","hero","rail","mid_content","footer"],"mt_nativearticle":["_out_of_page","sponsor","hero","rail","mid_content","mid_gallery","footer"],"mt_nativearticle_two_column":["_out_of_page","sponsor","hero","rail","mid_content","mid_gallery","footer"],"mt_nativegallery":["_out_of_page","sponsor","hero","rail","mid_content","footer"],"mt_livestory":["_out_of_page","hero","rail","mid_content","footer"],"mt_commerce_plp":["_out_of_page","hero","rail","mid_content","footer","river"]},"types":{"_out_of_page":{"_default":{"suffix":"in.vogue","render":{"slot":{"top":".ad__slot--out-of-page"}},"position":"interstitial","refresh":0,"isOutOfPage":true,"can_be_hidden":true}},"outstream":{"_default":{"suffix":"in.vogue","render":{"slot":{"bottom":".ad__slot--outstream"}},"position":"interstitial","refresh":0,"isOutOfPage":true,"can_be_hidden":true}},"hero":{"_default":{"suffix":"in.vogue","render":{"slot":{"top":".ad__slot--hero"}},"position":"hero","static_refresh_size":true,"sizes":{"desktop":["728x90","970x250","970x90","9x1","10x1"],"tablet":["728x90","9x1","8x1"],"mobile":["300x50","320x50","320x100","9x1","3x1"]}},"mt_article":{"can_be_hidden":true,"is_sticky":true},"mt_commerce_article":{"can_be_hidden":true,"is_sticky":true},"mt_gallery":{"can_be_hidden":true,"is_sticky":true},"mt_article_two_column":{"can_be_hidden":true,"is_sticky":true},"mt_commerce_article_two_column":{"can_be_hidden":true,"is_sticky":true}},"rail":{"_default":{"suffix":"in.vogue","render":{"slot":{"top":".ad__slot--rail"}},"position":"rail","sizes":{"desktop":["300x250","300x600"],"tablet":["300x250","300x600"],"mobile":false}}},"mid_content":{"_default":{"suffix":"in.vogue","render":{"slot":{"top":".ad__slot--mid-content"}},"position":"mid-content","static_refresh_size":true,"sizes":{"desktop":["728x90","970x250","970x90","9x1","4x1","2x1"],"tablet":["728x90","9x1","4x1","2x1"],"mobile":["300x50","300x250","320x50","320x100","300x600","9x1","16x9","2x1"]}}},"mid_gallery":{"_default":{"suffix":"in.vogue","render":{"slot":{"top":".ad__slot--mid-gallery"}},"position":"mid-gallery","sizes":{"desktop":["300x250"],"tablet":["300x250"],"mobile":["300x250"]}}},"footer":{"_default":{"suffix":"in.vogue","render":{"slot":{"top":".ad__slot--footer"}},"position":"footer","sizes":{"desktop":["728x90","970x250","970x90","9x1","4x1"],"tablet":["728x90","9x1","4x1"],"mobile":["300x50","320x50","320x100","9x1","16x9"]},"request_vp_range":{"desktop":50,"tablet":50,"mobile":100}}},"sponsor":{"_default":{"suffix":"in.vogue","render":{"slot":{"bottom":".ad__slot--out-of-page"}},"position":"sponsor","refresh":0,"isOutOfPage":true,"can_be_hidden":true}},"aside":{"_default":{"suffix":"in.vogue.native","render":{"slot":{"top":".ad__slot--aside"}},"position":"aside","can_be_hidden":true,"refresh":0,"sizes":{"desktop":["fluid"],"tablet":["fluid"],"mobile":false}}},"in_content":{"_default":{"suffix":"in.vogue.native","render":{"slot":{"top":".ad__slot--in-content"}},"position":"in-content","can_be_hidden":true,"refresh":0,"sizes":{"desktop":["fluid"],"tablet":["fluid"],"mobile":["fluid"]}}},"mosaic":{"_default":{"suffix":"in.vogue.native","render":{"slot":{"bottom":".ad__slot--mosaic"}},"position":"mosaic","refresh":0,"can_be_hidden":true,"sizes":{"desktop":["fluid"],"tablet":["fluid"],"mobile":["fluid"]}}},"promo":{"_default":{"suffix":"in.vogue.native","render":{"slot":{"top":".ad__slot--promo"}},"position":"promo","refresh":0,"sizes":{"desktop":["fluid"],"tablet":["fluid"],"mobile":["fluid"]}}},"read_more":{"_default":{"suffix":"in.vogue.native","render":{"slot":{"bottom":".ad__slot--read-more"}},"position":"read-more","refresh":0,"can_be_hidden":true,"sizes":{"desktop":["fluid"],"tablet":["fluid"],"mobile":["fluid"]}}},"river":{"_default":{"suffix":"in.vogue.native","render":{"slot":{"top":".ad__slot--river"}},"position":"river","refresh":0,"can_be_hidden":true,"sizes":{"desktop":["fluid"],"tablet":["fluid"],"mobile":["fluid"]}}},"trending":{"_default":{"suffix":"in.vogue.native","render":{"slot":{"top":".ad__slot--trending"}},"position":"trending","refresh":0,"can_be_hidden":true,"sizes":{"desktop":["fluid"],"tablet":["fluid"],"mobile":["fluid"]}}}}}},"plugins":{"4d_xid_pixels":{"enabled":true},"datadog":{"enabled":true},"ias":{"enabled":true,"params":{"id":931564}},"moat":{"enabled":true,"params":{"id":"condenastheader559028685182"}},"permutive":{"enabled":true,"params":{"apiHost":"permutive.vogue.in","apiKey":"00337ee8-fc27-405e-ad33-4495dc6cd9fe","workspaceId":"4518473a-d40a-40b3-8478-31ef45e4411e"}}},"buildDate":"2024-01-05T14:35:34.476Z"};

	()();

})();