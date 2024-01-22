import { projectRepository } from "./projectRepository.js";
import { todoRepository } from "./todoRepository.js";
import { expandedTodo } from "./expandedTodo.js";
import { creationPopUp } from "./creationPopUp.js";
import AddIcon from "./img/plus-circle.svg";
import DeleteIcon from "./img/trash-can.svg";

const domManager = (function() {
    const projectsContainer = document.getElementById("projects-container");
    const taskContainer = document.getElementById("task-container");
    const tasksHeader = document.getElementById("tasks-header");

    const PROJECT_ID_DATA = "projectID";

    let projectInFocusID = "";

    const init = function() {  
        let addButtons = Array.from(document.getElementsByClassName("add-button"));
        
        addButtons.forEach(button => {
        let buttonImage = new Image();
        buttonImage.src = AddIcon;
        buttonImage.alt = "add";
        button.appendChild(buttonImage);
        });
    
        const addProjectContainer = document.getElementById("add-projects-container");
        const addProjectButton = addProjectContainer.firstElementChild;
        addProjectButton.addEventListener("click", () => creationPopUp.createPopUp("project"));

        const addTodoContainer = document.getElementById("add-tasks-container");
        const addTodoButton = addTodoContainer.firstElementChild;
        addTodoButton.addEventListener("click", () => creationPopUp.createPopUp("task"));

        renderAllProjects();
        expandedTodo.toggleVisibility(false);
    }

    const renderProject = function(projectData, focusOnProject = false) {
        const project = document.createElement("div");
        project.classList.add("project");
        project.dataset[PROJECT_ID_DATA] = projectData.id;
        project.textContent = `# ${projectData.name}`;

        const deleteImage = new Image();
        deleteImage.src = DeleteIcon;
        deleteImage.alt = "delete";
        deleteImage.classList.add("project-delete");
        deleteImage.addEventListener("click", deleteProject);

        project.appendChild(deleteImage);
        project.addEventListener("click", renderProjectTodos);
        projectsContainer.appendChild(project);

        if (focusOnProject) {
            project.click();
        }
    }

    const renderTodo = function(todoData) {
        const todo = document.createElement("div");
        todo.classList.add("todo");
        todo.dataset["todoID"] = todoData.id;
        todo.addEventListener("click", expandedTodo.renderExpandedTodo);
        
        const checkbox = document.createElement("input");
        checkbox.type = "checkbox";
        checkbox.id = todoData.id;
        checkbox.checked = todoData.isDone;
        checkbox.addEventListener("change", function() {
            todoRepository.updateTodo(this.id, {"isDone": this.checked});   
        });
        
        const todoName = document.createElement("div");
        todoName.textContent = todoData.name;
        todoName.dataset["todoID"] = todoData.id;

        const dueDate = document.createElement("div");
        dueDate.textContent = todoData.dueDate != "" ? `Due: ${todoData.dueDate}` : "";
        dueDate.dataset["todoID"] = todoData.id;
        dueDate.addEventListener("click", expandedTodo.renderExpandedTodo);

        todo.appendChild(checkbox);
        todo.appendChild(todoName);
        todo.appendChild(dueDate);
        taskContainer.appendChild(todo);
    }

    const addProject = function(projectName) {
        if (projectName) {
            const projectData = projectRepository.createNewProject(projectName);
            renderProject(projectData, true);
        }
    }

    const addTodo = function(todoName) {
        if (projectInFocusID != "") {
            if (todoName) {
                const todoData = todoRepository.createNewTodo(todoName, projectInFocusID);
                renderTodo(todoData);
            }
        }
        else {
            alert("Please create and/or select a project first");
        }
    }

    const renderAllProjects = function() {
        let projects = projectRepository.getAllProjects();
        projectsContainer.innerHTML = "";
        taskContainer.innerHTML = "";
        if (projects.length > 0) {
            projects.forEach(project => { renderProject(project); });
            renderProjectTodos(projects[0].id);
        }
    }

    const renderProjectTodos = function(data) {
        const isEvent = typeof data != "string";
        const projectID = isEvent ? data.target.dataset[PROJECT_ID_DATA] : data;

        if (isEvent) {
            data.stopPropagation();
        }
              
        if (projectID) {
            const projectData = projectRepository.getProjectByID(projectID);
            tasksHeader.textContent = `${projectData.name} Tasks`;
            projectInFocusID = projectID;
            const todos = todoRepository.getTodosByProjectID(projectID);
            
            if (todos.length > 0) {
                taskContainer.innerHTML = "";
                todos.forEach(todoData => {
                    renderTodo(todoData);
                });
            }
            else {
                taskContainer.innerHTML = "";
            }
        }

        markActiveProject();
    }

    const markActiveProject = function() {
        const projects = Array.from(projectsContainer.getElementsByClassName("project"));
        projects.forEach(project => {
            if (project.dataset[PROJECT_ID_DATA] != projectInFocusID) {
                project.classList.remove("active-project");
            }
            else {
                project.classList.add("active-project");
            }
        });
    }

    const deleteTodo = function(event) {
        const todoID = event.target.id;

        if (todoID && confirm("Delete Task?")) {
            todoRepository.deleteTodo(todoID);
            event.target.parentElement.remove();
        }
    }

    const deleteProject = function(event) {
        event.stopPropagation();
        const projectDOM = event.target.parentElement;
        const projectID = projectDOM.dataset[PROJECT_ID_DATA];
        const isInFocus = projectDOM.classList.contains("active-project");

        projectRepository.deleteProject(projectID);
        todoRepository.deleteProjectTodos(projectID);
        projectDOM.remove();

        if (isInFocus) {
            if (projectsContainer.childElementCount > 0) {
                projectsContainer.firstElementChild.click();
            }
            else {
                taskContainer.innerHTML = "";
                projectInFocusID = "";
                tasksHeader.textContent = "Tasks";
            }
        }
    }

    init();

    return {deleteTodo, renderProjectTodos, renderAllProjects, addTodo, addProject}
})();

export { domManager };
