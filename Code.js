document.addEventListener('DOMContentLoaded', function () {
    // Calculate scrollbar width and set CSS variable
    const scrollbarWidth = window.innerWidth - document.documentElement.clientWidth;
    document.documentElement.style.setProperty('--scrollbar-width', `${scrollbarWidth}px`);

    const cards = document.querySelectorAll('.card');
    const lightbox = document.getElementById('lightbox');
    const lightboxImg = document.getElementById('lightbox-img');
    const closeBtn = document.querySelector('.close-btn');
    const prevBtn = document.querySelector('.prev-btn');
    const nextBtn = document.querySelector('.next-btn');
    const navLinks = document.querySelectorAll('.nav-link');
    const hamburger = document.querySelector('.hamburger');
    const navMenu = document.querySelector('.nav-menu');

    // Added: Toggle nav menu on hamburger click
    hamburger.addEventListener('click', () => {
        navMenu.classList.toggle('active');
    });

    // Define image arrays for each category
    const imageCategories = {
        rings: ['Rings/ring 1.jpg', 'Rings/ring 2.jpg', 'Rings/ring 3.jpg', 'Rings/ring4.jpg', 'Rings/ring 5.jpg', 
                'Rings/ring 6.jpg', 'Rings/ring 7.jpg', 'Rings/ring 8.jpg', 'Rings/ring 9.jpg', 'Rings/ring 10.jpg', 
                'Rings/ring11.jpg', 'Rings/ring 12.jpg', 'Rings/ring13.jpg', 'Rings/ring 14.jpg'],

        shirts: ['Shirts/shirt1.jpg', 'Shirts/shirt2.jpg',],

        'cheque-boards': ['Cheque Boards/card1.jpg', 'Cheque Boards/card2.jpg', 'Cheque Boards/card3.jpg', 
                        'Cheque Boards/Medal 1.jpg', 'Cheque Boards/Medal 2.jpg', 'Cheque Boards/medal3.jpg',],

        reviews: ['Reviews/Review1.jpg', 'Reviews/Review 2.jpg', 'Reviews/Review 5.jpg', 'Reviews/review 7.jpg', 
                'Reviews/review 8.jpg', 'Reviews/review3.jpg', 'Reviews/review4.jpg', 'Reviews/review6.jpg',]
    };

    let currentCategory = 'rings';
    let currentImageIndex = 0;

    // Navigation
    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const sectionId = link.getAttribute('href').substring(1);
            const targetElement = document.getElementById(sectionId);
            if (targetElement) {
                targetElement.scrollIntoView({ behavior: 'smooth' });
                navMenu.classList.remove('active');
            }
        });
    });

    // Card click handler
    cards.forEach(card => {
        card.addEventListener('click', () => {
            currentCategory = card.getAttribute('data-category');
            currentImageIndex = 0;
            lightboxImg.src = imageCategories[currentCategory][currentImageIndex];
            lightbox.classList.add('active');
            document.body.style.overflow = 'hidden';
            navMenu.classList.remove('active');
        });
    });

    // Close lightbox
    closeBtn.addEventListener('click', () => {
        lightbox.classList.remove('active');
        document.body.style.overflow = 'auto';
    });

    // Previous image
    prevBtn.addEventListener('click', () => {
        currentImageIndex = (currentImageIndex - 1 + imageCategories[currentCategory].length) % imageCategories[currentCategory].length;
        lightboxImg.src = imageCategories[currentCategory][currentImageIndex];
    });

    // Next image
    nextBtn.addEventListener('click', () => {
        currentImageIndex = (currentImageIndex + 1) % imageCategories[currentCategory].length;
        lightboxImg.src = imageCategories[currentCategory][currentImageIndex];
    });

    // Click outside to close
    lightbox.addEventListener('click', (e) => {
        if (e.target === lightbox) {
            lightbox.classList.remove('active');
            document.body.style.overflow = 'auto';
        }
    });

    // Keyboard navigation
    document.addEventListener('keydown', (e) => {
        if (lightbox.classList.contains('active')) {
            if (e.key === 'Escape') {
                lightbox.classList.remove('active');
                document.body.style.overflow = 'auto';
            } else if (e.key === 'ArrowLeft') {
                currentImageIndex = (currentImageIndex - 1 + imageCategories[currentCategory].length) % imageCategories[currentCategory].length;
                lightboxImg.src = imageCategories[currentCategory][currentImageIndex];
            } else if (e.key === 'ArrowRight') {
                currentImageIndex = (currentImageIndex + 1) % imageCategories[currentCategory].length;
                lightboxImg.src = imageCategories[currentCategory][currentImageIndex];
            }
        }
    });
});