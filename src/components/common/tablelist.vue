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
      </li>
      <li>
        <button @click='dellist(index)'>删除</button>
      </li>
    </ul>
  </div>
</template>

<script>
// import router from 'router/index'
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
    // dellist (index) {
    //   this.tablelist.splice(index, 1)
    // },
    // editlist (index) {
    //   router.push({ name: 'edit', params: { editId: index }, query: { name: index } })
    // }
  }
}
</script>

<style lang="scss" scoped>
.table-list {
  width: 500px;
  border: 1px solid #ccc;
  ul {
    font-size: 0;
    border-bottom: 1px solid #ccc;
    &:last-child {
      border: none;
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
  .list-title {
    li {
      font-weight: bold;
      &:last-child {
        width: 200px;
      }
    }
  }
}
</style>
