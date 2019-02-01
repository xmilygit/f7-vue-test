<template>
  <f7-page>
    <f7-navbar title="筛选"></f7-navbar>
    <f7-list>
      <f7-list-input floating-label clear-button label="关键字"></f7-list-input>
    <f7-list-item title="用户类型" smart-select>

    <select name="car" multiple>
      <!-- <optgroup label="Japanese"> -->
        <option value="teacher">教师</option>
        <option value="honda">Honda</option>
      <!-- </optgroup> -->
    </select>
    </f7-list-item>
    </f7-list>
  </f7-page>
</template>
<script>
export default {}
</script>
