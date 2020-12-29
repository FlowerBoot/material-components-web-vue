<template>
  <div class="mdc-layout-grid__cell" :class="'mdc-layout-grid--align-'+position">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "Cell",
  props: {
    position: String,
    icon: String
  }
};
</script>
<style lang="sass">
@import "@material/layout-grid/mdc-layout-grid"
</style>