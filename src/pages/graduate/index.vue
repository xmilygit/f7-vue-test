<template>
    <f7-page>
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
        :title="item.username"
        :after="wxbinder(item.wxopenid)"
        :link="`/account/${item._id}/index_${index}`"
        view="#main-view"
      >
      </f7-list-item>
    </f7-list>
    <div v-show="showPreloader" id="preloader" class="text-align-center">
      <f7-preloader></f7-preloader>
    </div>
    </f7-page>
</template>

<script>
import { mapState, mapGetters, mapMutations, mapActions } from "vuex";
var lastid = "";
var pagesize = 11;
export default {

}
</script>

<style>

</style>
