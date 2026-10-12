fetch("data/portfolio.json")
  .then(response => response.json())
  .then(data => {
    const projects = document.getElementById("projects");

    data.forEach(project => {
      projects.innerHTML += `
        <div class="project">
          <h2>${project.title}</h2>
          <p>${project.description}</p>

          <a href="${project.link}" target="_blank" rel="noopener noreferrer">
            <button type="button">View Project</button>
          </a>
        </div>
      `;
    });
  })
  .catch(error => {
    console.error("Error:", error);
    document.getElementById("projects").innerHTML =
      "<p>Error loading projects.</p>";
  });