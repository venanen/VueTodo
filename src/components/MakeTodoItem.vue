<template>
  <div id="todoForm">
    <TextInput v-model="todoText" v-on:keyup.enter="addTodo" />

    <button id="add" v-on:click="addTodo">Добавить</button>
  </div>
</template>
<script>
import TextInput from "./TextInput";
export default {
  components: { TextInput },
  data: function () {
    return {
      todoText: "",
    };
  },
  methods: {
    addTodo: function () {
      if (this.todoText !== "") {
        this.$store.commit("addTodo", { text: this.todoText });
        this.todoText = "";
      }
    },
  },
};
</script>

<style scoped>
#todoForm {
  display: inline-flex;
  justify-content: center;
  width: 100%;
  height: 33vh;
  align-items: flex-end;
}
#add {
  background: var(--white);
  outline: none;
  color: var(--blue);
  padding: 0.6em;
  border-radius: 4px;
  border: solid 1px var(--blue);
  font-size: 24px;
  transition: 100ms;
  margin: 0.6em;
}
#add:active {
  box-shadow: 0px 0px 27px 3px var(--blue);
  background: var(--blue);
  color: var(--white);
}
</style>
