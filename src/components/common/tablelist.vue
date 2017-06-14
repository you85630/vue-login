<template>
  <div class="table-list">
    <ul v-for="(li,index) in tablelist">
      <li>{{li.name}}</li>
      <li>{{li.age}}</li>
      <li>{{li.from}}</li>
      <li v-if="index==0">操作</li>
      <li v-if="index!==0">
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
