  var selectedPay = '';
  var currentDetail = '';

  function showCustomAlert(msg) {
    document.getElementById('customAlertMsg').textContent = msg;
    document.getElementById('customAlertOverlay').classList.add('active');
  }

  function closeCustomAlert() {
    document.getElementById('customAlertOverlay').classList.remove('active');
  }

  function openPayPopup(detail) {
    currentDetail = detail;
    selectedPay = '';

    var savedNick = localStorage.getItem('y2k_nickname') || '';
    var savedUser = localStorage.getItem('y2k_username') || '';
    var savedPay  = localStorage.getItem('y2k_payment')  || '';

    // ⚡ ONE-CLICK: semua data tersimpan → langsung buka Telegram
    if (savedNick && savedUser && savedPay) {
      var msg = encodeURIComponent(
        '• nickname: ' + savedNick + '\n• username: ' + savedUser +
        '\n• detail order: ' + detail + '\n• metode bayar: ' + savedPay
      );
      window.open('https://t.me/Elmetanoia?text=' + msg, '_blank');
      showOneClickToast(savedNick, savedPay);
      return;
    }

    // Setup popup
    document.getElementById('payDetail').textContent = detail;
    document.getElementById('inputNickname').value = savedNick;
    document.getElementById('inputUsername').value = savedUser;
    document.getElementById('payConfirmBtn').classList.remove('ready');
    document.getElementById('payConfirmBtn').href = '#';
    var btns = document.querySelectorAll('.pay-btn');
    for (var i = 0; i < btns.length; i++) btns[i].classList.remove('selected');

    // Kalau nick+user sudah tersimpan tapi belum ada payment → skip ke step 2
    var changeBtn = document.getElementById('changeDataBtn');
    if (savedNick && savedUser && !savedPay) {
      document.getElementById('stepInfo').style.display = 'none';
      document.getElementById('stepMethod').style.display = 'block';
      if (changeBtn) changeBtn.style.display = 'block';
    } else {
      document.getElementById('stepInfo').style.display = 'block';
      document.getElementById('stepMethod').style.display = 'none';
      if (changeBtn) changeBtn.style.display = 'none';
    }

    document.getElementById('payOverlay').classList.add('active');

    // Hint autofill
    var hintEl = document.getElementById('autofillHint');
    hintEl.style.display = (savedNick && savedUser) ? 'block' : 'none';
  }

  function showOneClickToast(nick, pay) {
    var toast = document.getElementById('oneclickToast');
    var text  = document.getElementById('oneclickToastText');
    text.textContent = '⚡ ' + nick + ' · ' + pay + ' — pesan terkirim!';
    toast.classList.add('show');
    clearTimeout(toast._timer);
    toast._timer = setTimeout(function() {
      toast.classList.remove('show');
    }, 4000);
  }

  function resetAndEdit() {
    // Hapus semua data tersimpan & buka popup fresh
    localStorage.removeItem('y2k_nickname');
    localStorage.removeItem('y2k_username');
    localStorage.removeItem('y2k_payment');

    // Tutup toast kalau ada
    document.getElementById('oneclickToast').classList.remove('show');
    // Tutup popup kalau terbuka
    document.getElementById('payOverlay').classList.remove('active');

    // Buka ulang popup dari awal
    if (currentDetail) {
      setTimeout(function() { openPayPopup(currentDetail); }, 80);
    }
  }

  function validateUsername(user) {
    if (!user.startsWith('@')) return 'Username harus diawali dengan @ ya! 🌸';
    if (/\s/.test(user)) return 'Username tidak boleh mengandung spasi! 🌸';
    if (user.length < 4) return 'Username terlalu pendek nih~ minimal 4 karakter 🌸';
    if (user.length > 33) return 'Username terlalu panjang, maksimal 32 karakter 🌸';
    if (!/^@[a-zA-Z0-9_]+$/.test(user)) return 'Username hanya boleh huruf, angka, dan underscore _ ya! 🌸';
    return null;
  }

  function goToPayMethod() {
    var nick = document.getElementById('inputNickname').value.trim();
    var user = document.getElementById('inputUsername').value.trim();
    if (!nick) {
      showCustomAlert('Nickname kamu belum diisi nih! 🌸');
      return;
    }
    if (!user) {
      showCustomAlert('Username Telegram belum diisi nih! 🌸');
      return;
    }
    var userError = validateUsername(user);
    if (userError) {
      showCustomAlert(userError);
      return;
    }
    // Save to localStorage
    localStorage.setItem('y2k_nickname', nick);
    localStorage.setItem('y2k_username', user);

    document.getElementById('stepInfo').style.display = 'none';
    document.getElementById('stepMethod').style.display = 'block';
  }

  function backToInfo() {
    document.getElementById('stepInfo').style.display = 'block';
    document.getElementById('stepMethod').style.display = 'none';
    var changeBtn = document.getElementById('changeDataBtn');
    if (changeBtn) changeBtn.style.display = 'none';
    selectedPay = '';
    var btns = document.querySelectorAll('.pay-btn');
    for (var i = 0; i < btns.length; i++) btns[i].classList.remove('selected');
    document.getElementById('payConfirmBtn').classList.remove('ready');
  }

  function selectPay(el, method) {
    selectedPay = method;
    var btns = document.querySelectorAll('.pay-btn');
    for (var i = 0; i < btns.length; i++) btns[i].classList.remove('selected');
    el.classList.add('selected');
    var nick = document.getElementById('inputNickname').value.trim();
    var user = document.getElementById('inputUsername').value.trim();

    // Simpan payment method ke localStorage untuk one-click next time
    localStorage.setItem('y2k_payment', method);

    var msg = encodeURIComponent(
      '• nickname: ' + nick + '\n• username: ' + user + '\n• detail order: ' + currentDetail + '\n• metode bayar: ' + selectedPay
    );
    var confirmBtn = document.getElementById('payConfirmBtn');
    confirmBtn.href = 'https://t.me/Elmetanoia?text=' + msg;
    confirmBtn.setAttribute('target', '_blank');
    confirmBtn.classList.add('ready');
  }

  function skipToTelegram() {
    var msg = encodeURIComponent(
      '• nickname: \n• username: \n• detail order: ' + currentDetail + '\n• metode bayar: '
    );
    window.open('https://t.me/Elmetanoia?text=' + msg, '_blank');
    closePayPopup();
  }

  function closePayPopup() {
    document.getElementById('payOverlay').classList.remove('active');
    selectedPay = '';
  }

