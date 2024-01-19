import { Todo } from "./todo.js";

class TodoRepository {
    #todoCounterKey = "todoCounter";
    #todosKey = "todos";

    constructor() {
        if (!localStorage.getItem(this.#todoCounterKey)) {
            localStorage.setItem(this.#todoCounterKey, "0");
        } 
    }

    //#region Create
    createNewTodo(todoName, projectID) {
        let todoCounter = this.#getTodoCounter();

        const todos = this.getAllTodos();
        let todo = new Todo({name: todoName, projectID: projectID, id: todoCounter});
        todos.push(todo);
        let todosJSON = JSON.stringify(todos);

        localStorage.setItem(this.#todosKey, todosJSON);

        todoCounter++;
        this.#setTodoCounter(todoCounter);

        return todo;
    }
    //#endregion

    //#region Read
    getAllTodos() {
        const todosJSON = localStorage.getItem(this.#todosKey);
        return todosJSON ? JSON.parse(todosJSON) : [];
    }

    getTodosByProjectID(projectID) {
        let todos = this.getAllTodos();
        return todos.filter(todo => todo.projectID == projectID);
    }

    getTodoByID(todoID) {
        let todos = this.getAllTodos();
        return todos.find(todo => todo.id == todoID);
    }

    #getTodoCounter(){
        return localStorage.getItem(this.#todoCounterKey);
    }

    #setTodoCounter(valueString) {
        localStorage.setItem(this.#todoCounterKey, valueString);
    }
    //#endregion

    //#region Update
    updateTodo(todoID, updatedData) {
        let todo = this.getTodoByID(todoID);
        if (todo) {
            let oldTodoJSON = JSON.stringify(todo);

            let dataKeys = Object.keys(updatedData);
            dataKeys.forEach(key => {
                todo[key] = updatedData[key];
            });
    
            let newTodoJSON = JSON.stringify(todo);
            let todosJSON = localStorage.getItem(this.#todosKey);
            let newTodosJSON = todosJSON.replace(oldTodoJSON, newTodoJSON);
            localStorage.setItem(this.#todosKey, newTodosJSON);
    
            return todo;
        }
        return null;
    }
    //#endregion

    //#region Destroy
    deleteTodo(todoID) {
        let todos = this.getAllTodos();
        for (let i = 0; i < todos.length; i++) {
            let storageID = todos[i].id;
            if (storageID == todoID) {
                todos.splice(i, 1);
                break;
            }
        }
        localStorage.setItem(this.#todosKey, JSON.stringify(todos));
    }

    deleteProjectTodos(projectID) {
        let todos = this.getAllTodos();
        let newTodos = todos.filter(todo => todo.projectID != projectID);
        localStorage.setItem(this.#todosKey, JSON.stringify(newTodos));
    }
    //#endregion
}

const todoRepository = new TodoRepository();

export { todoRepository };
