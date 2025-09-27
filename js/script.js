// Main JavaScript for Artisan's Corner Website

document.addEventListener('DOMContentLoaded', function() {
    // Mobile menu functionality
    initMobileMenu();
    
    // Product filtering functionality (for products page)
    initProductFiltering();
    
    // Form validation (for contact page)
    initFormValidation();
    
    // Newsletter form handling
    initNewsletter();
    
    // Smooth scrolling for anchor links
    initSmoothScrolling();
    
    // Animation on scroll
    initScrollAnimations();
    
    // Image error handling
    initImageErrorHandling();
});

// Mobile Menu Functionality
function initMobileMenu() {
    const menuToggle = document.querySelector('.menu-toggle');
    const navMenu = document.querySelector('.nav-menu');
    
    if (menuToggle && navMenu) {
        menuToggle.addEventListener('click', function() {
            navMenu.classList.toggle('active');
            this.classList.toggle('active');
            
            // Animate hamburger icon
            const hamburger = this.querySelector('.hamburger');
            if (hamburger) {
                hamburger.style.transform = this.classList.contains('active') 
                    ? 'rotate(45deg)' 
                    : 'rotate(0)';
            }
        });
        
        // Close menu when clicking on a link
        const navLinks = document.querySelectorAll('.nav-menu a');
        navLinks.forEach(link => {
            link.addEventListener('click', () => {
                navMenu.classList.remove('active');
                menuToggle.classList.remove('active');
            });
        });
        
        // Close menu when clicking outside
        document.addEventListener('click', (e) => {
            if (!navMenu.contains(e.target) && !menuToggle.contains(e.target)) {
                navMenu.classList.remove('active');
                menuToggle.classList.remove('active');
            }
        });
    }
}

// Product Filtering Functionality
function initProductFiltering() {
    const filterButtons = document.querySelectorAll('.filter-btn');
    const productGrid = document.querySelector('.full-grid');
    const loadMoreBtn = document.getElementById('loadMore');
    
    if (!productGrid) return;
    
    // Sample product data
    const products = [
        { id: 1, name: 'Ceramic Mug', price: '$28.00', category: 'ceramics', image: 'Images/product-1.jpg', description: 'Hand-thrown stoneware mug with unique glaze patterns' },
        { id: 2, name: 'Handwoven Scarf', price: '$45.00', category: 'textiles', image: 'Images/product-2.jpg', description: 'Soft wool scarf woven using traditional techniques' },
        { id: 3, name: 'Wooden Cutting Board', price: '$35.00', category: 'woodwork', image: 'Images/product-3.jpg', description: 'Maple wood board with natural oil finish' },
        { id: 4, name: 'Silver Pendant', price: '$65.00', category: 'jewelry', image: 'Images/product-4.jpg', description: 'Handcrafted silver pendant with gemstone' },
        { id: 5, name: 'Ceramic Vase', price: '$55.00', category: 'ceramics', image: 'Images/product-5.jpg', description: 'Elegant vase with intricate hand-painted details' },
        { id: 6, name: 'Wool Blanket', price: '$120.00', category: 'textiles', image: 'Images/product-6.jpg', description: 'Warm wool blanket perfect for cozy evenings' },
        { id: 7, name: 'Wooden Bowl', price: '$40.00', category: 'woodwork', image: 'Images/product-7.jpg', description: 'Hand-carved wooden bowl for serving or display' },
        { id: 8, name: 'Leather Bracelet', price: '$25.00', category: 'jewelry', image: 'Images/product-8.jpg', description: 'Genuine leather bracelet with metal clasp' },
        { id: 9, name: 'Tea Set', price: '$85.00', category: 'ceramics', image: 'https://placehold.co/400x300/8B4513/white?text=Tea+Set', description: 'Complete ceramic tea set for two' },
        { id: 10, name: 'Silk Scarf', price: '$60.00', category: 'textiles', image: 'https://placehold.co/400x300/8B4513/white?text=Silk+Scarf', description: 'Luxurious silk scarf with vibrant patterns' },
        { id: 11, name: 'Cheese Board', price: '$50.00', category: 'woodwork', image: 'https://placehold.co/400x300/8B4513/white?text=Cheese+Board', description: 'Beautiful wooden board for cheese serving' },
        { id: 12, name: 'Copper Earrings', price: '$35.00', category: 'jewelry', image: 'https://placehold.co/400x300/8B4513/white?text=Copper+Earrings', description: 'Handmade copper earrings with unique design' }
    ];
    
    let currentFilter = 'all';
    let visibleProducts = 6;
        
    // Display products function
    function displayProducts(filter = 'all', count = visibleProducts) {
        productGrid.innerHTML = '';
        
        const filteredProducts = filter === 'all' 
            ? products 
            : products.filter(product => product.category === filter);
        
        const productsToShow = filteredProducts.slice(0, count);
        
        if (productsToShow.length === 0) {
            productGrid.innerHTML = '<p class="no-products">No products found in this category.</p>';
            return;
        }
        
        productsToShow.forEach(product => {
            const productCard = document.createElement('div');
            productCard.className = 'product-card fade-in';
            productCard.innerHTML = `
                <div class="product-image">
                    <img src="${product.image}" alt="${product.name}" onerror="this.src='https://placehold.co/400x300/8B4513/white?text=${encodeURIComponent(product.name)}'">
                </div>
                <div class="product-info">
                    <h3>${product.name}</h3>
                    <p class="price">${product.price}</p>
                    <p class="description">${product.description}</p>
                    <button class="btn-secondary view-details">View Details</button>
                </div>
            `;
            productGrid.appendChild(productCard);
        });
        
        // Update load more button visibility
        if (loadMoreBtn) {
            loadMoreBtn.style.display = filteredProducts.length > count ? 'block' : 'none';
            loadMoreBtn.disabled = filteredProducts.length <= count;
        }
        
        // Add event listeners to view details buttons
        document.querySelectorAll('.view-details').forEach(btn => {
            btn.addEventListener('click', function() {
                const productName = this.closest('.product-info').querySelector('h3').textContent;
                alert(`Details for ${productName} would be shown here. In a real application, this would open a product detail page or modal.`);
            });
        });
    }
    
    // Filter button event listeners
    filterButtons.forEach(button => {
        button.addEventListener('click', function() {
            // Remove active class from all buttons
            filterButtons.forEach(btn => btn.classList.remove('active'));
            // Add active class to clicked button
            this.classList.add('active');
            // Update current filter
            currentFilter = this.getAttribute('data-filter');
            // Reset visible products count
            visibleProducts = 6;
            // Display filtered products
            displayProducts(currentFilter, visibleProducts);
        });
    });
    
    // Load more functionality
    if (loadMoreBtn) {
        loadMoreBtn.addEventListener('click', function() {
            visibleProducts += 6;
            displayProducts(currentFilter, visibleProducts);
            
            // Scroll to newly loaded products
            const newProducts = productGrid.querySelectorAll('.product-card');
            if (newProducts.length > 0) {
                newProducts[newProducts.length - 1].scrollIntoView({ 
                    behavior: 'smooth', 
                    block: 'nearest' 
                });
            }
        });
    }
    
    // Initially display products
    displayProducts();
}

