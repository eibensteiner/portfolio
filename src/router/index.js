import Vue from "vue";
import VueRouter from "vue-router";
import experience from "../views/experience";

Vue.use(VueRouter);

const routes = [
  {
    path: "/experience",
    name: "experience",
    component: experience
  }
];

const router = new VueRouter({
  routes
});

export default router;
