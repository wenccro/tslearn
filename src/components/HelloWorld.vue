<template>
  <div class="hello">
    <h1 v-if="states">{{ msg }}</h1>
    <el-button @click="changeState">切换</el-button>
    <el-input v-model="msg"></el-input>
    <ul>
      <li v-for="(item,index) in list"
          :key="index">{{item}}</li>
    </ul>

  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator'

@Component
export default class HelloWorld extends Vue {
  private msg: string = '测试'
  private states: boolean = false
  private list: any[] = ['唱歌', '跳舞', '喝酒', 1, 5]

  created() {
    this.msg = '生命'
  }

  changeState(): void {
    this.states = !this.states
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
