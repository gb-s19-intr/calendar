// ******************************************************
// *********************** DATA *************************
// ******************************************************

// An Array of "appointment" Objects, making this a table!
const allAppointments = [
  {
    name: `Work on appointment structure`,
    location: `2 Lower Jarvis St.`,
    date: {
      year: 2019,
      month: 5,
      day: 15,
    },
    time: {
      start: 400,
      duration: 60,
    },
    notes: `This is awesome!`,
    category: [`school`],
    priority: `low`,
  }, {
    name: `Insert appointments into the interface`,
    location: `2 Lower Jarvis St.`,
    date: {
      year: 2019,
      month: 5,
      day: 22,
    },
    time: {
      start: 540,
      duration: 240,
    },
    notes: `This is awesome!`,
    category: [`work`, `school`],
    priority: `critical`,
  },
];

console.log(allAppointments);   // Dump out the raw data to the console
console.table(allAppointments); // Format the data to look like a table (in the console)



// ********************************************************
// ****************** HELPER FUNCTIONS ********************
// ********************************************************

// Take a number of minutes in a day (0 to 1440, note it doesn't check though!) and converts it to a readable military time
const convertMinutesToTime = (minOfDay = 0) => {
  const hr = Math.floor(minOfDay / 60);   // Round the time down to an integer
  const min = Math.floor(minOfDay - hr * 60); // Round the minutes down to an integer
  return `${ (hr < 10)?`0`+hr:hr }:${ (min < 10)?`0`+min:min} `; // return a string, format with '0's
}

// Write a function called formatAppointment that takes an appointment object as an argument and returns a String of formatted HTML. The return String should have all the relevant properties from the appointment Object embedded within it. Meaning any appointment passed into the function would result in a unique String of HTML being return that's specific to that appointment.
const getAppointmentAsHtmlString = appt => {

  console.log(`Inside of appointment: ${appt.name}`)

  // Returns a string of HTML ready to insert
  return `<li class="appt cat-${appt.category[0]} ${appt.priority}" style="height: ${appt.time.duration}px;">
            <div class="start-time">${convertMinutesToTime(appt.time.start)}</div>
            <div>${appt.name}</div>
          </li>`;
}



// ********************************************************
// ******************* DOM REFERENCES *********************
// ********************************************************

// Step 1: Store a reference to the object we want to modify
const allAppts = document.getElementById(`todays-appts`);     // <ul>

// You can also select the first matching element by CSS selector like this:
// const allAppts = document.querySelector(`.appointments`);  // <ul>



// ********************************************************
// ******************* APPLIATION CODE ********************
// ********************************************************

// for ( let i = 0; i < allAppointments.length; i++ ) {
//   allAppts.innerHTML += getAppointmentAsHtmlString(allAppointments[i]);
// }

const getAppointmentsFromArrayAsHtmlString = appts => {
  // forEach when called from an array, will automatically iterate through each
  // value in the array and run a function, passing the value to the function automatically
  let htmlString = ``;
  
  appts.forEach(appt => {
    console.log( `Now pointing to: ${appt.name}` )
    htmlString += getAppointmentAsHtmlString(appt);
    console.log( `Work complete on: ${appt.name}` )
  });

  return htmlString;
}


const loadTodaysAppointments = () => {
  allAppts.innerHTML = getAppointmentsFromArrayAsHtmlString ( allAppointments );
}

document.getElementById(`loadappts`).addEventListener(`click`, loadTodaysAppointments);