<template>
  <div class="loan">
    <van-nav-bar
      title="资讯详情"
      left-arrow
      safe-area-inset-top
      :border="false"
      @click-left="$router.go(-1)"
    >
    </van-nav-bar>
    <img class="first" src="../assets/img/jyq.png" alt="" />
    <van-button round @click="goLoan">立即了解</van-button>
    <img class="last" src="../assets/img/bg2.png" alt="">
  </div>
</template>

<script>
export default {
  name: '',
  data () {
    return {
    }
  },

  components: {},
  computed: {},
  methods: {
    goLoan() {
      this.$router.push('/loandetail2')
    }
  },
  created() {},
  mounted() {},
}
</script>

<style lang="less" scoped>
@import "../assets/css/public";
.loan{
  .van-nav-bar{background: transparent;
  /deep/ .van-icon{
    color: #fff;
  }
  /deep/ .van-nav-bar__title{
    color: #fff;
  }
  }
  .van-button{width: 3.39rem;
  z-index: 9;
  /deep/ .van-button__text{
    font-size: .42rem;
    color: #9775ff;
  }
  }
  text-align: center;
  height: 100%;
   background-image: linear-gradient(to right, @Lcolor, @Rcolor);
   .first{margin: 1.2rem auto .4rem; width: 100%;}
   .last{position: absolute;left: 0;bottom: 0;width: 100%;z-index: 0;}
}
</style>