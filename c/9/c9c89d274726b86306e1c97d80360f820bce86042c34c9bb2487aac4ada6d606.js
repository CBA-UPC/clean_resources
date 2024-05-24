<!DOCTYPE html>
<html lanh=device-width, initial-scale=1.0" />
        <title>Доступ ограничен: проблема с IP</title>
        <style>
            body {
                margin: 0;
                background-color: #fff;
                color: #000;
                font: 13px/1.5 Arial, 'Helvetica Neue', Helvetica, sans-serif;
                margin-left: 20px;
                margin-right: 20px;
            }

            .firewall-container {
                margin: 30px auto;
                width: 500px;
                position: relative;
            }

            .firewall-icon {
                position: absolute;
                left: -87px;
                top: 0;
            }

            .firewall-title {
                font-size: 24px;
                font-weight: 400;
                line-height: 28px;
            }

            .form {
                font-size: 14px;
                display: block;
                margin-top: 0em;
            }

            .firewall-container .firewall-p-bold {
                font-weight: 700;
            }

            /**
 * Интерфейс каптчи
 */
            .form-captcha {
                position: relative;
            }

            .form-captcha-input {
                width: grid(2);
            }

            .form-captcha-big .form-captcha-input {
                margin-bottom: 4px !important;
            }

            .form-captcha-image,
            .form-captcha-refresh {
                display: inline-block;
                vertical-align: middle;
            }

            .form-captcha-image {
                width: 94px;
                height: 30px;
                margin-left: 22px;
            }

            .form-captcha-big .form-captcha-image {
                height: 52px;
                margin-left: 8px;
                position: absolute;
                width: 156px;
            }

            .form-captcha-refresh {
                width: 30px;
                height: 30px;
                border-radius: 50%;
                border: 1px solid #d6d6d6;
                box-sizing: border-box;
                margin-left: 18px;
                background: url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMSIgaGVpZ2h0PSIxNyI+PGcgZmlsbD0ibm9uZSIgZmlsbC1ydWxlPSJldmVub2RkIiBzdHJva2U9IiM5Nzk3OTciIHN0cm9rZS13aWR0aD0iMiI+PHBhdGggZD0iTTEuMzg3IDQuMDE3bDMuNzYtMS4zNjggMS4zNjcgMy43NTdtMTIuODE2IDUuOTc4bC0zLjc1OCAxLjM2OC0xLjM2OC0zLjc2IiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiLz48cGF0aCBkPSJNMTUuNjMzIDEyLjgwNmE3LjAwMSA3LjAwMSAwIDAgMC02Ljc0MS0xMS40NU01LjQ4OCAzLjU5QzMuNSA1LjU3NCAyLjkxOCA4LjIyIDMuNzggMTAuNTk0IDUuMDIgMTQgOC40NyAxNS44NDIgMTEuODE1IDE1LjEyIi8+PC9nPjwvc3ZnPg==)
                    center center no-repeat;
                cursor: pointer;
            }

            .form-captcha-refresh.is-animation {
                animation: captcha-rotate 1s ease-out 1 forwards;
            }

            .is-animation .form-captcha-refresh {
                animation: captcha-rotate 1s ease-out 1 forwards;
            }

            .form-captcha-big .form-captcha-refresh {
                background-size: 10px;
                height: 16px;
                margin-left: 0;
                width: 16px;
            }

            .form-captcha-inline {
                padding: 0;
            }

            .form-captcha-inline > label {
                display: none;
            }

            .form-captcha .form-fieldset__error {
                width: grid(4);
            }

            .form-fieldset:first-child {
                margin-top: 0;
            }

            .form-captcha-inline {
                padding: 0;
            }

            .form-captcha {
                position: relative;
            }

            .form-fieldset__context {
                position: relative;
                word-wrap: break-word;
            }

            .form-fieldset {
                position: relative;
                margin: 10px 0;
                border: 0;
                padding: 0;
                line-height: 20px;
            }

            .form input {
                background-color: #fff;
                font-family: Arial, 'Helvetica Neue', Helvetica, sans-serif;
                font-size: 14px;
                vertical-align: middle;
                line-height: 16px;
                width: 144px;
                color: #000;
                margin: 0;
                padding: 0 8px;
                height: 30px;
                box-sizing: border-box;
                box-shadow: inset 0 1px 1px rgba(142, 142, 142, 0.2);
                border: 1px solid #d6d6d6;
                border-radius: 2px;
                display: inline-block;
                -webkit-appearance: none;
                -moz-appearance: none;
                appearance: none;
                outline: 0;
            }

            .button {
                background-color: #fff;
                font-family: Arial, 'Helvetica Neue', Helvetica, sans-serif;
                font-size: 14px;
                line-height: 16px;
                color: #000;
                padding: 6px 13px;
                margin-top: 20px;
                border: 1px solid #ccc;
                border-radius: 3px;
                text-decoration: none;
                vertical-align: middle;
                position: relative;
                box-sizing: border-box;
                display: inline-block;
                white-space: nowrap;
                -ms-user-select: none;
                -moz-user-select: none;
                -webkit-touch-callout: none;
                -webkit-user-select: none;
                user-select: none;
                -webkit-appearance: none;
                -moz-appearance: none;
                cursor: pointer;
                outline: 0;
            }

            .form-captcha .form-fieldset__error {
                width: 308px;
            }

            .form-fieldset__error,
            .form-fieldset__help {
                font-size: 13px;
                color: #ff6163;
                line-height: 18px;
                margin-top: 4px;
                display: block;
            }

            .invisible-cube {
                display: none;
                position: absolute;
                opacity: 0;
            }

            @-moz-keyframes captcha-rotate {
                to {
                    transform: rotate(1turn);
                }
            }

            @-webkit-keyframes captcha-rotate {
                to {
                    transform: rotate(1turn);
                }
            }

            @-o-keyframes captcha-rotate {
                to {
                    transform: rotate(1turn);
                }
            }

            @keyframes captcha-rotate {
                to {
                    transform: rotate(1turn);
                }
            }
        </style>
    </head>

    <body>
        <div class="firewall-container">
            <div class="firewall-icon">
                <svg xmlns="http://www.w3.org/2000/svg" width="62" height="62">
                    <g fill="none" fill-rule="evenodd">
                        <circle cx="31" cy="31" r="31" fill="#FF6163" />
                        <g stroke="#FFF" stroke-width="2">
                            <path d="M19.71 20.417l22.627 22.627M42.188 20.118L19.56 42.746" />
                        </g>
                    </g>
                </svg>
            </div>
            <h2 class="firewall-title">Доступ ограничен: проблема с IP</h2>
            <form class="form js-submit js-firewall-form" autocomplete="off">
                <div id="h-captcha" style="display: none">
                    <p class="text">
                        Иногда такое случается — чтобы вернуться на&nbsp;сайт, поставьте галочку и&nbsp;нажмите &laquo;Отправить&raquo;.
                    </p>
                    <div
                        class="h-captcha"
                        data-sitekey="070db171-ddb9-4c93-b7f6-d25d3c9d7e28"
                        data-callback="sethCaptchaResponse"
                    ></div>
                    <textarea id="h-captcha-response" name="e-captcha-response" style="display: none"></textarea>
                    <script>
                        function sethCaptchaResponse(response) {
                            document.getElementById('h-captcha-response').value = response;
                        }
                    </script>
                    <script src="https://hcaptcha.com/1/api.js?hl=ru&recaptchacompat=off" async defer></script>
                </div>
                <fieldset
                    style="display: none"
                    id="inner-captcha"
                    class="js-form-captcha form-fieldset form-captcha form-captcha-inline"
                >
                    <p class="text">
                        Иногда такое случается&nbsp;— чтобы вернуться на&nbsp;сайт, введите символы с&nbsp;картинки.
                    </p>
                    <div class="form-fieldset__context">
                        <input
                            id="form-input"
                            type="text"
                            class="form-captcha-input js-captcha-input"
                            autocomplete="off"
                            autocapitalize="off"
                            autocorrect="off"
                            name="captcha"
                        />
                        <img class="form-captcha-image js-form-captcha-image" />
                        <div class="form-captcha-refresh js-form-captcha-refresh"></div>
                    </div>
                    <span class="form-fieldset__error"></span>
                    <span class="form-fieldset__error form-fieldset__error_js js-error"></span>
                </fieldset>
                <div class="form-action">
                    <button class="button" type="submit" name="submit">Отправить</button>
                </div>
            </form>
            <p class="text firewall-p-bold">Что можно сделать, если проблема повторяется</p>
            <p class="text">— Отключить VPN.</p>
            <p class="text">— Перезагрузить роутер.</p>
            <p class="text">— Запустить проверку антивирусом.</p>
            <p class="text">Не сработает — <a href="https://support.avito.ru/request/720?eventData[contextId]=117">напишите поддержке</a>. Обязательно укажите свой город, провайдера и&nbsp;IP.</p>
            <p class="text firewall-p-bold">Что не так с IP</p>
            <p class="text">С него идёт очень много запросов&nbsp;— как если&nbsp;бы вы&nbsp;разом открывали десятки вкладок или слишком часто обновляли страницу.</p>
            <p class="text">Обычно такое бывает, когда одним IP пользуются несколько человек. Например, если ваш провайдер объединяет абонентов в&nbsp;подсети, вы&nbsp;открываете сайт с&nbsp;рабочего компьютера или пользуетесь VPN. Также причина может быть в&nbsp;расширениях браузера и&nbsp;вирусах.</p>
        </div>

        <canvas class="invisible-cube" width="570" height="570" id="my_Canvas"></canvas>
        <script>
            /*============= Creating a canvas =================*/
            var canvas = document.getElementById('my_Canvas');
            gl = canvas.getContext('webgl');

            /*============ Defining and storing the geometry =========*/

            var vertices = [
               -1,-1,-1, 1,-1,-1, 1, 1,-1, -1, 1,-1,
               -1,-1, 1, 1,-1, 1, 1, 1, 1, -1, 1, 1,
               -1,-1,-1, -1, 1,-1, -1, 1, 1, -1,-1, 1,
               1,-1,-1, 1, 1,-1, 1, 1, 1, 1,-1, 1,
               -1,-1,-1, -1,-1, 1, 1,-1, 1, 1,-1,-1,
               -1, 1,-1, -1, 1, 1, 1, 1, 1, 1, 1,-1,
            ];

            var colors = [
               5,3,7, 5,3,7, 5,3,7, 5,3,7,
               1,1,3, 1,1,3, 1,1,3, 1,1,3,
               0,0,1, 0,0,1, 0,0,1, 0,0,1,
               1,0,0, 1,0,0, 1,0,0, 1,0,0,
               1,1,0, 1,1,0, 1,1,0, 1,1,0,
               0,1,0, 0,1,0, 0,1,0, 0,1,0
            ];

            var indices = [
               0,1,2, 0,2,3, 4,5,6, 4,6,7,
               8,9,10, 8,10,11, 12,13,14, 12,14,15,
               16,17,18, 16,18,19, 20,21,22, 20,22,23
            ];

            // Create and store data into vertex buffer
            var vertex_buffer = gl.createBuffer ();
            gl.bindBuffer(gl.ARRAY_BUFFER, vertex_buffer);
            gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(vertices), gl.STATIC_DRAW);

            // Create and store data into color buffer
            var color_buffer = gl.createBuffer ();
            gl.bindBuffer(gl.ARRAY_BUFFER, color_buffer);
            gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(colors), gl.STATIC_DRAW);

            // Create and store data into index buffer
            var index_buffer = gl.createBuffer ();
            gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, index_buffer);
            gl.bufferData(gl.ELEMENT_ARRAY_BUFFER, new Uint16Array(indices), gl.STATIC_DRAW);

            /*=================== Shaders =========================*/

            var vertCode = 'attribute vec3 position;'+
               'uniform mat4 Pmatrix;'+
               'uniform mat4 Vmatrix;'+
               'uniform mat4 Mmatrix;'+
               'attribute vec3 color;'+//the color of the point
               'varying vec3 vColor;'+

               'void main(void) { '+//pre-built function
                  'gl_Position = Pmatrix*Vmatrix*Mmatrix*vec4(position, 1.);'+
                  'vColor = color;'+
               '}';

            var fragCode = 'precision mediump float;'+
               'varying vec3 vColor;'+
               'void main(void) {'+
                  'gl_FragColor = vec4(vColor, 1.);'+
               '}';

            var vertShader = gl.createShader(gl.VERTEX_SHADER);
            gl.shaderSource(vertShader, vertCode);
            gl.compileShader(vertShader);

            var fragShader = gl.createShader(gl.FRAGMENT_SHADER);
            gl.shaderSource(fragShader, fragCode);
            gl.compileShader(fragShader);

            var shaderProgram = gl.createProgram();
            gl.attachShader(shaderProgram, vertShader);
            gl.attachShader(shaderProgram, fragShader);
            gl.linkProgram(shaderProgram);

            /* ====== Associating attributes to vertex shader =====*/
            var Pmatrix = gl.getUniformLocation(shaderProgram, "Pmatrix");
            var Vmatrix = gl.getUniformLocation(shaderProgram, "Vmatrix");
            var Mmatrix = gl.getUniformLocation(shaderProgram, "Mmatrix");

            gl.bindBuffer(gl.ARRAY_BUFFER, vertex_buffer);
            var position = gl.getAttribLocation(shaderProgram, "position");
            gl.vertexAttribPointer(position, 3, gl.FLOAT, false,0,0) ;

            // Position
            gl.enableVertexAttribArray(position);
            gl.bindBuffer(gl.ARRAY_BUFFER, color_buffer);
            var color = gl.getAttribLocation(shaderProgram, "color");
            gl.vertexAttribPointer(color, 3, gl.FLOAT, false,0,0) ;

            // Color
            gl.enableVertexAttribArray(color);
            gl.useProgram(shaderProgram);

            /*==================== MATRIX =====================*/

            function get_projection(angle, a, zMin, zMax) {
               var ang = Math.tan((angle*.5)*Math.PI/180);//angle*.5
               return [
                  0.5/ang, 0 , 0, 0,
                  0, 0.5*a/ang, 0, 0,
                  0, 0, -(zMax+zMin)/(zMax-zMin), -1,
                  0, 0, (-2*zMax*zMin)/(zMax-zMin), 0
               ];
            }

            var proj_matrix = get_projection(40, canvas.width/canvas.height, 1, 100);

            var mov_matrix = [1,0,0,0, 0,1,0,0, 0,0,1,0, 0,0,0,1];
            var view_matrix = [1,0,0,0, 0,1,0,0, 0,0,1,0, 0,0,0,1];

            // translating z
            view_matrix[14] = view_matrix[14]-6;//zoom

            /*==================== Rotation ====================*/

            function rotateZ(m, angle) {
               var c = Math.cos(angle);
               var s = Math.sin(angle);
               var mv0 = m[0], mv4 = m[4], mv8 = m[8];

               m[0] = c*m[0]-s*m[1];
               m[4] = c*m[4]-s*m[5];
               m[8] = c*m[8]-s*m[9];

               m[1]=c*m[1]+s*mv0;
               m[5]=c*m[5]+s*mv4;
               m[9]=c*m[9]+s*mv8;
            }

            function rotateX(m, angle) {
               var c = Math.cos(angle);
               var s = Math.sin(angle);
               var mv1 = m[1], mv5 = m[5], mv9 = m[9];

               m[1] = m[1]*c-m[2]*s;
               m[5] = m[5]*c-m[6]*s;
               m[9] = m[9]*c-m[10]*s;

               m[2] = m[2]*c+mv1*s;
               m[6] = m[6]*c+mv5*s;
               m[10] = m[10]*c+mv9*s;
            }

            function rotateY(m, angle) {
               var c = Math.cos(angle);
               var s = Math.sin(angle);
               var mv0 = m[0], mv4 = m[4], mv8 = m[8];

               m[0] = c*m[0]+s*m[2];
               m[4] = c*m[4]+s*m[6];
               m[8] = c*m[8]+s*m[10];

               m[2] = c*m[2]-s*mv0;
               m[6] = c*m[6]-s*mv4;
               m[10] = c*m[10]-s*mv8;
            }

            /*================= Drawing ===========================*/
            var time_old = 0;
            var count = 0;
            var elapsed = 0;

            var animate = async function(time) {
               count++;

               var dt = time-time_old;
               rotateZ(mov_matrix, dt*0.005);//time
               rotateY(mov_matrix, dt*0.002);
               rotateX(mov_matrix, dt*0.003);
               time_old = time;

               gl.enable(gl.DEPTH_TEST);
               gl.depthFunc(gl.LEQUAL);
               gl.clearColor(0.5, 0.5, 0.5, 0.9);
               gl.clearDepth(1.0);

               gl.viewport(0.0, 0.0, canvas.width, canvas.height);
               gl.clear(gl.COLOR_BUFFER_BIT | gl.DEPTH_BUFFER_BIT);
               gl.uniformMatrix4fv(Pmatrix, false, proj_matrix);
               gl.uniformMatrix4fv(Vmatrix, false, view_matrix);
               gl.uniformMatrix4fv(Mmatrix, false, mov_matrix);
               gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, index_buffer);
               gl.drawElements(gl.TRIANGLES, indices.length, gl.UNSIGNED_SHORT, 0);

               // We constructed a red pill that tests the communication latency
               // between the CPU and graphics card of a websiteâ€™s visi-
               // tor.
               var t0 = performance.now();
               var pixelsArray = new Uint8Array(gl.drawingBufferWidth * gl.drawingBufferHeight * 4);
               gl.readPixels(0, 0, gl.drawingBufferWidth, gl.drawingBufferHeight, gl.RGBA, gl.UNSIGNED_BYTE, pixelsArray);
               var t1 = performance.now();
               elapsed += (t1 - t0);

               if (count < 50) {
                  window.requestAnimationFrame(animate);
               } else {
                  var result = document.createElement('div');
                  result.setAttribute("id", "cubeResult");
                  result.setAttribute("class", "invisible-cube")
                  result.innerHTML = elapsed;
                  document.body.appendChild(result);
               }
            }
            animate(0);
         </script>
        <script>
                class Captcha {
                constructor(container) {
                    this.container = container;
                    this.img = this.container.querySelector('.js-form-captcha-image');
                    this.spinner = this.container.querySelector('.js-form-captcha-refresh');
                    this.errorField = this.container.querySelector('.form-fieldset__error_js');
                    this.isBusy = false;

                    this.spinner.addEventListener('click', () => {
                        if (this.isBusy) {
                            return false;
                        }
                        this.isBusy = true;

                        this.animate();

                        return true;
                    });
                }

                /**
                 * Обновить изображение
                 * @return {Captcha}
                 */
                changeImage(image) {
                    this.img.setAttribute('src', image);

                    return this;
                }

                /**
                 * Показать ошибку
                 * @param {string} errorMessage текст ошибки
                 * @return {Captcha}
                 */
                showError(errorMessage) {
                    this.errorField.textContent = errorMessage;
                    this.container.classList.add('is-error');

                    return this;
                }

                /**
                 * Спрятать ошибку
                 * @return {Captcha}
                 */
                hideError() {
                    this.errorField.textContent = '';
                    this.container.classList.add('is-error');

                    return this;
                }

                /**
                 * Анимация спиннера
                 * @return {Captcha}
                 */
                animate() {
                    const spinner = this.spinner;
                    const events = ['animationend', 'webkitAnimationEnd', 'oanimationend', 'MSAnimationEnd'];

                    spinner.classList.add('is-animation');

                    events.forEach((event) => {
                        spinner.addEventListener(
                            event,
                            () => {
                                spinner.classList.remove('is-animation');
                                this.isBusy = false;
                            },
                            { once: true }
                        );
                    });

                    return this;
                }
            }

            const AVITO_CAPTCHA = 'avitoCaptcha';
            const H_CAPTCHA = 'hCaptcha';

            document.addEventListener('DOMContentLoaded', async () => {
                const form = document.querySelector('.js-firewall-form');
                form.addEventListener('submit', submitCaptcha);

                const captcha = await getCaptcha();
                renderCaptcha(captcha, true);
            });

            const submitCaptcha = async (e) => {
                e.preventDefault();
                const hCaptcha = document.querySelector('#h-captcha-response');
                const input = document.querySelector('#form-input');
                const captchaValue = input.value.trim();
                const hCaptchaValue = hCaptcha.value;

                const { verified, captcha } = await verifyCaptcha({ captcha: captchaValue, hCaptchaResponse: hCaptchaValue });

                if (verified || (!verified && captcha.type === H_CAPTCHA)) {
                    window.location = location.href;
                }

                renderCaptcha(captcha);
            };

            function getAvitoCaptcha(avitoCaptcha) {
                if (window.avitoCaptcha) {
                    return window.avitoCaptcha;
                }
                window.avitoCaptcha = new Captcha(avitoCaptcha);
                return window.avitoCaptcha;
            }

            function renderCaptcha({ type, image, message }, isFirst = false) {
                const hCaptcha = document.querySelector('#h-captcha');
                const avitoCaptcha = document.querySelector('#inner-captcha');

                if (type === AVITO_CAPTCHA) {
                    avitoCaptcha.style.display = 'block';
                    hCaptcha.style.display = 'none';
                    return renderAvitoCaptcha(image, message, isFirst);
                }

                avitoCaptcha.style.display = 'none';
                hCaptcha.style.display = 'block';
            }

            function renderAvitoCaptcha(image = '', message = '', isFirst) {
                const avitoCaptchaContainer = document.querySelector('#inner-captcha');
                const avitoCaptcha = getAvitoCaptcha(avitoCaptchaContainer);
                if (isFirst) {
                    const spinner = document.querySelector('.js-form-captcha-refresh');
                    spinner.addEventListener('click', updateCaptcha);
                }

                avitoCaptcha.changeImage(image);
                if (message) {
                    avitoCaptcha.showError(message);
                }
            }

            async function updateCaptcha() {
                captcha = await getCaptcha(true);
                renderCaptcha(captcha);
            }

            async function getCaptcha(refreshAvitoCaptcha = false) {
                return fetch('/web/1/firewallCaptcha/get', {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify({ refreshAvitoCaptcha }),
                })
                    .then((resp) => resp.json())
                    .then(({ result }) => {
                        return (result && result.captcha) || {};
                    })
                    .catch((err) => {
                        console.log(err);
                    });
            }

            async function verifyCaptcha({ captcha = '', hCaptchaResponse = '' }) {
                const cubeResult = document.getElementById('cubeResult');
                return fetch('/web/1/firewallCaptcha/verify', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                        'X-Cube': cubeResult?.innerHTML
                    },
                    body: JSON.stringify({ captcha, hCaptchaResponse }),
                })
                    .then((res) => res.json())
                    .then(({ result }) => {
                        return result;
                    })
                    .catch((err) => {
                        console.log(err);
                    });
            }
        </script>
    </body>
</html>

