<template>
  <f7-page>
    <LoadingDialog @dialogclose="dialogclose" :showDialog="dialog"></LoadingDialog>
    <form id="form1">
    <f7-block-title>Floating Labels (MD-theme only)</f7-block-title>
<f7-list no-hairlines-md>
  <f7-list-input
    label="Name"
    type="text"
    name='input3'
    :value="val1"
    @input="val1=$event.target.value"
  >
    <f7-icon icon="demo-list-icon" slot="media"></f7-icon>
  </f7-list-input>
  <f7-list-input
    label="Password"
    floating-label
    type="password"
    placeholder="Your password"
    clear-button
    name='input4'
  >
    <f7-icon icon="demo-list-icon" slot="media"></f7-icon>
  </f7-list-input>

  <f7-list-input
    label="E-mail"
    floating-label
    type="email"
    placeholder="Your e-mail"
    clear-button
  >
    <f7-icon icon="demo-list-icon" slot="media"></f7-icon>
  </f7-list-input>

  <f7-list-input
    label="URL"
    floating-label
    type="url"
    placeholder="URL"
    clear-button
  >
    <f7-icon icon="demo-list-icon" slot="media"></f7-icon>
  </f7-list-input>

  <f7-list-input
    label="Phone"
    floating-label
    type="tel"
    placeholder="Your phone number"
    clear-button
  >
    <f7-icon icon="demo-list-icon" slot="media"></f7-icon>
  </f7-list-input>

  <f7-list-input
    label="Resizable"
    floating-label
    type="textarea"
    resizable
    placeholder="Bio"
  >
    <f7-icon icon="demo-list-icon" slot="media"></f7-icon>
  </f7-list-input>
</f7-list>

<f7-block-title>Validation + Additional Info</f7-block-title>
<f7-list no-hairlines-md>
  <f7-list-input
    label="Name"
    type="text"
    placeholder="Your name"
    info="Default validation"
    required
    validate
    clear-button
    :value="val1"
    @input="val1=$event.target.value"
  >
    <f7-icon icon="demo-list-icon" slot="media"></f7-icon>
  </f7-list-input>

  <f7-list-input
    label="Fruit"
    type="text"
    placeholder="Type 'apple' or 'banana'"
    required
    validate
    pattern="apple|banana"
    clear-button
    name="input2"
  >
    <f7-icon icon="demo-list-icon" slot="media"></f7-icon>
    <span slot="info">Pattern validation (<b>apple|banana</b>)</span>
  </f7-list-input>

  <f7-list-input
    label="E-mail"
    type="email"
    placeholder="Your e-mail"
    info="Default e-mail validation"
    required
    validate
    clear-button
  >
    <f7-icon icon="demo-list-icon" slot="media"></f7-icon>
  </f7-list-input>

  <f7-list-input
    label="URL"
    type="url"
    placeholder="Your URL"
    info="Default URL validation"
    required
    validate
    clear-button
  >
    <f7-icon icon="demo-list-icon" slot="media"></f7-icon>
  </f7-list-input>

  <f7-list-input
    label="Number"
    type="text"
    placeholder="Enter number"
    info="With custom error message"
    error-message="Only numbers please!"
    required
    validate
    pattern="[0-9]*"
    clear-button
  >
    <f7-icon icon="demo-list-icon" slot="media"></f7-icon>
  </f7-list-input>
  <f7-list-button @click="clk">abcd</f7-list-button>
  <f7-list-button @click="s">show dialog</f7-list-button>
  <f7-list-button @click="h">hide dialog</f7-list-button>
</f7-list>
    </form>
  </f7-page>
</template>

<script>
import linq from 'linq';
import LoadingDialog from "@/components/loadingdialog.vue"
export default {
  data() {
    return {
      val1: "",
      dialog:{
        status:false,
        message:'ALERT显示',
        title:'测试',
      }
    };
  },
  mounted(){
    let temp1={input1:'abcd',input2:'123141',input3:'zxc',input4:'090'}
    let list=linq.range(1, 3).select("x=>x")

    console.log(list)
    //this.$f7.form.fillFromData('#form1', temp1)
  },
  components:{
    LoadingDialog,
  },
  methods: {
    clk(){
      console.log(this.$f7.form.convertToData("#form1"))
      this.val1='asdfasfsf'
    },
    dialogclose(){
      alert("close alert")
    },
    s(){
      this.dialog={status:true,message:'父组件传递的信息',title:'父组件ALERT'}
    },
    h(){
      this.dialog.status=false;
    }
  }
};
</script>
