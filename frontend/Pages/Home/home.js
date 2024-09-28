const addReviewBtn = document.getElementById('addReviewBtn');
const plusIcon = document.getElementById('plusIcon');
const addReviewForm = document.getElementById('addReviewform');

addReviewForm.addEventListener('shown.bs.collapse', function() {
  plusIcon.classList.remove('bi-plus-lg');  // Remove plus icon
  plusIcon.classList.add('bi-chevron-up');  // Add up icon 
});

addReviewForm.addEventListener('hidden.bs.collapse', function() {
  plusIcon.classList.remove('bi-chevron-up');  //
  plusIcon.classList.add('bi-plus-lg'); 
});