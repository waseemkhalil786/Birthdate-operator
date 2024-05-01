let greetingWelcome = prompt("Enter Your Name");
document.getElementById("greetingWelcome").innerText =
"Welcome 😊 " + greetingWelcome;
console.log( greetingWelcome)

let input = document.getElementById("Date-input");
let Year = document.getElementById("Year");
let Month = document.getElementById("Month");
let Days = document.getElementById("Days");

function calnextBirthday() {
  let today = new Date();
  let birthdate = new Date(input.value);
  let nextbirthday;

  if (
    birthdate.getMonth() < today.getMonth() ||
    (birthdate.getMonth() === today.getMonth() &&
      birthdate.getDate() < today.getDate())
  ) {
    nextbirthday = new Date(
      today.getFullYear() + 1,
      birthdate.getMonth(),
      birthdate.getDate()
    );
  } else {
    nextbirthday = new Date(
      today.getFullYear(),
      birthdate.getMonth(),
      birthdate.getDate()
    );
  }

  let difference = nextbirthday.getTime() - today.getTime();
  let leftDays = Math.ceil(difference / (1000 * 3600 * 24));
  let leftHours = Math.ceil(difference / (1000 * 3600));
  let leftmins = Math.ceil(difference / (1000 * 60));

  // console.log( leftDays);
  Year.innerHTML = "Your next birthday  " + leftDays + " Days";
  Month.innerHTML = "And in " + leftHours + " Hours";
  Days.innerHTML = "And in " + leftmins + " Minuts";
};

