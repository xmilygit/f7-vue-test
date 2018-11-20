<template>
<f7-page>
    <f7-navbar title="添加用户" back-link="Back">
      <f7-nav-right>
        <f7-link icon-if-ios="f7:menu" icon-if-md="material:menu" panel-open="left"></f7-link>
      </f7-nav-right>
    </f7-navbar>

    <f7-block-title>添加用户</f7-block-title>
<f7-list no-hairlines-md>
  <f7-list-input
    label="姓名"
    floating-label
    type="text"
    placeholder="用户登录名"
    clear-button
    required
    validate
    v-model.trim="newacc.username"
  ></f7-list-input>
  <f7-list-input
    label="身份证号"
    floating-label
    type="text"
    placeholder="身份证号"
    clear-button
    required
    validate
    v-model.trim='newacc.pid'
  ></f7-list-input>
<f7-list-item title="性别"></f7-list-item>
<f7-list-item radio value="男" name="demo-radio" :checked="newacc.gender==='男'" title="男"></f7-list-item>
  <f7-list-item radio value="女" name="demo-radio" :checked="newacc.gender==='女'" title="女"></f7-list-item>
  </f7-list>
  <f7-block>
      <f7-button fill color="green">保存</f7-button>
</f7-block>
</f7-page>
</template>

<script>
export default {
  data(){
    return{
      newacc:{
        username:'',
        gender:'男',
        pid:''
      }
    };
  },
  methods:{

  }
};
</script>
