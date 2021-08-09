<template>
  <w-form class="login-form">
    <w-flex column align-center justify-center class="wrapper">
      <w-input
        v-model="username"
        v-bind:disabled="isProcessing"
        label="Username"
        inner-icon-left="mdi mdi-account"
      ></w-input>
      <w-input
        v-model="password"
        v-bind:disabled="isProcessing"
        label="Password"
        type="password"
        inner-icon-left="mdi mdi-lock"
      ></w-input>

      <w-button
        type="submit"
        class="login-button"
        v-bind:disabled="isProcessing"
        @click="onSubmit()"
        >Login</w-button
      >
      <div>{{ loginStatus }}</div>
    </w-flex>
  </w-form>
</template>

<script>
import { setLoginned } from "../helpers/login";

import "@mdi/font/css/materialdesignicons.min.css";

export default {
  data() {
    return {
      isProcessing: false,
      loginStatus: "",
      username: "",
      password: "",
    };
  },
  methods: {

    doLogin(name, pwd) {
      const params = {
        api: "SYNO.API.Auth",
        method: "login",
        version: 6,
        account: name,
        passwd: pwd,
        session: "DownloadStation",
        format: "cookie",
      };

      return fetch("/webapi/auth.cgi", {
        method: "POST",
        body: new URLSearchParams(params),
      }).then((resp) => resp.json());
    },
    setProcessing(onGoing) {
      // using TypeScript will no longer need "!!" ?
      this.isProcessing = !!onGoing;
      this.loginStatus = "Procesing, please wait...";
    },
    setStatusError(msg) {
      this.isProcessing = false;
      this.loginStatus = msg;
    },
    setStatusOk() {
      this.isProcessing = false;
      this.loginStatus = "Login succeeded.";
    },
    async onSubmit() {
      if (!this.username || !this.password) {
        return;
      }
      this.setProcessing(true);
      const resp = await this.doLogin(this.username, this.password);
      console.log("resp:", resp);
      if (!resp.success) {
        const msg = resp.error
          ? `Failed to login, error code ${resp.error.code}`
          : "Failed to login";

        this.setStatusError(msg);
        return;
      }

      this.setStatusOk();
      setLoginned(true);

      this.$router.push("/rss");
      // this.showRss();
    },
    async showRss() {
      const resp = await this.doRssList();
      console.log(resp);
    },
  },
};
</script>

<style>
.login-form {
  margin-top: 1rem;
}
.login-button {
  margin-top: 1rem;
}
</style>