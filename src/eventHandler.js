//events (publish subscribe) pattern
const eventHandler = {
    events: {},
    subscribe: function (eventName, fn) {
      this.events[eventName] = this.events[eventName] || [];
      this.events[eventName].push(fn);
    },
    remove: function(eventName, fn) {
      if (this.events[eventName]) {
        for (var i = 0; i < this.events[eventName].length; i++) {
          if (this.events[eventName][i] === fn) {
            this.events[eventName].splice(i, 1);
            break;
          }
        };
      }
    },
    invoke: function (eventName, data) {
      if (this.events[eventName]) {
        this.events[eventName].forEach(function(fn) {
          fn(data);
        });
      }
    }
};

const PROJECT_UPDATED = "OnProjectUpdate";
const TODO_UPDATED = "OnTodoUpdate";
const NEW_PROJECT = "OnNewProject";