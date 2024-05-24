﻿//----------------------------------------------------------
// Copyright (C) Microsoft Corporation. All rights reserved.
//----------------------------------------------------------
// MicrosoftAjaxWebForms.js
Type._registerScript("MicrosoftAjaxWebForms.js",["MicrosoftAjaxCore.js","MicrosoftAjaxSerialization.js","MicrosoftAjaxNetwork.js","MicrosoftAjaxComponentModel.js"]);Type.registerNamespace("Sys.WebForms");Sys.WebForms.BeginRequestEventArgs=function(c,b,a){Sys.WebForms.BeginRequestEventArgs.initializeBase(this);this._request=c;this._postBackElement=b;this._updatePanelsToUpdate=a};Sys.WebForms.BeginRequestEventArgs.prototype={get_postBackElement:function(){return this._postBackElement},get_request:function(){return this._request},get_updatePanelsToUpdate:function(){return this._updatePanelsToUpdate?Array.clone(this._updatePanelsToUpdate):[]}};Sys.WebForms.BeginRequestEventArgs.registerClass("Sys.WebForms.BeginRequestEventArgs",Sys.EventArgs);Sys.WebForms.EndRequestEventArg};Sys.WebForms.EndRequestEventArgs.prototype={get_dataItems:function(){return this._dataItems},get_error:function(){return this._error},get_errorHandled:function(){return this._errorHandled},set_errorHandled:function(a){this._errorHandled=a},get_response:function(){return this._response}};Sys.WebForms.EndRequestEventArgs.registerClass("Sys.WebForms.EndRequestEventArgs",Sys.EventArgs);Sys.WebForms.InitializeRequestEventArg};Sys.WebForms.InitializeRequestEventArgs.prototype={get_postBackElement:function(){return this._postBackElement},get_request:function(){return this._request},get_updatePanelsToUpdat},set_updatePanelsToUpdat}};Sys.WebForms.InitializeRequestEventArgs.registerClass("Sys.WebForms.InitializeRequestEventArgs",Sys.CancelEventArgs);Sys.WebForms.PageLoadedEventArgs=function(b,a,c){Sys.WebForms.PageLoadedEventArgs.initializeBase(this);this._panelsUpdated=b;this._panelsCreated=a;this._dataItems=c||{}};Sys.WebForms.PageLoadedEventArgs.prototype={get_dataItems:function(){return this._dataItems},get_panelsCreated:function(){return this._panelsCreated},get_panelsUpdated:function(){return this._panelsUpdated}};Sys.WebForms.PageLoadedEventArgs.registerClass("Sys.WebForms.PageLoadedEventArgs",Sys.EventArgs);Sys.WebForms.PageLoadingEventArg};Sys.WebForms.PageLoadingEventArgs.prototype={get_dataItems:function(){return this._dataItems},get_panelsDeleting:function(){return this._panelsDeleting},get_panelsUpdating:function(){return this._panelsUpdating}};Sys.WebForms.PageLoadingEventArgs.registerClass("Sys.WebForms.PageLoadingEventArgs",Sys.EventArgs);Sys._ScriptLoade};Sys._ScriptLoader.prototype={dispos},loadScript},queueCustomScriptTa},queueScriptBloc},queueScriptReferenc},_createScriptElemen},_loadScriptsInterna},_nextSessio},_raiseErro},_scriptLoadedHandle},_scriptLoadTimeoutHandle},_stopSessio}};Sys._ScriptLoader.registerClass("Sys._ScriptLoader",null,Sys.IDisposable);Sys._ScriptLoader.getInstanc};Sys._ScriptLoader.isScriptLoade};Sys._ScriptLoader.readLoadedScript};Sys._ScriptLoader._errorScriptLoadFaile};Sys._ScriptLoader._getLoadedScript};Sys.WebForms.PageRequestManage};Sys.WebForms.PageRequestManager.prototype={_get_eventHandlerLis},get_isInAsyncPostBac},add_beginRequest:function(a){this._get_eventHandlerList().addHandler("beginRequest",a)},remove_beginRequest:function(a){this._get_eventHandlerList().removeHandler("beginRequest",a)},add_endRequest:function(a){this._get_eventHandlerList().addHandler("endRequest",a)},remove_endRequest:function(a){this._get_eventHandlerList().removeHandler("endRequest",a)},add_initializeRequest:function(a){this._get_eventHandlerList().addHandler("initializeRequest",a)},remove_initializeRequest:function(a){this._get_eventHandlerList().removeHandler("initializeRequest",a)},add_pageLoaded:function(a){this._get_eventHandlerList().addHandler("pageLoaded",a)},remove_pageLoaded:function(a){this._get_eventHandlerList().removeHandler("pageLoaded",a)},add_pageLoading:function(a){this._get_eventHandlerList().addHandler("pageLoading",a)},remove_pageLoadin},abortPostBac},beginAsyncPostBac},_cancelPendingCallback},_commitControl},_createHiddenFiel},_createPageRequestManagerTimeoutErro},_createPageRequestManagerServerErro},_createPageRequestManagerParserErro},_createPanelI},_createPostBackSetting},_convertToClientID},dispos},_doCallbac},_doPostBac},_doPostBackWithOption},_elementContain},_endPostBac},_ensureUniqueId},_findNearestElemen},_findTex},_fireDefaultButto},_getPageLoadedEventArg},_getPageLoadingEventArg},_getPostBackSetting},_getScrollPositio},_initializeInterna},_matchesParentIDInLis},_onFormElementActiv},_onFormElementClic},_onFormSubmi},_onFormSubmitComplete},_onWindowUnloa},_pageLoade},_pageLoadedInitialLoa},_parseDelt},_processUpdatePanelArray},_queueScript},_registerDisposeScrip},_scriptIncludesLoadComplet},_scriptIncludesLoadFaile},_scriptsLoadComplet},_splitNodeIntoArra},_uniqueIDToClientI},_updateControl},_updatePane},_validPositio}};Sys.WebForms.PageRequestManager.getInstanc};Sys.WebForms.PageRequestManager._addArrayElemen};Sys.WebForms.PageRequestManager._initializ};Sys.WebForms.PageRequestManager.registerClass("Sys.WebForms.PageRequestManager");Sys.UI._UpdateProgres};Sys.UI._UpdateProgress.prototype={get_displayAfter:function(){return this._displayAfter},set_displayAfter:function(a){this._displayAfter=a},get_dynamicLayout:function(){return this._dynamicLayout},set_dynamicLayout:function(a){this._dynamicLayout=a},get_associatedUpdatePanelI},set_associatedUpdatePanelI},get_rol},_clearTimeou},_getUniqueI},_handleBeginReques},_startReques},_handleEndReques},dispos},initializ}};Sys.UI._UpdateProgress.registerClass("Sys.UI._UpdateProgress",Sys.UI.Control);
Type.registerNamespace('Sys.WebForms');Sys.WebForms.Res={'PRM_UnknownToken':'Unknown token: \'{0}\'.','PRM_MissingPanel':'Could not find UpdatePanel with ID \'{0}\'. If it is being updated dynamically then it must be inside another UpdatePanel.','PRM_ServerError':'An unknown error occurred while processing the request on the server. The status code returned from the server was: {0}','PRM_ParserError':'The message received from the server could not be parsed. Common causes for this error are when the response is modified by calls to Response.Write(), response filters, HttpModules, or server trace is enabled.\r\nDetails: {0}','PRM_TimeoutError':'The server request timed out.','PRM_ParserErrorDetails':'Error parsing near \'{0}\'.','PRM_CannotRegisterTwice':'The PageRequestManager cannot be initialized more than once.'};