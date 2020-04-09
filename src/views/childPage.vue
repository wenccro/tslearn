<template>
  <div class="child">
    <h1>展示父亲传递过来的内容</h1>
    <div>{{toChildData}}</div>
    <div>父组件调用子组件方法--{{clickText}}</div>
    <el-button @click="childMethod">调用父方法</el-button>
  </div>
</template>

<script>
export default {
  name: 'child',
  props: {
    toChildData: {
      type: String
    }
  },
  data () {
    return {
      mytext: '我是儿子',
      clickText: ''
    }
  },
  methods: {
    childMethod () {
      this.$emit('fatherMethods');
    },
    showMethod (e) {
      this.clickText = e
    }
  }
}
</script>

<style>
</style>