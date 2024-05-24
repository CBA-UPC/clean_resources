for(var ix=1;ix<3;ix++)	setTimeout(function(){if(typeof virgulPageAds.zones[24]!=="undefined")$($('.ep-adWrapper.ep-absolute video')[0]).css('background-color','transparent');},2000*ix);
function addDataCollector(){
	if(true||cookie('nonpa')=='1')return;
var twt={'':'25453965','Müzik':'25453961','Çizgi Film':'25453962','Komik Videolar':'25453963','Galeri':'25453964','Tüm Kategoriler':'25453965','Amatör':'25453966','Arabalar':'25453967','Çizgi Film':'25453968','Çocuklar':'25453969','Dini':'25453970','Dizi':'25453971','Eğitim':'25453972','Finans':'25453973','Gezi & Seyahat':'25453974','Haber':'25453975','Hayvanlar':'25453977','İlginç Videolar':'25453978','Kültür & Sanat':'25453980','Makyaj & Güzellik':'25453981','Moda':'25453982','Müzik':'25453961','Nasıl Yapılır':'25453984','Oyun':'25453985','Resmi':'25453986','Sağlık':'25453987','Sinema':'25453988','Spor':'25453989','Teknoloji':'25453990','TV & Magazin':'25453991','Yemek Tarifleri':'25453992','Yetenek':'25453993','Vücut Geliştirme & Fitness':'25453994'};
 var simg = document.createElement('IMG');
    simg.style.display = 'none';
    simg.src = 'https://unilever.demdex.net/event?d_sid='+(twt[$('#breadContainer > ul > li:nth-child(3) > a').text()]||'25453965') + '&cs=' + new Date().getTime();
    document.getElementsByTagName('body')[0].appendChild(simg);
}
setTimeout(addDataCollector,4000);

