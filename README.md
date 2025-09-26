# test - Handmade Crafts Website

A responsive, multi-page website showcasing handmade crafts with interactive features.

## Project Structure


## Features

### 🎨 Design Features
- **Responsive Design**: Works perfectly on desktop, tablet, and mobile devices
- **Modern Aesthetics**: Clean, craft-inspired design with warm color palette
- **Typography**: Professional font pairing (Playfair Display + Raleway)
- **Smooth Animations**: CSS transitions and JavaScript animations

### ⚡ Interactive Features
- **Mobile Navigation**: Hamburger menu for mobile devices
- **Product Filtering**: Filter products by category (Ceramics, Textiles, Woodwork, Jewelry)
- **Form Validation**: Client-side validation for contact form
- **Load More**: Dynamic product loading with "Load More" functionality
- **Smooth Scrolling**: Animated scrolling for anchor links

### 📱 Pages Overview

#### Home Page (`index.html`)
- Hero section with call-to-action
- Featured products showcase
- About teaser section
- Newsletter signup

#### Products Page (`products.html`)
- Category filtering system
- Product gallery with hover effects
- Load more functionality
- Features section

#### About Page (`about.html`)
- Company story and mission
- Team member profiles
- Statistics section
- Values and philosophy

#### Contact Page (`contact.html`)
- Contact information
- Interactive contact form with validation
- Location map (placeholder)
- FAQ section

## Technical Implementation

### HTML5
- Semantic HTML structure
- Accessibility features (ARIA labels, alt text)
- SEO-friendly markup
- Responsive meta tags

### CSS3
- CSS Grid and Flexbox layouts
- CSS Custom Properties (variables)
- Mobile-first responsive design
- CSS animations and transitions

### JavaScript (ES6+)
- Modular JavaScript functions
- Event delegation
- Form validation
- Dynamic content loading
- Error handling

## Browser Compatibility

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Deployment

### GitHub Pages
1. Push the project to a GitHub repository
2. Go to repository Settings > Pages
3. Select the main branch as source
4. The site will be available at `https://moti-254.github.io/plp-webtechnologies-classroom-july2025-july-2025-final-project-and-deployment-Final-Project-and-Depl/`



### Custom Domain
- Update the CNAME records to point to your hosting provider
- Configure the custom domain in your hosting platform

## Customization

### Colors
Update CSS variables in `:root`:
```css
:root {
    --primary-color: #8B4513;    /* Saddle Brown */
    --secondary-color: #D2691E;  /* Chocolate */
    --accent-color: #F4A460;     /* Sandy Brown */
}

## Placeholder Images Note

Since I can't actually create image files, I've included placeholder image URLs in the code that will display appropriate placeholder images. When you deploy this project, you should:

1. Create an `images/` folder with the following images:
   - `hero-bg.jpg` (1920x1080 landscape image)
   - `artisan-workshop.jpg` (600x800 portrait image)
   - `featured-1.jpg`, `featured-2.jpg`, `featured-3.jpg` (400x300 product images)
   - `product-1.jpg` through `product-8.jpg` (400x300 product images)

2. Replace the placeholder image URLs with your actual image file paths

The code includes error handling that will display placeholder images if the actual images fail to load.

This complete project structure provides a fully functional, responsive multipage website that meets all the assignment requirements!
