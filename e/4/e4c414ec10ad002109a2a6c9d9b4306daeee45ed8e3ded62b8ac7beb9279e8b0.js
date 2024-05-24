
//1705574630
var RUWT_BASE_BET = 10;
var RUWT_BEST_ODD_MATCH_SENSITIVITY = 500;
var RUWT_DETAIL_HIDE_TIMEOUT = null;
var RUWT_ENABLE_OUTBOUND_LINKS = true;
var RUWT_ENABLE_ATTRIBUTION_LINKS = true;
var RUWT_ENABLE_GENERIC_TEAM_LOGOS = false;
var RUWT_ODDS_BOARD_SHOW_IN_PROGRESS_GAMES = true;
var RUWT_HERO_URL = "https://www.sportingnews.com";
var RUWT_SEE_ALL_LINES_URL = "https://www.metabet.io/odds";
var RUWT_HOSTED_HOST = "";
var RUWT_BUBBLE_TEASE_SHOW_ICON = false;
var RUWT_BUBBLE_TEASE_SHOW_SPREAD = true;
var RUWT_BUBBLE_MATCH_FULL_TEAM_NAME = true;
var RUWT_TEAM_DATA = {};

var RUWT_SITE_ID = "sportingnews";
var RUWT_SUB_SITE_ID = null;
var RUWT_REDIRECT_URL = "https://sportingnews.go.metabet.io/bet/";
var RUWT_SITE_CANADIAN = false;
var RUWT_SITE_FAMILY_CATENA = false;
var RUWT_SITE_FAMILY_GIG = false;
var RUWT_SITE_FAMILY_RAKETECH = false;
var RUWT_SITE_FAMILY_VOX = false;
var RUWT_STALE_ODDS_CUTOFF = 1000*60*60*24*60;
var RUWT_PROVIDER_SUFFIX_PATTERN = /_[A-Z]{2}(_[A-Z0-9]{2})?$/;
var RUWT_PROVIDERS_NOT_UPDATING_IN_PLAY = ["BET_365", "MGM", "WILLIAM_HILL", "WYNN"];
var RUWT_SCORE_STRIP_INTERVAL = null;

//Run through document searching for hyperlinked team names for a bubble
function mb_insertOddsBubbles() {

	
	//Abort if we don't have team data to match against
	if (!RUWT_TEAM_DATA || !RUWT_TEAM_DATA.hasOwnProperty("results")) {
		return;
	}


	//Find all metabet-bubble-tagged regions
	var tagged = document.querySelectorAll(".metabet-bubble");
	var regions = [];
	for (var i=0; i<tagged.length; i++) {
		var taggedRegions = tagged[i].querySelectorAll("p");
		for (var j=0; j<taggedRegions.length; j++) {
			regions.push(taggedRegions[j]);
		}
	}

	//If the client has a "p.metabet-bubble" structure and not ".metabet-bubble p",
	//just use "p.metabet-bubble" as our sole region.
	if ((regions.length == 0) && (tagged.length == 1) && (tagged[0].tagName == "P")) {
		regions = tagged;
	}


	//Exit if we can't find any tagged regions
	if (regions.length == 0) {
		return;
	}

	//Get the current location
	var location = mb_getCurrentLocation();

	//How will we be styling the winning prices?
	var style = "modern-cents";

	//Keep track of the teams we've found, so we don't
	//add a bubble more than once for a given team.
	var foundTeamIDs = [];


	RUWT_TEAM_DATA["results"].forEach(function(team) {

		try {

			if (team["city"] && (team["name"] || team["nickname"] || (team["sport"] == "soccer"))) {

				regions.forEach(function(region) {

					//What team text are we searching for?
					var teamName;
					if (RUWT_BUBBLE_MATCH_FULL_TEAM_NAME) {
						teamName = team["city"] + ((team["name"] || team["nickname"]) ? " " + (team["name"] ? team["name"] : team["nickname"]) : "");
					} else {
						teamName = team["name"] ? team["name"] : team["city"];
					}

					//Start searching for the team
					if (region.innerText.indexOf(teamName) == -1) {
						//We can't find the team in this region, move on
						return;
					} else if (foundTeamIDs.indexOf(team["teamID"]) >= 0) {
						//We've already tagged this team, move on
						return;
					} else {
						//We've found a mention of this team in the region,
						//and we haven't matched this team previously
						foundTeamIDs.push(team["teamID"]);
					}

					var query = new String(team["sport"] + "/" + mb_getTeamDisplayName(team)).toLowerCase().replace(/[ -]+/g, "_");
					var odds;
					var span;
					var div;
					var popup;
					var img;
					var a;

					mb_getJSON("https://metabet.static.api.areyouwatchingthis.com/api/odds.json?apiKey=219f64094f67ed781035f5f7a08840fc&location=" + location + "&teamID=" + team["teamID"], function(oddsData) {

						if (oddsData["results"].length > 0) {

							//Search through the results for the team's next or
							//currently in-progress game
							var game = null;
							for (var i=0; i<oddsData["results"].length; i++) {
								if ((oddsData["results"][i]["date"] > new Date().getTime()) || (oddsData["results"][i].hasOwnProperty("timeLeft") && (oddsData["results"][i]["timeLeft"].indexOf("Final") != 0))) {
									game = oddsData["results"][i];
									break;
								}
							}

							if (game == null) {
								return;
							}

							//Create winnings text
							span = document.createElement("span");
							span.className = "metabet-winnings";

							var isHomeTeam = (team["teamID"] == game["team2ID"]);
							span.innerHTML = "";
							odds = mb_getBestGameOdds(game, "spreadLine" + (!isHomeTeam ? "1" : "2"), true, location);
							if (RUWT_BUBBLE_TEASE_SHOW_SPREAD && odds) {
								span.innerHTML += " (" + mb_formatSpread(odds["spread"] * (isHomeTeam ? 1 : -1)) + ")";
							}
							if (RUWT_BUBBLE_TEASE_SHOW_ICON) {
								span.innerHTML += "<img src=\"https://go.metabet.io/03325fb169d4ca908f52c07a4505bb8f/img/icon.png\" alt=\"\"/>";
							}

							//Build popup
							var popup = document.createElement("div");
							popup.className = "metabet-winnings-detail";
							popup.style.setProperty("--team-color", "#" + team["color"]);

							div = document.createElement("div");
							div.innerHTML = "Wager $" + RUWT_BASE_BET + " on " + team["initials"];
							div.style.background = "#" + team["color"];
							if (!RUWT_ENABLE_GENERIC_TEAM_LOGOS) {
								div.appendChild(mb_getTeamLogo(80, team["teamID"], team["color"], team["initials"]));
							}
							popup.appendChild(div);

							odds = mb_getBestGameOdds(game, "moneyLine" + (!isHomeTeam ? "1" : "2"), true, location);
							if (odds) {
								div = document.createElement("div");
								div.innerHTML = "<span>To Beat " + (!isHomeTeam ? game["team2Initials"] : game["team1Initials"]) + ":</span>";
								a = mb_createBetRedirect(odds, "moneyLine" + (!isHomeTeam ? "1" : "2"), null, span, query, "To Win");
								a.innerHTML = mb_stylePrice(style, odds["moneyLine" + (!isHomeTeam ? "1" : "2")]);
								div.append(a);
								popup.appendChild(div);
							}

							odds = mb_getBestGameOdds(game, "spreadLine" + (!isHomeTeam ? "1" : "2"), true, location);
							if (odds && (((odds["spread"] * 2).toFixed() / 2) != 0)) {

								div = document.createElement("div");
								a = mb_createBetRedirect(odds, "spreadLine" + (!isHomeTeam ? "1" : "2"), null, span, query, "Spread");
								if (!isHomeTeam && (odds["spread"] > 0)) {
									div.append("Win by " + Math.abs(mb_formatSpread(odds["spread"])) + ":");
									a.innerHTML = mb_stylePrice(style, odds["spreadLine1"]);
								} else if (!isHomeTeam && (odds["spread"] < 0)) {
									div.append("Lose by less than " + Math.abs(mb_formatSpread(odds["spread"])) + ":");
									a.innerHTML = mb_stylePrice(style, odds["spreadLine1"]);
								} else if (isHomeTeam && (odds["spread"] > 0)) {
									div.append("Lose by less than " + Math.abs(mb_formatSpread(odds["spread"])) + ":");
									a.innerHTML = mb_stylePrice(style, odds["spreadLine2"]);
								} else if (isHomeTeam && (odds["spread"] < 0)) {
									div.append("Win by " + Math.abs(mb_formatSpread(odds["spread"])) + ":");
									a.innerHTML = mb_stylePrice(style, odds["spreadLine2"]);
								}

								div.appendChild(a);

								popup.appendChild(div);

							}

							odds = mb_getBestGameOdds(game, "moneyLine" + (!isHomeTeam ? "2" : "1"), true, location);
							if (odds) {
								div = document.createElement("div");
								div.innerHTML = "<span>To Lose:</span>";
								a = mb_createBetRedirect(odds, "moneyLine" + (!isHomeTeam ? "2" : "1"), null, span, query, "To Lose");
								a.innerHTML = mb_stylePrice(style, odds["moneyLine" + (!isHomeTeam ? "2" : "1")]);
								div.append(a)
								popup.appendChild(div);
							}

							//Add a spacer along the top edge to
							//avoid unintended mouseleave events
							var spacer = document.createElement("span");
							spacer.classList.add("metabet-winnings-detail-top-spacer");
							popup.appendChild(spacer);

							span.append(popup);


							//Add winnings text directly after team text,
							//pausing a moment to avoid append failures.
							region.innerHTML = region.innerHTML.replace(teamName, "<span class=\"metabet-bubble-t" + team["teamID"] + "\">" + teamName + "</span>");
							setTimeout(function() {
								document.getElementsByClassName("metabet-bubble-t" + team["teamID"])[0].append(span);
							}, 100);

							//Track this element render/view
							mb_trackRender(span, query);

						}

					});

				});

			}

		} catch (error) {
			console.log(error);
		}

	});

	//Add listeners for bubbles we just dyanmically added
	document.getElementsByClassName("metabet-bubble")[0].addEventListener("mouseover", mb_bubbleOver);
	document.getElementsByClassName("metabet-bubble")[0].addEventListener("touchstart", mb_bubbleClick, {passive: true});
	document.getElementsByClassName("metabet-bubble")[0].addEventListener("click", mb_bubbleClick);

	
}


function mb_bubbleOver(e) {
	if (e.target && (e.target.className == "metabet-winnings")) {

		//Calculate where the bubble should be
		var BUBBLE_WIDTH = 200;
		var leftPos = (e.target.offsetWidth-BUBBLE_WIDTH)/2;
		var winningsRect = e.target.getBoundingClientRect();
		if (winningsRect["x"] < BUBBLE_WIDTH/2) {
			//Prevent being cutoff on the left side
			leftPos = 0;
		} else if (winningsRect["x"] > window.innerWidth-BUBBLE_WIDTH) {
			//Prevent being cutoff on the right side
			leftPos = (BUBBLE_WIDTH/1.5) * -1;
		}

		//Position the bubble
		var winningsDetail = e.target.getElementsByClassName("metabet-winnings-detail")[0];
		winningsDetail.style.left = leftPos + "px";
		winningsDetail.classList.add("metabet-winnings-detail-show");

		//Hide the bubble when the mouse leaves
		e.target.addEventListener("mouseleave", mb_bubbleLeave);

	}
}

function mb_bubbleLeave(e) {
	e.target.getElementsByClassName("metabet-winnings-detail")[0].classList.remove("metabet-winnings-detail-show");
}

function mb_bubbleClick(e) {
	if (e.target && (e.target.className == "metabet-winnings")) {

		if (e.type == "touchstart") {

			//Treat the click as a mouseover, if on mobile
			e.preventDefault();
			mb_bubbleOver(e);
			e.stopPropogation();

		} else {

			if (RUWT_ENABLE_OUTBOUND_LINKS) {
				//If the bubble icon (or spread value) is clicked,
				//pick a URL from within the bubble as our destination.
				var links = e.target.getElementsByTagName("a");
				for (var i=0; i<links.length; i++) {
					window.location.href = links[i].href;
					break;
				}
			}

		}

	} else if (e.type == "touchstart") {
		//Hide any currently-visible overlays
		e.target.getElementsByClassName("metabet-winnings-detail-show")[0].classList.remove("metabet-winnings-detail-show");
	}
}



//Inserts inline dynamic odds and spreads
function mb_insertOddsValues(target) {

	var elements = target ? new Array(target) : document.getElementsByClassName("metabet-odds");

	Array.from(elements).forEach(function(element) {

		//Get the classes on the element
		var classes = element.classList;

		//Determine which type of value we're showing
		var market = null;
		var query = null;
		var style = "classic";
		var country = "US";
		var location = null;
		var fallback = "none";
		var isHomeTeam;
		var isMoneyLineTie;
		var showProvider = RUWT_SITE_FAMILY_CATENA || element.classList.contains("metabet-show-provider");
		var isGameQuery = false;
		var isGranularGameQuery = false;

		for (var i=0; i<classes.length; i++) {

			if (classes[i].indexOf("metabet-market-") == 0) {

				market = classes[i].toLowerCase().replace("metabet-market-", "").replace("moneyline", "moneyLine").replace("overunder", "overUnder");
				if (market.match("spread.*-(away|home)") || market.match("moneyLine.*-(away|home|tie)") || market.match("overUnder.*")) {
					isHomeTeam = market.match(".+-home");
					isMoneyLineTie = market.match("moneyLine.*-tie");
					isGameQuery = true;
					isGranularGameQuery = (!market.match("spread-(away|home)") && !market.match("moneyLine-(away|home|tie)") && !market.match("overUnder$"));
					market = market.replace(/-(away|home|tie)$/, "").replace("firstperiod", "FirstPeriod").replace("secondperiod", "SecondPeriod").replace("firsthalf", "FirstHalf").replace("firstfiveinnings", "FirstFiveInnings").replace("thirdperiod", "ThirdPeriod").replace("fourthperiod", "FourthPeriod").replace("secondhalf", "SecondHalf");
				}

			} else if (classes[i].indexOf("metabet-query-") == 0) {
				query = classes[i].replace("metabet-query-", "");
			} else if (classes[i].indexOf("metabet-style-") == 0) {
				style = classes[i].replace("metabet-style-", "");
			} else if (classes[i].indexOf("metabet-fallback-") == 0) {
				fallback = classes[i].replace("metabet-fallback-", "");
			} else if (classes[i].indexOf("metabet-country-") == 0) {
				country = classes[i].replace("metabet-country-", "");
			} else if (classes[i].indexOf("metabet-location-") == 0) {
				location = classes[i].replace("metabet-location-", "");
			}

		}
		location = mb_getCurrentLocation(country, location);


		//We can't render this value if a market and query
		//aren't both specified
		if (!market || !query) {
			return;
		}



		//Fetch the data from the API
		mb_getJSON("https://metabet.static.api.areyouwatchingthis.com/api/" + (isGameQuery ? "odds" : "sideodds") + ".json?apiKey=219f64094f67ed781035f5f7a08840fc" + (isGranularGameQuery ? "&showGranular" : "") + "&fallback=" + fallback + "&q=" + query, function(oddsData) {

			//The anchor that will contain the dynamic value
			var a = null;

			if (isGameQuery) {

				if (oddsData["results"][0] && oddsData["results"][0]["odds"]) {

					//Get the best available odds
					var odds = oddsData["results"][0]["odds"][0];
					var line = null;
					if (market.match("spread.*")) {
						line = market + "Line" + (!isHomeTeam ? "1" : "2");
						odds = mb_getBestGameOdds(oddsData["results"][0], line, true, location, element);
					} else if (market.match("moneyLine.*")) {
						line = market + (isMoneyLineTie ? "Tie" : (!isHomeTeam ? "1" : "2"));
						odds = mb_getBestGameOdds(oddsData["results"][0], line, true, location, element);
					} else if (market.match("overUnder.*")) {
												odds = mb_getBestGameOdds(oddsData["results"][0], market + "LineOver", true, location, element);
					}

					//If we can't find odds to display, exit
					if (odds == null) {
						return;
					}

					a = mb_createBetRedirect(odds, line, location, element, query, market);
					if (!RUWT_ENABLE_OUTBOUND_LINKS) {
						a.removeAttribute("href");
					}

					//If requested, show the logo of the provider
					//whose price/line we're about to show
					if (showProvider && (odds["provider"] != "CONSENSUS")) {
						var img = document.createElement("img");
						img.className = "metabet-odds-provider";
						img.alt = mb_getProviderName(odds["provider"]);
						img.title = mb_getProviderName(odds["provider"]);
						img.style.width = "1.25em";
						img.style.height = "1.25em";
						img.src = mb_getProviderLogo(odds["provider"], location);
						a.appendChild(img);
					}

					if (market.match("spread.*") && odds.hasOwnProperty(market)) {
						a.innerHTML += mb_formatSpread(odds[market] * (isHomeTeam ? 1 : -1));
					} else if (market.match("moneyLine.*") && odds.hasOwnProperty(line)) {
						a.innerHTML += mb_stylePrice(style, odds[line]);
					} else if (market.match("overUnder.*") && odds.hasOwnProperty(market)) {
						if (element.classList.contains("metabet-piece-over")) {
							a.innerHTML += mb_stylePrice(style, odds[market + "LineOver"]);
						} else if (element.classList.contains("metabet-piece-under")) {
							a.innerHTML += mb_stylePrice(style, odds[market + "LineUnder"]);
						} else {
							a.innerHTML += (odds[market] * 2).toFixed()/2;
						}
					}
				}

			} else {

				//If the query matched successfully, there should be
				//only one matched player, team, or game
				if (oddsData.hasOwnProperty("teams") && (oddsData["teams"].length == 1) && !oddsData.hasOwnProperty("players")) {
					//We've found one matching team
				} else if (oddsData.hasOwnProperty("players") && (oddsData["players"].length == 1) && !oddsData.hasOwnProperty("teams")) {
					//We've found one matching player
				} else if ((oddsData["results"].length == 1) && oddsData.hasOwnProperty("games") && (oddsData["games"].length == 1) && !oddsData.hasOwnProperty("teams") && !oddsData.hasOwnProperty("players")) {
					//We've found one matching game
				} else {
					return;
				}


				var sideOdds = null;
				var marketTokens = market.toLowerCase().split("/");
				var selectSoleMarket = (oddsData["results"].length == 1) && (((oddsData.hasOwnProperty("players") && (oddsData["players"].length == 1)) && (oddsData.hasOwnProperty("games") && (oddsData["games"].length == 1))) || (oddsData.hasOwnProperty("games") && (oddsData["games"].length == 1) && !oddsData.hasOwnProperty("teams") && !oddsData.hasOwnProperty("players")));
				var selectFirstMatchingMarket = false;
				marketTokens.forEach(function(marketToken) {
					if ((marketToken.indexOf("_game_team_") != -1) && oddsData.hasOwnProperty("teams") && (oddsData["teams"].length == 1)) {
						selectFirstMatchingMarket = true;
					}
				});

				//Scan the SideOdd results searching for the market we care about:
				//Either we'll match a game ID, the first market without any game,
				//or the sole market returned if we match on player and game, and
				//finally in some cases, the first matching market.
				outerloop:
				for (var i=0; i<oddsData["results"].length; i++) {
					if (marketTokens.indexOf(oddsData["results"][i]["type"].toLowerCase()) != -1) {
						for (var j=0; j<oddsData["results"][i]["sideOdds"].length; j++) {
							if (selectSoleMarket || selectFirstMatchingMarket || !oddsData["results"][i]["sideOdds"][j].hasOwnProperty("gameID") || (marketTokens.indexOf(oddsData["results"][i]["sideOdds"][j]["gameID"].toString()) != -1)) {
								if (oddsData["results"][i]["sideOdds"][j]["provider"] != "CONSENSUS") {
									if (mb_getProvidersForLocation(location, element).indexOf(oddsData["results"][i]["sideOdds"][j]["provider"]) != -1) {
										sideOdds = oddsData["results"][i]["sideOdds"][j];
										break outerloop;
									}
								}
							}
						}
					}
				}


				//If we didn't find a market match, exit
				if (sideOdds == null) {
					return;
				}


				//Create the anchor
				a = mb_createBetRedirect(sideOdds, null, location, element, query, market);
				if (!RUWT_ENABLE_OUTBOUND_LINKS) {
					a.removeAttribute("href");
				}

				//If requested, show the logo of the provider
				//whose price/line we're about to show
				if (showProvider && (sideOdds["provider"] != "CONSENSUS")) {
					var img = document.createElement("img");
					img.className = "metabet-odds-provider";
					img.alt = mb_getProviderName(sideOdds["provider"]);
					img.title = mb_getProviderName(sideOdds["provider"]);
					img.style.width = "1.25em";
					img.style.height = "1.25em";
					img.src = mb_getProviderLogo(sideOdds["provider"], location);
					a.appendChild(img);
				}

				//Populate the price
				if (element.classList.contains("metabet-piece-line")) {
					if (sideOdds.hasOwnProperty("value")) {
						a.innerHTML = sideOdds["value"];
					}
				} else if (element.classList.contains("metabet-piece-over")) {
					if (sideOdds.hasOwnProperty("price1")) {
						a.innerHTML = mb_stylePrice(style, sideOdds["price1"]);
					}
				} else if (element.classList.contains("metabet-piece-under")) {
					if (sideOdds.hasOwnProperty("price2")) {
						a.innerHTML = mb_stylePrice(style, sideOdds["price2"]);
					}
				} else if (sideOdds.hasOwnProperty("value") && sideOdds.hasOwnProperty("price1")) {
					a.innerHTML += sideOdds["value"] + " (" + mb_stylePrice(style, sideOdds["price1"]) + ")";
				} else {
					a.innerHTML += mb_stylePrice(style, sideOdds.hasOwnProperty("price1") ? sideOdds["price1"] : sideOdds["price"]);
				}

			}

			//If we didn't find odds to dispay, exit
			if (a == null) {
				return;
			}


			//The anchor has been populated so add it to the display
			if (element.querySelector(".metabet-odds-value")) {
				//There's a value placeholder--populate it
				//and leave the rest of the element unchanged.
				element.replaceChild(a, element.querySelector(".metabet-odds-value"));
			} else {
				//Populate the element with the value
				mb_emptyElement(element);
				element.appendChild(a);
			}

			//Override display:none because we've found a value to display
			element.style.display = "initial";

			//Track the render
			mb_trackRender(element, query, market);

		});

	});

}


//Insert dynamic placement if the article calls for it
function mb_insertAdTilePlacements() {

	
}


//Transform any auto tiles into standard tiles using customer-specific
//logic.  Auto tiles never have a query specified, but may have a product
//specified, like metabet-gametile or metabet-sideoddstile.



//Inserts ad unit showing all major lines for a single game
function mb_insertGameTiles(target, showClosingOdds) {

	var elements = target ? new Array(target) : document.getElementsByClassName("metabet-gametile");

	Array.from(elements).forEach(function(element) {

		//Basic parameters for the tile, with defaults
		var query = null;
		var width = "336px";
		var height = "280px";
		var style = "classic";
		var fallback = "none";
		var random = null;
		var period = null;
		var showGranular = false || element.classList.contains("metabet-show-granular");
		var country = "US";
		var location = null;

		//When enabled, the tile will show the best possible line in
		//each cell.  If set to false, consensus lines will be shown.
		//This is newer functionality, and I'm not yet sure if it will
		//become mandatory or be an option.
		var showBestLines = true;

		var classes = element.classList;
		for (var i=0; i<classes.length; i++) {
			if (classes[i].indexOf("metabet-size-") == 0) {
				width = classes[i].split("-")[2].split("x")[0];
				if (width.indexOf("%") == -1) {
					width += "px";
				}
				height = classes[i].split("-")[2].split("x")[1] + "px";
			} else if (classes[i].indexOf("metabet-style-") == 0) {
				style = classes[i].replace("metabet-style-", "");
			} else if (classes[i].indexOf("metabet-query-") == 0) {
				query = classes[i].replace("metabet-query-", "");
			} else if (classes[i].indexOf("metabet-fallback-") == 0) {
				fallback = classes[i].replace("metabet-fallback-", "");
			} else if (classes[i].indexOf("metabet-country-") == 0) {
				country = classes[i].replace("metabet-country-", "");
			} else if (classes[i].indexOf("metabet-location-") == 0) {
				location = classes[i].replace("metabet-location-", "");
			} else if (classes[i].indexOf("metabet-period-") == 0) {
				period = classes[i].replace("metabet-period-", "");
			} else if (classes[i].indexOf("metabet-random-") == 0) {
				random = parseInt(classes[i].replace("metabet-random-", ""));
			}
		}
		location = mb_getCurrentLocation(country, location);


		if (!query) {
			//If we can't find a specified query, the customer might be
			//using the original version of the markup.  Search through
			//the class names and try to continue.
			for (var i=0; i<classes.length; i++) {
				if (classes[i].match("metabet-[0-9]+x[0-9]+-.+")) {
					width = classes[i].split("-")[1].split("x")[0] + "px";
					height = classes[i].split("-")[1].split("x")[1] + "px";
					query = classes[i].split("-")[2];
					break;
				}
			}
		}


		//Subscribe to resize media queries
		element.setAttribute("metabet-observe-resizes", "");


		//Retrieve odds data
		var url;
		if (query) {
			url = "https://metabet.static.api.areyouwatchingthis.com/api/odds.json?apiKey=219f64094f67ed781035f5f7a08840fc&location=" + location + "&q=" + query + (showClosingOdds ? "&closing" : "");
					} else {
			//If we don't have a query, exit
			return;
		}

		mb_getJSON(url, function(oddsData) {

			var providers = mb_getProvidersForLocation(location, element);
			var game = null;

			if (random) {

				//Get all upcoming games with lines for an allowed provider
				var upcomingGames = [];
				for (var i=0; i<oddsData["results"].length; i++) {
					if (oddsData["results"][i]["date"] > Date.now()) {
						for (var j=0; j<oddsData["results"][i]["odds"].length; j++) {
							if (providers.indexOf(oddsData["results"][i]["odds"][j]["provider"]) >= 0) {
								upcomingGames.push(oddsData["results"][i]);
							}
						}
					}
				}

				//Pick one at random
				if (upcomingGames.length > 0) {
					game = upcomingGames[Math.floor(Math.random()*(Math.min(upcomingGames.length, random)))];
				}

			} else {

				//Find the completed game and the non-finished game
				//closest to the current time.  These two games will
				//be the only candidates for display by this tile.
				//Games are returned by the API in chronological order.
				var lastCompletedGame = null;
				var firstNonFinishedGame = null;
				for (var i=0; i<oddsData["results"].length; i++) {

					game = oddsData["results"][i];

					//Only consider this game if an allowed provider has a line
					var providerHasLine = false;
					outerloop:
					for (var j=0; j<providers.length; j++) {
						if (providers[j] != "CONSENSUS") {
							for (var k=0; k<game["odds"].length; k++) {
								if (game["odds"][k]["provider"] == providers[j]) {
									providerHasLine = true;
									break outerloop;
								}
							}
						}
					}

					if (providerHasLine) {
						if (!mb_isGameFinished(game) && !firstNonFinishedGame) {
							firstNonFinishedGame = game;
							break;
						} else if (mb_isGameFinished(game)) {
							lastCompletedGame = game;
						}
					}

				}



				//Choose the game to display based on passed-in parameters
				game = null;
				if (!showClosingOdds) {
					if (firstNonFinishedGame) {
						game = firstNonFinishedGame;
					} else if ((fallback == "closing") && lastCompletedGame) {
						mb_insertGameTiles(element, true);
						return;
					}
				} else if (showClosingOdds) {
					if (lastCompletedGame) {
						game = lastCompletedGame;
					}
				}

			}

			//Exit if we can't find a game to display
			if (!game) {
				return "<!--- MetaBet: No odds for an upcoming game found for '" + query + "' --->";
			}


			var consensus = game["odds"][0];

			//Set size parameters
			element.style.width = width;
			element.style.height = height;
			mb_addAdTileSizeModifiers(element);

			

			var a, div, div2, div3, em, img, label, span;

			//Tile header
			element.append(mb_createTileHeader(game, element, query));


			//Score
			div = document.createElement("div");
			div.className = "metabet-gametile-score";

			div2 = document.createElement("div");
			div2.className = "metabet-gametile-time";

			if (showGranular) {

				//Build list of all granular periods
				var granularPeriods = new Array();
				var granularPeriod;
				for (var i=0; i<game["odds"].length; i++) {
					for (var j=0; j<providers.length; j++) {
						if ((game["odds"][i]["provider"] == providers[j]) && (providers[j] != "CONSENSUS")) {
							for (var key in game["odds"][i]) {
								granularPeriod = key.replace(/(date|period|provider|url)/, "").replace(/(spread|moneyLine|overUnder)/, "").replace(/Line(Over|Under)?/, "").replace(/([12]|Tie)/, "");
								if (granularPeriods.indexOf(granularPeriod) == -1) {
									granularPeriods.push(granularPeriod);
								}
							}
							break;
						}
					}
				}

				//Sort the periods
				granularPeriods.sort(function(p1, p2) {
					var labels = new Array("", "FirstPeriod", "SecondPeriod", "FirstHalf", "FirstFiveInnings", "ThirdPeriod", "FourthPeriod", "SecondHalf");
					if ((labels.indexOf(p1) != -1) && (labels.indexOf(p2) != -1)) {
						return labels.indexOf(p1) - labels.indexOf(p2);
					} else {
						return p1.localeCompare(p2);
					}
				});

				//Add the periods to the dropdown
				select = document.createElement("select");
				for (var i=0; i<granularPeriods.length; i++) {
					granularPeriod = granularPeriods[i];
					option = document.createElement("option");
					option.innerHTML = (granularPeriod == "") ? "Full" : granularPeriod.replace("Period", (game["leagueCode"] == "HKN") ? "P" : "Q").replace(/Half|FiveInnings/, "H").replace("First", "1").replace("Second", "2").replace("Third", "3").replace("Fourth", "4");
					option.value = granularPeriod;
					if (period) {
						if ((period.toLowerCase() == option.innerHTML.toLowerCase()) || (period.toLowerCase() == option.value.toLowerCase())) {
							option.selected = true;
						}
					}
					select.append(option);
				}
				select.addEventListener("change", function() {
					mb_paintGameTileOdds(element, query, game, style, showBestLines, location, this.value);
				});

				div2.append(select);

			} else {
				span = document.createElement("span");
				span.append(!mb_isGameFinished(game) ? mb_getUpcomingDateTime(game) : "Final");
				div2.append(span);
			}

			div.append(div2);

			div2 = document.createElement("div");
			div2.classList.add("metabet-gametile-team-away");
			if (!mb_hasIndividualCompetitors(game)) {
				div2.append(mb_getTeamLogo(80, game["team1ID"], game["team1Color"], game["team1Initials"]));
			}
			div2.innerHTML += "<div class=\"metabet-show-width-small\">" + mb_getAwayTeamShortName(game) + "</div>";
			div2.innerHTML += "<div class=\"metabet-hide-width-small\">" + (game["team1Name"] ? game["team1Name"] : game["team1City"]) + "</div>";
			div.append(div2);

			div2 = document.createElement("div");
			div2.classList.add("metabet-gametile-team-home");
			if (!mb_hasIndividualCompetitors(game)) {
				div2.append(mb_getTeamLogo(80, game["team2ID"], game["team2Color"], game["team2Initials"]));
			}
			div2.innerHTML += "<div class=\"metabet-show-width-small\">" + mb_getHomeTeamShortName(game) + "</div>";
			div2.innerHTML += "<div class=\"metabet-hide-width-small\">" + (game["team2Name"] ? game["team2Name"] : game["team2City"]) + "</div>";
			div.append(div2);

			if ((game["sport"] == "mma") && game["round"]) {
				element.classList.add("metabet-gametile-show-roundname");
				div2 = document.createElement("div");
				div2.classList.add("metabet-gametile-roundname");
				div2.innerHTML = game["round"].substring(0, Math.min(game["round"].length, game["round"].indexOf(":"))).trim();
				div.append(div2);
			}

			element.append(div);


			//Odds data
			div = document.createElement("div");
			div.className = "metabet-gametile-odds";
			element.append(div);
			mb_paintGameTileOdds(element, query, game, style, showBestLines, location, (showGranular ? element.querySelector(".metabet-gametile-time select").value : null));


			//Add footer
			element.append(mb_createTileFooter(game["gameID"], element, location, query));

			//Track the render
			mb_trackRender(element, query);

		});

	});

}



function mb_paintGameTileOdds(element, query, game, style, showBestLines, location, period) {

	period = (!period ? "" : period);
	var div = element.querySelector(".metabet-gametile-odds");
	mb_emptyElement(div);
	var div2, div3, label, market;
	var odds, market;

	odds = mb_getBestGameOdds(game, mb_combineMarketPeriod("spreadLine1", period), showBestLines, location, element);
	if (odds) {

		div2 = document.createElement("div");
		div2.classList.add("metabet-market-spread");

		label = document.createElement("label");
		label.innerHTML = "<div>Spread</div>";
		if (style == "modern") {
			label.innerHTML += "<div>(" + game["team2Initials"] + " " + mb_formatSpread(odds["spread"]) + ")</div>";
		}
		div2.append(label);

		div3 = document.createElement("div");
		a = mb_createBetRedirect(odds, mb_combineMarketPeriod("spreadLine1", period), location, element, query, "Spread for " + mb_getAwayTeamDisplayName(game) + " (at " + mb_getHomeTeamDisplayName(game) + ")");
		a.className = "metabet-adtile-bet";
		if (style == "modern") {
			a.append(mb_stylePrice(style, odds[mb_combineMarketPeriod("spreadLine1", period)]));
		} else {
			a.innerHTML = mb_formatSpread(odds["spread"] * -1);
			a.innerHTML += "<em>(" + mb_stylePrice(style, odds[mb_combineMarketPeriod("spreadLine1", period)]) + ")</em>";
		}
		em = document.createElement("em");
		em.className = "metabet-team-initials";
		em.append("(" + game["team1Initials"] + ")");
		a.append(em);
		img = document.createElement("img");
		img.className = "metabet-adtile-bet-provider";
		img.alt = "";
		img.src = mb_getProviderLogo(odds["provider"], location);
		a.append(img);
		div3.append(a);
		div2.append(div3);

		odds = mb_getBestGameOdds(game, mb_combineMarketPeriod("spreadLine2", period), showBestLines, location, element);
		div3 = document.createElement("div");
		a = mb_createBetRedirect(odds, mb_combineMarketPeriod("spreadLine2", period), location, element, query, "Spread for " + mb_getHomeTeamDisplayName(game) + " (vs " + mb_getAwayTeamDisplayName(game) + ")");
		a.className = "metabet-adtile-bet";
		if (style == "modern") {
			a.append(mb_stylePrice(style, odds[mb_combineMarketPeriod("spreadLine2", period)]));
		} else {
			a.innerHTML = mb_formatSpread(odds["spread"]);
			a.innerHTML += "<em>(" + mb_stylePrice(style, odds[mb_combineMarketPeriod("spreadLine2", period)]) + ")</em>";
		}
		em = document.createElement("em");
		em.className = "metabet-team-initials";
		em.append("(" + game["team1Initials"] + ")");
		a.append(em);
		img = document.createElement("img");
		img.className = "metabet-adtile-bet-provider";
		img.alt = "";
		img.src = mb_getProviderLogo(odds["provider"], location);
		a.append(img);
		div3.append(a);
		div2.append(div3);

		div.append(div2);

	}

	odds = mb_getBestGameOdds(game, mb_combineMarketPeriod("moneyLine1", period), showBestLines, location, element);
	if (odds) {

		div2 = document.createElement("div");
		div2.classList.add("metabet-market-moneyline");

		label = document.createElement("label");
		label.innerHTML = "<div>Money</div> <div>Line</div>";
		div2.append(label);

		div3 = document.createElement("div");
		a = mb_createBetRedirect(odds, mb_combineMarketPeriod("moneyLine1", period), location, element, query, "Money Line for " + mb_getAwayTeamDisplayName(game) + " (at " + mb_getHomeTeamDisplayName(game) + ")");
		a.className = "metabet-adtile-bet";
		a.append(mb_stylePrice(style, odds[mb_combineMarketPeriod("moneyLine1", period)]));
		em = document.createElement("em");
		em.className = "metabet-team-initials";
		em.append("(" + game["team1Initials"] + ")");
		a.append(em);
		img = document.createElement("img");
		img.className = "metabet-adtile-bet-provider";
		img.alt = "";
		img.src = mb_getProviderLogo(odds["provider"], location);
		a.append(img);
		div3.append(a);
		div2.append(div3);

		if (odds.hasOwnProperty(mb_combineMarketPeriod("moneyLineTie", period))) {

			div2.classList.add("metabet-market-moneyline-ties");

			odds = mb_getBestGameOdds(game, mb_combineMarketPeriod("moneyLineTie", period), showBestLines, location, element);
			div3 = document.createElement("div");
			a = mb_createBetRedirect(odds, mb_combineMarketPeriod("moneyLineTie", period), location, element, query, "Money Line for Tie (" + mb_getAwayTeamDisplayName(game) + " at " + mb_getHomeTeamDisplayName(game) + ")");
			a.className = "metabet-adtile-bet";
			a.append(mb_stylePrice(style, odds[mb_combineMarketPeriod("moneyLineTie", period)]));
			em = document.createElement("em");
			em.className = "metabet-team-initials";
			em.append("(Draw)");
			a.append(em);
			img = document.createElement("img");
			img.className = "metabet-adtile-bet-provider";
			img.alt = "";
			img.src = mb_getProviderLogo(odds["provider"], location);
			a.append(img);
			div3.append(a);
			div2.append(div3);

		}

		odds = mb_getBestGameOdds(game, mb_combineMarketPeriod("moneyLine2", period), showBestLines, location, element);
		div3 = document.createElement("div");
		a = mb_createBetRedirect(odds, mb_combineMarketPeriod("moneyLine2", period), location, element, query, "Money Line for " + mb_getHomeTeamDisplayName(game) + " (vs " + mb_getAwayTeamDisplayName(game) + ")");
		a.className = "metabet-adtile-bet";
		a.append(mb_stylePrice(style, odds[mb_combineMarketPeriod("moneyLine2", period)]));
		em = document.createElement("em");
		em.className = "metabet-team-initials";
		em.append("(" + game["team2Initials"] + ")");
		a.append(em);
		img = document.createElement("img");
		img.className = "metabet-adtile-bet-provider";
		img.alt = "";
		img.src = mb_getProviderLogo(odds["provider"], location);
		a.append(img);
		div3.append(a);
		div2.append(div3);

		div.append(div2);
	}

	odds = mb_getBestGameOdds(game, mb_combineMarketPeriod("overUnderLineOver", period), showBestLines, location, element);
	if (odds) {

		div2 = document.createElement("div");
		div2.classList.add("metabet-market-overunder");
		div2.classList.add("metabet-gametile-odds-over-under");

		label = document.createElement("label");
		if (style == "vegas") {
			label.innerHTML = "Total";
		} else {
			label.innerHTML = "<div>Over</div>";
			if (style == "modern") {
				label.innerHTML += "<div>(" + ((odds[mb_combineMarketPeriod("overUnder", period)] * 2).toFixed()/2) + ")</div>";
			}
			label.innerHTML += "<div>Under</div>";
		}
		div2.append(label);

		div3 = document.createElement("div");

		a = mb_createBetRedirect(odds, mb_combineMarketPeriod("overUnderLineOver", period), location, element, query, "Over Total for " + mb_getAwayTeamDisplayName(game) + " at " + mb_getHomeTeamDisplayName(game));
		a.className = "metabet-adtile-bet";
		if (style == "modern") {
			a.append(mb_stylePrice(style, odds[mb_combineMarketPeriod("overUnderLineOver", period)]));
		} else if (style == "vegas") {
			a.innerHTML = ((odds[mb_combineMarketPeriod("overUnder", period)] * 2).toFixed()/2) + "o<em>(" + mb_stylePrice(style, odds[mb_combineMarketPeriod("overUnderLineOver", period)]) + ")</em>";
		} else {
			a.innerHTML = "> " + ((odds[mb_combineMarketPeriod("overUnder", period)] * 2).toFixed()/2) + "<em>(" + mb_stylePrice(style, odds[mb_combineMarketPeriod("overUnderLineOver", period)]) + ")</em>";
		}
		em = document.createElement("em");
		em.className = "metabet-over-under-label";
		em.append("(O/U)");
		a.append(em);
		img = document.createElement("img");
		img.className = "metabet-adtile-bet-provider";
		img.alt = "";
		img.src = mb_getProviderLogo(odds["provider"], location);
		a.append(img);
		div3.append(a);

		odds = mb_getBestGameOdds(game, mb_combineMarketPeriod("overUnderLineUnder", period), showBestLines, location, element);
		a = mb_createBetRedirect(odds, mb_combineMarketPeriod("overUnderLineUnder", period), location, element, query, "Under Total for " + mb_getAwayTeamDisplayName(game) + " at " + mb_getHomeTeamDisplayName(game));
		a.className = "metabet-adtile-bet";
		if (style == "modern") {
			a.append(mb_stylePrice(style, odds[mb_combineMarketPeriod("overUnderLineUnder", period)]));
		} else if (style == "vegas") {
			a.innerHTML = ((odds[mb_combineMarketPeriod("overUnder", period)] * 2).toFixed()/2) + "u<em>(" + mb_stylePrice(style, odds[mb_combineMarketPeriod("overUnderLineUnder", period)]) + ")</em>";
		} else {
			a.innerHTML = "< " + ((odds[mb_combineMarketPeriod("overUnder", period)] * 2).toFixed()/2) + "<em>(" + mb_stylePrice(style, odds[mb_combineMarketPeriod("overUnderLineUnder", period)]) + ")</em>";
		}
		em = document.createElement("em");
		em.className = "metabet-over-under-label";
		em.append("(O/U)");
		a.append(em);
		img = document.createElement("img");
		img.className = "metabet-adtile-bet-provider";
		img.alt = "";
		img.src = mb_getProviderLogo(odds["provider"], location);
		a.append(img);
		div3.append(a);

		div2.append(div3);
		div.append(div2);

	}

}



//Inserts ad unit showing the lines from multiple books for a single game
function mb_insertOddsCompare(target, showClosingOdds) {

	var elements = target ? new Array(target) : document.getElementsByClassName("metabet-oddscompare");

	Array.from(elements).forEach(function(element) {

		//Basic parameters for the tile, with defaults
		var query = null;
		var width = "336px";
		var height = "280px";
		var style = "classic";
		var market = null;
		var areProvidersSpecified = false;
		var fallback = "none";
		var country = "US";
		var location = null;

		var classes = element.classList;
		for (var i=0; i<classes.length; i++) {
			if (classes[i].indexOf("metabet-size-") == 0) {
				width = classes[i].split("-")[2].split("x")[0];
				if (width.indexOf("%") == -1) {
					width += "px";
				}
				height = classes[i].split("-")[2].split("x")[1] + "px";
			} else if (classes[i].indexOf("metabet-style-") == 0) {
				style = classes[i].replace("metabet-style-", "");
			} else if (classes[i].indexOf("metabet-query-") == 0) {
				query = classes[i].replace("metabet-query-", "");
			} else if (classes[i].indexOf("metabet-fallback-") == 0) {
				fallback = classes[i].replace("metabet-fallback-", "");
			} else if (classes[i].indexOf("metabet-country-") == 0) {
				country = classes[i].replace("metabet-country-", "");
			} else if (classes[i].indexOf("metabet-location-") == 0) {
				location = classes[i].replace("metabet-location-", "");
			} else if (classes[i].indexOf("metabet-market-") == 0) {
				market = classes[i].replace("metabet-market-", "");
			} else if (classes[i].indexOf("metabet-providers-") == 0) {
				areProvidersSpecified = true;
			}
		}
		location = mb_getCurrentLocation(country, location);


		//Subscribe to resize media queries
		element.setAttribute("metabet-observe-resizes", "");


		mb_getJSON("https://metabet.static.api.areyouwatchingthis.com/api/odds.json?apiKey=219f64094f67ed781035f5f7a08840fc&location=" + location + "&q=" + query + (showClosingOdds ? "&closing" : ""), function(oddsData) {

			//Find the completed game and the non-finished game
			//closest to the current time.  These two games will
			//be the only candidates for display by this tile.
			//Games are returned by the API in chronological order.
			var lastCompletedGame = null;
			var firstNonFinishedGame = null;
			var game;

			for (var i=0; i<oddsData["results"].length; i++) {
				game = oddsData["results"][i];
				if (!mb_isGameFinished(game) && !firstNonFinishedGame) {
					firstNonFinishedGame = game;
				} else if (mb_isGameFinished(game)) {
					lastCompletedGame = game;
				}
			}

			//Choose the game to display based on passed-in parameters
			game = null;
			if (!showClosingOdds) {
				if (firstNonFinishedGame) {
					game = firstNonFinishedGame;
				} else if ((fallback == "closing") && lastCompletedGame) {
					mb_insertOddsCompare(element, true);
					return;
				}
			} else if (showClosingOdds) {
				if (lastCompletedGame) {
					game = lastCompletedGame;
				}
			}


			//Exit if we can't find a game to display
			if (!game) {
				return "<!--- MetaBet: No odds for an upcoming game found for '" + query + "' --->";
			}


			var odds = null;
			if (!areProvidersSpecified) {
				//If providers aren't specified in the include,
				//choose providers to display at random
				odds = mb_shuffleArray(game["odds"]);
			} else {
				//If providers are specified, show them in order,
				//if they're available in this location
				odds = [];
				var providers = mb_getProvidersForLocation(location, element);
				for (var i=0; i<providers.length; i++) {
					for (var j=0; j<game["odds"].length; j++) {
						if (game["odds"][j]["provider"].indexOf(providers[i]) == 0) {
							odds.push(game["odds"][j]);
							break;
						}
					}
				}
			}


			//Set size parameters
			element.style.width = width;
			element.style.height = height;
			mb_addAdTileSizeModifiers(element);

			

			var div, span, img, a;

			//MetaBet header bar
			element.append(mb_createTileHeader(game, element, query));

			//Game details
			div = document.createElement("div");
			div.className = "metabet-oddscompare-game";

			//Game title
			span = document.createElement("span");
			span.className = "metabet-oddscompare-teams";
			if (mb_hasIndividualCompetitors(game)) {
				span.innerHTML = mb_getAwayTeamShortName(game) + " vs. " + mb_getHomeTeamShortName(game);
			} else {
				span.innerHTML = (game["team1Name"] ? game["team1Name"] : game["team1City"]) + " vs. " + (game["team2Name"] ? game["team2Name"] : game["team2City"]);
			}
			div.append(span);

			//Game time
			span = document.createElement("span");
			span.className = "metabet-oddscompare-time";
			span.append(!mb_isGameFinished(game) ? mb_getUpcomingDateTime(game) : "Final");
			div.append(span);

			element.append(div);


			//Show each provider with a URL
			var providers = document.createElement("div");
			providers.className = "metabet-oddscompare-providers";
			for (var i=0; i<odds.length; i++) {

				//Ignore any non-preferred providers or providers without a URL
				if (!odds[i]["url"] || (mb_getProvidersForLocation(location, element).indexOf(odds[i]["provider"]) == -1)) {
					continue;
				}

				//Stop adding providers once we've displayed three
				if (providers.getElementsByClassName("metabet-oddscompare-provider").length == 3) {
					break;
				}

				var line = null;
				var betCellText = null;



				if (("moneyline" == market) || ("moneyline-home" == market) || (!market && (game["sport"] == "soccer") || mb_hasIndividualCompetitors(game))) {
					if (!odds[i].hasOwnProperty("moneyLine2")) {
						continue;
					} else {
						line = "moneyLine2";
						betCellText = "<em>" + game["team2Initials"] + "</em>" + mb_stylePrice(style, odds[i]["moneyLine2"]);
					}
				} else if ("moneyline-away" == market) {
					if (!odds[i].hasOwnProperty("moneyLine1")) {
						continue;
					} else {
						line = "moneyLine1";
						betCellText = "<em>" + game["team1Initials"] + "</em>" + mb_stylePrice(style, odds[i]["moneyLine1"]);
					}
				} else if ("overunder" == market) {
					if (!odds[i].hasOwnProperty("overUnder")) {
						continue;
					} else {
						line = null;
						betCellText = "<em>O/U</em>" + (odds[i]["overUnder"] * 2).toFixed()/2;
					}
				} else {
					if (!odds[i].hasOwnProperty("spread") || !odds[i].hasOwnProperty("spreadLine2")) {
						continue;
					} else if ("spread-away" == market) {
						line = "spreadLine1";
						betCellText = "<em>" + game["team1Initials"] + "</em>" + mb_formatSpread(odds[i]["spread"]*-1) + "<em>(" + mb_stylePrice(style, odds[i]["spreadLine1"]) + ")</em>";
					} else {
						line = "spreadLine2";
						betCellText = "<em>" + game["team2Initials"] + "</em>" + mb_formatSpread(odds[i]["spread"]) + "<em>(" + mb_stylePrice(style, odds[i]["spreadLine2"]) + ")</em>";
					}
				}


				div = document.createElement("div");
				div.className = "metabet-oddscompare-provider";

				a = mb_createBetRedirect(odds[i], line, location, element, query, odds[i]["provider"].replace(RUWT_PROVIDER_SUFFIX_PATTERN, "") + " logo for " + mb_getAwayTeamDisplayName(game) + " at " + mb_getHomeTeamDisplayName(game));
				img = document.createElement("img");
				img.alt = "";
				img.src = mb_getProviderLogo(odds[i]["provider"], location);
				a.append(img);
				div.append(a);

				a = mb_createBetRedirect(odds[i], line, location, element, query, odds[i]["provider"].replace(RUWT_PROVIDER_SUFFIX_PATTERN, "") + " promo text for " + mb_getAwayTeamDisplayName(game) + " at " + mb_getHomeTeamDisplayName(game));
				a.className = "metabet-oddscompare-promo";
				a.innerHTML = mb_getProviderPromo(odds[i]["provider"]);
				div.append(a);

				a = mb_createBetRedirect(odds[i], line, location, element, query, odds[i]["provider"].replace(RUWT_PROVIDER_SUFFIX_PATTERN, "") + " price for " + mb_getAwayTeamDisplayName(game) + " at " + mb_getHomeTeamDisplayName(game));
				a.className = "metabet-adtile-bet metabet-oddscompare-odds";
				a.innerHTML = betCellText;
				div.append(a);

				providers.append(div);

			}
			element.append(providers);


			//Add footer
			element.append(mb_createTileFooter(game["gameID"], element, location, query));

			//Track the render
			mb_trackRender(element, query);

		});

	});

}





function mb_insertVideoTiles(target, showClosingOdds) {

	var elements = target ? new Array(target) : document.getElementsByClassName("metabet-videotile");

	Array.from(elements).forEach(function(element) {

		//Basic parameters for the tile, with defaults
		var query = null;
		var width = "400px";
		var height = "225px";

		var classes = element.classList;
		for (var i=0; i<classes.length; i++) {
			if (classes[i].indexOf("metabet-size-") == 0) {
				width = classes[i].split("-")[2].split("x")[0];
				if (width.indexOf("%") == -1) {
					width += "px";
				}
				height = classes[i].split("-")[2].split("x")[1] + "px";
			} else if (classes[i].indexOf("metabet-query-") == 0) {
				query = classes[i].replace("metabet-query-", "");
			}
		}

		if (query == null) {
			return;
		}


		//Retrieve odds data
		mb_getJSON("https://metabet.static.api.areyouwatchingthis.com/api/odds.json?apiKey=219f64094f67ed781035f5f7a08840fc&q=" + query, function(oddsData) {

			//Search for an upcoming game to display
			var game;

			if (oddsData["results"].length == 1) {
				game = oddsData["results"][0];
			} else {

				for (var i=0; i<oddsData["results"].length; i++) {

					if (!showClosingOdds) {

						//If the game is finished, we don't want to display it
						if (mb_isGameFinished(oddsData["results"][i])) {

							if (element.classList.contains("metabet-fallback-closing")) {
								//If showing closing odds is the fallback, though,
								//show them for this finished game
								mb_insertGameTiles(element, true);
								return;
							}
							continue;

						}

					} else {

						if (!mb_isGameFinished(oddsData["results"][i])) {
							//We will only show closing lines for final games
							continue;
						}

					}

					game = oddsData["results"][i];
					break;

				}

			}


			//Exit if we can't find a game to display
			if (!game) {
				return "<!--- MetaBet: No odds for an upcoming game found for '" + query + "' --->";
			}



			mb_getJSON("https://metabet.static.api.areyouwatchingthis.com/api/assets.json?gameID=" + game["gameID"] + "&type=YOUTUBE&apiKey=219f64094f67ed781035f5f7a08840fc", function(assetsData) {

				if (assetsData["results"].length == 0) {
					return;
				}


				//Set size parameters
				element.style.width = width;
				element.style.height = height;
				mb_addAdTileSizeModifiers(element);

				//Choose a recent asset at random
				var asset = assetsData["results"][Math.floor(Math.random()*Math.min(3, assetsData["results"].length))];

				//Show a thumbnail for the video
				var div = document.createElement("div");
				div.style.backgroundImage = "url('https://metabet.static.areyouwatchingthis.com/images/assets/" + asset["assetID"] + ".jpg')";

				var label = document.createElement("label");
				label.innerHTML = asset["title"];
				div.appendChild(label);

				var img = document.createElement("img");
				img.src = "https://go.metabet.io/03325fb169d4ca908f52c07a4505bb8f/img/play.svg";
				img.alt = "Play Video";
				img.className = "metabet-videotile-play";
				div.appendChild(img);

				element.appendChild(div);

				//Load the YouTube video if the thumbnail is clicked and track
				div.addEventListener("click", function() {
					var iframe = document.createElement("iframe");
					iframe.type = "text/html";
					iframe.src = asset["url"].replace(/watch[?]v=/, "/embed/") + "?autoplay=1";
					iframe.allow = "autoplay; encrypted-media; fullscreen";
					element.appendChild(iframe);
					element.removeChild(this);
					mb_trackClick(element, query, "Video - " + asset["title"]);
				});

			});

			//Track the render
			mb_trackRender(element, query);

		});

	});

}




function mb_insertInjuriesTiles(target) {

	var elements = target ? new Array(target) : document.getElementsByClassName("metabet-injuriestile");

	Array.from(elements).forEach(function(element) {

		//Basic parameters for the tile, with defaults
		var query = null;
		var priorityEntities = [];
		var width = "350px";
		var height = "350px";
		var style = "classic";
		var country = "US";
		var location = null;

		//Get passed-in parameters
		var classes = element.className.split(' ');
		for (var i=0; i<classes.length; i++) {
			if (classes[i].indexOf("metabet-size-") == 0) {
				width = classes[i].split("-")[2].split("x")[0];
				if (width.indexOf("%") == -1) {
					width += "px";
				}
				height = classes[i].split("-")[2].split("x")[1] + "px";
			} else if (classes[i].indexOf("metabet-style-") == 0) {
				style = classes[i].replace("metabet-style-", "");
			} else if (classes[i].indexOf("metabet-query-") == 0) {
				query = classes[i].replace("metabet-query-", "");
			} else if (classes[i].indexOf("metabet-country-") == 0) {
				country = classes[i].replace("metabet-country-", "");
			} else if (classes[i].indexOf("metabet-location-") == 0) {
				location = classes[i].replace("metabet-location-", "");
			} else if (classes[i].match("metabet-rows-[0-9]+")) {
				element.dataset.rows = parseInt(classes[i].replace(/metabet-rows-/, ""));
			}
		}
		location = mb_getCurrentLocation(country, location);


		//Subscribe to resize media queries
		element.setAttribute("metabet-observe-resizes", "");


		//Retrieve injury data
		mb_getJSON(mb_buildStaticAPIURL("/api/injuries.json?gameID=" + query), function(injuriesData) {

			//Exit if we don't have a subject game to display
			var game = injuriesData.hasOwnProperty("games") ? injuriesData["games"][0] : null;
			if (!game) {
				return;
			}

			//Get all valid providers
			var providers = mb_getProvidersForLocation(location, element);

			//MetaBet header bar
			element.append(mb_createTileHeader(game, element, query));

			//Set size parameters
			element.style.width = width;
			element.style.height = height;
			mb_addAdTileSizeModifiers(element);

			var div, div2, div3, span, strong, sup, img, date;

			//Insert game odds
			mb_getJSON(mb_buildStaticAPIURL("/api/odds.json?gameID=" + game["gameID"]), function(oddsData) {

				if (oddsData["results"].length == 0) {
					return;
				}

				game = oddsData["results"][0];
				var odds = mb_getBestGameOdds(game, "spreadLine1", true, location, element);
				if (odds) {

					div = document.createElement("div");
					div.classList.add("metabet-injuriestile-odds");

					div2 = document.createElement("div");
					div2.classList.add("metabet-market-spread");

					div3 = document.createElement("div");
					a = mb_createBetRedirect(odds, "spreadLine1", location, element, query, "Spread for " + mb_getAwayTeamDisplayName(game) + " (at " + mb_getHomeTeamDisplayName(game) + ")");
					a.className = "metabet-adtile-bet";
					if (style == "modern") {
						a.append(mb_stylePrice(style, odds["spreadLine1"]));
					} else {
						a.innerHTML = mb_formatSpread(odds["spread"] * -1);
						a.innerHTML += "<em>(" + mb_stylePrice(style, odds["spreadLine1"]) + ")</em>";
					}
					img = document.createElement("img");
					img.className = "metabet-adtile-bet-provider";
					img.alt = "";
					img.src = mb_getProviderLogo(odds["provider"], location);
					a.append(img);
					div3.append(a);
					div2.append(div3);

					div3 = document.createElement("div");
					div3.className = "metabet-injuriestile-time";
					div3.innerHTML = mb_getUpcomingDateTime(game, false);
					div2.append(div3);

					odds = mb_getBestGameOdds(game, "spreadLine2", true, location, element);
					div3 = document.createElement("div");
					a = mb_createBetRedirect(odds, "spreadLine2", location, element, query, "Spread for " + mb_getHomeTeamDisplayName(game) + " (vs " + mb_getAwayTeamDisplayName(game) + ")");
					a.className = "metabet-adtile-bet";
					if (style == "modern") {
						a.append(mb_stylePrice(style, "spreadLine2"));
					} else {
						a.innerHTML = mb_formatSpread(odds["spread"]);
						a.innerHTML += "<em>(" + mb_stylePrice(style, odds["spreadLine2"]) + ")</em>";
					}
					img = document.createElement("img");
					img.className = "metabet-adtile-bet-provider";
					img.alt = "";
					img.src = mb_getProviderLogo(odds["provider"], location);
					a.append(img);
					div3.append(a);
					div2.append(div3);

					div.append(div2);

					element.append(div);

				}

			});




			//Add game info
			div = document.createElement("div");
			div.className = "metabet-injuriestile-score";
			div2 = document.createElement("div");
			div2.classList.add("metabet-injuriestile-team-away");
			if (!mb_hasIndividualCompetitors(game)) {
				div2.append(mb_getTeamLogo(80, game["team1ID"], game["team1Color"], game["team1Initials"]));
			}
			div2.innerHTML += "<div class=\"metabet-show-width-small\">" + mb_getAwayTeamShortName(game) + "</div>";
			div2.innerHTML += "<div class=\"metabet-hide-width-small\">" + (game["team1Name"] ? game["team1Name"] : game["team1City"]) + "</div>";
			div.append(div2);

			div2 = document.createElement("div");
			div2.className = "metabet-injuriestile-title";
			div2.innerHTML = "Injuries";
			div.appendChild(div2);

			div2 = document.createElement("div");
			div2.classList.add("metabet-injuriestile-team-home");
			if (!mb_hasIndividualCompetitors(game)) {
				div2.append(mb_getTeamLogo(80, game["team2ID"], game["team2Color"], game["team2Initials"]));
			}
			div2.innerHTML += "<div class=\"metabet-show-width-small\">" + mb_getHomeTeamShortName(game) + "</div>";
			div2.innerHTML += "<div class=\"metabet-hide-width-small\">" + (game["team2Name"] ? game["team2Name"] : game["team2City"]) + "</div>";
			div.append(div2);

			element.appendChild(div);


			//Add players for each team
			div = document.createElement("div");
			div.className = "metabet-injuriestile-players";
			new Array(game["team1ID"], game["team2ID"]).forEach(function(teamID, index) {

				div2 = document.createElement("div");
				div2.className = "metabet-injuriestile-players" + (index+1);

				injuriesData["results"].forEach(function(player) {

					//Suppress some injuries
					if (player["injury"]["status"] == "60-Day IL") {
						return;
					}

					if (teamID == player["teamID"]) {

						div3 = document.createElement("div");

						strong = document.createElement("strong");
						span = document.createElement("span");
						span.innerHTML = player["lastName"];
						strong.appendChild(span);
						sup = document.createElement("sup");
						sup.innerHTML = player["position"];
						strong.appendChild(sup);
						div3.appendChild(strong);

						span = document.createElement("span");
						date = new Date(player["injury"]["date"]);
						span.innerHTML = player["injury"]["status"];
						if (player["injury"].hasOwnProperty("location")) {
							span.innerHTML += " (" + player["injury"]["location"] + ")";
						}
						span.title = mb_getShortDate(new Date(player["injury"]["date"]));
						div3.appendChild(span);

						div2.appendChild(div3);

					}
				});

				div.appendChild(div2);

			});
			element.appendChild(div);


			//If there aren't any injuries, show an "empty" message
			if (element.querySelectorAll(".metabet-injuriestile-players1 *, .metabet-injuriestile-players2 *").length == 0) {
				div2 = document.createElement("div");
				div2.className = "metabet-injuriestile-players-empty";
				div2.innerHTML = "There aren't any posted<br/>injuries for this game.";
				div.appendChild(div2);
			}


			//Add footer
			element.append(mb_createTileFooter(game["gameID"], element, location, query));

			//Track the render
			mb_trackRender(element, query);

		});

	});

}






function mb_insertSideOddsTiles(target) {

	var elements = target ? new Array(target) : document.getElementsByClassName("metabet-sideoddstile");

	Array.from(elements).forEach(function(element) {

		//Basic parameters for the tile, with defaults
		var query = null;
		var priorityEntities = [];
		var width = "336px";
		var height = "280px";
		var style = "classic";
		var country = "US";
		var location = null;

		//Get passed-in parameters
		var classes = element.className.split(' ');
		for (var i=0; i<classes.length; i++) {
			if (classes[i].indexOf("metabet-size-") == 0) {
				width = classes[i].split("-")[2].split("x")[0];
				if (width.indexOf("%") == -1) {
					width += "px";
				}
				height = classes[i].split("-")[2].split("x")[1] + "px";
			} else if (classes[i].indexOf("metabet-style-") == 0) {
				style = classes[i].replace("metabet-style-", "");
			} else if (classes[i].indexOf("metabet-query-") == 0) {
				query = classes[i].replace("metabet-query-", "");
			} else if (classes[i].indexOf("metabet-priority-") == 0) {
				priorityEntities = classes[i].replace("metabet-priority-", "").split("-");
			} else if (classes[i].indexOf("metabet-country-") == 0) {
				country = classes[i].replace("metabet-country-", "");
			} else if (classes[i].indexOf("metabet-location-") == 0) {
				location = classes[i].replace("metabet-location-", "");
			} else if (classes[i].match("metabet-rows-[0-9]+")) {
				element.dataset.rows = parseInt(classes[i].replace(/metabet-rows-/, ""));
			}
		}
		location = mb_getCurrentLocation(country, location);


		//Subscribe to resize media queries
		element.setAttribute("metabet-observe-resizes", "");


		//Retrieve odds data
		var url;
		if (query) {
			url = "https://metabet.static.api.areyouwatchingthis.com/api/sideodds.json?apiKey=219f64094f67ed781035f5f7a08840fc&location=" + location;
			url += (element.classList.contains("metabet-tracking-sideoddstile-highlight-player") ? "&highlightPlayer" : "");
			if (window.location.host == "dknation.draftkings.com") {
				if (document.title.indexOf("Super Bowl") != -1) {
					url += "&gameID=506671";
				} else {
					var adConfig = mb_getVoxAdConfigData();
					url += "&tags=" + adConfig["dfpVariables"]["entry_group"].join(",") + "&title=" + document.title;
				}
			} else {
				url += "&q=" + query;
			}
		} else {
			//If we don't have a query, or a tags/title pair, exit
			return;
		}

		mb_getJSON(url, function(sideOddsData) {

			//Get all valid providers
			var providers = mb_getProvidersForLocation(location, element);

			//Exit if we don't have any side odds to display
			var oddsToDisplay = false;
			for (var i=0; i<sideOddsData["results"].length; i++) {
				for (var j=0; j<sideOddsData["results"][i]["sideOdds"].length; j++) {
					if ((sideOddsData["results"][i]["sideOdds"][j]["provider"] != "CONSENSUS") && providers.indexOf(sideOddsData["results"][i]["sideOdds"][j]["provider"]) >= 0) {
						oddsToDisplay = true;
						break;
					}
				}
			}
			if (!oddsToDisplay) {
				return;
			}


			//Set size parameters
			element.style.width = width;
			element.style.height = height;
			mb_addAdTileSizeModifiers(element);

			

			var div, span, img, a;

			//MetaBet header bar
			element.append(mb_createTileHeader(null, element, query));

			//Set size parameters
			element.style.width = width;
			element.style.height = height;
			mb_addAdTileSizeModifiers(element);

			//Add the title
			div = document.createElement("div");
			div.className = "metabet-sideoddstile-title";
			span = document.createElement("span");

			var teamID = null;
			var isSingleMarketDisplay = false;
			var hideTeamLogo = false;
			var title;
			if (sideOddsData.hasOwnProperty("players") && (sideOddsData["players"].length == 1)) {
				//Showing multiple markets for one player
				title = mb_getPlayerName(sideOddsData["players"][0]);
				teamID = sideOddsData["players"][0]["teamID"];
			} else if (sideOddsData.hasOwnProperty("teams") && (sideOddsData["teams"].length == 1)) {
				//Showing multiple markets for one team
				title = mb_getTeamFullName(sideOddsData["teams"][0]);
				teamID = sideOddsData["teams"][0]["teamID"];
				hideTeamLogo = mb_hasIndividualCompetitors(sideOddsData["teams"][0]);
			} else if (sideOddsData["results"].length >= 1) {

				if (sideOddsData.hasOwnProperty("games") && (sideOddsData["games"].length == 1)) {
					//Showing one game-related market for multiple teams/players
					title = sideOddsData["results"][0]["title"] + (mb_hasIndividualCompetitors(sideOddsData["games"][0]) && sideOddsData["games"][0].hasOwnProperty("location") ? " - " + sideOddsData["games"][0]["location"] : "");
				} else {
					//Showing one market for multiple teams/players
					title = sideOddsData["results"][0]["title"];
				}

				isSingleMarketDisplay = true;

			} else {
				return "<!--- MetaBet: We don't know how to display a tile for '" + query + "' --->";
			}
			span.innerHTML = title;

			//Add a team logo if there is one
			if (teamID && !hideTeamLogo) {
				if (!RUWT_ENABLE_GENERIC_TEAM_LOGOS) {
					div.appendChild(mb_getTeamLogo(80, teamID));
				} else if (sideOddsData.hasOwnProperty("teams") && (sideOddsData["teams"].length == 1)) {
					div.appendChild(mb_getTeamLogo(80, sideOddsData["teams"][0]["teamID"], sideOddsData["teams"][0]["color"], sideOddsData["teams"][0]["initials"]));
				}
			}

			//Add the text label of the title
			div.appendChild(span);

			element.append(div);



			if (!isSingleMarketDisplay) {

				//Build out a list of game IDs that are included in the
				//results, as we want to display game-related markets first
				//and chronologically.  Also check which games are in progress
				//so we can exclude books that don't support in-play lines.
				var gameIDs = [];
				var gameIDsHasStarted = [];
				var games = sideOddsData["games"];
				if (games) {
					for (var j=0; j<games.length; j++) {
						gameIDs.push(games[j]["gameID"]);
						if (games[j].hasOwnProperty("timeLeft")) {
							gameIDsHasStarted.push(games[j]["gameID"]);
						}
					}
				}

				//Add null so we also show markets that aren't game-specific
				gameIDs.push(null);


				var markets = document.createElement("div");
				markets.className = "metabet-sideoddstile-markets";


				//Start adding market data
				outerloop:
				for (var k=0; k<gameIDs.length; k++) {

					for (var i=0; i<sideOddsData["results"].length; i++) {

						var market = sideOddsData["results"][i];

						//Make sure this market matches the current gameID
						if (market.hasOwnProperty("gameID") && (market["gameID"] != gameIDs[k])) {
							continue;
						} else if (!market.hasOwnProperty("gameID") && gameIDs[k]) {
							continue;
						}

						//Search the market for odds from an allowed provider
						var odds = null;
						for (var j=0; j<market["sideOdds"].length; j++) {
							if (market.hasOwnProperty("gameID") && (gameIDsHasStarted.indexOf(market["gameID"]) != -1) && (RUWT_PROVIDERS_NOT_UPDATING_IN_PLAY.indexOf(market["sideOdds"][j]["provider"]) != -1)) {
								continue;
							} else if ((market["sideOdds"][j]["provider"] != "CONSENSUS") && (providers.indexOf(market["sideOdds"][j]["provider"]) != -1)) {
								odds = market["sideOdds"][j];
								break;
							}
						}

						//If we search through the market and can't find any
						//odds from an allowed provider, skip the market
						if (odds == null) {
							continue;
						}


						div = document.createElement("div");
						div.className = "metabet-sideoddstile-market";

						a = mb_createBetRedirect(odds, null, location, element, query, odds["provider"].replace(RUWT_PROVIDER_SUFFIX_PATTERN, "") + " logo for " + title + " - " + market["title"]);
						img = document.createElement("img");
						img.alt = "";
						img.src = mb_getProviderLogo(odds["provider"], location);
						a.append(img);
						div.append(a);

						a = mb_createBetRedirect(odds, null, location, element, query, odds["provider"].replace(RUWT_PROVIDER_SUFFIX_PATTERN, "") + " label for " + title + " - " + market["title"]);
						a.innerHTML = (odds.hasOwnProperty("value") ? "O/U " : "") + market["title"];
						if (odds.hasOwnProperty("gameID")) {
							for (var j=0; j<games.length; j++) {
								if (odds["gameID"] == games[j]["gameID"]) {
									if (games[j].hasOwnProperty("team1Initials") && games[j].hasOwnProperty("team2Initials")) {
										if (games[j]["team1ID"] == teamID) {
											a.innerHTML += " (@ " + games[j]["team2Initials"] + ")";
										} else if (games[j]["team2ID"] == teamID) {
											a.innerHTML += " (vs. " + games[j]["team1Initials"] + ")";
										} else {
											a.innerHTML += " (" + games[j]["team1Initials"] + "@" + games[j]["team2Initials"] + ")";
										}
									} else {
										a.innerHTML += " - " + games[j]["location"];
									}
									break;
								}
							}
						}
						div.append(a);

						a = mb_createBetRedirect(odds, null, location, element, query, odds["provider"].replace(RUWT_PROVIDER_SUFFIX_PATTERN, "") + " price for " + title + " - " + market["title"]);
						a.className = "metabet-adtile-bet";
						if (odds.hasOwnProperty("value")) {
							a.innerHTML = odds["value"];
						} else {
							a.innerHTML = mb_stylePrice(style, odds.hasOwnProperty("price1") ? odds["price1"] : odds["price"]);
						}
						div.append(a);

						markets.append(div);

						//Stop processing once we get to the maximum number of rows
						if (markets.children.length >= (element.dataset.rows ? element.dataset.rows : 3)) {
							break outerloop;
						}

					}

				}

				element.append(markets);

			} else {

				//This is a single market display (i.e. NBA MVP)

				var options = document.createElement("div");
				options.className = "metabet-sideoddstile-options";


				var entityIDs = [];
				var entityName;
				var market = sideOddsData["results"][0];
				for (var i=0; i<market["sideOdds"].length; i++) {

					var odds = market["sideOdds"][i];

					if (odds.hasOwnProperty("playerID") && (entityIDs.indexOf(odds["playerID"]) != -1)) {
						//We've already displayed a price for this player
						continue;
					} else if (odds.hasOwnProperty("teamID") && (entityIDs.indexOf(odds["teamID"]) != -1)) {
						//We've already displayed a price for this team
						continue;
					} else if (providers.indexOf(odds["provider"]) == -1) {
						//Don't show prices for providers unavailable in this location
						continue;
					} else if (!odds.hasOwnProperty("url")) {
						//Don't show prices we can't deep-link to
						continue;
					} else if (odds["provider"] == "CONSENSUS") {
						//Don't show the consensus price
						continue;
					}

					var div = document.createElement("div");
					div.className = "metabet-sideoddstile-option";

					//Add a label for this entity
					if (odds.hasOwnProperty("playerID")) {

						//Find this player's name
						for (var j=0; j<sideOddsData["players"].length; j++) {
							if (sideOddsData["players"][j]["playerID"] == odds["playerID"]) {

								entityName = mb_getPlayerName(sideOddsData["players"][j], true);

								//If this entity is prioritized, move it to the top
								for (var k=0; k<priorityEntities.length; k++) {
									if (priorityEntities[k].toLowerCase() == mb_getPlayerName(sideOddsData["players"][j], false).toLowerCase().replace(/[ -]+/, "_")) {
										div.style.order = (1000-k)*-1;
										break;
									}
								}

								a = mb_createBetRedirect(odds, null, location, element, query, "Team logo for " + entityName + " - " + title);
								img = document.createElement("img");
								img.classList.add("metabet-team-logo");
								img.width = "25";
								img.height = "25";
								img.alt = "";
								if (sideOddsData["players"][j].hasOwnProperty("teamID") && !RUWT_ENABLE_GENERIC_TEAM_LOGOS) {
									img.src = mb_getTeamLogoURL(80, sideOddsData["players"][j]["teamID"]);
								} else {
									img.style.visibility = "hidden";
								}
								a.append(img);
								div.append(a);

								a = mb_createBetRedirect(odds, null, location, element, query, entityName + " - " + title);
								a.innerHTML = entityName;
								div.append(a);

								break;

							}
						}

					} else if (odds.hasOwnProperty("teamID")) {

						//Find this team's name
						for (var j=0; j<sideOddsData["teams"].length; j++) {
							if (sideOddsData["teams"][j]["teamID"] == odds["teamID"]) {

								entityName = mb_getTeamDisplayName(sideOddsData["teams"][j]);

								//If this entity is prioritized, move it to the top
								for (var k=0; k<priorityEntities.length; k++) {
									if (priorityEntities[k].toLowerCase() == entityName.toLowerCase().replace(/[ -]+/, "_")) {
										div.style.order = (1000-k)*-1;
										break;
									}
								}

								a = mb_createBetRedirect(odds, null, location, element, query, "Team logo for " + entityName + " - " + title);
								a.append(mb_getTeamLogo(80, sideOddsData["teams"][j]["teamID"], sideOddsData["teams"][j]["color"], sideOddsData["teams"][j]["initials"]));
								div.append(a);

								a = mb_createBetRedirect(odds, null, location, element, query, entityName + " - " + title);
								a.innerHTML = entityName;
								div.append(a);
								break;

							}
						}

					} else if (odds.hasOwnProperty("gameID") && !odds.hasOwnProperty("value")) {

						a = mb_createBetRedirect(odds, null, location, element, query, odds["provider"].replace(RUWT_PROVIDER_SUFFIX_PATTERN, "") + " logo for " + title + " - " + market["title"]);
						img = document.createElement("img");
						img.alt = "";
						img.src = mb_getProviderLogo(odds["provider"], location);
						a.append(img);
						div.append(a);

						a = mb_createBetRedirect(odds, null, location, element, query, "Yes");
						a.innerHTML = "Yes";
						div.append(a);

					}


					//Add the odds value
					a = mb_createBetRedirect(odds, null, location, element, query, "Price for " + entityName + " - " + title);
					a.className = "metabet-adtile-bet";
					a.innerHTML = odds.hasOwnProperty("value") ? odds["value"] : mb_stylePrice(style, odds.hasOwnProperty("price1") ? odds["price1"] : odds["price"]);
					img = document.createElement("img");
					img.className = "metabet-adtile-bet-provider";
					img.alt = "";
					img.src = mb_getProviderLogo(odds["provider"], location);
					a.append(img);
					div.append(a);

					//Store the ID of this player/team so it's not displayed again
					entityIDs.push(odds.hasOwnProperty("playerID") ? odds["playerID"] : odds["teamID"]);

					//Add this new option to the top of the list,
					//as we're working from largest prices to smallest
					options.insertBefore(div, options.firstChild);

				}

				//If a row limit has been requested, remove extra rows.
				//We have to do this after the fact because we add rows
				//in reverse order to make sure we show the highest price.
				if (element.dataset.rows) {
					while (options.children.length > element.dataset.rows) {
						options.removeChild(options.lastChild);
					}
				}

				element.appendChild(options);


			}


			//Build a subject to be included while creating the footer,
			//only using links from valid providers.  The subject is used
			//for some customers to create a proper ExpressLink in the footer.
			var subject = null;
			for (var i=0; (i<sideOddsData["results"].length && (subject == null)); i++) {
				for (var j=0; j<sideOddsData["results"][i]["sideOdds"].length; j++) {
					if (sideOddsData["results"][i]["sideOdds"][j].hasOwnProperty("url") && (providers.indexOf(sideOddsData["results"][i]["sideOdds"][j]["provider"]) != -1)) {
						try {
							subject = sideOddsData["results"][i]["sideOdds"][j]["url"].replace(/.*[/]bet[/]/, "").replace(/[/][a-z0-9_]+$/, "");
							break;
						} catch (error) {}
					}
				}
			}

			//Add footer
			element.append(mb_createTileFooter(subject, element, location, query));

			//Track the render
			mb_trackRender(element, query);

		});

	});


}








function mb_insertPollingTiles(target) {

	var elements = target ? new Array(target) : document.getElementsByClassName("metabet-pollingtile");

	Array.from(elements).forEach(function(element) {

		//Basic parameters for the tile, with defaults
		var query = "nfl";
		var showPromo = false;
		var priorityEntities = [];
		var width = "300px";
		var height = "300px";
		var style = "classic";
		var country = "US";
		var location = null;

		//Get passed-in parameters
		var classes = element.className.split(' ');
		for (var i=0; i<classes.length; i++) {
			if (classes[i].indexOf("metabet-size-") == 0) {
				width = classes[i].split("-")[2].split("x")[0];
				if (width.indexOf("%") == -1) {
					width += "px";
				}
				height = classes[i].split("-")[2].split("x")[1] + "px";
			} else if (classes[i].indexOf("metabet-style-") == 0) {
				style = classes[i].replace("metabet-style-", "");
			} else if (classes[i].indexOf("metabet-query-") == 0) {
				query = classes[i].replace("metabet-query-", "");
			} else if (classes[i].indexOf("metabet-country-") == 0) {
				country = classes[i].replace("metabet-country-", "");
			} else if (classes[i].indexOf("metabet-location-") == 0) {
				location = classes[i].replace("metabet-location-", "");
			} else if (classes[i].match("metabet-rows-[0-9]+")) {
				element.dataset.rows = parseInt(classes[i].replace(/metabet-rows-/, ""));
			}
		}
		location = mb_getCurrentLocation(country, location);


		//Retrieve odds data
		mb_getJSON(mb_buildStaticAPIURL("/api/odds.json?q=" + query), function(oddsData) {

			if (oddsData["results"].length == 0) {
				return;
			}

			var game = oddsData["results"][0];
			if (!game.hasOwnProperty("team1ID") || !game.hasOwnProperty("team2ID")) {
				return;
			}

			//Which question will we ask?
			var questions = new Array();
			if (game["odds"][0].hasOwnProperty("spread") && (Math.abs(game["odds"][0]["spread"]) >= 2) && game["odds"][0].hasOwnProperty("spreadLine1") && game["odds"][0].hasOwnProperty("spreadLine2")) {
				questions.push("spread");
			}
			if (game["odds"][0].hasOwnProperty("moneyLine1") && game["odds"][0].hasOwnProperty("moneyLine2")) {
				questions.push("moneyLine");
			}
			if (game["odds"][0].hasOwnProperty("overUnder") && game["odds"][0].hasOwnProperty("overUnderLineOver") && game["odds"][0].hasOwnProperty("overUnderLineUnder")) {
				questions.push("overUnder");
			}

			if (questions.length == 0) {
				return;
			}
			market = mb_shuffleArray(questions)[0];


			//Subscribe to resize media queries
			element.setAttribute("metabet-observe-resizes", "");

			//Set size parameters
			element.style.width = width;
			element.style.height = height;
			mb_addAdTileSizeModifiers(element);

			element.append(mb_createTileHeader(game, element, query));

			var div, span, ul, li, img, a, strong, em;


			div = document.createElement("div");
			div.className = "metabet-pollingtile-title";
			div.innerHTML = mb_getAwayTeamDisplayName(game) + " vs. " + mb_getHomeTeamDisplayName(game);
			element.appendChild(div);

			div = document.createElement("div");
			div.className = "metabet-pollingtile-date";
			div.innerHTML = mb_getUpcomingDateTime(game, false);
			element.appendChild(div);

			div = document.createElement("div");
			div.className = "metabet-pollingtile-prompt";
			if (market == "spread") {
				div.innerHTML = "What will the winning margin be?";
			} else if (market == "moneyLine") {
				div.innerHTML = "Who will win?";
			} else if (market == "overUnder") {
				div.innerHTML = "How many total " + mb_getScoringUnitPlural(game["sport"]) + " will be scored?";
			}
			element.appendChild(div);

			ul = document.createElement("ul");
			ul.className = "metabet-pollingtile-options";
			ul.dataset.market = market;
			ul.dataset.gameID = game["gameID"];
			ul.dataset.count = 0;

			li = document.createElement("li");
			li.className = "metabet-adtile-bet";
			li.dataset.betType = (market == "moneyLine") ? "moneyLine1" : "overUnderLineOver";
			li.dataset.count = 0;

			if (market == "spread") {
				span = document.createElement("span");
				span.className = "metabet-pollingtile-team-name";
				if (game["odds"][0]["spread"] > 0) {
					span.innerHTML = game["team1Initials"] + " win by more than " + Math.floor(Math.abs(game["odds"][0]["spread"]));
				} else {
					span.innerHTML = game["team1Initials"] + " win, or lose by less than " + Math.floor(Math.abs(game["odds"][0]["spread"]));
				}
				li.dataset.title = mb_getAwayTeamFullName(game);
				li.appendChild(span);
				span = document.createElement("span");
				span.className = "metabet-pollingtile-team-initials";
				span.innerHTML = game["team1Initials"];
				li.appendChild(span);
			} else if (market == "moneyLine") {
				li.appendChild(mb_getTeamLogo(80, game["team1ID"], game["team1Color"], game["team1Initials"]));
				span = document.createElement("span");
				span.className = "metabet-pollingtile-team-name";
				span.innerHTML = mb_getAwayTeamFullName(game);
				li.dataset.title = mb_getAwayTeamFullName(game);
				li.appendChild(span);
				span = document.createElement("span");
				span.className = "metabet-pollingtile-team-initials";
				span.innerHTML = game["team1Initials"];
				li.appendChild(span);
			} else if (market == "overUnder") {
				span = document.createElement("span");
				span.innerHTML = "More than " + (game["odds"][0]["overUnder"] * 2).toFixed()/2;
				li.dataset.title = "Over";
				li.appendChild(span);
			}
			li.addEventListener("click", function(e) {
				if (mb_showPollingTileResults(element, this.dataset.betType, location, query, game)) {
					if (market == "spread") {
						mb_trackPollingAnswer(game["gameID"], "spreadLine1", game["odds"][0]["spreadLine1"]);
					} else if (market == "moneyLine") {
						mb_trackPollingAnswer(game["gameID"], "moneyLine1", game["odds"][0]["moneyLine1"]);
					} else if (market == "overUnder") {
						mb_trackPollingAnswer(game["gameID"], "overUnderLineOver", game["odds"][0]["overUnderLineOver"]);
					}
				}
			});
			ul.appendChild(li);


			li = document.createElement("li");
			li.className = "metabet-adtile-bet";
			li.dataset.betType = (market == "moneyLine") ? "moneyLine2" : "overUnderLineUnder";
			li.dataset.count = 0;
			if (market == "spread") {
				span = document.createElement("span");
				span.className = "metabet-pollingtile-team-name";
				if (game["odds"][0]["spread"] < 0) {
					span.innerHTML = game["team2Initials"] + " win by more than " + Math.floor(Math.abs(game["odds"][0]["spread"]));
				} else {
					span.innerHTML = game["team2Initials"] + " win, or lose by less than " + Math.floor(Math.abs(game["odds"][0]["spread"]));
				}
				li.dataset.title = mb_getHomeTeamFullName(game);
				li.appendChild(span);
				span = document.createElement("span");
				span.className = "metabet-pollingtile-team-initials";
				span.innerHTML = game["team2Initials"];
				li.appendChild(span);
			} else if (market == "moneyLine") {
				li.appendChild(mb_getTeamLogo(80, game["team2ID"], game["team2Color"], game["team2Initials"]));
				span = document.createElement("span");
				span.className = "metabet-pollingtile-team-name";
				span.innerHTML = mb_getHomeTeamFullName(game);
				li.dataset.title = mb_getHomeTeamFullName(game);
				li.appendChild(span);
				span = document.createElement("span");
				span.className = "metabet-pollingtile-team-initials";
				span.innerHTML = game["team2Initials"];
				li.appendChild(span);
			} else if (market == "overUnder") {
				span = document.createElement("span");
				span.innerHTML = "Less than " + (game["odds"][0]["overUnder"] * 2).toFixed()/2;
				li.dataset.title = "Under";
				li.appendChild(span);
			}
			li.addEventListener("click", function(e) {
				if (mb_showPollingTileResults(element, this.dataset.betType, location, query, game)) {
					if (market == "spread") {
						mb_trackPollingAnswer(game["gameID"], "spreadLine2", game["odds"][0]["spreadLine2"]);
					} else if (market == "moneyLine") {
						mb_trackPollingAnswer(game["gameID"], "moneyLine2", game["odds"][0]["moneyLine2"]);
					} else if (market == "overUnder") {
						mb_trackPollingAnswer(game["gameID"], "overUnderLineUnder", game["odds"][0]["overUnderLineUnder"]);
					}
				}
			});
			ul.appendChild(li);

			element.appendChild(ul);

			mb_getJSON(mb_buildStaticAPIURL("/api/polling-answers.json?gameID=" + game["gameID"]), function(pollingData) {

				if (pollingData["results"].length > 0) {
					element.querySelectorAll(".metabet-pollingtile-options li").forEach(function(option) {
						for (var betType in pollingData["results"][0]) {
							if (option.dataset.betType == betType) {
								option.dataset.count = pollingData["results"][0][betType];
								ul.dataset.count = parseInt(ul.dataset.count) + parseInt(option.dataset.count);
								break;
							}
						}
					});
				}

				var currentAnswer = mb_getPollingTileAnswer(ul.dataset.gameID, ul.dataset.market);
				if (currentAnswer) {
					mb_showPollingTileResults(element, currentAnswer, location, query, game);
				}

			});



			if (showPromo) {

				//Make sure class is present, an extra step needed because
				//some customers have the promo enabled by default
				element.classList.toggle("metabet-show-promo", true);

				//Choose a provider at random
				var odds = game["odds"][Math.floor(Math.random()*(game["odds"].length-1))+1];


				//Add Locked Promo state
				div = document.createElement("div");
				div.className = "metabet-pollingtile-promo metabet-pollingtile-promo-locked";

				strong = document.createElement("strong");
				strong.innerHTML = "Vote to Reveal Bonus Details";
				div.appendChild(strong);

				img = document.createElement("img");
				img.src = "https://go.metabet.io/03325fb169d4ca908f52c07a4505bb8f/img/lock.svg";
				img.width = 36;
				img.height = 36;
				div.appendChild(img);

				em = document.createElement("em");
				em.innerHTML = mb_getProviderPromo(odds["provider"]);
				div.appendChild(em);

				a = document.createElement("a");
				a.className = "metabet-pollingtile-claim";
				a.innerHTML = "Claim It!";
				div.appendChild(a);

				element.appendChild(div);


				//Add Unlcoked Promo state
				div = document.createElement("div");
				div.className = "metabet-pollingtile-promo metabet-pollingtile-promo-unlocked";

				strong = document.createElement("strong");
				strong.innerHTML = "Check out this " + mb_getCurrentLocation(country, location) + " Bonus Offer";
				div.appendChild(strong);

				a = mb_createBetRedirect(odds, null, location, element, query, "Polling Tile Promo Unlock");
				img = document.createElement("img");
				img.src = mb_getProviderLogo(odds["provider"], location);
				img.width = 36;
				img.height = 36;
				a.appendChild(img);
				div.appendChild(a);

				em = document.createElement("em");
				em.innerHTML = mb_getProviderPromo(odds["provider"]);
				div.appendChild(em);

				a = mb_createBetRedirect(odds, null, location, element, query, "Polling Tile Promo Unlock");
				a.className = "metabet-pollingtile-claim";
				a.innerHTML = "Claim It!";
				div.appendChild(a);

				element.appendChild(div);

			}


			div = document.createElement("div");
			div.className = "metabet-pollingtile-cta";
			element.appendChild(div);

			//Add footer
			element.append(mb_createTileFooter(game["gameID"], element, location, query));

			//Track the render
			mb_trackRender(element, query);

		});


	});

}

function mb_showPollingTileResults(element, betType, location, query, game) {

	//Make sure counts are displayed
	element.classList.toggle("metabet-pollingtile-show-counts", true);

	var ul = element.querySelector(".metabet-pollingtile-options");

	//Style the counts
	ul.querySelectorAll("li").forEach(function(option) {

		option.classList.toggle("metabet-pollingtile-option-selected", (option.dataset.betType == betType));

		var span, em;

		var div = option.querySelector(".metabet-pollingtile-percentage");
		if (!div) {

			div = document.createElement("div");
			div.className = "metabet-pollingtile-percentage";
			option.appendChild(div);

			span = document.createElement("span");
			div.appendChild(span);

			em = document.createElement("em");
			div.appendChild(em);

		} else {
			span = div.querySelector("span");
			em = div.querySelector("em");
		}

		var percentage = Math.round((parseInt(option.dataset.count) + (option.classList.contains("metabet-pollingtile-option-selected") ? 1 : 0))*100/(parseInt(ul.dataset.count) + 1));
		window.setTimeout( 100);
		em.innerHTML = percentage + "%";

	});


	//Store the selection
	var isFirstChoice = (mb_getPollingTileAnswer(ul.dataset.gameID, ul.dataset.market) === null);
	mb_setPollingTileAnswer(ul.dataset.gameID, ul.dataset.market, betType);


	//Animate the promo unlock CTA if this is the first time choosing
	if (isFirstChoice) {
		var promo = element.querySelector(".metabet-pollingtile-promo-unlocked");
		if (promo) {
			promo.classList.add("metabet-pollingtile-promo-unlocking");
		}
	}




	//Populate the CTA
	var div, a, img;

	div = element.querySelector(".metabet-pollingtile-cta");
	mb_emptyElement(div);
	
		var currentAnswer = mb_getPollingTileAnswer(ul.dataset.gameID, ul.dataset.market);
		var title = ul.querySelector(".metabet-pollingtile-option-selected").dataset.title;
		var bestOdds = mb_getBestGameOdds(game, currentAnswer, true, location, element);

		a = mb_createBetRedirect(bestOdds, currentAnswer, location, element, query, "Polling Tile CTA for " + query + " (" + title + ")");
		if (title) {
			a.innerHTML = "Bet on the " + title + "!";
		} else {
			a.innerHTML = "Bet This Game!";
		}
		img = document.createElement("img");
		img.src = mb_getProviderLogo(bestOdds["provider"], location);
		a.insertBefore(img, a.firstChild);
		div.appendChild(a);

	

	return isFirstChoice;

}


function mb_getPollingTileAnswer(gameID, market) {

	if (!localStorage.hasOwnProperty("metabet-pollingtile")) {
		return null;
	}

	var data = JSON.parse(localStorage["metabet-pollingtile"]);
	if (!data["selections"]["games"].hasOwnProperty(gameID)) {
		return null;
	}
	if (!data["selections"]["games"][gameID].hasOwnProperty(market)) {
		return null;
	}
	return data["selections"]["games"][gameID][market];

}

function mb_setPollingTileAnswer(gameID, market, betType) {

	var data;
	if (!localStorage.hasOwnProperty("metabet-pollingtile")) {
		data = {};
		data["selections"] = {};
		data["selections"]["games"] = {};
	} else {
		data = JSON.parse(localStorage["metabet-pollingtile"]);
	}

	if (!data["selections"]["games"].hasOwnProperty(gameID)) {
		data["selections"]["games"][gameID] = {}
	}

	data["selections"]["games"][gameID][market] = betType;
	localStorage["metabet-pollingtile"] = JSON.stringify(data);

}






function mb_createTileHeader(game, element, query) {

	
	//If we're displaying a game that has finished,
	//we should disable all outbound betting links
	if (game && mb_isGameFinished(game)) {
		element.classList.add("metabet-adtile-game-finished");
	}

	var header = document.createElement("div");
	header.className = "metabet-adtile-header";

	var a;

	
	//Customer Logo
	a = document.createElement("a");
	a.classList.add("metabet-adtile-header-logo");
	a.rel = "noopener";
	a.href = RUWT_HERO_URL;
	a.setAttribute("aria-label", "Logo");
		a.addEventListener("click", function() {
		mb_trackClick(element, query, "Header - Hero");
	});
	a.target = "_blank";
	header.append(a);

	//Time or TimeLeft
	if (game) {
		var time = document.createElement("span");
		time.className = "metabet-gametile-time";
		time.append(mb_hasGameStarted(game) ? mb_getTimeLeftCompact(game) : mb_getUpcomingDateTime(game, true));
		if (!mb_hasGameStarted(game)) {
			time.title = mb_getUpcomingDateTime(game, false);
		}
		header.append(time);
	}

	return header;

}


function mb_createTileFooter(subject, element, location, query) {

	div = document.createElement("div");
	div.className = "metabet-adtile-footer";

	a = document.createElement("a");
	a.rel = "noopener";
	a.className = "metabet-adtile-footer-watermark";
	if (RUWT_ENABLE_ATTRIBUTION_LINKS) {
		a.href = mb_createMetaBetWebsiteReferralURL("adtile-watermark", query);
		a.addEventListener("click", function() {
			mb_trackClick(element, query, "Footer - Watermark");
		});
	}
	a.title = "Powered by MetaBet.io";
	a.target = "_blank";
	img = document.createElement("img");
	img.width = "58";
	img.height = "16";
	img.src = "https://go.metabet.io/03325fb169d4ca908f52c07a4505bb8f/img/logo-watermark.svg";
	a.append(img);
	div.append(a);


	

	a = document.createElement("a");
	a.className = "metabet-adtile-footer-all-lines";
	a.rel = "noopener";
	a.setAttribute("aria-label", "See More Lines");
			a.href = RUWT_SEE_ALL_LINES_URL;
		a.addEventListener("click", ;
	a.target = "_blank";
	div.append(a);

	return div;

}


//Adds size-related classes to an Ad Tile based on its height and width
function mb_addAdTileSizeModifiers(element, contentRect) {

	//Get the width and height of the element
	var width;
	var height;

	if (!contentRect) {

		//This is the first, initial call to set size-related classes
		if (element.style.width.indexOf("%") > 0) {

			//If the width of this tile is expressed as a percentage,
			//get the width of the parent and calculate the implied width
			//that we'll use for orientation and 'small'-ness math.
			width = element.parentElement.clientWidth * parseInt(element.style.width.replace("%", "")) / 100;

			//Enable any available responsive CSS rules
			element.classList.add("metabet-responsive");

		} else {
			width = element.style.width.replace("px", "");
		}
		height = element.style.height.replace("px", "");

	} else {
		//This is being re-called because the width of a
		//responsive tile has changed.
		width = contentRect.width;
		height = contentRect.height;
	}


	//Add the tile's rough orientation
	var orientation = "square";
	if ((height < 150) && (width*.8 > height)) {
		orientation = "landscape";
	} else if ((height > 300) && (width < height*1.2)) {
		orientation = "portrait";
	}
	element.classList.remove("metabet-orientation-square", "metabet-orientation-landscape", "metabet-orientation-portrait");
	element.classList.add("metabet-orientation-" + orientation);


	//Calculate 'small'-ness dependent on the type of tile
	if (element.classList.contains("metabet-oddscompare")) {
		element.classList.toggle("metabet-height-small", (height <= 250));
		element.classList.toggle("metabet-width-small", (width <= 300));
	} else {
		element.classList.toggle("metabet-height-small", (height < 90));
		element.classList.toggle("metabet-width-small", (width < 400));
	}

	//Add the parent class for all tiles
	element.classList.add("metabet-adtile");

}





//Inserts an Odds Board for a sport
function mb_insertOddsBoard(target) {

	var elements = target ? new Array(target) : document.getElementsByClassName("metabet-odds-board");

	Array.from(elements).forEach(function(element) {

		var a, div, option, select;

		//Build dictionary of all sports/leagues
		var ALL_SPORTS = ["MLB", "NBA", "NFL", "NHL", "NCAAB", "NCAAF", "EPL", "Ligue 1", "Bundesliga", "Serie A", "La Liga", "Champions League", "MLS", "Liga MX"];
		var ALL_LEAGUE_CODES = ["BBM", "BKP", "FBP", "HKN", "BKC", "FBC", "SOE", "SOF", "SOG", "SOI", "SOS", "SCB", "SOM", "SOX"];
		if (new Array("actionrush", "dailyfantasyinsider", "dfsarmy", "freeplays", "krackwins", "playerssportsocial", "todaysodds", "vsao").indexOf(RUWT_SITE_ID) >= 0) {
			//Big 6
			ALL_SPORTS = ["MLB", "NBA", "NFL", "NHL", "NCAAB", "NCAAF"];
			ALL_LEAGUE_CODES = ["BBM", "BKP", "FBP", "HKN", "BKC", "FBC"];
		} else if (new Array("elitesports", "elitefantasy", "fantasyguru", "fanlinksports").indexOf(RUWT_SITE_ID) >= 0) {
			//Big 6 + Euro Soccer
			ALL_SPORTS = ["MLB", "NBA", "NFL", "NHL", "NCAAB", "NCAAF", "EPL", "Ligue 1", "Bundesliga", "Serie A", "La Liga"];
			ALL_LEAGUE_CODES = ["BBM", "BKP", "FBP", "HKN", "BKC", "FBC", "SOE", "SOF", "SOG", "SOI", "SOS"];
		} else if (new Array("benzinga").indexOf(RUWT_SITE_ID) >= 0) {
			//Big 6 + Euro Soccer, MLS
			ALL_SPORTS = ["MLB", "NBA", "NFL", "NHL", "NCAAB", "NCAAF", "EPL", "Ligue 1", "Bundesliga", "Serie A", "La Liga", "MLS"];
			ALL_LEAGUE_CODES = ["BBM", "BKP", "FBP", "HKN", "BKC", "FBC", "SOE", "SOF", "SOG", "SOI", "SOS", "SOM"];
		} else if ((new Array("fantasypoints").indexOf(RUWT_SITE_ID) >= 0) || (RUWT_SITE_ID && (RUWT_SITE_ID.indexOf("sportsreference-") == 0))) {
			//Just Football
			ALL_SPORTS = ["NFL", "NCAAF"];
			ALL_LEAGUE_CODES = ["FBP", "FBC"];
		} else if (RUWT_SITE_ID == "highpresssoccer") {
			//Big 5 + MLS & Liga MX
			var ALL_SPORTS = ["EPL", "Ligue 1", "Bundesliga", "Serie A", "La Liga", "MLS", "Liga MX"];
			var ALL_LEAGUE_CODES = ["SOE", "SOF", "SOG", "SOI", "SOS", "SOM", "SOX"];
		} else if (RUWT_SITE_FAMILY_VOX) {
			//Big 6 + MLS
			ALL_SPORTS = ["MLB", "NBA", "NFL", "NHL", "NCAAB", "NCAAF", "MLS"];
			ALL_LEAGUE_CODES = ["BBM", "BKP", "FBP", "HKN", "BKC", "FBC", "SOM"];
		} else if (RUWT_SITE_FAMILY_CATENA) {
			//Big 6 + Soccer + MMA
			ALL_SPORTS = ["MLB", "NBA", "NFL", "NHL", "NCAAB", "NCAAF", "EPL", "Ligue 1", "Bundesliga", "Serie A", "La Liga", "MLS", "MMA", "CFL"];
			ALL_LEAGUE_CODES = ["BBM", "BKP", "FBP", "HKN", "BKC", "FBC", "SOE", "SOF", "SOG", "SOI", "SOS", "SOM", "MMA", "FBB"];
		} else if (RUWT_SITE_ID == "bestodds") {
			//Big 4
			ALL_SPORTS = ["MLB", "NBA", "NFL", "NHL"];
			ALL_LEAGUE_CODES = ["BBM", "BKP", "FBP", "HKN"];
		} else if (RUWT_SITE_FAMILY_RAKETECH) {
			ALL_SPORTS = ["MLB", "NBA", "NFL", "NHL", "NCAAB", "NCAAF", "EPL", "Ligue 1", "Bundesliga", "Serie A", "La Liga", "MLS", "Liga MX"];
			ALL_LEAGUE_CODES = ["BBM", "BKP", "FBP", "HKN", "BKC", "FBC", "SOE", "SOF", "SOG", "SOI", "SOS", "SOM", "SOX"];
		} else if (RUWT_SITE_ID == "metabet-website") {
			ALL_SPORTS = ["MLB", "NBA", "NFL", "NHL", "NCAAB", "NCAAF", "WNBA", "EPL", "Ligue 1", "Bundesliga", "Serie A", "La Liga", "Champions League", "MLS", "Liga MX"];
			ALL_LEAGUE_CODES = ["BBM", "BKP", "FBP", "HKN", "BKC", "FBC", "BKD", "SOE", "SOF", "SOG", "SOI", "SOS", "SCB", "SOM", "SOX"];
		}

		//Which sports/leagues do we want to display?
		var sports = ALL_SPORTS;


		///Search for passed-in parameters like style and default sport
		var betStyle = "classic";
		var defaultSport = "nfl";
		var leaguesFilter = null;
		var country = "US";
		var location = null;
		var query = null;
		var defaultMarket = null;
		var classes = element.className.split(' ');
		for (var i=0; i<classes.length; i++) {
			if (classes[i].indexOf("metabet-style-") == 0) {
				betStyle = classes[i].replace("metabet-style-", "");
			} else if (classes[i].match("metabet(-odds-board)?-league-.+")) {
				defaultSport = classes[i].replace(/metabet(-odds-board)?-league-/, "").replace(/[-_]/, " ").toLowerCase();
			} else if (classes[i].match("metabet-leagues-.+")) {
				leaguesFilter = classes[i].replace(/metabet-leagues-/, "").replace(/[_]/, " ").toLowerCase().split(/\s*-\s*/);
			} else if (classes[i].match("metabet(-odds-board)?-market-.+")) {
				defaultMarket = classes[i].replace(/metabet(-odds-board)?-market-/, "").toLowerCase();
			} else if (classes[i].match("metabet-country-.+")) {
				country = classes[i].replace("metabet-country-", "");
			} else if (classes[i].match("metabet-location-.+")) {
				location = classes[i].replace("metabet-location-", "");
			} else if (classes[i].match("metabet-query-.+")) {
				query = classes[i].replace("metabet-query-", "");
			} else if (classes[i].match("metabet-rows-[0-9]+")) {
				element.dataset.rows = parseInt(classes[i].replace(/metabet-rows-/, ""));
			}
		}
		location = mb_getCurrentLocation(country, location);

		//Subscribe to resize media queries
		element.setAttribute("metabet-observe-resizes", "");

						element.classList.remove("metabet-show-granular");
		
		//Make sure our canvas is empty
		mb_emptyElement(element);


		//Build odds board header
		var header = document.createElement("div");
		header.className = "metabet-odds-board-header";

		//Build sport selector
		select = document.createElement("select");
		select.classList.add("metabet-odds-board-sport");
		select.classList.add("select");
		select.addEventListener("change", function() {
			mb_populateOddsBoardMarkets(element, betStyle, defaultMarket);
			mb_emptyElement(element.querySelector(".metabet-odds-board-roundnames"));
			mb_getOddsBoardData(element, query, betStyle, mb_getCurrentLocation(country, location));
			mb_trackCustomization(element, "league", this.value);
		});
		header.append(select);

		//Populate options in selector
		for (var i=0; i<ALL_SPORTS.length; i++) {

			//If this sport isn't in the list of sports we want to
			//display, and it's not the default/requested sport,
			//we will ignore it.
			if ((sports.indexOf(ALL_SPORTS[i]) == -1) && (defaultSport != ALL_SPORTS[i].toLowerCase())) {
				continue;
			}

			//Skip this if a filter is set and it's not in the filter
			if (leaguesFilter && (leaguesFilter.indexOf(ALL_SPORTS[i].toLowerCase()) == -1) && (leaguesFilter.indexOf(ALL_LEAGUE_CODES[i].toLowerCase()) == -1)) {
				continue;
			}

			option = document.createElement("option");
			option.innerHTML = ALL_SPORTS[i];
			option.value = ALL_LEAGUE_CODES[i];
			if ((ALL_SPORTS[i].toLowerCase() == defaultSport) || (ALL_LEAGUE_CODES[i].toLowerCase() == defaultSport)) {
				option.selected = true;
			}
			select.appendChild(option);

		}
		element.append(header);

		//Build round name selector
		select = document.createElement("select");
		select.classList.add("metabet-odds-board-roundnames");
		select.classList.add("select");
		select.addEventListener("change", function() {
			mb_getOddsBoardData(element, query, betStyle, mb_getCurrentLocation(country, location));
			mb_trackCustomization(element, "round", this.value);
		});
		header.append(select);

		//Build Search Box
		var input = document.createElement("input");
		input.className = "metabet-odds-board-search";
		input.placeholder = "Search for a team";
		input.type = "text";
		input.addEventListener("keyup", function(event) {

			//We don't care about key presses that don't modify the query
			if ((event.keyCode > 8) && (event.keyCode < 45)) {
				return;
			}
			mb_paintOddsBoard(element, betStyle, location, false, null);

		});
		input.addEventListener("keydown", function(event) {
			if (event.keyCode == 27) {
				event.target.value = "";
				mb_paintOddsBoard(element, betStyle, location, false, null);
				event.target.blur();
			}
		});
		//Add the search box if it's requested
		if (element.classList.contains("metabet-show-search")) {
			header.append(input);
		}

		//Build bet type selector
		select = document.createElement("select");
		select.classList.add("metabet-odds-board-market");
		select.classList.add("select");
		select.addEventListener("change", function() {
			mb_getOddsBoardData(element, query, betStyle, mb_getCurrentLocation(country, location));
			mb_trackCustomization(element, "market", this.value);
		});
		header.append(select);
		mb_populateOddsBoardMarkets(element, betStyle, defaultMarket);


		//Build state selector
		select = mb_createLocationSelector(country, location);
		select.classList.add("metabet-odds-board-location");
		select.addEventListener("change", function(event) {
			mb_getOddsBoardData(element, query, betStyle, event.target.value);
			mb_trackCustomization(element, "location", this.value);
		});
		header.append(select);


		//Add a spot for the customer logo
		div = document.createElement("div");
		div.className = "metabet-odds-board-customer-logo";
		element.appendChild(div);

		//Create the sticky provider header
		div = document.createElement("div");
		div.className = "metabet-odds-board-header-providers";
		element.appendChild(div);
		div.onscroll = function(e) {
			//Keep scroll point in sync with lines
			element.getElementsByClassName("metabet-odds-board-lines")[0].scrollLeft = e.target.scrollLeft;
		};

		//Create the stage for the game scoreboards
		div = document.createElement("div");
		div.className = "metabet-odds-board-scoreboards";
		element.appendChild(div);

		//Create the stage for the lines
		div = document.createElement("div");
		div.className = "metabet-odds-board-lines";
		element.appendChild(div);
		div.onscroll = function(e) {
			//Keep scroll point in sync with providers
			element.getElementsByClassName("metabet-odds-board-header-providers")[0].scrollLeft = e.target.scrollLeft;
		};

		//Create the banner used for error messages
		div = document.createElement("div");
		div.className = "metabet-odds-board-banner";
		element.appendChild(div);

		//Create the footer with the MetaBet logo
		div = document.createElement("div");
		div.className = "metabet-odds-board-footer";
		a = document.createElement("a");
		a.rel = "noopener";
		a.setAttribute("aria-label", "Powered by MetaBet");
		if (RUWT_ENABLE_ATTRIBUTION_LINKS) {
			a.href = mb_createMetaBetWebsiteReferralURL("odds-board-watermark");
		}
		a.target = "_blank";
		div.append(a);

		element.appendChild(div);


		

		//Now that the stage is built, fetch data and paint
		mb_getOddsBoardData(element, query, betStyle, location, false, true);

	});

}


var MB_ODDS_BOARD_DATA = [];
var MB_ODDS_BOARD_ROUND_DATA = [];
function mb_getOddsBoardData(element, query, betStyle, location, useCachedData, isInitialLoad) {

	if (useCachedData) {
		mb_paintOddsBoard(element, betStyle, location, isInitialLoad);
	} else {

		//Check if a roundname is specified
		var roundName = null;
		if (isInitialLoad) {
			element.classList.forEach(function(className) {
				if (className.match("metabet-roundname-.*")) {
					roundName = className.replace(/metabet-roundname-/, "");
				}
			});
		} else {
			roundName = element.querySelector(".metabet-odds-board-roundnames").value;
		}

		var url;
		if (query) {
			url = "&q=" + query;
			element.classList.add("metabet-hide-league");
			element.style.minHeight = "auto";
		} else {
			url = "&leagueCode=" + element.querySelector(".metabet-odds-board-sport").value;
			if (roundName) {
				if (roundName.toLowerCase().match("wild.card.round")) {
					url += "&round=afc+wild+card+playoffs&round=nfc+wild+card+playoffs";
				} else if (roundName.toLowerCase().match("divisional.round")) {
					url += "&round=afc+divisional+playoffs&round=nfc+divisional+playoffs";
				} else if (roundName.toLowerCase().match("conference.championships")) {
					url += "&round=afc+championship&round=nfc+championship";
				} else {
					url += "&round=" + roundName.replace(/[-_ ]+/g, " ").replace("Bowls", "").replace("bowls", "");
				}
			}
		}

		mb_getJSON("https://metabet.static.api.areyouwatchingthis.com/api/odds.json?apiKey=219f64094f67ed781035f5f7a08840fc&location=" + location + url + (element.classList.contains("metabet-show-granular") ? "&showGranular" : ""), function(data) {

			MB_ODDS_BOARD_DATA = data["results"];
			MB_ODDS_BOARD_ROUND_DATA = data["rounds"];
			mb_paintOddsBoard(element, betStyle, location, isInitialLoad, roundName);

		});

	}

}


function mb_paintOddsBoard(element, betStyle, location, isInitialLoad, roundName) {

	var market = element.querySelector(".metabet-odds-board-market").value;
        var period = market.replace("spread", "").replace("moneyLine", "").replace("overUnder", "");
	var providers = mb_getProvidersForLocation(location, element);
	var a, div, em, img, span;
	var showConsensus = !element.classList.contains("metabet-odds-board-hide-consensus") && !element.classList.contains("metabet-hide-consensus") && !RUWT_SITE_FAMILY_CATENA;
	var showOnlyInProgressGames = element.classList.contains("metabet-show-only-in-progress-games");
	var now = new Date().getTime();
	var league = element.querySelector(".metabet-odds-board-sport").value;
	var rounds = MB_ODDS_BOARD_ROUND_DATA;

	//Calculate the end date of the window of games to display
	var endDate = new Date();

	if (MB_ODDS_BOARD_DATA.length > 0) {

		if (element.querySelector(".metabet-odds-board-roundnames") && ((MB_ODDS_BOARD_DATA[0]["sport"] == "nfl") || (MB_ODDS_BOARD_DATA[0]["sport"] == "ncaaf"))) {
			//Don't set an end date for football, as we'll rely
			//on the round selector
			endDate = Number.MAX_SAFE_INTEGER;
		} else if (element.classList.contains("metabet-show-daily-slate")) {
			//We only want to show one day of games at a time
			endDate = new Date(MB_ODDS_BOARD_DATA[0]["date"]).getTime() + 1000*60*60*13;
		} else {
			//The end date will be a week after the first game
			endDate = new Date(MB_ODDS_BOARD_DATA[0]["date"]).getTime() + 1000*60*60*24*6.5;
		}

		//We will aggregate some Football rounds
		if (rounds && ((MB_ODDS_BOARD_DATA[0]["sport"] == "ncaaf") || (MB_ODDS_BOARD_DATA[0]["sport"] == "nfl"))) {

			var combinedRounds = [];
			for (var i=0; i<rounds.length; i++) {
				if ((MB_ODDS_BOARD_DATA[0]["sport"] == "ncaaf") && ((rounds[i].indexOf("Bowl") != -1) || (rounds[i].indexOf("CFP") == 0))) {
					if (combinedRounds.indexOf("Bowls") == -1) {
						combinedRounds.push("Bowls");
					}
				} else if ((MB_ODDS_BOARD_DATA[0]["sport"] == "nfl") && (rounds[i].indexOf("Wild Card") != -1)) {
					if (combinedRounds.indexOf("Wild Card Round") == -1) {
						combinedRounds.push("Wild Card Round");
					}
				} else if ((MB_ODDS_BOARD_DATA[0]["sport"] == "nfl") && (rounds[i].indexOf("Divisional") != -1)) {
					if (combinedRounds.indexOf("Divisional Round") == -1) {
						combinedRounds.push("Divisional Round");
					}
				} else if ((MB_ODDS_BOARD_DATA[0]["sport"] == "nfl") && (rounds[i].indexOf("Championship") != -1)) {
					if (combinedRounds.indexOf("Conference Championships") == -1) {
						combinedRounds.push("Conference Championships");
					}
				} else {
					combinedRounds.push(rounds[i]);
				}
			}
			rounds = combinedRounds;
		}

	}


	//If we don't have a roundname, but the API signals that we should, either
	//use the round of the first game that has one or default to the last round.
	if (!roundName && rounds && (rounds.length > 0)) {

		if (MB_ODDS_BOARD_DATA.length == 0) {
			roundName = rounds[rounds.length - 1];
		} else {
			roundName = null;
			for (var i=0; i<MB_ODDS_BOARD_DATA.length; i++) {
				game = MB_ODDS_BOARD_DATA[i];
				if (game.hasOwnProperty("round")) {
					if ((game["sport"] == "ncaaf") && (game["round"].indexOf("Bowl") != -1) || (game["round"].indexOf("CFP") == 0)) {
						roundName = "Bowls";
					} else if ((game["sport"] == "nfl") && (game["round"].indexOf("Wild Card") != -1)) {
						roundName = "Wild Card Round";
					} else if ((game["sport"] == "nfl") && (game["round"].indexOf("Divisional") != -1)) {
						roundName = "Divisional Round";
					} else if ((game["sport"] == "nfl") && (game["round"].indexOf("Championship") != -1)) {
						roundName = "Conference Championships";
					} else {
						roundName = game["round"];
					}
					break;
				}
			}

		}

	}

	//Normalize the round name if we have one
	if (roundName) {
		roundName = roundName.replace(/[-_ ]+/g, "_").toLowerCase();
	}


	//Is the search box being used?
	var search = null;
	if (element.querySelector(".metabet-odds-board-search")) {
		search = element.querySelector(".metabet-odds-board-search").value.toLowerCase().trim();
	}


	//Filter and trim full list of games
	var games = [];
	var maxRowCount = Math.min(MB_ODDS_BOARD_DATA.length, element.dataset.rows ? element.dataset.rows : Number.MAX_SAFE_INTEGER);
	var game;
	for (var i=0; i<MB_ODDS_BOARD_DATA.length; i++) {

		game = MB_ODDS_BOARD_DATA[i];

		//Ignore games too far out in the future
		if (game["date"] > endDate) {
			continue;
		}

		//Ignore games that have started, if we're not showing
		//games that are in progress
		if (!RUWT_ODDS_BOARD_SHOW_IN_PROGRESS_GAMES && mb_hasGameStarted(game)) {
			continue;
		}

		//Ignore games that aren't in progress, if that's all we want
		if (showOnlyInProgressGames && (!mb_hasGameStarted(game) || mb_isGameFinished(game))) {
			continue;
		}

		//Trim the games we're displaying, making sure we don't show more
		//than the requested amount, if there is one.  If there isn't a
		//requested amount and we're showing a full week/round, we won't
		//hide games that are Final.
		if (games.length >= maxRowCount) {
			break;
		} else if (!rounds || (rounds.length == 0) || element.dataset.rows) {
			if (mb_isGameFinished(game)) {
				continue;
			}
		}

		//If there's an active search, skip this entity if it doesn't match
		if (search) {

			var title;
			if (game.hasOwnProperty("team1City") && game.hasOwnProperty("team2City")) {
				title = mb_getAwayTeamFullName(game) + " " + mb_getHomeTeamFullName(game);
			} else if (game.hasOwnProperty("location")) {
				title = game["location"];
			} else {
				continue;
			}

			if (title.toLowerCase().indexOf(search) == -1) {
				continue;
			}

		}

		//Only include this game if it has odds posted from one of the providers
		//we want to display, not including CONSENSUS
		for (var j=0; j<game["odds"].length; j++) {
			if ((game["odds"][j]["provider"] != "CONSENSUS") && (providers.indexOf(game["odds"][j]["provider"]) != -1)) {
				games.push(MB_ODDS_BOARD_DATA[i]);
				break;
			}
		}

	}


	//If this is a Don Best location, add the attribution if
	//it hasn't been done already
	var attributionDonBest = element.querySelector(".metabet-odds-board-footer-don-best");
	if ((location == "NV") && (RUWT_SITE_ID == "vsin") && !attributionDonBest) {

		attributionDonBest = document.createElement("em");
		attributionDonBest.className = "metabet-odds-board-footer-don-best";
		attributionDonBest.innerHTML = "Nevada Odds courtesy of ";
		a = document.createElement("a");
		a.innerHTML = "Don Best";
		a.href = "https://www.donbest.com/";
		a.target = "_blank";
		a.rel = "nofollow";
		attributionDonBest.append(a);
		element.querySelector(".metabet-odds-board-footer").append(attributionDonBest);

	}
	//Toggle the Don Best attribution based on the location,
	//if the attribution exists
	if (attributionDonBest) {
		attributionDonBest.style.display = (location == "NV") ? "block" : "none";
	}


	//Check if we have rounds to display
	var roundSelector = element.querySelector(".metabet-odds-board-roundnames");
	if (roundSelector && rounds && (rounds.length > 0)) {

		//Populate the round selector if it's empty.  It only needs to
		//be built the first time a sport is selected.
		if (roundSelector.children.length == 0) {

			//If any of the rounds are preseason, we'll create two groupings
			var hasPreseasonGames = false;
			var groupingPreseason = null;
			var groupingRegularSeason = null;
			var groupingPostseason = null;
			for (var i=0; i<rounds.length; i++) {
				if (rounds[i].indexOf("Preseason") == 0) {

					//At least one round is preseason, so add season
					//section groupings to the round selector
					groupingPreseason = document.createElement("optgroup");
					groupingPreseason.label = "Preseason";
					roundSelector.appendChild(groupingPreseason);
					groupingRegularSeason = document.createElement("optgroup");
					groupingRegularSeason.label = "Regular Season";
					roundSelector.appendChild(groupingRegularSeason);
					groupingPostseason = document.createElement("optgroup");
					groupingPostseason.label = "Postseason";
					roundSelector.appendChild(groupingPostseason);

					hasPreseasonGames = true;
					break;

				}
			}


			for (var i=0; i<rounds.length; i++) {

				var option = document.createElement("option");
				option.innerHTML = rounds[i];
				option.value = rounds[i];
				if (rounds[i].replace(/[-_ ]+/g, "_").toLowerCase() == roundName) {
					option.selected = true;
				}


				if (!hasPreseasonGames) {
					roundSelector.append(option);
				} else {
					if ((rounds[i].indexOf("Preseason") == 0) || (rounds[i].indexOf("Hall of Fame") == 0)) {
						option.innerHTML = option.innerHTML.replace("Preseason ", "");
						groupingPreseason.appendChild(option);
					} else if (!rounds[i].match(".*Week [0-9]+") && !rounds[i].match(".*Pro Bowl.*")) {
						groupingPostseason.appendChild(option);
					} else {
						groupingRegularSeason.appendChild(option);
					}
				}


			}

		}

		//If a round is selected, filter out games that don't match
		if (roundSelector.value) {

			var filteredGames = [];
			for (var i=0; i<games.length; i++) {
				if (roundSelector.value == games[i]["round"]) {
					filteredGames.push(games[i]);
				} else if ((games[i]["sport"] == "ncaaf") && (roundSelector.value == "Bowls") && ((games[i]["round"].indexOf("Bowl") != -1) || (games[i]["round"].indexOf("CFP") == 0))) {
					filteredGames.push(games[i]);
				} else if ((games[i]["sport"] == "nfl") && (roundSelector.value == "Wild Card Round") && (games[i]["round"].indexOf("Wild Card") != -1)) {
					filteredGames.push(games[i]);
				} else if ((games[i]["sport"] == "nfl") && (roundSelector.value == "Divisional Round") && (games[i]["round"].indexOf("Divisional") != -1)) {
					filteredGames.push(games[i]);
				} else if ((games[i]["sport"] == "nfl") && (roundSelector.value == "Conference Championships") && (games[i]["round"].indexOf("Championship") != -1)) {
					filteredGames.push(games[i]);
				}
			}
			games = filteredGames;

		}

	}



	//Show an empty message and exit if we don't have games to show
	if (games.length == 0) {

		//Switch the board into "empty" mode
		element.classList.add("metabet-odds-board-empty");

		//Populate the empty message and exit
		var leagueName = element.querySelector(".metabet-odds-board-sport").options[element.querySelector(".metabet-odds-board-sport").selectedIndex].text;
		if (element.classList.contains("metabet-hide-league")) {
			//Omit the league if the selector isn't visible
			leagueName = "";
		}
		element.getElementsByClassName("metabet-odds-board-banner")[0].innerHTML = "We don't have any odds for " + (showOnlyInProgressGames ? "in-progress" : "upcoming") + " " + leagueName + " games.";

		return;

	} else {
		element.classList.remove("metabet-odds-board-empty");
	}


	var scoreboards = element.getElementsByClassName("metabet-odds-board-scoreboards")[0];
	while (scoreboards.firstChild) {
		scoreboards.removeChild(scoreboards.firstChild);
	}
	scoreboards.style.gridTemplate = "repeat(" + games.length + ", 120px) / auto";

	//Sort games, forcing any finished ones to the bottom
	games.sort(DAILY_GAME_SORT);

	games.forEach(function(game) {

		//Create scoreboard section, with teams and start time
		var scoreboard = document.createElement("div");
		scoreboard.className = "metabet-odds-board-game-scoreboard";

		//Away Team
		if (!mb_hasIndividualCompetitors(game)) {
			scoreboard.append(mb_getTeamLogo(80, game["team1ID"], game["team1Color"], game["team1Initials"], game));
		}
		div = document.createElement("div");
		span = document.createElement("span");
		span.className = "metabet-odds-board-game-scoreboard-team-name";
		span.innerHTML = game["team1City"] + " " + (game["team1Name"] ? game["team1Name"] : "");
		div.append(span);
		span = document.createElement("span");
		span.className = "metabet-odds-board-game-scoreboard-team-initials";
		span.innerHTML = game["team1Initials"];
		div.append(span);
		scoreboard.append(div);

		//Home Team
		if (!mb_hasIndividualCompetitors(game)) {
			scoreboard.append(mb_getTeamLogo(80, game["team2ID"], game["team2Color"], game["team2Initials"], game));
		}
		div = document.createElement("div");
		span = document.createElement("span");
		span.className = "metabet-odds-board-game-scoreboard-team-name";
		span.innerHTML = game["team2City"] + " " + (game["team2Name"] ? game["team2Name"] : "");
		div.append(span);
		span = document.createElement("span");
		span.className = "metabet-odds-board-game-scoreboard-team-initials";
		span.innerHTML = game["team2Initials"];
		div.append(span);
		scoreboard.append(div);

		//Start Time or Time Left
		div = document.createElement("div");
		div.className = "metabet-odds-board-game-scoreboard-time";
		if (!mb_hasGameStarted(game)) {
			div.innerHTML = mb_getUpcomingDateTime(game);
			if (game["location"]) {
				span = document.createElement("span");
				span.innerHTML = " @ " + game["location"];
				div.appendChild(span);
			}
		} else if (mb_isGameFinished(game) && game.hasOwnProperty("headline")) {
			div.innerHTML = game["headline"];
			div.title = div.innerHTML;
		} else {
			div.innerHTML = mb_getTimeLeftCompact(game);
		}
		scoreboard.append(div);

		scoreboards.append(scoreboard);

	});



	var lines = element.getElementsByClassName("metabet-odds-board-lines")[0];
	while (lines.firstChild) {
		lines.removeChild(lines.firstChild);
	}
	lines.className = "metabet-odds-board-lines metabet-odds-board-market-" + market.replace(period, "");
	lines.style.gridTemplateRows = "repeat(" + games.length + ", 120px)";

	try {
		//Add custom style to <head> that will allow columns to narrow
		//when the device viewport approaches mobile width
		var style = document.querySelector("style.metabet-odds-board-lines-style");
		if (style == null) {
			style = document.createElement("style");
			style.classList.add("metabet-odds-board-lines-style");
			style.type = "text/css";
			document.head.appendChild(style);
		}
		mb_emptyElement(style);
		style.appendChild(document.createTextNode(".metabet-odds-board-lines, .metabet-odds-board-header-providers { grid-template-columns: " + (showConsensus ? "" : "0px") + " repeat(" + (providers.length - (showConsensus ? 0 : 1)) + ", minmax(160px, 1fr)) }"));
		style.appendChild(document.createTextNode(".metabet-odds-board:not(.metabet-size-s) .metabet-odds-board-lines, .metabet-odds-board:not(.metabet-size-s) .metabet-odds-board-header-providers { grid-template-columns: " + (showConsensus ? "" : "0px") + " repeat(" + (providers.length - (showConsensus ? 0 : 1)) + ", minmax(90px, 1fr)) } "));
		style.appendChild(document.createTextNode(".metabet-odds-board:not(.metabet-size-xs) .metabet-odds-board-lines, .metabet-odds-board:not(.metabet-size-xs) .metabet-odds-board-header-providers { grid-template-columns: " + (showConsensus ? "" : "0px") + " repeat(" + (providers.length - (showConsensus ? 0 : 1)) + ", minmax(80px, 1fr)) } "));
	} catch (error) {}


	//Create header of provider logos
	var headerProviders = element.getElementsByClassName("metabet-odds-board-header-providers")[0];
	mb_emptyElement(headerProviders);
	for (var i=0; i<providers.length; i++) {

		div = document.createElement("div");
		div.className = "metabet-odds-board-provider";
		div.classList.toggle("metabet-provider-disabled", mb_isProviderDisabled(providers[i]));
		div.style.gridArea = "1 / " + (i+1) + " / 2 / " + (i+2);
		a = mb_createProviderRedirect(element, null, providers[i], location);
		if (providers[i] == "CONSENSUS") {
			if (showConsensus) {
				a.innerHTML = "Consensus";
				div.classList.add("metabet-odds-board-provider-consensus");
			} else {
				continue;
			}
		} else {
			span = document.createElement("span");
			span.classList.add("metabet-board-provider-logo");
			span.classList.add("metabet-board-provider-logo-" + providers[i].replace(RUWT_PROVIDER_SUFFIX_PATTERN, "").toLowerCase());
			span.classList.add("metabet-board-provider-location-" + location.toLowerCase());
			if (!RUWT_ENABLE_OUTBOUND_LINKS) {
				a.removeAttribute("href");
			}
			a.append(span);
			span = document.createElement("span");
			span.className = "metabet-odds-board-provider-promo";
			span.innerHTML = mb_getProviderPromo(providers[i]);
			a.append(span);
			mb_populateBetRedirectTracking(a, element, providers[i]);
		}
		div.append(a);
		headerProviders.append(div);

	}



	//Create cell for lines for each game
	var bestOdds1=null, bestOdds2=null, betOddsTie=null;
	for (var i=0; i<games.length; i++) {

		game = games[i];

		//Figure out the best available line for this game,
		//so we can highlight any books matching that value
		if (providers.length <= 2) {
			bestOdds1 = null;
			bestOdds2 = null;
		} else if (false) {
			//Disable best-line highlighting for some customers,
			//including those showing only one book
			bestOdds1 = null;
			bestOdds2 = null;
		} else if (market.startsWith("spread")) {
			if (betStyle == "vegas") {
				if (game["odds"][0][market] <= 0) {
					bestOdds1 = mb_getBestGameOdds(game, "overUnder" + period + "LineUnder", true, location, element);
					bestOdds2 = mb_getBestGameOdds(game, market + "Line2", true, location, element);
				} else {
					bestOdds1 = mb_getBestGameOdds(game, market + "Line1", true, location, element);
					bestOdds2 = mb_getBestGameOdds(game, "overUnder" + period + "LineUnder", true, location, element);
				}
			} else {
				bestOdds1 = mb_getBestGameOdds(game, market + "Line1", true, location, element);
				bestOdds2 = mb_getBestGameOdds(game, market + "Line2", true, location, element);
			}
		} else if (market.startsWith("moneyLine")) {
			bestOdds1 = mb_getBestGameOdds(game, market + "1", true, location, element);
			bestOdds2 = mb_getBestGameOdds(game, market + "2", true, location, element);
			bestOddsTie = mb_getBestGameOdds(game, market + "Tie", true, location, element);
		} else if (market == "overUnder") {
			if (betStyle == "vegas") {
				bestOdds1 = null;
				bestOdds2 = null;
			} else {
				bestOdds1 = mb_getBestGameOdds(game, market + "LineOver", true, location, element);
				bestOdds2 = mb_getBestGameOdds(game, market + "LineUnder", true, location, element);
			}
		}

		var consensusDiv = null;
		for (var j=0; j<providers.length; j++) {

			div = document.createElement("div");
			div.style.gridArea = (i+1) + " / " + (j+1) + " /  " + (i+2) + " / " + (j+2);
			if (providers[j] == "CONSENSUS") {
				if (showConsensus) {
					div.classList.add("metabet-odds-board-provider-consensus");
					consensusDiv = div;
				} else {
					continue;
				}
			}
			div.classList.toggle("metabet-provider-disabled", mb_isProviderDisabled(providers[j]));
			lines.appendChild(div);

			for (var k=0; k<game["odds"].length; k++) {

				odds = game["odds"][k];
				if (providers[j] == odds["provider"]) {

 					if (!mb_isGameFinished(game) && ((odds["date"] + RUWT_STALE_ODDS_CUTOFF) < now)) {

						//If this line is excessively stale, ignore it
						continue;

					} else if (
							!mb_isGameFinished(game)
							&&
							((odds["date"] + 1000*60*60*24*7) < game["odds"][0]["date"])
							&&
							(game["odds"][0].hasOwnProperty("moneyLine1") && odds.hasOwnProperty("moneyLine1") && (Math.abs(game["odds"][0]["moneyLine1"]-odds["moneyLine1"])/Math.min(game["odds"][0]["moneyLine1"], odds["moneyLine1"]) >= .1))
						) {

						//If this line is somewhat stale, ignore it if
						//the money line is 10% off from the consensus
						continue;

					} else if (mb_hasGameStarted(game) && !mb_isGameFinished(game) && (RUWT_PROVIDERS_NOT_UPDATING_IN_PLAY.indexOf(odds["provider"]) != -1)) {

						//Hide lines from providers that don't update in-play
						continue;

					} else if (market.startsWith("spread") && odds.hasOwnProperty(market) && odds.hasOwnProperty(market + "Line1") && odds.hasOwnProperty(market + "Line2")) {

						a = mb_createBetRedirect(odds, market + "Line1", location, element, league, "Spread for " + mb_getAwayTeamDisplayName(game) + " (at " + mb_getHomeTeamDisplayName(game) + ")");
						a.className = "metabet-odds-board-line-away metabet-board-price";
						mb_populateOddsBoardCell(a, market, betStyle, odds, location, bestOdds1);
						mb_populateBetRedirectTracking(a, element, odds["provider"], game, consensusDiv);
						div.appendChild(a);

						a = mb_createBetRedirect(odds, market + "Line2", location, element, league, "Spread for " + mb_getHomeTeamDisplayName(game) + " (vs " + mb_getAwayTeamDisplayName(game) + ")");
						a.className = "metabet-odds-board-line-home metabet-board-price";
						mb_populateOddsBoardCell(a, market, betStyle, odds, location, bestOdds2);
						mb_populateBetRedirectTracking(a, element, odds["provider"], game, consensusDiv);
						div.appendChild(a);

					} else if (market.startsWith("moneyLine") && odds.hasOwnProperty(market + "1") && odds.hasOwnProperty(market + "2")) {

						a = mb_createBetRedirect(odds, market + "1", location, element, league, "Money Line for " + mb_getAwayTeamDisplayName(game) + " (at " + mb_getHomeTeamDisplayName(game) + ")");
						a.className = "metabet-odds-board-line-away metabet-board-price";
						mb_populateOddsBoardCell(a, market, betStyle, odds, location, bestOdds1);
						mb_populateBetRedirectTracking(a, element, odds["provider"], game, consensusDiv);
						div.appendChild(a);

						a = mb_createBetRedirect(odds, market + "2", location, element, league, "Money Line for " + mb_getHomeTeamDisplayName(game) + " (vs " + mb_getAwayTeamDisplayName(game) + ")");
						a.className = "metabet-odds-board-line-home metabet-board-price";
						mb_populateOddsBoardCell(a, market, betStyle, odds, location, bestOdds2);
						mb_populateBetRedirectTracking(a, element, odds["provider"], game, consensusDiv);
						div.appendChild(a);

						if (odds.hasOwnProperty(market + "Tie")) {
							div.classList.add("metabet-odds-board-lines-ties");
							a = mb_createBetRedirect(odds, market + "Tie", location, element, league, "Money Line for Tie (" + mb_getAwayTeamDisplayName(game) + " at " + mb_getHomeTeamDisplayName(game) + ")");
							a.className = "metabet-odds-board-line-tie metabet-board-price";
							mb_populateOddsBoardCell(a, market, betStyle, odds, location, bestOddsTie);
							mb_populateBetRedirectTracking(a, element, odds["provider"], game, consensusDiv);
							div.appendChild(a);
						}

					} else if (market.startsWith("overUnder") && odds.hasOwnProperty(market) && odds.hasOwnProperty(market + "LineOver") && odds.hasOwnProperty(market + "LineUnder")) {

						a = mb_createBetRedirect(odds, market + "LineOver", location, element, league, "Over Total for " + mb_getAwayTeamDisplayName(game) + " at " + mb_getHomeTeamDisplayName(game));
						a.className = "metabet-odds-board-line-over metabet-board-price";
						mb_populateOddsBoardCell(a, market, betStyle, odds, location, bestOdds1);
						mb_populateBetRedirectTracking(a, element, odds["provider"], game, consensusDiv);
						div.appendChild(a);

						a = mb_createBetRedirect(odds, market + "LineUnder", location, element, league, "Under Total for " + mb_getAwayTeamDisplayName(game) + " at " + mb_getHomeTeamDisplayName(game));
						a.className = "metabet-odds-board-line-under metabet-board-price";
						mb_populateOddsBoardCell(a, market, betStyle, odds, location, bestOdds2);
						mb_populateBetRedirectTracking(a, element, odds["provider"], game, consensusDiv);
						div.appendChild(a);

					} else if (market == "vegas") {

						a = mb_createBetRedirect(odds, null, location, element, league, "Blended Top for " + mb_getAwayTeamDisplayName(game) + " at " + mb_getHomeTeamDisplayName(game));
						a.className = "metabet-odds-board-line-away metabet-board-price";
						mb_populateOddsBoardCell(a, "spread", "vegas", odds, location, bestOdds1);
						mb_populateBetRedirectTracking(a, element, odds["provider"], game, consensusDiv);
						div.appendChild(a);

						a = mb_createBetRedirect(odds, null, location, element, league, "Blended Bottom for " + mb_getAwayTeamDisplayName(game) + " at " + mb_getHomeTeamDisplayName(game));
						a.className = "metabet-odds-board-line-home metabet-board-price";
						mb_populateOddsBoardCell(a, "spread", "vegas", odds, location, bestOdds2);
						mb_populateBetRedirectTracking(a, element, odds["provider"], game, consensusDiv);
						div.appendChild(a);

					} else {
						continue;
					}


					//Add an explicit Bet CTA for some customers
					if ((odds["provider"] != "CONSENSUS") && !mb_isGameFinished(game) && RUWT_ENABLE_OUTBOUND_LINKS) {
						a = mb_createBetRedirect(odds, null, location, element, league, "CTA for " + mb_getAwayTeamDisplayName(game) + " at " + mb_getHomeTeamDisplayName(game));
						a.className = "metabet-odds-board-bet-cta";
						mb_populateBetRedirectTracking(a, element, odds["provider"], game, consensusDiv);
						div.appendChild(a);
					}

				}

			}

		}
	}


	//Track this element render/view if it's the initial load
	if (isInitialLoad) {
		mb_trackRender(element);
	}

}


//Helper function to build out a link within a bet cell
function mb_populateOddsBoardCell(container, market, betStyle, odds, location, bestOdds) {

	//Exit if a proper container wasn't passed in
	if (!container) {
		return;
	}

	//Are we showing prices for a granular period?
	var period = market.replace("spread", "").replace("moneyLine", "").replace("overUnder", "");

	//Are we updating an existing cell?
	var isUpdate = !(container.innerHTML === "");

	//If we're updating an existing cell, we want to highlight it temporarily
	if (isUpdate) {
		container.classList.add("metabet-odds-board-update");
		setTimeout( 2500);
	}


		//Empty container
		while (container.firstChild) {
			container.removeChild(container.firstChild);
		}

		if (market.startsWith("spread")) {

			var isHomeTeam = container.classList.contains("metabet-odds-board-line-home");
			var isHomeTeamFavorite = (odds[market] <= 0);

			if (betStyle == "modern") {

				container.innerHTML = mb_stylePrice(betStyle, odds[!isHomeTeam ? market + "Line1" : market + "Line2"]);
				em = document.createElement("em");
				if ((!isHomeTeam && (odds[market] > .5)) || (isHomeTeam && (odds[market] < -.5))) {
					em.append("Win by > " + Math.abs(odds[market]*2).toFixed()/2);
				} else if ((!isHomeTeam && (odds[market] >= 0)) || (isHomeTeam && (odds[market] <= 0))) {
					em.append("Win Outright");
				} else if ((!isHomeTeam && (odds[market] >= -1)) || (isHomeTeam && (odds[market] <= 1))) {
					em.append("Tie or Win");
				} else {
					em.append("Lose by < " + Math.abs(odds[market]*2).toFixed()/2);
				}
				container.append(em);

			} else if (betStyle == "vegas") {

				if ((isHomeTeam && isHomeTeamFavorite) || (!isHomeTeam && !isHomeTeamFavorite)) {
					if (odds.hasOwnProperty(market)) {
						container.innerHTML = mb_formatSpread(odds[market] * (isHomeTeam ? 1 : -1)) + " " + mb_formatMoneyLineFromPrice(odds[!isHomeTeam ? market + "Line1" : market + "Line2"]);
					} else {
						container.innerHTML = "-";
					}
				} else {
					if (odds.hasOwnProperty("overUnder" + period) && (odds["overUnder" + period] > 0) && odds.hasOwnProperty("overUnder" + period + "LineUnder")) {
						container.innerHTML = (odds["overUnder" + period] ? (odds["overUnder" + period] * 2).toFixed()/2 : "-") + "u" + mb_formatMoneyLineFromPrice(odds["overUnder" + period + "LineUnder"]);
					} else {
						container.innerHTML = "-";
					}
				}

			} else {

				span = document.createElement("span");
				span.innerHTML = mb_formatSpread(odds[market] * (isHomeTeam ? 1 : -1));
				container.append(span);
				em = document.createElement("em");
				em.innerHTML = mb_stylePrice(betStyle, odds[!isHomeTeam ? market + "Line1" : market + "Line2"]);
				container.append(em);

			}

			//Highlight the container if it matches the best odds
			if (bestOdds && (odds["provider"] != "CONSENSUS")) {
				if ((betStyle == "vegas") && ((isHomeTeam && !isHomeTeamFavorite) || (!isHomeTeam && isHomeTeamFavorite))) {
					container.classList.toggle("metabet-odds-board-line-best", (odds["overUnder" + period] == bestOdds["overUnder" + period]) && (Math.round(odds["overUnder" + period + "LineUnder"]*RUWT_BEST_ODD_MATCH_SENSITIVITY)/RUWT_BEST_ODD_MATCH_SENSITIVITY == Math.round(bestOdds["overUnder" + period + "LineUnder"]*RUWT_BEST_ODD_MATCH_SENSITIVITY)/RUWT_BEST_ODD_MATCH_SENSITIVITY));
				} else {
					container.classList.toggle("metabet-odds-board-line-best", (odds[market] == bestOdds[market]) && (Math.round(odds[!isHomeTeam ? market + "Line1" : market + "Line2"]*RUWT_BEST_ODD_MATCH_SENSITIVITY)/RUWT_BEST_ODD_MATCH_SENSITIVITY == Math.round(bestOdds[!isHomeTeam ? market + "Line1" : market + "Line2"]*RUWT_BEST_ODD_MATCH_SENSITIVITY)/RUWT_BEST_ODD_MATCH_SENSITIVITY));
				}
			}

		} else if (market.startsWith("moneyLine")) {

			var suffix = container.classList.contains("metabet-odds-board-line-away") ? "1" : container.classList.contains("metabet-odds-board-line-home") ? "2" : "Tie";
			container.innerHTML = mb_stylePrice(betStyle, odds[market + suffix]);

			//Highlight the container if it matches the best odds
			if (bestOdds && (odds["provider"] != "CONSENSUS")) {
				container.classList.toggle("metabet-odds-board-line-best", (Math.round(odds[market + suffix]*RUWT_BEST_ODD_MATCH_SENSITIVITY)/RUWT_BEST_ODD_MATCH_SENSITIVITY == Math.round(bestOdds[market + suffix]*RUWT_BEST_ODD_MATCH_SENSITIVITY)/RUWT_BEST_ODD_MATCH_SENSITIVITY));
			}

		} else if (market.startsWith("overUnder")) {

			var isOver = container.classList.contains("metabet-odds-board-line-over");
			if (betStyle == "modern") {

				if (isOver) {
					container.innerHTML = mb_stylePrice(odds[market + "LineOver"]);
					em = document.createElement("em");
					em.innerHTML = "Over";
					container.append(em);
					em = document.createElement("em");
					em.innerHTML = odds[market];
					container.append(em);
				} else {
					container.innerHTML = mb_stylePrice(odds[market + "LineUnder"]);
					em = document.createElement("em");
					em.innerHTML = "Under";
					container.append(em);
					em = document.createElement("em");
					em.innerHTML = odds[market];
					container.append(em);
				}

			} else {

				div = document.createElement("div");
				div.innerHTML = odds[market] ? (odds[market] * 2).toFixed()/2 : "-";
				container.append(div);
				if (isOver) {
					em = document.createElement("em");
					em.innerHTML = "Over";
					container.insertBefore(em, container.firstChild);
					em = document.createElement("em");
					em.innerHTML = mb_stylePrice(betStyle, odds[market + "LineOver"]);
					container.append(em);
				} else {
					em = document.createElement("em");
					em.innerHTML = "Under";
					container.insertBefore(em, container.firstChild);
					em = document.createElement("em");
					em.innerHTML = mb_stylePrice(betStyle, odds[market + "LineUnder"]);
					container.append(em);
				}

			}

			//Highlight the container if it matches the best odds
			if (bestOdds && (odds["provider"] != "CONSENSUS")) {
				container.classList.toggle("metabet-odds-board-line-best", (odds[market] == bestOdds[market]) && (Math.round(odds[market + "Line" + (isOver ? "Over" : "Under")]*RUWT_BEST_ODD_MATCH_SENSITIVITY)/RUWT_BEST_ODD_MATCH_SENSITIVITY == Math.round(bestOdds[market + "Line" + (isOver ? "Over" : "Under")]*RUWT_BEST_ODD_MATCH_SENSITIVITY)/RUWT_BEST_ODD_MATCH_SENSITIVITY));
			}
		}

}


function mb_populateOddsBoardMarkets(element, betStyle, defaultMarket) {

	var select = element.querySelector(".metabet-odds-board-market");
	var leagueCode = element.querySelector(".metabet-odds-board-sport").value;
	var option;
	var showGranular = element.classList.contains("metabet-show-granular");

	//Create slugs and names for each market selection
	var periodNames = [];
	var periodSlugs = [];
	if (showGranular && (leagueCode != "MMA")) {
		if (leagueCode.startsWith("S") || (leagueCode == "BKC")) {
			periodNames.push("Spread","Spread (1H)", "Spread (2H)");
			periodSlugs.push("spread", "spreadFirstHalf", "spreadSecondHalf");
			periodNames.push("Money Line", "Money Line (1H)", "Money Line (2H)");
			periodSlugs.push("moneyLine", "moneyLineFirstHalf", "moneyLineSecondHalf");
			periodNames.push("Over/Under", "Over/Under (1H)", "Over/Under (2H)");
			periodSlugs.push("overUnder", "overUnderFirstHalf", "overUnderSecondHalf");
		} else if (leagueCode.startsWith("BB")) {
			periodNames.push("Spread", "Spread (1H)");
			periodSlugs.push("spread", "spreadFirstFiveInnings");
			periodNames.push("Money Line", "Money Line (1H)");
			periodSlugs.push("moneyLine", "moneyLineFirstFiveInnings");
			periodNames.push("Over/Under", "Over/Under (1H)");
			periodSlugs.push("overUnder", "overUnderFirstFiveInnings");
		} else if (leagueCode.startsWith("HK")) {
			periodNames.push("Spread", "Spread (1Q)", "Spread (2Q)", "Spread (3Q)");
			periodSlugs.push("spread", "spreadFirstPeriod", "spreadSecondPeriod", "spreadThirdPeriod");
			periodNames.push("Money Line", "Money Line (1Q)", "Money Line (2Q)", "Money Line (3Q)");
			periodSlugs.push("moneyLine", "moneyLineFirstPeriod", "moneyLineSecondPeriod", "moneyLineThirdPeriod");
			periodNames.push("Over/Under", "Over/Under (1Q)", "Over/Under (2Q)", "Over/Under (3Q)");
			periodSlugs.push("overUnder", "overUnderFirstPeriod", "overUnderSecondPeriod", "overUnderThirdPeriod");
		} else {
			periodNames.push("Spread", "Spread (1Q)", "Spread (2Q)", "Spread (1H)", "Spread (3Q)", "Spread (4Q)", "Spread (2H)");
			periodSlugs.push("spread", "spreadFirstPeriod", "spreadSecondPeriod", "spreadFirstHalf", "spreadThirdPeriod", "spreadFourthPeriod", "spreadSecondHalf");
			periodNames.push("Money Line", "Money Line (1Q)", "Money Line (2Q)", "Money Line (1H)", "Money Line (3Q)", "Money Line (4Q)", "Money Line (2H)");
			periodSlugs.push("moneyLine", "moneyLineFirstPeriod", "moneyLineSecondPeriod", "moneyLineFirstHalf", "moneyLineThirdPeriod", "moneyLineFourthPeriod", "moneyLineSecondHalf");
			periodNames.push("Over/Under", "Over/Under (1Q)", "Over/Under (2Q)", "Over/Under (1H)", "Over/Under (3Q)", "Over/Under (4Q)", "Over/Under (2H)");
			periodSlugs.push("overUnder", "overUnderFirstPeriod", "overUnderSecondPeriod", "overUnderFirstHalf", "overUnderThirdPeriod", "overUnderFourthPeriod", "overUnderSecondHalf");
		}
	} else if (betStyle == "vegas") {
		periodNames.push("Spread", "Money Line");
		periodSlugs.push("spread", "moneyLine");
	} else {
					periodNames.push("Spread", "Money Line", "Over/Under");
			periodSlugs.push("spread", "moneyLine", "overUnder");
			}


	//Empty out the dropdown and repopulate it
	mb_emptyElement(select);
	for (var i=0; i<periodNames.length; i++) {

		option = document.createElement("option");
		option.innerHTML = periodNames[i];
		option.value = periodSlugs[i];
		if (periodSlugs[i].startsWith("moneyLine")) {
			option.selected = (option.value.toLowerCase() == defaultMarket) || leagueCode.match("S.+") || leagueCode.match("MMA") || ((defaultMarket == "smart-moneyline") && ((leagueCode == "BBM") || (leagueCode == "HKN")));
		} else {
			option.selected = (option.value.toLowerCase() == defaultMarket);
		}
		select.append(option);

	}

}




//Scans the document for markup for the Parlay Calculator
//and builds out the basic controls for it.
function mb_insertParlayCalculator(stage) {

	if (!stage) {
		stage = document.querySelector(".metabet-parlay-calculator");
	}
	if (!stage) {
		return;
	}

	//Subscribe to resize media queries
	stage.setAttribute("metabet-observe-resizes", "");

	if (!window.location.hash) {

		//If there isn't a hash in the URL, start building immediately
		mb_buildParlayCalculator();

	} else {

		//If there is a hash included, we need to determine the games
		//being requested, get the data from the API, and then reassemble
		//the selections data structure.

		var tokens = window.location.hash.replace("#", "").match(/.*?[g-z]+|.+$/g);

		//Get game IDs and line IDs for each game we need to fetch
		var gameIDs = [];
		var gameLineIDs = [];
		var sideOddIDs = [];
		var sideOddLineIDs = [];
		var id, line;
		for (var i=0; i<tokens.length; i++) {

			id = parseInt(tokens[i].replace(/[^0-9a-f]+/g, ""), 16);
			line = tokens[i].replace(/[0-9a-f]+/g, "");
			if (line.match("[ghijklm]")) {
				gameIDs.push(id);
				gameLineIDs.push(line);
			} else if (line.match("[nop]")) {
				sideOddIDs.push(id);
				sideOddLineIDs.push(line);
			}

		}


		//Retreive the latest odds data for these games
		mb_getJSON("https://metabet.static.api.areyouwatchingthis.com/api/odds.json?apiKey=219f64094f67ed781035f5f7a08840fc&gameID=" + gameIDs.join("&gameID="), function(oddsData) {

			var selections = [];

			//Now that we have the data, start assembling
			var odds = oddsData["results"];
			for (var i=0; i<odds.length; i++) {
				for (var j=0; j<gameIDs.length; j++) {
					if (gameIDs[j] == odds[i]["gameID"]) {

						var selection = {};
						if (gameLineIDs[j] == "g") {
							selection["line"] = "spreadLine1";
						} else if (gameLineIDs[j] == "h") {
							selection["line"] = "spreadLine2";
						} else if (gameLineIDs[j] == "i") {
							selection["line"] = "moneyLine1";
						} else if (gameLineIDs[j] == "j") {
							selection["line"] = "moneyLine2";
						} else if (gameLineIDs[j] == "k") {
							selection["line"] = "moneyLineTie";
						} else if (gameLineIDs[j] == "l") {
							selection["line"] = "overUnderLineOver";
						} else if (gameLineIDs[j] == "m") {
							selection["line"] = "overUnderLineUnder";
						} else if (gameLineIDs[j] == "n") {
							selection["line"] = "price";
						} else if (gameLineIDs[j] == "o") {
							selection["line"] = "price1";
						} else if (gameLineIDs[j] == "p") {
							selection["line"] = "price2";
						} else {
							//If we don't recognize the line, skip it
							continue;
						}
						selection["entity"] = odds[i];
						selections.push(selection);

					}
				}
			}


			if (sideOddIDs.length == 0) {

				sessionStorage.setItem("metabet_parlaySelections", "{\"selections\":" + JSON.stringify(selections) + "}");
				mb_buildParlayCalculator();

			} else {

				mb_getJSON("https://metabet.static.api.areyouwatchingthis.com/api/sideodds.json?apiKey=219f64094f67ed781035f5f7a08840fc&includeIDs&sideOddID=" + sideOddIDs.join("&sideOddID="), function(sideOddsData) {

					//Now that we have the data, start assembling
					var sideOdds = sideOddsData["results"];
					var sideOdd;
					for (var i=0; i<sideOdds.length; i++) {
						for (var j=0; j<sideOddIDs.length; j++) {
							for (var k=0; k<sideOdds[i]["sideOdds"].length; k++) {
								if (sideOddIDs[j] == sideOdds[i]["sideOdds"][k]["sideOddID"]) {

									var selection = {};
									if (sideOddLineIDs[j] == "n") {
										selection["line"] = "price";
									} else if (sideOddLineIDs[j] == "o") {
										selection["line"] = "price1";
									} else if (sideOddLineIDs[j] == "p") {
										selection["line"] = "price2";
									} else {
										//If we don't recognize the line, skip it
										continue;
									}
									selection["entity"] = sideOdds[i];
									selection["subentity"] = sideOdds[i]["sideOdds"][k];

									//Populate title and subtitle
									sideOdd = sideOdds[i]["sideOdds"][k];
									if (sideOdd.hasOwnProperty("teamID")) {
										selection["title"] = mb_getTeamDisplayName(mb_findEntity("teamID", sideOdd["teamID"], sideOddsData["teams"]));
									} else if (sideOdd.hasOwnProperty("playerID")) {
										selection["title"] = mb_getPlayerName(mb_findEntity("playerID", sideOdd["playerID"], sideOddsData["players"]), true);
									} else {
										continue;
									}

									if (selection["line"] == "price1") {
										selection["title"] += " " + (sideOdd.hasOwnProperty("value") ? "Over " + ((sideOdd["value"] * 2).toFixed()/2) : "Yes");
									} else if (selection["line"] == "price2") {
										selection["title"] += " " + (sideOdd.hasOwnProperty("value") ? "Under " + ((sideOdd["value"] * 2).toFixed()/2) : "No");
									}

									selection["subtitle"] = sideOdds[i]["title"];

									//Add selection to list to be persisted
									selections.push(selection);
									break;

								}
							}
						}
					}

					sessionStorage.setItem("metabet_parlaySelections", "{\"selections\":" + JSON.stringify(selections) + "}");
					mb_buildParlayCalculator();

				});

			}

		});

	}

	//Track this element render/view
	mb_trackRender(stage);

}



function mb_buildParlayCalculator() {

	//Ensure the calculator remains hidden until CSS loads
	var stage = document.querySelector(".metabet-parlay-calculator");
	stage.style.display = "none";


	//Add the loading animation
	var img = document.createElement("img");
	img.classList.add("metabet-parlay-calculator-loading");
	img.classList.add("metabet-loading");
	img.src = "https://go.metabet.io/03325fb169d4ca908f52c07a4505bb8f/img/bars.svg";
	stage.appendChild(img);


	//Get passed-in parameters
	var defaultSport = "nfl";
	var country = "US";
	var location = null;
	stage.classList.forEach(function(className) {
		if (className.match("metabet-league-.*")) {
			defaultSport = className.replace(/metabet-league-/, "");
		} else if (className.match("metabet-country-.*")) {
			country = className.replace(/metabet-country-/, "");
		} else if (className.match("metabet-location-.*")) {
			location = className.replace(/metabet-location-/, "");
		} else if (className.match("metabet-style-.*")) {
			stage.dataset.betStyle = className.replace(/metabet-style-/, "");
		}
	});
	location = mb_getCurrentLocation(country, location);

	var ul, select, option, div, a, img;
	var filters, games, winnings, selections;


	//Build out games section
	games = document.createElement("div");
	games.className = "metabet-parlay-calculator-games";

	//Build out nav/filters for games
	filters = document.createElement("div");
	filters.className = "metabet-parlay-calculator-section-header";

	
	var ALL_SPORTS = ["NFL", "MLB", "NBA", "NHL", "NCAAB", "NCAAF", "EPL", "Ligue 1", "Bundesliga", "Serie A", "La Liga", "MLS", "Liga MX"];
	var ALL_LEAGUE_CODES = ["FBP", "BBM", "BKP", "HKN", "BKC", "FBC", "SOE", "SOF", "SOG", "SOI", "SOS", "SOM", "SOX"];

	//Which sports/leagues do we want to display?
	var sports = ALL_SPORTS;

	//Build sport selector
	select = document.createElement("select");
	select.id = "metabet-parlay-calculator-sport";
	select.classList.add("select");
	select.addEventListener("change", function() {
		mb_loadParlayGames();
		mb_trackCustomization(stage, "league", this.value);
	});
	filters.append(select);

	//Populate options in selector
	for (var i=0; i<ALL_SPORTS.length; i++) {
		option = document.createElement("option");
		option.innerHTML = ALL_SPORTS[i];
		option.selected = (ALL_SPORTS[i].toLowerCase() == defaultSport);
		option.value = ALL_LEAGUE_CODES[i];
		select.appendChild(option);
	}


	//Build market selector
	select = document.createElement("select");
	select.id = "metabet-parlay-calculator-market";
	select.classList.add("select");
	select.addEventListener("change", function() {
		mb_paintParlayOptions();
		mb_trackCustomization(stage, "market", this.value);
	});
	filters.append(select);

	
	games.appendChild(filters);


	//Container for games
	ul = document.createElement("ul");
	games.appendChild(ul);

	//Empty message when there are no games to display
	div = document.createElement("div");
	div.className = "metabet-parlay-calculator-empty";
	games.appendChild(div);

	stage.appendChild(games);



	//Build out winnings section
	winnings = document.createElement("div");
	winnings.className = "metabet-parlay-calculator-winnings";
	div = document.createElement("div");
	div.className = "metabet-parlay-calculator-section-header";
	div.innerHTML = "Wager:";
	winnings.appendChild(div);
	input = document.createElement("input");
	input.type = "text";
	input.value = "20";
	input.maxLength = 5;
	input.addEventListener("keydown", function(e) {
		if ((e.keyCode >= 48) && (e.keyCode <= 57) && (e.shiftKey !== true)) {
			//Numbers
		} else if ((e.keyCode >= 96) && (e.keyCode <= 105)) {
			//Keypad Numbers
		} else if ((e.shiftKey === true) && (e.keyCode == 52)) {
			//Dollar sign
			if (e.target.value.indexOf("$") != -1) {
				e.preventDefault();
			}
		} else if ((new Array(46, 8, 9, 27, 13, 110, 65, 35, 37, 39).indexOf(e.keyCode) >= 0) || (e.ctrlKey === true)) {
			//Assorted keys we don't care about
		} else {
			//Block everything else
			e.preventDefault();
		}
	});
	input.addEventListener("input", function(e) {
		if (!e.target.value.match("[$].*")) {
			e.target.value = "$" + e.target.value;
		}
		mb_paintParlayWinnings();
	});
	div.appendChild(input);

	//Build state selector
	select = mb_createLocationSelector(country, location);
	select.addEventListener("change", function(event) {
		window.location.reload(true);
		mb_trackCustomization(stage, "location", this.value);
	});
	div.append(select);


	//Payout container
	div = document.createElement("div");
	div.className = "metabet-parlay-calculator-winnings-payout";
	winnings.appendChild(div);


	//Add icons for each possible provider
	ul = document.createElement("ul");
	ul.className = "metabet-parlay-calculator-winnings-providers";
	var providers = mb_getProvidersForLocation(location, stage);

	//If we only have a single provider to display (other than Consensus),
	//we will style this section differently
	ul.classList.toggle("metabet-parlay-calculator-winnings-providers-single", (providers.length <= 2));

	providers.forEach(function(provider) {

		if (provider == "CONSENSUS") {
			return;
		}

		var li = document.createElement("li");
		li.classList.add("metabet-parlay-calculator-winnings-provider-disabled");
		li.dataset.provider = provider;
		li.addEventListener("click", ;


		img = document.createElement("img");
		img.alt = "";
		img.src = mb_getProviderLogo(provider, location, ul.classList.contains("metabet-parlay-calculator-winnings-providers-single"));
		li.appendChild(img);
		ul.appendChild(li);

	});


	//Arrange providers differently depending on count
	if (ul.children.length > 7) {
		ul.classList.add("metabet-parlay-calculator-winnings-providers-count-large");
	}

	winnings.appendChild(ul);

	//Payout CTA
	a = document.createElement("a");
	a.className = "metabet-parlay-calculator-winnings-cta";
	a.href = "https://go.metabet.io";
	a.target = "_blank";
	a.addEventListener("click", function() {
		var selectedProvider = document.querySelector(".metabet-parlay-calculator-winnings-provider-selected");
		mb_trackClick(stage, (selectedProvider != null) ? selectedProvider.dataset.provider : null, "Winnings - CTA", document.querySelectorAll(".metabet-parlay-calculator-selections ul li").length, (selectedProvider != null) ? selectedProvider.dataset.provider : null);
	});
	winnings.appendChild(a);

	stage.appendChild(winnings);



	//Build out selection section
	selections = document.createElement("div");
	selections.className = "metabet-parlay-calculator-selections";
	div = document.createElement("div");
	div.className = "metabet-parlay-calculator-section-header";
	div.innerHTML = "Your Parlay Bets";
	var button = document.createElement("button");
	button.innerHTML = "Clear&nbsp;All";
	button.title = "Remove all bets from your parlay";
	button.addEventListener("click", function() {
		mb_removeAllWagersFromParlay();
	});
	div.appendChild(button);
	selections.appendChild(div);

	ul = document.createElement("ul");
	selections.appendChild(ul);

	//Empty message when there are no selections to display
	div = document.createElement("div");
	div.className = "metabet-parlay-calculator-empty";
	div.innerHTML = "Start choosing wagers for your parlay and your selections will show up here.";
	a = document.createElement("a");
	a.className = "metabet-parlay-calculator-watermark";
	if (RUWT_ENABLE_ATTRIBUTION_LINKS) {
		a.href = mb_createMetaBetWebsiteReferralURL("parlay-calculator-watermark");
	}
	a.title = "Powered by MetaBet.io";
	a.target = "_blank";
	div.appendChild(a);
	selections.appendChild(div);

	stage.appendChild(selections);



	//Build navigation for mobile displays,
	//defaulting to showing the games tab
	stage.classList.add("metabet-parlay-calculator-navigation-show-games");

	div = document.createElement("div");
	div.className = "metabet-parlay-calculator-navigation";
	var span = document.createElement("span");
	span.innerHTML = "Markets";
	span.addEventListener("click", function() {
		document.querySelector(".metabet-parlay-calculator").classList.remove("metabet-parlay-calculator-navigation-show-selections");
		document.querySelector(".metabet-parlay-calculator").classList.add("metabet-parlay-calculator-navigation-show-games");
	});
	div.appendChild(span);
	span = document.createElement("span");
	span.innerHTML = "Bets";
	span.addEventListener("click", ;
	div.appendChild(span);
	span = document.createElement("span");
	span.innerHTML = "Clear&nbsp;All";
	span.title = "Remove all bets from your parlay";
	span.addEventListener("click", function() {
		mb_removeAllWagersFromParlay();
	});
	div.appendChild(span);
	stage.appendChild(div);


	//Populate game list (which will then populate rest of screen)
	mb_loadParlayGames(true, location);

}


var MB_PARLAY_CALCULATOR_GAMES_DATA = [];
var MB_PARLAY_CALCULATOR_SIDEODDS_DATA = [];
function mb_loadParlayGames(isFirstPageLoad, location) {

	var leagueCode = document.querySelector("#metabet-parlay-calculator-sport").value;

	//Clear out markets list so it can be rebuilt
	var select = document.querySelector("#metabet-parlay-calculator-market");
	mb_emptyElement(select);

	var grouping = document.createElement("optgroup");
	grouping.label = "Game Lines";
	option = document.createElement("option");
	option.innerHTML = "Spread";
	option.value = "spread";
	grouping.append(option);

	option = document.createElement("option");
	option.innerHTML = "Money Line";
	option.value = "moneyLine";
	grouping.append(option);

	option = document.createElement("option");
	option.innerHTML = "Over/Under";
	option.value = "overUnder";
	grouping.append(option);
	select.append(grouping);


	mb_getJSON("https://metabet.static.api.areyouwatchingthis.com/api/odds.json?apiKey=219f64094f67ed781035f5f7a08840fc&leagueCode=" + leagueCode + (location ? "&location=" + location : ""), function(oddsData) {

		//Load game lines
		MB_PARLAY_CALCULATOR_GAMES_DATA = oddsData["results"];

		//Default selector to moneyLine for some sports
		if ((MB_PARLAY_CALCULATOR_GAMES_DATA.length > 0) && ((MB_PARLAY_CALCULATOR_GAMES_DATA[0]["sport"] == "soccer") || mb_hasIndividualCompetitors(MB_PARLAY_CALCULATOR_GAMES_DATA[0]))) {
			document.querySelector("#metabet-parlay-calculator-market").value = "moneyLine";
		}

		//Start initial paint
		mb_paintParlayGames(isFirstPageLoad);


		//Load SideOdd markets, if enabled
		
	});


}



function mb_paintParlayOptions() {
	var select = document.querySelector(".metabet-parlay-calculator #metabet-parlay-calculator-market");
	if (select.options[select.selectedIndex].dataset.market) {
		mb_paintParlaySideOdds();
	} else {
		mb_paintParlayGames();
	}
}



//Processes the already-downloaded odds info and displays games for the
//selected sport and market.
function mb_paintParlayGames(isFirstPageLoad) {

	var sport = document.querySelector("#metabet-parlay-calculator-sport").value;
	var market = document.querySelector("#metabet-parlay-calculator-market").value;
	var betStyle = document.querySelector(".metabet-parlay-calculator").dataset.betStyle;
	if (!betStyle) {
		betStyle = "classic";
	}

	//Clear out current list of games
	var games = document.querySelector(".metabet-parlay-calculator-games ul");
	mb_emptyElement(games);

	//Calculate a cutoff date for games too far in
	//the future to display
	var endDate;
	if (MB_PARLAY_CALCULATOR_GAMES_DATA.length > 0) {
		endDate = new Date(MB_PARLAY_CALCULATOR_GAMES_DATA[0]["date"] + 1000*60*60*24*14);
	}


	//Add each game to the display
	var game, li, div, button, hasTeamLogos;
	MB_PARLAY_CALCULATOR_GAMES_DATA.forEach(function(game) {

		//We don't want to display games that have already started
		if (mb_hasGameStarted(game)) {
			return;
		}

		//Don't display games far in the future
		if (game["date"] > endDate.getTime()) {
			return;
		}

		//Will we try to display team logos?
		hasTeamLogos = (game["leagueCode"] != "MMA");

		li = document.createElement("li");
		li.classList.toggle("metabet-parlay-calculator-gameodds-nologo", !hasTeamLogos);

		if (hasTeamLogos) {
			li.append(mb_getTeamLogo(80, game["team1ID"], game["team1Color"], game["team1Initials"]));
		}
		div = document.createElement("div");
		div.innerHTML = mb_getAwayTeamFullName(game);
		li.append(div);

		if (hasTeamLogos) {
			li.append(mb_getTeamLogo(80, game["team2ID"], game["team2Color"], game["team2Initials"]));
		}
		div = document.createElement("div");
		div.innerHTML = mb_getHomeTeamFullName(game);
		li.append(div);

		var span = document.createElement("span");
		span.className = "metabet-parlay-calculator-games-time";
		span.innerHTML = mb_getUpcomingDateTime(game) + (game["location"] ? " @ " + game["location"] : "");
		li.append(span);

		games.appendChild(li);



		//Get odds for this game for this provider
		var odds = null;
		var provider = mb_getSelectedParlayProvider();
		if (!provider) {
			odds = game["odds"][0];
		} else {
			for (var i=1; i<game["odds"].length; i++) {
				if (game["odds"][i]["provider"] == provider) {
					odds = game["odds"][i];
					break;
				}
			}
		}

		//If we weren't able to find odds to display for this game
		//and selected provider, leave the line section blank
		if (!odds) {
			return;
		}


		//Display the line options for this game
		if ((market == "spread") && odds.hasOwnProperty("spread") && odds.hasOwnProperty("spreadLine1") && odds.hasOwnProperty("spreadLine2")) {
			button = document.createElement("button");
			button.classList.toggle("metabet-parlay-calculator-games-selected", mb_isWagerInParlay("spreadLine1", game));
			button.innerHTML = game["team1Initials"] + " " + mb_formatSpread(odds["spread"] * -1) + "<em>(" + mb_stylePrice(betStyle, odds["spreadLine1"]) + ")</em>";
			button.addEventListener("click", function() {
				mb_addWagerToParlay("spreadLine1", game);
			});
			li.appendChild(button);
			button = document.createElement("button");
			button.classList.toggle("metabet-parlay-calculator-games-selected", mb_isWagerInParlay("spreadLine2", game));
			button.innerHTML = game["team2Initials"] + " " + mb_formatSpread(odds["spread"]) + "<em>(" + mb_stylePrice(betStyle, odds["spreadLine2"]) + ")</em>";
			button.addEventListener("click", function() {
				mb_addWagerToParlay("spreadLine2", game);
			});
			li.appendChild(button);
		} else if ((market == "moneyLine") && odds.hasOwnProperty("moneyLine1") && odds.hasOwnProperty("moneyLine2")) {
			button = document.createElement("button");
			button.classList.toggle("metabet-parlay-calculator-games-selected", mb_isWagerInParlay("moneyLine1", game));
			button.innerHTML = game["team1Initials"] + " " + mb_stylePrice(betStyle, odds["moneyLine1"]);
			button.addEventListener("click", function() {
				mb_addWagerToParlay("moneyLine1", game);
			});
			li.appendChild(button);
			button = document.createElement("button");
			button.classList.toggle("metabet-parlay-calculator-games-selected", mb_isWagerInParlay("moneyLine2", game));
			button.innerHTML = game["team2Initials"] + " " + mb_stylePrice(betStyle, odds["moneyLine2"]);
			button.addEventListener("click", function() {
				mb_addWagerToParlay("moneyLine2", game);
			});
			li.appendChild(button);
		} else if ((market == "overUnder") && odds.hasOwnProperty("overUnder") && odds.hasOwnProperty("overUnderLineOver") && odds.hasOwnProperty("overUnderLineUnder")) {
			button = document.createElement("button");
			button.classList.toggle("metabet-parlay-calculator-games-selected", mb_isWagerInParlay("overUnderLineOver", game));
			button.innerHTML = "Over " + ((odds["overUnder"] * 2).toFixed()/2) + "<em>(" + mb_stylePrice(betStyle, odds["overUnderLineOver"]) + ")</em>";
			button.addEventListener("click", function() {
				mb_addWagerToParlay("overUnderLineOver", game);
			});
			li.appendChild(button);
			button = document.createElement("button");
			button.classList.toggle("metabet-parlay-calculator-games-selected", mb_isWagerInParlay("overUnderLineUnder", game));
			button.innerHTML = "Under " + ((odds["overUnder"] * 2).toFixed()/2) + "<em>(" + mb_stylePrice(betStyle, odds["overUnderLineUnder"]) + ")</em>";
			button.addEventListener("click", ;
			li.appendChild(button);
		}


	});

	//Update the empty message in case we don't find games to display
	document.querySelector(".metabet-parlay-calculator-games .metabet-parlay-calculator-empty").innerHTML = "We don't have any odds for upcoming " + document.querySelector("#metabet-parlay-calculator-sport").options[document.querySelector("#metabet-parlay-calculator-sport").selectedIndex].text + " games."



	//If this is the first page load, we will run extra
	//logic to finish setting up the page.
	if (isFirstPageLoad) {

		//Update winnings section
		mb_paintParlayWinnings();

		//Populate any existing selections
		mb_paintParlaySelections();

		//Make sure the calculator is visible.  We do this after the games
		//section is built as it's the slowest to build on first launch.
		document.querySelector(".metabet-parlay-calculator").classList.add("metabet-parlay-calculator-loaded");

	}

}



function mb_paintParlaySideOdds() {

	//Clear out the menu of options
	var ul, li, div, button;
	ul = document.querySelector(".metabet-parlay-calculator-games ul");
	mb_emptyElement(ul);

	var selectedIndex = document.querySelector("#metabet-parlay-calculator-market").selectedIndex;
	var selectedMarket = document.querySelector("#metabet-parlay-calculator-market").options[selectedIndex].dataset.market;
	var selectedMarketGameID = document.querySelector("#metabet-parlay-calculator-market").options[selectedIndex].dataset.gameID;

	var betStyle = "classic";

	//Build list of all displayed providers
	var providers = [];
	document.querySelectorAll(".metabet-parlay-calculator .metabet-parlay-calculator-winnings-providers li").forEach(;

	MB_PARLAY_CALCULATOR_SIDEODDS_DATA["results"].forEach(function(market) {

		//Skip this market if it isn't the selected one
		if (market["type"] != selectedMarket) {
			return;
		}

		if (!market["sideOdds"][0].hasOwnProperty("teamID") && !market["sideOdds"][0].hasOwnProperty("playerID")) {
			return;
		}


		var team, player;
		var entityIDs = [];
		var entityID;
		for (var i=0; i<market["sideOdds"].length-1; i++) {

			let odds = market["sideOdds"][i];
			let span;

			if (providers.indexOf(odds["provider"]) == -1) {
				continue;
			}

			//Skip if we've already displayed this entity
			entityID = odds.hasOwnProperty("teamID") ? odds["teamID"] : odds["playerID"];
			if (entityIDs.indexOf(entityID) != -1) {
				continue;
			} else {
				entityIDs.push(entityID);
			}

			li = document.createElement("li");

			div = document.createElement("div");

			if (market["sideOdds"][0].hasOwnProperty("teamID")) {

				var team = mb_findEntity("teamID", entityID, MB_PARLAY_CALCULATOR_SIDEODDS_DATA["teams"]);

				if (!mb_hasIndividualCompetitors(team)) {
					li.append(mb_getTeamLogo(80, team["teamID"], team["color"], team["initials"], team));
				}

				span = document.createElement("span");
				span.innerHTML = mb_getTeamDisplayName(team);
				div.append(span);

			} else if (market["sideOdds"][0].hasOwnProperty("playerID")) {

				var player = mb_findEntity("playerID", entityID, MB_PARLAY_CALCULATOR_SIDEODDS_DATA["players"]);
				if (!player.hasOwnProperty("teamID")) {
					continue;
				}
				if (!RUWT_ENABLE_GENERIC_TEAM_LOGOS) {
					var img = document.createElement("img");
					img.src = mb_getTeamLogoURL(80, player["teamID"]);
					img.classList.add("metabet-team-logo");
					img.width = "25";
					img.height = "25";
					img.alt = "";
					li.append(img);
				}

				span = document.createElement("span");
				span.innerHTML = mb_getPlayerName(player, true);
				div.append(span);

			}
			li.appendChild(div);

			if (odds.hasOwnProperty("price1") && odds.hasOwnProperty("price2")) {

				li.className = "metabet-parlay-calculator-sideodds-double";

				button = document.createElement("button");
				button.classList.toggle("metabet-parlay-calculator-games-selected", mb_isWagerInParlay("price1", market, odds));
				button.innerHTML = odds.hasOwnProperty("value") ? "Over " + ((odds["value"] * 2).toFixed()/2) : "Yes";
				button.innerHTML += "<em>(" + mb_stylePrice(betStyle, odds["price1"]) + ")</em>";
				button.addEventListener("click", function() {
					mb_addWagerToParlay("price1", market, odds, span.innerHTML + " " + this.childNodes[0].nodeValue);
				});
				li.appendChild(button);

				button = document.createElement("button");
				button.classList.toggle("metabet-parlay-calculator-games-selected", mb_isWagerInParlay("price2", market, odds));
				button.innerHTML = odds.hasOwnProperty("value") ? "Under " + ((odds["value"] * 2).toFixed()/2) : "No";
				button.innerHTML += "<em>(" + mb_stylePrice(betStyle, odds["price2"]) + ")</em>";
				button.addEventListener("click", function() {
					mb_addWagerToParlay("price2", market, odds, span.innerHTML + " " + this.childNodes[0].nodeValue);
				});
				li.appendChild(button);

			} else {

				li.className = "metabet-parlay-calculator-sideodds-single";

				button = document.createElement("button");
				button.classList.toggle("metabet-parlay-calculator-games-selected", mb_isWagerInParlay("price", market, odds));
				button.innerHTML = mb_stylePrice(betStyle, odds["price"]);
				button.addEventListener("click", function() {
					mb_addWagerToParlay("price", market, odds, span.innerHTML);
				});
				li.appendChild(button);

			}

			ul.insertBefore(li, ul.firstChild);

		}

	});


	//If this a game-specific market, take the time to sort results
	//alphabetically, otherwise, they'll be grouped by game because
	//of the structure of the API
	if (selectedMarket.indexOf("_GAME_") != -1) {

		var items = [];
		for (var i=0; i<ul.children.length; i++) {
			items.push(ul.children[i]);
		}

		try {
			items.sort(function(s1, s2) {
				var player1 = s1.querySelector("div > span").innerText;
				if (player1.indexOf(". ") != -1) {
					player1 = player1.split(". ")[1] + player1.split(". ")[0];
				}
				var player2 = s2.querySelector("div > span").innerText;
				if (player2.indexOf(". ") != -1) {
					player2 = player2.split(". ")[1] + player2.split(". ")[0];
				}
				return (player1.localeCompare(player2));
			});
		} catch (error) {}

		var sortedUL = ul.cloneNode(false);
		for (var i=0; i<items.length; i++) {
			sortedUL.appendChild(items[i]);
		}

		ul.parentNode.replaceChild(sortedUL, ul);

	}

}





//Shows the list of bets that have been added to this parlay.
//The selections are stored in client-side storage.
function mb_paintParlaySelections() {

	//Which provider will be used to display lines/prices for the selections
	var provider = mb_getSelectedParlayProvider();
	if (!provider) {
		provider = "CONSENSUS";
	}

	//Clear out list of selections
	var selections = document.querySelector(".metabet-parlay-calculator-selections ul");
	mb_emptyElement(selections);

	//Populate list of selections
	mb_getParlaySelections().forEach(function(selection) {

		var line = selection["line"];
		var entity = selection["entity"];
		var odds;

		var title;
		var subtitle;


		if (entity.hasOwnProperty("gameID") && !entity.hasOwnProperty("type")) {

			//GameOdd
			for (var i=0; i<selection["entity"]["odds"].length; i++) {
				if (selection["entity"]["odds"][i]["provider"] == provider) {
					odds = selection["entity"]["odds"][i];
					break;
				}
			}

			subtitle = mb_getUpcomingDateTime(entity) + " ";
			if (line == "spreadLine1") {
				title = mb_getAwayTeamFullName(entity) + " " + mb_formatSpread(odds["spread"] * -1);
				subtitle += "(@ " + entity["team2Initials"] + ")";
			} else if (line == "spreadLine2") {
				title = mb_getHomeTeamFullName(entity) + " " + mb_formatSpread(odds["spread"]);
				subtitle += "(vs " + entity["team1Initials"] + ")";
			} else if (line == "moneyLine1") {
				title = mb_getAwayTeamFullName(entity) + " To Win";
				subtitle += "(@ " + entity["team2Initials"] + ")";
			} else if (line == "moneyLine2") {
				title = mb_getHomeTeamFullName(entity) + " To Win";
				subtitle += "(vs " + entity["team1Initials"] + ")";
			} else if (line == "overUnderLineOver") {
				title = entity["team1Initials"] + "/" + entity["team2Initials"] + " Over " + odds["overUnder"];
				subtitle += "(@ " + entity["team2Initials"] + ")";
			} else if (line == "overUnderLineUnder") {
				title = entity["team1Initials"] + "/" + entity["team2Initials"] + " Under " + odds["overUnder"];
				subtitle += "(@ " + entity["team2Initials"] + ")";
			}

		} else {
			//SideOdd
			odds = selection["subentity"];
			title = selection["title"];
			subtitle = selection["subtitle"];
		}

		var li = document.createElement("li");

		var div = document.createElement("div");
		div.className = "metabet-parlay-calculator-selections-title";
		div.innerHTML = title;
		li.append(div);

		div = document.createElement("div");
		div.className = "metabet-parlay-calculator-selections-subtitle";
		div.innerHTML = subtitle;
		li.append(div);

		div = document.createElement("div");
		div.className = "metabet-parlay-calculator-selections-price";
		div.innerHTML = mb_formatMoneyLineFromPrice(odds[line]);
		li.append(div);

		var button = document.createElement("button");
		button.title = "Remove this bet from your parlay";
		button.addEventListener("click", function() {
			mb_removeWagerFromParlay(line, entity, selection["subentity"]);
		});
		var img = document.createElement("img");
		img.src = "https://go.metabet.io/03325fb169d4ca908f52c07a4505bb8f/img/delete.svg";
		button.appendChild(img);
		li.append(button);

		img = document.createElement("img");
		img.src = "https://go.metabet.io/03325fb169d4ca908f52c07a4505bb8f/img/sport-icons/" + (entity.hasOwnProperty("sport") ? entity["sport"] : entity["type"].split("_")[0].toLowerCase()) + ".svg";
		li.append(img);

		selections.appendChild(li);

	});


	//Update the label for selections section in the mobile nav
	document.querySelector(".metabet-parlay-calculator-navigation span:nth-of-type(2)").innerHTML = "Bets (" + selections.children.length + ")";

}


//Calculates the payout price for each known provider and then
//selects the provider with the best price.
function mb_paintParlayWinnings() {

	var winnings;
	var provider;
	var odds;
	var sideOdds, sideOdd, subentity;

	var selections = mb_getParlaySelections();

	var providerElements = document.querySelectorAll(".metabet-parlay-calculator-winnings-providers li");
	providerElements.forEach(function(providerElement) {

		provider = providerElement.dataset.provider;
		if (provider == "CONSENSUS") {
			return;
		}


		//If this provider doesn't have a line for each wager
		//in the parlay, disable it
		var hasLine = false;
		for (var i=0; i<selections.length; i++) {

			hasLine = false;

			if (selections[i]["entity"].hasOwnProperty("odds")) {
				odds = selections[i]["entity"]["odds"];
				for (var j=0; j<odds.length; j++) {
					if ((odds[j]["provider"] == provider) && odds[j].hasOwnProperty(selections[i]["line"])) {
						hasLine = true;
						break;
					}
				}
			} else if (selections[i]["entity"].hasOwnProperty("sideOdds")) {

				sideOdds = selections[i]["entity"]["sideOdds"];
				subentity = selections[i]["subentity"];

				for (var j=0; j<sideOdds.length; j++) {
					sideOdd = sideOdds[j];
					if (sideOdd["provider"] == provider) {
						if ((!subentity.hasOwnProperty("gameID") || (subentity["gameID"] == sideOdd["gameID"])) && (!subentity.hasOwnProperty("teamID") || (subentity["teamID"] == sideOdd["teamID"])) && (!subentity.hasOwnProperty("playerID") || (subentity["playerID"] == sideOdd["playerID"]))) {
							hasLine = true;
							break;
						}
					}
				}

			}

			if (!hasLine) {
				break;
			}

		}
		providerElement.classList.toggle("metabet-parlay-calculator-winnings-provider-disabled", !hasLine);



		//Calculate winnings amount for this provider
		var price = 1;
		if (!providerElement.classList.contains("metabet-parlay-calculator-winnings-provider-disabled")) {
			selections.forEach(function(selection) {

				if (selection["entity"].hasOwnProperty("odds")) {
					for (var i=0; i<selection["entity"]["odds"].length; i++) {
						if (selection["entity"]["odds"][i]["provider"] == provider) {
							price *= selection["entity"]["odds"][i][selection["line"]];
						}
					}
				} else if (selection["entity"].hasOwnProperty("sideOdds")) {

					sideOdds = selection["entity"]["sideOdds"];
					subentity = selection["subentity"];

					for (var j=0; j<sideOdds.length; j++) {
						sideOdd = sideOdds[j];
						if ((sideOdd["provider"] == provider) && sideOdd.hasOwnProperty(selection["line"])) {
							if ((!subentity.hasOwnProperty("gameID") || (subentity["gameID"] == sideOdd["gameID"])) && (!subentity.hasOwnProperty("teamID") || (subentity["teamID"] == sideOdd["teamID"])) && (!subentity.hasOwnProperty("playerID") || (subentity["playerID"] == sideOdd["playerID"]))) {
								price *= sideOdd[selection["line"]];
							}
						}
					}

				}

			});
		}
		providerElement.dataset.price = price;


	});


	//Which provider has the best price?
	var bestPrice = 1;
	var bestProviderElement = null;
	for (var i=0; i<providerElements.length; i++) {
		if (providerElements[i].dataset.price && !isNaN(providerElements[i].dataset.price)) {
			if (providerElements[i].dataset.price > bestPrice) {
				bestPrice = Math.max(providerElements[i].dataset.price);
				bestProviderElement = providerElements[i];
			}
		}
	}


	//Update the tooltips for each provider
	var wager = document.querySelector(".metabet-parlay-calculator-winnings input").value.replace(/[$]/, "");
	for (var i=0; i<providerElements.length; i++) {

		if (selections.length == 0) {
			providerElements[i].removeAttribute("title");
		} else if (providerElements[i].classList.contains("metabet-parlay-calculator-winnings-provider-disabled")) {
			providerElements[i].title = "This Sportsbook doesn't have lines for all of your selections.";
		} else {
			providerElements[i].title = "$" + (providerElements[i].dataset.price * wager).toFixed(2).toLocaleString("en-US", {minimumFractionDigits: 2, maximumFractionDigits: 2})
		}

	}


	//Store the current selections in the URL for portability
	var hash = "";
	for (var i=0; i<selections.length; i++) {
		hash += mb_createWagerHash(selections[i].hasOwnProperty("subentity") && selections[i]["subentity"].hasOwnProperty("sideOddID") ? selections[i]["subentity"]["sideOddID"] : selections[i]["entity"]["gameID"], selections[i]["line"]);
	}

	if (hash) {
		window.location.hash = hash;
	} else {
		history.pushState("", document.title, window.location.pathname + window.location.search);
	}


	//Select the provider with the best price
	mb_selectParlayProvider(bestProviderElement);

}



//Returns the provider currently selected in the winnings pane.  If no
//provider is currently selected, null will be returned.
function mb_getSelectedParlayProvider() {

	//If there's only one allowed provider, return it as the selected provider
	if (document.querySelector(".metabet-parlay-calculator-winnings-providers.metabet-parlay-calculator-winnings-providers-single")) {
		//Adding strict check for existence as some users have
		//reported product-crashing errors at this step
		var selectedProvider = document.querySelector(".metabet-parlay-calculator-winnings-providers > li");
		if (selectedProvider) {
			return selectedProvider.dataset.provider;
		}
	}

	//Search for a selected provider
	var selectedProvider = document.querySelector(".metabet-parlay-calculator-winnings-providers .metabet-parlay-calculator-winnings-provider-selected");
	if (selectedProvider) {
		return selectedProvider.dataset.provider;
	}

	return null;

}


//When a provider is selected, either by clicking or automatically after
//it's found to have the best price, the winnings payout will be animated
//to its new value and the list of selections will be updated with the lines
//for this provider.
function mb_selectParlayProvider(providerElement) {

	//Ignore clicks on disabled providers
	if (providerElement && providerElement.classList.contains("metabet-parlay-calculator-winnings-provider-disabled")) {
		return;
	}

	//What's the initial wager amount for the parlay?
	var WAGER_AMOUNT = document.querySelector(".metabet-parlay-calculator-winnings input").value.replace(/[$]/, "");
	if (isNaN(WAGER_AMOUNT)) {
		WAGER_AMOUNT = 20;
	}

	//Unselect selected provider
	var selectedProvider = document.querySelector(".metabet-parlay-calculator-winnings-providers .metabet-parlay-calculator-winnings-provider-selected");
	if (selectedProvider) {
		selectedProvider.classList.remove("metabet-parlay-calculator-winnings-provider-selected");
	}

	//Select the newly clicked element and grab its price
	var price = 0;
	if (providerElement != null) {
		providerElement.classList.add("metabet-parlay-calculator-winnings-provider-selected");
		price = providerElement.dataset.price;
	}

	//Update selections with the lines from this provider
	mb_paintParlaySelections();


	//Animate the payout to its new value
	var payout = document.querySelector(".metabet-parlay-calculator-winnings-payout");
	var payoutAd = document.querySelector(".metabet-parlay-calculator-winnings-ad-payout");
	var currentValue = parseFloat(payout.innerText.replace(/[$,]+/g,""));
	if (isNaN(currentValue)) {
		currentValue = 0;
	}
	var targetValue = price * WAGER_AMOUNT;
	var step = (targetValue - currentValue)/15;
	if (Math.abs(step) < .01) {
		//If the values are close, just make one large step
		step = targetValue - currentValue;
	}

	//Animate the value
	var intervalValue = setInterval(function() {
		if (Math.abs(currentValue - targetValue) > Math.abs(step)) {
			currentValue += step;
		} else {
			currentValue = targetValue;
			clearInterval(intervalValue);
		}
		payout.innerHTML = "<sup>$</sup>" + currentValue.toLocaleString("en-US", {minimumFractionDigits: 2, maximumFractionDigits: 2});
		if (payoutAd) {
			payoutAd.innerHTML = "<sup>$</sup>" + (currentValue*2).toLocaleString("en-US", {minimumFractionDigits: 2, maximumFractionDigits: 2});
		}
	}, 25);

	//Animate the scale based on an increasing or decreasing value
	payout.style.transition = ".15s all ease-out";
	payout.style.transform = (targetValue.toFixed(2) > currentValue) ? "scale(1.15)" : (targetValue.toFixed(2) < currentValue) ? "scale(0.85)" : "none";
	var intervalScale = setTimeout( 150);


	//Update the CTA link to the selected provider
	var cta = document.querySelector(".metabet-parlay-calculator-winnings-cta");
	if ((providerElement == null) || providerElement.dataset.provider.match(".+_NV")) {
		cta.href = "";
		cta.style.visibility = "hidden"
	} else if (mb_supportsBetSlipIntegration(providerElement.dataset.provider)) {
		cta.href = RUWT_REDIRECT_URL + "slip_" + window.location.hash.replace("#", "") + "/" + providerElement.dataset.provider.toLowerCase();
		cta.style.visibility = "visible";
	} else {
		cta.href = RUWT_REDIRECT_URL + mb_getParlaySelections()[0]["entity"]["gameID"] + "/" + providerElement.dataset.provider.toLowerCase();
		if (!cta.href.toLowerCase().match(".+_[a-z]{2}")) {
			cta.href += "_" + mb_getCurrentLocation().toLowerCase();
		}
		cta.style.visibility = "visible";
	}

	mb_paintParlayOptions();

}


function mb_getParlaySelections() {

	if (sessionStorage.getItem("metabet_parlaySelections") === null) {
		data = JSON.parse("{\"selections\": []}");
	} else {
		data = JSON.parse(sessionStorage.getItem("metabet_parlaySelections"));
	}

	return data["selections"];

}


function mb_createWagerHash(wagerID, line) {

	if (!wagerID || !line) {
		return "";
	}

	var hash = "";
	hash += wagerID.toString(16);
	if (line == "spreadLine1") {
		hash += "g";
	} else if (line == "spreadLine2") {
		hash += "h";
	} else if (line == "moneyLine1") {
		hash += "i";
	} else if (line == "moneyLine2") {
		hash += "j";
	} else if (line == "moneyLineTie") {
		hash += "k";
	} else if (line == "overUnderLineOver") {
		hash += "l";
	} else if (line == "overUnderLineUnder") {
		hash += "m";
	} else if (line == "price") {
		hash += "n";
	} else if (line == "price1") {
		hash += "o";
	} else if (line == "price2") {
		hash += "p";
	} else {
		//If we don'f recognize the line, return an empty hash
		return "";
	}
	return hash;

}


//Adds a wager to the list of selections for the parlay.  If the wager already
//exists in the list, it will be deleted.  If there are any already-selected
//wagers that conflict with this wager (like spreadLine2 vs spreadLine1), the
//existing wager will be deleted.
function mb_addWagerToParlay(line, entity, subentity, title) {

	//If this line for this entity has already been added,
	//remove it from the list
	if (mb_isWagerInParlay(line, entity, subentity)) {
		mb_removeWagerFromParlay(line, entity, subentity);
		return;
	}

	//Remove any parlays that would directly conflict with this selection.
	//Be sure to prevent mb_removeWagerFromParlay from updating the
	//winnings display, as we'll do that at the end of this method.
	if (line == "spreadLine1") {
		mb_removeWagerFromParlay("spreadLine2", entity, null, true);
	} else if (line == "spreadLine2") {
		mb_removeWagerFromParlay("spreadLine1", entity, null, true);
	} else if (line == "moneyLine1") {
		mb_removeWagerFromParlay("moneyLine2", entity, null, true);
		mb_removeWagerFromParlay("moneyLineTie", entity, null, true);
	} else if (line == "moneyLine2") {
		mb_removeWagerFromParlay("moneyLine1", entity, null, true);
		mb_removeWagerFromParlay("moneyLineTie", entity, null, true);
	} else if (line == "moneyLineTie") {
		mb_removeWagerFromParlay("moneyLine1", entity, null, true);
		mb_removeWagerFromParlay("moneyLine2", entity, null, true);
	} else if (line == "overUnderLineUnder") {
		mb_removeWagerFromParlay("overUnderLineOver", entity, null, true);
	} else if (line == "overUnderLineOver") {
		mb_removeWagerFromParlay("overUnderLineUnder", entity, null, true);
	} else if (line == "price1") {
		mb_removeWagerFromParlay("price2", entity, subentity, true);
	} else if (line == "price2") {
		mb_removeWagerFromParlay("price1", entity, subentity, true);
	}

	//Finally, make a special pass for SideOdds, looking for selections
	//that conflict less directly.
	if ((line == "price") || (line == "price1") || (line == "price2")) {
		mb_removeSideOddWagersFromParlay(entity, subentity);
	}


	//Create new wager
	var selection = {};
	selection["line"] = line;
	selection["entity"] = entity;
	if (subentity) {
		selection["subentity"] = subentity;
	}
	if (title) {
		selection["title"] = title;
	}

	if (entity.hasOwnProperty("sideOdds")) {
		selection["subtitle"] = entity["title"];
	}


	//Store the new wager
	var selections = mb_getParlaySelections();
	selections.unshift(selection);
	sessionStorage.setItem("metabet_parlaySelections", "{\"selections\":" + JSON.stringify(selections) + "}");

	mb_paintParlayWinnings();

}


function mb_removeWagerFromParlay(line, entity, subentity, skipUpdatingWinningsDisplay) {

	//Get current selections
	var selections = mb_getParlaySelections();
	if (selections.length == 0) {
		return;
	}


	//Search for the wager to remove in the current selections
	var index = null;
	for (var i=0; i<selections.length; i++) {
		if (selections[i]["line"] == line) {

			if (entity.hasOwnProperty("sideOdds")) {

				if ((entity["type"] == selections[i]["entity"]["type"])) {
					if ((!subentity.hasOwnProperty("gameID") || (subentity["gameID"] == selections[i]["subentity"]["gameID"])) && (!subentity.hasOwnProperty("teamID") || (subentity["teamID"] == selections[i]["subentity"]["teamID"])) && (!subentity.hasOwnProperty("playerID") || (subentity["playerID"] == selections[i]["subentity"]["playerID"]))) {
						index = i;
						break;
					}
				}

			} else if (
				(selections[i]["entity"].hasOwnProperty("playerID") && (selections[i]["entity"]["playerID"] == entity["playerID"])) ||
				(selections[i]["entity"].hasOwnProperty("teamID") && (selections[i]["entity"]["teamID"] == entity["teamID"])) ||
				(selections[i]["entity"].hasOwnProperty("gameID") && (selections[i]["entity"]["gameID"] == entity["gameID"]))
			) {
				index = i;
				break;
			}

		}
	}

	//Exit if we can't find the wager in the selection list
	if (index == null) {
		return;
	}


	//Remove the wager from the selections
	selections.splice(index, 1);

	//Re-store the modified selections list
	var data = {"selections": selections};
	sessionStorage.setItem("metabet_parlaySelections", JSON.stringify(data));


	//In some cases, like removing conflicting selections,
	//we don't want to update the winnings display
	if (!skipUpdatingWinningsDisplay) {
		mb_paintParlayWinnings();
	}

}


function mb_removeSideOddWagersFromParlay(market, sideOdd) {

	//Assume there are no possible conflicting selections to
	//remove if there are any Over/Under lines in the market
	for (var i=0; i<market["sideOdds"].length; i++) {
		if (market["sideOdds"][i].hasOwnProperty("price1") || market["sideOdds"][i].hasOwnProperty("price2")) {
			return;
		}
	}

	//Search for conflicting wagers matching the specified market
	//that need to be removed from the current selections
	mb_getParlaySelections().forEach(function(selection) {

		if (selection["entity"]["type"] == market["type"]) {
			mb_removeWagerFromParlay(selection["line"], selection["entity"], selection["subentity"], true);
		}

	});

}


//Removes all wager selections and triggers a screen repaint


//Returns true it the line for the specified entity is already selected
function mb_isWagerInParlay(line, entity, subentity) {

	var selections = mb_getParlaySelections();

	for (var i=0; i<selections.length; i++) {

		if (entity.hasOwnProperty("sideOdds")) {

			if ((entity["type"] == selections[i]["entity"]["type"]) && (line == selections[i]["line"])) {
				if ((!subentity.hasOwnProperty("gameID") || (subentity["gameID"] == selections[i]["subentity"]["gameID"])) && (!subentity.hasOwnProperty("teamID") || (subentity["teamID"] == selections[i]["subentity"]["teamID"])) && (!subentity.hasOwnProperty("playerID") || (subentity["playerID"] == selections[i]["subentity"]["playerID"]))) {
					return true;
				}
			}

		} else if ((selections[i]["entity"]["gameID"] == entity["gameID"]) && (selections[i]["line"] == line)) {
			return true;
		}

	}

	return false;

}





function mb_insertSideOddBrowser(stage) {

	if (!stage) {
		stage = document.querySelector(".metabet-side-odds-browser");
	}

	//Exit if there's no browser requested on the page
	if (stage == null) {
		return;
	}

	//Get passed-in parameters
	var country = "US";
	var location = null;
	var league = null;
	var query = null;
	stage.classList.forEach(function(className) {
		if (className.match("metabet-country-.*")) {
			country = className.replace(/metabet-country-/, "");
		} else if (className.match("metabet-location-.*")) {
			location = className.replace(/metabet-location-/, "");
		} else if (className.match("metabet-league-.*")) {
			league = className.replace(/metabet-league-/, "");
		} else if (className.match("metabet-query-.*")) {
			query = className.replace(/metabet-query-/, "");
		}
	});
	location = mb_getCurrentLocation(country, location);

	//Subscribe to resize media queries
	stage.setAttribute("metabet-observe-resizes", "");


	//Build the sidebar with team logo and options
	var sidebar = document.createElement("div");
	sidebar.className = "metabet-side-odds-browser-sidebar";
	stage.append(sidebar);

	//Sidebar container for "stickiness"
	var container = document.createElement("div");
	container.className = "metabet-side-odds-browser-container";
	sidebar.append(container);

	//Headshot/logo
	var img = document.createElement("img");
	img.className = "metabet-side-odds-browser-sidebar-hero";
	container.append(img);

	//Title
	var div = document.createElement("div");
	div.className = "metabet-side-odds-browser-sidebar-title";
	container.append(div);

	//Market navigation
	var ul = document.createElement("ul");
	ul.className = "metabet-side-odds-browser-sidebar-markets";
	container.append(ul);


	var header = document.createElement("div");
	header.className = "metabet-side-odds-browser-header";

	var img = document.createElement("img");
	img.src = "https://go.metabet.io/03325fb169d4ca908f52c07a4505bb8f/img/search.svg";
	header.appendChild(img);

	var search = document.createElement("input");
	search.className = "metabet-side-odds-browser-query";
	search.type = "text";
	search.placeholder = "Search for a Team or Player";
	header.append(search);
	mb_enableAutoComplete(search, league);

	var select = mb_createLocationSelector(country, location);
	select.addEventListener("change", function() {
		window.location.reload(true);
		mb_trackCustomization(stage, "location", this.value);
	});
	header.append(select);


	stage.append(header);


	var ol = document.createElement("ol");
	ol.className = "metabet-side-odds-browser-markets";
	stage.append(ol);

	var empty = document.createElement("div");
	empty.className = "metabet-side-odds-browser-empty";
	stage.append(empty);


	//Is a specific team or player being requested on first load?
	if (window.location.hash) {

		//If a hash is included, load the default team or player

		//Add a loading animation to the stage because we'll need
		//to make an added API request to populate the search textbox
		var loading = document.createElement("img");
		loading.classList.add("metabet-side-odds-browser-loading");
		loading.classList.add("metabet-loading");
		loading.src = "https://go.metabet.io/03325fb169d4ca908f52c07a4505bb8f/img/bars.svg";
		empty.insertAdjacentElement("beforebegin", loading);


		//Get the hash, removing any user-friendly labels
		var hash = window.location.hash.substring(1);
		if (hash.indexOf(".") != -1) {
			hash = hash.substring(0, hash.indexOf("."));
		}


		//Retrieve the label name for this query and then load the markets
		if (hash.substring(0, 1) == "t") {

			var query = "teamID=" + parseInt(hash.substring(1), 16);
			mb_getJSON("https://metabet.static.api.areyouwatchingthis.com/api/teams.json?apiKey=219f64094f67ed781035f5f7a08840fc&" + query, function(data) {
				if (data["results"].length > 0) {
					var team = data["results"][0];
					mb_loadSideOddBrowserMarkets(query, team["city"] + (team["name"] ? " " + team["name"] : team["nickname"] ? " " + team["nickname"] : ""));
				}
			});

		} else if (hash.substring(0, 1) == "p") {

			var query = "playerID=" + parseInt(hash.substring(1), 16);
			mb_getJSON("https://metabet.static.api.areyouwatchingthis.com/api/players.json?apiKey=219f64094f67ed781035f5f7a08840fc&" + query, function(data) {
				if (data["results"].length > 0) {
					var player = data["results"][0];
					mb_loadSideOddBrowserMarkets(query, mb_getPlayerName(player));
				}
			});

		}

	} else if (query) {

		//A team or player was specified in the embed
		mb_getJSON("https://metabet.static.api.areyouwatchingthis.com/api/sideodds.json?apiKey=219f64094f67ed781035f5f7a08840fc&location=" + location + "&q=" + query, function(data) {
			if (data.hasOwnProperty("teams")) {
				var team = data["teams"][0];
				mb_loadSideOddBrowserMarkets("teamID=" + team["teamID"], team["city"] + (team["name"] ? " " + team["name"] : team["nickname"] ? " " + team["nickname"] : ""));
			} else if (data.hasOwnProperty("players")) {
				var player = data["players"][0];
				mb_loadSideOddBrowserMarkets("playerID=" + player["playerID"], mb_getPlayerName(player));
			}
		});

	} else {

		//There is no team or player being passed in,
		//so enable the "blank" layout.
		stage.classList.add("metabet-side-odds-browser-blank");

		if (!stage.classList.contains("metabet-no-focus") && !false) {
			//Give the search box focus
			search.focus();
		}

	}

	//Track this render/view
	mb_trackRender(stage);

}


function mb_loadSideOddBrowserMarkets(query, title) {

	var element = document.querySelector(".metabet-side-odds-browser");

	//Update the searchbox with the selected entity title
	document.querySelector(".metabet-side-odds-browser-query").value = title;

	//Hide the autocomplete results
	mb_emptyElement(document.querySelector(".metabet-autocomplete-results"));

	//Make sure "blank" mode is turned off because we're about
	//to show markets
	element.classList.remove("metabet-side-odds-browser-blank");

	//Get selected location
	var location = document.querySelector(".metabet-side-odds-browser .metabet-selector-state").value;

	mb_getJSON("https://metabet.static.api.areyouwatchingthis.com/api/sideodds.json?apiKey=219f64094f67ed781035f5f7a08840fc&location=" + location + "&" + query, function(sideOddsData) {

		var markets = sideOddsData["results"];
		var providers = mb_getProvidersForLocation(location, element);

		//Empty the list of markets
		var ul = document.querySelector(".metabet-side-odds-browser-markets");
		mb_emptyElement(ul);

		//Empty the sidebar's list of markets
		mb_emptyElement(document.querySelector(".metabet-side-odds-browser-sidebar-markets"));

		markets.forEach(function(market) {

			var li = document.createElement("li");
			li.className = "metabet-side-odds-browser-market-" + market["type"];

			//Before starting to display this market, make sure
			//we have a valid option to display for a provider included
			//in the currently-selected location
			var hasValidOptions = false;
			for (var i=0; i<market["sideOdds"].length; i++) {
				if ((market["sideOdds"][i]["provider"] != "CONSENSUS") && (providers.indexOf(market["sideOdds"][i]["provider"]) != -1) && ((market["sideOdds"][i].hasOwnProperty("price") && (market["sideOdds"][i]["price"] > 1)) || (market["sideOdds"][i].hasOwnProperty("price1") && (market["sideOdds"][i]["price1"] > 1)))) {
					hasValidOptions = true;
					break;
				}
			}
			if (!hasValidOptions) {
				return;
			}


			//Add the title for this market
			var strong = document.createElement("strong");
			strong.innerHTML = market["title"];
			//If this market is game related, include the two teams
			if (market["sideOdds"][0].hasOwnProperty("gameID") && sideOddsData.hasOwnProperty("games")) {
				for (var i=0; i<sideOddsData["games"].length; i++) {
					if (sideOddsData["games"][i]["gameID"] == market["sideOdds"][0]["gameID"]) {
						if (sideOddsData["games"][i].hasOwnProperty("team1ID") && sideOddsData["games"][i].hasOwnProperty("team2ID")) {
							strong.innerHTML += "<em>(" + sideOddsData["games"][i]["team1Initials"] + "@" + sideOddsData["games"][i]["team2Initials"] + ")</em>";
							break;
						} else {
							strong.innerHTML += "<em>(" + sideOddsData["games"][i]["location"] + ")</em>";
							break;
						}
					}
				}
			}
			li.append(strong);

			var ol = document.createElement("ol");
			ol.className = "metabet-side-odds-browser-options";
			var bestPrice=null, bestPrice1=null, bestPrice2=null;
			for (var i=0; i<market["sideOdds"].length; i++) {

				var odds = market["sideOdds"][i];

				//We don't want to display Consensus odds, providers outside
				//of the current location, disabled lines, or books that we
				//don't know how to link to.
				if (odds["provider"] == "CONSENSUS") {
					continue;
				} else if (providers.indexOf(odds["provider"]) == -1) {
					continue;
				} else if (odds.hasOwnProperty("price") && (odds["price"] == 1)) {
					continue;
				} else if (!odds.hasOwnProperty("url")) {
					continue;
				}

				var li2 = document.createElement("li");

				a = mb_createBetRedirect(odds, null, location, element, title, odds["provider"].replace(RUWT_PROVIDER_SUFFIX_PATTERN, "") + " logo for " + market["title"]);
				var img = document.createElement("img");
				img.alt = "";
				img.src = mb_getProviderLogo(odds["provider"], location);
				a.appendChild(img);
				img = document.createElement("img");
				img.alt = "";
				img.src = mb_getProviderLogo(odds["provider"], location, true);
				a.appendChild(img);
				li2.append(a);

				var div = document.createElement("div");
				div.className = "metabet-side-odds-browser-options-promo";
				div.innerHTML = mb_getProviderPromo(odds["provider"]);
				li2.appendChild(div);

				if (odds.hasOwnProperty("price")) {

					a = mb_createBetRedirect(odds, null, location, element, title, odds["provider"].replace(RUWT_PROVIDER_SUFFIX_PATTERN, "") + " price for " + title + " - " + market["title"]);
					a.className = "metabet-side-odds-browser-options-bet";
					if (odds["price"] == bestPrice) {
						a.classList.add("metabet-side-odds-browser-options-bet-line-best");
					}
					a.innerHTML = mb_formatMoneyLineFromPrice(odds["price"]);
					li2.append(a);

				} else {

					a = mb_createBetRedirect(odds, "price2", location, element, title, odds["provider"].replace(RUWT_PROVIDER_SUFFIX_PATTERN, "") + " Over/Yes for " + title + " - " + market["title"]);
					a.className = "metabet-side-odds-browser-options-bet";
					if (odds["price2"] == bestPrice2) {
						a.classList.add("metabet-side-odds-browser-options-bet-line-best");
					}
					if (odds.hasOwnProperty("value")) {
						a.innerHTML += "<div>Under " + odds["value"] + "</div>";
						a.innerHTML += "<em>" + mb_formatMoneyLineFromPrice(odds["price2"]) + "</em>";
					} else {
						a.innerHTML = mb_formatMoneyLineFromPrice(odds["price2"]);
						a.innerHTML += "<em>No</em>";
					}
					li2.append(a);

					a = mb_createBetRedirect(odds, "price1", location, element, title, odds["provider"].replace(RUWT_PROVIDER_SUFFIX_PATTERN, "") + " Under/No for " + title + " - " + market["title"]);
					a.className = "metabet-side-odds-browser-options-bet";
					if (odds["price1"] == bestPrice1) {
						a.classList.add("metabet-side-odds-browser-options-bet-line-best");
					}
					if (odds.hasOwnProperty("value")) {
						a.innerHTML += "<div>Over " + odds["value"] + "</div>";
						a.innerHTML += "<em>" + mb_formatMoneyLineFromPrice(odds["price1"]) + "</em>";
					} else {
						a.innerHTML = mb_formatMoneyLineFromPrice(odds["price1"]);
						a.innerHTML += "<em>Yes</em>";
					}
					li2.append(a);

				}

				ol.append(li2);

			}
			li.append(ol);

			ul.append(li);


			//Add the market to the sidebar navigation
			var a = document.createElement("a");
			a.innerHTML = market["title"];
			a.addEventListener("click", function() {
				document.querySelector(".metabet-side-odds-browser-market-" + market["type"]).scrollIntoView({behavior: "smooth", block: "center"});
			});
			document.querySelector(".metabet-side-odds-browser-sidebar-markets").appendChild(a);

		});

		//Update the sidebar title
		document.querySelector(".metabet-side-odds-browser-sidebar-title").innerHTML = title;

		//If we've found at least one market to display, show a watermark
		if (ul.firstChild) {
			var li = document.createElement("li");
			li.className = "metabet-side-odds-browser-watermark";
			a = document.createElement("a");
			if (RUWT_ENABLE_ATTRIBUTION_LINKS) {
				a.href = mb_createMetaBetWebsiteReferralURL("side-odds-browser-watermark", query);
			}
			a.title = "Powered by MetaBet.io";
			a.target = "_blank";
			li.append(a);
			ul.append(li);
		}




		//Add the appropriate hero image
		var teamID = null;
		if (sideOddsData.hasOwnProperty("teams")) {
			teamID = sideOddsData["teams"][0]["teamID"];
		} else if (sideOddsData.hasOwnProperty("players")) {
			teamID = sideOddsData["players"][0]["teamID"];
		}
		if (teamID && !RUWT_ENABLE_GENERIC_TEAM_LOGOS) {
			document.querySelector(".metabet-side-odds-browser-sidebar-hero").src = mb_getTeamLogoURL(500, teamID);
			document.querySelector(".metabet-side-odds-browser-sidebar-hero").dataset.teamid = teamID;
		}



		//Search for an upcoming game with odds for the associated
		//team, inserting lines if we can find them
		if (teamID) {
			mb_getJSON("https://metabet.static.api.areyouwatchingthis.com/api/odds.json?apiKey=219f64094f67ed781035f5f7a08840fc&location=" + location + "&teamID=" + teamID, function(oddsData) {

				//Find a game to display
				var game;
				var betStyle = "classic";
				for (var i=0; i<oddsData["results"].length; i++) {
					if (!mb_isGameFinished(oddsData["results"][i])) {
						game = oddsData["results"][i];
						break;
					}
				}
				if (!game) {
					return;
				}


				var ul = document.querySelector(".metabet-side-odds-browser-markets");
				var li = document.createElement("li");
				li.className = "metabet-side-odds-browser-game";

				var isHomeTeam = (game["team2ID"] == teamID);
				var title = isHomeTeam ? mb_getHomeTeamDisplayName(game) + " (vs. " + mb_getAwayTeamDisplayName(game) + ")" : mb_getAwayTeamDisplayName(game) + " (at " + mb_getHomeTeamDisplayName(game) + ")";

				var strong = document.createElement("strong");
				strong.innerHTML = title.replace(/\(|\)/g, "");
				li.appendChild(strong);

				var ol = document.createElement("ol");
				ol.className = "metabet-side-odds-browser-options";
				var li2 = document.createElement("li");


				var line = "spreadLine" + (!isHomeTeam ? 1 : 2);
				var odds = mb_getBestGameOdds(game, line, true, location, element);

				var a = mb_createBetRedirect(odds, null, location, element, game["sport"], (!isHomeTeam ? mb_getAwayTeamDisplayName(game) : mb_getHomeTeamDisplayName(game)) + " To Win");
				a.append(mb_getTeamLogo(80, teamID, (!isHomeTeam ? game["team1Color"] : game["team2Color"]), (!isHomeTeam ? game["team1Initials"] : game["team2Initials"])));
				li2.append(a);

				var div = document.createElement("div");
				div.className = "metabet-side-odds-browser-game-description";
				div.innerHTML = game.hasOwnProperty("headline") ? "<strong style=\"display:block;padding-bottom:.5em\">" + game["headline"] + "</strong>" : "";
				div.innerHTML += game["location"] + " - " + mb_getUpcomingDateTime(game);
				li2.appendChild(div);


				if (odds) {

					a = mb_createBetRedirect(odds, line, location, element, query, "Spread for " + title);
					a.classList.add("metabet-side-odds-browser-options-bet");
					if (betStyle == "modern") {
						a.append(mb_stylePrice(betStyle, odds[line]));
					} else {
						a.innerHTML = mb_formatSpread(odds["spread"] * (!isHomeTeam ? -1 : 1));
						a.innerHTML += "<em>(" + (!isHomeTeam ? game["team1Initials"] : game["team2Initials"]) + ")</em>";
					}

					li2.appendChild(a);

				}

				line = "moneyLine" + (!isHomeTeam ? 1 : 2);
				odds = mb_getBestGameOdds(game, line, true, location, element);
				if (odds) {

					a = mb_createBetRedirect(odds, line, location, element, query, "Money Line for " + title);
					a.classList.add("metabet-side-odds-browser-options-bet");
					a.innerHTML = mb_stylePrice(betStyle, odds[line]);
					a.innerHTML += "<em>(" + (!isHomeTeam ? game["team1Initials"] : game["team2Initials"]) + ")</em>";
					li2.appendChild(a);

				}

				ol.appendChild(li2);
				li.appendChild(ol);

				ul.insertBefore(li, ul.firstChild);

			});
		}



		//Update the 'empty' message
		document.querySelector(".metabet-side-odds-browser-empty").innerHTML = "We don't have any " + title + " props to display right now.";

		//Hide any loading animations
		if (document.querySelector(".metabet-side-odds-browser-loading")) {
			element.removeChild(document.querySelector(".metabet-side-odds-browser-loading"));
		}

	});


	//Update hash to allow linking back to this query
	if (query) {
		var hash = query.substring(0, 1) + parseInt(query.replace(/[a-zA-Z]+=/, "")).toString(16);
		history.replaceState(null, null, "#" + hash + "." + title.replace(/[^A-Za-z0-9]+/g, ""));
	}

}



//Inserts a Futures Board
function mb_insertFuturesBoard(target) {

	var elements = target ? new Array(target) : document.getElementsByClassName("metabet-futures-board");

	Array.from(elements).forEach(function(element) {

		var a, div, option, select;

		//Build dictionary of all sports/leagues
				var ALL_SPORTS = ["MLB", "NBA", "NFL", "NHL", "NCAAB", "NCAAF", "EPL", "Ligue 1", "Bundesliga", "Serie A", "La Liga", "Champions League", "MLS", "Liga MX"];
		var ALL_LEAGUE_CODES = ["BBM", "BKP", "FBP", "HKN", "BKC", "FBC", "SOE", "SOF", "SOG", "SOI", "SOS", "SCB", "SOM", "SOX"];

		//Which sports/leagues do we want to display?
		var sports = ALL_SPORTS;

		//Get passed-in parameters
		var defaultSport = "nfl";
		var country = "US";
		var location = null;
		var query = null;
		var betStyle = "classic";
		element.classList.forEach(function(className) {
			if (className.match("metabet(-futures-board)?-league-.+")) {
				defaultSport = className.replace(/metabet(-futures-board)?-league-/, "").replace(/[-_]/, " ").toLowerCase();
			} else if (className.match("metabet-country-.*")) {
				country = className.replace(/metabet-country-/, "");
			} else if (className.match("metabet-location-.*")) {
				location = className.replace(/metabet-location-/, "");
			} else if (className.match("metabet-query-.*")) {
				query = className.replace(/metabet-query-/, "");
			} else if (className.match("metabet-style-.*")) {
				betStyle = className.replace(/metabet-style-/, "");
			} else if (className.match("metabet-rows-[0-9]+")) {
				element.dataset.rows = parseInt(className.replace(/metabet-rows-/, ""));
			}
		});
		location = mb_getCurrentLocation(country, location);

		//Subscribe to resize media queries
		element.setAttribute("metabet-observe-resizes", "");

		//Build odds board header
		var header = document.createElement("div");
		header.className = "metabet-futures-board-header";

		//Build sport selector
		select = document.createElement("select");
		select.classList.add("metabet-futures-board-sport");
		select.classList.add("select");
		select.addEventListener("change", function() {
			mb_getFuturesBoardData(element, null, betStyle);
			mb_trackCustomization(element, "league", this.value);
		});
		header.append(select);

		//Populate options in sport selector
		for (var i=0; i<ALL_SPORTS.length; i++) {

			//If this sport isn't in the list of sports we want to
			//display, and it's not the default/requested sport,
			//we will ignore it.
			if ((sports.indexOf(ALL_SPORTS[i]) == -1) && (defaultSport != ALL_SPORTS[i].toLowerCase())) {
				continue;
			}

			option = document.createElement("option");
			option.innerHTML = ALL_SPORTS[i];
			option.value = ALL_LEAGUE_CODES[i];
			if ((ALL_SPORTS[i].toLowerCase() == defaultSport) || (ALL_LEAGUE_CODES[i].toLowerCase() == defaultSport)) {
				option.selected = true;
			}
			select.appendChild(option);

		}
		element.append(header);


		//Build market selector
		select = document.createElement("select");
		select.classList.add("metabet-futures-board-market");
		select.classList.add("select");
		select.addEventListener("change", function() {
			mb_paintFuturesBoard(element, betStyle);
			mb_trackCustomization(element, "market", this.value);
		});
		header.append(select);

		//Build Search Box
		var input = document.createElement("input");
		input.classList.add("metabet-futures-board-search");
		//input.classList.add("metabet-futures-board-search-empty");
		input.placeholder = "Search for a team or player";
		input.type = "text";
		input.addEventListener("keyup", function(event) {

			//We don't care about key presses that don't modify the query
			if ((event.keyCode > 8) && (event.keyCode < 45)) {
				return;
			}
			mb_paintFuturesBoard(element, betStyle);

		});
		input.addEventListener("keydown", function(event) {
			if (event.keyCode == 27) {
				event.target.value = "";
				mb_paintFuturesBoard(element, betStyle);
				event.target.blur();
			}
		});
		input.addEventListener("focus", ;
		input.addEventListener("blur", ;

		//Add the search box if it's requested
		if (element.classList.contains("metabet-show-search")) {
			header.append(input);
		}


		//Build state selector
		var select = mb_createLocationSelector(country, location);
		select.addEventListener("change", function() {
			window.location.reload(true);
			mb_trackCustomization(element, "location", this.value);
		});
		header.append(select);

		//Add a spot for the customer logo
		div = document.createElement("div");
		div.className = "metabet-futures-board-customer-logo";
		element.appendChild(div);

		//Create the sticky provider header
		div = document.createElement("div");
		div.className = "metabet-futures-board-header-providers";
		element.appendChild(div);
		div.onscroll = function(e) {
			//Keep scroll point in sync with lines
			element.getElementsByClassName("metabet-futures-board-lines")[0].scrollLeft = e.target.scrollLeft;
		};

		//Create the stage for the entity labels
		div = document.createElement("div");
		div.className = "metabet-futures-board-entities";
		element.appendChild(div);

		//Create the stage for the lines
		div = document.createElement("div");
		div.className = "metabet-futures-board-lines";
		element.appendChild(div);
		div.onscroll = function(e) {
			//Keep scroll point in sync with providers
			element.getElementsByClassName("metabet-futures-board-header-providers")[0].scrollLeft = e.target.scrollLeft;
		};

		//Create the loading animation
		var img = document.createElement("img");
		img.classList.add("metabet-loading");
		img.src = "https://go.metabet.io/03325fb169d4ca908f52c07a4505bb8f/img/bars.svg";
		element.appendChild(img);

		//Create the banner used for error messages
		div = document.createElement("div");
		div.className = "metabet-futures-board-banner";
		element.appendChild(div);

		//Create the footer with the MetaBet logo
		div = document.createElement("div");
		div.className = "metabet-futures-board-footer";
		a = document.createElement("a");
		a.rel = "noopener";
		a.setAttribute("aria-label", "Powered by MetaBet");
		if (RUWT_ENABLE_ATTRIBUTION_LINKS) {
			a.href = mb_createMetaBetWebsiteReferralURL("futures-board-watermark");
		}
		a.target = "_blank";
		div.append(a);
		element.appendChild(div);

		//Now that the stage is built, fetch data and paint
		mb_getFuturesBoardData(element, query, betStyle, true, country, location);

	});

}


var MB_FUTURES_BOARD_DATA = [];
var MB_FUTURES_BOARD_PLAYERS = [];
var MB_FUTURES_BOARD_TEAMS = [];
var MB_FUTURES_BOARD_GAMES = [];
function mb_getFuturesBoardData(element, query, betStyle, isInitialLoad, country, location) {

	var location = mb_getCurrentLocation(country, location);

	//Enable loading mode
	element.classList.add("metabet-futures-board-loading");
	element.classList.remove("metabet-futures-board-empty");


	//Clear out the existing market list while we fetch new data
	var select = element.querySelector(".metabet-futures-board-market");
	mb_emptyElement(select);

	var url = "https://metabet.static.api.areyouwatchingthis.com/api/sideodds.json?apiKey=219f64094f67ed781035f5f7a08840fc&location=" + location;
	if (query) {
		//A specific query has been specified
		url += "&q=" + query;
	} else {
		//Query based on the selected league/sport
		url += "&leagueCode=" + element.querySelector(".metabet-futures-board-sport").value + (element.classList.contains("metabet-show-game-specific-markets") ? "&includeGameSpecificMarkets" : "");
	}

	mb_getJSON(url, function(data) {

		MB_FUTURES_BOARD_DATA = data["results"];
		MB_FUTURES_BOARD_PLAYERS = data["players"];
		MB_FUTURES_BOARD_TEAMS = data["teams"];
		MB_FUTURES_BOARD_GAMES = data["games"];

		var defaultMarket = null;

		if (query) {

			//If a specific query was specified, try to figure out
			//the subject league code so we can highlight it in the
			//league/sport dropdown
			var leagueCode = null;
			var sport = null;
			if (MB_FUTURES_BOARD_GAMES) {
				leagueCode = MB_FUTURES_BOARD_GAMES[0]["leagueCode"];
			} else if (MB_FUTURES_BOARD_TEAMS) {
				leagueCode = MB_FUTURES_BOARD_TEAMS[0]["leagueCode"];
			} else if (MB_FUTURES_BOARD_PLAYERS) {
				sport = MB_FUTURES_BOARD_PLAYERS[0]["sport"];
			}

			if (leagueCode) {
				element.querySelectorAll(".metabet-futures-board-sport option").forEach(;
			} else if (sport) {
				element.querySelectorAll(".metabet-futures-board-sport option").forEach(function(option) {
					option.selected = (option.text.toLowerCase() == sport.toLowerCase());
				});
			}

		} else {

			//Search for a default market to display
			element.classList.forEach(function(className) {
				if (className.match("metabet-(futures-board-)?market-.*")) {
					defaultMarket = className.replace(/metabet-(futures-board-)?market-/, "").toUpperCase();
				}
			});

		}




		//Create all of the possible groupings for these markets.
		//Empty groupings will be removed later.
		var groupingTeams = document.createElement("optgroup");
		groupingTeams.label = "Team Futures";
		select.appendChild(groupingTeams);

		var groupingPlayers = document.createElement("optgroup");
		groupingPlayers.label = "Player Futures";
		select.appendChild(groupingPlayers);

		var groupingGameProps = document.createElement("optgroup");
		groupingGameProps.label = "Game Props";
		select.appendChild(groupingGameProps);

		//If these are game-related markets, create a grouping for each game
		if (MB_FUTURES_BOARD_GAMES) {
			MB_FUTURES_BOARD_GAMES.forEach(function(game) {
				var grouping = document.createElement("optgroup");
				grouping.dataset.gameid = game["gameID"];
				if (!game.hasOwnProperty("team1ID") && !game.hasOwnProperty("team2ID")) {
					grouping.label = new Date(game["date"]).getFullYear() + " " + game["location"];
				} else if (mb_hasIndividualCompetitors(game)) {
					grouping.label = game["team1City"] + " vs. " + game["team2City"];
				} else {
					grouping.label = game["team1Initials"] + " vs. " + game["team2Initials"];
				}
				select.appendChild(grouping);

			});
		}


		//Add each market to a grouping in the selector
		MB_FUTURES_BOARD_DATA.forEach(function(market) {

			var option = document.createElement("option");
			option.innerHTML = market["title"];
			option.dataset.market = market["type"];
			if (market.hasOwnProperty("gameID") && MB_FUTURES_BOARD_GAMES && mb_hasIndividualCompetitors(MB_FUTURES_BOARD_GAMES[0])) {
				//Add a gameID filter if this is a game with
				//individual competitors so we don't mix props
				//for players across different games/tournaments
				option.dataset.gameID = market["gameID"];
			}
			if (market["type"] == defaultMarket) {
				option.selected = true;
			}

			if ((MB_FUTURES_BOARD_TEAMS === undefined) || (MB_FUTURES_BOARD_GAMES && mb_hasIndividualCompetitors(MB_FUTURES_BOARD_GAMES[0]))) {
				//If there are no team entities included,
				//this is likely a league with a field so
				//don't use the traditional team/player groupings
				if (market["gameID"] && select.querySelector("optgroup[data-gameid='" + market["gameID"] + "']")) {
					select.querySelector("optgroup[data-gameid='" + market["gameID"] + "']").appendChild(option);
				} else {
					select.appendChild(option);
				}
			} else if (market["sideOdds"][0].hasOwnProperty("gameID") && market["sideOdds"][0].hasOwnProperty("playerID")) {
				//Add game-specific player markets, making sure each
				//market is displayed once across all games
				if (!groupingGameProps.querySelector("option[data-market='" + option.dataset.market + "']")) {
					groupingGameProps.appendChild(option);
				}
			} else if (market["sideOdds"][0].hasOwnProperty("playerID")) {
				//Season-long player markets
				groupingPlayers.appendChild(option);
			} else if (market["sideOdds"][0].hasOwnProperty("teamID") && !market["sideOdds"][0].hasOwnProperty("gameID")) {
				//Season-long team markets
				groupingTeams.appendChild(option);
			}

		});

		//Remove any market groupings that are empty
		var groupings = select.querySelectorAll("optgroup");
		for (var i=0; i<groupings.length; i++) {
			if (groupings[i].children.length == 0) {
				select.removeChild(groupings[i]);
			}
		}

		//If we have at least one market to display and a
		//default market wasn't specified, ensure that the
		//first option is selected.
		if (!defaultMarket && (select.length > 0)) {
			select.selectedIndex = 0;
		}

		//If we don't have any markets to display for this spot,
		//show an empty message
		var leagueName = element.querySelector(".metabet-futures-board-sport").options[element.querySelector(".metabet-futures-board-sport").selectedIndex].text;
		element.querySelector(".metabet-futures-board-banner").innerHTML = "We don't have any " + leagueName + " futures to display right now."
		element.classList.toggle("metabet-futures-board-empty", (select.children.length == 0));

		//Paint the board
		mb_paintFuturesBoard(element, betStyle, isInitialLoad);

	});

}


function mb_paintFuturesBoard(element, betStyle, isInitialLoad) {

	var headerHeight = "var(--metabet-futures-board-header-height)";
	var league = element.querySelector(".metabet-futures-board-sport").value;

	//Which market are we about to show?
	var selectedIndex = element.querySelector(".metabet-futures-board-market").selectedIndex;
	var selectedMarket = element.querySelector(".metabet-futures-board-market").options[selectedIndex].dataset.market;
	var selectedMarketGameID = element.querySelector(".metabet-futures-board-market").options[selectedIndex].dataset.gameID;

	//Which location is selected?
	var location = element.querySelector(".metabet-selector-state").value;

	//Which providers are we allowed to show?
	var providers = mb_getProvidersForLocation(location, element);

	//Do we want to show the Consensus column
	var showConsensus = !element.classList.contains("metabet-futures-board-hide-consensus") && !element.classList.contains("metabet-hide-consensus") && !RUWT_SITE_FAMILY_CATENA;

	//Is the search box being used?
	var search = null;
	if (element.querySelector(".metabet-futures-board-search")) {
		search = element.querySelector(".metabet-futures-board-search").value.toLowerCase().trim();
	}

	//SideOdds aren't available from some providers
	if (providers.indexOf("RESORTS") != -1) {
		providers.splice(providers.indexOf("RESORTS"), 1);
	}
	if (providers.indexOf("TIPICO") != -1) {
		providers.splice(providers.indexOf("TIPICO"), 1);
	}
	if (providers.indexOf("WYNN") != -1) {
		providers.splice(providers.indexOf("WYNN"), 1);
	}


	//Add each entity we're going to display
	var entities = element.querySelector(".metabet-futures-board-entities");
	mb_emptyElement(entities);
	var entityIDs = [];
	var entityLabels = [];
	var isOverUnderMarket = false;


	//Build out list of all sideodds we might display for this market
	var sideOdds = new Array();
	var doesMarketHaveConsensus = false;
	MB_FUTURES_BOARD_DATA.forEach(function(market) {

		//Search for the currently selected market
		if (market["type"] != selectedMarket) {
			//Skip this market if it's not the selected one
			return;
		} else if (MB_FUTURES_BOARD_GAMES && mb_hasIndividualCompetitors(MB_FUTURES_BOARD_GAMES[0]) && ((!market["gameID"] && selectedMarketGameID) || (market["gameID"] && !selectedMarketGameID) || (selectedMarketGameID && (market["gameID"] != selectedMarketGameID)))) {
			//Skip this market if it has individual competitors
			//and there isn't an exact gameID match
			return;
		}

		//Add all of the sideodds in the market
		for (var i=0; i<market["sideOdds"].length; i++) {
			sideOdds.push(market["sideOdds"][i]);
			if (market["sideOdds"][i]["provider"] == "CONSENSUS") {
				doesMarketHaveConsensus = true;
			}
		}

	});


	//If this is a game-specific player market, we'll
	//want to sort these items in an order other than price.
	//NOTE: They're sorted in reverse order as they will
	//be added to the display in reverse order.
	if ((sideOdds.length > 0) && sideOdds[0].hasOwnProperty("gameID") && sideOdds[0].hasOwnProperty("playerID")) {

		sideOdds.sort(function(s1,s2) {

			//Try to sort by value
			if (s1.hasOwnProperty("value") && s2.hasOwnProperty("value")) {
				if (s1["value"] != s2["value"]) {
					return s1["value"] - s2["value"];
				}
			}

			//Try to sort by price
			var price1 = s1.hasOwnProperty("price") ? s1["price"] : s1["price1"];
			var price2 = s2.hasOwnProperty("price") ? s2["price"] : s2["price1"];
			if (price1 && price2 && (price1 != price2)) {
				return price2 - price1;
			}


			//If we can't sport by value or price, sort by player name
			var player1ID = s1["playerID"];
			var player2ID = s2["playerID"];
			var name1=null, name2=null;

			if (player1ID != player2ID) {

				for (var i=0; i<MB_FUTURES_BOARD_PLAYERS.length; i++) {
					if (player1ID == MB_FUTURES_BOARD_PLAYERS[i]["playerID"]) {
						name1 = mb_getPlayerName(MB_FUTURES_BOARD_PLAYERS[i]);
						if (name1.indexOf(" ") != -1) {
							name1 = name1.split(" ")[1] + ", " + name1.split(" ")[0];
						}
					} else if (player2ID == MB_FUTURES_BOARD_PLAYERS[i]["playerID"]) {
						name2 = mb_getPlayerName(MB_FUTURES_BOARD_PLAYERS[i]);
						if (name2.indexOf(" ") != -1) {
							name2 = name2.split(" ")[1] + ", " + name2.split(" ")[0];
						}
					}
					if (name1 && name2) {
						break;
					}
				}

			}

			if (name1 && name2) {
				return name1.localeCompare(name2) * -1;
			} else {
				return JSON.stringify(s1).localeCompare(JSON.stringify(s2));
			}

		});

	}


	var rowCount = Math.min(sideOdds.length, element.dataset.rows ? element.dataset.rows : Number.MAX_SAFE_INTEGER);
	var hasNonConsensusLines;
	for (var i=sideOdds.length-1; i>=0; i--) {

		//Exit if we've already hit the number of rows we want to display
		if (entityIDs.length >= rowCount) {
			continue;
		}

		var odds = sideOdds[i];
		if (odds.hasOwnProperty("playerID") && (entityIDs.indexOf(odds["playerID"]) != -1)) {
			continue;
		} else if (odds.hasOwnProperty("teamID") && (entityIDs.indexOf(odds["teamID"]) != -1)) {
			continue;
		} else if (doesMarketHaveConsensus && (odds["provider"] != "CONSENSUS")) {
			//Only consider CONSENSUS to make sure entities
			//are shown sorted by that column's value.  On the
			//off chance that there are no Consensus lines set
			//in this market, just use whwatever we have.
			continue;
		}

		var div = document.createElement("div");

		//Add a label for this entity
		if (odds.hasOwnProperty("playerID")) {

			//Ensure we have non-Consensus lines for this player
			hasNonConsensusLines = false;
			for (var j=0; j<sideOdds.length; j++) {
				if ((sideOdds[j]["provider"] != "CONSENSUS") && sideOdds[j].hasOwnProperty("playerID") && (sideOdds[j]["playerID"] == odds["playerID"])) {
					hasNonConsensusLines = true;
					break;
				}
			}
			if (!hasNonConsensusLines) {
				continue;
			}

			//Find this player's name
			for (var j=0; j<MB_FUTURES_BOARD_PLAYERS.length; j++) {
				if (MB_FUTURES_BOARD_PLAYERS[j]["playerID"] == odds["playerID"]) {
					var img = document.createElement("img");
					img.classList.add("metabet-team-logo");
					img.width = "25";
					img.height = "25";
					img.alt = "";
					if (MB_FUTURES_BOARD_PLAYERS[j]["sport"] == "golf") {
						img.style.display = "none";
					} else if (MB_FUTURES_BOARD_PLAYERS[j].hasOwnProperty("teamID") && !RUWT_ENABLE_GENERIC_TEAM_LOGOS) {
						img.src = mb_getTeamLogoURL(80, MB_FUTURES_BOARD_PLAYERS[j]["teamID"]);
					} else {
						img.style.visibility = "hidden";
					}
					div.append(img);

					var span = document.createElement("span");
					span.innerHTML = mb_getPlayerName(MB_FUTURES_BOARD_PLAYERS[j], true);
					div.append(span);
					break;
				}
			}

		} else if (odds.hasOwnProperty("teamID")) {

			//Find this team's name
			for (var j=0; j<MB_FUTURES_BOARD_TEAMS.length; j++) {
				if (MB_FUTURES_BOARD_TEAMS[j]["teamID"] == odds["teamID"]) {

					if (!mb_hasIndividualCompetitors(MB_FUTURES_BOARD_TEAMS[j])) {
						div.append(mb_getTeamLogo(80, MB_FUTURES_BOARD_TEAMS[j]["teamID"], MB_FUTURES_BOARD_TEAMS[j]["color"], MB_FUTURES_BOARD_TEAMS[j]["initials"], MB_FUTURES_BOARD_TEAMS[j]));
					}

					var span = document.createElement("span");
					span.innerHTML = mb_getTeamDisplayName(MB_FUTURES_BOARD_TEAMS[j]);
					div.append(span);
					break;
				}
			}

		}

		//If there's an active search, skip this entity if it doesn't match
		if (search && (div.innerText.toLowerCase().indexOf(search) == -1)) {
			continue;
		}


		entityIDs.push(odds.hasOwnProperty("playerID") ? odds["playerID"] : odds["teamID"]);
		entityLabels.push(div.innerText);
		entities.appendChild(div);

		//If this is an Over/Under market
		//we will give each row more vertical room
		if (odds.hasOwnProperty("price1")) {
			isOverUnderMarket = true;
		}

	}


	//Tag the lines section with the type of entity in this market.
	//This is helpful for toggling the CTA between teams and players.
	var lines = element.querySelector(".metabet-futures-board-lines");
	lines.classList.remove("metabet-futures-board-lines-entity-player");
	lines.classList.remove("metabet-futures-board-lines-entity-team");
	if (sideOdds.length > 0) {
		if (sideOdds[0].hasOwnProperty("playerID")) {
			lines.classList.add("metabet-futures-board-lines-entity-player");
		} else if (sideOdds[0].hasOwnProperty("teamID")) {
			lines.classList.add("metabet-futures-board-lines-entity-team");
		}
	}


	var rowHeight = (isOverUnderMarket) ? 105 : 80;

	//Now that we know the number of entities, set up the grid
	entities.style.gridTemplate = "repeat(" + entityIDs.length + ", " + rowHeight + "px) / auto";



	//Display each line for each book for this market
	var lines = element.querySelector(".metabet-futures-board-lines");
	mb_emptyElement(lines);
	lines.classList.toggle("metabet-futures-board-lines-over-under", isOverUnderMarket);
	lines.style.gridTemplateRows = "repeat(" + entityIDs.length + ", " + rowHeight + "px)";

	try {
		//Add custom style to <head> that will allow columns to narrow
		//when the device viewport approaches mobile width
		var style = document.querySelector("style.metabet-futures-board-lines-style");
		if (style == null) {
			style = document.createElement("style");
			style.classList.add("metabet-futures-board-lines-style");
			style.type = "text/css";
			document.head.appendChild(style);
		}
		mb_emptyElement(style);
		style.appendChild(document.createTextNode(".metabet-futures-board-lines, .metabet-futures-board-header-providers { grid-template-columns: " + (showConsensus ? "" : "0px") + " repeat(" + (providers.length - (showConsensus ? 0 : 1)) + ", minmax(160px, 1fr)) }"));
		style.appendChild(document.createTextNode(".metabet-futures-board:not(.metabet-size-s) .metabet-futures-board-lines, .metabet-futures-board:not(.metabet-size-s) .metabet-futures-board-header-providers { grid-template-columns: " + (showConsensus ? "" : "0px") + " repeat(" + (providers.length - (showConsensus ? 0 : 1)) + ", minmax(90px, 1fr)) } "));
		style.appendChild(document.createTextNode(".metabet-futures-board:not(.metabet-size-xs) .metabet-futures-board-lines, .metabet-futures-board:not(.metabet-size-xs) .metabet-futures-board-header-providers { grid-template-columns: " + (showConsensus ? "" : "0px") + " repeat(" + (providers.length - (showConsensus ? 0 : 1)) + ", minmax(80px, 1fr)) } "));
	} catch (error) {}


	//Create header of provider logos
	var headerProviders = element.getElementsByClassName("metabet-futures-board-header-providers")[0];
	mb_emptyElement(headerProviders);
	for (var i=0; i<providers.length; i++) {

		div = document.createElement("div");
		div.className = "metabet-futures-board-provider";
		div.classList.toggle("metabet-provider-disabled", mb_isProviderDisabled(providers[i]));
		div.style.gridArea = "1 / " + (i+1) + " / 2 / " + (i+2);
		a = mb_createProviderRedirect(element, null, providers[i], location);
		if (providers[i] == "CONSENSUS") {
			if (showConsensus) {
				a.innerHTML = "Consensus";
				div.classList.add("metabet-futures-board-provider-consensus");
			} else {
				continue;
			}
		} else {
			span = document.createElement("span");
			span.classList.add("metabet-board-provider-logo");
			span.classList.add("metabet-board-provider-logo-" + providers[i].replace(RUWT_PROVIDER_SUFFIX_PATTERN, "").toLowerCase());
			span.classList.add("metabet-board-provider-location-" + location.toLowerCase());
			if (!RUWT_ENABLE_OUTBOUND_LINKS) {
				a.removeAttribute("href");
			}
			a.append(span);
			span = document.createElement("span");
			span.className = "metabet-futures-board-provider-promo";
			span.innerHTML = mb_getProviderPromo(providers[i]);
			a.append(span);
			mb_populateBetRedirectTracking(a, element, providers[i]);
		}
		div.append(a);
		headerProviders.append(div);

	}


	var subtitle;

	//Check if there is a selected game and if it has started
	var hasSelectedMarketGameStarted = false;
	if (selectedMarketGameID && MB_FUTURES_BOARD_GAMES) {
		for (var i=0; i<MB_FUTURES_BOARD_GAMES.length; i++) {
			if ((MB_FUTURES_BOARD_GAMES[i]["gameID"] == selectedMarketGameID) && MB_FUTURES_BOARD_GAMES[i].hasOwnProperty("timeLeft")) {
				hasSelectedMarketGameStarted = true;
				break;
			}
		}
	}


	for (var i=0; i<entityIDs.length; i++) {

		//Calculate the best available prices for this entity
		var bestPrice = null;
		var bestPrice1 = null;
		var bestPrice2 = null;

		sideOdds.forEach(function(odds) {

			//Ignore these odds if it's not for this entity
			if (entityIDs[i] != (odds.hasOwnProperty("playerID") ? odds["playerID"] : odds["teamID"])) {
				return;
			}

			//Ignore these odds if it's from a provider we don't want
			//or if there's only one provider (plus Consensus) to display
			if ((providers.length <= 2) || (providers.indexOf(odds["provider"]) == -1)) {
				return;
			}

			if (false) {
				//Disable best-line highlighting for some customers,
				//including those showing only one book
				return;
			}

			if (odds.hasOwnProperty("price") && (!bestPrice || (odds["price"] > bestPrice))) {
				bestPrice = odds["price"];
			}
			if (odds.hasOwnProperty("price1") && (!bestPrice1 || (odds["price1"] > bestPrice1))) {
				bestPrice1 = odds["price1"];
			}
			if (odds.hasOwnProperty("price2") && (!bestPrice2 || (odds["price2"] > bestPrice2))) {
				bestPrice2 = odds["price2"];
			}

		});


		var consensusDiv = null;
		for (var j=0; j<providers.length; j++) {

			var div = document.createElement("div");
			div.style.gridArea = (i+1) + " / " + (j+1) + " /  " + (i+2) + " / " + (j+2);
			if (providers[j] == "CONSENSUS") {
				if (showConsensus) {
					consensusDiv = div;
					div.classList.add("metabet-futures-board-provider-consensus");
				} else {
					continue;
				}
			}
			div.classList.toggle("metabet-provider-disabled", mb_isProviderDisabled(providers[j]));
			lines.appendChild(div);


			sideOdds.every(function(odds) {

				if (entityIDs[i] != (odds.hasOwnProperty("playerID") ? odds["playerID"] : odds["teamID"])) {
					return true;
				} else if (providers[j] != odds["provider"]) {
					return true;
				} else if (hasSelectedMarketGameStarted && (RUWT_PROVIDERS_NOT_UPDATING_IN_PLAY.indexOf(providers[j]) != -1)) {
					//Hide lines from this provider if it's an in-progress game
					return true;
				}


				var a;
				subtitle = element.querySelector(".metabet-futures-board-market").value + " - " + entityLabels[i] + " - " + odds["provider"];
				if (odds.hasOwnProperty("price")) {

					a = mb_createBetRedirect(odds, null, location, element, league, subtitle);
					a.className = "metabet-futures-board-line-price metabet-board-price";
					mb_populateFuturesBoardCell(a, betStyle, odds, location, bestPrice);
					mb_populateBetRedirectTracking(a, element, odds["provider"], i, consensusDiv);
					div.appendChild(a);

				} else if (odds.hasOwnProperty("price1") && odds.hasOwnProperty("price2")) {

					a = mb_createBetRedirect(odds, "price1", location, element, league, subtitle + " Over/Yes");
					a.className = "metabet-futures-board-line-price1 metabet-board-price";
					mb_populateFuturesBoardCell(a, betStyle, odds, location, bestPrice1);
					mb_populateBetRedirectTracking(a, element, odds["provider"], i, consensusDiv);
					div.appendChild(a);

					a = mb_createBetRedirect(odds, "price2", location, element, league, subtitle + " Under/No");
					a.className = "metabet-futures-board-line-price2 metabet-board-price";
					mb_populateFuturesBoardCell(a, betStyle, odds, location, bestPrice2);
					mb_populateBetRedirectTracking(a, element, odds["provider"], i, consensusDiv);
					div.appendChild(a);

				}

				if (odds.hasOwnProperty("price") || (odds.hasOwnProperty("price1") && odds.hasOwnProperty("price2"))) {
					if ((odds["provider"] != "CONSENSUS") && RUWT_ENABLE_OUTBOUND_LINKS) {
						a = mb_createBetRedirect(odds, null, location, element, league, "CTA for " + selectedMarket + " at " + odds["provider"]);
						a.className = "metabet-futures-board-bet-cta";
						mb_populateBetRedirectTracking(a, element, odds["provider"], i, consensusDiv);
						div.appendChild(a);
					}
				}

				return false;

			});

		}

	}

	//Finally, remove loading mode
	element.classList.remove("metabet-futures-board-loading");

	//Track this element render/view if it's the initial load
	if (isInitialLoad) {
		mb_trackRender(element);
	}

}


function mb_populateFuturesBoardCell(container, betStyle, odds, location, bestPrice) {

	if (container.classList.contains("metabet-futures-board-line-price")) {

		if (betStyle == "vegas") {
			container.innerHTML = mb_formatMoneyLineFromPrice(odds["price"]);
		} else {
			container.innerHTML = mb_stylePrice(betStyle, odds["price"]);
		}

		//Highlight if this is the best price
		if (odds["provider"] != "CONSENSUS") {
			container.classList.toggle("metabet-futures-board-line-best", (bestPrice && (Math.round(bestPrice*RUWT_BEST_ODD_MATCH_SENSITIVITY)/RUWT_BEST_ODD_MATCH_SENSITIVITY == Math.round(odds["price"]*RUWT_BEST_ODD_MATCH_SENSITIVITY)/RUWT_BEST_ODD_MATCH_SENSITIVITY)));
		}

	} else if (container.classList.contains("metabet-futures-board-line-price1")) {

		if (odds.hasOwnProperty("value")) {

			//An Over/Under line
			container.innerHTML += "<div class=\"metabet-futures-board-line-value\">Over " + (odds["value"] * 2).toFixed()/2 + "</div>";
			container.innerHTML += "<div class=\"metabet-futures-board-line-value-short\">o" + (odds["value"] * 2).toFixed()/2 + "</div>";
			if ((betStyle == "classic") || (betStyle == "vegas")) {
				container.innerHTML += "<em>" + mb_formatMoneyLineFromPrice(odds["price1"]) + "</em>";
			} else if (betStyle == "modern") {
				container.innerHTML += "<em>$" + (RUWT_BASE_BET * odds["price1"]).toFixed(0) + "</em>";
			}

		} else {

			//A Yes/No line
			if ((betStyle == "classic") || (betStyle == "vegas")) {
				container.innerHTML += mb_formatMoneyLineFromPrice(odds["price1"]);
			} else if (betStyle == "modern") {
				container.innerHTML += "$" + (RUWT_BASE_BET * odds["price1"]).toFixed(0);
			}
			container.innerHTML += "<em>Yes</em>";

		}

		//Highlight if this is the best price1
		if (odds["provider"] != "CONSENSUS") {
			container.classList.toggle("metabet-futures-board-line-best", (bestPrice && (Math.round(bestPrice*RUWT_BEST_ODD_MATCH_SENSITIVITY)/RUWT_BEST_ODD_MATCH_SENSITIVITY == Math.round(odds["price1"]*RUWT_BEST_ODD_MATCH_SENSITIVITY)/RUWT_BEST_ODD_MATCH_SENSITIVITY)));
		}

	} else if (container.classList.contains("metabet-futures-board-line-price2")) {

		if (odds.hasOwnProperty("value")) {

			//An Over/Under line
			container.innerHTML += "<div class=\"metabet-futures-board-line-value\">Under " + (odds["value"] * 2).toFixed()/2 + "</div>";
			container.innerHTML += "<div class=\"metabet-futures-board-line-value-short\">u" + (odds["value"] * 2).toFixed()/2 + "</div>";
			if ((betStyle == "classic") || (betStyle == "vegas")) {
				container.innerHTML += "<em>" + mb_formatMoneyLineFromPrice(odds["price2"]) + "</em>";
			} else if (betStyle == "modern") {
				container.innerHTML += "<em>$" + (RUWT_BASE_BET * odds["price2"]).toFixed(0) + "</em>";
			}

		} else {

			//A Yes/No line
			if ((betStyle == "classic") || (betStyle == "vegas")) {
				container.innerHTML += mb_formatMoneyLineFromPrice(odds["price2"]);
			} else if (betStyle == "modern") {
				container.innerHTML += "$" + (RUWT_BASE_BET * odds["price2"]).toFixed(0);
			}
			container.innerHTML += "<em>No</em>";

		}

		//Highlight if this is the best price2
		if (odds["provider"] != "CONSENSUS") {
			container.classList.toggle("metabet-futures-board-line-best", (bestPrice && (Math.round(bestPrice*RUWT_BEST_ODD_MATCH_SENSITIVITY)/RUWT_BEST_ODD_MATCH_SENSITIVITY == Math.round(odds["price2"]*RUWT_BEST_ODD_MATCH_SENSITIVITY)/RUWT_BEST_ODD_MATCH_SENSITIVITY)));
		}

	}

}






function mb_insertProviderRankings() {

	//Build out provider data: slug, name, Android rating, iOS rating
	var allProviders = new Array();
	allProviders.push(new Array("DRAFTKINGS", "DraftKings", 4.5, 4.9));
	allProviders.push(new Array("WILLIAM_HILL", "Caesars", 4.4, 4.6));
	allProviders.push(new Array("FANDUEL", "FanDuel", 4, 4.8));
	allProviders.push(new Array("POINTSBET", "PointsBet", 3.9, 4.4));
	allProviders.push(new Array("TWINSPIRES", "TwinSpires", 3.8, 4.3));
	allProviders.push(new Array("BET_RIVERS_MI", "BetRivers", 4.0, null));
	allProviders.push(new Array("MGM", "BetMGM", 3.0, 4.8));
	allProviders.push(new Array("FOXBET", "FOX Bet", 2.8, 4.5));
	allProviders.push(new Array("BET_RIVERS_CO", "BetRivers", 3.2, 3.8));
	allProviders.push(new Array("SUGAR_HOUSE_NJ", "SugarHouse", 4.1, 2.7));
	allProviders.push(new Array("BET_RIVERS_IA", "BetRivers", 2.4, 4.3));
	allProviders.push(new Array("BET_RIVERS_VA", "BetRivers", null, 3.0));
	allProviders.push(new Array("BET_RIVERS_IL", "BetRivers", 3.5, 2.5));
	allProviders.push(new Array("BET_RIVERS_IN", "BetRivers", 3.4, 2.6));

	Array.from(document.getElementsByClassName("metabet-provider-rankings")).forEach(function(element) {

		//Get the user's current location or the requested one
		var location = mb_getCurrentLocation();
		element.classList.forEach(function(className) {
			if (className.match("metabet-location-.*")) {
				location = className.replace(/metabet-location-/, "");
			}
		});

		//Subscribe to resize media queries
		element.setAttribute("metabet-observe-resizes", "");

		//Filter available providers
		var providers = new Array();
		allProviders.forEach(function(allProvider) {
			mb_getProvidersForLocation(location, element).forEach(function(provider) {
				if (provider.indexOf(allProvider[0]) == 0) {
					providers.push(allProvider);
				}
			});
		});

		var table, caption, thead, tbody, tr, td, th, strong, a, div;

		strong = document.createElement("strong");
		strong.innerText = "Top Betting Sites";
		element.append(strong);

		table = document.createElement("table");

		thead = document.createElement("thead");
		tr = document.createElement("tr");

		th = document.createElement("th");
		th.className = "metabet-provider-rankings-ranking";
		th.innerText = "Ranking";
		tr.append(th);

		th = document.createElement("th");
		th.className = "metabet-provider-rankings-logo";
		tr.append(th);

		th = document.createElement("th");
		th.className = "metabet-provider-rankings-provider";
		th.innerText = "Sports Book";
		tr.append(th);

		th = document.createElement("th");
		th.className = "metabet-provider-rankings-promo";
		th.innerText = "Current Offer";
		tr.append(th);

		th = document.createElement("th");
		th.className = "metabet-provider-rankings-rating";
		th.innerText = "App Store Rating";
		tr.append(th);

		th = document.createElement("th");
		th.className = "metabet-provider-rankings-cta";
		tr.append(th);

		thead.append(tr);
		table.append(thead);

		var tbody = document.createElement("tbody");
		providers.forEach(function(provider) {

			tr = document.createElement("tr");

			td = document.createElement("td");
			td.className = "metabet-provider-rankings-ranking";
			strong = document.createElement("strong");
			td.append(strong);
			tr.append(td);

			td = document.createElement("td");
			td.className = "metabet-provider-rankings-logo";
			a = document.createElement("a");
			a.href = mb_createProviderRedirect(element, null, provider[0], location);
			a.setAttribute("aria-hidden", true);
			a.tabIndex = -1;
			img = document.createElement("img");
			img.src = mb_getProviderLogo(provider[0], location);
			img.alt = "";
			a.append(img)
			td.append(a);
			tr.append(td);

			td = document.createElement("td");
			td.className = "metabet-provider-rankings-name";
			a = document.createElement("a");
			a.href = mb_createProviderRedirect(element, null, provider[0], location);
			a.innerText = provider[1];
			td.append(a);
			tr.append(td);

			td = document.createElement("td");
			td.className = "metabet-provider-rankings-promo";
			td.innerText = mb_getProviderPromo(provider[0]);
			tr.append(td);

			td = document.createElement("td");
			td.className = "metabet-provider-rankings-rating";
			td.title = "iOS: " + (provider[3] ? provider[3].toFixed(1) : "n/a") + ", Android: " + (provider[2] ? provider[2].toFixed(1) : "n/a");
			div = document.createElement("div");
			td.append(div);
			strong = document.createElement("strong");
			if (provider[2] && provider[3]) {
				strong.innerText = ((provider[2]+provider[3])/2).toFixed(1);
			} else if (!provider[2] && !provider[3]) {
				strong.innerText = "0.0";
			} else {
				strong.innerText = ((provider[2] ? provider[2] : 0)+(provider[3] ? provider[3] : 0)).toFixed(1);
			}
			div.style.setProperty("--metabet-provider-rankings-rating", strong.innerText);
			td.append(strong);
			tr.append(td);

			td = document.createElement("td");
			td.className = "metabet-provider-rankings-cta";
			a = document.createElement("a");
			a.href = mb_createProviderRedirect(element, null, provider[0], location);
			a.setAttribute("aria-label", "Sign up with " + provider[1]);
			td.append(a);
			tr.append(td);

			tbody.append(tr);

		});

		table.append(tbody);
		element.append(table);

	});

}



function mb_insertScoreStrip() {

	Array.from(document.getElementsByClassName("metabet-scorestrip")).forEach(function(element) {

		var div, container, select, img, a;

		//Build dictionary of all sports/leagues
				var ALL_SPORTS = ["MLB", "NBA", "NFL", "NHL", "NCAAB", "NCAAF", "WNBA", "EPL", "Ligue 1", "Bundesliga", "Serie A", "La Liga", "MLS"];
		var ALL_LEAGUE_CODES = ["BBM", "BKP", "FBP", "HKN", "BKC", "FBC", "BKD", "SOE", "SOF", "SOG", "SOI", "SOS", "SOM"];

		//Which sports/leagues do we want to display?
		var sports = ALL_SPORTS;

		//Get passed-in parameters
		var defaultSport = "nfl";
		var query = null;
		var style = "classic";
		var country = "US";
		var location = null;

		var classes = element.classList;
		for (var i=0; i<classes.length; i++) {
			if (classes[i].indexOf("metabet-style-") == 0) {
				style = classes[i].replace("metabet-style-", "");
			} else if (classes[i].match("metabet-league-.+")) {
				defaultSport = classes[i].replace(/metabet-league-/, "").replace(/[-_]/, " ").toLowerCase();
			} else if (classes[i].indexOf("metabet-country-") == 0) {
				country = classes[i].replace("metabet-country-", "");
			} else if (classes[i].indexOf("metabet-location-") == 0) {
				location = classes[i].replace("metabet-location-", "");
			}
		}
		location = mb_getCurrentLocation(country, location);

		//Subscribe to resize media queries
		element.setAttribute("metabet-observe-resizes", "");

		//Make sure element is empty
		mb_emptyElement(element);


		//Build league selector
		div = document.createElement("div");
		div.classList.add("metabet-scorestrip-league");
		element.appendChild(div);

		select = document.createElement("select");
		select.id = "metabet-scorestrip-league";
		select.classList.add("select");
		select.addEventListener("change", function() {
			mb_getScoreStripData(element, style, location, true);
			element.querySelector(".metabet-scorestrip-container-wrapper").scrollLeft = 0;
			mb_trackCustomization(element, "league", this.options[this.selectedIndex].text.toLowerCase());
		});

		//Populate options in selector
		for (var i=0; i<ALL_SPORTS.length; i++) {
			option = document.createElement("option");
			option.innerHTML = ALL_SPORTS[i];
			//Choose default, matching against league name,
			//leagueCode, or sport/leagueCode combo
			option.selected = ((ALL_SPORTS[i].toLowerCase() == defaultSport) || (ALL_LEAGUE_CODES[i].toLowerCase() == defaultSport) || (defaultSport && (defaultSport.replace(/.+[/]/, "").toUpperCase() == ALL_LEAGUE_CODES[i])));
			option.value = ALL_LEAGUE_CODES[i];
			select.appendChild(option);
		}
		div.append(select);


		//Add watermark on some sites
		if (mb_isSiteOrSubSite("frontpagebets") && (window.location.host != "frontpagebets.com") && (window.location.host != "scores.frontpagebets.com")) {
			a = document.createElement("a");
			a.classList.add("metabet-scorestrip-watermark");
			a.href = "https://metabet.io";
			img = document.createElement("img");
			img.src = "https://go.metabet.io/03325fb169d4ca908f52c07a4505bb8f/img/powered-by-metabet.svg";
			img.width = "69";
			img.height = "25";
			a.append(img);
			div.append(a);
		} else if (RUWT_SITE_FAMILY_VOX) {
			element.classList.add("metabet-sponsored");
			a = document.createElement("a");
			a.classList.add("metabet-scorestrip-watermark");
			a.href = "https://dksb.sng.link/As9kz/eb1i?_dl=https%3A%2F%2Fsportsbook.draftkings.com%2Fgateway%3Fs%3D499893753%26wpcid%3D207583%26wpcn%3DWidget%26wpcrid%3DScoreStripLogo%26wpsn%3DVox%26wpssn%3DSBNation&pcid=207583&psn=Vox&pcn=Widget&pssn=SBNation&pcrid=ScoreStripLogo";
			img = document.createElement("img");
			img.src = "https://go.metabet.io/03325fb169d4ca908f52c07a4505bb8f/img/sbnation-hosted-draftkings-watermark.png";
			img.width = "80";
			img.height = "35";
			a.append(img);
			div.append(a);
		}
					if (("JP" == "ES") || ("JP" == mb_getGeolocationCountry())) {
				element.classList.add("metabet-sponsored");
				a = document.createElement("a");
				a.classList.add("metabet-scorestrip-watermark");
				a.href = "https://bit.ly/3VmOEre";
				a.target = "_blank";
				img = document.createElement("img");
				img.src = "https://go.metabet.io/03325fb169d4ca908f52c07a4505bb8f/img/yuugado-watermark.svg";
				img.style.width = "6em";
				img.style.height = "auto";
				a.append(img);
				div.append(a);
			} else if (("CA" == "ES") || ("CA" == mb_getGeolocationCountry())) {
				element.classList.add("metabet-sponsored");
				a = document.createElement("a");
				a.classList.add("metabet-scorestrip-watermark", "metabet-scorestrip-watermark-sportingnews-ca");
				a.href = "https://promo.sportsinteraction.com/en-ca/promo/lp/sports/multisport-1000?wm=5436737";
				a.target = "_blank";
				img = document.createElement("img");
				img.src = "https://go.metabet.io/03325fb169d4ca908f52c07a4505bb8f/img/sportsbooks/landscape/sports_interaction.svg";
				img.style.width = "5.5em";
				img.style.height = "auto";
				a.append(img);
				div.append(a);
			} else if (("MY" == "ES") || ("MY" == mb_getGeolocationCountry()) || ("VN" == "ES") || ("VN" == mb_getGeolocationCountry())) {
				element.classList.add("metabet-sponsored");
				a = document.createElement("a");
				a.classList.add("metabet-scorestrip-watermark");
				a.href = "https://bit.ly/40WUAJc";
				a.target = "_blank";
				img = document.createElement("img");
				img.src = "https://go.metabet.io/03325fb169d4ca908f52c07a4505bb8f/img/fb9-watermark.svg";
				img.style.width = "6.5em";
				img.style.height = "auto";
				a.append(img);
				div.append(a);
			}
		



		//Build container for games and navigation
		container = document.createElement("div");
		container.className = "metabet-scorestrip-container-wrapper";
		element.append(container);

		//Add rewinding navigation for games
		div = document.createElement("div");
		div.className = "metabet-scorestrip-navigate-previous";
		div.addEventListener("click", function(event) {
			var container = event.target.parentElement;
			var cellWidth = container.querySelector(".metabet-scorestrip-container").firstChild.offsetWidth;
			if (container.parentElement.classList.contains("metabet-size-l")) {
				mb_elementScrollOffsetLeftTo(container, container.scrollLeft - (container.offsetWidth-cellWidth), 200);
			} else {
				mb_elementScrollOffsetLeftTo(container, (Math.round(container.scrollLeft/cellWidth)-1)*cellWidth, 200);
			}
		});
		container.append(div);

		//Build container for games
		div = document.createElement("div");
		div.className = "metabet-scorestrip-container";
		container.append(div);

		//Add forwarding navigation for games
		div = document.createElement("div");
		div.className = "metabet-scorestrip-navigate-next";
		div.addEventListener("click", function(event) {
			var container = event.target.parentElement;
			var cellWidth = container.querySelector(".metabet-scorestrip-container").firstChild.offsetWidth;
			if (container.parentElement.classList.contains("metabet-size-l")) {
				mb_elementScrollOffsetLeftTo(container, container.scrollLeft + (container.offsetWidth-cellWidth), 200);
			} else {
				mb_elementScrollOffsetLeftTo(container, (Math.round(container.scrollLeft/cellWidth)+1)*cellWidth, 200);
			}
		});
		container.append(div);

		//Listen for scrolling so we can update navigation
		element.querySelector(".metabet-scorestrip-container-wrapper").addEventListener("scroll",  {passive: true});

		//Get data now and periodically
		mb_getScoreStripData(element, style, location, true);
		RUWT_SCORE_STRIP_INTERVAL = window.setInterval( 15000);

		//Track this render/view
		mb_trackRender(element, element.querySelector("#metabet-scorestrip-league").options[element.querySelector("#metabet-scorestrip-league").selectedIndex].text.toLowerCase());

	});

}


function mb_getScoreStripData(element, betStyle, location, isInitialLoad) {

	//Get selected leagueCode
	var league = element.querySelector("#metabet-scorestrip-league");
	var leagueCode = league.value.toUpperCase();

	//Store selected value for some league-specific CSS
	element.dataset.leagueCode = leagueCode;

	//Retrieve data
	mb_getJSON(mb_buildStaticAPIURL("/api/odds.json?location=" + location + "&leagueCode=" + leagueCode), function(oddsData) {

		var oddsGames = mb_filterGamesForSite(oddsData["results"]);

		//Create start and end dates, extending the end date if there
		//aren't any upcoming games with odds
		var startDate = Math.floor(new Date().getTime() / 10000000) * 10000000;
		var endDate = ((oddsGames.length > 0) ? oddsGames[0]["date"] : startDate) + 1000*60*60*24*13.5;

		//Supplement the odds with upcoming games
		mb_getJSON(mb_buildStaticAPIURL("/api/games.json?leagueCode=" + leagueCode + "&startDate=" + startDate + "&endDate=" + endDate), function(gamesData) {

			var allGames = mb_filterGamesForSite(gamesData["results"]);

			//Merge and sort games and odds data so we have all of
			//today's games along with all upcoming games with odds
			var games = [];
			var gameIDs = []
			for (var i=0; i<oddsGames.length; i++) {
				if ((oddsGames[i]["date"] <= endDate) && !oddsGames[i].hasOwnProperty("status")) {
					games.push(oddsGames[i]);
					gameIDs.push(oddsGames[i]["gameID"]);
				}
			}
			for (var i=0; i<allGames.length; i++) {
				if ((allGames[i]["date"] <= endDate) && !allGames[i].hasOwnProperty("status")) {
					if (gameIDs.indexOf(allGames[i]["gameID"]) == -1) {
						games.push(allGames[i]);
					}
				}
			}


			if (games.length > 0) {

				//Sort the games
				games.sort(DAILY_GAME_SORT);

				
				//Display the found games
				mb_paintScoreStripGameData(element, games, betStyle, location, isInitialLoad);

			} else {

				//No upcoming games were found, so look for futures
				var url = "/api/sideodds.json?location=" + location + "&q=";
				url += leagueCode + "/" + (leagueCode.match("SO.+") ? "soccer" : league.options[league.selectedIndex].innerHTML.toLowerCase()) + "_winner";
				mb_getJSON(mb_buildStaticAPIURL(url), ;

				//There's no need to periodically update futures prices
				clearInterval(RUWT_SCORE_STRIP_INTERVAL);

			}

		});

	});

}


function mb_paintScoreStripGameData(element, games, betStyle, location, isInitialLoad) {

	var container = element.querySelector(".metabet-scorestrip-container");
	if (isInitialLoad) {
		mb_emptyElement(container);
	}
	var sport = element.querySelector("#metabet-scorestrip-league").options[element.querySelector("#metabet-scorestrip-league").selectedIndex].text.toLowerCase();

	//Cap the limit of games we'll show
	if (games.length > 100) {
		games = games.slice(0, 99);
	}


	var cell, div, img, sup;
	var game;
	for (var i=0; i<games.length; i++) {

		//Don't build game cells if this isn't the first load
		if (!isInitialLoad) {
			continue;
		}

		game = games[i];

					cell = document.createElement("a");
			cell = mb_createEntityRedirect(RUWT_HOSTED_HOST + "/" + game["sport"] + "/games/" + game["gameID"], game, "game");
			cell.addEventListener("click", function() {
				mb_trackClick(element, sport, mb_getAwayTeamDisplayName(game) + " at " + mb_getHomeTeamDisplayName(game) + " (" + new Date(game["date"]).toUTCString() + ")");
			});
				cell.className = "metabet-scorestrip-game metabet-points-" + game["pointsLevel"].toLowerCase();
		cell.dataset.id = game["gameID"];

				cell.classList.toggle("metabet-flip-soccer-teams", (game["sport"] == "soccer"));
		
		div = document.createElement("div");
		div.className = "metabet-points";
		cell.append(div);

		div = document.createElement("div");
		div.className = "team1Logo";
		div.appendChild(mb_getTeamLogo(80, game["team1ID"], game["team1Color"], game["team1Initials"]));
		cell.append(div);
		div = document.createElement("div");
		div.className = "team2Logo";
		div.appendChild(mb_getTeamLogo(80, game["team2ID"], game["team2Color"], game["team2Initials"]));
		cell.append(div);

		div = document.createElement("div");
		div.className = "team1Name";
		div.innerHTML = game["team1Initials"];
		if (game.hasOwnProperty("team1Ranking")) {
			sup = document.createElement("sup");
			sup.innerHTML = game["team1Ranking"];
			div.appendChild(sup);
		}
		cell.append(div);

		div = document.createElement("div");
		div.className = "team2Name";
		div.innerHTML = game["team2Initials"];
		if (game.hasOwnProperty("team2Ranking")) {
			sup = document.createElement("sup");
			sup.innerHTML = game["team2Ranking"];
			div.appendChild(sup);
		}
		cell.append(div);

		div = document.createElement("div");
		div.className = "team1Score";
		cell.append(div);
		div = document.createElement("div");
		div.className = "team2Score";
		cell.append(div);

		div = document.createElement("div");
		div.className = "time";
		cell.append(div);


		if (!mb_hasGameStarted(game) && game.hasOwnProperty("odds")) {

			if (new Array("mlb", "nhl", "soccer").indexOf(game["sport"]) != -1) {
				var odds = mb_getBestGameOdds(game, "moneyLine2", true, location, element);
				if (odds && odds.hasOwnProperty("moneyLine1") && odds.hasOwnProperty("moneyLine2")) {
					div = document.createElement("div");
					div.innerHTML = mb_formatMoneyLineFromPrice(Math.min(odds["moneyLine1"], odds["moneyLine2"]));
					cell.append(div);
					div.className = (odds["moneyLine1"] < odds["moneyLine2"]) ? "line1" : "line2";
				}
			} else if (game["odds"][0].hasOwnProperty("spread")) {
				var odds = mb_getBestGameOdds(game, "spreadLine2", true, location, element);
				if (odds && odds.hasOwnProperty("spread")) {
					div = document.createElement("div");
					div.innerHTML = (mb_formatSpread(Math.abs(odds["spread"])*-1) + " pts").replace("PK pts", "EVEN").replace("1 pts", "1 pt");
					cell.append(div);
					div.className = (odds["spread"] < 0) ? "line2" : "line1";
				}
			}

		}

		if (!mb_hasGameStarted(game)) {

			cell.querySelector(".time").innerHTML = mb_getUpcomingDateTime(game);

			div = document.createElement("div");
			div.className = "metabet-scorestrip-game-cta";
			cell.append(div);

		}

		if (game.hasOwnProperty("headline")) {
			cell.title = game["headline"];
		}

		container.append(cell);

	}


	//Update the score and timeleft for games that have started
	for (var i=0; i<games.length; i++) {
		game = games[i];
		if (mb_hasGameStarted(game)) {
			cell = container.querySelector("a[data-id='" + game["gameID"] + "']");
			if (cell) {
				cell.classList.toggle("metabet-has-started", true);
				cell.classList.remove("metabet-points-guarded", "metabet-points-elevated", "metabet-points-high", "metabet-points-severe");
				cell.classList.add("metabet-points-" + game["pointsLevel"].toLowerCase());
				cell.querySelector(".team1Score").innerText = game["team1Score"];
				cell.querySelector(".team2Score").innerText = game["team2Score"];
				cell.querySelector(".time").innerText = game["timeLeft"];
			}
		}
	}

	//Make sure the correct navigation is showing
	if (isInitialLoad) {
		mb_updateScoreStripNavigation(element);
	}

}


function mb_paintScoreStripFuturesData(element, futuresData, betStyle, location) {

	var container = element.querySelector(".metabet-scorestrip-container");
	mb_emptyElement(container);

	var sideOdds;
	if (futuresData["results"].length == 1) {
		sideOdds = futuresData["results"][0]["sideOdds"];
	} else {
		return;
	}

	var providers = mb_getProvidersForLocation(location, element);
	var sport = element.querySelector("#metabet-scorestrip-league").options[element.querySelector("#metabet-scorestrip-league").selectedIndex].text.toLowerCase();
	var teams = futuresData["teams"];
	var team;
	var displayedTeamIDs = [];

	var cell, div, span, a, img;
	for (var i=sideOdds.length-1; i>=0; i--) {

		//Skip this value if we've displayed this team already
		if (displayedTeamIDs.indexOf(sideOdds[i]["teamID"]) >= 0) {
			continue;
		}

		//Skip this value if it's a provider we don't want to link to
		if ((sideOdds[i]["provider"] == "CONSENSUS") || (providers.indexOf(sideOdds[i]["provider"]) == -1)) {
			continue;
		}

		//Find this team so we can display their name and logo
		team = null;
		for (var j=0; j<teams.length; j++) {
			if (sideOdds[i]["teamID"] == teams[j]["teamID"]) {
				team = teams[j];
				break;
			}
		}
		if (team == null) {
			continue;
		}


		cell = document.createElement("div");
		cell.className = "metabet-scorestrip-sideodd";

					a = document.createElement("a");
			a.href = RUWT_HOSTED_HOST + "/" + team["sport"] + "/teams/" + team["teamID"];
				a.className = "metabet-scorestrip-sideodd-logo";
		a.append(mb_getTeamLogo(80, team["teamID"], team["color"], team["initials"]));
		cell.append(a);

					a = document.createElement("a");
			a.href = RUWT_HOSTED_HOST + "/" + team["sport"] + "/teams/" + team["teamID"];
				a.className = "metabet-scorestrip-sideodd-name";
		a.innerHTML = mb_getTeamDisplayName(team);
		cell.append(a);

		a = mb_createBetRedirect(sideOdds[i], null, location, element, sport, mb_getTeamDisplayName(team) + " To Win");
		a.className = "metabet-scorestrip-sideodd-bet";
		a.innerHTML = mb_stylePrice(betStyle, sideOdds[i]["price"]);
		cell.append(a);

		container.append(cell);

		//Store this displayed team
		displayedTeamIDs.push(sideOdds[i]["teamID"]);

	}

	//Make sure the correct navigation is showing
	mb_updateScoreStripNavigation(element);

}


function mb_updateScoreStripNavigation(element) {

	var games = element.querySelector(".metabet-scorestrip-container");
	var container = element.querySelector(".metabet-scorestrip-container-wrapper");

	element.classList.toggle("metabet-scorestrip-overflow-next", (container.scrollLeft + container.offsetWidth <= games.offsetWidth) && (games.offsetWidth >= container.offsetWidth));
	element.classList.toggle("metabet-scorestrip-overflow-previous", (container.scrollLeft > 1));

}



function mb_insertSearchOneBox() {

	Array.from(document.getElementsByClassName("metabet-search-onebox")).forEach(function(element) {

		var div, img, input, span, a;

		img = document.createElement("img");
		img.className = "metabet-search-onebox-icon";
		img.src = "https://go.metabet.io/03325fb169d4ca908f52c07a4505bb8f/img/search.svg";
		img.style.width = "24px";
		img.style.height = "24px";
		img.alt = "";
		element.append(img);

		input = document.createElement("input");
		input.className = "metabet-search-onebox-query";
		input.type = "text";
		input.placeholder = "Search for anything about sports";
		element.append(input);
		mb_enableAutoComplete(input);

		span = document.createElement("span");
		span.className = "metabet-search-onebox-suggestions";
		span.innerText = "Trending Topics: ";

		a = document.createElement("a");
		a.href = "/mlb/players/34609";
		a.innerText = "Aaron Judge";
		span.append(a);
		span.append(", ");

		a = document.createElement("a");
		a.href = "/nba/players/12528";
		a.innerText = "Jimmy Butler";
		span.append(a);
		span.append(", ");

		a = document.createElement("a");
		a.href = "/nfl";
		a.innerText = "NFL";
		span.append(a);

		element.append(span);

	});

}





function mb_insertSideOddsTable(target) {

	var elements = target ? new Array(target) : document.getElementsByClassName("metabet-side-odds-table");

	Array.from(elements).forEach(function(element) {

		//Get passed-in parameters
		var country = "US";
		var location = null;
		var league = null;
		var query = null;
		element.classList.forEach(function(className) {
			if (className.match("metabet-country-.*")) {
				country = className.replace(/metabet-country-/, "");
			} else if (className.match("metabet-location-.*")) {
				location = className.replace(/metabet-location-/, "");
			} else if (className.match("metabet-league-.*")) {
				league = className.replace(/metabet-league-/, "");
			} else if (className.match("metabet-query-.*")) {
				query = className.replace(/metabet-query-/, "");
			} else if (className.match("metabet-rows-[0-9]+")) {
				element.dataset.rows = parseInt(className.replace(/metabet-rows-/, ""));
			}
		});
		location = mb_getCurrentLocation(country, location);

		//Subscribe to resize media queries
		element.setAttribute("metabet-observe-resizes", "");

		var header = document.createElement("div");
		header.className = "metabet-side-odds-table-header";

		var img = document.createElement("img");
		img.src = "https://go.metabet.io/03325fb169d4ca908f52c07a4505bb8f/img/search.svg";
		header.appendChild(img);

		var search = document.createElement("input");
		search.className = "metabet-side-odds-table-query";
		search.type = "text";
		search.placeholder = "Search for a Team or Player";
		header.append(search);
		mb_enableAutoComplete(search, league);

		var select = mb_createLocationSelector(country, location);
		select.addEventListener("change", function() {
			window.location.reload(true);
			mb_trackCustomization(element, "location", this.value);
		});
		header.append(select);

		element.append(header);


		var empty = document.createElement("div");
		empty.className = "metabet-side-odds-table-empty";
		empty.innerHTML = "To get started, just type in a team or player.  We'll scour the web for the best props and show you the books that will make you the most money.";
		element.append(empty);


		var table = document.createElement("table");
		table.className = "metabet-side-odds-table-stage";
		element.appendChild(table);


		//Create the footer with the MetaBet logo
		div = document.createElement("div");
		div.className = "metabet-side-odds-table-footer";
		a = document.createElement("a");
		a.rel = "noopener";
		a.setAttribute("aria-label", "Powered by MetaBet");
		if (RUWT_ENABLE_ATTRIBUTION_LINKS) {
			a.href = mb_createMetaBetWebsiteReferralURL("side-odds-table-watermark");
		}
		a.target = "_blank";
		div.append(a);
		element.appendChild(div);


		//Is a specific team or player being requested on first load?
		if (window.location.hash) {

			//If a hash is included, load the default team or player

			//Add a loading animation to the stage because we'll need
			//to make an added API request to populate the search textbox
			var loading = document.createElement("img");
			loading.classList.add("metabet-side-odds-table-loading");
			loading.classList.add("metabet-loading");
			loading.src = "https://go.metabet.io/03325fb169d4ca908f52c07a4505bb8f/img/bars.svg";
			empty.insertAdjacentElement("beforebegin", loading);


			//Get the hash, removing any user-friendly labels
			var hash = window.location.hash.substring(1);
			if (hash.indexOf(".") != -1) {
				hash = hash.substring(0, hash.indexOf("."));
			}


			//Retrieve the label name for this query and then load the markets
			if (hash.substring(0, 1) == "t") {

				var query = "teamID=" + parseInt(hash.substring(1), 16);
				mb_getJSON("https://metabet.static.api.areyouwatchingthis.com/api/teams.json?apiKey=219f64094f67ed781035f5f7a08840fc&" + query, function(data) {
					if (data["results"].length > 0) {
						var team = data["results"][0];
						mb_loadSideOddsTableMarkets(query, team["city"] + (team["name"] ? " " + team["name"] : team["nickname"] ? " " + team["nickname"] : ""));
					}
				});

			} else if (hash.substring(0, 1) == "p") {

				var query = "playerID=" + parseInt(hash.substring(1), 16);
				mb_getJSON("https://metabet.static.api.areyouwatchingthis.com/api/players.json?apiKey=219f64094f67ed781035f5f7a08840fc&" + query, function(data) {
					if (data["results"].length > 0) {
						var player = data["results"][0];
						mb_loadSideOddsTableMarkets(query, mb_getPlayerName(player));
					}
				});

			}

		} else if (query) {

			//A team or player was specified in the embed
			mb_getJSON("https://metabet.static.api.areyouwatchingthis.com/api/sideodds.json?apiKey=219f64094f67ed781035f5f7a08840fc&location=" + location + "&q=" + query, function(data) {
				if (data.hasOwnProperty("teams")) {
					var team = data["teams"][0];
					mb_loadSideOddsTableMarkets("teamID=" + team["teamID"], team["city"] + (team["name"] ? " " + team["name"] : team["nickname"] ? " " + team["nickname"] : ""));
				} else if (data.hasOwnProperty("players")) {
					var player = data["players"][0];
					mb_loadSideOddsTableMarkets("playerID=" + player["playerID"], mb_getPlayerName(player));
				}
			});

		} else {

			//There is no team or player being passed in,
			//so enable the "blank" layout.
			element.classList.add("metabet-side-odds-table-blank");

			if (!element.classList.contains("metabet-no-focus") && !false) {
				//Give the search box focus
				search.focus();
			}

		}

		//Track this render/view
		mb_trackRender(element);

	});


}


function mb_loadSideOddsTableMarkets(query, title) {

	//Update the searchbox with the selected entity title
	document.querySelector(".metabet-side-odds-table-query").value = title;

	//Hide the autocomplete results
	mb_emptyElement(document.querySelector(".metabet-autocomplete-results"));

	//Make sure "blank" mode is turned off because we're about
	//to show markets
	document.querySelector(".metabet-side-odds-table").classList.remove("metabet-side-odds-table-blank");

	//Get selected location
	var location = document.querySelector(".metabet-side-odds-table .metabet-selector-state").value;

	var element = document.querySelector(".metabet-side-odds-table");
	var showConsensus = true;

	mb_getJSON("https://metabet.static.api.areyouwatchingthis.com/api/sideodds.json?apiKey=219f64094f67ed781035f5f7a08840fc&location=" + location + "&" + query, function(sideOddsData) {


		var tr, th, td, span, a;

		var table = document.querySelector(".metabet-side-odds-table-stage");
		mb_emptyElement(table);

		var thead = document.createElement("thead");
		var providers = mb_getProvidersForLocation(location, element);

		tr = document.createElement("tr");
		th = document.createElement("th");
		th.className = "metabet-side-odds-table-customer-logo";
		tr.appendChild(th);

		for (var i=0; i<providers.length; i++) {

			th = document.createElement("th");
			th.className = "metabet-side-odds-table-provider";
			a = mb_createProviderRedirect(document.querySelector(".metabet-side-odds-table"), query, providers[i], location);
			if (providers[i] == "CONSENSUS") {
				if (showConsensus) {
					a.innerHTML = "Consensus";
					th.classList.add("metabet-side-odds-table-provider-consensus");
				} else {
					continue;
				}
			} else {
				span = document.createElement("span");
				span.classList.add("metabet-board-provider-logo");
				span.classList.add("metabet-board-provider-logo-" + providers[i].replace(RUWT_PROVIDER_SUFFIX_PATTERN, "").toLowerCase());
				span.classList.add("metabet-board-provider-location-" + location.toLowerCase());
				if (!RUWT_ENABLE_OUTBOUND_LINKS) {
					a.removeAttribute("href");
				}
				a.append(span);
				span = document.createElement("span");
				span.className = "metabet-side-odds-table-provider-promo";
				span.innerHTML = mb_getProviderPromo(providers[i]);
				a.append(span);
				mb_populateBetRedirectTracking(a, element, providers[i]);
			}
			th.append(a);
			tr.append(th);

		}
		thead.append(tr);
		table.append(thead);

		var tbody = document.createElement("tbody");
		var markets = sideOddsData["results"];
		markets.forEach(function(market) {

			if (element.dataset.rows && (tbody.children.length >= element.dataset.rows)) {
				return;
			}

			//Before starting to display this market, make sure
			//we have a valid option to display for a provider included
			//in the currently-selected location
			var hasValidOptions = false;
			for (var i=0; i<market["sideOdds"].length; i++) {
				if ((market["sideOdds"][i]["provider"] != "CONSENSUS") && (providers.indexOf(market["sideOdds"][i]["provider"]) != -1) && ((market["sideOdds"][i].hasOwnProperty("price") && (market["sideOdds"][i]["price"] > 1)) || (market["sideOdds"][i].hasOwnProperty("price1") && (market["sideOdds"][i]["price1"] > 1)))) {
					hasValidOptions = true;
					break;
				}
			}
			if (!hasValidOptions) {
				return;
			}


			tr = document.createElement("tr");

			th = document.createElement("th");
			th.innerHTML = market["title"];

			//If this market is game related, include the two teams
			if (market["sideOdds"][0].hasOwnProperty("gameID") && sideOddsData.hasOwnProperty("games")) {
				for (var i=0; i<sideOddsData["games"].length; i++) {
					if (sideOddsData["games"][i]["gameID"] == market["sideOdds"][0]["gameID"]) {
						if (sideOddsData["games"][i].hasOwnProperty("team1ID") && sideOddsData["games"][i].hasOwnProperty("team2ID")) {
							th.innerHTML += "<em>" + mb_getUpcomingDateTime(sideOddsData["games"][i]) + ": " + sideOddsData["games"][i]["team1Initials"] + " @ " + sideOddsData["games"][i]["team2Initials"] + "</em>";
							break;
						} else {
							th.innerHTML += "<em>" + mb_getUpcomingDateTime(sideOddsData["games"][i]) + ": " + sideOddsData["games"][i]["location"] + "</em>";
							break;
						}
					}
				}
			}
			tr.append(th);


			//Calculate the best available prices and values for this market
			var bestPrice = null;
			var bestPrice1 = null;
			var bestPrice2 = null;
			var bestValue1 = null;
			var bestValue2 = null;

			market["sideOdds"].forEach(function(odds) {

				//Ignore these odds if it's from a provider we don't want
				//or if there's only one provider (plus Consensus) to display
				if ((odds["provider"] == "CONSENSUS") || (providers.length <= 2) || (providers.indexOf(odds["provider"]) == -1)) {
					return;
				}

				if (odds.hasOwnProperty("price") && (!bestPrice || (odds["price"] > bestPrice))) {
					bestPrice = odds["price"];
				}
				if (odds.hasOwnProperty("price1")) {
					if ((!odds.hasOwnProperty("value") && (!bestPrice1 || (odds["price1"] > bestPrice1))) || (odds.hasOwnProperty("value") && (!bestValue1 || (odds["value"] <= bestValue1)))) {
						if (!odds.hasOwnProperty("value") || (odds["value"] < bestValue1)) {
							bestPrice1 = odds["price1"];
						} else {
							bestPrice1 = Math.max(bestPrice1 ? bestPrice1 : 0, odds["price1"]);
						}
						bestValue1 = odds["value"];
					}
				}
				if (odds.hasOwnProperty("price2")) {
					if ((!odds.hasOwnProperty("value") && (!bestPrice2 || (odds["price2"] > bestPrice2))) || (odds.hasOwnProperty("value") && (!bestValue2 || (odds["value"] >= bestValue2)))) {
						if (!odds.hasOwnProperty("value") || (odds["value"] > bestValue2)) {
							bestPrice2 = odds["price2"];
						} else {
							bestPrice2 = Math.max(bestPrice2 ? bestPrice2 : 0, odds["price2"]);
						}
						bestValue2 = odds["value"];
					}
				}

			});


			for (var j=0; j<providers.length; j++) {

				td = document.createElement("td");
				if (providers[j] == "CONSENSUS") {
					td.classList.add("metabet-side-odds-table-provider-consensus");
				}

				for (var i=0; i<market["sideOdds"].length; i++) {

					var odds = market["sideOdds"][i];
					if (providers[j] != odds["provider"]) {
						continue;
					}


					if (odds.hasOwnProperty("price") && (odds["price"] != 1)) {

						a = mb_createBetRedirect(odds, null, location, element, title, odds["provider"].replace(RUWT_PROVIDER_SUFFIX_PATTERN, "") + " price for " + title + " - " + market["title"]);
						a.className = "metabet-board-price";
						if ((odds["provider"] != "CONSENSUS") && (odds["price"] == bestPrice)) {
							a.classList.add("metabet-side-odds-table-line-best");
						}
						a.innerHTML = mb_formatMoneyLineFromPrice(odds["price"]);
						td.append(a);

					} else {

						a = mb_createBetRedirect(odds, "price2", location, element, title, odds["provider"].replace(RUWT_PROVIDER_SUFFIX_PATTERN, "") + " Over/Yes for " + title + " - " + market["title"]);
						a.className = "metabet-board-price";
						if ((odds["provider"] != "CONSENSUS") && (odds["price2"] == bestPrice2) && (!odds.hasOwnProperty("value") || (odds["value"] == bestValue2))) {
							a.classList.add("metabet-side-odds-table-line-best");
						}
						if (odds.hasOwnProperty("value")) {
							a.innerHTML += "<div>Under " + Math.round(odds["value"]*2)/2 + "</div>";
							a.innerHTML += "<em>" + mb_formatMoneyLineFromPrice(odds["price2"]) + "</em>";
						} else {
							a.innerHTML = mb_formatMoneyLineFromPrice(odds["price2"]);
							a.innerHTML += "<em>No</em>";
						}
						td.append(a);

						a = mb_createBetRedirect(odds, "price1", location, element, title, odds["provider"].replace(RUWT_PROVIDER_SUFFIX_PATTERN, "") + " Under/No for " + title + " - " + market["title"]);
						a.className = "metabet-board-price";
						if ((odds["provider"] != "CONSENSUS") && (odds["price1"] == bestPrice1) && (!odds.hasOwnProperty("value") || (odds["value"] == bestValue1))) {
							a.classList.add("metabet-side-odds-table-line-best");
						}
						if (odds.hasOwnProperty("value")) {
							a.innerHTML += "<div>Over " + Math.round(odds["value"]*2)/2 + "</div>";
							a.innerHTML += "<em>" + mb_formatMoneyLineFromPrice(odds["price1"]) + "</em>";
						} else {
							a.innerHTML = mb_formatMoneyLineFromPrice(odds["price1"]);
							a.innerHTML += "<em>Yes</em>";
						}
						td.append(a);

					}

				}

				tr.append(td);

			}

			tbody.append(tr);

		});
		table.append(tbody);


		//Keep the two table regions in sync as they scroll
		thead.onscroll = function(e) {
			tbody.scrollLeft = e.target.scrollLeft;
		}
		tbody.onscroll = 

		//Update the 'empty' message
		document.querySelector(".metabet-side-odds-table-empty").innerHTML = "We don't have any " + title + " props to display right now.";

		//Hide any loading animations
		if (document.querySelector(".metabet-side-odds-table-loading")) {
			document.querySelector(".metabet-side-odds-table").removeChild(document.querySelector(".metabet-side-odds-table-loading"));
		}


	});

	//Update hash to allow linking back to this query
	if (query) {
		var hash = query.substring(0, 1) + parseInt(query.replace(/[a-zA-Z]+=/, "")).toString(16);
		history.replaceState(null, null, "#" + hash + "." + title.replace(/[^A-Za-z0-9]+/g, ""));
	}

}




function mb_insertVendorGameTiles(target) {

	if (!target) {
		return;
	}

	var elements = (target.length === undefined) ? new Array(target) : target;

	Array.from(elements).forEach(function(element) {

		var query = null;
		element.classList.forEach(function(className) {
			if (className.match(".+-query-.+")) {
				query = className.replace(/.*-query-/, "");
			}
		});

		if (!query) {
			return;
		}

		//Fetch the data from the API
		mb_getJSON("https://metabet.static.api.areyouwatchingthis.com/api/odds.json?apiKey=219f64094f67ed781035f5f7a08840fc&showSportRadarGameGUIDs&q=" + query, function(oddsData) {

			if (oddsData["results"].length > 0) {

				//Search through the results for the team's next or
				//currently in-progress game
				var game = null;
				for (var i=0; i<oddsData["results"].length; i++) {
					if ((oddsData["results"][i]["date"] > new Date().getTime()) || (mb_hasGameStarted(oddsData["results"][i]) && !mb_isGameFinished(oddsData["results"][i]))) {
						game = oddsData["results"][i];
						break;
					}
				}

				if (game != null) {

					game["sportRadarGameGUID"] = game["gameGUIDSportRadar"];

					//The game has been identified, initialize the tile
					

				}

			}

		});

	});

}






	
function mb_insertBetsInABoxEntityMetadata(target) {

	var elements = target ? new Array(target) : document.querySelectorAll(".metabet-betsinabox-entity-metadata");
	Array.from(elements).forEach(function(element) {

		//Get variables
		var teamID = null;
		var statsPerformTeamID = null;
		var piece = null;

		element.classList.forEach(function(className) {
			if (className.match("metabet-teamID-.*")) {
				teamID = className.replace(/metabet-teamID-/, "");
			} else if (className.match("metabet-statsPerformTeamID-.*")) {
				statsPerformTeamID = className.replace(/metabet-statsPerformTeamID-/, "");
			} else if (className.match("metabet-piece-.*")) {
				piece = className.replace(/metabet-piece-/, "").toLowerCase()
			}
		});

		//We can't show metadata if we don't know what to show
		if (piece == null) {
			return;
		}


		var url = "/api/teams.json?";
		if (teamID) {
			url += "teamID=" + teamID;
		} else if (statsPerformTeamID) {
			url += "statsPerformTeamID=" + statsPerformTeamID;
		} else {
			return;
		}

		mb_getJSON(mb_buildStaticAPIURL(url), function(teamsData) {

			if (teamsData["results"].length != 1) {
				return;
			}

			var team = teamsData["results"][0];
			if (piece == "team-city") {
				element.innerHTML = team["city"] ? team["city"] : "";
			} else if (piece == "team-name") {
				element.innerHTML = team["name"] ? team["name"] : "";
			} else if (piece == "team-nickname") {
				element.innerHTML = team["nickname"] ? team["nickname"] : "";
			} else if (piece == "team-displayname") {
				element.innerHTML = mb_getTeamDisplayName(team);
			} else if (piece == "team-fullname") {
				element.innerHTML = mb_getTeamFullName(team);
			} else if (piece.indexOf("team-logo-") != -1) {
				element.src = "https://sportingnews.static.areyouwatchingthis.com/images/teams/" + piece.replace("team-logo-", "") + "x" + piece.replace("team-logo-", "") + "/" + team["teamID"] + ".png";
			}

		});

	});

}


function mb_insertBetsInABoxGameCenter(target) {

	var elements = target ? new Array(target) : document.querySelectorAll("div.metabet-betsinabox-gamecenter");
	Array.from(elements).forEach(function(stage) {

		//Get variables
		var gameID = null;
		var statsPerformGameID = null;

		stage.classList.forEach(function(className) {
			if (className.match("metabet-gameID-.*")) {
				gameID = className.replace(/metabet-gameID-/, "");
			} else if (className.match("metabet-statsPerformGameID-.*")) {
				statsPerformGameID = className.replace(/metabet-statsPerformGameID-/, "");
			}
		});

		//Get the games to display
		if (!gameID && !statsPerformGameID) {
			return;
		}


		//Add CSS shell
		var element = document.createElement("div");
		element.className = "metabet-betsinabox-gamecenter";
		stage.appendChild(element);

		//Create individual sections and subscribe each of them
		//to observer resizes before we make the API call
		new Array("metabet-betsinabox-hero", "metabet-betsinabox-player-stats", "metabet-betsinabox-odds").forEach(function(className) {
			var div = document.createElement("div");
			div.className = className;
			div.setAttribute("metabet-observe-resizes", "");
			element.appendChild(div);
		});


		var url = "/api/games.json?";
		if (statsPerformGameID) {
			url += "statsPerformGameID=" + statsPerformGameID;
		} else {
			url += "gameID=" + gameID;
		}
		mb_getJSON(mb_buildStaticAPIURL(url), function(gamesData) {

			var game = gamesData["results"][0];

						element.classList.toggle("metabet-flip-soccer-teams", (game["sport"] == "soccer"));
			
			var div, hero, span, img, a;

			hero = element.querySelector(".metabet-betsinabox-hero");

			div = document.createElement("div");
			div.className = "metabet-betsinabox-team1Logo";
			a = mb_createEntityRedirect("/" + game["sport"] + "/teams/" + game["team1ID"], game, "team1");
			img = document.createElement("img");
			img.src = "//metabet.static.areyouwatchingthis.com/images/teams/500x500/" + game["team1ID"] + ".png";
			a.appendChild(img);
			div.appendChild(a);
			hero.appendChild(div);

			div = document.createElement("div");
			div.className = "metabet-betsinabox-team1";
			a = mb_createEntityRedirect("/" + game["sport"] + "/teams/" + game["team1ID"], game, "team1");
			span = document.createElement("span");
			span.className = "metabet-betsinabox-team1Name";
			span.innerHTML = game["team1City"] + "<br/>" + (game.hasOwnProperty("team1Name") ? game["team1Name"] : "");
			a.appendChild(span);
			span = document.createElement("span");
			span.className = "metabet-betsinabox-team1Initials";
			span.innerHTML = game["team1Initials"];
			a.appendChild(span);
			div.appendChild(a);
			hero.appendChild(div);

			div = document.createElement("div");
			div.className = "metabet-betsinabox-versus";
			div.innerHTML = "vs";
			hero.appendChild(div);

			div = document.createElement("div");
			div.className = "metabet-betsinabox-team2Logo";
			a = mb_createEntityRedirect("/" + game["sport"] + "/teams/" + game["team2ID"], game, "team2");
			img = document.createElement("img");
			img.src = "//metabet.static.areyouwatchingthis.com/images/teams/500x500/" + game["team2ID"] + ".png";
			a.appendChild(img);
			div.appendChild(a);
			hero.appendChild(div);

			div = document.createElement("div");
			div.className = "metabet-betsinabox-team2";
			a = mb_createEntityRedirect("/" + game["sport"] + "/teams/" + game["team2ID"], game, "team2");
			span = document.createElement("span");
			span.className = "metabet-betsinabox-team2Name";
			span.innerHTML = game["team2City"] + "<br/>" + (game.hasOwnProperty("team2Name") ? game["team2Name"] : "");
			a.appendChild(span);
			span = document.createElement("span");
			span.className = "metabet-betsinabox-team2Initials";
			span.innerHTML = game["team2Initials"];
			a.appendChild(span);
			div.appendChild(a);
			hero.appendChild(div);


			if (!mb_hasGameStarted(game)) {
				div = document.createElement("div");
				div.className = "metabet-betsinabox-time";
				div.innerHTML = mb_getUpcomingDateTime(game, false);
				hero.appendChild(div);
			} else {
				div = document.createElement("div");
				div.className = "metabet-betsinabox-time";
				div.innerHTML = game["timeLeft"];
				hero.appendChild(div);
				div = document.createElement("div");
				div.className = "metabet-betsinabox-team1Score";
				div.innerHTML = game["team1Score"];
				hero.appendChild(div);
				div = document.createElement("div");
				div.className = "metabet-betsinabox-team2Score";
				div.innerHTML = game["team2Score"];
				hero.appendChild(div);
			}
			if (game.hasOwnProperty("location")) {
				div = document.createElement("div");
				div.className = "metabet-betsinabox-location";
				div.innerHTML = game["location"];
				hero.appendChild(div);
			}


			div = element.querySelector(".metabet-betsinabox-odds");
			var tile1 = document.createElement("div");
			tile1.className = "metabet-sideoddstile metabet-size-100%x300 metabet-query-" + game["sport"] + "/" + (game.hasOwnProperty("team1Name") ? game["team1Name"] : game["team1City"]).replace(/[ -]+/, "_").toLowerCase();
			div.appendChild(tile1);
			var tile2 = document.createElement("div");
			tile2.className = "metabet-gametile metabet-size-100%x300 metabet-query-" + game["gameID"];
			div.appendChild(tile2);
			var tile3 = document.createElement("div");
			tile3.className = "metabet-sideoddstile metabet-size-100%x300 metabet-query-" + game["sport"] + "/" + (game.hasOwnProperty("team2Name") ? game["team2Name"] : game["team2City"]).replace(/[ -]+/, "_").toLowerCase();
			div.appendChild(tile3);

			mb_insertSideOddsTiles(tile1);
			mb_insertGameTiles(tile2);
			mb_insertSideOddsTiles(tile3);

			mb_updateBetsInABoxGameCenter(stage, game);

		});


	});

}



function mb_updateBetsInABoxGameCenter(stage, game) {

	if (game) {
		mb_paintBetsInABoxGameCenter(stage, game);
	} else {

		var gameID = null;
		stage.classList.forEach(function(className) {
			if (className.match("metabet-gameID-.*")) {
				gameID = className.replace(/metabet-gameID-/, "");
			}
		});

		if (gameID) {
			mb_getJSON(mb_buildStaticAPIURL("/api/games.json?gameID=" + gameID), function(gamesData) {
				mb_paintBetsInABoxGameCenter(stage, game["results"][0]);
			});
		}

	}

}



function mb_paintBetsInABoxGameCenter(stage, game) {

	if (!game.hasOwnProperty("statistics") || !game.hasOwnProperty("timeLeft")) {
		return;
	}


	//Clear out existing stats
	var playerStats = stage.querySelector(".metabet-betsinabox-player-stats");
	mb_emptyElement(playerStats);


	var dataTableTitles = [];
	var dataTablePrimaryColumns = [];
	var dataTableColumns = [];

	if (game["sport"] == "nfl") {
		dataTableTitles = ["Passing", "Rushing", "Receiving", "Defense"];
		dataTablePrimaryColumns = ["FOOTBALL_PASSING_YARDS", "FOOTBALL_RUSHING_YARDS", "FOOTBALL_RECEIVING_YARDS", "FOOTBALL_DEFENSIVE_TACKLES"];
		dataTableColumns = [["FOOTBALL_PASSING_COMPLETIONS", "FOOTBALL_PASSING_ATTEMPTS", "FOOTBALL_PASSING_YARDS", "FOOTBALL_PASSING_TOUCHDOWNS", "FOOTBALL_PASSING_INTERCEPTIONS"], ["FOOTBALL_RUSHING_ATTEMPTS", "FOOTBALL_RUSHING_YARDS", "FOOTBALL_RUSHING_TOUCHDOWNS", "FOOTBALL_RUSHING_RUSH_AVERAGE*", "FOOTBALL_RUSHING_LONG"], ["FOOTBALL_RECEIVING_RECEPTIONS", "FOOTBALL_RECEIVING_YARDS","FOOTBALL_RECEIVING_TOUCHDOWNS", "FOOTBALL_RECEIVING_RECEPTION_AVERAGE*", "FOOTBALL_RECEIVING_LONG"], ["FOOTBALL_DEFENSIVE_TACKLES", "FOOTBALL_DEFENSIVE_TACKLES_ASSISTS", "FOOTBALL_DEFENSIVE_SACKS", "FOOTBALL_DEFENSIVE_INTERCEPTIONS"]];
	} else if (game["sport"] == "ncaaf") {
		dataTableTitles = ["Passing", "Rushing", "Receiving"];
		dataTablePrimaryColumns = ["FOOTBALL_PASSING_YARDS", "FOOTBALL_RUSHING_YARDS", "FOOTBALL_RECEIVING_YARDS"];
		dataTableColumns = [["FOOTBALL_PASSING_COMPLETIONS", "FOOTBALL_PASSING_ATTEMPTS", "FOOTBALL_PASSING_YARDS", "FOOTBALL_PASSING_TOUCHDOWNS", "FOOTBALL_PASSING_INTERCEPTIONS"], ["FOOTBALL_RUSHING_ATTEMPTS", "FOOTBALL_RUSHING_YARDS", "FOOTBALL_RUSHING_TOUCHDOWNS", "FOOTBALL_RUSHING_RUSH_AVERAGE*", "FOOTBALL_RUSHING_LONG"], ["FOOTBALL_RECEIVING_RECEPTIONS", "FOOTBALL_RECEIVING_YARDS","FOOTBALL_RECEIVING_TOUCHDOWNS", "FOOTBALL_RECEIVING_RECEPTION_AVERAGE*", "FOOTBALL_RECEIVING_LONG"]];
	} else if ((game["sport"] == "nba") || (game["sport"] == "ncaab")) {

		basketballColumns = ["BASKETBALL_POINTS", "BASKETBALL_REBOUNDS_TOTAL*", "BASKETBALL_ASSISTS", "BASKETBALL_FIELD_GOALS_MADE_ATTEMPTED*", "BASKETBALL_THREE_POINTERS_MADE_ATTEMPTED*"];

		if (game["statistics"] && game["statistics"]["team1"] && game["statistics"]["team1"]["BASKETBALL_STARTER"]) {
			dataTableTitles = ["Starters", "Bench"];
			dataTablePrimaryColumns = ["BASKETBALL_POINTS", "BASKETBALL_POINTS"];
			dataTableColumns = [basketballColumns, basketballColumns];
		} else {
			dataTableTitles = [""];
			dataTablePrimaryColumns = ["BASKETBALL_POINTS"];
			dataTableColumns = [basketballColumns];
		}

	} else if (game["sport"] == "mlb") {

		dataTableTitles = ["Batting", "Pitching"];
		dataTablePrimaryColumns = ["BASEBALL_BATTING_LINEUP_POSITION+", "BASEBALL_PITCHING_INNINGS_PITCHED"];
		dataTableColumns = [["BASEBALL_BATTING_AT_BATS", "BASEBALL_BATTING_RUNS", "BASEBALL_BATTING_HITS", "BASEBALL_BATTING_RUNS_BATTED_IN", "BASEBALL_BATTING_WALKS", "BASEBALL_BATTING_STRIKEOUTS"], ["BASEBALL_PITCHING_INNINGS_PITCHED", "BASEBALL_PITCHING_HITS", "BASEBALL_PITCHING_RUNS", "BASEBALL_PITCHING_RUNS_EARNED", "BASEBALL_PITCHING_WALKS", "BASEBALL_PITCHING_STRIKEOUTS"]];

	} else if (game["sport"] == "nhl") {

		dataTableTitles = ["Players", "Goaltending"];
		dataTablePrimaryColumns = ["HOCKEY_GOALS", "HOCKEY_GOALTENDING_SHOTS"];
		dataTableColumns = [["HOCKEY_GOALS", "HOCKEY_ASSISTS", "HOCKEY_PLUS_MINUS", "HOCKEY_SHOTS", "HOCKEY_HITS", "HOCKEY_BLOCKS_MADE"], ["HOCKEY_GOALTENDING_SAVES", "HOCKEY_GOALTENDING_SHOTS", "HOCKEY_GOALTENDING_SAVE_PERCENTAGE*"]];

	} else if (game["sport"] == "soccer") {
		dataTableTitles = ["Lineups"];
		dataTablePrimaryColumns = ["SOCCER_GOALS"];
		dataTableColumns = [["SOCCER_GOALS", "SOCCER_ASSISTS", "SOCCER_SHOTS_ON_GOAL", "SOCCER_SHOTS_TOTAL"]];
	}


	var dataTable;
	var h4, table, tr, th, td, div, statsRow;
	var teamIndexes = [1,2];

	var playerIDs;

	for (var i=0; i<dataTableColumns.length; i++) {

		//Table title
		h4 = document.createElement("h4");
		h4.innerHTML = dataTableTitles[i];
		playerStats.appendChild(h4);

		//Row of two stats tables
		statsRow = document.createElement("div");
		statsRow.className = "metabet-betsinabox-player-stats-row";
		playerStats.appendChild(statsRow);

		teamIndexes.forEach(function(teamIndex) {


			//Get all statistics we'd like to show that
			//are currently present for this team.  We want
			//all stats present in feed, and composite fields
			//which are marked with an asterisk.
			dataTable = [];
			for (var j=0; j<dataTableColumns[i].length; j++) {
				if (game["statistics"]["team" + teamIndex][dataTableColumns[i][j]] || (dataTableColumns[i][j].indexOf("*") !== -1)) {
					dataTable.push(dataTableColumns[i][j]);
				}
			}



			//Create table
			table = document.createElement("table");


			//Get players to be displayed in this table
			if ((dataTableTitles.length > 1) && ((game["sport"] == "nba") || (game["sport"] == "ncaab"))) {

				//Statistics for some sports are broken up
				//into starters and bench players when we have
				//detailed data

				var filterColumns;
				var secondaryColumn = null;
				if ((game["sport"] == "nba") || (game["sport"] == "ncaab")) {
					filterColumns = ["BASKETBALL_STARTER"];
					secondaryColumn = "BASKETBALL_MINUTES";
				} else {
					filterColumns = ["SOCCER_STARTER"];
				}

				starterIDs = mb_getPlayerIDsForTable(game, teamIndex, dataTablePrimaryColumns[i], filterColumns, secondaryColumn);

				if (i == 0) {
					playerIDs = starterIDs;
				} else {
					playerIDs = mb_getPlayerIDsForTable(game, teamIndex, dataTablePrimaryColumns[i], dataTable, secondaryColumn).filter( ;
				}

			} else if (game["sport"] == "nhl") {

				if (i == 0) {
					//Exclude Goalies from main section
					//of NHL player stats
					playerIDs = mb_getPlayerIDsForTable(game, teamIndex, dataTablePrimaryColumns[i], dataTable, "HOCKEY_PLUS_MINUS").filter( function (playerID) {
						return (mb_getPlayerPosition(game, playerID, teamIndex) != "G");
					});
				} else {
					playerIDs = mb_getPlayerIDsForTable(game, teamIndex, dataTablePrimaryColumns[i], dataTable);
				}

			} else {
				playerIDs = mb_getPlayerIDsForTable(game, teamIndex, dataTablePrimaryColumns[i], dataTable);
			}




			//Column headers
			tr = document.createElement("tr");
			th = document.createElement("th");
			th.innerHTML = ((teamIndex == 1) ? (game["team1Name"] ? game["team1Name"] : game["team1City"]) : (game["team2Name"] ? game["team2Name"] : game["team2City"]));
			tr.append(th);
			for (var j=0; j<dataTable.length; j++) {
				th = document.createElement("th");
				th.innerHTML = mb_getPlayerStatisticTypeAbbreviation(dataTable[j]);
				tr.appendChild(th);
			}
			table.appendChild(tr);


			//Player stats
			for (var j=0; j<playerIDs.length; j++) {

				tr = document.createElement("tr");

				//Player name
				td = document.createElement("td");
				td.className = "metabet-betsinabox-name";
				a = mb_createEntityRedirect("/" + game["sport"] + "/players/" + playerIDs[j], null, "player");
				a.innerHTML = mb_getPlayerNameFromGame(game, playerIDs[j], teamIndex);
				td.appendChild(a);

				//We'll add a small indent for baseball players in
				//batting section, if they weren't a starter.
				if ((game["sport"] == "mlb") && (i == 0) && (mb_getPlayerStatisticValue(game, playerIDs[j], "BASEBALL_BATTING_LINEUP_ENTRY_INNING") > 0)) {
					td.style.paddingLeft = "10%";
				}


				if (game["sport"] == "soccer") {

					if (mb_getPlayerStatisticValue(game, playerIDs[j], "SOCCER_YELLOW_CARDS")) {
						var img = document.createElement("img");
						img.src = "//go.metabet.io/img/soccer/card-yellow.png";
						td.appendChild(img);
					}
					if (mb_getPlayerStatisticValue(game, playerIDs[j], "SOCCER_RED_CARDS")) {
						var img = document.createElement("img");
						img.src = "//go.metabet.io/img/soccer/card-red.png";
						td.appendChild(img);
					}

				}

				tr.append(td);


				//Stat values
				for (var k=0; k<dataTable.length; k++) {
					td = document.createElement("td");
					td.append(mb_getPlayerStatisticValue(game, playerIDs[j], dataTable[k]));
					tr.append(td);
				}

				table.append(tr);

			}

			statsRow.appendChild(table);

		});


	}

}



function mb_getPlayerStatisticTypeAbbreviation(type) {

	switch (type) {
		case "FOOTBALL_PASSING_ATTEMPTS":
		case "FOOTBALL_RUSHING_ATTEMPTS":
			return "Att";
		case "FOOTBALL_PASSING_COMPLETIONS":
			return "C";
		case "FOOTBALL_PASSING_YARDS":
		case "FOOTBALL_RECEIVING_YARDS":
		case "FOOTBALL_RUSHING_YARDS":
			return "Yds";
		case "FOOTBALL_RUSHING_RUSH_AVERAGE*":
		case "FOOTBALL_RECEIVING_RECEPTION_AVERAGE*":
			return "Avg"
		case "FOOTBALL_PASSING_LONG":
		case "FOOTBALL_RECEIVING_LONG":
		case "FOOTBALL_RUSHING_LONG":
			return "Lg";
		case "FOOTBALL_PASSING_TOUCHDOWNS":
		case "FOOTBALL_RECEIVING_TOUCHDOWNS":
		case "FOOTBALL_RUSHING_TOUCHDOWNS":
			return "TD";
		case "FOOTBALL_PASSING_INTERCEPTIONS":
			return "Int";
		case "FOOTBALL_RECEIVING_RECEPTIONS":
			return "Rec";
		case "FOOTBALL_DEFENSIVE_INTERCEPTIONS":
			return "Int";
		case "FOOTBALL_DEFENSIVE_SACKS":
			return "Sck";
		case "FOOTBALL_DEFENSIVE_TACKLES":
			return "Tac";
		case "FOOTBALL_DEFENSIVE_TACKLES_ASSISTS":
			return "Ast";
		case "BASEBALL_BATTING_AT_BATS":
			return "AB";
		case "BASEBALL_BATTING_HIT_BY_PITCH":
			return "HBP";
		case "BASEBALL_BATTING_HITS":
		case "BASEBALL_PITCHING_HITS":
			return "H";
		case "BASEBALL_BATTING_HOME_RUNS":
			return "HR";
		case "BASEBALL_BATTING_PITCHES_FACED":
			return "P#";
		case "BASEBALL_BATTING_RUNS":
		case "BASEBALL_PITCHING_RUNS":
			return "R";
		case "BASEBALL_BATTING_RUNS_BATTED_IN":
			return "RBI";
		case "BASEBALL_BATTING_STRIKEOUTS":
		case "BASEBALL_PITCHING_STRIKEOUTS":
			return "SO";
		case "BASEBALL_BATTING_WALKS":
			return "BB";
		case "BASEBALL_PITCHING_INNINGS_PITCHED":
			return "IP";
		case "BASEBALL_PITCHING_RUNS_EARNED":
			return "ER";
		case "BASEBALL_PITCHING_WALKS":
			return "BB";
		case "BASKETBALL_MINUTES":
			return "Min";
		case "BASKETBALL_POINTS":
			return "Pts";
		case "BASKETBALL_FIELD_GOALS_MADE_ATTEMPTED*":
			return "FG";
		case "BASKETBALL_THREE_POINTERS_MADE_ATTEMPTED*":
			return "3Pt";
		case "BASKETBALL_FREE_THROWS_MADE_ATTEMPTED*":
			return "FT";
		case "BASKETBALL_REBOUNDS_DEFENSIVE":
			return "DReb";
		case "BASKETBALL_REBOUNDS_OFFENSIVE":
			return "OReb";
		case "BASKETBALL_REBOUNDS_TOTAL*":
			return "Reb"
		case "BASKETBALL_ASSISTS":
			return "Ast";
		case "BASKETBALL_STEALS":
			return "Stl";
		case "BASKETBALL_BLOCKS":
			return "B";
		case "BASKETBALL_FOULS_PERSONAL":
			return "PF";
		case "BASKETBALL_TURNOVERS":
			return "TO";
		case "BASKETBALL_PLUS_MINUS":
			return "+/-";
		case "SOCCER_GOALS":
			return "G";
		case "SOCCER_ASSISTS":
			return "A";
		case "SOCCER_YELLOW_CARDS":
			return "YC";
		case "SOCCER_RED_CARDS":
			return "RC";
		case "SOCCER_SHOTS_ON_GOAL":
			return "SG";
		case "SOCCER_SHOTS_TOTAL":
			return "ST";
		case "HOCKEY_ASSISTS":
			return "A";
		case "HOCKEY_BLOCKS_MADE":
			return "B";
		case "HOCKEY_GOALS":
			return "G";
		case "HOCKEY_HITS":
			return "H";
		case "HOCKEY_PLUS_MINUS":
			return "+/-";
		case "HOCKEY_SHOTS":
		case "HOCKEY_GOALTENDING_SHOTS":
			return "SH";
		case "HOCKEY_GOALTENDING_SAVES":
			return "SV"
		case "HOCKEY_GOALTENDING_SAVE_PERCENTAGE*":
			return "SV%";
		case "HOCKEY_PLUS_MINUS":
			return "+/-";
		default:
			return "-";
	}

}



//Returns a list of the player IDs that have a value for at least
//one of the specified columns.  The IDs will be sorted in descending
//order of their value for the specified primary column.  If two
//players have the same value for the primary column and a secondary
//column is specified, it will be used to break the tie.
function mb_getPlayerIDsForTable(game, teamIndex, primaryColumn, columns, secondaryColumn) {

	var playerIDs = [];

	var teamStatistics = game["statistics"]["team" + teamIndex];
	var statistic;

	//Get all player IDs that have a value for the table's columns
	for (var i=0; i<columns.length; i++) {

		statistic = teamStatistics[columns[i]];

		if (statistic) {
			for (var j=0; j<statistic.length; j++) {
				playerIDs.push(statistic[j]["playerID"]);
			}
		}

	}


	//Remove duplicates from list of players
	var uniquePlayerIDs = [];
	uniquePlayerIDs = playerIDs.filter(function(item) {
		return uniquePlayerIDs.hasOwnProperty(item) ? false : (uniquePlayerIDs[item] = true);
	});


	var sortedPlayerIDs = [];


	if (game["sport"] == "soccer") {

		//We will sort these players by their playing position
		var playersByPosition = [];
		var position;
		playersByPosition["G"] = [];
		playersByPosition["D"] = [];
		playersByPosition["M"] = [];
		playersByPosition["F"] = [];
		playersByPosition["?"] = [];

		for (var i=0; i<uniquePlayerIDs.length; i++) {
			position = mb_getPlayerPosition(game, uniquePlayerIDs[i], teamIndex);
			playersByPosition[(playersByPosition[position] != undefined) ? position : "?"].push(uniquePlayerIDs[i]);
		}

		sortedPlayerIDs = playersByPosition["G"].concat(playersByPosition["D"]).concat(playersByPosition["M"]).concat(playersByPosition["F"]).concat(playersByPosition["?"]);

	} else {

		//By default, we will sort columns in descending
		//order, but if a "+" is appended to the column
		//name, we will sort it in ascending order.
		var primaryColumnSortOrder = -1;
		if (primaryColumn.match(/[+]$/)) {
			primaryColumnSortOrder = 1;
			primaryColumn = primaryColumn.replace(/[+]$/, "");
		}
		var secondaryColumnSortOrder = -1;
		if (secondaryColumn && secondaryColumn.match(/[+]$/)) {
			secondaryColumnSortOrder = 1;
			secondaryColumn = secondaryColumn.replace(/[+]$/, "");
		}

		uniquePlayerIDs.sort(function(id1, id2) {
			var value1 = parseFloat(mb_getPlayerStatisticValue(game, id1, primaryColumn));
			var value2 = parseFloat(mb_getPlayerStatisticValue(game, id2, primaryColumn));
			if (secondaryColumn && (value1 == value2)) {
				return (parseFloat(mb_getPlayerStatisticValue(game, id1, secondaryColumn)) - parseFloat(mb_getPlayerStatisticValue(game, id2, secondaryColumn))) * secondaryColumnSortOrder;
			} else {
				return (value1 - value2) * primaryColumnSortOrder;
			}
		});

		sortedPlayerIDs = uniquePlayerIDs;

	}

	return sortedPlayerIDs;

}


function mb_getPlayerNameFromGame(game, playerID, teamIndex) {

	var selectedTeam = "team" + teamIndex;
	var dontAbbreviate = (game["sport"] == "soccer");

	for (var column in game["statistics"][selectedTeam]) {
		for (var j=0; j<game["statistics"][selectedTeam][column].length; j++) {
			if (game["statistics"][selectedTeam][column][j]["playerID"] == playerID) {
				if (!game["statistics"][selectedTeam][column][j]["lastName"] || game["statistics"][selectedTeam][column][j]["lastName"] == "()") {
					return game["statistics"][selectedTeam][column][j]["firstName"];
				} else {
					return ((game["statistics"][selectedTeam][column][j]["lastName"] && !dontAbbreviate) ? game["statistics"][selectedTeam][column][j]["firstName"].substring(0, 1) + "." : game["statistics"][selectedTeam][column][j]["firstName"]) + " " + game["statistics"][selectedTeam][column][j]["lastName"] + (game["statistics"][selectedTeam][column][j]["position"] ? "<sup>" + game["statistics"][selectedTeam][column][j]["position"] + "</sup>" : "");
				}
			}
		}
	}

	return "-";

}


function mb_getPlayerStatisticValue(game, playerID, column) {


	//Calculate any 'composite' column values
	//Composite columns should always end in an asterisk.
	if (column == "FOOTBALL_RUSHING_RUSH_AVERAGE*") {
		var average = (mb_getPlayerStatisticValue(game, playerID, "FOOTBALL_RUSHING_YARDS")/mb_getPlayerStatisticValue(game, playerID, "FOOTBALL_RUSHING_ATTEMPTS")).toFixed(1);
		return isNaN(average) ? "-" : average;
	} else if (column == "FOOTBALL_RECEIVING_RECEPTION_AVERAGE*") {
		var average = (mb_getPlayerStatisticValue(game, playerID, "FOOTBALL_RECEIVING_YARDS")/mb_getPlayerStatisticValue(game, playerID, "FOOTBALL_RECEIVING_RECEPTIONS")).toFixed(1);
		return isNaN(average) ? "-" : average;
	} else if (column == "BASKETBALL_FIELD_GOALS_MADE_ATTEMPTED*") {
		return mb_getPlayerStatisticValue(game, playerID, "BASKETBALL_FIELD_GOALS_MADE") + "-" + mb_getPlayerStatisticValue(game, playerID, "BASKETBALL_FIELD_GOALS_ATTEMPTED");
	} else if (column == "BASKETBALL_THREE_POINTERS_MADE_ATTEMPTED*") {
		return mb_getPlayerStatisticValue(game, playerID, "BASKETBALL_THREE_POINTERS_MADE") + "-" + mb_getPlayerStatisticValue(game, playerID, "BASKETBALL_THREE_POINTERS_ATTEMPTED");
	} else if (column == "BASKETBALL_FREE_THROWS_MADE_ATTEMPTED*") {
		return mb_getPlayerStatisticValue(game, playerID, "BASKETBALL_FREE_THROWS_MADE") + "-" + mb_getPlayerStatisticValue(game, playerID, "BASKETBALL_FREE_THROWS_ATTEMPTED");
	} else if (column == "BASKETBALL_REBOUNDS_TOTAL*") {
		var reboundsDefensive = parseInt(mb_getPlayerStatisticValue(game, playerID, "BASKETBALL_REBOUNDS_DEFENSIVE"));
		var reboundsOffensive = parseInt(mb_getPlayerStatisticValue(game, playerID, "BASKETBALL_REBOUNDS_OFFENSIVE"));
		return (reboundsDefensive+reboundsOffensive);
	} else if (column == "HOCKEY_GOALTENDING_SAVE_PERCENTAGE*") {
		var percentage = (mb_getPlayerStatisticValue(game, playerID, "HOCKEY_GOALTENDING_SAVES")/mb_getPlayerStatisticValue(game, playerID, "HOCKEY_GOALTENDING_SHOTS")).toFixed(3);
		return isNaN(percentage) ? "-" : percentage.replace(/^0/, "");
	}


	for (var teamIndex=1; teamIndex<=2; teamIndex++) {
		var playerStatistics = game["statistics"]["team" + teamIndex][column];
		if (playerStatistics) {
			for (var i=0; i<playerStatistics.length; i++) {
				if (playerStatistics[i]["playerID"] == playerID) {
					return playerStatistics[i]["value"];
				}
			}
		}
	}


	return 0;

}



//Returns the value of the position attribute for the specified
//player, or null if one can't be found.  This method assumes that
//we're searching for a position for a player on the currently
//selected team, and that the player's position is constant in all
//statistical groupings.
function mb_getPlayerPosition(game, playerID, teamIndex) {

	var playerStatistics = game["statistics"]["team" + teamIndex];
	if (playerStatistics) {
		for (var stat in playerStatistics) {
			for (var j=0; j<playerStatistics[stat].length; j++) {
				if (playerStatistics[stat][j]["playerID"] == playerID) {
					return playerStatistics[stat][j]["position"];
					break;
				}
			}
		}
	}

	return null;

}



function mb_insertBetsInABoxSchedule(target, startDate, sport, leagueCode) {

	var elements = target ? new Array(target) : document.querySelectorAll("div.metabet-betsinabox-schedule");
	Array.from(elements).forEach(function(stage) {

		//Get variables
		var teamID = null;
		var statsPerformTeamID = null;
		var rows = null;

		stage.classList.forEach(function(className) {
			if (!sport && className.match("metabet-league-.*")) {
				sport = className.replace(/metabet-league-/, "");
				if (sport.indexOf("/") != -1) {
					leagueCode = sport.split("/")[1].toUpperCase();
					sport = sport.split("/")[0];
				}
			} else if (className.match("metabet-teamID-.*")) {
				teamID = className.replace(/metabet-teamID-/, "");
			} else if (className.match("metabet-statsPerformTeamID-.*")) {
				statsPerformTeamID = className.replace(/metabet-statsPerformTeamID-/, "");
			} else if (className.match("metabet-rows-[0-9]+")) {
				rows = parseInt(className.replace(/metabet-rows-/, ""));
			}
		});


		var element = stage.querySelector(".metabet-betsinabox-games");
		if (element) {
			//Empty existing CSS shell after a date change
			mb_emptyElement(element);
		} else {

			//Add CSS shell
			element = document.createElement("div");
			element.className = "metabet-betsinabox-games";
			stage.appendChild(element);

			//Subscribe to resize media queries
			element.setAttribute("metabet-observe-resizes", "");

		}

		var nationalCallSigns = new RegExp("^(" + ["BEIN.*", "CBSSN.*", "ESPN(2|EWS|U)?", "FUBO.*", "MLBN", "MSG(HD)?", "NBATV(HD)?", "NHLNET", "NFL(HD)?", "PAC12", "SEC(HD)?", "UNI(P)?(HD)?", "USA(HD)?", "WABC", "WCBS", "WNBC", "WNYW"].join("|") + ")$");


		//Get the games to display
		var gamesURL;
		if (teamID) {
			gamesURL = mb_buildStaticAPIURL("/api/games.json?teamID=" + teamID);
			gamesURL += rows ? "&nearbyCount=" + rows : "&season";
		} else if (statsPerformTeamID) {
			gamesURL = mb_buildStaticAPIURL("/api/games.json?statsPerformTeamID=" + statsPerformTeamID);
			gamesURL += rows ? "&nearbyCount=" + rows : "&season";
		} else if (sport) {

			//Figure out start and end dates
			if (!startDate) {
				startDate = new Date();
			}
			startDate.setHours(0);

			if ((sport == "nfl") || (sport == "ncaaf")) {
				//Nudge start date to previous Wednesday
				if (startDate.getDay() >= 3) {
					startDate = new Date(startDate.getTime() - ((startDate.getDay() - 3) * 1000*60*60*24));
				} else {
					startDate = new Date(startDate.getTime() - ((startDate.getDay() + 4) * 1000*60*60*24));
				}
			}


			var endDate = new Date(startDate.getTime() + 1000*60*60*24*7);

			gamesURL = mb_buildStaticAPIURL("/api/games.json?sport=" + sport + (leagueCode ? "&leagueCode=" + leagueCode : "") + "&startDate=" + startDate.getTime() + "&endDate=" + endDate.getTime());
							gamesURL += "&ticketsProvider=TICKETSMARTER";
				gamesURL += "&providerID=DITV";
			
		} else {
			return;
		}

		mb_getJSON(gamesURL, function(gamesData) {

			var games = mb_filterGamesForSite(gamesData["results"]);
			var game;

			//Create groupings for games
			var groupings = [];
			var grouping;
			for (var i=0; i<games.length; i++) {

				game = games[i];
				if (teamID || statsPerformTeamID) {
					grouping = "";
				} else {
					grouping = new Date(game["date"]).toLocaleDateString("en-US", { weekday: "long", year: "numeric", month: "short", day: "numeric" });
				}

				if (!groupings.hasOwnProperty(grouping)) {
					groupings[grouping] = [];
				}
				groupings[grouping].push(game);

			}


			//If we can't find any games, display an error message
			if (games.length == 0) {

				var h3 = document.createElement("h3");
				h3.innerHTML = new Date(startDate).toLocaleDateString("en-US", { weekday: "long", year: "numeric", month: "long", day: "numeric" });
				h3.appendChild(mb_buildDatePicker(stage, startDate, sport, leagueCode));
				element.appendChild(h3);

				var p = document.createElement("p");
				p.innerHTML = "There are no games scheduled on this date.";
				element.appendChild(p);

				return;

			}


			//Get odds for games
			mb_getJSON(mb_buildStaticAPIURL("/api/odds.json?" + (teamID ? "&teamID=" + teamID : "&sport=" + sport)), function(oddsData) {


				var h3, table, tbody, thead, tr, th, td, a, div, span, img, button;
				var game, odd;
				var didAwayTeamWin, didHomeTeamWin;

				var columnHeaders = null;
				var columnHeaderClasses = null;
				
					if ((sport == "mlb") || (sport == "nfl") || (sport == "nhl") || (sport == "ncaaf")) {
						columnHeaders = new Array("Away", "Home", "Time", "Live Streaming", "Buy Tickets", "Venue");
						columnHeaderClasses = new Array("metabet-betsinabox-team", "metabet-betsinabox-team", "metabet-betsinabox-score", "metabet-betsinabox-fubo-cta", "metabet-betsinabox-ticketsmarter-cta", "metabet-betsinabox-location");
					} else if ((sport == "nba") || (sport == "ncaab") || (sport == "ncaabw")) {
						columnHeaders = new Array("Away", "Home", "Time", "Buy Tickets", "Venue");
						columnHeaderClasses = new Array("metabet-betsinabox-team", "metabet-betsinabox-team", "metabet-betsinabox-score", "metabet-betsinabox-ticketsmarter-cta", "metabet-betsinabox-location");
					} else if (sport == "soccer") {
						columnHeaders = new Array("Home", "Away", "Time", "Live Streaming", "Venue");
						columnHeaderClasses = new Array("metabet-betsinabox-team", "metabet-betsinabox-team", "metabet-betsinabox-score", "metabet-betsinabox-fubo-cta", "metabet-betsinabox-location");
					} else if (sport == "wnba") {
						columnHeaders = new Array("Away", "Home", "Time", "Live Streaming", "Venue");
						columnHeaderClasses = new Array("metabet-betsinabox-team", "metabet-betsinabox-team", "metabet-betsinabox-score", "metabet-betsinabox-fubo-cta", "metabet-betsinabox-location");
					} else {
						columnHeaders = new Array("Away", "Home", "Time", "Venue");
						columnHeaderClasses = new Array("metabet-betsinabox-team", "metabet-betsinabox-team", "metabet-betsinabox-score", "metabet-betsinabox-location");
					}


				
				//Display games by grouping
				for (var grouping in groupings) {

					games = groupings[grouping];

					//Display the grouping if it's not empty
					if (grouping) {

						h3 = document.createElement("h3");
						h3.innerHTML = grouping;

						//If this is the first grouping, add a datepicker
						if (!element.firstChild) {
							h3.appendChild(mb_buildDatePicker(stage, startDate, sport, leagueCode));
						}

						element.appendChild(h3);

					}


					table = document.createElement("table");
					tbody = document.createElement("tbody");



					if (columnHeaders) {
						thead = document.createElement("thead");
						tr = document.createElement("tr");
						for (var i=0; i<columnHeaders.length; i++) {
							th = document.createElement("th");
							th.innerHTML = columnHeaders[i];
							th.className = columnHeaderClasses[i];
							tr.appendChild(th);
						}
						thead.appendChild(tr);
						table.appendChild(thead);
					}

					for (var j=0; j<games.length; j++) {

						game = games[j];

						//Skip postponed and abandoned games
						if (game.hasOwnProperty("status")) {
							continue;
						}

						odd = null;
						if (!mb_hasGameStarted(game)) {
							for (var k=0; k<oddsData["results"].length; k++) {
								if (oddsData["results"][k]["gameID"] == game["gameID"]) {
									odd = mb_getBestGameOdds(oddsData["results"][k], "spreadLine2", true, null, element);
									break;
								}
							}
						}

						didAwayTeamWin = mb_isGameFinished(game) && (game["team1Score"] > game["team2Score"]);
						didHomeTeamWin = mb_isGameFinished(game) && (game["team2Score"] > game["team1Score"]);

						tr = document.createElement("tr");

						//Away Team
						td = document.createElement("td");
						td.className = "metabet-betsinabox-team";
						td.classList.toggle("metabet-betsinabox-winner", didAwayTeamWin);

						a = mb_createEntityRedirect("/" + game["sport"] + "/teams/" + game["team1ID"], game, "team1");

						img = document.createElement("img");
						img.src = "//metabet.static.areyouwatchingthis.com/images/teams/80x80/" + game["team1ID"] + ".png";
						img.className = "metabet-betsinabox-logo";
						a.appendChild(img);
						span = document.createElement("span");
						span.className = "metabet-betsinabox-team-name";
						span.innerHTML = mb_getAwayTeamDisplayName(game);
						a.appendChild(span);
						span = document.createElement("span");
						span.className = "metabet-betsinabox-team-initials";
						span.innerHTML = game["team1Initials"];
						a.appendChild(span);
						td.appendChild(a);

						if (odd && odd.hasOwnProperty("spread") && (odd["spread"] > 0)) {
							span = document.createElement("span");
							span.className = "metabet-betsinabox-line";
							span.innerHTML = mb_formatSpread(odd["spread"] * -1);
							td.appendChild(span);
						}
						tr.appendChild(td);

						//Home Team
						td = document.createElement("td");
						td.className = "metabet-betsinabox-team";
						td.classList.toggle("metabet-betsinabox-winner", didHomeTeamWin);

						a = mb_createEntityRedirect("/" + game["sport"] + "/teams/" + game["team2ID"], game, "team2");

						img = document.createElement("img");
						img.src = "//metabet.static.areyouwatchingthis.com/images/teams/80x80/" + game["team2ID"] + ".png";
						img.className = "metabet-betsinabox-logo";
						a.appendChild(img);
						span = document.createElement("span");
						span.className = "metabet-betsinabox-team-name";
						span.innerHTML = mb_getHomeTeamDisplayName(game);
						a.appendChild(span);
						span = document.createElement("span");
						span.className = "metabet-betsinabox-team-initials";
						span.innerHTML = game["team2Initials"];
						a.appendChild(span);
						td.appendChild(a);

						if (odd && odd.hasOwnProperty("spread") && (odd["spread"] <= 0)) {
							span = document.createElement("span");
							span.className = "metabet-betsinabox-line";
							span.innerHTML = mb_formatSpread(odd["spread"]);
							td.appendChild(span);
						}

						if (columnHeaders.indexOf("Home") == 0) {
							tr.insertBefore(td, tr.firstChild);
						} else {
							tr.appendChild(td);
						}

						//Score/Time
						td = document.createElement("td");
						td.className = "metabet-betsinabox-score";
						a = mb_createEntityRedirect("/" + game["sport"] + "/games/" + game["gameID"], game, "game");

						if (!mb_hasGameStarted(game)) {
							div = document.createElement("div");
							div.className = "time";
							if (!grouping) {
								div.innerHTML = mb_getUpcomingDateTime(game, false);
							} else {
								div.innerHTML = mb_getShortTime(game, false);
							}
							a.appendChild(div);
						} else {
							span = document.createElement("span");
							span.innerHTML = Math.max(game["team1Score"], game["team2Score"]) + "-" + Math.min(game["team1Score"], game["team2Score"]);
							a.appendChild(span);
							if (mb_hasGameStarted(game) && !mb_isGameFinished(game)) {
								span = document.createElement("span");
								span.className = "metabet-betsinabox-score-separator";
								span.innerHTML = ",&nbsp;";
								a.appendChild(span);
								span = document.createElement("span");
								span.innerHTML = mb_getTimeLeftCompact(game);
								a.appendChild(span);
							}
						}
						td.appendChild(a);
						tr.appendChild(td);


						
						//Fubo CTA
						td = document.createElement("td");
						td.className = "metabet-betsinabox-fubo-cta metabet-sposnored";

						if (game.hasOwnProperty("airings")) {

							for (var k=0; k<game["airings"].length; k++) {
								if (nationalCallSigns.test(game["airings"][k]["callSign"])) {

									a = document.createElement("a");
									a.href = "https://www.fubo.tv/welcome/";
									if (game["sport"] == "mlb") {
										a.href = "https://www.fubo.tv/lp/mlb/";
									} else if (game["sport"] == "ncaab") {
										a.href = "https://www.fubo.tv/lp/collegebasketball/";
									} else if (game["sport"] == "nba") {
										a.href = "https://www.fubo.tv/lp/nba/";
									} else if (game["sport"] == "nfl") {
										a.href = "https://www.fubo.tv/welcome/football/";
									} else if (game["sport"] == "nhl") {
										a.href = "https://www.fubo.tv/lp/nhl/";
									} else if (game["sport"] == "soccer") {
										a.href = "https://www.fubo.tv/lp/soccer/";
									} else if (game["sport"] == "wnba") {
										a.href = "https://www.fubo.tv/welcome/leagues/191289?irad=1707172&irmp=1131770&sharedid=schedulefeed";
									}

									if (a.href.indexOf("?") == -1) {
										a.href += "?irad=343747&irmp=2436205&sharedid=schedulefeed";
									}
									a.target = "_blank"
									a.rel = "noopener noreferrer";
									img = document.createElement("img");
									img.src = "https://go.metabet.io/img/fubotv.svg";
									img.title = "Watch " + game["airings"][k]["callSign"] + " on fuboTV!";
									img.style.width = "56px";
									img.style.height = "27px";
									a.appendChild(img);
									td.appendChild(a);
									break;

								}
							}
						}

						if (columnHeaderClasses && (columnHeaderClasses.indexOf("metabet-betsinabox-fubo-cta") != -1)) {
							tr.appendChild(td);
							stage.classList.toggle("metabet-betsinabox-schedule-has-ctas", true);
						}


						//TicketSmarter CTA
						var tickets = null;
						td = document.createElement("td");
						td.className = "metabet-betsinabox-ticketsmarter-cta metabet-sposnored";
						if (game.hasOwnProperty("tickets")) {

							tickets = game["tickets"][0];

							a = document.createElement("a");
							a.href = tickets["url"] + ((tickets["url"].indexOf("?") == -1) ? "?" : "&") + "utm_source=sportingnews.com&utm_medium=schedule&utm_campaign=tsn";
							a.target = "_blank"
							a.rel = "noopener noreferrer";

							img = document.createElement("img");
							img.src = "https://go.metabet.io/img/ticketsmarter.svg";
							img.title = tickets["numberAvailable"].toLocaleString() + " tickets as low as $" + tickets["lowestPrice"].toLocaleString();
							img.style.width = "49px";
							img.style.height = "27px";
							a.appendChild(img);

							span = document.createElement("span");
							span.innerHTML = tickets["numberAvailable"].toLocaleString() + " tickets as low as $" + tickets["lowestPrice"].toLocaleString();
							a.appendChild(span);

							td.appendChild(a);

						}
						if (columnHeaderClasses && (columnHeaderClasses.indexOf("metabet-betsinabox-ticketsmarter-cta") != -1)) {
							tr.appendChild(td);
							stage.classList.toggle("metabet-betsinabox-schedule-has-ctas", true);
						}

						

						//Location
						td = document.createElement("td");
						td.className = "metabet-betsinabox-location";
						if (game.hasOwnProperty("location")) {
							td.innerHTML = game["location"];
						}
						tr.appendChild(td);

						tbody.appendChild(tr);

					}

					table.appendChild(tbody);
					element.appendChild(table);

				}

			});

		});

	});

}



function mb_insertBetsInABoxScores(target, startDate, sport, leagueCode) {

	var elements = target ? new Array(target) : document.querySelectorAll("div.metabet-betsinabox-scores");
	Array.from(elements).forEach(function(stage) {

		//Clear the element in case this was a date change
		mb_emptyElement(stage);

		stage.classList.forEach(function(className) {
			if (!sport && className.match("metabet-league-.*")) {
				sport = className.replace(/metabet-league-/, "");
				if (sport.indexOf("/") != -1) {
					leagueCode = sport.split("/")[1].toUpperCase();
					sport = sport.split("/")[0];
				}
			}
		});

		if (!sport) {
			return;
		}

		//Add CSS shell
		var element = document.createElement("div");
		element.className = "metabet-betsinabox-scores";
		stage.appendChild(element);

		//Was a specific day specified?
		var day = null;
		if (startDate) {
                        var d = ((startDate.getDate() < 10) ? "0" : "") + startDate.getDate();
                        var m = ((startDate.getMonth() < 9) ? "0" : "") + (startDate.getMonth() + 1);
                        var y = startDate.getFullYear();
			day = y + m + d;
		}

		//Get the games to display

		var gamesURL = mb_buildStaticAPIURL("/api/games.json?sport=" + sport + (leagueCode ? "&leagueCode=" + leagueCode : "") + (startDate ? "&day=" + day : ""));
					gamesURL += "&ticketsProvider=TICKETSMARTER";
		
		mb_getJSON(gamesURL, function(gamesData) {

			var games = mb_filterGamesForSite(gamesData["results"]);
			var game;


			//Add date header and date picker
			var h3 = document.createElement("h3");
			h3.innerHTML = new Date(startDate ? startDate : new Date()).toLocaleDateString("en-US", { weekday: "long", year: "numeric", month: "long", day: "numeric" });
			h3.appendChild(mb_buildDatePicker(stage, startDate, sport, leagueCode));
			element.appendChild(h3);


			//If we can't find any games, display an error message
			if (games.length == 0) {

				var p = document.createElement("p");
				p.innerHTML = "There are no games scheduled on this date.";
				element.appendChild(p);

				return;

			}


			//Get odds for games
			mb_getJSON(mb_buildStaticAPIURL("/api/odds.json?sport=" + sport), function(oddsData) {

				var ul, li, div, a, img;
				var game, odd;
				var didAwayTeamWin, didHomeTeamWin;


				ul = document.createElement("ul");


				for (var i=0; i<games.length; i++) {

					game = games[i];

					for (var j=0; j<oddsData["results"].length; j++) {
						if (oddsData["results"][j]["gameID"] == game["gameID"]) {
							odd = mb_getBestGameOdds(oddsData["results"][j], "spreadLine2", true, null, element);
							break;
						}
					}

					didAwayTeamWin = mb_isGameFinished(game) && (game["team1Score"] > game["team2Score"]);
					didHomeTeamWin = mb_isGameFinished(game) && (game["team2Score"] > game["team1Score"]);


					li = document.createElement("li");
					li.classList.toggle("metabet-betsinabox-started", mb_hasGameStarted(game));
					li.classList.toggle("metabet-betsinabox-finished", mb_isGameFinished(game));
										li.classList.toggle("metabet-flip-soccer-teams", (game["sport"] == "soccer"));
					
					a = mb_createEntityRedirect("/" + game["sport"] + "/teams/" + game["team1ID"], game, "team1");
					a.className = "metabet-betsinabox-team1Logo";
					img = document.createElement("img");
					img.src = "//metabet.static.areyouwatchingthis.com/images/teams/80x80/" + game["team1ID"] + ".png";
					img.className = "metabet-betsinabox-logo";
					a.appendChild(img);
					li.appendChild(a);

					a = mb_createEntityRedirect("/" + game["sport"] + "/teams/" + game["team1ID"], game, "team1");
					a.className = "metabet-betsinabox-team1Name";
					div = document.createElement("div");
					div.classList.toggle("metabet-betsinabox-winner", didAwayTeamWin);
					div.innerHTML = mb_getAwayTeamDisplayName(game);
					if (!mb_hasGameStarted(game) && odd && odd.hasOwnProperty("spread") && (odd["spread"] > 0)) {
						span = document.createElement("span");
						span.className = "metabet-betsinabox-line";
						span.innerHTML = mb_formatSpread(odd["spread"]*-1);
						div.appendChild(span);
					}
					a.appendChild(div);
					li.appendChild(a);


					a = mb_createEntityRedirect("/" + game["sport"] + "/teams/" + game["team2ID"], game, "team2");
					a.className = "metabet-betsinabox-team2Logo";
					img = document.createElement("img");
					img.src = "//metabet.static.areyouwatchingthis.com/images/teams/80x80/" + game["team2ID"] + ".png";
					img.className = "metabet-betsinabox-logo";
					a.appendChild(img);
					li.appendChild(a);

					a = mb_createEntityRedirect("/" + game["sport"] + "/teams/" + game["team2ID"], game, "team2");
					a.className = "metabet-betsinabox-team2Name";
					div = document.createElement("div");
					div.classList.toggle("metabet-betsinabox-winner", didHomeTeamWin);
					div.innerHTML = mb_getHomeTeamDisplayName(game);
					if (!mb_hasGameStarted(game) && odd && odd.hasOwnProperty("spread") && (odd["spread"] <= 0)) {
						span = document.createElement("span");
						span.className = "metabet-betsinabox-line";
						span.innerHTML = mb_formatSpread(odd["spread"]);
						div.appendChild(span);
					}
					a.appendChild(div);
					li.appendChild(a);


					if (mb_hasGameStarted(game)) {
						div = document.createElement("div");
						div.className = "metabet-betsinabox-team1Score";
						div.innerHTML = game["team1Score"];
						li.appendChild(div);
						div = document.createElement("div");
						div.className = "metabet-betsinabox-team2Score";
						div.innerHTML = game["team2Score"];
						li.appendChild(div);
					}


					a = mb_createEntityRedirect("/" + game["sport"] + "/games/" + game["gameID"], game, "game");
					a.className = "metabet-betsinabox-time";
					if (!mb_hasGameStarted(game)) {
						a.innerHTML = mb_getShortTime(game);
					} else {
						a.innerHTML = game["timeLeft"];
					}
					li.appendChild(a);

					if (game.hasOwnProperty("headline")) {
						a = mb_createEntityRedirect("/" + game["sport"] + "/games/" + game["gameID"], game, "game");
						a.className = "metabet-betsinabox-headline";
						a.innerHTML = game["headline"];
						li.appendChild(a);
					}


					
					if (!mb_hasGameStarted(game)) {

						li.classList.add("metabet-betsinabox-show-tickets");

						var tickets = null;
						if (game.hasOwnProperty("tickets")) {
							tickets = game["tickets"][0];
						}
						div = document.createElement("div");
						div.className = "metabet-betsinabox-tickets metabet-sponsored";

						img = document.createElement("img");
						img.src = "//go.metabet.io/img/ticket.svg";
						img.style.width = "24px";
						img.style.height = "24px";
						div.appendChild(img);

						if (tickets) {
							span = document.createElement("span");
							span.innerHTML = tickets["numberAvailable"].toLocaleString() + " tickets as low as $" + tickets["lowestPrice"].toLocaleString();
							div.appendChild(span);
						}

						a = document.createElement("a");
						a.href = tickets ? tickets["url"] : "//www.ticketsmarter.com";
													a.href += ((a.href.indexOf("?") == -1) ? "?" : "&") + "utm_source=sportingnews.com&utm_medium=scoreboard&utm_campaign=tsn";
												a.target = "_blank"
						a.rel = "noopener noreferrer";
						a.innerHTML = tickets ? "Buy on TicketSmarter" : "Buy Tickets on TicketSmarter";
						div.append(a);

						li.append(div);

					}

					
					ul.appendChild(li);

				}

				element.appendChild(ul);

			});

		});

	});

}



function mb_buildDatePicker(stage, startDate, sport, leagueCode) {

	button = document.createElement("button");
	button.className = "metabet-datepicker";
	img = document.createElement("img");
	img.src = "//go.metabet.io/img/calendar.svg";
	button.appendChild(img);

	var picker = new Pikaday({
		field: button,
		defaultDate: startDate,
		setDefaultDate: true,
		onSelect: function(date) {
			if (stage.classList.contains("metabet-betsinabox-schedule")) {
				mb_insertBetsInABoxSchedule(stage, date, sport, leagueCode);
			} else if (stage.classList.contains("metabet-betsinabox-scores")) {
				mb_insertBetsInABoxScores(stage, date, sport, leagueCode);
			}
		}
	});

	return button;

}



function mb_insertBetsInABoxSocial(target) {

	var elements = target ? new Array(target) : document.querySelectorAll("div.metabet-betsinabox-social");
	Array.from(elements).forEach(function(stage) {

		//Get variables
		var gameID = null;
		var teamID = null;
		var statsPerformTeamID = null;
		var sport = null;
		var leagueCode = null;

		stage.classList.forEach(function(className) {
			if (className.match("metabet-league-.*")) {
				sport = className.replace(/metabet-league-/, "");
				if (sport.indexOf("/") != -1) {
					leagueCode = sport.split("/")[1].toUpperCase();
					sport = sport.split("/")[0];
				}
			} else if (className.match("metabet-teamID-.*")) {
				teamID = className.replace(/metabet-teamID-/, "");
			} else if (className.match("metabet-statsPerformTeamID-.*")) {
				statsPerformTeamID = className.replace(/metabet-statsPerformTeamID-/, "");
			} else if (className.match("metabet-gameID-.*")) {
				gameID = className.replace(/metabet-gameID-/, "");
			}
		});


		//Add CSS shell
		var element = document.createElement("div");
		element.className = "metabet-betsinabox-related-content";
		stage.appendChild(element);

		//Subscribe to resize media queries
		element.setAttribute("metabet-observe-resizes", "");


		//Get the posts to display
		var url = "/api/social.json";
		if (gameID) {
			url += "?gameID=" + gameID;
		} else if (teamID) {
			url += "?teamID=" + teamID;
		} else if (statsPerformTeamID) {
			url += "?statsPerformTeamID=" + statsPerformTeamID;
		} else if (leagueCode) {
			url += "?leagueCode=" + leagueCode;
		} else if (sport) {
			url += "?sport=" + sport;
		} else {
			return;
		}

		mb_getJSON(mb_buildStaticAPIURL(url), function(socialData) {

			var posts = socialData["results"];
			var post;

			var ul, li, a, img, div, em, strong;
			var backgroundImageURL;

			var h3 = document.createElement("h3");
			h3.innerHTML = "Tweets";
			var span = document.createElement("span");
			var button = document.createElement("button");
			button.innerHTML = "&#9664;";
			span.appendChild(button);
			button = document.createElement("button");
			button.innerHTML = "&#9654;";
			span.appendChild(button);
			h3.appendChild(span);
			element.appendChild(h3);

			h3.querySelectorAll("button").forEach(function(button) {
				button.addEventListener("click", function(event) {
					var pane = event.target.closest(".metabet-betsinabox-related-content");
					var itemWidth = pane.querySelector("ul li").offsetWidth;
					var scrollRight = (button.previousSibling != null);
					pane.querySelector("ul").scrollBy({ left: itemWidth*2*(scrollRight ? 1 : -1), behavior: "smooth" });
				});
			});


			ul = document.createElement("ul");

			for (var i=0; i<posts.length; i++) {

				post = posts[i];

				li = document.createElement("li");

				backgroundImageURL = null;
				if (post.hasOwnProperty("assetURLs")) {
					if (post["assetURLs"].hasOwnProperty("photos")) {
						backgroundImageURL = post["assetURLs"]["photos"][0]["url"];
					} else if (post["assetURLs"].hasOwnProperty("videos")) {
						backgroundImageURL = post["assetURLs"]["videos"][0]["thumbnailURL"];
					}
				}

				if (backgroundImageURL) {
					a = document.createElement("a");
					a.className = "metabet-betsinabox-thumbnail";
					a.href = post["url"];
					a.style.backgroundImage = "url('" + backgroundImageURL + "')";
					li.append(a);
				}

				a = document.createElement("a");
				a.className = "metabet-betsinabox-tweet";
				a.href = post["url"];
				strong = document.createElement("strong");
				strong.innerHTML = post["title"];
				a.appendChild(strong);
				li.append(a);

				div = document.createElement("div");
				div.className = "metabet-betsinabox-handle";
				if (post.hasOwnProperty("assetURLs") && post["assetURLs"].hasOwnProperty("profileImage")) {
					a = document.createElement("a");
					a.href = "//twitter.com/" + post["label"].substring(1);
					img = document.createElement("img");
					img.src = post["assetURLs"]["profileImage"];
					a.appendChild(img);
					div.append(a);
				}
				a = document.createElement("a");
				a.href = "//twitter.com/" + post["label"].substring(1);
				em = document.createElement("em");
				em.innerHTML = post["label"];
				a.append(em);
				div.append(a);
				em = document.createElement("em");
				em.innerHTML = mb_getTimeAgo(new Date(post["date"]));
				div.append(em);
				li.appendChild(div);

				ul.appendChild(li);

			}


			element.appendChild(ul);

		});

	});

}



function mb_insertBetsInABoxStandings(target, sport, leagueCode) {

	var elements = target ? new Array(target) : document.querySelectorAll("div.metabet-betsinabox-standings");
	Array.from(elements).forEach(function(stage) {

		mb_emptyElement(stage);

		stage.classList.forEach(function(className) {
			if (!sport && className.match("metabet-league-.*")) {
				sport = className.replace(/metabet-league-/, "");
				if (sport.indexOf("/") != -1) {
					leagueCode = sport.split("/")[1].toUpperCase();
					sport = sport.split("/")[0];
				}
			}
		});


		if (!sport) {
			return;
		}


		//Add CSS shell
		var element = document.createElement("ul");
		element.className = "metabet-betsinabox-standings";
		stage.appendChild(element);

		//Subscribe to resize media queries
		element.setAttribute("metabet-observe-resizes", "");


		mb_getJSON(mb_buildStaticAPIURL("/api/standings.json?sport=" + sport + (leagueCode ? "&leagueCode=" + leagueCode : "")), function(standings) {

			if (standings["results"].length == 0) {
				return;
			}


			//Build conference dropdown
			if ((sport == "ncaab") || (sport == "ncaabw") || (sport == "ncaaf")) {

				var conferences = new Array();
				for (var i=0; i<standings["results"].length; i++) {

					grouping = standings["results"][i];
					if (!grouping.hasOwnProperty("conference")) {
						continue;
					} else if (conferences.indexOf(grouping["conference"]) != -1) {
						continue;
					} else {
						conferences.push(grouping["conference"]);
					}

				}


				var select = document.createElement("select");
				select.className = "metabet-betsinabox-standings-conferences";

				var option;
				for (var i=0; i<conferences.length; i++) {
					option = document.createElement("option");
					option.innerHTML = conferences[i].replace("Atlantic Coast", "ACC").replace("Southeast", "SEC").replace("Athletic Association", "").trim();
					option.value = conferences[i];
					select.appendChild(option);
				}

				select.addEventListener("change", ;

				stage.insertBefore(select, stage.firstChild);

			}

			mb_buildBetsInABoxStandings(element, standings, sport);

		});

	});

}


function mb_buildBetsInABoxStandings(element, standings, sport) {

	mb_emptyElement(element);

	var groupByDivision = !element.classList.contains("metabet-grouping-conference") && !element.classList.contains("metabet-grouping-overall");
	var groupByConference = element.classList.contains("metabet-grouping-conference");
	var groupings = new Array();
	var grouping;
	var groupingLabel;
	var team;

	for (var i=0; i<standings["results"].length; i++) {

		grouping = standings["results"][i];

		if (groupByDivision) {
			groupingLabel = (grouping.hasOwnProperty("conference") ? grouping["conference"] : "") + " " + (grouping.hasOwnProperty("division") ? grouping["division"] : "");
		} else if (groupByConference) {
			groupingLabel = (grouping.hasOwnProperty("conference") ? grouping["conference"] : "");
		} else {
			groupingLabel = "Overall";
		}

		if (!groupings.hasOwnProperty(groupingLabel)) {
			groupings[groupingLabel] = new Array();
		}

		for (var j=0; j<grouping["teams"].length; j++) {
			groupings[groupingLabel].push(grouping["teams"][j]);
		}

	}



	//Build list of columns to display
	var columns = {
		"wins": "W",
		"losses": "L",
		"ties": "T",
		"losses_overtime": "OTL",
		"points": "PTS",
		"wins_percentage": "%",
		"games_behind": "GB",
		"streak": "STRK",
		"for": "PF",
		"against": "PA",
	}

	if (groupings[Object.keys(groupings)[0]].length > 0) {

		var firstTeam = groupings[Object.keys(groupings)[0]][0];

		if (!firstTeam.hasOwnProperty("ties")) {
			delete columns["ties"];
		}
		if (!firstTeam.hasOwnProperty("losses_overtime")) {
			delete columns["losses_overtime"];
		}
		if (!firstTeam.hasOwnProperty("points")) {
			delete columns["points"];
		}
		if (!firstTeam.hasOwnProperty("streak")) {
			delete columns["streak"];
		}
		if (!firstTeam.hasOwnProperty("for") || !firstTeam.hasOwnProperty("against")) {
			delete columns["for"];
			delete columns["against"];
		}

	}

	if (sport == "mlb") {
		columns["for"] = "RS";
		columns["against"] = "RA";
	} else if (sport == "nba") {
		delete columns["for"];
		delete columns["against"];
	} else if (sport == "nhl") {
		columns["for"] = "GF";
		columns["against"] = "GA";
		delete columns["wins_percentage"];
		delete columns["streak"];
	} else if (sport == "soccer") {
		columns["ties"] = "D";
		columns["for"] = "GF";
		columns["against"] = "GA";
		columns["for_against_difference"] = "GD";
		delete columns["wins_percentage"];
		delete columns["streak"];
		delete columns["points"];
		columns["points"] = "PTS";
	}

	var leagueCode = standings["results"][0]["leagueCode"];
	if ((leagueCode.indexOf("BB") == -1) && (leagueCode.indexOf("BK") == -1) && (leagueCode.indexOf("FB") == -1)) {
		delete columns["games_behind"];
	}





	var selectedConference = null;
	var select = element.parentNode.querySelector("select");
	if (select) {
		selectedConference = select.options[select.selectedIndex].value;
	}

	var li, a, img, table, thead, tbody, tr, th, td;

	for (var groupingLabel in groupings) {

		if (selectedConference && (groupingLabel.indexOf(selectedConference) == -1)) {
			continue;
		}

		var teams = groupings[groupingLabel];
		if (!groupByDivision) {
			teams.sort(function compare(a, b) {
				if (a.hasOwnProperty("points") && b.hasOwnProperty("points") && (a["points"] != b["points"])) {
					return b["points"] - a["points"];
				} else if (!a.hasOwnProperty("wins") || !a.hasOwnProperty("losses") || !b.hasOwnProperty("wins") || !b.hasOwnProperty("losses")) {
					return a["city"] - b["city"];
				} else if (a["wins"] != b["wins"]) {
					return b["wins"] - a["wins"];
				} else if (a["losses"] != b["losses"]) {
					return a["losses"] - b["losses"];
				} else if (a["city"] != b["city"]) {
					return a["city"].localeCompare(b["city"]);
				} else {
					return a["teamID"] - b["teamID"];
				}

			});
		}


		li = document.createElement("li");

		table = document.createElement("table");
		thead = document.createElement("thead");
		tr = document.createElement("tr");

		th = document.createElement("th");
		th.className = "metabet-betsinabox-standings-team-name";
		th.innerHTML = groupingLabel.replace(selectedConference ? selectedConference : "", "").replace("American League", "AL").replace("National League", "NL").trim();
		tr.appendChild(th);
		for (var column in columns) {
			th = document.createElement("th");
			th.className = "metabet-betsinabox-standings-column-" + column;
			th.innerHTML = columns[column];
			tr.appendChild(th);
		}
		thead.appendChild(tr);
		table.appendChild(thead);

		tbody = document.createElement("tbody");

		for (var i=0; i<teams.length; i++) {

			team = teams[i];

			tr = document.createElement("tr");

			td = document.createElement("td")
			td.className = "metabet-betsinabox-standings-team-name";
			a = mb_createEntityRedirect("/" + team["sport"] + "/teams/" + team["teamID"], team, "team");
			img = document.createElement("img");
			img.src = "//metabet.static.areyouwatchingthis.com/images/teams/80x80/" + team["teamID"] + ".png";
			img.className = "metabet-betsinabox-standings-team-logo";
			a.appendChild(img);
			a.append(mb_getTeamDisplayName(team));
			td.appendChild(a);
			tr.appendChild(td);

			for (var column in columns) {
				td = document.createElement("td");
				td.className = "metabet-betsinabox-standings-column-" + column;
				if (column == "for_against_difference") {
					td.innerHTML = team.hasOwnProperty(column) ? ((team[column] > 0 ) ? "+" : "") + team[column] : "-";
				} else if (column == "games_behind") {
					td.innerHTML = ((teams[0]["wins"] - teams[0]["losses"]) - (team["wins"] - team["losses"]))/2;
					td.innerHTML = (td.innerHTML == 0) ? "-" : td.innerHTML;
				} else if ((column == "streak") && team.hasOwnProperty(column)) {
					if (team[column]) {
						td.innerHTML = ((team[column] > 0) ? "W" : "L") + Math.abs(team[column]);
					} else {
						td.innerHTML = "-";
					}
				} else if ((column == "wins_percentage") && team.hasOwnProperty(column)) {
					if (team["wins"] || team["losses"]) {
						td.innerHTML = team[column];
					} else {
						td.innerHTML = "-";
					}
				} else {
					td.innerHTML = team.hasOwnProperty(column) ? team[column] : "-";
				}
				tr.appendChild(td);
			}

			tbody.appendChild(tr);

		}

		table.appendChild(tbody);
		li.appendChild(table);
		element.appendChild(li);

	}

}



function mb_insertBetsInABoxTeams(target, sport, leagueCode) {

	var elements = target ? new Array(target) : document.querySelectorAll("div.metabet-betsinabox-teams");
	Array.from(elements).forEach(function(element) {

		mb_emptyElement(element);

		element.classList.forEach(function(className) {
			if (!sport && className.match("metabet-league-.*")) {
				sport = className.replace(/metabet-league-/, "");
				if (sport.indexOf("/") != -1) {
					leagueCode = sport.split("/")[1].toUpperCase();
					sport = sport.split("/")[0];
				}
			}
		});

		if (!sport) {
			return;
		}


		//Add CSS shell
		var div = document.createElement("div");
		div.className = "metabet-betsinabox-teams";
		element.appendChild(div);
		element = div;

		//Get teams
		mb_getJSON(mb_buildStaticAPIURL("/api/teams.json?sport=" + sport + (leagueCode ? "&leagueCode=" + leagueCode : "")), function(teamsData) {

			var teams = teamsData["results"];
			var team;

			var ul = document.createElement("ul");
			ul.className = "metabet-betsinabox-teams";
			var a, li;

			for (var i=0; i<teams.length; i++) {

				team = teams[i];
				if ((new Array("mlb", "nba", "nfl", "nhl").indexOf(sport) != -1) && !team.hasOwnProperty("name")) {
					continue;
				}

				li = document.createElement("li");
				li.style.backgroundImage = "url('//metabet.static.areyouwatchingthis.com/images/teams/500x500/" + team["teamID"] + ".png')";
				li.style.backgroundColor = "#" + team["color"];

				a = mb_createEntityRedirect("/" + team["sport"] + "/teams/" + team["teamID"], team, "team");
				a.innerHTML = mb_getTeamFullName(team);
				li.appendChild(a);

				ul.appendChild(li);

			}

			element.appendChild(ul);

		});

	});

}



function mb_insertBetsInABoxVideos(target) {

	var elements = target ? new Array(target) : document.querySelectorAll("div.metabet-betsinabox-videos");
	Array.from(elements).forEach(function(stage) {

		//Get variables
		var gameID = null;
		var teamID = null;
		var statsPerformTeamID = null;
		var sport = null;
		var leagueCode = null;

		stage.classList.forEach(function(className) {
			if (className.match("metabet-league-.*")) {
				sport = className.replace(/metabet-league-/, "");
				if (sport.indexOf("/") != -1) {
					leagueCode = sport.split("/")[1].toUpperCase();
					sport = sport.split("/")[0];
				}
			} else if (className.match("metabet-teamID-.*")) {
				teamID = className.replace(/metabet-teamID-/, "");
			} else if (className.match("metabet-statsPerformTeamID-.*")) {
				statsPerformTeamID = className.replace(/metabet-statsPerformTeamID-/, "");
			} else if (className.match("metabet-gameID-.*")) {
				gameID = className.replace(/metabet-gameID-/, "");
			}
		});


		//Add CSS shell
		var element = document.createElement("div");
		element.className = "metabet-betsinabox-related-content";
		stage.appendChild(element);

		//Subscribe to resize media queries
		element.setAttribute("metabet-observe-resizes", "");


		//Get the videos to display
		var url = "/api/assets.json";
		if (gameID) {
			url += "?gameID=" + gameID;
		} else if (teamID) {
			url += "?teamID=" + teamID;
		} else if (statsPerformTeamID) {
			url += "?statsPerformTeamID=" + statsPerformTeamID;
		} else if (leagueCode) {
			url += "?leagueCode=" + leagueCode;
		} else if (sport) {
			url += "?sport=" + sport;
		} else {
			return;
		}
		url += "&type=YOUTUBE&type=YOUTUBE_NOEMBED&type=ESPN_VIDEO";


		mb_getJSON(mb_buildStaticAPIURL(url), function(videosData) {

			var videos = videosData["results"];
			var video;

			var ul, li, a, img, em, strong;
			var backgroundImageURL;

			if (videos.length == 0) {
				return;
			}


			var h3 = document.createElement("h3");
			h3.innerHTML = "Videos";
			var span = document.createElement("span");
			var button = document.createElement("button");
			button.innerHTML = "&#9664;";
			span.appendChild(button);
			button = document.createElement("button");
			button.innerHTML = "&#9654;";
			span.appendChild(button);
			h3.appendChild(span);
			element.appendChild(h3);

			h3.querySelectorAll("button").forEach(function(button) {
				button.addEventListener("click", function(event) {
					var pane = event.target.closest(".metabet-betsinabox-related-content");
					var itemWidth = pane.querySelector("ul li").offsetWidth;
					var scrollRight = (button.previousSibling != null);
					pane.querySelector("ul").scrollBy({ left: itemWidth*2*(scrollRight ? 1 : -1), behavior: "smooth" });
				});
			});



			ul = document.createElement("ul");

			for (var i=0; i<videos.length; i++) {

				video = videos[i];

				li = document.createElement("li");

				a = document.createElement("a");
				a.href = video["url"];
				a.className = "metabet-betsinabox-thumbnail";
				img = document.createElement("img");
				img.src = "//betsinabox.metabet.io/img/play.svg";
				img.className = "metabet-betsinabox-play";
				img.alt = "Play Video";
				a.appendChild(img);
				img = document.createElement("img");
				img.src = "//metabet.static.areyouwatchingthis.com/images/assets/" + video["assetID"] + ".jpg";
				img.alt = "";
				a.appendChild(img);
				li.appendChild(a);

				a = document.createElement("a");
				a.href = video["url"];
				a.className = "metabet-betsinabox-title";
				strong = document.createElement("strong");
				strong.innerHTML = video["title"];
				a.appendChild(strong);
				li.appendChild(a);

				em = document.createElement("em");
				em.innerHTML = mb_getTimeAgo(new Date(video["date"]));
				li.appendChild(em);

				ul.appendChild(li);

			}

			element.appendChild(ul);

		});

	});

}



/*!
 * Pikaday
 *
 * Copyright © 2014 David Bushell | BSD & MIT license | https://github.com/Pikaday/Pikaday
 */
(this,function(b){"use strict";var c="function"==typeof b,d=!!window.addEventListener,e=window.document,f=window.setTimeout,g=function(a,b,c,e){d?a.addEventListener(b,c,!!e):a.attachEvent("on"+b,c)},h,i,j,k,l,m,n,o=function(b,c){var a;return[31,(a=b)%4==0&&a%100!=0||a%400==0?29:28,31,30,31,30,31,31,30,31,30,31][c]},p,q,r=function(c,b,d){var a,e;for(a in b)(e=void 0!==c[a])&&"object"==typeof b[a]&&null!==b[a]&& void 0===b[a].nodeName?m(b[a])?d&&(c[a]=new Date(b[a].getTime())):l(b[a])?d&&(c[a]=b[a].slice(0)):c[a]=r({},b[a],d):(d||!e)&&(c[a]=b[a]);return c},s=function(b,c,d){var a;e.createEvent?((a=e.createEvent("HTMLEvents")).initEvent(c,!0,!1),a=r(a,d),b.dispatchEvent(a)):e.createEventObject&&(a=r(a=e.createEventObject(),d),b.fireEvent("on"+c,a))},t,u={field:null,bound:void 0,ariaLabel:"Use the arrow keys to pick a date",position:"bottom left",reposition:!0,format:"YYYY-MM-DD",toString:null,parse:null,defaultDate:null,setDefaultDate:!1,firstDay:0,firstWeekOfYearMinDays:4,formatStrict:!1,minDate:null,maxDate:null,yearRange:10,showWeekNumber:!1,pickWholeWeek:!1,minYear:0,maxYear:9999,minMonth:void 0,maxMonth:void 0,startRange:null,endRange:null,isRTL:!1,yearSuffix:"",showMonthAfterYear:!1,showDaysInNextAndPreviousMonths:!1,enableSelectionDaysInNextAndPreviousMonths:!1,numberOfMonths:1,mainCalendar:"left",container:void 0,blurFieldOnSelect:!0,i18n:{previousMonth:"Previous Month",nextMonth:"Next Month",months:["January","February","March","April","May","June","July","August","September","October","November","December"],weekdays:["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],weekdaysShort:["Sun","Mon","Tue","Wed","Thu","Fri","Sat"]},theme:null,events:[],onSelect:null,onOpen:null,onClose:null,onDraw:null,keyboardInput:!0},v,w,x=function(a,f){a.setHours(0,0,0,0);var g=a.getDate(),h=a.getDay(),b=f,c=b-1,d;a.setDate(g+c-d(h));var e=new Date(a.getFullYear(),0,b),i=(a.getTime()-e.getTime())/864e5,j=1+Math.round((i-c+d(e.getDay()))/7);return j},y,z,A,B=function(a,b,c){var d;return'<table cellpadding="0" cellspacing="0" class="pika-table" role="grid" aria-labelledby="'+c+'">'+z(a)+("<tbody>"+b.join("")+"</tbody>")+"</table>"},a=function(k){var a=this,h=a.config(k);a._onMouseDown=function(c){if(a._v){var b=(c=c||window.event).target||c.srcElement;if(b){if(!i(b,"is-disabled")&&(!i(b,"pika-button")||i(b,"is-empty")||i(b.parentNode,"is-disabled")?i(b,"pika-prev")?a.prevMonth():i(b,"pika-next")&&a.nextMonth():(a.setDate(new Date(b.getAttribute("data-pika-year"),b.getAttribute("data-pika-month"),b.getAttribute("data-pika-day"))),h.bound&&f,100))),i(b,"pika-select"))a._c=!0;else{if(!c.preventDefault)return c.returnValue=!1,!1;c.preventDefault()}}}},a._onChange,a._onKeyChange,a._parseFieldValue=function(){if(h.parse)return h.parse(h.field.value,h.format);if(!c)return new Date(Date.parse(h.field.value));var a=b(h.field.value,h.format,h.formatStrict);return a&&a.isValid()?a.toDate():null},a._onInputChange=function(c){var b;c.firedBy!==a&&(m(b=a._parseFieldValue())&&a.setDate(b),a._v||a.show())},a._onInputFocus=function(){a.show()},a._onInputClick=function(){a.show()},a._onInputBlur,a._onClick=function(e){var b=(e=e||window.event).target||e.srcElement,c=b;if(b){!d&&i(b,"pika-select")&&(b.onchange||(b.setAttribute("onchange","return;"),g(b,"change",a._onChange)));do if(i(c,"pika-single")||c===h.trigger)return;while(c=c.parentNode)a._v&&b!==h.trigger&&c!==h.trigger&&a.hide()}},a.el=e.createElement("div"),a.el.className="pika-single"+(h.isRTL?" is-rtl":"")+(h.theme?" "+h.theme:""),g(a.el,"mousedown",a._onMouseDown,!0),g(a.el,"touchend",a._onMouseDown,!0),g(a.el,"change",a._onChange),h.keyboardInput&&g(e,"keydown",a._onKeyChange),h.field&&(h.container?h.container.appendChild(a.el):h.bound?e.body.appendChild(a.el):h.field.parentNode.insertBefore(a.el,h.field.nextSibling),g(h.field,"change",a._onInputChange),h.defaultDate||(h.defaultDate=a._parseFieldValue(),h.setDefaultDate=!0));var j=h.defaultDate;m(j)?h.setDefaultDate?a.setDate(j,!0):a.gotoDate(j):a.gotoDate(new Date),h.bound?(this.hide(),a.el.className+=" is-bound",g(h.trigger,"click",a._onInputClick),g(h.trigger,"focus",a._onInputFocus),g(h.trigger,"blur",a._onInputBlur)):this.show()};return a.prototype={config,toString:function(a){return(a=a||this._o.format,m(this._d))?this._o.toString?this._o.toString(this._d,a):c?b(this._d).format(a):this._d.toDateString():""},getMoment,setMoment,getDate,setDate,clear,gotoDate,adjustDate:function(b,e){var a,c=this.getDate()||new Date,d=864e5*parseInt(e);"add"===b?a=new Date(c.valueOf()+d):"subtract"===b&&(a=new Date(c.valueOf()-d)),this.setDate(a)},adjustCalendars,gotoToday,gotoMonth:function(a){isNaN(a)||(this.calendars[0].month=parseInt(a,10),this.adjustCalendars())},nextMonth,prevMonth,gotoYear,setMinDate:function(a){a instanceof Date?(p(a),this._o.minDate=a,this._o.minYear=a.getFullYear(),this._o.minMonth=a.getMonth()):(this._o.minDate=u.minDate,this._o.minYear=u.minYear,this._o.minMonth=u.minMonth,this._o.startRange=u.startRange),this.draw()},setMaxDate,setStartRange:function(a){this._o.startRange=a},setEndRange,draw,adjustPosition,render:function(d,b,H){var a=this._o,u=new Date,i=o(d,b),e=new Date(d,b,1).getDay(),v=[],g=[];p(u),a.firstDay>0&&(e-=a.firstDay)<0&&(e+=7);for(var x=0===b?11:b-1,I=11===b?0:b+1,z=0===b?d-1:d,J=11===b?d+1:d,K=o(z,x),j=i+e,k=j;k>7;)k-=7;j+=7-k;for(var l=!1,f=0,A=0;f<j;f++){var r,C,D,E,c=new Date(d,b,1+(f-e)),F=!!m(this._d)&&q(c,this._d),L=q(c,u),M=-1!==a.events.indexOf(c.toDateString()),G=f<e||f>=i+e,h=1+(f-e),s=b,t=d,N=a.startRange&&q(a.startRange,c),O=a.endRange&&q(a.endRange,c),P=a.startRange&&a.endRange&&a.startRange<c&&c<a.endRange,Q=a.minDate&&c<a.minDate||a.maxDate&&c>a.maxDate||a.disableWeekends&&n(c)||a.disableDayFn&&a.disableDayFn(c);G&&(f<e?(h=K+h,s=x,t=z):(h-=i,s=I,t=J));var R={day:h,month:s,year:t,hasEvent:M,isSelected:F,isToday:L,isDisabled:Q,isEmpty:G,isStartRange:N,isEndRange:O,isInRange:P,showDaysInNextAndPreviousMonths:a.showDaysInNextAndPreviousMonths,enableSelectionDaysInNextAndPreviousMonths:a.enableSelectionDaysInNextAndPreviousMonths};a.pickWholeWeek&&F&&(l=!0),g.push(w(R)),7== ++A&&(a.showWeekNumber&&g.unshift(y(f-e,b,d,a.firstWeekOfYearMinDays)),v.push((r=g,C=a.isRTL,D=a.pickWholeWeek,E=l,'<tr class="pika-row'+(D?" pick-whole-week":"")+(E?" is-selected":"")+'">'+(C?r.reverse():r).join("")+"</tr>")),g=[],A=0,l=!1)}return B(a,v,H)},isVisible,show,hide,destroy},a})

	var head = document.head || document.getElementsByTagName("head")[0];
	if (head.innerHTML.indexOf("metabet.io/css/betsinabox.css") == -1) {
		var link = document.createElement("link");
		link.rel = "stylesheet";
		link.type = "text/css";
		link.href = "https://sportingnews.hosted.metabet.io/css/betsinabox.css?v=20230307";
		head.appendChild(link);
	}







function mb_trackRender(element, query, attribute) {


	//Track this render
	var payload = {};
	payload["action"] = "render";
	if (query) {
		payload["query"] = query;
	}
	if (attribute) {
		payload["attribute"] = attribute;
	}

	mb_track(element, payload);

}


function mb_trackCustomization(element, attribute, value) {


	var payload = {};
	payload["action"] = "customize";
	payload["attribute"] = attribute;
	payload["value"] = value;
	mb_track(element, payload);

}


function mb_trackClick(element, query, label, value, provider) {
	var payload = {};
	payload["action"] = "click";
	if (query) {
		payload["query"] = query;
	}
	payload["attribute"] = label;
	if (value) {
		payload["value"] = value.toString().replace("\n", " ");
	}
	if (provider) {
		payload["provider"] = provider.replace(RUWT_PROVIDER_SUFFIX_PATTERN, "");
	}
	mb_track(element, payload);
}


function mb_trackPollingAnswer(gameID, betType, price) {

	var payload = {};
	payload["gameID"] = gameID;
	payload["betType"] = betType;
	if (price) {
		payload["price"] = price;
	}

	//Include the site ID
	if (RUWT_SUB_SITE_ID || RUWT_SITE_ID) {
		payload["siteID"] = RUWT_SUB_SITE_ID ? RUWT_SUB_SITE_ID : RUWT_SITE_ID;
	}

	//Add the state/province that the user has selected (default to NJ)
	payload["location"] = mb_getCurrentLocation();

	//Don't track gallery events
	if (window.location.host == "gallery.metabet.io") {
		//console.log(JSON.stringify(payload));
		//return;
	}

	//Send payload for internal tracking
	try {
		var request = new XMLHttpRequest();
		request.open("POST", "https://metabet.static.areyouwatchingthis.com/tracking/metabet/polling/");
		request.send(JSON.stringify(payload));
	} catch (error) {}

}


function mb_track(element, payload) {

	//Include the site ID
	if (RUWT_SUB_SITE_ID || RUWT_SITE_ID) {
		payload["siteID"] = RUWT_SUB_SITE_ID ? RUWT_SUB_SITE_ID : RUWT_SITE_ID;
	}

	//Add the state/province that the user has selected (default to NJ)
	payload["location"] = mb_getCurrentLocation();

	//Describe the subject tile/widget/product
	if (element && element.classList) {

		payload["classes"] = Array.prototype.slice.call(element.classList);

		var className;

		
		if (!payload["product"]) {
			for (var i=0; i<element.classList.length; i++) {
				className = element.classList[i].toLowerCase();
				if (
					(className == "metabet-futures-board") ||
					(className == "metabet-gametile") ||
					(className == "metabet-injuriestile") ||
					(className == "metabet-matchuptile") ||
					(className == "metabet-odds") ||
					(className == "metabet-odds-board") ||
					(className == "metabet-oddscompare") ||
					(className == "metabet-parlay-calculator") ||
					(className == "metabet-pollingtile") ||
					(className == "metabet-ruwtsports-players") ||
					(className == "metabet-ruwtsports-rankings") ||
					(className == "metabet-ruwtsports-schedule") ||
					(className == "metabet-ruwtsports-scores") ||
					(className == "metabet-ruwtsports-standings") ||
					(className == "metabet-scorestrip") ||
					(className == "metabet-side-odds-browser") ||
					(className == "metabet-side-odds-table") ||
					(className == "metabet-sideoddstile") ||
					(className == "metabet-videotile") ||
					(className == "metabet-winnings") ||
					(className == "ownersbox-lightningtile")
				) {
					payload["product"] = className.replace("metabet-", "").toUpperCase().replace(/-/g, "_");
				}
			}
		}

		//What size was the element?
		for (var i=0; i<element.classList.length; i++) {
			className = element.classList[i].toLowerCase();
			if (className.match("metabet-size-.+")) {
				payload["size"] = className.replace("metabet-size-", "");
			}
		}

	}


	//Don't track gallery events
	if (window.location.host == "gallery.metabet.io") {
		console.log(JSON.stringify(payload));
		return;
	}

	//Send payload for tracking
	try {
		var request = new XMLHttpRequest();
		request.open("POST", "https://metabet.static.areyouwatchingthis.com/tracking/metabet/");
		request.send(JSON.stringify(payload));
	} catch (error) {}

	
}


function mb_getAllLocations(country) {

	var locations = [];
	if (country && (country.toUpperCase() == "CA")) {
		locations = ["ON"];
	} else {

		locations = ["AZ", "CO", "CT", "DC", "IA", "IL", "IN", "ME", "KS", "KY", "LA", "MD", "MI", "MS", "ON", "NJ", "NY", "PA", "TN", "VA", "VT", "WV", "WY"];
		if (new Date().getTime() < 1704949200000) {
			mb_removeFromArray(locations, "VT");
		}

		
									locations.push("OH");
		
	}

	locations = locations.sort();
	return locations;

}


function mb_createLocationSelector(country, location) {

	//Get all locations for this country
	var locations = mb_getAllLocations(country);

	//Get current location
	location = mb_getCurrentLocation(country, location);

	var select = document.createElement("select");
	select.classList.add("select");
	select.classList.add("metabet-selector-state");
	select.addEventListener("change",);

	for (var i=0; i<locations.length; i++) {
		option = document.createElement("option");
		option.innerHTML = locations[i];
		option.value = ((locations[i] == "ON") ? "CA-" : "") + locations[i];
		if ((locations[i] == location) || (option.value == location)) {
			option.selected = true;
		}
		select.append(option);
	}

	return select;

}




//Enables autocomplete functionality for an element (likely a textbox)
//by adding a wrapper element and including a ol for search results.
var mb_selectedAutoCompleteItem = null;
function mb_enableAutoComplete(element, sport) {

	var mb_autoCompleteData = [];

	//Filter out results some sports for some customers
	var ignoreSports = null;

	//Load participant autocomplete
	mb_getRawText("https://metabet.static.api.areyouwatchingthis.com/api/autocomplete.flat?activeSideOdds&apiKey=219f64094f67ed781035f5f7a08840fc", function(data) {

		//Parse and store the autocomplete data
		var rows = data.trim().split("\n");
		for (var i=0; i<rows.length; i++) {
			if ((rows[i] != "") && ((sport == null) || (rows[i].split("|")[3] == sport)) && !rows[i].match(ignoreSports)) {
				mb_autoCompleteData.push(rows[i].split("|"));
			}
		}

		//Trigger a keyup event so if the user has started
		//typing before the data is loaded, we can show results
		//as soon as the data arrives.  If the textbox no longer
		//has focus though, don't show results, it might have
		//been populated with a match by default.
		if (element == document.activeElement) {
			element.dispatchEvent(new Event("keyup"));
		}

	});


	//Add a wrapper div around the element
	var wrapper = document.createElement("div");
	wrapper.className = element.className + "-wrapper";
	wrapper.style.position = "relative";
	var p = element.parentNode;
	p.replaceChild(wrapper, element);
	wrapper.appendChild(element);

	//Add the autocomplete dropdown
	var results = document.createElement("ol");
	results.className = "metabet-autocomplete-results";
	wrapper.appendChild(results);



	//Make sure the search results are visible when th
	//textbox gains focus
	element.addEventListener("focus", function() {
		this.select();
		results.style.display = "block";
	});

	//Hide the search results if the textbox loses focus
	element.addEventListener("blur",);


	//Handle non-alphabet keypresses
	element.addEventListener("keydown", function(event) {

		if (event.keyCode == 13) {

			//Enter key
			if (mb_selectedAutoCompleteItem) {
				//User has already selected an item from search
			} else if (!mb_selectedAutoCompleteItem && document.querySelector(".metabet-autocomplete-results").firstChild) {
				//Select whatever the first element is
				mb_selectedAutoCompleteItem = document.querySelector(".metabet-autocomplete-results").firstChild;
			} else {
				return;
			}

			if (element.classList.contains("metabet-search-onebox-query")) {
				window.location.href = mb_selectedAutoCompleteItem.dataset.url;
			} else if (element.classList.contains("metabet-side-odds-table-query")) {
				mb_loadSideOddsTableMarkets(mb_selectedAutoCompleteItem.dataset.query, mb_selectedAutoCompleteItem.dataset.label);
			} else {
				mb_loadSideOddBrowserMarkets(mb_selectedAutoCompleteItem.dataset.query, mb_selectedAutoCompleteItem.dataset.label);
			}

		} else if (event.keyCode == 40) {

			//Down arrow
			if (!mb_selectedAutoCompleteItem) {
				mb_selectAutoCompleteItem(document.querySelector(".metabet-autocomplete-results").firstChild);
			} else if (mb_selectedAutoCompleteItem.nextSibling) {
				mb_selectAutoCompleteItem(mb_selectedAutoCompleteItem.nextSibling);
			}

		} else if (event.keyCode == 38) {

			//Up arrow
			if (!mb_selectedAutoCompleteItem) {
				mb_selectAutoCompleteItem(document.querySelector(".metabet-autocomplete-results").lastChild);
			} else if (mb_selectedAutoCompleteItem.previousSibling) {
				mb_selectAutoCompleteItem(mb_selectedAutoCompleteItem.previousSibling);
			}

		} else if (event.keyCode == 27) {

			//Escape key
			results.style.display = "none";

		}


	});


	//Handle alphabet keystrokes as user types
	element.addEventListener("keyup", function(event) {

		//We don't care about key presses that don't modify the query
		if ((event.keyCode > 8) && (event.keyCode < 45)) {
			return;
		}

		//Clear autocomplete results
		mb_emptyElement(results);

		//Reset selected element
		mb_selectedAutoCompleteItem = null;

		var query = event.target.value.trim().toLowerCase();
		if (query.length < 2) {
			//Nothing to do if the textbox is empty
			return;
		}

		var sportGroupLink, firstNonStartsWithSportGroup;
		var pos;

		//Look for new matches
		var matches = 0;
		var startsWithMatches = 0;
		var matchesToDisplay = 8;
		var queryResult;
		var li, div, em;

		for (var i=0; (i<mb_autoCompleteData.length && startsWithMatches<matchesToDisplay); i++) {

			queryResult = mb_autoCompleteData[i][2];
			pos = queryResult.toLowerCase().indexOf(query);

			if (pos >= 0) {

				sportGroupLink = document.createElement("li");
				sportGroupLink.dataset.label = mb_autoCompleteData[i][2];
				if (mb_autoCompleteData[i][0] == "p") {
					sportGroupLink.dataset.query = "playerID=" + mb_autoCompleteData[i][1];
					sportGroupLink.dataset.url = "/" + mb_autoCompleteData[i][3] + "/players/" + mb_autoCompleteData[i][1];
				} else if (mb_autoCompleteData[i][0] == "t") {
					sportGroupLink.dataset.query = "teamID=" + mb_autoCompleteData[i][1];
					sportGroupLink.dataset.url = "/" + mb_autoCompleteData[i][3] + "/teams/" + mb_autoCompleteData[i][1];
				}

				sportGroupLink.addEventListener("mousedown", function() {
					if (element.classList.contains("metabet-search-onebox-query")) {
						window.location.href = this.dataset.url;
					} else if (element.classList.contains("metabet-side-odds-table-query")) {
						mb_loadSideOddsTableMarkets(this.dataset.query, this.dataset.label);
					} else {
						mb_loadSideOddBrowserMarkets(this.dataset.query, this.dataset.label);
					}
				});


				div = document.createElement("div");
				sportGroupLink.appendChild(div);

				div.innerHTML = "<span>" + queryResult.substring(0,pos) + "<strong>" + queryResult.substring(pos,pos+query.length) + "</strong>" + queryResult.substring(pos+query.length) + "</span>";
				//Show the sport if it's a college team
				if ((mb_autoCompleteData[i][0] == "t") && ((mb_autoCompleteData[i][3] == "ncaab") || (mb_autoCompleteData[i][3] == "ncaaf"))) {
					div.innerHTML += "<em>" + mb_autoCompleteData[i][3].toUpperCase() + "</em>";
				}

				//Team logo
				if ((mb_autoCompleteData[i][0] == "t") && !RUWT_ENABLE_GENERIC_TEAM_LOGOS) {
					sportGroupLink.style.backgroundImage = "url('" + mb_getTeamLogoURL(80, mb_autoCompleteData[i][1]) + "')";
				}


				if (pos == 0) {
					if (!firstNonStartsWithSportGroup) {
						//If every sportgroup added so far starts with the query,
						//just add this to the end of the list
						results.append(sportGroupLink);
					} else {
						//If there are sportgroups that have been added that don't
						//start with the query, add this sportgroup just before the
						//first sportgroup that doesn't start with the query
						results.insertBefore(sportGroupLink, firstNonStartsWithSportGroup);
					}
					startsWithMatches++;
				} else {
					results.append(sportGroupLink);

					if (!firstNonStartsWithSportGroup) {
						//If this is the first sportgroup link we're adding
						//that doesn't start with the search query, store
						//it, as it will act as a line of demarcation
						firstNonStartsWithSportGroup = sportGroupLink;
					}
				}

				matches++;

			}

		}

		//Remove children from end of list, if we have more than we want to show
		while (results.children.length > matchesToDisplay) {
			results.removeChild(results.lastChild);
		}

	});

}

function mb_selectAutoCompleteItem(element) {
	if (mb_selectedAutoCompleteItem) {
		mb_selectedAutoCompleteItem.className = "";
	}
	mb_selectedAutoCompleteItem = element;
	element.className = "metabet-autocomplete-results-selected-item";
}


function mb_findGame(game, data) {

	var odds = null;
	for (var i=0; i<data["results"].length; i++) {
		if (data["results"][i]["gameID"] == game["gameID"]) {
			odds = data["results"][i];
			break;
		}
	}

	return odds;

}


function mb_findEntity(entityProperty, entityID, data) {

	if (entityProperty && entityID && data) {
		for (var i=0; i<data.length; i++) {
			if (data[i][entityProperty] == entityID) {
				return data[i];
			}
		}
	}

	return null;

}



//This method finds the best odds for a given line, like "spreadLine1" or
//"moneyLine2", but only if we have a deep-link to the provider.  The entire
//block of odds from the best provider for that line will be returned.
//If showBestLines is set to false, Consensus will be returned.
function mb_getBestGameOdds(game, line, showBestLines, location, element) {

	//We can't choose a best line if there aren't any lines
	if (!game["odds"]) {
		return null;
	}

	if (showBestLines) {

		var providers = mb_getProvidersForLocation(location, element);
		var odds;
		var best;
		var now = new Date().getTime();
		for (var i=1; i<game["odds"].length; i++) {

			odds = game["odds"][i];
			if ((location != "NV") && !odds["url"]) {
				//Ignore providers we can't deep-link to.
				//This rule won't apply if we're in Nevada
				//as we can't link to any of those books.
				continue;
			} else if (providers.indexOf(game["odds"][i]["provider"]) == -1) {
				//Ignore providers not in the allowed list
				//for the current customer and location
				continue;
			} else if (mb_hasGameStarted(game) && !mb_isGameFinished(game) && (RUWT_PROVIDERS_NOT_UPDATING_IN_PLAY.indexOf(game["odds"][i]["provider"]) != -1)) {
				//Hide lines from this provider if it's an in-progress game
				continue;
			} else if ((odds["date"] + RUWT_STALE_ODDS_CUTOFF) < now) {
				//Ignore excessively stale odds
				continue;
			}

			if (line.match("spread.*Line1") && odds.hasOwnProperty(line.replace("Line1", "")) && odds.hasOwnProperty(line) && (odds[line] > 1)) {
				if (!best || (odds[line.replace("Line1", "")] < best[line.replace("Line1", "")]) || ((odds[line.replace("Line1", "")] == best[line.replace("Line1", "")]) && (odds[line] > best[line]))) {
					best = odds;
				}
			} else if (line.match("spread.*Line2") && odds.hasOwnProperty(line.replace("Line2", "")) && odds.hasOwnProperty(line) && (odds[line] > 1)) {
				if (!best || (odds[line.replace("Line2", "")] > best[line.replace("Line2", "")]) || ((odds[line.replace("Line2", "")] == best[line.replace("Line2", "")]) && (odds[line] > best[line]))) {
					best = odds;
				}
			} else if (line.match("moneyLine.+") && odds.hasOwnProperty(line) && (odds[line] > 1)) {
				if (!best || (odds[line] > best[line])) {
					best = odds;
				}
			} else if (line.match("overUnder.*LineOver") && odds.hasOwnProperty("overUnder") && odds.hasOwnProperty(line) && (odds[line] > 1)) {
				if (!best || (odds[line.replace("LineOver", "")] < best[line.replace("LineOver", "")]) || ((odds[line.replace("LineOver", "")] == best[line.replace("LineOver", "")]) || (odds[line] > best[line]))) {
					best = odds;
				}
			} else if (line.match("overUnder.*LineUnder") && odds.hasOwnProperty("overUnder") && odds.hasOwnProperty(line) && (odds[line] > 1)) {
				if (!best || (odds[line.replace("LineUnder", "")] > best[line.replace("LineUnder", "")]) || ((odds[line.replace("LineUnder", "")] == best[line.replace("LineUnder", "")]) && (odds[line] > best[line]))) {
					best = odds;
				}
			}


		}

		return best;

	}

	return game["odds"][0];

}



//Helper function to combine a market and period into the correct slug
function mb_combineMarketPeriod(market, period) {

	if (period) {
		if (market.indexOf("spreadLine") == 0) {
			return "spread" + period + market.replace("spread", "");
		} else if (market.indexOf("moneyLine") == 0) {
			return "moneyLine" + period + market.replace("moneyLine", "");
		} else if (market.indexOf("overUnder") == 0) {
			return "overUnder" + period + market.replace("overUnder", "");
		}
	}
	return market;

}



//If a location is passed in, it will be returned.  If not, but a user
//location preference has been actively set, that will be returned.  If
//neither are set, but we have geotargted a location for this user and
//they're in a location we support, that will be returned.  If none of
//those things happen, the default location for the country will be returned.
//Passing in a location is important to prevent products that can change
//a user's location, like an Odds Board, from not being able to switch
//locations.  Any time a location is passed in, it will be stored as the
//current location to allow mb_track to access it.
function mb_getCurrentLocation(country, location) {

	if (location) {
		mb_setLocation(location.toUpperCase());
		return location.toUpperCase();
	} else if ((localStorage.getItem("metabet-location-geo") !== null) && (localStorage.getItem("metabet-location") === null)) {
		var allLocations = mb_getAllLocations(country);
		if (allLocations.indexOf(mb_getGeolocationLocation()) != -1) {
			return mb_getGeolocationLocation();
		}
	} else if (localStorage.getItem("metabet-location") !== null) {
		return localStorage.getItem("metabet-location").toUpperCase();
	}

	//Return the default location for the country
	if (country) {
		if (country.toUpperCase() == "CA") {
			return "ON";
		}
	}
	return "NJ";

}

function mb_getGeolocationCountry() {

	if (localStorage.getItem("metabet-location-geo") !== null) {
		return localStorage.getItem("metabet-location-geo").split("-")[0];
	}
	return null;

}

function mb_getGeolocationLocation() {

	if (localStorage.getItem("metabet-location-geo") !== null) {
		return localStorage.getItem("metabet-location-geo").split("-")[1];
	}
	return null;

}




//Returns a list of providers for the specified or currently set location.
function mb_getProvidersForLocation(location, element) {

	//If a location isn't explicitly specified, get the user preference
	if (!location) {
		location = mb_getCurrentLocation();
	}

	//Strip any country codes
	location = location.replace(/[A-Z]{2}-/, "");

	//Set the list of providers based on the location
	var providers = [];
	location = location.toUpperCase();
	if (RUWT_SITE_CANADIAN || (location == "ON")) {
		providers = ["MGM", "WILLIAM_HILL", "POINTSBET", "DRAFTKINGS", "BET_RIVERS_CA_ON"];
				if (RUWT_SITE_FAMILY_CATENA || mb_isSiteOrSubSite("metabet-website", "sportingnews")) {
			providers.push("SPORTS_INTERACTION");
		}
		if (RUWT_SITE_FAMILY_CATENA) {
			providers.push("UNIBET");
		}
		if ((RUWT_SITE_ID == "sportingnews") && element && (element.classList.contains("metabet-scorestrip") || element.classList.contains("metabet-betsinabox-games") || element.classList.contains("metabet-betsinabox-scores"))) {
			providers = ["SPORTS_INTERACTION"];
		}
	} else if (RUWT_SITE_ID == "sportsillustrated") {
		providers = ["SPORT_888"];
	} else if (RUWT_SITE_ID == "torontosportsmedia") {
		providers = ["POINTSBET", "MGM", "WILLIAM_HILL", "DRAFTKINGS", "FANDUEL", "BET_RIVERS_PA"];
	} else if (location == "AZ") {
					providers = ["MGM", "WILLIAM_HILL", "DRAFTKINGS", "FANDUEL", "BET_RIVERS_AZ"];
					} else if (location == "CO") {
		providers = ["POINTSBET", "MGM", "WILLIAM_HILL", "DRAFTKINGS", "FANDUEL", "BET_RIVERS_CO"];
					} else if (location == "CT") {
		providers = ["DRAFTKINGS", "FANDUEL"];
	} else if (location == "DC") {
		providers = ["MGM", "WILLIAM_HILL"];
			} else if (location == "IA") {
		providers = ["POINTSBET", "MGM", "WILLIAM_HILL", "DRAFTKINGS", "FANDUEL", "BET_RIVERS_IA"];
			} else if (location == "IL") {
		providers = ["POINTSBET", "MGM", "WILLIAM_HILL", "DRAFTKINGS", "FANDUEL", "BET_RIVERS_IL"];
		if (RUWT_SITE_ID == "actionrush") {
			providers.splice(1, 0, "WILLIAM_HILL");
		}
	} else if (location == "IN") {
		providers = ["POINTSBET", "MGM", "WILLIAM_HILL", "DRAFTKINGS", "FANDUEL", "BET_RIVERS_IN", "BET_AMERICA"];
	} else if (location == "KS") {
		providers = ["DRAFTKINGS", "FANDUEL", "POINTSBET", "MGM", "WILLIAM_HILL"];
	} else if (location == "KY") {
		providers = ["BET_365", "DRAFTKINGS", "FANDUEL", "MGM", "WILLIAM_HILL"];
	} else if (location == "LA") {
		providers = ["MGM", "WILLIAM_HILL", "DRAFTKINGS", "FANDUEL", "BET_RIVERS_LA"];
					} else if (location == "MA") {
		providers = ["DRAFTKINGS", "FANDUEL", "MGM", "WILLIAM_HILL"];
	} else if (location == "MD") {
		providers = ["DRAFTKINGS", "FANDUEL", "POINTSBET", "MGM"];
					providers.push("BET_RIVERS_MD", "WILLIAM_HILL");
			} else if (location == "ME") {
		providers = ["DRAFTKINGS", "WILLIAM_HILL"];
	} else if (location == "MI") {
		providers = ["DRAFTKINGS", "FANDUEL", "MGM", "POINTSBET", "WILLIAM_HILL", "BET_RIVERS_MI", "SPORT_888"];
			} else if (location == "MS") {
		providers = ["MGM"];
	} else if (location == "NJ") {
		providers = ["POINTSBET", "MGM", "WILLIAM_HILL", "DRAFTKINGS", "FANDUEL", "SUGAR_HOUSE_NJ", "BET_AMERICA"];
			} else if ((location == "NV") && RUWT_SITE_FAMILY_CATENA) {
		providers = ["MGM"];
	} else if (location == "NV") {
		providers = ["CAESARS_NV", "CANTOR_NV", "CIRCA_NV", "COAST_NV", "GOLDEN_NUGGET_NV", "MIRAGE_NV", "SOUTH_POINT_NV", "WESTGATE_NV", "WILLIAM_HILL_NV"];
	} else if (location == "NY") {
		providers = ["POINTSBET", "MGM", "WILLIAM_HILL", "DRAFTKINGS", "FANDUEL", "BET_RIVERS_NY"];
			} else if (location == "OH") {
		providers = ["DRAFTKINGS", "FANDUEL", "MGM"];
							providers.push("BET_RIVERS_OH");
			} else if (location == "PA") {
		providers = ["MGM", "POINTSBET", "WILLIAM_HILL", "DRAFTKINGS", "FANDUEL", "BET_RIVERS_PA", "BET_AMERICA"];
	} else if (location == "TN") {
		providers = ["MGM", "DRAFTKINGS", "FANDUEL", "WILLIAM_HILL"];
			} else if (location == "VA") {
		providers = ["POINTSBET", "MGM", "WILLIAM_HILL", "DRAFTKINGS", "FANDUEL", "BET_RIVERS_VA"];
					} else if (location == "VT") {
		providers = ["DRAFTKINGS", "FANDUEL"];
	} else if (location == "WV") {
		providers = ["POINTSBET", "MGM", "WILLIAM_HILL", "DRAFTKINGS", "FANDUEL"];
			} else if (location == "WY") {
		providers = ["MGM", "DRAFTKINGS", "FANDUEL"];
	} else {
		providers = ["POINTSBET", "MGM", "WILLIAM_HILL", "DRAFTKINGS", "FANDUEL", "BET_RIVERS_PA", "SUGAR_HOUSE_NJ", "BET_AMERICA"];
	}

			
		


	//If specific providers are requested on the element, we'll
	//use that as our list, overriding customer defaults
	if (element) {
		var className;
		for (var j=0; j<element.classList.length; j++) {

			className = element.classList[j];
			if (className.match("metabet-providers-.+")) {

				var requestedProviders = [];
				className.replace("metabet-providers-", "").split("-").forEach(function(p) {
					for (var i=0; i<providers.length; i++) {
						if (providers[i].indexOf(p.toUpperCase()) == 0) {
							requestedProviders.push(providers[i]);
						}
					}
				});

				//Add Consensus to the list of providers and return it
				requestedProviders.unshift("CONSENSUS");
				return requestedProviders;

			}

		}
	}




	//If a subset of allowed providers is set, filter
	//out providers in this location that don't match.
	var allowedProviders = ["SPORTS_INTERACTION", "MGM", "WILLIAM_HILL", "FANDUEL", "BET_RIVERS", "BET_365"];
	if (allowedProviders) {
		var intersection = [];
		for (var i=0; i<allowedProviders.length; i++) {
			for (var j=0; j<providers.length; j++) {
				if ((providers[j] == allowedProviders[i]) || ((providers[j].indexOf(allowedProviders[i]) == 0) && RUWT_PROVIDER_SUFFIX_PATTERN.test(providers[j]))) {
					intersection.push(providers[j]);
				}
			}
		}
		providers = intersection;
	}

	//Remove any excluded providers
	var excludedProviders = ["BET_AMERICA", "FOXBET", "UNIBET", "TWINSPIRES", "POINTSBET"];

			if ((location == "IA") || (location == "KY") || (location == "OH")) {
			if (!excludedProviders) {
				excludedProviders = [];
			}
			excludedProviders.push("BET_365");
		}
	
	if (excludedProviders) {
		var intersection = providers.slice();
		for (var i=0; i<excludedProviders.length; i++) {
			for (var j=0; j<providers.length; j++) {
				if ((providers[j] == excludedProviders[i]) || ((providers[j].indexOf(excludedProviders[i]) == 0) && RUWT_PROVIDER_SUFFIX_PATTERN.test(providers[j]))) {
					intersection.splice(intersection.indexOf(providers[j]), 1);
				}
			}
		}
		providers = intersection;
	}

	//If some providers are prioritized, move them to the front of the list
	var prioritizedProviders = ["SPORTS_INTERACTION"];
	if (prioritizedProviders) {
		var intersection = providers.slice();
		for (var i=prioritizedProviders.length-1; i>=0; i--) {
			for (var j=0; j<providers.length; j++) {
				if ((providers[j] == prioritizedProviders[i]) || ((providers[j].indexOf(prioritizedProviders[i]) == 0) && RUWT_PROVIDER_SUFFIX_PATTERN.test(providers[j]))) {
					intersection.splice(intersection.indexOf(providers[j]), 1);
					intersection.unshift(providers[j]);
				}
			}
		}
		providers = intersection;
	}


	

	//Prepend the Consensus line
	providers.unshift("CONSENSUS");

	return providers;

}

function mb_getRandomProviderForLocation(location, element) {

	var providers = mb_getProvidersForLocation(location, element);
	if (providers.indexOf("CONSENSUS") != -1) {
		providers.splice(providers.indexOf("CONSENSUS"), 1);
	}
	if (providers.length > 0) {
		return providers[Math.floor(Math.random()*providers.length)];
	}
	return null;

}





function mb_getProviderName(provider) {

	if (provider.indexOf("SPORT_888") == 0) {
		return "SISportsbook";
	} else if (provider.indexOf("BET_365") == 0) {
		return "Bet365";
	} else if (provider.indexOf("BET_RIVERS") == 0) {
		return "BetRivers";
	} else if (provider.indexOf("DESERT_DIAMOND") == 0) {
		return "Desert Diamond";
	} else if (provider.indexOf("DRAFTKINGS") == 0) {
		return "DraftKings";
	} else if (provider.indexOf("FANDUEL") == 0) {
		return "FanDuel";
	} else if (provider.indexOf("FOXBET") == 0) {
		return "FOX Bet";
	} else if (provider.indexOf("MGM") == 0) {
		return "BetMGM";
	} else if (provider.indexOf("POINTSBET") == 0) {
		return "PointsBet";
	} else if (provider.indexOf("SPORTS_INTERACTION") == 0) {
		return "Sports Interaction";
	} else if (provider.indexOf("SUGAR_HOUSE") == 0) {
		return "SugarHouse";
	} else if (provider.indexOf("TIPICO") == 0) {
		return "Tipico";
	} else if (provider.indexOf("TWINSPIRES") == 0) {
		return "TwinSpires";
	} else if (provider.indexOf("UNIBET") == 0) {
		return "Unibet";
	} else if (provider.indexOf("WILLIAM_HILL") == 0) {
		return "Caesars";
	} else if (provider.indexOf("WYNN") == 0) {
		return "Wynn";
	} else {
		return provider;
	}

}


function mb_getProviderPromo(provider) {

	var prefix = null;
	var suffix = null;
	return (prefix ? prefix : "") + mb_getProviderPromoBase(provider) + (suffix ? suffix : "");

}

function mb_getProviderPromoBase(provider) {

	var location = mb_getCurrentLocation();

	//Strip any country codes
	location = location.replace(/[A-Z]{2}-/, "");

	if ((location == "ON") || RUWT_SITE_CANADIAN) {

		
		return "Sign Up at " + mb_getProviderName(provider).replace("_", " ") + " Today";

	} else if (provider.indexOf("BET_365") == 0) {
		if (location == "KY") {
			return "Bet $1, Get $365 in Bonus Bets";
		} else {
			return "Up to $2,000 in Bonus Bets";
		}
	} else if ((provider.indexOf("BET_RIVERS") == 0) || (provider.indexOf("SUGAR_HOUSE") == 0)) {

		
		if (location == "NY") {
			return "2nd Chance Bet up to $100";
		} else {
			return "2nd Chance Bet up to $500";
		}

	} else if (provider.indexOf("CAESARS") == 0) {
		return "$10 Cash + $300 Deposit Match";
	} else if (provider.indexOf("DESERT_DIAMOND") == 0) {
		return "$250 Deposit Match";
	} else if (provider.indexOf("DRAFTKINGS") == 0) {
					if (location == "VT") {
				return "Bet $5, Get $200 in Bonus Bets";
			}
			return "Bet $5, Get $200 + No-Sweat SGP";
			} else if (provider.indexOf("FANDUEL") == 0) {
				return "Bet $5, Get $200 in Bonus Bets";
	} else if (provider.indexOf("MGM") == 0) {
				if (location == "NY") {
			return "Sign Up at BetMGM Today";
		} else if (location == "NV") {
			return "$10 Join Bonus";
		} else if (location == "PR") {
			return "Up to $1,000 in Bonus Bets";
		} else {
			return "Bet $5, Get $158 in Bonus Bets";
		}
	} else if (provider.indexOf("POINTSBET") == 0) {
				if (new Date().getTime() < 1698343200000) {
			return "10 Second Chance Bets up to $100";
		}
		return "Sign up with PointsBet today!";
	} else if (provider.indexOf("SPORT_888") == 0) {
		if ((location == "CO") || (location == "MI") || (location == "VA")) {
			return "Bet $20, Win $200";
		} else {
			return "Bet $10, Get $80";
		}
	} else if (provider.indexOf("TIPICO") == 0) {
		if (location == "IA") {
			return "100% Deposit Match up to $100";
		} else if (location == "OH") {
			return "Deposit $50, Get $150";
		} else if ((location == "NJ") || (location == "CO")) {
			return "100% Deposit Match up to $250";
		}
	} else if (provider.indexOf("UNIBET") == 0) {
				if (location == "PA") {
			if (new Date().getTime() < 1701406800000) {
				return "$500 Second-Chance Bet";
			}
			return "$250 Second-Chance Bet";
		} else {
			return "$100 Second-Chance Bet";
		}
	} else if (provider.indexOf("WILLIAM_HILL") == 0) {
		return "Up to $1,000 on Caesars";
	} else if (provider.indexOf("WYNN") == 0) {
		return "Sign up Now!";
	}

	return "Sign up Now!";

}


function mb_getProviderLogo(provider, location, isLandscape) {

	var url = "https://go.metabet.io/03325fb169d4ca908f52c07a4505bb8f/img/sportsbooks/";
	url += !isLandscape ? "square" : "landscape";
	url += "/";
	if ((provider == "BET_AMERICA") && location && (location != "NJ")) {
		url += "twinspires";
	} else if (provider == "SUGAR_HOUSE_NJ") {
		url += "bet_rivers";
	} else if ((provider.replace(RUWT_PROVIDER_SUFFIX_PATTERN, "") == "WILLIAM_HILL") && (!location || (location != "NV"))) {
		url += "caesars";
	} else if ((RUWT_SITE_ID == "sportsillustrated") && (provider == "SPORT_888")) {
		url += "sportsillustrated";
	} else {
		url += provider.replace(RUWT_PROVIDER_SUFFIX_PATTERN, "").toLowerCase();
	}
	url += ".svg";

	return url;

}


function mb_supportsBetSlipIntegration(provider) {

	var providers = ["SPORT_888", "BET_RIVERS", "MGM", "SUGAR_HOUSE", "TWINSPIRES", "UNIBET"];
	for (var i=0; i<providers.length; i++) {
		if (provider.startsWith(providers[i])) {
			return true;
		}
	}

	return false;

}



function mb_getTeamLogo(size, teamID, color, initials, entity) {

	if (RUWT_ENABLE_GENERIC_TEAM_LOGOS && !mb_isInternationalLeague(entity)) {
		var span = document.createElement("span");
		span.classList.add("metabet-team-logo");
		span.classList.add("metabet-team-logo-generic");
		if (initials) {
			span.style.backgroundColor = (color ? "#" + color : "#999999");
			span.innerHTML = initials;
		} else {
			span.innerHTML = "&nbsp;";
		}
		return span;
	} else {
		var img = document.createElement("img");
		img.classList.add("metabet-team-logo");
		img.width = "25";
		img.height = "25";
		img.alt = "";
		img.addEventListener("error",);
		img.src = mb_getTeamLogoURL(size, teamID);
		return img;
	}

}


//Generates a URL for a team logo, adding in a changeable,
//date-based hashed to enable long Expires headers.


//Create an anchor link for the specified odds and location.
function mb_createBetRedirect(odds, line, location, element, query, label) {

	var a = document.createElement("a");

	//We don't have anything to do if there's no URL to link to
	if (!odds || !odds.hasOwnProperty("url")) {
		return a;
	}

	if (!location) {
		location = mb_getCurrentLocation();
	}
	var providers = mb_getProvidersForLocation(location, element);
	var url = odds["url"].toLowerCase();

	//Search through the URL for a provider without an attached location
	var tokens = url.split("/");
	for (var i=0; i<tokens.length; i++) {
		if (providers.indexOf(tokens[i].toUpperCase()) != -1) {
			if (!/.+_[a-z]{2}$/.test(tokens[i])) {
				url = url.replace(tokens[i], tokens[i] + "_" + location.replace("-","_").toLowerCase());
				break;
			}
		}
	}

	//If a line is specified for a betslip provider, append it
	if (element && !element.classList.contains("metabet-side-odds-table") && !element.classList.contains("metabet-futures-board") && !element.classList.contains("metabet-side-odds-browser")) {
		if (!RUWT_SITE_FAMILY_CATENA && line && mb_supportsBetSlipIntegration(odds["provider"])) {
			url += ((url.indexOf("?") == -1) ? "?" : "&") + line;
		}
	}

	//Return the location-tagged URL, with the customer's domain
	url = url.replace("https://go.metabet.io/bet/", RUWT_REDIRECT_URL);

	if (RUWT_ENABLE_OUTBOUND_LINKS) {

		
		
		
		a.href = url;
		a.rel = "noopener nofollow sponsored";
		a.target = "_blank";

		//Track the click action
		a.addEventListener("click", function() {
			mb_trackClick(element, query, label, this.innerText, odds["provider"]);
		});

	}

	return a;

}


function mb_createEntityRedirect(url, data, slug) {

	var a = document.createElement("a");
	if (!slug || data) {
		a.href = url;
	}

	
		if (data && slug) {

			var entity = {};
			entity["sport"] = data["sport"];
			if ((slug == "game") && data.hasOwnProperty("gameIDStatsPerform")) {
				entity["entity"] = "game";
				entity["id"] = data["gameIDStatsPerform"];
			} else if (((slug == "team") || (slug == "team1") || (slug == "team2")) && data.hasOwnProperty(slug + "IDStatsPerform")) {
				entity["entity"] = "team";
				entity["id"] = data[slug + "IDStatsPerform"];
			} else {
				entity = null;
			}

			if (entity) {
				a.addEventListener("click", function(e) {
					if (typeof sn_entityRedirect == "function") {
						sn_entityRedirect(entity);
					} else {
						console.log("sn_entityRedirect(" + JSON.stringify(entity) + ")");
					}
					e.preventDefault();
				});
			}

		}

	
	return a;

}



//Create an anchor link for the specified provider and location.
//Consensus and books in Nevada will return links without hrefs.
function mb_createProviderRedirect(element, query, provider, location) {

	var a = document.createElement("a");

	//Exit if we don't have a URL to set on this link
	if (!provider || (provider == "CONSENSUS") || (provider.match(".+_NV") && !RUWT_SITE_FAMILY_CATENA)) {
		return a;
	}

	//Return the location-tagged URL for the provider, with the customer's domain
	url = RUWT_REDIRECT_URL + provider.toLowerCase() + (!RUWT_PROVIDER_SUFFIX_PATTERN.test(provider) ? "_" + location.replace("-","_").toLowerCase() : "");


	if (RUWT_ENABLE_OUTBOUND_LINKS) {

		a.href = url;
		a.rel = "noopener nofollow sponsored";
		a.target = "_blank";

		//Track the click action
		a.addEventListener("click",);

	}
	return a;

}


function mb_createMetaBetWebsiteReferralURL(product, query) {
	return "https://www.metabet.io?" + (RUWT_SITE_ID ? "utm_source=" + RUWT_SITE_ID : "") + (product ? "&utm_medium=" + product : "") + (query ? "&utm_campaign=" + query : "");
}





function mb_isSiteOrSubSite() {
	for (var i=0; i<arguments.length; i++) {
		if (arguments[i] == RUWT_SITE_ID) {
			return true;
		} else if (arguments[i] == RUWT_SUB_SITE_ID) {
			return true;
		}
	}
	return false;
}



//Returns the passed-in numerical value with an appeded plus sign
//if positive, to properly display positive spreads and money lines.
//If the value isn't numerical, the empty string will be returned.
function mb_formatWithSign(value) {
	if ((value != null) && !isNaN(value)) {
		return ((value > 0) ? "+" : "") + value;
	}
	return "";
}


//Returns the passed in numerical spread values and appended plus sign
//if positive, and rounds the number to the closest 0.5 value.
//If the spread is even, "PK" will be returned.
//If the value isn't numerical, the empty string will be returned.
function mb_formatSpread(value) {
	if ((value != null) && !isNaN(value)) {
		value = (value * 2).toFixed() / 2;
		if (value == 0) {
			return "PK";
		} else {
			return mb_formatWithSign(value);
		}
	}
	return "";
}


function mb_moneyLineWinnings(bet, line) {

	if (line && bet) {

		if (line < 0) {
			//Favorite
			return bet + ((bet*100) / (parseInt(line) * -1));
		} else if (line > 0) {
			//Underdog
			return bet + ((bet/100) * parseInt(line));
		}

	}

	return null;

}


//Returns a price, formatted by the specified style.  If the
//style isn't recognized, it will be styled 'classically'.
function mb_stylePrice(style, price) {

	if (style == "modern") {
		return "$" + (RUWT_BASE_BET * price).toFixed(0);
	} else if (style == "modern-cents") {
		return "$" + (RUWT_BASE_BET * price).toFixed(2);
	} else if (style == "decimal") {
		return price.toFixed(2);
	} else if (style.indexOf("fraction") == 0) {
		if (style == "fraction-hyphen") {
			return mb_formatFractionFromPrice(price).replace("/", "-");
		} else {
			return mb_formatFractionFromPrice(price);
		}
	} else {
		return mb_formatWithSign(mb_moneyLineFromPrice(price));
	}

}


//https://github.com/SheetJS/frac
var frac = function frac(x, D, mixed) {
  var n1 = Math.floor(x), d1 = 1;
  var n2 = n1+1, d2 = 1;
  if(x !== n1) while(d1 <= D && d2 <= D) {
    var m = (n1 + n2) / (d1 + d2);
    if(x === m) {
      if(d1 + d2 <= D) { d1+=d2; n1+=n2; d2=D+1; }
      else if(d1 > d2) d2=D+1;
      else d1=D+1;
      break;
    }
    else if(x < m) { n2 = n1+n2; d2 = d1+d2; }
    else { n1 = n1+n2; d1 = d1+d2; }
  }
  if(d1 > D) { d1 = d2; n1 = n2; }
  if(!mixed) return [0, n1, d1];
  var q = Math.floor(n1/d1);
  return [q, n1 - q*d1, d1];
};
frac.cont = function cont(x, D, mixed) {
  var sgn = x < 0 ? -1 : 1;
  var B = x * sgn;
  var P_2 = 0, P_1 = 1, P = 0;
  var Q_2 = 1, Q_1 = 0, Q = 0;
  var A = Math.floor(B);
  while(Q_1 < D) {
    A = Math.floor(B);
    P = A * P_1 + P_2;
    Q = A * Q_1 + Q_2;
    if((B - A) < 0.00000005) break;
    B = 1 / (B - A);
    P_2 = P_1; P_1 = P;
    Q_2 = Q_1; Q_1 = Q;
  }
  if(Q > D) { if(Q_1 > D) { Q = Q_2; P = P_2; } else { Q = Q_1; P = P_1; } }
  if(!mixed) return [0, sgn * P, Q];
  var q = Math.floor(sgn * P/Q);
  return [q, sgn*P - q*Q, Q];
};
if(typeof module !== 'undefined' && typeof DO_NOT_EXPORT_FRAC === 'undefined') module.exports = frac;

function mb_formatFractionFromPrice(price) {
	var pieces = frac(price, 50);
	return pieces[1] + "/" + pieces[2];
}


function mb_formatMoneyLineWinningsFromPrice(bet, price) {

	if (bet && price) {
		return "$" + (bet * price).toFixed(0);
	}

	return null;

}


function mb_moneyLineFromPrice(price) {

	if (!price || (price <= 1)) {
		return null;
	} else if (price < 2) {
		return Math.round(-1 * (1 / (price - 1)) * 100);
	} else {
		return Math.round((price - 1) * 100);
	}

}



//Makes a request for JSON data, and returns it to the specified callback function
function mb_getJSON(url, callback) {
	var request = new XMLHttpRequest();
	request.open("GET", url);
	request.onload = function() {
		if (request.status >= 200 && request.status < 400) {
			callback(JSON.parse(request.responseText));
		}
	};
	request.send();
}

//Makes a request for raw text data, and returns it to the specified callback function
function mb_getRawText(url, callback) {
	var request = new XMLHttpRequest();
	request.open("GET", url);
	request.onload = function() {
		if (request.status >= 200 && request.status < 400) {
			callback(request.responseText);
		}
	};
	request.send();
}


function mb_buildStaticAPIURL(path) {
	url = "https://sportingnews.static.api.areyouwatchingthis.com" + path;
	url += ((url.indexOf("?") == -1) ? "?" : "&") + "apiKey=47b8dca6735cbacf6fdaee07e6f48564"
	return url;
}

//Deletes any content inside an element
function mb_emptyElement(e) {
	if (e) {
		while (e.firstChild) {
			e.removeChild(e.firstChild);
		}
	}
	return e;
}

//Removes an element from an array, if it is present
function mb_removeFromArray(array, obj) {

	if (array) {
		var pos = array.indexOf(obj);
		if (pos >= 0) {
			array.splice(pos, 1);
		}
	}
	return array;

}



var DAILY_GAME_SORT = function(g1,g2) {
	if (!mb_hasGameStarted(g1) && !mb_hasGameStarted(g2)) {
		if (g1["date"] < g2["date"]) {
			return -1;
		} else if (g1["date"] > g2["date"]) {
			return 1;
		} else if (g1["points"] > g2["points"]) {
			return -1;
		} else if (g1["points"] < g2["points"]) {
			return 1;
		} else if (g1["gameID"] < g2["gameID"]) {
			return -1;
		} else if (g1["gameID"] > g2["gameID"]) {
			return 1;
		}
	} else if (!mb_hasGameStarted(g1)) {
		if (mb_isGameFinished(g2)) {
			return -1;
		} else {
			return 1;
		}
	} else if (!mb_hasGameStarted(g2)) {
		if (mb_isGameFinished(g1)) {
			return 1;
		} else {
			return -1;
		}
	} else if (mb_isGameFinished(g1) && mb_isGameFinished(g2)) {
		if (g1["points"] > g2["points"]) {
			return -1;
		} else if (g1["points"] < g2["points"]) {
			return 1;
		} else if (g1["gameID"] < g2["gameID"]) {
			return -1;
		} else if (g1["gameID"] > g2["gameID"]) {
			return 1;
		}
	} else if (mb_isGameFinished(g1)) {
		return 1;
	} else if (mb_isGameFinished(g2)) {
		return -1;
	} else if (g1["points"] > g2["points"]) {
		return -1;
	} else if (g1["points"] < g2["points"]) {
		return 1;
	} else if (g1["gameID"] < g2["gameID"]) {
		return -1;
	} else if (g1["gameID"] > g2["gameID"]) {
		return 1;
	}
};



function mb_filterGamesForSite(games) {

	
		var filteredGames = [];
		for (var i=0; i<games.length; i++) {
			if (games[i].hasOwnProperty("gameIDStatsPerform")) {
				filteredGames.push(games[i]);
			}
		}
		games = filteredGames;

	
	return games;

}



function mb_getTeamDisplayName(team) {
	if (team["name"]) {
		return team["name"];
	} else {
		return team["city"];
	}
}
function mb_getTeamFullName(team) {
	if (team["name"]) {
		return team["city"] + " " + team["name"];
	} else if (team["nickname"]) {
		return team["city"] + " " + team["nickname"];
	} else {
		return team["city"];
	}
}


function mb_getAwayTeamDisplayName(game) {
	if (game["team1Name"]) {
		return game["team1Name"];
	} else {
		return game["team1City"];
	}
}

function mb_getHomeTeamDisplayName(game) {
	if (game["team2Name"]) {
		return game["team2Name"];
	} else {
		return game["team2City"];
	}
}

function mb_getAwayTeamShortName(game) {
	if (mb_hasIndividualCompetitors(game)) {
		return game["team1City"].replace(/^.+ /, "");
	} else {
		return game["team1Initials"];
	}
}
function mb_getHomeTeamShortName(game) {
	if (mb_hasIndividualCompetitors(game)) {
		return game["team2City"].replace(/^.+ /, "");
	} else {
		return game["team2Initials"];
	}
}

function mb_getAwayTeamFullName(game) {
	if (game["team1Name"]) {
		return game["team1City"] + " " + game["team1Name"];
	} else if (game["team1Nickname"]) {
		return game["team1City"] + " " + game["team1Nickname"];
	} else {
		return game["team1City"];
	}
}
function mb_getHomeTeamFullName(game) {
	if (game["team2Name"]) {
		return game["team2City"] + " " + game["team2Name"];
	} else if (game["team2Nickname"]) {
		return game["team2City"] + " " + game["team2Nickname"];
	} else {
		return game["team2City"];
	}
}


function mb_getPlayerName(player, abbreviateFirstName) {
	return ((player["firstName"] ? ((abbreviateFirstName && player.hasOwnProperty("lastName")) ? player["firstName"].substring(0,1) + "." : player["firstName"]) : "") + " " + (player["lastName"] ? player["lastName"] : "")).trim()
}


function mb_getUpcomingDateTime(game, isCompactDisplay) {

	var date = new Date(game["date"]);
	if (!date) {
		return "-";
	}

	var boundary;

	//Just show time
	boundary = Date.now() + 1000*60*60*18;
	if (date.getTime() < boundary) {
		return mb_getShortTime(game);
	}

	//Show day of week and time
	boundary = new Date();
	boundary.setHours(0,0,0,0);
	boundary = new Date(boundary.getTime() + 1000*60*60*24*4);
	if (date.getTime() < boundary) {
		return ["Sun","Mon","Tue","Wed","Thu","Fri","Sat"][date.getDay()] + (!isCompactDisplay ? ", " + mb_getShortTime(game) : "");
	}

	//Show date and time
	return (date.getMonth() + 1) + "/" + date.getDate() + (!isCompactDisplay ? ", " + mb_getShortTime(game) : "");

}

function mb_getShortDate(date) {
	if (date == null) {
		return "TBD";
	}
	var months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
	return months[date.getMonth()] + " " + date.getDate();
}


function mb_getShortTime(game) {

	
	var text = "";

	if (!game["time"]) {
		text = "TBD";
	} else {
		var date = new Date(game["time"]);
		text = ((date.getHours()%12 == 0) ? "12" : date.getHours()%12) + ":" + ((date.getMinutes() < 10) ? "0" : "") + date.getMinutes() + ((date.getHours() > 11) ? "p" : "a");
	}

	return text;

}

function mb_getTimeLeftCompact(game) {

	if (!game["timeLeft"]) {
		return null;
	}

	if (game["sport"] == "racing") {
		if (game["timeLeft"].indexOf(",") != -1) {
			return game["timeLeft"].substring(0, game["timeLeft"].indexOf(",")).replace("Lap ", "");
		}
		return game["timeLeft"];
	} else {
		return game["timeLeft"].replace(" Quarter", "").replace(" Period", "").replace(" Half", "").replace("Halftime", "Half").replace("End of Regulation", "End Reg.").replace("Extra Time", "Extra").replace(" of", "").replace(/, [0-3] Out[s]?/, "").replace("Penalty Kicks", "PK");
	}

}


function mb_getTimeAgo(date) {

	var elapsed = new Date().getTime() - date.getTime();

	if (elapsed < 1000*60) {
		return Math.round(elapsed/1000) + "s ago";
	} else if (elapsed < 1000*60*60) {
		return Math.round(elapsed/(1000*60)) + "m ago";
	} else if (elapsed < 1000*60*60*24) {
		return Math.round(elapsed/(1000*60*60)) + "h ago";
	} else {
		return Math.round(elapsed/(1000*60*60*24)) + "d ago";
	}

}


function mb_hasIndividualCompetitors(entity) {
	return entity && ((entity.hasOwnProperty("leagueCode") && ((entity["leagueCode"] == "MMA") || (entity["leagueCode"] == "PGA"))) || (entity.hasOwnProperty("sport") && ((entity["sport"] == "mma") || (entity["sport"] == "golf"))));
}

function mb_isInternationalLeague(entity) {

	if (entity) {

		var INTERNATIONAL_LEAGUES = ["SOINT", "SOW"];

		if (entity.hasOwnProperty("leagueCode") && (INTERNATIONAL_LEAGUES.indexOf(entity["leagueCode"]) != -1)) {
			return true;
		}

		if (entity.hasOwnProperty("leagueCodes")) {
			for (var i=0; i<entity["leagueCodes"].length; i++) {
				if (INTERNATIONAL_LEAGUES.indexOf(entity["leagueCodes"][i]) != -1) {
					return true;
				}
			}
		}

	}

	return false;

}


function mb_isGameFinished(game) {
	return game && (game.hasOwnProperty("timeLeft") && (game["timeLeft"].indexOf("Final") == 0));
}


function mb_getScoringUnitPlural(sport) {
	if ((sport == "mlb") || (sport == "cricket")) {
		return "runs";
	} else if ((sport == "nhl") || (sport == "soccer")) {
		return "goals";
	} else {
		return "points";
	}
}


function mb_hashCode(str) {
    let hash = 0;
    for (let i = 0, len = str.length; i < len; i++) {
        let chr = str.charCodeAt(i);
        hash = (hash << 5) - hash + chr;
        hash |= 0;
    }
    return hash;
}


function mb_createResizeObservers(target) {

	if ("ResizeObserver" in self) {

		var observer = new ResizeObserver(function(entries) {
			entries.forEach(function(entry) {

				//Update responsive size classes on element
				var breakpoints = {
					"metabet-size-xs": 384,
					"metabet-size-s": 576,
					"metabet-size-m": 768,
					"metabet-size-l": 992,
					"metabet-size-xl": 1200,
					"metabet-size-xxl": 1400
				};
				Object.keys(breakpoints).forEach(function(breakpoint) {
					entry.target.classList.toggle(breakpoint, (entry.contentRect.width >= breakpoints[breakpoint]));
				});

				//If this is an ad tile, recalculate size modifiers
				if (entry.target.classList.contains("metabet-gametile") || entry.target.classList.contains("metabet-oddscompare") || entry.target.classList.contains("metabet-sideoddstile") || entry.target.classList.contains("metabet-adtile-auto")) {
					mb_addAdTileSizeModifiers(entry.target, entry.contentRect);
				}

			});
		});

		if (target) {
			observer.observe(target);
		} else {
			document.querySelectorAll("[metabet-observe-resizes]").forEach);
		}

	}

}


//A cross-browser utility to animate the offsetLeft position of a container.
var RUWT_ELEMENT_SCROLL_TIMEOUT = null;
function mb_elementScrollOffsetLeftTo(element, xPos, duration) {
	if (RUWT_ELEMENT_SCROLL_TIMEOUT) {
		clearTimeout(RUWT_ELEMENT_SCROLL_TIMEOUT);
	}
	if (duration == 0) return;
	xPos = Math.max(0, Math.min(xPos, (element.scrollWidth - element.clientWidth)));
	var difference = xPos - element.scrollLeft;
	var perTick = difference / duration * 10;
	RUWT_ELEMENT_SCROLL_TIMEOUT = setTimeout(function() {
		element.scrollLeft = element.scrollLeft + perTick;
		if (element.scrollLeft == xPos) return;
		mb_elementScrollOffsetLeftTo(element, xPos, duration - 10);
	}, 10);
}


function mb_DOMContentLoaded() {

	
		if (localStorage.getItem("metabet-location-geo") === null) {

			mb_getJSON("https://metabet.api.areyouwatchingthis.com/api/geolocate.json?apiKey=219f64094f67ed781035f5f7a08840fc", function(data) {
				if (data["results"].length == 1) {
					localStorage.setItem("metabet-location-geo", data["results"][0]["countryCode"] + "-" + data["results"][0]["regionCode"]);
				}
				mb_initializeProducts();
			});

		} else {

			mb_getJSON("https://metabet.api.areyouwatchingthis.com/api/geolocate.json?apiKey=219f64094f67ed781035f5f7a08840fc", function(data) {
				if (data["results"].length == 1) {
					localStorage.setItem("metabet-location-geo", data["results"][0]["countryCode"] + "-" + data["results"][0]["regionCode"]);
				}
			});

			mb_initializeProducts();

		}

	
}




function mb_initializeProducts() {

	if (new Array("www.free-picks.com", "fulltimefantasy.com", "www.gamedaynetwork.com", "www.gridirongold.com", "www.henrybrownsports.com", "legal-sportsbetting.com", "www.nsawins.com", "overunderbets.com", "www.pointspreadreport.com", "www.vegaslinecrushers.com", "www.vegassi.com").indexOf(window.location.host) >= 0) {
		console.log("Unauthorized MetaBet Usage");
		return;
	}

	//Insert stylesheets
	var head = document.head || document.getElementsByTagName("head")[0];
	if (head.innerHTML.indexOf("metabet.io/css/main.css") == -1) {
		var link = document.createElement("link");
		link.rel = "stylesheet";
		link.type = "text/css";
		link.href = "https://go.metabet.io/css/main.css?siteID=sportingnews&v=20220807";
		head.appendChild(link);
	}

	//Insert all dynamic content
	mb_insertAdTilePlacements();

	//Insert modules
		mb_insertBetsInABoxEntityMetadata();
	mb_insertBetsInABoxGameCenter();
	mb_insertBetsInABoxSchedule();
	mb_insertBetsInABoxScores();
	mb_insertBetsInABoxSocial();
	mb_insertBetsInABoxStandings();
	mb_insertBetsInABoxTeams();
	mb_insertBetsInABoxVideos();
	
	
	//Include external libraries
	

	//Insert Core Products
	mb_insertOddsBubbles();
	mb_insertOddsValues();
	mb_insertGameTiles();
	mb_insertOddsCompare();
	mb_insertVideoTiles();
	mb_insertSideOddsTiles();
			mb_insertPollingTiles();
			mb_insertInjuriesTiles();
		mb_insertOddsBoard();
	mb_insertParlayCalculator();
	mb_insertSideOddBrowser();
	mb_insertFuturesBoard();

	
		mb_insertProviderRankings();
	
		mb_insertScoreStrip();
	
		mb_insertSearchOneBox();
	
		mb_insertSideOddsTable();
	
	//Transform any auto tiles into standard tiles
	//using customer-specific logic
	mb_insertAutoAdTiles();

	mb_createResizeObservers();

}



	//Start work once DOM loads
	document.addEventListener("DOMContentLoaded",, false);



