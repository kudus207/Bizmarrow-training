const daysContainer = document.getElementById('days');
const monthYear = document.getElementById('monthYear');
const prevBtn = document.getElementById('prevMonth');
const nextBtn = document.getElementById('nextMonth');
const selectedText = document.getElementById('selectedDate');

let today = new Date();
let currentMonth = today.getMonth();
let currentYear = today.getFullYear();
let selectedDate = null;

function renderCalendar(month, year) {
    daysContainer.innerHTML = '';
    const firstDay = new Date(year, month, 1).getDay();
    const daysInMonth = new Date(year, month + 1, 0).getDate();
    const prevMonthDays = new Date(year, month, 0).getDate();

    monthYear.textContent = `${new Date(year, month).toLocaleString('default', { month: 'long' })} ${year}`;

    for (let i = 0; i < 42; i++) {
        const day = document.createElement('div');
        let dateNum;

        if (i < firstDay) {
            dateNum = prevMonthDays - firstDay + i + 1;
            day.textContent = dateNum;
            day.classList.add('other-month');
        } else if (i >= firstDay + daysInMonth) {
            dateNum = i - (firstDay + daysInMonth) + 1;
            day.textContent = dateNum;
            day.classList.add('other-month');
        } else {
            dateNum = i - firstDay + 1;
            day.textContent = dateNum;

            const dateObj = new Date(year, month, dateNum);

            if (
                dateObj.getDate() === today.getDate() &&
                dateObj.getMonth() === today.getMonth() &&
                dateObj.getFullYear() === today.getFullYear()
            ) {
                day.classList.add('today');
            }
            
            if (selectedDate &&
                dateObj.toDateString() === selectedDate.toDateString()) {
                day.classList.add('selected');
            }
            
            day.addEventListener('click', () => {
                selectedDate = dateObj;
                selectedText.textContent = `Selected: ${dateObj.toLocaleDateString()}`;
                renderCalendar(currentMonth, currentYear);
            });
        }

        daysContainer.appendChild(day);
    }
}

prevBtn.addEventListener('click', () => {
    currentMonth--; 
    if (currentMonth < 0) {
        currentMonth = 11;
        currentYear--;
    }
    renderCalendar(currentMonth, currentYear);
});

nextBtn.addEventListener('click', () => {
    currentMonth++;
    if (currentMonth > 11) {
        currentMonth = 0;
        currentYear++;
    }
    renderCalendar(currentMonth, currentYear);
});

renderCalendar(currentMonth, currentYear);  