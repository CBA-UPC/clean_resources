window.onload = function() {
  setTimeout(function() {
    // Get all elements with the class "gam-responsive-ad-container"
    var adContainers = document.querySelectorAll('.gam-responsive-ad-container');

    adContainers.forEach(function(adContainer) {
      var width = adContainer.getAttribute('data-width');
      var height = adContainer.getAttribute('data-height');

      // Determine the appropriate fallback content based on the ad unit size
      var fallbackContent = getFallbackContent(width, height);

      // Check if the ad container has a zero height
      if (adContainer.offsetHeight === 0) {
        // Replace the ad container with the determined fallback content
        adContainer.innerHTML = fallbackContent;
      }
    });

    // Get all elements with the class "server-profitsence-ads"
    var adUnits = document.querySelectorAll('.server-profitsence-ads');

    adUnits.forEach(function(adUnit) {
      var width = adUnit.getAttribute('data-width');
      var height = adUnit.getAttribute('data-height');

      // Determine the appropriate fallback content based on the ad unit size
      var fallbackContent = getFallbackContent(width, height);

      // Check if the ad unit is empty or has a zero height
      if (adUnit.offsetHeight === 0) {
        // Replace the ad unit with the determined fallback content
        adUnit.innerHTML = fallbackContent;
      }
    });
  }, 2000); // Add a 2-second delay after the page loads
};

// Function to get the appropriate fallback content based on ad unit size
function getFallbackContent(width, height) {
  // Define fallback content based on size
  if (width == 300 && height == 250) {
    return '<a target="_blank" href="https://www.gamezcliq.com/?utm_source=ProfitSence_Ads"><img src="https://d3plnp2f9sfye5.cloudfront.net/gamezcliq-creatives/300x250-01.jpg" width="300" height="250" alt="GamezCliq 300x250"/></a>';
  } else if (width == 300 && height == 600) {
    return '<a target="_blank" href="https://www.gamezcliq.com/?utm_source=ProfitSence_Ads"><img src="https://d3plnp2f9sfye5.cloudfront.net/gamezcliq-creatives/300x600-01.jpg" width="300" height="600" alt="GamezCliq 300x600"/></a>';
  } else if (width == 728 && height == 90) {
    return '<a target="_blank" href="https://www.gamezcliq.com/?utm_source=ProfitSence_Ads"><img src="https://d3plnp2f9sfye5.cloudfront.net/gamezcliq-creatives/728x90-01.jpg" width="728" height="90" alt="GamezCliq 728x90"/></a>';
  } else if (width == 970 && height == 90) {
    return '<a target="_blank" href="https://www.gamezcliq.com/?utm_source=ProfitSence_Ads"><img src="https://d3plnp2f9sfye5.cloudfront.net/gamezcliq-creatives/970x90-01.jpg" width="970" height="90" alt="GamezCliq 970x90"/></a>';
  } else if (width == 120 && height == 600) {
    return '<a target="_blank" href="https://www.gamezcliq.com/?utm_source=ProfitSence_Ads"><img src="https://d3plnp2f9sfye5.cloudfront.net/gamezcliq-creatives/120x600-01.jpg" width="120" height="600" alt="GamezCliq 120x600"/></a>';
  } else if (width == 336 && height == 280) {
    return '<a target="_blank" href="https://www.gamezcliq.com/?utm_source=ProfitSence_Ads"><img src="https://d3plnp2f9sfye5.cloudfront.net/gamezcliq-creatives/336x280-01.jpg" width="336" height="280" alt="GamezCliq 336x280"/></a>';
  } else if (width == 970 && height == 250) {
    return '<a target="_blank" href="https://www.gamezcliq.com/?utm_source=ProfitSence_Ads"><img src="https://d3plnp2f9sfye5.cloudfront.net/gamezcliq-creatives/970x250-01.jpg" width="970" height="250" alt="GamezCliq 970x250"/></a>';
  } else if (width == 160 && height == 600) {
    return '<a target="_blank" href="https://www.gamezcliq.com/?utm_source=ProfitSence_Ads"><img src="https://d3plnp2f9sfye5.cloudfront.net/gamezcliq-creatives/160x600-01.jpg" width="160" height="600" alt="GamezCliq 160x600"/></a>';
  } else if (width == 300 && height == 100) {
    return '<a target="_blank" href="https://www.gamezcliq.com/?utm_source=ProfitSence_Ads"><img src="https://d3plnp2f9sfye5.cloudfront.net/gamezcliq-creatives/300x100-01.jpg" width="300" height="100" alt="GamezCliq 300x100"/></a>';
  } else if (width == 250 && height == 250) {
    return '<a target="_blank" href="https://www.gamezcliq.com/?utm_source=ProfitSence_Ads"><img src="https://d3plnp2f9sfye5.cloudfront.net/gamezcliq-creatives/250x250-01.jpg" width="250" height="250" alt="GamezCliq 250x250"/></a>';
  } else if (width == 320 && height == 50) {
    return '<a target="_blank" href="https://www.gamezcliq.com/?utm_source=ProfitSence_Ads"><img src="https://d3plnp2f9sfye5.cloudfront.net/gamezcliq-creatives/320x50-01.jpg" width="320" height="50" alt="GamezCliq 320x50"/></a>';
  }
  // Add more size-specific fallbacks as needed
  return ''; // Default fallback if no size matches
}