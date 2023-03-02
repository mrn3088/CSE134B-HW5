// function formatDate(inputDate) {
//     const theDateArr = inputDate.split('/');
//     let theYear = theDateArr[2];
//     while (theYear.length < 4) {
//         theYear = '0' + theYear;
//     }
//     let theMonth = theDateArr[0];
//     if (theMonth.length < 2) {
//         theMonth = '0' + theMonth;
//     }
//     let theDay = theDateArr[1];
//     if (theDay.length < 2) {
//         theDay = '0' + theDay;
//     }

//     return `${theYear}-${theMonth}-${theDay}`;
// };

function formatDate(inputDate) {
    const dateArr = inputDate.split('/');
    let year = parseInt(dateArr[2]);
    let month = parseInt(dateArr[0]);
    let day = parseInt(dateArr[1]);

    let lastDayOfMonth = new Date(year, month, 0).getDate();

    if (day === lastDayOfMonth) {
        day = 1;
        month++;
    }
    else {
        day++;
    }

    if (month > 12) {
        month = 1;
        year++;
    }

    let formattedMonth = ('0' + month).slice(-2);
    let formattedDay = ('0' + day).slice(-2);
    let formattedYear = ('0000' + year).slice(-4);

    return `${formattedYear}-${formattedMonth}-${formattedDay}`;
}
console.log(new Date().toDateString());
let theDate = new Date().toDateString();
console.log(new Date(theDate).toDateString());
let theOtherDate = new Date();

console.log(new Date(theDate).getDay());
console.log(new Date(theDate).getMonth());
console.log(new Date(theDate).getFullYear());