
<template>
  <div>
    <search   ref="search" placeholder="搜索内容" auto-fixed></search> 
    <swiper loop auto :list="swiperImg"></swiper>

    <grid :show-lr-borders="false" :show-vertical-dividers="false" >
      <grid-item  label="商品资讯" link="/home/newsList">
        <img slot="icon" src="../assets/news.png">
      </grid-item>
      <grid-item  label="领劵中心" link="/home/coupon">
        <img slot="icon" src="../assets/sale.png">
      </grid-item>
      <grid-item  label="二手交易">
        <img slot="icon" src="../assets/second.png">
      </grid-item>
      <grid-item  label="PLUS会员">
        <img slot="icon" src="../assets/vip.png">
      </grid-item>
    </grid>

    <button-tab class="buttonTab" >
        <button-tab-item selected @on-item-click="changPhoneCard1">今日优惠</button-tab-item>
        <button-tab-item @on-item-click="changPhoneCard2">销量冠军</button-tab-item>
        <button-tab-item @on-item-click="changPhoneCard3">人气新品</button-tab-item>
      </button-tab>

    <divider>产品列表</divider>
    <div  style="width: 90%;margin: 0 auto;">
    <transition> 
    <div v-if="showPhoneCard==1" >
    <flexbox >
      <flexbox-item :span="3"><img src="../assets/phone.jpg" class="phoneImg" @click="openIphonexs"></flexbox-item>
      <flexbox-item  class="phoneInfo">
        <p>iphone XS &nbsp;<badge text="new"></badge></p>
        <p>价格：￥8699</p><br>
        <div>
        <inline-x-number width="40px" button-style="round" v-model="iphonexsnumber1"  :min="0" class="phoneCard" @on-change="numChange" ref="num"></inline-x-number>
        
        <x-button mini plain type="primary" style="margin:0 0 0 40px; " class="phoneCard">加入购物车</x-button>
        </div>
      </flexbox-item>
    </flexbox>
    <flexbox >
      <flexbox-item :span="3"><img src="../assets/phone2.jpg" class="phoneImg" @click="openIphonexs"></flexbox-item>
      <flexbox-item  class="phoneInfo">
        <p>iphone XS &nbsp;<badge text="new"></badge></p>
        <p>价格：￥8699</p><br>

        <div>
        <inline-x-number width="40px" button-style="round" v-model="iphonexsnumber2"  :min="0" class="phoneCard"></inline-x-number>
        
        <x-button mini plain type="primary" style="margin:0 0 0 40px; " class="phoneCard">加入购物车</x-button>
        </div>

      </flexbox-item>
    </flexbox>

    <flexbox >
      <flexbox-item :span="3"><img src="../assets/phone3.jpg" class="phoneImg" @click="openIphonexs"></flexbox-item>
      <flexbox-item  class="phoneInfo">
        <p>iphone XS &nbsp;<badge text="new"></badge></p>
        <p>价格：￥8699</p><br>

        <div>
        <inline-x-number width="40px" button-style="round" v-model="iphonexsnumber3"  :min="0" class="phoneCard"></inline-x-number>
        
        <x-button mini plain type="primary" style="margin:0 0 0 40px; " class="phoneCard">加入购物车</x-button>
        </div>

      </flexbox-item>
    </flexbox>
    </div>
    </transition>

    <transition> 
    <div v-if="showPhoneCard==2">
    <flexbox >
      <flexbox-item :span="3"><img src="../assets/iphonexr1.jpg" class="phoneImg"></flexbox-item>
      <flexbox-item  class="phoneInfo">
        <p>iphone XR &nbsp;<badge text="new"></badge></p>
        <p>价格：￥6499</p><br>

        <div>
        <inline-x-number width="40px" button-style="round"   :min="0" class="phoneCard"></inline-x-number>
        
        <x-button mini plain type="primary" style="margin:0 0 0 40px; " class="phoneCard">加入购物车</x-button>
        </div>

      </flexbox-item>
    </flexbox>

    <flexbox >
      <flexbox-item :span="3"><img src="../assets/iphonexr2.jpg" class="phoneImg"></flexbox-item>
      <flexbox-item  class="phoneInfo">
        <p>iphone XR &nbsp;<badge text="new"></badge></p>
        <p>价格：￥6499</p><br>

        <div>
        <inline-x-number width="40px" button-style="round"   :min="0" class="phoneCard"></inline-x-number>
        
        <x-button mini plain type="primary" style="margin:0 0 0 40px; " class="phoneCard">加入购物车</x-button>
        </div>

      </flexbox-item>
    </flexbox>

    <flexbox >
      <flexbox-item :span="3"><img src="../assets/iphonexr3.jpg" class="phoneImg"></flexbox-item>
      <flexbox-item  class="phoneInfo">
        <p>iphone XR &nbsp;<badge text="new"></badge></p>
        <p>价格：￥6499</p><br>

        <div>
        <inline-x-number width="40px" button-style="round"   :min="0" class="phoneCard"></inline-x-number>
        
        <x-button mini plain type="primary" style="margin:0 0 0 40px; " class="phoneCard">加入购物车</x-button>
        </div>

      </flexbox-item>
    </flexbox>

    <flexbox >
      <flexbox-item :span="3"><img src="../assets/iphonexr4.jpg" class="phoneImg"></flexbox-item>
      <flexbox-item  class="phoneInfo">
        <p>iphone XR &nbsp;<badge text="new"></badge></p>
        <p>价格：￥6499</p><br>

        <div>
        <inline-x-number width="40px" button-style="round"   :min="0" class="phoneCard"></inline-x-number>
        
        <x-button mini plain type="primary" style="margin:0 0 0 40px; " class="phoneCard">加入购物车</x-button>
        </div>

      </flexbox-item>
    </flexbox>

    <flexbox >
      <flexbox-item :span="3"><img src="../assets/iphonexr5.jpg" class="phoneImg"></flexbox-item>
      <flexbox-item  class="phoneInfo">
        <p>iphone XR &nbsp;<badge text="new"></badge></p>
        <p>价格：￥6499</p><br>

        <div>
        <inline-x-number width="40px" button-style="round"   :min="0" class="phoneCard"></inline-x-number>
        
        <x-button mini plain type="primary" style="margin:0 0 0 40px; " class="phoneCard">加入购物车</x-button>
        </div>

      </flexbox-item>
    </flexbox>

    <flexbox >
      <flexbox-item :span="3"><img src="../assets/iphonexr6.jpg" class="phoneImg"></flexbox-item>
      <flexbox-item  class="phoneInfo">
        <p>iphone XR &nbsp;<badge text="new"></badge></p>
        <p>价格：￥6499</p><br>

        <div>
        <inline-x-number width="40px" button-style="round"   :min="0" class="phoneCard"></inline-x-number>
        
        <x-button mini plain type="primary" style="margin:0 0 0 40px; " class="phoneCard">加入购物车</x-button>
        </div>

      </flexbox-item>
    </flexbox>
    </div>
    </transition> 


    <transition> 
    <div v-if="showPhoneCard==3">
    <flexbox >
      <flexbox-item :span="3"><img src="../assets/iphone8-1.jpg" class="phoneImg"></flexbox-item>
      <flexbox-item  class="phoneInfo">
        <p>iphone 8 &nbsp;<badge text="hot"></badge></p>
        <p>价格：￥5099</p><br>

        <div>
        <inline-x-number width="40px" button-style="round"   :min="0" class="phoneCard"></inline-x-number>
        
        <x-button mini plain type="primary" style="margin:0 0 0 40px; " class="phoneCard">加入购物车</x-button>
        </div>

      </flexbox-item>
    </flexbox>

    <flexbox >
      <flexbox-item :span="3"><img src="../assets/iphone8-2.jpg" class="phoneImg"></flexbox-item>
      <flexbox-item  class="phoneInfo">
        <p>iphone 8 &nbsp;<badge text="hot"></badge></p>
        <p>价格：￥5099</p><br>

        <div>
        <inline-x-number width="40px" button-style="round"   :min="0" class="phoneCard"></inline-x-number>
        
        <x-button mini plain type="primary" style="margin:0 0 0 40px; " class="phoneCard">加入购物车</x-button>
        </div>

      </flexbox-item>
    </flexbox>

    <flexbox >
      <flexbox-item :span="3"><img src="../assets/iphone8-3.jpg" class="phoneImg"></flexbox-item>
      <flexbox-item  class="phoneInfo">
        <p>iphone 8 &nbsp;<badge text="hot"></badge></p>
        <p>价格：￥5099</p><br>

        <div>
        <inline-x-number width="40px" button-style="round"   :min="0" class="phoneCard"></inline-x-number>
        
        <x-button mini plain type="primary" style="margin:0 0 0 40px; " class="phoneCard">加入购物车</x-button>
        </div>

      </flexbox-item>
    </flexbox>
    </div>
    </transition>
    </div>
    
  </div>
