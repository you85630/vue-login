const LOGIN_KEY = 'login'
export default {
  remove () {
    window.sessionStorage.removeItem(LOGIN_KEY)
  },
  save (items) {
    window.sessionStorage.setItem(LOGIN_KEY, JSON.stringify(items))
  }
}
