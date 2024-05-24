const adAP = {};
const adZocalo = {};

adAP.hide = () => {
  const apLayer = document.getElementById("ap_layer");
  if (apLayer) {
    apLayer.style.display = "none";
  }

  const apAd = document.getElementById("ap_ad");
  if (apAd) {
    apAd.style.display = "none";
  }
  document.body.style.overflow = "";
};

adAP.show = (adWidth, adHeight, slotId) => {
  const adSlot = document.getElementById(slotId);
  adSlot.style.marginLeft = `-${adWidth / 2}px`;
  adSlot.style.marginTop = `-${adHeight / 2}px`;
  adSlot.style.top = "50%";
  adSlot.style.left = "50%";
  adSlot.style.position = "absolute";

  const ad1 = document.getElementById("ap_ad");
  if (ad1) {
    ad1.style.backgroundColor = "white";
    ad1.style.display = "block";
  }

  const uxuLayer = document.getElementById("ap_layer");
  if (uxuLayer) {
    uxuLayer.style.display = "block";
  }
  const uxuAd = document.getElementById("ap_ad");
  if (uxuAd) {
    uxuAd.style.display = "block";
  }
  document.body.style.overflow = "";
};

adZocalo.hide = () => {
  const zocaloAd = document.getElementById("zocalo_ad");
  if (zocaloAd) {
    zocaloAd.style.display = "none";
  }
};
adZocalo.show = (adWidth, adHeight) => {
  const zocaloAd = document.getElementById("zocalo_ad");
  zocaloAd.style.height = adHeight;
  zocaloAd.style.width = adWidth;
  zocaloAd.style.marginLeft = `-${adWidth / 2}px`;
  if (zocaloAd) {
    zocaloAd.style.display = "block";
  }
};
