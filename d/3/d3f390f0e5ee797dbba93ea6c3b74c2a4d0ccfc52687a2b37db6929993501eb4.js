function contentOpen() {
let overlay = document.querySelector('.pl__content');

overlay.style.display = 'inline-block';
overlay.classList.add('pl__magictime', 'pl__swashIn')
}
contentOpen()

let closeSb = document.querySelector('.pl__closelink');
let overlay = document.querySelector('.pl__content');
closeSb.onclick = 
