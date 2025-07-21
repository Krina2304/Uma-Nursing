document.addEventListener('DOMContentLoaded', () => {
  const menuBtn     = document.getElementById('menu-btn');
  const menuIcon    = menuBtn.querySelector('i');
  const mobileMenu  = document.getElementById('mobile-menu');

  menuBtn.addEventListener('click', () => {
    // 1. Toggle menu visibility
    mobileMenu.classList.toggle('hidden');

    // 2. Swap icon between hamburger and close
    const menuIsOpen = !mobileMenu.classList.contains('hidden');
    menuIcon.classList.toggle('fa-bars', !menuIsOpen);  // show bars when closed
    menuIcon.classList.toggle('fa-times', menuIsOpen);  // show × when open
  });

  /* (Optional) Close menu when a link is clicked on small screens */
  mobileMenu.querySelectorAll('a').forEach(link =>
    link.addEventListener('click', () => {
      if (window.innerWidth < 768) {
        mobileMenu.classList.add('hidden');
        menuIcon.classList.add('fa-bars');
        menuIcon.classList.remove('fa-times');
      }
    })
  );
});

        // Counter animation
        function animateCounter(elementId, target, duration = 1000) {
            const element = document.getElementById(elementId);
            const start = 0;
            const increment = target / (duration / 16);
            let current = start;
            
            const timer = setInterval(() => {
                current += increment;
                if (current >= target) {
                    clearInterval(timer);
                    current = target;
                }
                element.textContent = Math.floor(current);
            }, 16);
        }
        
        // Initialize counters when section comes into view
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    animateCounter('years-counter', 2);
                    animateCounter('students-counter', 250);
                    observer.unobserve(entry.target);
                }
            });
        }, { threshold: 0.5 });
        
        observer.observe(document.querySelector('#about'));
        
        // Back to top button
        window.addEventListener('scroll', function() {
            const backToTop = document.getElementById('back-to-top');
            if (window.pageYOffset > 300) {
                backToTop.classList.remove('opacity-0', 'invisible');
                backToTop.classList.add('opacity-100', 'visible');
            } else {
                backToTop.classList.remove('opacity-100', 'visible');
                backToTop.classList.add('opacity-0', 'invisible');
            }
        });
        
        // Smooth scrolling for all links
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function(e) {
                e.preventDefault();
                
                const targetId = this.getAttribute('href');
                if (targetId === '#') return;
                
                const targetElement = document.querySelector(targetId);
                if (targetElement) {
                    // Close mobile menu if open
                    document.getElementById('mobile-menu').classList.add('hidden');
                    
                    // Scroll to target
                    window.scrollTo({
                        top: targetElement.offsetTop - 80,
                        behavior: 'smooth'
                    });
                }
            });
        });
        
        // Form submission
        const contactForm = document.querySelector('form');
        if (contactForm) {
            contactForm.addEventListener('submit', function(e) {
                e.preventDefault();
                alert('Thank you for your message! Our team will contact you shortly.');
                this.reset();
            });
        }
