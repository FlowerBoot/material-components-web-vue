<template>
  <div class="hello">
    <h3>{{ msg }}</h3>
    <p>一个使用VueJS实现的拟物界面设计(Material Design).</p>
  </div>
</template>

<script>
// const CSS_CLASSES = {
//   ROOT: "mdc-button",
//   ICON: "mdc-button__icon",
//   LABEL: "mdc-button__label",
//   DENSE: "mdc-button--dense",
//   RAISED: "mdc-button--raised",
//   OUTLINED: "mdc-button--outlined",
//   UNELEVATED: "mdc-button--unelevated"
// };
export default {
  name: "HelloWorld",
  props: {
    msg: String
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="sass">
@import "@material/button/mdc-button"
</style>
