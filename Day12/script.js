document.addEventListener("DOMContentLoaded", function () {
    const body = document.body;

    // Create Header
    const header = document.createElement("header");
    header.innerHTML = `
        <div id="header" class="header">
            <div class="logo"><a href="#hero"><span>BR</span> Architects</a></div>
            <div class="nav">
                <a href="#projects">Projects</a>
                <a href="#about">About</a>
                <a href="#contact">Contact</a>
            </div>
        </div>
    `;
    body.appendChild(header);

    // Hero Section
    const heroSection = document.createElement("section");
    heroSection.id = "hero";
    heroSection.className = "hero-image";
    heroSection.innerHTML = `
        <div class="hero-text">
            <div class="br-box">BR</div>
            <div class="architects">Architects</div>
        </div>
    `;
    body.appendChild(heroSection);

    // Projects Section
    const projectsSection = document.createElement("section");
    projectsSection.id = "projects";
    projectsSection.innerHTML = `<h2>Projects</h2><div class="projects-line"></div>`;
    const projectContainer = document.createElement("div");
    projectContainer.className = "project-images";

    const projects = [
        { name: "Summer House", img: "https://www.w3schools.com/w3images/house5.jpg" },
        { name: "Brick House", img: "https://www.w3schools.com/w3images/house2.jpg" },
        { name: "Renovated", img: "https://www.w3schools.com/w3images/house3.jpg" },
        { name: "Barn House", img: "https://www.w3schools.com/w3images/house4.jpg" },
        { name: "Contemporary House", img: "https://res.cloudinary.com/brickandbatten/images/c_scale,w_464,h_299,dpr_2/f_auto,q_auto/v1659367745/wordpress_assets/Contemporary-House-57123-5-2_43096e0838/Contemporary-House-57123-5-2_43096e0838.jpg?_i=AA" },
        { name: "Cottage House", img: "https://www.homelane.com/blog/wp-content/uploads/2022/09/cottage-house-design.jpg" },
        { name: "Eco-House", img: "https://static.vecteezy.com/system/resources/previews/041/894/418/non_2x/ai-generated-an-off-grid-eco-house-powered-by-renewable-energy-photo.jpeg" },
        { name: "Victorian House", img: "https://media.architecturaldigest.com/photos/65dcbea6ddf6c399c862010f/master/w_1600%2Cc_limit/GettyImages-165432736.jpg" }
    ];

    projects.forEach(project => {
        const projectDiv = document.createElement("div");
        projectDiv.className = "project";
        projectDiv.innerHTML = `<img src="${project.img}" alt="${project.name}"><div class="project-name">${project.name}</div>`;
        projectContainer.appendChild(projectDiv);
    });

    projectsSection.appendChild(projectContainer);
    body.appendChild(projectsSection);

    // About Section
    const aboutSection = document.createElement("section");
    aboutSection.id = "about";
    aboutSection.innerHTML = `
        <h2>About</h2>
        <div class="projects-line"></div>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </p>
        <div class="about-container">
            ${createProfile("https://www.w3schools.com/w3images/team2.jpg", "John Doe", "CEO & Founder")}
            ${createProfile("https://www.w3schools.com/w3images/team1.jpg", "Jane Doe", "Architect")}
            ${createProfile("https://www.w3schools.com/w3images/team3.jpg", "Mike Ross", "Architect")}
            ${createProfile("https://www.w3schools.com/w3images/team4.jpg", "Dan Star", "Architect")}
        </div>
    `;
    document.body.appendChild(aboutSection);

    function createProfile(imgSrc, name, title) {
        return `
            <div class="profile">
                <img src="${imgSrc}" alt="${name}" class="profile-img">
                <div class="profile-info">
                    <h3>${name}</h3>
                    <div class="profile-title">${title}</div>
                    <div class="profile-description">Phasellus eget enim eu lectus faucibus vestibulum. Suspendisse sodales pellentesque elementum.</div>
                    <button class="contact-button">Contact</button>
                </div>
            </div>
        `;
    }

    // Contact Section
    const contactSection = document.createElement("section");
    contactSection.id = "contact";
    contactSection.className = "contact-section";
    contactSection.innerHTML = `
        <h2>Contact</h2>
        <div class="projects-line"></div>
        <p>Let's get in touch and talk about your next project.</p>
        <form class="contact-form">
            <input type="text" name="name" placeholder="Name" required>
            <input type="email" name="email" placeholder="Email" required>
            <input type="text" name="subject" placeholder="Subject" required>
            <textarea name="comment" placeholder="Comment" rows="4" required></textarea>
            <button class="send-button">SEND MESSAGE</button>
        </form>
    `;
    body.appendChild(contactSection);

    // Footer
    const footer = document.createElement("footer");
    footer.className = "footer";
    footer.innerHTML = `<p>Powered by <a href="https://www.w3schools.com/w3css/default.asp">W3.CSS</a></p>`;
    body.appendChild(footer);
});
