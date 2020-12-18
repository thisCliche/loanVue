<template>
  <div class="loan">
    <van-nav-bar
      left-arrow
      @click-left="$router.go(-1)"
      title="贷款"
    >
    </van-nav-bar>
    <div class="bg">
    </div>
    <div class="card">
      <p class="first">最高可借额度（元）</p>
      <p class="second">200,000</p>
      <p class="last">无需抵押 一次授权 额度循环使用</p>
    </div>
    <van-form @submit="onSubmit">
  <van-field
    v-model="username"
    name="username"
    placeholder="请输入手机号"
    :rules="[{ required: true, message: '请输入手机号' }]"
  />
  <van-field
  v-model="sms"
  center
  placeholder="请输入短信验证码"
  :rules="[{ required: true, message: '请输入短信验证码' }]"
>
  <template #button>
    <van-button color="linear-gradient(to right,#5e4ffe, #ca98ff)" size="mini" type="primary">发送验证码</van-button>
  </template>
</van-field>
  <van-field
    v-model="password"
    type="password"
    name="password"
    placeholder="设置密码(6-20位字母、数组组合"
    :rules="[{ required: true, message: '请填写密码' },{
      pattern: /^(?![0-9]+$)(?![a-zA-Z]+$)[0-9A-Za-z]{6,}$/ ,message:'请填写大于6位密码'
    }]"
  />
  <div style="margin: 16px;">
    <van-button class="submit" color="linear-gradient(to right,#5e4ffe, #ca98ff)" round block type="info" native-type="submit">
      注册并查看额度
    </van-button>
  </div>
</van-form>
  </div>
</template>

<script>
export default {
  name: '',
  data () {
    return {
      username: '',
      sms:'',
      password: '',
    }
  },

  components: {},
  computed: {},
  methods: {
    onSubmit(values) {
      console.log('submit', values);
    },
  },
  created() {},
  mounted() {},
}
</script>

<style lang="less" scoped>
@import "../assets/css/public";
.loan{
  background: #f5f5f5;
  height: 100%;
  .bg{
    background-image: linear-gradient(to right, @Lcolor, @Rcolor);
    height: 3.37rem;
    width: 100%;
  }
  .card{
    margin: -2.3rem .24rem 0;
        height: 3.54rem;
        border-radius: .1rem;
        box-shadow: 0px 9px 10px 0px #c1c1c1;
        text-align: center;
        background: #fff;
        .first{color: #ffb41c;font-size: .36rem;padding: .42rem 0 .56rem;}
        .second{color: #6453fe;font-size: 1.1rem;}
        .last{color: #5f4ffe;font-size: .28rem;margin-top: .36rem;}
  }
  .van-form{margin: 0.6rem .7rem 0;
  /deep/ .van-cell{
    background-color: transparent;
    &::after{
      border-bottom: 1px solid #4491fc;
    }
    }
    .submit {
      font-size: .32rem;
      width: 5.32rem;
    }
  }
}

</style>