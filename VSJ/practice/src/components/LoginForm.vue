<template>
  <div class="contents">
    <div class="form-wrapper form-wrapper-sm">
      <form @submit.prevent="submitForm" class="form">
        <div>
          <label for="username">ID : </label>
          <input type="text" id="username" v-model="username" />
        </div>
        <div>
          <label for="password">PW : </label>
          <input type="passowrd" id="password" v-model="password" />
        </div>
        <button class="btn">Login</button>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    submitForm() {},
  },
  data() {
    return {
      username: "",
      password: "",
    };
  },
};
</script>

<style>
.btn {
  color: white;
}
</style>