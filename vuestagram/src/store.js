
import axios from 'axios'
import { createStore } from 'vuex'

const store = createStore({
  state(){
    return {
      name: 'kim',
      age :20,
      likes: 30,
      likesClick : false,
      more: {},
    }
  },
  mutations: {
    setMore(state, data) {
      state.more = data
    },
    이름변경(state) {
      state.name = 'park'
    },
    나이변경(state, data) {
      state.age += data
    },
    좋아요(state) {
      if(state.likesClick == false) {
        state.likes++;
        state.likesClick = true;
      }
      else {
        state.likes--;
        state.likesClick = false;
      }
    }
  },
  actions: {
    getData(context) {
      axios.get(`https://codingapple1.github.io/vue/more0.json`)
      .then((a)=>{
        a.data
        context.commit('setMore',a.data)
      })
    },
  },
})

export default store