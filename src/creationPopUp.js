import { domManager } from "./domManager.js";
import { expandedTodo } from "./expandedTodo.js";

const creationPopUp = (function() {   
    const body = document.getElementsByTagName("body")[0];
    const TASK_INPUT = "task";
    const PROJECT_INPUT = "project";
    const COMMENT_INPUT = "comment";

    /**
     * Creates a popup for creation of a new task, project, or comment
     * @param {String} inputType - "task" | "project" | "comment"
     */
    const createPopUp = function(inputType) {
        const popUp = document.createElement("div");
        popUp.id = "pop-up";

        const popUpForm = document.createElement("form");
        popUpForm.setAttribute("name", "pop-up");

        const inputLabel = document.createElement("label");

        switch (inputType) {
            case TASK_INPUT:
                inputLabel.textContent = "Enter task name";
                break;
            case PROJECT_INPUT:
                inputLabel.textContent = "Enter project name";
                break;
            case COMMENT_INPUT:
                inputLabel.textContent = "Enter comment";
                break;
        }

        inputLabel.setAttribute("name", "pop-up");
        inputLabel.setAttribute("for", "creation-input");

        const inputField = document.createElement("input");
        inputField.type = "text";
        inputField.setAttribute("name", "pop-up");
        inputField.id = "creation-input";

        const abortButton = document.createElement("button");
        abortButton.type = "button";
        abortButton.textContent = "Cancel";
        abortButton.addEventListener("click", () => {
            popUp.remove();
        });

        const confirmButton = document.createElement("button");
        confirmButton.setAttribute("name", "pop-up");
        confirmButton.type = "submit";
        confirmButton.textContent = "Add";
        confirmButton.addEventListener("click", () => {
            switch (inputType) {
                case TASK_INPUT:
                    domManager.addTodo(inputField.value);
                    break;
                case PROJECT_INPUT:
                    domManager.addProject(inputField.value);
                    break;
                case COMMENT_INPUT:
                    expandedTodo.addComment(inputField.value);
                    break;
            }
            popUp.remove();
        });

        popUp.appendChild(popUpForm);
        popUp.appendChild(inputLabel);
        popUp.appendChild(inputField);
        popUp.appendChild(abortButton);
        popUp.appendChild(confirmButton);

        body.appendChild(popUp);
    }

    return {createPopUp};
})();

export {creationPopUp}