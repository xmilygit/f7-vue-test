<template>
    <f7-popup :opened="openself" class="demo-popup"  @popup:closed="$emit('close')">
      <f7-page>
        <f7-navbar title="选择教师">
          <f7-nav-right>
            <f7-link popup-close>确定</f7-link>
          </f7-nav-right>
        </f7-navbar>
        <f7-block>
          <f7-list>
              <f7-list-item v-for="(item,index) in items" :key="index" checkbox :value="item.id" :title="item.name"></f7-list-item>
          </f7-list>
        </f7-block>
      </f7-page>
    </f7-popup>
</template>
<script>
export default {
    data(){
        return{
            items:[
                {id:'214131313',name:'徐明1'},
                {id:'214131313',name:'徐明2'},
                {id:'214131313',name:'徐明3'}
                ],
                openself:false,
        }
    },
    props:['open','target'],
    watch:{
        open:function(val,oldval){
            if(val)
               this.openself=true;
            alert(this.target)
        }
    }
}
</script>


