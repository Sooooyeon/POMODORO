let currentSeconds = 0; // 현재 설정된 전체 초
let timerId = null;

// 타이머 시간 설정
    function setTimer(minutes) {
    if (timerId !== null) {
        // 타이머가 이미 동작 중인 경우, 먼저 중지
        // clearInterval()메서드는 이전에 에 대한 호출로 설정된 시간 제한이 있는 반복 작업을 취소
        clearInterval(timerId);
        timerId = null;
    }
    currentSeconds = minutes * 60;
    updateDisplay(currentSeconds);
}

// 타이머 시작
function startTimer() {
    if (timerId !== null || currentSeconds === 0) return; 
    // 타이머가 이미 동작 중이거나 시간이 설정되지 않은 경우 무시

    let remainingSeconds = currentSeconds;
    timerId = setInterval(function() {
        remainingSeconds--;
        updateDisplay(remainingSeconds);
        
        if (remainingSeconds <= 0) {
            clearInterval(timerId);
            timerId = null;

            // 설정 시간 종료 알림 소리 재생
            playAlarmSound(); 

            // 3초 후에 알림창을 띄움
            setTimeout(function() {
                alert("시간이 다 되었습니다!");
            }, 3000);


            currentSeconds = 0; // 타이머 종료 후 설정된 시간을 초기화
            updateDisplay(currentSeconds); // 화면에 초기화된 시간 표시
        }
    }, 1000);
}

// 타이머 정지
function stopTimer() {
    if (timerId !== null) {
        clearInterval(timerId);
        timerId = null;
    }
}

// 타이머 리셋
function resetTimer() {
    if (timerId !== null) {
        clearInterval(timerId);
        timerId = null;
    }
    currentSeconds = 0; // 리셋 시 설정된 시간을 0으로 초기화
    updateDisplay(currentSeconds); // 화면에도 초기화된 시간을 표시
}

function updateDisplay(seconds) {
    let minutes = Math.floor(seconds / 60);
    let sec = seconds % 60;
    if(minutes < 10) minutes = "0" + minutes;
    if(sec < 10) sec = "0" + sec; // 두 자릿수 형식 유지
    document.getElementById("time-display-minutes").innerText = minutes;
    document.getElementById("time-display-seconds").innerText = sec;
}

function playAlarmSound() {
    let sound = document.getElementById("alarm-sound");
    sound.play();
}
