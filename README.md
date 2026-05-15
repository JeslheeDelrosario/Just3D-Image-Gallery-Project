# JUST.3D - 3D Championship Products Website

A premium static website for JUST.3D, a studio crafting high-quality 3D-designed championship rings, apparel, cheque boards, and medals for champions.

## 🎯 Project Overview

This is a responsive, modern single-page website showcasing JUST.3D's portfolio of 3D-created products. The site features smooth animations, interactive product galleries, and a clean, professional design tailored for sports teams and champions seeking custom merchandise.

## ✨ Features

- **Responsive Design**: Works seamlessly across desktop, tablet, and mobile devices
- **Interactive Navigation**: Smooth scrolling navigation with hamburger menu for mobile
- **Product Showcase**: Category-based product cards with lightbox gallery functionality
- **Image Preloading**: All product images are preloaded for optimal performance
- **Video Backgrounds**: Dynamic video backgrounds in hero and contact sections
- **Lightbox Gallery**: View full-size product images with navigation controls
- **Contact Section**: Direct links to social media, email, and ArtStation portfolio

## 📁 Project Structure

```
JAS3D/
├── index.html              # Main HTML file
├── style.css               # Stylesheet
├── Code.js                 # JavaScript for interactions
├── logo.png                # Main logo
├── logo tl.png             # Top-left logo variant
├── coverpic.jpg            # Hero cover image
├── vid1.mp4                # Contact section background video
├── Rings/                  # Championship rings collection
│   ├── ring_1.jpg to ring_16.jpg
│   └── other rings/        # Additional ring designs
├── Shirts/                 # Apparel collection
│   └── shirt_1.jpg to shirt_6.jpg
├── Cheque Boards/          # Award plaques and medals
│   ├── board_1.jpg to board_5.jpg
│   └── medal_1.jpg to medal_5.jpg
└── Reviews/                # Customer testimonials and feedbacks
    └── Review1.jpg, review3.jpg, etc.
```

## 🛠️ Technologies Used

- **HTML5**: Semantic markup structure
- **CSS3**: Modern styling with flexbox/grid layouts
- **JavaScript**: Vanilla JS for interactive features
- **Font Awesome**: Icons for UI elements
- **Static Web Hosting**: No build process required - works on any static host

## 🚀 Getting Started

### Prerequisites
- Any web browser (Chrome, Firefox, Safari, Edge)
- A local web server (optional, for testing file:// limitations)

### Installation

1. **Clone or download** this repository to your local machine
```bash
git clone <repository-url>
cd JAS3D
```

2. **Open the website**
   - Option 1: Open `index.html` directly in your browser
   - Option 2: Use a local web server for best experience:
     ```bash
     # Using Python
     python -m http.server 8000
     
     # Using Node.js
     npx serve
     
     # Using PHP
     php -S localhost:8000
     ```

3. **Visit** `http://localhost:8000` in your browser

## 📱 Key Sections

### Home Section
- Hero banner with compelling tagline "Crafting Champions Since Day One"
- Responsive navigation bar with logo and menu
- Call-to-action button to view products

### Products Section
Interactive cards showcasing all product categories:
- **Rings**: Championship and custom 3D rings
- **Shirts**: Custom designed apparel
- **Cheque Boards & Medals**: Award plaques and recognition medals
- **Reviews**: Customer testimonials and feedback

### Contact Section
- Video background for visual appeal
- Contact information including phone, email, and social media links
- Direct links to Facebook page and ArtStation portfolio

### About Section
Company story and mission statement in the footer, emphasizing JUST.3D's dedication to crafting premium 3D products that celebrate achievements.

## 🎨 Design Features

- **Dark Theme**: Professional dark color scheme perfect for premium brand
- **Overlay Effects**: Semi-transparent overlays for text readability over images
- **Smooth Transitions**: CSS transitions for all hover and click interactions
- **Preloaded Assets**: Images preloaded to prevent loading delays
- **Fallback Assets**: WebM video fallback for cross-browser compatibility

## 📞 Contact Information

- **Phone**: (0933) 576-7993
- **Email**: jaspersonal6@gmail.com
- **Facebook**: [JUST.3D](https://www.facebook.com/just.3dofficial)
- **ArtStation**: [jastrid13](https://www.artstation.com/jastrid13)

## 📄 License

© 2025 JUST.3D Studio. All rights reserved. Built for champions by champions.

---

## 🔧 Customization Guide

### Adding New Products

1. **Add your images** to the appropriate category folder (`Rings/`, `Shirts/`, etc.)
2. **Update preload links** in `index.html` `<head>` section
3. **Add gallery references** in Code.js to include new images in lightbox navigation

### Modifying Styles

Edit `style.css` to change colors, layouts, or add new design elements. The stylesheet is organized by section for easy maintenance.

### Adding Functionality

Extend `Code.js` to add new features like:
- E-commerce integration
- Form submission for quotes
- More advanced gallery filters
- Product detail pages