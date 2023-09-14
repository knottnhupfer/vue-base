import { createApp } from 'vue'
import { createVuestic } from 'vuestic-ui'
import { createPinia } from 'pinia'
import App from './App.vue'
import i18n from './i18n'
import router from './router'
import vuesticGlobalConfig from './services/vuestic-ui/global-config'

const app = createApp(App)

app.use(router)
app.use(i18n)
app.use(createVuestic({ config: vuesticGlobalConfig }))

app.use(createPinia())
app.mount('#app')
