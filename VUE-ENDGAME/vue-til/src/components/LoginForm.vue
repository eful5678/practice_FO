<template>
  <div>
    <form @submit.prevent="submitForm">
      <div>
        <label for="username">Id : </label>
        <input type="text" id="username" v-model="username" />
      </div>
      <div>
        <label for="password">PW : </label>
        <input type="text" id="password" v-model="password" />
      </div>
      <button v-bind:disabled="!isUsernameValid || !password" type="submit">
        Login
      </button>
      <p>{{ logMessage }}</p>
    </form>
  </div>
</template>

<script>
import { loginUser } from "@/api/index";
import { validateEmail } from "@/utils/validation";
export default {
  data() {
    return {
      username: "",
      password: "",
      logMessage: "",
    };
  },

  computed: {
    isUsernameValid() {
      return validateEmail(this.username);
    },
  },

  methods: {
    async submitForm() {
      try {
        // Business logic
        const userData = {
          username: this.username,
          password: this.password,
        };
        const { data } = await loginUser(userData);
        console.log("username : " + data.user.username);
        this.logMessage = `${data.user.username} 님 환영합니다.`;
      } catch (error) {
        // error handling code

        console.log(error.response);
        this.logMessage = `${error.response.data}`;
      } finally {
        this.initForm();
      }
    },

    initForm() {
      this.username = "";
      this.password = "";
    },
  },
};
</script>

<style>
</style>