var currentSeconds = 0; // 현재 설정된 전체 초
var timerId = null;

function setTimer(minutes) {
    if (timerId !== null) {
        // 타이머가 이미 동작 중인 경우, 먼저 중지
        clearInterval(timerId);
        timerId = null;
    }
    currentSeconds = minutes * 60;
    updateDisplay(currentSeconds);
}

function startTimer() {
    if (timerId !== null || currentSeconds === 0) return; 
    // 타이머가 이미 동작 중이거나 시간이 설정되지 않은 경우 무시

    var remainingSeconds = currentSeconds;
    timerId = setInterval(function() {
        remainingSeconds--;
        updateDisplay(remainingSeconds);
        
        if (remainingSeconds <= 0) {
            clearInterval(timerId);
            timerId = null;
            playAlarmSound(); // 알림 소리 재생
            // 3초 후에 알림창을 띄움
            setTimeout(function() {
                alert("시간이 다 되었습니다!");
            }, 3000);
            currentSeconds = 0; // 타이머가 끝나면 설정된 시간을 초기화
            updateDisplay(currentSeconds); // 화면에도 초기화된 시간을 표시
        }
    }, 1000);
}

function stopTimer() {
    if (timerId !== null) {
        clearInterval(timerId);
        timerId = null;
    }
}

function resetTimer() {
    if (timerId !== null) {
        clearInterval(timerId);
        timerId = null;
    }
    currentSeconds = 0; // 리셋 시 설정된 시간을 0으로 초기화
    updateDisplay(currentSeconds); // 화면에도 초기화된 시간을 표시
}

function updateDisplay(seconds) {
    var minutes = Math.floor(seconds / 60);
    var sec = seconds % 60;
    if(minutes < 10) minutes = "0" + minutes;
    if(sec < 10) sec = "0" + sec; // 두 자릿수 형식 유지
    document.getElementById("time-display-minutes").innerText = minutes;
    document.getElementById("time-display-seconds").innerText = sec;
}

function playAlarmSound() {
    var sound = document.getElementById("alarm-sound");
    sound.play();
}
