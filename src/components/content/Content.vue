<template>
    <div class="col-sm-9 col-sm-offset-3 col-md-10 col-md-offset-2 main">
        <h1>Content items</h1>
        <div v-for="item in items" class="content-item">
            <h2>{{ item.title.rendered }}</h2>
            <p>{{ item.date }}</p>
            <p>{{ item.content.rendered }}</p>
        </div>

    </div>
</template>

<script>
import Vue from 'vue';

export default {
  name: 'content',
  data () {
    return {
        items: []
    }
  },
  beforeMount() {

    var self = this;

    Vue.$http.get('http://poc.zen7.nl/wp-json/wp/v2/posts/')
        .then(function(response) {
            self.items = response.data;
        })
        .catch(function(error) {
            console.log(error);
        })
  }
}

</script>

<style>
    .main {
        padding: 20px;
    }

    @media screen and (min-width: 768px) {
        .main {
            padding-left: 40px;
            padding-right: 40px;
        }
    }
</style>