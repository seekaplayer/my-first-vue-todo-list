var app = new Vue({
  el: "#app",
  data: {
    todos: [],
    newTodoItem: "",
    alertMessage: ""
  },
  methods: {
    addTodo: function() {
      if (this.newTodoItem) {
        this.todos.push({ text: this.newTodoItem, isEditing: false });
        this.alertMessage = "";
        this.newTodoItem = null;
      } else {
        this.alertMessage = "You need to type something in!";
      }
    },
    deleteTodo: function(index) {
      this.todos.splice(index, 1);
    }
  }
});
