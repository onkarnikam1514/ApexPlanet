const recipeForm = document.getElementById("recipeForm");
const recipeGallery = document.getElementById("recipeGallery");

recipeForm.addEventListener("submit", function (e) {
  e.preventDefault();

  const name = document.getElementById("recipeName").value.trim();
  const ingredients = document.getElementById("ingredients").value.trim();
  const imageURL = document.getElementById("imageURL").value.trim();

  // Form validation
  if (!name || !ingredients || !imageURL) {
    alert("⚠️ Please fill out all fields!");
    return;
  }

  const validImage = /\.(jpg|jpeg|png)$/i.test(imageURL);
  if (!validImage) {
    alert("🖼️ Please enter a valid image URL (jpg, jpeg, or png).");
    return;
  }

  // Remove placeholder if present
  const placeholder = document.querySelector(".placeholder");
  if (placeholder) placeholder.remove();

  // Create recipe card
  const card = document.createElement("div");
  card.classList.add("recipe-card");

  const img = document.createElement("img");
  img.src = imageURL;
  img.alt = name;

  const details = document.createElement("div");
  details.classList.add("recipe-details");

  const title = document.createElement("h3");
  title.textContent = name;

  const ing = document.createElement("p");
  ing.textContent = ingredients;

  const deleteBtn = document.createElement("button");
  deleteBtn.classList.add("delete-btn");
  deleteBtn.textContent = "Delete";
  deleteBtn.addEventListener("click", () => {
    card.classList.add("fade-out");
    setTimeout(() => card.remove(), 400);
  });

  details.appendChild(title);
  details.appendChild(ing);
  details.appendChild(deleteBtn);

  card.appendChild(img);
  card.appendChild(details);
  recipeGallery.appendChild(card);

  // Clear form fields
  recipeForm.reset();
});
