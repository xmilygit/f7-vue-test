<template>
  <f7-page>
    <f7-navbar title="添加学期" back-link="Back">
      <f7-nav-right>
        <f7-link icon-if-ios="f7:menu" icon-if-md="material:menu" panel-open="left"></f7-link>
      </f7-nav-right>
    </f7-navbar>

    <f7-block-title>添加学期</f7-block-title>
    <form id="myform">
      <f7-list no-hairlines-md>
        <f7-list-input
          label="学期名称"
          floating-label
          type="text"
          placeholder="学期名称"
          clear-button
          required
          validate
          name="term"
        ></f7-list-input>
        <f7-list-input
          label="开设课程"
          floating-label
          type="textarea"
          placeholder="输入课程时一行一个"
          clear-button
          required
          validate
          name="subject"
        ></f7-list-input>
        <f7-block>
          <f7-button fill color="green" @click="save">保存</f7-button>
        </f7-block>
      </f7-list>
    </form>
    <LoadingDialog @dialogclose="dialogclose" :showPreloader="showPreloader" :showDialog="dialog"></LoadingDialog>
  </f7-page>
</template>

<script>
import LoadingDialog from "@/components/loading.vue";
import { mapState, mapGetters, mapMutations, mapActions } from "vuex";
export default {
  data() {
    return {
      editindex:this.$f7route.params.index||undefined
    };
  },
  components: { 
    LoadingDialog
  },
  computed: {
    ...mapState(["showPreloader", "dialog"])
  },
  watch: {
    /*
    showPreloader: function(val, oldval) {
      if (val) this.showloading(true);
      else this.showloading(false);
    },
    "dialog.status": function(val, valold) {
      if (!val) return;
      this.showdialog(this.dialog)
    }
    */
  },
  mounted() {
    //this.$f7.preloader.show('green')
    //this.$f7.dialog.alert("a","t")
    // if(this.$7route.params.id)
    // this.editid=this.$7route.params.id
      // this.editid=this.$7route.params.id?this.$7route.params.id:0,
      alert(this.editindex)
  },
  methods: {
    ...mapActions("mark", ["termAdd"]),
    ...mapMutations(["Dialog"]),
    save() {
      //alert(this.$f7.form.convertToData('#my-form'))
      //this.$f7.input.validateInputs('page-content')
      // alert(this.$v.$invalid);
      let termdata = this.$f7.form.convertToData("#myform");
      if (!document.forms["myform"].reportValidity()) return;
      termdata.subject = termdata.subject.split("\n");
      this.termAdd(termdata);
    },
    test() {},
    dialogclose() {
      this.Dialog({ status: false });
    }
    /*
    showloading(val) {
      if (val) this.$f7.preloader.show("green");
      else this.$f7.preloader.hide();
    },
    showdialog(dialoginfo) {
      let self = this;
      this.$f7.dialog.alert(dialoginfo.message, dialoginfo.title, function() {
        self.Dialog({ status: false });
      });
    }
    */
  }
};
</script>
