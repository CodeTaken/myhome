<template>
    <div class="LoginＭodule">
      <div class="page-back" @click="$router.back()">
        <i class="iconfont icon-zuojiantou"></i>
      </div>

         <div class="LoginContent">
            <img class="Logo" width="80" src="https://www.microsoftsalesspecialist.com/mini/mini-image/loginLogo.png" alt="">

            <div class="flex nav">
              <a class="navCode" :class="{active:loginMode}" href="javascript:;" @click="loginMode = true">短信登录</a>
              <a class="navCode" :class="{active:!loginMode}" href="javascript:;" @click="loginMode = false">密码登录</a>
            </div>
            <div class="form">
              <div class="formContent" :class="{active:loginMode}">
                <div class="group">
                  <input class="inputBasic" placeholder="请输入手机号码" type="text" v-model="phoneLogin.phone">
                  <button :disabled="!phoneCheck" @click.prevent="getCode" class="getCode" :class="{disable:phoneCheck}">
                       {{!sendBtnShow? '获取验证码' : downCount+'秒' }}
                  </button>
                </div>
                <div class="group">
                  <input class="inputBasic" placeholder="请输入验证码" type="text" v-model="phoneLogin.code">
                </div>
                <section class="login_hint">
                  温馨提示：未注册硅谷外卖帐号的手机号，登录时将自动注册，且代表已同意
                  <a class="server" href="javascript:;">《用户服务协议》</a>
                </section>
              </div>
              <div class="formContent" :class="{active:!loginMode}">
                <div class="group">
                  <input class="inputBasic" placeholder="请输入手机号码/邮箱" type="text" v-model="pwdLogin.name">
                </div>
                <div class="group">
                  <input class="inputBasic" placeholder="请输入密码" type="password" v-model="pwdLogin.pwd">
                </div>
              </div>
              <mt-button class="submitBtn"  size="large" type="primary" @click.prevent="submit">登录</mt-button>
            </div>
         </div>
    </div>
</template>

<script>
  import {reqPwdForm,reqPhoneCode} from '../../api/index'
  import { MessageBox } from 'mint-ui';
    export default {
        data () {
            return {
              loginMode:true,  // 登录方式
              sendBtnShow:false,  // 是否显示倒数计时
              downCount:60,   //倒计时数
              phoneLogin:{
                  phone:'',
                  code:''
              },
              pwdLogin:{
                name:'',
                pwd:''
              },
              timerCode:null     // 定时器
            }
        },
      methods:{
        async getCode(){
            const {phoneLogin,downCount} = this;
            let that = this;
            if(this.phoneLogin.phone){
                // 开始倒计时
                this.sendBtnShow = true
                if(!this.timerCode){
                  this.timerCode = setInterval(function(){
                    that.downCount--;
                    if(that.downCount ===0){
                      that.clearInterval()
                    }
                  },1000);
                }
                let obj = {
                    identificationValue:this.phoneLogin.phone,
                    isEmail:false,
                    isPhone:true,
                    userid:''
                }
                const result = await reqPhoneCode(obj)
            }
        },
        async submit(){
          const {loginMode,phoneLogin,pwdLogin} = this;
          const name = this.pwdLogin.name
          const pwd = this.pwdLogin.pwd;
          const reg = /^1\d{10}$/;
          let result;
          if(this.loginMode){
            // 短信登录
            if(!this.phoneLogin.phone ){
              //alert('请输入手机号!');
              //console.log(this);
             MessageBox.alert('请输入手机号!', '提示');
              return
            }else if(!reg.test(this.phoneLogin.phone)){
              //alert('手机号格式不正确！');
              MessageBox.alert('手机号格式不正确！', '提示');
              return
            }else if(!this.phoneLogin.code){
              //alert('请输入验证码！');
              MessageBox.alert('请输入验证码！', '提示');
              return
            }
            else{
              // 请求后台  // 异步
              result = await reqPwdForm('/tipsApi',{name,pwd},"POST")
            }
          }else{
            // 密码登录
            if(!this.pwdLogin.name ){
              //alert('请输入用户名！')
              MessageBox.alert('请输入用户名！', '提示');
              return
            }else if(!this.pwdLogin.pwd){
              alert('请输入密码！')
              return
            }else{
              // 请求后台  // 异步
              result = await reqPwdForm('/tipsApi',{name,pwd},"POST")
            }
          }
          this.clearInterval()
          if(result.code ===0){
            // 请求成功
            this.$router.replace('/profile');
            // 操作 store ，将数据存储在 store 中
            const userInfo = {
              name:'xuqi',
              phone:''
            }
            this.$store.dispatch('recordUser',userInfo)

          }else{
            alert(result.message)
          }
        },
        clearInterval(){
            const {timerCode,sendBtnShow,downCount} = this;
            if(this.timerCode)  clearInterval(this.timerCode)
            this.timerCode = null;
            this.sendBtnShow = false
            this.downCount  = 60
        }
      },
      computed:{
        phoneCheck(){
          const reg = /^1\d{10}$/;
          const {phoneLogin,sendBtnShow} = this;
          if(reg.test(this.phoneLogin.phone)){
            return true
          }
        }
      }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .LoginContent{
    width:80%;
    margin:0 auto;
    margin-top:60px;
  }
  .Logo{
    margin:0 auto;
  }
  .navCode{
    margin-right:40px;
    font-size:16px;
    margin-top:10px;
  }
  .navCode.active{
    color:#5fcbb6;
    border-bottom:1px solid #5fcbb6
  }
  .LoginContent .navCode:last-child{
    margin-right:0;
  }
  .form{
    margin-top:20px;
  }
  .formContent{
    display: none;
  }
  .formContent.active{
    display: block;
  }
  .group{
    position: relative;
    margin-bottom:10px;
  }
  .inputBasic{
    width:100%;
    height:42px;
    border:1px solid #ddd;
    border-radius: 5px;
    line-height:42px;
    background:none;
    padding:2px 10px;
    outline: none;
  }
  .getCode{
    position: absolute;
    top:50%;
    height:100%;
    transform: translateY(-50%);
    right:10px;
    background:0;
    outline: none;
    border:none;
  }
  .getCode.disable{
    color:#f80000;
  }
  a.server{
    color:#0067b8;
  }
  .submitBtn{
    margin-top:20px;
    background:#4cd96f;
  }
</style>
