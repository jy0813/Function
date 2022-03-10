<template>
  <div v-for="(item, i) in blogData" :key="i">
    <h5 @click="$router.push('/detail/'+i)">{{blogData[i].title}}</h5>
    <p>{{blogData[i].date}}</p>
  </div>
</template>

<script>
  export default {
    name: 'List',
    props: {
      blogData:Array,
    }
  }
</script>

<style>

</style>