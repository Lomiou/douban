<template>
  <mt-header fixed>
  <router-link to="/" slot="left">
    <mt-button>豆瓣</mt-button>
  </router-link>
  <mt-button slot="right">
    <mt-button>电影</mt-button>
    <mt-button>图书</mt-button>
    <mt-button>广播</mt-button>
    <mt-button>小组</mt-button>
    <Icon type="ios-search" />
  </mt-button>
</mt-header>
</template>
<script>
  export default {

  }
</script>
<style lang="scss" scoped>
  .ivu-icon{
    margin-top: 13px;
  }
</style>
