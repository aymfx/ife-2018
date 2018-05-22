let yearSelect = document.querySelector('#year-select');
let monthSelect = document.querySelector('#month-select');
let daySelect = document.querySelector('#day-select');
let hourSelect = document.querySelector('#hour-select');
let miniteSelect = document.querySelector('#minite-select');
let secondSelect = document.querySelector('#second-select');
let result = document.querySelector('#result-wrapper');
let SelectAll = document.querySelectorAll('select');

function addOption(num, start) {
    let str = '';

    for (let index = 0; index < num; index++) {
        str += `<option value="${addzero(index+start)}">${addzero(index+start)}</option>`;
    }
    return str;
}

function addzero(n) {
    return n < 10 ? '0' + n : n;
}

function initPane() {
    yearSelect.innerHTML = addOption(100, 2000);
    monthSelect.innerHTML = addOption(12, 1);
    daySelect.innerHTML = addOption(31, 1);
    hourSelect.innerHTML = addOption(24, 0);
    miniteSelect.innerHTML = addOption(60, 0);
    secondSelect.innerHTML = addOption(60, 0);
    let time = new Date(`
        ${
            yearSelect.value
        }-
        ${
            monthSelect.value
        }-
        ${
            daySelect.value
        }

        ${
            hourSelect.value
        }:
        ${
            miniteSelect.value
        }:
        ${
            secondSelect.value
        }
    `)
    result.innerHTML = `现在距离${yearSelect.value}年${monthSelect.value}月${daySelect.value}日${getDay(time)} ${
            hourSelect.value
        }:${
            miniteSelect.value
        }:${
            secondSelect.value
        }
        还有 X 天 X 小时 X 分 X 秒 `
}

function selectDay(month, year) {
    let arr = ['31', checkYear(year * 1), '31', '30', '31', '30', '31', '31', '30', '31', '30', '31']
    daySelect.innerHTML = addOption(arr[month * 1 - 1], 1);
}

function checkYear(year) {
    if ((year % 4 == 0 && year % 100 != 0) || year % 400 == 0) {
        return 29;
    }
    return 28;
}

function getDay(date) {
    let arr = ['星期日', '星期一', '星期二', '星期三', '星期四', '星期五', '星期六'];
    return arr[date.getDay()];
}

function getAllTime() {
    let now = new Date();
    let time = (new Date(`
        ${
            yearSelect.value
        }-
        ${
            monthSelect.value
        }-
        ${
            daySelect.value
        }

        ${
            hourSelect.value
        }:
        ${
            miniteSelect.value
        }:
        ${
            secondSelect.value
        }
    `)).getTime();

    let n = Math.abs(time - now);
    console.log(n)
    getResidue(n)

}


function getResidue(n){
    let second = n / 1000;
    let onemin = 60;
    let onehour = onemin * 60;
    let oneday = onehour*24;
    let day = parseInt(second / oneday);
     second = second % oneday;
    let hour = parseInt(second / onehour);
     second = second % onehour;
    let min = parseInt(second / onemin);
      second = parseInt(second % onemin);

    
      let time = new Date(`
        ${
            yearSelect.value
        }-
        ${
            monthSelect.value
        }-
        ${
            daySelect.value
        }

        ${
            hourSelect.value
        }:
        ${
            miniteSelect.value
        }:
        ${
            secondSelect.value
        }
    `)
      result.innerHTML = `现在距离${yearSelect.value}年${monthSelect.value}月${daySelect.value}日${getDay(time)} ${
            hourSelect.value
        }:${
            miniteSelect.value
        }:${
            secondSelect.value
        }
        还有 ${day} 天 ${hour} 小时 ${min} 分 ${second} 秒 `


}

Array.from(SelectAll).map(ele => {
    ele.addEventListener('change', function (event) {
        let obj = event.target;
        console.log(obj.id)
        if (obj.id == 'year-select') {
            selectDay(monthSelect.value, obj.value);
        }
        if (obj.id == 'month-select') {
            selectDay(obj.value, yearSelect.value);
        }
        getAllTime();
    })
})

console.log(checkYear(2018))

initPane()
getAllTime();