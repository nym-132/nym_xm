<!--山脉精选-->
<template>
	<div class="swiper-container b" ref="b">
		<div class="top">
			<img src="../../../../assets/outdoors/山脉.png" class="sm"/>
			<span>山脉精选</span>
			<img src="../../../../assets/outdoors/山脉.png" class="sm"/>
		</div>
       <div class="swiper-wrapper" >
	       <div class="swiper-slide" @click="xueshan"><img src="../../../../assets/outdoors/2f31b22fb815f19722976fbd82368ef968963144.jpg"/></div>
	       <div class="swiper-slide"><img src="../../../../assets/outdoors/512d578a9e5747c3b717be25277abe6e049423ca.jpg"/></div>
	       <div class="swiper-slide"><img src="../../../../assets/outdoors/59409291ab9c5d41abfca24711855271278a1030.jpg"/></div>
	       <div class="swiper-slide"><img src="../../../../assets/outdoors/6e382e68a8b53a637ea071362e8ffc897bd7a774.jpg"/></div>
	       <div class="swiper-slide"><img src="../../../../assets/outdoors/e1b4721917db7fbfb593e5453443d53be180a59c.jpg"/></div>
	       <div class="swiper-slide"><img src="../../../../assets/outdoors/ef152ab2bcdf257b825a3d48246be68dfd514ff2.jpg"/></div>
      </div>
       <div class="swiper-pagination"></div>
      
       
  </div>
 
</template>
<script>
	export default{
		methods:{
			xueshan(){
				this.$router.push({
					path:"/xueshan"
				})
			}
		},
		mounted(){
			this.$nextTick(()=>{
				new this.$swiper(this.$refs.b,{
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
		height: 4.5rem;
		margin-top: 0.1rem;
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