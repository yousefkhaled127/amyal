// import { faChildren } from "@fortawesome/free-solid-svg-icons";
import { createRouter, createWebHistory } from "vue-router";
// import { from } from "core-js/core/array";
// import { meta } from "@babel/eslint-parser";
import MyPending from "@/views/MyPending.vue";
import PaymentPending from "@/views/PaymentPending.vue";
import MyCurrent from "@/views/MyCurrent.vue";
import MyFinished from "@/views/MyFinished.vue";
const routes = [
  {
    path: "/",
    name: "home",
    component: () => import("../views/HomeView.vue"),
    meta: {
      title: "home",
    },
  },
  {
    path: "/aboutsite",
    name: "aboutsite",
    component: () => import("../views/AboutSite.vue"),
    meta: {
      title: "aboutsite",
    },
  },
  {
    path: "/OurGoal",
    name: "OurGoal",
    component: () => import("../views/OurGoal.vue"),
    meta: {
      title: "OurGoal",
    },
  },
  {
    path: "/ContentCars",
    name: "ContentCars",
    component: () => import("../views/ContentCars.vue"),
    meta: {
      title: "ContentCars",
    },
  },
  {
    path: "/ModilCar",
    name: "ModilCar",
    component: () => import("../views/ModilCar.vue"),
    meta: {
      title: "ModilCar",
    },
  },
  {
    path: "/ConnectUs",
    name: "ConnectUs",
    component: () => import("../views/ConnectUs.vue"),
    meta: {
      title: "ConnectUs",
    },
  },
  {
    path: "/RentalreQuest",
    name: "RentalreQuest",
    component: () => import("../views/RentalreQuest.vue"),
    meta: {
      title: "ConnectUs",
    },
  },
  {
    path: "/LoginUser",
    name: "LoginUser",
    component: () => import("../views/LoginUser.vue"),
    meta: {
      title: "LoginUser",
    },
  },
  {
    path: "/NewRegister",
    name: "NewRegister",
    component: () => import("../views/NewRegister.vue"),
    meta: {
      title: "NewRegister",
    },
  },
  {
    path: "/RestorePassword",
    name: "RestorePassword",
    component: () => import("../views/RestorePassword.vue"),
    meta: {
      title: "RestorePassword",
    },
  },
  {
    path: "/RestorepasswordCode",
    name: "RestorepasswordCode",
    component: () => import("../views/RestorepasswordCode.vue"),
    meta: {
      title: "RestorepasswordCode",
    },
  },
  {
    path: "/ComPlaints",
    name: "ComPlaints",
    component: () => import("../views/ComPlaints.vue"),
    meta: {
      title: "ComPlaints",
    },
  },
  {
    path: "/TermsConditions",
    name: "TermsConditions",
    component: () => import("../views/TermsConditions.vue"),
    meta: {
      title: "TermsConditions",
    },
  },
  {
    path: "/OrderDetails",
    name: "OrderDetails",
    component: () => import("../views/OrderDetails.vue"),
    meta: {
      title: "OrderDetails",
    },
  },
  {
    name: "PendingRequst",
    path: "/PendingRequst",
    component: () => import("../views/PendingRequst.vue"),
    meta: {
      title: "PendingRequst",
    },
    redirect: {
      name: "MyPending",
    },
    children: [
      {
        path: "my-pending",
        name: "MyPending",
        component: MyPending,
      },
      {
        path: "payment-pending",
        name: "PaymentPending",
        component: PaymentPending,
      },
      {
        name: "MyCurrent",
        path: "my-current",
        component: MyCurrent,
      },
      {
        path: "my-finished",
        name: "MyFinished",
        component: MyFinished,
      },
    ],
  },
  {
    path: "/SettingsProject",
    name: "SettingsProject",
    component: () => import("../views/SettingsProject.vue"),
    meta: {
      title: "SettingsProject",
    },
  },
  {
    path: "/MyWallet",
    name: "MyWallet",
    component: () => import("../views/MyWallet.vue"),
    meta: {
      title: "MyWallet",
    },
  },
  {
    path: "/MyProfile",
    name: "MyProfile",
    component: () => import("../views/MyProfile.vue"),
    meta: {
      title: "MyProfile",
    },
  },
  {
    path: "/EditProfile",
    name: "EditProfile",
    component: () => import("../views/EditProfile.vue"),
    meta: {
      title: "EditProfile",
    },
  },
  {
    path: "/ChangemobileNumber",
    name: "ChangemobileNumber",
    component: () => import("../views/ChangemobileNumber.vue"),
    meta: {
      title: "ChangemobileNumber",
    },
  },
  {
    path: "/ChangeEmail",
    name: "ChangeEmail",
    component: () => import("../views/ChangeEmail.vue"),
    meta: {
      title: "ChangeEmail",
    },
  },
  {
    path: "/ChangePassword",
    name: "ChangePassword",
    component: () => import("../views/ChangePassword.vue"),
    meta: {
      title: "ChangePassword",
    },
  },
  {
    path: "/MyNotifications",
    name: "MyNotifications",
    component: () => import("../views/MyNotifications.vue"),
    meta: {
      title: "MyNotifications",
    },
  },
  {
    path: "/MyNotificationstwo",
    name: "MyNotificationstwo",
    component: () => import("../views/MyNotificationstwo.vue"),
    meta: {
      title: "MyNotificationstwo",
    },
  },
  {
    path: "/CarReviews",
    name: "CarReviews",
    component: () => import("../views/CarReviews.vue"),
    meta: {
      title: "CarReviews",
    },
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

router.beforeEach((to, from, next) => {
  document.title = to.meta.title;
  // console.log(from);
  next();
});

export default router;
