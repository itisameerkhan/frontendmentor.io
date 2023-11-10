#include <iostream>

// Function to check if a given year is a leap year
bool isLeapYear(int year) {
    return (year % 4 == 0 && year % 100 != 0) || (year % 400 == 0);
}

// Function to calculate the age based on the current date and the birth date
void calculateAge(int birthYear, int birthMonth, int birthDay, int currentYear, int currentMonth, int currentDay) {
    // Array to store the number of days in each month
    int daysInMonth[] = {31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31};

    // Adjust the number of days in February if it's a leap year
    if (isLeapYear(currentYear)) {
        daysInMonth[1] = 29;
    }

    // Calculate the difference in years
    int ageYears = currentYear - birthYear;

    // Calculate the difference in months
    int ageMonths = currentMonth - birthMonth;
    if (ageMonths < 0) {
        ageYears--;
        ageMonths += 12;
    }

    // Calculate the difference in days
    int ageDays = currentDay - birthDay;
    if (ageDays < 0) {
        ageMonths--;
        if (ageMonths < 0) {
            ageYears--;
            ageMonths += 12;
        }
        ageDays += daysInMonth[currentMonth - 2]; // Subtracting 2 because arrays are zero-based and we need to access the previous month
    }

    // Print the calculated age
    std::cout << "Your age is: " << ageYears << " years, " << ageMonths << " months, and " << ageDays << " days." << std::endl;
}

int main() {
    int birthYear, birthMonth, birthDay;
    int currentYear, currentMonth, currentDay;

    // Get the birth date from the user
    std::cout << "Enter your birth year: ";
    std::cin >> birthYear;

    std::cout << "Enter your birth month (1-12): ";
    std::cin >> birthMonth;

    std::cout << "Enter your birth day: ";
    std::cin >> birthDay;

    // Get the current date from the user
    std::cout << "Enter the current year: ";
    std::cin >> currentYear;

    std::cout << "Enter the current month (1-12): ";
    std::cin >> currentMonth;

    std::cout << "Enter the current day: ";
    std::cin >> currentDay;

    // Call the calculateAge function
    calculateAge(birthYear, birthMonth, birthDay, currentYear, currentMonth, currentDay);

    return 0;
}