</template>

<script>
import { Search,Swiper,Grid, GridItem,ButtonTab, ButtonTabItem ,Divider,Flexbox, FlexboxItem,InlineXNumber,Badge,XButton} from 'vux'
const baseList = [
  {img:require('../assets/swiper2.jpg')},
  {img:require('../assets/swiper1.jpg')},
  {img:require('../assets/swiper5.jpg')}
]
export default {
  data () {
    return {
      swiperImg:baseList,
      iphonexsnumber1:0,
      iphonexsnumber2:0,
      iphonexsnumber3:0,
      showPhoneCard:1,
    }
  },
  components: {
     Search,Swiper,Grid, GridItem,ButtonTab, ButtonTabItem,Divider,Flexbox, FlexboxItem,InlineXNumber,Badge,XButton
  },
  methods:{
    changPhoneCard1(){
      this.showPhoneCard=1;
    },
    changPhoneCard2(){
      this.showPhoneCard=2;
    },
    changPhoneCard3(){
      this.showPhoneCard=3;
    },
    openIphonexs(){
      this.$router.push('../home/iphoneXs')
    },
    numChange(){
      this.$emit("getnum",parseInt(this.$refs.num.value));
    }
  },

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
*{
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  padding:0px;
  margin:0px;
  text-decoration : none;
}
.weui-grids:before{
  border:none;
}
.weui-grid:after{
  border:none;
}
.buttonTab{
  margin:0 10px;
}
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
.vux-swiper{
  height: 232px!important;
}
.v-enter,.v-leave-to{
  opacity:0;
  transform: translateY(100%);
}
.v-enter-active,.-leave-active{
  transition: all 0.5s ease;
}

</style>
