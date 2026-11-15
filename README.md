# Weather App

A simple weather website. Type a city name and see the current weather for that city.

## How it works

1. Type a city name in the search box.
2. Click **Search** (or press **Enter**).
3. The page shows the weather for that city:
   - City name and country
   - Local time there
   - A weather picture and a short description (for example "Sunny")
   - Temperature in Celsius
   - What it feels like, in Celsius
   - Humidity
   - Wind speed and direction

## Where the weather comes from

The weather data comes from [weatherapi.com](https://www.weatherapi.com/).

When you click Search, the page asks a small function on the server (a computer on the internet that runs code for the site) for the weather. That function asks weatherapi.com and sends back only the details above. This keeps the secret key hidden from the browser.

## Where it is hosted

The site is published on [Vercel](https://vercel.com/), and the code lives on GitHub.

The weatherapi.com key is a secret. It is stored on Vercel as an environment variable (a private setting) called `WEATHER_API_KEY`. The key is never written in the code or on the page.

## What happens when something goes wrong

The page shows a short, friendly message under the search box:

- **City is empty or not found:** "We couldn't find that city. Please check the spelling and try again."
- **Anything else goes wrong** (for example the weather service is down, or the key is missing or not working): "The weather service is unavailable right now. Please try again later."

## Live link

[add live link here]

## Credits

Weather data by [weatherapi.com](https://www.weatherapi.com/).
