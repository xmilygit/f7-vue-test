<template></template>

<script>
import { mapState,mapActions,mapMutations } from "vuex";
export default {
  watch: {
    loading: function(val, oldval) {
      if (val) this.showloading(true);
      else this.showloading(false);
    },
    'dialoginfo.show':function(val,oldval){
      if(!val) return;
      this.dialogHidde()
      this.dialogshow()
    }
  },
  computed:{
    ...mapState({
      dialoginfo:'result',
      loading:'showPreloader'
    })
  },
  methods: {
    ...mapMutations({
      dialogHidde:'setDialogHidde',
    }),
    showloading(val) {
      if (val) this.$f7.preloader.show("green");
      else this.$f7.preloader.hide();
    },
    dialogshow(){
      this.$f7.dialog.alert(this.dialoginfo.message,this.dialoginfo.title)
    },
  }
};
</script>
