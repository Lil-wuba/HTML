
const features = document.querySelectorAll('.dish-feature');

// Create an observer that watches each section's position on screen
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        
        if (entry.isIntersecting) {
            entry.target.classList.add('show'); 
        }
    });
}, {
    threshold: 0.3
});

features.forEach(section => observer.observe(section));