import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import "./assets/tailwind.css";
import VueSplide from '@splidejs/vue-splide';

createApp(App).use(router).use(VueSplide).mount("#app");
