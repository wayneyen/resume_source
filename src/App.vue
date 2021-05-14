<template>
  <!-- <img alt="Vue logo" src="./assets/logo.png" /> -->
  <Menu />
  <UserContact />
  <UserIntro />
  <UserSkill />
  <UserExperience />
  <UserCase />
</template>

<script setup>
import Menu from './components/Menu.vue'
import UserContact from './components/UserContact.vue'
import UserIntro from "./components/UserIntro.vue"
import UserSkill from "./components/UserSkill.vue"
import UserExperience from "./components/UserExperience.vue"
import UserCase from "./components/UserCase.vue"
</script>

<style>
* {
  font-family: 'Microsoft JhengHei';
}
</style>
