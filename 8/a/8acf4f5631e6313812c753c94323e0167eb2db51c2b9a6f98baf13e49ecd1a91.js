function p(i,n,l,r,d,v) { if(!r){r='';} if(!d){d='';} if(!v){v='';} var dt = new Date(); var c = '' + ( dt.getTime() * Math.random() ); var protocol = 'http' + (document.location.protocol.toLowerCase().indexOf('https')>=0? 's':''); return( '<im' + 'g src="' + protocol + '://rd.rakuten.co.jp/p/?i='+escape(i)+'&n='+escape(n)+'&l='+escape(l)+'&r='+escape(r)+'&c='+ c +'&d='+escape(d)+'&v='+escape(v)+'" height="1" width="1" border="0" alt="" />');}