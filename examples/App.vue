<template>
  <img alt="Vue logo" src="./assets/logo.png" />
  <HelloWorld msg="拟物设计-VueJS实现" />
  <h3>按钮</h3>
  <ul>
    <li>
      <Button type="raised">重点突出</Button>
      <span>&nbsp;&nbsp;</span>
      <Button type="raised" icon="favorite">重点突出-图标</Button>
      <span>&nbsp;&nbsp;</span>
      <Button type="raised" disabled>重点突出-禁用</Button>
      <p>包含的按钮具有重点，因为它们使用了颜色填充和阴影。</p>
    </li>
    <li>
      <Button type="outlined">中等强调</Button>
      <span>&nbsp;&nbsp;</span>
      <Button type="outlined" icon="favorite">中等强调-图标</Button>
      <span>&nbsp;&nbsp;</span>
      <Button type="outlined" disabled>重点突出-禁用</Button>
      <p>由于笔划，轮廓按钮比文本按钮用于强调更多。</p>
    </li>
    <li>
      <Button>低强调</Button>
      <span>&nbsp;&nbsp;</span>
      <Button icon="favorite">中等强调-图标</Button>
      <span>&nbsp;&nbsp;</span>
      <Button disabled>重点突出-禁用</Button>
      <p>文本按钮通常用于次要的操作。</p>
    </li>
  </ul>
</template>

<script>
import Button from "../packages/Button/Button.vue";
export default {
  components: { Button },
  name: "App"
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
