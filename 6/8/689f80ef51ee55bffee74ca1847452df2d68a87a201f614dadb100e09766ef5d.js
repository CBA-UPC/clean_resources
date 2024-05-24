// Get modal triggers.
const modalTriggers = document.querySelectorAll('.htr-modal-trigger');
// Get modal content windows.
const modalContent = document.querySelectorAll('.htr-modal-content');
// Get document body.
const docBody = document.body;

// Handling modal trigger.
const handleModalTrigger = 

const handleTriggerClick = (trigger) => {
  modalContent.forEach((contentNode) => {
    if (contentNode.dataset.modalId === trigger.dataset.modalId) {
      showModalWindow(contentNode);
      hideModalViaCloseBtn(contentNode);
      hideModalViaBg(contentNode);
      hideModalViaEscape(contentNode);
    }
  });
};

// Handle Closing. (Break these up into smaller chunks.)
const hideModalViaCloseBtn = (contentNode) => {
  // Getting the Close Button from the content node.
  const modalCloseButton = contentNode.querySelector(
    '.htr-modal-content-close-btn'
  );
  // Hide modal on close button click.
  modalCloseButton.addEventListener('click', () => {
    hideModalWindow(contentNode);
  });
};

const hideModalViaBg = (contentNode) => {
  // Getting modal content background.
  const modalContentBg = contentNode.querySelector(
    '.htr-modal-content-background'
  );
  // Hide Modal on Background Click.
  modalContentBg.addEventListener('click', ;
};

const hideModalViaEscape = (contentNode) => {
  // Hide modal on Escape key press.
  document.addEventListener('keydown', (event) => {
    const key = event.key;
    if (key === 'Escape') {
      hideModalWindow(contentNode);
    }
  });
};

const showModalWindow = (el) => {
  el.classList.remove('htr-modal-content-hide');
  el.classList.add('htr-modal-content-show');
  docBody.classList.add('htr-modal-prevent-scroll');
};

const hideModalWindow = (el) => {
  el.classList.remove('htr-modal-content-show');
  el.classList.add('htr-modal-content-hide');
  docBody.classList.remove('htr-modal-prevent-scroll');
};

// Looping over the triggers around the page. This could also be an object if we had more JS modules.
modalTriggers.forEach(;
