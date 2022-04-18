<template>
  <div class="inputBox shadow">
    <input type="text" v-model="newTodoItem" v-on:keyup.enter="addTodo" placeholder="Type what you have to do">
    <span class="addContainer" @click="addTodo">
      <i class="addBtn fas fa-plus" aria-hidden="true"></i>
    </span>

    <modal v-if="show" @close="show = false">
      <h3 slot="header">경고</h3>
      <span slot="body">할 일을 입력하세요.</span>
      <span slot="footer" @click="show = false">
        <button>확인</button>
        <i classs="closeModalBtn fas fa-fimes" aria-hidden="true"></i>
      </span>
    </modal>
  </div>
</template>
<script>
  import Modal from './common/Modal.vue'

  export default {
    data() {
      return {
        newTodoItem : ''
        ,show : false
      }
    },
    methods : {
      // name : function(){} ... ==  name() {}
      addTodo : function() {
        if( this.newTodoItem != "" ){
          var value = this.newTodoItem && this.newTodoItem.trim();
          this.$emit('addTodo',value);
          this.clearInput();
        }else{
          this.show = !this.show;
        }
      },
      clearInput() {
        this.newTodoItem = '';
      }
    },
    components : {
      Modal : Modal
    }
  };
</script>
<style scoped>
  input:focus {
    outline: none;
  }
  .inputBox{
    background: white;
    height: 50px;
    line-height: 50px;
    border-radius: 5px;
  }
  .inputBox input{
    border-style: none;
    font-size: 0.9rem;
  }
  .addContainer{
    float:right;
    background: linear-gradient(to right, #6478FB, #8763FB);
    display: block;
    width: 3rem;
    border-radius: 0 5px 5px 0;
  }
  .addBtn{
    color: white;
    vertical-align: middle;
  }
</style>
