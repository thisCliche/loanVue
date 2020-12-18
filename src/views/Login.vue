<template>
  <div class="login">
    <van-nav-bar title="欢迎登录" :safe-area-inset-top="true" :border="false" />
    <img src="../assets/img/loginBack.png" alt="" srcset="" />

    <van-form @submit="onSubmit">
      <div style="margin: 0 1.3rem">
      <van-field
        v-model="phone"
        name="phone"
        placeholder="用输入用户名"
        left-icon="yonghu"
        :rules="[{ required: true, message: '请填写用户名' }]"
      >
        <van-icon class="iconfont" class-prefix="icon" color="#fff" slot="left-icon" name="yonghu"></van-icon>
      </van-field>
      <van-field
        v-model="password"
        type="password"
        name="password"
        placeholder="请输入密码"
        :rules="[{ required: true, message: '请填写密码' }]"
      >
      <van-icon class="iconfont" class-prefix="icon" slot="left-icon" color="#fff" name="mima"></van-icon>
      </van-field>
      <div class="retrieve">
        <router-link to="/register">注册</router-link>
        <router-link to="/retrieve">忘记密码？</router-link>
      </div>
        <van-button round block type="info" native-type="submit" color="linear-gradient(to right,#6c5cec, #2d70f7)">
          登录
        </van-button>
      </div>
    </van-form>
  </div>
</template>

<script>
import {login} from '@/api/request.js'
export default {
  name: "",
  data() {
    return {
      phone: '18326808909',
      password: '13213',
    };
  },
  components: {},
  computed: {},
  methods: {
    async onSubmit(values) {
      const res = await login(values)
      if(res.data.code !== 20000) return this.$toast.fail('登录失败！')
      this.$toast('欢迎登录！')
      window.localStorage.setItem('token', res.data.data)
      window.localStorage.setItem('phone', this.phone)
      this.$router.push('/home')
    },
  },
  created() {},
  mounted() {},
};
</script>

<style lang="less" scoped>
@import "../assets/css/public";

.login {
  height: 100%;
  text-align: center;
  background-image: linear-gradient(to right, @Lcolor, @Rcolor);
  .van-nav-bar {
    background-image: linear-gradient(to right, @Lcolor, @Rcolor);
    /deep/ .van-nav-bar__title {
      color: #fff;
    }
  }
  img {
    width: 5.4rem;
    margin: 30px auto;
  }
  .van-form /deep/ .van-cell{
    background: transparent;
    padding: 10px 0px;
    &::after{
      left: 0;
      right: 0;
    }
  }
  .van-button{margin-top: .6rem;
  }
  .retrieve{margin-top: 10px;display: flex;justify-content: space-between;
    a{color: #fff;}
  }
}
</style>