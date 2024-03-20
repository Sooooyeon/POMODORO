import WEATHER_API_KEY from './api.js';


console.log(WEATHER_API_KEY);



// 위치 정보를 가져오는 함수를 정의합니다.
export const getWeatherInfo = () => {
  // 위치 정보를 성공적으로 가져왔을 때 실행될 콜백 함수입니다.
  const onSuccess = (position) => {
    console.log(position);
  };

  // 위치 정보를 가져오는 데 실패했을 때 실행될 콜백 함수입니다.
  const onError = (error) => {
    console.error(error);
  };

  // navigator.geolocation.getCurrentPosition() 메서드를 사용하여 위치 정보를 가져옵니다.
  navigator.geolocation.getCurrentPosition(onSuccess, onError);
};

// 위치 정보를 가져오기 위해 함수를 호출합니다.
getWeatherInfo();