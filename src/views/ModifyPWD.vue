<template>
  <div class="login">
    <van-nav-bar
      title="修改密码"
      left-arrow
      @click-left="$router.go(-1)"
      :safe-area-inset-top="true"
      :border="false"
    />
    <img src="../assets/img/loginBack.png" alt="" srcset="" />

    <van-form @submit="onSubmit">
      <div style="margin: 0 1.3rem">
        <!-- <van-field
          v-model="form.phone"
          name="phone"
          placeholder="用输入用户名"
          left-icon="yonghu"
          :rules="[{ required: true, message: '请填写用户名' }]"
        >
          <van-icon
            class="iconfont"
            class-prefix="icon"
            color="#fff"
            slot="left-icon"
            name="yonghu"
          ></van-icon>
        </van-field> -->
        <van-field
          v-model="form.password"
          type="password"
          name="password"
          placeholder="请输入密码"
          :rules="[{ required: true, message: '请输入密码' }]"
        >
          <van-icon
            class="iconfont"
            class-prefix="icon"
            slot="left-icon"
            color="#fff"
            name="mima1"
          ></van-icon>
        </van-field>

        <van-field
          v-model="form.newPassword"
          type="password"
          name="newPassword"
          placeholder="请输入新密码"
          :rules="[{ required: true, message: '请输入新密码' }]"
        >
          <van-icon
            class="iconfont"
            class-prefix="icon"
            slot="left-icon"
            color="#fff"
            name="mima"
          ></van-icon>
        </van-field>
        <van-button
          style="margin-top: 0.6rem"
          round
          block
          type="info"
          native-type="submit"
          color="linear-gradient(to right,#6c5cec, #2d70f7)"
        >
          修改
        </van-button>
      </div>
    </van-form>
  </div>
</template>

<script>
import { modify, sendsms } from "@/api/request.js";
export default {
  name: "",
  data() {
    return {
      form: {
        // phone: "",
        password: "",
        newPassword: "",
      },
      isdisable: false,
      mark: "发送验证码",
    };
  },

  components: {},
  computed: {},
  methods: {
    onSubmit(values) {
      console.log("submit", values);
      modify(this.form).then(res=>{
        if(res.data.code != 20000) return this.$toast("请重试！");
        localStorage.removeItem('token')
        this.$router.push('/login')
        this.$toast("密码修改成功");
      })
    },
    send() {
      if (this.form.phone == "") return this.$toast("请输入手机号");
      sendsms({ phone: this.form.phone }).then((res) => {
        if (res.data.code != 20000) return this.$toast("请重试！");
        this.isdisable = true;
        this.interval(60);
      });
    },
    interval(count) {
      if (count == 0) {
        return (this.isdisable = false);
      }
      this.mark = "请" + count + "s后重试";
      count--;
      setTimeout(() => {
        this.interval(count);
      }, 1000);
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
    /deep/ .van-icon {
      color: #fff;
    }
  }
  img {
    width: 5.4rem;
    margin: 30px auto;
  }
  .van-form /deep/ .van-cell {
    background: transparent;
    padding: 10px 0px;
    &::after {
      left: 0;
      right: 0;
    }
  }
}
</style>