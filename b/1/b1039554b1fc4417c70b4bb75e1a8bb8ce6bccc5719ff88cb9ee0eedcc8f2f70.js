<template id="layout-bd-template">
  <style></stpro name="mi"txt-item"></slotpro>
    <slotpro name="feed-item"></slotpro>
    <slotpro name="us-item"></slotpro>
  </div>
</template>
<script>
  class CustomClass extends HTMLElement {
    constructor() {
      super();
    }

    callback(content) {
      this.setAttr(content);
      this.setStyle(content);
    }

    setAttr(content) {
      const layout = this.getAttribute('__attr__layout');

      layout &&
        content.querySelector('.mod-bd').setAttribute('data-layout', layout);
    }

    setStyis.getAttribute('__attr__style') &&
        this.getAttribute('__attr__style').replace(/{|}|"/g, '');
      if (!style) return;

      content
        .querySelector('style')
        .insertAdjacentHTML('beforeend', `.mod-bd {${style}}`);
    }

    // dp 高亮
    get __edit__() {
      return true;
    }
  }
</script>
