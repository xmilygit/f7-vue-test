<template>
  <f7-app :params="f7params">
    <!-- Main View -->
    <f7-view id="main-view" url="/" main></f7-view>
  </f7-app>
</template>

<script>
// Import Routes
import routes from './routes.js'

export default {
  data() {
    return {
      // Framework7 parameters here
      f7params: {
        id: 'io.framework7.testapp', // App bundle ID
        name: 'Framework7', // App name
        theme: 'auto', // Automatic theme detection
        // App routes
        routes: routes,
      },
    }
  }
}
</script>
