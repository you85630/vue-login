<template>
  <div class="login">
    <form action="">
      <label for="username">
        <span>登录名：</span>
        <input type="text" v-model="login.username">
      </label>
      <label for="password">
        <span>密码：</span>
        <input type="password" v-model="login.password">
      </label>
      <div class="btn">
        <div @click='logIn'>
          <router-link to="/login">登录</router-link>
        </div>
      </div>
    </form>
    <div class="loginout" v-if="user.success">
      <h1>你好,{{user.data.name}}</h1>
      <button  @click='logOut'>退出</button>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
export default {
  computed: {
    ...mapGetters([
      'login',
      'user'
    ])
  },
  methods: {
    ...mapActions([
      'logIn',
      'logOut'
    ])
  }
}
</script>

<style lang="scss" scoped>
.login {
  width: 230px;
  text-align: center;
  margin: 0 auto;
  label {
    display: block;
    margin-bottom: 20px;
    span,
    input {
      display: inline-block;
    }
    span {
      width: 50px;
      text-align: right;
    }
  }
  .loginout{
    h1,button{
      display: inline-block;
    }
    h1{
      margin-right: 10px;
    }
    button{
      border: none;
      background: none;
    }
  }
}
</style>
