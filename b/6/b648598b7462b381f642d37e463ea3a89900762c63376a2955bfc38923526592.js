function setUserCookie(name,value,expires,path,domain,secure){var today=new Date();today.setTime(today.getTime());if(expires){expires=expires*1000*60*60;}
var expires_date=new Date(today.getTime()+(expires));document.cookie=name+'='+escape(value)+
((expires)?';expires='+expires_date.toGMTString():'')+
((path)?';path='+path:'')+
((domain)?';domain='+domain:'')+
((secure)?';secure':'');}
function checkUserCookie(cookie_name){var location_details=getUserCookie(cookie_name);if(location_details==null||location_details==""){return false;}else if(location_details!=""){return true;}}
function wordInString(s,word)
{var substrings=s.split(word);return substrings.length-1;}
if(typeof(Storage)!=="undefined")
{console.log('Local storage supported by browser');}
else
console.log('Local storage not supported by browser');window.XdUtils=window.XdUtils||(function(){function extend(object,defaultObject){var result=defaultObject||{};var key;for(key in object){if(object.hasOwnProperty(key)){result[key]=object[key];}}
return result;}
return{extend:extend};})();window.xdLocalStorage=window.xdLocalStorage||(function(){var MESSAGE_NAMESPACE='cross-domain-local-message';var options={iframeId:'cross-domain-iframe',iframeUrl:undefined,initCallback:;var requestId=-1;var iframe;var requests={};var wasInit=false;var iframeReady=true;function applyCallback(data){if(requests[data.id]){requests[data.id](data);delete requests[data.id];}}
function receiveMessage(event){var data;try{data=JSON.parse(event.data);}catch(err){}
if(data&&data.namespace===MESSAGE_NAMESPACE){if(data.id==='iframe-ready'){iframeReady=true;options.initCallback();}else{applyCallback(data);}}}
function buildMessage(action,key,value,callback){requestId++;requests[requestId]=callback;var data={namespace:MESSAGE_NAMESPACE,id:requestId,action:action,key:key,value:value};iframe.contentWindow.postMessage(JSON.stringify(data),'*');}
function init(customOptions){options=XdUtils.extend(customOptions,options);var temp=document.createElement('div');if(window.addEventListener){window.addEventListener('message',receiveMessage,false);}else{window.attachEvent('onmessage',receiveMessage);}
temp.innerHTML='<iframe id="'+options.iframeId+'" src='+options.iframeUrl+' style="display: none;"></iframe>';document.body.appendChild(temp);iframe=document.getElementById(options.iframeId);}
function isApiReady(){if(!wasInit){console.log('You must call xdLocalStorage.init() before using it.');return false;}
if(!iframeReady){console.log('You must wait for iframe ready message before using the api.');return false;}
else{console.log('Your iframe ready .');}
return true;}
return{init:function(customOptions){if(!customOptions.iframeUrl){throw 'You must specify iframeUrl';}
if(wasInit){console.log('xdLocalStorage was already initialized!');return;}
wasInit=true;if(document.readyState==='complete'){init(customOptions);}else{window.onload=function(){init(customOptions);};}},setItem:function(key,value,callback){if(!isApiReady()){return;}
buildMessage('set',key,value,callback);},getItem:function(key,callback){if(!isApiReady()){return;}
buildMessage('get',key,null,callback);},removeItem:function(key,callback){if(!isApiReady()){return;}
buildMessage('remove',key,null,callback);},key:function(index,callback){if(!isApiReady()){return;}
buildMessage('key',index,null,callback);},clear:function(callback){if(!isApiReady()){return;}
buildMessage('clear',null,null,callback);},wasInit:;})();xdLocalStorage.init({iframeUrl:'https://www.desipearl.com/tracker/localstorage/cross-domain-local-storage.html',initCallback:function(){console.log('init');console.log('Got iframe ready');if(!checkUserCookie('dp_user_trackerId')){var user_id='';xdLocalStorage.getItem('dp_user_trackerId',function(data){user_id=data.value;if(user_id==''||user_id==null){user_id=userId();xdLocalStorage.setItem('dp_user_trackerId',user_id,function(data){console.log('setooo');});console.log('no cookies no local set user_id: '+user_id);setUserCookie('dp_user_trackerId',user_id,dp_tracker_cookie_lifespan,'/',cookie_domain,'');if(!checkUserCookie('dp_user_lastUpdated'))setUserCookie('dp_user_lastUpdated',Date.now(),dp_tracker_cookie_lifespan,'/',cookie_domain,'');}else{console.log('localstorage yes, no cookies set user_id: '+user_id);setUserCookie('dp_user_trackerId',user_id,dp_tracker_cookie_lifespan,'/',cookie_domain,'');if(!checkUserCookie('dp_user_lastUpdated'))setUserCookie('dp_user_lastUpdated',Date.now(),dp_tracker_cookie_lifespan,'/',cookie_domain,'');}});}else{xdLocalStorage.getItem('dp_user_trackerId',function(data){loc_user_id=data.value;if(loc_user_id==''||loc_user_id==null){xdLocalStorage.setItem('dp_user_trackerId',getUserCookie('dp_user_trackerId'),function(data){console.log('cookies yes, no localstorage set');});}
if(!checkUserCookie('dp_user_lastUpdated'))setUserCookie('dp_user_lastUpdated',Date.now(),dp_tracker_cookie_lifespan,'/',cookie_domain,'');});}}});function userId(){var chars="0123456789";var string_length=26;var randomstring='';for(var i=0;i<string_length;i++){var rnum=Math.floor(Math.random()*chars.length);randomstring+=chars.substring(rnum,rnum+1);}
var ts=Math.round((new Date()).getTime()/1000);return randomstring+'_'+ts;}
var dp_tracker_cookie_lifespan=87600;var dp_user_trackerGeo='';var url=window.location.href;url_arr=url.split('/');domain=url_arr[2];var url_t=url_arr[(url_arr.length-2)].split(".");url_t_val=url_t[0];lang_arr=domain.split('.');lang=(lang_arr[0]=='www'||lang_arr[0]=='www1'||lang_arr[0]=='www2'||lang_arr[0]=='photos'||lang_arr[0]=='gallery'||lang_arr[0]=='wallpapers'||lang_arr[0]=='videos')?"english":lang_arr[0];if(jQuery.trim(url_t).length===0)url_t_val=url_arr[(url_arr.length-2)];var cookie_domain=domain;var site=domain;var gdata=[];var bot_data=[];var widget_id='';var affiliate_id='';var referrer='';var gen_section='';var type='';var hash_tags='';var tags='';var meta_desc='';var meta_keyword='';var meta_news_keyword='';var og_title='';var og_description='';var h1_title='';var url_title='';var keywords='';var skip_arr=[];var data_tags='';var width=screen.width;var height=screen.height;var key=[];var english=/^[A-Za-z0-9.,:!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/? ]*$/;var lang_flag=0;var isMobile=false;var channel_array=["www.boldsky.com","www.filmibeat.com","www.gizbot.com","www.drivespark.com","www.goodreturns.in","www.oneindia.com","www.nativeplanet.com","www.careerindia.com","www.desipearl.com","tamil.gizbot.com","hindi.gizbot.com","kannada.gizbot.com","telugu.gizbot.com","bengali.gizbot.com","gujarati.gizbot.com","malayalam.gizbot.com","tamil.boldsky.com","hindi.boldsky.com","kannada.boldsky.com","telugu.boldsky.com","bengali.boldsky.com","gujarati.boldsky.com","malayalam.boldsky.com","tamil.filmibeat.com","hindi.filmibeat.com","kannada.filmibeat.com","telugu.filmibeat.com","bengali.filmibeat.com","gujarati.filmibeat.com","malayalam.filmibeat.com","tamil.drivespark.com","hindi.drivespark.com","kannada.drivespark.com","telugu.drivespark.com","bengali.drivespark.com","gujarati.drivespark.com","malayalam.drivespark.com","tamil.oneindia.com","hindi.oneindia.com","kannada.oneindia.com","telugu.oneindia.com","bengali.oneindia.com","gujarati.oneindia.com","malayalam.oneindia.com","tamil.goodreturns.in","hindi.goodreturns.in","kannada.goodreturns.in","telugu.goodreturns.in","bengali.goodreturns.in","gujarati.goodreturns.in","malayalam.goodreturns.in","tamil.nativeplanet.com","hindi.nativeplanet.com","kannada.nativeplanet.com","telugu.nativeplanet.com","bengali.nativeplanet.com","gujarati.nativeplanet.com","malayalam.nativeplanet.com","tamil.careerindia.com","hindi.careerindia.com","kannada.careerindia.com","telugu.careerindia.com","bengali.careerindia.com","gujarati.careerindia.com","malayalam.careerindia.com"];if(jQuery.inArray(domain,channel_array)>-1)
{if(document.getElementById('container'))
{gen_section=document.getElementById('container').getAttribute('data-category_name');if(document.getElementById('container').getAttribute('data-category_type'))
{type=document.getElementById('container').getAttribute('data-category_type');}}
else if(document.getElementById('containerMain'))
{gen_section=document.getElementById('containerMain').getAttribute('data-category_name');if(document.getElementById('containerMain').getAttribute('data-category_type'))
{type=document.getElementById('containerMain').getAttribute('data-category_type');}}
if(lang=='english')
{if(document.getElementById('container'))
{gen_section_cat_id=document.getElementById('container').getAttribute('data-category_id');if(gen_section_cat_id!=='')gen_section=gen_section+"_"+gen_section_cat_id;}
else if(document.getElementById('containerMain'))
{gen_section_cat_id=document.getElementById('containerMain').getAttribute('data-category_id');if(gen_section_cat_id!=='')gen_section=gen_section+"_"+gen_section_cat_id;}}
else
{gen_section_cat="";var multi=$('.breadcrump.clearfix');$.each(multi,function(index,item){gen_section_cat=$(item).data('category');});if(gen_section_cat!=='')gen_section=gen_section+"_"+gen_section_cat;}
if(jQuery("meta[name='keywords']").length>0)
{hash_tags=document.querySelector("meta[name='keywords']").getAttribute('content');tags+=' '+hash_tags.split(",",2);}
if(jQuery("meta[name='news_keywords']").length>0)
{hash_tags=document.querySelector("meta[name='news_keywords']").getAttribute('content');tags+=hash_tags.split(",",2);}
if(document.getElementById('tag-container'))
{if(lang=='english')
data_tags=document.getElementById('tag-container').getAttribute('data-tags');else
{lang_flag=1;if(jQuery("meta[name='news_keywords']").length>0)
{meta_news_keyword=document.querySelector("meta[name='news_keywords']").getAttribute('content');key_arr=meta_news_keyword.split(",");j=0;for(i=0,len=key_arr.length;i<len;++i){if(english.test(key_arr[i])){key[j]=key_arr[i];j++;}}
meta_news_keyword=key.join();}
keywords=meta_news_keyword;data_tags=document.getElementById('tag-container').getAttribute('data-eng-tags');}}
if(data_tags==='')
{if(document.getElementById('tags-container'))
{if(lang=='english')
data_tags=document.getElementById('tags-container').getAttribute('data-tags');else
{if(lang_flag==0)
{data_tags=document.getElementById('tags-container').getAttribute('data-eng-tags');}}}}}
if(lang_flag==0)
{if(jQuery("meta[name='description']").length>0)
{meta_desc=document.querySelector("meta[name='description']").getAttribute('content');if(!english.test(meta_desc))meta_desc='';}
if(jQuery("meta[name='keywords']").length>0)
{meta_keyword=document.querySelector("meta[name='keywords']").getAttribute('content');key_arr=meta_keyword.split(",");j=0;for(i=0,len=key_arr.length;i<len;++i){if(english.test(key_arr[i])){key[j]=key_arr[i];j++;}}
meta_keyword=key.join();}
if(jQuery('meta[property="og:title"]').length>0)
{og_title=document.querySelector("meta[property='og:title']").getAttribute('content');if(!english.test(og_title))og_title='';}
if(jQuery('meta[property="og:description"]').length>0)
{og_description=document.querySelector("meta[property='og:description']").getAttribute('content');if(!english.test(og_description))og_description='';}
if(jQuery('h1').text().length>0)
{h1_title=jQuery('h1').text();if(!english.test(h1_title))h1_title='';}
url_title=url_t_val.replace(/-/g," ");skip_arr=["a","a's","able","about","above","according","accordingly","across","actually","after","afterwards","again","against","ain't","all","allow","allows","almost","alone","along","already","also","although","always","am","among","amongst","an","and","another","any","anybody","anyhow","anyone","anything","anyway","anyways","anywhere","apart","appear","appreciate","appropriate","are","aren't","around","as","aside","ask","asking","associated","at","available","away","awfully","b","be","became","because","become","becomes","becoming","been","before","beforehand","behind","being","believe","below","beside","besides","best","better","between","beyond","both","brief","but","by","c","c'mon","c's","came","can","can't","cannot","cant","cause","causes","certain","certainly","changes","clearly","co","com","come","comes","concerning","consequently","consider","considering","contain","containing","contains","corresponding","could","couldn't","course","currently","d","definitely","described","despite","did","didn't","different","do","does","doesn't","doing","don't","done","down","downwards","during","e","each","edu","eg","eight","either","else","elsewhere","enough","entirely","especially","et","etc","even","ever","every","everybody","everyone","everything","everywhere","ex","exactly","example","except","f","far","few","fifth","first","five","followed","following","follows","for","former","formerly","forth","four","from","further","furthermore","g","get","gets","getting","given","gives","go","goes","going","gone","got","gotten","greetings","h","had","hadn't","happens","hardly","has","hasn't","have","haven't","having","he","he's","hello","help","hence","her","here","here's","hereafter","hereby","herein","hereupon","hers","herself","hi","him","himself","his","hither","hopefully","how","howbeit","however","i","i'd","i'll","i'm","i've","ie","if","ignored","immediate","in","inasmuch","inc","indeed","indicate","indicated","indicates","inner","insofar","instead","into","inward","is","isn't","it","it'd","it'll","it's","its","itself","j","just","k","keep","keeps","kept","know","known","knows","l","last","lately","later","latter","latterly","least","less","lest","let","let's","like","liked","likely","little","look","looking","looks","ltd","m","mainly","many","may","maybe","me","mean","meanwhile","merely","might","more","moreover","most","mostly","much","must","my","myself","n","name","namely","nd","near","nearly","necessary","need","needs","neither","never","nevertheless","new","next","nine","no","nobody","non","none","noone","nor","normally","not","nothing","novel","now","nowhere","o","obviously","of","off","often","oh","ok","okay","old","on","once","one","ones","only","onto","or","other","others","otherwise","ought","our","ours","ourselves","out","outside","over","overall","own","p","particular","particularly","per","perhaps","placed","please","plus","possible","presumably","probably","provides","q","que","quite","qv","r","rather","rd","re","really","reasonably","regarding","regardless","regards","relatively","respectively","right","s","said","same","saw","say","saying","says","second","secondly","see","seeing","seem","seemed","seeming","seems","seen","self","selves","sensible","sent","serious","seriously","seven","several","shall","she","should","shouldn't","since","six","so","some","somebody","somehow","someone","something","sometime","sometimes","somewhat","somewhere","soon","sorry","specified","specify","specifying","still","sub","such","sup","sure","t","t's","take","taken","tell","tends","th","than","thank","thanks","thanx","that","that's","thats","the","their","theirs","them","themselves","then","thence","there","there's","thereafter","thereby","therefore","therein","theres","thereupon","these","they","they'd","they'll","they're","they've","think","third","this","thorough","thoroughly","those","though","three","through","throughout","thru","thus","to","together","too","took","toward","towards","tried","tries","truly","try","trying","twice","two","u","un","under","unfortunately","unless","unlikely","until","unto","up","upon","us","use","used","useful","uses","using","usually","uucp","v","value","various","very","via","viz","vs","w","want","wants","was","wasn't","way","we","we'd","we'll","we're","we've","welcome","well","went","were","weren't","what","what's","whatever","when","whence","whenever","where","where's","whereafter","whereas","whereby","wherein","whereupon","wherever","whether","which","while","whither","who","who's","whoever","whole","whom","whose","why","will","willing","wish","with","within","without","won't","wonder","would","wouldn't","x","y","yes","yet","you","you'd","you'll","you're","you've","your","yours","yourself","yourselves","z","zero"];jQuery(document).ready(function(){myVar1=setTimeout(function(){widget_id='';affiliate_id='';var referrer_url=document.referrer;if(referrer_url!=='')
{ref_arr=referrer_url.split('/');referrer=ref_arr[2];if(site==referrer)referrer='';}
var text=meta_desc+" "+meta_keyword+" "+og_title+" "+og_description+" "+h1_title+" "+url_title;text=jQuery.trim(text).toLowerCase();text=text.replace(/  /g," ");var word_list=text.split(/\W+/);var arr=[];var tag_array=[];var i=0;for(var key in word_list)
{tag_array[jQuery.trim(word_list[i]).toLowerCase()]=0;i++;}
j=0;k=0;for(var key1 in word_list)
{for(var key2 in tag_array)
{if(word_list[k].match(key2)!==null)
{tag_array[jQuery.trim(word_list[k]).toLowerCase()]=parseInt(tag_array[jQuery.trim(word_list[k]).toLowerCase()])+1;}
j++;}
k++;}
var sortable=[];for(var keyword in tag_array)
{if(jQuery.inArray(jQuery.trim(keyword).toLowerCase(),skip_arr)==-1)
{sortable.push([keyword,tag_array[keyword]]);}}
sortable.sort(function(a,b)
{return b[1]-a[1];});i=0;for(var key3 in sortable)
{if(i<=3)
{arr22=jQuery.trim(sortable[key3]).split(",");arr[i]=arr22[0];}
i++;}
var res_arr=[];size=4;var current_set=[''];var temp_set2=[''];var temp_set3=[''];var temp_set4=[''];var curr_elem,new_elem;n=0;o=0;q=0;r=0;for(i=0;i<size;i++)
{var tmp_set=[];k=0;jQuery.each(current_set,function(index,value1)
{m=0;jQuery.each(arr,function(index,value)
{var re=new RegExp("\\b"+value+"\\b","g");if(!value1.match(re))
{tmp_set[m]=jQuery.trim(value1)+" "+jQuery.trim(value);word=jQuery.trim(value1)+" "+jQuery.trim(value);arr11=jQuery.trim(word).split(" ");if(arr11.length==2){if(jQuery.inArray(word,temp_set2)==-1){temp_set2[n]=word;n++;}}
if(arr11.length==3){if(jQuery.inArray(word,temp_set3)==-1){temp_set3[o]=word;o++;}}
if(arr11.length==4){if(jQuery.inArray(word,temp_set4)==-1){temp_set4[r]=word;r++;}}
m++;}});p=0;for(var key in tmp_set)
{current_set[q]=tmp_set[p];q++;p++;}});}
var tag_array=[];var i=0;for(var key in current_set)
{tag_array[current_set[i]]=0;i++;}
j=0;k=0;for(var key in tag_array)
{if(wordInString(jQuery.trim(text),key))
{tag_array[key]=wordInString(jQuery.trim(text).toLowerCase(),key);}
j++;}
var sortable=[];var res_set1=[];var res_set2=[];var res_set3=[];var res_set4=[];for(var keyword in tag_array)
{if(jQuery.inArray(jQuery.trim(keyword).toLowerCase(),skip_arr)==-1)
{if(tag_array[keyword]!=0)
{val=jQuery.trim(keyword).split(" ");if(val.length==1&&tag_array[keyword]>=5)res_set1[jQuery.trim(keyword)]=tag_array[keyword];if(val.length==2&&tag_array[keyword]>=4)res_set2[jQuery.trim(keyword)]=tag_array[keyword];if(val.length==3&&tag_array[keyword]>=4)res_set3[jQuery.trim(keyword)]=tag_array[keyword];if(val.length==4&&tag_array[keyword]>=3)res_set4[jQuery.trim(keyword)]=tag_array[keyword];sortable.push([jQuery.trim(keyword),tag_array[keyword]])}}}
sortable.sort(
var res="";i=0;for(var key in sortable)
{keystr=jQuery.trim(sortable[key]).split(",");}
i++
temp="";val=0;tempval=0;req_key="";if(Object.keys(res_set4).length>=1)
{for(var key in res_set4)
{val=res_set4[key];if(val>=tempval)
{if(val!=tempval){temp='';req_key="";}
temp+="<tr><td>"+key+"</td><td>"+res_set4[key]+"</td></tr>";req_key=key;tempval=val;}}
res+=temp;}
else if(Object.keys(res_set3).length>=1)
{for(var key in res_set3)
{val=res_set3[key];if(val>=tempval)
{if(val!=tempval){temp='';req_key="";}
temp+="<tr><td>"+key+"</td><td>"+res_set3[key]+"</td></tr>";req_key=key;tempval=val;}}
res+=temp;}
else if(Object.keys(res_set2).length>=1)
{for(var key in res_set2)
{val=res_set2[key];if(val>=tempval)
{if(val!=tempval){temp='';req_key="";}
temp+="<tr><td>"+key+"</td><td>"+res_set2[key]+"</td></tr>";req_key=key;tempval=val;}}
res+=temp;}
else if(Object.keys(res_set1).length>=1)
{for(var key in res_set1)
{val=res_set1[key];if(val>=tempval)
{if(val!=tempval){temp='';req_key="";}
temp+="<tr><td>"+key+"</td><td>"+res_set1[key]+"</td></tr>";req_key=key;tempval=val;}}
res+=temp;}
var res_tags="";res_tags+=req_key;for(var key in sortable)
{keystr=jQuery.trim(sortable[key]).split(",");if(keystr[1]>=5)
{if(wordInString(req_key,keystr[0])==0)
{res_tags+=", "+keystr[0];}}}
keywords=res_tags;clearInterval(myVar1);},2000);});}
if(document.getElementsByTagName('body')[0].getAttribute('data-gapi'))
{dp_user_trackerGeo=JSON.stringify(document.getElementsByTagName('body')[0].getAttribute('data-gapi'));}
else
{var crossDomainUrl1="https://gapi.oneindia.com/gapi";jQuery.ajax({url:crossDomainUrl1,dataType:'jsonp',cache:true,jsonpCallback:'DesiPearlUserGeo',success:function(data){gdata=data;dp_user_trackerGeo=JSON.stringify(data);if(site=="www.drivespark.com"&&type=='db')
{bot_data.push('"city":'+gdata.city);bot_data.push('"continent":'+gdata.continent);bot_data.push('"country":'+gdata.country);bot_data.push('"ip":'+gdata.ip);bot_data.push('"region":'+gdata.region);console.log('Bot Tracker Data:'+JSON.stringify(bot_data));writeLog();}}});}
function writeLog()
{console.log('Bot Tracker in');var data={bot_data};var crossDomainUrl1="https://origin.drivespark.com/temp/tracker/bot_tracker.php";jQuery.ajax({type:"POST",url:crossDomainUrl1,data:{data:JSON.stringify(data)},dataType:"json",cache:false,success:function(data){console.log('Bot Tracker inner');}});}
if(/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|ipad|iris|kindle|Android|Silk|lge |maemo|midp|mmp|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows (ce|phone)|xda|xiino/i.test(navigator.userAgent)||/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(navigator.userAgent.substr(0,4))){isMobile=true;}
if(site=="www.drivespark.com"&&type=='db')
{bot_data.push('"url":'+url);bot_data.push('"domain":'+domain);var referrer_url=document.referrer;ref_arr=referrer_url.split('/');referrer=ref_arr[2];bot_data.push('"referer_url":'+referrer_url);bot_data.push('"referer":'+referrer);bot_data.push('"date":'+Date.now());bot_data.push('"width":'+screen.width);bot_data.push('"height":'+screen.height);if(isMobile==false)
bot_data.push('"device":'+'Desktop');if(isMobile==true)
bot_data.push('"device":'+'Mobile');for(var i in navigator)
{if(i=='sayswho'||i=='vendor'||i=='cookieEnabled'||i=='appCodeName'||i=='appName'||i=='platform'||i=='product'||i=='userAgent'||i=='language')
{bot_data.push('"'+i+'":'+navigator[i]);}
if(i=='connection')
{var connection=navigator.connection||navigator.mozConnection||navigator.webkitConnection;bot_data.push('"'+i+'":'+connection.effectiveType);}}}
myVar=setTimeout(function(){console.log('started');var time1=Date.now();var time2=getUserCookie('dp_user_lastUpdated');var diff=(time1-time2)/1000/60/60;console.log('diff---'+diff);var local_storage_size=0;var local_stored_data=localStorage.getItem("dp_user_tracker_stored_data");if(local_stored_data!==''&&local_stored_data!==null)
local_storage_size=((local_stored_data.length*16)/(8*1024)/1000);if((diff>=24&&time2!=null)||local_storage_size>=3)
{console.log('started update');if(local_stored_data!==''&&local_stored_data!==null)
{var obj=jQuery.parseJSON(local_stored_data);if(obj.gen_section!=='')gen_section=obj.gen_section+','+gen_section;if(obj.keywords!=='')keywords=obj.keywords+','+keywords;if(obj.referrer!=='')referrer=obj.referrer+','+referrer;if(obj.tags!=='')tags=obj.tags+','+data_tags;}
dp_user_trackerId=getUserCookie('dp_user_trackerId');if(checkUserCookie('dp_user_trackerId')){var cms_data='';if(isMobile==true&&(site=="www.oneindia.com"||site=="tamil.oneindia.com"||site=="kannada.oneindia.com"))
{cms_data=fetchUserFollowDetails();console.log('Tracker Category from CMS:'+cms_data);}
var crossDomainUrl="https://www.desipearl.com/tracker/desipearl-user-tracker_test.php?func=setcookie&affiliate_id="+affiliate_id+"&widget_id="+widget_id+"&dp_user_trackerId="+dp_user_trackerId+"&geo="+dp_user_trackerGeo+"&site="+site+"&type="+type+"&gen_section="+gen_section+"&tags="+data_tags+"&referrer="+referrer+"&cms_data="+cms_data+"&keywords="+keywords+"&width="+width+"&height="+height;jQuery.ajax({url:crossDomainUrl,dataType:'jsonp',cache:true,jsonpCallback:'DesiPearlSetCookie',success:function(data){if(jQuery.inArray(site,channel_array)>-1)
{var data1=$.parseJSON(JSON.stringify(data));var usr_data=[];if(data1.common)
usr_data.push('"common":'+JSON.stringify(data1.common));else
usr_data.push('"common":""');if(data1.section)
usr_data.push('"section":'+JSON.stringify(data1.section));else
usr_data.push('"section":""');if(data1.tags)
usr_data.push('"tags":'+JSON.stringify(data1.tags));else
usr_data.push('"tags":""');if(data1.campaign_vals)
usr_data.push('"campaign_vals":'+JSON.stringify(data1.campaign_vals));else
usr_data.push('"campaign_vals":""');var cms_data=[];cms_data.push('"all_tags":'+JSON.stringify(data1.all_tags));cms_data.push('"all_db_tags":'+JSON.stringify(data1.all_db_tags));setUserCookie('dp_user_tracker_data','{'+usr_data+'}',dp_tracker_cookie_lifespan,'/',cookie_domain,'');setUserCookie('dp_user_lastUpdated',Date.now(),dp_tracker_cookie_lifespan,'/',cookie_domain,'');window.indexedDB=window.indexedDB||window.mozIndexedDB||window.webkitIndexedDB||window.msIndexedDB;window.IDBTransaction=window.IDBTransaction||window.webkitIDBTransaction||window.msIDBTransaction;window.IDBKeyRange=window.IDBKeyRange||window.webkitIDBKeyRange||window.msIDBKeyRange;if(!window.indexedDB){window.alert("Your browser doesn't support a stable version of IndexedDB.");}
var db;var dbname='dp_user_tracker_data';var dbversion='1.0';var objectstore="dp_user_tracker_store";var request=window.indexedDB.open(dbname,dbversion);var createObjectStore=function(dataBase){if(!dataBase.objectStoreNames.contains(objectstore)){dataBase.createObjectStore(objectstore);}};console.log(request);request.onerror=request.onsuccess=function(event){db=request.result;console.log("success: "+db);if(db.setVersion){if(db.version!=dbversion){var setVersion=db.setVersion(dbversion);setVersion.onsuccess=}}
var transaction=db.transaction([objectstore],"readwrite");transaction.objectStore(objectstore).put('{'+cms_data+'}',"dp_user_tracker_value");};request.onupgradeneeded=function(event){var db=event.target.result;console.log(db);createObjectStore(event.target.result);}
var data_val='';localStorage.setItem("dp_user_tracker_stored_data",data_val);}}});}}
else
{var stored_data={};stored_data.gen_section=gen_section;stored_data.keywords=keywords;stored_data.referrer=referrer;stored_data.tags=data_tags;console.log('started store');var local_stored_data='';local_stored_data=localStorage.getItem("dp_user_tracker_stored_data");if(local_stored_data!==''&&local_stored_data!==null)
{var obj=jQuery.parseJSON(local_stored_data);if(obj.gen_section!=='')stored_data.gen_section=obj.gen_section+','+stored_data.gen_section;if(obj.keywords!=='')stored_data.keywords=obj.keywords+','+stored_data.keywords;if(obj.referrer!=='')stored_data.referrer=obj.referrer+','+stored_data.referrer;if(obj.tags!=='')stored_data.tags=obj.tags+','+stored_data.tags;}
localStorage.setItem("dp_user_tracker_stored_data",JSON.stringify(stored_data));if(!checkUserCookie('dp_user_lastUpdated'))setUserCookie('dp_user_lastUpdated',Date.now(),dp_tracker_cookie_lifespan,'/',cookie_domain,'');}
clearInterval(myVar);},8000);