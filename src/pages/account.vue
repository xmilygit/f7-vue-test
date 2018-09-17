<template>
<f7-page>
    <f7-navbar :title="this.$f7route.params.username" back-link="Back"></f7-navbar>
    <h3>current id:{{this.$f7route.params.id}}</h3>
</f7-page>
</template>
<script>
export default {
  data() {
    return {};
  },
  computed: {
    accountId() {
      return this.$f7route.params.username;
    }
  }
};
</script>

