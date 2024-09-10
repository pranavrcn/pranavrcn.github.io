        
document.addEventListener('DOMContentLoaded', () => {
    const projectGrid = document.getElementById('projectGrid');
    const modalsContainer = document.getElementById('modalsContainer');
    const searchInput = document.getElementById('searchInput');
    function displayProjects(filteredProjects) {
        projectGrid.innerHTML = ''; 
        modalsContainer.innerHTML = ''; 
        filteredProjects.forEach(project => {
            projectGrid.innerHTML += createCard(project);
            modalsContainer.innerHTML += createModal(project);
        });
    }
    displayProjects(projects);
    function searchProjects(query) {
    if (query === '') {
        displayProjects(projects);
        return;
    }
    const filteredProjects = projects.filter(project => {
        const titleMatch = project.title.toLowerCase().includes(query.toLowerCase());
        const badgesMatch = project.badges.some(badge => badge.toLowerCase().includes(query.toLowerCase()));
        return titleMatch || badgesMatch;
    });
    displayProjects(filteredProjects);
}

    searchInput.addEventListener('input', (e) => {
        const query = e.target.value;
        searchProjects(query);
    });
});

const projects = [
    {
        id: "project1",
        title: "Analyzing E-commerce Performance: A Report on Sales, Quantity, and Profitability",
        badges: ["Power BI"],
        description: "",
        repository: "/ecom-performancereport.html",
        image: "images/ecomreport.png" // Add image URL
    },
    {
        id: "project2",
        title: "Quantifying Highway Use Externalities: A Cost-Benefit Analysis of Noise, Pollution, Crashes, and Congestion",
        badges: ["Power BI"],
        description: "",
        repository: "/costbenefit-highways.html",
        image: "images/costbenreport.png" // Add image URL
    }
];


function createCard(project) {
    return `
        <div id="${project.id}" class="col-md-6 col-lg-6 mb-4">
            <div class="card bg-light text-dark shadow">
                <img src="${project.image}" class="card-img-top" alt="${project.title} Image"> <!-- Use local image path -->
                <div class="card-body">
                    <h5 class="card-title">${project.title}</h5>
                    <p class="card-badges mb-2" style="margin-top: -9px">
                        ${project.badges.map(badge => `<span class="badge">${badge}</span>`).join('')}
                    </p>
                    <p class="card-text">${project.description}</p>
                    <button type="button" class="btn btn-outline-secondary" data-toggle="modal" data-target="#${project.id}Modal">Details</button>
                </div>
            </div>
        </div>
    `;
}


        function createModal(project) {
            return `
                <div class="modal fade" id="${project.id}Modal" tabindex="-1" role="dialog" aria-labelledby="${project.id}ModalLabel" aria-hidden="true">
                    <div class="modal-dialog modal-lg" role="document">
                        <div class="modal-content">
                            <div class="modal-header">
                                <h5 class="modal-title" id="${project.id}ModalLabel">${project.title}</h5>
                                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                    <span aria-hidden="true">&times;</span>
                                </button>
                            </div>
                            <div class="modal-body">
                                ${project.description}
                            </div>
                            <div class="modal-footer">
                                <a href="${project.repository}" class="btn btn-outline-secondary">View Report</a>
                                <button type="button" class="btn btn-outline-secondary" data-dismiss="modal">Back</button>
                            </div>
                        </div>
                    </div>
                </div>
            `;
        }

    