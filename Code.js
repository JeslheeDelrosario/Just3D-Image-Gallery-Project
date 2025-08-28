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

    // Toggle nav menu on hamburger click
    hamburger.addEventListener('click', () => {
        navMenu.classList.toggle('active');
    });

    // Modified: Replaced imageCategories object with a single array of image objects
    // Each object contains a category and path, making it easier to add new images
    const images = [
        { category: 'rings', path: 'Rings/ring 1.jpg' },
        { category: 'rings', path: 'Rings/ring 2.jpg' },
        { category: 'rings', path: 'Rings/ring 3.jpg' },
        { category: 'rings', path: 'Rings/ring4.jpg' },
        { category: 'rings', path: 'Rings/ring 5.jpg' },
        { category: 'rings', path: 'Rings/ring 6.jpg' },
        { category: 'rings', path: 'Rings/ring 7.jpg' },
        { category: 'rings', path: 'Rings/ring 8.jpg' },
        { category: 'rings', path: 'Rings/ring 9.jpg' },
        { category: 'rings', path: 'Rings/ring 10.jpg' },
        { category: 'rings', path: 'Rings/ring11.jpg' },
        { category: 'rings', path: 'Rings/ring12.jpg' },
        { category: 'rings', path: 'Rings/ring13.jpg' },
        { category: 'rings', path: 'Rings/ring 14.jpg' },
        { category: 'rings', path: 'Rings/ring15.jpg' },
        { category: 'rings', path: 'Rings/ring16.jpg' },
        { category: 'rings', path: 'Rings/ring17.jpg' },
        { category: 'rings', path: 'Rings/ring18.jpg' },
        { category: 'rings', path: 'Rings/ring19.jpg' },
        { category: 'rings', path: 'Rings/ring20.jpg' },
        { category: 'rings', path: 'Rings/ring21.jpg' },
        { category: 'rings', path: 'Rings/ring22.jpg' },
        { category: 'rings', path: 'Rings/ring23.jpg' },
        { category: 'shirts', path: 'Shirts/shirt1.jpg' },
        { category: 'shirts', path: 'Shirts/shirt 2.jpg' },
        { category: 'cheque-boards', path: 'Cheque Boards/card1.jpg' },
        { category: 'cheque-boards', path: 'Cheque Boards/card2.jpg' },
        { category: 'cheque-boards', path: 'Cheque Boards/card3.jpg' },
        { category: 'cheque-boards', path: 'Cheque Boards/Medal 1.jpg' },
        { category: 'cheque-boards', path: 'Cheque Boards/Medal 2.jpg' },
        { category: 'cheque-boards', path: 'Cheque Boards/medal3.jpg' },
        { category: 'reviews', path: 'Reviews/Review1.jpg' },
        { category: 'reviews', path: 'Reviews/Review 2.jpg' },
        { category: 'reviews', path: 'Reviews/Review 5.jpg' },
        { category: 'reviews', path: 'Reviews/review 7.jpg' },
        { category: 'reviews', path: 'Reviews/review 8.jpg' },
        { category: 'reviews', path: 'Reviews/review3.jpg' },
        { category: 'reviews', path: 'Reviews/review4.jpg' },
        { category: 'reviews', path: 'Reviews/review6.jpg' }
    ];

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

    // Modified: Updated card click handler to filter images by category
    // Filters the images array to get only those matching the selected category
    cards.forEach(card => {
        card.addEventListener('click', () => {
            currentCategory = card.getAttribute('data-category');
            currentImageIndex = 0;
            const categoryImages = images.filter(img => img.category === currentCategory);
            lightboxImg.src = categoryImages[currentImageIndex].path;
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

    // Modified: Updated previous button to use filtered category images
    // Ensures navigation stays within the current category's images
    prevBtn.addEventListener('click', () => {
        const categoryImages = images.filter(img => img.category === currentCategory);
        currentImageIndex = (currentImageIndex - 1 + categoryImages.length) % categoryImages.length;
        lightboxImg.src = categoryImages[currentImageIndex].path;
    });

    // Modified: Updated next button to use filtered category images
    // Ensures navigation stays within the current category's images
    nextBtn.addEventListener('click', () => {
        const categoryImages = images.filter(img => img.category === currentCategory);
        currentImageIndex = (currentImageIndex + 1) % categoryImages.length;
        lightboxImg.src = categoryImages[currentImageIndex].path;
    });

    // Click outside to close
    lightbox.addEventListener('click', (e) => {
        if (e.target === lightbox) {
            lightbox.classList.remove('active');
            document.body.style.overflow = 'auto';
        }
    });

    // Modified: Updated keyboard navigation to use filtered category images
    // Allows arrow keys to navigate through images in the current category
    document.addEventListener('keydown', (e) => {
        if (lightbox.classList.contains('active')) {
            const categoryImages = images.filter(img => img.category === currentCategory);
            if (e.key === 'Escape') {
                lightbox.classList.remove('active');
                document.body.style.overflow = 'auto';
            } else if (e.key === 'ArrowLeft') {
                currentImageIndex = (currentImageIndex - 1 + categoryImages.length) % categoryImages.length;
                lightboxImg.src = categoryImages[currentImageIndex].path;
            } else if (e.key === 'ArrowRight') {
                currentImageIndex = (currentImageIndex + 1) % categoryImages.length;
                lightboxImg.src = categoryImages[currentImageIndex].path;
            }
        }
    });
});