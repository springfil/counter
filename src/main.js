import { createApp } from 'vue'
import App from './App.vue'
import Component from './Component'

const app = createApp(App);
app.component('my-component', Component);
app.mount("#app");
