// builds the sponsor section dynamically

function createSponsor(sponsor) {
    const html = document.createElement('template');

    const inner = `<a class="mx-4 md:mx-8" href="${sponsor.link}"><img src="${sponsor.image}" alt="${sponsor.name}"></a>`

    html.innerHTML = inner.trim();

    const sponsorElement = html.content.firstChild;

    return sponsorElement;
}

const sponsorsContainer = document.getElementById("sponsors-list");

sponsors.forEach(sponsor => {
    const sponsorElement = createSponsor(sponsor);
    sponsorsContainer.appendChild(sponsorElement);
});

if (sponsors.length == 0) {
    const sponsorsContainer = document.getElementById("sponsors-container");
    sponsorsContainer.classList.add("hidden");

    const emptyDiv = document.createElement("div");
    emptyDiv.className = "md:h-32";

    sponsorsContainer.insertAdjacentElement("beforebegin", emptyDiv);
}