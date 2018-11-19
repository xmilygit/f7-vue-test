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
    label="Name"
    floating-label
    type="text"
    placeholder="Your name"
    clear-button
  >
    <f7-icon icon="demo-list-icon" slot="media"></f7-icon>
  </f7-list-input>
</f7-list>
</f7-page>
</template>

<script>
export default {
    
}
</script>
