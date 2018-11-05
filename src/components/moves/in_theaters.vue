<template>
  <ul
  v-infinite-scroll="loadMore0"
  infinite-scroll-disabled="loading0"
  infinite-scroll-distance="10">
    <li v-for="item in in_MoveList" :key="item.id" @click="godetail(item.id)">
      <img :src="item.images.small" alt="">
      <div class="right">
        <p class="title">{{ item.title }}</p>
        <p>主演:{{ getName(item.casts) }}</p>
        <p>时长:{{ item.durations[0] }}</p>
        <p>{{ item.genres.join() }}</p>
        <p>上映时间:{{ item.pubdates.join() }}</p>
      </div>
    </li>
  </ul>
</template>
<script>
const API_PROXY = 'https://bird.ioliu.cn/v1/?url='

  export default {
    data () {
      return {
        in_MoveList: [],
        loading0: false,
        count: 20,
        start:0,
        page: 1,
        totalpage: 0
      }
    },
    methods: {
      getNewMove() {
        this.$loading.open();
        this.axios.post(API_PROXY + 'http://api.douban.com/v2/movie/in_theaters',{
          count: this.count,
          start: this.start,
          apikey:'0b2bdeda43b5688921839c8ecb20399b'}).then(res => {
          console.log(res.data)
          this.totalpage = Math.ceil(res.data.total/this.count);
          this.in_MoveList.push(...res.data.subjects);
          this.$loading.close();
        })
      },
      getName(arr) {
        return arr.map(element => {
          // console.log(element.name)
          return element.name
        }).join('')
      },
       godetail(id){
        console.log(id)
        this.$router.push({
          name: 'detail',
          params: { id }
        })
      },
      loadMore0(){
        this.page++;
        if(this.page > this.totalpage){
        this.loading = true;
        return;
      }
      this.start = (this.page-1)*this.count
			this.getNewMove()
      }
    },
    created () {
      this.getNewMove()
    }
  }
</script>
<style lang="scss" scoped>
  li{
    list-style: none;
    display: flex;
    margin-top: 30px;
    padding-left: 15px;
    img{
      display: block;
      height: 180px;
    }
    .right{
      margin-left: 20px;
      margin-right: 15px;
      .title{
        font-size: 16px;
        font-weight: 600;
        color:#000
      }
    }
  }
</style>
