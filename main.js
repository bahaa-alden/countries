let btn = document.querySelector(".btns");
let wrapper = document.querySelector(".wrapper");
let input = document.querySelector(".input");
let container = document.querySelector(".container");
btn.addEventListener("click", async () => {
  let countryName = input.value;
  let finalUrl = `https://restcountries.com/v3.1/name/${countryName}?fullText=true`;

  try {
    let data = fetch(finalUrl);
    data = await (await data).json();
    wrapper.innerHTML = `<img src=${data[0].flags.png} class=flag>
    <h2 class=name>${countryName.toUpperCase()}</h2>
    <p>Capital :<span>${data[0].capital}</span></p>
    <p>Continent :<span>${data[0].continents}</span></p>
    <p>Population :<span>${data[0].population}</span></p>
    <p>Currency :<span>${
      Object.values(data[0].currencies)[0].name
    } - ${Object.keys(data[0].currencies)}</span></p>
    <p>Common languages :<span>${Object.values(data[0].languages).join(
      ","
    )}</span></p>`;
  } catch (error) {
    console.log(`Rejected: ${error}`);
    if (input.value === "") {
      wrapper.innerHTML = `<h4 class=alert>Enter a country name</h4>`;
    } else {
      wrapper.innerHTML = `<h4 class=alert>Enter a valid name</h4>`;
    }
  } finally {
    console.log("Done");
  }

  // //
});
