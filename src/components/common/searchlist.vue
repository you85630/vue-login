<template>
  <div class="search-list">
    <input type="text" v-model="key" placeholder="搜索" @keyup.enter="onSearch">
  </div>
</template>

<script>
import { mapActions } from 'vuex'
export default {
  data () {
    return {
      key: ''
    }
  },
  methods: {
    onSearch () {
      this.searchlist(this.key)
      this.key = ''
    },
    ...mapActions([
      'searchlist'
    ])
  }
}
</script>

<style lang="scss">
.search-list {
  margin-bottom: 10px;
  input{
    width: 400px;
  }
}
</style>
