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
    <teacherselect :open="openteacherselect" @close="openteacherselect=false" :items="teachersubject"></teacherselect>
  </f7-page>    
</template>

<script>
import teacherselect from '@/components/teacherlist.vue'
import linq from 'linq'
import { mapState, mapMutations, mapActions } from "vuex";
export default {
    data(){
        return{
            subjectitems:[],
            openteacherselect:false,
            subjectindex:this.$f7route.params.term||undefined,
            //subject:''
        }
    },
    mounted(){
      //alert(this.$f7route.params.term)
      this.getallteacher();
    },
    computed:{
      ...mapState('mark',['termlist','teachersubject','allteacher']),
      items:function(){
        return this.termlist[this.subjectindex].subject
      }
    },
    components:{
      teacherselect,
    },
    methods:{
      ...mapActions('mark',{
        getsubjectteacher:'getTeacherBySubject',
        getallteacher:'getAllTeacher'
      }),
      async teacherselect(subject){
        this.openteacherselect=true;
        await this.getsubjectteacher({subject:subject,term:this.termlist[this.subjectindex].term});
        linq.from(this.allteacher)
        .where('x=>x.username')
        //alert(this.teachersubject.length+":::"+this.allteacher)
        //this.subject=subject;
      }
    }
}
</script>
