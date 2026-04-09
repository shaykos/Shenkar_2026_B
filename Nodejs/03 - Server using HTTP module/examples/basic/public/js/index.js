// ============================================
// Star Wars Universe - Interactive Effects
// ============================================

// Wait for DOM to be fully loaded
document.addEventListener('DOMContentLoaded', () => {
    initializeNavigation();
    initializeCards();
    initializeScrollEffects();
    initializeParallaxEffect();
    initializeClickEffects();
});

// ============================================
// 1. Smooth Navigation
// ============================================
function initializeNavigation() {
    const navLinks = document.querySelectorAll('nav a');
    
    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const targetId = link.getAttribute('href').substring(1);
            const targetSection = document.getElementById(targetId);
            
            if (targetSection) {
                targetSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
                
                // Add active state to nav link
                navLinks.forEach(l => l.classList.remove('active'));
                link.classList.add('active');
            }
        });
    });
}

// ============================================
// 2. Card Interactions & Animations
// ============================================
function initializeCards() {
    const cards = document.querySelectorAll('.card');
    
    cards.forEach((card, index) => {
        // Staggered entrance animation
        card.style.animationDelay = `${index * 0.1}s`;
        card.classList.add('card-enter');
        
        // Hover effects
        card.addEventListener('mouseenter', () => {
            card.style.transform = 'translateY(-10px) scale(1.02)';
            card.style.boxShadow = '0 20px 40px rgba(255, 215, 0, 0.3)';
        });
        
        card.addEventListener('mouseleave', () => {
            card.style.transform = 'translateY(0) scale(1)';
            card.style.boxShadow = '0 10px 20px rgba(0, 0, 0, 0.3)';
        });
        
        // Click effect for card content
        card.addEventListener('click', () => {
            const cardImage = card.querySelector('.card-image');
            if (cardImage) {
                cardImage.style.filter = 'saturate(1.5) brightness(1.1)';
                setTimeout(() => {
                    cardImage.style.filter = 'saturate(1) brightness(1)';
                }, 300);
            }
        });
    });
}

// ============================================
// 3. Scroll Reveal Animation
// ============================================
function initializeScrollEffects() {
    const revealElements = document.querySelectorAll('.card, .hero, h2, h3');
    
    const revealOnScroll = () => {
        revealElements.forEach(el => {
            const elementTop = el.getBoundingClientRect().top;
            const elementBottom = el.getBoundingClientRect().bottom;
            const windowHeight = window.innerHeight;
            
            // Element is in viewport
            if (elementTop < windowHeight - 50 && elementBottom > 0) {
                el.classList.add('revealed');
                el.style.opacity = '1';
                el.style.transform = 'translateY(0)';
            }
        });
    };
    
    // Set initial state
    revealElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(20px)';
        el.style.transition = 'all 0.6s ease-out';
    });
    
    window.addEventListener('scroll', revealOnScroll, { passive: true });
    revealOnScroll(); // Run on load
}

// ============================================
// 4. Parallax Effect
// ============================================
function initializeParallaxEffect() {
    const hero = document.querySelector('.hero');
    
    if (hero) {
        window.addEventListener('scroll', () => {
            const scrollY = window.scrollY;
            hero.style.transform = `translateY(${scrollY * 0.5}px)`;
            hero.style.opacity = 1 - scrollY / 1000;
        }, { passive: true });
    }
}

// ============================================
// 5. Click & Interaction Effects
// ============================================
function initializeClickEffects() {
    // Add ripple effect on any click
    document.addEventListener('click', (e) => {
        if (e.target.tagName === 'A' || e.target.tagName === 'BUTTON') {
            createRipple(e);
        }
    });
    
    // Text highlight effect on selection
    const highlight = document.querySelector('.highlight');
    if (highlight) {
        highlight.addEventListener('mouseenter', () => {
            highlight.style.color = '#FFD700';
            highlight.style.textShadow = '0 0 10px #FFD700';
            highlight.style.transition = 'all 0.3s ease';
        });
        
        highlight.addEventListener('mouseleave', () => {
            highlight.style.color = 'inherit';
            highlight.style.textShadow = 'none';
        });
    }
}

// ============================================
// 6. Ripple Effect Function
// ============================================
function createRipple(event) {
    const button = event.target.closest('a, button');
    if (!button) return;
    
    const circle = document.createElement('span');
    const diameter = Math.max(button.clientWidth, button.clientHeight);
    const radius = diameter / 2;
    
    circle.style.width = circle.style.height = diameter + 'px';
    circle.style.left = event.clientX - button.offsetLeft - radius + 'px';
    circle.style.top = event.clientY - button.offsetTop - radius + 'px';
    circle.classList.add('ripple');
    
    // Remove existing ripples
    const ripple = button.querySelector('.ripple');
    if (ripple) ripple.remove();
    
    button.appendChild(circle);
}

// ============================================
// 7. Dynamic Header Effect
// ============================================
window.addEventListener('scroll', () => {
    const header = document.querySelector('header');
    if (window.scrollY > 50) {
        header.style.boxShadow = '0 5px 15px rgba(0, 0, 0, 0.5)';
        header.style.background = 'rgba(0, 0, 0, 0.9)';
    } else {
        header.style.boxShadow = 'none';
        header.style.background = 'linear-gradient(to bottom, rgba(0, 0, 0, 0.7), transparent)';
    }
}, { passive: true });

// ============================================
// 8. Add CSS Animations Dynamically
// ============================================
const style = document.createElement('style');
style.textContent = `
    .card-enter {
        animation: slideInUp 0.6s ease-out forwards;
    }
    
    @keyframes slideInUp {
        from {
            opacity: 0;
            transform: translateY(30px);
        }
        to {
            opacity: 1;
            transform: translateY(0);
        }
    }
    
    .ripple {
        position: absolute;
        border-radius: 50%;
        background: rgba(255, 215, 0, 0.6);
        transform: scale(0);
        animation: rippleEffect 0.6s ease-out;
        pointer-events: none;
    }
    
    @keyframes rippleEffect {
        to {
            transform: scale(4);
            opacity: 0;
        }
    }
    
    .revealed {
        animation: fadeInUp 0.6s ease-out forwards;
    }
    
    @keyframes fadeInUp {
        from {
            opacity: 0;
            transform: translateY(20px);
        }
        to {
            opacity: 1;
            transform: translateY(0);
        }
    }
    
    nav a.active {
        border-bottom: 3px solid #FFD700;
        color: #FFD700;
    }
`;
document.head.appendChild(style);

console.log('⚔️ Star Wars Interactive Effects Loaded! ⚔️');
