<template>
<div style="padding : 10px">
  <h4>팔로워</h4>
  <input @input="search($event.target.value)" placeholder="🔍" />
  <div class="post-header" v-for="(a, i) in follower" :key="i">
    <div class="profile" :style="{backgroundImage : `url(${a.image})`}"></div>
    <span class="profile-name">{{ a.name }}</span>
  </div>
</div>
</template>

<script>
import { onMounted, ref, toRefs, watch, computed } from 'vue';
import axios from 'axios';
import {useStore} from 'vuex';

export default {
  name:'mypage',
  props: {
    one : Number,
  },
  setup(props) {
    let follower = ref([]);
     let followerOriginal = ref([]);
    let {one} = toRefs(props);
    console.log(one.value)

    watch(one, ()=>{
    })

    let re = computed( ()=>{return follower.value.length} )
    console.log(re.value)

    let store = useStore();
    console.log(store.state.name)

    function search(검색어) {
      let newFollower = followerOriginal.value.filter((a)=>{
        return a.name.indexOf(검색어) != -1
      })
      follower.value = newFollower
    }

    onMounted(()=> {
        axios.get('/follower.json').then((a)=>{
      follower.value = a.data
      followerOriginal.value = [...a.data];
      })
    })

    return { follower, search }
  },
  data() {
    return {

    }
  },
}
</script>

<style scoped>



</style>