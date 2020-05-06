$(function() {
  // 「Open」ボタンをクリック時に、fadeInメソッドでHTML要素を表示する
  $('#open').on('click', function() {
    $('#overlay, #modalWindow').fadeIn();
  });
  $('#open02').on('click', function() {
    $('#overlay02, #modalWindow02').fadeIn();
  });
  $('#open03').on('click', function() {
    $('#overlay03, #modalWindow03').fadeIn();
  });
  
  // 「Close」ボタンをクリック時に、fadeOutメソッドでHTML要素を非表示にする
  $('#close').on('click', function() {
    $('#overlay, #modalWindow').fadeOut();
  });
  $('#close02').on('click', function() {
    $('#overlay02, #modalWindow02').fadeOut();
  });
  $('#close03').on('click', function() {
    $('#overlay03, #modalWindow03').fadeOut();
  });
  
  locateCenter();  // => モーダルウィンドウを中央配置するための初期値を設定する
  $(window).resize(locateCenter);  // => ウィンドウのリサイズに合わせて、モーダルウィンドウの配置を変える

// モーダルウィンドウを中央配置するための配置場所を計算する関数
  function locateCenter() {
    let w = $(window).width();
    let h = $(window).height();
    
    let cw = $('#modalWindow,#modalWindow02,#modalWindow03').outerWidth();
    let ch = $('#modalWindow,#modalWindow02,#modalWindow03').outerHeight();
   
    $('#modalWindow,#modalWindow02,#modalWindow03').css({
      'left': ((w - cw) / 2) + 'px',
      'top': ((h - ch) / 2) + 'px'
    });
  }
});

