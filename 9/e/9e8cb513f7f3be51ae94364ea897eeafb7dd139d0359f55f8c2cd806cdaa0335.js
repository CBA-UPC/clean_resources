<template id="article-head-template">
  <style>
    .title-ad {
      display: flex;
      justify-content: space-between;
    }
    .title-ad-left {
      width: 700px; 
      display: inline-block;
    }
    .title-ad-right {
      width: 340px;
      display: inline-block; 
    }
    .head h1 {
      font-size: 40px;
      color: #262626;
      line-height: 60px;
      font-weight: 400;
      word-break: break-word;
    }
    .head h2 {
      font-weight: 400;
      font-size: 16px;
      color: #262626;
      word-break: break-word;
      line-height: 24px;
      display: none;
    }
    .head h3 {
      font-weight: 400;
      font-size: 14px;
      color: #262626;
      word-break: break-word;
      line-height: 21px;
      display: none;
    }
    .head .source,
    .head .author {
      font-size: 14px;
      color: #8c8c8c;
      margin-right: 10px;
    }
    .tool {
      margin: 30px 0;
    }
    @media screen and (max-width: 1170px) {
      .title-ad-right {
        display: none;
      }
    }    
  </style>
  <div class="title-ad">
    <!-- Ad Survey 广告位代码  标题上方 -->
    <div class="title-ad-left"><slotpro name="ad1"></slotpro></div>
    <div class="title-ad-right"><slotpro name="ad2"></slotpro></div>
  </div>
  
  <div class="head">
    <h2><slotpro name="exttopic"></slotpro></h2>
    <h1><slotpro name="title"></slotpro></h1>
    <h3><slotpro name="subtitle"></slotpro></h3>
    <div class="tool">
      <span class="source"><slotpro name="source"></slotpro></span>
      <span class="author"><slotpro name="author"></slotpro></span>
    </div>

    <div class="fix-txt" style="display: none">
      <slotpro name="data"></slotpro>
    </div>
  </div>
</template>
<script>
  class CustomClass extends HTMLElement {
    constructor() {
      super();
      this.data = [];
    }

    callback(content) {
      const title = content.querySelector('h1');
      const exttopic = content.querySelector('h2');
      const subtitle = content.querySelector('h3');
      
      // if(['4Dz4UTjjujm'].includes(document.querySelector(".article-aid").value)) {
      //   title.innerHTML = title.innerText.replace('思想高峰','思想高峰<br/>')
      // }
      const dataEle = content.querySelector('.fix-txt');
      this.data = JSON.parse(dataEle.textContent);
      this.data.forEach((item)=>{
        if(item.aid === document.querySelector(".article-aid").value){
          title.innerHTML = title.innerText.replace(item.fix,item.fix+'<br/>');
        }
      });

      if(exttopic.innerHTML!='' && exttopic.innerHTML!='undefined'){
        exttopic.style.marginBottom = '8px';
        exttopic.style.display = 'block';
      }else {
        exttopic.innerText = '';
      } 
      if(subtitle.innerHTML!='' && subtitle.innerHTML!='undefined'){
        subtitle.style.marginTop = '8px';
        subtitle.style.display = 'block';
      }else {
        subtitle.innerText = '';
      }
    }
  }
</script>
