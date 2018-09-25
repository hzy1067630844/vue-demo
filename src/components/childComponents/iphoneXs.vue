<template>
<div>
	<x-header>商品信息</x-header>
	<swiper loop :list="swiperImg" ></swiper>
	<div class="iphonexs-info">
		<h1>￥8699</h1>
		<h3><badge text="自营"></badge> &nbsp;Apple iphone XS (A2100) 64GB 金色 移动联通电信4G手机</h3>
		<p>【2018年iphone新品上市，立即抢购】选择换修无忧版，享只换不修服务！限时2小时在线支付！<a rel="#">更多新品信息>></a></p>
	</div>
	<div class="select">
		
		<divider>颜色</divider>
      	<checker v-model="demo5" default-item-class="demo5-item" selected-item-class="demo5-item-selected">
      	<checker-item value="金色" selected-item-class>金色</checker-item>
      	<checker-item value="银色">银色</checker-item>
      	<checker-item value="深空灰">深空灰</checker-item>
    	</checker>
    	<divider>内存</divider>
    	<checker v-model="demo6" default-item-class="demo5-item" selected-item-class="demo5-item-selected">
      	<checker-item value="64G" selected-item-class>64G</checker-item>
      	<checker-item value="256G">256G</checker-item>
      	<checker-item value="512G">512G</checker-item>

    	</checker>
    	<divider>商品介绍</divider>
    	<div class="info">
    		<div v-for="i in infoImg" >
    			<img :src="i.src">
    		</div>
    	</div>

    	<tabbar class="tab">
      		<tabbar-item class="tabL" @on-item-click="addToast">
        		<span slot="label" >加入购物车</span>
        		
      		</tabbar-item>
      		<tabbar-item class="tabR" @on-item-click="buyToast">
        		<span slot="label" >立即购买</span>
      		</tabbar-item>
      		<toast v-model="showPositionValue" type="text" :time="800" is-show-mask :text="toastText" :position="'middle'"></toast>
    	</tabbar>
    	
	</div>
</div>
</template>

<script>
import { Swiper,Drawer,Badge,Checker, CheckerItem ,Divider,XImg,Tabbar, TabbarItem,XHeader,Toast} from 'vux'
const baseList = [
  {img:require('../../assets/xr-swiper1.jpg')},
  {img:require('../../assets/xr-swiper2.jpg')},
  {img:require('../../assets/xr-swiper3.jpg')}
]

export default{
	data(){
	return {
		swiperImg:baseList,
		demo5: '金色',
		demo6:'64G',
		infoImg:[
			{src:require("../../assets/info/xsinfo1.jpg")},
			{src:require("../../assets/info/xsinfo2.jpg")},
			{src:require("../../assets/info/xsinfo3.jpg")},
			{src:require("../../assets/info/xsinfo4.jpg")},
			{src:require("../../assets/info/xsinfo5.jpg")},
			{src:require("../../assets/info/xsinfo6.jpg")},
			{src:require("../../assets/info/xsinfo7.jpg")},
			{src:require("../../assets/info/xsinfo8.jpg")},
			{src:require("../../assets/info/xsinfo9.jpg")},
			{src:require("../../assets/info/xsinfo10.jpg")}
			],
		showPositionValue:false,
    	toastText: ''
	}
	},
	methods:{
		addToast(){
      		this.showPositionValue = true;
      		this.toastText = "加入购物车成功！";
    	},
    	buyToast(){
      		this.showPositionValue = true;
      		this.toastText = "此商品暂时无货！";
    	}
	},
	components:{
		Swiper,Drawer,Badge,Checker, CheckerItem ,Divider,XImg,Tabbar, TabbarItem,XHeader,Toast
	},
	mounted(){
    	var showNav=document.getElementById('showNav');
    	showNav.style.display="none";
    	var showTab=document.getElementById('showTab');
    	showTab.style.display="none";
  	},
  	beforeDestroy(){
    	var showNav=document.getElementById('showNav');
    	showNav.style.display="block";
    	var showTab=document.getElementById('showTab');
    	showTab.style.display="flex";
  	}
}	
</script>

<style>
.iphonexs-info{
	margin: 5px 5px;
}
.iphonexs-info h1{
	color:red;
}
.iphonexs-info p{
	font-size: 14px;
	color: #666;
}
.iphonexs-info a{
	color: red;
}
.iphonexs-info .vux-badge{
	font-size: 13px!important;
	height: 18px!important;
    line-height: 18px!important;
    border-radius: 9px!important;
}
.vux-swiper{
	height: 232px!important;
}
.demo5-item {
  	width: 110px;
  	height: 30px;
 	line-height: 30px;
  	text-align: center;
  	border-radius: 8px;
  	border: 1px solid #ccc;
  	background-color: #fff;
  	margin-right: 6px;
}
.demo5-item-selected {
 	background-color:  #1AAD19;
 	color: white;
}
.select .vux-checker-box{
	width: 88%;
	margin: 10px 28px;
}

.info img{
  width:100%;
  height: auto;
  margin: 0px;
  padding: 0px;
  vertical-align:bottom;
  display:block;
}
.tabR{
	background-color: #e4393c;
}
.tabL{
	background-color: #E6A23C;
}
.tab .weui-tabbar__label{
	color: white!important;
	font-size: 20px;
}
.tab .weui-tabbar__icon{
	display: none;
}

</style>