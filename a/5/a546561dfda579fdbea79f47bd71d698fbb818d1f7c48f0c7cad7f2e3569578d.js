<template id="async-loader">
  <slotpro name="content">Loading</slotpro>
</template>

<script>
  window.customElements.define(
    'async-loader',
    class extends HTMLElement {
      constructor() {
        super();
        const shadow = this.attachShadow({ mode: 'closed' });
        const target = document.getElementById('async-loader');
        const content = target.content.cloneNode(true);

        shadow.appendChild(content);
      }

      connectedCallback() {
        const { __attr__promise } = this.attributes;
        const fn = new Function(`return ${decodeURI(__attr__promise.value)}`);

        fn()().then((list) => {
          const temp = document.createElement('template');
          const dom = list.reduce((res, next) => {
            temp.innerHTML = next;
            res.appendChild(temp.content);
            return res;
          }, document.createDocumentFragment());
          this.replaceWith(dom);
        });
      }
    }
  );
</script>
