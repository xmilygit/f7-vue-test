<template>
  <f7-page>
    <f7-navbar title="学期管理" back-link="Back">
      <f7-nav-right>
        <f7-link icon-if-ios="f7:menu" icon-if-md="material:menu" panel-open="left"></f7-link>
      </f7-nav-right>
    </f7-navbar>
    <f7-block-title>学期列表</f7-block-title>
    <f7-list>
      <f7-list-item
        swipeout
        v-for="(item,index) in items"
        :key="index"
        :title="item"
      >
        <f7-swipeout-actions right>
          <!-- <f7-swipeout-button>重置密码</f7-swipeout-button> -->
          <f7-swipeout-button delete confirm-text="是否要删除该用户?">
            <f7-icon ios="f7:delete" md="material:delete"></f7-icon>
          </f7-swipeout-button>
          <f7-swipeout-button @click="$f7.preloader.show('green')">修改</f7-swipeout-button>
          <f7-swipeout-button @click="$f7router.navigate(`/subject/list/${item}`)">学科</f7-swipeout-button>
        </f7-swipeout-actions>
      </f7-list-item>
    </f7-list>
    <!-- <div v-show="showPreloader" id="preloader" class="text-align-center">
      <f7-preloader></f7-preloader>
    </div> -->
    <f7-fab
      position="right-bottom"
      slot="fixed"
      color="orange"
      href="/mark/schoolterm/add/"
      view="#main-view"
    >
      <f7-icon ios="f7:add" md="material:add"></f7-icon>
    </f7-fab>
  </f7-page>    
</template>

<script>
// import {createNamespacedHelpers, mapState, mapGetters, mapMutations, mapActions } from "vuex";
import {mapState, mapGetters, mapMutations, mapActions } from "vuex";
// const { mapActions:mapMarkActions} = createNamespacedHelpers('mark')
export default {
    data(){
        return{
            items:['2018上学期','2018下学期']
        }
    },
    mounted(){
      // 带模块的vuex测试
      // alert(this.$store.state.mark.marktest)
      this.termAdd()
    },
    methods:{
       ...mapActions('mark',['termAdd'])
    }
}
</script>
