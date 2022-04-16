const drop_options = document.querySelector(".drop");
const allOptions = Array.from(drop_options.children[1].children);
const search_container = document.querySelector(".search-box");

drop_options.addEventListener("click", () => {
  drop_options.children[1].classList.toggle("hidden");
});

/* Search by region */

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
  });
});

/* Search by name */

search_container.children[1].addEventListener("input", (e) => {
  const countriesByName = countries_arr.filter((el) => {
    const name_country = el.name.common.toLowerCase();
    const ipt_value = e.target.value.toLowerCase();
    if (name_country.includes(ipt_value)) return el;
  });
  countries_container.innerHTML = "";
  countriesByName.forEach((el) => createCard(el));
});
