;(function (w) {
  conso")
})(window);utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<meta name="description" content="Toggle contextual overlays for displaying lists of links and more with the Bootstrap dropdown plugin.">
<meta name="author" content="Mark Otto, Jacob Thornton, and Bootstrap contributors">
<meta name="generator" content="Hugo 0.118.2">

<meta name="docsearch:language" content="en">
<meta name="docsearch:version" content="5.3">

<title>Dropdowns · Bootstrap v5.3</title>

<link rel="canonical" href="https://getbootstrap.com/docs/5.3/components/dropdowns/">

<link rel="preconnect" href="https://AK7KMZKZHQ-dsn.algolia.net" crossorigin>

<script src="/docs/5.3/assets/js/color-modes.js"></script>

<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/@docsearch/css@3">

<link href="/docs/5.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-T3c6CoIi6uLrA9TneNEoa7RxnatzjcDSCmG1MXxSR1GAsXEV/Dwwykc2MPK8M2HN" crossorigin="anonymous">

<link href="/docs/5.3/assets/css/docs.css" rel="stylesheet">

<!-- Favicons -->
<link rel="apple-touch-icon" href="/docs/5.3/assets/img/favicons/apple-touch-icon.png" sizes="180x180">
<link rel="icon" href="/docs/5.3/assets/img/favicons/favicon-32x32.png" sizes="32x32" type="image/png">
<link rel="icon" href="/docs/5.3/assets/img/favicons/favicon-16x16.png" sizes="16x16" type="image/png">
<link rel="manifest" href="/docs/5.3/assets/img/favicons/manifest.json">
<link rel="mask-icon" href="/docs/5.3/assets/img/favicons/safari-pinned-tab.svg" color="#712cf9">
<link rel="icon" href="/docs/5.3/assets/img/favicons/favicon.ico">
<meta name="theme-color" content="#712cf9">

<meta name="twitter:card" content="summary_large_image">
<meta name="twitter:site" content="@getbootstrap">
<meta name="twitter:creator" content="@getbootstrap">
<meta name="twitter:title" content="Dropdowns">
<meta name="twitter:description" content="Toggle contextual overlays for displaying lists of links and more with the Bootstrap dropdown plugin.">
<meta name="twitter:image" content="https://getbootstrap.com/docs/5.3/assets/brand/bootstrap-social.png">

<meta property="og:url" content="https://getbootstrap.com/docs/5.3/components/dropdowns/">
<meta property="og:title" content="Dropdowns">
<meta property="og:description" content="Toggle contextual overlays for displaying lists of links and more with the Bootstrap dropdown plugin.">
<meta property="og:type" content="article">
<meta property="og:image" content="https://getbootstrap.com/docs/5.3/assets/brand/bootstrap-social.png">
<meta property="og:image:type" content="image/png">
<meta property="og:image:width" content="2000">
<meta property="og:image:height" content="1000">

<script defer src="https://cdn.usefathom.com/script.js" data-site="ITUSEYJG"></script>

<script>
  window.ga=window.ga||function(){(ga.q=ga.q||[]).push(arguments)};ga.l=+new Date;
  ga('create', 'UA-146052-10', 'getbootstrap.com');
  ga('set', 'anonymizeIp', true);
  ga('send', 'pageview');
</script>
<script async src="https://www.google-analytics.com/analytics.js"></script>


  </head>
  <body data-bs-spy="scroll" data-bs-target="#TableOfContents">
    <div class="skippy visually-hidden-focusable overflow-hidden">
  <div class="container-xl">
    <a class="d-inline-flex p-2 m-1" href="#content">Skip to main content</a>
    <a class="d-none d-md-inline-flex p-2 m-1" href="#bd-docs-nav">Skip to docs navigation</a>
  </div>
</div>

    <svg xmlns="http://www.w3.org/2000/svg" class="d-none">
  <symbol id="arrow-right" viewBox="0 0 16 16">
    <path fill-rule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z"/>
  </symbol>
  <symbol id="book-half" viewBox="0 0 16 16">
    <path d="M8.5 2.687c.654-.689 1.782-.886 3.112-.752 1.234.124 2.503.523 3.388.893v9.923c-.918-.35-2.107-.692-3.287-.81-1.094-.111-2.278-.039-3.213.492V2.687zM8 1.783C7.015.936 5.587.81 4.287.94c-1.514.153-3.042.672-3.994 1.105A.5.5 0 0 0 0 2.5v11a.5.5 0 0 0 .707.455c.882-.4 2.303-.881 3.68-1.02 1.409-.142 2.59.087 3.223.877a.5.5 0 0 0 .78 0c.633-.79 1.814-1.019 3.222-.877 1.378.139 2.8.62 3.681 1.02A.5.5 0 0 0 16 13.5v-11a.5.5 0 0 0-.293-.455c-.952-.433-2.48-.952-3.994-1.105C10.413.809 8.985.936 8 1.783z"/>
  </symbol>
  <symbol id="box-seam" viewBox="0 0 16 16">
    <path d="M8.186 1.113a.5.5 0 0 0-.372 0L1.846 3.5l2.404.961L10.404 2l-2.218-.887zm3.564 1.426L5.596 5 8 5.961 14.154 3.5l-2.404-.961zm3.25 1.7-6.5 2.6v7.922l6.5-2.6V4.24zM7.5 14.762V6.838L1 4.239v7.923l6.5 2.6zM7.443.184a1.5 1.5 0 0 1 1.114 0l7.129 2.852A.5.5 0 0 1 16 3.5v8.662a1 1 0 0 1-.629.928l-7.185 2.874a.5.5 0 0 1-.372 0L.63 13.09a1 1 0 0 1-.63-.928V3.5a.5.5 0 0 1 .314-.464L7.443.184z"/>
  </symbol>
  <symbol id="braces" viewBox="0 0 16 16">
    <path d="M2.114 8.063V7.9c1.005-.102 1.497-.615 1.497-1.6V4.503c0-1.094.39-1.538 1.354-1.538h.273V2h-.376C3.25 2 2.49 2.759 2.49 4.352v1.524c0 1.094-.376 1.456-1.49 1.456v1.299c1.114 0 1.49.362 1.49 1.456v1.524c0 1.593.759 2.352 2.372 2.352h.376v-.964h-.273c-.964 0-1.354-.444-1.354-1.538V9.663c0-.984-.492-1.497-1.497-1.6zM13.886 7.9v.163c-1.005.103-1.497.616-1.497 1.6v1.798c0 1.094-.39 1.538-1.354 1.538h-.273v.964h.376c1.613 0 2.372-.759 2.372-2.352v-1.524c0-1.094.376-1.456 1.49-1.456V7.332c-1.114 0-1.49-.362-1.49-1.456V4.352C13.51 2.759 12.75 2 11.138 2h-.376v.964h.273c.964 0 1.354.444 1.354 1.538V6.3c0 .984.492 1.497 1.497 1.6z"/>
  </symbol>
  <symbol id="braces-asterisk" viewBox="0 0 16 16">
    <path fill-rule="evenodd" d="M1.114 8.063V7.9c1.005-.102 1.497-.615 1.497-1.6V4.503c0-1.094.39-1.538 1.354-1.538h.273V2h-.376C2.25 2 1.49 2.759 1.49 4.352v1.524c0 1.094-.376 1.456-1.49 1.456v1.299c1.114 0 1.49.362 1.49 1.456v1.524c0 1.593.759 2.352 2.372 2.352h.376v-.964h-.273c-.964 0-1.354-.444-1.354-1.538V9.663c0-.984-.492-1.497-1.497-1.6ZM14.886 7.9v.164c-1.005.103-1.497.616-1.497 1.6v1.798c0 1.094-.39 1.538-1.354 1.538h-.273v.964h.376c1.613 0 2.372-.759 2.372-2.352v-1.524c0-1.094.376-1.456 1.49-1.456v-1.3c-1.114 0-1.49-.362-1.49-1.456V4.352C14.51 2.759 13.75 2 12.138 2h-.376v.964h.273c.964 0 1.354.444 1.354 1.538V6.3c0 .984.492 1.497 1.497 1.6ZM7.5 11.5V9.207l-1.621 1.621-.707-.707L6.792 8.5H4.5v-1h2.293L5.172 5.879l.707-.707L7.5 6.792V4.5h1v2.293l1.621-1.621.707.707L9.208 7.5H11.5v1H9.207l1.621 1.621-.707.707L8.5 9.208V11.5h-1Z"/>
  </symbol>
  <symbol id="check2" viewBox="0 0 16 16">
    <path d="M13.854 3.646a.5.5 0 0 1 0 .708l-7 7a.5.5 0 0 1-.708 0l-3.5-3.5a.5.5 0 1 1 .708-.708L6.5 10.293l6.646-6.647a.5.5 0 0 1 .708 0z"/>
  </symbol>
  <symbol id="chevron-expand" viewBox="0 0 16 16">
    <path fill-rule="evenodd" d="M3.646 9.146a.5.5 0 0 1 .708 0L8 12.793l3.646-3.647a.5.5 0 0 1 .708.708l-4 4a.5.5 0 0 1-.708 0l-4-4a.5.5 0 0 1 0-.708zm0-2.292a.5.5 0 0 0 .708 0L8 3.207l3.646 3.647a.5.5 0 0 0 .708-.708l-4-4a.5.5 0 0 0-.708 0l-4 4a.5.5 0 0 0 0 .708z"/>
  </symbol>
  <symbol id="circle-half" viewBox="0 0 16 16">
    <path d="M8 15A7 7 0 1 0 8 1v14zm0 1A8 8 0 1 1 8 0a8 8 0 0 1 0 16z"/>
  </symbol>
  <symbol id="clipboard" viewBox="0 0 16 16">
    <path d="M4 1.5H3a2 2 0 0 0-2 2V14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V3.5a2 2 0 0 0-2-2h-1v1h1a1 1 0 0 1 1 1V14a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V3.5a1 1 0 0 1 1-1h1v-1z"/>
    <path d="M9.5 1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-3a.5.5 0 0 1-.5-.5v-1a.5.5 0 0 1 .5-.5h3zm-3-1A1.5 1.5 0 0 0 5 1.5v1A1.5 1.5 0 0 0 6.5 4h3A1.5 1.5 0 0 0 11 2.5v-1A1.5 1.5 0 0 0 9.5 0h-3z"/>
  </symbol>
  <symbol id="code" viewBox="0 0 16 16">
    <path d="M5.854 4.854a.5.5 0 1 0-.708-.708l-3.5 3.5a.5.5 0 0 0 0 .708l3.5 3.5a.5.5 0 0 0 .708-.708L2.707 8l3.147-3.146zm4.292 0a.5.5 0 0 1 .708-.708l3.5 3.5a.5.5 0 0 1 0 .708l-3.5 3.5a.5.5 0 0 1-.708-.708L13.293 8l-3.147-3.146z"/>
  </symbol>
  <symbol id="file-earmark-richtext" viewBox="0 0 16 16">
    <path d="M14 4.5V14a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V2a2 2 0 0 1 2-2h5.5L14 4.5zm-3 0A1.5 1.5 0 0 1 9.5 3V1H4a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1V4.5h-2z"/>
    <path d="M4.5 12.5A.5.5 0 0 1 5 12h3a.5.5 0 0 1 0 1H5a.5.5 0 0 1-.5-.5zm0-2A.5.5 0 0 1 5 10h6a.5.5 0 0 1 0 1H5a.5.5 0 0 1-.5-.5zm1.639-3.708 1.33.886 1.854-1.855a.25.25 0 0 1 .289-.047l1.888.974V8.5a.5.5 0 0 1-.5.5H5a.5.5 0 0 1-.5-.5V8s1.54-1.274 1.639-1.208zM6.25 6a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5z"/>
  </symbol>
  <symbol id="globe2" viewBox="0 0 16 16">
    <path d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm7.5-6.923c-.67.204-1.335.82-1.887 1.855-.143.268-.276.56-.395.872.705.157 1.472.257 2.282.287V1.077zM4.249 3.539c.142-.384.304-.744.481-1.078a6.7 6.7 0 0 1 .597-.933A7.01 7.01 0 0 0 3.051 3.05c.362.184.763.349 1.198.49zM3.509 7.5c.036-1.07.188-2.087.436-3.008a9.124 9.124 0 0 1-1.565-.667A6.964 6.964 0 0 0 1.018 7.5h2.49zm1.4-2.741a12.344 12.344 0 0 0-.4 2.741H7.5V5.091c-.91-.03-1.783-.145-2.591-.332zM8.5 5.09V7.5h2.99a12.342 12.342 0 0 0-.399-2.741c-.808.187-1.681.301-2.591.332zM4.51 8.5c.035.987.176 1.914.399 2.741A13.612 13.612 0 0 1 7.5 10.91V8.5H4.51zm3.99 0v2.409c.91.03 1.783.145 2.591.332.223-.827.364-1.754.4-2.741H8.5zm-3.282 3.696c.12.312.252.604.395.872.552 1.035 1.218 1.65 1.887 1.855V11.91c-.81.03-1.577.13-2.282.287zm.11 2.276a6.696 6.696 0 0 1-.598-.933 8.853 8.853 0 0 1-.481-1.079 8.38 8.38 0 0 0-1.198.49 7.01 7.01 0 0 0 2.276 1.522zm-1.383-2.964A13.36 13.36 0 0 1 3.508 8.5h-2.49a6.963 6.963 0 0 0 1.362 3.675c.47-.258.995-.482 1.565-.667zm6.728 2.964a7.009 7.009 0 0 0 2.275-1.521 8.376 8.376 0 0 0-1.197-.49 8.853 8.853 0 0 1-.481 1.078 6.688 6.688 0 0 1-.597.933zM8.5 11.909v3.014c.67-.204 1.335-.82 1.887-1.855.143-.268.276-.56.395-.872A12.63 12.63 0 0 0 8.5 11.91zm3.555-.401c.57.185 1.095.409 1.565.667A6.963 6.963 0 0 0 14.982 8.5h-2.49a13.36 13.36 0 0 1-.437 3.008zM14.982 7.5a6.963 6.963 0 0 0-1.362-3.675c-.47.258-.995.482-1.565.667.248.92.4 1.938.437 3.008h2.49zM11.27 2.461c.177.334.339.694.482 1.078a8.368 8.368 0 0 0 1.196-.49 7.01 7.01 0 0 0-2.275-1.52c.218.283.418.597.597.932zm-.488 1.343a7.765 7.765 0 0 0-.395-.872C9.835 1.897 9.17 1.282 8.5 1.077V4.09c.81-.03 1.577-.13 2.282-.287z"/>
  </symbol>
  <symbol id="grid-fill" viewBox="0 0 16 16">
    <path d="M1 2.5A1.5 1.5 0 0 1 2.5 1h3A1.5 1.5 0 0 1 7 2.5v3A1.5 1.5 0 0 1 5.5 7h-3A1.5 1.5 0 0 1 1 5.5v-3zm8 0A1.5 1.5 0 0 1 10.5 1h3A1.5 1.5 0 0 1 15 2.5v3A1.5 1.5 0 0 1 13.5 7h-3A1.5 1.5 0 0 1 9 5.5v-3zm-8 8A1.5 1.5 0 0 1 2.5 9h3A1.5 1.5 0 0 1 7 10.5v3A1.5 1.5 0 0 1 5.5 15h-3A1.5 1.5 0 0 1 1 13.5v-3zm8 0A1.5 1.5 0 0 1 10.5 9h3a1.5 1.5 0 0 1 1.5 1.5v3a1.5 1.5 0 0 1-1.5 1.5h-3A1.5 1.5 0 0 1 9 13.5v-3z"/>
  </symbol>
  <symbol id="lightning-charge-fill" viewBox="0 0 16 16">
    <path d="M11.251.068a.5.5 0 0 1 .227.58L9.677 6.5H13a.5.5 0 0 1 .364.843l-8 8.5a.5.5 0 0 1-.842-.49L6.323 9.5H3a.5.5 0 0 1-.364-.843l8-8.5a.5.5 0 0 1 .615-.09z"/>
  </symbol>
  <symbol id="list" viewBox="0 0 16 16">
    <path fill-rule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"/>
  </symbol>
  <symbol id="magic" viewBox="0 0 16 16">
    <path d="M9.5 2.672a.5.5 0 1 0 1 0V.843a.5.5 0 0 0-1 0v1.829Zm4.5.035A.5.5 0 0 0 13.293 2L12 3.293a.5.5 0 1 0 .707.707L14 2.707ZM7.293 4A.5.5 0 1 0 8 3.293L6.707 2A.5.5 0 0 0 6 2.707L7.293 4Zm-.621 2.5a.5.5 0 1 0 0-1H4.843a.5.5 0 1 0 0 1h1.829Zm8.485 0a.5.5 0 1 0 0-1h-1.829a.5.5 0 0 0 0 1h1.829ZM13.293 10A.5.5 0 1 0 14 9.293L12.707 8a.5.5 0 1 0-.707.707L13.293 10ZM9.5 11.157a.5.5 0 0 0 1 0V9.328a.5.5 0 0 0-1 0v1.829Zm1.854-5.097a.5.5 0 0 0 0-.706l-.708-.708a.5.5 0 0 0-.707 0L8.646 5.94a.5.5 0 0 0 0 .707l.708.708a.5.5 0 0 0 .707 0l1.293-1.293Zm-3 3a.5.5 0 0 0 0-.706l-.708-.708a.5.5 0 0 0-.707 0L.646 13.94a.5.5 0 0 0 0 .707l.708.708a.5.5 0 0 0 .707 0L8.354 9.06Z"/>
  </symbol>
  <symbol id="menu-button-wide-fill" viewBox="0 0 16 16">
    <path d="M1.5 0A1.5 1.5 0 0 0 0 1.5v2A1.5 1.5 0 0 0 1.5 5h13A1.5 1.5 0 0 0 16 3.5v-2A1.5 1.5 0 0 0 14.5 0h-13zm1 2h3a.5.5 0 0 1 0 1h-3a.5.5 0 0 1 0-1zm9.927.427A.25.25 0 0 1 12.604 2h.792a.25.25 0 0 1 .177.427l-.396.396a.25.25 0 0 1-.354 0l-.396-.396zM0 8a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V8zm1 3v2a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-2H1zm14-1V8a1 1 0 0 0-1-1H2a1 1 0 0 0-1 1v2h14zM2 8.5a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9a.5.5 0 0 1-.5-.5zm0 4a.5.5 0 0 1 .5-.5h6a.5.5 0 0 1 0 1h-6a.5.5 0 0 1-.5-.5z"/>
  </symbol>
  <symbol id="moon-stars-fill" viewBox="0 0 16 16">
    <path d="M6 .278a.768.768 0 0 1 .08.858 7.208 7.208 0 0 0-.878 3.46c0 4.021 3.278 7.277 7.318 7.277.527 0 1.04-.055 1.533-.16a.787.787 0 0 1 .81.316.733.733 0 0 1-.031.893A8.349 8.349 0 0 1 8.344 16C3.734 16 0 12.286 0 7.71 0 4.266 2.114 1.312 5.124.06A.752.752 0 0 1 6 .278z"/>
    <path d="M10.794 3.148a.217.217 0 0 1 .412 0l.387 1.162c.173.518.579.924 1.097 1.097l1.162.387a.217.217 0 0 1 0 .412l-1.162.387a1.734 1.734 0 0 0-1.097 1.097l-.387 1.162a.217.217 0 0 1-.412 0l-.387-1.162A1.734 1.734 0 0 0 9.31 6.593l-1.162-.387a.217.217 0 0 1 0-.412l1.162-.387a1.734 1.734 0 0 0 1.097-1.097l.387-1.162zM13.863.099a.145.145 0 0 1 .274 0l.258.774c.115.346.386.617.732.732l.774.258a.145.145 0 0 1 0 .274l-.774.258a1.156 1.156 0 0 0-.732.732l-.258.774a.145.145 0 0 1-.274 0l-.258-.774a1.156 1.156 0 0 0-.732-.732l-.774-.258a.145.145 0 0 1 0-.274l.774-.258c.346-.115.617-.386.732-.732L13.863.1z"/>
  </symbol>
  <symbol id="palette2" viewBox="0 0 16 16">
    <path d="M0 .5A.5.5 0 0 1 .5 0h5a.5.5 0 0 1 .5.5v5.277l4.147-4.131a.5.5 0 0 1 .707 0l3.535 3.536a.5.5 0 0 1 0 .708L10.261 10H15.5a.5.5 0 0 1 .5.5v5a.5.5 0 0 1-.5.5H3a2.99 2.99 0 0 1-2.121-.879A2.99 2.99 0 0 1 0 13.044m6-.21 7.328-7.3-2.829-2.828L6 7.188v5.647zM4.5 13a1.5 1.5 0 1 0-3 0 1.5 1.5 0 0 0 3 0zM15 15v-4H9.258l-4.015 4H15zM0 .5v12.495V.5z"/>
    <path d="M0 12.995V13a3.07 3.07 0 0 0 0-.005z"/>
  </symbol>
  <symbol id="plugin" viewBox="0 0 16 16">
    <path fill-rule="evenodd" d="M1 8a7 7 0 1 1 2.898 5.673c-.167-.121-.216-.406-.002-.62l1.8-1.8a3.5 3.5 0 0 0 4.572-.328l1.414-1.415a.5.5 0 0 0 0-.707l-.707-.707 1.559-1.563a.5.5 0 1 0-.708-.706l-1.559 1.562-1.414-1.414 1.56-1.562a.5.5 0 1 0-.707-.706l-1.56 1.56-.707-.706a.5.5 0 0 0-.707 0L5.318 5.975a3.5 3.5 0 0 0-.328 4.571l-1.8 1.8c-.58.58-.62 1.6.121 2.137A8 8 0 1 0 0 8a.5.5 0 0 0 1 0Z"/>
  </symbol>
  <symbol id="plus" viewBox="0 0 16 16">
    <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z"/>
  </symbol>
  <symbol id="sun-fill" viewBox="0 0 16 16">
    <path d="M8 12a4 4 0 1 0 0-8 4 4 0 0 0 0 8zM8 0a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-1 0v-2A.5.5 0 0 1 8 0zm0 13a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-1 0v-2A.5.5 0 0 1 8 13zm8-5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1 0-1h2a.5.5 0 0 1 .5.5zM3 8a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1 0-1h2A.5.5 0 0 1 3 8zm10.657-5.657a.5.5 0 0 1 0 .707l-1.414 1.415a.5.5 0 1 1-.707-.708l1.414-1.414a.5.5 0 0 1 .707 0zm-9.193 9.193a.5.5 0 0 1 0 .707L3.05 13.657a.5.5 0 0 1-.707-.707l1.414-1.414a.5.5 0 0 1 .707 0zm9.193 2.121a.5.5 0 0 1-.707 0l-1.414-1.414a.5.5 0 0 1 .707-.707l1.414 1.414a.5.5 0 0 1 0 .707zM4.464 4.465a.5.5 0 0 1-.707 0L2.343 3.05a.5.5 0 1 1 .707-.707l1.414 1.414a.5.5 0 0 1 0 .708z"/>
  </symbol>
  <symbol id="three-dots" viewBox="0 0 16 16">
    <path d="M3 9.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3z"/>
  </symbol>
  <symbol id="tools" viewBox="0 0 16 16">
    <path d="M1 0 0 1l2.2 3.081a1 1 0 0 0 .815.419h.07a1 1 0 0 1 .708.293l2.675 2.675-2.617 2.654A3.003 3.003 0 0 0 0 13a3 3 0 1 0 5.878-.851l2.654-2.617.968.968-.305.914a1 1 0 0 0 .242 1.023l3.356 3.356a1 1 0 0 0 1.414 0l1.586-1.586a1 1 0 0 0 0-1.414l-3.356-3.356a1 1 0 0 0-1.023-.242L10.5 9.5l-.96-.96 2.68-2.643A3.005 3.005 0 0 0 16 3c0-.269-.035-.53-.102-.777l-2.14 2.141L12 4l-.364-1.757L13.777.102a3 3 0 0 0-3.675 3.68L7.462 6.46 4.793 3.793a1 1 0 0 1-.293-.707v-.071a1 1 0 0 0-.419-.814L1 0zm9.646 10.646a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1-.708.708l-3-3a.5.5 0 0 1 0-.708zM3 11l.471.242.529.026.287.445.445.287.026.529L5 13l-.242.471-.026.529-.445.287-.287.445-.529.026L3 15l-.471-.242L2 14.732l-.287-.445L1.268 14l-.026-.529L1 13l.242-.471.026-.529.445-.287.287-.445.529-.026L3 11z"/>
  </symbol>
  <symbol id="ui-radios" viewBox="0 0 16 16">
    <path d="M7 2.5a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-7a.5.5 0 0 1-.5-.5v-1zM0 12a3 3 0 1 1 6 0 3 3 0 0 1-6 0zm7-1.5a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-7a.5.5 0 0 1-.5-.5v-1zm0-5a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1-.5-.5zm0 8a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1-.5-.5zM3 1a3 3 0 1 0 0 6 3 3 0 0 0 0-6zm0 4.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3z"/>
  </symbol>
</svg>


    <header class="navbar navbar-expand-lg bd-navbar sticky-top">
  <nav class="container-xxl bd-gutter flex-wrap flex-lg-nowrap" aria-label="Main navigation">
    <div class="bd-navbar-toggle">
      <button class="navbar-toggler p-2" type="button" data-bs-toggle="offcanvas" data-bs-target="#bdSidebar" aria-controls="bdSidebar" aria-label="Toggle docs navigation">
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" class="bi" fill="currentColor" viewBox="0 0 16 16">
  <path fill-rule="evenodd" d="M2.5 11.5A.5.5 0 0 1 3 11h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4A.5.5 0 0 1 3 7h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4A.5.5 0 0 1 3 3h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"/>
</svg>

        <span class="d-none fs-6 pe-1">Browse</span>
      </button>
    </div>

    <a class="navbar-brand p-0 me-0 me-lg-2" href="/" aria-label="Bootstrap">
      <svg xmlns="http://www.w3.org/2000/svg" width="40" height="32" class="d-block my-1" viewBox="0 0 118 94" role="img"><title>Bootstrap</title><path fill-rule="evenodd" clip-rule="evenodd" d="M24.509 0c-6.733 0-11.715 5.893-11.492 12.284.214 6.14-.064 14.092-2.066 20.577C8.943 39.365 5.547 43.485 0 44.014v5.972c5.547.529 8.943 4.649 10.951 11.153 2.002 6.485 2.28 14.437 2.066 20.577C12.794 88.106 17.776 94 24.51 94H93.5c6.733 0 11.714-5.893 11.491-12.284-.214-6.14.064-14.092 2.066-20.577 2.009-6.504 5.396-10.624 10.943-11.153v-5.972c-5.547-.529-8.934-4.649-10.943-11.153-2.002-6.484-2.28-14.437-2.066-20.577C105.214 5.894 100.233 0 93.5 0H24.508zM80 57.863C80 66.663 73.436 72 62.543 72H44a2 2 0 01-2-2V24a2 2 0 012-2h18.437c9.083 0 15.044 4.92 15.044 12.474 0 5.302-4.01 10.049-9.119 10.88v.277C75.317 46.394 80 51.21 80 57.863zM60.521 28.34H49.948v14.934h8.905c6.884 0 10.68-2.772 10.68-7.727 0-4.643-3.264-7.207-9.012-7.207zM49.948 49.2v16.458H60.91c7.167 0 10.964-2.876 10.964-8.281 0-5.406-3.903-8.178-11.425-8.178H49.948z" fill="currentColor"/></svg>
    </a>

    <div class="d-flex">
      <div class="bd-search" id="docsearch" data-bd-docs-version="5.3"></div>

      <button class="navbar-toggler d-flex d-lg-none order-3 p-2" type="button" data-bs-toggle="offcanvas" data-bs-target="#bdNavbar" aria-controls="bdNavbar" aria-label="Toggle navigation">
        <svg class="bi" aria-hidden="true"><use xlink:href="#three-dots"></use></svg>
      </button>
    </div>

    <div class="offcanvas-lg offcanvas-end flex-grow-1" tabindex="-1" id="bdNavbar" aria-labelledby="bdNavbarOffcanvasLabel" data-bs-scroll="true">
      <div class="offcanvas-header px-4 pb-0">
        <h5 class="offcanvas-title text-white" id="bdNavbarOffcanvasLabel">Bootstrap</h5>
        <button type="button" class="btn-close btn-close-white" data-bs-dismiss="offcanvas" aria-label="Close" data-bs-target="#bdNavbar"></button>
      </div>

      <div class="offcanvas-body p-4 pt-0 p-lg-0">
        <hr class="d-lg-none text-white-50">
        <ul class="navbar-nav flex-row flex-wrap bd-navbar-nav">
          <li class="nav-item col-6 col-lg-auto">
            <a class="nav-link py-2 px-0 px-lg-2 active" aria-current="true" href="/docs/5.3/getting-started/introduction/" onclick="ga('send', 'event', 'Navbar', 'Community links', 'Docs');">Docs</a>
          </li>
          <li class="nav-item col-6 col-lg-auto">
            <a class="nav-link py-2 px-0 px-lg-2" href="/docs/5.3/examples/" onclick="ga('send', 'event', 'Navbar', 'Community links', 'Examples');">Examples</a>
          </li>
          <li class="nav-item col-6 col-lg-auto">
            <a class="nav-link py-2 px-0 px-lg-2" href="https://icons.getbootstrap.com/" onclick="ga('send', 'event', 'Navbar', 'Community links', 'Icons');" target="_blank" rel="noopener">Icons</a>
          </li>
          <li class="nav-item col-6 col-lg-auto">
            <a class="nav-link py-2 px-0 px-lg-2" href="https://themes.getbootstrap.com/" onclick="ga('send', 'event', 'Navbar', 'Community links', 'Themes');" target="_blank" rel="noopener">Themes</a>
          </li>
          <li class="nav-item col-6 col-lg-auto">
            <a class="nav-link py-2 px-0 px-lg-2" href="https://blog.getbootstrap.com/" onclick="ga('send', 'event', 'Navbar', 'Community links', 'Blog');" target="_blank" rel="noopener">Blog</a>
          </li>
        </ul>

        <hr class="d-lg-none text-white-50">

        <ul class="navbar-nav flex-row flex-wrap ms-md-auto">
          <li class="nav-item col-6 col-lg-auto">
            <a class="nav-link py-2 px-0 px-lg-2" href="https://github.com/twbs" target="_blank" rel="noopener">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" class="navbar-nav-svg" viewBox="0 0 512 499.36" role="img"><title>GitHub</title><path fill="currentColor" fill-rule="evenodd" d="M256 0C114.64 0 0 114.61 0 256c0 113.09 73.34 209 175.08 242.9 12.8 2.35 17.47-5.56 17.47-12.34 0-6.08-.22-22.18-.35-43.54-71.2 15.49-86.2-34.34-86.2-34.34-11.64-29.57-28.42-37.45-28.42-37.45-23.27-15.84 1.73-15.55 1.73-15.55 25.69 1.81 39.21 26.38 39.21 26.38 22.84 39.12 59.92 27.82 74.5 21.27 2.33-16.54 8.94-27.82 16.25-34.22-56.84-6.43-116.6-28.43-116.6-126.49 0-27.95 10-50.8 26.35-68.69-2.63-6.48-11.42-32.5 2.51-67.75 0 0 21.49-6.88 70.4 26.24a242.65 242.65 0 0 1 128.18 0c48.87-33.13 70.33-26.24 70.33-26.24 14 35.25 5.18 61.27 2.55 67.75 16.41 17.9 26.31 40.75 26.31 68.69 0 98.35-59.85 120-116.88 126.32 9.19 7.9 17.38 23.53 17.38 47.41 0 34.22-.31 61.83-.31 70.23 0 6.85 4.61 14.81 17.6 12.31C438.72 464.97 512 369.08 512 256.02 512 114.62 397.37 0 256 0z"/></svg>
              <small class="d-lg-none ms-2">GitHub</small>
            </a>
          </li>
          <li class="nav-item col-6 col-lg-auto">
            <a class="nav-link py-2 px-0 px-lg-2" href="https://twitter.com/getbootstrap" target="_blank" rel="noopener">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" class="navbar-nav-svg" viewBox="0 0 512 416.32" role="img"><title>Twitter</title><path fill="currentColor" d="M160.83 416.32c193.2 0 298.92-160.22 298.92-298.92 0-4.51 0-9-.2-13.52A214 214 0 0 0 512 49.38a212.93 212.93 0 0 1-60.44 16.6 105.7 105.7 0 0 0 46.3-58.19 209 209 0 0 1-66.79 25.37 105.09 105.09 0 0 0-181.73 71.91 116.12 116.12 0 0 0 2.66 24c-87.28-4.3-164.73-46.3-216.56-109.82A105.48 105.48 0 0 0 68 159.6a106.27 106.27 0 0 1-47.53-13.11v1.43a105.28 105.28 0 0 0 84.21 103.06 105.67 105.67 0 0 1-47.33 1.84 105.06 105.06 0 0 0 98.14 72.94A210.72 210.72 0 0 1 25 370.84a202.17 202.17 0 0 1-25-1.43 298.85 298.85 0 0 0 160.83 46.92"/></svg>
              <small class="d-lg-none ms-2">Twitter</small>
            </a>
          </li>
          <li class="nav-item col-6 col-lg-auto">
            <a class="nav-link py-2 px-0 px-lg-2" href="https://opencollective.com/bootstrap" target="_blank" rel="noopener">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" fill-rule="evenodd" class="navbar-nav-svg" viewBox="0 0 40 41" role="img"><title>Open Collective</title><path fill-opacity=".4" d="M32.8 21c0 2.4-.8 4.9-2 6.9l5.1 5.1c2.5-3.4 4.1-7.6 4.1-12 0-4.6-1.6-8.8-4-12.2L30.7 14c1.2 2 2 4.3 2 7z"/><path d="M20 33.7a12.8 12.8 0 0 1 0-25.6c2.6 0 5 .7 7 2.1L32 5a20 20 0 1 0 .1 31.9l-5-5.2a13 13 0 0 1-7 2z"/></svg>
              <small class="d-lg-none ms-2">Open Collective</small>
            </a>
          </li>
          <li class="nav-item py-2 py-lg-1 col-12 col-lg-auto">
            <div class="vr d-none d-lg-flex h-100 mx-lg-2 text-white"></div>
            <hr class="d-lg-none my-2 text-white-50">
          </li>

          

<li class="nav-item dropdown">
  <button type="button" class="btn btn-link nav-link py-2 px-0 px-lg-2 dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false" data-bs-display="static">
    <span class="d-lg-none" aria-hidden="true">Bootstrap</span><span class="visually-hidden">Bootstrap&nbsp;</span> v5.3 <span class="visually-hidden">(switch to other versions)</span>
  </button>
  <ul class="dropdown-menu dropdown-menu-end">
    <li><h6 class="dropdown-header">v5 releases</h6></li>
    <li>
      <a class="dropdown-item d-flex align-items-center justify-content-between active" aria-current="true" href="/docs/5.3/components/dropdowns/">
        Latest (5.3.x)
        <svg class="bi"><use xlink:href="#check2"></use></svg>
      </a>
    </li>
    <li>
        <a class="dropdown-item" href="https://getbootstrap.com/docs/5.2/components/dropdowns/">v5.2.3</a>
    </li>
    <li>
        <a class="dropdown-item" href="https://getbootstrap.com/docs/5.1/components/dropdowns/">v5.1.3</a>
    </li>
    <li>
        <a class="dropdown-item" href="https://getbootstrap.com/docs/5.0/components/dropdowns/">v5.0.2</a>
    </li>
    <li><hr class="dropdown-divider"></li>
    <li><h6 class="dropdown-header">Previous releases</h6></li>
    <li><a class="dropdown-item" href="https://getbootstrap.com/docs/4.6/">v4.6.x</a></li>
    <li><a class="dropdown-item" href="https://getbootstrap.com/docs/3.4/">v3.4.1</a></li>
    <li><a class="dropdown-item" href="https://getbootstrap.com/2.3.2/">v2.3.2</a></li>
    <li><hr class="dropdown-divider"></li>
    <li><a class="dropdown-item" href="/docs/versions/">All versions</a></li>
  </ul>
