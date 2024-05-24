var zoneList = [
    "UK", "NY", "WA", "SG", "DE", "TX", "HK", "LA", "GA", "SYD", "BU", "JP", "FR", "KC", "MI", "MN", "AMS", "SIL", "BR", "ES", "IL", "NO", "RU", "IT", "JH", "IN", "CZ", "TR", "PL", "CA", "TH", "LT", "PER", "MEL", "AUC", "BRB", "ASB", "KR", "ADL", "MU", "AT", "FI", "ISR", "VA", "AE", "DEN", "SE", "CH", "ND", "NG", "CL", "BG", "PT", "DK", "BE", "IE", "PHX", "CEN", "EG", "SK", "KE", "MX", "KZ", "AR", "CR", "UA", "CO", "PE", "EC", "RJ", "ID", "VN", "PH", "MY", "PA", "FO", "LJ", "LU", "MS", "MD", "CY", "BA", "GEO", "LV", "HU", "AZ", "HOU", "RS", "IS", "TW", "IQ", "OG", "RI", "PR", "PB", "HI", "GT", "BS", "CT", "BO", "AM", "FU", "BHR", "PP", "NP", "MG", "BD", "HR", "AO", "DE2", "CLT", "MSP", "GU", "IQ2", "SSA", "CWB", "RGN", "LAP", 
];

var currentZoneIndex = 0;

// Shuffle an array
function shuffle(array) {
    let currentIndex = array.length, randomIndex;

    while (currentIndex != 0) {
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex--;
        [array[currentIndex], array[randomIndex]] = [
            array[randomIndex], array[currentIndex]];
    }

    return array;
}

function scheduleNextTest() {
    currentZoneIndex++;
    if (currentZoneIndex < zoneList.length) {
        setTimeout(runNextTest, 500);
    }
}

function runNextTest() {
    var startTime = new Date().valueOf();

    var currentZoneCode = zoneList[currentZoneIndex].toLowerCase();
    var startTime = new Date().valueOf();
    var fetchUrl = 'https://edgezone-' + currentZoneCode + '.bunnyinfra.net/500b.jpg?s=' + startTime;
    fetch(fetchUrl)
        .then(data => {
            startTime = new Date().valueOf();
            fetch(fetchUrl)
                .then(data => {
                    var endTime = new Date().valueOf();
                    var diff = endTime - startTime;
                    fetch('https://rum-metrics.bunny.net/trackperformance?zone=' + currentZoneCode + '&latency=' + diff);
                    scheduleNextTest();
                }).catch((error) => { scheduleNextTest(); });
        }).catch(;
}

shuffle(zoneList);
runNextTest();