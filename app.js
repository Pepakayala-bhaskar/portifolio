const burger = document.getElementById("burger");
const links = document.getElementById("nav-links");

burger?.addEventListener("click", () => {

    links.classList.toggle("show");

});

// ===============================
// ACTIVE NAV LINK ON SCROLL
// ===============================

const sections = document.querySelectorAll("section, footer");

const navAnchors =
    document.querySelectorAll(".nav__links a");

function setActive() {

    const scrollPosition =
        window.scrollY + window.innerHeight * 0.32;

    let currentId = "home";

    sections.forEach((section) => {

        const sectionTop = section.offsetTop;

        if (scrollPosition >= sectionTop) {

            currentId = section.id || currentId;

        }

    });

    navAnchors.forEach((anchor) => {

        const href =
            anchor.getAttribute("href");

        anchor.classList.toggle(
            "active",
            href === `#
$ { currentId }
`
        );

    });

}

window.addEventListener("scroll", setActive);

window.addEventListener("load", setActive);


// ===============================
// CURRENT YEAR
// ===============================

const year = document.getElementById("year");

if (year) {

    year.textContent =
        new Date().getFullYear();

}


// ===============================
// PHOTO UPLOAD PREVIEW
// ===============================

const input =
    document.getElementById("photoInput");

const avatar =
    document.getElementById("avatarPreview");

input?.addEventListener("change", (e) => {

    const file = e.target.files?.[0];

    if (!file) return;

    const reader = new FileReader();

    reader.onload = (event) => {

        avatar.style.backgroundImage =
            `
url('${event.target.result}')
`;

        avatar.style.backgroundSize =
            "cover";

        avatar.style.backgroundPosition =
            "center";

        avatar.style.border =
            "1px solid rgba(255,255,255,.15)";
    };

    reader.readAsDataURL(file);

});


// ===============================
// CLOSE MOBILE MENU ON CLICK
// ===============================

navAnchors.forEach((anchor) => {

    anchor.addEventListener("click", () => {

        links.classList.remove("show");

    });

});


// ===============================
// CONTACT FORM
// ===============================

const form =
    document.querySelector(".contact-form");

form?.addEventListener("submit", (e) => {

    e.preventDefault();

    alert("Message Sent Successfully!");

    form.reset();

});