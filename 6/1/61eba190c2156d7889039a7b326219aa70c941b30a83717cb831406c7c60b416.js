			(function(win, doc){
				var config = {"columnCount":5,"rowCount":1,"imageRatio":0.5625,"paddingSize":1,"paddingUnit":"px","borderSize":0,"modelSize":0,"frameWidth":0,"frameHeight":0,"containerId":"awe-customiframe-container"};
				var container;
				function init() {
					container = doc.getElementById(config.containerId);
					if (container) {
						if (config.frameWidth && config.frameHeight) {
							container.style.width = config.frameWidth + 'px';
							container.style.height = config.frameHeight + 'px';
							setFixedContainer();
							win.addEventListener('resize', function() {
								setFixedContainer();
							}, false);
						} else {
							container.style.height = 0;
							container.style.overflow = 'hidden';
							setResponsiveContainer();

							if (config.modelSize) {
								container.style.paddingTop = (config.modelSize * config.rowCount) + 'px';
							}

							win.addEventListener('resize',  false);
						}
					}
				}

				function setResponsiveContainer() {
					var width, framePadding, imageWidth, imageHeight, boxFullWidth, boxFullHeight, frameRatio;
					width = container.clientWidth || container.offsetWidth;
					framePadding  = (config.paddingUnit === 'px') ? config.paddingSize : width * ((100 - 2 * config.paddingSize) / 100) * config.paddingSize / 100;
					imageWidth    = ((width - (framePadding * 2)) / config.columnCount) - ((framePadding + config.borderSize) * 2);
					imageHeight   = config.imageRatio * imageWidth;
					boxFullWidth  = imageWidth + ((framePadding + config.borderSize) * 2);
					boxFullHeight = imageHeight + ((framePadding + config.borderSize) * 2);
					frameRatio    = (boxFullHeight * config.rowCount + (framePadding * 2)) / (boxFullWidth * config.columnCount + (framePadding * 2)) * 100;
					container.style.paddingBottom = frameRatio + '%';
				}

				function setFixedContainer() {
					var windowWidth = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
					container.style.width = ((windowWidth < config.width) ? windowWidth : config.width) + 'px';
				}

				init();
			}(window, document));
		