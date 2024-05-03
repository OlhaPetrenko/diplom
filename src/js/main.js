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

    // hotfix for zoomer inside modal
    window.PinchZoomer.remove();
    $('.controlHolder').remove();
    window.PinchZoomer.init();
    return this;
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
});