</li>


          <li class="nav-item py-2 py-lg-1 col-12 col-lg-auto">
            <div class="vr d-none d-lg-flex h-100 mx-lg-2 text-white"></div>
            <hr class="d-lg-none my-2 text-white-50">
          </li>

          <li class="nav-item dropdown">
            <button class="btn btn-link nav-link py-2 px-0 px-lg-2 dropdown-toggle d-flex align-items-center"
                    id="bd-theme"
                    type="button"
                    aria-expanded="false"
                    data-bs-toggle="dropdown"
                    data-bs-display="static"
                    aria-label="Toggle theme (auto)">
              <svg class="bi my-1 theme-icon-active"><use href="#circle-half"></use></svg>
              <span class="d-lg-none ms-2" id="bd-theme-text">Toggle theme</span>
            </button>
            <ul class="dropdown-menu dropdown-menu-end" aria-labelledby="bd-theme-text">
              <li>
                <button type="button" class="dropdown-item d-flex align-items-center" data-bs-theme-value="light" aria-pressed="false">
                  <svg class="bi me-2 opacity-50 theme-icon"><use href="#sun-fill"></use></svg>
                  Light
                  <svg class="bi ms-auto d-none"><use href="#check2"></use></svg>
                </button>
              </li>
              <li>
                <button type="button" class="dropdown-item d-flex align-items-center" data-bs-theme-value="dark" aria-pressed="false">
                  <svg class="bi me-2 opacity-50 theme-icon"><use href="#moon-stars-fill"></use></svg>
                  Dark
                  <svg class="bi ms-auto d-none"><use href="#check2"></use></svg>
                </button>
              </li>
              <li>
                <button type="button" class="dropdown-item d-flex align-items-center active" data-bs-theme-value="auto" aria-pressed="true">
                  <svg class="bi me-2 opacity-50 theme-icon"><use href="#circle-half"></use></svg>
                  Auto
                  <svg class="bi ms-auto d-none"><use href="#check2"></use></svg>
                </button>
              </li>
            </ul>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</header>


    
  <div class="container-xxl bd-gutter mt-3 my-md-4 bd-layout">
    <aside class="bd-sidebar">
      <div class="offcanvas-lg offcanvas-start" tabindex="-1" id="bdSidebar" aria-labelledby="bdSidebarOffcanvasLabel">
        <div class="offcanvas-header border-bottom">
          <h5 class="offcanvas-title" id="bdSidebarOffcanvasLabel">Browse docs</h5>
          <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close" data-bs-target="#bdSidebar"></button>
        </div>

        <div class="offcanvas-body">
          <nav class="bd-links w-100" id="bd-docs-nav" aria-label="Docs navigation"><ul class="bd-links-nav list-unstyled mb-0 pb-3 pb-md-2 pe-lg-2">
      <li class="bd-links-group py-2">
        <strong class="bd-links-heading d-flex w-100 align-items-center fw-semibold">
            <svg class="bi me-2" style="color: var(--bs-indigo);" aria-hidden="true"><use xlink:href="#book-half"></use></svg>
          Getting started
        </strong>

        <ul class="list-unstyled fw-normal pb-2 small">
            <li><a href="/docs/5.3/getting-started/introduction/" class="bd-links-link d-inline-block rounded">Introduction</a></li>
            <li><a href="/docs/5.3/getting-started/download/" class="bd-links-link d-inline-block rounded">Download</a></li>
            <li><a href="/docs/5.3/getting-started/contents/" class="bd-links-link d-inline-block rounded">Contents</a></li>
            <li><a href="/docs/5.3/getting-started/browsers-devices/" class="bd-links-link d-inline-block rounded">Browsers &amp; devices</a></li>
            <li><a href="/docs/5.3/getting-started/javascript/" class="bd-links-link d-inline-block rounded">JavaScript</a></li>
            <li><a href="/docs/5.3/getting-started/webpack/" class="bd-links-link d-inline-block rounded">Webpack</a></li>
            <li><a href="/docs/5.3/getting-started/parcel/" class="bd-links-link d-inline-block rounded">Parcel</a></li>
            <li><a href="/docs/5.3/getting-started/vite/" class="bd-links-link d-inline-block rounded">Vite</a></li>
            <li><a href="/docs/5.3/getting-started/accessibility/" class="bd-links-link d-inline-block rounded">Accessibility</a></li>
            <li><a href="/docs/5.3/getting-started/rfs/" class="bd-links-link d-inline-block rounded">RFS</a></li>
            <li><a href="/docs/5.3/getting-started/rtl/" class="bd-links-link d-inline-block rounded">RTL</a></li>
            <li><a href="/docs/5.3/getting-started/contribute/" class="bd-links-link d-inline-block rounded">Contribute</a></li>
        </ul>
      </li>
      <li class="bd-links-group py-2">
        <strong class="bd-links-heading d-flex w-100 align-items-center fw-semibold">
            <svg class="bi me-2" style="color: var(--bs-pink);" aria-hidden="true"><use xlink:href="#palette2"></use></svg>
          Customize
        </strong>

        <ul class="list-unstyled fw-normal pb-2 small">
            <li><a href="/docs/5.3/customize/overview/" class="bd-links-link d-inline-block rounded">Overview</a></li>
            <li><a href="/docs/5.3/customize/sass/" class="bd-links-link d-inline-block rounded">Sass</a></li>
            <li><a href="/docs/5.3/customize/options/" class="bd-links-link d-inline-block rounded">Options</a></li>
            <li><a href="/docs/5.3/customize/color/" class="bd-links-link d-inline-block rounded">Color</a></li>
            <li><a href="/docs/5.3/customize/color-modes/" class="bd-links-link d-inline-block rounded">Color modes</a></li>
            <li><a href="/docs/5.3/customize/components/" class="bd-links-link d-inline-block rounded">Components</a></li>
            <li><a href="/docs/5.3/customize/css-variables/" class="bd-links-link d-inline-block rounded">CSS variables</a></li>
            <li><a href="/docs/5.3/customize/optimize/" class="bd-links-link d-inline-block rounded">Optimize</a></li>
        </ul>
      </li>
      <li class="bd-links-group py-2">
        <strong class="bd-links-heading d-flex w-100 align-items-center fw-semibold">
            <svg class="bi me-2" style="color: var(--bs-teal);" aria-hidden="true"><use xlink:href="#grid-fill"></use></svg>
          Layout
        </strong>

        <ul class="list-unstyled fw-normal pb-2 small">
            <li><a href="/docs/5.3/layout/breakpoints/" class="bd-links-link d-inline-block rounded">Breakpoints</a></li>
            <li><a href="/docs/5.3/layout/containers/" class="bd-links-link d-inline-block rounded">Containers</a></li>
            <li><a href="/docs/5.3/layout/grid/" class="bd-links-link d-inline-block rounded">Grid</a></li>
            <li><a href="/docs/5.3/layout/columns/" class="bd-links-link d-inline-block rounded">Columns</a></li>
            <li><a href="/docs/5.3/layout/gutters/" class="bd-links-link d-inline-block rounded">Gutters</a></li>
            <li><a href="/docs/5.3/layout/utilities/" class="bd-links-link d-inline-block rounded">Utilities</a></li>
            <li><a href="/docs/5.3/layout/z-index/" class="bd-links-link d-inline-block rounded">Z-index</a></li>
            <li><a href="/docs/5.3/layout/css-grid/" class="bd-links-link d-inline-block rounded">CSS Grid</a></li>
        </ul>
      </li>
      <li class="bd-links-group py-2">
        <strong class="bd-links-heading d-flex w-100 align-items-center fw-semibold">
            <svg class="bi me-2" style="color: var(--bs-gray);" aria-hidden="true"><use xlink:href="#file-earmark-richtext"></use></svg>
          Content
        </strong>

        <ul class="list-unstyled fw-normal pb-2 small">
            <li><a href="/docs/5.3/content/reboot/" class="bd-links-link d-inline-block rounded">Reboot</a></li>
            <li><a href="/docs/5.3/content/typography/" class="bd-links-link d-inline-block rounded">Typography</a></li>
            <li><a href="/docs/5.3/content/images/" class="bd-links-link d-inline-block rounded">Images</a></li>
            <li><a href="/docs/5.3/content/tables/" class="bd-links-link d-inline-block rounded">Tables</a></li>
            <li><a href="/docs/5.3/content/figures/" class="bd-links-link d-inline-block rounded">Figures</a></li>
        </ul>
      </li>
      <li class="bd-links-group py-2">
        <strong class="bd-links-heading d-flex w-100 align-items-center fw-semibold">
            <svg class="bi me-2" style="color: var(--bs-blue);" aria-hidden="true"><use xlink:href="#ui-radios"></use></svg>
          Forms
        </strong>

        <ul class="list-unstyled fw-normal pb-2 small">
            <li><a href="/docs/5.3/forms/overview/" class="bd-links-link d-inline-block rounded">Overview</a></li>
            <li><a href="/docs/5.3/forms/form-control/" class="bd-links-link d-inline-block rounded">Form control</a></li>
            <li><a href="/docs/5.3/forms/select/" class="bd-links-link d-inline-block rounded">Select</a></li>
            <li><a href="/docs/5.3/forms/checks-radios/" class="bd-links-link d-inline-block rounded">Checks &amp; radios</a></li>
            <li><a href="/docs/5.3/forms/range/" class="bd-links-link d-inline-block rounded">Range</a></li>
            <li><a href="/docs/5.3/forms/input-group/" class="bd-links-link d-inline-block rounded">Input group</a></li>
            <li><a href="/docs/5.3/forms/floating-labels/" class="bd-links-link d-inline-block rounded">Floating labels</a></li>
            <li><a href="/docs/5.3/forms/layout/" class="bd-links-link d-inline-block rounded">Layout</a></li>
            <li><a href="/docs/5.3/forms/validation/" class="bd-links-link d-inline-block rounded">Validation</a></li>
        </ul>
      </li>
      <li class="bd-links-group py-2">
        <strong class="bd-links-heading d-flex w-100 align-items-center fw-semibold">
            <svg class="bi me-2" style="color: var(--bs-cyan);" aria-hidden="true"><use xlink:href="#menu-button-wide-fill"></use></svg>
          Components
        </strong>

        <ul class="list-unstyled fw-normal pb-2 small">
            <li><a href="/docs/5.3/components/accordion/" class="bd-links-link d-inline-block rounded">Accordion</a></li>
            <li><a href="/docs/5.3/components/alerts/" class="bd-links-link d-inline-block rounded">Alerts</a></li>
            <li><a href="/docs/5.3/components/badge/" class="bd-links-link d-inline-block rounded">Badge</a></li>
            <li><a href="/docs/5.3/components/breadcrumb/" class="bd-links-link d-inline-block rounded">Breadcrumb</a></li>
            <li><a href="/docs/5.3/components/buttons/" class="bd-links-link d-inline-block rounded">Buttons</a></li>
            <li><a href="/docs/5.3/components/button-group/" class="bd-links-link d-inline-block rounded">Button group</a></li>
            <li><a href="/docs/5.3/components/card/" class="bd-links-link d-inline-block rounded">Card</a></li>
            <li><a href="/docs/5.3/components/carousel/" class="bd-links-link d-inline-block rounded">Carousel</a></li>
            <li><a href="/docs/5.3/components/close-button/" class="bd-links-link d-inline-block rounded">Close button</a></li>
            <li><a href="/docs/5.3/components/collapse/" class="bd-links-link d-inline-block rounded">Collapse</a></li>
            <li><a href="/docs/5.3/components/dropdowns/" class="bd-links-link d-inline-block rounded active" aria-current="page">Dropdowns</a></li>
            <li><a href="/docs/5.3/components/list-group/" class="bd-links-link d-inline-block rounded">List group</a></li>
            <li><a href="/docs/5.3/components/modal/" class="bd-links-link d-inline-block rounded">Modal</a></li>
            <li><a href="/docs/5.3/components/navbar/" class="bd-links-link d-inline-block rounded">Navbar</a></li>
            <li><a href="/docs/5.3/components/navs-tabs/" class="bd-links-link d-inline-block rounded">Navs &amp; tabs</a></li>
            <li><a href="/docs/5.3/components/offcanvas/" class="bd-links-link d-inline-block rounded">Offcanvas</a></li>
            <li><a href="/docs/5.3/components/pagination/" class="bd-links-link d-inline-block rounded">Pagination</a></li>
            <li><a href="/docs/5.3/components/placeholders/" class="bd-links-link d-inline-block rounded">Placeholders</a></li>
            <li><a href="/docs/5.3/components/popovers/" class="bd-links-link d-inline-block rounded">Popovers</a></li>
            <li><a href="/docs/5.3/components/progress/" class="bd-links-link d-inline-block rounded">Progress</a></li>
            <li><a href="/docs/5.3/components/scrollspy/" class="bd-links-link d-inline-block rounded">Scrollspy</a></li>
            <li><a href="/docs/5.3/components/spinners/" class="bd-links-link d-inline-block rounded">Spinners</a></li>
            <li><a href="/docs/5.3/components/toasts/" class="bd-links-link d-inline-block rounded">Toasts</a></li>
            <li><a href="/docs/5.3/components/tooltips/" class="bd-links-link d-inline-block rounded">Tooltips</a></li>
        </ul>
      </li>
      <li class="bd-links-group py-2">
        <strong class="bd-links-heading d-flex w-100 align-items-center fw-semibold">
            <svg class="bi me-2" style="color: var(--bs-orange);" aria-hidden="true"><use xlink:href="#magic"></use></svg>
          Helpers
        </strong>

        <ul class="list-unstyled fw-normal pb-2 small">
            <li><a href="/docs/5.3/helpers/clearfix/" class="bd-links-link d-inline-block rounded">Clearfix</a></li>
            <li><a href="/docs/5.3/helpers/color-background/" class="bd-links-link d-inline-block rounded">Color &amp; background</a></li>
            <li><a href="/docs/5.3/helpers/colored-links/" class="bd-links-link d-inline-block rounded">Colored links</a></li>
            <li><a href="/docs/5.3/helpers/focus-ring/" class="bd-links-link d-inline-block rounded">Focus ring</a></li>
            <li><a href="/docs/5.3/helpers/icon-link/" class="bd-links-link d-inline-block rounded">Icon link</a></li>
            <li><a href="/docs/5.3/helpers/position/" class="bd-links-link d-inline-block rounded">Position</a></li>
            <li><a href="/docs/5.3/helpers/ratio/" class="bd-links-link d-inline-block rounded">Ratio</a></li>
            <li><a href="/docs/5.3/helpers/stacks/" class="bd-links-link d-inline-block rounded">Stacks</a></li>
            <li><a href="/docs/5.3/helpers/stretched-link/" class="bd-links-link d-inline-block rounded">Stretched link</a></li>
            <li><a href="/docs/5.3/helpers/text-truncation/" class="bd-links-link d-inline-block rounded">Text truncation</a></li>
            <li><a href="/docs/5.3/helpers/vertical-rule/" class="bd-links-link d-inline-block rounded">Vertical rule</a></li>
            <li><a href="/docs/5.3/helpers/visually-hidden/" class="bd-links-link d-inline-block rounded">Visually hidden</a></li>
        </ul>
      </li>
      <li class="bd-links-group py-2">
        <strong class="bd-links-heading d-flex w-100 align-items-center fw-semibold">
            <svg class="bi me-2" style="color: var(--bs-red);" aria-hidden="true"><use xlink:href="#braces-asterisk"></use></svg>
          Utilities
        </strong>

        <ul class="list-unstyled fw-normal pb-2 small">
            <li><a href="/docs/5.3/utilities/api/" class="bd-links-link d-inline-block rounded">API</a></li>
            <li><a href="/docs/5.3/utilities/background/" class="bd-links-link d-inline-block rounded">Background</a></li>
            <li><a href="/docs/5.3/utilities/borders/" class="bd-links-link d-inline-block rounded">Borders</a></li>
            <li><a href="/docs/5.3/utilities/colors/" class="bd-links-link d-inline-block rounded">Colors</a></li>
            <li><a href="/docs/5.3/utilities/display/" class="bd-links-link d-inline-block rounded">Display</a></li>
            <li><a href="/docs/5.3/utilities/flex/" class="bd-links-link d-inline-block rounded">Flex</a></li>
            <li><a href="/docs/5.3/utilities/float/" class="bd-links-link d-inline-block rounded">Float</a></li>
            <li><a href="/docs/5.3/utilities/interactions/" class="bd-links-link d-inline-block rounded">Interactions</a></li>
            <li><a href="/docs/5.3/utilities/link/" class="bd-links-link d-inline-block rounded">Link</a></li>
            <li><a href="/docs/5.3/utilities/object-fit/" class="bd-links-link d-inline-block rounded">Object fit</a></li>
            <li><a href="/docs/5.3/utilities/opacity/" class="bd-links-link d-inline-block rounded">Opacity</a></li>
            <li><a href="/docs/5.3/utilities/overflow/" class="bd-links-link d-inline-block rounded">Overflow</a></li>
            <li><a href="/docs/5.3/utilities/position/" class="bd-links-link d-inline-block rounded">Position</a></li>
            <li><a href="/docs/5.3/utilities/shadows/" class="bd-links-link d-inline-block rounded">Shadows</a></li>
            <li><a href="/docs/5.3/utilities/sizing/" class="bd-links-link d-inline-block rounded">Sizing</a></li>
            <li><a href="/docs/5.3/utilities/spacing/" class="bd-links-link d-inline-block rounded">Spacing</a></li>
            <li><a href="/docs/5.3/utilities/text/" class="bd-links-link d-inline-block rounded">Text</a></li>
            <li><a href="/docs/5.3/utilities/vertical-align/" class="bd-links-link d-inline-block rounded">Vertical align</a></li>
            <li><a href="/docs/5.3/utilities/visibility/" class="bd-links-link d-inline-block rounded">Visibility</a></li>
            <li><a href="/docs/5.3/utilities/z-index/" class="bd-links-link d-inline-block rounded">Z-index</a></li>
        </ul>
      </li>
      <li class="bd-links-group py-2">
        <strong class="bd-links-heading d-flex w-100 align-items-center fw-semibold">
            <svg class="bi me-2" style="color: var(--bs-blue);" aria-hidden="true"><use xlink:href="#tools"></use></svg>
          Extend
        </strong>

        <ul class="list-unstyled fw-normal pb-2 small">
            <li><a href="/docs/5.3/extend/approach/" class="bd-links-link d-inline-block rounded">Approach</a></li>
            <li><a href="/docs/5.3/extend/icons/" class="bd-links-link d-inline-block rounded">Icons</a></li>
        </ul>
      </li>
      <li class="bd-links-group py-2">
        <strong class="bd-links-heading d-flex w-100 align-items-center fw-semibold">
            <svg class="bi me-2" style="color: var(--bs-indigo);" aria-hidden="true"><use xlink:href="#globe2"></use></svg>
          About
        </strong>

        <ul class="list-unstyled fw-normal pb-2 small">
            <li><a href="/docs/5.3/about/overview/" class="bd-links-link d-inline-block rounded">Overview</a></li>
            <li><a href="/docs/5.3/about/team/" class="bd-links-link d-inline-block rounded">Team</a></li>
            <li><a href="/docs/5.3/about/brand/" class="bd-links-link d-inline-block rounded">Brand</a></li>
            <li><a href="/docs/5.3/about/license/" class="bd-links-link d-inline-block rounded">License</a></li>
            <li><a href="/docs/5.3/about/translations/" class="bd-links-link d-inline-block rounded">Translations</a></li>
        </ul>
      </li>
      <li class="bd-links-span-all mt-1 mb-3 mx-4 border-top"></li>
      <li class="bd-links-span-all">
        <a href="/docs/5.3/migration/" class="bd-links-link d-inline-block rounded small ">
          Migration
        </a>
      </li>
  </ul>
</nav>

        </div>
      </div>
    </aside>

    <main class="bd-main order-1">
      <div class="bd-intro pt-2 ps-lg-2">
        <div class="d-md-flex flex-md-row-reverse align-items-center justify-content-between">
          <div class="mb-3 mb-md-0 d-flex text-nowrap"><a class="btn btn-sm btn-bd-light rounded-2" href="https://github.com/twbs/bootstrap/blob/v5.3.2/site/content/docs/5.3/components/dropdowns.md" title="View and edit this file on GitHub" target="_blank" rel="noopener">
              View on GitHub
            </a>
          </div>
          <h1 class="bd-title mb-0" id="content">Dropdowns</h1>
        </div>
        <p class="bd-lead">Toggle contextual overlays for displaying lists of links and more with the Bootstrap dropdown plugin.</p>
        <script async src="https://cdn.carbonads.com/carbon.js?serve=CKYIKKJL&placement=getbootstrapcom" id="_carbonads_js"></script>

      </div>

      
        <div class="bd-toc mt-3 mb-5 my-lg-0 mb-lg-5 px-sm-1 text-body-secondary">
          <button class="btn btn-link p-md-0 mb-2 mb-md-0 text-decoration-none bd-toc-toggle d-md-none" type="button" data-bs-toggle="collapse" data-bs-target="#tocContents" aria-expanded="false" aria-controls="tocContents">
            On this page
            <svg class="bi d-md-none ms-2" aria-hidden="true"><use xlink:href="#chevron-expand"></use></svg>
          </button>
          <strong class="d-none d-md-block h6 my-2 ms-3">On this page</strong>
          <hr class="d-none d-md-block my-2 ms-3">
          <div class="collapse bd-toc-collapse" id="tocContents">
            <nav id="TableOfContents">
  <ul>
    <li><a href="#overview">Overview</a></li>
    <li><a href="#accessibility">Accessibility</a></li>
    <li><a href="#examples">Examples</a>
      <ul>
        <li><a href="#single-button">Single button</a></li>
        <li><a href="#split-button">Split button</a></li>
      </ul>
    </li>
    <li><a href="#sizing">Sizing</a></li>
    <li><a href="#dark-dropdowns">Dark dropdowns</a></li>
    <li><a href="#directions">Directions</a>
      <ul>
        <li><a href="#centered">Centered</a></li>
        <li><a href="#dropup">Dropup</a></li>
        <li><a href="#dropup-centered">Dropup centered</a></li>
        <li><a href="#dropend">Dropend</a></li>
        <li><a href="#dropstart">Dropstart</a></li>
      </ul>
    </li>
    <li><a href="#menu-items">Menu items</a>
      <ul>
        <li><a href="#active">Active</a></li>
        <li><a href="#disabled">Disabled</a></li>
      </ul>
    </li>
    <li><a href="#menu-alignment">Menu alignment</a>
      <ul>
        <li><a href="#responsive-alignment">Responsive alignment</a></li>
        <li><a href="#alignment-options">Alignment options</a></li>
      </ul>
    </li>
    <li><a href="#menu-content">Menu content</a>
      <ul>
        <li><a href="#headers">Headers</a></li>
        <li><a href="#dividers">Dividers</a></li>
        <li><a href="#text">Text</a></li>
        <li><a href="#forms">Forms</a></li>
      </ul>
    </li>
    <li><a href="#dropdown-options">Dropdown options</a>
      <ul>
        <li><a href="#auto-close-behavior">Auto close behavior</a></li>
      </ul>
    </li>
    <li><a href="#css">CSS</a>
      <ul>
        <li><a href="#variables">Variables</a></li>
        <li><a href="#sass-variables">Sass variables</a></li>
        <li><a href="#sass-mixins">Sass mixins</a></li>
      </ul>
    </li>
    <li><a href="#usage">Usage</a>
      <ul>
        <li><a href="#via-data-attributes">Via data attributes</a></li>
        <li><a href="#via-javascript">Via JavaScript</a></li>
        <li><a href="#options">Options</a>
          <ul>
            <li><a href="#using-function-with-popperconfig">Using function with <code>popperConfig</code></a></li>
          </ul>
        </li>
        <li><a href="#methods">Methods</a></li>
        <li><a href="#events">Events</a></li>
      </ul>
    </li>
  </ul>
</nav>
          </div>
        </div>
      

      <div class="bd-content ps-lg-2">
        

        <h2 id="overview">Overview <a class="anchor-link" href="#overview" aria-label="Link to this section: Overview"></a></h2>
<p>Dropdowns are toggleable, contextual overlays for displaying lists of links and more. They&rsquo;re made interactive with the included Bootstrap dropdown JavaScript plugin. They&rsquo;re toggled by clicking, not by hovering; this is <a href="https://markdotto.com/2012/02/27/bootstrap-explained-dropdowns/">an intentional design decision</a>.</p>
<p>Dropdowns are built on a third party library, <a href="https://popper.js.org/">Popper</a>, which provides dynamic positioning and viewport detection. Be sure to include <a href="https://cdn.jsdelivr.net/npm/@popperjs/core@2.11.8/dist/umd/popper.min.js">popper.min.js</a> before Bootstrap&rsquo;s JavaScript or use <code>bootstrap.bundle.min.js</code> / <code>bootstrap.bundle.js</code> which contains Popper. Popper isn&rsquo;t used to position dropdowns in navbars though as dynamic positioning isn&rsquo;t required.</p>
<h2 id="accessibility">Accessibility <a class="anchor-link" href="#accessibility" aria-label="Link to this section: Accessibility"></a></h2>
<p>The <a href="https://www.w3.org/TR/wai-aria/"><abbr title="Web Accessibility Initiative">WAI</abbr> <abbr title="Accessible Rich Internet Applications">ARIA</abbr></a> standard defines an actual <a href="https://www.w3.org/TR/wai-aria/#menu"><code>role=&quot;menu&quot;</code> widget</a>, but this is specific to application-like menus which trigger actions or functions. <abbr title="Accessible Rich Internet Applications">ARIA</abbr> menus can only contain menu items, checkbox menu items, radio button menu items, radio button groups, and sub-menus.</p>
<p>Bootstrap&rsquo;s dropdowns, on the other hand, are designed to be generic and applicable to a variety of situations and markup structures. For instance, it is possible to create dropdowns that contain additional inputs and form controls, such as search fields or login forms. For this reason, Bootstrap does not expect (nor automatically add) any of the <code>role</code> and <code>aria-</code> attributes required for true <abbr title="Accessible Rich Internet Applications">ARIA</abbr> menus. Authors will have to include these more specific attributes themselves.</p>
<p>However, Bootstrap does add built-in support for most standard keyboard menu interactions, such as the ability to move through individual <code>.dropdown-item</code> elements using the cursor keys and close the menu with the <kbd>Esc</kbd> key.</p>
<h2 id="examples">Examples <a class="anchor-link" href="#examples" aria-label="Link to this section: Examples"></a></h2>
<p>Wrap the dropdown&rsquo;s toggle (your button or link) and the dropdown menu within <code>.dropdown</code>, or another element that declares <code>position: relative;</code>. Ideally, you should use a <code>&lt;button&gt;</code> element as the dropdown trigger, but the plugin will work with <code>&lt;a&gt;</code> elements as well. The examples shown here use semantic <code>&lt;ul&gt;</code> elements where appropriate, but custom markup is supported.</p>
<h3 id="single-button">Single button <a class="anchor-link" href="#single-button" aria-label="Link to this section: Single button"></a></h3>
<p>Any single <code>.btn</code> can be turned into a dropdown toggle with some markup changes. Here&rsquo;s how you can put them to work with <code>&lt;button&gt;</code> elements:</p>
<div class="bd-example-snippet bd-code-snippet"><div class="bd-example m-0 border-0">
<div class="dropdown">
  <button class="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
    Dropdown button
  </button>
  <ul class="dropdown-menu">
    <li><a class="dropdown-item" href="#">Action</a></li>
    <li><a class="dropdown-item" href="#">Another action</a></li>
    <li><a class="dropdown-item" href="#">Something else here</a></li>
  </ul>
</div>
</div><div class="d-flex align-items-center highlight-toolbar ps-3 pe-2 py-1 border-0 border-top border-bottom">
        <small class="font-monospace text-body-secondary text-uppercase">html</small>
        <div class="d-flex ms-auto">
          <button type="button" class="btn-edit text-nowrap" title="Try it on StackBlitz">
            <svg class="bi" aria-hidden="true"><use xlink:href="#lightning-charge-fill"/></svg>
          </button>
          <button type="button" class="btn-clipboard mt-0 me-0" title="Copy to clipboard">
            <svg class="bi" aria-hidden="true"><use xlink:href="#clipboard"/></svg>
          </button>
        </div>
      </div><div class="highlight"><pre tabindex="0" class="chroma"><code class="language-html" data-lang="html"><span class="line"><span class="cl"><span class="p">&lt;</span><span class="nt">div</span> <span class="na">class</span><span class="o">=</span><span class="s">&#34;dropdown&#34;</span><span class="p">&gt;</span>
</span></span><span class="line"><span class="cl">  <span class="p">&lt;</span><span class="nt">button</span> <span class="na">class</span><span class="o">=</span><span class="s">&#34;btn btn-secondary dropdown-toggle&#34;</span> <span class="na">type</span><span class="o">=</span><span class="s">&#34;button&#34;</span> <span class="na">data-bs-toggle</span><span class="o">=</span><span class="s">&#34;dropdown&#34;</span> <span class="na">aria-expanded</span><span class="o">=</span><span class="s">&#34;false&#34;</span><span class="p">&gt;</span>
</span></span><span class="line"><span class="cl">    Dropdown button
</span></span><span class="line"><span class="cl">  <span class="p">&lt;/</span><span class="nt">button</span><span class="p">&gt;</span>
</span></span><span class="line"><span class="cl">  <span class="p">&lt;</span><span class="nt">ul</span> <span class="na">class</span><span class="o">=</span><span class="s">&#34;dropdown-menu&#34;</span><span class="p">&gt;</span>
</span></span><span class="line"><span class="cl">    <span class="p">&lt;</span><span class="nt">li</span><span class="p">&gt;&lt;</span><span class="nt">a</span> <span class="na">class</span><span class="o">=</span><span class="s">&#34;dropdown-item&#34;</span> <span class="na">href</span><span class="o">=</span><span class="s">&#34;#&#34;</span><span class="p">&gt;</span>Action<span class="p">&lt;/</span><span class="nt">a</span><span class="p">&gt;&lt;/</span><span class="nt">li</span><span class="p">&gt;</span>
</span></span><span class="line"><span class="cl">    <span class="p">&lt;</span><span class="nt">li</span><span class="p">&gt;&lt;</span><span class="nt">a</span> <span class="na">class</span><span class="o">=</span><span class="s">&#34;dropdown-item&#34;</span> <span class="na">href</span><span class="o">=</span><span class="s">&#34;#&#34;</span><span class="p">&gt;</span>Another action<span class="p">&lt;/</span><span class="nt">a</span><span class="p">&gt;&lt;/</span><span class="nt">li</span><span class="p">&gt;</span>
</span></span><span class="line"><span class="cl">    <span class="p">&lt;</span><span class="nt">li</span><span class="p">&gt;&lt;</span><span class="nt">a</span> <span class="na">class</span><span class="o">=</span><span class="s">&#34;dropdown-item&#34;</span> <span class="na">href</span><span class="o">=</span><span class="s">&#34;#&#34;</span><span class="p">&gt;</span>Something else here<span class="p">&lt;/</span><span class="nt">a</span><span class="p">&gt;&lt;/</span><span class="nt">li</span><span class="p">&gt;</span>
</span></span><span class="line"><span class="cl">  <span class="p">&lt;/</span><span class="nt">ul</span><span class="p">&gt;</span>
</span></span><span class="line"><span class="cl"><span class="p">&lt;/</span><span class="nt">div</span><span class="p">&gt;</span></span></span></code></pre></div></div>

<p>While <code>&lt;button&gt;</code> is the recommended control for a dropdown toggle, there might be situations where you have to use an <code>&lt;a&gt;</code> element. If you do, we recommend adding a <code>role=&quot;button&quot;</code> attribute to appropriately convey control&rsquo;s purpose to assistive technologies such as screen readers.</p>
<div class="bd-example-snippet bd-code-snippet"><div class="bd-example m-0 border-0">
<div class="dropdown">
  <a class="btn btn-secondary dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
    Dropdown link
  </a>

  <ul class="dropdown-menu">
    <li><a class="dropdown-item" href="#">Action</a></li>
    <li><a class="dropdown-item" href="#">Another action</a></li>
    <li><a class="dropdown-item" href="#">Something else here</a></li>
  </ul>
</div>
</div><div class="d-flex align-items-center highlight-toolbar ps-3 pe-2 py-1 border-0 border-top border-bottom">
        <small class="font-monospace text-body-secondary text-uppercase">html</small>
        <div class="d-flex ms-auto">
          <button type="button" class="btn-edit text-nowrap" title="Try it on StackBlitz">
            <svg class="bi" aria-hidden="true"><use xlink:href="#lightning-charge-fill"/></svg>
          </button>
          <button type="button" class="btn-clipboard mt-0 me-0" title="Copy to clipboard">
            <svg class="bi" aria-hidden="true"><use xlink:href="#clipboard"/></svg>
          </button>
        </div>
      </div><div class="highlight"><pre tabindex="0" class="chroma"><code class="language-html" data-lang="html"><span class="line"><span class="cl"><span class="p">&lt;</span><span class="nt">div</span> <span class="na">class</span><span class="o">=</span><span class="s">&#34;dropdown&#34;</span><span class="p">&gt;</span>
</span></span><span class="line"><span class="cl">  <span class="p">&lt;</span><span class="nt">a</span> <span class="na">class</span><span class="o">=</span><span class="s">&#34;btn btn-secondary dropdown-toggle&#34;</span> <span class="na">href</span><span class="o">=</span><span class="s">&#34;#&#34;</span> <span class="na">role</span><span class="o">=</span><span class="s">&#34;button&#34;</span> <span class="na">data-bs-toggle</span><span class="o">=</span><span class="s">&#34;dropdown&#34;</span> <span class="na">aria-expanded</span><span class="o">=</span><span class="s">&#34;false&#34;</span><span class="p">&gt;</span>
</span></span><span class="line"><span class="cl">    Dropdown link
</span></span><span class="line"><span class="cl">  <span class="p">&lt;/</span><span class="nt">a</span><span class="p">&gt;</span>
</span></span><span class="line"><span class="cl">
</span></span><span class="line"><span class="cl">  <span class="p">&lt;</span><span class="nt">ul</span> <span class="na">class</span><span class="o">=</span><span class="s">&#34;dropdown-menu&#34;</span><span class="p">&gt;</span>
</span></span><span class="line"><span class="cl">    <span class="p">&lt;</span><span class="nt">li</span><span class="p">&gt;&lt;</span><span class="nt">a</span> <span class="na">class</span><span class="o">=</span><span class="s">&#34;dropdown-item&#34;</span> <span class="na">href</span><span class="o">=</span><span class="s">&#34;#&#34;</span><span class="p">&gt;</span>Action<span class="p">&lt;/</span><span class="nt">a</span><span class="p">&gt;&lt;/</span><span class="nt">li</span><span class="p">&gt;</span>
</span></span><span class="line"><span class="cl">    <span class="p">&lt;</span><span class="nt">li</span><span class="p">&gt;&lt;</span><span class="nt">a</span> <span class="na">class</span><span class="o">=</span><span class="s">&#34;dropdown-item&#34;</span> <span class="na">href</span><span class="o">=</span><span class="s">&#34;#&#34;</span><span class="p">&gt;</span>Another action<span class="p">&lt;/</span><span class="nt">a</span><span class="p">&gt;&lt;/</span><span class="nt">li</span><span class="p">&gt;</span>
</span></span><span class="line"><span class="cl">    <span class="p">&lt;</span><span class="nt">li</span><span class="p">&gt;&lt;</span><span class="nt">a</span> <span class="na">class</span><span class="o">=</span><span class="s">&#34;dropdown-item&#34;</span> <span class="na">href</span><span class="o">=</span><span class="s">&#34;#&#34;</span><span class="p">&gt;</span>Something else here<span class="p">&lt;/</span><span class="nt">a</span><span class="p">&gt;&lt;/</span><span class="nt">li</span><span class="p">&gt;</span>
</span></span><span class="line"><span class="cl">  <span class="p">&lt;/</span><span class="nt">ul</span><span class="p">&gt;</span>
</span></span><span class="line"><span class="cl"><span class="p">&lt;/</span><span class="nt">div</span><span class="p">&gt;</span></span></span></code></pre></div></div>

<p>The best part is you can do this with any button variant, too:</p>
<div class="bd-example">
  <div class="btn-group">
    <button type="button" class="btn btn-primary dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">Primary</button>
    <ul class="dropdown-menu">
      <li><a class="dropdown-item" href="#">Action</a></li>
      <li><a class="dropdown-item" href="#">Another action</a></li>
      <li><a class="dropdown-item" href="#">Something else here</a></li>
      <li><hr class="dropdown-divider"></li>
      <li><a class="dropdown-item" href="#">Separated link</a></li>
    </ul>
  </div><!-- /btn-group -->
  <div class="btn-group">
    <button type="button" class="btn btn-secondary dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">Secondary</button>
    <ul class="dropdown-menu">
      <li><a class="dropdown-item" href="#">Action</a></li>
      <li><a class="dropdown-item" href="#">Another action</a></li>
      <li><a class="dropdown-item" href="#">Something else here</a></li>
      <li><hr class="dropdown-divider"></li>
      <li><a class="dropdown-item" href="#">Separated link</a></li>
    </ul>
  </div><!-- /btn-group -->
  <div class="btn-group">
    <button type="button" class="btn btn-success dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">Success</button>
    <ul class="dropdown-menu">
      <li><a class="dropdown-item" href="#">Action</a></li>
      <li><a class="dropdown-item" href="#">Another action</a></li>
      <li><a class="dropdown-item" href="#">Something else here</a></li>
      <li><hr class="dropdown-divider"></li>
      <li><a class="dropdown-item" href="#">Separated link</a></li>
    </ul>
  </div><!-- /btn-group -->
  <div class="btn-group">
    <button type="button" class="btn btn-info dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">Info</button>
    <ul class="dropdown-menu">
      <li><a class="dropdown-item" href="#">Action</a></li>
      <li><a class="dropdown-item" href="#">Another action</a></li>
      <li><a class="dropdown-item" href="#">Something else here</a></li>
      <li><hr class="dropdown-divider"></li>
      <li><a class="dropdown-item" href="#">Separated link</a></li>
    </ul>
  </div><!-- /btn-group -->
  <div class="btn-group">
    <button type="button" class="btn btn-warning dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">Warning</button>
    <ul class="dropdown-menu">
      <li><a class="dropdown-item" href="#">Action</a></li>
      <li><a class="dropdown-item" href="#">Another action</a></li>
      <li><a class="dropdown-item" href="#">Something else here</a></li>
      <li><hr class="dropdown-divider"></li>
      <li><a class="dropdown-item" href="#">Separated link</a></li>
    </ul>
  </div><!-- /btn-group -->
  <div class="btn-group">
    <button type="button" class="btn btn-danger dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">Danger</button>
    <ul class="dropdown-menu">
      <li><a class="dropdown-item" href="#">Action</a></li>
      <li><a class="dropdown-item" href="#">Another action</a></li>
      <li><a class="dropdown-item" href="#">Something else here</a></li>
      <li><hr class="dropdown-divider"></li>
      <li><a class="dropdown-item" href="#">Separated link</a></li>
    </ul>
  </div><!-- /btn-group -->
