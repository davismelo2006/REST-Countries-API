const drop_options = document.querySelector(".drop");
const allOptions = Array.from(drop_options.children[1].children);

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
