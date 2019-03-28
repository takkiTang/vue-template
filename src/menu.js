/**
 * 设置菜单入口
 * @param path        路径(必填 路由一致)
 * @param title       菜单标题(必填)
 * @param children    子菜单(非必填)
 */
const menuMap = [
  {
    title: "概览",
    path: "/dashbord"
  },
  {
    title: "账户设置",
    path: "/set",
    children: [
      {
        path: "permission",
        title: "权限设置"
      }
    ]
  }
];

export default menuMap;
