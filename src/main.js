import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import "@/assets/tailwind.css";
import "@/scss/main.css";
import "@/scss/all.min.css";
// import "bootstrap";  
// import "bootstrap/dist/css/bootstrap.min.css";
const app = createApp(App);
import { createI18n } from "vue-i18n"; // Import createI18n for Vue 3
import enLocale from "@/Js/en.js";
import frLocale from "@/Js/fr.js";

const messages = {
  en: enLocale,
  fr: frLocale,
};
const i18n = createI18n({
  // Use createI18n to create the i18n instance
  locale: "en",
  fallbackLocale: "en",
  messages,
});
app.use(i18n);

app.use(router);

app.mount("#app");
