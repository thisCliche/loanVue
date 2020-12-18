<template>
  <div class="bill">
    <van-nav-bar 
      title="账单"
      :border="false"
      safe-area-inset-top
    ></van-nav-bar>

    <div v-if="flag">
      <bill-list v-for="(item, idx) in bilList" :key="item.id" :billist="item"></bill-list>
    </div>

    <div class="zero" v-else>
      <img src="../../assets/img/zw1.png" alt="">
    </div>
  </div>
</template>

<script>
import BillList from '@/components/Bills.vue'
import {repayment} from '@/api/request.js'
export default {
  name: '',
  data () {
    return {
      bilList: [
        {amount: 1200,date:'2020-10-31',isRepayment: false}
        ,{amount: 1200,date:'2020-10-31',isRepayment: true}
      ]
    }
  },

  components: {
    BillList
  },
  computed: {
    flag() {
      return this.bilList.length
    }
  },
  methods: {},
  created() {},
  mounted() {
    repayment().then(res => {
      console.log(res)
      this.bilList = res.data.data
    })
  },
}
</script>

<style lang="less" scoped>
.bill{
  background: #f5f5f5;
  height: 100%;
  padding-bottom: 55px;
  overflow: auto;
  .zero{
    margin-top: 2.13rem;
    text-align: center;
    img{width: 5.46rem;margin: 0 auto;}
  }
}
</style>