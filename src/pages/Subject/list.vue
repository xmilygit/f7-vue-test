<template>
  <f7-page>
    <f7-navbar title="学科管理" back-link="Back">
      <f7-nav-right>
        <f7-link icon-if-ios="f7:menu" icon-if-md="material:menu" panel-open="left"></f7-link>
      </f7-nav-right>
    </f7-navbar>
    <f7-block-title>学科列表</f7-block-title>
    <f7-list>
      <f7-list-item
        swipeout
        v-for="(item,index) in items"
        :key="index"
        :title="item"
      >
        <f7-swipeout-actions right>
          <!-- <f7-swipeout-button>重置密码</f7-swipeout-button> -->
          <f7-swipeout-button delete confirm-text="是否要删除该学科?">
            <f7-icon ios="f7:delete" md="material:delete"></f7-icon>
          </f7-swipeout-button>
          <f7-swipeout-button>修改</f7-swipeout-button>
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
      href="/subject/add/"
      view="#main-view"
    >
      <f7-icon ios="f7:add" md="material:add"></f7-icon>
    </f7-fab>
  </f7-page>    
</template>

<script>
export default {
    data(){
        return{
            items:['语文','数学','英语']
        }
    }
}
</script>
