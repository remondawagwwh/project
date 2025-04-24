
function changeBackground() {
    const colors = ['#f0f8ff', '#ffe4e1', '#f5f5dc', '#dcdcdc'];
    const randomColor = colors[Math.floor(Math.random() * colors.length)];
    document.body.style.backgroundColor = randomColor;
  }
  
  document.getElementById('contactForm').addEventListener('submit', function(e) {
    e.preventDefault();
    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const message = document.getElementById('message').value.trim();
  
    if (name && email && message) {
      document.getElementById('formStatus').textContent = "Thanks for reaching out!";
      this.reset();
    } else {
      document.getElementById('formStatus').textContent = "Please fill in all fields.";
    }
  });
  
  window.addEventListener('scroll', function() {
    const toTop = document.getElementById('toTop');
    toTop.style.display = window.scrollY > 200 ? 'block' : 'none';
  });
  
  function scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
  