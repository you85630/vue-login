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
          <router-link to="/">提交</router-link>
        </div>
      </div>
    </form>
  </div>
</template>

<script>
import local from 'assets/js/localstrage'
export default {
  data () {
    return {
      login: []
    }
  },
  watch: {
    login: {
      handler: function (login) {
        local.save(login)
      },
      deep: true
    }
  },
  methods: {
    logIn () {
      this.login.length = 0
      this.login.push({
        username: this.login.username,
        password: this.login.password
      })
      this.login.username = ''
      this.login.password = ''
    }
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
}
</style>
