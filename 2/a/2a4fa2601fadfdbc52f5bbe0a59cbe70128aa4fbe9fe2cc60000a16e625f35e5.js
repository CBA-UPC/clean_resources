<template id="fragment-template">
  <div>
    </div>lemen }

    callback(content) {
      this.setStyle(content);
    }

    get __edit__() {
      return true;
    }

    setStyle(content) {
      let style = this.getAttribute('__attr__style');
      if (!style) return;

      content
        .querySelector('style')
        .insertAdjacentHTML('beforeend', `${style}`);
    }
  }
</script>
