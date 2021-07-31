<template>
  <w-app>
    <!-- All your app content goes here. -->
    <w-flex column align-center justify-start class="wrapper">
      <div class="banner">mobile DS download</div>

      <w-form class="login-form">
        <w-flex column align-center justify-center class="wrapper">
          <w-input label="Username" inner-icon-left="mdi mdi-account"></w-input>
          <w-input
            label="Password"
            type="password"
            inner-icon-left="mdi mdi-lock"
          ></w-input>

          <w-button type="submit" class="login-button">Login</w-button>
        </w-flex>
      </w-form>
    </w-flex>
  </w-app>
</template>

<script setup>
import HelloWorld from "./components/HelloWorld.vue";

data: () => ({
  validators: {
    required: (value) => !!value || "This field is required",
  },
});
// This starter template is using Vue 3 experimental <script setup> SFCs
// Check out https://github.com/vuejs/rfcs/blob/master/active-rfcs/0040-script-setup.md
</script>

<style>
.banner {
  font-size: 2rem;
  margin-top: 1rem;
}

.login-form {
  margin-top: 1rem;
}
.login-button {
  margin-top: 1rem;
}
</style>
