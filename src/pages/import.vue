<template>
  <f7-page>
    <f7-navbar title="用户数据导入" back-link="Back">
      <f7-nav-right>
        <f7-link icon-if-ios="f7:menu" icon-if-md="material:menu" panel-open="left"></f7-link>
      </f7-nav-right>
    </f7-navbar>
    <f7-block>
      <div class="button button-fill button-big button-raised">
        浏览
        <input type="file" class="filebrow" @change="appendfile">
      </div>
      <f7-list simple-list>
        <f7-list-item v-for="(item,index) in files" :key="index" :title="item.name">
          <f7-button fill @click="upload">上传</f7-button>
        </f7-list-item>
      </f7-list>
      <f7-card v-show="files">
        <f7-card-content>{{files?files.name:''}}</f7-card-content>
        <f7-card-footer>
          <f7-button fill @click="upload">上传</f7-button>
        </f7-card-footer>
      </f7-card>
    </f7-block>
  </f7-page>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      files: undefined,
      uploadnow: false
    };
  },
  methods: {
    appendfile(evt) {
      console.log(evt.target.files);
      let file = evt.target.files[0];
      if (file.size > 10 * 1024 * 1024) {
        alert("文件超出设定范围，只允许上传10M以下的文件！");
        return;
      }
      this.files = evt.target.files[0];
    },
    upload() {
      if (this.uploadnow) return;
      this.uploadnow = true;
      let app = this.$f7;
      let progressbarObj = app.progressbar.show(
        0,
        app.theme == "md" ? "yellow" : "blue"
      );
      let fd = new FormData();
      fd.append("file", this.files);
      let config = {
        onUploadProgress: ProgressEvent => {
          let complete =
            ((ProgressEvent.loaded / ProgressEvent.total) * 100) | 0;
          app.progressbar.set(progressbarObj, complete);
        },
        headers: {
          "Content-Type": "multipart/form-data"
        }
      };
      axios
        .post("/sys/importaccount", fd, config)
        .then(res => {
          app.progressbar.hide(progressbarObj);
          this.uploadnow = false;
          if (res.data.error) {
            app.dialog.alert(res.data.message, "1出错了");
            return;
          }
          app.dialog.alert(res.data.result, "导入成功");
        })
        .catch(res => {
          app.progressbar.hide(progressbarObj);
          this.uploadnow = false;
          // console.log(res)
          app.dialog.alert(res, "2出错了");
        });
    }
  }
};
</script>

<style>
.filebrow {
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  outline: none;
  background-color: transparent;
  filter: alpha(opacity=0);
  -moz-opacity: 0;
  -khtml-opacity: 0;
  opacity: 0;
}
</style>
