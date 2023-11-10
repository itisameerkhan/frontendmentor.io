function isLeapYear(year)
{
    return ((year%4==0) && year%100!=0) || (year%400==0);
}
function calculateAge()
{
    let dd = Number(document.getElementById("day").value);
    let mm = Number(document.getElementById("month").value);
    let yyyy = Number(document.getElementById("year").value);

    let currDate = new Date();
    let currDay = currDate.getDate();
    let currMonth = currDate.getMonth()+1;
    let currYear = currDate.getFullYear();

    let daysInMonth = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
    if(isLeapYear(currYear))
    {
        daysInMonth[1] = 29;
    }

    let ageYears = currYear - yyyy; 
    let ageMonth = currMonth - mm;  
    if(ageMonth < 0)
    {
        ageYears--;
        ageMonth += 12;
    }

    let ageDays = currDay - dd;
    if(ageDays < 0)
    {
        ageMonth--;
        if(ageMonth < 0)
        {
            ageYears--;
            ageMonth += 12;
        }
        ageDays += daysInMonth[currMonth - 2];
    }

    let output_dd = document.getElementById("day-span");
    let output_mm = document.getElementById("month-span");
    let output_yyyy = document.getElementById("year-span");

    //output_dd.innerHTML = ageDays;
    //output_mm.innerHTML = ageMonth;
    //output_yyyy.innerHTML = ageYears;

    let intervalDay = setInterval(displayDay,30);
    let count1=0;
    function displayDay()
    {
        output_dd.innerHTML = count1;
        if(count1==ageDays)
        {
            clearInterval(intervalDay);
        }
        count1++;
    }

    let intervalMonth = setInterval(displayMonth,30);
    let count2=0;
    function displayMonth()
    {
        output_mm.innerHTML = count2;
        if(count2==ageMonth)
        {
            clearInterval(intervalMonth);
        }
        count2++;
    }

    let intervalYear = setInterval(displayYear,30)
    let count3=0;
    function displayYear()
    {
        output_yyyy.innerHTML = count3;
        if(count3==ageYears) 
        {
            clearInterval(intervalYear);
        }
        count3++;
    }
}
/*
var count = 1; // Starting number
var interval = 1000; // Time interval in milliseconds (1 second)

// Define the function to be executed at each interval
var printNumber = function() {
  console.log(count);
  count++;
};

// Set the interval to execute the function
var intervalId = setInterval(printNumber, interval);

*/