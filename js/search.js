  function doSearch(query) {
    var resultsEl = document.getElementById('searchResults');
    var gridEl = document.getElementById('categoryGrid');
    query = query.trim().toLowerCase();

    if (!query) {
      resultsEl.classList.remove('active');
      resultsEl.innerHTML = '';
      gridEl.style.display = 'grid';
      return;
    }

    gridEl.style.display = 'none';
    var results = [];

    for (var key in categories) {
      var cat = categories[key];
      // match category name
      var catMatch = cat.title.toLowerCase().indexOf(query) !== -1;
      if (cat.apps) {
        for (var a = 0; a < cat.apps.length; a++) {
          var app = cat.apps[a];
          var appMatch = app.name.toLowerCase().indexOf(query) !== -1;
          for (var s = 0; s < app.items.length; s++) {
            var sec = app.items[s];
            for (var p = 0; p < sec.prices.length; p++) {
              var label = sec.prices[p][0];
              var val = sec.prices[p][1];
              if (!val) continue;
              var itemMatch = label.toLowerCase().indexOf(query) !== -1;
              if (catMatch || appMatch || itemMatch) {
                var detail = app.name + (sec.sub ? ' ' + sec.sub : '') + ' ' + label;
                results.push({
                  name: app.name + ' – ' + label,
                  cat: cat.title,
                  price: val,
                  detail: detail,
                  catKey: key
                });
              }
            }
          }
        }
      }
    }

    if (results.length === 0) {
      resultsEl.innerHTML = '<div class="search-no-result">😢 Produk tidak ditemukan<br><span style="font-size:0.85rem">Coba kata kunci lain</span></div>';
    } else {
      var html = '';
      for (var i = 0; i < results.length; i++) {
        var r = results[i];
        html += '<div class="search-result-item">';
        html += '<div class="search-result-left">';
        html += '<span class="search-result-name">' + r.name + '</span>';
        html += '<span class="search-result-cat">📂 ' + r.cat + '</span>';
        html += '</div>';
        html += '<span class="search-result-price">idr. ' + r.price + '</span>';
        html += '<button class="search-result-btn" onclick="openChannelPopup(\'order\', \'' + r.detail.replace(/'/g, "\\'") + '\')">Order</button>';
        html += '</div>';
      }
      resultsEl.innerHTML = html;
    }
    resultsEl.classList.add('active');
  }
