<template>
	<div class="search" >
		<ul class="ul_search">
			<li>始祖鸟</li>
			<li>年货合家欢</li>
		</ul>
	</div>
</template>
<script>
	import misteSearch from "@/components/index/miste/misteSearch.vue"
	export default{
		components:{
			misteSearch
		}
	}
</script>

<style>
.search{
	width: 100%;
	height: 40rem;
	background: white;
	z-index: 9000;
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
</style>