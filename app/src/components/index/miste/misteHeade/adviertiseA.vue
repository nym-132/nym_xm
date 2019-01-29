<!--广告图片轮播1-->

<template>
	<div class="swiper-container" ref="a">
       <div class="swiper-wrapper" >
	       <div class="swiper-slide"><img src="../../../../assets/outdoors/37f57ff0da7737700a6c552d0e60650df55a1d82.jpg"  id="zd"/></div>
	       <div class="swiper-slide"><img src="../../../../assets/outdoors/021ced1e66d3567125f663e0b5ed20a661df65f6.jpg"/></div>
	       <div class="swiper-slide"><img src="../../../../assets/outdoors/10465eb4eb2463cfaeaa7d709e4ae56247cb4613.jpg"/></div>
	       <div class="swiper-slide"><img src="../../../../assets/outdoors/34ac94b2a105935850534cb431b1cc1579083e63.jpg"/></div>
	       <div class="swiper-slide"><img src="../../../../assets/outdoors/4a22c440a5b88e1b2a3303f69d9aea372ec1d3cb.jpg"/></div>
	       <div class="swiper-slide"><img src="../../../../assets/outdoors/589cd967e8bdce8045a705cbd01be50e850ea709.jpg"/></div>
	       <div class="swiper-slide"><img src="../../../../assets/outdoors/6f1811da09c92ef25b52d2c7ca64c6190fafc73c.jpg"/></div>
	       <div class="swiper-slide"><img src="../../../../assets/outdoors/e1fd8c186fc25afb6c31fff18f71aa2e644c3833.jpg"/></div>
	       <div class="swiper-slide"><img src="../../../../assets/outdoors/e1fd8c186fc25afb6c31fff18f71aa2e644c3833.jpg"/></div>
	       <div class="swiper-slide"><img src="../../../../assets/outdoors/e1fd8c186fc25afb6c31fff18f71aa2e644c3833.jpg"/></div>
	       <div class="swiper-slide"><img src="../../../../assets/outdoors/e1fd8c186fc25afb6c31fff18f71aa2e644c3833.jpg"/></div>
      </div>
      <div class="swiper-pagination"></div>
  </div>
</template>
<script>
	export default{
		mounted(){
			this.$nextTick(()=>{
				new this.$swiper(this.$refs.a,{
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
	.swiper-container{
		width: 100%;
		height: 2.6rem;
		margin-top: 0.8rem;
	}
	.swiper-wrapper{
		width: 100%;
	}
	.swiper-wrapper img{
		width: 100%;
	}
	.swiper-pagination{
		z-index:10;
		background: rgba(0,0,0,0);
	}
	.swiper-pagination-bullet{
		background: white;
		opacity: 0.8;
	}
	.swiper-pagination-bullet-active{
		background: orange;
	}
</style>