import Vue from "vue";
import Router from "vue-router";
import Student from "../pages/student.vue";

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "/",
      name: "Student",
      component: Student
    }
  ]
});
