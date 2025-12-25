// ===================================
// SMOOTH SCROLLING & NAVIGATION
// ===================================

// Navbar scroll effect
const navbar = document.getElementById('navbar');
const progressBar = document.getElementById('progress-bar');

window.addEventListener('scroll', () => {
    // Add scrolled class to navbar
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }

    // Update progress bar
    const windowHeight = window.innerHeight;
    const documentHeight = document.documentElement.scrollHeight - windowHeight;
    const scrolled = (window.scrollY / documentHeight);
    progressBar.style.transform = `scaleX(${scrolled})`;
});

// Smooth scroll for navigation links
const navLinks = document.querySelectorAll('.nav-link');

navLinks.forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        const targetId = link.getAttribute('href');
        const targetSection = document.querySelector(targetId);

        if (targetSection) {
            const navHeight = navbar.offsetHeight;
            const targetPosition = targetSection.offsetTop - navHeight;

            window.scrollTo({
                top: targetPosition,
                behavior: 'smooth'
            });

            // Close mobile menu if open
            navMenu.classList.remove('active');
        }
    });
});

// Mobile menu toggle
const hamburger = document.getElementById('hamburger');
const navMenu = document.getElementById('nav-menu');

hamburger.addEventListener('click', () => {
    const isExpanded = hamburger.getAttribute('aria-expanded') === 'true';
    hamburger.setAttribute('aria-expanded', !isExpanded);
    navMenu.classList.toggle('active');
});

// Close mobile menu when clicking outside
document.addEventListener('click', (e) => {
    if (!hamburger.contains(e.target) && !navMenu.contains(e.target)) {
        navMenu.classList.remove('active');
        hamburger.setAttribute('aria-expanded', 'false');
    }
});

// Close menu on nav link click
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        navMenu.classList.remove('active');
        hamburger.setAttribute('aria-expanded', 'false');
    });
});


// ===================================
// SCROLL TO TOP BUTTON
// ===================================

const scrollTopBtn = document.getElementById('scroll-top');

window.addEventListener('scroll', () => {
    if (window.scrollY > 500) {
        scrollTopBtn.classList.add('visible');
    } else {
        scrollTopBtn.classList.remove('visible');
    }
});

scrollTopBtn.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

// ===================================
// SCROLL ANIMATIONS (Intersection Observer)
// ===================================

const observerOptions = {
    threshold: 0.15,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry, index) => {
        if (entry.isIntersecting) {
            // Add stagger effect for multiple elements
            setTimeout(() => {
                entry.target.classList.add('animated');
            }, index * 100);

            // Stop observing after animation
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

// Observe all elements with data-animate attribute
const animatedElements = document.querySelectorAll('[data-animate]');
animatedElements.forEach(el => observer.observe(el));

// ===================================
// ANIMATED COUNTERS FOR STATISTICS
// ===================================

const statNumbers = document.querySelectorAll('.stat-number');

const animateCounter = (element) => {
    const target = parseInt(element.getAttribute('data-target'));
    const duration = 2000; // 2 seconds
    const startTime = performance.now();

    const updateCounter = (currentTime) => {
        const elapsed = currentTime - startTime;
        const progress = Math.min(elapsed / duration, 1);

        // Ease-out cubic function for smooth deceleration
        const easeProgress = 1 - Math.pow(1 - progress, 3);

        const current = Math.floor(easeProgress * target);
        element.textContent = current;

        if (progress < 1) {
            requestAnimationFrame(updateCounter);
        } else {
            element.textContent = target;
        }
    };

    requestAnimationFrame(updateCounter);
};

// Observe stats section for counter animation
const statsObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            statNumbers.forEach(stat => {
                animateCounter(stat);
            });
            statsObserver.unobserve(entry.target);
        }
    });
}, { threshold: 0.15 });

const achievementsSection = document.querySelector('.achievements');
if (achievementsSection) {
    statsObserver.observe(achievementsSection);
}

// ===================================
// PARALLAX EFFECT (Subtle)
// ===================================

window.addEventListener('scroll', () => {
    const scrolled = window.scrollY;
    const hero = document.querySelector('.hero');

    if (hero && scrolled < window.innerHeight) {
        hero.style.transform = `translateY(${scrolled * 0.5}px)`;
    }
});

// ===================================
// HERO BACKGROUND CAROUSEL
// ===================================

const heroBg = document.querySelector('.hero-bg');
if (heroBg) {
    const heroImages = [
        'https://images.unsplash.com/photo-1588072432836-e10032774350?w=1600&auto=format&fit=crop&q=80',
        'https://images.unsplash.com/photo-1523580846011-d3a5bc25702b?w=1600&auto=format&fit=crop&q=80',
        'https://images.unsplash.com/photo-1523580845712-de8231e40fff?w=1600&auto=format&fit=crop&q=80'
    ];
    let heroIndex = 0;

    const setHeroImage = (index) => {
        heroBg.style.opacity = 0;
        setTimeout(() => {
            heroBg.style.backgroundImage = `url(${heroImages[index]})`;
            heroBg.style.transform = 'scale(1.02)';
            requestAnimationFrame(() => {
                heroBg.style.opacity = 0.45;
                heroBg.style.transform = 'scale(1)';
            });
        }, 300);
    };

    setHeroImage(heroIndex);

    setInterval(() => {
        heroIndex = (heroIndex + 1) % heroImages.length;
        setHeroImage(heroIndex);
    }, 6000);
}

// ===================================
// CONTACT FORM HANDLING
// ===================================

