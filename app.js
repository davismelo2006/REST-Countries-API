const countries_container = document.querySelector(".countries-container");
const toggle_theme = document.querySelector(".toggle-theme");
const body = document.querySelector("body");
const createElement = (name, population, region, capital, flag) => {
  const el = `
        <div class="country-container">
        <div class="country-flag"  style="background-image:url(${flag}); "></div>
        <div class="country-desc">
        <h3> ${name}</h3>
        <p><strong>Population:</strong>
        ${population}</p>
        <p><strong>Region:</strong>
        ${region}</p>
        <p>
        <strong>Capital:</strong>
        ${capital}</p>
        </div>
        </div>
    `;
  countries_container.innerHTML += el;
};

const getAllCountries = () => {
  const url = "https://restcountries.com/v3.1/all";
  fetch(url).then((res) => {
    res.json().then((data) => {
      console.log("Oi");
      for (const key in data) {
        const country = data[key];
        createElement(
          country.name.common,
          country.population,
          country.region,
          country.capital === undefined ? "" : country.capital[0],
          country.flags.svg
        );
      }
      console.log("acabou");
    });
  });
};

getAllCountries();

toggle_theme.addEventListener("click", () => {
  body.classList.toggle("dark-mode");
});
