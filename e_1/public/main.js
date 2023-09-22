//carousel
let currentIndex = 0;
const slides = document.querySelectorAll(".mySlides");

function showSlide(index) {
    slides.forEach((slide) => {
        slide.style.display = "none";
    });
    slides[index].style.display = "block";
}

function nextSlide() {
    currentIndex = (currentIndex + 1) % slides.length;
    showSlide(currentIndex);
}

function startSlideshow() {
    showSlide(currentIndex);
    setInterval(nextSlide, 2000); // Change slide every 2 seconds
}
startSlideshow();
//end of carousel
// --------------------------------------\
function searchCategory(event) {
    event.preventDefault();  // Prevent form submission

    const searchInput = document.getElementById('searchInput').value.toLowerCase();
    let targetSection = '';

    // Sample categories: men, women, kids
    const categories = ['men', 'women', 'kids','tshirt', 'jeans', 'suit','sarees','kurtasets','tops','frocks','tshirt','dungri'];
 

    // Check if the search input matches a sample category
    for (const category of categories) {
        if (searchInput.includes(category)) {
            targetSection = `#${category}Section`;
            break;  // Stop once a category is found
        }
    }

    if (targetSection) {
        document.querySelector(targetSection).scrollIntoView({ behavior: 'smooth' });
    }
}

// Existing JavaScript code here...


