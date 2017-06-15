<template>
  <div class="edit">
    <label for="name">
      <span>姓名：</span>
      <input type="text" v-model="activelist.name">
    </label>
    <label for="name">
      <span>年龄：</span>
      <input type="text" v-model="activelist.age">
    </label>
    <label for="name">
      <span>所在地：</span>
      <input type="text" v-model="activelist.from">
    </label>
    <label class="btn">
      <button @click='savelist($route.params.editId)'>保存</button>
      <button @click='prevlist'>关闭</button>
    </label>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
export default {
  computed: {
    ...mapGetters([
      'tablelist',
      'activelist'
    ])
  },
  methods: {
    ...mapActions([
      'savelist',
      'prevlist'
    ])
  }
}
</script>

<style lang="scss" scoped>
.edit {
  width: 300px;
  margin: 0 auto;
  border: 1px solid #ccc;
  padding: 10px;
  label {
    width:100%;
    margin-bottom: 10px;
    display: block;
    span,input{
      display: inline-block;
      vertical-align: bottom;
    }
    span{
      width: 60px;
      text-align: right;
    }
  }
  .btn{
    margin-left: 60px;
    button{
      background: none;
      border:none;
    }
  }
}
</style>
