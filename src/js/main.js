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

    // if ($('.side-overlay ').hasClass('hidden')) {
    //   $('.side-list-link span').css('display', 'none');
    // }
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

  //
  if (document.querySelector('.student-form')) {
    $('#father, #mother, #guardian').on('input', function () {
      const newValue = $(this).val();
      $(this).attr('value', newValue);
    });
  }

  //
  $('.student-form-field').on(
    'click',
    '.student-form-search-result-item',
    function () {
      const currentField = $(this).closest('.student-form-field');
      currentField
        .find('.student-form-search-result-item')
        .removeClass('is-selected');
      $(this).addClass('is-selected');

      const selectedText = $(this).text().trim();
      const selectedId = $(this).data('id');

      currentField.find('.student-form-input').val(selectedText);
      currentField.find('.student-form-input').attr('value', selectedId);

      currentField.find('.student-form-input').prop('disabled', true);

      const clearButton = $('<span class="clear-button">&#10006;</span>');
      currentField.find('.student-form-input').after(clearButton);

      clearButton.on('click', () => {
        currentField.find('.student-form-input').val('');
        currentField.find('.student-form-input').attr('value', '');
        currentField.find('.student-form-input').prop('disabled', false);
        clearButton.remove();
      });

      currentField.find('.student-form-search-result-list').empty();
      currentField.find('.student-form-search-result').removeClass('show');
    }
  );

  //  видалення елемента при кликові на img
  $('.student-form-selected-option img').click(function () {
    $(this).parent().remove();
  });
});
