(function () {
  'use strict';

  // Apply a subtle focus-visible polyfill behavior class
  try {
    document.body.addEventListener('keydown', function (e) {
      if (e.key === 'Tab') {
        document.documentElement.classList.add('user-is-tabbing');
      }
    });

    document.body.addEventListener('mousedown', function () {
      document.documentElement.classList.remove('user-is-tabbing');
    });
  } catch (e) {
    // no-op
  }

  // Optional: simple click handlers for the two header buttons
  document.addEventListener('DOMContentLoaded', function () {
    var infoBtn = document.getElementById('btn-125-187');
    var searchBtn = document.getElementById('btn-125-189');

    if (infoBtn) {
      infoBtn.addEventListener('click', function () {
        console.log('Info button clicked');
      });
    }
    if (searchBtn) {
      searchBtn.addEventListener('click', function () {
        console.log('Search button clicked');
      });
    }
  });
})();
