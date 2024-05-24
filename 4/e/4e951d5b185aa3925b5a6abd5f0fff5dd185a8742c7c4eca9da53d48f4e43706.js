var TC = "G-6TSCGB73VH"
var newLink = document.createElement("script");
newLink.async = true;
newLink.src = "https://www.googletagmanager.com/gtag/js?id="+TC;
document.head.appendChild(newLink);
window.dataLayer = window.dataLayer || [];

gtag('js', new Date());
gtag('config', TC);
