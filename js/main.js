/* ===================================================================
   Kumral Oto Lastik Market - main.js
=================================================================== */
(function () {
  'use strict';
  var WA = '905330201987';      // WhatsApp numarası
  var TEL = '+905330201987';    // Telefon

  document.addEventListener('DOMContentLoaded', function () {

    /* ---------- Mobil menü ---------- */
    var burger = document.querySelector('.burger');
    var menu = document.querySelector('.menu');
    var overlay = document.querySelector('.nav-overlay');

    function closeMenu() {
      if (!menu) return;
      menu.classList.remove('open');
      if (burger) burger.classList.remove('open');
      if (overlay) overlay.classList.remove('show');
      document.body.style.overflow = '';
    }
    if (burger && menu) {
      burger.addEventListener('click', function () {
        var open = menu.classList.toggle('open');
        burger.classList.toggle('open', open);
        if (overlay) overlay.classList.toggle('show', open);
        document.body.style.overflow = open ? 'hidden' : '';
      });
    }
    if (overlay) overlay.addEventListener('click', closeMenu);

    /* Mobilde alt menü aç/kapa */
    document.querySelectorAll('.has-sub > a').forEach(function (a) {
      a.addEventListener('click', function (e) {
        if (window.innerWidth <= 860) {
          e.preventDefault();
          a.parentElement.classList.toggle('open');
        }
      });
    });
    document.querySelectorAll('.menu a').forEach(function (a) {
      a.addEventListener('click', function () {
        if (!a.parentElement.classList.contains('has-sub')) closeMenu();
      });
    });

    /* ---------- Aktif menü işaretleme ---------- */
    var path = location.pathname.split('/').pop() || 'index.html';
    document.querySelectorAll('.menu a[href]').forEach(function (a) {
      var href = a.getAttribute('href');
      if (href === path || (path === 'index.html' && href === 'index.html')) {
        a.classList.add('active');
        var p = a.closest('.has-sub');
        if (p) p.querySelector('a').classList.add('active');
      }
    });

    /* ---------- FAQ akordeon ---------- */
    document.querySelectorAll('.faq-q').forEach(function (btn) {
      btn.addEventListener('click', function () {
        var item = btn.parentElement;
        var ans = item.querySelector('.faq-a');
        var isOpen = item.classList.contains('open');
        document.querySelectorAll('.faq-item.open').forEach(function (o) {
          o.classList.remove('open');
          o.querySelector('.faq-a').style.maxHeight = null;
        });
        if (!isOpen) {
          item.classList.add('open');
          ans.style.maxHeight = ans.scrollHeight + 'px';
        }
      });
    });

    /* ---------- Bilgi/randevu formu -> WhatsApp ---------- */
    document.querySelectorAll('form[data-wa]').forEach(function (form) {
      form.addEventListener('submit', function (e) {
        e.preventDefault();
        var g = function (n) { var el = form.querySelector('[name="' + n + '"]'); return el ? el.value.trim() : ''; };
        var ad = g('ad'), tel = g('tel'), marka = g('marka'),
            ebat = g('ebat'), mesaj = g('mesaj');
        if (!ad || !tel) {
          alert('Lütfen ad ve telefon bilgisini giriniz.');
          return;
        }
        var t = '*Yeni Bilgi Talebi - Kumral Oto Lastik Market*%0A%0A';
        t += '👤 Ad Soyad: ' + ad + '%0A';
        t += '📞 Telefon: ' + tel + '%0A';
        if (marka) t += '🛞 Lastik Markası: ' + marka + '%0A';
        if (ebat) t += '📏 Ebat: ' + ebat + '%0A';
        if (mesaj) t += '📝 Not: ' + mesaj + '%0A';
        window.open('https://wa.me/' + WA + '?text=' + encodeURIComponent(decodeURIComponent(t)), '_blank');
        form.reset();
        var btn = form.querySelector('[type="submit"]');
        if (btn) { var o = btn.innerHTML; btn.innerHTML = '✓ Talebiniz iletiliyor...'; setTimeout(function () { btn.innerHTML = o; }, 4000); }
      });
    });

    /* ---------- Scroll reveal ---------- */
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (en) {
        if (en.isIntersecting) {
          en.target.classList.add('in');
          io.unobserve(en.target);
        }
      });
    }, { threshold: .15 });
    document.querySelectorAll('.reveal').forEach(function (el) { io.observe(el); });

    /* ---------- Yıl ---------- */
    var y = document.getElementById('yil');
    if (y) y.textContent = new Date().getFullYear();

    /* ---------- Çerez onayı (KVKK / Google Ads uyumluluğu) ---------- */
    var CONSENT_KEY = 'kolm_cerez_onay';
    var banner = document.querySelector('.cookie-banner');
    if (banner) {
      var saved = localStorage.getItem(CONSENT_KEY);
      if (!saved) {
        setTimeout(function () { banner.classList.add('show'); }, 600);
      }
      var accept = banner.querySelector('.cb-accept');
      var reject = banner.querySelector('.cb-reject');
      if (accept) accept.addEventListener('click', function () {
        localStorage.setItem(CONSENT_KEY, 'kabul');
        banner.classList.remove('show');
      });
      if (reject) reject.addEventListener('click', function () {
        localStorage.setItem(CONSENT_KEY, 'red');
        banner.classList.remove('show');
      });
    }
  });
})();
