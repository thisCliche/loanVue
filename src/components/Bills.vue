<template>
  <div>
      <div class="bilList">
        <van-icon class-prefix="icon" class="iconfont" name="purse"></van-icon>
        <div style="flexGrow:1;">
          <div class="first">
            <span style="font-size:.22rem;">借款</span>
            <span style="font-size:.34rem;color:#775ffe;" v-if="flag">已还清</span>
          </div>
          <p style="font-size:.48rem;color:#fe5f5f;line-height:.7rem">{{billist.repaymentNum}}</p>
          <p style="font-size:.24rem">还款时间 <strong>{{billist.repaymentTime}}</strong></p>
        </div>
      </div>
  </div>
</template>

<script>
export default {
  props: {
    billist: Object
  },
  name: '',
  data () {
    return {
    }
  },

  components: {},
  computed: {
     flag() {
       if(this.billist.repaymentNum == 2) return true
       else return false
     }
  },
  methods: {},
  created() {},
  mounted() {},
}
</script>

<style lang="less" scoped>
.bilList{
  margin: 0 .24rem;
  background: #fff;
  border-radius: .2rem;
  height: 2.08rem;
  display: flex;
  justify-content: space-between;
  padding: .3rem;
  box-shadow: 3px 3px 30px #ddd;
  align-items: center;
  margin-top: .3rem;
  .iconfont{
    background: #775ffe;
    color: #fff;
    height: .72rem;    
    border-radius: 50%;
    width: .72rem;
    text-align: center;
    line-height: .72rem;
    font-size: 0.4rem;
    margin-right: .28rem;
  }
  .first{
    display: flex;
    justify-content: space-between;
  }
}
</style>