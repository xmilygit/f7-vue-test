<template>
  <f7-page>
    <f7-navbar title="学期管理" back-link="Back">
      <f7-nav-right>
        <f7-link icon-if-ios="f7:menu" icon-if-md="material:menu" panel-open="left"></f7-link>
      </f7-nav-right>
    </f7-navbar>
    <f7-block-title>学期列表</f7-block-title>
    <f7-list>
      <f7-list-item swipeout @swipeout:deleted="delschoolterm(item)" v-for="(item,index) in termlist" :key="index" :title="item.term">
        <f7-swipeout-actions right>
          <f7-swipeout-button delete confirm-text="是否要该学期信息?">
            <f7-icon ios="f7:delete" md="material:delete"></f7-icon>
          </f7-swipeout-button>
          <f7-swipeout-button @click="$f7router.navigate(`/mark/schoolterm/edit/index_${index}`)">修改</f7-swipeout-button>
          <f7-swipeout-button @click="$f7router.navigate(`/subject/list/${item}`)">学科</f7-swipeout-button>
        </f7-swipeout-actions>
      </f7-list-item>
    </f7-list>
    <!-- <div v-show="showPreloader" id="preloader" class="text-align-center">
      <f7-preloader></f7-preloader>
    </div>-->
    <f7-fab
      position="right-bottom"
      slot="fixed"
      color="orange"
      href="/mark/schoolterm/add/"
      view="#main-view"
    >
      <f7-icon ios="f7:add" md="material:add"></f7-icon>
    </f7-fab>
    <LoadingDialog @dialogclose="dialogclose" :showPreloader="showPreloader" :showDialog="dialog"></LoadingDialog>
  </f7-page>
</template>

<script>
// import {createNamespacedHelpers, mapState, mapGetters, mapMutations, mapActions } from "vuex";
import LoadingDialog from "@/components/loading.vue"
import { mapState, mapActions,mapMutations } from "vuex";
// const { mapActions:mapMarkActions} = createNamespacedHelpers('mark')
export default {
  data() {
    return {};
  },
  computed: {
    ...mapState(['showPreloader','dialog']),
    ...mapState("mark", ["termlist"]),
  },
  components:{
    LoadingDialog,
  },
  mounted() {
    // 带模块的vuex测试
    // alert(this.$store.state.mark.marktest)
    this.getTermList();
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
  methods: {
    ...mapActions("mark", ["getTermList","delterm"]),
    ...mapMutations(["ChangeDialog"]),
    // showloading(val) {
    //   if (val) this.$f7.preloader.show("green");
    //   else this.$f7.preloader.hide();
    // },
    dialogclose(){
      this.ChangeDialog({status:false})
    },
    delschoolterm(item){
      this.delterm({id:item._id,term:item.term})
    },
    /*
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
