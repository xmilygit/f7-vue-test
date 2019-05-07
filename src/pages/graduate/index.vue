<template>
    <f7-page infinite :infinite-distance="50" :infinite-preloader="false" @infinite="loadMore">
        <f7-navbar title="毕业生" back-link="Back">
      <f7-nav-right>
        <f7-link icon-if-ios="f7:menu" icon-if-md="material:menu" panel-open="left"></f7-link>
        <f7-link icon-if-ios="f7:search" icon-if-md="material:search" panel-open="right"></f7-link>        
      </f7-nav-right>
      <f7-subnavbar :inner="false">
        <f7-searchbar id="searchEL" placeholder="搜索" :custom-search="true" :init="true">
          <!-- <div slot="inner-start">Inner Start</div> -->
          <f7-button
            fill
            small
            round
            color="green"
            slot="inner-end"
            style="margin-right:5px;"
            @click="search"
          >搜索</f7-button>
        </f7-searchbar>
      </f7-subnavbar>
    </f7-navbar>
    <f7-block-title>毕业班生列表</f7-block-title>
    <f7-list>
      <f7-list-item
        swipeout
        v-for="(item,index) in items"
        :key="index"
        :title="item.学生姓名"
        :after="item.学生姓名"
        :link="`/account/${item._id}/index_${index}`"
        view="#main-view"
      >
      </f7-list-item>
    </f7-list>
    <div v-show="showPreloader" id="preloader" class="text-align-center">
      <f7-preloader></f7-preloader>
    </div>
    <LoadingDialog></LoadingDialog>
    </f7-page>
</template>

<script>
import LoadingDialog from "@/components/loadingdialog.vue";
import { mapState, mapGetters, mapMutations, mapActions } from "vuex";
var lastid = "";
var pagesize = 11;
export default {
  data(){
    return{

    }
  },
  mounted(){
    this.loadMore();
  },
  computed:{
    ...mapState('graduate',{
      items:'graduatelist',
      lastid:'lastid',
      showPreloader:'showPreloader'
    })
  },
  components: { 
    LoadingDialog
  },
  methods:{
    ...mapActions('graduate',["getAllGraduateInfo"]),
    search(){
      this.graduatelist={};
      this.lastid="";      
      this.loadMore();
    },
    loadMore() {
      let query = searchEL.f7Searchbar.query;
      this.getAllGraduateInfo({ search: query, pagesize: 20 });
    },

  }

}
</script>

<style>

</style>
