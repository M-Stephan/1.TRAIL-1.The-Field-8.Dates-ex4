const dayNameId = document.getElementById('day-name');
const dayMonthId = document.getElementById('day-month');
const yearId = document.getElementById('year');
const hourId = document.getElementById('hour-text');
let hour12 = false;

function getDayName(dayNbr) {
    const days = ['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT'];
    return days[dayNbr];
}

function getMonthName(monthNbr) {
    const months = ['JAN', 'FEB', 'MAR', 'APR', 'MAY', 'JUN', 'JUL', 'AUG', 'SEP', 'OCT', 'NOV', 'DEC'];
    return months[monthNbr];
}

function getDate() {
    const today = new Date();
    const dayName = today.getDay();
    const day = today.getDate();
    const month = today.getMonth();
    const year = today.getFullYear();

    const hours = String(today.getHours()).padStart(2, '0');
    const minutes = String(today.getMinutes()).padStart(2, '0');
    const seconds = String(today.getSeconds()).padStart(2, '0');

    const hour = `<strong>${hours}:${minutes}:</strong>${seconds}`;

    dayNameId.innerHTML = getDayName(dayName);
    dayMonthId.innerHTML = `<strong>${day}</strong><br>${getMonthName(month)}`;
    yearId.innerHTML = year;
    if (!hour12) {
        hourId.innerHTML = hour;  
    } else {
        const hour12Format = today.toLocaleTimeString('en-US', { hour: 'numeric', minute: '2-digit', second: '2-digit', hour12: true });
        const [h, m, s] = hour12Format.split(/:| /);
        let ampm = '';
        if (hour12Format.includes('AM')) {
            ampm = ' AM';
        } else {
            ampm = ' PM';
        }
        
        hourId.innerHTML = `<strong>${h}:${m}:</strong>${s}${ampm}`;
    }
}

export function startClock(time) {
    setInterval(getDate, time * 1000);
}


const time = document.getElementById('hour');

time.addEventListener('click', function() {
    hour12 = !hour12;
    startClock(1);
})