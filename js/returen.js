<div id="return"></div>

  const return_link = document.getElementById('return');
  if (window.history.length >= 2) {
    return_link.innerHTML = '<a href="" onclick="window.history.back(); return false;">前のページに戻る</a>';
  }