// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  css: ['~/assets/app.less'],
  buildModules: ['nuxt-windicss', '@pinia/nuxt'],
  app: {
    head: {
      title: 'FNS',
      meta: [
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        {
          name: 'keywords',
          content:
            'FNS, Filfox, Filecoin Name Service, Filecoin Domain, Filecoin Domain Service, Filecoin FVM, FEVM, FIL, IPFS, ENS, SID, Social'
        },
        {
          name: 'description',
          content: 'A decentralized personal portal and DID system for Web3 users based on FVM.'
        },
        { charset: 'utf-8' }
      ]
    }
  }
})
