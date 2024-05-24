.zip-ai-toolbar{border:0;border-radius:0;border-right:1px solid #1e1e1e}.zip-ai-toolbar .components-toolbar-button{border-radius:0}.zip-ai-toolbar .components-toolbar-button:focus::before{box-shadow:none;outline:none}.zip-ai-toolbar .components-toolbar-button svg{stroke:currentColor;stroke-width:1.4;fill:none}.interface-interface-skeleton__sidebar:has(>div>div.zip-ai-sidebar){display:none}.zip-ai-highlighted{background-color:#007cba;color:#fff}
@keyframes fadeIntoView{0%{opacity:0}100%{opacity:1}}@keyframes fadeOutOfView{0%{opacity:1}100%{opacity:0}}@keyframes slideInFromRight{0%{right:-450px}100%{right:0}}@keyframes slideOutToRight{0%{right:0}100%{right:-450px}}@keyframes chatBubble{0%{opacity:0;top:25px}90%{opacity:1;top:-5px}100%{top:0}}@keyframes jump{0%{top:0;opacity:.5}15%{top:-4px;opacity:1}30%{top:2px;opacity:.5}35%{top:0}}.zip-ai-sidebar{cursor:auto;position:absolute;top:0;right:0;display:flex;flex-direction:column;width:450px;height:100vh;border-radius:0;box-shadow:-16px 0 80px -24px rgba(0,0,0,.16);overflow:visible;animation:slideInFromRight 100ms 50ms 1 ease-in-out both;color:#50575e;background:#fff}.zip-ai-sidebar.close-it{animation:slideOutToRight 150ms 0s 1 ease-in-out forwards}.zip-ai-sidebar,.zip-ai-sidebar *:not(.dashicons):not(code){font-family:Inter,sans-serif;box-sizing:border-box}.zip-ai-sidebar-overlay{cursor:pointer;position:fixed;top:0;left:0;width:100vw;height:100vh;background-color:rgba(17,24,39,.05);z-index:999999;animation:fadeIntoView 150ms 0s 1 ease-in-out none}.zip-ai-sidebar-overlay.close-it{animation:fadeOutOfView 100ms 50ms 1 ease-in-out forwards}.zip-ai-sidebar__header{position:relative;display:flex;align-items:center;justify-content:center;height:60px;padding:12px;box-shadow:0 1px #e6e7e9;z-index:10}.zip-ai-sidebar__header--title{padding:0;margin:0;font-size:1.125rem;line-height:1.75rem;font-weight:600;color:#1e293b;background:rgba(0,0,0,0)}.zip-ai-sidebar__header--close{position:absolute;top:0;left:0;height:60px;aspect-ratio:1/1;border:none;cursor:pointer;padding:0;margin:0;color:#1e293b;background:rgba(0,0,0,0)}.zip-ai-sidebar__header--close:hover,.zip-ai-sidebar__header--close:focus-visible{color:#50575e;background:rgba(0,0,0,0)}.zip-ai-sidebar__header--close .dashicons{width:1.25rem;height:1.25rem;font-size:1.25rem;font-weight:400;line-height:1.25rem}.zip-ai-sidebar__header .components-modal__icon-container{display:flex;align-items:center;margin-top:0;margin-right:12px}.zip-ai-sidebar__header .components-modal__icon-container svg{height:32px}.zip-ai-sidebar__notification{position:relative;height:40px;max-height:0;overflow:hidden;box-shadow:0 1px #e6e7e9;color:#fff;background:#e34848;transition:max-height 250ms 0s ease-in-out}.zip-ai-sidebar__notification--visible{max-height:40px}.zip-ai-sidebar__notification--content{position:absolute;bottom:0;height:40px;width:100%;padding:0 20px;display:flex;flex-direction:row;justify-content:space-between;align-items:center;letter-spacing:.1px;font-size:.875rem;line-height:1.25rem;font-weight:500}.zip-ai-sidebar__notification .components-button{width:24px;height:24px;padding:4px;position:absolute;top:8px;right:8px}.zip-ai-sidebar__notification .components-button svg{width:20px;height:20px;color:#fff;background:rgba(0,0,0,0)}.zip-ai-sidebar__chat-window{flex:1;display:flex;flex-direction:column;justify-content:flex-start;align-items:flex-start;padding:20px;padding-right:0;gap:16px;overflow-y:scroll;color:#50575e;background:#f6fafe;scrollbar-width:20px;scrollbar-color:#b0b9c6 #f6fafe}.zip-ai-sidebar__chat-window::-webkit-scrollbar{width:20px}.zip-ai-sidebar__chat-window::-webkit-scrollbar-track{border-radius:10px;background-color:#f6fafe}.zip-ai-sidebar__chat-window::-webkit-scrollbar-thumb{border-radius:10px;background-color:#b0b9c6;border:6px solid #f6fafe}.zip-ai-sidebar__chat-window:focus-visible{outline:0;box-shadow:none;border-color:#b0b9c6}.zip-ai-sidebar__chat-window::placeholder{color:#aaa;background:rgba(0,0,0,0)}.zip-ai-sidebar__chat-window--placeholder{flex:1;display:flex;flex-direction:column;justify-content:center;align-items:center;padding:32px;gap:16px;width:100%}.zip-ai-sidebar__chat-window--placeholder-logos{display:flex;justify-content:center;align-items:center;gap:12px}.zip-ai-sidebar__chat-window--placeholder-logos>:first-child{width:32px;height:32px}.zip-ai-sidebar__chat-window--placeholder-grid{display:grid;grid-template-columns:repeat(3, 1fr);grid-auto-rows:1fr;gap:24px;padding:8px 0;width:100%}.zip-ai-sidebar__chat-window--placeholder-grid-item{display:flex;flex-direction:column;justify-content:space-between;align-items:center;gap:8px;width:100%;height:100%}.zip-ai-sidebar__chat-window--placeholder-grid-item-heading{width:100%;text-align:center;font-size:.75rem;line-height:1rem;font-weight:500}.zip-ai-sidebar__chat-window--placeholder-button{cursor:pointer;display:flex;align-items:center;justify-content:center;gap:8px;padding:10px 20px;border-radius:4px;border:1px solid #007cba;font-size:.875rem;line-height:1.25rem;font-weight:400;color:#fff;background:#007cba;transition:background-color 100ms 0s ease-in-out,opacity 100ms 0s ease-in-out}.zip-ai-sidebar__chat-window--placeholder-button:hover,.zip-ai-sidebar__chat-window--placeholder-button:focus-visible{color:#fff;background:#0063a1}.zip-ai-sidebar__chat-window--placeholder-button:disabled{opacity:.5;cursor:not-allowed}.zip-ai-sidebar__chat-window--placeholder-heading{text-align:center;padding:0;margin:0;font-size:1rem;line-height:1.5rem;font-weight:700}.zip-ai-sidebar__chat-window--placeholder-subheading{text-align:center;padding:0;margin:0;font-size:.875rem;line-height:1.25rem;font-weight:400}.zip-ai-sidebar__chat-window--placeholder-padded-content{margin:0;padding:8px;text-align:center;font-size:.875rem;line-height:1.25rem;font-weight:400}.zip-ai-sidebar__chat-window--placeholder-link{text-decoration:none;border-bottom:1px solid #b0b9c6;font-size:.875rem;line-height:1.25rem;font-weight:400;color:#959aa3;background:rgba(0,0,0,0);transition:border-bottom 150ms 0s ease-in-out}.zip-ai-sidebar__chat-window--placeholder-link:hover,.zip-ai-sidebar__chat-window--placeholder-link:focus-visible{outline:0;border:0;box-shadow:none;border-bottom:1px solid #007cba;color:#959aa3;background:rgba(0,0,0,0)}.zip-ai-sidebar__chat-window--footer{width:100%;text-align:center;font-size:.75rem;line-height:1rem;font-weight:400;color:#aaa;background:rgba(0,0,0,0)}.zip-ai-sidebar__chat-window--footer-inline-action{text-decoration:underline;cursor:pointer;border:none;-webkit-appearance:none;appearance:none;padding:0;margin:0;color:inherit;background:rgba(0,0,0,0);transition:color 150ms 0s ease-in-out}.zip-ai-sidebar__chat-window--footer-inline-action:hover,.zip-ai-sidebar__chat-window--footer-inline-action:focus-visible{outline:0;box-shadow:none;border:0;color:#50575e;background:rgba(0,0,0,0)}.zip-ai-sidebar__chat-bubble{position:relative;width:100%;display:flex;flex-direction:column;border:1px solid #e2e8f0;border-radius:8px;background:#fff;padding:16px;gap:6px;animation:chatBubble 150ms 0s 1 ease none}.zip-ai-sidebar__chat-bubble:hover .zip-ai-sidebar__chat-bubble--interaction-on-hover{opacity:1}.zip-ai-sidebar__chat-bubble--header,.zip-ai-sidebar__chat-bubble--footer{display:flex;justify-content:space-between}.zip-ai-sidebar__chat-bubble--footer{margin-top:6px}.zip-ai-sidebar__chat-bubble--user{flex:1;padding:0;margin:0;font-size:.875rem;line-height:1.25rem;font-weight:600;color:#50575e;background:rgba(0,0,0,0)}.zip-ai-sidebar__chat-bubble--interaction{display:flex;justify-content:flex-end;gap:8px}.zip-ai-sidebar__chat-bubble--interaction-on-hover{opacity:0;transition:opacity 150ms 0s ease-in-out}.zip-ai-sidebar__chat-bubble--interaction button{width:24px;aspect-ratio:1/1;padding:4px;border:0;cursor:pointer;color:#aaa;background:rgba(0,0,0,0)}.zip-ai-sidebar__chat-bubble--interaction button svg{width:16px;aspect-ratio:1/1;color:inherit;background:rgba(0,0,0,0);transition:color 150ms 0s ease-in-out}.zip-ai-sidebar__chat-bubble--interaction button:hover,.zip-ai-sidebar__chat-bubble--interaction button:focus-visible{outline:0;box-shadow:none}.zip-ai-sidebar__chat-bubble--interaction button:hover svg,.zip-ai-sidebar__chat-bubble--interaction button:focus-visible svg{color:#50575e;background:rgba(0,0,0,0)}.zip-ai-sidebar__chat-bubble--interaction button:disabled{cursor:progress}.zip-ai-sidebar__chat-bubble--interaction button:disabled svg{color:#e6e7e9 !important;background:rgba(0,0,0,0)}.zip-ai-sidebar__chat-bubble--message{white-space:pre-wrap;overflow-wrap:anywhere;padding:0;margin:0;font-size:.875rem;line-height:1.25rem;font-weight:400;color:#50575e;background:rgba(0,0,0,0)}.zip-ai-sidebar__chat-bubble--code-block{white-space:pre-wrap;padding:0;margin:0;font-size:.875rem;line-height:1.25rem;font-weight:400}.zip-ai-sidebar__chat-bubble--code-block-title{display:flex;align-items:center;justify-content:space-between;margin:0;padding:8px 12px;border-radius:6px 6px 0 0;font-size:.875rem;line-height:1.25rem;font-weight:600;color:#fff;background:#1f2937}.zip-ai-sidebar__chat-bubble--code-block-actions{flex:1;display:flex;gap:8px;align-items:center;justify-content:flex-end}.zip-ai-sidebar__chat-bubble--code-block-button{width:24px;aspect-ratio:1/1;padding:2px;border:0;cursor:pointer;color:#fff;background:rgba(0,0,0,0)}.zip-ai-sidebar__chat-bubble--code-block-button svg{width:20px;aspect-ratio:1/1;transition:filter 150ms 0s ease-in-out;color:inherit;background:rgba(0,0,0,0)}.zip-ai-sidebar__chat-bubble--code-block-button:hover,.zip-ai-sidebar__chat-bubble--code-block-button:focus-visible{outline:0;box-shadow:none;color:#fff;background:rgba(0,0,0,0)}.zip-ai-sidebar__chat-bubble--code-block-button:hover svg,.zip-ai-sidebar__chat-bubble--code-block-button:focus-visible svg{filter:drop-shadow(0 0 1px #fff)}.zip-ai-sidebar__chat-bubble--code-block-button:disabled{cursor:progress}.zip-ai-sidebar__chat-bubble--code-block-button:disabled svg{color:#e6e7e9 !important;background:rgba(0,0,0,0)}.zip-ai-sidebar__chat-bubble--code-block-content{margin:0;padding:12px;border-radius:0 0 6px 6px;overflow-x:auto;color:#fff;background:#374151}.zip-ai-sidebar__chat-bubble--code-block-content code{font-family:"Courier Prime","Courier New",Courier,monospace;padding:0;margin:0;font-size:.875rem;line-height:1.25rem;font-weight:400;color:#fff;background:rgba(0,0,0,0)}.zip-ai-sidebar__chat-bubble--action{cursor:pointer;padding:8px 14px;border:1px solid #e6e7e9;border-radius:999px;font-size:.875rem;line-height:1.25rem;font-weight:400;color:#50575e;background:#f8fafc;transition:color 100ms 0s ease-in-out,background-color 100ms 0s ease-in-out,border-color 100ms 0s ease-in-out}.zip-ai-sidebar__chat-bubble--action:hover,.zip-ai-sidebar__chat-bubble--action:focus-visible{outline:0;box-shadow:none;color:#fff;background:#007cba}.zip-ai-sidebar__chat-bubble--pagination{display:flex;justify-content:center;align-items:center;gap:8px}.zip-ai-sidebar__chat-bubble--pagination button{cursor:pointer;width:1.6em;aspect-ratio:1/1;padding:4px;border:0;color:#aaa;background:rgba(0,0,0,0)}.zip-ai-sidebar__chat-bubble--pagination button svg{width:16px;aspect-ratio:1/1;color:inherit;background:rgba(0,0,0,0);transition:color 150ms 0s ease-in-out}.zip-ai-sidebar__chat-bubble--pagination button:hover,.zip-ai-sidebar__chat-bubble--pagination button:focus-visible{outline:0;box-shadow:none}.zip-ai-sidebar__chat-bubble--pagination button:hover svg,.zip-ai-sidebar__chat-bubble--pagination button:focus-visible svg{color:#50575e;background:rgba(0,0,0,0)}.zip-ai-sidebar__chat-bubble--pagination button:disabled{cursor:not-allowed}.zip-ai-sidebar__chat-bubble--pagination button:disabled svg{color:#e6e7e9 !important;background:rgba(0,0,0,0)}.zip-ai-sidebar__chat-bubble--pagination span{padding:0;margin:0;font-size:.875rem;line-height:1.25rem;font-weight:400;color:#50575e;background:rgba(0,0,0,0)}.zip-ai-sidebar__chat-bubble--has-icon{flex-direction:row}.zip-ai-sidebar__chat-bubble--icon-content{flex:1;display:flex;flex-direction:column;gap:12px}.zip-ai-sidebar__chat-bubble--type-error{color:#fecaca;background:#fffbfa}.zip-ai-sidebar__chat-bubble--type-error .zip-ai-sidebar__chat-bubble--message{color:#b42318}.zip-ai-sidebar__chat-bubble--type-error .zip-ai-sidebar__chat-bubble--action{color:#d92d20;border:0;background:rgba(0,0,0,0);padding:0;font-size:.875rem;line-height:1.25rem;font-weight:600}.zip-ai-sidebar__chat-bubble--type-error .zip-ai-sidebar__chat-bubble--action:hover,.zip-ai-sidebar__chat-bubble--type-error .zip-ai-sidebar__chat-bubble--action:focus-visible{outline:0;box-shadow:none;color:#b42318;background:rgba(0,0,0,0)}.zip-ai-sidebar__chat-bubble--type-error .zip-ai-sidebar__chat-bubble--icon-wrapper path{stroke:#d92d20}.zip-ai-sidebar__chat-editor{display:flex;flex-direction:column;gap:8px}.zip-ai-sidebar__chat-editor--input{padding:4px 6px;border:1px solid #e6e7e9;border-radius:4px;box-shadow:0 0 rgba(0,0,0,0);font-size:.875rem;line-height:1.25rem;font-weight:400;color:#50575e;background:rgba(0,0,0,0);transition:border-color 150ms 0s ease-in-out,box-shadow 150ms 0s ease-in-out}.zip-ai-sidebar__chat-editor--input.zip-ai-sidebar__chat-editor--input-error{border-color:#e34848 !important}.zip-ai-sidebar__chat-editor--input.zip-ai-sidebar__chat-editor--input-error:active,.zip-ai-sidebar__chat-editor--input.zip-ai-sidebar__chat-editor--input-error:focus,.zip-ai-sidebar__chat-editor--input.zip-ai-sidebar__chat-editor--input-error:focus-visible{outline:0;box-shadow:0 0 0 1px #e34848 !important;border-color:#e34848 !important}.zip-ai-sidebar__chat-editor--input:active,.zip-ai-sidebar__chat-editor--input:focus,.zip-ai-sidebar__chat-editor--input:focus-visible{outline:0;box-shadow:0 0 0 1px #007cba !important;border-color:#007cba !important}.zip-ai-sidebar__chat-editor--actions{display:flex;justify-content:flex-start;align-items:center;gap:12px}.zip-ai-sidebar__chat-editor--actions button{cursor:pointer;padding:0;border:0;font-size:.875rem;line-height:1.25rem;font-weight:600;color:#50575e;background:rgba(0,0,0,0);transition:color 150ms 0s ease-in-out}.zip-ai-sidebar__chat-editor--actions button.zip-ai-sidebar__chat-editor--action-primary{color:#007cba;background:rgba(0,0,0,0)}.zip-ai-sidebar__chat-editor--actions button.zip-ai-sidebar__chat-editor--action-primary:disabled{cursor:not-allowed;color:#aaa !important;background:rgba(0,0,0,0)}.zip-ai-sidebar__chat-editor--info{text-align:left;font-size:.625rem;font-weight:400;line-height:.75rem;color:#ca8a04;background:rgba(0,0,0,0)}.zip-ai-sidebar__chat-loader{display:flex;gap:6px;padding:16px;animation:chatBubble 150ms 150ms 1 ease none}.zip-ai-sidebar__chat-loader--dot{position:relative;width:8px;height:8px;border-radius:999px;background-color:#aaa;opacity:.5;animation:jump 1500ms infinite ease-out both}.zip-ai-sidebar__chat-loader--dot.dot-2{animation-delay:150ms}.zip-ai-sidebar__chat-loader--dot.dot-3{animation-delay:300ms}.zip-ai-sidebar__input-prompt{width:100%;background-color:#fff;display:flex;flex-direction:column;border-top:1px solid #e2e8f0;padding:16px 20px;gap:8px;position:relative}.zip-ai-sidebar__input-prompt--text{position:relative;width:100%;padding:8px;resize:none;overflow-y:auto;border:1px solid #e6e7e9;text-align:left;color:#50575e;background:#fff;font-size:.875rem;line-height:1.25rem;font-weight:400;transition:color 100ms 0s ease-in-out;scrollbar-width:thin;scrollbar-color:#e6e7e9 #fff}.zip-ai-sidebar__input-prompt--text::-webkit-scrollbar{width:12px}.zip-ai-sidebar__input-prompt--text::-webkit-scrollbar-track{border-radius:6px;background-color:#fff}.zip-ai-sidebar__input-prompt--text::-webkit-scrollbar-thumb{border-radius:6px;background-color:#e6e7e9;border:4px solid #fff}.zip-ai-sidebar__input-prompt--text:focus-visible{outline:0;box-shadow:none;border-color:#e6e7e9}.zip-ai-sidebar__input-prompt--text:disabled{cursor:not-allowed;color:#aaa;background:rgba(0,0,0,0)}.zip-ai-sidebar__input-prompt--text::placeholder{color:#aaa;background:rgba(0,0,0,0)}.zip-ai-sidebar__input-prompt--disclaimer{text-align:left;font-size:.75rem;line-height:1rem;font-weight:400;color:#959aa3;background:rgba(0,0,0,0)}.zip-ai-sidebar__input-prompt--disclaimer a{text-decoration:none;border-bottom:1px solid #b0b9c6;color:#959aa3;background:rgba(0,0,0,0);transition:border-bottom 150ms 0s ease-in-out}.zip-ai-sidebar__input-prompt--disclaimer a:hover,.zip-ai-sidebar__input-prompt--disclaimer a:focus-visible{outline:0;border:0;box-shadow:none;border-bottom:1px solid #007cba;color:#959aa3;background:rgba(0,0,0,0)}.zip-ai-sidebar__input-prompt--footer{display:flex;justify-content:space-between;align-items:center;margin-top:8px;gap:12px}.zip-ai-sidebar__input-prompt--button{cursor:pointer;display:flex;align-items:center;justify-content:center;gap:8px;padding:7px 12px;border-radius:4px;border:1px solid #007cba;font-size:.875rem;line-height:1.25rem;font-weight:400;color:#fff;background:#007cba;transition:background-color 100ms 0s ease-in-out,opacity 100ms 0s ease-in-out}.zip-ai-sidebar__input-prompt--button.secondary-variant{color:#007cba;background:#fff;transition:color 100ms 0s ease-in-out,background-color 100ms 0s ease-in-out,opacity 100ms 0s ease-in-out}.zip-ai-sidebar__input-prompt--button.secondary-variant svg{color:inherit;background:rgba(0,0,0,0)}.zip-ai-sidebar__input-prompt--button.secondary-variant:hover,.zip-ai-sidebar__input-prompt--button.secondary-variant:focus-visible{color:#fff;background:#007cba}.zip-ai-sidebar__input-prompt--button.secondary-variant:disabled{opacity:.5;cursor:not-allowed;color:#007cba !important;background:#fff !important}.zip-ai-sidebar__input-prompt--button:hover,.zip-ai-sidebar__input-prompt--button:focus-visible{color:#fff;background:#0063a1}.zip-ai-sidebar__input-prompt--button:disabled{opacity:.5;cursor:not-allowed}.zip-ai-sidebar__input-prompt--button svg{color:inherit;background:rgba(0,0,0,0)}.zip-ai-sidebar__filters{display:flex;flex-direction:column;gap:14px;padding:14px;border-top:1px solid #e6e7e9;background:#ecf3f9}.zip-ai-sidebar__filters--section{display:flex;flex-wrap:wrap;align-items:flex-start;gap:8px}.zip-ai-sidebar__filters--section-title{margin:16px 0 4px;width:100%;text-align:left;font-size:.75rem;line-height:1rem;font-weight:400;color:#50575e;background:rgba(0,0,0,0)}.zip-ai-sidebar__filters--select-div{position:relative;width:calc(50% - 4px)}.zip-ai-sidebar__filters--select-div input:focus,.zip-ai-sidebar__filters--select-div input:focus-visible{outline:0;box-shadow:none;border:0}.zip-ai-sidebar__filters--label{cursor:pointer;border:1px solid #e2e8f0;border-radius:100px;padding:6px 10px;display:flex;align-items:center;gap:6px;font-size:.75rem;line-height:1rem;font-weight:400;color:#50575e;background:#fff;transition:color 100ms 0s ease-in-out,background-color 100ms 0s ease-in-out,border-color 100ms 0s ease-in-out}.zip-ai-sidebar__filters--label svg{color:inherit;background:rgba(0,0,0,0)}.zip-ai-sidebar__filters--label:disabled{opacity:.5;cursor:progress;border:1px solid #e2e8f0 !important;color:#50575e !important;background:#fff !important}.zip-ai-sidebar__filters--label:disabled svg{color:#64748b !important;background:rgba(0,0,0,0)}.zip-ai-sidebar__filters--label:hover,.zip-ai-sidebar__filters--label:focus-visible{outline:0;box-shadow:none;border-color:#007cba;color:#fff;background:#007cba}.zip-ai-sidebar__filters--label:hover svg,.zip-ai-sidebar__filters--label:focus-visible svg{color:inherit !important;background:rgba(0,0,0,0)}.zip-ai-errors>div{margin:12px;box-shadow:0 0 3px 1px #cbbbbb;border-radius:4px;padding:14px;text-align:center}.zip-ai-errors>div span{font-family:inherit;font-size:.875rem;line-height:1.25rem;font-weight:600;color:#e34848;background:rgba(0,0,0,0)}