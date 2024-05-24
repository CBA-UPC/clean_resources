<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">

    <link rel="shortcut icon" href="/favicon.ico" type="image/x-icon">
    <link rel="icon" href="/favicon.ico" type="image/x-icon">

    <title>Apache Storm</title>

    <!-- Bootstrap core CSS -->
    <link href="/assets/css/bootstrap.min.css" rel="stylesheet">
    <!-- Bootstrap theme -->
    <link href="/assets/css/bootstrap-theme.min.css" rel="stylesheet">

    <!-- Custom styles for this template -->
    <link href="/css/font-awesome.min.css" rel="stylesheet">
    <link href="/css/style.css" rel="stylesheet">
    <link href="/assets/css/owl.theme.css" rel="stylesheet">
    <link href="/assets/css/owl.carousel.css" rel="stylesheet">
    <script type="text/javascript" src="/assets/js/jquery.min.js"></script>
    <script type="text/javascript" src="/assets/js/bootstrap.min.js"></script>
    <script type="text/javascript" src="/assets/js/owl.carousel.min.js"></script>
    <script type="text/javascript" src="/assets/js/storm.js"></script>
</head>


  <body>
    <header>
    <div class="container-fluid">
        <div class="row">
            <div class="col-md-5">
                <a href="/index.html"><img src="/images/logo.png" class="logo"/></a>
            </div>
            <div class="col-md-5">
                
            </div>
            <div class="col-md-2">
                <a href="/downloads.html" class="btn-std btn-block btn-download">Download</a>
            </div>
        </div>
    </div>
</header>
<!--Header End-->
<!--Navigation Begin-->
<div class="navbar" role="banner">
    <div class="container-fluid">
        <div class="navbar-header">
            <button class="navbar-toggle" type="button" data-toggle="collapse" data-target=".bs-navbar-collapse">
                <span class="icon-bar"></span>
                <span class="icon-bar"></span>
                <span class="icon-bar"></span>
            </button>
        </div>
        <nav class="collapse navbar-collapse bs-navbar-collapse" role="navigation">
            <ul class="nav navbar-nav">
                <li><a href="/index.html" id="home">Home</a></li>
                <li><a href="/getting-help.html" id="getting-help">Getting Help</a></li>
                <li><a href="/about/integrates.html" id="project-info">Project Information</a></li>
                <li class="dropdown">
                    <a href="#" class="dropdown-toggle" data-toggle="dropdown" id="documentation">Documentation <b
                            class="caret"></b></a>
                    <ul class="dropdown-menu">
                        
                        
                        <li><a href="/releases/2.6.0/index.html">2.6.0</a></li>
                        
                        
                        
                        <li><a href="/releases/2.5.0/index.html">2.5.0</a></li>
                        
                        
                        
                        <li><a href="/releases/2.4.0/index.html">2.4.0</a></li>
                        
                        
                        
                        <li><a href="/releases/2.3.0/index.html">2.3.0</a></li>
                        
                        
                        
                        <li><a href="/releases/2.2.1/index.html">2.2.1</a></li>
                        
                        
                        
                        <li><a href="/releases/2.2.0/index.html">2.2.0</a></li>
                        
                        
                        
                        <li><a href="/releases/2.1.1/index.html">2.1.1</a></li>
                        
                        
                        
                        <li><a href="/releases/2.1.0/index.html">2.1.0</a></li>
                        
                        
                        
                        <li><a href="/releases/2.0.0/index.html">2.0.0</a></li>
                        
                        
                        
                        <li><a href="/releases/1.2.4/index.html">1.2.4</a></li>
                        
                        
                        
                        <li><a href="/releases/1.2.3/index.html">1.2.3</a></li>
                        
                        
                    </ul>
                </li>
                <li><a href="/talksAndVideos.html">Talks and Slideshows</a></li>
                <li class="dropdown">
                    <a href="#" class="dropdown-toggle" data-toggle="dropdown" id="contribute">Community <b
                            class="caret"></b></a>
                    <ul class="dropdown-menu">
                        <li><a href="/contribute/Contributing-to-Storm.html">Contributing</a></li>
                        <li><a href="/contribute/People.html">People</a></li>
                        <li><a href="/contribute/BYLAWS.html">ByLaws</a></li>
                        <li><a href="/Powered-By.html">PoweredBy</a></li>
                    </ul>
                </li>
                <li><a href="/2023/11/22/storm260-released.html" id="news">News</a></li>
            </ul>
        </nav>
    </div>
