// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from "vue";
import App from "./App";
import router from "./router";
import store from "./store";
import fastClick from "fastClick";
import ElementUI from "element-ui";

import "element-ui/lib/theme-chalk/index.css";
import "./config/utils";
import "./assets/css/reset.css";
import "./assets/css/common.css";

Vue.use(ElementUI);
fastClick.attach(document.body);
Vue.config.productionTip = false;

new Vue({
    el: "#app",
    router,
    store,
    components: { App },
    template: "<App/>"
});