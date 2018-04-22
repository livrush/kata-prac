$(document).ready(function() {
  console.log('ready');
  const name = gimei.name();
  const nameKatakana = name.katakana();
  const colors = pafiumeColors.scheme(2);
  const colorDark = colors[0].hues[3];
  const colorLight = colors[0].hues[1];
  $('.practice').toggle();
  $('body')
    .css({
      background: colorLight,
      color: colorLight,
    });
  $('.spinner')
    .css({
      color: colorDark,
    });
  $('#practice-text')
    .text(nameKatakana);


  kuroshiro.init((err) => {
    const splitName = nameKatakana.split('');
    var romajiSyllables = splitName.map(kana => {
      return kuroshiro.convert(kana, { to: 'romaji' });
    });
    // console.log(romajiSyllables.join(' '));
    $('.spinner').toggle();
    $('.practice').toggle();
    $('.background-color')
      .css('background-color', colorDark)
      .addClass('slide-open');
    createTextInput(colorDark);
  })
});

function createTextInput(color) {
  const $practiceInput = $('<input>')
    .css('color', color)
    .attr('placeholder', 'Practice Here')
    .appendTo('.practice')
    .focus();
  console.log($practiceInput);
}