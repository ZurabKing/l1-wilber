//TODO: API INVALID НАДО РАЗОБРАТЬСЯ
const addressInput = document.getElementById("addressInput");
const suggestionsList = document.getElementById("suggestions");

const debounce = (func, delay) => {
  let timeout;
  return function (...args) {
    clearTimeout(timeout);
    timeout = setTimeout(() => func(...args), delay);
  };
};

const geocodeAddress = async (address) => {
  const apiKey = "d6885717-8ceb-4a23-9ca8-ad5775d712fb";
  const apiUrl = `https://geocode-maps.yandex.ru/1.x/?apikey=${apiKey}&format=json&geocode=${address}`;

  try {
    const response = await fetch(apiUrl);
    const data = await response.json();
    const suggestions = data.response.GeoObjectCollection.featureMember.map(
      (item) => {
        return item.GeoObject.metaDataProperty.GeocoderMetaData.text;
      }
    );
    return suggestions;
  } catch (error) {
    console.error("Ошибка при выполнении геокодинга:", error);
    return [];
  }
};

const displaySuggestions = (suggestions) => {
  suggestionsList.innerHTML = "";
  suggestions.forEach((suggestion) => {
    const listItem = document.createElement("li");
    listItem.textContent = suggestion;
    suggestionsList.appendChild(listItem);
  });
};

const debouncedGeocode = debounce(async (inputValue) => {
  const suggestions = await geocodeAddress(inputValue);
  displaySuggestions(suggestions);
}, 300);

addressInput.addEventListener("input", (event) => {
  const inputValue = event.target.value.trim();
  if (inputValue.length >= 3) {
    debouncedGeocode(inputValue);
  } else {
    suggestionsList.innerHTML = "";
  }
});

suggestionsList.addEventListener("click", (event) => {
  if (event.target.tagName === "LI") {
    addressInput.value = event.target.textContent;
    suggestionsList.innerHTML = "";
  }
});
