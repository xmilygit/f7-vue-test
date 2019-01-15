<template></template>

<script>
import { mapState,mapActions } from "vuex";
export default {
  props: ["showPreloader", "showDialog"],
  watch: {
    showPreloader: function(val, oldval) {
      if (val) this.showloading(true);
      else this.showloading(false);
    },
    // "showDialog.status": function(val, valold) {
    //   if (!val) return;
    //   this.Dialog(this.showDialog);
    // }
    showDialog:function(val,oldval){
      if(!val) return;
      this.dialogshow()
    }
  },
  computed:{
    ...mapState({
      dialoginfo:'result'
    })
  },
  methods: {
    showloading(val) {
      if (val) this.$f7.preloader.show("green");
      else this.$f7.preloader.hide();
    },
    dialogshow(){
      this.$7.dialog.alert(this.dialoginfo.message,dialoginfo.title)
    },
    // Dialog(dialoginfo) {
    //   let self = this;
    //   this.$f7.dialog.alert(dialoginfo.message, dialoginfo.title, function() {
    //     //self.Dialog({ status: false });l
    //     self.$emit('dialogclose')
    //   });
    // }
  }
};
</script>
