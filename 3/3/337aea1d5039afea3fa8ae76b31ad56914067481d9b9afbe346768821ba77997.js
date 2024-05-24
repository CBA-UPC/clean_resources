mw.loader.impl(function(){return["ext.gadget.formWizard-core@1hcxm",function($,jQuery,require,module){var formsGadget={'that':this,'createDialog':function(){var that=this;var dialogDict={dialogClass:'formsGadget',autoOpen:false,width:'495px',modal:true,closeOnEscape:true,resizable:false,draggable:false,};if($('#formsDialog').length){this.dialog=$('#formsDialog').dialog(dialogDict);}else{this.dialog=$('<div id="formsDialog"></div>').dialog(dialogDict);}$('#formsDialog').append('<div class="loading"></div>');},'dialog':null,'openPanel':'openDialog':function(){if(this.dialog===null){this.createDialog();}else{this.dialog.dialog('open');}},'cleanupDialog':function(){if(this.dialog){this.dialog.dialog('destroy');}this.dialog=null;$('#formsDialog').text('');},'utilities':{'configPath':'Wikidata:FormWizard/Config','apiUrl':'https://www.wikidata.org/w/api.php?callback=?','getPageTitle':'grantType':function(){var grant=mw.config.get('wgTitle').split('/')[0].replace(/ /g,'_');return grant;},'userLanguage':function(){return mw.config
.get('wgUserLanguage');},'contentLanguage':'cleanupText':function(text){text=$.trim(text)+' ';var indexOf=text.indexOf('~~~~');if(indexOf==-1){return text;}else{return text.slice(0,indexOf)+text.slice(indexOf+4);}},'stripWhiteSpace':function(dict){for(key in dict){dict[key]=typeof(dict[key])=='object'?this.stripWhiteSpace(dict[key]):$.trim(dict[key]);}return dict;},},'formElement':{'hiddenInfoboxFields':[],'found':false,'timestamp':0,'defaultTextBoxConfig':{'type':'smallTextBox','placeholder':'Enter the text','title':'Textbox','characterLength':100,'mandatory':false,'error-messageLength':'Max length reached','error-notFilled':'Mandatory field','value':'','parent':'','id':null,'comment':''},'elementContainer':'addDescription':function(dict,div){for(key in dict){if(key.indexOf('text')!=-1){this.addText(div,dict[key],'text');delete dict[key]
;}}return div;},'checkTitle':function(string,exists,titleStem,type){var that=this;var apiUrl=formsGadget.utilities.apiUrl;var title=titleStem+string;var searchDict={'action':'query','format':'json','titles':title,'prop':'imageinfo'};var timestamp=Date.now();console.log('String before ajax',string);return $.getJSON(apiUrl,searchDict,function(data){var query=data['query'];var pages=data['query']['pages'];var pageId=Object.keys(pages);var pageExists=pageId!=-1?true:false;var imageExists=pages[pageId]['imagerepository']?true:false;var value=0;if(type=='image'){value=imageExists;}else{value=pageExists;}if(that.timestamp<timestamp){that.timestamp=timestamp;that.found=!(value^exists);console.log('String ',string,'found ',that.found);}});},'inputList':function(type,list,title,dict,role){var div=this.elementContainer();div=this.addText(div,title,'title');this.addDescription(dict,div);for(elem in list){var label=document.createElement('div');var input=document.createElement('input');var key=list
[elem]['key'];var value=list[elem]['value'];input.type=type;if(type=='number'){input.min=dict['min'];input.max=dict['max'];}input.value=value;input.setAttribute('data-add-to',dict['add-to']);if(role){input.setAttribute('data-role',true);}input.className='inputListItem';input.setAttribute('data-add-to-attribute',key);var descriptionText=key.replace(/_/g,' ');descriptionText=descriptionText.slice(0,1).toUpperCase()+descriptionText.slice(1);var description=document.createElement('span');description.className='inputListItemDescription';description.textContent=descriptionText;label.appendChild(input);label.appendChild(description);div.appendChild(label);}return div;},'createTextBoxConfig':function(defaultConfig,actualConfig){var config={};for(key in defaultConfig){actualConfig[key]=key in actualConfig?actualConfig[key]:defaultConfig[key];if(key=='mandatory'&&(typeof(actualConfig[key])=='string')){if(actualConfig[key]=='true'){actualConfig[key]=true;}else{actualConfig[key]=false;}}}return actualConfig
;},'textBox':function(dict,type,callback,element){var config=this.createTextBoxConfig(this.defaultTextBoxConfig,dict);var className=type=='small'?'smallTextBox':'largeTextBox';var div=this.elementContainer();div=this.addText(div,config['title'],'title');this.addDescription(dict,div);if(type=='large'){var input=document.createElement('textarea');}else{var input=document.createElement('input');}if(dict['visibility']=='hidden'){div.style['display']='none';input.value=dict['value'];}if('page-title'in dict){input.setAttribute('page-title',true);}if(dict['id']){input.id=dict['id'];}input.setAttribute('type','textbox');input.setAttribute('class',className);input.setAttribute('placeholder',config['placeholder']);input.setAttribute('data-character-length',config['characterLength']);input.setAttribute('data-mandatory',config['mandatory']);input.setAttribute('data-comment',config['comment']);input.setAttribute('data-add-to',config['add-to']);var conditionalAttr=config['add-to']=='infobox'?config[
'infobox-param']:config['section-header'];input.setAttribute('data-add-to-attribute',conditionalAttr);var that=this;$(input).on('change keyup paste',function(){var inputTextBox=this;var enteredString=$(this).val();if(!enteredString&&!dict['mandatory']){$('#formsDialog [elemType="button"]').trigger('enableButtons');$(inputTextBox).parent().removeClass('entrySatisfying entryNotSatisfying');that.timestamp=Date.now();that.found=true;}else{if('validate'in dict&&enteredString){var exists=dict['validate']=='exists'?1:0;var titleStem='image'in dict?'':that.formDict.config['page-title-stem'];$.when(that.checkTitle(enteredString,exists,titleStem,dict['type'])).then(function(){$(inputTextBox).removeClass('entrySatisfying entryNotSatisfying');$(inputTextBox).addClass(that.found?'entrySatisfying':'entryNotSatisfying');$(inputTextBox).parent().removeClass('entrySatisfying entryNotSatisfying');$(inputTextBox).parent().addClass(that.found?'entrySatisfying':'entryNotSatisfying');if(that.found){$(
'#formsDialog [elemType="button"]').trigger('enableButtons');if(typeof(callback)==='function'&&that.found){var apiUrl=formsGadget.utilities.apiUrl;$.getJSON(apiUrl,{'action':'parse','format':'json','text':'[['+enteredString+']]'},function(data){console.log(data['parse']['text']['*']);var src=$('<div>').html(data['parse']['text']['*']).find('img').attr('src');if(src){callback(element,src);}});}}else{$('#formsDialog [elemType="button"]').trigger('disableButtons');}});}}});inputElementWrapper=document.createElement('span');$(inputElementWrapper).addClass('inputElementWrapper');if('validate'in dict){$(inputElementWrapper).addClass('validationContainer');}if(dict['mandatory']){$(inputElementWrapper).addClass('mandatoryContainer');}inputElementWrapper.appendChild(input);div.appendChild(inputElementWrapper);return div;},'smallTextBox':function(dict,callback,element){return this.textBox(dict,'small',callback,element);},'largeTextBox':'checkboxList':function(dict){var list=dict['choiceList'];var hidden=dict['hidden'];if('hidden'in dict){this.hiddenInfoboxFields=this.hiddenInfoboxFields.concat(dict['hidden']);}return this.inputList('checkbox',list,dict['title'],dict);},'addText':function(container,text,type){var textHolder=$('<p>');textHolder.text(text);if(type=='title'){textHolder.addClass('title');}else if(type=='text'){textHolder.addClass('text');}else{textHolder.addClass(type);}container.appendChild(textHolder[0]);return container;},'text':function(dict){var textHolder=$('<p>');return textHolder.text(dict['string'])[0];},'stepperList':function(dict){var list=dict['choiceList'];if('hidden'in dict){this.hiddenInfoboxFields=this.hiddenInfoboxFields.concat(dict['hidden']);}dict['min']=0;if(!('max'in dict)){dict['max']=9;}return this.inputList('number',list,dict['title'],dict,true);},'dropdownList':function(dict){var div=this.elementContainer();div=this.addText(div,dict['title'],'title');
this.addDescription(dict,div);var values=dict['values'];var select=document.createElement('select');select.setAttribute('type','textbox');select.setAttribute('class','dropdown');select.setAttribute('data-placeholder',dict['placeholder']);select.setAttribute('data-add-to',dict['add-to']);select.setAttribute('data-add-to-attribute',dict['infobox-param']);var option;for(elem in values){option=$('<option>').attr('value',values[elem]).text(values[elem]);select.appendChild(option[0]);}div.appendChild(select);return div;},'link':function(dict){var link=document.createElement('a');link.href='href'in dict?dict['href']:'https://commons.wikimedia.org/wiki/Main_Page';link.target='_blank';var innerText='link'in dict?dict['link']:'Search Wikimedia Commons for an image';$(link).text(innerText);return link;},'image':function(dict){var url=dict['url'];var text=dict['title'];dict['add-to']='infobox';dict['infobox-param']='image';dict['validate']='exists';dict['placeholder']='placeholder'in dict?dict[
'placeholder']:'File:Test.png';var div=this.elementContainer();this.addText(div,dict['title'],'title');this.addDescription(dict,div);var img=document.createElement('img');img.src=url;dict['title']='imageTitleBox'in dict?dict['imageTitleBox']:'Enter the file name';dict['image']=true;var textbox=this.smallTextBox(dict,img);var description=document.createTextNode(text);div.appendChild(img);div.appendChild(textbox);var commonsLink=this.link(dict);div.appendChild(commonsLink);return div;},'button':function(type,text){var a=document.createElement('input');a.type='submit';a.setAttribute('elemType','button');if(type=='cancel'||type=='back'){a.className='mw-ui-button cancel mw-ui-quiet';}else{a.className='mw-ui-button mw-ui-constructive';}a.value=text;$(a).on('disableButtons',function(){$(this).attr('disabled',true);});$(a).on('enableButtons',;return a;},'cancelButton':function(dict){var button=this.button('cancel',
dict['title']);button.onclick=return button;},'doneButton':function(dict){var that=this;var button=this.button('done',dict['title']);button.onclick=return button;},'nextButton':function(dict){var button=this.button('next',dict['title']);var that=this;button.onclick=function(){$('#formsDialog [step]').hide();$('#formsDialog'+' #'+dict['step']).next().show();};return button;},'backButton':function(dict){var button=this.button('back',dict['title']);var that=this;button.onclick=function(){$('#formsDialog [step]').hide();$('#formsDialog'+' #'+dict['step']).prev().show();};return button;},'validateForm':function(){var counter=0;var firstElem;$('#formsDialog [data-mandatory="true"]').each(function(){var elem=$(this);if(!elem.val()){if(counter==0){firstElem=elem;}counter++;elem.addClass('mandatoryInput');}});if(firstElem){$('#formsDialog [step]').hide();while(true){if(firstElem.attr('step')){firstElem.show();break
;}firstElem=firstElem.parent();}}else{if(formsGadget.type=='create'){this.createWikiPage();}else{this.modifyWikiPage();}}},'infoboxString':'','remainingSectionString':'','extractInfobox':function(markup,infoboxTemplate){var startIndex=markup.indexOf('{{'+infoboxTemplate);var counter=0;var endIndex=0;for(i=startIndex;i<markup.length;i++){if(markup[i]=='}'&&markup[i+1]=='}'){counter++;}if(markup[i]=='{'&&markup[i+1]=='{'){counter--;}if(counter==0){var endIndex=i+2;break;}}if(counter!=0){return'';}var infobox={'infobox':markup.slice(startIndex,endIndex),'before':markup.slice(0,startIndex),'after':markup.slice(endIndex),};return infobox;},'infoboxObjectify':function(infoboxString){var paramRe=/( )*\|( )*[A-Za-z0-9_]+( )*=/gi;var units=infoboxString.split('\n');var infobox=[];var infoboxParams={};var parts,line,param,value;for(unit in units){line=units[unit];if(line.search(paramRe)!=-1){parts=line.split('=');param=$.trim(parts[0].replace('|',''));value=$.trim(parts[1]);infobox.push({'param'
:param,'value':value});}else{infobox.push($.trim(line));}}return infobox;},'modifyInfoboxParam':function(infobox,param,newValue){var flag=true;for(elem in infobox){if(typeof(infobox[elem])=='object'&&infobox[elem]['param']==param){infobox[elem]['value']=newValue;flag=false;}}if(flag){infobox.splice(-1,0,{'param':param,'value':newValue});}return infobox;},'stringifyInfobox':function(infobox){var infoboxString='';for(elem in infobox){if(typeof(infobox[elem])=='object'){if(infobox[elem]['value']){infoboxString=infoboxString+'|'+infobox[elem]['param']+'='+infobox[elem]['value']+'\n';}else{infoboxString=infoboxString+'|'+infobox[elem]['param']+'='+'\n';}}else{infoboxString=infoboxString+infobox[elem]+'\n';}}return infoboxString;},'createEditSummary':function(title,subcomment){var summary='';var formsConfig=formsGadget.formDict['config'];if(formsConfig['edit-comment-prefix']){summary=formsConfig['edit-comment-prefix']+' ';}else{summary=formsConfig['edit-comment-default']+' ';}if(subcomment){
summary=summary+title+' ('+subcomment+') ';}else{summary=summary+title+' ';}if(formsConfig['edit-comment-suffix']){summary=summary+formsConfig['edit-comment-suffix'];}return summary;},'modifyWikiPage':function(){var that=this;var infobox='';var infoboxString='';var sections='';var api=new mw.Api();var roots=this.wikiSectionTree.roots;for(elem in roots){console.log('---------');this.wikiSectionTree.traverse([roots[elem]],1,function(id){var elem=$('#formsDialog #'+id);value=elem.val()?elem.val():'';var heading=elem.attr('data-add-to-attribute');return{'heading':heading,'value':value};});}$('#formsDialog [elemType="button"]').trigger('disableButtons');var title=mw.config.get('wgPageName').replace('/Toolkit','');var gettingInfobox=api.get({'format':'json','action':'query','prop':'revisions','rvprop':'content','rvsection':0,'titles':title,}).then(function(result){var pages=result.query.pages;var key=Object.keys(result.query.pages)[0];var content=pages[key]['revisions'][0]['*'];var
infoboxTemplate=formsGadget.formDict.config['infobox']?formsGadget.formDict.config['infobox']:'Probox/Idealab';var elements=that.extractInfobox(content,infoboxTemplate);var infobox=that.infoboxObjectify(elements['infobox']);var before=elements['before'];var after=elements['after'];$('#formsDialog [data-add-to]').each(function(index,elem){var elem=$(elem);if(elem.attr('data-add-to')=='infobox'){if(elem.attr('type')=='checkbox'){if(elem.is(':checked')){infobox=that.modifyInfoboxParam(infobox,elem.attr('data-add-to-attribute'),elem.val());}else{infobox=that.modifyInfoboxParam(infobox,elem.attr('data-add-to-attribute'),null);}}else if(elem.attr('data-role')){for(var i=0;i<elem.val();i++){infobox=that.modifyInfoboxParam(infobox,elem.attr('data-add-to-attribute')+(i+1),null);}}else{infobox=that.modifyInfoboxParam(infobox,elem.attr('data-add-to-attribute'),elem.val());}}});var hiddenFields=that.hiddenInfoboxFields;for(entry in hiddenFields){infobox=infobox.push({'param':hiddenFields[entry][
'key'],'value':hiddenFields[entry]['value']});}var modifiedSection=before+$.trim(that.stringifyInfobox(infobox))+after;var formsConfig=formsGadget.formDict['config'];api.post({'action':'edit','title':title,'text':modifiedSection,'summary':that.createEditSummary(title,'editing infobox parameters'),'section':0,'watchlist':'watch','token':mw.user.tokens.get('csrfToken')}).then(function(){var newSections='\n'+that.wikiSectionTree.sections;api.post({'action':'edit','title':title,'summary':that.createEditSummary(title,'editing section'),'appendtext':newSections,'watchlist':'watch','token':mw.user.tokens.get('csrfToken')}).then(function(){console.log('Successfully Added new sections & modified the infobox');var postEditMessage=formsGadget.formDict['config']['post-edit'];formsGadget.dialog.dialog('close');mw.cookie.set('formsGadgetNotify',postEditMessage);window.location.href=location.origin+'/wiki/'+title;});});});},'createWikiPage':function(){var that=this;var infobox='';var page='';var api=
new mw.Api();var pageTitle=$('#formsDialog [page-title]').val();var roots=this.wikiSectionTree.roots;for(elem in roots){console.log('---------');this.wikiSectionTree.traverse([roots[elem]],1,function(id){var elem=$('#formsDialog #'+id);value=elem.val()?elem.val():'';var heading=elem.attr('data-add-to-attribute');var comment=elem.attr('data-comment');return{'heading':heading,'value':value,'comment':comment};});}$('#formsDialog [data-add-to]').each(function(index,elem){var elem=$(elem);if(elem.attr('data-add-to')=='section'){}else{if(elem.attr('data-role')){for(var i=0;i<elem.val();i++){infobox=infobox+'|'+elem.attr('data-add-to-attribute')+(i+1)+'=\n';}}else if(elem.attr('type')=='checkbox'){if(elem.is(':checked')){infobox=infobox+'|'+elem.attr('data-add-to-attribute')+'='+elem.val()+'\n';}else{infobox=infobox+'|'+elem.attr('data-add-to-attribute')+'=\n';}}else if(elem.attr('data-add-to-attribute')=='image'){var image=elem.val()?elem.val():elem.attr('placeholder');infobox=infobox+'|'+
elem.attr('data-add-to-attribute')+'='+image+'\n';}else{infobox=infobox+'|'+elem.attr('data-add-to-attribute')+'='+elem.val()+'\n';}}});var hiddenFields=this.hiddenInfoboxFields;for(entry in hiddenFields){infobox=infobox+'|'+hiddenFields[entry]['key']+'='+hiddenFields[entry]['value']+'\n';}infobox=infobox+'|'+'timestamp = ~~~~~'+'\n';infobox=infobox+'|'+'creator = '+mw.user.getName()+'\n';var probox=this.formDict.config['infobox']?this.formDict.config['infobox']:'Probox/Idealab';infobox='{{'+probox+'\n'+infobox+'}} \n';page=infobox+this.wikiSectionTree.sections;var title=formsGadget.formDict['config']['page-title-stem']+pageTitle;$('#formsDialog [elemType="button"]').trigger('disableButtons');api.post({'action':'edit','title':title,'summary':that.createEditSummary(title),'text':page,'watchlist':'watch',token:mw.user.tokens.get('csrfToken')}).then(function(){var formsConfig=formsGadget.formDict['config'];var toolkit=formsConfig['toolkit-name'];var toolkitContent='{{'+formsConfig[
'toolkit-template']+'}}';var createToolkit=true;if(toolkit&&toolkitContent){var toolkitTitle=title+'/'+toolkit;var summary='Adding the toolkit for '+title;createToolkit=api.post({'action':'edit','title':toolkitTitle,'summary':summary,'text':toolkitContent,'watchlist':'watch',token:mw.user.tokens.get('csrfToken')});}console.log('Successfully created new page');$.when(createToolkit).then(function(){formsGadget.dialog.dialog('close');var postEditMessage=formsGadget.formDict['config']['post-edit'];mw.cookie.set('formsGadgetNotify',postEditMessage);window.location.href=location.origin+'/wiki/'+title;},function(){$('#formsDialog [elemType="button"]').trigger('enableButtons');});},;console.log(title,page);}},'createForm':function(formDict){formDict.config['page-title-stem']=formDict.config['namespace']+formDict.config['portal-page'];this.formDict=formDict;this.formElement.formDict=formDict;this.formElement.
wikiSectionTree=this.wikiSectionTree;var dialogInternal=document.createElement('div');if(!mw.user.getName()){var errorMessage=formDict['config']['error-not-logged-in'];var errorDiv=document.createElement('div');errorDiv.className='mw-ui-vform';this.formElement.addText(errorDiv,errorMessage,'error');dialogInternal.appendChild(errorDiv);}var counter=0;for(step in formDict){if(step!='config'){counter++;var stepDict=formDict[step];var panel=document.createElement('div');panel.id=step;if(counter!=1){panel.style['display']='none';}panel.setAttribute('step',step);for(elem in stepDict){elemDict=stepDict[elem];elemDict['elem']=elem;elemDict['step']=step;elemDict['id']=elem;panel.appendChild(this.formElement[elemDict.type](elemDict));if(elemDict['add-to']=='section'){var parent='parent'in elemDict?elemDict['parent']:null;var node=elem;if(parent){this.wikiSectionTree.addLink(parent,node);}else{this.wikiSectionTree.addLink(node);}}}dialogInternal.appendChild(panel);}}$('#formsDialog').append(
dialogInternal);$('.formsGadget .dropdown').chosen({disable_search:true,width:'50%',});return true;},'Tree':function(){var rootList={};var nodeList={};this.sections='';this.roots=rootList;var node=var getNode=function(id){if(id in nodeList){return nodeList[id];}else{var Node=new node(null,null,id);nodeList[id]=Node;rootList[id]=Node;return Node;}};this.addLink=function(startId,endId){if(endId){var startNode=getNode(startId);var endNode=getNode(endId);endNode.parent=startNode;if(startNode.child){startNode.child.push(endNode);}else{startNode.child=[endNode];}delete rootList[endNode.id];}else{getNode(startId);}};var sectionLevel=function(indent){var string='';for(var i=0;i<indent;i++){string=string+'=';}return string;};this.traverse=function(rootList,level,callback){if(!rootList){return;}level++;var wikiSectionHeaderMarkup=sectionLevel(level);for(elem in rootList){var root=rootList[elem];var sectionValues=callback(
root.id);var section=wikiSectionHeaderMarkup+sectionValues['heading']+wikiSectionHeaderMarkup+'\n';var section=section+(sectionValues['comment']?sectionValues['comment']+'\n':'')+sectionValues['value']+'\n';this.sections=this.sections+section;root=root.child;this.traverse(root,level,callback);}};}};$(function(){(function(){var api=new mw.Api();var utility=formsGadget.utilities;var postEditMessage=mw.cookie.get('formsGadgetNotify');if(postEditMessage){mw.cookie.set('formsGadgetNotify',null);mw.notify(postEditMessage,{autoHide:false});}$('.wp-formsGadget').click(function(e){e.preventDefault();formsGadgetType=$(this).attr('data-type')||'Idea';formsGadgetMode=$(this).attr('data-mode')||'create';formsGadget.cleanupDialog();formsGadget.openDialog();formsGadget.openPanel();$('#formsDialog .loading').show();var configFullPath=utility.configPath+'/'+formsGadgetType+'/'+utility.userLanguage();api.get({'action':'query','titles':configFullPath,'format':'json'}).then(function(data){for(id in data.
query.pages){if(id==-1){configFullPath=utility.configPath+'/'+formsGadgetType+'/en';}}var configUrl='https://www.wikidata.org/w/index.php?title='+encodeURIComponent(configFullPath)+'&action=raw';$.when(jQuery.get(configUrl)).then(function(dataStr){var data=RJSON.parse(dataStr);var config=utility.stripWhiteSpace(data[formsGadgetMode]);formsGadget['formDict']=config;$('.formsGadget .ui-dialog-title').text(config.config['dialog-title']);formsGadget['wikiSectionTree']=new formsGadget.Tree();formsGadget.openDialog();formsGadget.createForm(config);formsGadget.type=formsGadgetMode;formsGadget.openDialog();$('#formsDialog .loading').hide();});});});})();});(function(){"use strict";function some(array,f){var acc=false;for(var i=0;i<array.length;i++){acc=f(array[i],i,array);if(acc){return acc;}}return acc;}function makeLexer(tokenSpecs){return function(contents){var tokens=[];var line=1;function findToken(){return some(tokenSpecs,function(tokenSpec){var m=tokenSpec.re.exec(contents);if(m){var raw
=m[0];contents=contents.slice(raw.length);return{raw:raw,matched:tokenSpec.f(m,line),};}});}while(contents!==""){var matched=findToken();if(!matched){var err=new SyntaxError("Unexpected character: "+contents[0]+"; input: "+contents.substr(0,100));err.line=line;throw err;}matched.matched.line=line;line+=matched.raw.replace(/[^\n]/g,"").length;tokens.push(matched.matched);}return tokens;};}function fStringSingle(m){var content=m[1].replace(/([^'\\]|\\['bnrtf\\]|\\u[0-9a-fA-F]{4})/g,function(mm){if(mm==="\""){return"\\\"";}else if(mm==="\\'"){return"'";}else{return mm;}});return{type:"string",match:"\""+content+"\"",value:JSON.parse("\""+content+"\""),};}function fStringDouble(m){return{type:"string",match:m[0],value:JSON.parse(m[0]),};}function fIdentifier(m){return{type:"string",value:m[0],match:"\""+m[0].replace(/./g,+"\"",};}function fComment(m){return{type:" ",match:m[0].replace(/./g,};}function fNumber(m
){return{type:"number",match:m[0],value:parseFloat(m[0]),};}function fKeyword(m){var value;switch(m[1]){case"null":value=null;break;case"true":value=true;break;case"false":value=false;break;}return{type:"atom",match:m[0],value:value,};}function makeTokenSpecs(relaxed){function f(type){return }var ret=[{re:/^\s+/,f:f(" ")},{re:/^\{/,f:f("{")},{re:/^\}/,f:f("}")},{re:/^\[/,f:f("[")},{re:/^\]/,f:f("]")},{re:/^,/,f:f(",")},{re:/^:/,f:f(":")},{re:/^(true|false|null)/,f:fKeyword},{re:/^\-?\d+(\.\d+)?([eE][+-]?\d+)?/,f:fNumber},{re:/^"([^"\\]|\\["bnrtf\\\/]|\\u[0-9a-fA-F]{4})*"/,f:fStringDouble},];if(relaxed){ret=ret.concat([{re:/^'(([^'\\]|\\['bnrtf\\\/]|\\u[0-9a-fA-F]{4})*)'/,f:fStringSingle},{re:/^\/\/.*?(?:\r\n|\r|\n)/,f:fComment},{re:/^\/\*[\s\S]*?\*\//,f:fComment},{re:/^[$a-zA-Z0-9_\-+\.\*\?!\|&%\^\/#\\]+/,f:fIdentifier},]);}return ret;}var lexer=makeLexer(makeTokenSpecs(true));var strictLexer=makeLexer(makeTokenSpecs(false));function
previousNWSToken(tokens,index){for(;index>=0;index--){if(tokens[index].type!==" "){return index;}}}function stripTrailingComma(tokens){var res=[];tokens.forEach(function(token,index){if(token.type==="]"||token.type==="}"){var commaI=previousNWSToken(res,index-1);if(commaI&&res[commaI].type===","){var preCommaI=previousNWSToken(res,commaI-1);if(preCommaI&&res[preCommaI].type!=="["&&res[preCommaI].type!=="{"){res[commaI]={type:" ",match:" ",line:tokens[commaI].line,};}}}res.push(token);});return res;}function transform(text){var tokens=lexer(text);tokens=stripTrailingComma(tokens);return tokens.reduce(function(str,token){return str+token.match;},"");}function popToken(tokens,state){var token=tokens[state.pos];state.pos+=1;if(!token){var line=tokens.length!==0?tokens[tokens.length-1].line:1;return{type:"eof",line:line};}return token;}function strToken(token){switch(token.type){case"atom":case"string":case"number":return token.type+" "+token.match;case"eof":return"end-of-file";default:
return"'"+token.type+"'";}}function skipColon(tokens,state){var colon=popToken(tokens,state);if(colon.type!==":"){var message="Unexpected token: "+strToken(colon)+", expected ':'";if(state.tolerant){state.warnings.push({message:message,line:colon.line,});state.pos-=1;}else{var err=new SyntaxError(message);err.line=colon.line;throw err;}}}function skipPunctuation(tokens,state,valid){var punctuation=[",",":","]","}"];var token=popToken(tokens,state);while(true){if(valid&&valid.indexOf(token.type)!==-1){return token;}else if(token.type==="eof"){return token;}else if(punctuation.indexOf(token.type)!==-1){var message="Unexpected token: "+strToken(token)+", expected '[', '{', number, string or atom";if(state.tolerant){state.warnings.push({message:message,line:token.line,});token=popToken(tokens,state);}else{var err=new SyntaxError(message);err.line=token.line;throw err;}}else{return token;}}}function raiseError(state,token,message){if(state.tolerant){state.warnings.push({message:message,line
:token.line,});}else{var err=new SyntaxError(message);err.line=token.line;throw err;}}function raiseUnexpected(state,token,expected){raiseError(state,token,"Unexpected token: "+strToken(token)+", expected "+expected);}function checkDuplicates(state,obj,token){var key=token.value;if(state.duplicate&&Object.prototype.hasOwnProperty.call(obj,key)){raiseError(state,token,"Duplicate key: "+key);}}function appendPair(state,obj,key,value){value=state.reviver?state.reviver(key,value):value;if(value!==undefined){obj[key]=value;}}function parsePair(tokens,state,obj){var token=skipPunctuation(tokens,state,[":"]);var key;var value;if(token.type!=="string"){raiseUnexpected(state,token,"string");switch(token.type){case":":token={type:"string",value:"null",line:token.line,};state.pos-=1;break;case"number":case"atom":token={type:"string",value:""+token.value,line:token.line,};break;case"[":case"{":state.pos-=1;value=parseAny(tokens,state);appendPair(state,obj,"null",value);return;}}checkDuplicates(
state,obj,token);key=token.value;skipColon(tokens,state);value=parseAny(tokens,state);appendPair(state,obj,key,value);}function parseElement(tokens,state,arr){var key=arr.length;var value=parseAny(tokens,state);arr[key]=state.reviver?state.reviver(""+key,value):value;}function parseObject(tokens,state){return parseMany(tokens,state,{},{skip:[":","}"],elementParser:parsePair,elementName:"string",endSymbol:"}",});}function parseArray(tokens,state){return parseMany(tokens,state,[],{skip:["]"],elementParser:parseElement,elementName:"json object",endSymbol:"]",});}function parseMany(tokens,state,obj,opts){var token=skipPunctuation(tokens,state,opts.skip);if(token.type==="eof"){raiseUnexpected(state,token,"'"+opts.endSymbol+"' or "+opts.elementName);token={type:opts.endSymbol,line:token.line,};}switch(token.type){case opts.endSymbol:return obj;default:state.pos-=1;opts.elementParser(tokens,state,obj);break;}while(true){token=popToken(tokens,state);if(token.type!==opts.endSymbol&&token.type
!==","){raiseUnexpected(state,token,"',' or '"+opts.endSymbol+"'");token={type:token.type==="eof"?opts.endSymbol:",",line:token.line,};state.pos-=1;}switch(token.type){case opts.endSymbol:return obj;case",":opts.elementParser(tokens,state,obj);break;}}}function endChecks(tokens,state,ret){if(state.pos<tokens.length){raiseError(state,tokens[state.pos],"Unexpected token: "+strToken(tokens[state.pos])+", expected end-of-input");}if(state.tolerant&&state.warnings.length!==0){var message=state.warnings.length===1?state.warnings[0].message:state.warnings.length+" parse warnings";var err=new SyntaxError(message);err.line=state.warnings[0].line;err.warnings=state.warnings;err.obj=ret;throw err;}}function parseAny(tokens,state,end){var token=skipPunctuation(tokens,state);var ret;if(token.type==="eof"){raiseUnexpected(state,token,"json object");}switch(token.type){case"{":ret=parseObject(tokens,state);break;case"[":ret=parseArray(tokens,state);break;case"string":case"number":case"atom":ret=token
.value;break;}if(end){ret=state.reviver?state.reviver("",ret):ret;endChecks(tokens,state,ret);}return ret;}function parse(text,opts){if(typeof opts==="function"||opts===undefined){return JSON.parse(transform(text),opts);}else if(new Object(opts)!==opts){throw new TypeError("opts/reviver should be undefined, a function or an object");}opts.relaxed=opts.relaxed!==undefined?opts.relaxed:true;opts.warnings=opts.warnings||opts.tolerant||false;opts.tolerant=opts.tolerant||false;opts.duplicate=opts.duplicate||false;if(!opts.warnings&&!opts.relaxed){return JSON.parse(text,opts.reviver);}var tokens=opts.relaxed?lexer(text):strictLexer(text);if(opts.relaxed){tokens=stripTrailingComma(tokens);}if(opts.warnings){tokens=tokens.filter(;var state={pos:0,reviver:opts.reviver,tolerant:opts.tolerant,duplicate:opts.duplicate,warnings:[]};return parseAny(tokens,state,true);}else{var newtext=tokens.reduce("");return JSON
.parse(newtext,opts.reviver);}}function stringifyPair(obj,key){return JSON.stringify(key)+":"+stringify(obj[key]);}function stringify(obj){switch(typeof obj){case"string":case"number":case"boolean":return JSON.stringify(obj);}if(Array.isArray(obj)){return"["+obj.map(stringify).join(",")+"]";}if(new Object(obj)===obj){var keys=Object.keys(obj);keys.sort();return"{"+keys.map(stringifyPair.bind(null,obj))+"}";}return"null";}var RJSON={transform:transform,parse:parse,stringify:stringify,};if(typeof window!=="undefined"){window.RJSON=RJSON;}else if(typeof module!=="undefined"){module.exports=RJSON;}}());
},{"css":[".formsGadget .ui-state-hover{background:transparent;border-color:#a1a1a1}.formsGadget.ui-dialog .ui-icon-closethick{background:url(data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4NCjwhLS0gR2VuZXJhdG9yOiBBZG9iZSBJbGx1c3RyYXRvciAxNi4wLjQsIFNWRyBFeHBvcnQgUGx1Zy1JbiAuIFNWRyBWZXJzaW9uOiA2LjAwIEJ1aWxkIDApICAtLT4NCjwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCI+DQo8c3ZnIHZlcnNpb249IjEuMSIgaWQ9IkxheWVyXzEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeT0iMHB4Ig0KCSB3aWR0aD0iMTEuMzEzcHgiIGhlaWdodD0iMTEuMzEzcHgiIHZpZXdCb3g9IjAgMCAxMS4zMTMgMTEuMzEzIiBlbmFibGUtYmFja2dyb3VuZD0ibmV3IDAgMCAxMS4zMTMgMTEuMzEzIiB4bWw6c3BhY2U9InByZXNlcnZlIj4NCjxwb2x5Z29uIGZpbGw9IiNCMEIxQjEiIHBvaW50cz0iMTEuMzEzLDIuMTIxIDkuMTkyLDAgNS42NTcsMy41MzUgMi4xMjIsMCAwLDIuMTIxIDMuNTM2LDUuNjU2IDAuMDAxLDkuMTkxIDIuMTIyLDExLjMxMyANCgk1LjY1Nyw3Ljc3NyA5LjE5MiwxMS4zMTIgMTEuMzEzLDkuMTkxIDcuNzc4LDUuNjU2ICIvPg0KPC9zdmc+DQo=) no-repeat 50% 50% !important}.formsGadget .ui-widget-content{background:#EEE}.formsGadget.ui-dialog .ui-widget-header{border:none;background:#EEE !important;padding-left:11px !important;margin-top:25px}.formsGadget.ui-widget-content{background:#EEE;padding:10px 18px;color:#444;border-left:1px solid #ddd;border-top:1px solid #ddd;border-right:1px solid #ddd;border-bottom:3px solid #D0D0D0;border-radius:1px}.formsGadget .gadgetControls{text-align:right;margin:10px 0px} .formsGadget .messageDescription{margin:10px 0px}.formsGadget textarea,.formsGadget input[type=text],.formsGadget input[type=number]{outline:0px;padding:14px 7px;resize:none;background-color:white;border:1px solid #DDD;border-radius:1px;margin-bottom:1em}.formsGadget textarea:focus,.formsGadget input[type=text]:focus{box-shadow:inset .45em 0 0 #5088f7}div.grantsHide{display:none}.formsGadget mw-ui-vform{width:100%}.formsGadget textarea::-webkit-input-placeholder{font-style:italic}.formsGadget textarea::-moz-placeholder{ font-style:italic}.formsGadget textarea:-ms-input-placeholder{font-style:italic}.formsGadget input::-webkit-input-placeholder{font-style:italic}.formsGadget input::-moz-placeholder{ font-style:italic}.formsGadget input:-ms-input-placeholder{font-style:italic}.formsGadget input.entryNotSatisfying:focus{box-shadow:inset .45em 0 0 #D11D13}.formsGadget input.entrySatisfying:focus{box-shadow:inset .45em 0 0 #5088f7}.formsGadget .title{font-weight:bold}.formsGadget .text{line-height:15px;margin:6px 0px}.formsGadget .elementContainer{padding:7px 0px}.formsGadget .inputListItem{width:50px;margin-right:30px}.formsGadget input[type=text],.formsGadget input[type=number]{padding:7px}.formsGadget input[type=number]{text-align:center}.formsGadget .inputListItemDescription{ display:inline-block}.formsGadget .ui-widget-content a{color:#0b0080}.formsGadget .ui-widget-content a span{color:#444444}.formsGadget .validationContainer.entrySatisfying:after{content:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAsAAAAICAYAAAAvOAWIAAAAAXNSR0IArs4c6QAAAAZiS0dEAP8A/wD/oL2nkwAAAAlwSFlzAAAuIwAALiMBeKU/dgAAAAd0SU1FB94HFgU5GtaftYcAAACqSURBVBjTfZA7SkMBFAXPi5UfcAHBwl6wt7HOfnQZgr0bSGdt6x7ERlDEyiIgCPLAM2NhIhE/U94Lc5k75A/UDMMQYDvJRZK3/Ie62XbeVuAm6q56BAT4srbdaXsFCNwC0wAPwKt6vGbcAuZ+8qQerBYny+ELMEsS4BJQfQb2V9eibgBnwLu6UK/b2vax7Z76PWQcxwlwvrQJ3KuHP4rXoibqKXAHTH/7zge2aLmJza+PXAAAAABJRU5ErkJggg==);padding:7px 8px 7px 8px;background-color:#347BFF;border:1px solid #DDD;border-width:1px 1px 1px 0px}.formsGadget .validationContainer.entryNotSatisfying:after{content:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAsAAAALCAYAAACprHcmAAAAAXNSR0IArs4c6QAAAAZiS0dEAP8A/wD/oL2nkwAAAAlwSFlzAAAuIwAALiMBeKU/dgAAAAd0SU1FB94HFgU0Ikszc1QAAADOSURBVBjTbZAhTkNBFEXvT7+gCRLDLkgTUtUF1NSxnErkl4gmX4DuQuoKC/iWYKqqyzmYGZgAN3kZc/LmnRv1BhjULdDnV4CV+qIuow6qgMAIXFVQ3QDvgOoUYFth9aLuysa1+mEJcIjaq2MBa/bqVBYIHNW7etdc3TU/tHlV7/OPzL6lgJO6+AOqa3VqwDpP6rwFN62MemrOuZSW+pm6SvKc5FZNkrckD13XfSZZJJmV9zql8JpjlSnSYyN9DrAEJuDwXc+PcK8OwBl4/AKbp0zxmA5MdAAAAABJRU5ErkJggg==);padding:7px 8px 7px 8px;background-color:#D11D13;border:1px solid #DDD;border-width:1px 1px 1px 0px}.formsGadget .inputElementWrapper{position:relative}.formsGadget .mandatoryContainer:before{position:absolute;left:-6px;content:\"*\";color:#D11D13}.formsGadget img{height:100px}.formsGadget input[type=text]{margin:0px 0px 10px 0px;width:90%}.formsGadget input[type=submit]{margin-right:.5em;float:right} .formsGadget .chzn-container-single .chzn-single{background-image:none;border-radius:1px;box-shadow:none;border:1px solid #ddd;padding:.25em;padding-left:14px}.formsGadget .chzn-container .chzn-results li{padding-left:10px}.formsGadget .chzn-container-active.chzn-with-drop .chzn-single{ background:#F6F3F3;border:1px solid #aaa;padding:.25em;padding-left:14px}.formsGadget .chzn-container .chzn-results .highlighted{background-image:none;background-color:#347bff}.formsGadget .chzn-container-single .chzn-single div b{background-position:0px 5px}.formsGadget .chzn-container-active.chzn-with-drop .chzn-single div b{background-position:-18px 5px} .formsGadget .loading{background:url(data:image/gif;base64,R0lGODlhgAAPAPEAAP///6fX+eXy/KfX+SH/C05FVFNDQVBFMi4wAwEAAAAh/hpDcmVhdGVkIHdpdGggYWpheGxvYWQuaW5mbwAh+QQJCgAAACwAAAAAgAAPAAACo5QvoIC33NKKUtF3Z8RbN/55CEiNonMaJGp1bfiaMQvBtXzTpZuradUDZmY+opA3DK6KwaQTCbU9pVHc1LrDUrfarq765Ya9u+VRzLyO12lwG10yy39zY11Jz9t/6jf5/HfXB8hGWKaHt6eYyDgo6BaH6CgJ+QhnmWWoiVnI6ddJmbkZGkgKujhplNpYafr5OooqGst66Uq7OpjbKmvbW/p7UAAAIfkECQoAAAAsAAAAAIAADwAAArCcP6Ag7bLYa3HSZSG2le/Zgd8TkqODHKWzXkrWaq83i7V5s6cr2f2TMsSGO9lPl+PBisSkcekMJphUZ/OopGGfWug2Jr16x92yj3w247bh6teNXseRbyvc0rbr6/x5Ng0op4YSJDb4JxhI58eliEiYYujYmFi5eEh5OZnXhylp+RiaKQpWeDf5qQk6yprawMno2nq6KlsaSauqS5rLu8cI69k7+ytcvGl6XDtsyzxcAAAh+QQJCgAAACwAAAAAgAAPAAACvpw/oIC3IKIUb8pq6cpacWyBk3htGRk1xqMmZviOcemdc4R2kF3DvfyTtFiqnPGm+yCPQdzy2RQMF9Moc+fDArU0rtMK9SYzVUYxrASrxdc0G00+K8ruOu+9tmf1W06ZfsfXJfiFZ0g4ZvEndxjouPfYFzk4mcIICJkpqUnJWYiYs9jQVpm4edqJ+lkqikDqaZoquwr7OtHqAFerqxpL2xt6yQjKO+t7bGuMu1L8a5zsHI2MtOySVwo9fb0bVQAAIfkECQoAAAAsAAAAAIAADwAAAsucP6CAt9zSErSKZyvOd/KdgZaoeaFpRZKiPi1aKlwnfzBF4jcNzDk/e7EiLuLuhzwqayfmaNnjCCGNYhXqw9qcsWjT++TqxIKp2UhOprXf7PoNrpyvQ3p8fAdu82o+O5w3h2A1+Nfl5geHuLgXhEZVWBeZSMnY1oh5qZnyKOhgiGcJKHqYOSrVmWpHGmpauvl6CkvhaUD4qejaOqvH2+doV7tSqdsrexybvMsZrDrJaqwcvSz9i9qM/Vxs7Qs6/S18a+vNjUx9/v1TAAAh+QQJCgAAACwAAAAAgAAPAAAC0Zw/oIC33NKKUomLxct4c718oPV5nJmhGPWwU9TCYTmfdXp3+aXy+wgQuRRDSCN2/PWAoqVTCSVxilQZ0RqkSXFbXdf3ZWqztnA1eUUbEc9wm8yFe+VguniKPbNf6mbU/ubn9ieUZ6hWJAhIOKbo2Pih58C3l1a5OJiJuflYZidpgHSZCOnZGXc6l3oBWrE2aQnLWYpKq2pbV4h4OIq1eldrigt8i7d73Ns3HLjMKGycHC1L+hxsXXydO9wqOu3brPnLXL3C640sK+6cTaxNflEAACH5BAkKAAAALAAAAACAAA8AAALVnD+ggLfc0opS0SeyFnjn7oGbqJHf4mXXFD2r1bKNyaEpjduhPvLaC5nJEK4YTKhI1ZI334m5g/akJacAiDUGiUOHNUd9ApTgcTN81WaRW++Riy6Tv/S4dQ1vG4ps4NwOaBYlOEVYhYbnplexyJf3ZygGOXkWuWSZuNel+aboV0k5GFo4+qN22of6CMoq2kr6apo6m5fJWCoZm+vKu2Hr6KmqiHtJLKebRhuszNlYZ3ncewh9J9z8u3mLHA0rvetrzYjd2Wz8bB6oNO5MLq6FTp2+bVUAACH5BAkKAAAALAAAAACAAA8AAALanD+ggLfc0opS0XeX2Fy8zn2gp40ieHaZFWHt9LKNO5eo3aUhvisj6RutIDUZgnaEFYnJ4M2Z4210UykQ8BtqY0yHstk1UK+/sdk63i7VYLYX2sOa0HR41S5wi7/vcMWP1FdWJ/dUGIWXxqX3xxi4l0g4GEl5yOHIBwmY2cg1aXkHSjZXmbV4uoba5kkqelbaapo6u0rbN/SZG7trKFv7e6savKTby4voaoVpNAysiXscV4w8fSn8fN1pq1kd2j1qDLK8yYy9/ff9mgwrnv2o7QwvGO1ND049UgAAIfkECQoAAAAsAAAAAIAADwAAAticP6CAt9zSilLRd2d8onvBfV0okp/pZdamNRi7ui3yyoo4Ljio42h+w6kgNiJt5kAaasdYE7D78YKlXpX6GWphxqTT210qK1Cf9XT2SKXbYvv5Bg+jaWD5ekdjU9y4+PsXRuZHRrdnZ5inVidAyCTXF+nGlVhpdjil2OE49hjICVh4qZlpibcDKug5KAlHOWqqR8rWCjl564oLFruIucaYGlz7+XoKe2wsIqxLzMxaxIuILIs6/JyLbZsdGF063Uu6vH2tXc79LZ1MLWS96t4JH/rryzhPWgAAIfkECQoAAAAsAAAAAIAADwAAAtWcP6CAt9zSilLRd2fEe4kPCk8IjqTonZnVsQ33arGLwLV8Kyeqnyb5C60gM2LO6MAlaUukwdbcBUspYFXYcla00KfSywRzv1vpldqzprHFoTv7bsOz5jUaUMer5vL+Mf7Hd5RH6HP2AdiUKLa41Tj1Acmjp0bJFuinKKiZyUhnaBd5OLnzSNbluOnZWQZqeVdIYhqWyop6ezoquTs6O0aLC5wrHErqGnvJibms3LzKLIYMe7xnO/yL7TskLVosqa1aCy3u3FrJbSwbHpy9fr1NfR4fUgAAIfkECQoAAAAsAAAAAIAADwAAAsqcP6CAt9zSilLRd2fEW7cnhKIAjmFpZla3fh7CuS38OrUR04p5Ljzp46kgMqLOaJslkbhbhfkc/lAjqmiIZUFzy2zRe5wGTdYQuKs9N5XrrZPbFu94ZYE6ms5/9cd7/T824vdGyIa3h9inJQfA+DNoCHeomIhWGUcXKFIH6RZZ6Bna6Zg5l8JnSamayto2WtoI+4jqSjvZelt7+URKpmlmKykM2vnqa1r1axdMzPz5LLooO326Owxd7Bzam4x8pZ1t3Szu3VMOdF4AACH5BAkKAAAALAAAAACAAA8AAAK/nD+ggLfc0opS0XdnxFs3/i3CSApPSWZWt4YtAsKe/DqzXRsxDqDj6VNBXENakSdMso66WzNX6fmAKCXRasQil9onM+oziYLc8tWcRW/PbGOYWupG5Tsv3TlXe9/jqj7ftpYWaPdXBzbVF2eId+jYCAn1KKlIApfCSKn5NckZ6bnJpxB2t1kKinoqJCrlRwg4GCs4W/jayUqamaqryruES2b72StsqgvsKlurDEvbvOx8mzgazNxJbD18PN1aUgAAIfkECQoAAAAsAAAAAIAADwAAArKcP6CAt9zSilLRd2fEWzf+ecgjlKaQWZ0asqPowAb4urE9yxXUAqeZ4tWEN2IOtwsqV8YkM/grLXvTYbV4PTZpWGYU9QxTxVZyd4wu975ZZ/qsjsPn2jYpatdx62b+2y8HWMTW5xZoSIcouKjYePeTh7TnqFcpabmFSfhHeemZ+RkJOrp5OHmKKapa+Hiyyokaypo6q1CaGDv6akoLu3DLmLuL28v7CdypW6vsK9vsE1UAACH5BAkKAAAALAAAAACAAA8AAAKjnD+ggLfc0opS0XdnxFs3/nkISI2icxokanVt+JoxC8G1fNOlm6tp1QNmZj6ikDcMrorBpBMJtT2lUdzUusNSt9qurvrlhr275VHMvI7XaXAbXTLLf3NjXUnP23/qN/n8d9cHyEZYpoe3p5jIOCjoFofoKAn5CGeZZaiJWcjp10mZuRkaSAq6OGmU2lhp+vk6iioay3rpSrs6mNsqa9tb+ntQAAA7AAAAAAAAAAAA);width:128px;height:15px;margin:auto}"]}];});
