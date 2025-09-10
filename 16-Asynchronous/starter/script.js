'use strict';

const btn = document.querySelector('.btn-country');
const countriesContainer = document.querySelector('.countries');

///////////////////////////////////////
const renderCountry = function (data, className = '') {
  const html = `
    <article class="country ${className}">
      <img class="country__img" src="${data.flags.png}" />
      <div class="country__data">
      <h3 class="country__name">${data.name?.common || data.name}</h3>
      <h4 class="country__region">${data.region}</h4>
        <p class="country__row"><span>👫</span>${(
          data.population / 1_000_000
        ).toFixed(1)}M people</p>
        <p class="country__row"><span>🗣️</span>${
          data?.denonym ||
          data.denonyms?.eng ||
          data.languages.spa ||
          data.languages.deu ||
          data.languages[0]?.name
        }</p>
        <p class="country__row"><span>💰</span>${
          data?.currencies?.EUR?.name || data.currencies[0]?.name
        }</p>
      </div>
    </article>
`;

  countriesContainer.insertAdjacentHTML('beforeend', html);
  // countriesContainer.style.opacity = 1; in finally method
};

const renderError = function (msg) {
  countriesContainer.insertAdjacentText('beforeend', msg);
  // countriesContainer.style.opacity = 1;
};

/*
countriesContainer.style.width = '100%';
countriesContainer.style.flexWrap = 'wrap';

// NEW COUNTRIES API URL (use instead of the URL shown in videos):
// https://restcountries.com/v2/name/portugal

// NEW REVERSE GEOCODING API URL (use instead of the URL shown in videos):
// https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${lat}&longitude=${lng}

///////////////////////////////////////
// const getCountryData = function(){}
const allNames = new XMLHttpRequest();
allNames.open('GET', 'https://restcountries.com/v3.1/all?fields=name');
allNames.send();
let names;
allNames.addEventListener('load', function () {
  names = JSON.parse(allNames.responseText)
    .map(({ name }) => name.common)
    .sort();

  names.forEach(function (name, i, arr) {
    const request = new XMLHttpRequest();
    request.open('GET', `https://restcountries.com/v2/name/${name}`);
    request.send();

    request.addEventListener('load', function () {
      const [data] = JSON.parse(this.responseText);
      console.log(data);
      const html = `
        <article class="country">
          <img class="country__img" src="${data.flags.png}" />
          <div class="country__data">
          <h3 class="country__name">${data.name}</h3>
          <h4 class="country__region">${data.region}</h4>
            <p class="country__row"><span>👫</span>${(
              data.population / 1_000_000
            ).toFixed(1)}M people</p>
            <p class="country__row"><span>🗣️</span>${
              data.denonym || data.languages[0].name
            }</p>
            <p class="country__row"><span>💰</span>${
              data.currencies[0].name
            }</p>
          </div>
        </article>
    `;

      countriesContainer.insertAdjacentHTML('beforeend', html);
      countriesContainer.style.opacity = 1;
    });
  });
});
*/
/* 
///////////////////////////////////////
//  his codes

const getCountryData = function (country) {
  const request = new XMLHttpRequest();
  request.open('GET', `https://restcountries.com/v2/name/${country}`);
  request.send();

  request.addEventListener('load', function () {
    console.log(request);
    const [data] = JSON.parse(this.responseText);
    console.log(data);

    const html = `
    <article class="country">
      <img class="country__img" src="${data.flags.png}" />
      <div class="country__data">
      <h3 class="country__name">${data.name}</h3>
      <h4 class="country__region">${data.region}</h4>
        <p class="country__row"><span>👫</span>${(
          data.population / 1_000_000
        ).toFixed(1)}M people</p>
        <p class="country__row"><span>🗣️</span>${
          data.denonym || data.languages[0].name
        }</p>
        <p class="country__row"><span>💰</span>${data.currencies[0].name}</p>
      </div>
    </article>
`;

    countriesContainer.insertAdjacentHTML('beforeend', html);
    countriesContainer.style.opacity = 1;
  });
};
getCountryData('portugal');
getCountryData('usa');
getCountryData('germany');
*/

