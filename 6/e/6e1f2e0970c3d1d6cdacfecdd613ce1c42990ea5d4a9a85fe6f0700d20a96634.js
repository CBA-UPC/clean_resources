///id=pc:1.0
window.VWO = window.VWO || [];
VWO.pc = {};
(function () {
  var engage = function () {
  (function(p,u,s,h){
    	if(!window.pushcrewHash) {return;}
        p._pcq=p._pcq||[];
        p._pcq.push(['_currentTime',Date.now()]);
        s=u.createElement('script');
        s.type='text/javascript';
        s.async=true;
        s.crossOrigin = 'anonymous';
        s.src='https://cdn.pushcrew.com/js/' + pushcrewHash + '.js';
        h=u.getElementsByTagName('script')[0];
        h.parentNode.insertBefore(s,h);
    })(window,document);
  };
  
  if (VWO._.ac && VWO._.ac.cInstJS){
  	VWO._.addConsentTrigger(engage);
  } else {
    engage();
  }
})();

