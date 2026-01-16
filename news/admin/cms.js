// Фикс для Decap CMS на GitHub Pages
window.addEventListener('load', function() {
  // Решаем проблему с хэш-роутингом
  if (window.location.hash && window.location.hash.includes('access_token')) {
    window.location.href = window.location.href.replace('#', '?#');
  }
  
  // Инициализируем Decap CMS вручную
  if (typeof Decap !== 'undefined') {
    Decap.init();
  }
});