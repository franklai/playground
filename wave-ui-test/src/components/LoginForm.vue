<template>
  <w-form class="login-form">
    <w-flex column align-center justify-center class="wrapper">
      <w-input label="Username" inner-icon-left="mdi mdi-account"></w-input>
      <w-input
        label="Password"
        type="password"
        inner-icon-left="mdi mdi-lock"
      ></w-input>

      <w-button type="submit" class="login-button" @click="uccu()"
        >Login</w-button
      >
    </w-flex>
  </w-form>
</template>

<script>
export default {
  methods: {
    sendRequest(api, method, version, params) {
      const data = {
        api,
        method,
        version,
        ...params,
      };
      return fetch("/webapi/entry.cgi", {
        method: "POST",
        body: new URLSearchParams(data),
      });
    },
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
      });
    },
    uccu() {
      console.log("hihi");
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