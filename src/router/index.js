import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "",
    redirect: '/Lista',
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
    }
    ]
  },

  {
    path: "/Details",
    name: "Details",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "details" */ "../views/Details.vue"),
  },
];

const router = new VueRouter({
  routes,
});

export default router;
