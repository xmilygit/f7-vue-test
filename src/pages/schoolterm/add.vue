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
    name="termname"
    :value="term.name"
    @input="term.name = $event.target.value"
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
        :value="term.subject"
        @input="term.subject=$event.target.value"
      ></f7-list-input>
      <f7-block>
        <f7-button fill color="green" @click="save">保存</f7-button>
      </f7-block>
    </f7-list>
    </form>
  </f7-page>
</template>

<script>
import { mapState, mapGetters, mapMutations, mapActions } from "vuex";
export default {
  data() {
    return {
      term: {
        name:'',
        subject:'',
      }
    };
  },
  computed: {
    ...mapState(["showPreloader", "dialog"])
  },
  watch: {
    showPreloader: function(val, oldval) {
      if (val) this.showloading(true);
      else this.showloading(false);
    },
    "dialog.status": function(val, valold) {
      if (!val) return;
      this.showdialog(this.dialog)
    }
  },
  mounted() {
    //this.$f7.preloader.show('green')
    //this.$f7.dialog.alert("a","t")
  },
  methods: {
    ...mapActions("mark", ["termAdd"]),
    ...mapMutations(["Dialog"]),
    save(){
      //alert(this.$f7.form.convertToData('#my-form'))
      //this.$f7.input.validateInputs('page-content')
      // alert(this.$v.$invalid);
      if(document.forms['myform'].reportValidity())
      alert('没错')
      else
      alert("有错")
    },
    test(){

    },
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
  }
};
</script>
