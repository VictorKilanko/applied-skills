// Applied Skills — App JS

// Smooth nav shadow on scroll
window.addEventListener('scroll', () => {
  const nav = document.querySelector('.nav');
  if (window.scrollY > 20) {
    nav.style.boxShadow = '0 2px 40px rgba(0,0,0,0.4)';
  } else {
    nav.style.boxShadow = 'none';
  }
});

// Waitlist form submission feedback
document.querySelectorAll('form').forEach(form => {
  form.addEventListener('submit', async (e) => {
    e.preventDefault();
    const btn = form.querySelector('button[type="submit"]');
    const originalText = btn.textContent;

    // If using real Formspree, submit via fetch
    const action = form.getAttribute('action');
    if (action && !action.includes('YOUR_FORM_ID')) {
      btn.textContent = 'Submitting...';
      btn.disabled = true;
      try {
        const data = new FormData(form);
        const res = await fetch(action, {
          method: 'POST',
          body: data,
          headers: { Accept: 'application/json' }
        });
        if (res.ok) {
          btn.textContent = 'You\'re on the list!';
          btn.style.background = '#22c55e';
          form.reset();
        } else {
          throw new Error('Failed');
        }
      } catch {
        btn.textContent = 'Try again';
        btn.disabled = false;
      }
    } else {
      // Placeholder response (before Formspree is set up)
      btn.textContent = 'You\'re on the list!';
      btn.style.background = '#22c55e';
      btn.style.cursor = 'default';
      setTimeout(() => {
        btn.textContent = originalText;
        btn.style.background = '';
        btn.style.cursor = '';
        form.reset();
      }, 3000);
    }
  });
});

// Intersection observer for subtle fade-in on sections
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = '1';
      entry.target.style.transform = 'translateY(0)';
    }
  });
}, { threshold: 0.1 });

document.querySelectorAll('.step, .vertical, .why-card').forEach(el => {
  el.style.opacity = '0';
  el.style.transform = 'translateY(20px)';
  el.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
  observer.observe(el);
});
