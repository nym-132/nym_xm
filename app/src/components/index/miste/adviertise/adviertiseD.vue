<!--品牌轮播-->
<template>
	<div class="swiper-container d" ref="d">
       <div class="swiper-wrapper" >
	       <div class="swiper-slide">
	       	 <img src="../../../../assets/outdoors/pinpai02.jpg"/>
	       	 <img src="../../../../assets/outdoors/品牌.jpg"/>
	       	 <img src="../../../../assets/outdoors/品牌03.jpg"/>
	       	 <img src="../../../../assets/outdoors/品牌04.jpg"/>
	       	 <img src="../../../../assets/outdoors/品牌05.jpg"/>
	       	 <img src="../../../../assets/outdoors/品牌06.jpg"/>
	       	 <img src="../../../../assets/outdoors/品牌07.jpg"/>
	       	 <img src="../../../../assets/outdoors/品牌08.jpg"/>
	       </div>
	       <div class="swiper-slide">
	       	<img src="../../../../assets/outdoors/品牌09.png"/>
	       	<img src="../../../../assets/outdoors/品牌10.jpg"/>
	       	<img src="../../../../assets/outdoors/品牌11.jpg"/>
	       	<img src="../../../../assets/outdoors/品牌12.jpg"/>
	       	<img src="../../../../assets/outdoors/品牌13.jpg"/>
	       	<img src="../../../../assets/outdoors/品牌14.jpg"/>
	       	<img src="../../../../assets/outdoors/品牌15.jpg"/>
	       	<img src="../../../../assets/outdoors/品牌16.jpg"/>
	       </div>
	       <div class="swiper-slide">
	       	<img src="../../../../assets/outdoors/品牌17.png"/>
	       	<img src="../../../../assets/outdoors/品牌18.jpg"/>
	       	<img src="../../../../assets/outdoors/品牌19.jpg"/>
	       	<img src="../../../../assets/outdoors/品牌20.jpg"/>
	       	<img src="../../../../assets/outdoors/品牌21.jpg"/>
	       	<img src="../../../../assets/outdoors/品牌22.jpg"/>
	       	<img src="../../../../assets/outdoors/品牌23.jpg"/>
	       	<img src="../../../../assets/outdoors/品牌24.jpg"/>
	       </div>
	     
      </div>
       <div class="swiper-pagination fy"></div>
      <div>查看更多品牌</div>
  </div>
</template>

<script>
	export default{
		mounted(){
			this.$nextTick(()=>{
				new this.$swiper(this.$refs.d,{
					autoplay:true,
					pagination: {
                       el: '.swiper-pagination',
                      }
				})
			})
		}
	}
</script>

<style>
	.d{
		width: 100%;
	}
	.d img{
		width: 21%;
		padding: 0.1rem;
		border-right:1px solid gainsboro;
		border-bottom:1px solid gainsboro;
	}
	.fy{
		width: 100%;
		background: #F1F1F2;
		padding: 0.1rem 0;
	}
	.swiper-pagination-bullet{
		width: 0.12rem;
		height: 0.12rem;
	}
</style>