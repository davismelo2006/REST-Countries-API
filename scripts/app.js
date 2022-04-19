const countries_container = document.querySelector(".countries-container");
const loading_container = document.querySelector(".loading-container");
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
  <p><strong>Capital: </strong> 
  ${el.capital !== undefined ? el.capital[0] : ""}</p>
</div>`;
  countries_container.appendChild(country);
};

const createModal = (el) => {
  let country = document.createElement("div");
  country.classList.add("country-modal-container");

  const getValues = (data) => {
    let res = Object.values(data)[0];
    if (typeof res === "object") return (res = Object.values(res).join(", "));
    return res;
  };

  const getBorders = () => {
    const border_country_div = el.borders.map((el) => {
      return `<span>${el}</span>`;
    });
    return border_country_div.join("");
  };

  country.innerHTML = `
<div class="left-side">
  <img src="${el.flags.svg}" alt="country-flag" />
</div>
<div class="right-side">
  <h2>${el.name.common}</h2>
  <div class="country-modal-desc">
    <div>
      <p>Native Name: ${
        el.name.nativeName !== undefined
          ? getValues(Object.values(el.name.nativeName))
          : ""
      }</p>
      <p>Population: ${el.population.toLocaleString()}</p>
      <p>Region: ${el.region}</p>
      <p>Sub Region: ${el.subregion}</p>
      <p>Capital: ${el.capital !== undefined ? el.capital[0] : ""}</p>
    </div>
    <div>
      <p>Top Level Domain: ${el.tld[0]}</p>
      <p>Currencies: ${
        el.languages !== undefined ? getValues(el.currencies) : ""
      }</p>
      <p>Languages: ${
        el.languages !== undefined ? getValues(el.languages) : ""
      }</p>
    </div>
  </div>
  <div class="border-countries">
    <p>Border Countries: </p>
    <div class="border-countries-list">
    ${el.borders !== undefined ? getBorders() : ""}
    </div>
  </div>
</div>`;

  country_modal.removeChild(country_modal.lastChild);
  country_modal.appendChild(country);
  toggleVisibilityModal();
};

back_btn.addEventListener("click", toggleVisibilityModal);

async function getAllCountries() {
  const res = await fetch("https://restcountries.com/v3.1/all");
  const data = await res.json();
  data.forEach((el) => createCard(el));
  loading_container.style.display = "none";
}

getAllCountries();
