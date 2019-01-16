<template>
<f7-page>
    <f7-navbar title="添加学科" back-link="Back">
      <f7-nav-right>
        <f7-link icon-if-ios="f7:menu" icon-if-md="material:menu" panel-open="left"></f7-link>
      </f7-nav-right>
    </f7-navbar>

    <f7-block-title>添加学科</f7-block-title>
<f7-list no-hairlines-md>
  <f7-list-input
    label="学科名称"
    floating-label
    type="text"
    placeholder="学科名称"
    clear-button
    required
    validate
    v-model.trim="subject"
  ></f7-list-input>
  <f7-block>
      <f7-button fill color="green">保存</f7-button>
  </f7-block>
</f7-list>
</f7-page>
</template>

<script>
export default {
  data(){
    return{
      subject:""
    }
  },
  methods:{

  }
};
</script>
