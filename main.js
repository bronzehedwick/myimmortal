(function main() {
  'use strict';

  const dialog = document.getElementById('dialog');
  const openButton = document.getElementById('open-button');
  const closeButton = document.getElementById('close-button');
  openButton.addEventListener('click', () => {
    dialog.showModal();
  });
  closeButton.addEventListener('click', () => {
    dialog.close();
  });
})();
