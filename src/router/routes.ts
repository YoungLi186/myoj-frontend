import { RouteRecordRaw } from "vue-router";
import HomeView from "@/views/ExampleView.vue";
import AdminView from "@/views/AdminView.vue";
import NoAuthView from "@/views/NoAuthView.vue";
import accessEnum from "@/access/accessEnum";
import UserLoginView from "@/views/user/UserLoginView.vue";
import UserRegisterView from "@/views/user/UserRegisterView.vue";
import UserLayout from "@/layouts/UserLayout.vue";
import AddQuestionView from "@/views/question/AddQuestionView.vue";
import ManageQuestionView from "@/views/question/ManageQuestionView.vue";
import QuestionView from "@/views/question/QuestionView.vue";
import ViewQuestionView from "@/views/question/ViewQuestionView.vue";
import QuestionSubmitView from "@/views/question/QuestionSubmitView.vue";
import UserInfoView from "@/views/user/UserInfoView.vue";
import UserManageView from "@/views/user/UserManageView.vue";

export const routes: Array<RouteRecordRaw> = [
  {
    path: "/user",
    name: "用户",
    component: UserLayout,
    meta: {
      hideInMenu: true,
    },
    children: [
      {
        path: "/user/login",
        name: "用户登录",
        component: UserLoginView,
      },
      {
        path: "/user/register",
        name: "用户注册",
        component: UserRegisterView,
      },
      {
        path: "/user/info/:id",
        name: "用户个人",
        component: UserInfoView,
      },
    ],
  },

  {
    path: "/",
    name: "题目列表",
    component: QuestionView,
  },
  {
    path: "/question/add",
    name: "创建题目",
    component: AddQuestionView,
    meta: {
      access: accessEnum.ADMIN,
    },
  },
  {
    path: "/question/submit",
    name: "题目提交记录",
    component: QuestionSubmitView,
  },

  {
    path: "/question/update",
    name: "更新题目",
    component: AddQuestionView,
    meta: {
      access: accessEnum.ADMIN,
      hideInMenu: true,
    },
  },
  {
    path: "/question/view/:id",
    name: "做题页面",
    component: ViewQuestionView,
    props: true,
    meta: {
      hideInMenu: true,
      access: accessEnum.USER,
    },
  },

  {
    path: "/question/manage",
    name: "管理题目",
    component: ManageQuestionView,
    meta: {
      access: accessEnum.ADMIN,
    },
  },
  {
    path: "/manageUser",
    name: "管理用户",
    component: UserManageView,
    meta: {
      access: accessEnum.ADMIN,
    },
  },
  {
    path: "/noAuth",
    name: "无权限",
    component: NoAuthView,
    meta: {
      hideInMenu: true,
    },
  },
  // {
  //   path: "/about",
  //   name: "about",
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () =>
  //     import(/* webpackChunkName: "about" */ "../views/AboutView.vue"),
  // },
];
