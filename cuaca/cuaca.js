const apiKey = "f49148e77fa7479669490ab95149abbe";

const weatherAssets = {
  Clear: {  
    icon: "assets/icons/sunny.png",
    video: "assets/video/sunny.mp4"
  },

  Clouds: {
    icon: "assets/icons/cloudy.png",
    video: "assets/video/cloudy.mp4"
  },

  Rain: {
    icon: "assets/icons/rain.png",

    video: "assets/video/rain.mp4"
  },

  Thunderstorm: {
    icon: "assets/icons/storm.png",
    video: "assets/video/rain.mp4"
  },

  Drizzle: {
    icon: "assets/icons/rain.png",
    video: "assets/video/rain.mp4"
  },

  Mist: {
    icon: "assets/icons/mist.png",
    video: "assets/video/cloudy.mp4"
  },

  Fog: {
    icon: "assets/icons/mist.png",
    video: "assets/video/cloudy.mp4"
  },

  Haze: {
    icon: "assets/icons/mist.png",
    video: "assets/video/cloudy.mp4"
  }
};

async function getWeather() {
  const city = document.getElementById("cityInput").value.trim();

  if (city === "") {
    alert("Masukkan nama kota dulu");
    return;
  }

  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric&lang=id`;

  try {
    const response = await fetch(url);
    const data = await response.json();

    console.log(data);

    if (data.cod != 200) {
      alert(data.message);
      return;
    }

    document.getElementById("cityName").innerText = data.name;
    document.getElementById("temperature").innerText = Math.round(data.main.temp) + "°C";
    document.getElementById("description").innerText = data.weather[0].description;
    document.getElementById("humidity").innerText = data.main.humidity + "%";
    document.getElementById("wind").innerText = data.wind.speed + " m/s";

    changeWeatherDisplay(data.weather[0].main);

  } catch (error) {
    console.error(error);
    alert("Gagal mengambil data cuaca");
  }
}

function changeWeatherDisplay(weather) {
  const icon = document.getElementById("weatherIcon");
  const bgVideo = document.getElementById("bgVideo");
  const videoSource = document.getElementById("videoSource");

  let selected = weatherAssets[weather];

  if (!selected) {
    selected = weatherAssets.Clouds;
  }

  icon.src = selected.icon;

  videoSource.src = selected.video;
  bgVideo.load();
  bgVideo.play();
}