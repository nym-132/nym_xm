<!--品牌精选特惠-->
<template>
	<div class="swiper-container b" ref="c">
		<div class="top">
			<img src="../../../../assets/outdoors/山脉.png" class="sm"/>
			<span>品牌精选特惠</span>
			<img src="../../../../assets/outdoors/山脉.png" class="sm"/>
		</div>
       <div class="swiper-wrapper" >
	       <div class="swiper-slide"><img src="../../../../assets/outdoors/453f64ab25b9ccbcc38cfc12541c1110bcaef4a6.jpg"/></div>
	       <div class="swiper-slide"><img src="../../../../assets/outdoors/a5352add889181c70cedbe58738b7119d7111b82.jpg"/></div>
	       <div class="swiper-slide"><img src="../../../../assets/outdoors/c0838e3ee3952b7f506390bb4457c9683b8c0e85.jpg"/></div>
	       <div class="swiper-slide"><img src="../../../../assets/outdoors/130a520bd9e69e8b689cf33ede8af3c86c9f7a4b.jpg"/></div>
      </div>
       <div class="swiper-pagination"></div>
  </div>
</template>
<script>
	export default{
		methods:{
			
		},
		mounted(){
			this.$nextTick(()=>{
				new this.$swiper(this.$refs.c,{
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
		
	}
	.b{
		height: 4.4rem;
		margin-top: 0.1rem;
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
		bottom: 0.3rem;
		
	}
	.swiper-pagination-bullet{
		background: white;
		opacity: 0.8;
		margin: 0 0.1rem;
	}
	.swiper-pagination-bullet-active{
		background: orange;
	}
	.top{
		width: 100%;
		color: #007130;
		font-size: 18px;
		text-align: center;
		padding: 0.2rem 0;
		background: #F1F1F2;
	}
	.top span{
		margin: 0 0.2rem;
	}
	.sm{
		width: 0.5rem;
		
	}
</style>
	
