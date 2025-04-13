document.addEventListener('DOMContentLoaded', function() {
  const ticker = document.querySelector('.ticker');
  const tickerPage = document.querySelector('.ticker-page');
  
  // Clone content for seamless looping
  ticker.innerHTML += tickerPage.outerHTML;
});