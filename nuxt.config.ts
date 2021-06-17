import { NuxtConfig } from '@nuxt/types';

// TODO: 後で使う
// const isProd = process.env.BUILD_ENV === 'production';

const config: NuxtConfig = {
  // Disable server-side rendering: https://go.nuxtjs.dev/ssr-mode
  ssr: false,

  // Target: https://go.nuxtjs.dev/config-target
  target: 'static',

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'enviroment-sample',
    htmlAttrs: {
      lang: 'en',
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: ['@/assets/scss/app.scss'],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    '~/plugins/axios',
    '~/plugins/axios-accessor',
    '~/plugins/mock-accessor.ts',
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/typescript
    '@nuxt/typescript-build',
    // https://go.nuxtjs.dev/stylelint
    '@nuxtjs/stylelint-module',
    // https://composition-api.nuxtjs.org/getting-started/setup
    '@nuxtjs/composition-api/module',
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: ['@nuxtjs/axios'],

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {},

  generate: {
    // https://composition-api.nuxtjs.org/getting-started/setup
    interval: 2000,
  },

  router: {
    middleware: [],
  },

  axios: {
    // proxy: true,
    browserBaseURL: 'http://api.localhost/',
  },

  // runtimeConfig: https://nuxtjs.org/docs/2.x/directory-structure/nuxt-config#runtimeconfig
  publicRuntimeConfig: {
    axios: {
      browserBaseURL: process.env.API_URL,
    },
  },

  // vuexを使用するモジュール同士の競合を避けるため
  // vuex: undefined,

  /**
   * NOTE:
   * Nuxt.js 標準のプログレスバーを無効化
   * https://nuxtjs.org/docs/2.x/configuration-glossary/configuration-loading
   */
  loading: false,

  env: {
    BUILD_ENV: process.env.BUILD_ENV || 'local',
  },
};

export default config;
