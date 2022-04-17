const countries_container = document.querySelector(".countries-container");
const loading_container = document.querySelector(".loading-container");
let countries_arr = [];

const createCard = (el) => {
  let country = document.createElement("div");
  country.classList.add("country-container");
  country.addEventListener("click", () => {
    createModal(el);
  });

  country.innerHTML = `
    <img src="${el.flags.svg}" alt="country-flag"/>
  <div class="country-desc">
   <h3> ${el.name.common}</h3>
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
  console.log(el);
};

async function getAllCountries() {
  const res = await fetch("https://restcountries.com/v3.1/all");
  const data = await res.json();
  countries_arr = [...data];
  countries_arr.forEach((el) => createCard(el));
  loading_container.style.display = "none";
}

//getAllCountries();
