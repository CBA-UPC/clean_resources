/**
 * Created by Audaxis on 21/12/15.
 */

var statCallbackCalled = 0;

function statCallback() {
  var return_value = -1;

  if (Drupal.settings.dpipub.detectAdBlock == 1) {
    statCallbackCalled = 1;
    return dpipubDetectAdBlock();
  }

  return return_value;
}

