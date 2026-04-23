// Smooth scrolling for navigation
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({ behavior: 'smooth' });
        }
    });
});

// Navbar background change on scroll
window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 50) {
        navbar.style.background = 'white';
        navbar.style.boxShadow = '0 2px 20px rgba(0,0,0,0.1)';
    } else {
        navbar.style.background = 'rgba(255, 255, 255, 0.95)';
        navbar.style.boxShadow = 'none';
    }
});

// Contact form handling
document.getElementById('contactForm')?.addEventListener('submit', function(e) {
    e.preventDefault();
    alert('Thank you! We will contact you within 24 hours.');
    this.reset();
});

// Counter animation (for stats)
const counters = document.querySelectorAll('.hero-stats span');
const speed = 200;

const animateCounter = (counter) => {
    const updateCount = () => {
        const target = parseInt(counter.getAttribute('data-target') || counter.innerText);
        const count = parseInt(counter.innerText);
        const increment = target / speed;
        
        if (count < target) {
            counter.innerText = Math.ceil(count + increment);
            setTimeout(updateCount, 20);
        } else {
            counter.innerText = target;
        }
    };
    updateCount();
};

// Add data-target attributes to stats
const stats = document.querySelectorAll('.hero-stats span');
if (stats.length) {
    stats[0].setAttribute('data-target', stats[0].innerText);
    stats[1].setAttribute('data-target', stats[1].innerText);
    stats[2].innerText = '0';
    animateCounter(stats[2]);
}
