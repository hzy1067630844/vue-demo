<template>
	<div>
    <x-header>新闻资讯</x-header>
		<panel   :list="list" :type="'1'" ></panel>
	</div>
</template>

<script>
import {Panel,XHeader } from "vux"

export default{
	data(){
	return {

    
		list: [{
        src: require('../../assets/apple-logo.jpg'),
        title: 'iphone Xs Max发布',
        desc: 'iPhone Xs Max是一款配备6.5英寸OLED屏幕的高端款手机，是市场上最大的OLED屏幕之一，也跻身最贵款机型，起售价1099美元。',
        // url: '/home/newsList/news1',
      }, {
        src: require('../../assets/apple-logo.jpg'),
        title: 'iphone Xr发布',
        desc: '更亲民的iPhone Xr来袭，10月19日预售749美元起,拥有白、黑、红、蓝、黄、粉六色。',
        // url: '/home/newsList/news1',
        meta: {
          source: '匿名',
          date: new Date() ,

        }
      }]
	}
	},
	methods:{},
	components:{
		Panel,XHeader
	},
  filters:{
    changeDate:function(input){
       var year=input.getFullYear();
        var mon=(input.getMonth()+1).toString().padStart(2,'0');
        var day=input.getDate().toString().padStart(2,'0');

        var res=year+'-'+mon+'-'+day;
        return res;
    }
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

</style>