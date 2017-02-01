<template>
  <div class="col-sm-3 col-md-2 sidebar">
    Sidebar
  </div>
</template>

<script>
export default {
  name: 'sidebar',
  data () {
    return {}
  }
}
</script>

<style>
  @media screen and (min-width: 768px) {
  .sidebar {
    position: fixed;
    top: 51px;
    bottom: 0;
    left: 0;
    z-index: 1000;
    display: block;
    padding: 20px;
    overflow-x: hidden;
    overflow-y: auto;
    background-color: #f5f5f5;
    border-right: 1px solid #eee;
  }
}
</style>