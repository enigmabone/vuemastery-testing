import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    user: { id: "abc123", name: "Kyle Miller" },
    categories: [
      "sustainability",
      "nature",
      "animal welfare",
      "housing",
      "education"
    ],
    todos: [
      { id: 1, text: "...", done: true },
      { id: 2, text: "...", done: false },
      { id: 3, text: "...", done: true },
      { id: 4, text: "...", done: false }
    ],
    events: [
      { id: 1, title: "...", organizer: "..." },
      { id: 1, title: "...", organizer: "..." },
      { id: 1, title: "...", organizer: "..." },
      { id: 1, title: "...", organizer: "..." }
    ]
  },
  mutations: {},
  actions: {},
  getters: {
    catLength: state => {
      return state.categories.length;
    },
    doneTodos: state => {
      return state.todos.filter(todo => todo.done);
    },
    activeTodosCount: state => {
      return state.todos.filter(todo => !todo.done).length;
    },
    getEventById: state => id => {
      return state.events.find(event => event.id === id);
    }
  },
  modules: {}
});
