<template>
  <div class="search-list">
    按姓名搜索：
    <input type="text" v-model="key" @keyup.enter="onSearch">
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
      if (this.key !== '') {
        this.searchlist(this.key)
        this.key = ''
      }
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
    width: 320px;
  }
}
</style>
