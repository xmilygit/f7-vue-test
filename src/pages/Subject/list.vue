<template>
  <f7-page>
    <f7-navbar title="学科管理" back-link="Back">
      <f7-nav-right>
        <f7-link icon-if-ios="f7:menu" icon-if-md="material:menu" panel-open="left"></f7-link>
      </f7-nav-right>
    </f7-navbar>
    <f7-block-title>学科列表 学期:{{termname}}</f7-block-title>
    <f7-list>
      <f7-list-item swipeout v-for="(item,index) in items" :key="index" :title="item">
        <f7-swipeout-actions right>
          <f7-swipeout-button color="green" @click="teacherselect(item)">任课教师</f7-swipeout-button>
        </f7-swipeout-actions>
      </f7-list-item>
    </f7-list>
    <!-- <div v-show="showPreloader" id="preloader" class="text-align-center">
      <f7-preloader></f7-preloader>
    </div>-->
    <teacherselect
      :open="openteacherselect"
      @close="openteacherselect=false"
      :select="subjectitems"
      :selected="selected"
      :term="termname"
      :subject="subjectname"
    ></teacherselect>
  </f7-page>
</template>

<script>
import teacherselect from "@/components/teacherlist.vue";
import linq from "linq";
import { mapState, mapMutations, mapActions } from "vuex";
export default {
  data() {
    return {
      subjectitems: [],
      openteacherselect: false,
      subjectindex: this.$f7route.params.term || undefined,
      selected:[],
      subjectname:''
    };
  },
  async mounted() {
    //alert(this.$f7route.params.term)
    await this.getallteacher();
  },
  computed: {
    ...mapState("mark", ["termlist", "teachersubject", "allteacher"]),
    items: function() {
      return this.termlist[this.subjectindex].subject;
    },
    termname:function(){
      return this.termlist[this.subjectindex].term;
    }
  },
  components: {
    teacherselect
  },
  methods: {
    ...mapActions("mark", {
      getsubjectteacher: "getTeacherBySubject",
      getallteacher: "getAllTeacher"
    }),
    async teacherselect(subject) {
      this.subjectname=subject
      this.openteacherselect = true;
      await this.getsubjectteacher({
        subject: subject,
        term: this.termlist[this.subjectindex].term
      });
      this.selected = linq
        .from(this.teachersubject)
        .select(t => t.username)
        .toArray();
      this.subjectitems = linq
        .from(this.allteacher)
        .select(t => {
          if (this.selected.indexOf(t.username) != -1) {
            return { _id: t._id, username: t.username, check: true };
          } else {
            return { _id: t._id, username: t.username,check:false };
          }
        })
        .toArray();
      //console.log(target);
      //linq.from(this.allteacher).
      //.where('x=>x.username.')
      //alert(this.teachersubject.length+":::"+this.allteacher)
      //this.subject=subject;
    }
  }
};
</script>
