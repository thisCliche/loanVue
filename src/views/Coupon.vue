<template>
  <div class="coupons">
    <van-nav-bar
      title="优惠券"
      left-arrow
      safe-area-inset-top
      @click-left="$router.go(-1)"
    ></van-nav-bar>
    <div style="margin-top:.2rem;">
      <div class="coupon coupon1">
        <div class="first">
          <p style="font-size:.84rem;">50</p>
        <div class="right">
          <p style="font-size:.3rem;"><span>元</span><span>全场通用</span></p>
          <p style="font-size:.22rem;margin-top:.2rem;"><span>满500元使用</span><span>2020.05.11-2020.08.11</span></p>
        </div>
        </div>
        <p style="color:#ff4961;font-size:.32rem;text-align:center;margin-top:.5rem;">立即使用</p>
      </div>
      <div class="coupon coupon2">
        <div class="first">
          <p style="font-size:.84rem;">20</p>
        <div class="right">
          <p style="font-size:.3rem;"><span>元</span><span>全场通用</span></p>
          <p style="font-size:.22rem;margin-top:.2rem;"><span>满300元使用</span><span>2020.05.11-2020.08.11</span></p>
        </div>
        </div>
        <p style="color:#ff4961;font-size:.32rem;text-align:center;margin-top:.5rem;">立即使用</p>
      </div>
    </div>
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
  methods: {},
  created() {},
  mounted() {},
}
</script>

<style lang="less" scoped>
@import "../assets/css/public";
.coupons {
  background: #f5f5f5;
  height: 100%;
  .van-nav-bar {
    background-image: linear-gradient(to right, @Lcolor, @Rcolor);
    /deep/ .van-nav-bar__title {
      color: #fff;
    }
    /deep/ .van-icon {
      color: #fff;
    }
  }
  .coupon1{
    background:url(../assets/img/coupon1.png);
  }
  .coupon2{
    background:url(../assets/img/coupon2.png);
  }
  .coupon3{
    background:url(../assets/img/coupon3.png);
  }
  .coupon4{
    background:url(../assets/img/coupon4.png);
  }
  .coupon{
    
    width: 7.16rem;
    height: 2.39rem;
    background-size: 7.16rem 2.39rem;
    margin: 0.2rem auto 0;
    color: #fff;
    padding: .4rem .5rem 0;
    .first{
      display: flex;
      justify-content: space-around;
      .right{
        flex-grow: 1;
        margin-left: .2rem;
        p{
          display: flex;
          justify-content: space-between;
        }
      }
    }
  }
}
</style>