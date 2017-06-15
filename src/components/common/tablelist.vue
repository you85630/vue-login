<template>
  <div class="table-list">
    <ul class="list-title">
      <li>姓名</li>
      <li>年龄</li>
      <li>所在地</li>
      <li>操作</li>
    </ul>
    <ul v-for="(li,index) in tablelist">
      <li>{{li.name}}</li>
      <li>{{li.age}}</li>
      <li>{{li.from}}</li>
      <li>
        <button @click='editlist(index)'>编辑</button>
        <button @click='dellist(index)'>删除</button>
      </li>
    </ul>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
export default {
  computed: {
    ...mapGetters([
      'tablelist'
    ])
  },
  methods: {
    ...mapActions([
      'dellist',
      'editlist'
    ])
  },
  created () {
    this.$store.dispatch('tablelist')
  }
}
</script>

<style lang="scss" scoped>
.table-list {
  width: 100%;
  border: 1px solid #ccc;
  ul {
    font-size: 0;
    border-top: 1px solid #ccc;
    &:first-child {
      border-top: none;
      li {
        font-weight: bold;
      }
    }
    li {
      font-size: 14px;
      width: 100px;
      padding: 4px 0;
      text-align: center;
      display: inline-block;
      a {
        display: block;
      }
      button {
        border: none;
        background: none;
        font-size: 14px;
      }
    }
  }
}
</style>
