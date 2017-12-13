//Write a funstion that determines a if a given year is a leap year. 

function leapYear(year){
    if (year%400 ==0){
        console.log(year, 'is a leap year');
    }
    else if (year%4 == 0 && year%100 !== 0) {
        console.log(year, 'is a leap year!!');
    }
    else {
        console.log(year, 'is not a leap year- sorry...');
    }

}


leapYear(800);  // 800 is divisable by 4, 100, and 400 so it is a leap year
leapYear(2012); // 2012 is not divisable by 400, or 100, but it is divisable by 4 so it is a leap year.
leapYear(1000); //1000/4 = 250 so is divisible by 4, it is also divisiable by 100 but since it is not divisable by 400 it is not a leap year

