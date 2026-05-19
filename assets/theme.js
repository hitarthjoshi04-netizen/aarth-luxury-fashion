// Navbar scroll effect
const navbar = document.getElementById('navbar');
if (navbar) {
  window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }
  });
}

// Scroll reveal animation
const observerOptions = {
  threshold: 0.1,
  rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('scroll-reveal');
      observer.unobserve(entry.target);
    }
  });
}, observerOptions);

document.querySelectorAll('section').forEach(section => {
  observer.observe(section);
});

// Update bag counter
function updateBagCount() {
  const bagCount = document.getElementById('bagCount');
  if (bagCount && window.cart) {
    bagCount.textContent = window.cart.item_count;
  }
}

// Listen for cart updates
if (typeof Shopify !== 'undefined') {
  document.addEventListener('shopify:cart:updated', updateBagCount);
}

// Smooth scroll for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  });
});

// Cart functionality
function addToCart(formElement) {
  const formData = new FormData(formElement);
  fetch(window.Shopify.routes.root + 'cart/add.js', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      items: [{
        id: formData.get('id'),
        quantity: 1
      }]
    })
  })
  .then(response => response.json())
  .then(data => {
    updateBagCount();
  })
  .catch(error => console.error('Error:', error));
}