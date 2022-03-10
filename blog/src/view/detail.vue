<template>
  <div class="container mt-4">
    <h2>디테일 페이지</h2>
    <h5>{{blogData[$route.params.id].title}}</h5>
    <p>{{blogData[$route.params.id].content}}</p>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  props:{
    blogData: Array,
  }

}
</script>

<style>

</style>