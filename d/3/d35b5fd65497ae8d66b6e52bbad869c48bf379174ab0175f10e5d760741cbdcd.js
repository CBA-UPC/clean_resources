<!DOCTYPE html><html lang="en"><head> <meta charset="UTF-8"> <meta name="viewport" content="width=device-width, initial-scale=1"> <script>var count=0; window.vpb=window.vpb ||{cmd: []}; window.addEventListener('message', function (e){var data; if (!e.data) return; try{data=JSON.parse(e.data);}catch (e){return;}if (data.source !=='ifAdapter') return; if (data.action==='auc'){vpb.cmd.push(function (){var time=data.timeout ? data.timeout - 100 : null; vpb.auctionByAdUnitID({fixedTimeout: time, code: 'div-gpt-ad-' + (++count), sizes: data.sizes, render: false, onEnd: function (winner){e.source.postMessage(JSON.stringify({source: 'ifAdapter', action: 'response', winner: winner}), '*');}});});}else if (data.action==='win'){vpb.win(data.adId);}}) </script></head><body><script>var pubId=307825;var siteId=(location.href.match(/i=(\d+)/)||[])[1]||6864;var src='https://'+location.host+'/prebidlink/y' + parseInt(Date.now() / 864e5) + '/hbw_master_' + pubId + '_' + siteId + '.js';var s=document.createElement('script');s.src=src;document.body.appendChild(s);</script></body></html>

