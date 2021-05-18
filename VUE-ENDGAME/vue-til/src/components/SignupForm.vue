.<template>
  <form @submit.prevent="submitForm">
    <div>
      <label for="username">id : </label>
      <input type="text" id="username" v-model="username" />
    </div>
    <div>
      <label for="password">pw : </label>
      <input type="text" id="password" v-model="password" />
    </div>
    <div>
      <label for="nickname">nickname : </label>
      <input type="text" id="nickname" v-model="nickname" />
    </div>
    <button v-bind:disabled="!isValidate || !password" type="submit">
      Sign in
    </button>
    <p>{{ logMessage }}</p>
  </form>
</template>

<script>
import { validateEmail } from "@/utils/validation";
import { registerUser } from "@/api/index";
export default {
  data() {
    return {
      username: "",
      password: "",
      nickname: "",
      logMessage: "",
    };
  },

  computed: {
    isValidate() {
      return validateEmail(this.username);
    },
  },

  methods: {
    async submitForm() {
      console.log("submit form");
      const userData = {
        username: this.username,
        password: this.password,
        nickname: this.nickname,
      };
      const response = await registerUser(userData);
      console.log(response);
      console.log(response.data);
      this.logMessage = `${response.data.username}님이 가입되었습니다.`;
      this.initForm();
    },

    initForm() {
      this.username = "";
      this.password = "";
      this.nickname = "";
    },
  },
};
</script>

<style>
</style>