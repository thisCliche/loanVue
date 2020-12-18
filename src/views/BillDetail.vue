<template>
  <div class="paymentHistory">
    <van-nav-bar
      :title="title"
      left-arrow
      safe-area-inset-top
      @click-left="$router.go(-1)"
    ></van-nav-bar>
    <div v-if="flag">
      <bill-list
        v-for="(item, idx) in bilList"
        :key="idx"
        :billist="item"
      ></bill-list>
    </div>
    <div class="zero" v-else>
      <img src="../assets/img/zw.png" alt="" />
    </div>
  </div>
</template>

<script>
import BillList from "@/components/Bills.vue";
import { repayment, seven } from "@/api/request.js";
export default {
  name: "",
  data() {
    return {
      bilList: [],
      type: "",
    };
  },

  components: {
    BillList,
  },
  computed: {
    flag() {
      return this.bilList.length;
    },
    title() {
      switch (this.type) {
        case "1":
          return "七日待还";
        case "2":
          return "全部待还";
        case "3":
          return "还款记录";
      }
    },
  },
  methods: {},
  created() {
    this.type = this.$route.query.num;
    if(this.$route.query.num == 1) {
      seven().then(res => {
        this.bilList = res.data.data
      })
    }
    if (this.$route.query.num == 3) {
      repayment().then((res) => {
        let bilList = []
        res.data.data.forEach((item) => {
          if(item.repaymentStatus == 2){
            bilList.push(item)
          }
        });
        this.bilList = bilList
      });
    }
    
    else if(this.$route.query.num == 2) {
      repayment().then((res) => {
        let bilList = []
        res.data.data.forEach((item) => {
          if(item.repaymentStatus == 1){
            bilList.push(item)
          }
        });
        this.bilList = bilList
      });
    }
  },
  mounted() {},
};
</script>

<style lang="less" scoped>
@import "../assets/css/public";
.paymentHistory {
  .van-nav-bar {
    background-image: linear-gradient(to right, @Lcolor, @Rcolor);
    /deep/ .van-nav-bar__title {
      color: #fff;
    }
    /deep/ .van-icon {
      color: #fff;
    }
  }
  .zero {
    margin-top: 2.13rem;
    text-align: center;
    img {
      width: 2.48rem;
      margin: 0 auto;
    }
  }
}
</style>