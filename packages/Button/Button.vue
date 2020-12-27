<template>
  <button
    @click="$emit('click')"
    class="mdc-button"
    :disabled="disabled"
    :class="'mdc-button--'+type"
  >
    <div class="mdc-button__ripple"></div>
    <i class="material-icons mdc-button__icon" v-show="icon" aria-hidden="true">{{icon}}</i>
    <span class="mdc-button__label">
      <slot></slot>
    </span>
  </button>
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
  name: "Button",
  props: {
    type: String,
    icon: String
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="sass">
@import "@material/button/mdc-button"
</style>
