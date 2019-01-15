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
          <f7-swipeout-button color="green" @click="teacherselect(item)">任课教师</f7-swipeout-button>
        </f7-swipeout-actions>
      </f7-list-item>
    </f7-list>
    <!-- <div v-show="showPreloader" id="preloader" class="text-align-center">
      <f7-preloader></f7-preloader>
    </div> -->
    <teacherselect :open="openteacherselect" @close="openteacherselect=false" :target="subject"></teacherselect>
  </f7-page>    
</template>

<script>
import teacherselect from '@/components/teacherlist.vue'
import { mapState, mapMutations, mapActions } from "vuex";
export default {
    data(){
        return{
            //items:['语文','数学','英语'],
            openteacherselect:false,
            subjectindex:this.$f7route.params.term||undefined,
            subject:''
        }
    },
    mounted(){
      //alert(this.$f7route.params.term)

    },
    computed:{
      ...mapState('mark',['termlist']),
      items:function(){
        return this.termlist[this.subjectindex].subject
      }
    },
    components:{
      teacherselect,
    },
    methods:{
      teacherselect(subject){
        this.openteacherselect=true;
        this.subject=subject;
      }
    }
}
</script>
