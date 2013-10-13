/* Клик */
(function (window, document, $, undefined) {
  var $body = $('body'),
      gradients = ['gradient-yellow', 'gradient-green', 'gradient-red'],
      gradientIndex = 0,
      attempts = 0;

  $('#do-something').on('click', function () {
    $body
        .removeClass(gradients.join(' '))
        .addClass(gradients[gradientIndex = gradientIndex < gradients.length - 1 ? gradientIndex + 1 : 0]);

    if (attempts++ > 4) {
      $(this).attr('disabled', true);

      $('#say-something').text('Продолжение дискотеки после перезагрузки страницы ;-)')
    }
  });
})(window, document, window.jQuery);