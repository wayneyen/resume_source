<template>
  <div class="mobile">
    <div class="fixed top-5 right-5 text-white"
      v-show="!state.menuIsOpen"
      @click="state.menuIsOpen = !state.menuIsOpen">
      <i class="fas fa-bars text-4xl"></i>
    </div>

    <div :class="[state.menuIsOpen ? '': 'transform translate-x-full' ]" class="fixed top-0 right-0 w-5/12 h-screen bg-elephant-500 bg-opacity-60 transition duration-300 pt-24 text-center overflow-hidden">
      <div class="relative w-full h-full">
        <a class="block text-white text-base py-4" @click="scrollTo('#user-contact')">
          聯絡方式
        </a>
        <a class="block text-white text-base py-4" @click="scrollTo('#user-intro')">
          個人介紹
        </a>
        <a class="block text-white text-base py-4" @click="scrollTo('#user-skill')">
          技能專長
        </a>
        <a class="block text-white text-base py-4" @click="scrollTo('#user-experience')">
          企業經歷
        </a>
        <a class="block text-white text-base py-4" @click="scrollTo('#user-case')">
          作品展示
        </a>
        <a class="text-white absolute left-0 right-0 bottom-8" @click="state.menuIsOpen = !state.menuIsOpen">
          <i class="fas fa-times text-4xl"></i>
        </a>
      </div>
    </div>
  </div>

  <div class="pc relative">
    <div class="fixed left-0 top-0 w-60 h-screen bg-elephant-500 bg-opacity-60">
      <a class="block mt-10 text-white text-center cursor-pointer" @click="scrollTo('#user-contact')">
        <i class="fas fa-home text-3xl"></i>
      </a>

      <div class="absolute inset-x-0 bottom-0 text-center">
        <a href="https://www.facebook.com/wayne.yen" class="block mb-6 text-white" target="_blank" rel="noreferrer noopener">
          <i class="fab fa-facebook text-3xl"></i>
        </a>
        <a href="https://www.linkedin.com/in/wayne-yen-b6b03134/" class="block mb-8 text-white" target="_blank" rel="noreferrer noopener">
          <i class="fab fa-linkedin text-3xl"></i>
        </a>
      </div>
    </div>

    <div class="fixed top-0 right-0 flex text-base pt-7">
      <a class="text-gray-600 mr-14 cursor-pointer" @click="scrollTo('#user-intro')">個人介紹</a>
      <a class="text-gray-600 mr-14 cursor-pointer" @click="scrollTo('#user-skill')">技能專長</a>
      <a class="text-gray-600 mr-14 cursor-pointer" @click="scrollTo('#user-experience')">企業經歷</a>
      <a class="text-gray-600 mr-14 cursor-pointer" @click="scrollTo('#user-case')">作品展示</a>
    </div>
  </div>
</template>

<script setup>
import VueScrollTo from 'vue-scrollto'
import { reactive } from 'vue'

const state = reactive({
  menuIsOpen: false
})

function scrollTo(element) {
  state.menuIsOpen = false
  VueScrollTo.scrollTo(element)
}
</script>

<style scoped>

</style>
