let date = new Date();
let year = date.getFullYear();
let month = date.getMonth();

const months = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December',
];


const nowMonth =  document.querySelector(".current-date");
const days = document.querySelector(".days");
const prevBtn = document.getElementById("prev");
const nextBtn = document.getElementById("next");



const renderCalendar = () => {
  // 해당 월의 첫 번째 날짜 가져오기
  const firstDayOfMonth = new Date(year, month, 1);
  
  // 해당 월의 마지막 날짜 가져오기
  const lastDateOfMonth = new Date(year, month + 1, 0).getDate(); 

  // 해당 월의 첫 번째 날짜가 무슨 요일인지 확인
  const startDayOfWeek = firstDayOfMonth.getDay();

  // 화면에 현재 월과 연도를 출력
  nowMonth.textContent =`${months[month]} ${year}`;

  let liTag ='';

  for(let i = 0; i<startDayOfWeek; i++){
    liTag += `<li></li>`;
  }

  for(let i = 1; i<=lastDateOfMonth; i++){
    let isToday =
      i === date.getDate() &&
      month === new Date().getMonth() &&
      year === new Date().getFullYear()
        ? 'active'
        : '';
    liTag += `<li class="date ${isToday}">${i}</li>`;
  }
  days.innerHTML = liTag;
}

renderCalendar();



prevBtn.addEventListener("click", () => {
  month--;
  if (month < 0) {
    month = 11;
    year--;
  }
  renderCalendar();
});

nextBtn.addEventListener("click", () => {
  month++;
  if (month > 11) {
    month = 0;
    year++;
  }
  renderCalendar();
});

