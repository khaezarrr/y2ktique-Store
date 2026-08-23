  var selectedPay = '';
  var currentDetail = '';
  var selectedChannel = '';
  var channelMode = 'order';

  function showCustomAlert(msg) {
    document.getElementById('customAlertMsg').textContent = msg;
    document.getElementById('customAlertOverlay').classList.add('active');
  }

  function closeCustomAlert() {
    document.getElementById('customAlertOverlay').classList.remove('active');
  }

  function buildChannelLink(channel, message) {
    var base = channel === 'whatsapp'
      ? 'https://wa.me/62895707680603'
      : 'https://t.me/Elmetanoia';
    return message ? base + '?text=' + message : base;
  }

  function getContactMessageLabel() {
    return selectedChannel === 'whatsapp' ? 'nomor whatsapp' : 'username';
  }

  function buildOrderMessage(nick, user, detail, payment) {
    return encodeURIComponent(
      '• nickname: ' + nick + '\n• ' + getContactMessageLabel() + ': ' + user +
      '\n• detail order: ' + detail + '\n• metode bayar: ' + payment
    );
  }

  function applyChannelUI(channel) {
    var isWhatsapp = channel === 'whatsapp';
    var contactLabel = document.getElementById('contactLabel');
    var inputUsername = document.getElementById('inputUsername');
    var skipButton = document.getElementById('skipChannelBtn');
    var confirmButton = document.getElementById('payConfirmBtn');

    if (contactLabel) {
      contactLabel.textContent = isWhatsapp ? 'Nomor WhatsApp 🌸' : 'Username Telegram 🌸';
    }
    if (inputUsername) {
      inputUsername.placeholder = isWhatsapp ? 'contoh: 08123456789' : 'contoh: @Elmetanoia';
    }
    if (skipButton) {
      skipButton.textContent = isWhatsapp ? '💬 Isi langsung di WhatsApp' : '💬 Isi langsung di Telegram';
    }
    if (confirmButton) {
      confirmButton.textContent = isWhatsapp ? '💬 Lanjut ke WhatsApp' : '💬 Lanjut ke Telegram';
    }
  }

  function openChannelPopup(mode, detail) {
    currentDetail = detail || '';
    selectedPay = '';
    channelMode = mode || 'order';

    var savedNick = localStorage.getItem('y2k_nickname') || '';
    var savedUser = localStorage.getItem('y2k_username') || '';
    var savedPay = localStorage.getItem('y2k_payment') || '';
    var savedChannel = localStorage.getItem('y2k_channel') || '';
    var changeBtn = document.getElementById('changeDataBtn');
    var hintEl = document.getElementById('autofillHint');
    var payDetail = document.getElementById('payDetail');
    var payTitle = document.getElementById('payTitle');
    var stepChannel = document.getElementById('stepChannel');
    var stepInfo = document.getElementById('stepInfo');
    var stepMethod = document.getElementById('stepMethod');
    var confirmBtn = document.getElementById('payConfirmBtn');
    var btns = document.querySelectorAll('.pay-btn');

    selectedChannel = savedChannel;
    if (payTitle) payTitle.textContent = channelMode === 'general' ? '💌 Hubungi Kami' : '🛍️ Detail Order';
    if (payDetail) {
      payDetail.textContent = currentDetail;
      payDetail.style.display = channelMode === 'general' ? 'none' : 'block';
    }
    if (stepChannel) stepChannel.style.display = 'none';
    if (stepInfo) stepInfo.style.display = 'none';
    if (stepMethod) stepMethod.style.display = 'none';
    if (changeBtn) changeBtn.style.display = 'none';
    if (confirmBtn) {
      confirmBtn.classList.remove('ready');
      confirmBtn.href = '#';
      confirmBtn.removeAttribute('target');
    }
    for (var i = 0; i < btns.length; i++) btns[i].classList.remove('selected');

    document.getElementById('payOverlay').classList.add('active');

    if (channelMode === 'general') {
      if (stepChannel) stepChannel.style.display = 'block';
      return;
    }

    document.getElementById('payDetail').textContent = currentDetail;
    document.getElementById('inputNickname').value = savedNick;
    document.getElementById('inputUsername').value = savedUser;
    if (hintEl) hintEl.style.display = (savedNick && savedUser) ? 'block' : 'none';

    if (!savedChannel) {
      if (stepChannel) stepChannel.style.display = 'block';
    } else {
      applyChannelUI(selectedChannel);
      continueOrderFlow(savedNick, savedUser, savedPay);
    }
  }

  function continueOrderFlow(savedNick, savedUser, savedPay) {
    var changeBtn = document.getElementById('changeDataBtn');
    var stepInfo = document.getElementById('stepInfo');
    var stepMethod = document.getElementById('stepMethod');

    if (savedNick && savedUser && savedPay) {
      var msg = buildOrderMessage(savedNick, savedUser, currentDetail, savedPay);
      window.open(buildChannelLink(selectedChannel, msg), '_blank');
      showOneClickToast(savedNick, savedPay);
      closePayPopup();
      return;
    }

    if (savedNick && savedUser && !savedPay) {
      stepInfo.style.display = 'none';
      stepMethod.style.display = 'block';
      if (changeBtn) changeBtn.style.display = 'block';
    } else {
      applyChannelUI(selectedChannel);
      stepInfo.style.display = 'block';
      stepMethod.style.display = 'none';
      if (changeBtn) changeBtn.style.display = 'none';
    }
  }

  function chooseChannel(channel) {
    selectedChannel = channel;

    if (channelMode === 'general') {
      window.open(buildChannelLink(channel), '_blank');
      closePayPopup();
      return;
    }

    localStorage.setItem('y2k_channel', channel);
    var savedNick = localStorage.getItem('y2k_nickname') || '';
    var savedUser = localStorage.getItem('y2k_username') || '';
    var savedPay = localStorage.getItem('y2k_payment') || '';
    var stepChannel = document.getElementById('stepChannel');

    applyChannelUI(channel);
    if (stepChannel) stepChannel.style.display = 'none';
    continueOrderFlow(savedNick, savedUser, savedPay);
  }

  function showOneClickToast(nick, pay) {
    var toast = document.getElementById('oneclickToast');
    var text = document.getElementById('oneclickToastText');
    text.textContent = '⚡ ' + nick + ' · ' + pay + ' — pesan terkirim!';
    toast.classList.add('show');
    clearTimeout(toast._timer);
    toast._timer = setTimeout(function() {
      toast.classList.remove('show');
    }, 4000);
  }

  function resetAndEdit() {
    localStorage.removeItem('y2k_nickname');
    localStorage.removeItem('y2k_username');
    localStorage.removeItem('y2k_payment');
    localStorage.removeItem('y2k_channel');

    document.getElementById('oneclickToast').classList.remove('show');
    document.getElementById('payOverlay').classList.remove('active');

    if (currentDetail) {
      setTimeout(function() { openChannelPopup('order', currentDetail); }, 80);
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

  function validateWhatsappNumber(num) {
    var cleaned = num.replace(/[\s\-()]/g, '');
    if (!/^(\+62|62|0)8[0-9]{7,12}$/.test(cleaned)) {
      return 'Nomor WhatsApp sepertinya belum valid nih~ 🌸';
    }
    return null;
  }

  function goToPayMethod() {
    var nick = document.getElementById('inputNickname').value.trim();
    var user = document.getElementById('inputUsername').value.trim();
    var isWhatsapp = selectedChannel === 'whatsapp';

    if (!nick) {
      showCustomAlert('Nickname kamu belum diisi nih! 🌸');
      return;
    }
    if (!user) {
      showCustomAlert((isWhatsapp ? 'Nomor WhatsApp' : 'Username Telegram') + ' belum diisi nih! 🌸');
      return;
    }
    var userError = isWhatsapp ? validateWhatsappNumber(user) : validateUsername(user);
    if (userError) {
      showCustomAlert(userError);
      return;
    }

    localStorage.setItem('y2k_nickname', nick);
    localStorage.setItem('y2k_username', user);
    localStorage.setItem('y2k_channel', selectedChannel);

    document.getElementById('stepInfo').style.display = 'none';
    document.getElementById('stepMethod').style.display = 'block';
  }

  function backToInfo() {
    applyChannelUI(selectedChannel);
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

    localStorage.setItem('y2k_payment', method);

    var msg = buildOrderMessage(nick, user, currentDetail, selectedPay);
    var confirmBtn = document.getElementById('payConfirmBtn');
    confirmBtn.href = buildChannelLink(selectedChannel, msg);
    confirmBtn.setAttribute('target', '_blank');
    confirmBtn.classList.add('ready');
  }

  function skipToChannel() {
    var msg = buildOrderMessage('', '', currentDetail, '');
    window.open(buildChannelLink(selectedChannel, msg), '_blank');
    closePayPopup();
  }

  function closePayPopup() {
    document.getElementById('payOverlay').classList.remove('active');
    selectedPay = '';
  }
