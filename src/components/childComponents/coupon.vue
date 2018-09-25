<template>
<div>
	<x-header>领券中心</x-header>
	<flexbox :gutter="0" class="Coupon" >
		<flexbox-item :span="4">
			<div class="CouponLeft">
				<h2>￥900</h2>
				<h5>满6000元可用</h5>
			</div>
		</flexbox-item>
		<flexbox-item>
			<div class="CouponRight">
				<div class="CouponRightP">
					<center>
						<x-button @click.native="showPosition('middle')" mini plain type="primary" class="CouponBtn" style="">领取</x-button>
					</center>
					<div>
						<p>适用对象：iPhone Xs以及iPhone Xr</p>
						<p>截止时间：2019年12月30日</p>
					</div>
					
				</div>				
			</div>
		</flexbox-item>
	</flexbox>

	<flexbox :gutter="0" class="Coupon" >
		<flexbox-item :span="4">
			<div class="CouponLeft">
				<h2>￥900</h2>
				<h5>满6000元可用</h5>
			</div>
		</flexbox-item>
		<flexbox-item>
			<div class="CouponRight">
				<div class="CouponRightP">
					<center>
						<x-button @click.native="showPosition('middle')" mini plain type="primary" class="CouponBtn" style="">领取</x-button>
					</center>
					<div>
						<p>适用对象：iPhone Xs以及iPhone Xr</p>
						<p>截止时间：2019年12月30日</p>
					</div>
					
				</div>				
			</div>
		</flexbox-item>
	</flexbox>

	<flexbox :gutter="0" class="Coupon" >
		<flexbox-item :span="4">
			<div class="CouponLeft">
				<h2>￥900</h2>
				<h5>满6000元可用</h5>
			</div>
		</flexbox-item>
		<flexbox-item>
			<div class="CouponRight">
				<div class="CouponRightP">
					<center>
						<x-button @click.native="showPosition('middle')" mini plain type="primary" class="CouponBtn" style="">领取</x-button>
					</center>
					<div>
						<p>适用对象：iPhone Xs以及iPhone Xr</p>
						<p>截止时间：2019年12月30日</p>
					</div>
					
				</div>				
			</div>
		</flexbox-item>
	</flexbox>
	<toast v-model="showPositionValue" type="text" :time="800" is-show-mask text="领取成功！" :position="position"></toast>
</div>
</template>

<script>
import { Flexbox, FlexboxItem,XButton,XHeader,Toast } from 'vux'
export default{
	data(){
	return {
		position: 'default',
		showPositionValue: false
	}
	},
	methods:{
		showPosition (position) {
      		this.position = position
      		this.showPositionValue = true
    },
	},
	components:{
		Flexbox, FlexboxItem,XButton,XHeader,Toast
	},
	mounted(){
    	var showNav=document.getElementById('showNav');
    	showNav.style.display="none"
  	},
  	beforeDestroy(){
    	var showNav=document.getElementById('showNav');
    	showNav.style.display="block"
  	}
}	
</script>

<style scoped>
*{
	margin: 0;
	padding: 0;
}
.Coupon{
	width: 90%;
	margin: 10px auto;
	height: 120px;
	position: relative;

}
.Coupon:before,.Coupon:after{
	content: ' ';
    width: 0;
    height: 100%;
    /* 绝对定位进行偏移 */
    position: absolute;
    top: 10px;
}
.Coupon:before {
    /* 圆点型的border */
    border-right: 10px dotted white;
    /* 偏移一个半径，让圆点的一半覆盖p */
    left: -5px;
}
 
.Coupon:after {
    /* 圆点型的border */
    border-left: 10px dotted white;
    /* 偏移一个半径，让圆点的一半覆盖p */
    right: -5px;
}
.vux-flexbox-item{
	width: 100%;
	height: 100%;
}
.CouponLeft{
	background-color: #04BE02;
	width: 100%;
	height: 100%;
	color: white;
	text-align: center;
	border-right: 3px dashed black;
}
.CouponLeft h2{
	font-size: 34px;
	padding-top: 20%; 
}
.CouponRight{
	background-color: #04BE02;
	width: 100%;
	height: 100%;
	color: white;

}
.CouponRightP{
	margin: 0 10px;
}
.CouponRightP p{
	font-size:13px;
}
.CouponBtn{
	border-radius:99px;
	margin: 10px auto;
	background-color: white;
	width: 120px;
	
}
.weui-btn_plain-primary:not(.weui-btn_plain-disabled):active{
	background-color: white;
}
</style>