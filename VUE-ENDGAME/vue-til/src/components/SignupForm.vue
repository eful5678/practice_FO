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
    <button type="submit">Login</button>
  </form>
</template>

<script>
import { registerUser } from "@/api/index";
export default {
  data() {
    return {
      username: "",
      password: "",
      nickname: "",
    };
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
    },
  },
};
</script>

<style>
</style>