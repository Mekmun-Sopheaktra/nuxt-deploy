// https://nuxt.com/docs/api/configuration/nuxt-config

export default {
    runtimeConfig: {
        public: {
            API_BASE_URL: process.env.API_URL,
            APP_BASE_URL: process.env.APP_URL,
        }
    },
    app: {
        head: {
            charset: 'utf-16',
            viewport: 'width=500, initial-scale=1',
            title: 'Rumdul',
            meta: [
                { name: 'description', content: 'Rumdul' },
                { property: 'og:locale', content: 'en_US' },
                { property: 'og:type', content: 'website' },
                { property: 'og:site_name', content: 'Rumdul' },
                { property: 'twitter:card', content: 'summary' },
                { name: 'robots', content: 'index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1' },
            ],
        }
    },

    css: ['~/assets/scss/index.scss', '~/assets/css/dashboard.css'],

    plugins: [
        {
            src: '~/plugins/bootstrap.js',
            mode: 'client'
        }
    ],
    components: { global: true, dirs: ['~/components'] },
    modules: [
        '@nuxtjs/i18n',
        '@pinia/nuxt',
        '@nuxt/image',
        '@nuxtjs/robots',
        '@pinia/nuxt',
        '@element-plus/nuxt',
        'pinia-plugin-persistedstate/nuxt',
        ["@vee-validate/nuxt", { autoImports: true }],
    ],
    elementPlus: { /** Options */ }
};
