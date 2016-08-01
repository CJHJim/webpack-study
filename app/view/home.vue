<template lang="html" >
  <div>
    <header>hahahaha</header>
    <h1>welcome home {{ name }}</h1>
    <h2>hahaha</h2>
  </div>
</template>
<script>
  import Header from '../components/header.vue';
  module.exports = {
    data(){
      return {
        name: 'cjh'
      }
    },
    components: { Header }
  }
</script>
<style>
  @import "./home.style.scss";
</style>

<!-- <template>
<div class="message">Value is: {{ count }}</div>
<a href="#" @click.prevent="increment">Increment</a>
</template>

<script>
export default {
  data () {
    return {
      count: 0
    }
  },
  methods: {
    increment () {
      this.count ++;
    }
  }
}
</script>

<style>
</style> -->
