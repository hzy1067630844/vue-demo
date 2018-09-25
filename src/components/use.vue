<template>
<div>
  <div v-if="showUse==1">
	<blur :blur-amount=40 :url="url">
      <p class="center">
      	<img :src="url">
      	<center><p >请先登录！</p></center>
      </p>
  </blur>
  <div class="login">
    <group title="登录">
      <x-input title="用户名" v-model="loginUseName" name="username" placeholder="请输入用户名" is-type="china-name"></x-input>

      <x-input title=" 密码" v-model="loginUsePwd" type="password" placeholder="请输入密码"  :min="6"  ></x-input>
    </group>

    <flexbox>
        <flexbox-item>
          <x-button type="primary" @click.native="login">登录</x-button>
           <toast v-model="showPositionValue" type="text" :time="800" is-show-mask :text="toastText" :position="'middle'"></toast>
        </flexbox-item>
        <flexbox-item>
          <x-button type="default" @click.native="changeRegister">注册</x-button>
        </flexbox-item>
      </flexbox>
  </div>
  </div>

  <div v-if="showUse==2">
  <blur :blur-amount=40 :url="url">
      <p class="center">
        <img :src="url">
        <center><p >{{this.loginUseName}}</p></center>
      </p>
  </blur>
  <div class="use">
    <group title="用户信息">
      <cell title="余额"  :value="99999"></cell>
      <cell title="提现" disabled is-link></cell>
    </group>
      <x-button plain type="primary" class="CancellationBtn" @click.native="Cancellation">注销</x-button>
      <toast v-model="showPositionValue" type="text" :time="800" is-show-mask :text="toastText" :position="'middle'"></toast>
    
  </div>
  </div>


  <div v-if="showUse==3">
  <blur :blur-amount=40 :url="url">
      <p class="center">
        <img :src="url">
        <center><p >请完成注册！</p></center>
      </p>
  </blur>
  <div class="reguster">
    <group title="注册">
      <x-input title="用户名" v-model="addloginUseName" name="username" placeholder="请输入用户名" is-type="china-name"></x-input>

      <x-input title=" 密码" v-model="addloginUsePwd" type="password" placeholder="请输入密码"  :min="6"  ></x-input>

      <x-input title="确认密码" v-model="resloginUsePwd" type="password" placeholder="重新输入密码"  :min="6"  ></x-input>
    </group>

    <flexbox>
        <flexbox-item>
          <x-button type="primary" @click.native="register">注册</x-button>
           <toast v-model="showPositionValue" type="text" :time="800" is-show-mask :text="toastText" :position="'middle'"></toast>
        </flexbox-item>
        <flexbox-item>
          <x-button type="default" @click.native="cancel">取消</x-button>
        </flexbox-item>
      </flexbox>
  </div>
  </div>

</div>
</template>

<script>
import {Blur,XInput,Group,XButton,Flexbox, FlexboxItem,Toast,Cell} from 'vux'

export default{
	data(){
	return {
		url:require('../assets/show.jpg') ,
    loginUseName:"",
    loginUsePwd:"",
    use:[
      {useName:"华政远",usePwd:"123456"},
      {useName:"高盛伟",usePwd:"123456"}
    ],
    showPositionValue:false,
    toastText: '',
    showUse:1,
    addloginUseName:'',
    addloginUsePwd:'',
    resloginUsePwd:''
	}
	},
	methods:{
    usePwdErr(){
      this.showPositionValue = true;
      this.toastText = "用户名或密码不能为空！";
    },
    successToast(){
      this.showPositionValue = true;
      this.toastText = "登陆成功";
    },
    login(){
      this.showPositionValue = true;
      var len=this.use.length-1;
      var loginFlag=len;
      if(this.loginUseName=="" |this.loginUsePwd==""){       
            this.toastText = "用户名或密码不能为空！";
            return;
          }
      for(len;len>=0;len--)
      {
        if(this.use[len].useName==this.loginUseName){
          if(this.use[len].usePwd==this.loginUsePwd ){           
            this.loginUsePwd="";
            this.showUse=2;
            this.toastText = " 用户："+this.use[len].useName+"</br>登陆成功！";
            break;
          }
          else{
            this.toastText = "密码错误！";
            return;
          }
        }
        else{
          loginFlag-=1;
          if(loginFlag<0)
            this.toastText = "用户名错误！";
        }
      }
    },
    Cancellation(){
      this.showUse=1;
      this.showPositionValue = true;
      this.toastText = "注销成功！";
    },
    changeRegister(){
      this.showUse=3;
    },
    register(){
      this.showPositionValue = true;
      if(this.addloginUseName==""|this.addloginUsePwd==""|this.resloginUsePwd==""){
            this.toastText ="注册信息不能为空！";
            return;
          }
          var len=this.use.length-1;
          for(len;len>=0;len--){
            if(this.addloginUseName==this.use[len].useName){
              this.toastText ="此用户名已存在，请换一个用户名进行注册！";
              return;
            }
          }

          if(this.addloginUsePwd==this.resloginUsePwd){
            var newUse={useName:this.addloginUseName,usePwd:this.addloginUsePwd};
            this.use.push(newUse);
            this.toastText = " 用户："+this.addloginUseName+"</br>注册成功！";
            this.addloginUseName="";
            this.addloginUsePwd="";
            this.resloginUsePwd="";
            this.showUse=1;
          }
          else{
            this.toastText ="两次密码不同，请重新输入！";
          }
    },
    cancel(){
      this.addloginUseName="";
      this.addloginUsePwd="";
      this.resloginUsePwd="";
      this.showUse=1;
    }
  },
	components:{
		Blur,XInput,Group,XButton,Flexbox, FlexboxItem,Toast,Cell
	},
}
</script>

<style scoped>
.center {
  text-align: center;
  padding-top: 20px;
  color: #fff;
  font-size: 18px;
}
.center img {
  width: 100px;
  height: 100px;
  border-radius: 50%;
  border: 4px solid #ececec;
}
.weui-btn{
  width: 90%;
  margin: 20px auto;
}
.CancellationBtn{
  border-radius: 99px!important;
  border-color: #CE3C39!important;
  color: #CE3C39!important;
}
.weui-btn_plain-primary:not(.weui-btn_plain-disabled):active{
  border-color: rgba(206, 60, 57, 0.6)!important;
  color: rgba(206, 60, 57, 0.6)!important;
  background-color: transparent;
}
</style>