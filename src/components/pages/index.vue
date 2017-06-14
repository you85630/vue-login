<template>
  <div class="index">
    <h1>计算器</h1>
    <div class="box">
      <h1>{{count}}</h1>
      <button @click='add'>+</button>
      <button @click='remove'>-</button>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
export default {
  computed: {
    ...mapGetters([
      'count'
    ])
  },
  methods: {
    ...mapActions([
      'add',
      'remove'
    ])
  }
}
</script>

<style scoped lang="scss">
.index {
  width: 200px;
  text-align: center;
  border: 1px solid #ccc;
  padding: 10px 0;
  .box {
    margin-top: 10px;
    button {
      margin: 10px;
      padding: 0 10px;
    }
  }
}
</style>
