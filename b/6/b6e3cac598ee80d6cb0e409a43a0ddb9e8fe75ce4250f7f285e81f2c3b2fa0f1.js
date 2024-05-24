{"Error":true,"Message":"There was an error processing the request: Failed retrieving data. Please try again.","Intercepts":[]});
     timerId = setTimeout(()=>{
      func.apply(this,args)
     },delay)
   }
}

jQuery(document).ready(($) => {
  let wileyURL = window.location.origin;
  let currLocale = window.location.pathname.replace(/^\/([^\/]*).*$/, '$1');
  let locale = currLocale.split("-");
  let postdata = {};
  let autosugParent;
  let autoSugChild;
  const debounceFetchData = _debounce(fetchData,300);
  const country = locale[1].toUpperCase();
  const queryParams = new URLSearchParams(window.location.search);
  const searchBars = $('#search-bar, #search-bar-mobile');
  searchBars.each((i, el) => {
    const searchBar = $(el);
    searchBar.parent().attr('action','/'+currLocale+'/search');
    searchBar.attr('maxLength','199');
    if (queryParams.has('pq')) {
      let searchTerm = queryParams.get("pq");
      searchBar.val(searchTerm);
    }
    let screenWidth = window.innerWidth;
    if(screenWidth <= 767){
      searchBar.attr('placeHolder','');
    }
    else if(screenWidth > 767 && screenWidth <992){
      searchBar.attr('placeHolder','Search Wiley...');
    }
  });

  function fetchData(query,searchBarId){
    $.ajax({
      type:"get",
      url:"https://ac.cnstrc.com/autocomplete/"+query,
      data:postdata,          
      success:function(res){
        if(autosugParent === "autosuggest"){
          $("."+ autoSugChild).html('<div class="left-container"></div>');
          $("."+ autoSugChild).append('<div class="right-container"></div>');
          if(window.innerWidth<=1024 && window.innerWidth>767){
            $("."+autoSugChild).css("width","600px");
            $(".left-container").css("width","30%");
          }else if(window.innerWidth>=1024){
            $("."+autoSugChild).css("width","900px");
            $(".left-container").css("width","30%");
          }
        }
          let suggestions = res['sections']['Search Suggestions'];
          let products = res['sections']['Products'];
          let suggestionList = '<div><p class="label">Suggestions</p><ul class="options';
          let matched_term = query;
          if(suggestions.length){
            // suggestionList+=(suggestions)?' border-bottom':'';
            suggestionList+='">';
            let suggestion = suggestions[0].value;
            // if(suggestions[0].data.groups) {
            //   let subject_count = 0;
            //   suggestions[0].data.groups.forEach(function (suggestionGroup) {
            //     if(suggestionGroup.display_name != "" && suggestionGroup.path.includes('subjects') && subject_count < 3){
            //       let sugList = '<li id="sug'+subject_count+'"><a href="/'+currLocale+'/search?pq='+suggestion+'&filters[subjects]='+suggestionGroup.display_name.replace("&","%26")+'">' + suggestion + ' in ' + suggestionGroup.display_name + '</a></li>';
            //       suggestionList += sugList;
            //       subject_count+=1;
            //     }
            //   });
            // }
            suggestionList += '</ul></div>';
            if(autoSugChild == "autosuggest-container-mobile"){
              $("."+autoSugChild).html(suggestionList);
            }else{
              $(".left-container").html(suggestionList);
            }
            var repstr = "<span class='highlight'>" + matched_term + "</span>";
            // $(".options").find('li a').each(function() {
            //   let text = $(this).text();
            //   if(!/\s+$/gm.test(matched_term)){
            //     text = text.replace(/ /g, " ");
            //     matched_term = matched_term.replace(/ /g, " ");
            //   }
            //   var searchMask = matched_term;
            //   var regEx = new RegExp(searchMask, "ig");
            //   text = text.replace(regEx, repstr);
            //   $(this).html(text);
            // });
            let matchList = '<div class="match-container"><ul class="options">';
            suggestions.forEach(function (suggestion, index) {
              if(suggestion.value != ""){
                let matList = '<li id="mat'+index+'"><a href="/'+currLocale+'/search?pq='+suggestion.value+'">' + suggestion.value + '</a></li>';
                matchList += matList;
              }
            });
            matchList += '</ul><div>'

            if(autoSugChild == "autosuggest-container-mobile"){
              $("."+autoSugChild).append(matchList);
            }else{
              $(".left-container").append(matchList);
            }
            $(".options").find('li a').each(function() {
              let text = $(this).text();
              if(!/\s+$/gm.test(matched_term)){
                text = text.replace(/ /g, " ");
                matched_term = matched_term.replace(/ /g, " ");
              }
              var searchMask = matched_term;
              var regEx = new RegExp(searchMask, "ig");
              text = text.replace(regEx, repstr);
              $(this).html(text);
            });
          }
          else{
            suggestionList+='">';
            suggestionList += '<li>No Results For <span class="highlight">'+query+'</span></li>';
            if(autoSugChild == "autosuggest-container-mobile"){
              $("."+autoSugChild).html(suggestionList);
            
            }else{
              $(".left-container").html(suggestionList);
            }
          }
          let rightHeader = '<div><div class="product-header-container"><p class="label product-label">Popular Products</p><a class="more-link" href="'+wileyURL+'/'+currLocale+'/search?pq='+query+'">More</a></div>';
          if(!(autoSugChild == "autosuggest-container-mobile")){
            $(".right-container").html(rightHeader);
          }
          let productList = '<ul class="products">';
          if(products.length){
            products.forEach(function (product, index) {
              if(product.data.image_url != undefined && product.value != ""){
                let prodList = '<li class="product-li" id="sug'+index+'"><div class="product"><a href="'+wileyURL+'/'+currLocale+product.data.url+'"><img src="'+product.data.image_url+'" alt="'+product.value+'"><p class="product-name">'+ product.value + '</p></a></div></li>';
                productList += prodList;
              }
            });
            productList += '</ul></div>';
            if(!(autoSugChild == "autosuggest-container-mobile")){
              $(".right-container").append(productList);
            }
            
          }else{
            if(!(autoSugChild == "autosuggest-container-mobile") && suggestions.length === 0){
              $(".right-container").remove();
              $("."+autoSugChild).css("width","100%");
              $(".left-container").css("width","100%");
            }
          } 
      },
      error:function(err){
        if(autosugParent === "autosuggest"){
          $("."+ autoSugChild).html('<div class="left-container"></div>');
          if(window.innerWidth<=1024 && window.innerWidth>767){
            $("."+autoSugChild).css("width","600px");
          }else if(window.innerWidth>=1024){
            $("."+autoSugChild).css("width","900px");
          }
          $(".left-container").css("width","100%");
        }
        let suggestionList = '<div><p class="label">Suggestions</p><ul class="options"><li>No Results For <span class="highlight">'+query+'</span></li></ul></div>';
        if(autoSugChild == "autosuggest-container-mobile"){
          $("."+autoSugChild).html(suggestionList);
        
        }else{
          $(".left-container").html(suggestionList);
          $("."+autoSugChild).css("width","100%");
        }
      },
      complete: function(){    
        if(autosugParent == "autosuggest-mobile" && searchBarId !== 'search-bar'){
          $("."+autosugParent).css({"display":"flex"});
        }
        else if(autosugParent == "autosuggest-mobile" && searchBarId === 'search-bar'){
          $(".autosuggest-container").html($(".autosuggest-container-mobile").html());
          $(".autosuggest-container").css({"flex-direction":"column","padding": "35px 25px","width":"100%"})
          $(".autosuggest").css({"display":"block"});

        }
        else{
          $("."+autosugParent).css({"display":"flex","justify-content":"center"});
        }
      }
     });
  }

  
  $('#search-bar, #search-bar-mobile').keypress(function (e) {
    // for apple devices, the search suggestion box behaviour fix, for more info: DCPR-2352
    var key = e.which;
    if (key == 13)  // the enter key code
    {
      closeSuggestionBox();
    }
  });

  $('#search-bar, #search-bar-mobile').on("keyup", function(e) {
    e.preventDefault();
    var query = $(this).val();
    var searchBarId = this.id;
    var key = wileyURL === "https://www.wiley.com" ? "key_SL97ODu3QaBgecH3" : "key_sGfK8VsLymZ8J4I7";
    if(window.innerWidth<850){
      autosugParent = "autosuggest-mobile";
      autoSugChild = "autosuggest-container-mobile";
    }
    else{
      autosugParent = "autosuggest";
      autoSugChild = "autosuggest-container";
    }
    let discontCountry = 'lifeCycleStatus_'+country;
    let filterCountry = 'filters[Products]['+discontCountry+']';
    postdata.key = key;
    postdata.i = getCookie("ConstructorioID_client_id");
    postdata.s = localStorage.getItem("_constructorio_search_session_id");
    postdata.c = "cio-fe-web";
    postdata.num_results_Products = 4;
    postdata['num_results_Search Suggestions'] = 7;
    postdata[filterCountry] = 'DISCONTINUED';
    postdata['filters[Products][market_restriction]'] = country;
    
    if(query != '' && query.length >= 3){
        query = query.trim();
        debounceFetchData(query,searchBarId)
    }
    else{
      closeSuggestionBox();
    }
  });

  
  $('#search-bar-form, #search-bar-mobile-form').on("submit", function(e){
    var query = $(this).find('input[type=search]').val();
    if(query == ''){
      return false;
    }
  });
  
  var elClicked;
  $('#search-bar, #search-bar-mobile').on("blur", function(e) {
    const parent1 = document.getElementsByClassName('autosuggest-container')[0];
    const parent2 = document.getElementsByClassName('autosuggest-container-mobile')[0];
    focusOutTimer = setTimeout(() => {
    if(!parent1.contains(e.relatedTarget) && !parent2.contains(e.relatedTarget)){
      closeSuggestionBox();
    }
    }, 200);
  });
  $('#search-bar, #search-bar-mobile').on("search", function(e) {
    let val = e.target.value;
    if(val === ""){
      closeSuggestionBox();
    }
  });
  $(document).mousedown(function(e) {
    elClicked = $(e.target);
  });
  function closeSuggestionBox(){
    $(".autosuggest").css("display","none");
    $(".autosuggest-container").empty();
    $(".autosuggest-mobile").css("display","none");
    $(".autosuggest-container-mobile").empty();
  }
  function getCookie(cname) {
    var name = cname + "=";
    var decodedCookie = decodeURIComponent(document.cookie);
    var ca = decodedCookie.split(';');
    for(var i = 0; i < ca.length; i++) {
      var c = ca[i];
      while (c.charAt(0) == ' ') {
      c = c.substring(1);
      }
      if (c.indexOf(name) == 0) {
      return c.substring(name.length, c.length);
      }
    }
    return "";
  }
});

