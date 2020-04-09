<template>
  <div class="child">
    <h1>我是子组件</h1>
    父组件传递内容{{toChildMsg}}
    <div>父组件调用子方法+{{fc}}</div>
    <el-button @click="childMethod">调用父方法</el-button>
  </div>
</template>

<script lang='ts'>
import { Component, Vue, Prop, Emit } from 'vue-property-decorator'

@Component
export default class Child extends Vue {
  @Prop({
    type: String,
    required: false
  })
  toChildMsg!: string

  private msg: string = '你好，我是子子组件调用父组件方法'
  private fc: string = ''

  @Emit()
  private childMethod() {
    return this.msg
  }
  private showMethod(e: any): void {
    this.fc = e
  }
}
</script>

<style>
</style>