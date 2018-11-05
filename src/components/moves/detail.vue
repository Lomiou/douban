<template>
  <div class="detail">
    <p class="title">{{ movieinfo.title }} ({{ movieinfo.original_title }})  {{ movieinfo.year }} </p>
    <div class="top">
      <img :src="movieinfo.images&&movieinfo.images.small" alt="">
      <div class="top-r">
        <p>导演:{{ getName(movieinfo.directors) }}</p>
        <p>主演:{{ getName(movieinfo.casts) }}</p>
        <p>{{ movieinfo.genres && movieinfo.genres.join() }}</p>
        <p>上映:{{ movieinfo.year }}  {{ movieinfo.countries &&movieinfo.countries.join() }}</p>
        <!-- <p>{{ movieinfo.title }}</p> -->
      </div>
    </div>
    <div style="margin-top: 20px">
       <mt-button size="small" type="default" @click="look">点击观看</mt-button>
    </div>
    <div class="jieshao">
      <p>剧情简介</p>
      <p>{{ movieinfo.summary }}</p>
      </div>
    <p>演员</p>
    <ul class="avatar">
      <li v-for="(a,i) in movieinfo.casts" :key="i">
      <img :src="a.avatars&&a.avatars.small" alt="">
      <p>{{ a.name }}</p>
      </li>
    </ul>
     
  </div>
</template>
<script>
const API_PROXY = "https://bird.ioliu.cn/v1/?url=";
export default {
  props: ["id"],
  data() {
    console.log(this.$route.params.id);
    return {
      idx: this.$route.params.id,
      movieinfo: {}
    };
  },
  methods: {
    getNewMove() {
      this.$loading.open();
      this.axios
        .post(API_PROXY + "http://api.douban.com/v2/movie/subject/" + this.idx)
        .then(res => {
          // console.log(res.data);
          this.movieinfo = res.data;
          this.$loading.close();
        });
    },
    getName(arr) {
      if(!arr) return '';
      return arr
        .map(element => {
          // console.log(element.name)
          return element.name;
        })
        .join("");
    },
    look(){
      this.$router.push({
        name: 'playmovie'
      })
    }
  },
  created() {
    this.getNewMove();
  }
};
</script>
<style lang="scss" scoped>
.detail {
  overflow-x: hidden;
  padding: 30px 15px 0 15px;
  .title{
    color: #000;
    font-size: 20px;
  }
  .top {
    display: flex;
    img {
      height: 180px;
    }
    .top-r {
      margin-left: 20px;
    }
  }
  .jieshao {
    margin: 20px 0;
  }
  .avatar {
    white-space: nowrap;
    overflow-x: auto;
    li {
      margin-left: 5px;
      list-style: none;
      display: inline-block;
      img {
        height: 180px;
      }
    }
  }
}
</style>
