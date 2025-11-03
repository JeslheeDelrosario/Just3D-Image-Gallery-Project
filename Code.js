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
        { category: 'rings', path: 'Rings/ring_1.jpg' }, 
        { category: 'rings', path: 'Rings/ring_2.jpg' },
        { category: 'rings', path: 'Rings/ring_3.jpg' },
        { category: 'rings', path: 'Rings/ring_4.jpg' },
        { category: 'rings', path: 'Rings/ring_5.jpg' },
        { category: 'rings', path: 'Rings/ring_6.jpg' },
        { category: 'rings', path: 'Rings/ring_7.jpg' },
        { category: 'rings', path: 'Rings/ring_8.jpg' },
        { category: 'rings', path: 'Rings/ring_9.jpg' },
        { category: 'rings', path: 'Rings/ring_10.jpg' },
        { category: 'rings', path: 'Rings/ring_11.jpg' },
        { category: 'rings', path: 'Rings/ring_12.jpg' },
        { category: 'rings', path: 'Rings/ring_13.jpg' },
        { category: 'rings', path: 'Rings/ring_14.jpg' },
        { category: 'rings', path: 'Rings/ring_15.jpg' },
        { category: 'rings', path: 'Rings/ring_16.jpg' },
       
        { category: 'shirts', path: 'Shirts/shirt_1.jpg' },
        { category: 'shirts', path: 'Shirts/shirt_2.jpg' },
        { category: 'shirts', path: 'Shirts/shirt_3.jpg' },
        { category: 'shirts', path: 'Shirts/shirt_4.jpg' },
        { category: 'shirts', path: 'Shirts/shirt_5.jpg' },
        { category: 'shirts', path: 'Shirts/shirt_6.jpg' },

        { category: 'cheque-boards', path: 'Cheque Boards/board_1.jpg' },
        { category: 'cheque-boards', path: 'Cheque Boards/board_2.jpg' },
        { category: 'cheque-boards', path: 'Cheque Boards/board_3.jpg' },
        { category: 'cheque-boards', path: 'Cheque Boards/board_4.jpg' },
        { category: 'cheque-boards', path: 'Cheque Boards/board_5.jpg' },

        { category: 'cheque-boards', path: 'Cheque Boards/medal_1.jpg' },
        { category: 'cheque-boards', path: 'Cheque Boards/medal_2.jpg' },
        { category: 'cheque-boards', path: 'Cheque Boards/medal_3.jpg' },
        { category: 'cheque-boards', path: 'Cheque Boards/medal_4.jpg' },
        { category: 'cheque-boards', path: 'Cheque Boards/medal_5.jpg' },
        
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

    const productsSection = document.getElementById('products-section');
    const defaultBg = 'url("products-default-bg.jpg")'; // Match your CSS default

    cards.forEach(card => {
        const bgImage = card.getAttribute('data-bg');
        
        card.addEventListener('mouseenter', () => {
            if (bgImage) {
                productsSection.style.backgroundImage = `url("${bgImage}")`;
                productsSection.classList.add('hovered');
            }
        });
        
        card.addEventListener('mouseleave', () => {
            productsSection.style.backgroundImage = defaultBg;
            productsSection.classList.remove('hovered');
        });
        
        // For mobile/touch: Tap to preview bg (optional enhancement)
        card.addEventListener('touchstart', () => {
            if (bgImage) {
                productsSection.style.backgroundImage = `url("${bgImage}")`;
                productsSection.classList.add('hovered');
            }
        });
        card.addEventListener('touchend', () => {
            setTimeout(() => {
                productsSection.style.backgroundImage = defaultBg;
                productsSection.classList.remove('hovered');
            }, 1000); // Holds bg for 1s after tap
        });
    });
});