/*
const getCountryAndNeighbour = function (country) {
  // AJAX call country 1
  const request = new XMLHttpRequest();
  request.open('GET', `https://restcountries.com/v2/name/${country}`);
  request.send();

  request.addEventListener('load', function () {
    console.log(request);
    const [data] = JSON.parse(this.responseText);
    console.log(data);

    // Render Country (1)
    renderCountry(data);

    // Get neighbor country (2)
    const [neighbor] = data.borders.sort();
    console.log(neighbor);

    // for islands
    if (!neighbor) return;

    // AJAX call country 1
    const request1 = new XMLHttpRequest();
    request1.open('GET', `https://restcountries.com/v3.1/alpha/${neighbor}`);
    request1.send();
    request1.addEventListener('load', function () {
      const [data2] = JSON.parse(this.responseText);
      console.log(data2);
      renderCountry(data2, 'neighbour');
    });
  });
};
// getCountryAndNeighbour('germany');
getCountryAndNeighbour('usa');
// getCountryAndNeighbour('portugal');

////////////////////////////////////////////////////////
// const request = new XMLHttpRequest();
//   request.open('GET', `https://restcountries.com/v2/name/${country}`);
//   request.send();

// const request2 = fetch('https://restcountries.com/v2/name/portugal');
// console.log(request2);

const getJSON = function (url, errorMsg = 'Something went wrong') {
  return fetch(url).then(response => {
    if (!response.ok) throw new Error(`${errorMsg} ${response.status}`);

    return response.json();
  });
};

// const getCountryData2 = function (country) {
//   // Country 1
//   fetch(`https://restcountries.com/v2/name/${country}`)
//     .then(response => {
//       console.log(response);
//       // throw will eventually terminate the current function like return
//       if (!response.ok)
//         throw new Error(`Country not found (${response.status})`);

//       return response.json();
//     })
//     .then(([data]) => {
//       renderCountry(data);

//       // const neighbour = data.borders[0];
//       const neighbour = 'hshfhdsfh';

//       if (!neighbour) return;

//       // Country 2
//       return fetch(`https://restcountries.com/v3.1/alpha/${neighbour}`);
//     })
//     .then(response => {
//       if (!response.ok)
//         throw new Error(`Country not found (${response.status})`);

//       return response.json();
//     })
//     .then(([data]) => renderCountry(data, 'neighbour'))
//     .catch(err => {
//       console.error(err);
//       renderError(`Something went wrong, ${err.message}. Try again!`);
//     })
//     .finally(() => {
//       countriesContainer.style.opacity = 1;
//     });
// };

const getCountryData2 = function (country) {
  // Country 1
  getJSON(`https://restcountries.com/v2/name/${country}`, 'Country not found')
    .then(([data]) => {
      renderCountry(data);

      const neighbour = data?.border && data?.border[0];
      if (!neighbour) throw new Error('No neighbour found!');

      // Country 2
      return getJSON(
        `https://restcountries.com/v3.1/alpha/${neighbour}`,
        'Country not found'
      );
    })
    .then(([data]) => renderCountry(data, 'neighbour'))
    .catch(err => {
      console.error(err);
      renderError(`Something went wrong, ${err.message}. Try again!`);
    })
    .finally(() => {
      countriesContainer.style.opacity = 1;
    });
};

btn.addEventListener('click', function () {
  getCountryData2('portugal');
});
getCountryData2('australia');
*/

const whereAmI = function (lat, lng) {
  fetch(
    `https://nominatim.openstreetmap.org/reverse?format=geojson&lat=${lat}&lon=${lng}
    `
  )
    .then(response => {
      if (!response.ok) throw new Error('Can\t find your place');

      return response.json();
    })
    .then(data => {
      if (data.error) throw new Error(`${data.error}`);

      const country = data?.features[0]?.properties.address?.country;
      console.log(
        `You are in ${
          data?.features[0]?.properties.address?.city || 'Unidentified place'
        }, ${data?.features[0]?.properties.address.country}`
      );

      return fetch(`https://restcountries.com/v2/name/${country}`);
    })
    .then(res => res.json())
    .then(data => {
      return renderCountry(data[0]);
    })
    .catch(err => console.error(`Something went wrong, ${err.message}`))
    .finally(_ => (countriesContainer.style.opacity = 1));
};
// btn.addEventListener('click', function () {
//   whereAmI(52.508, 13.381);
//   whereAmI(-33.908, 18.381);
//   whereAmI(49.037, 72.381);
// });
let lat, lng;

navigator.geolocation.getCurrentPosition(function (position) {
  lat = position.coords.latitude;
  lng = position.coords.longitude;
});

btn.addEventListener('click', function () {
  whereAmI(lat, lng);
});
