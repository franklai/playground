import { createRouter, createWebHistory } from "vue-router";

const routes = [
  {
    path: "/",
    name: "Home",
    component: () => import("../components/Home.vue"),
  },
  {
    path: "/login",
    name: "Login",
    component: () => import("../components/LoginForm.vue"),
  },
  {
    path: "/rss",
    name: "RSS",
    component: () => import("../components/RssList.vue"),
  },
];

export default createRouter({
  history: createWebHistory(),
  routes,
});