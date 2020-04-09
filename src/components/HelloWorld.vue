<template>
  <div class="hello">
    <h1 v-if="states">{{ msg }}</h1>
    <el-button @click="changeState">切换</el-button>
    <el-input v-model="msg"></el-input>
    <ul>
      <li v-for="(item,index) in list"
          :key="index">{{item}}</li>
    </ul>
    <h1>我是父组件</h1>
    <div>{{faterData}}</div>
    <el-button @click="fatherToChild">调用子方法</el-button>
    <child-page :toChildMsg='msg'
                ref='myChild'
                @child-method='fatherMethods'></child-page>
  </div>
</template>

<script lang="ts">
import ChildPage from '../views/childCom.vue'
import { Component, Prop, Vue } from 'vue-property-decorator'

@Component({
  components: {
    ChildPage
  }
})
export default class HelloWorld extends Vue {
  private msg: string = '测试'
  private states: boolean = false
  private faterData: string = ''
  private list: any[] = ['唱歌', '跳舞', '喝酒', 1, 5]

  private myChild: any = null

  created() {
    this.msg = '生命'
  }

  changeState(): void {
    this.states = !this.states
  }
  fatherToChild(): void {
    (this.$refs.myChild as any).showMethod('父掉子方法')
  }
  private fatherMethods(val: string) {
    console.log('66')
    this.faterData = val
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
