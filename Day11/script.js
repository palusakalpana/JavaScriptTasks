document.addEventListener("DOMContentLoaded", function () {
    const resumeContainer = document.getElementById("resume-container");

    const container = document.createElement("div");
    container.className = "container";
    resumeContainer.appendChild(container);

    function addElement(tag, content, parent, className = "") {
        const element = document.createElement(tag);
        if (className) element.className = className;
        element.innerHTML = content;
        parent.appendChild(element);
    }

    addElement("h1", "Kalpana Palusa", container);
    addElement("p", "palusa.kalpana@gmail.com | Hyderabad, India", container, "contact-info");
    container.appendChild(document.createElement("hr"));

    addElement("h2", "Education", container);
    const table = document.createElement("table");
    table.innerHTML = `
        <tr>
            <th>Degree</th>
            <th>Institution</th>
            <th>Year</th>
            <th>Marks</th>
        </tr>
        <tr>
            <td>B.Tech - Artificial Intelligence</td>
            <td>Vidya Jyothi Institute of Technology, Hyderabad</td>
            <td>2020 - 2024</td>
            <td>CGPA: 8.28</td>
        </tr>
        <tr>
            <td>Intermediate</td>
            <td>Sri Gayatri Junior College, Hyderabad</td>
            <td>2018 - 2020</td>
            <td>Percentage: 92.1%</td>
        </tr>`;
    container.appendChild(table);
    container.appendChild(document.createElement("hr"));

    addElement("h2", "Certifications", container);
    const certifications = [
        "Designing Machine Learning Model Using Python - Vidya Jyothi Institute of Technology",
        "Python (Basic) - HackerRank",
        "Computer Vision Essentials - Great Learning Academy",
        "Artificial Intelligence Program - Rinex",
        "C for Everyone - Coursera"
    ];
    const certList = document.createElement("ul");
    certifications.forEach(cert => addElement("li", cert, certList));
    container.appendChild(certList);
    container.appendChild(document.createElement("hr"));

    addElement("h2", "Projects", container);
    const projects = [
        "<b>Celebrity Image Classifier:</b> Developed a classifier to identify sports persons using data preprocessing.",
        "<b>Color Sorting Machine:</b> Designed an Arduino-based machine using a TCS3200 sensor.",
        "<b>Smart Umbrella:</b> Created an IoT-based umbrella with lightning detection and weather monitoring."
    ];
    const projList = document.createElement("ul");
    projects.forEach(proj => addElement("li", proj, projList));
    container.appendChild(projList);
    container.appendChild(document.createElement("hr"));

    addElement("h2", "Skills", container);
    addElement("p", "<b>Technical:</b> Python, Html, Css, VS Code, Github, Git, Bootstrap, Sql", container);
    addElement("p", "<b>Soft:</b> Leadership, Communication, Time Management, Teamwork", container);
    container.appendChild(document.createElement("hr"));

    addElement("h2", "Achievements", container);
    const achievements = [
        "Participated in Contrive'2023 and made it to the best project list.",
        "Won 2nd prize at Udbhav'22, a national-level techno-cultural fest.",
        "Certified in a 2-day workshop on ML model design using Python.",
        "Active participant in Design-a-thon coding contest."
    ];
    const achList = document.createElement("ul");
    achievements.forEach(ach => addElement("li", ach, achList));
    container.appendChild(achList);
    container.appendChild(document.createElement("hr"));

    addElement("h2", "Test Scores", container);
    addElement("p", "<b>Duolingo:</b> 115", container);
    container.appendChild(document.createElement("hr"));

    const footer = document.createElement("footer");
    footer.innerText = "Thank you for reviewing !";
    container.appendChild(footer);
});
