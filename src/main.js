// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from "vue";
import App from "./App";
import router from "./router";
import * as service from "./service";
import $message from "../common/components/message";
import { confirm, alert, prompt } from "../common/components/modal";
import element from "element-ui";
import "element-ui/lib/theme-chalk/index.css";
import "./assets/iconfont/iconfont.css";
Vue.use(element);
Vue.config.productionTip = false;
Vue.prototype.$service = service;
Vue.prototype.$message = $message;
Vue.prototype.$confirm = confirm;
Vue.prototype.$alert = alert;
Vue.prototype.$prompt = prompt;
Vue.prototype.$loading = function(is = true) {
  this && this.$root && this.$root.$emit("loading", is);
};
/* eslint-disable no-new */
new Vue({
  el: "#app",
  router,
  components: { App },
  template: "<App/>"
});
