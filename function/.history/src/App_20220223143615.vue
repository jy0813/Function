<template>
<div class="menu">
  <a v-for="item in menu" :key="item"></a>
  </div> 
<div>
  <h4 :style="style">{{products[0]}}</h4>
  <p>{{price1}} 만원</p>
</div>
<div>
  <h4>{{products[1]}}</h4>
  <p>{{price2}} 만원</p>
</div>
<div>
  <h4>{{products[2]}}</h4>
  <p>{{price2}} 만원</p>
</div>
</template>

<script>


export default {
  name: 'App',
  data() {
    return {
      price1: 60,
      price2: 80,
      price3: 100,
      style : 'color : blue',
      products:['역삼동원룸','천호동원룸','마포구원룸'],
      menu:['Home','Shop','About'],
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
  margin-top: 60px;
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
