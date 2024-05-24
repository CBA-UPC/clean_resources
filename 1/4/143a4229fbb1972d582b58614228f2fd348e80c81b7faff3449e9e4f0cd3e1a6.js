/*! XDevCodes v.1 By XTUBEID STUDIO SGP */
function makeid(length) {
  let result = '';
  const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  const charactersLength = characters.length;
  let counter = 0;
  while (counter < length) {
    result += characters.charAt(Math.floor(Math.random() * charactersLength));
    counter += 1;
  }
  return result;
}

function makeRandomString() {
  const currentDate = new Date();
  const timestamp = currentDate.getTime().toString();
  const randomString = makeid(5);
  const randomStringBasedOnTimestamp = `${timestamp}_${randomString}`;
  return randomStringBasedOnTimestamp;
}

const randomString = makeRandomString();
const scriptElement = document.createElement('script');
scriptElement.src = `/location.js?v=${randomString}`;
document.head.appendChild(scriptElement);
