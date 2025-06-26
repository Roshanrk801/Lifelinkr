const moreTextElems = document.querySelectorAll(".more-text");
const readMoreButtonElems = document.querySelectorAll(".read-more");

readMoreButtonElems.forEach((button, index) => {
  button.addEventListener("click", () => {
    moreTextElems.forEach((text, i) => {
      const btn = readMoreButtonElems[i];

      if (i === index) {
        const isVisible = text.style.display === "block";

        text.style.display = isVisible ? "none" : "block";
        btn.textContent = isVisible ? "Read More" : "Show Less";
      } else {
        text.style.display = "none";
        btn.textContent = "Read More";
      }
    });
  });
});


// hide-accordion
const hideAccordionElem = document.querySelector(".hide-accordion")
const loadMorebtnElem = document.querySelector(".load-more")

loadMorebtnElem.addEventListener("click", () => {
  if (hideAccordionElem.style.display === "none") {
    hideAccordionElem.style.display = "block"
    loadMorebtnElem.textContent = "Show Less"
  } else {
    hideAccordionElem.style.display = "none"
    loadMorebtnElem.textContent = "Load More"
  }
})



// calender
const calendarDays = document.getElementById("calendarDays");
const monthYear = document.getElementById("monthYear");
const prevBtn = document.getElementById("prev");
const nextBtn = document.getElementById("next");

// This will keep track of the current date we're showing
let currentDate = new Date();

// Function to show the calendar for a specific month and year
function showCalendar(date) {
  const year = date.getFullYear(); // e.g. 2025
  const month = date.getMonth();   // 0 = January, 1 = February, etc.

  // Month names to display in the header
  const monthNames = [
    "January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
  ];

  // Set the header text to the current month and year
  monthYear.textContent = monthNames[month] + " " + year;

  // Get the first day of the month (e.g. Monday, Tuesday, etc.)
  const firstDayOfMonth = new Date(year, month, 1);
  const startingDay = firstDayOfMonth.getDay(); // 0 = Sunday, 1 = Monday, etc.

  // Get the number of days in the current month
  const daysInMonth = new Date(year, month + 1, 0).getDate();

  // Clear any existing days
  calendarDays.innerHTML = "";

  // Add empty boxes before the first day (to align days correctly)
  for (let i = 0; i < startingDay; i++) {
    const emptyBox = document.createElement("div");
    calendarDays.appendChild(emptyBox);
  }

  // Today's date (used to highlight current day)
  const today = new Date();

  // Add all the days of the month
  for (let day = 1; day <= daysInMonth; day++) {
    const dayBox = document.createElement("div");
    dayBox.classList.add("day");
    dayBox.textContent = day;

    // Check if this day is today (to highlight it)
    if (
      day === today.getDate() &&
      month === today.getMonth() &&
      year === today.getFullYear()
    ) {
      dayBox.classList.add("today");
    }

    // Add the day box to the calendar
    calendarDays.appendChild(dayBox);
  }
}

// When the "Previous" button is clicked, show the previous month
prevBtn.addEventListener("click", function () {
  currentDate.setMonth(currentDate.getMonth() - 1);
  showCalendar(currentDate);
});

// When the "Next" button is clicked, show the next month
nextBtn.addEventListener("click", function () {
  currentDate.setMonth(currentDate.getMonth() + 1);
  showCalendar(currentDate);
});

// Show the calendar when the page first loads
showCalendar(currentDate)


// when footer scroll calender top position take
const calbox = document.getElementById('calendar-box');
const footer = document.getElementById('footer');

window.addEventListener('scroll', () => {
    const triggerPosition = footer.getBoundingClientRect().top;

    if (triggerPosition <= window.innerHeight && triggerPosition >= 0) {
        // Text is in the viewport
        calbox.classList.add('move-top');
    } else {
        // Text is not visible
        calbox.classList.remove('move-top');
    }
});