</div>
<div class="highlight"><pre tabindex="0" class="chroma"><code class="language-html" data-lang="html"><span class="line"><span class="cl"><span class="c">&lt;!-- Example single danger button --&gt;</span>
</span></span><span class="line"><span class="cl"><span class="p">&lt;</span><span class="nt">div</span> <span class="na">class</span><span class="o">=</span><span class="s">&#34;btn-group&#34;</span><span class="p">&gt;</span>
</span></span><span class="line"><span class="cl">  <span class="p">&lt;</span><span class="nt">button</span> <span class="na">type</span><span class="o">=</span><span class="s">&#34;button&#34;</span> <span class="na">class</span><span class="o">=</span><span class="s">&#34;btn btn-danger dropdown-toggle&#34;</span> <span class="na">data-bs-toggle</span><span class="o">=</span><span class="s">&#34;dropdown&#34;</span> <span class="na">aria-expanded</span><span class="o">=</span><span class="s">&#34;false&#34;</span><span class="p">&gt;</span>
</span></span><span class="line"><span class="cl">    Action
</span></span><span class="line"><span class="cl">  <span class="p">&lt;/</span><span class="nt">button</span><span class="p">&gt;</span>
</span></span><span class="line"><span class="cl">  <span class="p">&lt;</span><span class="nt">ul</span> <span class="na">class</span><span class="o">=</span><span class="s">&#34;dropdown-menu&#34;</span><span class="p">&gt;</span>
</span></span><span class="line"><span class="cl">    <span class="p">&lt;</span><span class="nt">li</span><span class="p">&gt;&lt;</span><span class="nt">a</span> <span class="na">class</span><span class="o">=</span><span class="s">&#34;dropdown-item&#34;</span> <span class="na">href</span><span class="o">=</span><span class="s">&#34;#&#34;</span><span class="p">&gt;</span>Action<span class="p">&lt;/</span><span class="nt">a</span><span class="p">&gt;&lt;/</span><span class="nt">li</span><span class="p">&gt;</span>
</span></span><span class="line"><span class="cl">    <span class="p">&lt;</span><span class="nt">li</span><span class="p">&gt;&lt;</span><span class="nt">a</span> <span class="na">class</span><span class="o">=</span><span class="s">&#34;dropdown-item&#34;</span> <span class="na">href</span><span class="o">=</span><span class="s">&#34;#&#34;</span><span class="p">&gt;</span>Another action<span class="p">&lt;/</span><span class="nt">a</span><span class="p">&gt;&lt;/</span><span class="nt">li</span><span class="p">&gt;</span>
</span></span><span class="line"><span class="cl">    <span class="p">&lt;</span><span class="nt">li</span><span class="p">&gt;&lt;</span><span class="nt">a</span> <span class="na">class</span><span class="o">=</span><span class="s">&#34;dropdown-item&#34;</span> <span class="na">href</span><span class="o">=</span><span class="s">&#34;#&#34;</span><span class="p">&gt;</span>Something else here<span class="p">&lt;/</span><span class="nt">a</span><span class="p">&gt;&lt;/</span><span class="nt">li</span><span class="p">&gt;</span>
</span></span><span class="line"><span class="cl">    <span class="p">&lt;</span><span class="nt">li</span><span class="p">&gt;&lt;</span><span class="nt">hr</span> <span class="na">class</span><span class="o">=</span><span class="s">&#34;dropdown-divider&#34;</span><span class="p">&gt;&lt;/</span><span class="nt">li</span><span class="p">&gt;</span>
</span></span><span class="line"><span class="cl">    <span class="p">&lt;</span><span class="nt">li</span><span class="p">&gt;&lt;</span><span class="nt">a</span> <span class="na">class</span><span class="o">=</span><span class="s">&#34;dropdown-item&#34;</span> <span class="na">href</span><span class="o">=</span><span class="s">&#34;#&#34;</span><span class="p">&gt;</span>Separated link<span class="p">&lt;/</span><span class="nt">a</span><span class="p">&gt;&lt;/</span><span class="nt">li</span><span class="p">&gt;</span>
</span></span><span class="line"><span class="cl">  <span class="p">&lt;/</span><span class="nt">ul</span><span class="p">&gt;</span>
</span></span><span class="line"><span class="cl"><span class="p">&lt;/</span><span class="nt">div</span><span class="p">&gt;</span>
</span></span></code></pre></div><h3 id="split-button">Split button <a class="anchor-link" href="#split-button" aria-label="Link to this section: Split button"></a></h3>
<p>Similarly, create split button dropdowns with virtually the same markup as single button dropdowns, but with the addition of <code>.dropdown-toggle-split</code> for proper spacing around the dropdown caret.</p>
<p>We use this extra class to reduce the horizontal <code>padding</code> on either side of the caret by 25% and remove the <code>margin-left</code> that&rsquo;s added for regular button dropdowns. Those extra changes keep the caret centered in the split button and provide a more appropriately sized hit area next to the main button.</p>
<div class="bd-example">
  <div class="btn-group">
    <button type="button" class="btn btn-primary">Primary</button>
    <button type="button" class="btn btn-primary dropdown-toggle dropdown-toggle-split" data-bs-toggle="dropdown" aria-expanded="false">
      <span class="visually-hidden">Toggle Dropdown</span>
    </button>
    <ul class="dropdown-menu">
      <li><a class="dropdown-item" href="#">Action</a></li>
      <li><a class="dropdown-item" href="#">Another action</a></li>
      <li><a class="dropdown-item" href="#">Something else here</a></li>
      <li><hr class="dropdown-divider"></li>
      <li><a class="dropdown-item" href="#">Separated link</a></li>
    </ul>
  </div><!-- /btn-group -->
  <div class="btn-group">
    <button type="button" class="btn btn-secondary">Secondary</button>
    <button type="button" class="btn btn-secondary dropdown-toggle dropdown-toggle-split" data-bs-toggle="dropdown" aria-expanded="false">
      <span class="visually-hidden">Toggle Dropdown</span>
    </button>
    <ul class="dropdown-menu">
      <li><a class="dropdown-item" href="#">Action</a></li>
      <li><a class="dropdown-item" href="#">Another action</a></li>
      <li><a class="dropdown-item" href="#">Something else here</a></li>
      <li><hr class="dropdown-divider"></li>
      <li><a class="dropdown-item" href="#">Separated link</a></li>
    </ul>
  </div><!-- /btn-group -->
  <div class="btn-group">
    <button type="button" class="btn btn-success">Success</button>
    <button type="button" class="btn btn-success dropdown-toggle dropdown-toggle-split" data-bs-toggle="dropdown" aria-expanded="false">
      <span class="visually-hidden">Toggle Dropdown</span>
    </button>
    <ul class="dropdown-menu">
      <li><a class="dropdown-item" href="#">Action</a></li>
      <li><a class="dropdown-item" href="#">Another action</a></li>
      <li><a class="dropdown-item" href="#">Something else here</a></li>
      <li><hr class="dropdown-divider"></li>
      <li><a class="dropdown-item" href="#">Separated link</a></li>
    </ul>
  </div><!-- /btn-group -->
  <div class="btn-group">
    <button type="button" class="btn btn-info">Info</button>
    <button type="button" class="btn btn-info dropdown-toggle dropdown-toggle-split" data-bs-toggle="dropdown" aria-expanded="false">
      <span class="visually-hidden">Toggle Dropdown</span>
    </button>
    <ul class="dropdown-menu">
      <li><a class="dropdown-item" href="#">Action</a></li>
      <li><a class="dropdown-item" href="#">Another action</a></li>
      <li><a class="dropdown-item" href="#">Something else here</a></li>
      <li><hr class="dropdown-divider"></li>
      <li><a class="dropdown-item" href="#">Separated link</a></li>
    </ul>
  </div><!-- /btn-group -->
  <div class="btn-group">
    <button type="button" class="btn btn-warning">Warning</button>
    <button type="button" class="btn btn-warning dropdown-toggle dropdown-toggle-split" data-bs-toggle="dropdown" aria-expanded="false">
      <span class="visually-hidden">Toggle Dropdown</span>
    </button>
    <ul class="dropdown-menu">
      <li><a class="dropdown-item" href="#">Action</a></li>
      <li><a class="dropdown-item" href="#">Another action</a></li>
      <li><a class="dropdown-item" href="#">Something else here</a></li>
      <li><hr class="dropdown-divider"></li>
      <li><a class="dropdown-item" href="#">Separated link</a></li>
    </ul>
  </div><!-- /btn-group -->
  <div class="btn-group">
    <button type="button" class="btn btn-danger">Danger</button>
    <button type="button" class="btn btn-danger dropdown-toggle dropdown-toggle-split" data-bs-toggle="dropdown" aria-expanded="false">
      <span class="visually-hidden">Toggle Dropdown</span>
    </button>
    <ul class="dropdown-menu">
      <li><a class="dropdown-item" href="#">Action</a></li>
      <li><a class="dropdown-item" href="#">Another action</a></li>
      <li><a class="dropdown-item" href="#">Something else here</a></li>
      <li><hr class="dropdown-divider"></li>
      <li><a class="dropdown-item" href="#">Separated link</a></li>
    </ul>
  </div><!-- /btn-group -->
</div>
<div class="highlight"><pre tabindex="0" class="chroma"><code class="language-html" data-lang="html"><span class="line"><span class="cl"><span class="c">&lt;!-- Example split danger button --&gt;</span>
</span></span><span class="line"><span class="cl"><span class="p">&lt;</span><span class="nt">div</span> <span class="na">class</span><span class="o">=</span><span class="s">&#34;btn-group&#34;</span><span class="p">&gt;</span>
</span></span><span class="line"><span class="cl">  <span class="p">&lt;</span><span class="nt">button</span> <span class="na">type</span><span class="o">=</span><span class="s">&#34;button&#34;</span> <span class="na">class</span><span class="o">=</span><span class="s">&#34;btn btn-danger&#34;</span><span class="p">&gt;</span>Action<span class="p">&lt;/</span><span class="nt">button</span><span class="p">&gt;</span>
</span></span><span class="line"><span class="cl">  <span class="p">&lt;</span><span class="nt">button</span> <span class="na">type</span><span class="o">=</span><span class="s">&#34;button&#34;</span> <span class="na">class</span><span class="o">=</span><span class="s">&#34;btn btn-danger dropdown-toggle dropdown-toggle-split&#34;</span> <span class="na">data-bs-toggle</span><span class="o">=</span><span class="s">&#34;dropdown&#34;</span> <span class="na">aria-expanded</span><span class="o">=</span><span class="s">&#34;false&#34;</span><span class="p">&gt;</span>
</span></span><span class="line"><span class="cl">    <span class="p">&lt;</span><span class="nt">span</span> <span class="na">class</span><span class="o">=</span><span class="s">&#34;visually-hidden&#34;</span><span class="p">&gt;</span>Toggle Dropdown<span class="p">&lt;/</span><span class="nt">span</span><span class="p">&gt;</span>
</span></span><span class="line"><span class="cl">  <span class="p">&lt;/</span><span class="nt">button</span><span class="p">&gt;</span>
</span></span><span class="line"><span class="cl">  <span class="p">&lt;</span><span class="nt">ul</span> <span class="na">class</span><span class="o">=</span><span class="s">&#34;dropdown-menu&#34;</span><span class="p">&gt;</span>
</span></span><span class="line"><span class="cl">    <span class="p">&lt;</span><span class="nt">li</span><span class="p">&gt;&lt;</span><span class="nt">a</span> <span class="na">class</span><span class="o">=</span><span class="s">&#34;dropdown-item&#34;</span> <span class="na">href</span><span class="o">=</span><span class="s">&#34;#&#34;</span><span class="p">&gt;</span>Action<span class="p">&lt;/</span><span class="nt">a</span><span class="p">&gt;&lt;/</span><span class="nt">li</span><span class="p">&gt;</span>
</span></span><span class="line"><span class="cl">    <span class="p">&lt;</span><span class="nt">li</span><span class="p">&gt;&lt;</span><span class="nt">a</span> <span class="na">class</span><span class="o">=</span><span class="s">&#34;dropdown-item&#34;</span> <span class="na">href</span><span class="o">=</span><span class="s">&#34;#&#34;</span><span class="p">&gt;</span>Another action<span class="p">&lt;/</span><span class="nt">a</span><span class="p">&gt;&lt;/</span><span class="nt">li</span><span class="p">&gt;</span>
</span></span><span class="line"><span class="cl">    <span class="p">&lt;</span><span class="nt">li</span><span class="p">&gt;&lt;</span><span class="nt">a</span> <span class="na">class</span><span class="o">=</span><span class="s">&#34;dropdown-item&#34;</span> <span class="na">href</span><span class="o">=</span><span class="s">&#34;#&#34;</span><span class="p">&gt;</span>Something else here<span class="p">&lt;/</span><span class="nt">a</span><span class="p">&gt;&lt;/</span><span class="nt">li</span><span class="p">&gt;</span>
</span></span><span class="line"><span class="cl">    <span class="p">&lt;</span><span class="nt">li</span><span class="p">&gt;&lt;</span><span class="nt">hr</span> <span class="na">class</span><span class="o">=</span><span class="s">&#34;dropdown-divider&#34;</span><span class="p">&gt;&lt;/</span><span class="nt">li</span><span class="p">&gt;</span>
</span></span><span class="line"><span class="cl">    <span class="p">&lt;</span><span class="nt">li</span><span class="p">&gt;&lt;</span><span class="nt">a</span> <span class="na">class</span><span class="o">=</span><span class="s">&#34;dropdown-item&#34;</span> <span class="na">href</span><span class="o">=</span><span class="s">&#34;#&#34;</span><span class="p">&gt;</span>Separated link<span class="p">&lt;/</span><span class="nt">a</span><span class="p">&gt;&lt;/</span><span class="nt">li</span><span class="p">&gt;</span>
</span></span><span class="line"><span class="cl">  <span class="p">&lt;/</span><span class="nt">ul</span><span class="p">&gt;</span>
</span></span><span class="line"><span class="cl"><span class="p">&lt;/</span><span class="nt">div</span><span class="p">&gt;</span>
</span></span></code></pre></div><h2 id="sizing">Sizing <a class="anchor-link" href="#sizing" aria-label="Link to this section: Sizing"></a></h2>
<p>Button dropdowns work with buttons of all sizes, including default and split dropdown buttons.</p>
<div class="bd-example">
  <div class="btn-group">
    <button class="btn btn-secondary btn-lg dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
      Large button
    </button>
    <ul class="dropdown-menu">
      <li><a class="dropdown-item" href="#">Action</a></li>
      <li><a class="dropdown-item" href="#">Another action</a></li>
      <li><a class="dropdown-item" href="#">Something else here</a></li>
      <li><hr class="dropdown-divider"></li>
      <li><a class="dropdown-item" href="#">Separated link</a></li>
    </ul>
  </div>
  <div class="btn-group">
    <button type="button" class="btn btn-lg btn-secondary">Large split button</button>
    <button type="button" class="btn btn-lg btn-secondary dropdown-toggle dropdown-toggle-split" data-bs-toggle="dropdown" aria-expanded="false">
      <span class="visually-hidden">Toggle Dropdown</span>
    </button>
    <ul class="dropdown-menu">
      <li><a class="dropdown-item" href="#">Action</a></li>
      <li><a class="dropdown-item" href="#">Another action</a></li>
      <li><a class="dropdown-item" href="#">Something else here</a></li>
      <li><hr class="dropdown-divider"></li>
      <li><a class="dropdown-item" href="#">Separated link</a></li>
    </ul>
  </div>
</div>
<div class="highlight"><pre tabindex="0" class="chroma"><code class="language-html" data-lang="html"><span class="line"><span class="cl"><span class="c">&lt;!-- Large button groups (default and split) --&gt;</span>
</span></span><span class="line"><span class="cl"><span class="p">&lt;</span><span class="nt">div</span> <span class="na">class</span><span class="o">=</span><span class="s">&#34;btn-group&#34;</span><span class="p">&gt;</span>
</span></span><span class="line"><span class="cl">  <span class="p">&lt;</span><span class="nt">button</span> <span class="na">class</span><span class="o">=</span><span class="s">&#34;btn btn-secondary btn-lg dropdown-toggle&#34;</span> <span class="na">type</span><span class="o">=</span><span class="s">&#34;button&#34;</span> <span class="na">data-bs-toggle</span><span class="o">=</span><span class="s">&#34;dropdown&#34;</span> <span class="na">aria-expanded</span><span class="o">=</span><span class="s">&#34;false&#34;</span><span class="p">&gt;</span>
</span></span><span class="line"><span class="cl">    Large button
</span></span><span class="line"><span class="cl">  <span class="p">&lt;/</span><span class="nt">button</span><span class="p">&gt;</span>
</span></span><span class="line"><span class="cl">  <span class="p">&lt;</span><span class="nt">ul</span> <span class="na">class</span><span class="o">=</span><span class="s">&#34;dropdown-menu&#34;</span><span class="p">&gt;</span>
</span></span><span class="line"><span class="cl">    ...
</span></span><span class="line"><span class="cl">  <span class="p">&lt;/</span><span class="nt">ul</span><span class="p">&gt;</span>
</span></span><span class="line"><span class="cl"><span class="p">&lt;/</span><span class="nt">div</span><span class="p">&gt;</span>
</span></span><span class="line"><span class="cl"><span class="p">&lt;</span><span class="nt">div</span> <span class="na">class</span><span class="o">=</span><span class="s">&#34;btn-group&#34;</span><span class="p">&gt;</span>
</span></span><span class="line"><span class="cl">  <span class="p">&lt;</span><span class="nt">button</span> <span class="na">class</span><span class="o">=</span><span class="s">&#34;btn btn-secondary btn-lg&#34;</span> <span class="na">type</span><span class="o">=</span><span class="s">&#34;button&#34;</span><span class="p">&gt;</span>
</span></span><span class="line"><span class="cl">    Large split button
</span></span><span class="line"><span class="cl">  <span class="p">&lt;/</span><span class="nt">button</span><span class="p">&gt;</span>
</span></span><span class="line"><span class="cl">  <span class="p">&lt;</span><span class="nt">button</span> <span class="na">type</span><span class="o">=</span><span class="s">&#34;button&#34;</span> <span class="na">class</span><span class="o">=</span><span class="s">&#34;btn btn-lg btn-secondary dropdown-toggle dropdown-toggle-split&#34;</span> <span class="na">data-bs-toggle</span><span class="o">=</span><span class="s">&#34;dropdown&#34;</span> <span class="na">aria-expanded</span><span class="o">=</span><span class="s">&#34;false&#34;</span><span class="p">&gt;</span>
</span></span><span class="line"><span class="cl">    <span class="p">&lt;</span><span class="nt">span</span> <span class="na">class</span><span class="o">=</span><span class="s">&#34;visually-hidden&#34;</span><span class="p">&gt;</span>Toggle Dropdown<span class="p">&lt;/</span><span class="nt">span</span><span class="p">&gt;</span>
</span></span><span class="line"><span class="cl">  <span class="p">&lt;/</span><span class="nt">button</span><span class="p">&gt;</span>
</span></span><span class="line"><span class="cl">  <span class="p">&lt;</span><span class="nt">ul</span> <span class="na">class</span><span class="o">=</span><span class="s">&#34;dropdown-menu&#34;</span><span class="p">&gt;</span>
</span></span><span class="line"><span class="cl">    ...
</span></span><span class="line"><span class="cl">  <span class="p">&lt;/</span><span class="nt">ul</span><span class="p">&gt;</span>
</span></span><span class="line"><span class="cl"><span class="p">&lt;/</span><span class="nt">div</span><span class="p">&gt;</span>
</span></span></code></pre></div><div class="bd-example">
  <div class="btn-group">
    <button class="btn btn-secondary btn-sm dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
      Small button
    </button>
    <ul class="dropdown-menu">
      <li><a class="dropdown-item" href="#">Action</a></li>
      <li><a class="dropdown-item" href="#">Another action</a></li>
      <li><a class="dropdown-item" href="#">Something else here</a></li>
      <li><hr class="dropdown-divider"></li>
      <li><a class="dropdown-item" href="#">Separated link</a></li>
    </ul>
  </div>
  <div class="btn-group">
    <button type="button" class="btn btn-sm btn-secondary">Small split button</button>
    <button type="button" class="btn btn-sm btn-secondary dropdown-toggle dropdown-toggle-split" data-bs-toggle="dropdown" aria-expanded="false">
      <span class="visually-hidden">Toggle Dropdown</span>
    </button>
    <ul class="dropdown-menu">
      <li><a class="dropdown-item" href="#">Action</a></li>
      <li><a class="dropdown-item" href="#">Another action</a></li>
      <li><a class="dropdown-item" href="#">Something else here</a></li>
      <li><hr class="dropdown-divider"></li>
      <li><a class="dropdown-item" href="#">Separated link</a></li>
    </ul>
  </div>
</div>
<div class="highlight"><pre tabindex="0" class="chroma"><code class="language-html" data-lang="html"><span class="line"><span class="cl"><span class="p">&lt;</span><span class="nt">div</span> <span class="na">class</span><span class="o">=</span><span class="s">&#34;btn-group&#34;</span><span class="p">&gt;</span>
</span></span><span class="line"><span class="cl">  <span class="p">&lt;</span><span class="nt">button</span> <span class="na">class</span><span class="o">=</span><span class="s">&#34;btn btn-secondary btn-sm dropdown-toggle&#34;</span> <span class="na">type</span><span class="o">=</span><span class="s">&#34;button&#34;</span> <span class="na">data-bs-toggle</span><span class="o">=</span><span class="s">&#34;dropdown&#34;</span> <span class="na">aria-expanded</span><span class="o">=</span><span class="s">&#34;false&#34;</span><span class="p">&gt;</span>
</span></span><span class="line"><span class="cl">    Small button
</span></span><span class="line"><span class="cl">  <span class="p">&lt;/</span><span class="nt">button</span><span class="p">&gt;</span>
</span></span><span class="line"><span class="cl">  <span class="p">&lt;</span><span class="nt">ul</span> <span class="na">class</span><span class="o">=</span><span class="s">&#34;dropdown-menu&#34;</span><span class="p">&gt;</span>
</span></span><span class="line"><span class="cl">    ...
</span></span><span class="line"><span class="cl">  <span class="p">&lt;/</span><span class="nt">ul</span><span class="p">&gt;</span>
</span></span><span class="line"><span class="cl"><span class="p">&lt;/</span><span class="nt">div</span><span class="p">&gt;</span>
</span></span><span class="line"><span class="cl"><span class="p">&lt;</span><span class="nt">div</span> <span class="na">class</span><span class="o">=</span><span class="s">&#34;btn-group&#34;</span><span class="p">&gt;</span>
</span></span><span class="line"><span class="cl">  <span class="p">&lt;</span><span class="nt">button</span> <span class="na">class</span><span class="o">=</span><span class="s">&#34;btn btn-secondary btn-sm&#34;</span> <span class="na">type</span><span class="o">=</span><span class="s">&#34;button&#34;</span><span class="p">&gt;</span>
</span></span><span class="line"><span class="cl">    Small split button
</span></span><span class="line"><span class="cl">  <span class="p">&lt;/</span><span class="nt">button</span><span class="p">&gt;</span>
</span></span><span class="line"><span class="cl">  <span class="p">&lt;</span><span class="nt">button</span> <span class="na">type</span><span class="o">=</span><span class="s">&#34;button&#34;</span> <span class="na">class</span><span class="o">=</span><span class="s">&#34;btn btn-sm btn-secondary dropdown-toggle dropdown-toggle-split&#34;</span> <span class="na">data-bs-toggle</span><span class="o">=</span><span class="s">&#34;dropdown&#34;</span> <span class="na">aria-expanded</span><span class="o">=</span><span class="s">&#34;false&#34;</span><span class="p">&gt;</span>
</span></span><span class="line"><span class="cl">    <span class="p">&lt;</span><span class="nt">span</span> <span class="na">class</span><span class="o">=</span><span class="s">&#34;visually-hidden&#34;</span><span class="p">&gt;</span>Toggle Dropdown<span class="p">&lt;/</span><span class="nt">span</span><span class="p">&gt;</span>
</span></span><span class="line"><span class="cl">  <span class="p">&lt;/</span><span class="nt">button</span><span class="p">&gt;</span>
</span></span><span class="line"><span class="cl">  <span class="p">&lt;</span><span class="nt">ul</span> <span class="na">class</span><span class="o">=</span><span class="s">&#34;dropdown-menu&#34;</span><span class="p">&gt;</span>
</span></span><span class="line"><span class="cl">    ...
</span></span><span class="line"><span class="cl">  <span class="p">&lt;/</span><span class="nt">ul</span><span class="p">&gt;</span>
</span></span><span class="line"><span class="cl"><span class="p">&lt;/</span><span class="nt">div</span><span class="p">&gt;</span>
</span></span></code></pre></div><h2 id="dark-dropdowns">Dark dropdowns <a class="anchor-link" href="#dark-dropdowns" aria-label="Link to this section: Dark dropdowns"></a></h2>
<small class="d-inline-flex mb-3 px-2 py-1 fw-semibold text-warning-emphasis bg-warning-subtle border border-warning-subtle rounded-2">Deprecated in v5.3.0</small>

<p>Opt into darker dropdowns to match a dark navbar or custom style by adding <code>.dropdown-menu-dark</code> onto an existing <code>.dropdown-menu</code>. No changes are required to the dropdown items.</p>
<div class="bd-callout bd-callout-warning">
  <p>
    <strong>Heads up!</strong> Dark variants for components were deprecated in v5.3.0 with the introduction of color modes. Instead of adding <code>.dropdown-menu-dark</code>, set <code>data-bs-theme="dark"</code> on the root element, a parent wrapper, or the component itself.
  </p>
</div>

<div class="bd-example-snippet bd-code-snippet"><div class="bd-example m-0 border-0">
<div class="dropdown">
  <button class="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
    Dropdown button
  </button>
  <ul class="dropdown-menu dropdown-menu-dark">
    <li><a class="dropdown-item active" href="#">Action</a></li>
    <li><a class="dropdown-item" href="#">Another action</a></li>
    <li><a class="dropdown-item" href="#">Something else here</a></li>
    <li><hr class="dropdown-divider"></li>
    <li><a class="dropdown-item" href="#">Separated link</a></li>
  </ul>
</div>
</div><div class="d-flex align-items-center highlight-toolbar ps-3 pe-2 py-1 border-0 border-top border-bottom">
        <small class="font-monospace text-body-secondary text-uppercase">html</small>
        <div class="d-flex ms-auto">
          <button type="button" class="btn-edit text-nowrap" title="Try it on StackBlitz">
            <svg class="bi" aria-hidden="true"><use xlink:href="#lightning-charge-fill"/></svg>
          </button>
          <button type="button" class="btn-clipboard mt-0 me-0" title="Copy to clipboard">
            <svg class="bi" aria-hidden="true"><use xlink:href="#clipboard"/></svg>
          </button>
        </div>
      </div><div class="highlight"><pre tabindex="0" class="chroma"><code class="language-html" data-lang="html"><span class="line"><span class="cl"><span class="p">&lt;</span><span class="nt">div</span> <span class="na">class</span><span class="o">=</span><span class="s">&#34;dropdown&#34;</span><span class="p">&gt;</span>
</span></span><span class="line"><span class="cl">  <span class="p">&lt;</span><span class="nt">button</span> <span class="na">class</span><span class="o">=</span><span class="s">&#34;btn btn-secondary dropdown-toggle&#34;</span> <span class="na">type</span><span class="o">=</span><span class="s">&#34;button&#34;</span> <span class="na">data-bs-toggle</span><span class="o">=</span><span class="s">&#34;dropdown&#34;</span> <span class="na">aria-expanded</span><span class="o">=</span><span class="s">&#34;false&#34;</span><span class="p">&gt;</span>
</span></span><span class="line"><span class="cl">    Dropdown button
</span></span><span class="line"><span class="cl">  <span class="p">&lt;/</span><span class="nt">button</span><span class="p">&gt;</span>
</span></span><span class="line"><span class="cl">  <span class="p">&lt;</span><span class="nt">ul</span> <span class="na">class</span><span class="o">=</span><span class="s">&#34;dropdown-menu dropdown-menu-dark&#34;</span><span class="p">&gt;</span>
</span></span><span class="line"><span class="cl">    <span class="p">&lt;</span><span class="nt">li</span><span class="p">&gt;&lt;</span><span class="nt">a</span> <span class="na">class</span><span class="o">=</span><span class="s">&#34;dropdown-item active&#34;</span> <span class="na">href</span><span class="o">=</span><span class="s">&#34;#&#34;</span><span class="p">&gt;</span>Action<span class="p">&lt;/</span><span class="nt">a</span><span class="p">&gt;&lt;/</span><span class="nt">li</span><span class="p">&gt;</span>
</span></span><span class="line"><span class="cl">    <span class="p">&lt;</span><span class="nt">li</span><span class="p">&gt;&lt;</span><span class="nt">a</span> <span class="na">class</span><span class="o">=</span><span class="s">&#34;dropdown-item&#34;</span> <span class="na">href</span><span class="o">=</span><span class="s">&#34;#&#34;</span><span class="p">&gt;</span>Another action<span class="p">&lt;/</span><span class="nt">a</span><span class="p">&gt;&lt;/</span><span class="nt">li</span><span class="p">&gt;</span>
</span></span><span class="line"><span class="cl">    <span class="p">&lt;</span><span class="nt">li</span><span class="p">&gt;&lt;</span><span class="nt">a</span> <span class="na">class</span><span class="o">=</span><span class="s">&#34;dropdown-item&#34;</span> <span class="na">href</span><span class="o">=</span><span class="s">&#34;#&#34;</span><span class="p">&gt;</span>Something else here<span class="p">&lt;/</span><span class="nt">a</span><span class="p">&gt;&lt;/</span><span class="nt">li</span><span class="p">&gt;</span>
</span></span><span class="line"><span class="cl">    <span class="p">&lt;</span><span class="nt">li</span><span class="p">&gt;&lt;</span><span class="nt">hr</span> <span class="na">class</span><span class="o">=</span><span class="s">&#34;dropdown-divider&#34;</span><span class="p">&gt;&lt;/</span><span class="nt">li</span><span class="p">&gt;</span>
</span></span><span class="line"><span class="cl">    <span class="p">&lt;</span><span class="nt">li</span><span class="p">&gt;&lt;</span><span class="nt">a</span> <span class="na">class</span><span class="o">=</span><span class="s">&#34;dropdown-item&#34;</span> <span class="na">href</span><span class="o">=</span><span class="s">&#34;#&#34;</span><span class="p">&gt;</span>Separated link<span class="p">&lt;/</span><span class="nt">a</span><span class="p">&gt;&lt;/</span><span class="nt">li</span><span class="p">&gt;</span>
</span></span><span class="line"><span class="cl">  <span class="p">&lt;/</span><span class="nt">ul</span><span class="p">&gt;</span>
</span></span><span class="line"><span class="cl"><span class="p">&lt;/</span><span class="nt">div</span><span class="p">&gt;</span></span></span></code></pre></div></div>

<p>And putting it to use in a navbar:</p>
<div class="bd-example-snippet bd-code-snippet"><div class="bd-example m-0 border-0">
<nav class="navbar navbar-expand-lg navbar-dark bg-dark">
  <div class="container-fluid">
    <a class="navbar-brand" href="#">Navbar</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDarkDropdown" aria-controls="navbarNavDarkDropdown" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNavDarkDropdown">
      <ul class="navbar-nav">
        <li class="nav-item dropdown">
          <button class="btn btn-dark dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
            Dropdown
          </button>
          <ul class="dropdown-menu dropdown-menu-dark">
            <li><a class="dropdown-item" href="#">Action</a></li>
            <li><a class="dropdown-item" href="#">Another action</a></li>
            <li><a class="dropdown-item" href="#">Something else here</a></li>
          </ul>
        </li>
      </ul>
    </div>
  </div>
</nav>
</div><div class="d-flex align-items-center highlight-toolbar ps-3 pe-2 py-1 border-0 border-top border-bottom">
        <small class="font-monospace text-body-secondary text-uppercase">html</small>
        <div class="d-flex ms-auto">
          <button type="button" class="btn-edit text-nowrap" title="Try it on StackBlitz">
            <svg class="bi" aria-hidden="true"><use xlink:href="#lightning-charge-fill"/></svg>
          </button>
          <button type="button" class="btn-clipboard mt-0 me-0" title="Copy to clipboard">
            <svg class="bi" aria-hidden="true"><use xlink:href="#clipboard"/></svg>
          </button>
        </div>
      </div><div class="highlight"><pre tabindex="0" class="chroma"><code class="language-html" data-lang="html"><span class="line"><span class="cl"><span class="p">&lt;</span><span class="nt">nav</span> <span class="na">class</span><span class="o">=</span><span class="s">&#34;navbar navbar-expand-lg navbar-dark bg-dark&#34;</span><span class="p">&gt;</span>
</span></span><span class="line"><span class="cl">  <span class="p">&lt;</span><span class="nt">div</span> <span class="na">class</span><span class="o">=</span><span class="s">&#34;container-fluid&#34;</span><span class="p">&gt;</span>
</span></span><span class="line"><span class="cl">    <span class="p">&lt;</span><span class="nt">a</span> <span class="na">class</span><span class="o">=</span><span class="s">&#34;navbar-brand&#34;</span> <span class="na">href</span><span class="o">=</span><span class="s">&#34;#&#34;</span><span class="p">&gt;</span>Navbar<span class="p">&lt;/</span><span class="nt">a</span><span class="p">&gt;</span>
</span></span><span class="line"><span class="cl">    <span class="p">&lt;</span><span class="nt">button</span> <span class="na">class</span><span class="o">=</span><span class="s">&#34;navbar-toggler&#34;</span> <span class="na">type</span><span class="o">=</span><span class="s">&#34;button&#34;</span> <span class="na">data-bs-toggle</span><span class="o">=</span><span class="s">&#34;collapse&#34;</span> <span class="na">data-bs-target</span><span class="o">=</span><span class="s">&#34;#navbarNavDarkDropdown&#34;</span> <span class="na">aria-controls</span><span class="o">=</span><span class="s">&#34;navbarNavDarkDropdown&#34;</span> <span class="na">aria-expanded</span><span class="o">=</span><span class="s">&#34;false&#34;</span> <span class="na">aria-label</span><span class="o">=</span><span class="s">&#34;Toggle navigation&#34;</span><span class="p">&gt;</span>
</span></span><span class="line"><span class="cl">      <span class="p">&lt;</span><span class="nt">span</span> <span class="na">class</span><span class="o">=</span><span class="s">&#34;navbar-toggler-icon&#34;</span><span class="p">&gt;&lt;/</span><span class="nt">span</span><span class="p">&gt;</span>
</span></span><span class="line"><span class="cl">    <span class="p">&lt;/</span><span class="nt">button</span><span class="p">&gt;</span>
</span></span><span class="line"><span class="cl">    <span class="p">&lt;</span><span class="nt">div</span> <span class="na">class</span><span class="o">=</span><span class="s">&#34;collapse navbar-collapse&#34;</span> <span class="na">id</span><span class="o">=</span><span class="s">&#34;navbarNavDarkDropdown&#34;</span><span class="p">&gt;</span>
</span></span><span class="line"><span class="cl">      <span class="p">&lt;</span><span class="nt">ul</span> <span class="na">class</span><span class="o">=</span><span class="s">&#34;navbar-nav&#34;</span><span class="p">&gt;</span>
</span></span><span class="line"><span class="cl">        <span class="p">&lt;</span><span class="nt">li</span> <span class="na">class</span><span class="o">=</span><span class="s">&#34;nav-item dropdown&#34;</span><span class="p">&gt;</span>
</span></span><span class="line"><span class="cl">          <span class="p">&lt;</span><span class="nt">button</span> <span class="na">class</span><span class="o">=</span><span class="s">&#34;btn btn-dark dropdown-toggle&#34;</span> <span class="na">data-bs-toggle</span><span class="o">=</span><span class="s">&#34;dropdown&#34;</span> <span class="na">aria-expanded</span><span class="o">=</span><span class="s">&#34;false&#34;</span><span class="p">&gt;</span>
</span></span><span class="line"><span class="cl">            Dropdown
</span></span><span class="line"><span class="cl">          <span class="p">&lt;/</span><span class="nt">button</span><span class="p">&gt;</span>
</span></span><span class="line"><span class="cl">          <span class="p">&lt;</span><span class="nt">ul</span> <span class="na">class</span><span class="o">=</span><span class="s">&#34;dropdown-menu dropdown-menu-dark&#34;</span><span class="p">&gt;</span>
</span></span><span class="line"><span class="cl">            <span class="p">&lt;</span><span class="nt">li</span><span class="p">&gt;&lt;</span><span class="nt">a</span> <span class="na">class</span><span class="o">=</span><span class="s">&#34;dropdown-item&#34;</span> <span class="na">href</span><span class="o">=</span><span class="s">&#34;#&#34;</span><span class="p">&gt;</span>Action<span class="p">&lt;/</span><span class="nt">a</span><span class="p">&gt;&lt;/</span><span class="nt">li</span><span class="p">&gt;</span>
</span></span><span class="line"><span class="cl">            <span class="p">&lt;</span><span class="nt">li</span><span class="p">&gt;&lt;</span><span class="nt">a</span> <span class="na">class</span><span class="o">=</span><span class="s">&#34;dropdown-item&#34;</span> <span class="na">href</span><span class="o">=</span><span class="s">&#34;#&#34;</span><span class="p">&gt;</span>Another action<span class="p">&lt;/</span><span class="nt">a</span><span class="p">&gt;&lt;/</span><span class="nt">li</span><span class="p">&gt;</span>
</span></span><span class="line"><span class="cl">            <span class="p">&lt;</span><span class="nt">li</span><span class="p">&gt;&lt;</span><span class="nt">a</span> <span class="na">class</span><span class="o">=</span><span class="s">&#34;dropdown-item&#34;</span> <span class="na">href</span><span class="o">=</span><span class="s">&#34;#&#34;</span><span class="p">&gt;</span>Something else here<span class="p">&lt;/</span><span class="nt">a</span><span class="p">&gt;&lt;/</span><span class="nt">li</span><span class="p">&gt;</span>
</span></span><span class="line"><span class="cl">          <span class="p">&lt;/</span><span class="nt">ul</span><span class="p">&gt;</span>
</span></span><span class="line"><span class="cl">        <span class="p">&lt;/</span><span class="nt">li</span><span class="p">&gt;</span>
</span></span><span class="line"><span class="cl">      <span class="p">&lt;/</span><span class="nt">ul</span><span class="p">&gt;</span>
</span></span><span class="line"><span class="cl">    <span class="p">&lt;/</span><span class="nt">div</span><span class="p">&gt;</span>
</span></span><span class="line"><span class="cl">  <span class="p">&lt;/</span><span class="nt">div</span><span class="p">&gt;</span>
</span></span><span class="line"><span class="cl"><span class="p">&lt;/</span><span class="nt">nav</span><span class="p">&gt;</span></span></span></code></pre></div></div>

<h2 id="directions">Directions <a class="anchor-link" href="#directions" aria-label="Link to this section: Directions"></a></h2>
<div class="bd-callout bd-callout-info">
<strong>Directions are flipped in RTL mode.</strong> As such, <code>.dropstart</code> will appear on the right side.
</div>

<h3 id="centered">Centered <a class="anchor-link" href="#centered" aria-label="Link to this section: Centered"></a></h3>
<p>Make the dropdown menu centered below the toggle with <code>.dropdown-center</code> on the parent element.</p>
<div class="bd-example-snippet bd-code-snippet"><div class="bd-example m-0 border-0">
<div class="dropdown-center">
  <button class="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
    Centered dropdown
  </button>
  <ul class="dropdown-menu">
    <li><a class="dropdown-item" href="#">Action</a></li>
    <li><a class="dropdown-item" href="#">Action two</a></li>
    <li><a class="dropdown-item" href="#">Action three</a></li>
  </ul>
</div>
</div><div class="d-flex align-items-center highlight-toolbar ps-3 pe-2 py-1 border-0 border-top border-bottom">
        <small class="font-monospace text-body-secondary text-uppercase">html</small>
        <div class="d-flex ms-auto">
          <button type="button" class="btn-edit text-nowrap" title="Try it on StackBlitz">
            <svg class="bi" aria-hidden="true"><use xlink:href="#lightning-charge-fill"/></svg>
          </button>
          <button type="button" class="btn-clipboard mt-0 me-0" title="Copy to clipboard">
            <svg class="bi" aria-hidden="true"><use xlink:href="#clipboard"/></svg>
          </button>
        </div>
      </div><div class="highlight"><pre tabindex="0" class="chroma"><code class="language-html" data-lang="html"><span class="line"><span class="cl"><span class="p">&lt;</span><span class="nt">div</span> <span class="na">class</span><span class="o">=</span><span class="s">&#34;dropdown-center&#34;</span><span class="p">&gt;</span>
</span></span><span class="line"><span class="cl">  <span class="p">&lt;</span><span class="nt">button</span> <span class="na">class</span><span class="o">=</span><span class="s">&#34;btn btn-secondary dropdown-toggle&#34;</span> <span class="na">type</span><span class="o">=</span><span class="s">&#34;button&#34;</span> <span class="na">data-bs-toggle</span><span class="o">=</span><span class="s">&#34;dropdown&#34;</span> <span class="na">aria-expanded</span><span class="o">=</span><span class="s">&#34;false&#34;</span><span class="p">&gt;</span>
</span></span><span class="line"><span class="cl">    Centered dropdown
</span></span><span class="line"><span class="cl">  <span class="p">&lt;/</span><span class="nt">button</span><span class="p">&gt;</span>
</span></span><span class="line"><span class="cl">  <span class="p">&lt;</span><span class="nt">ul</span> <span class="na">class</span><span class="o">=</span><span class="s">&#34;dropdown-menu&#34;</span><span class="p">&gt;</span>
</span></span><span class="line"><span class="cl">    <span class="p">&lt;</span><span class="nt">li</span><span class="p">&gt;&lt;</span><span class="nt">a</span> <span class="na">class</span><span class="o">=</span><span class="s">&#34;dropdown-item&#34;</span> <span class="na">href</span><span class="o">=</span><span class="s">&#34;#&#34;</span><span class="p">&gt;</span>Action<span class="p">&lt;/</span><span class="nt">a</span><span class="p">&gt;&lt;/</span><span class="nt">li</span><span class="p">&gt;</span>
</span></span><span class="line"><span class="cl">    <span class="p">&lt;</span><span class="nt">li</span><span class="p">&gt;&lt;</span><span class="nt">a</span> <span class="na">class</span><span class="o">=</span><span class="s">&#34;dropdown-item&#34;</span> <span class="na">href</span><span class="o">=</span><span class="s">&#34;#&#34;</span><span class="p">&gt;</span>Action two<span class="p">&lt;/</span><span class="nt">a</span><span class="p">&gt;&lt;/</span><span class="nt">li</span><span class="p">&gt;</span>
</span></span><span class="line"><span class="cl">    <span class="p">&lt;</span><span class="nt">li</span><span class="p">&gt;&lt;</span><span class="nt">a</span> <span class="na">class</span><span class="o">=</span><span class="s">&#34;dropdown-item&#34;</span> <span class="na">href</span><span class="o">=</span><span class="s">&#34;#&#34;</span><span class="p">&gt;</span>Action three<span class="p">&lt;/</span><span class="nt">a</span><span class="p">&gt;&lt;/</span><span class="nt">li</span><span class="p">&gt;</span>
</span></span><span class="line"><span class="cl">  <span class="p">&lt;/</span><span class="nt">ul</span><span class="p">&gt;</span>
</span></span><span class="line"><span class="cl"><span class="p">&lt;/</span><span class="nt">div</span><span class="p">&gt;</span></span></span></code></pre></div></div>

