<template>
  <scroller>

  <div class="container">
    <div class="logo-title">
<image style="width: 260px;height: 160px;" src="file://web/assets/a.png"></image>
    </div>

    <div  class='login-form'>
      <div class="username">
        <div class="text"><text >username:</text></div>
        <div class="input">
          <input type="text"  class="username-input"  value="" @change="storeUsername" @input="storeUsername" />
        </div>
      </div>
      <div class="password">
        <div class="text"> <text >password:</text> </div>
        <div class="input">
          <input type="password"  class="password-input"  value="" @change="storePassword" @input="storePassword" />
        </div>

      </div>
      <div class='button'  @click="cl" ><text class='login-button'>Login</text></div>
    </div>
    <div class="">
      <text>{{ username }}</text>
    </div>
  </div>
</scroller>

</template>

<style scoped>
  .container{flex:1;align-items:center;justify-content: center;}

  .login-form{width:750px;}
  .logo-title {flex:1;justify-content: center;align-items: center;margin:50px;}
  .logo-text {width: 200px;height: 40px;}
  .username{display: flex;flex-direction: row;justify-content:center;align-items: center;margin-top: 20px;height: 80px;} .password {display: flex;flex-direction: row;justify-content:center;align-items: center;margin-top: 20px;height: 80px;}
  .username .text{width: 250px;font-size: 40px;display: flex;justify-content:center;align-items: flex-end;}
  .password .text{width: 250px;font-size: 40px;display: flex;justify-content:center;align-items: flex-end;}
  .input {padding-left:10px;height: 60px;display: flex;justify-content: flex-end;align-items: center;}
  .username-input, .password-input{border-style: solid ;border-width:2px;border-color: #ddd;border-radius: 5px;width: 350px;height: 60px;font-size: 40px;padding-left:10px; }
  .button {flex:1;display:flex;justify-content: center;align-items: center;margin:50px;}
  .login-button{background-color: #424040;color: #fff;line-height: 80px;display: flex;justify-content: center;align-items: center;text-align: center;width: 200px;height: 80px;}
</style>

<script>
import {accountLogin,getIndexData} from '../../service/api'
import { mapMutations } from 'vuex'
var modal = weex.requireModule('modal')
  export default {
    data() {
      return {
        username: '',
        password: ''
      };
    },
    methods: {
      ...mapMutations({
        storeLogin: 'STORE_LOGIN_INFO',
      }),
      storeUsername(e){this.username = e.value},
      storePassword(e){this.password = e.value},
      Login(){
        var params = {username:this.username,password:this.password,client:"wap"}
        accountLogin(params).then((res)=>{
          this.username = res.code;
          if(res.code == 200){
            this.storeLogin(res.datas);
            this.$router.push("/")
          }
        })
      },
      cl: function() {
        this.Login()
      }
    }
  }
</script>