const contactForm = document.getElementById('contact-form');
const formMessage = document.getElementById('form-message');
const submitBtn = document.getElementById('submit-btn');
const btnText = submitBtn.querySelector('.btn-text');
const btnLoader = submitBtn.querySelector('.btn-loader');

// Form validation
const validateForm = (formData) => {
    const errors = [];

    // Validate name
    if (!formData.get('name') || formData.get('name').trim().length < 2) {
        errors.push('Please enter a valid name');
    }

    // Validate email
    const email = formData.get('email');
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email || !emailRegex.test(email)) {
        errors.push('Please enter a valid email address');
    }

    // Validate grade
    if (!formData.get('grade')) {
        errors.push('Please select a grade');
    }

    // Validate message
    if (!formData.get('message') || formData.get('message').trim().length < 10) {
        errors.push('Please enter a message (minimum 10 characters)');
    }

    return errors;
};

// Show message
const showMessage = (message, type) => {
    formMessage.textContent = message;
    formMessage.className = `form-message ${type}`;
    formMessage.style.display = 'block';

    // Auto-hide after 5 seconds
    setTimeout(() => {
        formMessage.style.display = 'none';
    }, 5000);
};

// Form submission
contactForm.addEventListener('submit', async (e) => {
    e.preventDefault();

    const formData = new FormData(contactForm);

    // Validate form
    const errors = validateForm(formData);
    if (errors.length > 0) {
        showMessage(errors.join('. '), 'error');
        return;
    }

    // Show loading state
    btnText.style.display = 'none';
    btnLoader.style.display = 'inline-block';
    submitBtn.disabled = true;

    try {
        // Send email using EmailJS
        // NOTE: You must replace these placeholders with your actual EmailJS values:
        // 1. Service ID: Create a service (e.g., Gmail) in EmailJS
        // 2. Template ID: Create an email template in EmailJS
        // 3. Public Key: Set this in index.html (emailjs.init)
        const serviceID = 'service_b1k9x1s';
        const templateID = 'template_ove6v9i';

        // emailjs.sendForm automatically captures all form fields with 'name' attributes
        await emailjs.sendForm(serviceID, templateID, contactForm);

        console.log('Email sent successfully!');

        // Show success message
        showMessage('Thank you for your inquiry! We will contact you soon.', 'success');

        // Reset form
        contactForm.reset();

    } catch (error) {
        console.error('Form submission error:', error);
        showMessage('Sorry, there was an error submitting the form. Please try again or contact us directly.', 'error');
    } finally {
        // Reset button state
        btnText.style.display = 'inline-block';
        btnLoader.style.display = 'none';
        submitBtn.disabled = false;
    }
});

// ===================================
// GALLERY IMAGE PLACEHOLDER HANDLING
// ===================================

// Handle missing images gracefully
const galleryImages = document.querySelectorAll('.gallery-item img');

galleryImages.forEach(img => {
    img.addEventListener('error', function () {
        // Create a placeholder gradient background
        const parent = this.parentElement;
        parent.style.background = 'linear-gradient(135deg, #add8e6 0%, #1c75daa5 100%)';
        parent.style.display = 'flex';
        parent.style.alignItems = 'center';
        parent.style.justifyContent = 'center';

        // Add placeholder text
        if (!parent.querySelector('.placeholder-text')) {
            const placeholder = document.createElement('div');
            placeholder.className = 'placeholder-text';
            placeholder.style.color = 'white';
            placeholder.style.fontSize = '1.5rem';
            placeholder.style.fontWeight = 'bold';
            placeholder.textContent = this.alt || 'Image';
            parent.appendChild(placeholder);
        }

        // Hide the broken image
        this.style.display = 'none';
    });
});

// Handle logo image
const logoImg = document.getElementById('logo-img');
if (logoImg) {
    logoImg.addEventListener('error', function () {
        // Hide logo image if not found, keep text logo
        this.style.display = 'none';
    });
}

// ===================================
// DYNAMIC YEAR IN FOOTER
// ===================================

const currentYear = new Date().getFullYear();
const footerBottom = document.querySelector('.footer-bottom p');
if (footerBottom) {
    footerBottom.innerHTML = `&copy; ${currentYear} Excellence Tuition Center. All rights reserved.`;
}

// ===================================
// ADDITIONAL ENHANCEMENTS
// ===================================

// Add active state to nav links based on scroll position
window.addEventListener('scroll', () => {
    const sections = document.querySelectorAll('section[id]');
    const scrollY = window.scrollY;

    sections.forEach(section => {
        const sectionTop = section.offsetTop - navbar.offsetHeight - 100;
        const sectionHeight = section.offsetHeight;
        const sectionId = section.getAttribute('id');

        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
            navLinks.forEach(link => {
                link.classList.remove('active');
                if (link.getAttribute('href') === `#${sectionId}`) {
                    link.classList.add('active');
                }
            });
        }
    });
});

// Prevent default form submission on Enter key in input fields (except textarea)
contactForm.querySelectorAll('input, select').forEach(field => {
    field.addEventListener('keydown', (e) => {
        if (e.key === 'Enter') {
            e.preventDefault();
        }
    });
});

// Add smooth focus transitions
const formFields = contactForm.querySelectorAll('input, select, textarea');
formFields.forEach(field => {
    field.addEventListener('focus', function () {
        this.parentElement.style.transform = 'translateY(-2px)';
    });

    field.addEventListener('blur', function () {
        this.parentElement.style.transform = 'translateY(0)';
    });
});

console.log('🎓 Excellence Tuition Center Website Loaded Successfully!');
console.log('📧 Note: Email service integration pending. Form data will be logged to console.');