<h3 id="dropup">Dropup <a class="anchor-link" href="#dropup" aria-label="Link to this section: Dropup"></a></h3>
<p>Trigger dropdown menus above elements by adding <code>.dropup</code> to the parent element.</p>
<div class="bd-example">
  <div class="btn-group dropup">
    <button type="button" class="btn btn-secondary dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
      Dropup
    </button>
    <ul class="dropdown-menu">
      <li><a class="dropdown-item" href="#">Action</a></li>
      <li><a class="dropdown-item" href="#">Another action</a></li>
      <li><a class="dropdown-item" href="#">Something else here</a></li>
      <li><hr class="dropdown-divider"></li>
      <li><a class="dropdown-item" href="#">Separated link</a></li>
    </ul>
  </div>
  <div class="btn-group dropup">
    <button type="button" class="btn btn-secondary">
      Split dropup
    </button>
    <button type="button" class="btn btn-secondary dropdown-toggle dropdown-toggle-split" data-bs-toggle="dropdown" aria-expanded="false">
      <span class="visually-hidden">Toggle Dropdown</span>
    </button>
    <ul class="dropdown-menu">
      <li><a class="dropdown-item" href="#">Action</a></li>
      <li><a class="dropdown-item" href="#">Another action</a></li>
      <li><a class="dropdown-item" href="#">Something else here</a></li>
      <li><hr class="dropdown-divider"></li>
      <li><a class="dropdown-item" href="#">Separated link</a></li>
    </ul>
  </div>
</div>
<div class="highlight"><pre tabindex="0" class="chroma"><code class="language-html" data-lang="html"><span class="line"><span class="cl"><span class="c">&lt;!-- Default dropup button --&gt;</span>
</span></span><span class="line"><span class="cl"><span class="p">&lt;</span><span class="nt">div</span> <span class="na">class</span><span class="o">=</span><span class="s">&#34;btn-group dropup&#34;</span><span class="p">&gt;</span>
</span></span><span class="line"><span class="cl">  <span class="p">&lt;</span><span class="nt">button</span> <span class="na">type</span><span class="o">=</span><span class="s">&#34;button&#34;</span> <span class="na">class</span><span class="o">=</span><span class="s">&#34;btn btn-secondary dropdown-toggle&#34;</span> <span class="na">data-bs-toggle</span><span class="o">=</span><span class="s">&#34;dropdown&#34;</span> <span class="na">aria-expanded</span><span class="o">=</span><span class="s">&#34;false&#34;</span><span class="p">&gt;</span>
</span></span><span class="line"><span class="cl">    Dropup
</span></span><span class="line"><span class="cl">  <span class="p">&lt;/</span><span class="nt">button</span><span class="p">&gt;</span>
</span></span><span class="line"><span class="cl">  <span class="p">&lt;</span><span class="nt">ul</span> <span class="na">class</span><span class="o">=</span><span class="s">&#34;dropdown-menu&#34;</span><span class="p">&gt;</span>
</span></span><span class="line"><span class="cl">    <span class="c">&lt;!-- Dropdown menu links --&gt;</span>
</span></span><span class="line"><span class="cl">  <span class="p">&lt;/</span><span class="nt">ul</span><span class="p">&gt;</span>
</span></span><span class="line"><span class="cl"><span class="p">&lt;/</span><span class="nt">div</span><span class="p">&gt;</span>
</span></span><span class="line"><span class="cl">
</span></span><span class="line"><span class="cl"><span class="c">&lt;!-- Split dropup button --&gt;</span>
</span></span><span class="line"><span class="cl"><span class="p">&lt;</span><span class="nt">div</span> <span class="na">class</span><span class="o">=</span><span class="s">&#34;btn-group dropup&#34;</span><span class="p">&gt;</span>
</span></span><span class="line"><span class="cl">  <span class="p">&lt;</span><span class="nt">button</span> <span class="na">type</span><span class="o">=</span><span class="s">&#34;button&#34;</span> <span class="na">class</span><span class="o">=</span><span class="s">&#34;btn btn-secondary&#34;</span><span class="p">&gt;</span>
</span></span><span class="line"><span class="cl">    Split dropup
</span></span><span class="line"><span class="cl">  <span class="p">&lt;/</span><span class="nt">button</span><span class="p">&gt;</span>
</span></span><span class="line"><span class="cl">  <span class="p">&lt;</span><span class="nt">button</span> <span class="na">type</span><span class="o">=</span><span class="s">&#34;button&#34;</span> <span class="na">class</span><span class="o">=</span><span class="s">&#34;btn btn-secondary dropdown-toggle dropdown-toggle-split&#34;</span> <span class="na">data-bs-toggle</span><span class="o">=</span><span class="s">&#34;dropdown&#34;</span> <span class="na">aria-expanded</span><span class="o">=</span><span class="s">&#34;false&#34;</span><span class="p">&gt;</span>
</span></span><span class="line"><span class="cl">    <span class="p">&lt;</span><span class="nt">span</span> <span class="na">class</span><span class="o">=</span><span class="s">&#34;visually-hidden&#34;</span><span class="p">&gt;</span>Toggle Dropdown<span class="p">&lt;/</span><span class="nt">span</span><span class="p">&gt;</span>
</span></span><span class="line"><span class="cl">  <span class="p">&lt;/</span><span class="nt">button</span><span class="p">&gt;</span>
</span></span><span class="line"><span class="cl">  <span class="p">&lt;</span><span class="nt">ul</span> <span class="na">class</span><span class="o">=</span><span class="s">&#34;dropdown-menu&#34;</span><span class="p">&gt;</span>
</span></span><span class="line"><span class="cl">    <span class="c">&lt;!-- Dropdown menu links --&gt;</span>
</span></span><span class="line"><span class="cl">  <span class="p">&lt;/</span><span class="nt">ul</span><span class="p">&gt;</span>
</span></span><span class="line"><span class="cl"><span class="p">&lt;/</span><span class="nt">div</span><span class="p">&gt;</span>
</span></span></code></pre></div><h3 id="dropup-centered">Dropup centered <a class="anchor-link" href="#dropup-centered" aria-label="Link to this section: Dropup centered"></a></h3>
<p>Make the dropup menu centered above the toggle with <code>.dropup-center</code> on the parent element.</p>
<div class="bd-example-snippet bd-code-snippet"><div class="bd-example m-0 border-0">
<div class="dropup-center dropup">
  <button class="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
    Centered dropup
  </button>
  <ul class="dropdown-menu">
    <li><a class="dropdown-item" href="#">Action</a></li>
    <li><a class="dropdown-item" href="#">Action two</a></li>
    <li><a class="dropdown-item" href="#">Action three</a></li>
  </ul>
</div>
</div><div class="d-flex align-items-center highlight-toolbar ps-3 pe-2 py-1 border-0 border-top border-bottom">
        <small class="font-monospace text-body-secondary text-uppercase">html</small>
        <div class="d-flex ms-auto">
          <button type="button" class="btn-edit text-nowrap" title="Try it on StackBlitz">
            <svg class="bi" aria-hidden="true"><use xlink:href="#lightning-charge-fill"/></svg>
          </button>
          <button type="button" class="btn-clipboard mt-0 me-0" title="Copy to clipboard">
            <svg class="bi" aria-hidden="true"><use xlink:href="#clipboard"/></svg>
          </button>
        </div>
      </div><div class="highlight"><pre tabindex="0" class="chroma"><code class="language-html" data-lang="html"><span class="line"><span class="cl"><span class="p">&lt;</span><span class="nt">div</span> <span class="na">class</span><span class="o">=</span><span class="s">&#34;dropup-center dropup&#34;</span><span class="p">&gt;</span>
</span></span><span class="line"><span class="cl">  <span class="p">&lt;</span><span class="nt">button</span> <span class="na">class</span><span class="o">=</span><span class="s">&#34;btn btn-secondary dropdown-toggle&#34;</span> <span class="na">type</span><span class="o">=</span><span class="s">&#34;button&#34;</span> <span class="na">data-bs-toggle</span><span class="o">=</span><span class="s">&#34;dropdown&#34;</span> <span class="na">aria-expanded</span><span class="o">=</span><span class="s">&#34;false&#34;</span><span class="p">&gt;</span>
</span></span><span class="line"><span class="cl">    Centered dropup
</span></span><span class="line"><span class="cl">  <span class="p">&lt;/</span><span class="nt">button</span><span class="p">&gt;</span>
</span></span><span class="line"><span class="cl">  <span class="p">&lt;</span><span class="nt">ul</span> <span class="na">class</span><span class="o">=</span><span class="s">&#34;dropdown-menu&#34;</span><span class="p">&gt;</span>
</span></span><span class="line"><span class="cl">    <span class="p">&lt;</span><span class="nt">li</span><span class="p">&gt;&lt;</span><span class="nt">a</span> <span class="na">class</span><span class="o">=</span><span class="s">&#34;dropdown-item&#34;</span> <span class="na">href</span><span class="o">=</span><span class="s">&#34;#&#34;</span><span class="p">&gt;</span>Action<span class="p">&lt;/</span><span class="nt">a</span><span class="p">&gt;&lt;/</span><span class="nt">li</span><span class="p">&gt;</span>
</span></span><span class="line"><span class="cl">    <span class="p">&lt;</span><span class="nt">li</span><span class="p">&gt;&lt;</span><span class="nt">a</span> <span class="na">class</span><span class="o">=</span><span class="s">&#34;dropdown-item&#34;</span> <span class="na">href</span><span class="o">=</span><span class="s">&#34;#&#34;</span><span class="p">&gt;</span>Action two<span class="p">&lt;/</span><span class="nt">a</span><span class="p">&gt;&lt;/</span><span class="nt">li</span><span class="p">&gt;</span>
</span></span><span class="line"><span class="cl">    <span class="p">&lt;</span><span class="nt">li</span><span class="p">&gt;&lt;</span><span class="nt">a</span> <span class="na">class</span><span class="o">=</span><span class="s">&#34;dropdown-item&#34;</span> <span class="na">href</span><span class="o">=</span><span class="s">&#34;#&#34;</span><span class="p">&gt;</span>Action three<span class="p">&lt;/</span><span class="nt">a</span><span class="p">&gt;&lt;/</span><span class="nt">li</span><span class="p">&gt;</span>
</span></span><span class="line"><span class="cl">  <span class="p">&lt;/</span><span class="nt">ul</span><span class="p">&gt;</span>
</span></span><span class="line"><span class="cl"><span class="p">&lt;/</span><span class="nt">div</span><span class="p">&gt;</span></span></span></code></pre></div></div>

<h3 id="dropend">Dropend <a class="anchor-link" href="#dropend" aria-label="Link to this section: Dropend"></a></h3>
<p>Trigger dropdown menus at the right of the elements by adding <code>.dropend</code> to the parent element.</p>
<div class="bd-example">
  <div class="btn-group dropend">
    <button type="button" class="btn btn-secondary dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
      Dropend
    </button>
    <ul class="dropdown-menu">
      <li><a class="dropdown-item" href="#">Action</a></li>
      <li><a class="dropdown-item" href="#">Another action</a></li>
      <li><a class="dropdown-item" href="#">Something else here</a></li>
      <li><hr class="dropdown-divider"></li>
      <li><a class="dropdown-item" href="#">Separated link</a></li>
    </ul>
  </div>
  <div class="btn-group dropend">
    <button type="button" class="btn btn-secondary">
      Split dropend
    </button>
    <button type="button" class="btn btn-secondary dropdown-toggle dropdown-toggle-split" data-bs-toggle="dropdown" aria-expanded="false">
      <span class="visually-hidden">Toggle Dropend</span>
    </button>
    <ul class="dropdown-menu">
      <li><a class="dropdown-item" href="#">Action</a></li>
      <li><a class="dropdown-item" href="#">Another action</a></li>
      <li><a class="dropdown-item" href="#">Something else here</a></li>
      <li><hr class="dropdown-divider"></li>
      <li><a class="dropdown-item" href="#">Separated link</a></li>
    </ul>
  </div>
</div>
<div class="highlight"><pre tabindex="0" class="chroma"><code class="language-html" data-lang="html"><span class="line"><span class="cl"><span class="c">&lt;!-- Default dropend button --&gt;</span>
</span></span><span class="line"><span class="cl"><span class="p">&lt;</span><span class="nt">div</span> <span class="na">class</span><span class="o">=</span><span class="s">&#34;btn-group dropend&#34;</span><span class="p">&gt;</span>
</span></span><span class="line"><span class="cl">  <span class="p">&lt;</span><span class="nt">button</span> <span class="na">type</span><span class="o">=</span><span class="s">&#34;button&#34;</span> <span class="na">class</span><span class="o">=</span><span class="s">&#34;btn btn-secondary dropdown-toggle&#34;</span> <span class="na">data-bs-toggle</span><span class="o">=</span><span class="s">&#34;dropdown&#34;</span> <span class="na">aria-expanded</span><span class="o">=</span><span class="s">&#34;false&#34;</span><span class="p">&gt;</span>
</span></span><span class="line"><span class="cl">    Dropend
</span></span><span class="line"><span class="cl">  <span class="p">&lt;/</span><span class="nt">button</span><span class="p">&gt;</span>
</span></span><span class="line"><span class="cl">  <span class="p">&lt;</span><span class="nt">ul</span> <span class="na">class</span><span class="o">=</span><span class="s">&#34;dropdown-menu&#34;</span><span class="p">&gt;</span>
</span></span><span class="line"><span class="cl">    <span class="c">&lt;!-- Dropdown menu links --&gt;</span>
</span></span><span class="line"><span class="cl">  <span class="p">&lt;/</span><span class="nt">ul</span><span class="p">&gt;</span>
</span></span><span class="line"><span class="cl"><span class="p">&lt;/</span><span class="nt">div</span><span class="p">&gt;</span>
</span></span><span class="line"><span class="cl">
</span></span><span class="line"><span class="cl"><span class="c">&lt;!-- Split dropend button --&gt;</span>
</span></span><span class="line"><span class="cl"><span class="p">&lt;</span><span class="nt">div</span> <span class="na">class</span><span class="o">=</span><span class="s">&#34;btn-group dropend&#34;</span><span class="p">&gt;</span>
</span></span><span class="line"><span class="cl">  <span class="p">&lt;</span><span class="nt">button</span> <span class="na">type</span><span class="o">=</span><span class="s">&#34;button&#34;</span> <span class="na">class</span><span class="o">=</span><span class="s">&#34;btn btn-secondary&#34;</span><span class="p">&gt;</span>
</span></span><span class="line"><span class="cl">    Split dropend
</span></span><span class="line"><span class="cl">  <span class="p">&lt;/</span><span class="nt">button</span><span class="p">&gt;</span>
</span></span><span class="line"><span class="cl">  <span class="p">&lt;</span><span class="nt">button</span> <span class="na">type</span><span class="o">=</span><span class="s">&#34;button&#34;</span> <span class="na">class</span><span class="o">=</span><span class="s">&#34;btn btn-secondary dropdown-toggle dropdown-toggle-split&#34;</span> <span class="na">data-bs-toggle</span><span class="o">=</span><span class="s">&#34;dropdown&#34;</span> <span class="na">aria-expanded</span><span class="o">=</span><span class="s">&#34;false&#34;</span><span class="p">&gt;</span>
</span></span><span class="line"><span class="cl">    <span class="p">&lt;</span><span class="nt">span</span> <span class="na">class</span><span class="o">=</span><span class="s">&#34;visually-hidden&#34;</span><span class="p">&gt;</span>Toggle Dropend<span class="p">&lt;/</span><span class="nt">span</span><span class="p">&gt;</span>
</span></span><span class="line"><span class="cl">  <span class="p">&lt;/</span><span class="nt">button</span><span class="p">&gt;</span>
</span></span><span class="line"><span class="cl">  <span class="p">&lt;</span><span class="nt">ul</span> <span class="na">class</span><span class="o">=</span><span class="s">&#34;dropdown-menu&#34;</span><span class="p">&gt;</span>
</span></span><span class="line"><span class="cl">    <span class="c">&lt;!-- Dropdown menu links --&gt;</span>
</span></span><span class="line"><span class="cl">  <span class="p">&lt;/</span><span class="nt">ul</span><span class="p">&gt;</span>
</span></span><span class="line"><span class="cl"><span class="p">&lt;/</span><span class="nt">div</span><span class="p">&gt;</span>
</span></span></code></pre></div><h3 id="dropstart">Dropstart <a class="anchor-link" href="#dropstart" aria-label="Link to this section: Dropstart"></a></h3>
<p>Trigger dropdown menus at the left of the elements by adding <code>.dropstart</code> to the parent element.</p>
<div class="bd-example">
  <div class="btn-group dropstart">
    <button type="button" class="btn btn-secondary dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
      Dropstart
    </button>
    <ul class="dropdown-menu">
      <li><a class="dropdown-item" href="#">Action</a></li>
      <li><a class="dropdown-item" href="#">Another action</a></li>
      <li><a class="dropdown-item" href="#">Something else here</a></li>
      <li><hr class="dropdown-divider"></li>
      <li><a class="dropdown-item" href="#">Separated link</a></li>
    </ul>
  </div>
  <div class="btn-group dropstart">
    <button type="button" class="btn btn-secondary dropdown-toggle dropdown-toggle-split" data-bs-toggle="dropdown" aria-expanded="false">
      <span class="visually-hidden">Toggle Dropstart</span>
    </button>
    <ul class="dropdown-menu">
      <li><a class="dropdown-item" href="#">Action</a></li>
      <li><a class="dropdown-item" href="#">Another action</a></li>
      <li><a class="dropdown-item" href="#">Something else here</a></li>
      <li><hr class="dropdown-divider"></li>
      <li><a class="dropdown-item" href="#">Separated link</a></li>
    </ul>
    <button type="button" class="btn btn-secondary">
      Split dropstart
    </button>
  </div>
</div>
<div class="highlight"><pre tabindex="0" class="chroma"><code class="language-html" data-lang="html"><span class="line"><span class="cl"><span class="c">&lt;!-- Default dropstart button --&gt;</span>
</span></span><span class="line"><span class="cl"><span class="p">&lt;</span><span class="nt">div</span> <span class="na">class</span><span class="o">=</span><span class="s">&#34;btn-group dropstart&#34;</span><span class="p">&gt;</span>
</span></span><span class="line"><span class="cl">  <span class="p">&lt;</span><span class="nt">button</span> <span class="na">type</span><span class="o">=</span><span class="s">&#34;button&#34;</span> <span class="na">class</span><span class="o">=</span><span class="s">&#34;btn btn-secondary dropdown-toggle&#34;</span> <span class="na">data-bs-toggle</span><span class="o">=</span><span class="s">&#34;dropdown&#34;</span> <span class="na">aria-expanded</span><span class="o">=</span><span class="s">&#34;false&#34;</span><span class="p">&gt;</span>
</span></span><span class="line"><span class="cl">    Dropstart
</span></span><span class="line"><span class="cl">  <span class="p">&lt;/</span><span class="nt">button</span><span class="p">&gt;</span>
</span></span><span class="line"><span class="cl">  <span class="p">&lt;</span><span class="nt">ul</span> <span class="na">class</span><span class="o">=</span><span class="s">&#34;dropdown-menu&#34;</span><span class="p">&gt;</span>
</span></span><span class="line"><span class="cl">    <span class="c">&lt;!-- Dropdown menu links --&gt;</span>
</span></span><span class="line"><span class="cl">  <span class="p">&lt;/</span><span class="nt">ul</span><span class="p">&gt;</span>
</span></span><span class="line"><span class="cl"><span class="p">&lt;/</span><span class="nt">div</span><span class="p">&gt;</span>
</span></span><span class="line"><span class="cl">
</span></span><span class="line"><span class="cl"><span class="c">&lt;!-- Split dropstart button --&gt;</span>
</span></span><span class="line"><span class="cl"><span class="p">&lt;</span><span class="nt">div</span> <span class="na">class</span><span class="o">=</span><span class="s">&#34;btn-group dropstart&#34;</span><span class="p">&gt;</span>
</span></span><span class="line"><span class="cl">  <span class="p">&lt;</span><span class="nt">button</span> <span class="na">type</span><span class="o">=</span><span class="s">&#34;button&#34;</span> <span class="na">class</span><span class="o">=</span><span class="s">&#34;btn btn-secondary dropdown-toggle dropdown-toggle-split&#34;</span> <span class="na">data-bs-toggle</span><span class="o">=</span><span class="s">&#34;dropdown&#34;</span> <span class="na">aria-expanded</span><span class="o">=</span><span class="s">&#34;false&#34;</span><span class="p">&gt;</span>
</span></span><span class="line"><span class="cl">    <span class="p">&lt;</span><span class="nt">span</span> <span class="na">class</span><span class="o">=</span><span class="s">&#34;visually-hidden&#34;</span><span class="p">&gt;</span>Toggle Dropstart<span class="p">&lt;/</span><span class="nt">span</span><span class="p">&gt;</span>
</span></span><span class="line"><span class="cl">  <span class="p">&lt;/</span><span class="nt">button</span><span class="p">&gt;</span>
</span></span><span class="line"><span class="cl">  <span class="p">&lt;</span><span class="nt">ul</span> <span class="na">class</span><span class="o">=</span><span class="s">&#34;dropdown-menu&#34;</span><span class="p">&gt;</span>
</span></span><span class="line"><span class="cl">    <span class="c">&lt;!-- Dropdown menu links --&gt;</span>
</span></span><span class="line"><span class="cl">  <span class="p">&lt;/</span><span class="nt">ul</span><span class="p">&gt;</span>
</span></span><span class="line"><span class="cl">  <span class="p">&lt;</span><span class="nt">button</span> <span class="na">type</span><span class="o">=</span><span class="s">&#34;button&#34;</span> <span class="na">class</span><span class="o">=</span><span class="s">&#34;btn btn-secondary&#34;</span><span class="p">&gt;</span>
</span></span><span class="line"><span class="cl">    Split dropstart
</span></span><span class="line"><span class="cl">  <span class="p">&lt;/</span><span class="nt">button</span><span class="p">&gt;</span>
</span></span><span class="line"><span class="cl"><span class="p">&lt;/</span><span class="nt">div</span><span class="p">&gt;</span>
</span></span></code></pre></div><h2 id="menu-items">Menu items <a class="anchor-link" href="#menu-items" aria-label="Link to this section: Menu items"></a></h2>
<p>You can use <code>&lt;a&gt;</code> or <code>&lt;button&gt;</code> elements as dropdown items.</p>
<div class="bd-example-snippet bd-code-snippet"><div class="bd-example m-0 border-0">
<div class="dropdown">
  <button class="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
    Dropdown
  </button>
  <ul class="dropdown-menu">
    <li><button class="dropdown-item" type="button">Action</button></li>
    <li><button class="dropdown-item" type="button">Another action</button></li>
    <li><button class="dropdown-item" type="button">Something else here</button></li>
  </ul>
</div>
</div><div class="d-flex align-items-center highlight-toolbar ps-3 pe-2 py-1 border-0 border-top border-bottom">
        <small class="font-monospace text-body-secondary text-uppercase">html</small>
        <div class="d-flex ms-auto">
          <button type="button" class="btn-edit text-nowrap" title="Try it on StackBlitz">
            <svg class="bi" aria-hidden="true"><use xlink:href="#lightning-charge-fill"/></svg>
          </button>
          <button type="button" class="btn-clipboard mt-0 me-0" title="Copy to clipboard">
            <svg class="bi" aria-hidden="true"><use xlink:href="#clipboard"/></svg>
          </button>
        </div>
      </div><div class="highlight"><pre tabindex="0" class="chroma"><code class="language-html" data-lang="html"><span class="line"><span class="cl"><span class="p">&lt;</span><span class="nt">div</span> <span class="na">class</span><span class="o">=</span><span class="s">&#34;dropdown&#34;</span><span class="p">&gt;</span>
</span></span><span class="line"><span class="cl">  <span class="p">&lt;</span><span class="nt">button</span> <span class="na">class</span><span class="o">=</span><span class="s">&#34;btn btn-secondary dropdown-toggle&#34;</span> <span class="na">type</span><span class="o">=</span><span class="s">&#34;button&#34;</span> <span class="na">data-bs-toggle</span><span class="o">=</span><span class="s">&#34;dropdown&#34;</span> <span class="na">aria-expanded</span><span class="o">=</span><span class="s">&#34;false&#34;</span><span class="p">&gt;</span>
</span></span><span class="line"><span class="cl">    Dropdown
</span></span><span class="line"><span class="cl">  <span class="p">&lt;/</span><span class="nt">button</span><span class="p">&gt;</span>
</span></span><span class="line"><span class="cl">  <span class="p">&lt;</span><span class="nt">ul</span> <span class="na">class</span><span class="o">=</span><span class="s">&#34;dropdown-menu&#34;</span><span class="p">&gt;</span>
</span></span><span class="line"><span class="cl">    <span class="p">&lt;</span><span class="nt">li</span><span class="p">&gt;&lt;</span><span class="nt">button</span> <span class="na">class</span><span class="o">=</span><span class="s">&#34;dropdown-item&#34;</span> <span class="na">type</span><span class="o">=</span><span class="s">&#34;button&#34;</span><span class="p">&gt;</span>Action<span class="p">&lt;/</span><span class="nt">button</span><span class="p">&gt;&lt;/</span><span class="nt">li</span><span class="p">&gt;</span>
</span></span><span class="line"><span class="cl">    <span class="p">&lt;</span><span class="nt">li</span><span class="p">&gt;&lt;</span><span class="nt">button</span> <span class="na">class</span><span class="o">=</span><span class="s">&#34;dropdown-item&#34;</span> <span class="na">type</span><span class="o">=</span><span class="s">&#34;button&#34;</span><span class="p">&gt;</span>Another action<span class="p">&lt;/</span><span class="nt">button</span><span class="p">&gt;&lt;/</span><span class="nt">li</span><span class="p">&gt;</span>
</span></span><span class="line"><span class="cl">    <span class="p">&lt;</span><span class="nt">li</span><span class="p">&gt;&lt;</span><span class="nt">button</span> <span class="na">class</span><span class="o">=</span><span class="s">&#34;dropdown-item&#34;</span> <span class="na">type</span><span class="o">=</span><span class="s">&#34;button&#34;</span><span class="p">&gt;</span>Something else here<span class="p">&lt;/</span><span class="nt">button</span><span class="p">&gt;&lt;/</span><span class="nt">li</span><span class="p">&gt;</span>
</span></span><span class="line"><span class="cl">  <span class="p">&lt;/</span><span class="nt">ul</span><span class="p">&gt;</span>
</span></span><span class="line"><span class="cl"><span class="p">&lt;/</span><span class="nt">div</span><span class="p">&gt;</span></span></span></code></pre></div></div>

<p>You can also create non-interactive dropdown items with <code>.dropdown-item-text</code>. Feel free to style further with custom CSS or text utilities.</p>
<div class="bd-example-snippet bd-code-snippet"><div class="bd-example m-0 border-0">
<ul class="dropdown-menu">
  <li><span class="dropdown-item-text">Dropdown item text</span></li>
  <li><a class="dropdown-item" href="#">Action</a></li>
  <li><a class="dropdown-item" href="#">Another action</a></li>
  <li><a class="dropdown-item" href="#">Something else here</a></li>
</ul>
</div><div class="d-flex align-items-center highlight-toolbar ps-3 pe-2 py-1 border-0 border-top border-bottom">
        <small class="font-monospace text-body-secondary text-uppercase">html</small>
        <div class="d-flex ms-auto">
          <button type="button" class="btn-edit text-nowrap" title="Try it on StackBlitz">
            <svg class="bi" aria-hidden="true"><use xlink:href="#lightning-charge-fill"/></svg>
          </button>
          <button type="button" class="btn-clipboard mt-0 me-0" title="Copy to clipboard">
            <svg class="bi" aria-hidden="true"><use xlink:href="#clipboard"/></svg>
          </button>
        </div>
      </div><div class="highlight"><pre tabindex="0" class="chroma"><code class="language-html" data-lang="html"><span class="line"><span class="cl"><span class="p">&lt;</span><span class="nt">ul</span> <span class="na">class</span><span class="o">=</span><span class="s">&#34;dropdown-menu&#34;</span><span class="p">&gt;</span>
</span></span><span class="line"><span class="cl">  <span class="p">&lt;</span><span class="nt">li</span><span class="p">&gt;&lt;</span><span class="nt">span</span> <span class="na">class</span><span class="o">=</span><span class="s">&#34;dropdown-item-text&#34;</span><span class="p">&gt;</span>Dropdown item text<span class="p">&lt;/</span><span class="nt">span</span><span class="p">&gt;&lt;/</span><span class="nt">li</span><span class="p">&gt;</span>
</span></span><span class="line"><span class="cl">  <span class="p">&lt;</span><span class="nt">li</span><span class="p">&gt;&lt;</span><span class="nt">a</span> <span class="na">class</span><span class="o">=</span><span class="s">&#34;dropdown-item&#34;</span> <span class="na">href</span><span class="o">=</span><span class="s">&#34;#&#34;</span><span class="p">&gt;</span>Action<span class="p">&lt;/</span><span class="nt">a</span><span class="p">&gt;&lt;/</span><span class="nt">li</span><span class="p">&gt;</span>
</span></span><span class="line"><span class="cl">  <span class="p">&lt;</span><span class="nt">li</span><span class="p">&gt;&lt;</span><span class="nt">a</span> <span class="na">class</span><span class="o">=</span><span class="s">&#34;dropdown-item&#34;</span> <span class="na">href</span><span class="o">=</span><span class="s">&#34;#&#34;</span><span class="p">&gt;</span>Another action<span class="p">&lt;/</span><span class="nt">a</span><span class="p">&gt;&lt;/</span><span class="nt">li</span><span class="p">&gt;</span>
</span></span><span class="line"><span class="cl">  <span class="p">&lt;</span><span class="nt">li</span><span class="p">&gt;&lt;</span><span class="nt">a</span> <span class="na">class</span><span class="o">=</span><span class="s">&#34;dropdown-item&#34;</span> <span class="na">href</span><span class="o">=</span><span class="s">&#34;#&#34;</span><span class="p">&gt;</span>Something else here<span class="p">&lt;/</span><span class="nt">a</span><span class="p">&gt;&lt;/</span><span class="nt">li</span><span class="p">&gt;</span>
</span></span><span class="line"><span class="cl"><span class="p">&lt;/</span><span class="nt">ul</span><span class="p">&gt;</span></span></span></code></pre></div></div>

<h3 id="active">Active <a class="anchor-link" href="#active" aria-label="Link to this section: Active"></a></h3>
<p>Add <code>.active</code> to items in the dropdown to <strong>style them as active</strong>. To convey the active state to assistive technologies, use the <code>aria-current</code> attribute — using the <code>page</code> value for the current page, or <code>true</code> for the current item in a set.</p>
<div class="bd-example-snippet bd-code-snippet"><div class="bd-example m-0 border-0">
<ul class="dropdown-menu">
  <li><a class="dropdown-item" href="#">Regular link</a></li>
  <li><a class="dropdown-item active" href="#" aria-current="true">Active link</a></li>
  <li><a class="dropdown-item" href="#">Another link</a></li>
</ul>
</div><div class="d-flex align-items-center highlight-toolbar ps-3 pe-2 py-1 border-0 border-top border-bottom">
        <small class="font-monospace text-body-secondary text-uppercase">html</small>
        <div class="d-flex ms-auto">
          <button type="button" class="btn-edit text-nowrap" title="Try it on StackBlitz">
            <svg class="bi" aria-hidden="true"><use xlink:href="#lightning-charge-fill"/></svg>
          </button>
          <button type="button" class="btn-clipboard mt-0 me-0" title="Copy to clipboard">
            <svg class="bi" aria-hidden="true"><use xlink:href="#clipboard"/></svg>
          </button>
        </div>
      </div><div class="highlight"><pre tabindex="0" class="chroma"><code class="language-html" data-lang="html"><span class="line"><span class="cl"><span class="p">&lt;</span><span class="nt">ul</span> <span class="na">class</span><span class="o">=</span><span class="s">&#34;dropdown-menu&#34;</span><span class="p">&gt;</span>
</span></span><span class="line"><span class="cl">  <span class="p">&lt;</span><span class="nt">li</span><span class="p">&gt;&lt;</span><span class="nt">a</span> <span class="na">class</span><span class="o">=</span><span class="s">&#34;dropdown-item&#34;</span> <span class="na">href</span><span class="o">=</span><span class="s">&#34;#&#34;</span><span class="p">&gt;</span>Regular link<span class="p">&lt;/</span><span class="nt">a</span><span class="p">&gt;&lt;/</span><span class="nt">li</span><span class="p">&gt;</span>
</span></span><span class="line"><span class="cl">  <span class="p">&lt;</span><span class="nt">li</span><span class="p">&gt;&lt;</span><span class="nt">a</span> <span class="na">class</span><span class="o">=</span><span class="s">&#34;dropdown-item active&#34;</span> <span class="na">href</span><span class="o">=</span><span class="s">&#34;#&#34;</span> <span class="na">aria-current</span><span class="o">=</span><span class="s">&#34;true&#34;</span><span class="p">&gt;</span>Active link<span class="p">&lt;/</span><span class="nt">a</span><span class="p">&gt;&lt;/</span><span class="nt">li</span><span class="p">&gt;</span>
</span></span><span class="line"><span class="cl">  <span class="p">&lt;</span><span class="nt">li</span><span class="p">&gt;&lt;</span><span class="nt">a</span> <span class="na">class</span><span class="o">=</span><span class="s">&#34;dropdown-item&#34;</span> <span class="na">href</span><span class="o">=</span><span class="s">&#34;#&#34;</span><span class="p">&gt;</span>Another link<span class="p">&lt;/</span><span class="nt">a</span><span class="p">&gt;&lt;/</span><span class="nt">li</span><span class="p">&gt;</span>
</span></span><span class="line"><span class="cl"><span class="p">&lt;/</span><span class="nt">ul</span><span class="p">&gt;</span></span></span></code></pre></div></div>

<h3 id="disabled">Disabled <a class="anchor-link" href="#disabled" aria-label="Link to this section: Disabled"></a></h3>
<p>Add <code>.disabled</code> to items in the dropdown to <strong>style them as disabled</strong>.</p>
<div class="bd-example-snippet bd-code-snippet"><div class="bd-example m-0 border-0">
<ul class="dropdown-menu">
  <li><a class="dropdown-item" href="#">Regular link</a></li>
  <li><a class="dropdown-item disabled" aria-disabled="true">Disabled link</a></li>
  <li><a class="dropdown-item" href="#">Another link</a></li>
</ul>
</div><div class="d-flex align-items-center highlight-toolbar ps-3 pe-2 py-1 border-0 border-top border-bottom">
        <small class="font-monospace text-body-secondary text-uppercase">html</small>
        <div class="d-flex ms-auto">
          <button type="button" class="btn-edit text-nowrap" title="Try it on StackBlitz">
            <svg class="bi" aria-hidden="true"><use xlink:href="#lightning-charge-fill"/></svg>
          </button>
          <button type="button" class="btn-clipboard mt-0 me-0" title="Copy to clipboard">
            <svg class="bi" aria-hidden="true"><use xlink:href="#clipboard"/></svg>
          </button>
        </div>
      </div><div class="highlight"><pre tabindex="0" class="chroma"><code class="language-html" data-lang="html"><span class="line"><span class="cl"><span class="p">&lt;</span><span class="nt">ul</span> <span class="na">class</span><span class="o">=</span><span class="s">&#34;dropdown-menu&#34;</span><span class="p">&gt;</span>
</span></span><span class="line"><span class="cl">  <span class="p">&lt;</span><span class="nt">li</span><span class="p">&gt;&lt;</span><span class="nt">a</span> <span class="na">class</span><span class="o">=</span><span class="s">&#34;dropdown-item&#34;</span> <span class="na">href</span><span class="o">=</span><span class="s">&#34;#&#34;</span><span class="p">&gt;</span>Regular link<span class="p">&lt;/</span><span class="nt">a</span><span class="p">&gt;&lt;/</span><span class="nt">li</span><span class="p">&gt;</span>
</span></span><span class="line"><span class="cl">  <span class="p">&lt;</span><span class="nt">li</span><span class="p">&gt;&lt;</span><span class="nt">a</span> <span class="na">class</span><span class="o">=</span><span class="s">&#34;dropdown-item disabled&#34;</span> <span class="na">aria-disabled</span><span class="o">=</span><span class="s">&#34;true&#34;</span><span class="p">&gt;</span>Disabled link<span class="p">&lt;/</span><span class="nt">a</span><span class="p">&gt;&lt;/</span><span class="nt">li</span><span class="p">&gt;</span>
</span></span><span class="line"><span class="cl">  <span class="p">&lt;</span><span class="nt">li</span><span class="p">&gt;&lt;</span><span class="nt">a</span> <span class="na">class</span><span class="o">=</span><span class="s">&#34;dropdown-item&#34;</span> <span class="na">href</span><span class="o">=</span><span class="s">&#34;#&#34;</span><span class="p">&gt;</span>Another link<span class="p">&lt;/</span><span class="nt">a</span><span class="p">&gt;&lt;/</span><span class="nt">li</span><span class="p">&gt;</span>
</span></span><span class="line"><span class="cl"><span class="p">&lt;/</span><span class="nt">ul</span><span class="p">&gt;</span></span></span></code></pre></div></div>

<h2 id="menu-alignment">Menu alignment <a class="anchor-link" href="#menu-alignment" aria-label="Link to this section: Menu alignment"></a></h2>
<p>By default, a dropdown menu is automatically positioned 100% from the top and along the left side of its parent. You can change this with the directional <code>.drop*</code> classes, but you can also control them with additional modifier classes.</p>
<p>Add <code>.dropdown-menu-end</code> to a <code>.dropdown-menu</code> to right align the dropdown menu. Directions are mirrored when using Bootstrap in RTL, meaning <code>.dropdown-menu-end</code> will appear on the left side.</p>
<div class="bd-callout bd-callout-info">
<strong>Heads up!</strong> Dropdowns are positioned thanks to Popper except when they are contained in a navbar.
</div>

<div class="bd-example-snippet bd-code-snippet"><div class="bd-example m-0 border-0">
<div class="btn-group">
  <button type="button" class="btn btn-secondary dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
    Right-aligned menu example
  </button>
  <ul class="dropdown-menu dropdown-menu-end">
    <li><button class="dropdown-item" type="button">Action</button></li>
    <li><button class="dropdown-item" type="button">Another action</button></li>
    <li><button class="dropdown-item" type="button">Something else here</button></li>
  </ul>
</div>
</div><div class="d-flex align-items-center highlight-toolbar ps-3 pe-2 py-1 border-0 border-top border-bottom">
        <small class="font-monospace text-body-secondary text-uppercase">html</small>
        <div class="d-flex ms-auto">
          <button type="button" class="btn-edit text-nowrap" title="Try it on StackBlitz">
            <svg class="bi" aria-hidden="true"><use xlink:href="#lightning-charge-fill"/></svg>
          </button>
          <button type="button" class="btn-clipboard mt-0 me-0" title="Copy to clipboard">
            <svg class="bi" aria-hidden="true"><use xlink:href="#clipboard"/></svg>
          </button>
        </div>
      </div><div class="highlight"><pre tabindex="0" class="chroma"><code class="language-html" data-lang="html"><span class="line"><span class="cl"><span class="p">&lt;</span><span class="nt">div</span> <span class="na">class</span><span class="o">=</span><span class="s">&#34;btn-group&#34;</span><span class="p">&gt;</span>
