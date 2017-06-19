<template>
  <div class="login">
    <form action="" v-if="!uID.success">
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
    <div class="loginout" v-if="uID.success">
      <h1>你好,{{uID.data.name}}</h1>
      <a href="" @click='logOut'>退出</a>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
export default {
  computed: {
    ...mapGetters([
      'login',
      'uID'
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
    h1,a{
      display: inline-block;
    }
    h1{
      margin-right: 10px;
    }
  }
}
</style>
