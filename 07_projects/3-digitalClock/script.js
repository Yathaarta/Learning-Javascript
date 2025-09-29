const dates = document.getElementById('calender');
const times = document.getElementById('clock');

const options = {
    weekday: "long",
    day: "numeric",
    month: "short",
    year: "numeric"
};

setInterval( function() {
    let datetime = new Date();
    times.innerHTML = `${datetime.toLocaleTimeString()} <br> IST`;
    // dates.innerHTML = datetime.toLocaleDateString('en-GB',options);
    let weekday = datetime.toLocaleDateString('en-GB', { weekday: 'long' }); // "Monday"
    let day = datetime.getDate();                                            // 29
    let month = datetime.toLocaleDateString('en-GB', { month: 'short' });  // "Sept"
    let year = datetime.getFullYear();                                       // 2025

    // 2. Assemble them into your desired format using a template literal
    dates.innerHTML = `${weekday}, ${day} ${month} <br> ${year}`;
    
}, 1000);