</span></span><span class="line"><span class="cl">  <span class="p">&lt;</span><span class="nt">button</span> <span class="na">type</span><span class="o">=</span><span class="s">&#34;button&#34;</span> <span class="na">class</span><span class="o">=</span><span class="s">&#34;btn btn-secondary dropdown-toggle&#34;</span> <span class="na">data-bs-toggle</span><span class="o">=</span><span class="s">&#34;dropdown&#34;</span> <span class="na">aria-expanded</span><span class="o">=</span><span class="s">&#34;false&#34;</span><span class="p">&gt;</span>
</span></span><span class="line"><span class="cl">    Right-aligned menu example
</span></span><span class="line"><span class="cl">  <span class="p">&lt;/</span><span class="nt">button</span><span class="p">&gt;</span>
</span></span><span class="line"><span class="cl">  <span class="p">&lt;</span><span class="nt">ul</span> <span class="na">class</span><span class="o">=</span><span class="s">&#34;dropdown-menu dropdown-menu-end&#34;</span><span class="p">&gt;</span>
</span></span><span class="line"><span class="cl">    <span class="p">&lt;</span><span class="nt">li</span><span class="p">&gt;&lt;</span><span class="nt">button</span> <span class="na">class</span><span class="o">=</span><span class="s">&#34;dropdown-item&#34;</span> <span class="na">type</span><span class="o">=</span><span class="s">&#34;button&#34;</span><span class="p">&gt;</span>Action<span class="p">&lt;/</span><span class="nt">button</span><span class="p">&gt;&lt;/</span><span class="nt">li</span><span class="p">&gt;</span>
</span></span><span class="line"><span class="cl">    <span class="p">&lt;</span><span class="nt">li</span><span class="p">&gt;&lt;</span><span class="nt">button</span> <span class="na">class</span><span class="o">=</span><span class="s">&#34;dropdown-item&#34;</span> <span class="na">type</span><span class="o">=</span><span class="s">&#34;button&#34;</span><span class="p">&gt;</span>Another action<span class="p">&lt;/</span><span class="nt">button</span><span class="p">&gt;&lt;/</span><span class="nt">li</span><span class="p">&gt;</span>
</span></span><span class="line"><span class="cl">    <span class="p">&lt;</span><span class="nt">li</span><span class="p">&gt;&lt;</span><span class="nt">button</span> <span class="na">class</span><span class="o">=</span><span class="s">&#34;dropdown-item&#34;</span> <span class="na">type</span><span class="o">=</span><span class="s">&#34;button&#34;</span><span class="p">&gt;</span>Something else here<span class="p">&lt;/</span><span class="nt">button</span><span class="p">&gt;&lt;/</span><span class="nt">li</span><span class="p">&gt;</span>
</span></span><span class="line"><span class="cl">  <span class="p">&lt;/</span><span class="nt">ul</span><span class="p">&gt;</span>
</span></span><span class="line"><span class="cl"><span class="p">&lt;/</span><span class="nt">div</span><span class="p">&gt;</span></span></span></code></pre></div></div>

<h3 id="responsive-alignment">Responsive alignment <a class="anchor-link" href="#responsive-alignment" aria-label="Link to this section: Responsive alignment"></a></h3>
<p>If you want to use responsive alignment, disable dynamic positioning by adding the <code>data-bs-display=&quot;static&quot;</code> attribute and use the responsive variation classes.</p>
<p>To align <strong>right</strong> the dropdown menu with the given breakpoint or larger, add <code>.dropdown-menu{-sm|-md|-lg|-xl|-xxl}-end</code>.</p>
<div class="bd-example-snippet bd-code-snippet"><div class="bd-example m-0 border-0">
<div class="btn-group">
  <button type="button" class="btn btn-secondary dropdown-toggle" data-bs-toggle="dropdown" data-bs-display="static" aria-expanded="false">
    Left-aligned but right aligned when large screen
  </button>
  <ul class="dropdown-menu dropdown-menu-lg-end">
    <li><button class="dropdown-item" type="button">Action</button></li>
    <li><button class="dropdown-item" type="button">Another action</button></li>
    <li><button class="dropdown-item" type="button">Something else here</button></li>
  </ul>
</div>
</div><div class="d-flex align-items-center highlight-toolbar ps-3 pe-2 py-1 border-0 border-top border-bottom">
        <small class="font-monospace text-body-secondary text-uppercase">html</small>
        <div class="d-flex ms-auto">
          <button type="button" class="btn-edit text-nowrap" title="Try it on StackBlitz">
            <svg class="bi" aria-hidden="true"><use xlink:href="#lightning-charge-fill"/></svg>
          </button>
          <button type="button" class="btn-clipboard mt-0 me-0" title="Copy to clipboard">
            <svg class="bi" aria-hidden="true"><use xlink:href="#clipboard"/></svg>
          </button>
        </div>
      </div><div class="highlight"><pre tabindex="0" class="chroma"><code class="language-html" data-lang="html"><span class="line"><span class="cl"><span class="p">&lt;</span><span class="nt">div</span> <span class="na">class</span><span class="o">=</span><span class="s">&#34;btn-group&#34;</span><span class="p">&gt;</span>
</span></span><span class="line"><span class="cl">  <span class="p">&lt;</span><span class="nt">button</span> <span class="na">type</span><span class="o">=</span><span class="s">&#34;button&#34;</span> <span class="na">class</span><span class="o">=</span><span class="s">&#34;btn btn-secondary dropdown-toggle&#34;</span> <span class="na">data-bs-toggle</span><span class="o">=</span><span class="s">&#34;dropdown&#34;</span> <span class="na">data-bs-display</span><span class="o">=</span><span class="s">&#34;static&#34;</span> <span class="na">aria-expanded</span><span class="o">=</span><span class="s">&#34;false&#34;</span><span class="p">&gt;</span>
</span></span><span class="line"><span class="cl">    Left-aligned but right aligned when large screen
</span></span><span class="line"><span class="cl">  <span class="p">&lt;/</span><span class="nt">button</span><span class="p">&gt;</span>
</span></span><span class="line"><span class="cl">  <span class="p">&lt;</span><span class="nt">ul</span> <span class="na">class</span><span class="o">=</span><span class="s">&#34;dropdown-menu dropdown-menu-lg-end&#34;</span><span class="p">&gt;</span>
</span></span><span class="line"><span class="cl">    <span class="p">&lt;</span><span class="nt">li</span><span class="p">&gt;&lt;</span><span class="nt">button</span> <span class="na">class</span><span class="o">=</span><span class="s">&#34;dropdown-item&#34;</span> <span class="na">type</span><span class="o">=</span><span class="s">&#34;button&#34;</span><span class="p">&gt;</span>Action<span class="p">&lt;/</span><span class="nt">button</span><span class="p">&gt;&lt;/</span><span class="nt">li</span><span class="p">&gt;</span>
</span></span><span class="line"><span class="cl">    <span class="p">&lt;</span><span class="nt">li</span><span class="p">&gt;&lt;</span><span class="nt">button</span> <span class="na">class</span><span class="o">=</span><span class="s">&#34;dropdown-item&#34;</span> <span class="na">type</span><span class="o">=</span><span class="s">&#34;button&#34;</span><span class="p">&gt;</span>Another action<span class="p">&lt;/</span><span class="nt">button</span><span class="p">&gt;&lt;/</span><span class="nt">li</span><span class="p">&gt;</span>
</span></span><span class="line"><span class="cl">    <span class="p">&lt;</span><span class="nt">li</span><span class="p">&gt;&lt;</span><span class="nt">button</span> <span class="na">class</span><span class="o">=</span><span class="s">&#34;dropdown-item&#34;</span> <span class="na">type</span><span class="o">=</span><span class="s">&#34;button&#34;</span><span class="p">&gt;</span>Something else here<span class="p">&lt;/</span><span class="nt">button</span><span class="p">&gt;&lt;/</span><span class="nt">li</span><span class="p">&gt;</span>
</span></span><span class="line"><span class="cl">  <span class="p">&lt;/</span><span class="nt">ul</span><span class="p">&gt;</span>
</span></span><span class="line"><span class="cl"><span class="p">&lt;/</span><span class="nt">div</span><span class="p">&gt;</span></span></span></code></pre></div></div>

<p>To align <strong>left</strong> the dropdown menu with the given breakpoint or larger, add <code>.dropdown-menu-end</code> and <code>.dropdown-menu{-sm|-md|-lg|-xl|-xxl}-start</code>.</p>
<div class="bd-example-snippet bd-code-snippet"><div class="bd-example m-0 border-0">
<div class="btn-group">
  <button type="button" class="btn btn-secondary dropdown-toggle" data-bs-toggle="dropdown" data-bs-display="static" aria-expanded="false">
    Right-aligned but left aligned when large screen
  </button>
  <ul class="dropdown-menu dropdown-menu-end dropdown-menu-lg-start">
    <li><button class="dropdown-item" type="button">Action</button></li>
    <li><button class="dropdown-item" type="button">Another action</button></li>
    <li><button class="dropdown-item" type="button">Something else here</button></li>
  </ul>
</div>
</div><div class="d-flex align-items-center highlight-toolbar ps-3 pe-2 py-1 border-0 border-top border-bottom">
        <small class="font-monospace text-body-secondary text-uppercase">html</small>
        <div class="d-flex ms-auto">
          <button type="button" class="btn-edit text-nowrap" title="Try it on StackBlitz">
            <svg class="bi" aria-hidden="true"><use xlink:href="#lightning-charge-fill"/></svg>
          </button>
          <button type="button" class="btn-clipboard mt-0 me-0" title="Copy to clipboard">
            <svg class="bi" aria-hidden="true"><use xlink:href="#clipboard"/></svg>
          </button>
        </div>
      </div><div class="highlight"><pre tabindex="0" class="chroma"><code class="language-html" data-lang="html"><span class="line"><span class="cl"><span class="p">&lt;</span><span class="nt">div</span> <span class="na">class</span><span class="o">=</span><span class="s">&#34;btn-group&#34;</span><span class="p">&gt;</span>
</span></span><span class="line"><span class="cl">  <span class="p">&lt;</span><span class="nt">button</span> <span class="na">type</span><span class="o">=</span><span class="s">&#34;button&#34;</span> <span class="na">class</span><span class="o">=</span><span class="s">&#34;btn btn-secondary dropdown-toggle&#34;</span> <span class="na">data-bs-toggle</span><span class="o">=</span><span class="s">&#34;dropdown&#34;</span> <span class="na">data-bs-display</span><span class="o">=</span><span class="s">&#34;static&#34;</span> <span class="na">aria-expanded</span><span class="o">=</span><span class="s">&#34;false&#34;</span><span class="p">&gt;</span>
</span></span><span class="line"><span class="cl">    Right-aligned but left aligned when large screen
</span></span><span class="line"><span class="cl">  <span class="p">&lt;/</span><span class="nt">button</span><span class="p">&gt;</span>
</span></span><span class="line"><span class="cl">  <span class="p">&lt;</span><span class="nt">ul</span> <span class="na">class</span><span class="o">=</span><span class="s">&#34;dropdown-menu dropdown-menu-end dropdown-menu-lg-start&#34;</span><span class="p">&gt;</span>
</span></span><span class="line"><span class="cl">    <span class="p">&lt;</span><span class="nt">li</span><span class="p">&gt;&lt;</span><span class="nt">button</span> <span class="na">class</span><span class="o">=</span><span class="s">&#34;dropdown-item&#34;</span> <span class="na">type</span><span class="o">=</span><span class="s">&#34;button&#34;</span><span class="p">&gt;</span>Action<span class="p">&lt;/</span><span class="nt">button</span><span class="p">&gt;&lt;/</span><span class="nt">li</span><span class="p">&gt;</span>
</span></span><span class="line"><span class="cl">    <span class="p">&lt;</span><span class="nt">li</span><span class="p">&gt;&lt;</span><span class="nt">button</span> <span class="na">class</span><span class="o">=</span><span class="s">&#34;dropdown-item&#34;</span> <span class="na">type</span><span class="o">=</span><span class="s">&#34;button&#34;</span><span class="p">&gt;</span>Another action<span class="p">&lt;/</span><span class="nt">button</span><span class="p">&gt;&lt;/</span><span class="nt">li</span><span class="p">&gt;</span>
</span></span><span class="line"><span class="cl">    <span class="p">&lt;</span><span class="nt">li</span><span class="p">&gt;&lt;</span><span class="nt">button</span> <span class="na">class</span><span class="o">=</span><span class="s">&#34;dropdown-item&#34;</span> <span class="na">type</span><span class="o">=</span><span class="s">&#34;button&#34;</span><span class="p">&gt;</span>Something else here<span class="p">&lt;/</span><span class="nt">button</span><span class="p">&gt;&lt;/</span><span class="nt">li</span><span class="p">&gt;</span>
</span></span><span class="line"><span class="cl">  <span class="p">&lt;/</span><span class="nt">ul</span><span class="p">&gt;</span>
</span></span><span class="line"><span class="cl"><span class="p">&lt;/</span><span class="nt">div</span><span class="p">&gt;</span></span></span></code></pre></div></div>

<p>Note that you don&rsquo;t need to add a <code>data-bs-display=&quot;static&quot;</code> attribute to dropdown buttons in navbars, since Popper isn&rsquo;t used in navbars.</p>
<h3 id="alignment-options">Alignment options <a class="anchor-link" href="#alignment-options" aria-label="Link to this section: Alignment options"></a></h3>
<p>Taking most of the options shown above, here&rsquo;s a small kitchen sink demo of various dropdown alignment options in one place.</p>
<div class="bd-example-snippet bd-code-snippet"><div class="bd-example m-0 border-0">
<div class="btn-group">
  <button class="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
    Dropdown
  </button>
  <ul class="dropdown-menu">
    <li><a class="dropdown-item" href="#">Menu item</a></li>
    <li><a class="dropdown-item" href="#">Menu item</a></li>
    <li><a class="dropdown-item" href="#">Menu item</a></li>
  </ul>
</div>

<div class="btn-group">
  <button type="button" class="btn btn-secondary dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
    Right-aligned menu
  </button>
  <ul class="dropdown-menu dropdown-menu-end">
    <li><a class="dropdown-item" href="#">Menu item</a></li>
    <li><a class="dropdown-item" href="#">Menu item</a></li>
    <li><a class="dropdown-item" href="#">Menu item</a></li>
  </ul>
</div>

<div class="btn-group">
  <button type="button" class="btn btn-secondary dropdown-toggle" data-bs-toggle="dropdown" data-bs-display="static" aria-expanded="false">
    Left-aligned, right-aligned lg
  </button>
  <ul class="dropdown-menu dropdown-menu-lg-end">
    <li><a class="dropdown-item" href="#">Menu item</a></li>
    <li><a class="dropdown-item" href="#">Menu item</a></li>
    <li><a class="dropdown-item" href="#">Menu item</a></li>
  </ul>
</div>

<div class="btn-group">
  <button type="button" class="btn btn-secondary dropdown-toggle" data-bs-toggle="dropdown" data-bs-display="static" aria-expanded="false">
    Right-aligned, left-aligned lg
  </button>
  <ul class="dropdown-menu dropdown-menu-end dropdown-menu-lg-start">
    <li><a class="dropdown-item" href="#">Menu item</a></li>
    <li><a class="dropdown-item" href="#">Menu item</a></li>
    <li><a class="dropdown-item" href="#">Menu item</a></li>
  </ul>
</div>

<div class="btn-group dropstart">
  <button type="button" class="btn btn-secondary dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
    Dropstart
  </button>
  <ul class="dropdown-menu">
    <li><a class="dropdown-item" href="#">Menu item</a></li>
    <li><a class="dropdown-item" href="#">Menu item</a></li>
    <li><a class="dropdown-item" href="#">Menu item</a></li>
  </ul>
</div>

<div class="btn-group dropend">
  <button type="button" class="btn btn-secondary dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
    Dropend
  </button>
  <ul class="dropdown-menu">
    <li><a class="dropdown-item" href="#">Menu item</a></li>
    <li><a class="dropdown-item" href="#">Menu item</a></li>
    <li><a class="dropdown-item" href="#">Menu item</a></li>
  </ul>
</div>

<div class="btn-group dropup">
  <button type="button" class="btn btn-secondary dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
    Dropup
  </button>
  <ul class="dropdown-menu">
    <li><a class="dropdown-item" href="#">Menu item</a></li>
    <li><a class="dropdown-item" href="#">Menu item</a></li>
    <li><a class="dropdown-item" href="#">Menu item</a></li>
  </ul>
</div>
</div><div class="d-flex align-items-center highlight-toolbar ps-3 pe-2 py-1 border-0 border-top border-bottom">
        <small class="font-monospace text-body-secondary text-uppercase">html</small>
        <div class="d-flex ms-auto">
          <button type="button" class="btn-edit text-nowrap" title="Try it on StackBlitz">
            <svg class="bi" aria-hidden="true"><use xlink:href="#lightning-charge-fill"/></svg>
          </button>
          <button type="button" class="btn-clipboard mt-0 me-0" title="Copy to clipboard">
            <svg class="bi" aria-hidden="true"><use xlink:href="#clipboard"/></svg>
          </button>
        </div>
      </div><div class="highlight"><pre tabindex="0" class="chroma"><code class="language-html" data-lang="html"><span class="line"><span class="cl"><span class="p">&lt;</span><span class="nt">div</span> <span class="na">class</span><span class="o">=</span><span class="s">&#34;btn-group&#34;</span><span class="p">&gt;</span>
</span></span><span class="line"><span class="cl">  <span class="p">&lt;</span><span class="nt">button</span> <span class="na">class</span><span class="o">=</span><span class="s">&#34;btn btn-secondary dropdown-toggle&#34;</span> <span class="na">type</span><span class="o">=</span><span class="s">&#34;button&#34;</span> <span class="na">data-bs-toggle</span><span class="o">=</span><span class="s">&#34;dropdown&#34;</span> <span class="na">aria-expanded</span><span class="o">=</span><span class="s">&#34;false&#34;</span><span class="p">&gt;</span>
</span></span><span class="line"><span class="cl">    Dropdown
</span></span><span class="line"><span class="cl">  <span class="p">&lt;/</span><span class="nt">button</span><span class="p">&gt;</span>
</span></span><span class="line"><span class="cl">  <span class="p">&lt;</span><span class="nt">ul</span> <span class="na">class</span><span class="o">=</span><span class="s">&#34;dropdown-menu&#34;</span><span class="p">&gt;</span>
</span></span><span class="line"><span class="cl">    <span class="p">&lt;</span><span class="nt">li</span><span class="p">&gt;&lt;</span><span class="nt">a</span> <span class="na">class</span><span class="o">=</span><span class="s">&#34;dropdown-item&#34;</span> <span class="na">href</span><span class="o">=</span><span class="s">&#34;#&#34;</span><span class="p">&gt;</span>Menu item<span class="p">&lt;/</span><span class="nt">a</span><span class="p">&gt;&lt;/</span><span class="nt">li</span><span class="p">&gt;</span>
</span></span><span class="line"><span class="cl">    <span class="p">&lt;</span><span class="nt">li</span><span class="p">&gt;&lt;</span><span class="nt">a</span> <span class="na">class</span><span class="o">=</span><span class="s">&#34;dropdown-item&#34;</span> <span class="na">href</span><span class="o">=</span><span class="s">&#34;#&#34;</span><span class="p">&gt;</span>Menu item<span class="p">&lt;/</span><span class="nt">a</span><span class="p">&gt;&lt;/</span><span class="nt">li</span><span class="p">&gt;</span>
</span></span><span class="line"><span class="cl">    <span class="p">&lt;</span><span class="nt">li</span><span class="p">&gt;&lt;</span><span class="nt">a</span> <span class="na">class</span><span class="o">=</span><span class="s">&#34;dropdown-item&#34;</span> <span class="na">href</span><span class="o">=</span><span class="s">&#34;#&#34;</span><span class="p">&gt;</span>Menu item<span class="p">&lt;/</span><span class="nt">a</span><span class="p">&gt;&lt;/</span><span class="nt">li</span><span class="p">&gt;</span>
</span></span><span class="line"><span class="cl">  <span class="p">&lt;/</span><span class="nt">ul</span><span class="p">&gt;</span>
</span></span><span class="line"><span class="cl"><span class="p">&lt;/</span><span class="nt">div</span><span class="p">&gt;</span>
</span></span><span class="line"><span class="cl">
</span></span><span class="line"><span class="cl"><span class="p">&lt;</span><span class="nt">div</span> <span class="na">class</span><span class="o">=</span><span class="s">&#34;btn-group&#34;</span><span class="p">&gt;</span>
</span></span><span class="line"><span class="cl">  <span class="p">&lt;</span><span class="nt">button</span> <span class="na">type</span><span class="o">=</span><span class="s">&#34;button&#34;</span> <span class="na">class</span><span class="o">=</span><span class="s">&#34;btn btn-secondary dropdown-toggle&#34;</span> <span class="na">data-bs-toggle</span><span class="o">=</span><span class="s">&#34;dropdown&#34;</span> <span class="na">aria-expanded</span><span class="o">=</span><span class="s">&#34;false&#34;</span><span class="p">&gt;</span>
</span></span><span class="line"><span class="cl">    Right-aligned menu
</span></span><span class="line"><span class="cl">  <span class="p">&lt;/</span><span class="nt">button</span><span class="p">&gt;</span>
</span></span><span class="line"><span class="cl">  <span class="p">&lt;</span><span class="nt">ul</span> <span class="na">class</span><span class="o">=</span><span class="s">&#34;dropdown-menu dropdown-menu-end&#34;</span><span class="p">&gt;</span>
</span></span><span class="line"><span class="cl">    <span class="p">&lt;</span><span class="nt">li</span><span class="p">&gt;&lt;</span><span class="nt">a</span> <span class="na">class</span><span class="o">=</span><span class="s">&#34;dropdown-item&#34;</span> <span class="na">href</span><span class="o">=</span><span class="s">&#34;#&#34;</span><span class="p">&gt;</span>Menu item<span class="p">&lt;/</span><span class="nt">a</span><span class="p">&gt;&lt;/</span><span class="nt">li</span><span class="p">&gt;</span>
</span></span><span class="line"><span class="cl">    <span class="p">&lt;</span><span class="nt">li</span><span class="p">&gt;&lt;</span><span class="nt">a</span> <span class="na">class</span><span class="o">=</span><span class="s">&#34;dropdown-item&#34;</span> <span class="na">href</span><span class="o">=</span><span class="s">&#34;#&#34;</span><span class="p">&gt;</span>Menu item<span class="p">&lt;/</span><span class="nt">a</span><span class="p">&gt;&lt;/</span><span class="nt">li</span><span class="p">&gt;</span>
</span></span><span class="line"><span class="cl">    <span class="p">&lt;</span><span class="nt">li</span><span class="p">&gt;&lt;</span><span class="nt">a</span> <span class="na">class</span><span class="o">=</span><span class="s">&#34;dropdown-item&#34;</span> <span class="na">href</span><span class="o">=</span><span class="s">&#34;#&#34;</span><span class="p">&gt;</span>Menu item<span class="p">&lt;/</span><span class="nt">a</span><span class="p">&gt;&lt;/</span><span class="nt">li</span><span class="p">&gt;</span>
</span></span><span class="line"><span class="cl">  <span class="p">&lt;/</span><span class="nt">ul</span><span class="p">&gt;</span>
</span></span><span class="line"><span class="cl"><span class="p">&lt;/</span><span class="nt">div</span><span class="p">&gt;</span>
</span></span><span class="line"><span class="cl">
</span></span><span class="line"><span class="cl"><span class="p">&lt;</span><span class="nt">div</span> <span class="na">class</span><span class="o">=</span><span class="s">&#34;btn-group&#34;</span><span class="p">&gt;</span>
</span></span><span class="line"><span class="cl">  <span class="p">&lt;</span><span class="nt">button</span> <span class="na">type</span><span class="o">=</span><span class="s">&#34;button&#34;</span> <span class="na">class</span><span class="o">=</span><span class="s">&#34;btn btn-secondary dropdown-toggle&#34;</span> <span class="na">data-bs-toggle</span><span class="o">=</span><span class="s">&#34;dropdown&#34;</span> <span class="na">data-bs-display</span><span class="o">=</span><span class="s">&#34;static&#34;</span> <span class="na">aria-expanded</span><span class="o">=</span><span class="s">&#34;false&#34;</span><span class="p">&gt;</span>
</span></span><span class="line"><span class="cl">    Left-aligned, right-aligned lg
</span></span><span class="line"><span class="cl">  <span class="p">&lt;/</span><span class="nt">button</span><span class="p">&gt;</span>
</span></span><span class="line"><span class="cl">  <span class="p">&lt;</span><span class="nt">ul</span> <span class="na">class</span><span class="o">=</span><span class="s">&#34;dropdown-menu dropdown-menu-lg-end&#34;</span><span class="p">&gt;</span>
</span></span><span class="line"><span class="cl">    <span class="p">&lt;</span><span class="nt">li</span><span class="p">&gt;&lt;</span><span class="nt">a</span> <span class="na">class</span><span class="o">=</span><span class="s">&#34;dropdown-item&#34;</span> <span class="na">href</span><span class="o">=</span><span class="s">&#34;#&#34;</span><span class="p">&gt;</span>Menu item<span class="p">&lt;/</span><span class="nt">a</span><span class="p">&gt;&lt;/</span><span class="nt">li</span><span class="p">&gt;</span>
</span></span><span class="line"><span class="cl">    <span class="p">&lt;</span><span class="nt">li</span><span class="p">&gt;&lt;</span><span class="nt">a</span> <span class="na">class</span><span class="o">=</span><span class="s">&#34;dropdown-item&#34;</span> <span class="na">href</span><span class="o">=</span><span class="s">&#34;#&#34;</span><span class="p">&gt;</span>Menu item<span class="p">&lt;/</span><span class="nt">a</span><span class="p">&gt;&lt;/</span><span class="nt">li</span><span class="p">&gt;</span>
</span></span><span class="line"><span class="cl">    <span class="p">&lt;</span><span class="nt">li</span><span class="p">&gt;&lt;</span><span class="nt">a</span> <span class="na">class</span><span class="o">=</span><span class="s">&#34;dropdown-item&#34;</span> <span class="na">href</span><span class="o">=</span><span class="s">&#34;#&#34;</span><span class="p">&gt;</span>Menu item<span class="p">&lt;/</span><span class="nt">a</span><span class="p">&gt;&lt;/</span><span class="nt">li</span><span class="p">&gt;</span>
</span></span><span class="line"><span class="cl">  <span class="p">&lt;/</span><span class="nt">ul</span><span class="p">&gt;</span>
</span></span><span class="line"><span class="cl"><span class="p">&lt;/</span><span class="nt">div</span><span class="p">&gt;</span>
</span></span><span class="line"><span class="cl">
</span></span><span class="line"><span class="cl"><span class="p">&lt;</span><span class="nt">div</span> <span class="na">class</span><span class="o">=</span><span class="s">&#34;btn-group&#34;</span><span class="p">&gt;</span>
</span></span><span class="line"><span class="cl">  <span class="p">&lt;</span><span class="nt">button</span> <span class="na">type</span><span class="o">=</span><span class="s">&#34;button&#34;</span> <span class="na">class</span><span class="o">=</span><span class="s">&#34;btn btn-secondary dropdown-toggle&#34;</span> <span class="na">data-bs-toggle</span><span class="o">=</span><span class="s">&#34;dropdown&#34;</span> <span class="na">data-bs-display</span><span class="o">=</span><span class="s">&#34;static&#34;</span> <span class="na">aria-expanded</span><span class="o">=</span><span class="s">&#34;false&#34;</span><span class="p">&gt;</span>
</span></span><span class="line"><span class="cl">    Right-aligned, left-aligned lg
</span></span><span class="line"><span class="cl">  <span class="p">&lt;/</span><span class="nt">button</span><span class="p">&gt;</span>
</span></span><span class="line"><span class="cl">  <span class="p">&lt;</span><span class="nt">ul</span> <span class="na">class</span><span class="o">=</span><span class="s">&#34;dropdown-menu dropdown-menu-end dropdown-menu-lg-start&#34;</span><span class="p">&gt;</span>
</span></span><span class="line"><span class="cl">    <span class="p">&lt;</span><span class="nt">li</span><span class="p">&gt;&lt;</span><span class="nt">a</span> <span class="na">class</span><span class="o">=</span><span class="s">&#34;dropdown-item&#34;</span> <span class="na">href</span><span class="o">=</span><span class="s">&#34;#&#34;</span><span class="p">&gt;</span>Menu item<span class="p">&lt;/</span><span class="nt">a</span><span class="p">&gt;&lt;/</span><span class="nt">li</span><span class="p">&gt;</span>
</span></span><span class="line"><span class="cl">    <span class="p">&lt;</span><span class="nt">li</span><span class="p">&gt;&lt;</span><span class="nt">a</span> <span class="na">class</span><span class="o">=</span><span class="s">&#34;dropdown-item&#34;</span> <span class="na">href</span><span class="o">=</span><span class="s">&#34;#&#34;</span><span class="p">&gt;</span>Menu item<span class="p">&lt;/</span><span class="nt">a</span><span class="p">&gt;&lt;/</span><span class="nt">li</span><span class="p">&gt;</span>
</span></span><span class="line"><span class="cl">    <span class="p">&lt;</span><span class="nt">li</span><span class="p">&gt;&lt;</span><span class="nt">a</span> <span class="na">class</span><span class="o">=</span><span class="s">&#34;dropdown-item&#34;</span> <span class="na">href</span><span class="o">=</span><span class="s">&#34;#&#34;</span><span class="p">&gt;</span>Menu item<span class="p">&lt;/</span><span class="nt">a</span><span class="p">&gt;&lt;/</span><span class="nt">li</span><span class="p">&gt;</span>
</span></span><span class="line"><span class="cl">  <span class="p">&lt;/</span><span class="nt">ul</span><span class="p">&gt;</span>
</span></span><span class="line"><span class="cl"><span class="p">&lt;/</span><span class="nt">div</span><span class="p">&gt;</span>
</span></span><span class="line"><span class="cl">
</span></span><span class="line"><span class="cl"><span class="p">&lt;</span><span class="nt">div</span> <span class="na">class</span><span class="o">=</span><span class="s">&#34;btn-group dropstart&#34;</span><span class="p">&gt;</span>
</span></span><span class="line"><span class="cl">  <span class="p">&lt;</span><span class="nt">button</span> <span class="na">type</span><span class="o">=</span><span class="s">&#34;button&#34;</span> <span class="na">class</span><span class="o">=</span><span class="s">&#34;btn btn-secondary dropdown-toggle&#34;</span> <span class="na">data-bs-toggle</span><span class="o">=</span><span class="s">&#34;dropdown&#34;</span> <span class="na">aria-expanded</span><span class="o">=</span><span class="s">&#34;false&#34;</span><span class="p">&gt;</span>
</span></span><span class="line"><span class="cl">    Dropstart
</span></span><span class="line"><span class="cl">  <span class="p">&lt;/</span><span class="nt">button</span><span class="p">&gt;</span>
</span></span><span class="line"><span class="cl">  <span class="p">&lt;</span><span class="nt">ul</span> <span class="na">class</span><span class="o">=</span><span class="s">&#34;dropdown-menu&#34;</span><span class="p">&gt;</span>
</span></span><span class="line"><span class="cl">    <span class="p">&lt;</span><span class="nt">li</span><span class="p">&gt;&lt;</span><span class="nt">a</span> <span class="na">class</span><span class="o">=</span><span class="s">&#34;dropdown-item&#34;</span> <span class="na">href</span><span class="o">=</span><span class="s">&#34;#&#34;</span><span class="p">&gt;</span>Menu item<span class="p">&lt;/</span><span class="nt">a</span><span class="p">&gt;&lt;/</span><span class="nt">li</span><span class="p">&gt;</span>
</span></span><span class="line"><span class="cl">    <span class="p">&lt;</span><span class="nt">li</span><span class="p">&gt;&lt;</span><span class="nt">a</span> <span class="na">class</span><span class="o">=</span><span class="s">&#34;dropdown-item&#34;</span> <span class="na">href</span><span class="o">=</span><span class="s">&#34;#&#34;</span><span class="p">&gt;</span>Menu item<span class="p">&lt;/</span><span class="nt">a</span><span class="p">&gt;&lt;/</span><span class="nt">li</span><span class="p">&gt;</span>
</span></span><span class="line"><span class="cl">    <span class="p">&lt;</span><span class="nt">li</span><span class="p">&gt;&lt;</span><span class="nt">a</span> <span class="na">class</span><span class="o">=</span><span class="s">&#34;dropdown-item&#34;</span> <span class="na">href</span><span class="o">=</span><span class="s">&#34;#&#34;</span><span class="p">&gt;</span>Menu item<span class="p">&lt;/</span><span class="nt">a</span><span class="p">&gt;&lt;/</span><span class="nt">li</span><span class="p">&gt;</span>
</span></span><span class="line"><span class="cl">  <span class="p">&lt;/</span><span class="nt">ul</span><span class="p">&gt;</span>
</span></span><span class="line"><span class="cl"><span class="p">&lt;/</span><span class="nt">div</span><span class="p">&gt;</span>
</span></span><span class="line"><span class="cl">
</span></span><span class="line"><span class="cl"><span class="p">&lt;</span><span class="nt">div</span> <span class="na">class</span><span class="o">=</span><span class="s">&#34;btn-group dropend&#34;</span><span class="p">&gt;</span>
</span></span><span class="line"><span class="cl">  <span class="p">&lt;</span><span class="nt">button</span> <span class="na">type</span><span class="o">=</span><span class="s">&#34;button&#34;</span> <span class="na">class</span><span class="o">=</span><span class="s">&#34;btn btn-secondary dropdown-toggle&#34;</span> <span class="na">data-bs-toggle</span><span class="o">=</span><span class="s">&#34;dropdown&#34;</span> <span class="na">aria-expanded</span><span class="o">=</span><span class="s">&#34;false&#34;</span><span class="p">&gt;</span>
</span></span><span class="line"><span class="cl">    Dropend
</span></span><span class="line"><span class="cl">  <span class="p">&lt;/</span><span class="nt">button</span><span class="p">&gt;</span>
</span></span><span class="line"><span class="cl">  <span class="p">&lt;</span><span class="nt">ul</span> <span class="na">class</span><span class="o">=</span><span class="s">&#34;dropdown-menu&#34;</span><span class="p">&gt;</span>
</span></span><span class="line"><span class="cl">    <span class="p">&lt;</span><span class="nt">li</span><span class="p">&gt;&lt;</span><span class="nt">a</span> <span class="na">class</span><span class="o">=</span><span class="s">&#34;dropdown-item&#34;</span> <span class="na">href</span><span class="o">=</span><span class="s">&#34;#&#34;</span><span class="p">&gt;</span>Menu item<span class="p">&lt;/</span><span class="nt">a</span><span class="p">&gt;&lt;/</span><span class="nt">li</span><span class="p">&gt;</span>
</span></span><span class="line"><span class="cl">    <span class="p">&lt;</span><span class="nt">li</span><span class="p">&gt;&lt;</span><span class="nt">a</span> <span class="na">class</span><span class="o">=</span><span class="s">&#34;dropdown-item&#34;</span> <span class="na">href</span><span class="o">=</span><span class="s">&#34;#&#34;</span><span class="p">&gt;</span>Menu item<span class="p">&lt;/</span><span class="nt">a</span><span class="p">&gt;&lt;/</span><span class="nt">li</span><span class="p">&gt;</span>
</span></span><span class="line"><span class="cl">    <span class="p">&lt;</span><span class="nt">li</span><span class="p">&gt;&lt;</span><span class="nt">a</span> <span class="na">class</span><span class="o">=</span><span class="s">&#34;dropdown-item&#34;</span> <span class="na">href</span><span class="o">=</span><span class="s">&#34;#&#34;</span><span class="p">&gt;</span>Menu item<span class="p">&lt;/</span><span class="nt">a</span><span class="p">&gt;&lt;/</span><span class="nt">li</span><span class="p">&gt;</span>
</span></span><span class="line"><span class="cl">  <span class="p">&lt;/</span><span class="nt">ul</span><span class="p">&gt;</span>
</span></span><span class="line"><span class="cl"><span class="p">&lt;/</span><span class="nt">div</span><span class="p">&gt;</span>
</span></span><span class="line"><span class="cl">
</span></span><span class="line"><span class="cl"><span class="p">&lt;</span><span class="nt">div</span> <span class="na">class</span><span class="o">=</span><span class="s">&#34;btn-group dropup&#34;</span><span class="p">&gt;</span>
</span></span><span class="line"><span class="cl">  <span class="p">&lt;</span><span class="nt">button</span> <span class="na">type</span><span class="o">=</span><span class="s">&#34;button&#34;</span> <span class="na">class</span><span class="o">=</span><span class="s">&#34;btn btn-secondary dropdown-toggle&#34;</span> <span class="na">data-bs-toggle</span><span class="o">=</span><span class="s">&#34;dropdown&#34;</span> <span class="na">aria-expanded</span><span class="o">=</span><span class="s">&#34;false&#34;</span><span class="p">&gt;</span>
</span></span><span class="line"><span class="cl">    Dropup
</span></span><span class="line"><span class="cl">  <span class="p">&lt;/</span><span class="nt">button</span><span class="p">&gt;</span>
</span></span><span class="line"><span class="cl">  <span class="p">&lt;</span><span class="nt">ul</span> <span class="na">class</span><span class="o">=</span><span class="s">&#34;dropdown-menu&#34;</span><span class="p">&gt;</span>
</span></span><span class="line"><span class="cl">    <span class="p">&lt;</span><span class="nt">li</span><span class="p">&gt;&lt;</span><span class="nt">a</span> <span class="na">class</span><span class="o">=</span><span class="s">&#34;dropdown-item&#34;</span> <span class="na">href</span><span class="o">=</span><span class="s">&#34;#&#34;</span><span class="p">&gt;</span>Menu item<span class="p">&lt;/</span><span class="nt">a</span><span class="p">&gt;&lt;/</span><span class="nt">li</span><span class="p">&gt;</span>
</span></span><span class="line"><span class="cl">    <span class="p">&lt;</span><span class="nt">li</span><span class="p">&gt;&lt;</span><span class="nt">a</span> <span class="na">class</span><span class="o">=</span><span class="s">&#34;dropdown-item&#34;</span> <span class="na">href</span><span class="o">=</span><span class="s">&#34;#&#34;</span><span class="p">&gt;</span>Menu item<span class="p">&lt;/</span><span class="nt">a</span><span class="p">&gt;&lt;/</span><span class="nt">li</span><span class="p">&gt;</span>
</span></span><span class="line"><span class="cl">    <span class="p">&lt;</span><span class="nt">li</span><span class="p">&gt;&lt;</span><span class="nt">a</span> <span class="na">class</span><span class="o">=</span><span class="s">&#34;dropdown-item&#34;</span> <span class="na">href</span><span class="o">=</span><span class="s">&#34;#&#34;</span><span class="p">&gt;</span>Menu item<span class="p">&lt;/</span><span class="nt">a</span><span class="p">&gt;&lt;/</span><span class="nt">li</span><span class="p">&gt;</span>
</span></span><span class="line"><span class="cl">  <span class="p">&lt;/</span><span class="nt">ul</span><span class="p">&gt;</span>
</span></span><span class="line"><span class="cl"><span class="p">&lt;/</span><span class="nt">div</span><span class="p">&gt;</span></span></span></code></pre></div></div>

