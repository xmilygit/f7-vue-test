<template>
  <f7-page>
    <f7-block-title>Floating Labels (MD-theme only)</f7-block-title>
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

  <f7-list-input
    label="Password"
    floating-label
    type="password"
    placeholder="Your password"
    clear-button
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
</f7-list>
  </f7-page>
</template>

<script>
export default {
  data() {
    return {
      val1: ""
    };
  },
  methods: {
  }
};
</script>
