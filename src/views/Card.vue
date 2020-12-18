<template>
  <div class="cards">
    <van-nav-bar
      title="银行卡"
      left-arrow
      safe-area-inset-top
      @click-left="$router.go(-1)"
    ></van-nav-bar>
    <div class="card" v-for="item in bank" :key="item.id" :style="{ background: bankColor[0].nongye1 }">
      <van-icon
        class="iconfont"
        class-prefix="icon"
        name="nongyeyinhang"
        :style="{ color: bankColor[0].nongye }"
      ></van-icon>
      <div class="right">
        <p style="font-size: 0.32rem">中国农业银行</p>
        <p style="font-size: 0.26rem; margin-top: 0.1rem">储蓄卡</p>
        <p style="font-size: 0.36rem; margin-top: 0.3rem">
          {{item.cardNo}}
        </p>
      </div>
    </div>
    <!-- <div class="card" :style="{ background: bankColor[1].xingye1 }">
      <van-icon
        class="iconfont"
        class-prefix="icon"
        name="xingyeyinhang"
        :style="{ color: bankColor[1].xingye }"
      ></van-icon>
      <div class="right">
        <p style="font-size: 0.32rem">兴业银行</p>
        <p style="font-size: 0.26rem; margin-top: 0.1rem">储蓄卡</p>
        <p style="font-size: 0.36rem; margin-top: 0.3rem">
          **** **** **** 5673
        </p>
      </div>
    </div>
    <div class="card" :style="{ background: bankColor[2].zhaoshang1 }">
      <van-icon
        class="iconfont"
        class-prefix="icon"
        name="zhaoshangyinhang"
        :style="{ color: bankColor[2].zhaoshang }"
      ></van-icon>
      <div class="right">
        <p style="font-size: 0.32rem">招商银行</p>
        <p style="font-size: 0.26rem; margin-top: 0.1rem">储蓄卡</p>
        <p style="font-size: 0.36rem; margin-top: 0.3rem">
          **** **** **** 5673
        </p>
      </div>
    </div> -->
    <div style="text-align:center;"><van-button color="linear-gradient(to right,#6c5cec, #2d70f7)" style="width:7.02rem;margin:1.2rem auto 0;" @click="$router.push('/addcard')">+ 添加银行卡</van-button></div>
  </div>
</template>

<script>
import {banklist} from '@/api/request.js'
export default {
  name: "",
  data() {
    return {
      bank:[],
      bankColor: [
        {
          nongye: "#009697",
          nongye1: "#00a999",
        },
        { xingye: "#0a2564", xingye1: "#398ccd" },
        { zhaoshang: "#d50c15", zhaoshang1: "#fd7663" },
      ],
    };
  },

  components: {},
  computed: {},
  methods: {},
  created() {},
  mounted() {
    banklist().then(res => {
      this.bank = res.data.data
      console.log(res.data.data.length)
      if(res.data.data.length) localStorage.setItem('defualtCard', JSON.stringify(res.data.data[0]))
    })
  },
};
</script>

<style lang="less" scoped>
@import "../assets/css/public";
.cards {
  .van-nav-bar {
    background-image: linear-gradient(to right, @Lcolor, @Rcolor);
    /deep/ .van-nav-bar__title {
      color: #fff;
    }
    /deep/ .van-icon {
      color: #fff;
    }
  }
  .card {
    height: 2.46rem;
    border-radius: 0.1rem;
    margin: 0.2rem 0.24rem 0;
    display: flex;
    padding: 0.3rem;
    justify-content: space-around;
    .iconfont {
      display: block;
      width: 0.8rem;
      height: 0.8rem;
      background: #d1e3f3;
      font-size: 0.6rem;
      margin-right: 0.3rem;
      border-radius: 50%;
      text-align: center;
      line-height: 0.8rem;
    }
    .right {
      flex-grow: 1;
      color: #fff;
    }
  }
}
</style>