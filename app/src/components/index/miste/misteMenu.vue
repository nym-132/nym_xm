<!--登山馆 等menu-->


<template>
	<div class="menu">
	   <dl v-for="(item,index) in list" @click="dj(item)">
	   	 <dt><img :src="item.typeLogo"/></dt>
	   	 <dd>{{item.typeName}}</dd>
	   </dl>
	</div>
</template>

<script>
	export default{
		data(){
			return{
				list:[]
			}
		},
		mounted(){
			this.$http.getTypeList({
				
			}).then(res=>{
				this.list=res.data;
				console.log(this.list)
			})
		},
		methods:{
			dj(item){
//				this.$router.push({'/item'})
console.log("ok")
			}
//			dengshan(){
//				this.$router.push('/dengshan') 
//			},
//			paobu(){
//				this.$router.push('/paobu') 
//			},
//			huaxue(){
//				this.$router.push('/huaxue') 
//			},
//			hudai(){
//				this.$router.push('/hudai') 
//			},
//			pinpai(){
//				this.$router.push('/pinpai') 
//			},
//			lvyou(){
//				this.$router.push('/lvyou') 
//			},
//			zhishi(){
//				this.$router.push('/zhishi') 
//			},
//			zhuangbei(){
//				this.$router.push('/zhuangbei') 
//			},
		}
	}
</script>

<style>
	.menu{
		width: 100%;
		display: flex;
		flex-wrap: wrap;
		background: white;
		padding: 0.1rem 0 0 0;
		
	}
	.menu dl{
		width: 25%;
		text-align: center;
		color: gray;
		font-size: 13px;
		padding: 0.1rem 0 0 0;
	}
	dl img{
		width: 50%;
	}
	
	
</style>