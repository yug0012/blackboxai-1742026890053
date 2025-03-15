// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Add scroll event listener for navbar background opacity
const navbar = document.querySelector('nav');
window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        navbar.classList.add('bg-black');
        navbar.classList.remove('bg-black/80');
    } else {
        navbar.classList.remove('bg-black');
        navbar.classList.add('bg-black/80');
    }
});

// Add loading handling for images
document.querySelectorAll('img').forEach(img => {
    img.addEventListener('error', function() {
        this.src = 'https://images.pexels.com/photos/892522/pexels-photo-892522.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2';
        this.alt = 'Fallback BMW Image';
    });
});
