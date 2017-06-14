<template>
  <div class="add-list">
    <button @click='pushlist'>增加</button>
    <div class="list-add" v-if="listlabel">
      <div class="list-label">
        <label for="name">
          <span>姓名：</span>
          <input type="text" v-model="labellist.name">
        </label>
        <label for="name">
          <span>年龄：</span>
          <input type="text" v-model="labellist.age">
        </label>
        <label for="name">
          <span>所在地：</span>
          <input type="text" v-model="labellist.from">
        </label>
        <label class="btn">
          <button @click='addlist'>保存</button>
          <button @click='closelabel'>关闭</button>
        </label>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
export default {
  computed: {
    ...mapGetters([
      'listlabel',
      'labellist'
    ])
  },
  methods: {
    ...mapActions([
      'pushlist',
      'closelabel',
      'addlist'
    ])
  }
}
</script>

<style lang="scss" scoped>
.add-list {
  width: 100%;
  margin-bottom: 10px;
  button {
    background-color: #06c;
    color: #fff;
    padding: 2px 10px;
    border: none;
  }
  .list-add {
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, .6);
    .list-label {
      width: 220px;
      padding: 20px;
      background-color: #fff;
      margin: 0 auto;
      margin-top: 20%;
      label {
        width: 100%;
        margin-bottom: 10px;
        display: block;
        span,
        input {
          display: inline-block;
          vertical-align: bottom;
        }
        span {
          width: 60px;
          text-align: right;
        }
      }
      .btn {
        margin-left: 65px;
      }
    }
  }
}
</style>