<h2 id="menu-content">Menu content <a class="anchor-link" href="#menu-content" aria-label="Link to this section: Menu content"></a></h2>
<h3 id="headers">Headers <a class="anchor-link" href="#headers" aria-label="Link to this section: Headers"></a></h3>
<p>Add a header to label sections of actions in any dropdown menu.</p>
<div class="bd-example-snippet bd-code-snippet"><div class="bd-example m-0 border-0">
<ul class="dropdown-menu">
  <li><h6 class="dropdown-header">Dropdown header</h6></li>
  <li><a class="dropdown-item" href="#">Action</a></li>
  <li><a class="dropdown-item" href="#">Another action</a></li>
</ul>
</div><div class="d-flex align-items-center highlight-toolbar ps-3 pe-2 py-1 border-0 border-top border-bottom">
        <small class="font-monospace text-body-secondary text-uppercase">html</small>
        <div class="d-flex ms-auto">
          <button type="button" class="btn-edit text-nowrap" title="Try it on StackBlitz">
            <svg class="bi" aria-hidden="true"><use xlink:href="#lightning-charge-fill"/></svg>
          </button>
          <button type="button" class="btn-clipboard mt-0 me-0" title="Copy to clipboard">
            <svg class="bi" aria-hidden="true"><use xlink:href="#clipboard"/></svg>
          </button>
        </div>
      </div><div class="highlight"><pre tabindex="0" class="chroma"><code class="language-html" data-lang="html"><span class="line"><span class="cl"><span class="p">&lt;</span><span class="nt">ul</span> <span class="na">class</span><span class="o">=</span><span class="s">&#34;dropdown-menu&#34;</span><span class="p">&gt;</span>
</span></span><span class="line"><span class="cl">  <span class="p">&lt;</span><span class="nt">li</span><span class="p">&gt;&lt;</span><span class="nt">h6</span> <span class="na">class</span><span class="o">=</span><span class="s">&#34;dropdown-header&#34;</span><span class="p">&gt;</span>Dropdown header<span class="p">&lt;/</span><span class="nt">h6</span><span class="p">&gt;&lt;/</span><span class="nt">li</span><span class="p">&gt;</span>
</span></span><span class="line"><span class="cl">  <span class="p">&lt;</span><span class="nt">li</span><span class="p">&gt;&lt;</span><span class="nt">a</span> <span class="na">class</span><span class="o">=</span><span class="s">&#34;dropdown-item&#34;</span> <span class="na">href</span><span class="o">=</span><span class="s">&#34;#&#34;</span><span class="p">&gt;</span>Action<span class="p">&lt;/</span><span class="nt">a</span><span class="p">&gt;&lt;/</span><span class="nt">li</span><span class="p">&gt;</span>
</span></span><span class="line"><span class="cl">  <span class="p">&lt;</span><span class="nt">li</span><span class="p">&gt;&lt;</span><span class="nt">a</span> <span class="na">class</span><span class="o">=</span><span class="s">&#34;dropdown-item&#34;</span> <span class="na">href</span><span class="o">=</span><span class="s">&#34;#&#34;</span><span class="p">&gt;</span>Another action<span class="p">&lt;/</span><span class="nt">a</span><span class="p">&gt;&lt;/</span><span class="nt">li</span><span class="p">&gt;</span>
</span></span><span class="line"><span class="cl"><span class="p">&lt;/</span><span class="nt">ul</span><span class="p">&gt;</span></span></span></code></pre></div></div>

<h3 id="dividers">Dividers <a class="anchor-link" href="#dividers" aria-label="Link to this section: Dividers"></a></h3>
<p>Separate groups of related menu items with a divider.</p>
<div class="bd-example-snippet bd-code-snippet"><div class="bd-example m-0 border-0">
<ul class="dropdown-menu">
  <li><a class="dropdown-item" href="#">Action</a></li>
  <li><a class="dropdown-item" href="#">Another action</a></li>
  <li><a class="dropdown-item" href="#">Something else here</a></li>
  <li><hr class="dropdown-divider"></li>
  <li><a class="dropdown-item" href="#">Separated link</a></li>
</ul>
</div><div class="d-flex align-items-center highlight-toolbar ps-3 pe-2 py-1 border-0 border-top border-bottom">
        <small class="font-monospace text-body-secondary text-uppercase">html</small>
        <div class="d-flex ms-auto">
          <button type="button" class="btn-edit text-nowrap" title="Try it on StackBlitz">
            <svg class="bi" aria-hidden="true"><use xlink:href="#lightning-charge-fill"/></svg>
          </button>
          <button type="button" class="btn-clipboard mt-0 me-0" title="Copy to clipboard">
            <svg class="bi" aria-hidden="true"><use xlink:href="#clipboard"/></svg>
          </button>
        </div>
      </div><div class="highlight"><pre tabindex="0" class="chroma"><code class="language-html" data-lang="html"><span class="line"><span class="cl"><span class="p">&lt;</span><span class="nt">ul</span> <span class="na">class</span><span class="o">=</span><span class="s">&#34;dropdown-menu&#34;</span><span class="p">&gt;</span>
</span></span><span class="line"><span class="cl">  <span class="p">&lt;</span><span class="nt">li</span><span class="p">&gt;&lt;</span><span class="nt">a</span> <span class="na">class</span><span class="o">=</span><span class="s">&#34;dropdown-item&#34;</span> <span class="na">href</span><span class="o">=</span><span class="s">&#34;#&#34;</span><span class="p">&gt;</span>Action<span class="p">&lt;/</span><span class="nt">a</span><span class="p">&gt;&lt;/</span><span class="nt">li</span><span class="p">&gt;</span>
</span></span><span class="line"><span class="cl">  <span class="p">&lt;</span><span class="nt">li</span><span class="p">&gt;&lt;</span><span class="nt">a</span> <span class="na">class</span><span class="o">=</span><span class="s">&#34;dropdown-item&#34;</span> <span class="na">href</span><span class="o">=</span><span class="s">&#34;#&#34;</span><span class="p">&gt;</span>Another action<span class="p">&lt;/</span><span class="nt">a</span><span class="p">&gt;&lt;/</span><span class="nt">li</span><span class="p">&gt;</span>
</span></span><span class="line"><span class="cl">  <span class="p">&lt;</span><span class="nt">li</span><span class="p">&gt;&lt;</span><span class="nt">a</span> <span class="na">class</span><span class="o">=</span><span class="s">&#34;dropdown-item&#34;</span> <span class="na">href</span><span class="o">=</span><span class="s">&#34;#&#34;</span><span class="p">&gt;</span>Something else here<span class="p">&lt;/</span><span class="nt">a</span><span class="p">&gt;&lt;/</span><span class="nt">li</span><span class="p">&gt;</span>
</span></span><span class="line"><span class="cl">  <span class="p">&lt;</span><span class="nt">li</span><span class="p">&gt;&lt;</span><span class="nt">hr</span> <span class="na">class</span><span class="o">=</span><span class="s">&#34;dropdown-divider&#34;</span><span class="p">&gt;&lt;/</span><span class="nt">li</span><span class="p">&gt;</span>
</span></span><span class="line"><span class="cl">  <span class="p">&lt;</span><span class="nt">li</span><span class="p">&gt;&lt;</span><span class="nt">a</span> <span class="na">class</span><span class="o">=</span><span class="s">&#34;dropdown-item&#34;</span> <span class="na">href</span><span class="o">=</span><span class="s">&#34;#&#34;</span><span class="p">&gt;</span>Separated link<span class="p">&lt;/</span><span class="nt">a</span><span class="p">&gt;&lt;/</span><span class="nt">li</span><span class="p">&gt;</span>
</span></span><span class="line"><span class="cl"><span class="p">&lt;/</span><span class="nt">ul</span><span class="p">&gt;</span></span></span></code></pre></div></div>

<h3 id="text">Text <a class="anchor-link" href="#text" aria-label="Link to this section: Text"></a></h3>
<p>Place any freeform text within a dropdown menu with text and use <a href="/docs/5.3/utilities/spacing/">spacing utilities</a>. Note that you&rsquo;ll likely need additional sizing styles to constrain the menu width.</p>
<div class="bd-example-snippet bd-code-snippet"><div class="bd-example m-0 border-0">
<div class="dropdown-menu p-4 text-body-secondary" style="max-width: 200px;">
  <p>
    Some example text that's free-flowing within the dropdown menu.
  </p>
  <p class="mb-0">
    And this is more example text.
  </p>
</div>
</div><div class="d-flex align-items-center highlight-toolbar ps-3 pe-2 py-1 border-0 border-top border-bottom">
        <small class="font-monospace text-body-secondary text-uppercase">html</small>
        <div class="d-flex ms-auto">
          <button type="button" class="btn-edit text-nowrap" title="Try it on StackBlitz">
            <svg class="bi" aria-hidden="true"><use xlink:href="#lightning-charge-fill"/></svg>
          </button>
          <button type="button" class="btn-clipboard mt-0 me-0" title="Copy to clipboard">
            <svg class="bi" aria-hidden="true"><use xlink:href="#clipboard"/></svg>
          </button>
        </div>
      </div><div class="highlight"><pre tabindex="0" class="chroma"><code class="language-html" data-lang="html"><span class="line"><span class="cl"><span class="p">&lt;</span><span class="nt">div</span> <span class="na">class</span><span class="o">=</span><span class="s">&#34;dropdown-menu p-4 text-body-secondary&#34;</span> <span class="na">style</span><span class="o">=</span><span class="s">&#34;max-width: 200px;&#34;</span><span class="p">&gt;</span>
</span></span><span class="line"><span class="cl">  <span class="p">&lt;</span><span class="nt">p</span><span class="p">&gt;</span>
</span></span><span class="line"><span class="cl">    Some example text that&#39;s free-flowing within the dropdown menu.
</span></span><span class="line"><span class="cl">  <span class="p">&lt;/</span><span class="nt">p</span><span class="p">&gt;</span>
</span></span><span class="line"><span class="cl">  <span class="p">&lt;</span><span class="nt">p</span> <span class="na">class</span><span class="o">=</span><span class="s">&#34;mb-0&#34;</span><span class="p">&gt;</span>
</span></span><span class="line"><span class="cl">    And this is more example text.
</span></span><span class="line"><span class="cl">  <span class="p">&lt;/</span><span class="nt">p</span><span class="p">&gt;</span>
</span></span><span class="line"><span class="cl"><span class="p">&lt;/</span><span class="nt">div</span><span class="p">&gt;</span></span></span></code></pre></div></div>

<h3 id="forms">Forms <a class="anchor-link" href="#forms" aria-label="Link to this section: Forms"></a></h3>
<p>Put a form within a dropdown menu, or make it into a dropdown menu, and use <a href="/docs/5.3/utilities/spacing/">margin or padding utilities</a> to give it the negative space you require.</p>
<div class="bd-example-snippet bd-code-snippet"><div class="bd-example m-0 border-0">
<div class="dropdown-menu">
  <form class="px-4 py-3">
    <div class="mb-3">
      <label for="exampleDropdownFormEmail1" class="form-label">Email address</label>
      <input type="email" class="form-control" id="exampleDropdownFormEmail1" placeholder="email@example.com">
    </div>
    <div class="mb-3">
      <label for="exampleDropdownFormPassword1" class="form-label">Password</label>
      <input type="password" class="form-control" id="exampleDropdownFormPassword1" placeholder="Password">
    </div>
    <div class="mb-3">
      <div class="form-check">
        <input type="checkbox" class="form-check-input" id="dropdownCheck">
        <label class="form-check-label" for="dropdownCheck">
          Remember me
        </label>
      </div>
    </div>
    <button type="submit" class="btn btn-primary">Sign in</button>
  </form>
  <div class="dropdown-divider"></div>
  <a class="dropdown-item" href="#">New around here? Sign up</a>
  <a class="dropdown-item" href="#">Forgot password?</a>
</div>
</div><div class="d-flex align-items-center highlight-toolbar ps-3 pe-2 py-1 border-0 border-top border-bottom">
        <small class="font-monospace text-body-secondary text-uppercase">html</small>
        <div class="d-flex ms-auto">
          <button type="button" class="btn-edit text-nowrap" title="Try it on StackBlitz">
            <svg class="bi" aria-hidden="true"><use xlink:href="#lightning-charge-fill"/></svg>
          </button>
          <button type="button" class="btn-clipboard mt-0 me-0" title="Copy to clipboard">
            <svg class="bi" aria-hidden="true"><use xlink:href="#clipboard"/></svg>
          </button>
        </div>
      </div><div class="highlight"><pre tabindex="0" class="chroma"><code class="language-html" data-lang="html"><span class="line"><span class="cl"><span class="p">&lt;</span><span class="nt">div</span> <span class="na">class</span><span class="o">=</span><span class="s">&#34;dropdown-menu&#34;</span><span class="p">&gt;</span>
</span></span><span class="line"><span class="cl">  <span class="p">&lt;</span><span class="nt">form</span> <span class="na">class</span><span class="o">=</span><span class="s">&#34;px-4 py-3&#34;</span><span class="p">&gt;</span>
</span></span><span class="line"><span class="cl">    <span class="p">&lt;</span><span class="nt">div</span> <span class="na">class</span><span class="o">=</span><span class="s">&#34;mb-3&#34;</span><span class="p">&gt;</span>
</span></span><span class="line"><span class="cl">      <span class="p">&lt;</span><span class="nt">label</span> <span class="na">for</span><span class="o">=</span><span class="s">&#34;exampleDropdownFormEmail1&#34;</span> <span class="na">class</span><span class="o">=</span><span class="s">&#34;form-label&#34;</span><span class="p">&gt;</span>Email address<span class="p">&lt;/</span><span class="nt">label</span><span class="p">&gt;</span>
</span></span><span class="line"><span class="cl">      <span class="p">&lt;</span><span class="nt">input</span> <span class="na">type</span><span class="o">=</span><span class="s">&#34;email&#34;</span> <span class="na">class</span><span class="o">=</span><span class="s">&#34;form-control&#34;</span> <span class="na">id</span><span class="o">=</span><span class="s">&#34;exampleDropdownFormEmail1&#34;</span> <span class="na">placeholder</span><span class="o">=</span><span class="s">&#34;email@example.com&#34;</span><span class="p">&gt;</span>
</span></span><span class="line"><span class="cl">    <span class="p">&lt;/</span><span class="nt">div</span><span class="p">&gt;</span>
</span></span><span class="line"><span class="cl">    <span class="p">&lt;</span><span class="nt">div</span> <span class="na">class</span><span class="o">=</span><span class="s">&#34;mb-3&#34;</span><span class="p">&gt;</span>
</span></span><span class="line"><span class="cl">      <span class="p">&lt;</span><span class="nt">label</span> <span class="na">for</span><span class="o">=</span><span class="s">&#34;exampleDropdownFormPassword1&#34;</span> <span class="na">class</span><span class="o">=</span><span class="s">&#34;form-label&#34;</span><span class="p">&gt;</span>Password<span class="p">&lt;/</span><span class="nt">label</span><span class="p">&gt;</span>
</span></span><span class="line"><span class="cl">      <span class="p">&lt;</span><span class="nt">input</span> <span class="na">type</span><span class="o">=</span><span class="s">&#34;password&#34;</span> <span class="na">class</span><span class="o">=</span><span class="s">&#34;form-control&#34;</span> <span class="na">id</span><span class="o">=</span><span class="s">&#34;exampleDropdownFormPassword1&#34;</span> <span class="na">placeholder</span><span class="o">=</span><span class="s">&#34;Password&#34;</span><span class="p">&gt;</span>
</span></span><span class="line"><span class="cl">    <span class="p">&lt;/</span><span class="nt">div</span><span class="p">&gt;</span>
</span></span><span class="line"><span class="cl">    <span class="p">&lt;</span><span class="nt">div</span> <span class="na">class</span><span class="o">=</span><span class="s">&#34;mb-3&#34;</span><span class="p">&gt;</span>
</span></span><span class="line"><span class="cl">      <span class="p">&lt;</span><span class="nt">div</span> <span class="na">class</span><span class="o">=</span><span class="s">&#34;form-check&#34;</span><span class="p">&gt;</span>
</span></span><span class="line"><span class="cl">        <span class="p">&lt;</span><span class="nt">input</span> <span class="na">type</span><span class="o">=</span><span class="s">&#34;checkbox&#34;</span> <span class="na">class</span><span class="o">=</span><span class="s">&#34;form-check-input&#34;</span> <span class="na">id</span><span class="o">=</span><span class="s">&#34;dropdownCheck&#34;</span><span class="p">&gt;</span>
</span></span><span class="line"><span class="cl">        <span class="p">&lt;</span><span class="nt">label</span> <span class="na">class</span><span class="o">=</span><span class="s">&#34;form-check-label&#34;</span> <span class="na">for</span><span class="o">=</span><span class="s">&#34;dropdownCheck&#34;</span><span class="p">&gt;</span>
</span></span><span class="line"><span class="cl">          Remember me
</span></span><span class="line"><span class="cl">        <span class="p">&lt;/</span><span class="nt">label</span><span class="p">&gt;</span>
</span></span><span class="line"><span class="cl">      <span class="p">&lt;/</span><span class="nt">div</span><span class="p">&gt;</span>
</span></span><span class="line"><span class="cl">    <span class="p">&lt;/</span><span class="nt">div</span><span class="p">&gt;</span>
</span></span><span class="line"><span class="cl">    <span class="p">&lt;</span><span class="nt">button</span> <span class="na">type</span><span class="o">=</span><span class="s">&#34;submit&#34;</span> <span class="na">class</span><span class="o">=</span><span class="s">&#34;btn btn-primary&#34;</span><span class="p">&gt;</span>Sign in<span class="p">&lt;/</span><span class="nt">button</span><span class="p">&gt;</span>
</span></span><span class="line"><span class="cl">  <span class="p">&lt;/</span><span class="nt">form</span><span class="p">&gt;</span>
</span></span><span class="line"><span class="cl">  <span class="p">&lt;</span><span class="nt">div</span> <span class="na">class</span><span class="o">=</span><span class="s">&#34;dropdown-divider&#34;</span><span class="p">&gt;&lt;/</span><span class="nt">div</span><span class="p">&gt;</span>
</span></span><span class="line"><span class="cl">  <span class="p">&lt;</span><span class="nt">a</span> <span class="na">class</span><span class="o">=</span><span class="s">&#34;dropdown-item&#34;</span> <span class="na">href</span><span class="o">=</span><span class="s">&#34;#&#34;</span><span class="p">&gt;</span>New around here? Sign up<span class="p">&lt;/</span><span class="nt">a</span><span class="p">&gt;</span>
</span></span><span class="line"><span class="cl">  <span class="p">&lt;</span><span class="nt">a</span> <span class="na">class</span><span class="o">=</span><span class="s">&#34;dropdown-item&#34;</span> <span class="na">href</span><span class="o">=</span><span class="s">&#34;#&#34;</span><span class="p">&gt;</span>Forgot password?<span class="p">&lt;/</span><span class="nt">a</span><span class="p">&gt;</span>
</span></span><span class="line"><span class="cl"><span class="p">&lt;/</span><span class="nt">div</span><span class="p">&gt;</span></span></span></code></pre></div></div>

<div class="bd-example-snippet bd-code-snippet"><div class="bd-example m-0 border-0">
<div class="dropdown">
  <button type="button" class="btn btn-primary dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false" data-bs-auto-close="outside">
    Dropdown form
  </button>
  <form class="dropdown-menu p-4">
    <div class="mb-3">
      <label for="exampleDropdownFormEmail2" class="form-label">Email address</label>
      <input type="email" class="form-control" id="exampleDropdownFormEmail2" placeholder="email@example.com">
    </div>
    <div class="mb-3">
      <label for="exampleDropdownFormPassword2" class="form-label">Password</label>
      <input type="password" class="form-control" id="exampleDropdownFormPassword2" placeholder="Password">
    </div>
    <div class="mb-3">
      <div class="form-check">
        <input type="checkbox" class="form-check-input" id="dropdownCheck2">
        <label class="form-check-label" for="dropdownCheck2">
          Remember me
        </label>
      </div>
    </div>
    <button type="submit" class="btn btn-primary">Sign in</button>
  </form>
</div>
</div><div class="d-flex align-items-center highlight-toolbar ps-3 pe-2 py-1 border-0 border-top border-bottom">
        <small class="font-monospace text-body-secondary text-uppercase">html</small>
        <div class="d-flex ms-auto">
          <button type="button" class="btn-edit text-nowrap" title="Try it on StackBlitz">
            <svg class="bi" aria-hidden="true"><use xlink:href="#lightning-charge-fill"/></svg>
          </button>
          <button type="button" class="btn-clipboard mt-0 me-0" title="Copy to clipboard">
            <svg class="bi" aria-hidden="true"><use xlink:href="#clipboard"/></svg>
          </button>
        </div>
      </div><div class="highlight"><pre tabindex="0" class="chroma"><code class="language-html" data-lang="html"><span class="line"><span class="cl"><span class="p">&lt;</span><span class="nt">div</span> <span class="na">class</span><span class="o">=</span><span class="s">&#34;dropdown&#34;</span><span class="p">&gt;</span>
</span></span><span class="line"><span class="cl">  <span class="p">&lt;</span><span class="nt">button</span> <span class="na">type</span><span class="o">=</span><span class="s">&#34;button&#34;</span> <span class="na">class</span><span class="o">=</span><span class="s">&#34;btn btn-primary dropdown-toggle&#34;</span> <span class="na">data-bs-toggle</span><span class="o">=</span><span class="s">&#34;dropdown&#34;</span> <span class="na">aria-expanded</span><span class="o">=</span><span class="s">&#34;false&#34;</span> <span class="na">data-bs-auto-close</span><span class="o">=</span><span class="s">&#34;outside&#34;</span><span class="p">&gt;</span>
</span></span><span class="line"><span class="cl">    Dropdown form
</span></span><span class="line"><span class="cl">  <span class="p">&lt;/</span><span class="nt">button</span><span class="p">&gt;</span>
</span></span><span class="line"><span class="cl">  <span class="p">&lt;</span><span class="nt">form</span> <span class="na">class</span><span class="o">=</span><span class="s">&#34;dropdown-menu p-4&#34;</span><span class="p">&gt;</span>
</span></span><span class="line"><span class="cl">    <span class="p">&lt;</span><span class="nt">div</span> <span class="na">class</span><span class="o">=</span><span class="s">&#34;mb-3&#34;</span><span class="p">&gt;</span>
</span></span><span class="line"><span class="cl">      <span class="p">&lt;</span><span class="nt">label</span> <span class="na">for</span><span class="o">=</span><span class="s">&#34;exampleDropdownFormEmail2&#34;</span> <span class="na">class</span><span class="o">=</span><span class="s">&#34;form-label&#34;</span><span class="p">&gt;</span>Email address<span class="p">&lt;/</span><span class="nt">label</span><span class="p">&gt;</span>
</span></span><span class="line"><span class="cl">      <span class="p">&lt;</span><span class="nt">input</span> <span class="na">type</span><span class="o">=</span><span class="s">&#34;email&#34;</span> <span class="na">class</span><span class="o">=</span><span class="s">&#34;form-control&#34;</span> <span class="na">id</span><span class="o">=</span><span class="s">&#34;exampleDropdownFormEmail2&#34;</span> <span class="na">placeholder</span><span class="o">=</span><span class="s">&#34;email@example.com&#34;</span><span class="p">&gt;</span>
</span></span><span class="line"><span class="cl">    <span class="p">&lt;/</span><span class="nt">div</span><span class="p">&gt;</span>
</span></span><span class="line"><span class="cl">    <span class="p">&lt;</span><span class="nt">div</span> <span class="na">class</span><span class="o">=</span><span class="s">&#34;mb-3&#34;</span><span class="p">&gt;</span>
</span></span><span class="line"><span class="cl">      <span class="p">&lt;</span><span class="nt">label</span> <span class="na">for</span><span class="o">=</span><span class="s">&#34;exampleDropdownFormPassword2&#34;</span> <span class="na">class</span><span class="o">=</span><span class="s">&#34;form-label&#34;</span><span class="p">&gt;</span>Password<span class="p">&lt;/</span><span class="nt">label</span><span class="p">&gt;</span>
</span></span><span class="line"><span class="cl">      <span class="p">&lt;</span><span class="nt">input</span> <span class="na">type</span><span class="o">=</span><span class="s">&#34;password&#34;</span> <span class="na">class</span><span class="o">=</span><span class="s">&#34;form-control&#34;</span> <span class="na">id</span><span class="o">=</span><span class="s">&#34;exampleDropdownFormPassword2&#34;</span> <span class="na">placeholder</span><span class="o">=</span><span class="s">&#34;Password&#34;</span><span class="p">&gt;</span>
</span></span><span class="line"><span class="cl">    <span class="p">&lt;/</span><span class="nt">div</span><span class="p">&gt;</span>
</span></span><span class="line"><span class="cl">    <span class="p">&lt;</span><span class="nt">div</span> <span class="na">class</span><span class="o">=</span><span class="s">&#34;mb-3&#34;</span><span class="p">&gt;</span>
</span></span><span class="line"><span class="cl">      <span class="p">&lt;</span><span class="nt">div</span> <span class="na">class</span><span class="o">=</span><span class="s">&#34;form-check&#34;</span><span class="p">&gt;</span>
</span></span><span class="line"><span class="cl">        <span class="p">&lt;</span><span class="nt">input</span> <span class="na">type</span><span class="o">=</span><span class="s">&#34;checkbox&#34;</span> <span class="na">class</span><span class="o">=</span><span class="s">&#34;form-check-input&#34;</span> <span class="na">id</span><span class="o">=</span><span class="s">&#34;dropdownCheck2&#34;</span><span class="p">&gt;</span>
</span></span><span class="line"><span class="cl">        <span class="p">&lt;</span><span class="nt">label</span> <span class="na">class</span><span class="o">=</span><span class="s">&#34;form-check-label&#34;</span> <span class="na">for</span><span class="o">=</span><span class="s">&#34;dropdownCheck2&#34;</span><span class="p">&gt;</span>
</span></span><span class="line"><span class="cl">          Remember me
</span></span><span class="line"><span class="cl">        <span class="p">&lt;/</span><span class="nt">label</span><span class="p">&gt;</span>
</span></span><span class="line"><span class="cl">      <span class="p">&lt;/</span><span class="nt">div</span><span class="p">&gt;</span>
</span></span><span class="line"><span class="cl">    <span class="p">&lt;/</span><span class="nt">div</span><span class="p">&gt;</span>
</span></span><span class="line"><span class="cl">    <span class="p">&lt;</span><span class="nt">button</span> <span class="na">type</span><span class="o">=</span><span class="s">&#34;submit&#34;</span> <span class="na">class</span><span class="o">=</span><span class="s">&#34;btn btn-primary&#34;</span><span class="p">&gt;</span>Sign in<span class="p">&lt;/</span><span class="nt">button</span><span class="p">&gt;</span>
</span></span><span class="line"><span class="cl">  <span class="p">&lt;/</span><span class="nt">form</span><span class="p">&gt;</span>
</span></span><span class="line"><span class="cl"><span class="p">&lt;/</span><span class="nt">div</span><span class="p">&gt;</span></span></span></code></pre></div></div>

<h2 id="dropdown-options">Dropdown options <a class="anchor-link" href="#dropdown-options" aria-label="Link to this section: Dropdown options"></a></h2>
<p>Use <code>data-bs-offset</code> or <code>data-bs-reference</code> to change the location of the dropdown.</p>
<div class="bd-example-snippet bd-code-snippet"><div class="bd-example m-0 border-0">
<div class="d-flex">
  <div class="dropdown me-1">
    <button type="button" class="btn btn-secondary dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false" data-bs-offset="10,20">
      Offset
    </button>
    <ul class="dropdown-menu">
      <li><a class="dropdown-item" href="#">Action</a></li>
      <li><a class="dropdown-item" href="#">Another action</a></li>
      <li><a class="dropdown-item" href="#">Something else here</a></li>
    </ul>
  </div>
  <div class="btn-group">
    <button type="button" class="btn btn-secondary">Reference</button>
    <button type="button" class="btn btn-secondary dropdown-toggle dropdown-toggle-split" data-bs-toggle="dropdown" aria-expanded="false" data-bs-reference="parent">
      <span class="visually-hidden">Toggle Dropdown</span>
    </button>
    <ul class="dropdown-menu">
      <li><a class="dropdown-item" href="#">Action</a></li>
      <li><a class="dropdown-item" href="#">Another action</a></li>
      <li><a class="dropdown-item" href="#">Something else here</a></li>
      <li><hr class="dropdown-divider"></li>
      <li><a class="dropdown-item" href="#">Separated link</a></li>
    </ul>
  </div>
</div>
</div><div class="d-flex align-items-center highlight-toolbar ps-3 pe-2 py-1 border-0 border-top border-bottom">
        <small class="font-monospace text-body-secondary text-uppercase">html</small>
        <div class="d-flex ms-auto">
          <button type="button" class="btn-edit text-nowrap" title="Try it on StackBlitz">
            <svg class="bi" aria-hidden="true"><use xlink:href="#lightning-charge-fill"/></svg>
          </button>
          <button type="button" class="btn-clipboard mt-0 me-0" title="Copy to clipboard">
            <svg class="bi" aria-hidden="true"><use xlink:href="#clipboard"/></svg>
          </button>
        </div>
      </div><div class="highlight"><pre tabindex="0" class="chroma"><code class="language-html" data-lang="html"><span class="line"><span class="cl"><span class="p">&lt;</span><span class="nt">div</span> <span class="na">class</span><span class="o">=</span><span class="s">&#34;d-flex&#34;</span><span class="p">&gt;</span>
</span></span><span class="line"><span class="cl">  <span class="p">&lt;</span><span class="nt">div</span> <span class="na">class</span><span class="o">=</span><span class="s">&#34;dropdown me-1&#34;</span><span class="p">&gt;</span>
</span></span><span class="line"><span class="cl">    <span class="p">&lt;</span><span class="nt">button</span> <span class="na">type</span><span class="o">=</span><span class="s">&#34;button&#34;</span> <span class="na">class</span><span class="o">=</span><span class="s">&#34;btn btn-secondary dropdown-toggle&#34;</span> <span class="na">data-bs-toggle</span><span class="o">=</span><span class="s">&#34;dropdown&#34;</span> <span class="na">aria-expanded</span><span class="o">=</span><span class="s">&#34;false&#34;</span> <span class="na">data-bs-offset</span><span class="o">=</span><span class="s">&#34;10,20&#34;</span><span class="p">&gt;</span>
</span></span><span class="line"><span class="cl">      Offset
</span></span><span class="line"><span class="cl">    <span class="p">&lt;/</span><span class="nt">button</span><span class="p">&gt;</span>
</span></span><span class="line"><span class="cl">    <span class="p">&lt;</span><span class="nt">ul</span> <span class="na">class</span><span class="o">=</span><span class="s">&#34;dropdown-menu&#34;</span><span class="p">&gt;</span>
</span></span><span class="line"><span class="cl">      <span class="p">&lt;</span><span class="nt">li</span><span class="p">&gt;&lt;</span><span class="nt">a</span> <span class="na">class</span><span class="o">=</span><span class="s">&#34;dropdown-item&#34;</span> <span class="na">href</span><span class="o">=</span><span class="s">&#34;#&#34;</span><span class="p">&gt;</span>Action<span class="p">&lt;/</span><span class="nt">a</span><span class="p">&gt;&lt;/</span><span class="nt">li</span><span class="p">&gt;</span>
</span></span><span class="line"><span class="cl">      <span class="p">&lt;</span><span class="nt">li</span><span class="p">&gt;&lt;</span><span class="nt">a</span> <span class="na">class</span><span class="o">=</span><span class="s">&#34;dropdown-item&#34;</span> <span class="na">href</span><span class="o">=</span><span class="s">&#34;#&#34;</span><span class="p">&gt;</span>Another action<span class="p">&lt;/</span><span class="nt">a</span><span class="p">&gt;&lt;/</span><span class="nt">li</span><span class="p">&gt;</span>
</span></span><span class="line"><span class="cl">      <span class="p">&lt;</span><span class="nt">li</span><span class="p">&gt;&lt;</span><span class="nt">a</span> <span class="na">class</span><span class="o">=</span><span class="s">&#34;dropdown-item&#34;</span> <span class="na">href</span><span class="o">=</span><span class="s">&#34;#&#34;</span><span class="p">&gt;</span>Something else here<span class="p">&lt;/</span><span class="nt">a</span><span class="p">&gt;&lt;/</span><span class="nt">li</span><span class="p">&gt;</span>
</span></span><span class="line"><span class="cl">    <span class="p">&lt;/</span><span class="nt">ul</span><span class="p">&gt;</span>
</span></span><span class="line"><span class="cl">  <span class="p">&lt;/</span><span class="nt">div</span><span class="p">&gt;</span>
</span></span><span class="line"><span class="cl">  <span class="p">&lt;</span><span class="nt">div</span> <span class="na">class</span><span class="o">=</span><span class="s">&#34;btn-group&#34;</span><span class="p">&gt;</span>
</span></span><span class="line"><span class="cl">    <span class="p">&lt;</span><span class="nt">button</span> <span class="na">type</span><span class="o">=</span><span class="s">&#34;button&#34;</span> <span class="na">class</span><span class="o">=</span><span class="s">&#34;btn btn-secondary&#34;</span><span class="p">&gt;</span>Reference<span class="p">&lt;/</span><span class="nt">button</span><span class="p">&gt;</span>
</span></span><span class="line"><span class="cl">    <span class="p">&lt;</span><span class="nt">button</span> <span class="na">type</span><span class="o">=</span><span class="s">&#34;button&#34;</span> <span class="na">class</span><span class="o">=</span><span class="s">&#34;btn btn-secondary dropdown-toggle dropdown-toggle-split&#34;</span> <span class="na">data-bs-toggle</span><span class="o">=</span><span class="s">&#34;dropdown&#34;</span> <span class="na">aria-expanded</span><span class="o">=</span><span class="s">&#34;false&#34;</span> <span class="na">data-bs-reference</span><span class="o">=</span><span class="s">&#34;parent&#34;</span><span class="p">&gt;</span>
</span></span><span class="line"><span class="cl">      <span class="p">&lt;</span><span class="nt">span</span> <span class="na">class</span><span class="o">=</span><span class="s">&#34;visually-hidden&#34;</span><span class="p">&gt;</span>Toggle Dropdown<span class="p">&lt;/</span><span class="nt">span</span><span class="p">&gt;</span>
</span></span><span class="line"><span class="cl">    <span class="p">&lt;/</span><span class="nt">button</span><span class="p">&gt;</span>
</span></span><span class="line"><span class="cl">    <span class="p">&lt;</span><span class="nt">ul</span> <span class="na">class</span><span class="o">=</span><span class="s">&#34;dropdown-menu&#34;</span><span class="p">&gt;</span>
</span></span><span class="line"><span class="cl">      <span class="p">&lt;</span><span class="nt">li</span><span class="p">&gt;&lt;</span><span class="nt">a</span> <span class="na">class</span><span class="o">=</span><span class="s">&#34;dropdown-item&#34;</span> <span class="na">href</span><span class="o">=</span><span class="s">&#34;#&#34;</span><span class="p">&gt;</span>Action<span class="p">&lt;/</span><span class="nt">a</span><span class="p">&gt;&lt;/</span><span class="nt">li</span><span class="p">&gt;</span>
</span></span><span class="line"><span class="cl">      <span class="p">&lt;</span><span class="nt">li</span><span class="p">&gt;&lt;</span><span class="nt">a</span> <span class="na">class</span><span class="o">=</span><span class="s">&#34;dropdown-item&#34;</span> <span class="na">href</span><span class="o">=</span><span class="s">&#34;#&#34;</span><span class="p">&gt;</span>Another action<span class="p">&lt;/</span><span class="nt">a</span><span class="p">&gt;&lt;/</span><span class="nt">li</span><span class="p">&gt;</span>
</span></span><span class="line"><span class="cl">      <span class="p">&lt;</span><span class="nt">li</span><span class="p">&gt;&lt;</span><span class="nt">a</span> <span class="na">class</span><span class="o">=</span><span class="s">&#34;dropdown-item&#34;</span> <span class="na">href</span><span class="o">=</span><span class="s">&#34;#&#34;</span><span class="p">&gt;</span>Something else here<span class="p">&lt;/</span><span class="nt">a</span><span class="p">&gt;&lt;/</span><span class="nt">li</span><span class="p">&gt;</span>
</span></span><span class="line"><span class="cl">      <span class="p">&lt;</span><span class="nt">li</span><span class="p">&gt;&lt;</span><span class="nt">hr</span> <span class="na">class</span><span class="o">=</span><span class="s">&#34;dropdown-divider&#34;</span><span class="p">&gt;&lt;/</span><span class="nt">li</span><span class="p">&gt;</span>
</span></span><span class="line"><span class="cl">      <span class="p">&lt;</span><span class="nt">li</span><span class="p">&gt;&lt;</span><span class="nt">a</span> <span class="na">class</span><span class="o">=</span><span class="s">&#34;dropdown-item&#34;</span> <span class="na">href</span><span class="o">=</span><span class="s">&#34;#&#34;</span><span class="p">&gt;</span>Separated link<span class="p">&lt;/</span><span class="nt">a</span><span class="p">&gt;&lt;/</span><span class="nt">li</span><span class="p">&gt;</span>
</span></span><span class="line"><span class="cl">    <span class="p">&lt;/</span><span class="nt">ul</span><span class="p">&gt;</span>
</span></span><span class="line"><span class="cl">  <span class="p">&lt;/</span><span class="nt">div</span><span class="p">&gt;</span>
</span></span><span class="line"><span class="cl"><span class="p">&lt;/</span><span class="nt">div</span><span class="p">&gt;</span></span></span></code></pre></div></div>

<h3 id="auto-close-behavior">Auto close behavior <a class="anchor-link" href="#auto-close-behavior" aria-label="Link to this section: Auto close behavior"></a></h3>
<p>By default, the dropdown menu is closed when clicking inside or outside the dropdown menu. You can use the <code>autoClose</code> option to change this behavior of the dropdown.</p>
<div class="bd-example-snippet bd-code-snippet"><div class="bd-example m-0 border-0">
<div class="btn-group">
  <button class="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" data-bs-auto-close="true" aria-expanded="false">
    Default dropdown
  </button>
  <ul class="dropdown-menu">
    <li><a class="dropdown-item" href="#">Menu item</a></li>
    <li><a class="dropdown-item" href="#">Menu item</a></li>
    <li><a class="dropdown-item" href="#">Menu item</a></li>
  </ul>
</div>

<div class="btn-group">
  <button class="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" data-bs-auto-close="inside" aria-expanded="false">
    Clickable inside
  </button>
  <ul class="dropdown-menu">
    <li><a class="dropdown-item" href="#">Menu item</a></li>
    <li><a class="dropdown-item" href="#">Menu item</a></li>
    <li><a class="dropdown-item" href="#">Menu item</a></li>
  </ul>
</div>

<div class="btn-group">
  <button class="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" data-bs-auto-close="outside" aria-expanded="false">
    Clickable outside
  </button>
  <ul class="dropdown-menu">
    <li><a class="dropdown-item" href="#">Menu item</a></li>
    <li><a class="dropdown-item" href="#">Menu item</a></li>
    <li><a class="dropdown-item" href="#">Menu item</a></li>
  </ul>
</div>

<div class="btn-group">
  <button class="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" data-bs-auto-close="false" aria-expanded="false">
    Manual close
  </button>
  <ul class="dropdown-menu">
    <li><a class="dropdown-item" href="#">Menu item</a></li>
    <li><a class="dropdown-item" href="#">Menu item</a></li>
    <li><a class="dropdown-item" href="#">Menu item</a></li>
  </ul>
