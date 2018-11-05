<template>
 <nav class="mui-bar mui-bar-tab">
			<router-link class="mui-tab-item" to="/">
				<span class="mui-icon mui-icon-home"></span>
				<span class="mui-tab-label">首页</span>
			</router-link>
			<router-link class="mui-tab-item" to="/in_theaters">
				<span class="mui-icon mui-icon-videocam"></span>
				<span class="mui-tab-label">正在上映</span>
			</router-link>
			<router-link to="/coming_soon" class="mui-tab-item">
				<span class="mui-icon mui-icon-contact"></span>
				<span class="mui-tab-label">即将上映</span>
			</router-link>
			<router-link to="/new_movies" class="mui-tab-item">
				<span class="mui-icon mui-icon-gear"></span>
				<span class="mui-tab-label">新片榜</span>
			</router-link>
			<router-link to="/top250" class="mui-tab-item">
				<span class="mui-icon mui-icon-star"></span>
				<span class="mui-tab-label">TOP250</span>
			</router-link>
		</nav>
</template>
<script>
  export default {
    data(){
      return {
				// selected:this.$route.name,
				// flag:true
				
      }
    }
  }
</script>
<style lang="scss" scoped>

</style>
