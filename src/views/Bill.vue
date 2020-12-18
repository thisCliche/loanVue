<template>
  <div class="bill">
    <van-nav-bar 
      title="账单"
      :border="false"
    ></van-nav-bar>
    <div class="bilLists" v-if="flag">
      <div class="bilList">
        <van-icon class-prefix="icon" class="iconfont" name="purse"></van-icon>
      </div>
    </div>
    <div class="zero" v-else>
      <img src="../assets/img/zw1.png" alt="">
    </div>
  </div>
</template>

<script>
export default {
  name: '',
  data () {
    return {
      bilList: [
        {amount: 1200,date:'2020-10-31'}
        ,{amount: 1200,date:'2020-10-31'}
      ]
    }
  },

  components: {},
  computed: {
    flag() {
      return this.bilList.length
    }
  },
  methods: {},
  created() {},
  mounted() {},
}
</script>

<style lang="less" scoped>
</style>