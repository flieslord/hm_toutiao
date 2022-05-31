<!--  -->
<template>
  <div>
      <van-nav-bar title="黑马头条" />
      <van-form @submit="onSubmit">
  <van-field
    v-model="user.mobile"
    name="mobile"
    label="手机号"
    placeholder="请输入11位手机号"
    required
    :rules="[{ required: true, message: '请输入手机号', pattern: /^1[3-9]\d{9}$/}]"
  />
  <van-field
    v-model="user.code"
    type="password"
    name="code"
    label="密码"
    required
    placeholder="请输入6位密码"
    :rules="[{ required: true, message: '请输入密码', pattern: /^\d{6}$/}]"
  />
  <div style="margin: 16px;">
    <van-button
    :disabled = "isLoading"
    :loading = "isLoading"
    loading-text="登录中..."
    round
    block
    type="info"
    native-type="submit">登录</van-button>
  </div>
</van-form>
  </div>
</template>

<script>
import { loginAPI } from '@/api'
import { Notify } from 'vant'
import { setToken } from '@/utils/token.js'
export default {
  name: 'Login',
  data () {
    return {
      user: {
        mobile: '',
        code: ''
      },
      isLoading: false
    }
  },
  methods: {
    async onSubmit (values) {
      this.isLoading = true
      try {
        const res = await loginAPI(this.user)
        Notify({ type: 'success', message: '登录成功' })
        setToken(res.data.data.token)
        console.log(res)
      } catch (error) {
        Notify({ type: 'danger', message: '登录失败' })
        console.log(error)
      }
      this.isLoading = false
    }
  }
}
</script>
<style lang='less' scoped>
