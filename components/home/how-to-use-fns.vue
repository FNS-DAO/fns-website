<template>
  <div class="wrapper bg-usage bg-contain bg-no-repeat py-64 <md:(py-32)">
    <div class="custom-container">
      <div class="<md:(flex-center-col text-center)">
        <p class="text-[#393939] text-4xl font-bold">How to use FNS</p>
        <p class="text-lg font-light leading-snug mt-5 mb-10 w-1/2 <md:w-full">
          Own your web3 username and use it on all onchain services
        </p>
        <a
          target="_blank"
          href="https://app.fns.space"
          class="rounded px-5 py-3 border border-current font-bold hover:(border-primary bg-primary transition text-white)"
          >Launch App</a
        >
      </div>

      <div class="flex justify-between mt-26 <md:(flex-col)">
        <div
          v-for="({ icon, preview, name, desc }, index) in usages"
          :key="name"
          class="w-7/24 flex flex-col <md:(w-full mt-16)"
        >
          <div class="flex items-center">
            <div class="text-white font-bold text-lg w-8 h-8 bg-primary flex-center rounded-full">
              {{ index + 1 }}
            </div>
            <span class="text-2xl text-[#393939] font-semibold ml-2">- {{ name }}</span>
          </div>
          <div class="usage">
            <div class="w-24 h-24 flex-center rounded-2xl usage-icon bg-[#EFF1F3]">
              <img :src="icon" alt="fns-search-logo" class="w-2/3 h-2/3" />
            </div>
            <p
              class="usage-name text-2xl text-[#757575] font-bold mt-6 mb-2 pl-0.5 hover:text-primary"
            >
              {{ name }}
            </p>
            <p class="usage-desc text-lg font-light text-[#767676] min-h-32">
              {{ desc }}
            </p>
            <img :src="preview" :alt="name" class="mt-8 shadow-default rounded-lg" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import search from '~/assets/imgs/search.png'
import register from '~/assets/imgs/register.png'
import manage from '~/assets/imgs/manage.png'
import searchIcon from '~/assets/imgs/fns-search-logo.png'
import registerIcon from '~/assets/imgs/fns-register-logo.png'
import manageIcon from '~/assets/imgs/fns-manage-logo.png'

const usages = [
  {
    name: 'Search',
    icon: searchIcon,
    preview: search,
    desc: '- Find your favourite .fil name'
  },
  {
    name: 'Register',
    icon: registerIcon,
    preview: register,
    desc: '- Connect your wallet address and your favourite .fil name'
  },
  {
    name: 'Manage',
    icon: manageIcon,
    preview: manage,
    desc: '- Manage all information of your own .fil name'
  }
]
</script>

<style scoped lang="less">
.usage {
  @apply rounded-2xl border mt-8 p-6 transition;
  &:hover {
    @apply bg-white border-white shadow-default;
    .usage {
      &-icon {
        @apply bg-primary transition;
      }
      &-name {
        @apply text-primary transition;
      }
      &-desc {
        @apply text-black transition;
      }
    }
  }
}
</style>
