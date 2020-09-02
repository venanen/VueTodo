import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
	state: {
		showStore: 321,
		todos: [],
		todoIndex: 0,
	},
	mutations: {
		addTodo: function(state, payload) {
			state.todos.push({ ...payload, id: state.todoIndex++, done: false});
		},
		removeTodo: function(state, payload) {
			let id = state.todos.indexOf(payload);
			state.todos.splice(id, 1);
		},
		doneTodo: function (state, payload) {
			let id = state.todos.indexOf(payload);
			state.todos[id]["done"] = true;
		},
	},
	actions: {},
	modules: {},
});
