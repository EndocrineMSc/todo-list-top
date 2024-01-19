import { Project } from "./project.js";

class ProjectRepository {
    #projectCounterKey = "projectCounter";
    #projectsKey = "projects";

    constructor() {
        if (!localStorage.getItem(this.#projectCounterKey)) {
            localStorage.setItem(this.#projectCounterKey, "0");
        }
    }

    //#region Create
    createNewProject(projectName) {
        let projectCounter = this.#getProjectCounter();
        
        const projects = this.getAllProjects();
        let project = new Project({name: projectName, id: projectCounter});
        projects.push(project);
        let projectJSON = JSON.stringify(projects);

        localStorage.setItem(this.#projectsKey, projectJSON);

        projectCounter++;
        this.#setProjectCounter(projectCounter);

        return project;
    }
    //#endregion

    //#region Read
    getAllProjects() {
        const projectJSON = localStorage.getItem(this.#projectsKey);
        return projectJSON ? JSON.parse(projectJSON) : [];
    }

    getProjectByID(projectID) {
        const projects = this.getAllProjects();
        let projectWithID = null;
        projects.forEach(project => {
            if (project.id == projectID) {
                projectWithID = project;
                return;
            }
        });
        return projectWithID;
    }

    #getProjectCounter() {
        return localStorage.getItem(this.#projectCounterKey);
    }

    #setProjectCounter(valueString) {
        localStorage.setItem(this.#projectCounterKey, valueString);
    }
    //#endregion
    
    //#region Update
    updateProject(projectID, updatedData) {
        let project = this.getProjectByID(projectID);

        if (project) {
            let oldProjectJSON = JSON.stringify(project);

            let dataKeys = Object.keys(updatedData);
            dataKeys.forEach(key => {
                project[key] = updatedData[key];
            });
    
            let newProjectJSON = JSON.stringify(project);
            let projectsJSON = localStorage.getItem(this.#projectsKey);
            let newProjectsJSON = projectsJSON.replace(oldProjectJSON, newProjectJSON);
            localStorage.setItem(this.#projectsKey, newProjectsJSON);
    
            return project;
        }
        return null;
    }
    //#endregion

    //#region Delete
    deleteProject(projectID) {
        let projects = this.getAllProjects();
        for (let i = 0; i < projects.length; i++) {
            let storageID = projects[i].id;
            if (storageID == projectID) {
                projects.splice(i, 1);
                break;
            }
        }
        localStorage.setItem(this.#projectsKey, JSON.stringify(projects));
    }
    //#endregion
}

const projectRepository = new ProjectRepository();

export { projectRepository };