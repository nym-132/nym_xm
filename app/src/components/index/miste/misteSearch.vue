<template>
		<div class="searchIpt" @click="ss()" >
			<div class="a">
				<el-input placeholder="年货合家欢" ></el-input>
			    <span class="sp" @click="sousuo()" >搜索</span>
			</div>
			<div class="search" v-show="bol" >
				<ul class="ul_search">
					<li>始祖鸟</li>
					<li>年货合家欢</li>
				</ul>
	         </div>
		</div>
</template>
<script>
	export default{
		data(){
			return{
				bol:false
			}
		},
		methods:{
			ss(){
				this.bol=!this.bol;
			},
			sousuo(){
				console.log("点击搜索")
			}
		},
	}
</script>
<style>
	.el-input__inner{
		position: fixed;
		top: 0;
		background: white;
	}
	.searchIpt {
		width: 90%;
		margin: 0 auto;
		display: flex;
		align-items: center;
	}
	
	.el-input__inner{
		width: 90%;
		background: #F4F4F4;
		border-radius: 15px;
		height: 0.6rem;
		font-size: 12px;
		font-family: "黑体";
		font-weight: 600;
		margin: 0.1rem 0 0.4rem 0;
		z-index: 2000;
		border: none;
		margin-left: 5%;
	}
	.sp{
		display: flex;
		align-items: center;
		position: fixed;
		top: 0;
		right: 0.3rem;
		bottom: 0;
		margin: 0.1rem 0;
		height: 0.6rem;
		padding: 0 0.4rem;
		background: #F4F4F4;
		border-bottom-right-radius: 15px;
		border-top-right-radius: 15px;
		font-size: 12px;
		outline: none;
		border: none;
		color: gray;
		z-index: 3000;
	}
	.search{
	width: 100%;
	height: 11.4rem;
	background: white;
	position: fixed;
	top:0.7rem;
	left: 0;
}
.ul_search{
	display: flex;
	margin-top: 0.3rem;
}
.ul_search li{
	border: 1px dashed gainsboro;
	padding: 0.1rem;
	background: ghostwhite;
	color: grey;
	margin: 0 0.05rem;
}
.a{
	width: 100%;
	box-sizing: border-box;
	background: white;
	padding: 0.2rem 0;
	position: fixed;
	top: 0;
	margin-left: -0.4rem;
}
</style>