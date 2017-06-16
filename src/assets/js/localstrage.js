const STORAGE_KEY = 'login'
export default {
  remove () {
    window.localStorage.clear()
  },
  save (items) {
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify(items))
    console.log(items)
  }
}
