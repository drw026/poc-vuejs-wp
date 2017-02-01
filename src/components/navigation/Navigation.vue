<template>
    <ul class="nav navbar-nav navbar-right">
        <li v-for='item in menu'>
            <!-- <a :href='item.href'>{{ item.name }}</a> -->
            <router-link v-bind:to='item.href'>{{ item.name }}</router-link>
        </li>
    </ul>
</template>

<script>
export default {
  name: 'navigation',
  data () {
    return {
        menu: [
            { name: 'home', href: '/' },
            { name: 'links', href: '/links'},
        ]
    }
  }
}
</script>