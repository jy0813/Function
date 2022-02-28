<template>
   <div class="modal_wrap" :class="{is_show : isShow}">
    <div class="modal">
      <button class="close" @click="isShow = false"></button>
      <div class="modal_head">
        <p class="ttl">{{rooms[listNum].address}}</p>
      </div>
      <div class="modal_body">
        <p class="txt">{{numSet(rooms[listNum].price)}}</p>
      </div>
      <div class="modal_foot">
        <div class="btn_area">
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name:'ListModal',
  props: {
    roomsData: Array,
    listNumData: Number,
  },
  data() {
    return {

    }
  }
}
</script>

<style>

</style>