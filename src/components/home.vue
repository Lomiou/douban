<template>
  <!-- <ul>
    <li v-for="item in newMoveList" :key="item.id" @click="godetail(item.id)">
      <img :src="item.images.small" alt="">
      <div class="right">
        <p class="title">{{ item.title }}</p>
        <p>主演:{{ getName(item.casts) }}</p>
        <p>时长:{{ item.durations[0] }}</p>
        <p>{{ item.genres.join() }}</p>
        <p>上映时间:{{ item.pubdates.join() }}</p>
      </div>
    </li>
  </ul> -->
  <div class="home-container">
    <div class="hot">
      <span>新片上映</span>
      <router-link to="/new_movies">更多</router-link>
    </div>
    <ul>
      <li v-for="a in newMoveList" :key="a.id" @click="godetail(a.id)">
        <img :src="a.images.small" alt="">
        <p>{{ a.title }}</p>
      </li>
    </ul>
    <div class="hot">
      <span>影院热映</span>
      <router-link to="/in_theaters">更多</router-link>
    </div>
    <ul>
      <li v-for="b in ingMoveList" :key="b.id" @click="godetail(b.id)">
        <img :src="b.images.small" alt="">
        <p>{{ b.title }}</p>
      </li>
    </ul>
    <div class="hot">
      <span>即将上映</span>
      <router-link to="/coming_soon">更多</router-link>
    </div>
    <ul>
      <li v-for="c in comMoveList" :key="c.id" @click="godetail(c.id)">
        <img :src="c.images.small" alt="">
        <p>{{ c.title }}</p>
      </li>
    </ul>
    <div class="hot">
      <span>top250</span>
      <router-link to="/top250">更多</router-link>
    </div>
    <ul>
      <li v-for="d in newMoveList" :key="d.id" @click="godetail(d.id)">
        <img :src="d.images.small" alt="">
        <p>{{ d.title }}</p>
      </li>
    </ul>
  </div>
</template>
<script>
const API_PROXY = "https://bird.ioliu.cn/v1/?url=";
// import { Indicator } from 'mint-ui';
export default {
  data() {
    return {
      newMoveList: [],
      ingMoveList:[],
      comMoveList:[],
      topMoveList:[],
      count: 8,
      start: 0
    };
  },
  methods: {
    getNewMove() {
      this.$loading.open();
      this.axios
        .post(API_PROXY + "http://api.douban.com/v2/movie/new_movies", {
          count:this.count,
          apikey: "0b2bdeda43b5688921839c8ecb20399b"
        })
        .then(res => {
          // console.log(res.data)
          this.newMoveList = res.data.subjects;
          this.$loading.close();
        });
      this.axios
        .post(API_PROXY + "http://api.douban.com/v2/movie/in_theaters", {
          count:this.count,
          start: 0,
          apikey: "0b2bdeda43b5688921839c8ecb20399b"
        })
        .then(res => {
          this.ingMoveList = res.data.subjects;
        });
      this.axios
        .post(API_PROXY + "http://api.douban.com/v2/movie/coming_soon", {
          count:this.count,
          start: 0,
          apikey: "0b2bdeda43b5688921839c8ecb20399b"
        })
        .then(res => {
          this.comMoveList = res.data.subjects;
        });
      this.axios
        .post(API_PROXY + "http://api.douban.com/v2/movie/top250", {
          count:this.count,
          start: 0,
          apikey: "0b2bdeda43b5688921839c8ecb20399b"
        })
        .then(res => {
          this.topMoveList = res.data.subjects;
        });
        this.$loading.close();
    },
    // getName(arr) {
    //   return arr
    //     .map(element => {
    //       // console.log(element.name)
    //       return element.name;
    //     })
    //     .join("");
    // },
    godetail(id) {
      console.log(id);
      this.$router.push({
        name: "detail",
        params: { id }
      });
    }
  },
  created() {
    this.getNewMove();
  }
};
</script>
<style lang="scss" scoped>
.home-container{
  padding: 20px;
  .hot{
    display: flex;
    justify-content: space-between;
  }
  ul{
    white-space: nowrap;
    overflow-x: auto;
    li{
      margin: 5px;
      list-style: none;
      display: inline-block;
      width: 100px;
      img {
        height: 150px;
      }
      p{
        overflow: hidden;
        white-space: nowrap;
        text-overflow: ellipsis;
      }
    }
  }
}
// li {
//   list-style: none;
//   display: flex;
//   margin-top: 30px;
//   padding-left: 15px;
//   img {
//     display: block;
//     height: 180px;
//   }
//   .right {
//     margin-left: 20px;
//     margin-right: 15px;
//     .title {
//       font-size: 16px;
//       font-weight: 600;
//       color: #000;
//     }
//   }
// }
</style>
