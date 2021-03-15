import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home";
import Details from "../views/Details";

const routes = [
  {
    path: "/books",
    name: "Home",
    component: Home,
  },
  {
    path: "/books/:id",
    name: "Details",
    component: Details,
  },
  {
    path: '/',
    redirect: '/books',
  }
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
