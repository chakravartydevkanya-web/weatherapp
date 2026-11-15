const UNAVAILABLE = "The weather service is unavailable right now. Please try again later.";

const form = document.getElementById("search-form");
const input = document.getElementById("city-input");
const message = document.getElementById("message");
const result = document.getElementById("result");
const screen = document.querySelector(".screen");

const DAYS = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
const MONTHS = ["January", "February", "March", "April", "May", "June", "July",
  "August", "September", "October", "November", "December"];

function formatLocalTime(text) {
  const match = /^(\d{4})-(\d{2})-(\d{2}) (\d{1,2}):(\d{2})$/.exec(text);
  if (!match) {
    return text;
  }
  const year = Number(match[1]);
  const month = Number(match[2]) - 1;
  const day = Number(match[3]);
  const weekday = DAYS[new Date(year, month, day).getDay()];
  return weekday + ", " + day + " " + MONTHS[month] + " · " + match[4].padStart(2, "0") + ":" + match[5];
}

function showMessage(text) {
  result.hidden = true;
  screen.classList.remove("has-result");
  message.textContent = text;
}

function showWeather(w) {
  message.textContent = "";
  document.getElementById("city-name").textContent = w.city + ", " + w.country;
  document.getElementById("local-time").textContent = formatLocalTime(w.localTime);
  const icon = document.getElementById("icon");
  icon.src = w.icon;
  icon.alt = w.description;
  document.getElementById("temp").textContent = Math.round(w.temperatureC) + "°C";
  document.getElementById("description").textContent = w.description;
  document.getElementById("feels-like").textContent = Math.round(w.feelsLikeC) + "°C";
  document.getElementById("humidity").textContent = w.humidity + "%";
  document.getElementById("wind").textContent = Math.round(w.windKph) + " km/h " + w.windDirection;
  result.hidden = false;
  screen.classList.add("has-result");
}

form.addEventListener("submit", async (event) => {
  event.preventDefault();
  try {
    const response = await fetch("/api/weather?city=" + encodeURIComponent(input.value.trim()));
    const data = await response.json();
    if (response.ok) {
      showWeather(data);
    } else {
      showMessage(data.message || UNAVAILABLE);
    }
  } catch (error) {
    showMessage(UNAVAILABLE);
  }
});
