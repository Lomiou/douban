import VueRouter from 'vue-router'
import home from '../components/home'
import in_theaters from '../components/moves/in_theaters'
import coming_soon from '../components/moves/coming_soon'
import new_movies from '../components/moves/new_movies'
import top250 from '../components/moves/top250'
import detail from '../components/moves/detail'
import playmovie from '../components/moves/playmovie'
var router = new VueRouter({
  routes: [
    {path: '/' , redirect: '/home'},
    {path: '/home' , component: home , name: 'home',props: true},
    {path: '/in_theaters' , component: in_theaters , name: 'in_theaters',props: true},
    {path: '/coming_soon' , component: coming_soon , name: 'coming_soon'},
    {path: '/new_movies' , component: new_movies , name: 'new_movies'},
    {path: '/top250' , component: top250 , name: 'top250'},
    {path: '/detail' , component: detail , name: 'detail',props: true},
    {path: '/playmovie' , component: playmovie , name: 'playmovie'}
  ],
  linkActiveClass: 'mui-active'
  
})
export default router

