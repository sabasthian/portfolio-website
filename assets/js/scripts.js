document.addEventListener('DOMContentLoaded', function() {
  const ticker = document.querySelector('.ticker');
  const tickerPage = document.querySelector('.ticker-page');
  
  // Clone content for seamless looping
  ticker.innerHTML += tickerPage.outerHTML;
});


// Tab navigation
document.querySelectorAll('.nav-item').forEach(item => {
  item.addEventListener('click', () => {
    // Switch active tab
    document.querySelector('.nav-item.active').classList.remove('active');
    item.classList.add('active');
    
    // Show corresponding content
    const section = item.dataset.section;
    document.querySelectorAll('.resume-content').forEach(content => {
      content.style.display = 'none';
    });
    document.getElementById(`${section}-content`).style.display = 'block';
  });
});

// Add retro sound effects
const buttons = document.querySelectorAll('.pixel-button, .nav-item');
buttons.forEach(button => {
  button.addEventListener('mouseenter', () => {
    // Play 8-bit hover sound
  });
});