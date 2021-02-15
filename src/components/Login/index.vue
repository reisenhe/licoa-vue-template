<template>
  <Dialog 
    :show="show"
    @onClose="closeDialog">
    <div class="login-form">
      <div class="input-bar">
        <InputBar
          :font="'VVfont hm-contact'"
          :placeH="'请输入手机号/邮箱'"
          v-model="username"
        ></InputBar>
      </div>
      <div class="input-bar">
        <InputBar
          :font="'VVfont hm-lock-3'"
          :placeH="'请输入密码'"
          :type="'password'"
          v-model="password"
        ></InputBar>
      </div>
      <div class="subbtn mt15">
        <button type="button" class="submit1 colorR1Bg" @click="login()">登录</button>
      </div>
    </div>
  </Dialog>
</template>

<script>
import RequestApi from '@/services'
import Dialog from '@/components/Dialog'
import InputBar from './InputBar'
export default {
  components: {
    Dialog,
    InputBar
  },
  data() {
    return {
      show: false,
      username: '',
      password: ''
    }
  },
  methods: {
    login() {
      RequestApi.user.login(this.username, this.password).then(res => {
        console.log(res)
      })
    },
    showLogin() {
      this.show = true
    },
    closeDialog() {
      this.show = false
    }
  }
}
</script>

<style>
.login-form{
  padding: 0 40px 40px;
}
.input-bar{
  margin-top: 20px;
  border-bottom: 1px solid #e5e5e5;
}
.subbtn{
  margin-top: 30px;
}
.submit1{
  border-radius: 8px;
}
</style>