// constants for this website

// ---------------------------------------
// the constants below are used in the countdown.js file
// and will change the state of the countdown & overall hero UI
// (states: pre-registration (registrationOpen = false), registration open, registration closed, hackathon started)
// see countdown.js for more details

// hackathon start date (tentatively 2026-02-14 11:00 UTC-5 Local Time)
const startDate = new Date("2026-02-14T11:00:00-05:00");

// TODO: change to actual registration deadline (rn it is 7 days before the hackathon start date)
const registrationDeadline = new Date("2026-02-07T11:00:00-05:00");
// change to true when registration is open
const registrationOpened = false;
// ---------------------------------------

// show/hide sponsors section
const haveSponsors = false;
// TODO: in the future this can be an array of sponsor objects. if empty, the sponsors section would not be shown

const directors = [
    {
        name: "Pranav Rajagopal",
        title: "Director of Sponsorship",
        linkedin: "https://www.linkedin.com/in/pranavrajagopal/",
        image: "assets/img/organizers/pranav.jpg"
    },
    {
        name: "Koray Öztürkler",
        title: "Director of Software",
        linkedin: "https://www.linkedin.com/in/kerim-koray-ozturkler/",
        image: "assets/img/organizers/koray.jpg"
    },
    {
        name: "Leo Wang",
        title: "Co-director of Logistics",
        linkedin: "https://www.linkedin.com/in/leowang0234/",
        image: "assets/img/organizers/leo.jpg"
    },
    {
        name: "Ethan Perez",
        title: "Co-director of Logistics",
        linkedin: "https://www.linkedin.com/in/ethan-d-perez/",
        image: "assets/img/organizers/ethan.jpg"
    },
    {
        name: "Nick Farley",
        title: "Director of Media & Finance",
        linkedin: "https://www.linkedin.com/in/nicholas-farley-66b5762a9/",
        image: "assets/img/organizers/nick.jpg"
    }
];

const organizers = [
    {
        name: "Aarya Rajoju",
        title: "Logistics & Software Organizer",
        linkedin: "https://www.linkedin.com/in/aaryarajoju/",
        image: "assets/img/organizers/aarya.jpg"
    },
    {
        name: "Aivan Byrnes",
        title: "Sponsorship Organizer",
        linkedin: "http://linkedin.com/in/aivan-byrnes-818311250",
        image: "assets/img/organizers/aivan.jpg"
    },
    {
        name: "Amanda Currie",
        title: "Software Organizer",
        linkedin: "https://www.linkedin.com/in/amandarcurrie/",
        image: "assets/img/organizers/amanda.jpg"
    },
    {
        name: "Nathan Kim",
        title: "Software Organizer",
        linkedin: "https://www.linkedin.com/in/nathan-kim-b45081284/",
        image: "assets/img/organizers/nathan.jpg"
    }
];