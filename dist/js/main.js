/******/ (() => { // webpackBootstrap
var __webpack_exports__ = {};
/*!************************!*\
  !*** ./src/js/main.js ***!
  \************************/
// import $, { Callbacks } from 'jquery';

function fixHeight() {
  var vh = window.innerHeight;
  document.documentElement.style.setProperty('--vh', "".concat(vh, "px"));
}
$(document).ready(function () {
  fixHeight();
  window.addEventListener('resize', function () {
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
  $(document).on('click', '.js-close-modal', function () {
    $('.js-modal').modalCloseAll();
  });
  $(document).on('click', '.js-modal-link', function (e) {
    var target = $(e.currentTarget).attr('data-target');
    var $modal = $(".js-modal[data-modal=\"".concat(target, "\"]"));
    if ($modal.length) {
      $modal.modalOpen();
    }
  });
  // mobile menu
  $(document).on('click', '.header-mobile', function () {
    $('.menu-overlay').addClass('show');
    $('html').addClass('is-hidden');
  });
  $(document).on('click', '.menu-close', function () {
    $('.menu-overlay').removeClass('show');
    $('html').removeClass('is-hidden');
  });
  $(document).on('click', '.menu-list-item, .menu-btn', function () {
    $('.menu-overlay').removeClass('show');
    $('html').removeClass('is-hidden');
  });
  if ($('.side').length > 0) {
    $(document).on('click', '.side-heading-name', function () {
      $('.side-overlay').removeClass('hidden');
      $('html').addClass('is-hidden');
    });
    $(document).on('click', '.side-heading-arr', function () {
      $('.side-overlay').addClass('hidden');
      $('html').removeClass('is-hidden');
    });

    // if ($('.side-overlay ').hasClass('hidden')) {
    //   $('.side-list-link span').css('display', 'none');
    // }
  }

  // ============== form add file
  if (document.querySelector('.student-form')) {
    var inputFile = document.getElementById('fileInput');
    var selectedFileName = document.getElementById('selectedFileName');
    var selectedFile = document.getElementById('selectedFile');
    var fileInputLabel = document.getElementById('fileInputLabel');
    if (inputFile) {
      inputFile.addEventListener('change', function () {
        fileInputLabel.style.display = 'none';
        selectedFileName.innerHTML = inputFile.files[0].name;
        selectedFile.classList.add('show');
      });
      $('#removeSelectedFile').on('click', function () {
        fileInputLabel.style.display = 'flex';
        selectedFile.classList.remove('show');
        inputFile.value = '';
      });
    }
  }

  //
  if (document.querySelector('.student-form')) {
    $('#father, #mother, #guardian').on('input', function () {
      var newValue = $(this).val();
      $(this).attr('value', newValue);
    });
  }
  $('.student-form-field').on('click', '.student-form-search-result-item', function () {
    var currentField = $(this).closest('.student-form-field');
    currentField.find('.student-form-search-result-item').removeClass('is-selected');
    $(this).addClass('is-selected');
    currentField.find('.student-form-input').val($(this).text().trim());
    currentField.find('.student-form-input').attr('value', $(this).text().trim());
  });

  //  видалення елемента при кликові на img
  $('.student-form-selected-option img').click(function () {
    $(this).parent().remove();
  });
});
/******/ })()
;
//# sourceMappingURL=main.js.map