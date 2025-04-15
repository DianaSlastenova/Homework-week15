const getInformation = () => {
  const cities = [
    "Москва",
    "Сочи",
    "Ставрополь",
    "Краснодар",
    "Санкт-Петербург",
  ];
  const temperature = [];
  const tempList = document.getElementById("temperature");
  tempList.innerHTML = "";
  const minTempText = document.getElementById("minTemp");
  const maxTempText = document.getElementById("maxTemp");

  for (let i = 0; i < cities.length; i++) {
    const userTemp = prompt(`Введите температуру для города ${cities[i]}`);
    temperature.push(Number(userTemp));
  }
  console.log(temperature);

  for (let i = 0; i < cities.length; i++) {
    const newElement = document.createElement("li");
    newElement.textContent = `Температура в городе ${cities[i]} ${temperature[i]} °C`;
    tempList.append(newElement);
  }

  let minTemp = Math.min(...temperature);
  let maxTemp = Math.max(...temperature);
  console.log(minTemp);
  console.log(maxTemp);
  minTempText.textContent = `Минимальная температура равна ${minTemp} °C`;
  maxTempText.textContent = `Максимальная температура равна ${maxTemp} °C`;
};

const buttonInfo = document.querySelector("button");
buttonInfo.addEventListener("click", getInformation);
