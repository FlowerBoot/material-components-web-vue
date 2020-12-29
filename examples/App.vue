<template>
  <TopAppBar></TopAppBar>
  <div class="mdc-top-app-bar--short-fixed-adjust">
    <img alt="Vue logo" src="./assets/logo.png" />
    <p>
      <img alt="Vue logo" src="./assets/logo.png" />
    </p>
    <p>
      <img alt="Vue logo" src="./assets/logo.png" />
    </p>
    <p>
      <img alt="Vue logo" src="./assets/logo.png" />
    </p>
    <p>
      <img alt="Vue logo" src="./assets/logo.png" />
    </p>
    <p>
      <img alt="Vue logo" src="./assets/logo.png" />
    </p>
    <p>
      <img alt="Vue logo" src="./assets/logo.png" />
    </p>
    <p>
      <img alt="Vue logo" src="./assets/logo.png" />
    </p>
    <HelloWorld msg="拟物设计-VueJS实现" />
    <TextField></TextField>
    <h3>按钮</h3>
    <div>
      <p>重点突出:包含的按钮具有重点，因为它们使用了颜色填充和阴影。</p>
      <p>中等强调:轮廓按钮比文本按钮用于强调更多。</p>
      <p>低强调:文本按钮通常用于次要的操作。</p>
    </div>
    <Grid>
      <Cell>
        <Button type="raised">重点突出</Button>
      </Cell>
      <Cell>
        <Button type="raised" icon="favorite">重点突出-图标</Button>
      </Cell>
      <Cell>
        <Button type="raised" disabled>重点突出-禁用</Button>
      </Cell>
      <Cell>
        <Button type="outlined">中等强调</Button>
      </Cell>
      <Cell>
        <Button type="outlined" icon="favorite">中等强调-图标</Button>
      </Cell>
      <Cell>
        <Button type="outlined" disabled>重点突出-禁用</Button>
      </Cell>
      <Cell>
        <Button>低强调</Button>
      </Cell>
      <Cell>
        <Button icon="favorite">低强调-图标</Button>
      </Cell>
      <Cell>
        <Button disabled>低强调-禁用</Button>
      </Cell>
    </Grid>
  </div>
</template>

<script>
export default {
  name: "App"
};
</script>

<style>
body {
  margin: 0px;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  /* color: #2c3e50; */
  /* margin-top: 60px; */
}
</style>
