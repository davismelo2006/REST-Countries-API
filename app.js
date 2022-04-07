const countries_container = document.querySelector(".countries-container");

const createElement = (name, population, region, capital, flag) => {
  const el = `
        <div class="country-container">
        <img src="${flag}" />
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
      createElement(
        data[0].name.common,
        data[0].capital[0],
        data[0].region,
        data[0].population,
        data[0].flags.svg
      );
    });
  });
};

getAllCountries();
