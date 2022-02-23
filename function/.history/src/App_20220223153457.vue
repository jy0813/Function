<template>
<div class="menu">
  <a v-for="(item, i) in menu" :key="'item' + i">{{item}}</a>
  </div> 
<div v-for="(item, k) in rooms" :key="'item' + k">
  <h4>{{item.address}}</h4>
  <p>{{numSet(item.price)}}원</p>
  <button @click="">허위매물신고</button>
  <span>신고수 : {{report}}</span>
</div>
</template>

<script>


export default {
  name: 'App',
  data() {
    return {
      menu:['Home','Shop','About'],
      rooms:[
        {
          address:'군자동 원룸',
          price:'1200000000',
        },
        {
          address:'장안동 원룸',
          price:'1500000000',
        },
        {
          address:'화양동 원룸',
          price:'1000000000',
        }
      ],
      report:0,
    }
  },
   methods: {
    numSet(val) {
      if (!val) return (val = '');
      return val.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
    },
    report() {
      report += 1;
    }
   }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

.menu {
  background: darkslateblue;
  padding: 15px;
  border-radius: 5px;
}

.menu a {
  color:white;
  padding:10px;
}


</style>
