// import $, { Callbacks } from 'jquery';

function fixHeight() {
  const vh = window.innerHeight;
  document.documentElement.style.setProperty('--vh', `${vh}px`);
}

$(document).ready(() => {
  fixHeight();

  window.addEventListener('resize', () => {
    fixHeight();
  });

  $.fn.modalOpen = function () {
    $('.js-modal').modalCloseAll();
    $('body').addClass('is-hidden');
    $(this).fadeIn(1);
    $(this).addClass('is-open');
  };

  $.fn.modalClose = function () {
    $(this).fadeOut(1);
    $(this).removeClass('is-open');
    $('body').removeClass('is-hidden');
    return this;
  };

  $.fn.modalCloseAll = function () {
    $('.js-modal').modalClose();
    return this;
  };

  $(document).on('click', '.js-close-modal', () => {
    $('.js-modal').modalCloseAll();
  });

  $(document).on('click', '.js-modal-link', (e) => {
    const target = $(e.currentTarget).attr('data-target');
    const $modal = $(`.js-modal[data-modal="${target}"]`);

    if ($modal.length) {
      $modal.modalOpen();
    }
  });
  // mobile menu
  $(document).on('click', '.header-mobile', () => {
    $('.menu-overlay').addClass('show');
    $('html').addClass('is-hidden');
  });
  $(document).on('click', '.menu-close', () => {
    $('.menu-overlay').removeClass('show');
    $('html').removeClass('is-hidden');
  });
  $(document).on('click', '.menu-list-item, .menu-btn', () => {
    $('.menu-overlay').removeClass('show');
    $('html').removeClass('is-hidden');
  });

  if ($('.side').length > 0) {
    $(document).on('click', '.side-heading-name', () => {
      $('.side-overlay').removeClass('hidden');
      $('html').addClass('is-hidden');
    });

    $(document).on('click', '.side-heading-arr', () => {
      $('.side-overlay').addClass('hidden');
      $('html').removeClass('is-hidden');
    });
  }

  // ============== form add file
  if (document.querySelector('.student-form')) {
    const inputFile = document.getElementById('fileInput');
    const selectedFileName = document.getElementById('selectedFileName');
    const selectedFile = document.getElementById('selectedFile');
    const fileInputLabel = document.getElementById('fileInputLabel');
    if (inputFile) {
      inputFile.addEventListener('change', () => {
        fileInputLabel.style.display = 'none';

        selectedFileName.innerHTML = inputFile.files[0].name;
        selectedFile.classList.add('show');
      });

      $('#removeSelectedFile').on('click', () => {
        fileInputLabel.style.display = 'flex';
        selectedFile.classList.remove('show');
        inputFile.value = '';
      });
    }
  }
});
