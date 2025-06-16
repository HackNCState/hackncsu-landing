// the functions here aid in building reusable html for the website to reduce code duplication
// it would be better to use react or something but like idk react lol

function createOrganizerCard(organizer) {
    const html = document.createElement('template');

    const inner = `
    <a href="${organizer.linkedin}" target="_blank" class="organizer">
        <img src="${organizer.image}" alt="${organizer.name}" class="organizer-photo">
        <div class="grow">
            <h3 class="text-lg font-bold md:text-xl">${organizer.name}</h3>
            <p>${organizer.title}</p>
        </div>
        <span class="font-icon text-3xl">link</span>
    </a>
    `;

    html.innerHTML = inner.trim();

    return html.content.firstChild;
}

// TODO: function createSponsorsCard(sponsor) {}

const directorsList = document.getElementById("directors-list");

directors.forEach(element => {
    directorsList.appendChild(createOrganizerCard(element));
});

const organizersList = document.getElementById("organizers-list");

organizers.forEach(element => {
    organizersList.appendChild(createOrganizerCard(element));
});