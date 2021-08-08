import { createRouter, createWebHistory } from "vue-router";

import { isLoginned } from "../helpers/login";

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

const router = createRouter({
  history: createWebHistory(),
  routes,
});

router.beforeEach((to, from, next) => {
  if (!isLoginned() && to.name !== "Login") {
    next({ name: "Login" });
  } else {
    next();
  }
});

export default router;