</div>
</div><div class="d-flex align-items-center highlight-toolbar ps-3 pe-2 py-1 border-0 border-top border-bottom">
        <small class="font-monospace text-body-secondary text-uppercase">html</small>
        <div class="d-flex ms-auto">
          <button type="button" class="btn-edit text-nowrap" title="Try it on StackBlitz">
            <svg class="bi" aria-hidden="true"><use xlink:href="#lightning-charge-fill"/></svg>
          </button>
          <button type="button" class="btn-clipboard mt-0 me-0" title="Copy to clipboard">
            <svg class="bi" aria-hidden="true"><use xlink:href="#clipboard"/></svg>
          </button>
        </div>
      </div><div class="highlight"><pre tabindex="0" class="chroma"><code class="language-html" data-lang="html"><span class="line"><span class="cl"><span class="p">&lt;</span><span class="nt">div</span> <span class="na">class</span><span class="o">=</span><span class="s">&#34;btn-group&#34;</span><span class="p">&gt;</span>
</span></span><span class="line"><span class="cl">  <span class="p">&lt;</span><span class="nt">button</span> <span class="na">class</span><span class="o">=</span><span class="s">&#34;btn btn-secondary dropdown-toggle&#34;</span> <span class="na">type</span><span class="o">=</span><span class="s">&#34;button&#34;</span> <span class="na">data-bs-toggle</span><span class="o">=</span><span class="s">&#34;dropdown&#34;</span> <span class="na">data-bs-auto-close</span><span class="o">=</span><span class="s">&#34;true&#34;</span> <span class="na">aria-expanded</span><span class="o">=</span><span class="s">&#34;false&#34;</span><span class="p">&gt;</span>
</span></span><span class="line"><span class="cl">    Default dropdown
</span></span><span class="line"><span class="cl">  <span class="p">&lt;/</span><span class="nt">button</span><span class="p">&gt;</span>
</span></span><span class="line"><span class="cl">  <span class="p">&lt;</span><span class="nt">ul</span> <span class="na">class</span><span class="o">=</span><span class="s">&#34;dropdown-menu&#34;</span><span class="p">&gt;</span>
</span></span><span class="line"><span class="cl">    <span class="p">&lt;</span><span class="nt">li</span><span class="p">&gt;&lt;</span><span class="nt">a</span> <span class="na">class</span><span class="o">=</span><span class="s">&#34;dropdown-item&#34;</span> <span class="na">href</span><span class="o">=</span><span class="s">&#34;#&#34;</span><span class="p">&gt;</span>Menu item<span class="p">&lt;/</span><span class="nt">a</span><span class="p">&gt;&lt;/</span><span class="nt">li</span><span class="p">&gt;</span>
</span></span><span class="line"><span class="cl">    <span class="p">&lt;</span><span class="nt">li</span><span class="p">&gt;&lt;</span><span class="nt">a</span> <span class="na">class</span><span class="o">=</span><span class="s">&#34;dropdown-item&#34;</span> <span class="na">href</span><span class="o">=</span><span class="s">&#34;#&#34;</span><span class="p">&gt;</span>Menu item<span class="p">&lt;/</span><span class="nt">a</span><span class="p">&gt;&lt;/</span><span class="nt">li</span><span class="p">&gt;</span>
</span></span><span class="line"><span class="cl">    <span class="p">&lt;</span><span class="nt">li</span><span class="p">&gt;&lt;</span><span class="nt">a</span> <span class="na">class</span><span class="o">=</span><span class="s">&#34;dropdown-item&#34;</span> <span class="na">href</span><span class="o">=</span><span class="s">&#34;#&#34;</span><span class="p">&gt;</span>Menu item<span class="p">&lt;/</span><span class="nt">a</span><span class="p">&gt;&lt;/</span><span class="nt">li</span><span class="p">&gt;</span>
</span></span><span class="line"><span class="cl">  <span class="p">&lt;/</span><span class="nt">ul</span><span class="p">&gt;</span>
</span></span><span class="line"><span class="cl"><span class="p">&lt;/</span><span class="nt">div</span><span class="p">&gt;</span>
</span></span><span class="line"><span class="cl">
</span></span><span class="line"><span class="cl"><span class="p">&lt;</span><span class="nt">div</span> <span class="na">class</span><span class="o">=</span><span class="s">&#34;btn-group&#34;</span><span class="p">&gt;</span>
</span></span><span class="line"><span class="cl">  <span class="p">&lt;</span><span class="nt">button</span> <span class="na">class</span><span class="o">=</span><span class="s">&#34;btn btn-secondary dropdown-toggle&#34;</span> <span class="na">type</span><span class="o">=</span><span class="s">&#34;button&#34;</span> <span class="na">data-bs-toggle</span><span class="o">=</span><span class="s">&#34;dropdown&#34;</span> <span class="na">data-bs-auto-close</span><span class="o">=</span><span class="s">&#34;inside&#34;</span> <span class="na">aria-expanded</span><span class="o">=</span><span class="s">&#34;false&#34;</span><span class="p">&gt;</span>
</span></span><span class="line"><span class="cl">    Clickable inside
</span></span><span class="line"><span class="cl">  <span class="p">&lt;/</span><span class="nt">button</span><span class="p">&gt;</span>
</span></span><span class="line"><span class="cl">  <span class="p">&lt;</span><span class="nt">ul</span> <span class="na">class</span><span class="o">=</span><span class="s">&#34;dropdown-menu&#34;</span><span class="p">&gt;</span>
</span></span><span class="line"><span class="cl">    <span class="p">&lt;</span><span class="nt">li</span><span class="p">&gt;&lt;</span><span class="nt">a</span> <span class="na">class</span><span class="o">=</span><span class="s">&#34;dropdown-item&#34;</span> <span class="na">href</span><span class="o">=</span><span class="s">&#34;#&#34;</span><span class="p">&gt;</span>Menu item<span class="p">&lt;/</span><span class="nt">a</span><span class="p">&gt;&lt;/</span><span class="nt">li</span><span class="p">&gt;</span>
</span></span><span class="line"><span class="cl">    <span class="p">&lt;</span><span class="nt">li</span><span class="p">&gt;&lt;</span><span class="nt">a</span> <span class="na">class</span><span class="o">=</span><span class="s">&#34;dropdown-item&#34;</span> <span class="na">href</span><span class="o">=</span><span class="s">&#34;#&#34;</span><span class="p">&gt;</span>Menu item<span class="p">&lt;/</span><span class="nt">a</span><span class="p">&gt;&lt;/</span><span class="nt">li</span><span class="p">&gt;</span>
</span></span><span class="line"><span class="cl">    <span class="p">&lt;</span><span class="nt">li</span><span class="p">&gt;&lt;</span><span class="nt">a</span> <span class="na">class</span><span class="o">=</span><span class="s">&#34;dropdown-item&#34;</span> <span class="na">href</span><span class="o">=</span><span class="s">&#34;#&#34;</span><span class="p">&gt;</span>Menu item<span class="p">&lt;/</span><span class="nt">a</span><span class="p">&gt;&lt;/</span><span class="nt">li</span><span class="p">&gt;</span>
</span></span><span class="line"><span class="cl">  <span class="p">&lt;/</span><span class="nt">ul</span><span class="p">&gt;</span>
</span></span><span class="line"><span class="cl"><span class="p">&lt;/</span><span class="nt">div</span><span class="p">&gt;</span>
</span></span><span class="line"><span class="cl">
</span></span><span class="line"><span class="cl"><span class="p">&lt;</span><span class="nt">div</span> <span class="na">class</span><span class="o">=</span><span class="s">&#34;btn-group&#34;</span><span class="p">&gt;</span>
</span></span><span class="line"><span class="cl">  <span class="p">&lt;</span><span class="nt">button</span> <span class="na">class</span><span class="o">=</span><span class="s">&#34;btn btn-secondary dropdown-toggle&#34;</span> <span class="na">type</span><span class="o">=</span><span class="s">&#34;button&#34;</span> <span class="na">data-bs-toggle</span><span class="o">=</span><span class="s">&#34;dropdown&#34;</span> <span class="na">data-bs-auto-close</span><span class="o">=</span><span class="s">&#34;outside&#34;</span> <span class="na">aria-expanded</span><span class="o">=</span><span class="s">&#34;false&#34;</span><span class="p">&gt;</span>
</span></span><span class="line"><span class="cl">    Clickable outside
</span></span><span class="line"><span class="cl">  <span class="p">&lt;/</span><span class="nt">button</span><span class="p">&gt;</span>
</span></span><span class="line"><span class="cl">  <span class="p">&lt;</span><span class="nt">ul</span> <span class="na">class</span><span class="o">=</span><span class="s">&#34;dropdown-menu&#34;</span><span class="p">&gt;</span>
</span></span><span class="line"><span class="cl">    <span class="p">&lt;</span><span class="nt">li</span><span class="p">&gt;&lt;</span><span class="nt">a</span> <span class="na">class</span><span class="o">=</span><span class="s">&#34;dropdown-item&#34;</span> <span class="na">href</span><span class="o">=</span><span class="s">&#34;#&#34;</span><span class="p">&gt;</span>Menu item<span class="p">&lt;/</span><span class="nt">a</span><span class="p">&gt;&lt;/</span><span class="nt">li</span><span class="p">&gt;</span>
</span></span><span class="line"><span class="cl">    <span class="p">&lt;</span><span class="nt">li</span><span class="p">&gt;&lt;</span><span class="nt">a</span> <span class="na">class</span><span class="o">=</span><span class="s">&#34;dropdown-item&#34;</span> <span class="na">href</span><span class="o">=</span><span class="s">&#34;#&#34;</span><span class="p">&gt;</span>Menu item<span class="p">&lt;/</span><span class="nt">a</span><span class="p">&gt;&lt;/</span><span class="nt">li</span><span class="p">&gt;</span>
</span></span><span class="line"><span class="cl">    <span class="p">&lt;</span><span class="nt">li</span><span class="p">&gt;&lt;</span><span class="nt">a</span> <span class="na">class</span><span class="o">=</span><span class="s">&#34;dropdown-item&#34;</span> <span class="na">href</span><span class="o">=</span><span class="s">&#34;#&#34;</span><span class="p">&gt;</span>Menu item<span class="p">&lt;/</span><span class="nt">a</span><span class="p">&gt;&lt;/</span><span class="nt">li</span><span class="p">&gt;</span>
</span></span><span class="line"><span class="cl">  <span class="p">&lt;/</span><span class="nt">ul</span><span class="p">&gt;</span>
</span></span><span class="line"><span class="cl"><span class="p">&lt;/</span><span class="nt">div</span><span class="p">&gt;</span>
</span></span><span class="line"><span class="cl">
</span></span><span class="line"><span class="cl"><span class="p">&lt;</span><span class="nt">div</span> <span class="na">class</span><span class="o">=</span><span class="s">&#34;btn-group&#34;</span><span class="p">&gt;</span>
</span></span><span class="line"><span class="cl">  <span class="p">&lt;</span><span class="nt">button</span> <span class="na">class</span><span class="o">=</span><span class="s">&#34;btn btn-secondary dropdown-toggle&#34;</span> <span class="na">type</span><span class="o">=</span><span class="s">&#34;button&#34;</span> <span class="na">data-bs-toggle</span><span class="o">=</span><span class="s">&#34;dropdown&#34;</span> <span class="na">data-bs-auto-close</span><span class="o">=</span><span class="s">&#34;false&#34;</span> <span class="na">aria-expanded</span><span class="o">=</span><span class="s">&#34;false&#34;</span><span class="p">&gt;</span>
</span></span><span class="line"><span class="cl">    Manual close
</span></span><span class="line"><span class="cl">  <span class="p">&lt;/</span><span class="nt">button</span><span class="p">&gt;</span>
</span></span><span class="line"><span class="cl">  <span class="p">&lt;</span><span class="nt">ul</span> <span class="na">class</span><span class="o">=</span><span class="s">&#34;dropdown-menu&#34;</span><span class="p">&gt;</span>
</span></span><span class="line"><span class="cl">    <span class="p">&lt;</span><span class="nt">li</span><span class="p">&gt;&lt;</span><span class="nt">a</span> <span class="na">class</span><span class="o">=</span><span class="s">&#34;dropdown-item&#34;</span> <span class="na">href</span><span class="o">=</span><span class="s">&#34;#&#34;</span><span class="p">&gt;</span>Menu item<span class="p">&lt;/</span><span class="nt">a</span><span class="p">&gt;&lt;/</span><span class="nt">li</span><span class="p">&gt;</span>
</span></span><span class="line"><span class="cl">    <span class="p">&lt;</span><span class="nt">li</span><span class="p">&gt;&lt;</span><span class="nt">a</span> <span class="na">class</span><span class="o">=</span><span class="s">&#34;dropdown-item&#34;</span> <span class="na">href</span><span class="o">=</span><span class="s">&#34;#&#34;</span><span class="p">&gt;</span>Menu item<span class="p">&lt;/</span><span class="nt">a</span><span class="p">&gt;&lt;/</span><span class="nt">li</span><span class="p">&gt;</span>
</span></span><span class="line"><span class="cl">    <span class="p">&lt;</span><span class="nt">li</span><span class="p">&gt;&lt;</span><span class="nt">a</span> <span class="na">class</span><span class="o">=</span><span class="s">&#34;dropdown-item&#34;</span> <span class="na">href</span><span class="o">=</span><span class="s">&#34;#&#34;</span><span class="p">&gt;</span>Menu item<span class="p">&lt;/</span><span class="nt">a</span><span class="p">&gt;&lt;/</span><span class="nt">li</span><span class="p">&gt;</span>
</span></span><span class="line"><span class="cl">  <span class="p">&lt;/</span><span class="nt">ul</span><span class="p">&gt;</span>
</span></span><span class="line"><span class="cl"><span class="p">&lt;/</span><span class="nt">div</span><span class="p">&gt;</span></span></span></code></pre></div></div>

<h2 id="css">CSS <a class="anchor-link" href="#css" aria-label="Link to this section: CSS"></a></h2>
<h3 id="variables">Variables <a class="anchor-link" href="#variables" aria-label="Link to this section: Variables"></a></h3>
<small class="d-inline-flex mb-3 px-2 py-1 fw-semibold text-success-emphasis bg-success-subtle border border-success-subtle rounded-2">Added in v5.2.0</small>

<p>As part of Bootstrap&rsquo;s evolving CSS variables approach, dropdowns now use local CSS variables on <code>.dropdown-menu</code> for enhanced real-time customization. Values for the CSS variables are set via Sass, so Sass customization is still supported, too.</p>
<div class="bd-example-snippet bd-code-snippet bd-file-ref">
    <div class="d-flex align-items-center highlight-toolbar ps-3 pe-2 py-1 border-bottom">
      <a class="font-monospace link-secondary link-underline-secondary link-underline-opacity-0 link-underline-opacity-100-hover small" href="https://github.com/twbs/bootstrap/blob/v5.3.2/scss/_dropdown.scss">scss/_dropdown.scss</a>
      <div class="d-flex ms-auto">
        <button type="button" class="btn-clipboard mt-0 me-0" title="Copy to clipboard">
          <svg class="bi" aria-hidden="true"><use xlink:href="#clipboard"/></svg>
        </button>
      </div>
    </div><div class="highlight"><pre tabindex="0" class="chroma"><code class="language-scss" data-lang="scss"><span class="line"><span class="cl"><span class="na">--#{$prefix}dropdown-zindex</span><span class="o">:</span> <span class="si">#{</span><span class="nv">$zindex-dropdown</span><span class="si">}</span><span class="p">;</span>
