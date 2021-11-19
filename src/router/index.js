import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "",
    redirect: "/Lista",
    component: Home,
    children: [
      {
        path: "/Lista",
        name: "Lista",
        component: () =>
          import(/* webpackChunkName: "lista" */ "../views/List.vue"),
      },
      {
        path: "/Kedvencek",
        name: "Kedvencek",
        component: () =>
          import(/* webpackChunkName: "kedvencek" */ "../views/Favourites.vue"),
      },
    ],
  },

  {
    path: "/Details/:id",
    props: true,
    name: "Details",
    component: () =>
      import(/* webpackChunkName: "details" */ "../views/Details.vue"),
  },
];

const router = new VueRouter({
  routes,
});

export default router;
