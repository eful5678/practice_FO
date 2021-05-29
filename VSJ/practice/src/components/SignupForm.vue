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
          <input type="text" id="password" />
        </div>
        <div>
          <label for="nickname">NickName : </label>
          <input type="text" id="nickname" />
        </div>
        <button class="btn">Sign Up</button>
      </form>
    </div>
  </div>
</template>

<script>
// import { Member } from "@/entity/member";

export default {
  data: {
    username: '',
    password: '',
    nickname: '',
  },
  methods: {
    submitForm() {
      const userData = {
        username: this.username,
        password: this.password,
        nickname: this.nickname,
      },
      this.axios('/member/insert', userDate)
        .then(result => {
          console.log(result);
        })
        .catch(error => {
          console.log(error);
        })
        .finally(
          this.$router.push('/main')
        )
      
    },
  },
  data() {
    return {
      username: "",
      // member: {
      //   new Member(),
      // }
    };
  },
};
</script>

<style>
</style>