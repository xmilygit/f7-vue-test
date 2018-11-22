<template>
<f7-page>
    <f7-navbar title="用户信息" back-link="Back">
      <f7-nav-right>
        <f7-link icon-if-ios="f7:menu" icon-if-md="material:menu" panel-open="left"></f7-link>
      </f7-nav-right>
    </f7-navbar>
    
    <f7-card
    :title="account.username"
    >
    <f7-card-content>
      <p>身份证：{{account.pid}}</p>
      <p>性别：{{account.gender}}</p>
      <f7-block-title v-show="account.binders.length>0">帐户绑定情况</f7-block-title>
      <f7-list v-if="account.binders.length>0" simple-list>
      <f7-list-item swipeout v-for="(item,index) in account.binders" :key="index" :title="item.type" view="#main-view">
        <f7-swipeout-actions right>
          <f7-swipeout-button delete confirm-text="是否要删除该用户?"><f7-icon ios="f7:delete" md="material:delete"></f7-icon></f7-swipeout-button>
        </f7-swipeout-actions>
      </f7-list-item>
    </f7-list>
    </f7-card-content>
    <f7-card-footer>
        <f7-link icon-f7="compose"></f7-link>
        <f7-link icon-f7="lock"></f7-link>
  </f7-card-footer>
    </f7-card>
<button @click="getcookies">login</button>
<button @click="visi">look</button>
    <!-- <h3>current id:{{this.$f7route.params.id}}</h3>
    <h3>{{account}}</h3> -->
    <!-- <h3>idstr+:{{binders}}</h3> -->
    <!-- <h3>{{this.$store.state.allwoInfinite}}</h3> -->
    <!-- <h3>{{this.$store.state.showPreloader}}</h3> -->
    <!-- <h3>{{this.$store.state.lastid}}</h3> -->
    <!-- <h3>{{this.$store.state.AccList}}</h3> -->
    <!-- <h4>{{test}}</h4> -->
</f7-page>
</template>
<script>
// import { mapState, mapMutations, mapGetters, mapActions } from 'vuex'
var linq = require("linq");
export default {
  data() {
    return {
      account: {
        username: "努力加载中...",
        binders: []
      }
    };
  },
  mounted() {
    let acclist = this.$store.state.AccList;
    let currentid = this.$f7route.params.id;
    this.account = linq.from(acclist).firstOrDefault(x => x._id == currentid);
    // if (this.account.binders.length > 0) this.binders = true;
    // console.log(this.account);
  },
  created() {},
  computed: {
    // account: function() {
    //   console.log('exec')
    //   let acclist = this.$store.state.AccList;
    //   let currentid = this.$f7route.params.id;
    //   return linq.from(acclist).first(x => (x._id == currentid));
    // }
  },
  methods: {
    getcookies(){
      this.$store.dispatch("test")
    },
    visi(){
      this.$reqs({
        methods:'GET',
        url:'/sys/admin',
        withCredentials: true
      })
      .then(function(res){
        console.log(res.data)
      })
    }
  }
};
</script>

