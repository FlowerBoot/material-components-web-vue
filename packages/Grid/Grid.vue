<template>
  <div class="mdc-layout-grid mdc-layout-grid__inner">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "Grid"
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="sass">
@import "@material/layout-grid/mdc-layout-grid"
</style>
