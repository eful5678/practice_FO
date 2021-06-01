<template>
  <div class="contents">
    <div class="form-wrapper form-wrapper-sm">
      <form @submit.prevent="submitForm" class="form">
        <div>
          <label for="username">Id : </label>
          <input type="text" id="username" v-model="username" />
        </div>
        <p class="validation-text">
          <span class="warning" v-if="!isUsernameValid && username">
            Please enter an email address
          </span>
        </p>
        <div>
          <label for="password">PW : </label>
          <input type="password" id="password" v-model="password" />
        </div>
        <button
          v-bind:disabled="!isUsernameValid || !password"
          type="submit"
          class="btn"
          :class="!isUsernameValid || !password ? 'disabled' : null"
        >
          Login
        </button>
        <p class="log">{{ logMessage }}</p>
      </form>
    </div>
  </div>
</template>

<script>
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
        await this.$store.dispatch("LOGIN", userData);
        this.$router.push("/main");
      } catch (error) {
        // error handling code

        console.log(error.response);
        this.logMessage = error.response.data;
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
.btn {
  color: white;
}
</style>