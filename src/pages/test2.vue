<template>
    


<f7-list media-list>
  <f7-list-item
    link="/home/"
    title="Item Title"
    subtitle="Item Subtitle"
    text="Text"
    after="Read more"
    >
      <img src="path-to-my-image.jpg" slot="media">
      <div slot="root-start">Root Start</div>
      <div slot="root">Root End</div>
      <div slot="content-start">Content Start</div>
      <div slot="content">Content End</div>
      <div slot="media-start">Media Start</div>
      <div slot="media">Media</div>
      <span slot="after-start">After Start</span>
      <span slot="after">After End</span>
      <div slot="inner-start">Inner Start</div>
      <div slot="inner">Inner End</div>
      <div slot="before-title">Before Title</div>
      <div slot="after-title">After Title</div>
  </f7-list-item>
</f7-list>
</template>
<script>
export default {
    
}
</script>
