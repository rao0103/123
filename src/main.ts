import { createApp } from "vue";
import App from "./App.vue";
import "./registerServiceWorker";
import router from "./router";
import { Icon } from "@iconify/vue";
import Antd from "ant-design-vue";
import "ant-design-vue/dist/reset.css";
import "@/index.css";

const app = createApp(App);
// eslint-disable-next-line vue/multi-word-component-names
app.component("Icon", Icon);
app.use(router).mount("#app");
app.use(Antd);
