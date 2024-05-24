import{objDataset as o,debounced as t,requestTimeout as R,requestInterval as p,clearRequestInterval as u,debug,delegate as i}from"../base/croco.js";import{mediaQuery as L,LOGGERS as h,MODULE_ALREADY_INITIALIZED as l,noElement as g}from"../base/config.js";const m=document.querySelector(".js-game-wrapper");const $="pong";const X=40;const j=1.1;const v=h.OFFLINE;let B=false;class P{constructor(t){this.$wrapper=t;this.$court=this.$wrapper.querySelector(".js-court");this.$ball=this.$wrapper.querySelector(".js-ball");this.$pauseBtn=this.$wrapper.querySelector(".js-pause");this.$scores=[this.$wrapper.querySelector(".js-score-1"),this.$wrapper.querySelector(".js-score-2")];this.$paddles=[this.$wrapper.querySelector(".js-paddle-1"),this.$wrapper.querySelector(".js-paddle-2")];this.scores=[0,0];this.paddle1X=0;this.paddle2X=0;this.distance={x:0,y:-8};this.ball={x:0,y:0,nextX:0,width:0};this.isPaused=true;this.isLoosing=false;this.speed=j;this.bindEvents();o(this.$wrapper,$,this)}courtLimit(value){return Math.min(this.courtRect.width,Math.max(0,value))}erprame(){if(!this.isPaused&&!this.isLoosing){this.updateBall()}this.render()}render(){this.$ball.style.transform="translate("+this.ball.x+"px, "+this.ball.y+"px)";this.$paddles[0].style.transform="translate("+this.courtLimit(this.paddle1X)+"px, -50%)";this.$paddles[1].style.transform="translate("+this.courtLimit(this.paddle2X)+"px, 50%)";this.$scores[0].textContent=`${this.scores[0]}`.padStart(2,"0");this.$scores[1].textContent=`${this.scores[1]}`.padStart(2,"0")}loose(){this.isLoosing=true;R(()=>{this.ball.x=this.courtRect.width/2;this.ball.y=this.courtRect.height/2;if(this.distance.y>0){this.scores[0]++}else{this.scores[1]++}R(()=>{this.distance.x=0;this.distance.y=-this.distance.y;this.ball.nextX=this.getNextBallPosition(this.courtRect.height/2);this.speed=j;this.isLoosing=false},1e3)},500)}checkBounce(value){let result=value;if(value<0){result=this.checkBounce(Math.abs(result))}else if(value>this.courtRect.width){result=this.checkBounce(this.courtRect.width-(value-this.courtRect.width))}return result}getNextBallPosition(height){const t=this.ball.x+height*(-this.distance.x/this.distance.y);const i=Math.abs(Math.floor(t/this.courtRect.width))+1;const h=this.checkBounce(t);return h+this.random(-30*i,30*i)}updateBall(){const t=this.ball.width/2;const i=this.distance.y*this.speed;const h=this.distance.x*this.speed;this.ball.y+=i;this.ball.x=this.courtLimit(this.ball.x+h);if(this.ball.y>this.courtRect.height-t+i||this.ball.y<t+i){if(this.ball.y>this.courtRect.height+100+i||this.ball.y<-100+i){this.loose()}}else{const l=this.distance.y<0?this.paddle1X:this.paddle2X;const o=this.paddlesRect.width/2+this.ball.width;const p=l-(o+t);const u=l+(o-t);const offset=this.paddlesRect.height/2+t;const g=this.ball.y>this.courtRect.height-offset||this.ball.y<offset;const m=this.ball.x>=p&&this.ball.x<=u;if(g&&m){this.distance.x=(this.ball.x-l)/5;this.distance.y=-this.distance.y;this.speed+=L.tabletAndDesktop.matches?.02:.01;if(this.distance.y<0){const $=this.getNextBallPosition(this.courtRect.height+this.random(-8,8));R(500)}}}if(this.ball.x>this.courtRect.width-t||this.ball.x<t){this.distance.x=-this.distance.x}this.paddle1X=this.lerp(this.paddle1X,this.ball.nextX,L.tabletAndDesktop.matches?.05:.03)||0}updatePaddle(t){if(!this.isPaused){this.paddle2X=this.lerp(this.paddle2X,t-this.courtRect.left,.2)||0}}onPointerMove(e){e.preventDefault();if(!e.target.classList.contains("js-pause")){let t=e.clientX||e.changedTouches&&e.changedTouches[0].pageX;this.updatePaddle(t)}}nResize(){this.courtRect=this.$court.getBoundingClientRect();this.paddlesRect=this.$paddles[0].getBoundingClientRect();this.ballRect=this.$ball.getBoundingClientRect();let t=this.courtRect.width/2;this.ball.x=t;this.ball.y=this.courtRect.height/2;this.ball.nextX=t;this.ball.width=this.ballRect.width;this.paddle1X=t;this.paddle2X=t}bindEvents(){window.addEventListener("resize",t(200,this.onResize.bind(this)));this.$wrapper.classList.remove("is-hidden");R(()=>{this.onResize();p(this.frame.bind(this),1e3/X);this.$wrapper.classList.remove("opacity0");this.$wrapper.addEventListener("mousemove",this.onPointerMove.bind(this));this.$wrapper.addEventListener("touchmove",this.onPointerMove.bind(this))},200);if(this.$pauseBtn){this.$pauseBtn.addEventListener("click",this.togglePause.bind(this))}}}function S(e){if(!o(m,$)){const i=m.querySelector(".js-game-countdown-wrapper");const h=m.querySelector(".js-game-countdown");const l=new P(m);let t=3;l.$ball.classList.add("opacity0");R(()=>{h.textContent=t;h.classList.add("is-animate");let interval=p(()=>{t--;h.textContent=t;if(t===1){i.classList.add("opacity0")}if(t===0){h.textContent="";i.remove();l.togglePause();l.$ball.classList.add("opacity1");u(interval)}},1e3)},500)}}function q(){i(document.documentElement,".js-start-pong","click",S)}export function pongInit(t=true){if(B){debug("error",v,l);return}if(m){q()}else{debug("warn",v,"[pong]",g(".js-game-wrapper"))}B=true}