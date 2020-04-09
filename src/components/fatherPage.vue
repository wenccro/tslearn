<template>
  <div class="father">
    <h1>我是父亲</h1>
    <div>{{myFather}}</div>
    <el-button @click="fatherToChild">调用子方法</el-button>
    <child-page :toChildData='message'
                @fatherMethods='fatherMethods'
                ref="myChild"></child-page>
  </div>
</template>

<script>
import ChildPage from '../views/childPage.vue'
export default {
  name: 'father',
  components: {
    ChildPage
  },
  data () {
    return {
      myFather: '暂无内容',
      message: '你好儿子，我是父亲传递过来的文字'
    }
  },
  methods: {
    fatherMethods () {
      this.myFather = '我是一个被子组件调用的方法'
    },
    fatherToChild () {
      this.$refs.myChild.showMethod('我调用你（子组件）')
    }
  }

}
</script>

<style>
</style>