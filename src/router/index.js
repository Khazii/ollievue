import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "home",
    component: Home
  },
  {
    path: "/about",
    name: "about",
    component: () => import("../views/About.vue")
  },
  {
    path: "/contact",
    name: "contact",
    component: () => import("../views/Contact.vue")
  },
  {
    path: "/concepts",
    name: "concepts",
    component: () => import("../views/Concepts.vue")
  },
  {
    path: "/d2",
    name: "d2",
    component: () => import("../views/D2Api.vue")
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
