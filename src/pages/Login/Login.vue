<template>
    <div class="LoginＭodule">
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
                  <button :disabled="!phoneCheck" @click.prevent="getCode" class="getCode" :class="{disable:phoneCheck}">获取验证码</button>
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
                  <input class="inputBasic" placeholder="请输入手机号码/邮箱" type="text">
                  <button disabled class="getCode">获取验证码</button>
                </div>
                <div class="group">
                  <input class="inputBasic" placeholder="请输入密码" type="text">
                </div>
              </div>
              <mt-button class="submitBtn"  size="large" type="primary" @click.prevent="getCode">登录</mt-button>
            </div>
         </div>
    </div>
</template>

<script>
    export default {
        data () {
            return {
              loginMode:true,  // 登录方式
              sendBtnShow:true,
              phoneLogin:{
                  phone:'',
                  code:''
              },
              pwdLogin:{
                phone:'',
                code:''
              }
            }
        },
      methods:{
        getCode(){
            console.log('getCode');
        }
      },
      computed:{
        phoneCheck(){
          const reg = /^1\d{10}$/;
          const {phoneLogin,sendBtnShow} = this;
          console.log(this.phoneLogin.phone);
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
