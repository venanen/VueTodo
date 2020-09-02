<template>
  <div id="todoListContainer">
    <div id="todoList">
      <transition-group name="list" tag="p">
        <ul key="ul" v-if="isShowTodos">
          <transition-group name="list" tag="p">
            <li v-for="todo in this.$store.state.todos" v-bind:key="todo.id">
              <button class="remove" @click="removeTodo(todo)">x</button>
              <button v-if="!todo.done" class="done" @click="doneTodo(todo)">D</button>
              <span v-bind:class="{ doneTodo: todo.done }">{{ todo.text }}</span>
            </li>
          </transition-group>
        </ul>
        <div id="emptyList" key="ekse" v-else>Лист пустой :(</div>
      </transition-group>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    removeTodo: function (id) {
      this.$store.commit("removeTodo", id);
    },
    doneTodo: function (id) {
      this.$store.commit("doneTodo", id);
    },
  },
  computed: {
    isShowTodos: function () {
      return this.$store.state.todos.length > 0;
    },
  },
};
</script>
<style>
#todoListContainer {
  display: inline-flex;
  justify-content: center;
  width: 100%;
}
#todoList {
  width: 55vw;
}
li {
  display: block;
  background: var(--white);
  padding: 10px;
  color: var(--blue);
  border-radius: 4px;
  border: solid 1px var(--blue);
  width: 100%;
  margin-top: 3px;
  font-size: 36px;
}
button.remove {
  background: var(--white);
  color: var(--red);
  /* padding: 0.6em; */
  border-radius: 4px;
  border: solid 1px var(--red);
  font-size: 24px;
  transition: 100ms;
  /* margin: 0.6em; */
  font-weight: 100;
  outline: none;
  margin-right: 3px;
  transition: 200ms;
}
button.remove:active {
  background: var(--red);
  color: var(--white);
}
button.done {
  background: var(--white);
  color: var(--green);
  /* padding: 0.6em; */
  border-radius: 4px;
  border: solid 1px var(--green);
  font-size: 24px;
  transition: 100ms;
  /* margin: 0.6em; */
  font-weight: 100;
  outline: none;
  margin-right: 1em;
  transition: 200ms;
}
button.done:active {
  background: var(--green);
  color: var(--white);
}
.doneTodo {
  text-decoration: line-through;
  color: #00232275;
}
.list-item {
  display: inline-block;
  margin-right: 10px;
}
.list-enter-active,
.list-leave-active {
  transition: all 300ms;
}
.list-enter, .list-leave-to /* .list-leave-active до версии 2.1.8 */ {
  opacity: 0;
  transform: translateY(30px);
}
#emptyList {
  display: block;
  background: var(--white);
  padding: 10px;
  color: var(--blue);
  border-radius: 4px;
  border: solid 1px var(--blue);
  width: 100%;
  margin-top: 3px;
  font-size: 36px;
}
</style>
