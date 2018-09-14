$(document).ready(function() {
  var todoList = {
    todos: [],
    // displayTodos: function() {
    //   if (this.todos.length === 0) {
    //     console.log("No todos at this time. Relax!");
    //   } else {
    //     for (var i = 0; i < this.todos.length; i++) {
    //       if (this.todos[i].todoStatus === true) {
    //         console.log('(x)', this.todos[i].todoText);
    //       } else {
    //         console.log('( )', this.todos[i].todoText);
    //       }
    //     }
    //   }
    // },
    addTodo: function(todo) {
      this.todos.push({
        todoText: todo,
        todoStatus: false
      });
    },
    updateTodo: function(index, todo) {
      this.todos[index - 1].todoText = todo;
    },
    deleteTodo: function(index) {
      this.todos.splice(index, 1);
    },
    toggleStatus: function(index) {
      var todo = this.todos[index - 1];
      todo.todoStatus = !todo.todoStatus;
    },
    toggleAll: function() {
      var counter = 0;
      for (var i = 0; i < this.todos.length; i++) {
        if (this.todos[i].todoStatus === true) {
          counter++;
        }
      }
      if (counter === this.todos.length) {
        for (var i = 0; i < this.todos.length; i++) {
          this.todos[i].todoStatus = false;
          // this.displayTodos()
        }
      } else {
        for (var i = 0; i <this.todos.length; i++) {
          this.todos[i].todoStatus = true;
          // this.displayTodos()
        }
      }
    }
  }

  var newDate = function () {
    var newDate = new Date();
    var dateString = newDate.toDateString();
    var toTime = newDate.toLocaleTimeString();
    return dateString + ' ' + toTime;
  };

  var view = {
    displayTodos: function () {
      var todoUl = document.querySelector('ul');
      todoUl.innerHTML = '';
      for(var i = 0; i < todoList.todos.length; i++) { //looping through all elements inside to do Array object. 
        var todoLi = document.createElement('li');
        todoLi.className = 'li'
        var todo = todoList.todos[i]
        var todoTextWithCompletion = ''
        if (todo.todoStatus === true) {
          todoTextWithCompletion = '(x)' + todo.todoText
          $('.li').css('text-decoration', 'line-through');
        } else {
          todoTextWithCompletion = '( )' + todo.todoText
        }
        
        todoLi.id = i;
        todoLi.textContent = todoTextWithCompletion
        todoLi.appendChild(this.deleteButton());
        todoUl.appendChild(todoLi);
      
      };
    },
    deleteButton: function () {
      var deleteBtn = document.createElement('button');
      deleteBtn.textContent = 'X '; 
      deleteBtn.className = 'deleteBtn'
      return deleteBtn;
      //can transfer this over to HTML with jquery methods. 
    },
    deleteItem: function (position) {
      todoList.deleteTodo(position)
      view.displayTodos();
    },
    toggleSelect: function () {
      var toggleComBtn = document.createElement('input');
      toggleComBtn.type = 'checkbox';
      toggleComBtn.className = 'checkBoxBtn';
      // toggleComBtn.value = 1; 
      return toggleComBtn;
    }
  };

  //code for onclick functionality 

  $('#displayTodos').on('click', function() {
    view.displayTodos();
  });

  $('#toggleAll').on('click', function() {
    todoList.toggleAll(); 
    view.displayTodos();
  });

  $('#addTodo').on('click', function() {
    todoList.addTodo(addTodoText.value);
    addTodoText.value = '';
    view.displayTodos();
  });

  $('#changeTodo').on('click', function() {
    todoList.updateTodo(changeTodoPosition.valueAsNumber, changeTodoText.value);
    changeTodoPosition.value = '';
    changeTodoText.value = '';
    view.displayTodos();
  });

  $('#uli').on('click', function(event) {
    var click = event.target
    if(click.className === 'li')
    todoList.updateTodo(parseInt(click.parentNode.id), changeTodoText.value);
    // changeTodoPosition.value = '';
    changeTodoText.value = '';
    view.displayTodos();
  });

  // $('#deleteTodo').on('click', function(position) {
  //  todoList.deleteTodo(position)
  //  view.displayTodos();
  // });

  $('#toggleComplete').on('click', function () {
    todoList.toggleStatus(toggleCompletedPos.valueAsNumber);
    toggleCompletedPos.value = '';
    view.displayTodos();
  });

  $('#uli').on('click', function(event) {
    // console.log(event) //this is to access the element;
    var clickElement = event.target;
    if(clickElement.className === 'deleteBtn')
      view.deleteItem(parseInt(clickElement.parentNode.id));  
  });
  console.log(view.deleteButton)




  todoList.addTodo('Need more sleep');
  todoList.addTodo('Work on jquery stuff and implement CRUDDY');
  todoList.addTodo('Build shelves for Kitchen and Bathroom');
  todoList.addTodo('Cook meals for the week because no TIME!!!');

  /*

  $(".add-text-btn").on("click", function(){

    // store values
    let inputKey = $(".user-input-title").val();
    let inputValue = $(".user-input-body").val();

    // clear values
    $(".user-input-title").val("");
    $(".user-input-body").val("");

    console.log(inputKey, inputValue);

    localStorage.setItem(inputKey, inputValue);
    // data-
    let itemHtml = '<div class="display-item" data-storage-key="'+inputKey+'"> ' + inputKey + ' ' +  localStorage.getItem(inputKey) + '</div>';
    $(".display").html(itemHtml);
    //console.log(localStorage);
    // how can we delegate this event to the outer html node?
    // https://learn.jquery.com/events/event-delegation/

    $(".display-item").on("click", function(e){
      // plop the key:value back into the input boxes

      // get the values from the the divs?
      console.log("key=> ", e.target.dataset.storageKey); // user-input-title
      localStorage.getItem(e.target.dataset.storageKey); // user-input-body

      // set those values in the form fields
      $(".user-input-title").val(e.target.dataset.storageKey);
      $(".user-input-body").val(localStorage.getItem(e.target.dataset.storageKey));
    });

  });



   // TODO add back in later
   // $(".user-input").on("keyup", function(){
   //   let inputValue = $(".user-input").val();
   //   localStorage.setItem("testStorage", inputValue);
   //   $(".display").text(localStorage.getItem("testStorage"));
   // });

   $(".del-text-btn").on("click", function() {
     alert('item deleted? check the console'); // maybe change to a window.confirm
     localStorage.removeItem( $('.user-input-title').val() ); // grab the title and plop here
     $(".user-input-title").val("");
     $(".user-input-body").val("");
     // clearing display? what if I have multiple items?
     // after item is removed from local storage, redisplay items from local storage
     // refresh from storage?
   });


   // iterative approach to adding items
   // store data as stringified array of objects
   // store data with individual keys
  // how do we get keys? research Object.keys

*/

});