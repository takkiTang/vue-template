import Layout from "@/views/layout/Layout";

export default [
  {
    path: "/set",
    name: "set",
    meta: {
      title: "系统设置"
    },
    component: Layout,
    children: [
      {
        path: "permission",
        name: "permission",
        meta: {
          title: "账户权限"
        },
        component: () => import("@/views/set/permission")
      }
    ]
  }
];
