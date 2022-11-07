let startHours = document.querySelectorAll(".Start-hour"),
    startMins = document.querySelectorAll(".Start-min"),
    endHours = document.querySelectorAll(".End-hour"),
    endMins = document.querySelectorAll(".End-min"),
    breakHours = document.querySelectorAll(".Break-hour"),
    breakMins = document.querySelectorAll(".Break-min"),
    startMeridian = document.querySelectorAll(".StartMeridian"),
    endMeridian = document.querySelectorAll(".EndMeridian"),
    total = document.querySelectorAll(".Total")
calculate = document.querySelector(".calculate"),
    clearAll = document.querySelector(".clearall")
totalHours = document.querySelector(".totalHours");

calculate.addEventListener("click", () => {
    let startcount, endcount, Break, totalCount = 0;
    for (let i = 0; i < 7; i++) {
        console.log(breakHours[i].value);
        if (startMeridian[i].value != endMeridian[i].value) {
            startcount = parseInt(startHours[i].value) * 60 + parseInt(startMins[i].value);
            endcount = (parseInt(endHours[i].value) + 12) * 60 + parseInt(endMins[i].value);
            Break = parseInt(breakHours[i].value) * 60 + parseInt(breakMins[i].value);
            total[i].innerText = (endcount - startcount - Break) / 60;
        }
        else {
            startcount = parseInt(startHours[i].value) * 60 + parseInt(startMins[i].value);
            endcount = parseInt(endHours[i].value) * 60 + parseInt(endMins[i].value);
            Break = parseInt(breakHours[i].value) * 60 + parseInt(breakMins[i].value);
            if (startcount > endcount) {
                total[i].innerText = ((endcount - startcount - Break) + 24 * 60) / 60;
            } else {
                total[i].innerText = (endcount - startcount - Break) / 60;

            }
        }
        totalCount = totalCount + parseFloat(total[i].innerText);
    }
    totalHours.innerText = totalCount;
})
clearAll.addEventListener("click", () => {
    for (let i = 0; i < 7; i++) {
        startHours[i].value = 0;
        endHours[i].value = 0;
        breakHours[i].value = 0;
        startMins[i].value = 0;
        endMins[i].value = 0;
        breakMins[i].value = 0;
        total[i].innerText = 0
    }
    totalHours.innerText = 0;
    console.log("hello")
})