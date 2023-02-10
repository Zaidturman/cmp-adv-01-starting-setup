import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import LoginView from "../view/LoginView.vue"

const routes = [
  {
    path: "/Login",
    name: "Login",
    component: LoginView,
  },

];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;