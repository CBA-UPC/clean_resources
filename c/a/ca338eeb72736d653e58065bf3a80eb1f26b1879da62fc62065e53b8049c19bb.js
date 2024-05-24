function contentOpen() {
    let overlay = document.querySelector('.pl__content');
    overlay.style.display = 'flex';
    // overlay.classList.add('pl__animated', 'pl__bounceInDown', 'pl__delay-0s')
}
contentOpen()


let closeSb = document.querySelector('.pl__closelink');
let overlay = document.querySelector('.pl__content');
closeSb.onclick = 


let size = 30,
    newsContent = $(".pl__name__abonem"),
    newsText = newsContent.text();

if (newsText.length > size) {
    newsContent.text(newsText.slice(0, size) + " ...");
}


let size2 = 60,
    newsContent2 = $(".pl__message__desc"),
    newsText2 = newsContent2.text();

if (newsText2.length > size2) {
    newsContent2.text(newsText2.slice(0, size2) + " ...");
}

let sizeBtn = 15,
    btnContent = $(".pl__btn-second"),
    btnText = btnContent.text();

if (btnText.length > sizeBtn) {
    btnContent.text(btnText.slice(0, sizeBtn) + " ...");
}

let sizeBtn1 = 15,
    btnContent1 = $(".pl__btn-one")
    btnText1 = btnContent1.text();

if (btnText1.length > sizeBtn1) {
    btnContent1.text(btnText1.slice(0, sizeBtn1) + " ...");
}