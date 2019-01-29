<template>
	<div class="miste">
	    <miste-heade></miste-heade>
	    <miste-menu></miste-menu>
	    <adviertise-b></adviertise-b>
	    <advertise-c></advertise-c>
	    <adviertise-d></adviertise-d>
	    <dan-pin></dan-pin>
	    <div class="sao">
	    	<img src="../../assets/outdoors/微信扫一扫.jpg"/>
	    </div>
	   
	</div>
</template>

<script>
	import misteHeade from "@/components/index/miste/misteHeade/misteHeade.vue"
	import misteMenu from "@/components/index/miste/misteMenu.vue"
	import adviertiseB from "@/components/index/miste/adviertise/adviertiseB.vue"
	import advertiseC from "@/components/index/miste/adviertise/advertiseC.vue"
	import adviertiseD from "@/components/index/miste/adviertise/adviertiseD.vue"
	import danPin from "@/components/index/miste/danpin/danpin.vue"
	
	export default{
		name:"miste",
		components:{
			misteHeade,
			misteMenu,
			adviertiseB,
			advertiseC,
			adviertiseD,
			danPin
		}
	}
</script>
<style>
div{
	width: 100%;
	background: white;
	z-index:2 ;
}
.sao{
	width: 100%;
	margin-bottom: 2.2rem;
	
}
.sao img{
	width: 100%;
}

</style>