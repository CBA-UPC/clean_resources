<template id="layout-block-template">
  <style>px;
 "hd">pro name="bd"></slotpro>
    <slotpro name="bd2"></slotpro>
    <slotpro name="bd3"></slotpro>
  </div>
</template>
<script>
  class CustomClass extends HTMLElement {
    constructor() {
      super();
    }

    callback(content) {
      this.setStyle(content);
    }

    setAttr(content) {}

    setStyle(contentibute('__attr__style') &&
        this.getAttribute('__attr__style').replace(/{|}|"/g, '');
      if (!style) return;

      content
        .querySelector('style')
        .insertAdjacentHTML('beforeend', `.block {${style}}`);
    }

    // dp 高亮
    get __edit__() {
      return true;
    }
  }
</script>
