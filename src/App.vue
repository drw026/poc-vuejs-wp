<template>
  <div id="app">
    <app-header :sitename="sitename"></app-header>
    <div class="container-fluid">
      <div class="row">
        <app-sidebar></app-sidebar>
        <router-view></router-view>
      </div>
    </div>
  </div>
</template>

<script>
import appHeader from './components/header/Header.vue'
import appSidebar from './components/sidebar/Sidebar.vue'

export default {
  name: 'app',
  data () {
    return {
      sitename: 'Vue JS POC'
    }
  },
  components: {
    appHeader,
    appSidebar,
  }
}
</script>

<style>
  body {
    padding-top: 50px;
  }
</style>
