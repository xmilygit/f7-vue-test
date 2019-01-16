<template>
  <f7-popup :opened="open" class="demo-popup" @popup:closed="$emit('close')">
    <f7-page>
      <f7-navbar title="选择教师">
        <f7-nav-right>
          <f7-link popup-close>确定</f7-link>
        </f7-nav-right>
      </f7-navbar>
      <f7-block>
        <f7-list>
          <f7-list-item
            v-for="(item,index) in allteacher"
            :key="index"
            checkbox
            :value="item._id"
            :title="item.username"
          ></f7-list-item>
        </f7-list>
      </f7-block>
    </f7-page>
  </f7-popup>
</template>
<script>
import { mapState, mapActions } from "vuex";
const linq=require('linq');
export default {
  data() {
    return {
      // items:[
      //     {id:'214131313',name:'徐明1'},
      //     {id:'214131313',name:'徐明2'},
      //     {id:'214131313',name:'徐明3'}
      //     ],
      openself: false
    };
  },
  props: ["open", "items"],
  computed: {
    ...mapState("mark", ["allteacher"])
  },
  mounted() {
    this.getAllTeacher();
    alert(this.items.length+":::"+this.allteacher.length)
  },
  methods: {
    ...mapActions("mark", ["getAllTeacher"]),
  }
  // watch:{
  //     open:function(val,oldval){
  //         if(val)
  //            this.openself=true;
  //     }
  // }

};
</script>


