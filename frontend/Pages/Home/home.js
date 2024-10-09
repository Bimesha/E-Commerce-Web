const addReviewBtn = document.getElementById('addReviewBtn');
const plusIcon = document.getElementById('plusIcon');
const addReviewForm = document.getElementById('addReviewform');

addReviewForm.addEventListener('shown.bs.collapse', function() {
  plusIcon.classList.remove('bi-plus-lg');  // Remove plus icon
  plusIcon.classList.add('bi-chevron-up');  // Add up icon 
});

addReviewForm.addEventListener('hidden.bs.collapse', function() {
  plusIcon.classList.remove('bi-chevron-up');
  plusIcon.classList.add('bi-plus-lg'); 
});

//reset button for add new review form

const clearButton = document.getElementById('clearButton');
const reviewTextarea = document.getElementById('reviewTextarea');

// Add a click event listener to the 'Clear' button
clearButton.addEventListener('click', () => {
    // Clear the textarea by setting its value to be empty
    reviewTextarea.value = '';
  });

//carousel freeze
    const carousel = document.querySelector('#testimonial');
    const carouselInstance = new bootstrap.Carousel(carousel);
  
    // Pause carousel on hover
    carousel.addEventListener('mouseenter', function () {
      carouselInstance.pause();
    });
  
    // Resume carousel when hover ends
    carousel.addEventListener('mouseleave', function () {
      carouselInstance.cycle();
    });