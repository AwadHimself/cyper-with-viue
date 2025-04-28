import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'
import PrimeVue from 'primevue/config';
import App from './App.vue'
import router from './router'
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { far } from '@fortawesome/free-regular-svg-icons'
import ToastService from 'primevue/toastservice';
import Aura from '@primeuix/themes/aura';

library.add(fas, far)

const app = createApp(App)


app.use(PrimeVue, {
    theme: {
        preset: Aura,
        options: {
            prefix: 'p',
            darkModeSelector: 'system',
            cssLayer: false
        }
    }
});


app.use(ToastService);


app.use(createPinia());


app.use(router);


app.component('font-awesome-icon', FontAwesomeIcon);


app.mount('#app');