// Form Validation
function initFormValidation() {
    const contactForm = document.getElementById('contactForm');
    
    if (!contactForm) return;
    
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        let isValid = true;
        
        // Clear previous error messages
        document.querySelectorAll('.error-message').forEach(msg => {
            msg.textContent = '';
        });
        
        // Validate name
        const name = document.getElementById('name');
        if (!name.value.trim()) {
            document.getElementById('nameError').textContent = 'Name is required';
            isValid = false;
        } else if (name.value.trim().length < 2) {
            document.getElementById('nameError').textContent = 'Name must be at least 2 characters';
            isValid = false;
        }
        
        // Validate email
        const email = document.getElementById('email');
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!email.value.trim()) {
            document.getElementById('emailError').textContent = 'Email is required';
            isValid = false;
        } else if (!emailRegex.test(email.value)) {
            document.getElementById('emailError').textContent = 'Please enter a valid email address';
            isValid = false;
        }
        
        // Validate subject
        const subject = document.getElementById('subject');
        if (!subject.value.trim()) {
            document.getElementById('subjectError').textContent = 'Subject is required';
            isValid = false;
        } else if (subject.value.trim().length < 5) {
            document.getElementById('subjectError').textContent = 'Subject must be at least 5 characters';
            isValid = false;
        }
        
        // Validate message
        const message = document.getElementById('message');
        if (!message.value.trim()) {
            document.getElementById('messageError').textContent = 'Message is required';
            isValid = false;
        } else if (message.value.trim().length < 10) {
            document.getElementById('messageError').textContent = 'Message must be at least 10 characters';
            isValid = false;
        }
        
        if (isValid) {
            // Simulate form submission
            const submitBtn = contactForm.querySelector('button[type="submit"]');
            const originalText = submitBtn.textContent;
            
            submitBtn.textContent = 'Sending...';
            submitBtn.disabled = true;
            
            // Simulate API call
            setTimeout(() => {
                alert('Thank you for your message! We will get back to you within 24 hours.');
                contactForm.reset();
                submitBtn.textContent = originalText;
                submitBtn.disabled = false;
            }, 1500);
        }
    });
}

// Newsletter Form
function initNewsletter() {
    const newsletterForm = document.querySelector('.newsletter-form');
    
    if (newsletterForm) {
        newsletterForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            const emailInput = this.querySelector('input[type="email"]');
            const email = emailInput.value.trim();
            
            if (!email) {
                alert('Please enter your email address');
                return;
            }
            
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailRegex.test(email)) {
                alert('Please enter a valid email address');
                return;
            }
            
            // Simulate subscription
            const submitBtn = this.querySelector('button[type="submit"]');
            const originalText = submitBtn.textContent;
            
            submitBtn.textContent = 'Subscribing...';
            submitBtn.disabled = true;
            
            setTimeout(() => {
                alert('Thank you for subscribing to our newsletter!');
                emailInput.value = '';
                submitBtn.textContent = originalText;
                submitBtn.disabled = false;
            }, 1000);
        });
    }
}

// Smooth Scrolling
function initSmoothScrolling() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                const headerHeight = document.querySelector('header').offsetHeight;
                const targetPosition = targetElement.offsetTop - headerHeight;
                
                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });
}

// Scroll Animations
function initScrollAnimations() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('fade-in');
            }
        });
    }, observerOptions);
    
    // Observe elements for animation
    document.querySelectorAll('.product-card, .feature-card, .team-member, .faq-item').forEach(el => {
        observer.observe(el);
    });
}

// Image Error Handling
function initImageErrorHandling() {
    document.addEventListener('error', function(e) {
        if (e.target.tagName === 'IMG') {
            const img = e.target;
            const productName = img.alt || 'Product Image';
            img.src = `https://placehold.co/400x300/8B4513/white?text=${encodeURIComponent(productName)}`;
            img.onerror = null; // Prevent infinite loop
        }
    }, true);
}

// Utility function for debouncing
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}
