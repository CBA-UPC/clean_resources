if (typeof gemius_hcconn != 'undefined' && typeof gemius_hcconn.fpdata != 'undefined' && (gemius_hcconn.fpdata=='' || gemius_hcconn.fpdata[0]=='-')) {
	gemius_hcconn.fpdata = ".7G2uWDMfSJ2xwivcD3AExgUpKwVmDHh_mxRpBe6DCv.L7|1706875298";
	gemius_hcconn.fpcdomain = 'gazeta.pl';
}
his.root=s,this.imageErrorClass="img--error",this.selectors={desktop:{css:"[data-src]",js:"src"},mobile:{css:"[data-src-mobile]",js:"srcMobile"}},this.callback=function(e){for(var s=0,t=e;s<t.length;s++){var i=t[s];i.isIntersecting&&(r.load(i.target),r.imagesObserver.unobserve(i.target))}},this.load=function(e){var s=e.dataset[r.selectors[r.device].js];s&&(e.src=s,e.addEventListener("error",(function(){return e.classList.add(r.imageErrorClass)})),delete e.dataset.src,delete e.dataset.srcMobile)},this.imagesElements=Array.from(s.querySelectorAll(this.selectors[this.device].css)),"IntersectionObserver"in window){this.imagesObserver=new IntersectionObserver(this.callback);for(var t=0,i=this.imagesElements;t<i.length;t++){var a=i[t];this.imagesObserver.observe(a)}}else for(var o=0,c=this.imagesElements;o<c.length;o++)a=c[o],this.load(a)}}}]);