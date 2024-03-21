import { config } from "./api.js";
const apiKey = config.apikey;

document.addEventListener('DOMContentLoaded', () => {
// 위치 기반 날씨 정보를 가져오는 함수 정의
const getWeatherInfo = () => {

  const tempSection = document.querySelector('.temperature');
  const placeSection = document.querySelector('.place');
  const descSection = document.querySelector('.weather-detail'); 
  const iconSection = document.querySelector('.weather-img');

  // 위치 정보를 성공적으로 가져왔을 때 실행될 콜백 함수
  const onSuccess = (position) => {
    console.log(position);
    const latitude = position.coords.latitude;
    const longitude = position.coords.longitude;
    getWeather(latitude, longitude);
  };

  // 현재 위치의 날씨 정보 가져오기
  const getWeather = (lat, lon) => {
    fetch(
      `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}&units=metric&lang=kr`
    ).then((response) => {
        console.log(response);
        return response.json();
    }).then((json) => {
        console.log(json);
        const temperature = json.main.temp;
        const place = json.name;
        const description = json.weather[0].description;
        const icon = json.weather[0].icon;
        const iconURL = `http://openweathermap.org/img/wn/${icon}@2x.png`;
  
        tempSection.innerHTML = `${temperature} &#8451;`;
        placeSection.innerText = place;
        descSection.innerText = description;
        iconSection.setAttribute('src', iconURL);

    }).catch((error)=>{
        alert(error);
    });
  }

  // 위치 정보를 가져오는 데 실패했을 때 실행될 콜백 함수
  const onError = (error) => {
    console.error(error);
  };

  // navigator.geolocation.getCurrentPosition() 메서드를 사용하여 위치 정보 가져오기
  navigator.geolocation.getCurrentPosition(onSuccess, onError);
}

getWeatherInfo();
})