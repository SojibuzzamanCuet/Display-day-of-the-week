let date = new Date();
let dayOfWeekNumber = date.getDay();
let nameOfDay;
let quote;
switch(dayOfWeekNumber){
    case 0:
        nameOfDay = 'sunday';
        quote = 'Time to chillax';
        break;
    case 1:
        nameOfDay = 'monday';
        quote = 'monday morning blues';
        break;
    case 2:
        nameOfDay = 'thusday';
        quote = 'taco time';
        break;
    case 3:
        nameOfDay = 'wednesday';
        quote = 'two more days to weekend';
        break;
    case 4:
        nameOfDay = 'thursday';
        quote = 'the weekend is almost here';
        break;
    case 5:
        nameOfDay = 'friday';
        quote = 'weekend is here';
        break;
    case 6:
        nameOfDay = 'saturday';
        quote = 'its a party day';
        break;    



}
let weekdayDiv = document.getElementById('weekday');
weekdayDiv.innerHTML = `${nameOfDay}`
let quoteDiv = document.getElementById('phrase');
quoteDiv.innerHTML = `${quote}`