</div>



    <div class="container-fluid">
    <h1 class="page-title">Apache Storm</h1>
          <div class="row">
           	<div class="col-md-12">
	             <div class="content">
  <div class="container-fluid">
      <div class="row">
          <div class="col-md-8">
              <img src="images/storm-flow.png" class="img-responsive" title="A Topology with its components" style="padding-left: 50px;" />
                <map name="topo">
                    <area shape="rect" href="" coords="60,150,120,210" title="Spout 1">
                    <area shape="rect" href="" coords="60,275,120,335" title="Spout 2">
                    <area shape="rect" href="" coords="385,275,445,335" title="bolt 3">
                    <area shape="rect" href="" coords="385,140,445,200" title="bolt 2">
                    <area shape="rect" href="" coords="385,15,445,75" title="bolt 1">
                    <area shape="rect" href="" coords="715,275,775,335" title="bolt 5">
                    <area shape="rect" href="" coords="695,75,755,135" title="bolt 4">
                </map>
            </div>
            <div class="col-md-4">
                <div class="box-warning">
                    <h4>Latest News</h4>
                    <!-- test git pubsub -->
                    <ul class="latest-news">
                        <ul class="latest-news">
                        
                        <li><a href="/2023/11/22/storm260-released.html">Apache Storm 2.6.0 Released</a>&nbsp;<span class="small">(22 Nov 2023) </span></li>
                        
                        <li><a href="/2023/08/04/storm250-released.html">Apache Storm 2.5.0 Released</a>&nbsp;<span class="small">(04 Aug 2023) </span></li>
                        
                        <li><a href="/2022/03/25/storm240-released.html">Apache Storm 2.4.0 Released</a>&nbsp;<span class="small">(25 Mar 2022) </span></li>
                        
                    </ul> 
                    <p align="right"><a href="/2023/11/22/storm260-released.html" class="btn-std">More News</a></p>
                </div>
            </div>
        </div>
        <div class="row">
          <div class="col-md-8">
              <div class="box-primary">
                    <h4>Why use Apache Storm?</h4>
                  <p>Apache Storm is a free and open source distributed realtime computation system. Apache Storm makes it easy to reliably process unbounded streams of data, doing for realtime processing what Hadoop did for batch processing. Apache Storm is simple, can be used with any programming language, and is a lot of fun to use!</p>
                    <p>Apache Storm has many use cases: realtime analytics, online machine learning, continuous computation, distributed RPC, ETL, and more. Apache Storm is fast: a benchmark clocked it at over <strong>a million tuples processed per second per node</strong>. It is scalable, fault-tolerant, guarantees your data will be processed, and is easy to set up and operate.</p>
                    <p>Apache Storm integrates with the queueing and database technologies you already use. An Apache Storm topology consumes streams of data and processes those streams in arbitrarily complex ways, repartitioning the streams between each stage of the computation however needed. Read more in the tutorial.</p>
                </div>
            </div>
        </div>
    </div>
</div>


	          </div>
	       </div>
	  </div>
