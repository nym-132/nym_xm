<!--每日单品-->
<template>
	<div class="dp">
		<div class="top t">
			<img src="../../../../assets/outdoors/山脉.png" class="sm"/>
			<span>每日单品推荐</span>
			<img src="../../../../assets/outdoors/山脉.png" class="sm"/>
		</div>
		<!--<router-link v-for="(item,index) in list to="/miste" >
			
		</router-link>-->
		<div class="ddd">
			<div v-for="(item,index) in list" class="dd">
			<dl>
				<dt><img :src="item.dp_tp" class="tp"/></dt>
				<dd>
					<h3>{{item.title}}</h3>
					<p class="jg"><span class="xj">￥{{item.xj}}<i>￥0</i></span><img :src="item.gm" class="ljgm"/></p>
					
				</dd>
			</dl>
		</div>
		</div>
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
			this.$http.getDp({
				
			}).then(res=>{
				console.log(res)
				this.list=res.data;
			})
		}
	}
</script>

<style>
	i{
		color: gray;
		font-size: 11px;
		text-decoration: line-through;
	}
	.jg{
		width: 100%;
		display: flex;
		align-items: center;
		justify-content: space-around;
	}
	.xj{
		color: red;
	}
	.ljgm{
		width: 40%;
	}
	h3{
		display: -webkit-box;
		-webkit-box-orient: vertical;
		overflow: hidden;
		-webkit-line-clamp: 2;
		font-size: 14px;
		color: #232326;
		line-height: 18px;
		margin: 0.2rem 0 0.2rem;
		font-weight: 500;
		
	}
	.ddd{
		width: 100%;
		display: flex;
		flex-wrap: wrap;
		
		
	}
	.dd{
		width: 44%;
		padding: 0.2rem;
	}
	.tp{
		width: 100%;
	}
	.dp{
		width: 100%;
		background: white;

	}
	.top{
		width: 100%;
		background: white;
		font-size: 18px;
		text-align: center;
		padding: 0.2rem 0;
		background: #F1F1F2;
	}
	.t{
		background: white;
	}
	.top span{
		margin: 0 0.2rem;
	}
	.sm{
		width: 0.5rem;
	}
	.sao{
	width: 100%;
}
.sao img{
	width: 100%;
}
	
</style>