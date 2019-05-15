const appointment = {
  name: `Work on appointment structure`,
  location: `2 Lower Jarvis St.`,
  date: {
    year: 2019,
    month: 5,
    day: 15,
  },
  time: {
    start: 0,
    end: 1440,
  },
  notes: `This is awesome!`,
  category: `school`,
  priority: `critical`,
};

const convertMinutesToTime = (minOfDay) => {
  const hr = minOfDay / 60;
  const min = minOfDay - hr * 60;
  return `${hr}:${min}`;
}

// Write a function called formatAppointment that takes an appointment object as an argument and returns a String of formatted HTML. The return String should have all the relevant properties from the appointment Object embedded within it. Meaning any appointment passed into the function would result in a unique String of HTML being return that's specific to that appointment.

const formatAppointment = (appt) => {

  return `<li class="appt cat-${appt.category}">
            ${convertMinutesToTime(appt.time.start)}
            ${appt.name}
          </li>`;
}

console.log( formatAppointment(appointment) );