export const Todo = function(object) {
    this.name = object.name;
    this.id = object.id;
    this.projectID = object.projectID;
    this.description = "";
    this.dueDate = "";
    this.priority = "";
    this.checklistItems = [];
    this.isDone = false;
    
    if (object.hasOwnProperty("description")) {
        this.description = object.description;
    }

    if (object.hasOwnProperty("dueDate")) {
        this.dueDate = object.dueDate;
    }

    if (object.hasOwnProperty("priority")) {
        this.priority = object.priority;
    }

    if (object.hasOwnProperty("checkListItems")) {
        this.checklistItems = object.checklistItems;  
    }

    if (object.hasOwnProperty("isDone")) {
        this.isDone = object.isDone;
    }

    const addChecklistItem = function(text) {
        this.checklistItems.push(text);
    }

    const removeChecklistItem = function(index) {
        if (this.checklistItems.length - 1 >= index) {
            this.checklistItems.splice(index, 1);
        }
    }
}