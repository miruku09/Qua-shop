
 showNum = 6, // 最初に表示しておく件数
 addNum = 3,  // クリックごとに表示したい件数
 target = '.item-list li'
 btn = $('.btn-more');

   $(item-list + ':nth-child(n + ' + (showNum + 1) + ')').addClass('is-hidden');

   btn.on('click', function () {
     $(item-list + '.is-hidden').slice(0, addNum).removeClass('is-hidden').addClass('is-show'); // アニメーション用にis-showクラスを追加
  
     if ($(item-list + '.is-hidden').length == 0) {
       btn.fadeOut();
     }
 });
