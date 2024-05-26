const ratings = document.querySelectorAll(".rating");
const ratingsContainer = document.querySelector(".ratings-container");
const sendBtn = document.querySelector("#send");
const panel = document.querySelector("#panel");
let selectedRating = "Satisfied";
console.log(selectedRating)
ratingsContainer.addEventListener("click", (e) => {
  removeActive();
  if (e.target.parentNode.classList.contains("rating")) {
    // Get the selected rating text
    selectedRating = e.target.nextElementSibling.textContent.trim();

    // Add 'active' class to the clicked rating
    e.target.parentNode.classList.add("active");
  } else if (e.target.classList.contains("fa-regular")) {
    // If the click is directly on the star icon
    selectedRating = e.target.nextElementSibling.textContent.trim();
    e.target.parentNode.classList.add("active");
  }
});

sendBtn.addEventListener("click", (e) => {
  // Prevent the default form submission behavior
  e.preventDefault();

  // Check if any required field is empty
  const name = document.getElementById('name').value.trim();
  const mobile = document.getElementById('mobile').value.trim();
  const email = document.getElementById('email').value.trim();
  const comment = document.getElementById('comment').value.trim();

  console.log("Name\n",name);
  console.log("mobile\n",mobile);
  console.log("email\n",email);
  console.log("comment",comment)

  if (name === '' || mobile === '' || email === '' || comment === '') {
      // Display an error message or handle the empty fields as desired
      console.log("Please fill in all required fields.");
      return; // Stop execution if any required field is empty
  }

  // Proceed with form submission
  panel.innerHTML = `
      <i style="color:red" class="fas fa-heart"></i>
      <strong>Thank You!</strong>
      <br> 
      <strong>Feedback: ${selectedRating}</strong>
      <p>We greatly appreciate your feedback.<br> We'll use your feedback to improve our customer support</p>
  `;
});

// Function to remove 'active' class from all ratings
function removeActive() {
  ratings.forEach((rating) => rating.classList.remove("active"));
}
