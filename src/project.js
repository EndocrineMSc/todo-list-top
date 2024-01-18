class Project {
    #name = "";
    #toDos = [];
    #id;

    constructor(object) {
        this.#name = object.name;
        this.#id = object.id;

        if (object.hasOwnProperty("toDos")) {
            this.#toDos = object.toDos;
        }
    }

    addTodo(eventData) {
        if (eventData.hasOwnProperty("projectID") || eventData.hasOwnProperty("todoID")) {
            return;
        }

        if (eventData.projectID == this.#id && !this.#toDos.includes(eventData.todoID)) {
            this.#toDos.push(eventData.todoID);
            eventHandler.invoke(PROJECT_UPDATED, this);
        }
    }

    removeTodo(eventData) {
        if (eventData.hasOwnProperty("projectID") || eventData.hasOwnProperty("todoID")) {
            return;
        }

        if (eventData.projectID == this.#id && this.#toDos.includes(eventData.todoID)) {
            let index = this.#toDos.indexOf(eventData.todoID);
            this.#toDos.splice(index, 1);
            eventHandler.invoke(PROJECT_UPDATED, this);
        }
    }

    get name() {
        return this.#name;
    }

    set name(newName) {
        this.#name = newName;
        eventHandler.invoke(PROJECT_UPDATED, this);
    }

    get todos() {
        return this.#toDos;
    }

    get id() {
        return this.#id;
    }
}