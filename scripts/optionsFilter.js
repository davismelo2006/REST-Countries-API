const drop_options = document.querySelector(".drop");
const allOptions = Array.from(drop_options.children[1].children);
const search_container = document.querySelector(".search-box");

const hideOptions = () => {
  drop_options.children[1].classList.toggle("hidden");
};

drop_options.children[0].addEventListener("click", hideOptions);

function searchRegion(region) {
  const newCountryArr = country_arr.filter((el) => {
    if (el.region === region) {
      return el;
    }
  });
}

allOptions.forEach((el) => {
  el.addEventListener("click", (e) => {
    searchRegion(e.target.innerText);
    hideOptions();
  });
});
