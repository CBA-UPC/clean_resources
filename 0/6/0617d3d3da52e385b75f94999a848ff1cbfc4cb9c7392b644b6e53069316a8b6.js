function createSoluCXWidget(key, type, data, options) {
  let wrapper;
  let userId;

  let width = '';

  options.width ? (width = `width:${options.width};`) : (width = `width:600px;`);

  
  function createElements(type, url) {
    let style = `transition:height 0.5s;border:none;height:180px;margin:auto;box-shadow: 0px 0px 18px 0px rgba(0,0,0,0.4);`;
    let wrapperStyle = 'display:none;overflow:visible;';
    let closeBtn =
      '<svg id="solucxClose" style="cursor:pointer;position:absolute;top:10px;right:10px" width="25" height="25" viewBox="0 0 512 512"><circle cx="256" cy="256" r="256" opacity=".3" /><path d="m150 150 212 212m0-212-212 212" stroke="#fff" stroke-width="80" /></svg>';

    switch (type) {
      case 'bottomBar':
        style += 'width:100%;left:0px;bottom:0px;border-radius:8px;';
        wrapperStyle += 'position:fixed;z-index:999;bottom:0;left:0;width:100%;';
        break;
      case 'bottomBox':
        style += `max-width:100%;border-radius:16px 0 0 0;${width}`;
        wrapperStyle += `position:fixed;z-index:999;bottom:0;right:0px;max-width:100%;${width}`;
        break;
      case 'bottomBoxLeft':
        style += `max-width:100%;border-radius:0 16px 0 0;${width}`;
        wrapperStyle += `position:fixed;z-index:999;bottom:0;left:0px;max-width:100%;${width}`;
        break;
      case 'inline':
        style += 'width:100%;border-radius:8px;';
        wrapperStyle += 'position:relative;z-index:999;';
        break;
      case 'modal':
        style += `margin:auto;border-radius:8px;${width}`;
        wrapperStyle +=
          'position:fixed;z-index:99999;top:0px;left:0px;width:100%;height:100%;background-color:rgba(0,0,0,0.7);';
        break;
    }

    let htmlString =
      '<div id="solucxWrapper" style="' +
      wrapperStyle +
      '"><iframe id="solucxWidgetFrame" src="' +
      url +
      '" style="' +
      style +
      '" scrolling="no"></iframe>' +
      closeBtn +
      '</div>';

    var div = document.createElement('div');
    div.innerHTML = htmlString.trim();

    return div.firstChild;
  }

  
  function validateData(data) {
    if (
      data === undefined ||
      (data.name === undefined &&
        data.transaction_id === undefined &&
        data.email === undefined &&
        data.cpf === undefined)
    ) {
      throw 'Error: user data parameters are required.';
    }

    dataRequired = ['name', 'transaction_id'];
    dataOptional = [
      'client_id',
      'phone',
      'phone2',
      'cpf',
      'gender',
      'birth_date',
      'rating',
      'email',
      'store_id',
      'employee_id',
      'amount',
      'attempt_id',
    ];

    dataAlternative = ['transaction_id'];
  }

  function mountURL(key, data) {
    let baseURL = '';
    if (window.origin === 'http://localhost:8086') {
      baseURL = 'http://localhost:8086/widget';
    } else if (window.origin === 'https://survey.staging.solucx.com.br') {
      baseURL = 'https://survey.staging.solucx.com.br/widget';
    } else if (window.origin === 'https://survey.preview.solucx.com.br') {
      baseURL = 'https://survey.preview.solucx.com.br/widget';
    } else {
      baseURL = 'https://survey.solucx.com.br/widget';
    }

    if (data.attemptId && data.transactionId) {
      return baseURL + '/' + key + '/' + data.transactionId + '/' + data.attemptId + '/';
    }

    let url = baseURL + '/' + key + '/?';
    for (var i in data) url += i + '=' + data[i] + '&';

    return url;
  }

  function getLog(userId) {
    let defaultd = {
      attempts: 0,
      lastAttempt: null,
      lastRating: null,
    };

    return JSON.parse(localStorage.getItem('solucxWidgetLog-' + userId)) || defaultd;
  }

  function setLog(data, userId) {
    localStorage.setItem('solucxWidgetLog-' + userId, JSON.stringify(data));
  }

  function checkLastAttempts(
    retryAttempts,
    retryDaysInterval,
    collectDaysInterval,
    collectPartialDaysInterval,
    userId,
  ) {
    const data = getLog(userId);
    const now = Date.now();
    const day = 86400000;

    if (collectDaysInterval && data.lastRating + collectDaysInterval * day > now) return false;
    if (collectPartialDaysInterval && data.lastParcial + collectPartialDaysInterval * day > now) return false;
    if (retryDaysInterval && data.lastAttempt + retryDaysInterval * day > now && data.attempts >= retryAttempts)
      return false;

    if (data.attempts >= retryAttempts) data.attempts = 0;

    setLog(data, userId);
    return true;
  }

  function logLoaded(userId) {
    const data = getLog(userId);
    data.attempts++;
    data.lastAttempt = Date.now();
    setLog(data, userId);
  }

  function logSuccess(userId) {
    const data = getLog(userId);
    data.lastRating = Date.now();
    setLog(data, userId);
  }

  function logPartial(userId) {
    const data = getLog(userId);
    data.lastParcial = Date.now();
    setLog(data, userId);
  }

  function widgetMessageHandler(event) {
    const data = event.data.split('-');
    const key = data[0];
    const value = data[1];

    if (key === 'closeSoluCXWidget') closeWidget();

    if (key === 'dismissSoluCXWidget') closeWidget();

    if (key === 'completeSoluCXWidget') logSuccess(userId);

    if (key === 'partialSoluCXWidget') logPartial(userId);

    if (key === 'resizeSoluCXWidget') {
      frame = document.getElementById('solucxWidgetFrame');
      frame.style.height = value + 'px';
    }

    if (key === 'openSoluCXWidget') {
      logLoaded(userId);
      wrapper.style.display = 'flex';
      document.getElementById('solucxClose').onclick = closeWidget;
    }
  }

  function create(key, position, data, options) {
    options = options || {};

    let target = options.target || null;
    let retryAttempts = options.retryAttempts || 5;
    let retryInterval = options.retryInterval || 1;
    let collectInterval = options.collectInterval || options.colectInterval || 60;
    let collectPartialInterval = options.collectPartialInterval || 0;

    userId = data.client_id || data.cpf || data.email;

    let shouldAttempt = checkLastAttempts(
      retryAttempts,
      retryInterval,
      collectInterval,
      collectPartialInterval,
      userId,
    );
    if (!shouldAttempt) return;

    validateData(data);

    if (position != 'inline') target = null;
    const targetElement = getTargetElement(target);
    const url = mountURL(key, data);

    targetElement.appendChild(createElements(position, url));

    frame = document.getElementById('solucxWidgetFrame');
    wrapper = document.getElementById('solucxWrapper');

    window.addEventListener('message', widgetMessageHandler);
  }

  create(key, type, data, options);
}
