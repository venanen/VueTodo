<template>
  <div>
    <div id="mainContainerBg"></div>
    <MakeTodoItem />
    <TodosList />
  </div>
</template>

<script>
// import HeroBanner from "./components/HeroBanner.vue";

import MakeTodoItem from "./components/MakeTodoItem.vue";
import TodosList from "./components/TodosList.vue";
import store from "./store/index";
export default {
  data: () => ({ helloworld: "Hello World!", onKek: "lol" }),
  components: {
    MakeTodoItem,
    TodosList,
  },
  store,
};
</script>

<style>
:root {
  --red: #e53d00ff;
  --yellow: #ffe900ff;
  --white: #fcfff7ff;
  --green: #21a0a0ff;
  --blue: #046865ff;
}
</style>

<style scoped>
#lol {
  color: red;
}
#mainContainerBg {
  background-image: url("./assets/back1.jpg");
  position: fixed;
  width: 100vw;
  min-height: 100vh;
  left: 0px;
  top: 0px;
  z-index: -1;
  overflow-x: hidden;
  background-attachment: fixed;
  filter: blur(1px);
}
</style>