</span></span><span class="line"><span class="cl"><span class="na">--#{$prefix}dropdown-min-width</span><span class="o">:</span> <span class="si">#{</span><span class="nv">$dropdown-min-width</span><span class="si">}</span><span class="p">;</span>
</span></span><span class="line"><span class="cl"><span class="na">--#{$prefix}dropdown-padding-x</span><span class="o">:</span> <span class="si">#{</span><span class="nv">$dropdown-padding-x</span><span class="si">}</span><span class="p">;</span>
</span></span><span class="line"><span class="cl"><span class="na">--#{$prefix}dropdown-padding-y</span><span class="o">:</span> <span class="si">#{</span><span class="nv">$dropdown-padding-y</span><span class="si">}</span><span class="p">;</span>
</span></span><span class="line"><span class="cl"><span class="na">--#{$prefix}dropdown-spacer</span><span class="o">:</span> <span class="si">#{</span><span class="nv">$dropdown-spacer</span><span class="si">}</span><span class="p">;</span>
</span></span><span class="line"><span class="cl"><span class="k">@include</span><span class="nd"> rfs</span><span class="p">(</span><span class="nv">$dropdown-font-size</span><span class="o">,</span> <span class="o">--</span><span class="si">#{</span><span class="nv">$prefix</span><span class="si">}</span><span class="n">dropdown-font-size</span><span class="p">);</span>
</span></span><span class="line"><span class="cl"><span class="na">--#{$prefix}dropdown-color</span><span class="o">:</span> <span class="si">#{</span><span class="nv">$dropdown-color</span><span class="si">}</span><span class="p">;</span>
</span></span><span class="line"><span class="cl"><span class="na">--#{$prefix}dropdown-bg</span><span class="o">:</span> <span class="si">#{</span><span class="nv">$dropdown-bg</span><span class="si">}</span><span class="p">;</span>
</span></span><span class="line"><span class="cl"><span class="na">--#{$prefix}dropdown-border-color</span><span class="o">:</span> <span class="si">#{</span><span class="nv">$dropdown-border-color</span><span class="si">}</span><span class="p">;</span>
</span></span><span class="line"><span class="cl"><span class="na">--#{$prefix}dropdown-border-radius</span><span class="o">:</span> <span class="si">#{</span><span class="nv">$dropdown-border-radius</span><span class="si">}</span><span class="p">;</span>
</span></span><span class="line"><span class="cl"><span class="na">--#{$prefix}dropdown-border-width</span><span class="o">:</span> <span class="si">#{</span><span class="nv">$dropdown-border-width</span><span class="si">}</span><span class="p">;</span>
</span></span><span class="line"><span class="cl"><span class="na">--#{$prefix}dropdown-inner-border-radius</span><span class="o">:</span> <span class="si">#{</span><span class="nv">$dropdown-inner-border-radius</span><span class="si">}</span><span class="p">;</span>
</span></span><span class="line"><span class="cl"><span class="na">--#{$prefix}dropdown-divider-bg</span><span class="o">:</span> <span class="si">#{</span><span class="nv">$dropdown-divider-bg</span><span class="si">}</span><span class="p">;</span>
</span></span><span class="line"><span class="cl"><span class="na">--#{$prefix}dropdown-divider-margin-y</span><span class="o">:</span> <span class="si">#{</span><span class="nv">$dropdown-divider-margin-y</span><span class="si">}</span><span class="p">;</span>
</span></span><span class="line"><span class="cl"><span class="na">--#{$prefix}dropdown-box-shadow</span><span class="o">:</span> <span class="si">#{</span><span class="nv">$dropdown-box-shadow</span><span class="si">}</span><span class="p">;</span>
</span></span><span class="line"><span class="cl"><span class="na">--#{$prefix}dropdown-link-color</span><span class="o">:</span> <span class="si">#{</span><span class="nv">$dropdown-link-color</span><span class="si">}</span><span class="p">;</span>
</span></span><span class="line"><span class="cl"><span class="na">--#{$prefix}dropdown-link-hover-color</span><span class="o">:</span> <span class="si">#{</span><span class="nv">$dropdown-link-hover-color</span><span class="si">}</span><span class="p">;</span>
</span></span><span class="line"><span class="cl"><span class="na">--#{$prefix}dropdown-link-hover-bg</span><span class="o">:</span> <span class="si">#{</span><span class="nv">$dropdown-link-hover-bg</span><span class="si">}</span><span class="p">;</span>
</span></span><span class="line"><span class="cl"><span class="na">--#{$prefix}dropdown-link-active-color</span><span class="o">:</span> <span class="si">#{</span><span class="nv">$dropdown-link-active-color</span><span class="si">}</span><span class="p">;</span>
</span></span><span class="line"><span class="cl"><span class="na">--#{$prefix}dropdown-link-active-bg</span><span class="o">:</span> <span class="si">#{</span><span class="nv">$dropdown-link-active-bg</span><span class="si">}</span><span class="p">;</span>
</span></span><span class="line"><span class="cl"><span class="na">--#{$prefix}dropdown-link-disabled-color</span><span class="o">:</span> <span class="si">#{</span><span class="nv">$dropdown-link-disabled-color</span><span class="si">}</span><span class="p">;</span>
</span></span><span class="line"><span class="cl"><span class="na">--#{$prefix}dropdown-item-padding-x</span><span class="o">:</span> <span class="si">#{</span><span class="nv">$dropdown-item-padding-x</span><span class="si">}</span><span class="p">;</span>
</span></span><span class="line"><span class="cl"><span class="na">--#{$prefix}dropdown-item-padding-y</span><span class="o">:</span> <span class="si">#{</span><span class="nv">$dropdown-item-padding-y</span><span class="si">}</span><span class="p">;</span>
</span></span><span class="line"><span class="cl"><span class="na">--#{$prefix}dropdown-header-color</span><span class="o">:</span> <span class="si">#{</span><span class="nv">$dropdown-header-color</span><span class="si">}</span><span class="p">;</span>
</span></span><span class="line"><span class="cl"><span class="na">--#{$prefix}dropdown-header-padding-x</span><span class="o">:</span> <span class="si">#{</span><span class="nv">$dropdown-header-padding-x</span><span class="si">}</span><span class="p">;</span>
</span></span><span class="line"><span class="cl"><span class="na">--#{$prefix}dropdown-header-padding-y</span><span class="o">:</span> <span class="si">#{</span><span class="nv">$dropdown-header-padding-y</span><span class="si">}</span><span class="p">;</span></span></span></code></pre></div></div>
<div class="bd-callout bd-callout-info">
<p>Dropdown items include at least one variable that is not set on <code>.dropdown</code>. This allows you to provide a new value while Bootstrap defaults to a fallback value.</p>
<ul>
<li><code>--bs-dropdown-item-border-radius</code></li>
</ul>

</div>

<p>Customization through CSS variables can be seen on the <code>.dropdown-menu-dark</code> class where we override specific values without adding duplicate CSS selectors.</p>
<div class="bd-example-snippet bd-code-snippet bd-file-ref">
    <div class="d-flex align-items-center highlight-toolbar ps-3 pe-2 py-1 border-bottom">
      <a class="font-monospace link-secondary link-underline-secondary link-underline-opacity-0 link-underline-opacity-100-hover small" href="https://github.com/twbs/bootstrap/blob/v5.3.2/scss/_dropdown.scss">scss/_dropdown.scss</a>
      <div class="d-flex ms-auto">
        <button type="button" class="btn-clipboard mt-0 me-0" title="Copy to clipboard">
          <svg class="bi" aria-hidden="true"><use xlink:href="#clipboard"/></svg>
        </button>
      </div>
    </div><div class="highlight"><pre tabindex="0" class="chroma"><code class="language-scss" data-lang="scss"><span class="line"><span class="cl"><span class="na">--#{$prefix}dropdown-color</span><span class="o">:</span> <span class="si">#{</span><span class="nv">$dropdown-dark-color</span><span class="si">}</span><span class="p">;</span>
</span></span><span class="line"><span class="cl"><span class="na">--#{$prefix}dropdown-bg</span><span class="o">:</span> <span class="si">#{</span><span class="nv">$dropdown-dark-bg</span><span class="si">}</span><span class="p">;</span>
</span></span><span class="line"><span class="cl"><span class="na">--#{$prefix}dropdown-border-color</span><span class="o">:</span> <span class="si">#{</span><span class="nv">$dropdown-dark-border-color</span><span class="si">}</span><span class="p">;</span>
</span></span><span class="line"><span class="cl"><span class="na">--#{$prefix}dropdown-box-shadow</span><span class="o">:</span> <span class="si">#{</span><span class="nv">$dropdown-dark-box-shadow</span><span class="si">}</span><span class="p">;</span>
</span></span><span class="line"><span class="cl"><span class="na">--#{$prefix}dropdown-link-color</span><span class="o">:</span> <span class="si">#{</span><span class="nv">$dropdown-dark-link-color</span><span class="si">}</span><span class="p">;</span>
</span></span><span class="line"><span class="cl"><span class="na">--#{$prefix}dropdown-link-hover-color</span><span class="o">:</span> <span class="si">#{</span><span class="nv">$dropdown-dark-link-hover-color</span><span class="si">}</span><span class="p">;</span>
</span></span><span class="line"><span class="cl"><span class="na">--#{$prefix}dropdown-divider-bg</span><span class="o">:</span> <span class="si">#{</span><span class="nv">$dropdown-dark-divider-bg</span><span class="si">}</span><span class="p">;</span>
</span></span><span class="line"><span class="cl"><span class="na">--#{$prefix}dropdown-link-hover-bg</span><span class="o">:</span> <span class="si">#{</span><span class="nv">$dropdown-dark-link-hover-bg</span><span class="si">}</span><span class="p">;</span>
</span></span><span class="line"><span class="cl"><span class="na">--#{$prefix}dropdown-link-active-color</span><span class="o">:</span> <span class="si">#{</span><span class="nv">$dropdown-dark-link-active-color</span><span class="si">}</span><span class="p">;</span>
</span></span><span class="line"><span class="cl"><span class="na">--#{$prefix}dropdown-link-active-bg</span><span class="o">:</span> <span class="si">#{</span><span class="nv">$dropdown-dark-link-active-bg</span><span class="si">}</span><span class="p">;</span>
</span></span><span class="line"><span class="cl"><span class="na">--#{$prefix}dropdown-link-disabled-color</span><span class="o">:</span> <span class="si">#{</span><span class="nv">$dropdown-dark-link-disabled-color</span><span class="si">}</span><span class="p">;</span>
</span></span><span class="line"><span class="cl"><span class="na">--#{$prefix}dropdown-header-color</span><span class="o">:</span> <span class="si">#{</span><span class="nv">$dropdown-dark-header-color</span><span class="si">}</span><span class="p">;</span></span></span></code></pre></div></div>
<h3 id="sass-variables">Sass variables <a class="anchor-link" href="#sass-variables" aria-label="Link to this section: Sass variables"></a></h3>
<p>Variables for all dropdowns:</p>
<div class="bd-example-snippet bd-code-snippet bd-file-ref">
    <div class="d-flex align-items-center highlight-toolbar ps-3 pe-2 py-1 border-bottom">
      <a class="font-monospace link-secondary link-underline-secondary link-underline-opacity-0 link-underline-opacity-100-hover small" href="https://github.com/twbs/bootstrap/blob/v5.3.2/scss/_variables.scss">scss/_variables.scss</a>
      <div class="d-flex ms-auto">
        <button type="button" class="btn-clipboard mt-0 me-0" title="Copy to clipboard">
          <svg class="bi" aria-hidden="true"><use xlink:href="#clipboard"/></svg>
        </button>
      </div>
    </div><div class="highlight"><pre tabindex="0" class="chroma"><code class="language-scss" data-lang="scss"><span class="line"><span class="cl"><span class="nv">$dropdown-min-width</span><span class="o">:</span>                <span class="mi">10</span><span class="kt">rem</span><span class="p">;</span>
</span></span><span class="line"><span class="cl"><span class="nv">$dropdown-padding-x</span><span class="o">:</span>                <span class="mi">0</span><span class="p">;</span>
</span></span><span class="line"><span class="cl"><span class="nv">$dropdown-padding-y</span><span class="o">:</span>                <span class="mf">.5</span><span class="kt">rem</span><span class="p">;</span>
</span></span><span class="line"><span class="cl"><span class="nv">$dropdown-spacer</span><span class="o">:</span>                   <span class="mf">.125</span><span class="kt">rem</span><span class="p">;</span>
</span></span><span class="line"><span class="cl"><span class="nv">$dropdown-font-size</span><span class="o">:</span>                <span class="nv">$font-size-base</span><span class="p">;</span>
</span></span><span class="line"><span class="cl"><span class="nv">$dropdown-color</span><span class="o">:</span>                    <span class="nf">var</span><span class="p">(</span><span class="o">--</span><span class="si">#{</span><span class="nv">$prefix</span><span class="si">}</span><span class="n">body-color</span><span class="p">);</span>
</span></span><span class="line"><span class="cl"><span class="nv">$dropdown-bg</span><span class="o">:</span>                       <span class="nf">var</span><span class="p">(</span><span class="o">--</span><span class="si">#{</span><span class="nv">$prefix</span><span class="si">}</span><span class="n">body-bg</span><span class="p">);</span>
</span></span><span class="line"><span class="cl"><span class="nv">$dropdown-border-color</span><span class="o">:</span>             <span class="nf">var</span><span class="p">(</span><span class="o">--</span><span class="si">#{</span><span class="nv">$prefix</span><span class="si">}</span><span class="n">border-color-translucent</span><span class="p">);</span>
</span></span><span class="line"><span class="cl"><span class="nv">$dropdown-border-radius</span><span class="o">:</span>            <span class="nf">var</span><span class="p">(</span><span class="o">--</span><span class="si">#{</span><span class="nv">$prefix</span><span class="si">}</span><span class="n">border-radius</span><span class="p">);</span>
</span></span><span class="line"><span class="cl"><span class="nv">$dropdown-border-width</span><span class="o">:</span>             <span class="nf">var</span><span class="p">(</span><span class="o">--</span><span class="si">#{</span><span class="nv">$prefix</span><span class="si">}</span><span class="n">border-width</span><span class="p">);</span>
</span></span><span class="line"><span class="cl"><span class="nv">$dropdown-inner-border-radius</span><span class="o">:</span>      <span class="nf">calc</span><span class="p">(</span><span class="si">#{</span><span class="nv">$dropdown-border-radius</span><span class="si">}</span> <span class="o">-</span> <span class="si">#{</span><span class="nv">$dropdown-border-width</span><span class="si">}</span><span class="p">);</span> <span class="c1">// stylelint-disable-line function-disallowed-list
</span></span></span><span class="line"><span class="cl"><span class="c1"></span><span class="nv">$dropdown-divider-bg</span><span class="o">:</span>               <span class="nv">$dropdown-border-color</span><span class="p">;</span>
</span></span><span class="line"><span class="cl"><span class="nv">$dropdown-divider-margin-y</span><span class="o">:</span>         <span class="nv">$spacer</span> <span class="o">*</span> <span class="mf">.5</span><span class="p">;</span>
</span></span><span class="line"><span class="cl"><span class="nv">$dropdown-box-shadow</span><span class="o">:</span>               <span class="nf">var</span><span class="p">(</span><span class="o">--</span><span class="si">#{</span><span class="nv">$prefix</span><span class="si">}</span><span class="n">box-shadow</span><span class="p">);</span>
</span></span><span class="line"><span class="cl">
</span></span><span class="line"><span class="cl"><span class="nv">$dropdown-link-color</span><span class="o">:</span>               <span class="nf">var</span><span class="p">(</span><span class="o">--</span><span class="si">#{</span><span class="nv">$prefix</span><span class="si">}</span><span class="n">body-color</span><span class="p">);</span>
</span></span><span class="line"><span class="cl"><span class="nv">$dropdown-link-hover-color</span><span class="o">:</span>         <span class="nv">$dropdown-link-color</span><span class="p">;</span>
</span></span><span class="line"><span class="cl"><span class="nv">$dropdown-link-hover-bg</span><span class="o">:</span>            <span class="nf">var</span><span class="p">(</span><span class="o">--</span><span class="si">#{</span><span class="nv">$prefix</span><span class="si">}</span><span class="n">tertiary-bg</span><span class="p">);</span>
</span></span><span class="line"><span class="cl">
</span></span><span class="line"><span class="cl"><span class="nv">$dropdown-link-active-color</span><span class="o">:</span>        <span class="nv">$component-active-color</span><span class="p">;</span>
</span></span><span class="line"><span class="cl"><span class="nv">$dropdown-link-active-bg</span><span class="o">:</span>           <span class="nv">$component-active-bg</span><span class="p">;</span>
</span></span><span class="line"><span class="cl">
</span></span><span class="line"><span class="cl"><span class="nv">$dropdown-link-disabled-color</span><span class="o">:</span>      <span class="nf">var</span><span class="p">(</span><span class="o">--</span><span class="si">#{</span><span class="nv">$prefix</span><span class="si">}</span><span class="n">tertiary-color</span><span class="p">);</span>
</span></span><span class="line"><span class="cl">
</span></span><span class="line"><span class="cl"><span class="nv">$dropdown-item-padding-y</span><span class="o">:</span>           <span class="nv">$spacer</span> <span class="o">*</span> <span class="mf">.25</span><span class="p">;</span>
</span></span><span class="line"><span class="cl"><span class="nv">$dropdown-item-padding-x</span><span class="o">:</span>           <span class="nv">$spacer</span><span class="p">;</span>
</span></span><span class="line"><span class="cl">
</span></span><span class="line"><span class="cl"><span class="nv">$dropdown-header-color</span><span class="o">:</span>             <span class="nv">$gray-600</span><span class="p">;</span>
</span></span><span class="line"><span class="cl"><span class="nv">$dropdown-header-padding-x</span><span class="o">:</span>         <span class="nv">$dropdown-item-padding-x</span><span class="p">;</span>
</span></span><span class="line"><span class="cl"><span class="nv">$dropdown-header-padding-y</span><span class="o">:</span>         <span class="nv">$dropdown-padding-y</span><span class="p">;</span>
</span></span><span class="line"><span class="cl"><span class="c1">// fusv-disable
</span></span></span><span class="line"><span class="cl"><span class="c1"></span><span class="nv">$dropdown-header-padding</span><span class="o">:</span>           <span class="nv">$dropdown-header-padding-y</span> <span class="nv">$dropdown-header-padding-x</span><span class="p">;</span> <span class="c1">// Deprecated in v5.2.0
</span></span></span><span class="line"><span class="cl"><span class="c1">// fusv-enable
</span></span></span></code></pre></div></div>
<p>Variables for the <a href="#dark-dropdowns">dark dropdown</a>:</p>
<div class="bd-example-snippet bd-code-snippet bd-file-ref">
    <div class="d-flex align-items-center highlight-toolbar ps-3 pe-2 py-1 border-bottom">
      <a class="font-monospace link-secondary link-underline-secondary link-underline-opacity-0 link-underline-opacity-100-hover small" href="https://github.com/twbs/bootstrap/blob/v5.3.2/scss/_variables.scss">scss/_variables.scss</a>
      <div class="d-flex ms-auto">
        <button type="button" class="btn-clipboard mt-0 me-0" title="Copy to clipboard">
          <svg class="bi" aria-hidden="true"><use xlink:href="#clipboard"/></svg>
        </button>
      </div>
    </div><div class="highlight"><pre tabindex="0" class="chroma"><code class="language-scss" data-lang="scss"><span class="line"><span class="cl"><span class="nv">$dropdown-dark-color</span><span class="o">:</span>               <span class="nv">$gray-300</span><span class="p">;</span>
</span></span><span class="line"><span class="cl"><span class="nv">$dropdown-dark-bg</span><span class="o">:</span>                  <span class="nv">$gray-800</span><span class="p">;</span>
</span></span><span class="line"><span class="cl"><span class="nv">$dropdown-dark-border-color</span><span class="o">:</span>        <span class="nv">$dropdown-border-color</span><span class="p">;</span>
</span></span><span class="line"><span class="cl"><span class="nv">$dropdown-dark-divider-bg</span><span class="o">:</span>          <span class="nv">$dropdown-divider-bg</span><span class="p">;</span>
</span></span><span class="line"><span class="cl"><span class="nv">$dropdown-dark-box-shadow</span><span class="o">:</span>          <span class="n">null</span><span class="p">;</span>
</span></span><span class="line"><span class="cl"><span class="nv">$dropdown-dark-link-color</span><span class="o">:</span>          <span class="nv">$dropdown-dark-color</span><span class="p">;</span>
</span></span><span class="line"><span class="cl"><span class="nv">$dropdown-dark-link-hover-color</span><span class="o">:</span>    <span class="nv">$white</span><span class="p">;</span>
</span></span><span class="line"><span class="cl"><span class="nv">$dropdown-dark-link-hover-bg</span><span class="o">:</span>       <span class="nf">rgba</span><span class="p">(</span><span class="nv">$white</span><span class="o">,</span> <span class="mf">.15</span><span class="p">);</span>
</span></span><span class="line"><span class="cl"><span class="nv">$dropdown-dark-link-active-color</span><span class="o">:</span>   <span class="nv">$dropdown-link-active-color</span><span class="p">;</span>
</span></span><span class="line"><span class="cl"><span class="nv">$dropdown-dark-link-active-bg</span><span class="o">:</span>      <span class="nv">$dropdown-link-active-bg</span><span class="p">;</span>
</span></span><span class="line"><span class="cl"><span class="nv">$dropdown-dark-link-disabled-color</span><span class="o">:</span> <span class="nv">$gray-500</span><span class="p">;</span>
</span></span><span class="line"><span class="cl"><span class="nv">$dropdown-dark-header-color</span><span class="o">:</span>        <span class="nv">$gray-500</span><span class="p">;</span>
</span></span></code></pre></div></div>
<p>Variables for the CSS-based carets that indicate a dropdown&rsquo;s interactivity:</p>
<div class="bd-example-snippet bd-code-snippet bd-file-ref">
    <div class="d-flex align-items-center highlight-toolbar ps-3 pe-2 py-1 border-bottom">
      <a class="font-monospace link-secondary link-underline-secondary link-underline-opacity-0 link-underline-opacity-100-hover small" href="https://github.com/twbs/bootstrap/blob/v5.3.2/scss/_variables.scss">scss/_variables.scss</a>
      <div class="d-flex ms-auto">
        <button type="button" class="btn-clipboard mt-0 me-0" title="Copy to clipboard">
          <svg class="bi" aria-hidden="true"><use xlink:href="#clipboard"/></svg>
        </button>
      </div>
    </div><div class="highlight"><pre tabindex="0" class="chroma"><code class="language-scss" data-lang="scss"><span class="line"><span class="cl"><span class="nv">$caret-width</span><span class="o">:</span>                 <span class="mf">.3</span><span class="kt">em</span><span class="p">;</span>
</span></span><span class="line"><span class="cl"><span class="nv">$caret-vertical-align</span><span class="o">:</span>        <span class="nv">$caret-width</span> <span class="o">*</span> <span class="mf">.85</span><span class="p">;</span>
</span></span><span class="line"><span class="cl"><span class="nv">$caret-spacing</span><span class="o">:</span>               <span class="nv">$caret-width</span> <span class="o">*</span> <span class="mf">.85</span><span class="p">;</span>
</span></span></code></pre></div></div>
<h3 id="sass-mixins">Sass mixins <a class="anchor-link" href="#sass-mixins" aria-label="Link to this section: Sass mixins"></a></h3>
<p>Mixins are used to generate the CSS-based carets and can be found in <code>scss/mixins/_caret.scss</code>.</p>
<div class="bd-example-snippet bd-code-snippet bd-file-ref">
    <div class="d-flex align-items-center highlight-toolbar ps-3 pe-2 py-1 border-bottom">
      <a class="font-monospace link-secondary link-underline-secondary link-underline-opacity-0 link-underline-opacity-100-hover small" href="https://github.com/twbs/bootstrap/blob/v5.3.2/scss/mixins/_caret.scss">scss/mixins/_caret.scss</a>
      <div class="d-flex ms-auto">
        <button type="button" class="btn-clipboard mt-0 me-0" title="Copy to clipboard">
          <svg class="bi" aria-hidden="true"><use xlink:href="#clipboard"/></svg>
        </button>
      </div>
    </div><div class="highlight"><pre tabindex="0" class="chroma"><code class="language-scss" data-lang="scss"><span class="line"><span class="cl"><span class="k">@mixin</span><span class="nf"> caret-down</span><span class="p">(</span><span class="nv">$width</span><span class="o">:</span> <span class="nv">$caret-width</span><span class="p">)</span> <span class="p">{</span>
</span></span><span class="line"><span class="cl">  <span class="na">border-top</span><span class="o">:</span> <span class="nv">$width</span> <span class="ni">solid</span><span class="p">;</span>
</span></span><span class="line"><span class="cl">  <span class="na">border-right</span><span class="o">:</span> <span class="nv">$width</span> <span class="ni">solid</span> <span class="ni">transparent</span><span class="p">;</span>
</span></span><span class="line"><span class="cl">  <span class="na">border-bottom</span><span class="o">:</span> <span class="mi">0</span><span class="p">;</span>
</span></span><span class="line"><span class="cl">  <span class="na">border-left</span><span class="o">:</span> <span class="nv">$width</span> <span class="ni">solid</span> <span class="ni">transparent</span><span class="p">;</span>
</span></span><span class="line"><span class="cl"><span class="p">}</span>
</span></span><span class="line"><span class="cl">
</span></span><span class="line"><span class="cl"><span class="k">@mixin</span><span class="nf"> caret-up</span><span class="p">(</span><span class="nv">$width</span><span class="o">:</span> <span class="nv">$caret-width</span><span class="p">)</span> <span class="p">{</span>
</span></span><span class="line"><span class="cl">  <span class="na">border-top</span><span class="o">:</span> <span class="mi">0</span><span class="p">;</span>
</span></span><span class="line"><span class="cl">  <span class="na">border-right</span><span class="o">:</span> <span class="nv">$width</span> <span class="ni">solid</span> <span class="ni">transparent</span><span class="p">;</span>
</span></span><span class="line"><span class="cl">  <span class="na">border-bottom</span><span class="o">:</span> <span class="nv">$width</span> <span class="ni">solid</span><span class="p">;</span>
</span></span><span class="line"><span class="cl">  <span class="na">border-left</span><span class="o">:</span> <span class="nv">$width</span> <span class="ni">solid</span> <span class="ni">transparent</span><span class="p">;</span>
</span></span><span class="line"><span class="cl"><span class="p">}</span>
</span></span><span class="line"><span class="cl">
</span></span><span class="line"><span class="cl"><span class="k">@mixin</span><span class="nf"> caret-end</span><span class="p">(</span><span class="nv">$width</span><span class="o">:</span> <span class="nv">$caret-width</span><span class="p">)</span> <span class="p">{</span>
</span></span><span class="line"><span class="cl">  <span class="na">border-top</span><span class="o">:</span> <span class="nv">$width</span> <span class="ni">solid</span> <span class="ni">transparent</span><span class="p">;</span>
</span></span><span class="line"><span class="cl">  <span class="na">border-right</span><span class="o">:</span> <span class="mi">0</span><span class="p">;</span>
</span></span><span class="line"><span class="cl">  <span class="na">border-bottom</span><span class="o">:</span> <span class="nv">$width</span> <span class="ni">solid</span> <span class="ni">transparent</span><span class="p">;</span>
</span></span><span class="line"><span class="cl">  <span class="na">border-left</span><span class="o">:</span> <span class="nv">$width</span> <span class="ni">solid</span><span class="p">;</span>
</span></span><span class="line"><span class="cl"><span class="p">}</span>
</span></span><span class="line"><span class="cl">
</span></span><span class="line"><span class="cl"><span class="k">@mixin</span><span class="nf"> caret-start</span><span class="p">(</span><span class="nv">$width</span><span class="o">:</span> <span class="nv">$caret-width</span><span class="p">)</span> <span class="p">{</span>
</span></span><span class="line"><span class="cl">  <span class="na">border-top</span><span class="o">:</span> <span class="nv">$width</span> <span class="ni">solid</span> <span class="ni">transparent</span><span class="p">;</span>
</span></span><span class="line"><span class="cl">  <span class="na">border-right</span><span class="o">:</span> <span class="nv">$width</span> <span class="ni">solid</span><span class="p">;</span>
</span></span><span class="line"><span class="cl">  <span class="na">border-bottom</span><span class="o">:</span> <span class="nv">$width</span> <span class="ni">solid</span> <span class="ni">transparent</span><span class="p">;</span>
</span></span><span class="line"><span class="cl"><span class="p">}</span>
</span></span><span class="line"><span class="cl">
</span></span><span class="line"><span class="cl"><span class="k">@mixin</span><span class="nf"> caret</span><span class="p">(</span>
</span></span><span class="line"><span class="cl">  <span class="nv">$direction</span><span class="o">:</span> <span class="n">down</span><span class="o">,</span>
</span></span><span class="line"><span class="cl">  <span class="nv">$width</span><span class="o">:</span> <span class="nv">$caret-width</span><span class="o">,</span>
</span></span><span class="line"><span class="cl">  <span class="nv">$spacing</span><span class="o">:</span> <span class="nv">$caret-spacing</span><span class="o">,</span>
</span></span><span class="line"><span class="cl">  <span class="nv">$vertical-align</span><span class="o">:</span> <span class="nv">$caret-vertical-align</span>
</span></span><span class="line"><span class="cl"><span class="p">)</span> <span class="p">{</span>
</span></span><span class="line"><span class="cl">  <span class="k">@if</span> <span class="nv">$enable-caret</span> <span class="p">{</span>
</span></span><span class="line"><span class="cl">    <span class="k">&amp;</span><span class="nd">::after</span> <span class="p">{</span>
</span></span><span class="line"><span class="cl">      <span class="na">display</span><span class="o">:</span> <span class="ni">inline-block</span><span class="p">;</span>
</span></span><span class="line"><span class="cl">      <span class="na">margin-left</span><span class="o">:</span> <span class="nv">$spacing</span><span class="p">;</span>
</span></span><span class="line"><span class="cl">      <span class="na">vertical-align</span><span class="o">:</span> <span class="nv">$vertical-align</span><span class="p">;</span>
</span></span><span class="line"><span class="cl">      <span class="na">content</span><span class="o">:</span> <span class="s2">&#34;&#34;</span><span class="p">;</span>
</span></span><span class="line"><span class="cl">      <span class="k">@if</span> <span class="nv">$direction</span> <span class="o">==</span> <span class="n">down</span> <span class="p">{</span>
</span></span><span class="line"><span class="cl">        <span class="k">@include</span><span class="nd"> caret-down</span><span class="p">(</span><span class="nv">$width</span><span class="p">);</span>
</span></span><span class="line"><span class="cl">      <span class="p">}</span> <span class="k">@else if</span> <span class="nv">$direction</span> <span class="o">==</span> <span class="n">up</span> <span class="p">{</span>
</span></span><span class="line"><span class="cl">        <span class="k">@include</span><span class="nd"> caret-up</span><span class="p">(</span><span class="nv">$width</span><span class="p">);</span>
</span></span><span class="line"><span class="cl">      <span class="p">}</span> <span class="k">@else if</span> <span class="nv">$direction</span> <span class="o">==</span> <span class="ni">end</span> <span class="p">{</span>
</span></span><span class="line"><span class="cl">        <span class="k">@include</span><span class="nd"> caret-end</span><span class="p">(</span><span class="nv">$width</span><span class="p">);</span>
</span></span><span class="line"><span class="cl">      <span class="p">}</span>
</span></span><span class="line"><span class="cl">    <span class="p">}</span>
</span></span><span class="line"><span class="cl">
</span></span><span class="line"><span class="cl">    <span class="k">@if</span> <span class="nv">$direction</span> <span class="o">==</span> <span class="ni">start</span> <span class="p">{</span>
</span></span><span class="line"><span class="cl">      <span class="k">&amp;</span><span class="nd">::after</span> <span class="p">{</span>
</span></span><span class="line"><span class="cl">        <span class="na">display</span><span class="o">:</span> <span class="ni">none</span><span class="p">;</span>
</span></span><span class="line"><span class="cl">      <span class="p">}</span>
</span></span><span class="line"><span class="cl">
</span></span><span class="line"><span class="cl">      <span class="k">&amp;</span><span class="nd">::before</span> <span class="p">{</span>
</span></span><span class="line"><span class="cl">        <span class="na">display</span><span class="o">:</span> <span class="ni">inline-block</span><span class="p">;</span>
</span></span><span class="line"><span class="cl">        <span class="na">margin-right</span><span class="o">:</span> <span class="nv">$spacing</span><span class="p">;</span>
</span></span><span class="line"><span class="cl">        <span class="na">vertical-align</span><span class="o">:</span> <span class="nv">$vertical-align</span><span class="p">;</span>
</span></span><span class="line"><span class="cl">        <span class="na">content</span><span class="o">:</span> <span class="s2">&#34;&#34;</span><span class="p">;</span>
</span></span><span class="line"><span class="cl">        <span class="k">@include</span><span class="nd"> caret-start</span><span class="p">(</span><span class="nv">$width</span><span class="p">);</span>
</span></span><span class="line"><span class="cl">      <span class="p">}</span>
</span></span><span class="line"><span class="cl">    <span class="p">}</span>
</span></span><span class="line"><span class="cl">
</span></span><span class="line"><span class="cl">    <span class="k">&amp;</span><span class="nd">:empty::after</span> <span class="p">{</span>
</span></span><span class="line"><span class="cl">      <span class="na">margin-left</span><span class="o">:</span> <span class="mi">0</span><span class="p">;</span>
</span></span><span class="line"><span class="cl">    <span class="p">}</span>
</span></span><span class="line"><span class="cl">  <span class="p">}</span>
</span></span><span class="line"><span class="cl"><span class="p">}</span>
</span></span></code></pre></div></div>
<h2 id="usage">Usage <a class="anchor-link" href="#usage" aria-label="Link to this section: Usage"></a></h2>
<p>Via data attributes or JavaScript, the dropdown plugin toggles hidden content (dropdown menus) by toggling the <code>.show</code> class on the parent <code>.dropdown-menu</code>. The <code>data-bs-toggle=&quot;dropdown&quot;</code> attribute is relied on for closing dropdown menus at an application level, so it&rsquo;s a good idea to always use it.</p>
<div class="bd-callout bd-callout-info">
On touch-enabled devices, opening a dropdown adds empty <code>mouseover</code> handlers to the immediate children of the <code>&lt;body&gt;</code> element. This admittedly ugly hack is necessary to work around a <a href="https://www.quirksmode.org/blog/archives/2014/02/mouse_event_bub.html">quirk in iOS&rsquo; event delegation</a>, which would otherwise prevent a tap anywhere outside of the dropdown from triggering the code that closes the dropdown. Once the dropdown is closed, these additional empty <code>mouseover</code> handlers are removed.
</div>

<h3 id="via-data-attributes">Via data attributes <a class="anchor-link" href="#via-data-attributes" aria-label="Link to this section: Via data attributes"></a></h3>
<p>Add <code>data-bs-toggle=&quot;dropdown&quot;</code> to a link or button to toggle a dropdown.</p>
<div class="highlight"><pre tabindex="0" class="chroma"><code class="language-html" data-lang="html"><span class="line"><span class="cl"><span class="p">&lt;</span><span class="nt">div</span> <span class="na">class</span><span class="o">=</span><span class="s">&#34;dropdown&#34;</span><span class="p">&gt;</span>
</span></span><span class="line"><span class="cl">  <span class="p">&lt;</span><span class="nt">button</span> <span class="na">type</span><span class="o">=</span><span class="s">&#34;button&#34;</span> <span class="na">data-bs-toggle</span><span class="o">=</span><span class="s">&#34;dropdown&#34;</span> <span class="na">aria-expanded</span><span class="o">=</span><span class="s">&#34;false&#34;</span><span class="p">&gt;</span>
</span></span><span class="line"><span class="cl">    Dropdown trigger
</span></span><span class="line"><span class="cl">  <span class="p">&lt;/</span><span class="nt">button</span><span class="p">&gt;</span>
</span></span><span class="line"><span class="cl">  <span class="p">&lt;</span><span class="nt">ul</span> <span class="na">class</span><span class="o">=</span><span class="s">&#34;dropdown-menu&#34;</span><span class="p">&gt;</span>
</span></span><span class="line"><span class="cl">    ...
</span></span><span class="line"><span class="cl">  <span class="p">&lt;/</span><span class="nt">ul</span><span class="p">&gt;</span>
</span></span><span class="line"><span class="cl"><span class="p">&lt;/</span><span class="nt">div</span><span class="p">&gt;</span>
</span></span></code></pre></div><h3 id="via-javascript">Via JavaScript <a class="anchor-link" href="#via-javascript" aria-label="Link to this section: Via JavaScript"></a></h3>
<div class="bd-callout bd-callout-warning">
Dropdowns must have <code>data-bs-toggle=&quot;dropdown&quot;</code> on their trigger element, regardless of whether you call your dropdown via JavaScript or use the data-api.
</div>

<p>Call the dropdowns via JavaScript:</p>
<div class="highlight"><pre tabindex="0" class="chroma"><code class="language-js" data-lang="js"><span class="line"><span class="cl"><span class="kr">const</span> <span class="nx">dropdownElementList</span> <span class="o">=</span> <span class="nb">document</span><span class="p">.</span><span class="nx">querySelectorAll</span><span class="p">(</span><span class="s1">&#39;.dropdown-toggle&#39;</span><span class="p">)</span>
</span></span><span class="line"><span class="cl"><span class="kr">const</span> <span class="nx">dropdownList</span> <span class="o">=</span> <span class="p">[...</span><span class="nx">dropdownElementList</span><span class="p">].</span><span class="nx">map</span><span class="p">(</span><span class="nx">dropdownToggleEl</span> <span class="p">=&gt;</span> <span class="k">new</span> <span class="nx">bootstrap</span><span class="p">.</span><span class="nx">Dropdown</span><span class="p">(</span><span class="nx">dropdownToggleEl</span><span class="p">))</span>
</span></span></code></pre></div><h3 id="options">Options <a class="anchor-link" href="#options" aria-label="Link to this section: Options"></a></h3>
<p>As options can be passed via data attributes or JavaScript, you can append an option name to <code>data-bs-</code>, as in <code>data-bs-animation=&quot;{value}&quot;</code>. Make sure to change the case type of the option name from &ldquo;<em>camelCase</em>&rdquo; to &ldquo;<em>kebab-case</em>&rdquo; when passing the options via data attributes. For example, use <code>data-bs-custom-class=&quot;beautifier&quot;</code> instead of <code>data-bs-customClass=&quot;beautifier&quot;</code>.</p>
<p>As of Bootstrap 5.2.0, all components support an <strong>experimental</strong> reserved data attribute <code>data-bs-config</code> that can house simple component configuration as a JSON string. When an element has <code>data-bs-config='{&quot;delay&quot;:0, &quot;title&quot;:123}'</code> and <code>data-bs-title=&quot;456&quot;</code> attributes, the final <code>title</code> value will be <code>456</code> and the separate data attributes will override values given on <code>data-bs-config</code>. In addition, existing data attributes are able to house JSON values like <code>data-bs-delay='{&quot;show&quot;:0,&quot;hide&quot;:150}'</code>.</p>
<p>The final configuration object is the merged result of <code>data-bs-config</code>, <code>data-bs-</code>, and <code>js object</code> where the latest given key-value overrides the others.</p>

<div class="table-responsive"><table class="table">
<thead>
<tr>
<th>Name</th>
<th>Type</th>
<th>Default</th>
<th>Description</th>
</tr>
</thead>
<tbody>
<tr>
<td><code>autoClose</code></td>
<td>boolean, string</td>
<td><code>true</code></td>
<td>Configure the auto close behavior of the dropdown: <ul class="my-2"><li><code>true</code> - the dropdown will be closed by clicking outside or inside the dropdown menu.</li><li><code>false</code> - the dropdown will be closed by clicking the toggle button and manually calling <code>hide</code> or <code>toggle</code> method. (Also will not be closed by pressing <kbd>Esc</kbd> key)</li><li><code>'inside'</code> - the dropdown will be closed (only) by clicking inside the dropdown menu.</li> <li><code>'outside'</code> - the dropdown will be closed (only) by clicking outside the dropdown menu.</li></ul> Note: the dropdown can always be closed with the <kbd>Esc</kbd> key.</td>
</tr>
<tr>
<td><code>boundary</code></td>
<td>string, element</td>
<td><code>'clippingParents'</code></td>
<td>Overflow constraint boundary of the dropdown menu (applies only to Popper&rsquo;s preventOverflow modifier). By default it&rsquo;s <code>clippingParents</code> and can accept an HTMLElement reference (via JavaScript only). For more information refer to Popper&rsquo;s <a href="https://popper.js.org/docs/v2/utils/detect-overflow/#boundary">detectOverflow docs</a>.</td>
</tr>
<tr>
<td><code>display</code></td>
<td>string</td>
<td><code>'dynamic'</code></td>
<td>By default, we use Popper for dynamic positioning. Disable this with <code>static</code>.</td>
</tr>
<tr>
<td><code>offset</code></td>
<td>array, string, function</td>
<td><code>[0, 2]</code></td>
<td>Offset of the dropdown relative to its target. You can pass a string in data attributes with comma separated values like: <code>data-bs-offset=&quot;10,20&quot;</code>. When a function is used to determine the offset, it is called with an object containing the popper placement, the reference, and popper rects as its first argument. The triggering element DOM node is passed as the second argument. The function must return an array with two numbers: <a href="https://popper.js.org/docs/v2/modifiers/offset/#skidding-1">skidding</a>, <a href="https://popper.js.org/docs/v2/modifiers/offset/#distance-1">distance</a>. For more information refer to Popper&rsquo;s <a href="https://popper.js.org/docs/v2/modifiers/offset/#options">offset docs</a>.</td>
</tr>
<tr>
<td><code>popperConfig</code></td>
<td>null, object, function</td>
<td><code>null</code></td>
<td>To change Bootstrap&rsquo;s default Popper config, see <a href="https://popper.js.org/docs/v2/constructors/#options">Popper&rsquo;s configuration</a>. When a function is used to create the Popper configuration, it&rsquo;s called with an object that contains the Bootstrap&rsquo;s default Popper configuration. It helps you use and merge the default with your own configuration. The function must return a configuration object for Popper.</td>
</tr>
<tr>
<td><code>reference</code></td>
<td>string, element, object</td>
<td><code>'toggle'</code></td>
<td>Reference element of the dropdown menu. Accepts the values of <code>'toggle'</code>, <code>'parent'</code>, an HTMLElement reference or an object providing <code>getBoundingClientRect</code>. For more information refer to Popper&rsquo;s <a href="https://popper.js.org/docs/v2/constructors/#createpopper">constructor docs</a> and <a href="https://popper.js.org/docs/v2/virtual-elements/">virtual element docs</a>.</td>
</tr>
</tbody>
</table></div>

<h4 id="using-function-with-popperconfig">Using function with <code>popperConfig</code> <a class="anchor-link" href="#using-function-with-popperconfig" aria-label="Link to this section: Using function with popperConfig"></a></h4>
<div class="highlight"><pre tabindex="0" class="chroma"><code class="language-js" data-lang="js"><span class="line"><span class="cl"><span class="kr">const</span> <span class="nx">dropdown</span> <span class="o">=</span> <span class="k">new</span> <span class="nx">bootstrap</span><span class="p">.</span><span class="nx">Dropdown</span><span class="p">(</span><span class="nx">element</span><span class="p">,</span> <span class="p">{</span>
</span></span><span class="line"><span class="cl">  <span class="nx">popperConfig</span><span class="p">(</span><span class="nx">defaultBsPopperConfig</span><span class="p">)</span> <span class="p">{</span>
</span></span><span class="line"><span class="cl">    <span class="c1">// const newPopperConfig = {...}
</span></span></span><span class="line"><span class="cl"><span class="c1"></span>    <span class="c1">// use defaultBsPopperConfig if needed...
</span></span></span><span class="line"><span class="cl"><span class="c1"></span>    <span class="c1">// return newPopperConfig
</span></span></span><span class="line"><span class="cl"><span class="c1"></span>  <span class="p">}</span>
</span></span><span class="line"><span class="cl"><span class="p">})</span>
</span></span></code></pre></div><h3 id="methods">Methods <a class="anchor-link" href="#methods" aria-label="Link to this section: Methods"></a></h3>
<div class="table-responsive"><table class="table">
<thead>
<tr>
<th>Method</th>
<th>Description</th>
</tr>
</thead>
<tbody>
<tr>
<td><code>dispose</code></td>
<td>Destroys an element&rsquo;s dropdown. (Removes stored data on the DOM element)</td>
</tr>
<tr>
<td><code>getInstance</code></td>
<td>Static method which allows you to get the dropdown instance associated to a DOM element, you can use it like this: <code>bootstrap.Dropdown.getInstance(element)</code>.</td>
</tr>
<tr>
<td><code>getOrCreateInstance</code></td>
<td>Static method which returns a dropdown instance associated to a DOM element or create a new one in case it wasn&rsquo;t initialized. You can use it like this: <code>bootstrap.Dropdown.getOrCreateInstance(element)</code>.</td>
</tr>
<tr>
<td><code>hide</code></td>
<td>Hides the dropdown menu of a given navbar or tabbed navigation.</td>
</tr>
<tr>
<td><code>show</code></td>
<td>Shows the dropdown menu of a given navbar or tabbed navigation.</td>
</tr>
<tr>
<td><code>toggle</code></td>
<td>Toggles the dropdown menu of a given navbar or tabbed navigation.</td>
</tr>
<tr>
<td><code>update</code></td>
<td>Updates the position of an element&rsquo;s dropdown.</td>
</tr>
</tbody>
</table></div>

<h3 id="events">Events <a class="anchor-link" href="#events" aria-label="Link to this section: Events"></a></h3>
<p>All dropdown events are fired at the toggling element and then bubbled up. So you can also add event listeners on the <code>.dropdown-menu</code>&rsquo;s parent element. <code>hide.bs.dropdown</code> and <code>hidden.bs.dropdown</code> events have a <code>clickEvent</code> property (only when the original Event type is <code>click</code>) that contains an Event Object for the click event.</p>
<div class="table-responsive"><table class="table">
<thead>
<tr>
<th>Event type</th>
<th>Description</th>
</tr>
</thead>
<tbody>
<tr>
<td><code>hide.bs.dropdown</code></td>
<td>Fires immediately when the <code>hide</code> instance method has been called.</td>
</tr>
<tr>
<td><code>hidden.bs.dropdown</code></td>
<td>Fired when the dropdown has finished being hidden from the user and CSS transitions have completed.</td>
</tr>
<tr>
<td><code>show.bs.dropdown</code></td>
<td>Fires immediately when the <code>show</code> instance method is called.</td>
</tr>
<tr>
<td><code>shown.bs.dropdown</code></td>
<td>Fired when the dropdown has been made visible to the user and CSS transitions have completed.</td>
</tr>
</tbody>
</table></div>

<div class="highlight"><pre tabindex="0" class="chroma"><code class="language-js" data-lang="js"><span class="line"><span class="cl"><span class="kr">const</span> <span class="nx">myDropdown</span> <span class="o">=</span> <span class="nb">document</span><span class="p">.</span><span class="nx">getElementById</span><span class="p">(</span><span class="s1">&#39;myDropdown&#39;</span><span class="p">)</span>
</span></span><span class="line"><span class="cl"><span class="nx">myDropdown</span><span class="p">.</span><span class="nx">addEventListener</span><span class="p">(</span><span class="s1">&#39;show.bs.dropdown&#39;</span><span class="p">,</span> <span class="nx">event</span> <span class="p">=&gt;</span> <span class="p">{</span>
</span></span><span class="line"><span class="cl">  <span class="c1">// do something...
</span></span></span><span class="line"><span class="cl"><span class="c1"></span><span class="p">})</span>
</span></span></code></pre></div>
      </div>
    </main>
  </div>


    <footer class="bd-footer py-4 py-md-5 mt-5 bg-body-tertiary">
  <div class="container py-4 py-md-5 px-4 px-md-3 text-body-secondary">
    <div class="row">
      <div class="col-lg-3 mb-3">
        <a class="d-inline-flex align-items-center mb-2 text-body-emphasis text-decoration-none" href="/" aria-label="Bootstrap">
          <svg xmlns="http://www.w3.org/2000/svg" width="40" height="32" class="d-block me-2" viewBox="0 0 118 94" role="img"><title>Bootstrap</title><path fill-rule="evenodd" clip-rule="evenodd" d="M24.509 0c-6.733 0-11.715 5.893-11.492 12.284.214 6.14-.064 14.092-2.066 20.577C8.943 39.365 5.547 43.485 0 44.014v5.972c5.547.529 8.943 4.649 10.951 11.153 2.002 6.485 2.28 14.437 2.066 20.577C12.794 88.106 17.776 94 24.51 94H93.5c6.733 0 11.714-5.893 11.491-12.284-.214-6.14.064-14.092 2.066-20.577 2.009-6.504 5.396-10.624 10.943-11.153v-5.972c-5.547-.529-8.934-4.649-10.943-11.153-2.002-6.484-2.28-14.437-2.066-20.577C105.214 5.894 100.233 0 93.5 0H24.508zM80 57.863C80 66.663 73.436 72 62.543 72H44a2 2 0 01-2-2V24a2 2 0 012-2h18.437c9.083 0 15.044 4.92 15.044 12.474 0 5.302-4.01 10.049-9.119 10.88v.277C75.317 46.394 80 51.21 80 57.863zM60.521 28.34H49.948v14.934h8.905c6.884 0 10.68-2.772 10.68-7.727 0-4.643-3.264-7.207-9.012-7.207zM49.948 49.2v16.458H60.91c7.167 0 10.964-2.876 10.964-8.281 0-5.406-3.903-8.178-11.425-8.178H49.948z" fill="currentColor"/></svg>
          <span class="fs-5">Bootstrap</span>
        </a>
        <ul class="list-unstyled small">
          <li class="mb-2">Designed and built with all the love in the world by the <a href="/docs/5.3/about/team/">Bootstrap team</a> with the help of <a href="https://github.com/twbs/bootstrap/graphs/contributors">our contributors</a>.</li>
          <li class="mb-2">Code licensed <a href="https://github.com/twbs/bootstrap/blob/main/LICENSE" target="_blank" rel="license noopener">MIT</a>, docs <a href="https://creativecommons.org/licenses/by/3.0/" target="_blank" rel="license noopener">CC BY 3.0</a>.</li>
          <li class="mb-2">Currently v5.3.2.</li>
        </ul>
      </div>
      <div class="col-6 col-lg-2 offset-lg-1 mb-3">
        <h5>Links</h5>
        <ul class="list-unstyled">
          <li class="mb-2"><a href="/">Home</a></li>
          <li class="mb-2"><a href="/docs/5.3/">Docs</a></li>
          <li class="mb-2"><a href="/docs/5.3/examples/">Examples</a></li>
          <li class="mb-2"><a href="https://icons.getbootstrap.com/">Icons</a></li>
          <li class="mb-2"><a href="https://themes.getbootstrap.com/">Themes</a></li>
          <li class="mb-2"><a href="https://blog.getbootstrap.com/">Blog</a></li>
          <li class="mb-2"><a href="https://cottonbureau.com/people/bootstrap" target="_blank" rel="noopener">Swag Store</a></li>
        </ul>
      </div>
      <div class="col-6 col-lg-2 mb-3">
        <h5>Guides</h5>
        <ul class="list-unstyled">
          <li class="mb-2"><a href="/docs/5.3/getting-started/">Getting started</a></li>
          <li class="mb-2"><a href="/docs/5.3/examples/starter-template/">Starter template</a></li>
          <li class="mb-2"><a href="/docs/5.3/getting-started/webpack/">Webpack</a></li>
          <li class="mb-2"><a href="/docs/5.3/getting-started/parcel/">Parcel</a></li>
          <li class="mb-2"><a href="/docs/5.3/getting-started/vite/">Vite</a></li>
        </ul>
      </div>
      <div class="col-6 col-lg-2 mb-3">
        <h5>Projects</h5>
        <ul class="list-unstyled">
          <li class="mb-2"><a href="https://github.com/twbs/bootstrap" target="_blank" rel="noopener">Bootstrap 5</a></li>
          <li class="mb-2"><a href="https://github.com/twbs/bootstrap/tree/v4-dev" target="_blank" rel="noopener">Bootstrap 4</a></li>
          <li class="mb-2"><a href="https://github.com/twbs/icons" target="_blank" rel="noopener">Icons</a></li>
          <li class="mb-2"><a href="https://github.com/twbs/rfs" target="_blank" rel="noopener">RFS</a></li>
          <li class="mb-2"><a href="https://github.com/twbs/examples/" target="_blank" rel="noopener">Examples repo</a></li>
        </ul>
      </div>
      <div class="col-6 col-lg-2 mb-3">
        <h5>Community</h5>
        <ul class="list-unstyled">
          <li class="mb-2"><a href="https://github.com/twbs/bootstrap/issues" target="_blank" rel="noopener">Issues</a></li>
          <li class="mb-2"><a href="https://github.com/twbs/bootstrap/discussions" target="_blank" rel="noopener">Discussions</a></li>
          <li class="mb-2"><a href="https://github.com/sponsors/twbs" target="_blank" rel="noopener">Corporate sponsors</a></li>
          <li class="mb-2"><a href="https://opencollective.com/bootstrap" target="_blank" rel="noopener">Open Collective</a></li>
          <li class="mb-2"><a href="https://stackoverflow.com/questions/tagged/bootstrap-5" target="_blank" rel="noopener">Stack Overflow</a></li>
        </ul>
      </div>
    </div>
  </div>
</footer>

    <script src="/docs/5.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-C6RzsynM9kWDrMNeT87bh95OGNyZPhcTNXj1NW7RuBCsyN/o0jlpcV8Qyq46cDfL" crossorigin="anonymous"></script>


<script src="https://cdn.jsdelivr.net/npm/@docsearch/js@3"></script>

<script src="https://cdn.jsdelivr.net/npm/@stackblitz/sdk@1/bundles/sdk.umd.js"></script>

<script src="/docs/5.3/assets/js/docs.min.js"></script>

<script>
  
  document.querySelectorAll('.btn-edit').forEach(btn => {
    btn.addEventListener('click', event => {
      const htmlSnippet = event.target.closest('.bd-code-snippet').querySelector('.bd-example').innerHTML

      
      const classes = Array.from(event.target.closest('.bd-code-snippet').querySelector('.bd-example').classList).join(' ')

      const jsSnippet = event.target.closest('.bd-code-snippet').querySelector('.btn-edit').getAttribute('data-sb-js-snippet')
      StackBlitzSDK.openBootstrapSnippet(htmlSnippet, jsSnippet, classes)
    })
  })

  StackBlitzSDK.openBootstrapSnippet = (htmlSnippet, jsSnippet, classes) => {
    const markup = `<!doctype html>
<html lang="en">
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <link href="https:\/\/cdn.jsdelivr.net\/npm\/bootstrap@5.3.2\/dist\/css\/bootstrap.min.css" rel="stylesheet">
    <link href="https://getbootstrap.com/docs/5.3/assets/css/docs.css" rel="stylesheet">
    <title>Bootstrap Example</title>
    <${'script'} src="https:\/\/cdn.jsdelivr.net\/npm\/bootstrap@5.3.2\/dist\/js\/bootstrap.bundle.min.js"></${'script'}>
  </head>
  <body class="p-3 m-0 border-0 ${classes}">

    <!-- Example Code -->
${htmlSnippet.replace(/^/gm, '    ')}
    <!-- End Example Code -->
  </body>
</html>`

    const jsSnippetContent = jsSnippet ? '\/\/ NOTICE!!! Initially embedded in our docs this JavaScript\n\/\/ file contains elements that can help you create reproducible\n\/\/ use cases in StackBlitz for instance.\n\/\/ In a real project please adapt this content to your needs.\n\/\/ \u002b\u002b\u002b\u002b\u002b\u002b\u002b\u002b\u002b\u002b\u002b\u002b\u002b\u002b\u002b\u002b\u002b\u002b\u002b\u002b\u002b\u002b\u002b\u002b\u002b\u002b\u002b\u002b\u002b\u002b\u002b\u002b\u002b\u002b\u002b\u002b\u002b\u002b\u002b\u002b\u002b\u002b\n\n\/*!\n * JavaScript for Bootstrap\u0027s docs (https:\/\/getbootstrap.com\/)\n * Copyright 2011-2023 The Bootstrap Authors\n * Licensed under the Creative Commons Attribution 3.0 Unported License.\n * For details, see https:\/\/creativecommons.org\/licenses\/by\/3.0\/.\n *\/\n\n\/* global bootstrap: false *\/\n\n(() =\u003e {\n  \u0027use strict\u0027\n\n  \/\/ --------\n  \/\/ Tooltips\n  \/\/ --------\n  \/\/ Instantiate all tooltips in a docs or StackBlitz\n  document.querySelectorAll(\u0027[data-bs-toggle=\u0022tooltip\u0022]\u0027)\n    .forEach(tooltip =\u003e {\n      new bootstrap.Tooltip(tooltip)\n    })\n\n  \/\/ --------\n  \/\/ Popovers\n  \/\/ --------\n  \/\/ Instantiate all popovers in docs or StackBlitz\n  document.querySelectorAll(\u0027[data-bs-toggle=\u0022popover\u0022]\u0027)\n    .forEach(popover =\u003e {\n      new bootstrap.Popover(popover)\n    })\n\n  \/\/ -------------------------------\n  \/\/ Toasts\n  \/\/ -------------------------------\n  \/\/ Used by \u0027Placement\u0027 example in docs or StackBlitz\n  const toastPlacement = document.getElementById(\u0027toastPlacement\u0027)\n  if (toastPlacement) {\n    document.getElementById(\u0027selectToastPlacement\u0027).addEventListener(\u0027change\u0027, function () {\n      if (!toastPlacement.dataset.originalClass) {\n        toastPlacement.dataset.originalClass = toastPlacement.className\n      }\n\n      toastPlacement.className = \u0060${toastPlacement.dataset.originalClass} ${this.value}\u0060\n    })\n  }\n\n  \/\/ Instantiate all toasts in docs pages only\n  document.querySelectorAll(\u0027.bd-example .toast\u0027)\n    .forEach(toastNode =\u003e {\n      const toast = new bootstrap.Toast(toastNode, {\n        autohide: false\n      })\n\n      toast.show()\n    })\n\n  \/\/ Instantiate all toasts in docs pages only\n  \/\/ js-docs-start live-toast\n  const toastTrigger = document.getElementById(\u0027liveToastBtn\u0027)\n  const toastLiveExample = document.getElementById(\u0027liveToast\u0027)\n\n  if (toastTrigger) {\n    const toastBootstrap = bootstrap.Toast.getOrCreateInstance(toastLiveExample)\n    toastTrigger.addEventListener(\u0027click\u0027, () =\u003e {\n      toastBootstrap.show()\n    })\n  }\n  \/\/ js-docs-end live-toast\n\n  \/\/ -------------------------------\n  \/\/ Alerts\n  \/\/ -------------------------------\n  \/\/ Used in \u0027Show live alert\u0027 example in docs or StackBlitz\n\n  \/\/ js-docs-start live-alert\n  const alertPlaceholder = document.getElementById(\u0027liveAlertPlaceholder\u0027)\n  const appendAlert = (message, type) =\u003e {\n    const wrapper = document.createElement(\u0027div\u0027)\n    wrapper.innerHTML = [\n      \u0060\u003cdiv class=\u0022alert alert-${type} alert-dismissible\u0022 role=\u0022alert\u0022\u003e\u0060,\n      \u0060   \u003cdiv\u003e${message}\u003c\/div\u003e\u0060,\n      \u0027   \u003cbutton type=\u0022button\u0022 class=\u0022btn-close\u0022 data-bs-dismiss=\u0022alert\u0022 aria-label=\u0022Close\u0022\u003e\u003c\/button\u003e\u0027,\n      \u0027\u003c\/div\u003e\u0027\n    ].join(\u0027\u0027)\n\n    alertPlaceholder.append(wrapper)\n  }\n\n  const alertTrigger = document.getElementById(\u0027liveAlertBtn\u0027)\n  if (alertTrigger) {\n    alertTrigger.addEventListener(\u0027click\u0027, () =\u003e {\n      appendAlert(\u0027Nice, you triggered this alert message!\u0027, \u0027success\u0027)\n    })\n  }\n  \/\/ js-docs-end live-alert\n\n  \/\/ --------\n  \/\/ Carousels\n  \/\/ --------\n  \/\/ Instantiate all non-autoplaying carousels in docs or StackBlitz\n  document.querySelectorAll(\u0027.carousel:not([data-bs-ride=\u0022carousel\u0022])\u0027)\n    .forEach(carousel =\u003e {\n      bootstrap.Carousel.getOrCreateInstance(carousel)\n    })\n\n  \/\/ -------------------------------\n  \/\/ Checks \u0026 Radios\n  \/\/ -------------------------------\n  \/\/ Indeterminate checkbox example in docs and StackBlitz\n  document.querySelectorAll(\u0027.bd-example-indeterminate [type=\u0022checkbox\u0022]\u0027)\n    .forEach(checkbox =\u003e {\n      if (checkbox.id.includes(\u0027Indeterminate\u0027)) {\n        checkbox.indeterminate = true\n      }\n    })\n\n  \/\/ -------------------------------\n  \/\/ Links\n  \/\/ -------------------------------\n  \/\/ Disable empty links in docs examples only\n  document.querySelectorAll(\u0027.bd-content [href=\u0022#\u0022]\u0027)\n    .forEach(link =\u003e {\n      link.addEventListener(\u0027click\u0027, event =\u003e {\n        event.preventDefault()\n      })\n    })\n\n  \/\/ -------------------------------\n  \/\/ Modal\n  \/\/ -------------------------------\n  \/\/ Modal \u0027Varying modal content\u0027 example in docs and StackBlitz\n  \/\/ js-docs-start varying-modal-content\n  const exampleModal = document.getElementById(\u0027exampleModal\u0027)\n  if (exampleModal) {\n    exampleModal.addEventListener(\u0027show.bs.modal\u0027, event =\u003e {\n      \/\/ Button that triggered the modal\n      const button = event.relatedTarget\n      \/\/ Extract info from data-bs-* attributes\n      const recipient = button.getAttribute(\u0027data-bs-whatever\u0027)\n      \/\/ If necessary, you could initiate an Ajax request here\n      \/\/ and then do the updating in a callback.\n\n      \/\/ Update the modal\u0027s content.\n      const modalTitle = exampleModal.querySelector(\u0027.modal-title\u0027)\n      const modalBodyInput = exampleModal.querySelector(\u0027.modal-body input\u0027)\n\n      modalTitle.textContent = \u0060New message to ${recipient}\u0060\n      modalBodyInput.value = recipient\n    })\n  }\n  \/\/ js-docs-end varying-modal-content\n\n  \/\/ -------------------------------\n  \/\/ Offcanvas\n  \/\/ -------------------------------\n  \/\/ \u0027Offcanvas components\u0027 example in docs only\n  const myOffcanvas = document.querySelectorAll(\u0027.bd-example-offcanvas .offcanvas\u0027)\n  if (myOffcanvas) {\n    myOffcanvas.forEach(offcanvas =\u003e {\n      offcanvas.addEventListener(\u0027show.bs.offcanvas\u0027, event =\u003e {\n        event.preventDefault()\n      }, false)\n    })\n  }\n})()\n' : null
    const project = {
      files: {
        'index.html': markup,
        'index.js': jsSnippetContent
      },
      title: 'Bootstrap Example',
      description: `Official example from ${window.location.href}`,
      template: jsSnippet ? 'javascript' : 'html',
      tags: ['bootstrap']
    }

    StackBlitzSDK.openProject(project, { openFile: 'index.html' })
  }
</script>


    
  <div class="position-fixed" aria-hidden="true"><input type="text" tabindex="-1"></div>

  </body>
</html>