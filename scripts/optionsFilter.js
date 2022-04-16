const drop_options = document.querySelector(".drop");
const allOptions = Array.from(drop_options.children[1].children);
const search_container = document.querySelector(".search-box");

const hideOptions = () => {
  drop_options.children[1].classList.toggle("hidden");
};

drop_options.children[0].addEventListener("click", hideOptions);

const searchRegion = (region) => {
  const countriesByRegion = countries_arr.filter((el) => {
    if (el.region === region) return el;
  });
  countries_container.innerHTML = "";
  countriesByRegion.forEach((el) => createCard(el));
};

allOptions.forEach((el) => {
  el.addEventListener("click", (e) => {
    drop_options.children[0].children[0].innerHTML = e.target.innerText;
    searchRegion(e.target.innerText);
    hideOptions();
  });
});
