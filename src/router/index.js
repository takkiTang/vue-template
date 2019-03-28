import Vue from "vue";
import Router from "vue-router";

Vue.use(Router);

function getRoute() {
  let routerMap = [];

  const routerContext = require.context("./", true, /\.js$/);

  routerContext.keys().forEach(route => {
    if (route.startsWith("./index")) return;
    const routerModule = routerContext(route);
    routerMap = [
      ...routerMap,
      ...(routerModule.default || routerModule),
      {
        path: "*",
        redirect: "/dashbord"
      }
    ];
  });
  return routerMap;
}

const constantRouterMap = getRoute();

const router = new Router({
  routes: constantRouterMap
});

export default router;
