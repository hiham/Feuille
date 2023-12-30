/* eslint-disable */

import { createApp } from 'vue'
import App from './App.vue'
import router from "@/router/router"
import store from '@/stores/index'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import VueLogger from 'vuejs3-logger'
import VueExcelEditor from 'vue3-excel-editor'
import '@fortawesome/fontawesome-free/js/all'

// Vuetify
import 'vuetify/styles'
import { aliases, mdi } from 'vuetify/iconsets/mdi'
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'

const vuetify = createVuetify({
  icons: {
    defaultSet: 'mdi',
    aliases,
    sets: {
      mdi,
    },
  },
  components,
  directives,
})

createApp(App).use(VueLogger, {
        isEnabled: true,
        logLevel: 'debug',
        stringifyArguments: false,
        showLogLevel: true,
        showMethodName: true,
        separator: '|',
        showConsoleColors: true,
      })
        .use(router)
        .use(store)
        .use(vuetify)
        .use(VueExcelEditor)
        .component("font-awesome-icon",FontAwesomeIcon)
        .mount('#app');