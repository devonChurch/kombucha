import "./set-public-path";
import Vue from "vue";
import singleSpaVue from "single-spa-vue";
import App from "./App.vue";
import router from "./router";

Vue.config.productionTip = false;

const vueLifecycles = singleSpaVue({
  Vue,
  appOptions: {
    router,
    render: (h) => h(App),
    // el: '#a-special-container',
  },
});

export const bootstrap = vueLifecycles.bootstrap;
export const mount = vueLifecycles.mount;
export const unmount = vueLifecycles.unmount;
