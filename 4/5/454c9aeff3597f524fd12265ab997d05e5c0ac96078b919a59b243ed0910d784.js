// For license information, see `https://assets.adobedtm.com/fcbff6e82c08/ba94369e179d/001563f5c611/EX3dceb8f81f0f4f11950a2bad96afc88a-libraryCode_source.js`.
main=window.location.host;if(domain.search("author")>-1||domain.search("preview")>-1||domain.search("qa")>-1||domain.search("uat")>-1||domain.search("ppe")>-1||domain.search("prod")>-1||domain.search("blogs")>-1||domain.search("site")>-1||domain.search("archive")>-1){var s_account=_satellite.getVar("reportSuiteStage");_satellite.logger.log("Non-Production enviromnent detected, using report suites: "+s_account,3)}else{s_account=_satellite.getVar("reportSuiteProd");_satellite.logger.log("Production enviromnent detected, using report suites "+s_account,3)}"production"!=_satellite.buildInfo.environment&&(s_account=_satellite.getVar("reportSuiteStage"));var s=window.s=s_gi(s_account);AppMeasurement.getInstance=s_gi,window.s_objectID||(window.s_objectID=0),s_pgicq();