<template>
  <f7-page>
    <!-- <f7-navbar title="Left Panel"></f7-navbar>
    <f7-block strong>
      <p>Left panel content goes here</p>
    </f7-block> -->
    <f7-block-title>用户</f7-block-title>
    <f7-list>
      <f7-list-item link="/accountlist/" title="用户列表" view="#main-view" panel-close></f7-list-item>
      <f7-list-item link="/account/import" title="导入用户" view="#main-view" panel-close></f7-list-item>
    </f7-list>
    <f7-block-title>成绩</f7-block-title>
    <f7-list>
      <f7-list-item link="/mark/schoolterm/" title="学期列表" view="#main-view" panel-close></f7-list-item>
      <f7-list-item link="/mark/schoolterm/add/" title="添加学期" view="#main-view" panel-close></f7-list-item>
      <f7-list-item link="/mark/schoolterm/test/" title="添加TEST" view="#main-view" panel-close></f7-list-item>
    </f7-list>
    <f7-block-title>毕业生管理</f7-block-title>
    <f7-list>
      <f7-list-item link="/graduate/list/" title="毕业生列表" view="#main-view" panel-close></f7-list-item>
    </f7-list>
    <f7-block-title>功能开关</f7-block-title>
    <f7-list>
      <f7-list-item link="/test/" title="test1" view="#main-view" panel-close></f7-list-item>
      <f7-list-item link="/form/" title="Form" view="#main-view" panel-close></f7-list-item>
    </f7-list>
  </f7-page>
</template>
<script>
export default {}
</script>