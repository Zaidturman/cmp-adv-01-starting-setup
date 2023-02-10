import { createApp } from 'vue';
import VueRouter from 'vue-router';

import App from './App.vue';
import TheHeader from './components/TheHeader.vue';
import BaseBadge from './components/BaseBadge.vue';
import UserInfo from './components/UserInfo.vue';

const app = createApp(App);

app.component('the-header', TheHeader);
app.component('base-badge', BaseBadge);
app.component('user-info', UserInfo);
app.use(VueRouter);
app.mount('#app');
 