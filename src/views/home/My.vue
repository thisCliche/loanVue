<template>
  <div class="my">
    <van-nav-bar title="我的" :border="false" safe-area-inset-top></van-nav-bar>
    <div class="bg"></div>
    <div class="card">
      <div
        class="first"
        style="border-bottom: 1px solid #ddd; padding-bottom: 0.3rem"
      >
        <img
          src="../../assets/img/avatar.png"
          style="width: 1.04rem; margin-right: 0.27rem"
          alt=""
        />
        <span style="font-size: 0.36rem">{{username}}</span>
      </div>
      <div class="second">
        <div @click="gotoBill(1)">
          <van-icon
            class="iconfont"
            style="background: #6453fe"
            class-prefix="icon"
            name="rili"
          ></van-icon>
          <p>七日待还</p>
        </div>
        <div @click="gotoBill(2)">
          <van-icon
            class="iconfont"
            style="background: #059cff"
            class-prefix="icon"
            name="quanbu"
          ></van-icon>
          <p>全部待还</p>
        </div>
        <div @click="gotoBill(3)">
          <van-icon
            class="iconfont"
            style="background: #477efa"
            class-prefix="icon"
            name="lianluojilu"
          ></van-icon>
          <p>还款记录</p>
        </div>
      </div>
    </div>
    <div class="list" style="margin: 0.78rem 0.72rem 0">
      <van-cell title="银行卡" is-link to="card">
        <template #icon>
          <van-icon class-prefix="icon" name="brankcard" class="iconfont" />
        </template>
      </van-cell>
      <van-cell title="优惠券" is-link to="coupon">
        <template #icon>
          <van-icon class-prefix="icon" name="9" class="iconfont" />
        </template>
      </van-cell>
      <van-cell title="咨询客服" value="400-600-8882">
        <template #icon>
          <van-icon class-prefix="icon" name="zixun" class="iconfont" />
        </template>
      </van-cell>
      <van-cell title="意见反馈" is-link to="feedback">
        <template #icon>
          <van-icon class-prefix="icon" name="yijianfankui" class="iconfont" />
        </template>
      </van-cell>
      <van-cell title="设置" is-link to="set">
        <template #icon>
          <van-icon class-prefix="icon" name="shezhi" class="iconfont" />
        </template>
      </van-cell>
    </div>
  </div>
</template>

<script>
export default {
  name: "",
  data() {
    return {
      username: ''
    };
  },

  components: {},
  computed: {},
  methods: {
    gotoBill(num) {
      this.$router.push({path:'/billdetail',query:{num}})
    }
  },
  created() {},
  mounted() {
    let name = localStorage.getItem('phone')
    name = name.replace(/^(\d{3})\d{4}(\d{4})$/, '$1****$2')
    this.username = name
  },
};
</script>

<style lang="less" scoped>
@import "../../assets/css/public";
.my {
  background: #f5f5f5;
  height: 100%;
  .van-nav-bar {
    background: transparent;
    /deep/ .van-nav-bar__title {
      color: #fff;
    }
  }
  .bg {
    background-image: linear-gradient(to right, @Lcolor, @Rcolor);
    height: 3.15rem;
    width: 100%;
    margin-top: -78px;
  }
  .card {
    border: 0.2rem;
    height: 4.35rem;
    box-shadow: 0px 6px 3px #ddd;
    border-radius: 0.2rem;
    padding: 0.3rem;
    background: #fff;
    margin: -1.4rem 0.24rem 0;
    .second {
      display: flex;
      margin-top: 0.6rem;
      justify-content: space-around;
      .iconfont {
        width: 0.86rem;
        height: 0.86rem;
        border-radius: 50%;
        font-size: 0.4rem;
        text-align: center;
        line-height: 0.84rem;
        margin: 0 auto;
        color: #fff;
        display: block;
      }
      p {
        margin-top: 0.2rem;
      }
    }
  }
  .list {
    .van-cell {
      background-color: transparent;
      /deep/ .van-cell__value span {
        color: #775ffe;
      }
      &:nth-child(1) .iconfont{
         color: #1296db;
      }
      &:nth-child(2) .iconfont{
         color: #6857fe;
      }
      &:nth-child(3) .iconfont{
         color: #f96a2b;
      }
      &:nth-child(4) .iconfont{
         color: #ad80fc;
      }
      &:nth-child(5) .iconfont{
         color: #6693f8;
      }
      .iconfont {
        font-size: 0.4rem;
        margin-right: 0.18rem;
      }
    }
  }
}
</style>