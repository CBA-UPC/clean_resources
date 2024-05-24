var sc_shopDir={
    "www.rakuten.co.jp":1,
    "www.rakuten.ne.jp":2,
    "present.item.rakuten.co.jp":1,
    "sa.item.rakuten.co.jp":1,
    "item.rakuten.co.jp":1};
for(var i in sc_shopDir){
	if(location.hostname.indexOf(i)>-1)
		var sc_my1stDir=location.pathname.split("/")[sc_shopDir[i]]
}