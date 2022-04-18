<template>
  <div id="app">
    <TodoHeader></TodoHeader>
    <TotoInput v-on:addTodo="addTodo"></TotoInput>
    <TodoList v-bind:propsdata="todoItems"></TodoList>
    <TodoFooter v-on:clearAll="clearAll"></TodoFooter>
  </div>
</template>
<script>
  import TodoHeader from './components/TodoHeader.vue';
  import TotoInput from './components/TotoInput.vue';
  import TodoList from './components/TodoList.vue';
  import TodoFooter from './components/TodoFooter.vue';

  export default {
    data(){
      return {
        todoItems : []
      }
    },
    components : {
      'TodoHeader' : TodoHeader,
      'TotoInput' : TotoInput,
      'TodoList' : TodoList,
      'TodoFooter' : TodoFooter
    },
    methods : {
      addTodo : function(newTodoItem) {
        localStorage.setItem(newTodoItem,newTodoItem);
        this.todoItems.push(newTodoItem);
      },
      clearAll(){
        localStorage.clear();
        this.todoItems = [];
      }
    },
    created(){
      if( localStorage.length > 0 ){
        for( var i=0; i < localStorage.length; i++ ){
          this.todoItems.push(localStorage.key(i));
        }
      }
    }
  };
</script>

<style>
  body {
    text-align: center;
    background-color: #F6F6F8;
  }
  input {
    border-style: groove;
    width: 200px;
  }
  button {
    border-style: groove;
  }
  .shadow {
    box-shadow: 5px 10px 10px rgba(0, 0, 0, 0.03);
  }
</style>
