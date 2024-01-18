class Todo {
    #name = "";
    #description = "";
    #dueDate;
    #priority = "";
    #checklistItems = [];
    #id;

    constructor(object) {
        this.#name = object.name;
        this.#id = object.id;

        if (object.hasOwnProperty("description"))
            this.#description = object.description;

        if (object.hasOwnProperty("dueDate"))
            this.#dueDate = object.dueDate;
        
        if (object.hasOwnProperty("priority"))
            this.#priority = object.priority;

        if (object.hasOwnProperty("checkListItems"))
            this.#checklistItems = object.checklistItems;
    }

    get name() { return this.#name; }
    set name(newName) {
        this.#name = newName;
        eventHandler.invoke(TODO_UPDATED, this);
    }

    get description() { return this.#description; }
    set description(newDescription) {
        this.#description = newDescription;
        eventHandler.invoke(TODO_UPDATED, this);
    }

    get dueDate() { return this.#dueDate; }
    set dueDate(newDueDate) {
        this.#dueDate = newDueDate;
        eventHandler.invoke(TODO_UPDATED, this);
    }

    get priority() { return this.#priority; }
    set priority(newPriority) {
        this.#priority = newPriority;
        eventHandler.invoke(TODO_UPDATED, this);
    }

    get id() { return this.#id; }
    get checklistItems() { return this.#checklistItems };

    addChecklistItem(text) {
        this.#checklistItems.push(text);
    }

    removeChecklistItem(index) {
        if (this.#checklistItems.length - 1 >= index) {
            this.#checklistItems.splice(index, 1);
            eventHandler.invoke(TODO_UPDATED, this);
        }
    }
}