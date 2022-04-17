const countries_container = document.querySelector(".countries-container");
const loading_container = document.querySelector(".loading-container");
let countries_arr = [];

const country_modal = document.querySelector(".country-modal");
const back_btn = country_modal.children[0];

const toggleVisibilityModal = () => {
  country_modal.classList.toggle("hidden");
  document.querySelector("main").classList.toggle("hidden");
};

const createCard = (el) => {
  let country = document.createElement("div");
  country.classList.add("country-container");
  country.addEventListener("click", () => {
    createModal(el);
  });

  country.innerHTML = `
  <img src="${el.flags.svg}" alt="country-flag" loading="lazy"/>
<div class="country-desc">
   <h3>${el.name.common}</h3>
  <p><strong>Population:</strong>
      ${el.population.toLocaleString()}</p>
  <p><strong>Region:</strong>
      ${el.region}</p>
  <p><strong>Capital:</strong>
      ${el.capital !== undefined ? el.capital[0] : ""}</p>
</div>`;
  countries_container.appendChild(country);
};

const createModal = (el) => {
  let country = document.createElement("div");
  country.classList.add("country-modal-container");

  const getCurrency = () => {
    let country = "";
    for (const key in el.currencies) {
      if (country !== "") country += ",";
      country += el.currencies[key].name;
    }
    return country;
  };

  const getLanguages = () => {
    let res = Object.values(el.languages).toString();
    return res;
  };

  country.innerHTML = `
<div class="left-side">
  <img src="${el.flags.svg}" alt="country-flag" />
</div>
<div class="right-side">
  <h2>${el.name.common}</h2>
  <div class="country-modal-desc">
    <div>
      <p>Native Name:</p>
      <p>Population: ${el.population.toLocaleString()}</p>
      <p>Region: ${el.region}</p>
      <p>Sub Region: ${el.subregion}</p>
      <p>Capital: ${el.capital[0]}</p>
    </div>
    <div>
      <p>Top Level Domain: ${el.tld[0]}</p>
      <p>Currencies: ${getCurrency()} </p>
      <p>Languages: ${getLanguages()}</p>
    </div>
  </div>
  <div class="border-countries">
    <p>Border Countries:</p>
    <div class="border-countries-list">
    </div>
  </div>
</div>`;

  country_modal.children[1] !== undefined
    ? country_modal.removeChild(country_modal.lastChild)
    : "";
  country_modal.appendChild(country);
  toggleVisibilityModal();
};

back_btn.addEventListener("click", toggleVisibilityModal);

async function getAllCountries() {
  const res = await fetch("https://restcountries.com/v3.1/all");
  const data = await res.json();
  countries_arr = [...data];
  countries_arr.forEach((el) => createCard(el));
  loading_container.style.display = "none";
}

getAllCountries();
