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
const sponsors = [
    {
        name: "Cisco",
        image: "assets/img/sponsors/cisco.png",
        link: "https://www.cisco.com/",
    },
    {
        name: "CSL",
        image: "assets/img/sponsors/csl.png",
        link: "https://www.csl.com/",
    },
    {
        name: "Incogni",
        image: "assets/img/sponsors/incogni.png",
        link: "https://incogni.com/",
    },
    {
        name: "iRODS",
        image: "assets/img/sponsors/irods.png",
        link: "https://irods.org/",
    },
    {
        name: "LexisNexis",
        image: "assets/img/sponsors/lexisnexis.png",
        link: "https://www.lexisnexis.com/",
    },
    {
        name: "Lowe's",
        image: "assets/img/sponsors/lowes.png",
        link: "https://www.lowes.com/",
    },
    {
        name: "NordPass",
        image: "assets/img/sponsors/nordpass.png",
        link: "https://nordpass.com/",
    },
    {
        name: "NordVPN",
        image: "assets/img/sponsors/nordvpn.png",
        link: "https://nordvpn.com/",
    },
    {
        name: "Saily",
        image: "assets/img/sponsors/saily.png",
        link: "https://saily.com/",
    },
    {
        name: "StandOut Stickers",
        image: "assets/img/sponsors/standoutstickers.png",
        link: "https://www.standoutstickers.com/",
    },
    {
        name: "Volvo",
        image: "assets/img/sponsors/volvo.jpg",
        link: "https://www.volvogroup.com/",
    },
    {
        name: "Direct Supply",
        image: "assets/img/sponsors/directsupply.png",
        link: "https://www.directsupply.com/",
    }

];
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
        linkedin: "https://www.linkedin.com/in/ethan-d-perez?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app",
        image: "assets/img/organizers/ethan.jpg"
    },
    {
        name: "Nick Farley",
        title: "Director of Media & Finance",
        linkedin: "https://www.linkedin.com/in/nicholas-farley-66b5762a9/",
        image: "assets/img/organizers/nicholas.jpeg"
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
        name: "Ayush Gala",
        title: "Software & Sponsorship Organizer",
        linkedin: "https://www.linkedin.com/in/ayush-gala/",
        image: "assets/img/organizers/ayush.jpg"
    },
    {
        name: "Cooper Sizemore",
        title: "Software Organizer",
        linkedin: "https://www.linkedin.com/in/cooper-sizemore/",
        image: "assets/img/organizers/cooper.jpeg"
    },
    {
        name: "Emery Tchervenski",
        title: "Software Organizer",
        linkedin: "https://www.linkedin.com/in/emery-tchervenski-504474320/",
        image: "assets/img/organizers/emery.jpg"
    },
    {
        name: "Eric Pham",
        title: "Finance & Sponsorship Organizer",
        linkedin: "https://www.linkedin.com/in/eric-fam/?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app",
        image: "assets/img/organizers/ericpham.jpeg" 
    },
    {
        name: "Ethan Tarlton",
        title: "Software Organizer",
        linkedin: "https://www.linkedin.com/in/ethan-tarlton-5a3944384/",
        image: "assets/img/organizers/Ethan_T_Headshot.png"
    },
    {
        name: "Sakashi Singh",
        title: "Logistics, Sponsorship, & Software Organizer",
        linkedin: "https://www.linkedin.com/in/sakshi-singh9/?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app",
        image: "assets/img/organizers/sakashi.jpg"
    },
    {
        name: "Reece Dobro",
        title: "Logistics Organizer",
        linkedin: "https://reecedobro.onrender.com/",
        image: "assets/img/organizers/reece.jpg"
    }
];
