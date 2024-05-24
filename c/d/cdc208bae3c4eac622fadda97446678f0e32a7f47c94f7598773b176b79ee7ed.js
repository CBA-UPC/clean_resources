<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Tracker</title>
</head>
<body>
<script>

    var iframeKey = "as0g87dfg7fd6g";
    window.addEventListener('message', function (e) {

        if (typeof e.data === "string") {

            var parsedData = JSON.parse(e.data);
            var allowedMethods = ["trackHeatMap", "storeTrackData"];

            if (parsedData.method && parsedData.key === iframeKey && e.data.search(/^{/) !== -1) {
                if (allowedMethods.indexOf(parsedData.method) !== -1) {

                    switch (parsedData.method) {
                        case "trackHeatMap":
                            var formData = [];
                            for (var key in parsedData) {
                                if (parsedData.hasOwnProperty(key)) {
                                    formData.push(key + '=' + encodeURIComponent(parsedData[key]));
                                }
                            }

                            var xmlhttp = new XMLHttpRequest();
                            xmlhttp.open("POST", parsedData.trackUrl + "/trackHeatMap", true);
                            xmlhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
                            xmlhttp.send(formData.join('&'));
                            break;
                        case "storeTrackData":
                            if (typeof sessionStorage === "object") {
                                var sessionTrackingData = [];
                                if (typeof sessionStorage.AT === "string") {
                                    try {
                                        sessionTrackingData = JSON.parse(sessionStorage.AT);
                                    } catch (e) {
                                        console.warn(e);
                                    }
                                }
                                sessionTrackingData.push(parsedData.data);
                                sessionStorage.AT = JSON.stringify(sessionTrackingData);
                            }
                            break;
                    }

                }
            }
        }
    });

    function handleSessionStorageData() {
        if (typeof sessionStorage === "object" && typeof sessionStorage.AT === "string") {
            try {
                var sessionTrackingData = JSON.parse(sessionStorage.AT);
                var messageData = {
                    key: iframeKey,
                    method: "trackStoredData",
                    data: sessionTrackingData
                };
                window.top.postMessage(
                    JSON.stringify(messageData), "*"
                );
                sessionStorage.AT = JSON.stringify([]);
            } catch (e) {
                console.warn(e);
            }
        }
    }

    //session storage data
    handleSessionStorageData();

</script>
</body>
</html>