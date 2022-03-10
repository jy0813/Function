<template>
  <div>
    <router-view :blogData="blogData"></router-view>
  </div>
</template>

<script>
import blog from './assets/static/list.js'

  export default {
    name: 'App',
    data() {
      return {
        blogData: blog,
      }
    },
  }
</script>

<style>

</style>