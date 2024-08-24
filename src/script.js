window.onload = function() {
    document.getElementById("age-form").addEventListener("submit", function(event) {
        event.preventDefault(); // Prevent form submission
        calculateAge(); // Call age calculation function
    });
};



function calculateAge() {
    // Get input values
    const birthDay = parseInt(document.getElementById('day').value);
    const birthMonth = parseInt(document.getElementById('month').value);
    const birthYear = parseInt(document.getElementById('year').value);

    // Get today's date
    const today = new Date();
    const todayDay = today.getDate();
    const todayMonth = today.getMonth() + 1; // Month is 0-indexed in JS
    const todayYear = today.getFullYear();

    // Calculate age in years
    let ageYears = todayYear - birthYear;

    // Adjust if the birthday hasn't occurred this year
    if (todayMonth < birthMonth || (todayMonth === birthMonth && todayDay < birthDay)) {
        ageYears--;
    }

    // Calculate months and days since last birthday
    let ageMonths = todayMonth - birthMonth;
    let ageDays = todayDay - birthDay;

    if (ageDays < 0) {
        // Borrow days from the previous month
        const previousMonth = todayMonth - 1 < 1 ? 12 : todayMonth - 1;
        const daysInPreviousMonth = new Date(todayYear, previousMonth, 0).getDate();
        ageDays += daysInPreviousMonth;
        ageMonths--;
    }

    if (ageMonths < 0) {
        ageMonths += 12;
    }

    // Display result
    console.log(ageYears, ageMonths, ageDays);
    document.getElementById('years').innerHTML = ageYears;
    document.getElementById('months').innerHTML = ageMonths;
    document.getElementById('days').innerHTML = ageDays;
}