const drop_options = document.querySelector(".drop");
const allOptions = Array.from(drop_options.children[1].children);
const search_container = document.querySelector(".search-box");

drop_options.addEventListener("click", () => {
  drop_options.children[1].classList.toggle("hidden");
});

const searchCountries = (info, name) => {
  const all_countries = document.querySelectorAll(".country-container");
  all_countries.forEach((country) => {
    const country_info =
      country.children[1].children[info].innerHTML.toLocaleLowerCase();

    if (!country_info.includes(name)) country.classList.add("hidden");
    else country.classList.remove("hidden");
  });
};

/* Search by region */

allOptions.forEach((el) => {
  el.addEventListener("click", (e) => {
    searchCountries(2, e.target.innerText.toLocaleLowerCase());
  });
});

/* Search by name */

search_container.children[1].addEventListener("input", (e) => {
  searchCountries(0, e.target.value.toLocaleLowerCase());
});
