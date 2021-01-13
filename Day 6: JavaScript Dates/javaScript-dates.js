function getDayName(dateString) {
    let dayName;
    // Write your code here
    const daysOfTheWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    dayName = new Date(dateString).getDay();
    dayName = daysOfTheWeek[dayName];
    return dayName;
}
