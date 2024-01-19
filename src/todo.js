export const Todo = function(object) {
    this.name = object.name;
    this.id = object.id;
    this.projectID = object.projectID;
    this.checklistItems = [];
    
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

    const addChecklistItem = function(text) {
        this.checklistItems.push(text);
    }

    const removeChecklistItem = function(index) {
        if (this.checklistItems.length - 1 >= index) {
            this.checklistItems.splice(index, 1);
        }
    }
}