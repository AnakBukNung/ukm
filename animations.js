// Page Load Animations Script
document.addEventListener('DOMContentLoaded', function() {
    // Mobile nav toggle
    const navToggle = document.querySelector('.nav-toggle');
    const navList = document.querySelector('nav ul');
    if (navToggle && navList) {
        navToggle.addEventListener('click', () => {
            const isOpen = navList.classList.toggle('nav-open');
            navToggle.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
        });

        navList.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', () => {
                navList.classList.remove('nav-open');
                navToggle.setAttribute('aria-expanded', 'false');
            });
        });
    }

    // Add animation classes to elements on page load
    
    // Animate hero section
    const hero = document.querySelector('.hero');
    if (hero) {
        hero.classList.add('animate-ready');
        const heroTitle = hero.querySelector('h1, h2');
        if (heroTitle) {
            heroTitle.classList.add('animate-ready');
        }
    }

    // Animate all sections with fadeInUp
    const sections = document.querySelectorAll('section:not(.hero)');
    sections.forEach((section, index) => {
        setTimeout(() => {
            section.classList.add('animate-fadeInUp');
        }, 100 + (index * 150)); // Stagger sections by 150ms
    });

    // Animate about-section (for about.html)
    const aboutSection = document.querySelector('.about-section');
    if (aboutSection) {
        const aboutRight = aboutSection.querySelector('.about-right');
        if (aboutRight) {
            setTimeout(() => {
                aboutRight.classList.add('animate-fadeInUp');
            }, 300);
        }
    }

    // Animate gallery boxes
    const galleryBoxes = document.querySelectorAll('.gallery-box');
    galleryBoxes.forEach(box => {
        setTimeout(() => {
            box.classList.add('animate-ready');
        }, 500);
    });

    // Animate card wrappers
    const cardWrappers = document.querySelectorAll('.card-wrapper');
    cardWrappers.forEach(wrapper => {
        setTimeout(() => {
            wrapper.classList.add('animate-ready');
        }, 500);
    });

    // Animate power logos
    const powerLogos = document.querySelectorAll('.power-logos');
    powerLogos.forEach(logo => {
        setTimeout(() => {
            logo.classList.add('animate-ready');
        }, 600);
    });

    // Animate footer
    const footer = document.querySelector('footer');
    if (footer) {
        // Use Intersection Observer for footer animation when it comes into view
        const footerObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('animate-ready');
                    footerObserver.unobserve(entry.target);
                }
            });
        }, { threshold: 0.1 });

        footerObserver.observe(footer);
    }

    // Animate content-box (for sanggar.html and similar)
    const contentBoxes = document.querySelectorAll('.content-box, .deskripsi-klub, .daftar-kesenian');
    contentBoxes.forEach((box, index) => {
        setTimeout(() => {
            box.classList.add('animate-fadeInUp');
        }, 200 + (index * 150));
    });

    // Animate hero content for pages with hero-content
    const heroContent = document.querySelector('.hero-content');
    if (heroContent) {
        setTimeout(() => {
            heroContent.classList.add('animate-fadeInUp');
        }, 300);
    }

    // Animate hero-right sections
    const heroRights = document.querySelectorAll('.hero-right');
    heroRights.forEach(heroRight => {
        setTimeout(() => {
            heroRight.classList.add('animate-fadeInUp');
        }, 400);
    });

    // Animate logo-kiri (left logos in hero sections)
    const logoKiri = document.querySelectorAll('.logo-kiri');
    logoKiri.forEach(logo => {
        setTimeout(() => {
            logo.classList.add('animate-slideInLeft');
        }, 200);
    });
});
