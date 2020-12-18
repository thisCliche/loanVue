<template>
  <div class="home">
    <van-nav-bar
      title="首页"
      :border="false"
      safe-area-inset-top
    ></van-nav-bar>
    <div class="card">
      <p class="first">最高可借额度（元）</p>
      <p class="second">200,000</p>
      <p class="third"><span>最高额度：200,000</span><span>日利率：0.01%<i>起</i></span></p>
      <van-button
        @click="goLoan"
        round
        color="linear-gradient(to right, #ca97ff, #5c4dfe)"
      >领取额度</van-button>
    </div>
    <div class="news">
      <div class="tit">
        热门资讯
      </div>
      <div class="newsList">
        <van-image @click="goToDetail" :src="require('../../assets/img/zx.png')"></van-image>
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
  methods: {
    goLoan() {
      this.$router.push('/loan')
    },
    goToDetail() {
      this.$router.push('/loanDetail2')
    }
  },
  created() {},
  mounted() {},
}
</script>

<style lang="less" scoped>
.home{
  padding-bottom: .5rem;
    overflow: auto;
    height: 100%;
      background: #f5f5f5 url(../../assets/img/bg3.png) top center no-repeat;
      background-size: 100%;
      .van-nav-bar{
        background: transparent;
        /deep/ .van-nav-bar__title{
          color: #fff;
        }

      }
      .card{
        margin: 3.4rem .24rem 0;
        height: 4.75rem;
        border-radius: .1rem;
        box-shadow: 0px 9px 10px 0px #c1c1c1;
        text-align: center;
        background: #fff;
        .first{
          color: #555555;
          font-size: .32rem;
          padding-top: .46rem;
        }
        .second{
          font-size: 1.1rem;
          color: #555;
          margin-top: 0.58rem;
        }
        .third{
          font-size: .28rem;
          color: #919191;
          display: flex;
          justify-content: space-around;
          margin-top: .35rem;
        }
        .van-button{
          width: 3.77rem;
          margin-top: .44rem;
        }
      }
      .news{
        .tit{
          color: #333333;
          font-size: .38rem;
          line-height: .38rem;
          margin-left: .24rem;
          margin-top: .3rem;
        }
        .newsList{
          margin: .3rem .24rem;
        }
      }
    }
</style>