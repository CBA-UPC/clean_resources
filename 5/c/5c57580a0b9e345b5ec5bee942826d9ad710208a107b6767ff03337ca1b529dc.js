<html>
    <head>
        <meta charset="utf-8" />
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>Tinkercad - You're Offline</title>
        <style>
            @font-face {
                font-family: artifakt-element;
                font-style: normal;
                font-weight: 400;
                src: url('https://swc.autodesk.com/pharmacopeia/fonts/ArtifaktElement/v1.0/WOFF2/Artifakt%20Element%20Regular.woff2') format("woff2");
            }

            body {
                font-family: artifakt-element;
            }

            img.logo {
                padding: 1em;
            }

            div.content {
                text-align: center;
                justify-content: center;
                align-items: center;
                display: flex;
                height: 100%;
                flex-direction: column;
            }

            button#reloadBtn {
                text-align: center;
                cursor: pointer;
                line-height: normal;
                color: #fff;
                background-color: #2ca0dc;
                font-size: 18px;
                padding: 13px 22px;
                font-weight: 500;
                border-radius: 5px;
                transition: .25s;
                user-select: none;
                border: none;
            }

            button#reloadBtn:hover {
                background-color: #0f4a69;
            }

            button#reloadBtn:active {
                border: none;
            }
        </style>
    </head>
    <body>
        <div class="content">
            <div id="logo"></div>
            <h1>Disconnected</h1>
            <p>Please check your device settings to make sure you are connected to a network, and try again.</p>
            <button id="reloadBtn">Reload</button>
        </div>
        

        <script>
            const showLogo = async () => {
                const logoDiv = document.querySelector('#logo');
                const logoUrl = '/img/app_icon_192.png';

                const imgEl = document.createElement('img');
                imgEl.src = logoUrl;
                logoDiv.prepend(imgEl);
            };

            window.addEventListener('load', () => {
                showLogo();
            });
            
            document.querySelector('#reloadBtn').addEventListener('click', () => {
                window.location.reload();
            });

            // Listen to changes in the network state, reload when online.
            // This handles the case when the device is completely offline.
            window.addEventListener('online', () => {
                window.location.reload();
            });

            // Check if the server is responding and reload the page if it is.
            // This handles the case when the device is online, but the server
            // is offline or misbehaving.
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
                window.setTimeout(checkNetworkAndReload, 2500);
            }

            // checkNetworkAndReload();
        </script>
    </body>
</html>
