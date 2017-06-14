const STORAGE_KEY = 'data'
export default {
  remove () {
    localStorage.clear()
  },
  save (items) {
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify(items))
  }
}
