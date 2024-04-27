// let what =prompt("What is your Name?")
// console.log(what)
// let answer = alert("Welcom " +what)

// const ageCalculate = () => {
//     const today = new Date();
//     const inputDate = new Date(document.getElementById("date-input").value);

//     const Birthdetails =  {
//         date: inputDate.getDate(),
//         month: inputDate.getMonth() + 1 ,
//         year: inputDate.getFullYear(),
//     };

//     const currentYear = today.getFullYear();
//     const currentmonth = today.getMonth() + 1;
//     const currentDate = today.getDate();

//     if(isFutureDate(Birthdetails,currentYear,currentmonth,currentDate)) {
//         alert("NOt Born Yet");
//         displayResult("-","-","-");
//         return;
//     };
        
//     const { year, month, days } = calculateAge(
//         Birthdetails,
//         currentYear,
//         currentmonth,
//         currentDate           
//     );
//     displayResult=(days,month,year);

//     const isFutureDate = (
//         Birthdetails,
//         currentYear,
//         currentmonth,
//         currentDate
//     )=>{
//         return (
//             Birthdetails.year > currentYear ||
//             (Birthdetails.year === currentYear &&
//              (Birthdetails.year > currentmonth ||
//               (Birthdetails.year === currentmonth &&
//                 Birthdetails.date > currentDate )))
//         )
//     };

//     const calculateAge = (Birthdetails,currentYear,currentmonth,currentDate) => {
//         let years = currentYear - Birthdetails.year;
//         let month , days
        
//         if(currentmonth < Birthdetails.month){
//             year--;
//             month = 12 - (Birthdetails.month - currentmonth);
//         } else{
//                month = currentDate < Birthdetails.month; 
//         }

//         if(currentDate < Birthdetails.date){
//             month--;
//             const lastmonth = currentmonth === 1 ? 12 :
//             currentmonth - 1;
//             const daysInlastmonth = getDaysInMonth
//             (lastmonth,currentYear);
//             days = daysInlastmonth - (Birthdetails.date - currentDate);
//         }
//         else{
//             days = currentDate - Birthdetails.date;
//         }
//         return{year,month,days};
//     };
//     const getDaysInMonth = (month,year) => {
//         const isleapYear = year % 4 === 0 && (year % 100
//         != 0 || year % 400 === 0);
//         const getDaysInMonth =[
//             31,
//             isleapYear ? 29 : 28,
//             31,
//             30,
//             31,
//             30,
//             31,
//             30,
//             30,
//             31,
//             30,
//             31,
//         ];
//         return getDaysInMonth[month - 1]; 
//     };
//     const displayResult =(bdate, bmonth, byear) => {
//         document.getElementById("years").textContent= byear;
//         document.getElementById("months").textContent= bmonth;
//         document.getElementById("days").textContent= bdate;
//     };
//     document.getElementById("cals-age-btn").
// };
