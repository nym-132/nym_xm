<template>
	<div class="home">
		<router-view></router-view>
		<foot-comp></foot-comp>
		<div class="bottom">
			<img src="../assets/outdoors/客服.png" class="kf" @click="kefu"/>
			<a href="#zd"><img src="../assets/outdoors/置顶.png" /></a>
	
		</div>
	</div>
</template>

<script>
	import footComp from '@/components/index/footComp'
	export default{
		name:"index",
		components:{
			footComp
		},
		methods:{
			kefu(){
				this.$router.push({
					path:"/qq"
				})
			},
			
			}
		}
	
</script>

<style>
.home{
	width: 100%;
	display: flex;
	flex-wrap: wrap;
}
.home>div{
	flex: 1;
}
.bottom{
	width: 0.74rem;
	position: fixed;
	background: rgba(0,0,0,0);
	bottom: 1.2rem;
	z-index: 1600;
	right: 0.2rem;
	
}
.bottom img{
	width: 100%;
	margin: 0.1rem 0;
}

</style>