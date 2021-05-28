<template>
  <div class="mobile">
    <div class="z-50 fixed top-5 right-5 text-white"
      v-show="!state.menuIsOpen"
      @click="state.menuIsOpen = !state.menuIsOpen">
      <i class="fas fa-bars text-4xl"></i>
    </div>

    <div :class="[state.menuIsOpen ? '': 'transform translate-x-full' ]" class="z-50 fixed top-0 right-0 w-5/12 h-screen bg-elephant-500 bg-opacity-60 transition duration-300 pt-24 text-center overflow-hidden">
      <div class="relative w-full h-full">
        <a href="#contact" class="block text-white text-base py-4">
          聯絡方式
        </a>
        <a href="#intro" class="block text-white text-base py-4">
          個人介紹
        </a>
        <a href="#skill" class="block text-white text-base py-4">
          技能專長
        </a>
        <a href="#experience" class="block text-white text-base py-4">
          企業經歷
        </a>
        <a href="#case" class="block text-white text-base py-4">
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
      <a href="#contact" class="block mt-10 text-white text-center cursor-pointer">
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
      <a href="#intro" class="text-gray-600 mr-14 cursor-pointer">個人介紹</a>
      <a href="#skill" class="text-gray-600 mr-14 cursor-pointer">技能專長</a>
      <a href="#experience" class="text-gray-600 mr-14 cursor-pointer">企業經歷</a>
      <a href="#case" class="text-gray-600 mr-14 cursor-pointer">作品展示</a>
    </div>
  </div>
</template>

<script setup>
import { reactive } from 'vue'

const state = reactive({
  menuIsOpen: false
})
</script>

<style scoped>

</style>
