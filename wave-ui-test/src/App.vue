<template>
  <w-app>
    <!-- All your app content goes here. -->
    <w-flex column align-center justify-start class="wrapper">
      <div class="banner">Wave UI test</div>

      <LoginForm />
    </w-flex>
  </w-app>
</template>

<script setup>
import HelloWorld from "./components/HelloWorld.vue";
import LoginForm from "./components/LoginForm.vue";

// This starter template is using Vue 3 experimental <script setup> SFCs
// Check out https://github.com/vuejs/rfcs/blob/master/active-rfcs/0040-script-setup.md
</script>

<style>
.banner {
  font-size: 2rem;
  margin-top: 1rem;
}
</style>
