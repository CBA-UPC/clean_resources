/chunk.3Y6SB6QS.js";
import "./chunks/chunk.LKA3TPUC.js";

// src/shoelace-autoloader.ts
var observer = new MutationObserver((mutations) => {
  for (const { addedNodes } of mutations) {
    for (const node of addedNodes) {
      if (node.nodeType === Node.ELEMENT_NODE) {
        discover(node);
      }
    }
  }
});
async function discover(root) {
  const rootTagName = root instanceof Element ? root.tagName.toLowerCase() : "";
  const rootIsCustomElement = rootTagName == null ? void 0 : rootTagName.includes("-");
  const tags = [...root.querySelectorAll(":not(:defined)")].map((el) => el.tagName.toLowerCase()).filter((tag) => tag.startsWith("sl-"));
  if (rootIsCustomElement && !customElements.get(rootTagName)) {
    tags.push(rootTagName);
  }
  const tagsToRegister = [...new Set(tags)];
  await Promise.allSettled(tagsToRegister.map((tagName) => register(tagName)));
}
function register(tagName) {
  const tagWithoutPrefix = tagName.replace(/^sl-/i, "");
  const path = getBasePath(`components/${tagWithoutPrefix}/${tagWithoutPrefix}.js`);
  if (customElements.get(tagName)) {
    return Promise.resolve();
  }
  return new Promise((resolve, reject) => {
    import(path).then(() => resolve()).catch(() => reject(new Error(`Unable to autoload <${tagName}> from ${path}`)));
  });
}
discover(document.body);
observer.observe(document.documentElement, { subtree: true, childList: true });
export {
  discover
};
 1px;
		cursor: pointer;
		-webkit-border-radius: 3px;
		-webkit-appearance: none;
		border-radius: 3px;
		white-space: nowrap;
		-webkit-box-sizing: border-box;
		-moz-box-sizing:    border-box;
		box-sizing:         border-box;

		-webkit-box-shadow: 0 1px 0 #ccc;
		box-shadow: 0 1px 0 #ccc;
		vertical-align: top;
	}

	.button.button-large {
		height: 30px;
		line-height: 28px;
		padding: 0 12px 2px;
	}

	.button:hover,
	.button:focus {
		background: #fafafa;
		border-color: #999;
		color: #23282d;
	}

	.button:focus  {
		border-color: #5b9dd9;
		-webkit-box-shadow: 0 0 3px rgba( 0, 115, 170, .8 );
		box-shadow: 0 0 3px rgba( 0, 115, 170, .8 );
		outline: none;
	}

	.button:active {
		background: #eee;
		border-color: #999;
		-webkit-box-shadow: inset 0 2px 5px -3px rgba( 0, 0, 0, 0.5 );
		box-shadow: inset 0 2px 5px -3px rgba( 0, 0, 0, 0.5 );
		-webkit-transform: translateY(1px);
		-ms-transform: translateY(1px);
		transform: translateY(1px);
	}

		</style>
<meta name="robots" content="noindex, follow" />
</head>
<body id="error-page" class="wp-embed-responsive error offline">
<main>
<h1>Offline</h1>
<p>{{{WP_SERVICE_WORKER_ERROR_MESSAGE}}}</p></main>
<script id="wp-navigation-request-properties" type="application/json">{{{WP_NAVIGATION_REQUEST_PROPERTIES}}}</script> <script type="module">
		const shouldRetry = () => {
			if (
				new URLSearchParams(location.search.substring(1)).has(
					'wp_error_template'
				)
			) {
				return false;
			}

			const navigationRequestProperties = JSON.parse(
				document.getElementById('wp-navigation-request-properties').text
			);
			if ('GET' !== navigationRequestProperties.method) {
				return false;
			}

			return true;
		};

		if (shouldRetry()) {
			/**
			 * Listen to changes in the network state, reload when online.
			 * This handles the case when the device is completely offline.
			 */
			window.addEventListener('online', () => {
				window.location.reload();
			});

			// Create a counter to implement exponential backoff.
			let count = 0;

			/**
			 * Check if the server is responding and reload the page if it is.
			 * This handles the case when the device is online, but the server is offline or misbehaving.
			 */
			async function checkNetworkAndReload() {
				try {
					const response = await fetch(location.href, {
						method: 'HEAD',
					});
					// Verify we get a valid response from the server
					if (response.status >= 200 && response.status < 500) {
						window.location.reload();
						return;
					}
				} catch {
					// Unable to connect so do nothing.
				}
				window.setTimeout(
					checkNetworkAndReload,
					Math.pow(2, count++) * 2500
				);
			}

			checkNetworkAndReload();
		}
	</script>
<script defer src="https://static.cloudflareinsights.com/beacon.min.js/v84a3a4012de94ce1a686ba8c167c359c1696973893317" integrity="sha512-euoFGowhlaLqXsPWQ48qSkBSCFs3DPRyiwVu3FjR96cMPx+Fr+gpWRhIafcHwqwCqWS42RZhIudOvEI+Ckf6MA==" data-cf-beacon='{"rayId":"846c0957887e11bf","b":1,"version":"2023.10.0","token":"58fded4126c3477992569cffd9319d48"}' crossorigin="anonymous"></script>
</body>
</html>
