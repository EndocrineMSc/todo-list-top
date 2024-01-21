import { todoRepository } from "./todoRepository.js";
import { projectRepository } from "./projectRepository.js";
import { domManager } from "./domManager.js";
import CloseIcon from "./img/window-close.svg";
import DeleteIcon from "./img/trash-can.svg";
import AddIcon from "./img/plus-circle.svg";

const expandedTodo = (function() {
    const expandedTask = document.getElementById("expanded-task-background");
    expandedTask.addEventListener("click", event => event.stopPropagation());

    const headerRow = expandedTask.firstElementChild;
    const primaryInfo = document.getElementById("primary-info");
    const secondaryInfo = document.getElementById("secondary-info");
    const expandedTaskContainer = document.getElementById("expanded-task-container");

    const toggleVisibility = function(showElement) {
        !showElement ? expandedTask.parentElement.setAttribute("hidden", true) : expandedTask.parentElement.removeAttribute("hidden");   
    }

    const renderExpandedTodo = function(data) {
        const todoID = typeof data != "string" ? data.target.dataset["todoID"] : data;

        if (todoID) {
            const todoData = todoRepository.getTodoByID(todoID);

            removePreviousTaskElements();
            setHeaderElements(todoData);
            toggleVisibility(true);
            setPrimaryInfo(todoData);
            setSecondaryInfo(todoData);

            expandedTaskContainer.addEventListener("click", () => {
                toggleVisibility(false);
                domManager.renderProjectTodos(todoData.projectID);
            });
        }
    }

    const removePreviousTaskElements = function() {
        Array.from(headerRow.children).forEach(element => {
            element.remove();
        });
        
        Array.from(primaryInfo.children).forEach(element => {
            element.remove();
        });

        Array.from(secondaryInfo.children).forEach(element => {
            element.remove();
        });
    }

    const setHeaderElements = function(todoData) {
        const projectName = projectRepository.getProjectByID(todoData.projectID).name;
        const projectDOM = document.createElement("div");
        projectDOM.textContent = `# ${projectName}`;

        headerRow.appendChild(projectDOM);
        setCloseIcon(todoData);
    }

    const setCloseIcon = function(todoData) {
        const closeWindowIcon = new Image();
        closeWindowIcon.src = CloseIcon;
        closeWindowIcon.alt = "close_task_window";
        closeWindowIcon.addEventListener("click", () => {
            expandedTodo.toggleVisibility(false);
            domManager.renderProjectTodos(todoData.projectID);
        });

        headerRow.append(closeWindowIcon);
    }

    const setPrimaryInfo = function(todoData) {
        const nameAndCheck = document.createElement("div");
        nameAndCheck.classList.add("name-and-check");

        const taskName = document.createElement("input");
        taskName.type = "text";
        taskName.value = todoData.name;
        taskName.classList.add("expanded-task-name");
        taskName.addEventListener("change", event => {
            todoRepository.updateTodo(todoData.id, {"name": event.target.value}); 
        });

        const checkbox = document.createElement("input");
        checkbox.type = "checkbox";
        checkbox.checked = todoData.isDone;
        checkbox.addEventListener("change", event => {
            todoRepository.updateTodo(todoData.id, {"isDone": event.target.checked}); 
        });

        const description = document.createElement("textarea")
        description.placeholder = "Description";
        description.value = todoData.description;
        description.addEventListener("change", event => {
            todoRepository.updateTodo(todoData.id, {"description": event.target.value});
        });

        const comments = [];
        todoData.checklistItems.forEach(item => {
            const commentContainer = document.createElement("div");
            commentContainer.classList.add("comment-container");

            const comment = document.createElement("div");
            comment.textContent = item;

            const deleteImage = new Image();
            deleteImage.classList.add("comment-delete");
            deleteImage.src = DeleteIcon;
            deleteImage.addEventListener("click", deleteComment);

            commentContainer.appendChild(comment);
            commentContainer.appendChild(deleteImage);
            comments.push(commentContainer);

            deleteImage.dataset["todoID"] = todoData.id;
            deleteImage.dataset["index"] = comments.indexOf(commentContainer);
        });

        const addCommentContainer = document.createElement("div");
        addCommentContainer.classList.add("add-comment-container");

        const addImage = new Image();
        addImage.src = AddIcon;
        addImage.addEventListener("click", () => addComment(todoData));
        addImage.dataset["todoID"] = todoData.id;

        const addText = document.createElement("div");
        addText.textContent = "Add Comment";

        addCommentContainer.appendChild(addImage);
        addCommentContainer.appendChild(addText);        
        nameAndCheck.appendChild(checkbox);
        nameAndCheck.appendChild(taskName);
        primaryInfo.appendChild(nameAndCheck);
        primaryInfo.appendChild(description);

        comments.forEach(comment => {
            comment.dataset["index"] = comments.indexOf(comment);
            primaryInfo.appendChild(comment);
        });

        primaryInfo.appendChild(addCommentContainer);
    }

    const addComment = function(todoData) {
        let commentText = prompt("Enter comment text");

        if (commentText) {
            todoData.checklistItems.push(commentText);
            const newChecklist = todoData.checklistItems;
            todoRepository.updateTodo(todoData.id, {"checklistItems": newChecklist});
            
            renderExpandedTodo(todoData.id);
        }
    }

    const deleteComment = function(event) {
        const todoID = event.target.dataset["todoID"];
        const index = event.target.dataset["index"];

        const checklist = todoRepository.getTodoByID(todoID).checklistItems;
        checklist.splice(index, 1);

        todoRepository.updateTodo(todoID, {"checklistItems": checklist});
        renderExpandedTodo(todoID);
    }

    const setSecondaryInfo = function(todoData) {
        const projectDiv = document.createElement("div");
        
        const projectLabel = document.createElement("label");
        projectLabel.setAttribute("for", "projectInput");
        projectLabel.textContent = "Project";

        const projectInput = document.createElement("input");
        projectInput.type = "text";
        projectInput.id = "projectInput";
        projectInput.value = projectRepository.getProjectByID(todoData.projectID).name;
        projectInput.addEventListener("change", event => {
            projectRepository.updateProject(todoData.projectID, {"name": event.target.value})
            domManager.renderAllProjects();
        });

        projectDiv.appendChild(projectLabel);
        projectDiv.appendChild(projectInput);


        const dateDiv = document.createElement("div");

        const dateLabel = document.createElement("label");
        dateLabel.setAttribute("for", "dateInput");
        dateLabel.textContent = "Due Date";

        const dateInput = document.createElement("input");
        dateInput.type = "date";
        dateInput.id = "dateInput";
        dateInput.value = todoData.dueDate;
        dateInput.addEventListener("change", event => {
            todoRepository.updateTodo(todoData.id, {"dueDate": event.target.value});
            domManager.renderProjectTodos(todoData.projectID);
        });

        dateDiv.appendChild(dateLabel);
        dateDiv.appendChild(dateInput);


        const priorityDiv = document.createElement("div");

        const priorityLabel = document.createElement("label");
        priorityLabel.setAttribute("for", "priorityInput");
        priorityLabel.textContent = "Priority";

        const priorityInput = document.createElement("select");
        priorityInput.id = "priorityInput";
        priorityInput.addEventListener("change", event => {
            todoRepository.updateTodo(todoData.id, {"priority": event.target.value});
        });
        
        const option1 = document.createElement("option");
        option1.value = "None";
        option1.textContent = "None";
        const option2 = document.createElement("option");
        option2.value = "Low";
        option2.textContent = "Low";
        const option3 = document.createElement("option");
        option3.value = "Medium";
        option3.textContent = "Medium";
        const option4 = document.createElement("option");
        option4.value = "High";
        option4.textContent = "High";
        
        priorityInput.appendChild(option1);
        priorityInput.appendChild(option2);
        priorityInput.appendChild(option3);
        priorityInput.appendChild(option4);
        priorityInput.value = todoData.priority != "" ? todoData.priority : "None";

        priorityDiv.appendChild(priorityLabel);
        priorityDiv.appendChild(priorityInput);


        const deleteDiv = document.createElement("div");

        const deleteText = document.createElement("div");
        deleteText.textContent = "Delete Task";
        deleteText.classList.add("delete-text");

        const deleteTaskImage = new Image();
        deleteTaskImage.src = DeleteIcon;
        deleteTaskImage.dataset["todoID"] = todoData.id;
        deleteTaskImage.alt = "delete_task";
        deleteTaskImage.addEventListener("click", event => {
            if (confirm("Delete this task?")) {
                const todoID = event.target.dataset["todoID"];
                const projectID = todoRepository.getTodoByID(todoID).projectID;
                todoRepository.deleteTodo(todoID);
                domManager.renderProjectTodos(projectID);
                expandedTodo.toggleVisibility(false);
            }
        });

        deleteDiv.appendChild(deleteText);
        deleteDiv.appendChild(deleteTaskImage);

        secondaryInfo.appendChild(projectDiv);
        secondaryInfo.appendChild(dateDiv);
        secondaryInfo.appendChild(priorityDiv);
        secondaryInfo.appendChild(deleteDiv);
    }

    return { toggleVisibility, renderExpandedTodo }
})();

export { expandedTodo };