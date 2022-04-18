<template>
  <section>
    <transition-group name="list" tag="ul">
      <li v-for="(todoItem,index) in propsdata" v-bind:key="todoItem" class="shadow">
        <i class="checkBtn fas fa-check" aria-hidden="true"></i>
        {{ todoItem }}
        <span class="removeBtn" type="button" @click="removeTodo(todoItem,index)">
          <i class="far fa-trash-alt" aria-hidden="true"></i>
        </span>
      </li>
    </transition-group>
  </section>
</template>
<script>
  export default {
    props : ['propsdata'],
    methods : {
      removeTodo(todoItem,index){
        // 상위 컴포넌트 App 에게 전달받은  propsdata 를 여기서 직접 수정해도
        // 전달해준 App의 todoItems 데이터 변경이 가능하다

        // 책에서 추천해준 방법은 데이터를 직접적으로 정의한 App에서 removeTodo
        // 메서드를 만들고, 여기서는 this.$emit('removeTodo',todoItem,index)
        // 를 시키는 것이다.

        // 여기서도 처리 자체는 가능한것 같아서 남겨둔 것 뿐임.
        console.log(todoItem+","+index);
        localStorage.removeItem(todoItem);
        this.propsdata.splice(index,1);
      }
    }
  };
</script>
<style>
  ul {
    list-style-type: none;
    padding-left: 0px;
    margin-top: 0;
    text-align: left;
  }
  li {
    display: flex;
    min-height: 50px;
    height: 50px;
    line-height: 50px;
    margin : 0.5rem 0;
    padding: 0 0.9rem;
    background: white;
    border-radius: 5px;
  }
  .checkBtn{
    line-height: 45px;
    color: #62acde;
    margin-right: 5px;
  }
  .removeBtn{
    margin-left: auto;
    color: #de4343;
  }
</style>
<style scoped>
  .list-enter-active, .list-leave-active {
    transition: all 1s;
  }
  .list-enter, .list-leave-to {
    opacity: 0;
    transform: translate(30px);
  }
</style>
