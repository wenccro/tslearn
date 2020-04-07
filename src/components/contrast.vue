<template>
  <div class="tt">
    <h1 v-if="states">{{ msg }}</h1>
    <el-button @click="changeState">切换</el-button>
    <ul>
      <li v-for="(item,index) in list"
          :key="index">{{item}}</li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'tt',
  data () {
    return {
      states: false,
      msg: '测试',
      list: ['唱歌', '跳舞', '喝酒', 1, 5]
    }
  },
  created () {
    this.changeState()
  },
  methods: {
    changeState () {
      this.states = !this.states
    }
  }
}
</script>

<style>
</style>