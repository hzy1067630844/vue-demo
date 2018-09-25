<template>
  <div style="height:100%;" class="totalDiv">
    <!-- 顶部导航栏 -->
    <view-box >
    <x-header :left-options="{showBack:this.headerShowResult}"  id="showNav">商城首页</x-header>
    <!-- 内容 -->

    <transition name="Xchange"><router-view @getnum="numCount"></router-view></transition>
    <!-- 底部tabbar   -->
    <tabbar id="showTab">
        <tabbar-item selected link="./home" >
            <img slot="icon" src="./assets/home.png">
            <span slot="label">首页</span>
        </tabbar-item>

      <tabbar-item show-dot link="./message"> 
        <img slot="icon" src="./assets/message.png">
        <span slot="label">消息</span>
      </tabbar-item>

      <tabbar-item  link="./shopping" badge=1 >
        <img slot="icon" src="./assets/shopping.png">
        <span slot="label">购物车</span>
      </tabbar-item>

      <tabbar-item link="./use">
        <img slot="icon" src="./assets/use.png">
        <span slot="label">用户</span>
      </tabbar-item>
    </tabbar>
  </view-box>
  </div>
</template>

<script>
import { XHeader,Tabbar, TabbarItem,Badge, ViewBox } from 'vux'
export default {

  data () {
    return {
      headerShowResult:false,
      shoppingcart:0
    }
  },
  components: {
    XHeader,Tabbar, TabbarItem,Badge, ViewBox
  },
  methods:{
    numCount(count){
      this.shoppingcart=count;
      console.log(this.shoppingcart);
    }

  }


}
</script>

<style>
*{
  font-family:'微软雅黑', 'Avenir', Helvetica, Arial, sans-serif;
  margin:0px;
  text-decoration : none;
}
html, body {
  height: 100%;
  width: 100%;
  overflow-x: hidden;
}
.Xchange-enter{
  opacity:0;
  transform: translateX(100%);
}
.Xchange-leave-to{
  opacity:0;
  transform: translateX(-100%);
  position: absolute;
}
.Xchange-enter-active,.Xchange-leave-active {
  transition: all 0.5s ease;
}
</style>
