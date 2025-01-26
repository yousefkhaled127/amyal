import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";

import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fas } from "@fortawesome/free-solid-svg-icons";
library.add(fas);
import Select from "primevue/select";
import PrimeVue from "primevue/config";
import "primeicons/primeicons.css";
import Aura from "@primevue/themes/aura";
import DatePicker from "primevue/datepicker";
import Password from "primevue/password";
import InputOtp from "primevue/inputotp";
import ToggleSwitch from "primevue/toggleswitch";

createApp(App)
  .use(PrimeVue, {
    theme: {
      preset: Aura,
    },
  })
  .component("fa", FontAwesomeIcon)
  .component("Select", Select)
  .component("DatePicker", DatePicker)
  .component("InputOtp", InputOtp)
  .component("Password", Password)
  .component("ToggleSwitch", ToggleSwitch)
  .use(router)
  .mount("#app");
