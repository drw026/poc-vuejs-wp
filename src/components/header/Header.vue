<template>
    <nav class="navbar navbar-default navbar-fixed-top navbar-inverse">
      <div class="container-fluid">
        <div class="navbar-header">
            <a class="navbar-brand" href="/">{{ sitename }}</a>
        </div>
        <navigation></navigation>
      </div>
    </nav>
</template>

<script>
import Navigation from '../navigation/Navigation.vue'

export default {
  name: 'header',
  components: {
    Navigation
  },
  data () {
    return {}
  },
  props: ['sitename']
}
</script>