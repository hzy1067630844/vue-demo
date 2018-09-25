<template>
<div style="margin: 10px auto;width: 90%;">
	
	<flexbox style="border:1px solid #ccc;border-radius: 8px;box-shadow: 0 0 9px #999;">
      <flexbox-item :span="3"><img src="../assets/phone.jpg" class="phoneImg"></flexbox-item>
      <flexbox-item  class="phoneInfo">
      	<div class="shoppingCard">
        <p>iphone XS</p>
        <p>颜色：白</p>
        <p>价格：￥8699</p><br>
        
        <inline-x-number width="40px" button-style="round"   :min="0" class="phoneCard"></inline-x-number>

        </div>
      </flexbox-item>
    </flexbox>
    
</div>
</template>


<script>
import {Flexbox, FlexboxItem,InlineXNumber} from 'vux'
export default{
	data(){
	return {}
	},
	methods:{},
	components:{
		Flexbox, FlexboxItem,InlineXNumber
	}
}	
</script>

<style scoped>
.phoneImg{
  width: 90px;
  /*height: 50%;*/
}
p{
  font-size: 1.2em;
}
.phoneCard{
  float: left;
}
.shoppingCard{
	padding-left: 40px;
}
</style>