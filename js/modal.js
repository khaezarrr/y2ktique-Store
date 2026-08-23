  function buildContent(cat) {
    if (!cat.apps) return '';
    var html = '';
    for (var a = 0; a < cat.apps.length; a++) {
      var app = cat.apps[a];
      html += '<div class="app-section">';
      html += '<div class="app-section-title">♥︎ ' + app.name + '</div>';
      for (var s = 0; s < app.items.length; s++) {
        var sec = app.items[s];
        if (sec.sub) html += '<div class="app-sub-title">' + sec.sub + '</div>';
        for (var p = 0; p < sec.prices.length; p++) {
          var label = sec.prices[p][0];
          var val = sec.prices[p][1];
          var detail = app.name + (sec.sub ? ' ' + sec.sub : '') + ' ' + label;
          html += '<div class="price-item">';
          html += '<span class="price-label">• ' + label + '</span>';
          if (val) html += '<span class="price-val">idr. ' + val + '</span>';
          if (val) html += '<button class="price-order-btn" onclick="openChannelPopup(\'order\', \'' + detail.replace(/'/g, "\\'") + '\')">Order</button>';
          html += '</div>';
        }
      }
      html += '</div>';
    }
    return html;
  }
  function openModal(key) {
    var cat = categories[key];
    if (!cat) return;
    var iconEl = document.getElementById('modalIcon');
    if (cat.isSvg) {
      iconEl.innerHTML = telegramSvg;
    } else {
      iconEl.textContent = cat.icon;
    }
    document.getElementById('modalTitle').textContent = cat.title;
    document.getElementById('modalContent').innerHTML = buildContent(cat);
    document.getElementById('modalOverlay').classList.add('active');
    document.body.style.overflow = 'hidden';
    document.querySelector('.modal-box').scrollTop = 0;
  }

  function closeModal() {
    document.getElementById('modalOverlay').classList.remove('active');
    document.body.style.overflow = '';
  }

  function closeModalOutside(e) {
    if (e.target === document.getElementById('modalOverlay')) closeModal();
  }

  document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape') closeModal();
  });
