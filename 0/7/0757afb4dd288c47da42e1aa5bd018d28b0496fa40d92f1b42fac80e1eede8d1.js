


<!DOCTYPE html>
<html lang="en-GB">
<head>
    <title>Offline website</title>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <link rel="shortcut icon" href="https://cdn-discountcode.express.co.uk/static/favicon.ico?v=637375091080000000" />
    <meta name="robots" content="noindex,nofollow">
    <style>
        body {
            margin: 0px;
            background-color: #000000;
            height: calc(100vh - 60px);
            width: calc(100vw - 30px);
            padding: 30px 15px;
            font-family: Arial, sans-serif;
            font-size: 15px;
        }

        .sw-offline_container {
            height: 100%;
            width: 100%;
            max-width: 500px;
            margin-left: auto;
            margin-right: auto;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
        }

        .sw-offline_logo {
            width: 200px;
            height: auto;
        }

        .sw-offline_card {
            background-color: #FFFFFF;
            color: #424242;
            padding: 25px;
            box-shadow: 0 6px 10px 0 rgb(0 0 0 / 14%), 0 1px 18px 0 rgb(0 0 0 / 12%), 0 3px 5px -1px rgb(0 0 0 / 20%);
            border-radius: 25px;
            margin-top: 20px;
            display: flex;
            justify-content: center;
            flex-direction: column;
            align-items: center;
        }

        .sw-offline_title {
            font-weight: bold;
            margin-bottom: 15px;
            margin-top: 0;
            font-size: 18px;
            text-align: center;
        }

        .sw-offline_subtitle {
            margin-bottom: 15px;
            margin-top: 0;
            text-align: center;
        }

        .sw-offline_retry-btn {
            border: none;
            background-color: #000000;
            color: #FFFFFF;
            padding: 8px 14px;
            border-radius: 3px;
            cursor: pointer;
            margin-top: 15px;
            font-weight: bold;
        }

        .sw-offline_retry-container {
            display: flex;
            justify-content: center;
            align-items: center;
        }

        .sw-offline_retry-counter {
            margin: 0;
            font-size: 13px;
            text-align: center;
        }

        .sw-offline_retry-loader {
	        display: inline-block;
	        position: relative;
	        width: 42px;
	        height: 42px;
        }

        .sw-offline_retry-loader div:nth-child(1) {
	        left: 12px;
	        animation-delay: -0.24s;
        }
        .sw-offline_retry-loader div:nth-child(2) {
            left: 19px;
            animation-delay: -0.12s;
        }

        .sw-offline_retry-loader div:nth-child(3) {
            left: 26px;
            animation-delay: 0;
        }

        .sw-offline_retry-loader div {
            display: inline-block;
            position: absolute;
            left: 5px;
            width: 4px;
            background: currentColor;
            animation: sw-offline-loader 1.2s cubic-bezier(0, 0.5, 0.5, 1) infinite;
        }

        @keyframes sw-offline-loader {
	        0% {
		        top: 7px;
		        height: 30px;
	        }

	        50%, 100% {
		        top: 14px;
		        height: 15px;
	        }
        }

    </style>
</head>
<body>
    <div class="sw-offline_container">
        <img class="sw-offline_logo" src="https://cdn-discountcode.express.co.uk/static/express-small-logo.png?v=637381806430000000" width="435" height="76" alt="Express Discounts" />
        <div class="sw-offline_card">
            <h1 class="sw-offline_title">Booo! We are unable to load the page with your current Internet connection.</h1>
            <p class="sw-offline_subtitle">Please check your connection and try again</p>
            <div class="sw-offline_retry-container">
                <span class="sw-offline_retry-counter"></span>
                <div class="sw-offline_retry-loader">
                    <div></div>
                    <div></div>
                    <div></div>
                </div>
            </div>

            <button class="sw-offline_retry-btn" type="button">Retry</button>
        </div>
    </div>

    <script>
        // Manual reload feature.
        document.querySelector("button").addEventListener("click", () => {
            window.location.reload();
        });

        // Listen to changes in the network state, reload when online.
        // This handles the case when the device is completely offline.
        window.addEventListener('online', () => {
            window.location.reload();
        });

        // Check if the server is responding and reload the page if it is.
        // This handles the case when the device is online, but the server is offline or misbehaving.

        var counter = 20;
        var intervalId = null;

        function bip() {
            counter--;
            if (counter == 0) {
                clearInterval(intervalId);
                document.getElementsByClassName("sw-offline_retry-counter")[0].innerHTML = "Connection attempt failed";
                counter = 20;
                setTimeout(() => {
                    checkNetworkAndReload();
                }, 2000);
            }
            else {
                var res = "We will try to connect again in {{seconds}} second(s)";
                var populatedRes = res.replace("{{seconds}}", counter);
                document.getElementsByClassName("sw-offline_retry-counter")[0].innerHTML = populatedRes;
            }
        }

        async function checkNetworkAndReload() {
            try {
                const response = await fetch('.');
                // Verify we get a valid response from the server
                if (response.status >= 200 && response.status < 500) {
                    window.location.reload();
                    return;
                }
            } catch {
                // Unable to connect to the server, ignore.
            }
            intervalId = setInterval(bip, 1000);
        }

        checkNetworkAndReload();
    </script>
</body>
</html>