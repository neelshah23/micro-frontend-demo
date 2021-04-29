import { createApp } from 'vue'
import App from './App.vue'
import "./assets/web-components";
import "./assets/styles.css";

const app = createApp(App);
app.config.isCustomElement = tag => tag.startsWith('esi:include')
app.mount('#app')
