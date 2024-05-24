<metconexión</title>
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<link rel="stylesheet" type="text/css" media="all" href="/static/build/css/offlineView.min.css" />

<section class="container">
  <div class="row">
    <div class="col-xs-12">
      <header class="navbar-header">
        <a href="https://www.habitissimo.es/" title="habitissimo - Reformas y Servicios para el Hogar" class="navbar-brand">
          <img
            src="/static/img/web-logo.2x.png"
            alt="habitissimo - Reformas y Servicios para el Hogar"
            title="habitissimo - Reformas y Servicios para el Hogar">
        </a>
      </header>
    </div>
  </div>
  <h1 class="t-lg text-semibold text-center">¡Ups! no hay conexión</h1>
  <p class="text-center m-t-lg">Parece que no hay internet o cobertura en tu zona. Por favor revisa tu conexión o vuélvelo a intentar</p>
  <div class="m-t-lg text-center m-b-lg">
    <img src="/static/img/errors/no-error.png" alt="No conexion" title="No conexion"/>
  </div>
  <div class="text-center m-t-md">
    <button class="btn btn-primary" id="refresh">Reintentar</button>
  </div>
</section>

<script>
  (function() {
    document.addEventListener('click', function() {
      window.location.reload();
    })
  })()
</script>
