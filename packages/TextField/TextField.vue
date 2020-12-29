<template>
  <label class="mdc-text-field mdc-text-field--filled">
    <span class="mdc-text-field__ripple"></span>
    <span class="mdc-floating-label" id="my-label-id">My Label11111</span>
    <input
      class="mdc-text-field__input"
      type="text"
      aria-labelledby="my-label-id"
      aria-controls="my-helper-id"
      aria-describedby="my-helper-id"
    />
    <span class="mdc-line-ripple"></span>
  </label>
  <div class="mdc-text-field-helper-line">
    <div class="mdc-text-field-helper-text" id="my-helper-id" aria-hidden="true">helper text1111</div>
  </div>
</template>

<script>
export default {
  name: "TextField",
  props: {
    type: String,
    icon: String
  }
};
</script>

<style lang="sass">
@import "@material/textfield/mdc-text-field"
</style>
