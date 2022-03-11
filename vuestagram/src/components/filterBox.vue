<template>
    <div @click="fire" :class="k" class="filter-item" :style="{backgroundImage : `url(${image})`}">
      <slot :msg="msg"></slot>   
    </div> 
</template>

<script>
export default {
  name:'filterbox',
  props: {
    image:String,
    k:String,
  },
  data() {
    return {
      msg:'filter'
    }
  },
  methods: {
    fire() {
      this.emitter.emit('filterClick',this.k)
    }
  },
}
</script>

<style>
.filter-item {
  width: 100px;
  height: 100px;
  margin: 10px 10px 10px auto;
  padding: 8px;
  display: inline-block;
  color : white;
  background-size: cover;
  background-position : center;
}
</style>