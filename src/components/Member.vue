<template>
  <li class="todo-app__item">
    <div class="todo-app__checkbox">
      <input type="checkbox" :id=name v-model="checkboxState">
      <label :for=name></label>
    </div>
    <h1 class="todo-app__item-detail">{{name}}</h1>
    <h1>{{amount}}</h1>
  </li>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    index: Number,
    name: String,
    state: Boolean,
    amount: Number
  },
  data(){
    return{
      checkboxState: this.state
    }
  },
  watch: {
    checkboxState(){
      this.$emit('checkbox',this.index)
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.todo-app__item {
    position: relative;
    width: 90%;
    min-height: 5em;
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
    background: white;
    border: 1px solid rgba(0, 0, 0, 0.089);
    border-top: 0;
}
.todo-app__checkbox {
    width: 30px;
    height: 30px;
    background: #ddd;
    margin: 15px;
    border-radius: 100%;
    position: relative;
    box-shadow: 0px 1px 3px rgba(0, 0, 0, 0.312);
}
.todo-app__checkbox label {
    width: 20px;
    height: 20px;
    border-radius: 100px;

    transition: all 0.5s ease;
    cursor: pointer;
    position: absolute;
    top: 5px;
    left: 5px;
    z-index: 1;

    background: rgba(99, 99, 99, 0.698);
    box-shadow: inset 0px 1px 3px rgba(0, 0, 0, 0.312);
}

.todo-app__checkbox input[type='checkbox']:checked + label {
    background: #26ca299b;
}

.todo-app__item-detail {
    font-weight: 300;
    overflow-wrap: break-word;
    width: 90%;
    transition: opacity 0.3s;
    height: 100%;
}
input[type='checkbox'] {
    visibility: hidden;
}
</style>
