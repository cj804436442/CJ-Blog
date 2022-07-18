import Vue from "vue";
import Router from "vue-router";
import Student from "../pages/student.vue";
import MainPage from "../pages/mainPage.vue";

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "/",
      name: "Student",
      component: Student
    },
    {
      path: "/MainPage",
      name: "MainPage",
      component: MainPage
    }
  ]
});
