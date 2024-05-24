(function($){
  function consoleDebug(str) {
    if (!location.hostname.startsWith('www')) {
      console.log('[' + new Date().toLocaleString({timezone: 'Asia/Tokyo'}) + '][DEBUG]' + str);
    }
  }
  var doneIds = []; // Ajaxが終わったパーツは完了フラグ
  var isDoneAll = false;
  var isDebugMsg = false;
  $(window).scroll(function() {
    if (isDoneAll) { return; }
    if (!isDebugMsg) {
      consoleDebug('****************************************');
      consoleDebug('URLがwwwではないのでconsoleにログを表示します');
      consoleDebug('****************************************');
      isDebugMsg = true;
    }
    $('.partialcontent').each(function(i, elem) {
      let id = $(elem).attr('id');
      if (doneIds.includes(id)) { return true; } //continue
      let position     = Math.floor($(elem).offset().top);
      let scroll       = $(window).scrollTop();
      let windowHeight = $(window).height();
      let distpc = $(elem).data('distpc');
      let distsp = $(elem).data('distsp');
      let dist = 0;
      if (window.inntrWidth >= 600) { //PC
        if (distpc) { dist = distpc; }
      } else { //SP
        if (distsp) { dist = distsp; }
      }
      //consoleDebug('position=' + position + ', scroll=' + scroll + ', windowHeight=' + windowHeight + ', scroll+windowHeight=' + (scroll+windowHeight));
      if ((scroll+windowHeight) < (position-dist)) { return; }
      let action = $(elem).data('action');
      let file   = $(elem).data('file')   ? $(elem).attr('data-file').replaceAll('/', '|') : '';
      let format = $(elem).data('format') ? $(elem).attr('data-format').replaceAll('/', '|') : '';
      let count  = $(elem).data('count')  ? $(elem).data('count')  : '';
      let offset = $(elem).data('offset') ? $(elem).data('offset') : '';
      let others = $(elem).data('others') ? $(elem).data('others') : '';
      let url    = '/y_ajax/partialcontent/' + action + '/' + file + '/' + format + '/' + count + '/' + offset + '/' + others + '/';
      consoleDebug('Ajax START ' + id + 'からdistを引いた高さ' + '(' + (position-dist) + '=(' + position + '-' + dist + '))に、スクロール後の画面最下部(' + (scroll+windowHeight) + ')が達したためAjax開始');
      consoleDebug('url=' + url);
      $(elem).addClass('home-ajax-wrapper'); // デザイン用クラス付与
      if (!doneIds.includes(id)) { doneIds.push(id); } // Ajaxが終わったパーツは完了フラグ
      isDoneAll = (doneIds.length >= $('.partialcontent').length); // Ajaxが全部終わったら全完了フラグ
      consoleDebug('isDoneAll=' + isDoneAll + ', doneIds=' + doneIds);
      // contextをdoneのthisに渡す
      $.ajax({
        url: url, type: 'GET', dataType: 'html', data: {}, context: {'id': id}
      }).done((data) => {
        consoleDebug('Ajax DONE this(context).id=' + this.id);
        //consoleDebug('Ajax data=' + data);
        $('#' + this.id).html(data);
        consoleDebug('****************************************');
        if (isDoneAll) {
          consoleDebug('非同期処理をすべて完了したのでここまでで処理停止');
          consoleDebug('****************************************');
        }
      }).fail((jqXHR, textStatus, errorThrown) => {
        consoleDebug('Ajax FAIL');
        consoleDebug('jqXHR      =' + jqXHR.status);
        consoleDebug('textStatus =' + textStatus);
        consoleDebug('errorThrown=' + errorThrown.message);
        consoleDebug('****************************************');
      });
    });
  });
})(jQuery);
