import Layout from "@/views/layout/Layout";

export default [
  {
    path: "",
    component: Layout,
    children: [
      {
        path: "/dashbord",
        name: "dashbord",
        meta: {
          title: "概览"
        },
        component: () => import("@/views/dashbord")
      }
    ]
  }
];
