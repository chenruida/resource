import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import { Card, Row, Col, Pagination, Image } from "element-ui";
import axios from "axios";

Vue.config.productionTip = false;

Vue.use(Card);
Vue.use(Row);
Vue.use(Col);
Vue.use(Image);
Vue.use(Pagination);
Vue.prototype.$axios = axios;

Vue.prototype.RESOURCE_BASE_URL = "http://121.89.215.206:9000/";
Vue.prototype.$axios.defaults.baseURL = "http://121.89.215.206:8002";

new Vue({
  router,
  render: (h) => h(App),
}).$mount("#app");
