<template>
  <div id="container">
    <div class="menu">
      <a v-for="(item, i) in menu" :key="'item' + i">{{item}}</a>
    </div>
    <main id="contents" class="home_page">
      <section class="home_product_sec">
        <div class="room_wrap">
          <h2 class="list_ttl">상품 리스트</h2>
          <div class="room_list">
            <div class="room" v-for="(item, index) in rooms" :key="index">
              <h4>{{item.address}}</h4>
              <a :href="item.link" class="thumb_area">
                <figure class="thumb" :style="`background-image: url('${item.img}')`"></figure>
              </a>
              <p>{{numSet(item.price)}}원</p>
              <button @click="reportBtn(index)">허위매물신고</button>
              <span>신고수 : {{item.report}}</span>
              <button @click="[modalOpen(),listNum = index]">상세보기</button>
            </div>
          </div>
        </div>
      </section>
    </main>
  </div>
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
  <Discount/>
</template>

<script>

  import products from './assets/static/products';
  import Discount from './components/discountBanner.vue';

  export default {
    name: 'App',
    data() {
      return {
        listNum:0,
        menu: ['Home', 'Shop', 'About'],
        rooms:  products,
        isShow:false,
      }
    },
    methods: {
      numSet(val) {
        if (!val) return (val = '');
        return val.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
      },
      reportBtn(index) {
        this.rooms[index].report += 1;
      },
      modalOpen() {
        this.isShow = !this.isShow;
      }
    }
  }
</script>

<style>
  @import './assets/css/base.css';


  #app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
  }

  #container {
    background: #fff;
    clear: both;
  }

  #contents {
    padding-bottom: 100px;
    min-height: calc(100vh - 502px);
  }

  .menu {
    background: darkslateblue;
    padding: 15px;
    border-radius: 5px;
  }

  .menu a {
    color: white;
    padding: 10px;
  }

  .room_list {
    display: flex;
    justify-content: space-around;
  }

  /* Default */
  .thumb_area {
    display: block;
    position: relative;
    width: 100%;
    height: 100%;
  }

  .thumb_area img {
    max-width: 100%;
    height: auto;
  }

  .thumb {
    position: absolute;
    display: block;
    width: 100%;
    height: 100%;
    background-size: cover;
    margin: 0;
  }
</style>