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
            v-for="(item,index) in items"
            :key="index"
            checkbox
            @change="checkvalidata"
            :checked="item.check"
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
      openself: false,
      selectedteacher:[],
      items:[]
    };
  },
  props: ["open", "select","selected"],
  computed: {
    //...mapState("mark", ["allteacher"])
  },
  mounted() {
    //this.getAllTeacher();
  },
  watch:{
    'selected':function(val){
      this.selectedteacher=val
    },
    'select':function(val){
      this.items=val;
    }
  },
  methods: {
    //...mapActions("mark", ["getAllTeacher"]),
    checkvalidata:function(evt){
      //alert(evt.target.checked+"::::"+evt.target.value+":::"+evt.target.title)
      //console.log(evt)
      //console.log(evt.target.parentNode.children[3].innerText)
      console.log(this.selectedteacher)
      if(evt.target.checked){
        this.selectedteacher.push(evt.target.parentNode.children[3].innerText.replace('\n',''))
      }else{
        this.selectedteacher.splice(this.selectedteacher.indexOf(evt.target.parentNode.children[3].innerText.replace('\n','')), 1);      
      }
      console.log(this.selectedteacher)
    },
  }
  // watch:{
  //     open:function(val,oldval){
  //         if(val)
  //            this.openself=true;
  //     }
  // }

};
</script>


