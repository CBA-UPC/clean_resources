//
//  Copyright 2019 mParticle, Inc.
//
//  Licensed under the Apache License, Version 2.0 (the "License");
//  you may not use this file except in compliance with the License.
//  You may obtain a copy of the License at
//
//      http://www.apache.org/licenses/LICENSE-2.0
//
//  Unless required by applicable law or agreed to in writing, software
//  distributed under the License is distributed on an "AS IS" BASIS,
//  WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
//  See the License for the specific language governing permissions and
//  limitations under the License.
//
//  Uses portions of code from jQuery
//  jQuery v1.10.2 | (c) 2005, 2013 jQuery Foundation, Inc. | jquery.org/license

window.mParticle = window.mParticle || {};;
window.mParticle.config = window.mParticle.config || {};;
window.mParticle.config.serviceUrl = 'jssdk.mparticle.com/v2/JS/';;
window.mParticle.config.secureServiceUrl = 'jssdks.mparticle.com/v2/JS/';;
window.mParticle.config.appName = window.mParticle.config.appName || "CNBC PROD";;
window.mParticle.config.minWebviewBridgeVersion = 2;
window.mParticle.config.workspaceToken = "13B9270B";;
window.mParticle.config.aliasMaxWindow = 90;
window.mParticle.config.kitConfigs = window.mParticle.config.kitConfigs || [];;
window.mParticle.config.pixelConfigs = window.mParticle.config.pixelConfigs || [];;
window.mParticle.config.flags = {"eventBatchingIntervalMillis":"10000","eventsV3":"100","directURLRouting":"False","offlineStorage":"100"};
window.mParticle.config.dataPlan = window.mParticle.config.dataPlan || {};;
window.mParticle.config.dataPlan.document = null;
var mParticle=) ;;
window.mParticle.config.requestConfig = false;;
mParticle.init('us1-99f689156b88a84fbe3383020acfea25', window.mParticle.config);;