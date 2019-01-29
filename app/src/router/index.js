import Vue from 'vue'
import Router from 'vue-router'
import index from '@/view/index.vue'
import miste from '@/view/index/miste.vue'
import classify from '@/view/index/classify.vue'
import shopCar from '@/view/index/shopCar.vue'
import profiles from '@/view/index/profiles.vue'
import search from '@/view/search.vue'
import dengshan from '@/components/index/miste/misteMenus/dengshan.vue'
import paobu from '@/components/index/miste/misteMenus/paobu.vue'
import huaxue from '@/components/index/miste/misteMenus/huaxue.vue'
import hudai from '@/components/index/miste/misteMenus/hudai.vue'
import lvyou from '@/components/index/miste/misteMenus/lvyou.vue'
import pinpai from '@/components/index/miste/misteMenus/pinpai.vue'
import zhishi from '@/components/index/miste/misteMenus/zhishi.vue'
import zhuangbei from '@/components/index/miste/misteMenus/zhuangbei.vue'
import xueshan from '@/components/index/miste/jingxuan/xueshan.vue'
import qq from '@/view/qq.vue'
import jianjie from '@/view/jianjie.vue'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'index',
      component: index,
      redirect:miste,
      children:[{
      	path:'/miste',
      	name:'miste',
      	component:miste,
      	meta:{
      		isLogin:false
      	},
      },{
      	path:'/classify',
      	name:'classify',
      	component:classify,
      	meta:{
      		isLogin:false
      	}
      },{
      	path:'/shopCar',
      	name:'shopCar',
      	component:shopCar,
      	meta:{
      		isLogin:true
      	}
      },{
      	path:'/profiles',
      	name:'profiles',
      	component:profiles,
      	meta:{
      		isLogin:false
      	}
      },{
	      		path:'/dengshan',
		      	name:'dengshan',
		      	component:dengshan,
	      	},{
	      		path:'/paobu',
		      	name:'paobu',
		      	component:paobu,
	      	},{
	      		path:'/huaxue',
		      	name:'huaxue',
		      	component:huaxue,
	      	},{
	      		path:'/hudai',
		      	name:'hudai',
		      	component:hudai,
	      	},{
	      		path:'/pinpai',
		      	name:'pinpai',
		      	component:pinpai,
	      	},{
	      		path:'/lvyou',
		      	name:'lvyou',
		      	component:lvyou,
	      	},{
	      		path:'/zhishi',
		      	name:'zhishi',
		      	component:zhishi,
	      	},{
	      		path:'/zhuangbei',
		      	name:'zhuangbei',
		      	component:zhuangbei,
	      	},{
	      		path:'/xueshan',
		      	name:'xueshan',
		      	component:xueshan,
	      	},{
	      		path:'/qq',
		      	name:'qq',
		      	component:qq,
	      	},{
	      		path:'/jianjie',
		      	name:'jiejie',
		      	component:jianjie,
	      	},]
    },

  ]
})
