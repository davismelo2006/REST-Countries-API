const drop_options = document.querySelector(".drop");
const allOptions = Array.from(drop_options.children[1].children);
const search_container = document.querySelector(".search-box");

const hideOptions = () => {
  drop_options.children[1].classList.toggle("hidden");
};

drop_options.children[0].addEventListener("click", hideOptions);

allOptions.forEach((el) => {
  const textValue = el.innerHTML;
  el.addEventListener("click", () => {
    drop_options.children[0].children[0].innerHTML = textValue;

    hideOptions();
    countries_container.innerHTML = getAllCountries(
      `https://restcountries.com/v3.1/region/${textValue}`
    );
  });
});

const btn_search = search_container.children[0];
const ipt_search = search_container.children[1];

btn_search.addEventListener("click", () => {
  countries_container.innerHTML = getAllCountries(
    `https://restcountries.com/v3.1/name/${ipt_search.value}`
  );
});

ipt_search.addEventListener("keydown", (e) => {
  if (e.code === "Enter" || e.code === "NumpadEnter") {
    countries_container.innerHTML = getAllCountries(
      `https://restcountries.com/v3.1/name/${ipt_search.value}`
    );
    if (ipt_search.value === "") {
      getAllCountries(url_all_countries);
    }
  }
});
