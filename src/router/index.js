import Vue from "vue";
import VueRouter from "vue-router";
import EventList from "../views/EventList.vue";
import EventShow from "../views/EventShow.vue";
import EventCreate from "../views/EventCreate.vue";
import User from "../views/User.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "EventList",
    component: EventList
  },
  {
    path: "/event/:id",
    name: "EventShow",
    component: EventShow,
    props: true
  },
  {
    path: "/event/create",
    name: "EventCreate",
    component: EventCreate
  },
  {
    path: "/user/:username",
    name: "User",
    component: User,
    props: true
  }
];

const router = new VueRouter({
  mode: "history",
  routes
});

export default router;
