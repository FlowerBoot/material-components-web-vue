<template>
  <header class="mdc-top-app-bar">
    <div class="mdc-top-app-bar__row">
      <section class="mdc-top-app-bar__section mdc-top-app-bar__section--align-start">
        <button
          class="mdc-icon-button material-icons mdc-top-app-bar__navigation-icon--unbounded"
        >menu</button>
        <span class="mdc-top-app-bar__title">San Francisco, CA</span>
      </section>
      <section class="mdc-top-app-bar__section mdc-top-app-bar__section--align-end">
        <button
          class="mdc-icon-button material-icons mdc-top-app-bar__action-item--unbounded"
          aria-label="Download"
        >file_download</button>
        <button
          class="mdc-icon-button material-icons mdc-top-app-bar__action-item--unbounded"
          aria-label="Print this page"
        >print</button>
        <button
          class="mdc-icon-button material-icons mdc-top-app-bar__action-item--unbounded"
          aria-label="Bookmark this page"
        >bookmark</button>
      </section>
    </div>
  </header>
</template>

<script>
export default {
  name: "TopAppBar"
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="sass">
@import "@material/top-app-bar/mdc-top-app-bar"
@import "@material/icon-button/mdc-icon-button"
</style>
