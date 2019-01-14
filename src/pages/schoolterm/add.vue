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
          :value="formdata.term"
          @input="formdata.term=$event.target.value"
        ></f7-list-input>
        <f7-list-input
          label="开设课程"
          floating-label
          type="textarea"
          placeholder="输入课程时一行一个"
          clear-button
          required
          validate
          :value="formdata.subject"
          @input="formdata.subject=$event.target.value"
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
      editindex:this.$f7route.params.index||undefined,
      formdata:{
        id:undefined,
        term:'',
        subject:''
      }
    };
  },
  components: { 
    LoadingDialog
  },
  computed: {
    ...mapState(["showPreloader", "dialog"]),
    ...mapState('mark',['termlist']),
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
      if(this.editindex){
         //填充信息
         //console.log(this.termlist[this.editindex])
        //  {
        //    _id:this.formdata.id,
        //    term:this.formdata.term,
        //    subject:this.formdata.subject,
        //   } = this.termlist[this.editindex];
        let {_id:termid,term:termname,subject:termsubject} = this.termlist[this.editindex];
        this.formdata.id=termid;
        this.formdata.term=termname
        this.formdata.subject=termsubject.join('\n')
      }
  },
  methods: {
    ...mapActions("mark", ["termAdd",'editterm']),
    ...mapMutations(["ChangeDialog"]),
    save() {
      //alert(this.$f7.form.convertToData('#my-form'))
      //this.$f7.input.validateInputs('page-content')
      // alert(this.$v.$invalid);
      //采用数据绑定，注释掉下面这句
      //let termdata = this.$f7.form.convertToData("#myform");
      if (!document.forms["myform"].reportValidity()) return;
      //this.formdata.subject = this.formdata.subject.split("\n");
      if(this.editindex){
        this.formdata.id=this.termlist[this.editindex]._id;
        this.editterm(this.formdata)
        return;
      }
      this.termAdd(this.formdata);
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