<footer>
    <div class="container-fluid">
        <div class="row">
            <div class="col-md-3">
                <div class="footer-widget">
                    <h5>Meetups</h5>
                    <div class="footer-widget">
                        <a class="acevent" data-format="wide" data-mode="dark"></a>
                    </div>
                </div>
            </div>
            <div class="col-md-3">
                <div class="footer-widget">
                    <h5>About Apache Storm</h5>
                    <p>Apache Storm integrates with any queueing system and any database system. Apache Storm's spout abstraction makes it easy to integrate a new queuing system. Likewise, integrating Apache Storm with database systems is easy.</p>
               </div>
            </div>
            <div class="col-md-3">
                <div class="footer-widget">
                    <h5>First Look</h5>
                    <ul class="footer-list">
                        <li><a href="/releases/current/Rationale.html">Rationale</a></li>
                        <li><a href="/releases/current/Tutorial.html">Tutorial</a></li>
                        <li><a href="/releases/current/Setting-up-development-environment.html">Setting up development environment</a></li>
                        <li><a href="/releases/current/Creating-a-new-Storm-project.html">Creating a new Apache Storm project</a></li>
                    </ul>
                </div>
            </div>
            <div class="col-md-3">
                <div class="footer-widget">
                    <h5>Documentation</h5>
                    <ul class="footer-list">
                        <li><a href="/releases/current/index.h,i=document.createElement('span'),n=new MutationObserver(function(){e(),t=!1});return n.observe(i,{attributes:!0}),function(){t||(t=!0,i.setAttribute('x-index',o),++o)}}:function(e){var t=!1;return function(){t||(t=!0,setTimeout(function(){t=!1,e()},$))}},ie=function(){return void 0==i&&(i=-1!==navigator.appVersion.indexOf('MSIE 10')),i},ne=function(e,t){if(!(e instanceof t))throw new TypeError('Cannot call a class as a function')},re=function(){function e(e,t){for(var o,n=0;n<t.length;n++)o=t[n],o.enumerable=o.enumerable||!1,o.configurable=!0,'value'in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}return function(t,o,i){return o&&e(t.prototype,o),i&&e(t,i),t}}(),pe=function(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e},se=Object.assign||function(e){for(var t,o=1;o<arguments.length;o++)for(var i in t=arguments[o],t)Object.prototype.hasOwnProperty.call(t,i)&&(e[i]=t[i]);return e},de=['auto-start','auto','auto-end','top-start','top','top-end','right-start','right','right-end','bottom-end','bottom','bottom-start','left-end','left','left-start'],ae=de.slice(3),fe={FLIP:'flip',CLOCKWISE:'clockwise',COUNTERCLOCKWISE:'counterclockwise'},le=function(){function t(o,i){var n=this,r=2<arguments.length&&void 0!==arguments[2]?arguments[2]:{};ne(this,t),this.scheduleUpdate=function(){return requestAnimationFrame(n.update)},this.update=oe(this.update.bind(this)),this.options=se({},t.Defaults,r),this.state={isDestroyed:!1,isCreated:!1,scrollParents:[]},this.reference=o.jquery?o[0]:o,this.popper=i.jquery?i[0]:i,this.options.modifiers={},Object.keys(se({},t.Defaults.modifiers,r.modifiers)).forEach(function(e){n.options.modifiers[e]=se({},t.Defaults.modifiers[e]||{},r.modifiers?r.modifiers[e]:{})}),this.modifiers=Object.keys(this.options.modifiers).map(function(e){return se({name:e},n.options.modifiers[e])}).sort(function(e,t){return e.order-t.order}),this.modifiers.forEach(function(t){t.enabled&&e(t.onLoad)&&t.onLoad(n.reference,n.popper,n.options,t,n.state)}),this.update();var p=this.options.eventsEnabled;p&&this.enableEventListeners(),this.state.eventsEnabled=p}return re(t,[{key:'update',value:function(){return k.call(this)}},{key:'destroy',value:function(){return D.call(this)}},{key:'enableEventListeners',value:function(){return A.call(this)}},{key:'disableEventListeners',value:function(){return I.call(this)}}]),t}();return le.Utils=('undefined'==typeof window?global:window).PopperUtils,le.placements=de,le.Defaults={placement:'bottom',eventsEnabled:!0,removeOnDestroy:!1,onCreate:function(){},onUpdate:function(){},modifiers:{shift:{order:100,enabled:!0,fn:function(e){var t=e.placement,o=t.split('-')[0],i=t.split('-')[1];if(i){var n=e.offsets,r=n.reference,p=n.popper,s=-1!==['bottom','top'].indexOf(o),d=s?'left':'top',a=s?'width':'height',f={start:pe({},d,r[d]),end:pe({},d,r[d]+r[a]-p[a])};e.offsets.popper=se({},p,f[i])}return e}},offset:{order:200,enabled:!0,fn:function(e,t){var o,i=t.offset,n=e.placement,r=e.offsets,p=r.popper,s=r.reference,d=n.split('-')[0];return o=R(+i)?[+i,0]:G(i,p,s,d),'left'===d?(p.top+=o[0],p.left-=o[1]):'right'===d?(p.top+=o[0],p.left+=o[1]):'top'===d?(p.left+=o[0],p.top-=o[1]):'bottom'===d&&(p.left+=o[0],p.top+=o[1]),e.popper=p,e},offset:0},preventOverflow:{order:300,enabled:!0,fn:function(e,t){var o=t.boundariesElement||r(e.instance.popper);e.instance.reference===o&&(o=r(o));var i=w(e.instance.popper,e.instance.reference,t.padding,o);t.boundaries=i;var n=t.priority,p=e.offsets.popper,s={primary:function(e){var o=p[e];return p[e]<i[e]&&!t.escapeWithReference&&(o=_(p[e],i[e])),pe({},e,o)},secondary:function(e){var o='right'===e?'left':'top',n=p[o];return p[e]>i[e]&&!t.escapeWithReference&&(n=z(p[o],i[e]-('right'===e?p.width:p.height))),pe({},o,n)}};return n.forEach(function(e){var t=-1===['left','top'].indexOf(e)?'secondary':'primary';p=se({},p,s[t](e))}),e.offsets.popper=p,e},priority:['left','right','top','bottom'],padding:5,boundariesElement:'scrollParent'},keepTogether:{order:400,enabled:!0,fn:function(e){var t=e.offsets,o=t.popper,i=t.reference,n=e.placement.split('-')[0],r=V,p=-1!==['top','bottom'].indexOf(n),s=p?'right':'bottom',d=p?'left':'top',a=p?'width':'height';return o[s]<r(i[d])&&(e.offsets.popper[d]=r(i[d])-o[a]),o[d]>r(i[s])&&(e.offsets.popper[d]=r(i[s])),e}},arrow:{order:500,enabled:!0,fn:function(e,t){if(!F(e.instance.modifiers,'arrow','keepTogether'))return e;var o=t.element;if('string'==typeof o){if(o=e.instance.popper.querySelector(o),!o)return e;}else if(!e.instance.popper.contains(o))return console.warn('WARNING: `arrow.element` must be child of its popper element!'),e;var i=e.placement.split('-')[0],n=e.offsets,r=n.popper,p=n.reference,s=-1!==['left','right'].indexOf(i),d=s?'height':'width',a=s?'top':'left',f=s?'left':'top',l=s?'bottom':'right',m=O(o)[d];p[l]-m<r[a]&&(e.offsets.popper[a]-=r[a]-(p[l]-m)),p[a]+m>r[l]&&(e.offsets.popper[a]+=p[a]+m-r[l]);var h=p[a]+p[d]/2-m/2,g=h-c(e.offsets.popper)[a];return g=_(z(r[d]-m,g),0),e.arrowElement=o,e.offsets.arrow={},e.offsets.arrow[a]=Math.round(g),e.offsets.arrow[f]='',e},element:'[x-arrow]'},flip:{order:600,enabled:!0,fn:function(e,t){if(W(e.instance.modifiers,'inner'))return e;if(e.flipped&&e.placement===e.originalPlacement)return e;var o=w(e.instance.popper,e.instance.reference,t.padding,t.boundariesElement),i=e.placement.split('-')[0],n=L(i),r=e.placement.split('-')[1]||'',p=[];switch(t.behavior){case fe.FLIP:p=[i,n];break;case fe.CLOCKWISE:p=K(i);break;case fe.COUNTERCLOCKWISE:p=K(i,!0);break;default:p=t.behavior;}return p.forEach(function(s,d){if(i!==s||p.length===d+1)return e;i=e.placement.split('-')[0],n=L(i);var a=e.offsets.popper,f=e.offsets.reference,l=V,m='left'===i&&l(a.right)>l(f.left)||'right'===i&&l(a.left)<l(f.right)||'top'===i&&l(a.bottom)>l(f.top)||'bottom'===i&&l(a.top)<l(f.bottom),h=l(a.left)<l(o.left),c=l(a.right)>l(o.right),g=l(a.top)<l(o.top),u=l(a.bottom)>l(o.bottom),b='left'===i&&h||'right'===i&&c||'top'===i&&g||'bottom'===i&&u,y=-1!==['top','bottom'].indexOf(i),w=!!t.flipVariations&&(y&&'start'===r&&h||y&&'end'===r&&c||!y&&'start'===r&&g||!y&&'end'===r&&u);(m||b||w)&&(e.flipped=!0,(m||b)&&(i=p[d+1]),w&&(r=j(r)),e.placement=i+(r?'-'+r:''),e.offsets.popper=se({},e.offsets.popper,S(e.instance.popper,e.offsets.reference,e.placement)),e=N(e.instance.modifiers,e,'flip'))}),e},behavior:'flip',padding:5,boundariesElement:'viewport'},inner:{order:700,enabled:!1,fn:function(e){var t=e.placement,o=t.split('-')[0],i=e.offsets,n=i.popper,r=i.reference,p=-1!==['left','right'].indexOf(o),s=-1===['top','left'].indexOf(o);return n[p?'left':'top']=r[t]-(s?n[p?'width':'height']:0),e.placement=L(t),e.offsets.popper=c(n),e}},hide:{order:800,enabled:!0,fn:function(e){if(!F(e.instance.modifiers,'hide','preventOverflow'))return e;var t=e.offsets.reference,o=T(e.instance.modifiers,function(e){return'preventOverflow'===e.name}).boundaries;if(t.bottom<o.top||t.left>o.right||t.top>o.bottom||t.right<o.left){if(!0===e.hide)return e;e.hide=!0,e.attributes['x-out-of-boundaries']=''}else{if(!1===e.hide)return e;e.hide=!1,e.attributes['x-out-of-boundaries']=!1}return e}},computeStyle:{order:850,enabled:!0,fn:function(e,t){var o=t.x,i=t.y,n=e.offsets.popper,p=T(e.instance.modifiers,function(e){return'applyStyle'===e.name}).gpuAcceleration;void 0!==p&&console.warn('WARNING: `gpuAcceleration` option moved to `computeStyle` modifier and will not be supported in future versions of Popper.js!');var s,d,a=void 0===p?t.gpuAcceleration:p,f=r(e.instance.popper),l=g(f),m={position:n.position},h={left:V(n.left),top:V(n.top),bottom:V(n.bottom),right:V(n.right)},c='bottom'===o?'top':'bottom',u='right'===i?'left':'right',b=B('transform');if(d='bottom'==c?-l.height+h.bottom:h.top,s='right'==u?-l.width+h.right:h.left,a&&b)m[b]='translate3d('+s+'px, '+d+'px, 0)',m[c]=0,m[u]=0,m.willChange='transform';else{var y='bottom'==c?-1:1,w='right'==u?-1:1;m[c]=d*y,m[u]=s*w,m.willChange=c+', '+u}var v={"x-placement":e.placement};return e.attributes=se({},v,e.attributes),e.styles=se({},m,e.styles),e},gpuAcceleration:!0,x:'bottom',y:'right'},applyStyle:{order:900,enabled:!0,fn:function(e){return U(e.instance.popper,e.styles),Y(e.instance.popper,e.attributes),e.offsets.arrow&&U(e.arrowElement,e.offsets.arrow),e},onLoad:function(e,t,o,i,n){var r=x(n,t,e),p=E(o.placement,r,t,e,o.modifiers.flip.boundariesElement,o.modifiers.flip.padding);return t.setAttribute('x-placement',p),U(t,{position:'absolute'}),o},gpuAcceleration:void 0}}},le});
//# sourceMappingURL=popper.min.js.map
