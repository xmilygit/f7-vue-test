<template>
<f7-page>
    <f7-navbar :title="this.$f7route.params.username" back-link="Back">
      <f7-nav-right>
        <f7-link icon-if-ios="f7:menu" icon-if-md="material:menu" panel-open="left"></f7-link>
      </f7-nav-right>
    </f7-navbar>
    <f7-card
    title="xxxxx"
  content="This is a simple card with plain text, but cards can also contain their own header, footer, list view, image, or any other element."
    >
    <f7-card-footer>
        <f7-link>Like</f7-link>
        <f7-link>Read more</f7-link>
  </f7-card-footer>
    </f7-card>

    <h3>current id:{{this.$f7route.params.id}}</h3>
</f7-page>
</template>
<script>
export default {
  data() {
    return {
      account:null
    };
  },
  computed: {
    account:{
      // return this.$f7route.params.username
    }
  }
};
</script>

