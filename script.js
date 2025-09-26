    // JAVASCRIPT START HERE
    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        });
    });

    // Scroll to top function
    function scrollToTop() {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    }

    // Animate elements on scroll (Intersection Observer)
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animated');
            }
        });
    }, observerOptions);

    document.querySelectorAll('.animate-on-scroll').forEach(el => {
        observer.observe(el);
    });

    // Show/hide scroll indicator based on scroll position and subtle parallax effect
    window.addEventListener('scroll', () => {
        const scrollIndicator = document.querySelector('.scroll-indicator');
        if (window.scrollY > 300) {
            scrollIndicator.style.opacity = '1';
        } else {
            scrollIndicator.style.opacity = '0';
        }
        
        // Subtle parallax effect on hero section
        const scrolled = window.pageYOffset;
        const parallax = document.querySelector('.hero');
        const speed = scrolled * 0.5;
        parallax.style.transform = `translateY(${speed}px)`;
    });


    // ------------------------------------------------------------------
    // TAILWIND CHARTS IMPLEMENTATION
    // ------------------------------------------------------------------

    // Charts are now implemented using Tailwind CSS styling in HTML
    // No JavaScript charting library needed - charts are pure CSS/HTML
   