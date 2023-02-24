module.exports = {
  apps: [
    {
      name: 'fns.space',
      script: './.output/server/index.mjs',
      env: {
        NUXT_HOST: '0.0.0.0',
        PORT: 3334
      }
    }
  ]
}
