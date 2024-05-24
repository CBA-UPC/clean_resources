importScripts('https://u5.investingchannel.com/predictive/predictive.js');
var window = this;
onmessage = function (e) {
  if (e.data[0] === 'apiKey' && e.data[1] !== undefined) {
    initializeICPredictive(e.data[1]);
  }

  if (e.data[0] === 'Predict' && e.data[1] !== undefined) {
    predict(e.data[1],e);
  }
}

function initializeICPredictive(apiKey) {
  try{
	  if (IC_Predictive === undefined && apiKey !== undefined) {
		this.postMessage(['PredictiveInitialized',false]);
	  } else {
		IC_Predictive.initiate(apiKey, "https://u5.investingchannel.com/predictive/model/", "ICPredictiveReadyCallback");
	  }
  }catch(e){
	  console.error(e);
	  this.postMessage(['PredictiveInitialized',false]);
  }
}

function ICPredictiveReadyCallback() {
  this.postMessage(['PredictiveInitialized',true]);
}

function predict(request,e) {
  try{
    let prediction = { id: request.id, response: IC_Predictive.predict(JSON.parse(request)) };
    e.ports[0].postMessage(['PredictResponse', prediction]);
  }catch(err){
	  console.error(err);
	  e.ports[0].postMessage(['PredictResponse', null]);
  }
}

