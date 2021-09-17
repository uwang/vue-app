import { createApp } from "vue";
import Antd from "ant-design-vue";
import App from "./App.vue";
import router from "./router";

const app = createApp(App);
app.config.productionTip = false;
app.use(router);
app.use(Antd);
app.mount("#app");
