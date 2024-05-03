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
    console.log('hello');
  }
});
/******/ })()
;
//# sourceMappingURL=main.js.map