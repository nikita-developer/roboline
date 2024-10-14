import '@mdi/font/css/materialdesignicons.css'

import {defineNuxtPlugin} from "#app"
import * as components from "vuetify/components"

import 'vuetify/styles'
import {createVuetify} from 'vuetify'

export default defineNuxtPlugin((app) => {
    const vuetify = createVuetify({
        components
    })
    app.vueApp.use(vuetify)
})
