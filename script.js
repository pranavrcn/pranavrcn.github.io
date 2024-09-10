        
        // Search
        document.addEventListener('DOMContentLoaded', () => {
    const projectGrid = document.getElementById('projectGrid');
    const modalsContainer = document.getElementById('modalsContainer');
    const searchInput = document.getElementById('searchInput');

    // Function to display projects
    function displayProjects(filteredProjects) {
        projectGrid.innerHTML = ''; 
        modalsContainer.innerHTML = ''; 
        filteredProjects.forEach(project => {
            projectGrid.innerHTML += createCard(project);
            modalsContainer.innerHTML += createModal(project);
        });
    }

    // Initially display all projects
    displayProjects(projects);

    function searchProjects(query) {
    if (query === '') {
        // If query is empty, display all projects
        displayProjects(projects);
        return;
    }
    const filteredProjects = projects.filter(project => {
        
        // Check if query matches the project title
        const titleMatch = project.title.toLowerCase().includes(query.toLowerCase());

        // Check if query matches any of the badges
        const badgesMatch = project.badges.some(badge => badge.toLowerCase().includes(query.toLowerCase()));

        // Return true if either the title or badges match the query
        return titleMatch || badgesMatch;
    });

    displayProjects(filteredProjects);
}

    // Event listener for real-time search input
    searchInput.addEventListener('input', (e) => {
        const query = e.target.value;
        searchProjects(query);
    });
});


// Project loading
const projects = [
    {
        id: "project1",
        title: "Automated Software Risk Assessment",
        badges: ["Python", "SQL", "NLP"],
        description: "Built a system for software quality assurance by analyzing individual code commits to predict potential faults. This involved leveraging machine learning models, sourced from 60+ open-source repositories and 18,000 GitHub developer profiles. Techniques like Decision Trees, Random Forest, and AdaBoost were implemented, along with NLP for textual analysis.",
        repository: ""
    },
    {
        id: "project2",
        title: "Federated Machine Learning on eICU Data",
        badges: ["TensorFlow", "Python"],
        description: "Implemented a federated machine learning environment using TensorFlow Federated to analyze sensitive clinical data from the eICU Collaborative Research Database. The project explored differential privacy and homomorphic encryption to ensure data confidentiality while maintaining model performance. It highlights cutting-edge techniques in secure machine learning for healthcare, balancing privacy with utility in a sensitive domain.",
        repository: ""
    },
    {
        id: "project3",
        title: "CMaps: Campus Event Management",
        badges: ["Python", "PostgreSQL", "JavaScript", "HTML", "CSS", "Heroku"],
        description: "Co-developed and deployed a collaborative event management platform for university campuses, enabling users to create, manage, and promote events. The project employed Django for backend logic, PostgreSQL for database management, and JavaScript for frontend development. Showcased in the University of Virginia engineering newsletter.",
        repository: ""
    },
    {
        id: "project4",
        title: "Predicting Refugee-Induced Healthcare Expenditure",
        badges: ["R", "Microsoft Excel"],
        description: "Performed time series forecasting and multiple linear regression modeling to predict healthcare costs impacted by refugee movements in different regions. Compiled both technical and non-technical reports that presented actionable insights into healthcare expenditure management based on refugee influx data.",
        repository: ""
    },
    {
        id: "project5",
        title: "Customer Default Risk and Income Prediction",
        badges: ["R", "Microsoft Excel"],
        description: `Developed predictive models to assess customer default risks and predict annual income based on historical financial data. Logistic regression, random forests, and classification trees were applied to identify risk factors like debt-to-income ratio, resulting in models with balanced accuracy and low false negative rates. The income prediction utilized regression trees and shrinkage methods, yielding the random forests model as the best performer. This project supports financial institutions in making data-driven decisions for mitigating default risks.`,
        repository: ""
    },
    {
        id: "project6",
        title: "Credit Delinquency Prediction Model",
        badges: ["SAS", "Microsoft Excel"],
        description: "Developed a multiple linear regression model using data from the 2008 recession to predict regions at high risk of rising credit delinquency rates during economic downturns. This analysis supports better planning and mitigation strategies for financial institutions.",
        repository: ""
    }
];


        function createCard(project) {
            return `
                <div id="${project.id}" class="col-md-6 col-lg-6 mb-4">
                    <div class="card bg-light text-dark shadow">
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
                                <a href="${project.repository}" class="btn btn-outline-secondary">View Repository</a>
                                <button type="button" class="btn btn-outline-secondary" data-dismiss="modal">Back</button>
                            </div>
                        </div>
                    </div>
                </div>
            `;
        }

    