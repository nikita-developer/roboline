import vuetify, {transformAssetUrls} from 'vite-plugin-vuetify'

export default defineNuxtConfig({
    app: {
        head: {
            charset: 'utf-8',
            viewport: 'width=device-width, initial-scale=1',
        },
        baseURL: "/roboline",
    },
    ssr: false,
    compatibilityDate: "2024-04-03",
    devtools: {enabled: false},
    typescript: {
        typeCheck: true,
    },

    css: ["@/assets/scss/main.scss"],

    build: {
        transpile: ['vuetify'],
    },

    modules: [
        "@pinia/nuxt",
        "@nuxt/icon",
    ],

    vite: {
        vue: {
            template: {
                transformAssetUrls,
            },
        },
    },
})
