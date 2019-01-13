<template></template>

<script>
export default {
  props: ["showPreloader", "showDialog"],
  watch: {
    showPreloader: function(val, oldval) {
      if (val) this.showloading(true);
      else this.showloading(false);
    },
    "showDialog.status": function(val, valold) {
      if (!val) return;
      this.Dialog(this.showDialog);
    }
  },
  methods: {
    showloading(val) {
      if (val) this.$f7.preloader.show("green");
      else this.$f7.preloader.hide();
    },
    Dialog(dialoginfo) {
      let self = this;
      this.$f7.dialog.alert(dialoginfo.message, dialoginfo.title, function() {
        //self.Dialog({ status: false });l
        self.$emit('dialogclose')
      });
    }
  }
};
</script>
