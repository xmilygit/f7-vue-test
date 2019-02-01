<template>
  <f7-popup :opened="openself" class="demo-popup" @popup:closed="$emit('close')">
    <f7-page>
      <f7-navbar>
        <f7-nav-left>
          <f7-link icon-if-md="material:close" icon-if-ios="f7:close" panel-open="right" @click="openself=false"></f7-link>
        </f7-nav-left>
        <f7-nav-title>选择教师</f7-nav-title>
        <f7-nav-right>
          <f7-link popup-close @click="save">确定</f7-link>
        </f7-nav-right>
      </f7-navbar>
      <f7-block>
        <f7-block-title>学期：{{term}} 学科:{{subject}}</f7-block-title>
        <f7-list>
          <f7-list-item
            v-for="(item,index) in items"
            :key="index+subject"
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
      openself: this.open,
      selectedteacher:[],
      items:[]
    };
  },
  props: ["open", "select","selected","term","subject"],
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
    },
    "open":function(val){
      this.openself=val
      //alert(this.selected)
    }
  },
  methods: {
    ...mapActions("mark", ["setTeachingSubject"]),
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
    async save(){
      await this.setTeachingSubject({term:this.term,subject:this.subject,teachers:this.selectedteacher})
      //alert(this.term+this.subject+this.selectedteacher)
    }
  }
  // watch:{
  //     open:function(val,oldval){
  //         if(val)
  //            this.openself=true;
  //     }
  // }

};
</script>


