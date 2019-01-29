<template>
	<div class="wraper2">
	<div class="qq">
		<div class="tb">
			<img src="../assets/outdoors/QQ.png" @click="tubiao"/>
		</div>
		<h3>
			<p id="p1111" style="margin: 0;">山脉客服</p>
			<p style="font-size: 14px; font-weight: 300;margin: 0;">点击图标联系客服</p>
		</h3>
	</div>
	</div>
</template>

<script>
	export default{
		methods:{
			tubiao(){
				this.$router.push({
					path:"/jianjie"
				})
			}
		}
	}
</script>

<style>
	.wraper2{
		width: 100%;
		height: 13.35rem;
		z-index: 8000;
		background: #EEEEEE;
	}
	.qq{
		width:100%;
		background: #9B94D0;
		padding: 42% 0 10%;
		box-shadow: 0 0.04rem 0.2rem rgba(0,0,0,0.3);
	}
	.tb{
		border: 0.08rem solid #beafdc;
		box-sizing: border-box;
		border-radius: 0.2rem;
		background: #f1f1f1;
		width: 2.2rem;
		height: 2.2rem;
		margin: 0 auto;
		padding-top: 0.4rem;
	}
	.tb img{
		width: 100%;
	}
   h3{
   	color: #fff;
   	font-size: 25px;
   	font-weight: 700;
   	text-align: center;
   	line-height: 1.8;
   	margin: 0.3rem;
   }
</style>