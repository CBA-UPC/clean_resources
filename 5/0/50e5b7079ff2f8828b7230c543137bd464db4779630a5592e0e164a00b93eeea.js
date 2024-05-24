window.console && console.log("[olark] This site is using the Olark WordPress Plugin");
window.console && console.log("[olark] site ID = "+olark_vars.site_ID);
(function(o,l,a,r,k,y){if(o.olark)return;
r="script";y=l.createElement(r);r=l.getElementsByTagName(r)[0];
y.async=1;y.src="//"+a;r.parentNode.insertBefore(y,r);
y=o.olark=function(){k.s.push(arguments);k.t.push(+new Date)};
y.extend=
y.identify=
y.configure=function(i,j){y("configure",i,j);k.c[i]=j};
k=y._={s:[],t:[+new Date],c:{},l:a};
})(window,document,"static.olark.com/jsclient/loader.js");

/* Add configuration calls below this comment */
/* Enable Olark on mobile settings*/
if (olark_vars.woocommerce && olark_vars.enable_cartsaver == 1) {
  olark.configure('system.use_widget', 'wordpress_woocommerce_cartsaver');
  window.console && console.log("[olark] wordpress_woocommerce_cartsaver");
} else if (olark_vars.woocommerce) {
  olark.configure('system.use_widget', 'wordpress_woocommerce_nocartsaver');
  window.console && console.log("[olark] wordpress_woocommerce_nocartsaver");
} else {
  olark.configure('system.use_widget', 'wordpress_only');
  window.console && console.log("[olark] wordpress_only");
}
if (olark_vars.mobile == 0){
	olark.configure('system.hb_disable_mobile', true);
	window.console && console.log("[olark] The WordPress plugin has disable mobile set to true");
}else {
  olark.configure('system.hb_disable_mobile', false);
	window.console && console.log("[olark] The WordPress plugin has disable mobile set to false");
};
/* Start chatbox expanded settings*/
if (olark_vars.expand != 0){
	olark.configure('box.start_expanded', true);
	window.console && console.log("[olark] WordPress start_expanded option is enabled");
}else {
    olark.configure('box.start_expanded', false);
	window.console && console.log("[olark] The WordPress plugin has start_expanded set to false");
};
/* Detached chatbox settings*/
if (olark_vars.float != 0){
	olark.configure('system.hb_detached', true);
	window.console && console.log("[olark] WordPress detached option is enabled");
}else {
    olark.configure('system.hb_detached', false);
	  window.console && console.log("[olark] The WordPress plugin has detached set to false");
};
/* Language settings*/
if(olark_vars.override_lang == 1){
  olark.configure("system.localization", olark_vars.lang);
  window.console && console.log("[olark] Language chosen in WordPress is " +olark_vars.lang);
}
/* Advanced settings*/
eval(olark_vars.api);
if (olark_vars.api.length < 2) {
	window.console && console.log("[olark] There are no additional api calls used in the WordPress plugin");
}else {
	window.console && console.log("[olark] additional api calls in WordPress are as follows: " +olark_vars.api);
};
if (typeof olark_vars.cart_info !== 'undefined') {
  olark.extend('CartSaver')
  olark.configure("CartSaver.version", "Magento@woocommerce" + olark_vars.woocommerce_version);
  olark.configure("CartSaver.items", olark_vars.cart_info.items);
  olark.configure('CartSaver.customer', olark_vars.cart_info.customer);
  olark.configure('CartSaver.magento', olark_vars.cart_info.magento);
}
olark.identify(olark_vars.site_ID);
