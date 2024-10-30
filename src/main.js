import { createApp } from "vue";
import "./style.css";
import App from "./App.vue";
import "purecss/build/pure.css";
import { createRouter, createWebHistory } from "vue-router";

// For Vue routers.
import HomeView from "./HomeView.vue";
import ButtonsView from "./ButtonsView.vue";
import FormsView from "./FormsView.vue";
import MenusView from "./MenusView.vue";

const routes = [
  { path: "/buttons", name: "buttons", component: ButtonsView },
  { path: "/forms", name: "forms", component: FormsView },
  { path: "/menus", name: "menus", component: MenusView},
  { path: "/", name: "home", component: HomeView },
];
const router = createRouter({
  history: createWebHistory(),
  routes,
});

createApp(App).use(router).mount("#app");
