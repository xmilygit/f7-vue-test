<template>
    <f7-page
    infinite
    :infinite-distance="50"
    :infinite-preloader="showPreloader"
    @infinite="loadMore"
  >
    <f7-navbar title="用户" back-link="Back">
      <f7-nav-right>
        <f7-link icon-if-ios="f7:menu" icon-if-md="material:menu" panel-open="left"></f7-link>
      </f7-nav-right>
      <f7-subnavbar :inner="false">
      <f7-searchbar
      id="searchEL"
        placeholder="搜索"
        :custom-search=true 
        :init=true       
      >
      <!-- <div slot="inner-start">Inner Start</div> -->
  <f7-button fill small round color="green" slot="inner-end" style="margin-right:5px;" @click="search">搜索</f7-button>
  <!-- <div slot="input-wrap-start">Input Wrap Start</div> -->
  <!-- <div slot="input-wrap-end">Input Wrap End</div> -->
  <!-- <div slot="before-inner">Before Inner</div> -->
  <!-- <div slot="after-inner">After Inner</div> -->
      
      </f7-searchbar>
      
    </f7-subnavbar>
    </f7-navbar>
    <f7-block-title>用户列表</f7-block-title>
    <f7-list>
      <f7-list-item swipeout v-for="item in items" :title="item.username" :key="item._id" :after="wxbinder(item.binders)" :link="`/account/${item.username}/${item._id}`" view="#main-view">
        <f7-swipeout-actions right>
          <!-- <f7-swipeout-button>重置密码</f7-swipeout-button> -->
          <f7-swipeout-button delete confirm-text="是否要删除该用户?">删除</f7-swipeout-button>
          <!-- <f7-swipeout-button>修改</f7-swipeout-button> -->
        </f7-swipeout-actions>
      </f7-list-item>
    </f7-list>
    <div id='preloader' class="text-align-center"><f7-preloader></f7-preloader></div>
  </f7-page>
</template>


<script>
var lastid = "";
var pagesize = 11;

export default {
  data() {
    return {
      items: [],
      allowInfinite: true,
      showPreloader: false
    };
  },
  computed: {
    
  },
  // created(){
  // },
  // activated() {
  //   console.log("page activated");
  //   // this.loadMore();
  // },
  mounted() {
    console.log("dom is load complate!");
    this.loadMore();
  },
  //   updated(){
  // console.log("dom updated")
  //   },
  methods: {
    test1() {
      console.log("test1");
    },
    wxbinder(binders) {
      if (binders.length > 0) return "已绑定";
      else return "";
    },
    search() {
      // console.log(searchEL.f7Searchbar.query);
      let self = this;
      self.items = [];
      lastid = "";
      self.allowInfinite = true;
      self.$$("#preloader").show();
      self.loadMore();
    },
    loadMore() {
      const self = this;
      const app = self.$f7;
      //console.log("========"+searchEL.f7Searchbar.query);
      if (!self.allowInfinite) return;
      let query = searchEL.f7Searchbar.query;

      console.log("loadmore");

      self.allowInfinite = false;

      this.$reqs({
        method: "POST",
        url: "/sys/search",
        data: {
          pagesize: pagesize,
          keyword: query,
          lastid: lastid
        }
      })
        .then(function(res) {
          let records = res.data.result.recordset;
          let recordsCount = res.data.result.count;
          if (!res.data.error) {
            if (records.length != 0) {
              lastid = records[records.length - 1]._id;
              self.items = self.items.concat(records);
              console.log(
                "找到" + recordsCount + "记录,当前记录数：" + self.items.length
              );
              if (self.items.length >= recordsCount) {
                //self.showPreloader = false;
                self.$$("#preloader").hide();
                self.allowInfinite = false;
                self.infinite = false;
                console.log("stop infinite");
                return;
              }
            } else {
              app.dialog.alert("未找到任何相关记录", "提示");
              self.$$("#preloader").hide();
              return;
            }
          } else {
            app.dialog.alert("错误：" + res.data.message, "出错了1");
            console.log(res.data.message);
          }
          self.allowInfinite = true;
        })
        .catch(function(err) {
          console.log("出错了3:" + err);
          self.allowInfinite = true;
          app.dialog.alert("错误：" + res.data.message, "出错了2");
        });
    }
  }
};
</script>