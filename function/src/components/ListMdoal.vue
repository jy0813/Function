<template>
   <div class="modal_wrap" :class="{is_show : isShow}">
    <div class="modal">
      <button class="close" @click="$emit('closeModal')"></button>
      <div class="modal_head">
        <p class="ttl">{{rooms[listNum].address}}</p>
      </div>
      <div class="modal_body">
        <input v-model.number="count">
        <select v-model="color">
          <option>블랙</option>
          <option>화이트</option>
          <option>베이지</option>
        </select>
        <p class="txt">{{count}}개</p>
        <p class="txt">옵션 : {{color}}</p>
        <p class="txt">{{numSet(rooms[listNum].price * count)}}</p>
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
   data() {
    return {
      count:1,
      color:'블랙',
    }
  },
  props: {
    rooms: Array,
    listNum: Number,
    isShow: Boolean,
  },
  watch : {
    count(a) {
      if(a < 1) {
        alert('1개 미만은 입력할 수 없습니다.')
        this.count = 1;
      }
      else if(isNaN(a) == true) {
        alert('숫자만 입력이 가능 합니다.')
        this.count = 1;
      }
    }
  },
  methods: {
      numSet(val) {
        if (!val) return (val = '');
        return val.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
      },
  }
}
</script>

<style>

</style>