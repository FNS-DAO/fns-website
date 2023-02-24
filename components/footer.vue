<template>
  <div class="bg-[#101111]">
    <div class="custom-container py-16 text-white">
      <Logo />
      <p class="text-[#757575] mt-4">
        Create a decentralized personal portal and DID system for <br />
        #Web3 users based on #FVM.
      </p>
      <div class="flex justify-between items-end mt-16 <md:(flex-col items-start)">
        <div class="w-1/2 <md:w-full">
          <p class="font-semibold text-2xl">Contact us</p>
          <div class="border-b-2 flex py-4">
            <input
              v-model.trim="email"
              readonly
              type="text"
              class="outline-none bg-transparent placeholder-[#757575] flex-1"
              placeholder="Enter your email"
            />
            <button
              :disabled="!isEmail(email)"
              :class="{ 'cursor-not-allowed': !isEmail(email) }"
              class="hidden border border-white px-5 py-2 rounded-md text-lg font-semibold hover:(bg-white text-black) transition <md:py-1.5"
              @click="commitEmail"
            >
              Subscribe
            </button>
          </div>
        </div>
        <FooterCommunities class="<md:(mt-12 -ml-4)" />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { isEmail, NoteSuccess } from '~/libs/utils'

const email = ref('Official@fns.com')

function commitEmail() {
  NoteSuccess('Subscribe successfully')
}
</script>
