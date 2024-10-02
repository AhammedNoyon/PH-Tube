const loadCategories = () => {
  const url = "https://openapi.programming-hero.com/api/phero-tube/categories";
  fetch(url)
    .then((res) => res.json())
    .then((data) => createCategoriesBtn(data.categories))
    .catch((error) => console.log(error));
};

const createCategoriesBtn = (categories) => {
  const dynamicBtnContainer = document.getElementById("dynamic-btn");
  categories.forEach((item) => {
    // console.log(item.category);
    const button = document.createElement("button");
    button.className = "btn";
    button.innerText = item.category;
    dynamicBtnContainer.appendChild(button);
  });
};
loadCategories();
