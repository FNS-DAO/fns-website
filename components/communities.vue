<template>
  <ul class="flex">
    <template v-for="{ icon, url } in communities" :key="url">
      <a
        v-if="url"
        :href="url"
        target="blank"
        :class="itemclass"
        class="w-7.5 h-7.5 rounded-full flex-center mx-4"
      >
        <component :is="icon" />
      </a>
    </template>
  </ul>
</template>

<script setup lang="ts">
import twitter from './icon/twitter.vue'
import medium from './icon/medium.vue'
import discord from './icon/discord.vue'
import github from './icon/github.vue'

defineProps<{ itemclass?: string }>()

const communities = [
  { icon: twitter, url: 'https://twitter.com/FNS_SPACE' },
  { icon: medium, url: '' },
  { icon: discord, url: 'https://discord.gg/vxvDrgXvaC' },
  { icon: github, url: 'https://github.com/FNS-DAO' }
]
</script>
